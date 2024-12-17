import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';
import { CartContext } from '../context/CartContext';


const Navbar = () => {
   const { calculateTotal } = useContext(CartContext);
  const total = calculateTotal();
   const token = false;

   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 m-0">
          <div className="container-fluid">
          <Link className="navbar-brand" to="/">🍕 Home</Link>
         <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
               {token ? (
                  <>
                     <li className="nav-item">
                     <Link className="nav-link" to="/profile">🔓 Profile</Link>
                     </li>
                     <li className="nav-item">
                     <Link className="nav-link" to="/logout">🔒 Logout</Link>
                     </li>
                  </>
               ) : (
                  <>
                     <li className="nav-item">
                     <Link className="nav-link" to="/login">🔐 Login</Link>
                     </li>
                     <li className="nav-item">
                     <Link className="nav-link" to="/register">🔐 Register</Link>
                     </li>
                  </>
               )}
            </ul>
            </div>
            <div className="d-flex">
            <Link to="/cart" className="btn btn-primary">
            🛒 Total: {formatCurrency(total)}
          </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
