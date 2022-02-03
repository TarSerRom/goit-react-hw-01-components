import PropTypes from 'prop-types';
import './FriendListStyles.css';

export default function FriendsListItem({ isOnline, src, name }) {
  return (
    <li className="friend_item">
      <span className="status">{isOnline ? '🟢' : '🔴'}</span>
      <img className="friend_avatar" src={src} alt="User avatar" width="48" />
      <p className="friend_name">{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  src: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
