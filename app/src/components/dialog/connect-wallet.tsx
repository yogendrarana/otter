"use client";

import Image from 'next/image';
import { toast } from 'sonner';
import { Button } from '../ui/button'
import { useWallet } from '@solana/wallet-adapter-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';

// wallets
// import { wallets } from '@/lib/wallets';

export default function ConnectWallet() {

    const { select, wallets, publicKey, disconnect } = useWallet();

    const handleConnectWallet = async (wallet: any) => {
        if (wallet.readyState !== "Installed") {
            toast.error(`${wallet.adapter.name} wallet not found. Please add it first.`);
            return;
        }

        try {
            select(wallet.adapter.name)
        } catch (error) {
            console.error('Error connecting to wallet:', error);
        }
    };

    return (
        <Dialog>
            {publicKey && (
                <Button variant={"secondary"} className='bg-blue-500 text-white hover:bg-blue-600' onClick={disconnect}>Disconnect</Button>
            )}

            {!publicKey && (
                <DialogTrigger asChild>
                    <Button variant={"secondary"} className='bg-blue-500 text-white hover:bg-blue-600' >Connect Wallet</Button>
                </DialogTrigger >
            )}

            <DialogContent className='flex flex-col'>
                <DialogTitle>Available Wallets</DialogTitle>
                <div className='flex flex-col gap-1'>
                    {
                        wallets.map((wallet: any) => (
                            <Button
                                key={wallet.adapter.name}
                                variant={"secondary"}
                                className='space-x-2'
                                onClick={() => handleConnectWallet(wallet)}
                            >
                                <Image src={wallet.adapter.icon} width={20} height={20} alt={wallet.adapter.name} />
                                <span>{wallet.adapter.name}</span>
                                <span className='text-gray-500'>
                                    {wallet.readyState === "Installed" ? "(Dectected)" : "(Not Detected)"}
                                </span>
                            </Button>
                        ))
                    }
                </div>
            </DialogContent>
        </Dialog >
    )
}
