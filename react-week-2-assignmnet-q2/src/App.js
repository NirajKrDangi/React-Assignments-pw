import { useState } from "react"
import './App.css';

function App() {
    const [X, setX] = useState(0);
    return (
        <>
            <div className="container">
                <h1>Counter App</h1>
                <p>{X}</p>
                <div className="buttons">
                    <button onClick={() => (X < 10) ? setX(X + 1) : setX(10)}>Increment</button>
                    <button onClick={() => (X > -10) ? setX(X - 1) : setX(-10)}>Decrement</button>
                </div>
            </div>
        </>
    )
}

export default App