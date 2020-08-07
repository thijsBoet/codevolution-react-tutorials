import React from "react";
import Name from "./Name";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];

  // Never use index with lists that are not static or might be reordered/filtered
  const nameList = names.map((name, index) => <Name key={index} name={name} />);
  return <div>{nameList}</div>;
}

export default NameList;
