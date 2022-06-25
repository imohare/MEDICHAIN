import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text} from "rebass";

export default function PatientButton() {

  let navigate = useNavigate(); 
  const PatientRoute = () =>{ 
    let path = `/doctor/:patientId`; 
    navigate(path);
  }

  return (
    <div>
      <Button mr={2} onClick={PatientRoute} backgroundColor="#33e">
        {/* change this so that it actually has the patient name */}
        <Text>
          Patient 
        </Text>
      </Button>
    </div>
  );
}