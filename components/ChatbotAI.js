import React from 'react';
import styles from './ChatbotAI.module.css';

const ChatbotAI = () => {
    return (
        <div className={styles.chatbotContainer}>
  <a 
    href="https://api.whatsapp.com/send/?phone=212634334679&text=Hello%2C+I%27m+interested+in+your+services&type=phone_number&app_absent=0" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img
      src="/whatsap.png"
      alt="Chatbot"
      className={styles.chatbotImage}
    />
  </a>
</div>
    );
};

export default ChatbotAI;
