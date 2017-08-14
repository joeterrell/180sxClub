import React, { Component } from 'react';
import SideBar from './sideBar';
import Post from './post';
import PostList from './postList';

class ContentArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentUpdated: false
    };
  }

  renderContent = () => {
    debugger;
    if (this.props.postData) {
      return (
        <Post
          postData={this.props.postData}
          onPostSelect={this.props.onPostSelect}
          postListData={this.props.postListData} />
      )
    }

    return (
      <PostList
        onPostSelect={this.props.onPostSelect}
        postListData={this.props.postListData} />
    )

    return DynamicContent;
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
