import Button from "./component/Button";

// import ListGroup from "./component/ListGroup";
function App(){
  return (
    <div>
      <Button color="primary" onClick={()=>console.log('clicked')}>My button</Button>
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