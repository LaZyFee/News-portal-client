import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseUrl = "https://news-portal-three-beta.vercel.app";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/news-categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4>All Category: {categories.length}</h4>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/0${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
