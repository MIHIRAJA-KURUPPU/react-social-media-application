import "./online.css";

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
    <div className="rightbarFriendImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="profile" />
        <span className="rightbarOnline"></span>  {/* Green circle */}
    </div>
    <span className="rightbarUsername">{user.username}</span>
</li>
  )
}
