// @flow

import React from "react";

import PageWrapper from "./components/PageWrapper.react";

import FolderComponent from "./components/Folder.react";
import {Page}from "tabler-react";

function NotesPage() {
  return(
        <PageWrapper>
          <Page.Content>
            <FolderComponent/>
          </Page.Content>
        </PageWrapper>
  );
}

export default NotesPage;
