import { useEffect, useState } from 'react';
import './App.css';
import quotesData from "./assets/quotes.json";
import { FaQuoteLeft, FaQuoteRight, FaTwitter } from "react-icons/fa";

function App() {
  const [quote, setQuote] = useState({
    text: "",
    author: ""
  });
  const [randomColor, setRandomColor]=useState("");
  const getRandomColor=()=>{
    const red=Math.floor(Math.random()*127);
    const green=Math.floor(Math.random()*127);
    const blue=Math.floor(Math.random()*127);
    setRandomColor(`rgb(${red}, ${green}, ${blue})`);
  }
   

  const getQuotes = () => {
    const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];
    setQuote({
      text: randomQuote.quote,
      author: randomQuote.author,
    });
    getRandomColor();
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote.text}" - ${quote.author}`
    )}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div className="background" style={{backgroundColor: randomColor}} >
      <div className="container" id="quote-box" style={{backgroundColor: randomColor}}>
        <div className="quote-content">
          <FaQuoteLeft size="28" style={{ marginRight: "10px" }} />
          <h2 id="text">{quote.text}</h2>
          <FaQuoteRight size="28" style={{ marginLeft:"400px"}} />
          <h3 id="author">-- {quote.author}</h3>
        </div>

        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote.text}" - ${quote.author}`
            )}`}
            id="tweet-quote"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#1DA1F2',
              marginRight: '10px'
            }}
          >
            <FaTwitter color='white'/>
          </a>
          <button onClick={getQuotes} id="new-quote">New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
