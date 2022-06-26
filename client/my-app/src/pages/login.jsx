import { Flex, Box, Text, Heading, Button, Image } from "rebass";
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import logo from '../medichain-logo.png';
import logo2 from '../medichain-logo-2.png';
const { ethers } = require("ethers")

export default function Login() {
  const [ethAddress, setEthAddress] = useState('No address yet');
  const [providerState, setProvider] = useState('No provider yet');
  const [signerState, setSigner] = useState('No signer yet');
  const [sessionState, setSession] = useState('No session yet');
  const [clientState, setClient] = useState('No client yet');
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        setProvider(provider);
        console.log(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        setSigner(signer);
        navigate('./patient');

        //const provider = typeof window !== "undefined" ? window.ethereum : null;
      }
    }
    catch {
      console.log('Please install Metamask');

    }
  }

  return (
    <div>
           <br/>     <br/>     <br/>     <br/>     <br/>     <br/>     <br/>     <br/>     <br/>     <br/>     <br/>     <br/>     <br/>     <br/>     <br/>     <br/>     <br/>
        <Box>
            <Heading fontFamily="roboto" textAlign="center" fontSize={[ 5, 6, 7 ]} color='#33e' fontWeight='bold'> Welcome To Medichain </Heading>
        </Box>
        <br/>
        <Box> 
          <Text fontFamily="Roboto" textAlign="center">Take Control Of Your Own Data</Text>
        </Box>
        <br/>
        <Flex>
  <Box width={[ 1, 1/2 ]}>
        <Image width={[ 1/4 ]} src={logo2} borderRadius={8}/>
    </Box>
  <Box width={[ 1, 1/2 ]}>
    <Button onClick={loginHandler}>Login using Metamask</Button>
  </Box>
</Flex>

    </div>
  )
}