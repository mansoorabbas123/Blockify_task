import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="wizard" style={{ marginRight: "10px" }}>
        Job Wizard
      </Link>
      <Link to="data-table" style={{ marginRight: "10px" }}>
        Data Table
      </Link>
      <Link to="users">Users</Link>
    </div>
  );
};

export default Home;
