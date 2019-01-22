// @flow

import * as React from "react";

import {Container, Grid, Page, Site} from "tabler-react";
import type {Props as SiteNavProps} from "./SiteNav.react";
import SiteNav from "./SiteNav.react";
import type {Props as SiteFooterProps} from "./SiteFooter.react";
import SiteFooter from "./SiteFooter.react";

type Props = {|
  // +headerProps: SiteHeaderProps,
  +navProps: SiteNavProps,
  +footerProps: SiteFooterProps,
  +children: React.Node,
  +routerContextComponentType?: React.ElementType,
|};

type State = {
  collapseMobileMenu: boolean,
};

class SiteWrapper extends React.PureComponent<Props, State> {
  static displayName = "Site.Wrapper";

  state = {
    collapseMobileMenu: true,
  };

  handleCollapseMobileMenu = (): void => {
    this.setState(s => ({collapseMobileMenu: !s.collapseMobileMenu}));
  };

  render(): React.Node {
    const {
      // headerProps,
      navProps,
      footerProps,
      children,
      routerContextComponentType,
    }: Props = this.props;

    // const headerPropsWithToggleClick = {
    //   ...headerProps,
    //   onMenuToggleClick: this.handleCollapseMobileMenu,
    // };
    // const header = React.createElement(Site.Header, headerPropsWithToggleClick);
    const navPropsWithCollapse = {
      ...navProps,
      collapse: this.state.collapseMobileMenu,
      routerContextComponentType: routerContextComponentType,
    };
    const nav = React.createElement(SiteNav, navPropsWithCollapse);
    const footer = React.createElement(SiteFooter, footerProps);

    return (
      <Page>
        <Page.Main>
          {/*{header}*/}
          {nav}
          {children}
        </Page.Main>
        <footer className="footer" style={{bottom: 0, position:'fixed', width: '100%', fontSize: '11px'}}>
          <Container>
            <Grid.Row className="align-items-center flex-row-reverse">
              <Grid.Col width={12} lgAuto className="mt-3 mt-lg-0 text-center">
                Alle Rechte vorbehalten. Das hier veröffentlichte Notenmaterial ist urheberrechtlich geschützt.
              </Grid.Col>
            </Grid.Row>
            <Grid.Row className="align-items-center flex-row-reverse">
              <Grid.Col width={12} lgAuto className="mt-3 mt-lg-0 text-center">
                Die Originale dürfen nur mit Erlaubnis der jeweiligen Rechtsinhaber kopiert,
                nachgedruckt, vervielfältigt oder aufgenommen werden. Diese Notensammlung ist gem.
              </Grid.Col>
            </Grid.Row>
            <Grid.Row className="align-items-center flex-row-reverse">
              <Grid.Col width={12} lgAuto className="mt-3 mt-lg-0 text-center">
                § 46 UrhG ausschließlich für den Kirchen- und Unterrichtsgebrauch in den Gemeinden der EvangeliumsChristen-Baptisten bestimmt.
              </Grid.Col>
            </Grid.Row>
          </Container>
        </footer>
      </Page>
    );
  }
}

export default SiteWrapper;
