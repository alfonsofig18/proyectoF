import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const SmallButtons = ({ rute, icon = null, title, group, btnDisabled = false }) => {

    const isDisabled = (e) => {
        e.preventDefault();
    };

    const getStyles = (isActive, title) => {
        if (isActive && title === 'index') {
            return { display: 'none' }
        } else {
            return { display: 'flex' }
        }
    };

    return (
        <StyledNavLink group={group} title={title} icon={icon} disabled={btnDisabled} to={rute} style={({ isActive }) => getStyles(isActive, title)} onClick={(e) => (btnDisabled === true) ? isDisabled(e) : undefined}>
            {icon && <i className={icon}></i>}
            {title !== 'index' ? <span>{title}</span> : <span>&times;</span>}
        </StyledNavLink>
    );
}

const StyledNavLink = styled(NavLink)`
    ${props => props.group === 'inicio' && css`
        background: hsl(38 15% 80% / 1);
        color: hsl(37 16% 52% / 1);
    `}
    ${props => props.group === 'citas' && css`
        background: hsl(245 100% 90% / 1);
        color: hsl(245 98% 75% / 1);
    `}
    font-size: clamp(0.95rem, 0.936rem + 0.071vw, 1rem);
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.313rem;
    border-radius: 50px;
    transition: var(--tran-04);
    ${props => props.title === 'index' && css`
    padding: 0;
    width: 2rem;
    min-width: 2rem;
    height: 2rem;
    min-height: 2rem;
    justify-content: center;
    `}
    ${props => (props.icon === null) ? css`
    padding: clamp(0.188rem, 0.206rem + -0.089vw, 0.125rem) 0.813rem;
    `
        :
        css`
    padding: clamp(0.188rem, 0.206rem + -0.089vw, 0.125rem) 0.625rem;
    `
    }
    ${props => props.disabled && css`
    pointer-events: none;
    opacity: 0.45;
    `}
    
    &:hover {
    ${props => props.group === 'inicio' && css`
        background: hsl(37 16% 52% / 1);
        color: hsl(38 15% 80% / 1);
    `}
    ${props => props.group === 'citas' && css`
        color: hsl(245 100% 95% / 1);
        background: hsl(245 98% 80% / 1);
    `}
    transition: var(--tran-04);
    }

    &.active {
    ${props => props.group === 'inicio' && css`
        background: hsl(37 16% 52% / 1);
        color: hsl(38 15% 80% / 1);
    `}
    ${props => props.group === 'citas' && css`
        color: hsl(245 100% 95% / 1);
        background: hsl(245 98% 80% / 1);
    `}
    transition: var(--tran-04);
    }

    span {
    letter-spacing: -0.025rem;
    white-space: nowrap;
    }

`;

export default SmallButtons;