import React, { useContext } from "react";
import { Contex } from "../Context/Context";
import styled from "styled-components";
const Nav = styled.div`
    background-color: #6840cf;
    color: #dddddd;
    padding: 6px 40px;
    display: flex;
    justify-content: flex-end;
  
`;
const P = styled.p`
    font-size: 24px;
`;

const Navbar = () => {
    const { userName } = useContext(Contex);
    return (
        <Nav>
            <P>Hi {userName}</P>
        </Nav>
    );
};

export default Navbar;
