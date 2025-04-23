import React, { useEffect, useState } from "react";
import axios from "axios";
import './Product.css'; // Import the CSS file here

function Product({ selectedItem, setselectedItem }) {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = (item) => {
    // Check if the item already exists in selectedItem
    const exists = selectedItem.find(x => x.id === item.id);
    if (exists) {
      // If item exists, update the count
      setselectedItem(selectedItem.map(x => 
        x.id === item.id ? {...x, count: x.count + 1} : x
      ));
    } else {
      // If item does not exist, add it with count 1
      setselectedItem([...selectedItem, {...item, count: 1}]);
    }
    console.log(item);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="itemss">
      {product.map((item) => (
        <div key={item.id} className="product-item">
          <p>{item.title}</p>
          <img src={item.image} alt={item.title} />
          <s>{item.price}</s>
          <button onClick={() => addItem(item)}>Add product</button>
        </div>
      ))}
    </div>
  );
}

export default Product;
