import { React, useState } from "react";
import data from "./Options.json";
import OptionList from "./OptionList";
import Choice from "./Choice";

export default function PizzaBuilder() {
  const [selection, setSelection] = useState(null);
  const [options, setOptions] = useState(data);

  //despite the name, this is used for all toppings!
  const setDough = function(type, exclusive) {
    return function(id) {
      let optionsCopy = { ...options };
      let DoughsCopy = [...optionsCopy[type]];
      let foundIndex = DoughsCopy.findIndex((dough) => dough.id === id);
      let DoughCopy = { ...DoughsCopy[foundIndex] };

      if (exclusive) {
        let foundIndex2 = DoughsCopy.findIndex(
          (dough) => dough.selected === true
        );
        let DoughCopy2 = { ...DoughsCopy[foundIndex2] };
        DoughCopy2.selected = false;
        DoughsCopy[foundIndex2] = DoughCopy2;
      }

      DoughCopy.selected = !DoughCopy.selected;
      DoughsCopy[foundIndex] = DoughCopy;

      optionsCopy[type] = DoughsCopy;
      setOptions(optionsCopy);
    };
  };

  var output = null;
  switch (selection) {
    case "Dough":
      output = (
        <OptionList
          Dough={options.Dough}
          setDough={setDough("Dough", "exclusive")}
        />
      );
      break;
    case "Crust":
      output = (
        <OptionList
          Dough={options.Crust}
          setDough={setDough("Crust", "exclusive")}
        />
      );
      break;
    case "Cheese":
      output = (
        <OptionList
          Dough={options.Cheese}
          setDough={setDough("Cheese", "exclusive")}
        />
      );
      break;
    case "Veggies":
      output = (
        <OptionList Dough={options.Veggies} setDough={setDough("Veggies")} />
      );
      break;
    case "Meat":
      output = <OptionList Dough={options.Meat} setDough={setDough("Meat")} />;
      break;
    case "Drink":
      output = (
        <OptionList
          Dough={options.Drink}
          setDough={setDough("Drink", "exclusive")}
        />
      );
      break;
    default:
      output = "Customize Pizza";
  }

  const myFilter = function() {
    let theCopy = {};
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        const topping = options[key];
        theCopy[key] = topping.filter((el) => el.selected === true);
      }
    }
    return theCopy;
  };

  return (
    <div>
      <Choice options={myFilter(options)} />
      <div style={{ display: "flex" }}>
        <button onClick={() => setSelection("Dough")}>Dough</button>
        <button onClick={() => setSelection("Crust")}>Crust</button>
        <button onClick={() => setSelection("Cheese")}>Cheese</button>
        <button onClick={() => setSelection("Veggies")}>Veggies</button>
        <button onClick={() => setSelection("Meat")}>Meat</button>
        <button onClick={() => setSelection("Drink")}>Drink</button>
      </div>
      <div> {output} </div>
    </div>
  );
}
