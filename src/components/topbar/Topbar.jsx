import React from 'react';
import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
    return (
        <div className ='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">Echo Me</span>
            </div> 
            <div className="searchbar">
                <SearchIcon className="searchIcon"/>
            <div className="topbarCenter"></div>
                <input placeholder="Search for friend, post or video" className="searchInput"/>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                <span className="topbarLinks">Homepage</span>
                <span className="topbarLinks">Timeline</span>

            </div>    
            <div className="topbarIcons">
            <div className="topbarIconItem">
                <PersonIcon/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <ChatIcon/>
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
                <NotificationsIcon/>
                <span className="topbarIconBadge">1</span>
            </div>
            </div>
            <img src="/assets/person/1.jpg" alt="" className="topbarImg"/>
            </div> 


        </div>
    )
}