import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ title }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="py-2 sm:py-4 md:py-6 lg:py-8 ml-2 sm:ml-4 md:ml-8 text-black-500 text-left">
      <Link to="/" className="text-black-500 font-bold hover:no-underline hover:text-blue-800">
        Home
      </Link>
      {pathnames.length > 0 && (
        <i className="fa-solid fa-chevron-right text-gray-400 mx-4"></i>
      )}

      {pathnames.map((path, index) => {
        const routeTo = `/${path}`;
        const isLast = index === pathnames.length - 1;

        const formattedPath = isLast ? title : (path.charAt(0).toUpperCase() + path.slice(1));

        return isLast ? (
          <span key={path} className="text-gray-400">
            {formattedPath}
          </span>
        ) : (
          <React.Fragment key={path}>
            {path === 'Detail' ? (
              <Link to={routeTo} className="text-black-500 font-bold hover:no-underline hover:text-blue-800">
                {formattedPath}
              </Link>
            ) : (
              <span className="text-black-500 font-bold">{formattedPath}</span>
            )}
            <i className="fa-solid fa-chevron-right text-gray-400 mx-4"></i>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

Navigation.propTypes = {
  title: PropTypes.string,
};

export default Navigation;

