import React, { useState } from 'react';
import { sendMessage, retrieveInformation, getModelContext } from '../services/mistralApi';

const ChatInput: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    try {
      const context = await getModelContext();
      const retrievedInfo = await retrieveInformation(input);
      const data = await sendMessage(`${input} ${retrievedInfo} ${context}`);
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
      {response && <div className="response">{response}</div>}
    </div>
  );
};

export default ChatInput;
