import Link from 'next/link'
import React from 'react'
import ConnectWallet from './dialog/connect-wallet'

const Navbar = () => {
  return (
    <div className='h-[var(--h-nav)] px-[var(--p-md)] border-b flex justify-between items-center'>
        <Link href='/' className='text-2xl font-bold tracking-wide'>Otter.</Link>

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

        <div>
            <ConnectWallet />
        </div>
    </div>
  )
}

export default Navbar;