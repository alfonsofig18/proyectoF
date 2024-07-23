import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const SectionSmallButtons = ({ children }) => {
    const sectionBtns = useRef();
    useEffect(() => {
        const handleScroll = () => {
            const bar = sectionBtns.current;
            let divTop = bar.offsetTop;
            if (divTop >= 1) {
                bar.classList.add('bar-btns');
            } else {
                bar.classList.remove('bar-btns');
            }
        }
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <SectionSB ref={sectionBtns}>
            {children}
        </SectionSB>
    );
}

const SectionSB = styled.section`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  column-gap: clamp(0.313rem, 0.304rem + 0.044vw, 0.344rem);
  position: sticky;
  top: 0;
  background: #fff;
  overflow-x: auto;
  z-index: 10;
  padding: 0.625rem 0;
  transition: var(--tran-04);
  
  &::-webkit-scrollbar {
      display: none;
    }
    
  &.bar-btns {
      padding: 0.813rem 0;
  }

  @media (max-width: 425px) {
  &.bar-btns {
    padding-left: 0.531rem;
    transition: var(--tran-04);
  }
}
`;

export default SectionSmallButtons;