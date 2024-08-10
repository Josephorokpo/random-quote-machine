import React, { useState, useEffect } from "react";

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchRandomQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div id="quote-box">
      <p id="text">"{quote}"</p>
      <p id="author">- {author}</p>
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
