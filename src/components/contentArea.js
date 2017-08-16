import React, { Component } from 'react';
import SideBar from './sideBar';
import Post from './post';
import PostList from './postList';
import Homepage from './homepage.js';

class ContentArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postData: false
    };
  }

  renderContent = () => {
    //debugger;
    if (this.props.postData) {
      return (
        <Post
          onPostSelect={this.props.onPostSelect}
          postListData={this.props.postListData}
          postData={this.props.postData} />
      )
    }

    return (
      <div>
        <Homepage
          onMenuSelect={this.props.onMenuSelect} />
        <div className='latest-articles-container'>
          <PostList
            onPostSelect={this.props.onPostSelect}
            postListData={this.props.postListData} />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='col-md-12' id='content-area'>
        {this.renderContent()}
      </div>
    );
  }
}

export default ContentArea;
