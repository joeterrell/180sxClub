import React, { Component } from 'react';

class PostListItem extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    debugger
    let excerpt = JSON.parse(this.props.excerpt);
    
    return (
      <li
        className="list-group-item"
        data-active={this.props.active}
        onClick={() => {
          this.props.onResultSelect(this.props.key)
          this.props.handleSerpSelected(this.props.key)
        }
      }>
        <h2><a href="/{this.props.url}/" title="{this.props.title}">{this.props.title}</a></h2>
        <p>{this.props.excerpt}</p>
      </li>
    );
  }
};

export default PostListItem;
