import React from 'react'
import Image from 'next/image'



function Header() {
    return (
        <header>
            <div>
                <div>
                    <Image 
                        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                        width={150}
                        height={40}
                    />
                </div>
            </div>
            <div></div>
        </header>
    )
}

export default Header
