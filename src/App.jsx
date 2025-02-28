import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [operator, setOperator] = useState('');
    const [isOn, setIsOn] = useState(false);
    const [count, setCount] = useState('');
    const [isDotUsed, setIsDotUsed] = useState(false);
    const [sum, setSum] = useState(0);
    const [isNewNumber, setIsNewNumber] = useState(false);

    function onButtonClickHandler() {
        setCount('0');
        setIsOn(true);
        setIsDotUsed(false);
        setSum(0);
    }

    function ccButtonClickHandler() {
        if (isOn) {
            setCount('0');
            setIsDotUsed(false);
            setSum(0);
        }
    }

    function equalsButtonClickHandler() {
        if (isOn && operator) {
            const num1 = sum;
            const num2 = Number(count);
            let result;

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num2 !== 0 ? num1 / num2 : 'Error';
                    break;
                default:
                    return;
            }

            setSum(result);
            setCount(result.toString());
            setOperator('');
            setIsNewNumber(true);
        }
    }

    function numbButtonClickHandler(numb) {
        if (isOn && count.length < 8) {
            setCount((prevCount) => {
                if (isNewNumber) {
                    setIsNewNumber(false);
                    return numb === '.' ? '0.' : numb;
                }

                return prevCount === '0' && numb !== '.' ? numb : prevCount + numb;
            });

            if (numb === '.') {
                setIsDotUsed(true);
            }
        }
    }

    function operatorButtonClickHandler(symbol) {
        if (isOn) {
            setSum((prevSum) => {
                let newSum;
                const currentNumber = Number(count);

                switch (operator) {
                    case '+':
                        newSum = prevSum + currentNumber;
                        break;
                    case '-':
                        newSum = prevSum - currentNumber;
                        break;
                    case '*':
                        newSum = prevSum * currentNumber;
                        break;
                    case '/':
                        newSum = currentNumber !== 0 ? prevSum / currentNumber : prevSum;
                        break;
                    default:
                        newSum = currentNumber;
                }

                return newSum;
            });

            setOperator(symbol);
            setIsNewNumber(true);
            setIsDotUsed(false);
        }
    }

    return (
        <>
            <div className="calculator">
                <div className="display">{count}</div>
                <div className="buttons">
                    <button onClick={() => onButtonClickHandler()} className="btn clear">
                        On
                    </button>
                    <button onClick={() => ccButtonClickHandler('CC')} className="btn operator">
                        CC
                    </button>
                    <button onClick={() => operatorButtonClickHandler('/')} className="btn operator">
                        /
                    </button>
                    <button onClick={() => operatorButtonClickHandler('*')} className="btn operator">
                        *
                    </button>

                    <button onClick={() => numbButtonClickHandler('7')} className="btn">
                        7
                    </button>
                    <button onClick={() => numbButtonClickHandler('8')} className="btn">
                        8
                    </button>
                    <button onClick={() => numbButtonClickHandler('9')} className="btn">
                        9
                    </button>
                    <button onClick={() => operatorButtonClickHandler('-')} className="btn operator">
                        -
                    </button>

                    <button onClick={() => numbButtonClickHandler('4')} className="btn">
                        4
                    </button>
                    <button onClick={() => numbButtonClickHandler('5')} className="btn">
                        5
                    </button>
                    <button onClick={() => numbButtonClickHandler('6')} className="btn">
                        6
                    </button>
                    <button onClick={() => operatorButtonClickHandler('+')} className="btn operator">
                        +
                    </button>

                    <button onClick={() => numbButtonClickHandler('1')} className="btn">
                        1
                    </button>
                    <button onClick={() => numbButtonClickHandler('2')} className="btn">
                        2
                    </button>
                    <button onClick={() => numbButtonClickHandler('3')} className="btn">
                        3
                    </button>

                    <button onClick={() => numbButtonClickHandler('0')} className="btn zero" colSpan="2">
                        0
                    </button>
                    <button onClick={() => numbButtonClickHandler('.')} className="btn">
                        .
                    </button>
                    <button onClick={() => equalsButtonClickHandler()} className="btn equal" rowSpan="2">
                        =
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
