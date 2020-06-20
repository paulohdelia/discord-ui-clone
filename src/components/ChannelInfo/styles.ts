import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
    grid-area: CI;

    display: flex;
    align-items: center;

    padding: 0 17px;
    background-color: var(--primary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

    z-index: 2px;
`;

export const HashtagIcon = styled(Hashtag)`
    width: 24px;
    height: 24px;

    color: var(--symbol);
`;

export const Title = styled.div`
    margin-left: 9px;

    font-size: 16px;
    font-weight: bold;

    color: var(--white);
`;

export const Separator = styled.div`

`;

export const Description = styled.div`

`;
