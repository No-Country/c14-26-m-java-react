import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <nav className="py-2 sm:py-4 md:py-6 lg:py-8 ml-2 sm:ml-4 md:ml-8 text-black-500 text-left">

        <Link to="/" className="text-black-500 font-bold hover:no-underline hover:text-blue-800">
          Home
        </Link>
        <i className="fa-solid fa-chevron-right text-gray-400 mx-4"></i>
        <span className='text-gray-400'>Detail</span>
        
      </nav>
    );
  };
  
  export default Navigation;