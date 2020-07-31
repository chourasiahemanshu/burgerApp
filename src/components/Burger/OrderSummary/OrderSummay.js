import React from 'react';
import Aux from '../../../hoc/Auxi';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>The Burger withthe following ingredients :</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    )
};

export default orderSummary;