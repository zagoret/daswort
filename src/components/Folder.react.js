import React from "react";

import {Grid, Icon, PricingCard} from "tabler-react";

export default class FolderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://daswort-api.herokuapp.com/files")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
  }

  render() {
    const {error, isLoaded, items} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Grid.Row cards={true}>
          {items.map(item => (
            <Grid.Col width={6} sm={4} lg={2}>
              <PricingCard>
                <PricingCard.Category>{item.name}</PricingCard.Category>
                <PricingCard.Price><Icon name="folder"/></PricingCard.Price>
                <PricingCard.Button> {"Orchestra"} </PricingCard.Button>
              </PricingCard>
            </Grid.Col>
          ))}
        </Grid.Row>
      );
    }
  }
}
