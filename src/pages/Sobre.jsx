import styled from 'styled-components';

const Container = styled.section`
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    line-height: 1.6;
    text-align: center;
`;

const Foto = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export default function Sobre() {
    return (
        <Container>
            <h1>Sobre Mim</h1>
            <Foto src="/projetos/minha-foto.jpg" alt="Foto de Paulo Victor" />
            
            <p>Olá! Meu nome é Paulo Victor, sou desenvolvedor full stack em formação com foco atual no ecossistema Java e no desenvolvimento de interfaces modernas com React. Tenho paixão por aprender criando projetos reais, sempre buscando código limpo, organizado e bem estruturado.</p>

            <p>Este portfólio reúne alguns dos meus principais projetos desenvolvidos ao longo do curso, mostrando minha evolução e domínio das tecnologias que venho estudando. Fique à vontade para explorar!</p>

            <p>Além do desenvolvimento, sou entusiasta de tecnologia, música e esportes. Acredito que a combinação dessas paixões me torna um profissional mais criativo e dedicado.</p>

            <p>Se quiser saber mais ou entrar em contato, visite a seção de contato. Estou sempre aberto a novas oportunidades e colaborações!</p>
        </Container>
    );
}
