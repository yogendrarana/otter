
import { Button } from '../ui/button'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';

export default function ConnectWallet () {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Connect Wallet</Button>
            </DialogTrigger>

            <DialogContent className='flex flex-col'>
                <DialogTitle>Available Wallets</DialogTitle>

                <div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
  