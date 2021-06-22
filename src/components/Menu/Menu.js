import React from "react";

import "./Menu.css";

const Menu = ({ items }) => {
  return (
    <div className="items">
      {items.map((menuItem) => {
        const { id, img, title, description, price } = menuItem;
        return (
          <div className="item" key={id}>
            <div>
              <img className="picture" src={`${img}`} alt={img} />
            </div>
            <div className="about">
              <div className="about_title">
                <h2>{title}</h2>
                <code>{price}</code>
              </div>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
