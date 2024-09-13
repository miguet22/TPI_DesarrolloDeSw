import '/public/css/footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="social-media"> 
           <ul>
               <li> 
                   <a href="https://www.facebook.com/bienaldelchaco" target="_blank" rel="noopener noreferrer">
                   <img src="/public/img/facebook.png" alt="Facebook" />
                   </a>
               </li>
               <li>
                   <a href="https://www.instagram.com/bienaldelchaco/" target="_blank" rel="noopener noreferrer">
                   <img src="/public/img/instagram.png" alt="Instagram" />
                   </a>
               </li>
               <li>
                   <a href="https://x.com/bienaldelchaco" target="_blank" rel="noopener noreferrer">
                   <img src="/public/img/twitter.png" alt="Twitter" />
                   </a>
               </li>
               <li>
                   <a href="https://www.youtube.com/BienaldelChaco" target="_blank" rel="noopener noreferrer">
                   <img src="/public/img/youtube.png" alt="YT" />
                   </a>
               </li>
       </ul>
     </div>
      <div className="footer-info">
        <p>Dirección:  French 414, H3506 Resistencia, Chaco</p>
        <p>Teléfono: +54 362 425-1861</p>
        <p>Email: urunday@bienaldelchaco.com </p>
      </div>
      <div className="footer-links">
        <a href="#">Política de Privacidad</a>
        <a href="#">Términos y Condiciones</a>
        <a href="#">Mapa del Sitio</a>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bienal Internacional de Escultura del Chaco. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;