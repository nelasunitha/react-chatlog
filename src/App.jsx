import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import DATA from './data/messages.json';

// const
const App = () => {
  const [chatData, setChatData] = useState(DATA);

  const handleLikeClick = (id) => {
    setChatData((prevChatData) => {
      const updatedChat = prevChatData.map((chat) => {
        if (chat.id === id) {
          const isNowLiked = !chat.liked; // Toggle the like status
          return { ...chat, liked: isNowLiked };
        }
        return chat;
      });
      return updatedChat;
    });
  };
  const likedCount = chatData.filter((chat) => chat.liked).length;

  return (
    <div id='App'>
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <span className='widget' id='heartWidget'>
            {likedCount} ❤️s
          </span>
        </section>
      </header>
      <main>
        <ChatLog entries={DATA} onclickChat={handleLikeClick} />
      </main>
    </div>
  );
};

export default App;
