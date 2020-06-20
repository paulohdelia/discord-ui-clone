import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: UI;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    
    background-color: var(--quaternary);

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-color: var(--gray);
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-left: 8px;

    > strong {
        display: block;

        font-size: 13px;
        color: var(--white);
    }

    > span {
        color: var(--gray);
        font-size: 13px;
    }
`;

export const Icons = styled.div`

`;

export const MicIcon = styled(Mic)`

`;

export const HeadsetIcon = styled(Headset)`

`;

export const SettingsIcon = styled(Settings)`

`;