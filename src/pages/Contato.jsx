import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.section`
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
`;

const Input = styled.input`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const TextArea = styled.textarea`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    min-height: 120px;
`;

const Button = styled.button`
    padding: 12px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.2s;

    &:hover {
        background-color: #0056cc;
    }
`;

export default function Contato() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Formulário enviado:', form);
        alert('Mensagem enviada com sucesso!');
        setForm({ name: '', email: '', message: '' }); // <- limpa o form
    }

    return (
        <Container>
            <h1>Contato</h1>
            <p>Se você deseja entrar em contato comigo, por favor, preencha o formulário abaixo:</p>

            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <Input
                    type="email"
                    name="email"
                    placeholder="Seu Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <TextArea
                    name="message"
                    placeholder="Sua Mensagem"
                    value={form.message}
                    onChange={handleChange}
                    required
                />

                <Button type="submit">Enviar Mensagem</Button>
            </Form>
        </Container>
    );
}
