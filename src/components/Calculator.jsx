import React, { useState } from "react";
import './Calculator.css';
import Container from '@mui/material/Container'
import { Box } from "@mui/material";

export default function Calculator() {
    const [num,setNum] = useState(0);
    const [prevNum, setOldNum] = useState(0);
    const [operator,setOperator] = useState();

    function inputNum(e) {
        var input = e.target.value;
        if (num == 0) {
            setNum(input);
        }else {
            setNum(num + input);
        }
    }

    function clear() {
        setNum(0);
    }

    function percentage() {
        setNum(num / 100);
    }

    function changeOperator() {
        if (num > 0) {
            setNum(-num);
        }else {
            setNum(Math.abs(num));
        }
    }

    function operation(e) {
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        if (operator == "÷") {
            setNum(prevNum / num);
        }else if (operator == "x") {
            setNum(prevNum * num);
        }else if (operator == "-") {
            setNum(prevNum - num);
        }else {
            setNum(parseFloat(prevNum) + parseFloat(num));
        }
    }

    return(
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className="wrapper">
                <Box m={6}/>
                    <h1 className="result">{num}</h1>
                    <button className="orange" onClick={clear}>AC</button>
                    <button className="blueFont" onClick={changeOperator}>+/-</button>
                    <button className="blueFont" onClick={percentage}>%</button>
                    <button className="blueFont" onClick={operation} value="÷">÷</button>
                    <button className="gray" onClick={inputNum} value={7}>7</button>
                    <button className="gray" onClick={inputNum} value={8}>8</button>
                    <button className="gray" onClick={inputNum} value={9}>9</button>
                    <button className="blueFont" onClick={operation} value="x">x</button>
                    <button className="gray" onClick={inputNum} value={4}>4</button>
                    <button className="gray" onClick={inputNum} value={5}>5</button>
                    <button className="gray" onClick={inputNum} value={6}>6</button>
                    <button className="blueFont" onClick={operation} value="-">-</button>
                    <button className="gray" onClick={inputNum} value={1}>1</button>
                    <button className="gray" onClick={inputNum} value={2}>2</button>
                    <button className="gray" onClick={inputNum} value={3}>3</button>
                    <button className="blueFont" onClick={operation} value="+">+</button>
                    <button className="zero" onClick={inputNum} value={0}>0</button>
                    <button className="gray" onClick={inputNum} value={"."}>.</button>
                    <button className="blue" onClick={calculate}>=</button>
                </div>
            </Container>
        </div>
    )
}