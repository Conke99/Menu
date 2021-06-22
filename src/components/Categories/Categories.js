import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <ul className="choices">
      {categories.map((category, index) => {
        return (
          <li key={index} onClick={() => filterItems(category)}>
            {category}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
