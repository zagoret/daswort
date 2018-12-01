// @flow

import * as React from "react";
import {NavLink, withRouter} from "react-router-dom";

import {Button, Grid, List, Nav, RouterContextProvider, Site,} from "tabler-react";

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
  {value: "Home", to: "/", icon: "home", LinkComponent: withRouter(NavLink)},
  {
    value: "Forms",
    to: "/form-elements",
    icon: "check-square",
    LinkComponent: withRouter(NavLink),
  }
];

const notificationsObjects = [
  {
    avatarURL: "demo/faces/male/41.jpg",
    message: (
      <React.Fragment>
        <strong>Nathan</strong> pushed new commit: Fix page load performance
        issue.
      </React.Fragment>
    ),
    time: "10 minutes ago",
  }
];

const accountDropdownProps = {
  avatarURL: "./demo/faces/female/25.jpg",
  name: "Jane Pearson",
  description: "Administrator",
  options: [
    {icon: "user", value: "Profile"},
    {icon: "settings", value: "Settings"},
    {icon: "mail", value: "Inbox", badge: "6"},
    {icon: "send", value: "Message"},
    {isDivider: true},
    {icon: "help-circle", value: "Need help?"},
    {icon: "log-out", value: "Sign out"},
  ],
};

class SiteWrapper extends React.Component<Props, void> {
  render(): React.Node {
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Tabler React",
          imageURL: "./demo/brand/tabler.svg",
          navItems: (
            <Nav.Item type="div" className="d-none d-md-flex">
              <Button
                href="https://github.com/tabler/tabler-react"
                target="_blank"
                outline
                size="sm"
                RootComponent="a"
                color="primary"
              >
                Source code
              </Button>
            </Nav.Item>
          ),
          notificationsTray: {notificationsObjects},
          accountDropdown: accountDropdownProps,
        }}
        navProps={{itemsObjects: navBarItems}}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
          links: [
            <a>First Link</a>,
            <a>Second Link</a>,
            <a>Third Link</a>,
            <a>Fourth Link</a>,
            <a>Five Link</a>,
            <a>Sixth Link</a>,
            <a>Seventh Link</a>,
            <a>Eigth Link</a>,
          ],
          note:
            "Premium and Open Source dashboard template with responsive and high quality UI. For Free!",
          copyright: (
            <React.Fragment>
              Copyright © 2018
              <a href="."> Tabler-react</a>. Theme by
              <a
                href="https://codecalm.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                codecalm.net
              </a>{" "}
              All rights reserved.
            </React.Fragment>
          ),
          nav: (
            <React.Fragment>
              <Grid.Col auto={true}>
                <List className="list-inline list-inline-dots mb-0">
                  <List.Item className="list-inline-item">
                    <a href="./docs/index.html">Documentation</a>
                  </List.Item>
                  <List.Item className="list-inline-item">
                    <a href="./faq.html">FAQ</a>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col auto={true}>
                <Button
                  href="https://github.com/tabler/tabler-react"
                  size="sm"
                  outline
                  color="primary"
                  RootComponent="a"
                >
                  Source code
                </Button>
              </Grid.Col>
            </React.Fragment>
          ),
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
