// import LogoutButton from '../../buttons/logout';
// import { Flex, Box, Text } from "rebass";
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
const { ethers } = require("ethers");



export default function Login() {
  const [ethAddress, setEthAddress] = useState('No address yet')
  const loginHandler = async () => {
    try {
      if (window.ethereum) {
        //metamask is here
        // window.ethereum.request({ method: 'eth_requestAccounts' })
        //   .then(result => {
        //     setEthAddress(result[0]);
        //     console.log("log in")
        //     return result[0]
        //   })
        //   .then(
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        console.log(provider);
        // Prompt user for account connections
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        console.log("Account:", await signer.getAddress());
        //navigate to next page

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
      <button onClick={loginHandler}>Login</button>


    </div>
  )
}