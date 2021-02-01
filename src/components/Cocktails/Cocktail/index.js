import React from "react";

const Cocktail = ({ name, category, image }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <img src={image} alt="cocktail" />
      </td>
    </tr>
  );
};

export default Cocktail;
