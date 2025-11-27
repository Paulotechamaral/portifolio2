import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Projetos from './pages/Projetos.jsx';
import Contato from './pages/Contato.jsx';
import {Header, Footer} from './components/Layout.jsx';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
            <Footer />
        </>
    );
}
export default App;