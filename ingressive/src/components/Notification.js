import React from 'react'
import styled from 'styled-components';

const Notification = () => {
    return (
        <NSection>
            <NHeader>
                <NHeaderTitle>Notification</NHeaderTitle>
                <NHeaderOption>View All</NHeaderOption>
            </NHeader>
            <NContent>
            
            </NContent>
        </NSection>
    )
}

export default Notification

const NSection = styled.div`

`

const NHeader = styled.div`
    
`

const NHeaderTitle = styled.div`
    
`

const NHeaderOption = styled.div`
    
`

const NContent = styled.div`
    background: #57429D;
    width: 546px;
    height: 175px;
    border-radius: 20px;
`
