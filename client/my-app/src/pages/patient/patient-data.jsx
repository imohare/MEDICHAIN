import { Flex, Box, Text} from "rebass";

import LogoutButton from "../../buttons/logout";
import myData from './medicationAdmin.json';
import PatientDataList from "../../lists/patient-data-list";

export default function PatientData() {

  return (
    <div>

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
