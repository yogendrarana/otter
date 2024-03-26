"use client";

import Link from 'next/link'
import React from 'react'
import ConnectWallet from './dialog/connect-wallet'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <div className='h-[var(--h-nav)] px-[var(--p-md)] border-b flex justify-between items-center gap-[50px]'>
            <div className='flex-1'>
                <Link href='/' className='text-2xl font-bold tracking-wide'>Otter.</Link>
            </div>
            <nav>
                <ul className='flex gap-12'>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/nfts'>NFTs</Link>
                    </li>
                    <li>
                        <Link href='/mint'>Mint</Link>
                    </li>
                </ul>
            </nav>

            <div className='space-x-2'>
                {/* <Button variant={"secondary"} className="text-white bg-blue-500 hover:bg-blue-600">Disconnect</Button> */}
                <ConnectWallet />
            </div>
        </div>
    )
}

export default Navbar;