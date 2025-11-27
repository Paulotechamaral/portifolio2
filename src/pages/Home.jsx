import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
    width: 100%;
    min-height: 80vh;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    max-width: 600px;
    margin-bottom: 30px;
    color: #666;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`;

const Button = styled(Link)`
    padding: 12px 24px;
    border-radius: 8px;
    background: #111;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: 0.2s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

    &:hover {
        background: #000;
        transform: scale(1.05);
    }
`;

export default function Home() {
    return (
        <Container>
            <Title>Bem-vindo ao Meu Portfólio</Title>

            <Subtitle>
                Aqui você encontra meus principais projetos, minhas habilidades e um pouco
                sobre mim. Fique à vontade para navegar e conhecer meu trabalho como
                desenvolvedor.
            </Subtitle>

            <ButtonGroup>
                <Button to="/projetos">Ver Projetos</Button>
                <Button to="/sobre">Sobre Mim</Button>
                <Button to="/contato">Contato</Button>
            </ButtonGroup>
        </Container>
    );
}
