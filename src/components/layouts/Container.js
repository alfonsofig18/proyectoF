import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
    return (
        <DivContainer>
            {children}
        </DivContainer>
    );
}

const DivContainer = styled.div`
    position: relative;
    left: 88px;
    width: calc(100vw - 88px);

    @media(max-width: 425px) {
    left: 60px;
    width: calc(100vw - 60px);
    }
`;

export default Container;