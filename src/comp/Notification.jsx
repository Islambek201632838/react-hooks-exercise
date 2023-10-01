import { useState, useEffect } from 'react';

function Notification() {
  const [messages, setMessages] = useState([]); //store all messages
  const [lastMessage, setLastMessage] = useState(''); //store last message
  const [hidden, setHidden] = useState(false);

  const handleMessageChange = (e) => {
    setLastMessage(e.target.value); 
  }

  const handleSubmit = () => {
    setMessages(prevMessages => [...prevMessages, lastMessage]); //add last message to messages storage
    setLastMessage('');
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessages(prevMessages => prevMessages.slice(1)); // Removes the first message after 4sec
    }, 4000);

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <>
      <div onClick={()=>{setHidden(!hidden)}}
           style={{textAlign: 'start', marginBottom:'10px', cursor:'pointer'}} 
            > {(hidden) ? 'Показать Уведомления':'Скрыть Уведомления' }
        </div>
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{ display: (hidden) ? 'none' : '',
                   backgroundColor: 'rgb(219, 217, 217)', padding: '20px 10px 40px 10px',
                   fontSize: '30px', marginBottom:'5px', borderRadius:'5px', textAlign:'start' }}
        >
          {msg}
        </div>
      ))}
      <input
        type="text"
        style={{ width: '500px', padding: '20px 10px 100px 10px', fontSize: '30px', 
                outline: 'none', borderRadius:'5px' }}
        placeholder='Новое сообщение'
        onChange={handleMessageChange}
        value={lastMessage}
      />
      <button onClick={handleSubmit}
              style={{padding:'10px', fontSize:'30px', color:'black', 
                      backgroundColor:'rgb(205, 203, 203)', marginLeft:'10px'}}
      >Отправить</button>
    </>
  );
}

export default Notification;
