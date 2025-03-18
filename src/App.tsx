import React, { useState } from 'react';
import ChatInput from './components/ChatInput';
import ChatWindow from './components/ChatWindow';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="chat-container">
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded mb-4 focus:outline-none"
        >
          Toggle Dark Mode
        </button>
        <ChatWindow />
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
