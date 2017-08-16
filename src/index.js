import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContentArea from './components/contentArea';
import Header from './components/header';

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

  renderHomepage = (pageToRender) => {
    const _this = this;
    this.addClass('hide');
    setTimeout(() => {
      this.setState({postData: false});
      setTimeout(() => {
        _this.addClass('homepage');
        _this.removeClass('hide');
      }, 250);
    }, 250);
  }

  renderLatestPosts = () => {
    const _this = this;
    _this.addClass('hide');
    setTimeout(() => {
      _this.removeClass('homepage');
      setTimeout(() => {
        _this.removeClass('hide');
      }, 250);
    }, 250);
  }

  renderPost = (selectedPostKey) => {
    const _this = this;
    let newPost = this.fetchPostData(selectedPostKey);
    this.addClass('hide');
    setTimeout(() => {
      _this.removeClass('homepage');
      this.setState({postData: newPost});
      setTimeout(() => {
        _this.removeClass('hide');
      }, 250);
    }, 250);
  }

  renderPageHandler = (pageToRender) => {
    if (pageToRender === 'latestPosts') {
      this.renderLatestPosts();
    } else if (pageToRender) {
      this.renderPost(pageToRender);
    }
  }

  removeClass = (cssClass) => {
    document.body.classList.remove(cssClass);
  }

  addClass = (cssClass) => {
    document.body.classList.add(cssClass);
  }

  render() {
    return (
      <div className='grid-container'>
        <div className='row'>
          <div className='header col-md-12'>
            <Header
              onTitleClick={pageToRender => this.renderHomepage(pageToRender)} />
          </div>
        </div>
        <div className='row'>
          <ContentArea
            onMenuSelect={pageToRender => this.renderPageHandler(pageToRender)}
            onPostSelect={selectedPostKey => this.renderPost(selectedPostKey)}
            postListData={this.state.postListData}
            postData={this.state.postData} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
