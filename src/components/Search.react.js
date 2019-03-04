import * as React from 'react';
import Autosuggest from 'react-autosuggest';
import {withRouter} from "react-router-dom";

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span className="react-autosuggest__item">{suggestion.name}</span>
  );
}

function renderSectionTitle(section) {
  const pathItems = section.value.split("/").map((item) =>
    <li className="breadcrumb-item">{item}</li>
  );
  return (
    <nav aria-label="breadcrumb" className="pr-2">
      <ol className="breadcrumb">
        {pathItems}
      </ol>
    </nav>

  );
}

function getSectionSuggestions(section) {
  return section.category;
}


class SearchComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, {newValue, method}) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({value}) => {
    // fetch(`http://localhost:8080/search/${value}`)
    fetch(`https://daswort-api.herokuapp.com/search/${value}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            suggestions: result
          });

        },
        (error) => {
        });
  };
  onSuggestionSelected = (event, {suggestion}) => {
    this.props.history.push(`/notes/${suggestion.parentId}`);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  render() {
    const {value, suggestions} = this.state;
    const inputProps = {
      placeholder: "Suche...",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        inputProps={inputProps}/>
    );
  }
}

export default withRouter(SearchComponent);
