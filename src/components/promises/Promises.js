import React from 'react'

const task = new Promise((resolve,reject)=>{
    let condicion =true;
    
    if(condicion){
        //setTimeOut(()=>{lo que sea, ejemplo resolve('200 ok')}, 3000)
        resolve('200 ok')
    }else{
        reject("400 not found")
    }
})


function Promises() {
    //setTimeOut(()=>{lo que sea}, 3000)
    task
    .then(respuesta => {
        /* throw new Error ("esto es un error") */
        console.log(respuesta)}/* ,
    (error) => console.log(error */)
    .catch(error => console.log(error))
    .finally(()=>console.log("siempre al ultimo"))
  return (
    <div>Promises
        {/* {[1,2,3,4].map((numero)=><li key={numero}>{numero}</li>)} */}
    </div>
    
  )
}

export default Promises