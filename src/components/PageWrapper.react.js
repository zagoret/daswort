// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";

import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider,
} from "tabler-react";

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
    value: "Ноты",
    to: "/notes",
    icon: "music",
    initialValue:false,
    LinkComponent: withRouter(NavLink)
  },
  {
    value: "Фото",
    to: "/photos",
    icon: "image",
    LinkComponent: withRouter(NavLink),
  }
];

class PageWrapper extends React.Component<Props, void> {
  handleCollapseMobileMenu = (): void => {
    this.setState(s => ({ collapseMobileMenu: !s.collapseMobileMenu }));
  };

  render(): React.Node {
    return (
      <SiteWrapper
        navProps={{ itemsObjects: navBarItems, onMenuToggleClick:  this.handleCollapseMobileMenu}}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
          copyright: (
            <React.Fragment>
              Copyright © 2018
              {" "}
              <a href=".">Das Wort</a>
                {" "}
              All rights reserved.
            </React.Fragment>
          ),
          nav: (
            <React.Fragment>
              <Grid.Col auto={true}>
              </Grid.Col>
              <Grid.Col auto={true}>
              </Grid.Col>
            </React.Fragment>
          ),
        }}
      >
        {this.props.children}
      </SiteWrapper>
    );
  }
}

export default PageWrapper;
