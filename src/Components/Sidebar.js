import React from 'react';
import './Sidebar.css'; // Import CSS file for styling
import logo from '../assets/sidebarlogo.jpeg';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={logo} alt="Logo" />
            </div>
            <div className="firstrow">

            </div>
            <ul className="sidebar-menu">
                <li ><a href="#">BBS Home</a></li>
                <li><span className="triangle"></span><a href="#">Create Request</a></li>
                <li><a href="#">Review Request</a></li>
                <li><a href="#">Overview</a></li>
                <li><a href="#">History of authorizations</a></li>
                <li><span className="triangle"></span><a href="#">Information on</a></li>
                <li><span className="triangle"></span><a href="#">Adminstration</a></li>
                <li><span className="triangle"></span><a href="#">Resource admin</a></li>
                <li><span className="triangle"></span><a href="#">Resource access</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;

