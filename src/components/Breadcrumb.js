// @flow

import React, {Component} from "react";

class Breadcrumb extends Component {

  render() {
    const {children} = this.props;
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {children}
        </ol>
      </nav>
    );
  };
}

export default Breadcrumb;
