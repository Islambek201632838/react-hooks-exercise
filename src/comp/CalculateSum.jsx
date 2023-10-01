import { useMemo, useState } from 'react'


function CalculateSum() {
    const [num1, setNum1] = useState(''),
          [num2, setNum2] = useState('');

    
    const handleNum1 = e => { 
        let value = e.target.value;
        const number  = value.replace(/[^\d]/g, '');
        setNum1(number); 
    }

    const handleNum2 = e => { 
        let value = e.target.value;
        const number  = value.replace(/[^\d]/g, '');
        setNum2(number); 
    }

    const total = useMemo(()=>{
        if(num1 === '' || num2 === '') {
            return '';
        }
        let total = +num1 + +num2;
        return total;  
   }, [num1, num2]); 



    return (
      <> 
        <input type="text"
               style={{width:'100px', height:'50px', outline:'none',
                       marginRight:'20px', marginLeft:'20px',
                       fontSize:'30px', textAlign:'center'}} 
               onChange={(e)=>handleNum1(e)}
               value = {num1} />
        + 
        <input type="text" 
               style={{width:'100px', height:'50px', outline:'none',
                       marginRight:'20px', marginLeft:'20px',
                       fontSize:'30px', textAlign:'center'}} 
               onChange={(e)=>handleNum2(e)}
               value = {num2}  />
        =
        
        <span style={{marginLeft:'20px', fontSize:'30px'}}>{total}</span>
       
      </>
    )
  }
  
  export default CalculateSum
  