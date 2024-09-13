import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './views/components/Header';
import Footer from './views/components/Footer';
import Cuerpo from './views/components/Cuerpo';
import Eventos from './views/components/Eventos';
import Escultores from './views/components/Escultores'; // Importa otros componentes según sea necesario
import Esculturas from './views/components/Esculturas';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> 
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Cuerpo />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/escultores" element={<Escultores />} />
            <Route path="/esculturas" element={<Esculturas />} />
            <Route path="*" element={<div>404 Not Found</div>} /> {/* Página 404 */}
          </Routes>
        </main>
        <Footer />
      </div>
     
    </Router>
  );
}

export default App;