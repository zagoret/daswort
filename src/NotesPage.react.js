// @flow

import React from "react";

import PageWrapper from "./components/PageWrapper.react";
import {
  Page,
  Grid,
  StatsCard,
  PricingCard,
  Icon
}from "tabler-react";

function NotesPage() {
  return(
        <PageWrapper>
          <Page.Content>
            <Grid.Row cards={true}>
              <Grid.Col width={6} sm={4} lg={2}>
                <PricingCard>
                  <PricingCard.Category>{"Orchestra"}</PricingCard.Category>
                  <PricingCard.Price><Icon name="folder" /></PricingCard.Price>
                  <PricingCard.Button> {"Orchestra"} </PricingCard.Button>
                </PricingCard>
              </Grid.Col>
              <Grid.Col width={6} sm={4} lg={2}>
                <PricingCard>
                  <PricingCard.Category>{"Orchestra"}</PricingCard.Category>
                  <PricingCard.Price><Icon name="folder" /></PricingCard.Price>
                  <PricingCard.Button> {"Orchestra"} </PricingCard.Button>
                </PricingCard>
              </Grid.Col>
              <Grid.Col width={6} sm={4} lg={2}>
                <PricingCard>
                  <PricingCard.Category>{"Orchestra"}</PricingCard.Category>
                  <PricingCard.Price><Icon name="folder" /></PricingCard.Price>
                  <PricingCard.Button> {"Orchestra"} </PricingCard.Button>
                </PricingCard>
              </Grid.Col>
              <Grid.Col width={6} sm={4} lg={2}>
                <PricingCard>
                  <PricingCard.Category>{"Orchestra"}</PricingCard.Category>
                  <PricingCard.Price><Icon name="folder" /></PricingCard.Price>
                  <PricingCard.Button> {"Orchestra"} </PricingCard.Button>
                </PricingCard>
              </Grid.Col>
            </Grid.Row>
          </Page.Content>
        </PageWrapper>
  );
}

export default NotesPage;
