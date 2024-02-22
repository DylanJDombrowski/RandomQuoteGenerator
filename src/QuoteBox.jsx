import { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: "",
      currentAuthor: "",
      backgroundColor: "#ffffff",
    };
    // Placeholder for future event handler bindings if necessary
  }

  componentDidMount() {
    // Fetch a new quote when the component mounts
    this.fetchNewQuote();
  }

  // Placeholder for method to fetch new quote
  fetchNewQuote = () => {
    // Logic to fetch a new quote and update state
    const quotes = [
      {
        text: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates",
      },
      {
        text: "At the touch of love everyone becomes a poet.",
        author: "Plato",
      },
      {
        text: "The mind is everything; what you think you become.",
        author: "Buddha",
      },
      {
        text: "To be, or not to be, that is the question.",
        author: "William Shakespeare",
      },
      { text: "I think, therefore I am.", author: "René Descartes" },
      { text: "Know thyself.", author: "Socrates" },
      { text: "The unexamined life is not worth living.", author: "Socrates" },
      {
        text: "You will not be punished for your anger, you will be punished by your anger.",
        author: "Buddha",
      },
      {
        text: "The greatest wealth is to live content with little.",
        author: "Plato",
      },
      {
        text: "One cannot step twice in the same river.",
        author: "Heraclitus",
      },
      {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu",
      },
      { text: "Act without expectation.", author: "Lao Tzu" },
      {
        text: "Mastering others is strength. Mastering yourself is true power.",
        author: "Lao Tzu",
      },
      {
        text: "When you realize there is nothing lacking, the whole world belongs to you.",
        author: "Lao Tzu",
      },
      {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb",
      },
      { text: "An obstacle is often a stepping stone.", author: "Prescott" },
      {
        text: "The mind is everything. What you think you become.",
        author: "Buddha",
      },
      {
        text: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll",
      },
      {
        text: "Change your thoughts and you change your world.",
        author: "Norman Vincent Peale",
      },
      {
        text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar",
      },
      {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
      },
      {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
      },
      {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
      },
      {
        text: "Our lives begin to end the day we become silent about things that matter.",
        author: "Martin Luther King Jr.",
      },
      {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt",
      },
      {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson",
      },
      {
        text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau",
      },
      {
        text: "When I let go of what I am, I become what I might be.",
        author: "Lao Tzu",
      },
      {
        text: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
      },
      {
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson",
      },
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    //update state with new quote
    this.setState({
      currentQuote: selectedQuote.text,
      currentAuthor: selectedQuote.author,
      backgroundColor: randomColor,
    });
  };

  render() {
    const { currentQuote, currentAuthor, backgroundColor } = this.state;

    document.body.style.backgroundColor = backgroundColor;
    return (
      <Container className="centered-container">
        <div
          id="quote-box"
          style={{
            color: backgroundColor,
          }}
        >
          <p className="fs-2 text-center" id="text">
            &quot;{currentQuote}&quot;
          </p>
        </div>
        <p
          className="text-end fs-5"
          style={{ color: backgroundColor }}
          id="author"
        >
          - {currentAuthor}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a
            style={{
              backgroundColor: backgroundColor,
              fontSize: "18px",
              color: "white",
              marginTop: "20px",
            }}
            className="btn"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              currentQuote + " - " + currentAuthor
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <button
            className="btn"
            id="new-quote"
            style={{
              backgroundColor: backgroundColor,
              fontSize: "18px",
              color: "white",
            }}
            onClick={this.fetchNewQuote}
          >
            New Quote
          </button>
        </div>
      </Container>
    );
  }
}

export default QuoteBox;
