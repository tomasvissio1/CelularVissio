import React, { useEffect, useState } from 'react'

function Movimiento() {
    /* const [height,setHeight] = useState(0)
    const [width, setWidth]=useState(0)
        useEffect(()=>{
            window.addEventListener('mousemove',function moviendo(e){
                console.log(e);
                setHeight(e.clientX)
                setWidth(e.clientY)


                return()=>{
                    console.log("desmontando")
                    window.removeEventListener('resize',moviendo)
                }
            })
            
        })
    
   
        return (
            <div>
                {height}X{width}
            </div>
        ) */

        const hola =(event)=>{
            if (event.key=='a' || event.key=='e' || event.key=='i' || event.key=='o' || event.key=='u') {
                event.preventDefault();
            }
        }
        return(
            <div>
                <input type="text" onKeyDown={hola}/>
            </div>
        )
}

export default Movimiento