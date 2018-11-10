// @flow

import * as React from "react";
import cn from "classnames";
import {Grid, Nav, Form, Notification } from "tabler-react";
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
            <Grid.Col ignoreCol={true} width={1} className="d-none d-md-block d-xl-block">
              <a className="header-brand" href="#">
                <img src="https://daswort-api.herokuapp.com/img/brand/brand.svg" className="header-brand-img ml-3" alt="Brand loc"
                  style={{height:'2.3em'}}
                />
              </a>
            </Grid.Col>
            <Grid.Col ignoreCol={true} lg={2}  md={3} sm={3} xs={6}>
              <Nav
                tabbed
                className="border-0 d-flex"
                items={items}
                itemsObjects={itemsObjects}
                routerContextComponentType={routerContextComponentType}
              />
            </Grid.Col>
            <Grid.Col ignoreCol={true} lg={6} md={7} sm={7} xs={6}>
              <Form.Group className="w-100 m-0 pt-2 pb-2">
                <Search/>
              </Form.Group>
            </Grid.Col>
            <Grid.Col ignoreCol={true} width={1} className="d-none d-md-block d-xl-block">
              <Notification.Tray
                unread={true}
                notificationsObjects={[
                  {
                    message: (
                      <React.Fragment>
                        Новые фотографии в альбоме "Рождество"
                      </React.Fragment>
                    ),
                    time: "2 часа назад",
                  },
                  {
                    message: (
                      <React.Fragment>
                        Ноты для фортепиано
                      </React.Fragment>
                    ),
                    time: "3 дня назад",
                  }
                ]}
              />
            </Grid.Col>
          </Grid.Row>
        )}
      </div>
    </div>
  );
};

SiteNav.displayName = "Site.Nav";

export default SiteNav;
