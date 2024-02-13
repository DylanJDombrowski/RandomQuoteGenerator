import { Component } from "react";
import { Container } from "react-bootstrap";

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: "Quote goes here",
      currentAuthor: "Author name",
    };
    // Placeholder for future event handler bindings if necessary
  }

  // Placeholder for method to fetch new quote
  fetchNewQuote = () => {
    // Logic to fetch a new quote and update state
  };

  render() {
    const { currentQuote, currentAuthor } = this.state;
    return (
      <Container className="centered-container">
        <div id="quote-box">
          <p id="text">{currentQuote}</p>
          <p id="author">{currentAuthor}</p>
          <button id="new-quote" onClick={this.fetchNewQuote}>
            New Quote
          </button>
          {/* Button for tweeting the quote. Implementation will be added. */}
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              currentQuote + " - " + currentAuthor
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet Quote
          </a>
        </div>
      </Container>
    );
  }
}

export default QuoteBox;
