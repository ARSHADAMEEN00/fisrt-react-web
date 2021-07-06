import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItem(props) {
  const [readMore, setReadMore] = useState(false);
  const handleReadmore = () => {
    setReadMore(!readMore);
  };
  console.log(readMore);
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <Link to={props.path}>
            <figure
              className="cards__item__pic-wrap"
              data-category={props.label}
            >
              <img src={props.src} alt="travel" className="cards__item__img" />
            </figure>
          </Link>
          <div className="cards__item__info">
            <h4 className="cards__item__text">
              {props.text} <span onClick={handleReadmore}>more..</span>{" "}
            </h4>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
