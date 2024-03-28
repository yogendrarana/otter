"use client";

import { ReactNode, useMemo } from 'react'

import { clusterApiUrl } from "@solana/web3.js";
import { WalletProvider, ConnectionProvider } from "@solana/wallet-adapter-react"
import { MathWalletAdapter, PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'

const Provider = ({ children }: { children: ReactNode }) => {
    const endpoint = useMemo(() => clusterApiUrl("devnet"), []);
    const wallets = useMemo(() => {
        return [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
            new MathWalletAdapter(),
        ]
    }, [])
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                {children}
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default Provider;