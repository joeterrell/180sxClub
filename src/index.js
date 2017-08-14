import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/sideBar';
import PostList from './components/postList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localSerpData: false,
      cachedResultsData: null,
      selectedResult: this.fetchDetailedResult(),
      postListData: this.fetchSERPList()
    };
  }

  fetchDetailedResult = (key) => {
    let postData = require('../data/180sxclub-get-recent-posts.json');

    return postData.posts;
  }

  fetchSERPList = () => {
    return require('../data/180sxclub-get-recent-posts.json');
  }

  updateDetailedResult = (selectedResultKey) => {
    let newResult = this.fetchDetailedResult(selectedResultKey);
    this.setState({selectedResult: newResult});
  }

  render() {
    return (
      <div className='grid-container'>
        <div className='row'>
          <div className='col-md-12'>
            <PostList
              onResultSelect={selectedResultKey => this.updateDetailedResult(selectedResultKey)}
              postListData={this.state.postListData} />
            <SideBar />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
