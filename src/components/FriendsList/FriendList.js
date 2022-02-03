import FriendsListItem from './FriendListItem';
import PropTypes from 'prop-types';

function FriendsList({ items }) {
  return (
    <ul className="friend-list">
      {items.map(({avatar,name,isOnline,id}) => (
        <FriendsListItem
            key={id}
            src={avatar}
            name={name}
            isOnline={isOnline}
          />
      ))
      }
    </ul>
  )
}

FriendsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,
  }))
}

export default FriendsList;