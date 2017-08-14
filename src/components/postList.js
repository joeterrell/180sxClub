import React, { Component } from 'react';
import PostListItem from './postListItem';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localData: props.postListData,
      selectedComponentKey: null
    };
  }

  renderPostItems = () => {
    const PostItems = this.state.localData.posts.map(function(post) {
      debugger;
      return (
        <PostListItem
          title={post.title}
          thumbnail={post.thumbnail_images.thumbnail.url}
          excerpt={post.excerpt}
          url={post.slug}
          key={post.id} />
      );
    });

    return PostItems;
  }

  render() {
    return (
      <ul className='col-md-9 list-group'>
        {this.renderPostItems()}
      </ul>
    );
  }
};

export default PostList;
