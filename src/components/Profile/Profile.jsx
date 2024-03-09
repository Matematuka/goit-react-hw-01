import PropTypes from 'prop-types';
import css from "./Profile.module.css";

const Profile = ({name, tag, image, location, stats}) => {
  return (
<div className={css.profileBox}>
  <div className={css.profileImgBox}>
    <img className={css.profileImg}
      src={image}
      alt="User avatar"
    />
    <h2 className={css.userName}>{name}</h2>
    <p className={css.userinfo}>@{tag}</p>
    <p className={css.userinfo}>{location}</p>
  </div>

  <ul className={css.statsList}>
    <li className={css.statsitem}>
      <span className={css.statsText}>Followers</span>
      <span className={css.statsNum}>{stats.followers}</span>
    </li>
    <li className={css.statsitem}>
      <span className={css.statsText}>Views</span>
      <span className={css.statsNum}>{stats.views}</span>
    </li>
    <li className={css.statsitem}>
      <span className={css.statsText}>Likes</span>
        <span className={css.statsNum}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

Profile.propTypes = {
name: PropTypes.string.isRequired,
image: PropTypes.string,
tag: PropTypes.string.isRequired,
location: PropTypes.string.isRequired,
stats: PropTypes.object.isRequired, 
};

export default Profile;