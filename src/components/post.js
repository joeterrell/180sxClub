import React, { Component } from 'react';
import PostListItem from './postListItem';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localPostData: props.postData,
      localPostListData: props.postListData

    };
  }

  renderPost = () => {
    const _this = this;
    const renderHTML = (escapedHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: escapedHTML } });

    return (
      <div className="post-content col-md-9">
        <h1>{renderHTML(_this.state.localPostData.post.title)}</h1>
        <p><img src={_this.state.localPostData.post.thumbnail_images.full.url} width={_this.state.localPostData.post.thumbnail_images.full.width} height={_this.state.localPostData.post.thumbnail_images.full.height} alt={renderHTML(_this.state.localPostData.post.title)} /></p>
        <p>{renderHTML(_this.state.localPostData.post.content)}</p>
      </div>
    );
  }

  renderPostListItem = () => {
    //debugger;
    const _this = this;
    const PostItems = this.state.localPostListData.posts.map(function(post) {
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
      <div>
        {this.renderPost()}
        <div className="col-md-3 sidebar">
          <ul>
            {this.renderPostListItem()}
          </ul>
        </div>
      </div>
    );
  }
};

export default Post;
