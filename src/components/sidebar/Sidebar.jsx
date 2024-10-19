import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import HelpOutline from '@mui/icons-material/HelpOutline';
import WorkOutline from '@mui/icons-material/WorkOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SchoolIcon from '@mui/icons-material/School';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupIcon from '@mui/icons-material/Group';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ChatIcon from '@mui/icons-material/Chat';


export default function Sidebar() {
    return(
        <div className ="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeedIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <ChatIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleFilledIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <GroupIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <BookmarkIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutline className="sidebarIcon"/>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <EventNoteIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <SchoolIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
                </li>

            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg"/>
                    <span className="sidebarFriendName">John Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg"/>
                    <span className="sidebarFriendName">John Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/3.jpg" alt="" className="sidebarFriendImg"/>
                    <span className="sidebarFriendName">John Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/4.jpg" alt="" className="sidebarFriendImg"/>
                    <span className="sidebarFriendName">John Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/5.jpg" alt="" className="sidebarFriendImg"/>
                    <span className="sidebarFriendName">John Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/6.jpg" alt="" className="sidebarFriendImg"/>
                    <span className="sidebarFriendName">John Doe</span>
                </li>
            </ul>
        </div>
    </div>
    )
}