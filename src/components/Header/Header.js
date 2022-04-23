import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-around'>
            <div className='text-4xl'>Header</div>
            <div>
                <Link to={'/home'} className='text-2xl'>Home</Link>

            </div>
        </div>
    );
};

export default Header;