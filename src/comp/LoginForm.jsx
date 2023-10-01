import './loginForm.css'
import { useState } from 'react'


function LoginForm() {

const [username, setUsername] = useState('');
let handleUsername = (e) => {
    setUsername(e.target.value);
    }

let handleButtonClick = () => {
        console.log(`Привет, ${username}`);
    }

    return (
      <>
        <div className='container'>
            <h1 style={{color: 'white'}}>Аутенфикация</h1>
            <input className='username' 
                   type="text" 
                   onChange={e =>handleUsername(e)}
                   value={username}
                   placeholder='username'
                   />
            <input className='password' 
                   type="text" 
                   placeholder='password' />

            <button className='button'
                    onClick={handleButtonClick}
                    
                            >Войти</button>
            
        </div>
      </>
    )
  }
  
  export default LoginForm
  