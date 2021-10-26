import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import firebaseApp from '../config/firebase-app';
import { AuthContext } from '../config/auth';
import Logo from '../assets/images/Logo.png';
import HomeImg from '../assets/images/Home.png'
import Project from '../assets/images/Project.png'
import Calendar from '../assets/images/Calender.png'
import TeamChats from '../assets/images/TeamChat.png'
import Settings from '../assets/images/Settings.png'
import Navbar from '../components/NavBar'
import Calender from '../components/Calender'
import Task from '../components/Task';
import TeamChat from '../components/TeamChat';
import { BiLogOut } from 'react-icons/bi';
import './Home.css'

const Home = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }
    return (
        <div className="main">
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
                                <img src={TeamChats} alt="Team Chat" />
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
                    <li className="profile">
                        <div className="profile-details">
                            <img src="" alt="" />
                            <div className="name_job">
                                <div className="name">Bash</div>
                                <div className="job">Bash@gmail.com</div>
                            </div>
                        </div>
                        <span className="icons" id="log_out" onClick={() => firebaseApp.auth().signOut()}>
                            <BiLogOut />
                        </span>
                    </li>
                </ul>
            </div>
            <div className="home-section">
                <div className="home-section-inner">
                    <Navbar />
                    <Calender />
                    <Task />
                    <TeamChat />
                </div>
            </div>
        </div>
    );
};

export default Home;
