import { useState } from "react";
import Alert from "./component/Alert";
import Button from "./component/Button";

// import ListGroup from "./component/ListGroup";
function App(){
const [alertVisible, setAlertVisibility]=useState(false);

  return (
    <div>
      {alertVisible &&<Alert onClose={()=> setAlertVisibility(false)}>My alert</Alert>}
      <Button color="primary" onClick={()=>setAlertVisibility(true)}>My button</Button>
    </div>
  );

  // let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  
  // const handleSelectItem = (item: string)=>{
  //   console.log(item);
  // }

  // return <div>
  //   <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  // </div>;
}

export default App;