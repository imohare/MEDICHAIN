import { useNavigate } from "react-router-dom";
import { Button, Text} from "rebass";

export default function PatientDataButton() {

  let navigate = useNavigate(); 
  const PatientDataRoute = () =>{ 
    let path = `/patient`; 
    navigate(path);
  }

  return (
    <div>
      <Button mr={2} onClick={PatientDataRoute} backgroundColor="#33e">
        <Text>
          My Data
        </Text>
      </Button>
    </div>
  );
}