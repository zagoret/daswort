// @flow

import React from "react";

import PageWrapper from "./components/PageWrapper.react";

import FileComponent from "./components/File.react";
import {Page} from "tabler-react";

type Props = {||};

const NotesPage = (props: Props) => {
  return (
    <PageWrapper>
      <Page.Content>
        <FileComponent key={props.match.params.fileId}/>
      </Page.Content>
    </PageWrapper>
  );
};

export default NotesPage;
