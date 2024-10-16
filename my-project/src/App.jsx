import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './views/components/Header';
import Footer from './views/components/Footer';
import Cuerpo from './views/components/Cuerpo';
import Eventos from './views/components/Eventos';
import Escultores from './views/components/Escultores'; 
import Esculturas from './views/components/Esculturas';
import Create from './views/components/Create'; // Asegúrate de importar el componente Create

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
            
            {/* Ruta para CRUD */}
            <Route path="/crud" element={<Create />} />
            
            {/* Página 404 */}
            <Route path="*" element={<div>404 Not Found</div>} />
          
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
