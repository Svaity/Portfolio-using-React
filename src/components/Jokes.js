import React, { Component } from "react";

const Joke = ({ joke: { setup, punchline } }) => (
  <p>
    {setup}
    <em>{punchline}</em>
  </p>
);

class Jokes extends Component {
  state = { joke: {}, jokes: [] };
  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((json) => this.setState({ joke: json }))
      .catch((error) => alert(error.message));
  }
  fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((response) => response.json())
      .then((json) => this.setState({ jokes: json }))
      .catch((error) => alert(error.message));
  };

  render() {
    const { setup, punchline } = this.state.joke;

    return (
      <div>
        <h3>Joke of the Day</h3>
        <Joke joke={this.state.joke} />
        <hr />
        <h3>Want 10 new Jokes?</h3>
        <button onClick={this.fetchJokes}>Click Me!</button>
        {this.state.jokes.map((joke) => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
    );
  }
}

export default Jokes;
