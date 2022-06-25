import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import LogoutButton from '../../buttons/logout';
import { Flex, Box, Text } from "rebass";

export default function PatientPermissions() {

  return (
    <main style={{ padding: "1rem 0" }}>
      <Flex>
        <LogoutButton/>
      </Flex>
      <Box px={2} py={2} width={2 / 3}>
        <Text>AddPatient</Text>
      </Box>
    </main>
  )
}