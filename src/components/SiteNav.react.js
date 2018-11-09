// @flow

import * as React from "react";
import cn from "classnames";
import {Grid, Nav, Form } from "tabler-react";
import Search from './Search.react';

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

type navItems = Array<navItem>;

export type Props = {|
  +children?: React.Node,
  +items?: React.ChildrenArray<React.Element<typeof Nav.Item>>,
  +itemsObjects?: navItems,
  /**
   * Display a search form to the right of the nav items
   */
  +withSearchForm?: boolean,
  /**
   * Provide your own component to replace the search form
   */
  +rightColumnComponent?: React.Node,
  /**
   * Toggle the collapsed state of the nav
   */
  +collapse?: boolean,
  +routerContextComponentType?: React.ElementType,
|};


const SiteNav = ({
                   children,
                   items,
                   itemsObjects,
                   withSearchForm = true,
                   rightColumnComponent,
                   collapse = true,
                   routerContextComponentType
                 }: Props): React.Node => {
  const classes = cn("header d-lg-flex p-0");
  return (
    <div className={classes}>
      <div className="container-fluid pt-2">
        {children || (
          <Grid.Row className="align-items-center">
            <Grid.Col sm={1} className="d-none d-sm-block">
              <a className="header-brand" href="#">
                <img src="https://i.postimg.cc/k42gWV8p/brand.png" className="header-brand-img ml-3" alt="Brand loc"
                  style={{height:'2.5em'}}
                />
              </a>
            </Grid.Col>
            <Grid.Col>
              <Nav
                tabbed
                className="border-0 flex-lg-row flex-md-row"
                items={items}
                itemsObjects={itemsObjects}
                routerContextComponentType={routerContextComponentType}
              />
            </Grid.Col>
            <Grid.Col className="col-lg-4 d-inline-flex">
              <Form.Group className="m-0">
                {/*<Form.Input*/}
                  {/*icon="search"*/}
                  {/*placeholder="Search for..."*/}
                  {/*position="append"*/}
                {/*/>*/}
                <Search/>
              </Form.Group>
            </Grid.Col>
          </Grid.Row>
        )}
      </div>
    </div>
  );
};

SiteNav.displayName = "Site.Nav";

export default SiteNav;
