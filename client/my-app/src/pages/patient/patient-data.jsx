import { useEffect, useState } from 'react'
import { PrivyClient, SiweSession } from '@privy-io/privy-browser'
import Head from 'next/head';
import Color from 'color'
import { PrivyConfig } from '@privy-io/privy-node';
console.log(PrivyConfig);

const LIGHT_TEXT_COLOR = '#FFFFFF'
const DARK_TEXT_COLOR = '#171717'

// Initialize the Privy client.
const provider = typeof window !== "undefined" ? window.ethereum : null;
const session = new SiweSession(process.env.NEXT_PUBLIC_PRIVY_API_KEY, provider)
const client = new PrivyClient({
  session: session,
});


// const privyConfig = new PrivyConfig("wyc4cQzc6fZQUP_mCe4lzx9c1xHkNmH-UF7owH0tzFE=", "0tZTH7PFcVpk5du9jd8FR1-ubh3-49FMnSb2YWb6_aE=");
// const newRole = await privyConfig.createRole('my-role-name', 'my-role-description');


/* A fun little text styling change depending on your favorite color. */
function pickTextColorBasedOnBgColor(bgColor) {
  try {
    const color = Color(bgColor)
    return color.isLight() ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR;
  } catch (e) {
    return DARK_TEXT_COLOR
  }
}

export default function Home() {
  // Use React's useState hook to keep track of the signed in Ethereum address and input field values
  // The state represents the latest information we've pulled from Privy, while
  // the inputs are tracked locally so we can tell when we different from remote
  // state.
  const LIGHT_TEXT_COLOR = '#FFFFFF'
  const DARK_TEXT_COLOR = '#171717'
  const [state, setState] = useState(null);
  const [nameInput, setNameInput] = useState("");
  const [colorInput, setColorInput] = useState("");
  const [drug, setDrug] = useState("");
  const [quantityOfDrug, setQuantityOfDrug] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [textColor, setTextColor] = useState(DARK_TEXT_COLOR);


  const fetchDataFromPrivy = async () => {
    try {
      // If this is a refresh, we need to pull the address into state
      const address = await session.address();
      if (!address) return

      // Fetch user's name and favorite color from Privy
      const [firstName, favColor, drug, quantityOfDrug, doctor, date] = await client.get(address, ['first-name', 'fav-color', 'drug', 'quantity-of-drug', 'doctor', 'date']);
      setState({
        ...state,
        userId: address,
        firstName: firstName?.text(),
        favColor: favColor?.text(),
        drug: drug?.text(),
        quantityOfDrug: quantityOfDrug?.text(),
        doctor: doctor?.text(),
        date: date?.text()
      })
      setNameInput(firstName?.text());
      setColorInput(favColor?.text());
      setDrug(drug?.text());
      setQuantityOfDrug(quantityOfDrug?.text());
      setDoctor(doctor?.text());
      setDate(date);
      console.log(firstName, favColor, drug, quantityOfDrug, favColor, drug, quantityOfDrug, doctor);

    } catch (error) {
      console.error(error);
    }
  }

  // When the page first loads, check if there is a connected wallet and get
  // user data associated with this wallet from Privy
  useEffect(() => {
    fetchDataFromPrivy()
  }, [])

  // This effect hook is just for fun to style the text based on your favorite
  // color and makes it easier to read.
  useEffect(() => {
    if (!state?.favColor) return

    document.body.style = `background: ${state.favColor};`;
    setTextColor(pickTextColorBasedOnBgColor(state.favColor))
    submitDataToPrivy();

  }, [state])

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
    const [firstName, favColor, drug, quantityOfDrug, doctor, date] = await client.put(state?.userId, [
      {
        field: "first-name",
        value: nameInput
      },
      {
        field: "fav-color",
        value: colorInput
      },
      {
        field: 'drug',
        value: "Penicillin",
      },
      {
        field: 'quantity-of-drug',
        value: "5 mg",
      },
      {
        field: 'doctor',
        value: "Dr. Chen",
      },
      {
        field: 'date',
        value: "2022",
      }

    ]);

    //add admin and read
    const newRoleRequesters = await client.addRequestersToRole('Read-admin', [
      'adminId',
    ]);

    console.log(newRoleRequesters);
    console.log(await privyConfig.get('adminId', ['first-name', 'fav-color', 'drug', 'quantity-of-drug', 'doctor', 'date']));


    setState({
      ...state,
      firstName: firstName.text(),
      favColor: favColor.text(),
      drug: drug.text(),
      quantityOfDrug: quantityOfDrug.text(),
      doctor: doctor.text(),
      date: date.text(),


    })
  }

  // A convenient shortening of a long address
  const placeholderName = state?.userId?.substring(0, 5) + "..." + state?.userId?.substring(state?.userId?.length - 4)

  // What is rendered on the page
  return (
    <div>
      <Head>
        <title>Privy Quickstart</title>
      </Head>
      <div style={{ color: textColor }} className="container">
        {state?.userId && (
          <>
            <h1>
              Hey {state?.firstName ? state?.firstName : placeholderName} 👋
            </h1>
            <div>
              <div className='inputForm'>
                <label htmlFor='name'>Name</label>
                <input id="name" onChange={(event) => { setNameInput(event.target.value) }} value={nameInput}
                  style={{ borderBottomColor: textColor }}
                  placeholder={placeholderName}
                />
                {/* <label htmlFor='color'>Favorite color</label>
                <input onChange={(event) => { setColorInput(event.target.value) }} value={colorInput}
                  style={{ borderBottomColor: textColor }} /> */}

                <label htmlFor='drug'>Drug</label>
                <input onChange={(event) => { setDrug(event.target.value) }} value={drug}
                  style={{ borderBottomColor: textColor }} />

                <label htmlFor='quantityOfDrug'>Drug Quantity</label>
                <input onChange={(event) => { setQuantityOfDrug(event.target.value) }} value={quantityOfDrug}
                  style={{ borderBottomColor: textColor }} />

                <label htmlFor='doctor'>Doctor</label>
                <input onChange={(event) => { setDoctor(event.target.value) }} value={doctor}
                  style={{ borderBottomColor: textColor }} />

                {/* <label htmlFor='date'>Date</label>
                <input onChange={(event) => { setDoctor(event.target.value) }} value={date}
                  style={{ borderBottomColor: textColor }} /> */}
              </div>

            </div>
            <div>
              <button style={{ fontSize: '1.6rem' }} onClick={submitDataToPrivy} disabled={state.favColor == colorInput && state.firstName == nameInput}>Save To Your Electronic Health Record</button>
            </div>
          </>
        )}

        {!state?.userId && (
          <>
            <div>
              To access your Health Record, connect with MetaMask!
            </div>
            <button onClick={connectToWallet}>
              Connect Wallet
            </button>
          </>
        )}
      </div>
    </div >
  );
}
