import css from "./FriendListItem.module.css";


const FriendListItem = ({ avatar, name, isOnline }) => {
  if (isOnline) {
     return (
    <div className={css.friendItem}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.friendName}>{name}</p>
      <p className={css.isOnline}>{isOnline?`Online`:`Offline`}</p>
</div>
  )
  } else {
     return (
    <div className={css.friendItem}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.friendName}>{name}</p>
      <p className={css.isOffline}>{isOnline?`Online`:`Offline`}</p>
</div>
  )
  }
 
}

export default FriendListItem;