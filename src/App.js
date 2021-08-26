import { useState } from "react";
import React from 'react'
import './CSS/index.css'
import './CSS/Button.css'

export default function App(props) {

    const [numbers, setNumbers] = useState(Array(8).fill(0))

    function tradeNumbers(array) {

        const max = 60;
        const min = 1;
        const newNumber = parseInt(Math.random() * (max + min) - min)

        return array.includes(newNumber) ?
            tradeNumbers(array) : newNumber

    }

    function showNumber() {

        const newArray = Array(8)
            .fill(0)
            .reduce(a => [...a, tradeNumbers(a)], [])
            .sort((a, b) => a + b)

        setNumbers(newArray)

    }




    return ( 
    
    <div className = "App" >


        <h1>MEGA-SENA <br/><br/>{ numbers.join('  ') } </h1>  
       
        <button class="myButton"onClick = { showNumber }>Gerar Numeros </button>



        </div>
    );
}