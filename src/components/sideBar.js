import React, { Component } from 'react';
import Chart from 'chart.js';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-3 sidebar">
        <ul className="homepage-sidebar">
          <li className='adsense'><a href='#'><img src='/media/sidebar-adsense.jpg' /></a></li>
          <li className='exhaust-guide'><img src='/media/sidebar-exhaust-guide.jpg' /><h4>Ultimate Nissan S13 Exhaust Guide</h4></li>
          <li className='shop'><a href='#'><img src='/media/sidebar-shop.jpg' /></a></li>
          <li className='import-guide'><img src='/media/sidebar-import-guide.jpg' /><h4>Learn How To Import Your Dream JDM Car</h4></li>
        </ul>
      </div>
    );
  }

};

export default SideBar;
