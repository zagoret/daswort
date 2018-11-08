import React from "react";
import { Link, withRouter } from "react-router-dom";
import {Grid, StampCard} from "tabler-react";

type Props = {|
  +fileId?: String,
|};

class FileComponent extends React.Component {

  constructor(props: Props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
  const fileId = this.props.match.params.fileId || "";
  this.props.history.push(`/notes/${fileId}`);
    // fetch(`https://daswort-api.herokuapp.com/files/${this.props.fileId}`)
    fetch(`http://localhost:8080/files/${fileId}`)
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
          <Grid.Col sm={6} lg={3} key={item.id}>
            <StampCard
              // color="blue"
              icon="folder"
              header={
                <Link to={`/notes/${item.driveId}`} replace><small>{item.name}</small></Link>
              }
            />
          </Grid.Col>
          ))}
        </Grid.Row>
      );
    }
  }
}
export default withRouter(FileComponent);
