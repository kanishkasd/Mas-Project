import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const categories: string[] = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
  "Category 6",
];

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Video Stitching App</h1>
      <div className="grid">
        {categories.map((category, index) => (
          <Link key={index} to={`/category/${category}`} className="card">
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
