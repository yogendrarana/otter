"use client";

import { toast } from 'sonner';
import { Button } from '../ui/button'
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';

export default function ConnectWallet() {
    const [availableWallets, setAvailableWallets] = useState([]) as any[];

    const wallets = [
        { name: 'Phantom', detected: !!window?.solana },
        { name: 'Sollet', detected: !!window?.sollet },
        { name: 'SolFlare', detected: !!window?.solflare },
    ];

    const detectWallets = () => {
        setAvailableWallets(wallets.filter((wallet) => wallet.detected));
    }

    const handleConnectWallet = (wallet:any) => {
        if (wallet.detected) {
            switch (wallet.name) {
                case 'Phantom':
                    window?.solana.connect();
                    break;
                case 'Sollet':
                    window?.sollet.connect();
                    break;
                case 'SolFlare':
                    window?.solflare.connect();
                    break;
                default:
                    alert('Wallet not supported');
            }
        }

    };

    useEffect(() => {
        detectWallets();
    }, []);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Connect Wallet</Button>
            </DialogTrigger>

            <DialogContent className='flex flex-col'>
                <DialogTitle>Available Wallets</DialogTitle>

                <div className='flex flex-col gap-1'>
                    {availableWallets.map((wallet: any) => (
                        <Button
                            key={wallet.name}
                            variant={"secondary"}
                            onClick={() => handleConnectWallet(wallet)}
                        >
                            {wallet.name}
                        </Button>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}
