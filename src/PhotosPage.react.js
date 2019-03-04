// @flow

import React from "react";

import {Page} from "tabler-react";

import PageWrapper from "./components/PageWrapper.react";
import FileComponent from "./NotesPage.react";

function PhotosPage(props) {
  return <PageWrapper>
    <Page.Content>
      <FileComponent key={props.match.params.fileId}/>
    </Page.Content>
  </PageWrapper>;
}

export default PhotosPage;
