import React, { Component } from "react";

const TITLES = [
  "a Software Engineer",
  "a Virtual reality Game Developer",
  "a Automation Engineer",
];

class Title extends Component {
  state = { titleIndex: 0 };

  componentDidMount() {
    console.log("Title Component is mounted");
    this.animateTitles();
  }
  componentWillUnmount() {
    console.log("Title componenet will unmount");

    clearInterval(this.titleInterval);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex });
    }, 3000);
  };

  render() {
    const title = TITLES[this.state.titleIndex];

    return <p>I am {title}</p>;
  }
}

export default Title;
