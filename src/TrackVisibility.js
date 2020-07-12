import React, { Component } from "react";

class TrackVisibility extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.ref = React.createRef();
  }

  async componentDidMount() {
    const observer = new IntersectionObserver(
      ([entry]) => {
          if (entry.intersectionRatio >= 0.5) {
          this.props.onLoadFetchResults();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      }
    );

    if (this.ref.current) {
      observer.observe(this.ref.current);
    }
  }

  render() {
    return (
      <div ref={this.ref} className="show-loader">
        Loading ..................
      </div>
    );
  }
}

export default TrackVisibility;
