import React from 'react';

const ChatBot = () => {
  return (
    <iframe
      src="https://web.powerva.microsoft.com/environments/Default-ee903dcb-2b77-4da5-be02-c45235783dad/bots/cr19a_1/webchat?__version__=2"
      frameBorder="0"
      style={{ width: '100%', height: '400px' }} // 可以根据需要调整宽度和高度
      title="Chatbot"
    ></iframe>
  );
};

export default ChatBot;
