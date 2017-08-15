import React, { Component } from 'react';
import PostListItem from './postListItem';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  renderPost = () => {
    const _this = this;
    const postData = _this.props.postData;
    const renderHTML = (escapedHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: escapedHTML } });
    debugger;
    return (
      <div className="post-content col-md-9">
        <h1>{renderHTML(postData.post.title)}</h1>
        <p><img src={postData.post.thumbnail_images.full.url} width={postData.post.thumbnail_images.full.width} height={postData.post.thumbnail_images.full.height} alt={renderHTML(postData.post.title)} /></p>
        <p>{renderHTML(postData.post.content)}</p>
      </div>
    );
  }

  renderPostListItem = () => {
    debugger;
    const _this = this;
    const PostItems = this.props.postListData.posts.map(function(post) {
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
