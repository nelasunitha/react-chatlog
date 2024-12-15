import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ( props) => {
  const {entries, onclickChat} = props
  const chatComponents = props.entries.map((chat, i) => {
    return (
      <ChatEntry
        id ={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
        onclickChat={onclickChat}
        key ={i}
      />
    );
  });
  return (
    <div>{chatComponents}</div>
  )
};

ChatLog.propTypes = {
  // Fill with correct proptypes
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      sender: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onclickChat: PropTypes.func.isRequired
};

export default ChatLog;
