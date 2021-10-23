import React from 'react'
import styled from "styled-components";
import Welcome from '../assets/images/Welcome.png'
import Picture from '../assets/images/Picture.png'
import Notification from '../assets/images/Notification.png'

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px 20px;

    .user {
        background: #eee;
        padding: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icon {
            transform: matrix(-1, 0, 0, 1, 0, 0);
            margin-right: 8px;
        }

        .name {
            color: #57429d;
            font-family: Futura Bk BT;
            font-weight: normal;
            font-size: 20px;
            line-height: 169.9%;
        }
    }

    .profile {
        padding: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .images img {
            width: 30px;
            height: 30px;
            object-fit: cover;
        }
        .email {
            margin-left: 8px;
        }
    }
`;

const NavBar = () => {
    return (
        <Nav>
            <div className='user'>
                <div className='icon'>
                    <img src={Welcome} alt='welcome' />
                </div>
                <div className='name'>Welcome, Qoreebulah</div>
            </div>
            <div className='profile'>
            <div className='images'>
                    <img src={Notification} alt='Pics' />
                    <img src={Picture} alt='Notification' />
                </div>
                <div className='email'>qoribullahbukhari@gmail.com</div>
            </div>
        </Nav>
    )
}

export default NavBar

