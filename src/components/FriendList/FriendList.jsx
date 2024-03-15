import FriendListItem from "../FriendListItem/FriendListItem";
import friends from "../../friends.json";
import css from "./FriendList.module.css";

const FriendList = () => {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => {
      return  <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      })}
      </ul>
  )
}

export default FriendList;