import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  renderHeader = () => {
    const _this = this;
    debugger;
    return (
      <h1 onClick={() => {
        _this.props.onTitleClick('homepage')
      }}>
        180sx Club Latest Features
      </h1>
    );
  }

  render() {
    return (
      this.renderHeader()
    );
  }
};

export default Header;
