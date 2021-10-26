import React from 'react';
import styled from 'styled-components';

const TeamChat = () => {
    return (
        <ChatContainer>
            <InviteComponent>
                <h3>Team Chat</h3>
                <button>invite people</button>
            </InviteComponent>
            <Chat>chat</Chat>
        </ChatContainer>
    );
};

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #f5f5f5;
    border-radius: 20px;
    width: 546px;
    height: 434px;
    padding: 10px;
`;

const InviteComponent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Chat = styled.div``;

export default TeamChat;
