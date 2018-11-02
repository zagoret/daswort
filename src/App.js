import * as React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import NotesPage from "./NotesPage.react";
import PhotosPage from "./PhotosPage.react";

import "tabler-react/dist/Tabler.css";

type Props = {||};

function App(props: Props): React.Node {

  return (
    <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/notes" />)} />
          <Route exact path="/notes" component={NotesPage} />
          <Route exact path="/photos" component={PhotosPage} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
