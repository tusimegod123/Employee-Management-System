import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let copyright = `Copyright ${new Date().getFullYear()} All Rights Reserved`;
    return (
      <div>
        <footer className="footer" style={{ textAlign: "center" }}>
          <span className="text-muted">{copyright}</span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
