// import ListGroup from "./component/ListGroup";
import  Alert  from "./component/Alert";

function App(){
  return (
    <div className="alert alert-primary">
      <Alert>
    Hello <span>World</span>
        </Alert>
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