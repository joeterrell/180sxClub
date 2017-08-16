import React, { Component } from 'react';
import PostListItem from './postListItem';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localData: props.postListData
    };
  }

  renderPostItems = () => {
    const _this = this;
    const PostItems = this.state.localData.posts.map(function(post) {
      return (
        <PostListItem
          title={post.title}
          thumbnail={post.thumbnail_images.thumbnail.url}
          excerpt={post.excerpt}
          url={post.slug}
          key={post.id}
          id={post.id}
          onPostSelect={_this.props.onPostSelect} />
      );
    });

    return PostItems;
  }

  render() {
    return (
      <ul className='col-md-12 list-group'>
        {this.renderPostItems()}
      </ul>
    );
  }
};

export default PostList;
