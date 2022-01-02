import React from 'react';
import logo from '../img/emix-logo.png';
import styled from 'styled-components'

const PageHeader = styled.header`
    background-color:#006a6a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vh 2vw;
    color: white;
    font-stretch: expanded;
    font-size:200%;
    position: static;
    width: 96vw;
`

const FirsHalfTitle = styled.h1`
    margin: 0;
`

const SecondHalfTitle = styled.h1`
    font-weight: lighter;
    margin: 0;
`
const UsefulDiv = styled.div`
    display: flex;
    width: 100%;
`



function Header() {
    return (
        <PageHeader>
            <UsefulDiv>
            <FirsHalfTitle>TODO</FirsHalfTitle><SecondHalfTitle>LIST</SecondHalfTitle>
            </UsefulDiv>
            <img src={logo} />
        </PageHeader>
    );
};

export default Header;