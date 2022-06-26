import { useNavigate } from "react-router-dom";
import { Button, Text} from "rebass";

export default function PatientsButton() {

  let navigate = useNavigate(); 
  const PatientsRoute = () =>{ 
    let path = `/doctor`; 
    navigate(path);
  }

  return (
    <div>
      <Button mr={2} onClick={PatientsRoute} backgroundColor="#33e">
        <br/> <br/> <br/> <br/> <br/>
        <Text> Patients </Text>
      </Button>
    </div>
  );
}