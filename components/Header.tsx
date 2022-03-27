import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <img
                        className="w-14 object-contain cursor-pointer"
                        src="https://static.vecteezy.com/system/resources/previews/001/188/239/non_2x/heart-logo-png.png"
                        alt="logo"
                    />
                </Link>
                <Link href="/">
                    <h3 className='uppercase cursor-pointer tracking-tighter text-2xl'>
                        <span className='font-light'>Stay </span>
                        <span className='font-extrabold'>Healthy</span>
                    </h3>
                </Link>
            </div>
        </header>
    );
}

export default Header;