// @flow

import * as React from "react";
import {NavLink, withRouter} from "react-router-dom";

import {RouterContextProvider,} from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";

type Props = {|
  +children: React.Node,
|};

type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
|};

const navBarItems: Array<navItem> = [
  {
    value: "Notenarchiv",
    to: "/notes",
    // icon: "music",
    initialValue: true,
    LinkComponent: withRouter(NavLink)
  }
];

class PageWrapper extends React.Component<Props, void> {
  handleCollapseMobileMenu = (): void => {
    this.setState(s => ({collapseMobileMenu: !s.collapseMobileMenu}));
  };

  render(): React.Node {
    return (
      <SiteWrapper
        navProps={{itemsObjects: navBarItems, onMenuToggleClick: this.handleCollapseMobileMenu}}
        routerContextComponentType={withRouter(RouterContextProvider)}>
        {this.props.children}
      </SiteWrapper>
    );
  }
}

export default PageWrapper;
