import React, { useState } from 'react';
import { ethers } from 'ethers';
import './HomePage.css';

const HomePage = () => {
  const [userAddress, setUserAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        // Solicitar al usuario que conecte su cuenta
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setUserAddress(address);
      } catch (error) {
        console.error("Error al conectar la wallet:", error);
      }
    } else {
      alert("MetaMask no está instalado. Por favor, instálalo para continuar.");
    }
  };

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Bienvenido a CarbonNet</h1>
        <p>Tu plataforma para un futuro más verde.</p>
        {userAddress ? (
          <div className="user-address">
            <p>Conectado como: {userAddress}</p>
          </div>
        ) : (
          <button className="connect-wallet-btn" onClick={connectWallet}>
            Conectar Wallet
          </button>
        )}
      </header>
    </div>
  );
};

export default HomePage;
