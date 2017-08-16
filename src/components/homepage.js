import React, { Component } from 'react';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  // use video attribute "poster=x.jpg" for a loading image

  renderHomepage = () => {
    const _this = this;

    return (
      <div className='homepage-container'>
        <video loop muted className='video-background' playsinline autoPlay src='/media/180sx-master.mp4' />
        <div className='text-container'>
          <span className='title'>Welcome to the <em className='logo'>180sx Club</em></span>
          <ul>
            <li
              onClick={() => {
                _this.props.onMenuSelect('latestPosts')
              }}>Latest articles</li>
            <li
              onClick={() => {
                _this.props.onMenuSelect('1964')
              }}>S13 exhaust guide</li>
            <li
              onClick={() => {
                _this.props.onMenuSelect('1982')
              }}>Import guide</li>
            <li
              onClick={() => {
                window.location.href = 'https://www.redbubble.com/people/180sxclub/works/22718437-s13-tuner-tee?p=classic-tee&style=classic-tee&body_color=white&print_location=front';
              }}>Shop</li>
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
