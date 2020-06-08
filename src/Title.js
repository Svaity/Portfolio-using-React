import React, { Component } from "react";

const TITLES = [
  "a Software Engineer",
  "a Virtual reality Game Developer",
  "a Automation Engineer"
];

class Title extends Component {
  state = { titleIndex: 0 };

  componentDidMount() {
    console.log("Title Component is mounted");
    this.animateTitles();
  }

  animateTitles = () => {
    setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex });
    }, 4000);
  };

  render() {
    const title = TITLES[this.state.titleIndex];

    return <p>I am {title}</p>;
  }
}

export default Title;
