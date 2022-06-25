import { Flex, Box, Text } from "rebass";
import { useEffect, useState } from 'react'
import { PrivyClient, SiweSession } from '@privy-io/privy-browser'
import LogoutButton from "../../buttons/logout";

// Initialize the Privy client.
const provider = typeof window !== "undefined" ? window.ethereum : null;
const session = new SiweSession(process.env.NEXT_PUBLIC_PRIVY_API_KEY, provider)
const client = new PrivyClient({
  session: session,
});


const userId = await session.address();

export default function PatientData() {



  return (
    <div>
      <Flex>
        <LogoutButton />
      </Flex>
      <text>PatientData</text>
    </div>
  )
}