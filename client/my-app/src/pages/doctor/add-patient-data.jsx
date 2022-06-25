import LogoutButton from "../../buttons/logout";
import PatientsButton from "../../buttons/doctor/patients";
import PatientButton from "../../buttons/doctor/patient";
import AddPatientDataForm from "../../forms/add-patient-data";

import { Flex } from "rebass";
import { useEffect, useState } from 'react'
import { PrivyClient, SiweSession } from '@privy-io/privy-browser'

// Initialize the Privy client.
const provider = typeof window !== "undefined" ? window.ethereum : null;
const session = new SiweSession(process.env.NEXT_PUBLIC_PRIVY_API_KEY, provider)
const client = new PrivyClient({
  session: session,
});

export default function AddPatientData() {

  const [state, setState] = useState(null);
  const [nameInput, setNameInput] = useState("");
  const [colorInput, setColorInput] = useState("");

  const fetchDataFromPrivy = async () => {
    try {
      // If this is a refresh, we need to pull the address into state
      const address = await session.address();
      if (!address) return

      // Fetch user's name and favorite color from Privy
      const [firstName, favColor] = await client.get(address, ['first-name', 'fav-color']);
      setState({
        ...state,
        userId: address,
        firstName: firstName?.text(),
        favColor: favColor?.text()
      })
      setNameInput(firstName?.text())
      setColorInput(favColor?.text())

    } catch (error) {
      console.error(error);
    }
  }

  // When the page first loads, check if there is a connected wallet and get
  // user data associated with this wallet from Privy
  useEffect(() => {
    fetchDataFromPrivy()
  }, [])

  /* Connect to a MetaMask wallet */
  const connectToWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask for this demo: https://metamask.io/");
        return;
      }

      await session.authenticate();
      const userId = await session.address();
      setState({
        ...state,
        userId: userId
      });

      // After the wallet has been detected, we try to grab data from Privy if
      // it exists
      fetchDataFromPrivy()
    } catch (error) {
      console.error(error);
    }
  }

  /* Write the user's name and favorite color to Privy and personalizes the app */
  const submitDataToPrivy = async () => {
    const [firstName, favColor] = await client.put(state?.userId, [
      {
        field: "first-name",
        value: nameInput
      },
      {
        field: "fav-color",
        value: colorInput
      }
    ]);
    setState({
      ...state,
      firstName: firstName.text(),
      favColor: favColor.text(),
    })
  }

  // A convenient shortening of a long address
  const placeholderName = state?.userId?.substring(0, 5) + "..." + state?.userId?.substring(state?.userId?.length - 4)

  return (
   <div>
    <Flex>
      <LogoutButton/>
      <PatientsButton/>
      <PatientButton/>
    </Flex>
    <AddPatientDataForm/>
     <text>AddPatientData</text>

     <div className="container">
        {state?.userId && (
          <>
            <h1>
              Hey {state?.firstName ? state?.firstName : placeholderName} 👋
            </h1>
            <div>
              <div className='inputForm'>
                <label htmlFor='name'>Name</label>
                <input id="name" onChange={(event) => { setNameInput(event.target.value) }} value={nameInput} placeholder={placeholderName}/>
                <label htmlFor='color'>Favorite color</label>
                <input onChange={(event) => { setColorInput(event.target.value) }} value={colorInput}/>
              </div>
            </div>
            <div>
              <button style={{ fontSize: '1.6rem' }} onClick={submitDataToPrivy} disabled={state.favColor == colorInput && state.firstName == nameInput}>Save with Privy</button>
            </div>
          </>
        )}

        {!state?.userId && (
          <>
            <div>
              To get started, connect with MetaMask!
            </div>
            <button onClick={connectToWallet}>
              Connect Wallet
            </button>
          </>
        )}
      </div>
     
   </div>
  )
}