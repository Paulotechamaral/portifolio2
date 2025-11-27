import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const CarouselContainer = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const ProjectImage = styled.img`
    width: center;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
    }
`;

const NavBtn = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 8px;
    font-size: 1.2rem;
    transition: 0.2s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }

    @media (max-width: 600px) {
        padding: 8px 12px;
    }
`;

const PrevBtn = styled(NavBtn)`
    left: -50px;

    @media (max-width: 600px) {
        left: 10px;
    }
`;

const NextBtn = styled(NavBtn)`
    right: -50px;

    @media (max-width: 600px) {
        right: 10px;
    }
`;

const Description = styled.p`
    margin-top: 20px;
    max-width: 700px;
    font-size: 1.1rem;
    line-height: 1.5;
`;

const Title = styled.h1`
    font-size: 2.2rem;
    margin-bottom: 30px;
`;

const projetos = [
    {
        nome: "Portal de Viagens",
        imagem: "/projetos/portal-viagens.png",
        descricao:
            "Um portal completo com páginas, carrossel e interface responsiva. Projeto focado em HTML, CSS e JavaScript.",
        link: "https://github.com/Paulotechamaral/portal-de-viagens-master.git"
    },
    {
        nome: "Agência Criativa Web",
        imagem: "/projetos/agencia-criativa.png",
        descricao:
            "Projeto totalmente estilizado com SASS, BEM, variáveis, mixins e escrita de código escalável.",
        link: "https://github.com/Paulotechamaral/Agencia-Criativa.git"
    },
    {
        nome: "Todo List em React",
        imagem: "/projetos/todo-react.png",
        descricao:
            "Aplicação React usando Hooks, Context API e Tailwind. Permite criar, editar e excluir tarefas.",
        link: "https://github.com/Paulotechamaral/todo-react-avancado.git"
    },
    {
        nome: "Micro Frontends com Webpack",
        imagem: "/projetos/microfrontends.png",
        descricao:
            "Projeto avançado utilizando Module Federation, separando aplicações em múltiplos micro frontends independentes.",
        link: "https://github.com/Paulotechamaral/Microfrontend.git"
    }
];


export default function Projetos() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        document.title = "Meus Projetos | Portfólio";
    }, []);

    const next = () => {
        setIndex((prev) => (prev + 1) % projetos.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + projetos.length) % projetos.length);
    };

    const projeto = projetos[index];

    return (
        <Container>
            <Title>Meus Projetos</Title>

            <CarouselContainer>
                <PrevBtn onClick={prev}>&lt;</PrevBtn>

                <a href={projeto.link} target="_blank" rel="noreferrer">
                    <ProjectImage src={projeto.imagem} alt={projeto.nome} />
                </a>

                <NextBtn onClick={next}>&gt;</NextBtn>
            </CarouselContainer>

            <Description>
                <strong>{projeto.nome}</strong> — {projeto.descricao}
            </Description>
        </Container>
    );
}
