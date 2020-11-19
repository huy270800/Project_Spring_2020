import React from 'react'

export default function Choice(props) {
    let chosenToppings = "";
    let totalPrice = 0;
    for (const key in props.options) {
        if (props.options.hasOwnProperty(key)) {
            const element = props.options[key];
            chosenToppings+= key + ": ";
            for (let i=0; i < element.length; i++) {
                chosenToppings += element[i].name + ", ";
                totalPrice += element[i].price;
            }
            
        }
    }
    return (
        <div>
            <button onClick={()=>console.log(props.options)} > test </button>
            <div>
                You have chosen: {chosenToppings}
            </div>
            <div>
                Price is: {totalPrice} €
            </div>
        </div>
    )
}
