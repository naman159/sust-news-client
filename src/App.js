import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
        axios.get('https://sust-news-app.herokuapp.com/news')
        .then(res => {
          //Set state with result
          this.setState({ articles: res.data });
          console.log(this.state.articles);
        });
  }

  render() {
    return (
      <div className="App">
          <h1>Latest on Sustainability</h1>
          <p>Made with care for future generations in mind by Naman, Advait, Siddhanth, Yash!</p>
        {this.state.articles.map((article) => (
          <a href={article.url}>
            <div className="ba pa3 ma3">
              <h3>{article.title}</h3>
              <p>{article.content} -{article.author}</p>
            </div>
          </a>
        ))}
      </div>
    );
  }
}

export default App;
