import React from "react";
import ChatbotIcon from "./components/ChatbotIcon";

function App() {
  return (
    <div className="container">
      {/* ChatBot Header */}
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>
      </div>
      {/* Chatbot Body */}
      <div className="chatbot-body">
        <div className="message bot-message">
          <ChatbotIcon />
          <p className="message-text">
            Hey there 👋 <br />
            How can I help you today ?
          </p>
        </div>
        <div className="message user-message">
          <ChatbotIcon />
          <p className="message-text">
            Hey there 👋 <br />
            How can I help you today ?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
