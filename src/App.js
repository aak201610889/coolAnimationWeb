import { useState } from "react";
import Product from "./Product";
import Selected from "./Selected";


function App() {
  const [selectedItem, setselectedItem] = useState([]);
  return (
    <div className="App">
      <div className="product">
        <Product
          selectedItem={selectedItem}
          setselectedItem={setselectedItem}
        />
      </div>
      <div className="selected">
        <Selected  selectedItem={selectedItem}/>
      </div>
    </div>
  );
}

export default App;
