import React from "react";

// Components
import Cocktail from "./Cocktail";

const Cocktails = ({ cocktails }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Cocktail Name</th>
          <th>Cocktail Category</th>
          <th>Cocktail Image</th>
        </tr>
      </thead>
      <tbody>
        {cocktails.map((cocktail) => (
          <Cocktail
            key={cocktail.idDrink}
            name={cocktail.strDrink}
            category={cocktail.strCategory}
            image={cocktail.strDrinkThumb}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Cocktails;
