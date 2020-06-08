import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import profile from "./assets/profile1.jpg";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Shrey Vaity</h1>
        <p>My name is Shrey</p>
        <Title />
        <p> Im looking forward to working on cool project</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in New York and code everyday</p>
            <p>
              My favorite language is Javscript, and i think React.js is awesome
            </p>
            <p>Besides coding, I also love Music and Ramen</p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
