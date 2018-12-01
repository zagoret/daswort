// @flow

import React, {Component} from "react";

class BreadcrumbItem extends Component {

  render() {
    const {href, title, target} = this.props;

    return (
      <React.Fragment>
        <li className="breadcrumb-item active" aria-current="page">Library</li>
      </React.Fragment>
    );
  };
}

export default BreadcrumbItem;
