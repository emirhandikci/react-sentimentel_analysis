import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sentiment from 'sentiment';
const sentiment = new Sentiment();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentimentScore: null,
      generalSentiment: null
    };
    this.findSentiment = this.findSentiment.bind(this);
  }

  findSentiment = (e) => {
    const results = sentiment.analyze(e.target.value)
    this.setState({ sentimentScore: results.score})
      if (results.score > 0) {
        this.setState({ generalSentiment: 'positive' })
      } else if (results.score < 0) {
        this.setState({ generalSentiment: 'negative' })
      } else { this.setState({ generalSentiment: 'neutral' }) }
      
  }

  render() {
    return (
      <div className="App">
        <h1>Sentimental Analysis</h1>
        <p>Enter a sentence to see its sentiment score</p>
        <textarea style={{width:"500px", height: "500px", color: "white", fontSize:"24px", backgroundColor:"#051006"}} onChange={this.findSentiment}></textarea>
        <p style={{fontSize:"20px"}}>Sentiment Score: {this.state.sentimentScore}</p>
        <p style={{fontSize:"24px"}}>General Sentiment: {this.state.generalSentiment}</p>
      </div>
    )
  }
}

export default App;
