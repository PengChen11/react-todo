import {useState} from 'react';

export default function useForm(callback){
  const [values, setValues] = useState({difficulty:1});

  function handleSubmit (e) {
    e.preventDefault();
    e.target.reset();
    callback && callback(values);
    setValues({difficulty:1});
  }

  function handleChange (e){
    e.persist();
    setValues({...values,[e.target.name]: e.target.value});
  }

  return [handleSubmit, handleChange, values];
}