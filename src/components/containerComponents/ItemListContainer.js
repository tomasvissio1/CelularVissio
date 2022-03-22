import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

function IntemListContainer(greeting) {
  const [numero, setNumero] = useState(0)
  const [bool, setBool] = useState(true);


  useEffect(()=>{     //se ejecuta siempre
    console.log("llamada a api 1");
    return ()=>{
      console.log("remover evento")
    }
  })


  useEffect(()=>{     //se ejecuta una vez
    console.log("llamada a api 2");
  },[])


  useEffect(()=>{     //se ejecuta cuando cambie bool
    alert("solo cuando cambie bool")
  },[bool])
  let datos = Date();

  const sumar=()=>{
    setNumero(numero+1);
    console.log(numero);
  }

  console.log("algo mas")
  return (
    <div>
      <h1 style={{ "color": "black" }}>{greeting.saludo}</h1>
      <button onClick={sumar} style={{"margin":"0"}}>click </button>
      <button onClick={()=>setBool(!bool)} style={{"margin":"0"}}>click </button>
      <h2>{numero}</h2>
      <h2>{datos}</h2>
      
    </div>
  )
  
}

export default IntemListContainer