import HomeIcon from '@mui/icons-material/Home';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
const Sidebar = () => {
  return (
    <div>
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchOutlinedIcon} text="Explore" />
      <SidebarOption Icon={NotificationsOutlinedIcon} text="Notification" />
      <SidebarOption Icon={NotificationsOutlinedIcon} text="Message" />
      <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
      <SidebarOption Icon={Person2OutlinedIcon} text="Communities" />
      <SidebarOption Icon={VerifiedOutlinedIcon} text="Verified" />
      <SidebarOption Icon={Person2OutlinedIcon} text="Profile" />
      <SidebarOption Icon={PendingOutlinedIcon} text="More" />

      {/* Button -> Tweet */}
      <button className='sidebar__tweet' >Post</button>

    </div>
  )
}

export default Sidebar
