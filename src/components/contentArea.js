import React, { Component } from 'react';
import SideBar from './sideBar';
import Post from './post';
import PostList from './postList';

class ContentArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postData: false
    };
  }

  /*refreshPostData = () => {
    let localData = false;

    return localData;
  }*/
  // this.setState({postData: this.props.postData});

  /*
    TODO: This component is only refreshing it's data when the setState is called
    from it's parent. So when I hit the thumb to change article it is not updating
    this component a second time. I need to look into if this is the case.
  */

  renderContent = () => {
    debugger;
    if (this.props.postData) {
      return (
        <Post
          onPostSelect={this.props.onPostSelect}
          postListData={this.props.postListData}
          postData={this.props.postData} />
      )
    }

    return (
      <PostList
        onPostSelect={this.props.onPostSelect}
        postListData={this.props.postListData} />
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
