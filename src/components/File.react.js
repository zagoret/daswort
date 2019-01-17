import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Card, Grid, Icon, StampCard, Button, Dropdown } from "tabler-react";
import ContentLoader, { Code } from 'react-content-loader';

type Props = {|
  +fileId ?: String,
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
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <React.Fragment>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                &nbsp;
              </li>
            </ol>
          </nav>
          <Grid.Row cards={true}>
            <Grid.Col md={4}>
              <Card>
                <Card.Body className="d-flex flex-column p-2">
                  <Code />
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col md={4}>
              <Card>
                <Card.Body className="d-flex flex-column p-2">
                  <Code />
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col md={4}>
              <Card>
                <Card.Body className="d-flex flex-column p-2">
                  <Code />
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col md={4}>
              <Card>
                <Card.Body className="d-flex flex-column p-2">
                  <Code />
                </Card.Body>
              </Card>
            </Grid.Col>
          </Grid.Row>
        </React.Fragment>
      );
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

      const toolbarMenu = items.fileList.slice(0, 1).map(item => (
        <Button.List>
          <Dropdown
            type="button"
            toggle
            color="secondary"
            icon="download"
            items={[
              <Dropdown.Item>Download</Dropdown.Item>
            ]}
          />
        </Button.List>

      ));

      const files = items.fileList.filter(file => file.mimeType !== "application/vnd.google-apps.folder")
        .map(file => (
          <React.Fragment>
            <ContentLoader>
              <rect x="0" y="0" rx="3" ry="3" width="300" height="18" />
            </ContentLoader>
            <Grid.Col ignoreCol={true} md={3} lg={2} sm={4} xs={4}>
              <Card>
                <Card.Body className="d-flex flex-column p-2">
                  {(file.thumbnailImgBase64 ?
                    <img title={file.name} className="card-img-top"
                      src={`data:image/jpeg;base64,${file.thumbnailImgBase64}`} />
                    :
                    <img title={file.name}
                      className="card-img-top pt-3 pb-3 m-auto" src={file.iconLink.replace("/16/", "/128/")} />)}

                  <div className="d-flex align-items-center mt-auto">
                    <span className="m-auto"
                      style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                      {file.name}
                    </span>
                  </div>
                  <div>
                    <small style={{ color: 'lightgrey' }}>{file.fileExtension}</small>
                    <a href={file.webContentLink} className="icon d-inline-block" style={{ float: 'right' }}>
                      <Icon prefix="fe" name={"download"} />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Grid.Col>
          </React.Fragment>
        ));

      const folders = items.fileList.filter(file => file.mimeType === "application/vnd.google-apps.folder")
        .map(folder => (
          <Grid.Col sm={6} lg={3} key={folder.id}>
            <StampCard
              className="file-wrapper"
              icon='folder'
              header={
                <Link to={`/notes/${folder.driveId}`} replace>
                  <small>{folder.name}</small>
                </Link>
              }
              footer={
                <Dropdown
                  type="button"
                  className="download-folder"
                  color="secondary"
                  icon="download"
                  itemsObject={[
                    {
                      value: "Herunterladen"
                    }
                  ]}
                />
              }>
            </StampCard>
          </Grid.Col>
        ));

      return (
        <React.Fragment>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/notes">
                  <Link to={`/notes`} replace>
                    <i className="fas fa-home"></i>
                    &nbsp;Blasmusik
                  </Link>
                </a>
              </li>
              {breadcrumbItems}
            </ol>
          </nav>
          <Grid.Row cards={true} deck>
            <Grid.Col>
              {toolbarMenu}
            </Grid.Col>
          </Grid.Row>
          <Grid.Row cards={true} deck>
            {folders}
          </Grid.Row>
          <Grid.Row cards={true} deck>
            {files}
          </Grid.Row>
        </React.Fragment>
      );
    }
  }
}

export default withRouter(FileComponent);
