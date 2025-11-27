import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
    width: 100%;
    padding: 20px 40px;
    background-color: #0d0d0d;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
`;

const Logo = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;

    a {
        color: #ffffffcc;
        text-decoration: none;
        font-weight: 500;
        transition: 0.2s;

        &:hover {
            color: #ffffff;
        }
    }
`;

const FooterContainer = styled.footer`
    width: 100%;
    padding: 20px;
    background: #0d0d0d;
    color: #fff;
    text-align: center;
    margin-top: 40px;
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <Logo>Meu Portfólio</Logo>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contato">Contato</Link>
            </Nav>
        </HeaderContainer>
    );
};

export const Footer = () => {
    return (
        <FooterContainer>
            © {new Date().getFullYear()} • Desenvolvido por Paulo Victor
        </FooterContainer>
    );
};
