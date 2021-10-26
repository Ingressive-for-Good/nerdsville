import React from 'react';
import styled from 'styled-components';

const Task = () => {
    return (
        <TaskContainer>
            <Today>
                <h3>Today's Task</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.1406 13.1094H13.1094V22.1406C13.1094 22.7533 12.6127 23.25 12 23.25C11.3873 23.25 10.8906 22.7533 10.8906 22.1406V13.1094H1.85938C1.24667 13.1094 0.75 12.6127 0.75 12C0.75 11.3873 1.24667 10.8906 1.85938 10.8906H10.8906V1.85938C10.8906 1.24667 11.3873 0.75 12 0.75C12.6127 0.75 13.1094 1.24667 13.1094 1.85938V10.8906H22.1406C22.7533 10.8906 23.25 11.3873 23.25 12C23.25 12.6127 22.7533 13.1094 22.1406 13.1094Z"
                        fill="#57429D"
                        stroke="#57429D"
                        stroke-width="0.5"
                    />
                </svg>
            </Today>
            <TaskList>
                <SingleTask>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="28" height="28" rx="5" stroke="#57429D" stroke-width="2" />
                    </svg>
                    <NameTime>
                        <p>Working on Amam Project</p>
                        <span>8:00-10:00am</span>
                    </NameTime>
                </SingleTask>
                <SingleTask>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="28" height="28" rx="5" stroke="#57429D" stroke-width="2" />
                    </svg>
                    <NameTime>
                        <p>Working on Amam Project</p>
                        <span>8:00-10:00am</span>
                    </NameTime>
                </SingleTask>
                <SingleTask>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="28" height="28" rx="5" stroke="#57429D" stroke-width="2" />
                    </svg>
                    <NameTime>
                        <p>Working on Amam Project</p>
                        <span>8:00-10:00am</span>
                    </NameTime>
                </SingleTask>
            </TaskList>
        </TaskContainer>
    );
};

const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 406px;
    height: max-content;
`;

const Today = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const TaskList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: flex-start;
    background: #f5f5f5;
    border-radius: 10px;
    width: 406px;
    height: fit-content;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
`;

const SingleTask = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 5px;
`;

const NameTime = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    svg {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
`;

export default Task;
