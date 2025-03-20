import React, { useState } from 'react';

const ChatAssistant = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate an AI response
    setResponse("This is a dummy AI response. More features coming soon!");
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Chat with AI Assistant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ask a fitness question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          style={{ width: '300px', marginRight: '10px' }}
        />
        <button type="submit">Send</button>
      </form>
      {response && <p>AI Response: {response}</p>}
    </div>
  );
};

export default ChatAssistant;
