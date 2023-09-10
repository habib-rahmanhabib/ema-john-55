import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

    const {user, logOut}=useContext(AuthContext)
   const hanlerLogOut = () =>{
     logOut()
     .then( ()=>{

     } )
     .catch( error=>{
        console.log(error.message)
     } )
   }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
            
                <Link to="/signup">Sign Up</Link>
               {
                user ? <span className='text-white '>Welcome {user.email} <button className='btn btn-primary ' onClick={hanlerLogOut}>Log Out</button> </span> :     <Link to="/login">Login</Link> 
               }
            </div>
        </nav>
    );
};

export default Header;