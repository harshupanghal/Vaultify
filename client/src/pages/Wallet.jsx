import { useWeb3Context } from "../contexts/useWeb3Context";
import { connectWallet } from "../utils/connectWallet";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Wallet = () => {
  const navigateTo = useNavigate();
  const { updateWeb3State, web3State } = useWeb3Context();
  const { selectedAccount } = web3State;
  useEffect(() => {
    if (selectedAccount) {
      navigateTo("/home");
    }
  }, [selectedAccount, navigateTo]);

  const handleWalletConnection = async () => {
    const { contractInstance, selectedAccount } = await connectWallet();
    updateWeb3State({ contractInstance, selectedAccount });
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <header className="flex items-center justify-between px-6 py-4">
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <MountainIcon className="h-6 w-6" />
          <span><h1 className="text-2xl">Valutify</h1></span>
        </h1>
        <button className="border-none flex items-center gap-3 px-6 py-3 bg-blue-500 text-white text-xs font-semibold uppercase rounded-md cursor-pointer select-none transition-all duration-600 ease-in-out shadow-button" onClick={handleWalletConnection}>
  Connect Wallet
</button>




      </header>

      <main className="flex-1 px-6 py-6 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Secure Your Data with Valutify
            </h1>
            <p className="text-lg text-gray-400">
              Valutify is a blockchain-powered file and data storage solution
              built on the MERN stack. Enjoy unparalleled security, privacy, and
              decentralization for all your digital assets.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-gray-900 rounded-lg p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6 lg:space-y-8">
              <LockIcon className="h-10 w-10 text-indigo-500" />
              <h3 className="text-xl font-semibold">Secure Storage</h3>
              <p className="text-gray-400">
                Your data is encrypted and stored on a decentralized blockchain
                network, ensuring maximum security and privacy.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6 lg:space-y-8">
              <CloudIcon className="h-10 w-10 text-indigo-500" />
              <h3 className="text-xl font-semibold">Decentralized Cloud</h3>
              <p className="text-gray-400">
                Leverage the power of blockchain technology to store and access
                your files from anywhere, without relying on a centralized
                server.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6 lg:space-y-8">
              <LayersIcon className="h-10 w-10 text-indigo-500" />
              <h3 className="text-xl font-semibold">MERN Stack</h3>
              <p className="text-gray-400">
                Valutify is built on the powerful MERN stack, combining the
                flexibility of MongoDB, the efficiency of Express, the
                responsiveness of React, and the scalability of Node.js.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 px-6 py-4 text-sm text-gray-400">
        <div className="container mx-auto flex items-center justify-center">
          <p>© 2024 Valutify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function LayersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default Wallet;
