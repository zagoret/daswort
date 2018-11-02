// @flow

import React from "react";

import PageWrapper from "./components/PageWrapper.react";
import {Grid, Page, StatsCard} from "tabler-react";

function PhotosPage() {
  return <PageWrapper>
    <Page.Content>
      <Grid.Row cards={true}>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard layout={1} movement={6} total="43" label="New Tickets"/>
        </Grid.Col>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard
            layout={1}
            movement={-3}
            total="17"
            label="Closed Today"
          />
        </Grid.Col>
      </Grid.Row>
    </Page.Content>
  </PageWrapper>;
}

export default PhotosPage;
