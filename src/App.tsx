import { useEffect, useState } from "react";
import "./App.css";
import Item from "./item";

const allbutton = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];
function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('All')
  useEffect(() => {
    fetch(
      title == "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${title}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, [title]);
  console.log(data);

  const listItem = data.map((e) => (
    <Item
      key={e.id}
      thumbnail={e.thumbnail}
      title={e.title}
      description={e.description}
      rating={e.rating}
      price={e.price}
    />
  ));

 

  let button = allbutton.map((data, index) => (
    <button key={index} style={{margin:10}} onClick={() => {
      setTitle(data)
    }}>{data}</button>
  ));

  let filterAll = () => {
    setTitle('All')
  }
  

  return (
    <div>
      <div className="header">
        <h1>Our Product</h1>
      </div>
      <div className="container-button">
        <button onClick={filterAll}>All</button>
        {button}</div>
      <div className="container">
        <div className="box-item">{listItem}</div>
        </div>
    </div>
  );
}

export default App;
