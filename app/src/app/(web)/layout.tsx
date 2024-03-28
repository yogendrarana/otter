import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// css
import "@/styles/globals.css";
import Provider from "@/components/provider/provider";

// font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Otter",
  description: "Otter is a community driven project and is built on the Solana blockchain.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Provider >
          <main>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};