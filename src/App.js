import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    const [quote, setQuote] = useState("");
    const [error, setError] = useState(false)

    function getQuote() {
        axios
            .get("https://api.quotable.io/quotes/random")
            .then((res) => setQuote(res.data[0].content))
            .catch((err) => setError(true));
    }

    return (
        <>
            <main className="grid">
                <button className="bg-accent text-primary" onClick={getQuote}>
                    Get quote
                </button>
                {quote && <p className="text-center">{quote}</p>}
                {error && <p className="error | fs-300">Failed to get quote</p>}
            </main>
        </>
    );
}

export default App;
