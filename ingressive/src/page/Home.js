// import React, { useState } from 'react'
import Logo from '../assets/images/Logo.png';
import HomeImg from '../assets/images/Home.png'
import Project from '../assets/images/Project.png'
import Calendar from '../assets/images/Calender.png'
import TeamChat from '../assets/images/TeamChat.png'
import Settings from '../assets/images/Settings.png'
import Navbar from '../components/NavBar'
import Calender from '../components/Calender'
import Task from '../components/Task';
import './Home.css'

const Home = () => {
    return (
        <div className='main'>
            <div className="sidebar">
                <div className="logo-details">
                    <img src={Logo} alt="logo" />
                    <div className="logo_name">MalHub</div>
                </div>
                <ul className="nav-list">
                    <li>
                        <a href="#home">
                            <span className="icons">
                                <img src={HomeImg} alt="Home" />
                            </span>
                            <span className="links_name">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#user">
                            <span className="icons">
                                <img src={Project} alt="Project" />
                            </span>
                            <span className="links_name">Project</span>
                        </a>
                    </li>
                    <li>
                        <a href="#healthtips">
                            <span className="icons">
                                <img src={Calendar} alt="Calendar" />
                            </span>
                            <span className="links_name">Calender</span>
                        </a>
                    </li>
                    <li>
                        <a href="#https://tawk.to/MedConsult">
                            <span className="icons">
                                <img src={TeamChat} alt="Team Chat" />
                            </span>
                            <span className="links_name">Team Chats</span>
                        </a>
                    </li>
                    <li>
                        <a href="#consultform">
                            <span className="icons">
                                <img src={Settings} alt="Settings" />
                            </span>
                            <span className="links_name">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="home-section">
                <div className='home-section-inner'>
                    <Navbar />
                    <Calender />
                    <Task />
                </div>
            </div>
        </div>
    );
}

export default Home
