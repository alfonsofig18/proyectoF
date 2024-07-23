import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const PageTitle = ({ title, icon }) => {

    return (
        <Container className='container mt-3'>
            <BgContainer name={title} className='position-relative'>
                <h4 className='mb-0 position-relative'>{title}</h4>
                <i className={`position-absolute bx ${icon}`}></i>
            </BgContainer>
        </Container>
    );
}

const Container = styled.section`
    @media (min-width: 426px) {
        min-width: 100%;
        padding-left: 2rem;
        padding-right: 2rem;
    }

`;

const BgContainer = styled.div`
    width: 100%;
    height: clamp(8rem, 6.867rem + 5.664vw, 12rem);
    border-radius: 15px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    overflow: hidden;
    background: #2f2f2f;
    ${props => props.name === 'Inicio' && css`
    background: #FFF2D7;
    `}
    ${props => props.name === 'Emergencia' && css`
    background: #ebc7c7;
    `}
    ${props => props.name === 'Citas' && css`
    background: #d0ccff;
    `}
    ${props => props.name === 'Casos' && css`
    background: #d7ead8;
    `}

    h4 {
        margin-left: clamp(0.5rem, 0.302rem + 0.991vw, 1.2rem);
        font-size: clamp(2.8rem, 2.46rem + 1.699vw, 4rem);
        letter-spacing: -0.25rem;
        z-index: 5;
        ${props => props.name === 'Inicio' && css`
        color: hsl(41 50% 65% / 1);
        `}
        ${props => props.name === 'Emergencia' && css`
        color: hsl(0 47% 68% / 1);
        `}
        ${props => props.name === 'Citas' && css`
        color: hsl(245 98% 80% / 1);
        `}
        ${props => props.name === 'Casos' && css`
        color: hsl(123 31% 75% / 1);
        `}
    }

    i {
        font-size: clamp(7rem, 6.15rem + 4.248vw, 10rem);
        line-height: 1;
        margin: 0;
        padding: 0;
        bottom: -1.7rem;
        right: -1rem;
        transform: rotate(-20deg);
        z-index: 2;
        ${props => props.name === 'Inicio' && css`
        color: hsl(41 70% 84% / 1);
        `}
        ${props => props.name === 'Emergencia' && css`
        color: hsl(0 47% 80% / 1);
        `}
        ${props => props.name === 'Citas' && css`
        color: hsl(245 98% 86% / 1);
        `}
        ${props => props.name === 'Casos' && css`
        color: hsl(123 31% 83% / 1);
        `}

        @media (max-width: 425px) {
            bottom: -1rem;
        }
    }
`;

export default PageTitle;