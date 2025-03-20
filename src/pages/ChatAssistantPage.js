// src/pages/ChatAssistantPage.js
import React, { useState } from 'react';
import '../styles/chatAssistantPage.css';

// Optional: If you have a separate ChatAssistant component that has its own title,
// pass a prop like hideTitle={true}, or hide it via CSS. We'll show a direct approach here.

const ChatAssistantPage = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! How can I help you today?' },
    { role: 'user', text: 'I want to get fit!' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;
    // Add the user's message to the list
    setMessages([...messages, { role: 'user', text: inputValue }]);
    setInputValue('');
    // Simulate an AI response (you'd call your AI backend here)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Sure! Let’s get started with a workout plan...' },
      ]);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-assistant-page">
      <div className="chat-container">
        {/* Scrollable area for messages */}
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.role === 'assistant' ? 'assistant' : 'user'}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        {/* Input bar at the bottom */}
        <div className="chat-input-bar">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistantPage;