import React from "react";
import {Link, withRouter} from "react-router-dom";
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
    fetch(`https://daswort-api.herokuapp.com/files/${fileId}`)
    // fetch(`http://localhost:8080/files/${fileId}`)
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
      return <div>Загрузка...</div>;
    } else {

      const breadcrumbItems = items.breadcrumbItems.map(item => {
        let className = 'breadcrumb-item';

        let pathItem;

        if (item.isCurrent) {
          className += ' active';
          pathItem = item.name;
        } else {
          pathItem = <Link to={`/notes/${item.link}`} replace>{item.name}</Link>
        }
        return (<li className={className}>{pathItem}</li>)
      });
      return (
        <React.Fragment>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/notes">
                  <Link to={`/notes`} replace>
                    <i className="fas fa-home"></i>
                    &nbsp;Ноты
                  </Link>
                </a>
              </li>
              {breadcrumbItems}
            </ol>
          </nav>
          <Grid.Row cards={true}>
            {items.fileList.map(item => (
              <Grid.Col sm={6} lg={3} key={item.id}>
                <StampCard
                  className="file-wrapper"
                  color={item.webContentLink ? 'primary' : ''}
                  icon={item.webContentLink ? 'file' : 'folder'}
                  header={
                    (item.webContentLink && (
                        <a href={item.webContentLink}>
                          <small>{item.name}</small>
                        </a>
                      ) ||
                      <Link to={`/notes/${item.driveId}`} replace>
                        <small>{item.name}</small>
                      </Link>
                    )

                  }
                />
              </Grid.Col>
            ))}
          </Grid.Row>
          <Grid.Row cards={true}>
            <Grid.Col sm={2} lg={2}>
            <button type="button" className="btn btn-secondary">Download</button>
            </Grid.Col>
          </Grid.Row>
        </React.Fragment>
      );
    }
  }
}

export default withRouter(FileComponent);
