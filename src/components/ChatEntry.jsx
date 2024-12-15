import './ChatEntry.css';
import './TimeStamp';
import PropTypes from 'prop-types';
import { useState } from 'react';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, body, sender, timeStamp, liked, onclickChat }) => {
  // not using props as need to destructure and forward the onclickChat function properly.
  const [isLiked, setIsLiked] = useState(liked);

  const onLikeClick = () => {
    // Toggle the like state
    setIsLiked(!isLiked);
    onclickChat(id);
    //we are passing these states to ChatLog ->App.jsx
  };
  return sender === 'Vladimir'? (
    <div className='chat-entry local'>
      <h2 className='entry-name'>{sender}</h2>
      <section className='entry-bubble'>
        <p>{body}</p>
        <p className='entry-time'>
          <TimeStamp time={timeStamp} />
        </p>
        <button className='like' onClick={onLikeClick}>
          {isLiked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  ) : (
    <div className='chat-entry remote'>
      <h2 className='entry-name'>{sender}</h2>
      <section className='entry-bubble'>
        <p>{body}</p>
        <p className='entry-time'>
          <TimeStamp time={timeStamp} />
        </p>
        <button className='like' onClick={onLikeClick}>
          {isLiked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
    //
  );
};
ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onclickChat: PropTypes.func.isRequired,
  // appending onClickChat as a Prop
};

export default ChatEntry;
