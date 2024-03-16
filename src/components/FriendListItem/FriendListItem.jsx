import css from "./FriendListItem.module.css";


const FriendListItem = ({ avatar, name, isOnline }) => {
 
     return (
   <div className={css.friendItem}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.friendName}>{name}</p>
  { isOnline?<p className={css.isOnline}>Online</p>:<p className={css.isOffline}>Offline</p>}
</div>
  )
}

export default FriendListItem;