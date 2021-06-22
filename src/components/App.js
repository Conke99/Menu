import "./App.css";

import React, { useState } from "react";
import Menu from "./Menu/Menu";
import Categories from "./Categories/Categories";
import { items } from "./items/items";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div>
      <div className="Menu_container">
        <h1>Our Menu</h1>
        <div>
          <Categories categories={categories} filterItems={filterItems} />
        </div>
      </div>
      <Menu items={menuItems} />
    </div>
  );
};

export default App;
