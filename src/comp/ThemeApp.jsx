import { createContext, useContext, useState } from 'react';
import './ThemeApp.css'
const ThemeContext = createContext('light');

export default function ThemeApp() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <Button onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}>
        Change theme to {theme === 'dark' ? 'light' : 'dark'} 
      </Button>
    </>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section style={{padding:'20px', marginBottom:'20px', width:'400px'}} className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} style = {{fontSize:'20px', padding:'5px', marginRight:'10px'}} 
            onClick={onClick}>
      {children}
    </button>
  );
}
