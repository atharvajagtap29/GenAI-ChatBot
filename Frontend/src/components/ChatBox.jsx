import { useState } from 'react';
import styles from './ChatBox.module.css';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim() === '') return;
    
        // Add user message to chat
        setMessages([...messages, { text: input, sender: 'user' }]);
    
        // Call API to get the bot's response
        try {
            const response = await fetch('http://127.0.0.1:8080/api/get-gemini-response', {
                method: 'POST', // Use POST method
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: input }), // Send the prompt in the body
            });
    
            const data = await response.json();
            
            if (response.ok) {
                // Add bot response to chat
                setMessages(prevMessages => [...prevMessages, { text: data.data, sender: 'bot' }]);
            } else {
                setMessages(prevMessages => [...prevMessages, { text: 'Error: ' + data.message, sender: 'bot' }]);
            }
        } catch (error) {
            setMessages(prevMessages => [...prevMessages, { text: 'Error: Unable to get response.', sender: 'bot' }]);
        }
    
        setInput('');
    };
    

    return (
        <div className={styles.ChatBox}>
            <div className={styles.ChatArea}>
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender === 'user' ? styles.UserMessage : styles.BotMessage}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className={styles.InputArea}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className={styles.Input}
                />
                <button onClick={handleSend} className={styles.SendButton}>Send</button>
            </div>
        </div>
    );
};

export default ChatBox;
