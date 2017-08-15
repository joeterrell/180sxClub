import React, { Component } from 'react';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  renderHomepage = () => {
    return (
      <div className='homepage-container'>
        <video loop muted className="video-background" autoPlay src="/media/180sx-master.mp4" />
        <div className='text-container'>
          <span className='title'>Welcome to the 180sx Club</span>
          <ul>
            <li>Latest articles</li>
            <li>S13 exhaust guide</li>
            <li>Import guide</li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return (
      this.renderHomepage()
    );
  }
};

export default Homepage;
