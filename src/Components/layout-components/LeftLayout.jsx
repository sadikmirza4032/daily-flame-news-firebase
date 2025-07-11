import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftLayout = () => {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div className="">
      <h2 className="font-semibold mb-3 ">
        All Categories ({Categories.length})
      </h2>
      <div className="flex flex-col gap-3 justify-center items-center ">
        {Categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn border-none "
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftLayout;
