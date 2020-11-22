import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useAjax (){

  const [config, setConfig] = useState({});
  const [error, setError] = useState(null);
  const [response, setResponse] = useState({});
  
  useEffect(() => {
    async function fetchData() {
      if (!config) return; 

      try {
        const {data} = await axios(config);
        setResponse(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [config]);

  return [setConfig, response, error];
}
