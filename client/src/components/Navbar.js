import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../style'
export const  Logo =()=>{
    return(
        <h1 className='font-bold text-white text-4xl'>Tacki<span className='text-red-600 font-bold hover:text-orange-400'>to</span></h1>
    );
}
const Navbar = () => {
    return (
        <div className={`${styles.boxWidth} flex justify-between items-center bg-navColor py-5 pr-10 pl-5 `}>
            {<Logo/>}
            <nav>
                <ul  className='flex space-x-7 '>
                    <li> <Link to='/' className='text-white hover:text-secondary'>Shop</Link></li>
                    <li> <Link to='/' className='text-white hover:text-secondary'>Login</Link></li>
                    <li> <Link to='/' className='text-white hover:text-secondary'>Register</Link></li>
                    <li> <Link to='/' className='text-white hover:text-secondary'>Logout</Link></li>
                </ul>
            
            </nav>
        </div>
    );
}

export default Navbar