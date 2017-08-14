import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContentArea from './components/contentArea';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postListData: this.fetchPostListData(),
      postData: false
    };
  }

  fetchDetailedResult = (key) => {
    let postData = require('../data/180sxclub-get-recent-posts.json');

    return postData.posts;
  }

  fetchPostListData = () => {
    return require('../data/180sxclub-get-recent-posts.json');
  }

  fetchPostData = (postId) => {
    let postData = null;

    if (postId) {
      postData = require('../data/' + postId + '.json');
    }

    return postData;
  }

  updatePost = (selectedPostKey) => {
    console.log(selectedPostKey);
    let newPost = this.fetchPostData(selectedPostKey);
    this.setState({postData: newPost});
  }

  render() {
    return (
      <div className='grid-container'>
        <div className='row'>
          <ContentArea
            onPostSelect={selectedPostKey => this.updatePost(selectedPostKey)}
            postListData={this.state.postListData}
            postData={this.state.postData} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
