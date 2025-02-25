import React, { useState } from "react";
import "./humanizing.css";

const HumanizingPage = () => {
    const [inputText, setInputText] = useState("");
    const [tone, setTone] = useState("casual");
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Demo output for the input "Hi"
        if (inputText.trim().toLowerCase() === "hi") {
            setResult({
                refined_text: "Hi",
                highlighted_text: "Hi",
                ai_likelihood_percentage: 0,
            });
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/humanize", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text: inputText,
                    tone: tone,
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            setResult(data);
        } catch (error) {
            setError("Error humanizing text: " + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>AI Text Humanizer</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="text">Enter text to humanize:</label>
                    <textarea
                        id="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="tone">Select tone:</label>
                    <select
                        id="tone"
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                    >
                        <option value="casual">Casual</option>
                        <option value="professional">Professional</option>
                        <option value="friendly">Friendly</option>
                        <option value="formal">Formal</option>
                    </select>
                </div>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Processing..." : "Humanize Text"}
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {result && (
                <div className="result-container">
                    <h2 className="result-title">Results</h2>

                    <div>
                        <h3>Humanized Text:</h3>
                        <div className="result-box">{result.refined_text}</div>
                    </div>

                    <div>
                        <h3>Highlighted Changes:</h3>
                        <div
                            className="result-box"
                            dangerouslySetInnerHTML={{
                                __html: result.highlighted_text,
                            }}
                        />
                    </div>

                    <div>
                        <h3>Humanized Percentage:</h3>
                        <div className="percentage-box">
                            {result.ai_likelihood_percentage}% of the text was
                            modified
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HumanizingPage;
