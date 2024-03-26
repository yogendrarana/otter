export const wallets = [
    {
        name: 'Phantom',
        wallet: window?.solana,
        detected: !!window?.solana || !!window?.phantom.solana,
    },
    {
        name: 'Solflare',
        wallet: window?.solflare,
        detected: !!window?.solflare,
    },
    {
        name: "Sollet",
        wallet: window?.sollet,
        detected: !!window?.sollet,
    }
];