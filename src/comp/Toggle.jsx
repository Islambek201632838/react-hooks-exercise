import { useState } from 'react'


function Toggle() {

const [toggle, setToggle] = useState(true);
let text = (toggle) ? 'Включен' : 'Выключен';
let color = (toggle) ? 'green' : 'red';

    return (
      <>
        <h1 style={{fontSize:'30px', color:`${color}`}}>{text}</h1>
        <button style={{padding:'10px', fontSize:'30px', outline:'none',
                        backgroundColor:'blueviolet' , color:'white'}} 
                onClick={() => setToggle(!toggle)}>Переключить</button>
      </>
    )
  }
  
  export default Toggle
  