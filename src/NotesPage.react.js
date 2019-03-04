// @flow

import React from "react";

import PageWrapper from "./components/PageWrapper.react";

import FileComponent from "./components/File.react";
import {Page} from "tabler-react";

const NotesPage = (props) => {
  return (
    <PageWrapper>
      <Page.Content>
        <FileComponent key={props.match.params.fileId}/>
      </Page.Content>
    </PageWrapper>
  );
};

export default NotesPage;
