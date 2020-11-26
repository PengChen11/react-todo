import {useState} from 'react';

export default function useForm(callback){
  const [values, setValues] = useState({});

  function handleSubmit (e) {
    e.preventDefault();
    e.target.reset();
    callback && callback(values);
    setValues({});
  }

  function handleChange (e){
    e.persist();

    if (e.target.name === 'maxNum') {
      setValues({...values,[e.target.name]: Number(e.target.value)});
      return;
    }

    if (e.target.name === 'showCompleted') {
      console.log('I am checked');
      console.log(e.target.value);
      setValues({...values,[e.target.name]: e.target.value==='yes'? true:false});
      return;
    }
    
    setValues({...values,[e.target.name]: e.target.value});
  }

  return [handleSubmit, handleChange, values];
}