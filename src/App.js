import * as React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import NotesPage from "./NotesPage.react";
import PhotosPage from "./PhotosPage.react";

import "@fortawesome/fontawesome-free/css/all.css"

import "tabler-react/dist/Tabler.css";


function App() {

  return (
    <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/notes"/>)}/>
          <Route exact path="/notes/" component={NotesPage}/>
          <Route exact path="/notes/:fileId" component={NotesPage}/>
          <Route exact path="/photos" component={PhotosPage}/>
          <Route exact path="/photos/:fileId" component={PhotosPage}/>
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
