"use client";

import { toast } from 'sonner';
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';

// wallets
import { wallets } from '@/lib/wallets';

export default function ConnectWallet() {

    const handleConnectWallet = async (wallet: any) => {
        if (!wallet.detected) {
            toast.error(`${wallet.name} wallet not found. Please add it first.`);
            return;
        }

        try {
            let connection;
            connection = await wallet.wallet.connect();
            console.log('Connected to wallet:', connection);
        } catch (error) {
            console.error('Error connecting to wallet:', error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"secondary"} className='bg-blue-500 text-white hover:bg-blue-600' >Connect Wallet</Button>
            </DialogTrigger>

            <DialogContent className='flex flex-col'>
                <DialogTitle>Available Wallets</DialogTitle>
                <div className='flex flex-col gap-1'>
                    {
                        wallets.map((wallet: any) => (
                            <Button
                                key={wallet.name}
                                variant={"secondary"}
                                onClick={() => handleConnectWallet(wallet)}
                            >
                                {wallet.name}
                            </Button>
                        ))
                    }
                </div>
            </DialogContent>
        </Dialog>
    )
}
