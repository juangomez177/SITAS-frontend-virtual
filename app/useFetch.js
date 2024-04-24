import { resolve } from 'path';
import { useEffect, useState } from 'react';

export function useFetch(){

    const [data, setData] = useState(null);
    useEffect(()=>{
       fetch("http://localhost:8080/api/aeropuertos/listar",{mode:'no-cors'})
        .then(response =>{return response.text()}).then((data)=>{resolve(data ? JSON.parse(data) : {})});
      
      },[])
      
    return {data};
}