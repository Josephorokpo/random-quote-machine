import React, { useState, useEffect } from "react";

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null); // State to handle errors

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to fetch quote. Please try again later.");
      setQuote(""); // Clear the quote if there's an error
      setAuthor(""); // Clear the author if there's an error
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div id="quote-box">
      {error ? (
        <p id="error" style={{ color: "red" }}>{error}</p> // Display error message
      ) : (
        <>
          <p id="text">"{quote}"</p>
          <p id="author">By {author}</p>
        </>
      )}
      <button id="new-quote" onClick={fetchRandomQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>
    </div>
  );
};

export default QuoteBox;
