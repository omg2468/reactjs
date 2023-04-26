import React from "react";
import "./item.css";

interface Item {
  thumbnail: string;
  title: string;
  description: string;
  rating: number;
  price: number;
}


export default function Item(props: Item) {
  return (
    <div className="box">
      <img src={props.thumbnail} alt={props.title} width={400} height={300} />
      <h2>{props.title}</h2>
      <div className="description">{props.description}</div>
      <div className="footer">
        <div className="rating">
          {props.rating}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </div>
        <div className="price">{props.price}$</div>
      </div>
    </div>
  );
}

Item.displayName = "Item";

Item.defaultProps = {
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  title: "Iphone",
  description: "Đây là iphone",
  rating: 0,
  price: 0,
};
