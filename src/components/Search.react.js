import * as React from 'react';
import Autosuggest from 'react-autosuggest';


// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    title: '1970s',
    languages: [
      {
        name: 'C',
        year: 1972
      }
    ]
  },
  {
    title: '1980s',
    languages: [
      {
        name: 'C++',
        year: 1983
      },
      {
        name: 'Perl',
        year: 1987
      }
    ]
  },
  {
    title: '1990s',
    languages: [
      {
        name: 'Haskell',
        year: 1990
      },
      {
        name: 'Python',
        year: 1991
      },
      {
        name: 'Java',
        year: 1995
      },
      {
        name: 'Javascript',
        year: 1995
      },
      {
        name: 'PHP',
        year: 1995
      },
      {
        name: 'Ruby',
        year: 1995
      }
    ]
  },
  {
    title: '2000s',
    languages: [
      {
        name: 'C#',
        year: 2000
      },
      {
        name: 'Scala',
        year: 2003
      },
      {
        name: 'Clojure',
        year: 2007
      },
      {
        name: 'Go',
        year: 2009
      }
    ]
  },
  {
    title: '2010s',
    languages: [
      {
        name: 'Elm',
        year: 2012
      }
    ]
  }
];
// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {

  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  const sss =  languages
    .map(section => {
      return {
        title: section.title,
        languages: section.languages.filter(language => regex.test(language.name))
      };
    })
    .filter(section => section.languages.length > 0);


}


function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span className="react-autosuggest__item">{suggestion.name}</span>
  );
}

function renderSectionTitle(section) {
  return (
    <strong>{section.value}</strong>
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

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    // fetch(`http://localhost:8080/search/${value}`)
    fetch(`https://daswort-api.herokuapp.com/search/${value}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result: "+ JSON.stringify(result));
          this.setState({
            suggestions: result
          });

        },
        (error) =>{});
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search here...",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        inputProps={inputProps} />
    );
  }
}

export  default SearchComponent;
