// import LogoutButton from '../../buttons/logout';
// import { Flex, Box, Text } from "rebass";
import React, { useEffect, useState } from 'react';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Navigate } from 'react-router-dom';
import "./login.css";
import { PrivyClient, SiweSession } from '@privy-io/privy-browser'
import { useNavigate } from 'react-router-dom';
const { ethers } = require("ethers")

export default function Login() {
  const [ethAddress, setEthAddress] = useState('No address yet');
  const [providerState, setProvider] = useState('No provider yet');
  const [signerState, setSigner] = useState('No signer yet');
  const [sessionState, setSession] = useState('No session yet');
  const [clientState, setClient] = useState('No client yet');
  const navigate = useNavigate();



  const loginHandlerPatient = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        setProvider(provider);
        console.log(provider);
        // Prompt user for account connections
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        setSigner(signer);
        console.log("Account:", await signer.getAddress());
        //navigate to next page
        navigate('./patient');

        //const provider = typeof window !== "undefined" ? window.ethereum : null;


        //iitialise privy client
      }
    }
    catch {
      console.log('Please install Metamask');

    }
  }

  const loginHandlerDoctor = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        setProvider(provider);
        console.log(provider);
        // Prompt user for account connections
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        setSigner(signer);
        console.log("Account:", await signer.getAddress());
        //navigate to next page
        navigate('./patient');

        //const provider = typeof window !== "undefined" ? window.ethereum : null;


        //iitialise privy client
      }
    }
    catch {
      console.log('Please install Metamask');

    }
  }
  return (
    <div>
      <h1>Welcome To Medichain</h1>
      <h2>Take Control Of Your Own Data</h2>
      <button onClick={loginHandlerPatient}>Login As Patient</button>
      <button onClick={loginHandlerDoctor}>Login As Doctor</button>




    </div>
  )
}