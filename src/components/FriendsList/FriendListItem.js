import PropTypes from 'prop-types';

export default function FriendsListItem({isOnline,src,name}) {
  return <li className="item">
    <span className="status">{isOnline ? '🟢' : '🔴'}</span>
  <img className="avatar" src={src} alt="User avatar" width="48" />
    <p className="name">{ name}</p>
</li>
}

FriendsListItem.propTypes = {
  src: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}