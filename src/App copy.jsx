import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    let a = 0;
    let b = 0;
    let operator = '';

    function numbButtonClickHandler(numb) {
        // setCount(0);

        if (count == 0) {
            setCount((currNum) => numb);
        } else {
            // setCount((currNum) => currNum + '' + numb);
            setCount((currNum) => '' + currNum + numb);
        }
    }

    function operatorButtonClickHandler(symbol) {
        a = Number(count);
        operator = symbol;

        // setCount(count);

        console.log(a, symbol);
    }

    return (
        <>
            <div className="calculator">
                <div className="display">{count}</div>
                <div className="buttons">
                    <button onClick={() => numbButtonClickHandler(7)} className="btn">
                        7
                    </button>
                    <button onClick={() => numbButtonClickHandler(8)} className="btn">
                        8
                    </button>
                    <button onClick={() => numbButtonClickHandler(9)} className="btn">
                        9
                    </button>
                    <button onClick={() => operatorButtonClickHandler('/')} className="btn operator">
                        /
                    </button>

                    <button onClick={() => numbButtonClickHandler(4)} className="btn">
                        4
                    </button>
                    <button onClick={() => numbButtonClickHandler(5)} className="btn">
                        5
                    </button>
                    <button onClick={() => numbButtonClickHandler(6)} className="btn">
                        6
                    </button>
                    <button onClick={() => operatorButtonClickHandler('*')} className="btn operator">
                        *
                    </button>

                    <button onClick={() => numbButtonClickHandler(1)} className="btn">
                        1
                    </button>
                    <button onClick={() => numbButtonClickHandler(2)} className="btn">
                        2
                    </button>
                    <button onClick={() => numbButtonClickHandler(3)} className="btn">
                        3
                    </button>
                    <button onClick={() => operatorButtonClickHandler('-')} className="btn operator">
                        -
                    </button>

                    <button onClick={() => numbButtonClickHandler(0)} className="btn">
                        0
                    </button>
                    <button onClick={() => numbButtonClickHandler('.')} className="btn">
                        .
                    </button>
                    <button className="btn">=</button>
                    <button onClick={() => operatorButtonClickHandler('+')} className="btn operator">
                        +
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
