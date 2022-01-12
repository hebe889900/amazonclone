import React from 'react'
import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"



function Header() {
    return (
        <header>
            <div className="sm:flex-wrap md:flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                <div className="mx-2 flex items-center rounded-md h-10 flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className='p-4 h-full w-6 flex-grow flex-shrink rounted-l-md focus:outline-none px-4' type="text"/>
                    <SearchIcon className='h-12 p-4' />
                </div>               
                <div  className="text-white flex items-center text-xs space-x-6 mx-6">
                    <div className="link">
                        <p>Hello Jack</p>
                        <p className='font-extrabold md:text-sm'>Account & Lists</p>
                    </div>

                    <div className="link">
                        <p>Return</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>

                    <div className="relative link flex item-center">
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
                        4
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                    </div>
                </div>
            </div>
            <div></div>
        </header>
    )
}

export default Header
