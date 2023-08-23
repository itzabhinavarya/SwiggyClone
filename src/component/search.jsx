import React from "react";
import "./search.css";

export function FilterData(searchText, FoodData) {
  const words = searchText.toLowerCase().split(" ");
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const finalSearch = formattedWords.join(" ");
  var data = FoodData.filter((FoodData) => FoodData.name.includes(finalSearch));
  return data;
}
const Search = () => {
  return <></>;
};

export default Search;
