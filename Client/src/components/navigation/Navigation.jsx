import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();                                             // Obtengo la ubicación actual utilizando el useLocation
  const pathnames = location.pathname.split('/').filter((x) => x);            // luego le digo que a ese pathname  
// path ---> El segmento de la ruta actual
// index ---> La posición del segmento en la matriz
  return (
    <nav className="py-2 sm:py-4 md:py-6 lg:py-8 ml-2 sm:ml-4 md:ml-8 text-black-500 text-left">
      <Link to="/" className="text-black-500 font-bold hover:no-underline hover:text-blue-800">
        Home
      </Link>
      {pathnames.length > 0 && (
        <i className="fa-solid fa-chevron-right text-gray-400 mx-4"></i>
      )}
      
      {pathnames.map((path, index) => {   // path --> El segmento de la ruta actual. index --> La posición del segmento en la matriz
        const routeTo = `/${path}`;
        const isLast = index === pathnames.length - 1;

        const formattedPath = path.charAt(0).toUpperCase() + path.slice(1);

        // Si es el último segmento, muestro el texto tal cual está. Si no es el último segmento, genero un enlace y una flecha de separación ---> en este caso, icono de fontawesome
        return isLast ? (
          <span key={path} className="text-gray-400">
            {formattedPath}
          </span>
        ) : (
          <React.Fragment key={path}>                                          
            <Link to={routeTo} className="text-black-500 font-bold hover:no-underline hover:text-blue-800">
              {formattedPath}
            </Link>
            <i className="fa-solid fa-chevron-right text-gray-400 mx-4"></i>
          </React.Fragment>
        );
      })}
    </nav>
  );
};



export default Navigation;