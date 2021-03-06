import React, { Component } from 'react';

class PostListItem extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const _this = this;
    const renderHTML = (escapedHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: escapedHTML } });

    return (
      <li
        className='list-group-item'
        data-active={this.props.active}
        data-postid={this.props.id}
        onClick={() => {
          this.props.onPostSelect(this.props.id)
        }
      }>
        <img src={this.props.thumbnail} />
        <h2>{renderHTML(_this.props.title)}</h2>
      </li>
    );
  }
};

export default PostListItem;
