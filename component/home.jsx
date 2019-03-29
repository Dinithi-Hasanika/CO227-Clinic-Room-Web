import React, { Component } from "react";
import "./home.css";
import { Container, Row, Col } from "reactstrap";
import ReactTable from "react-table";

class HomePage extends Component {
  styles = {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  };
  render() {
    const mydata = [
      { home: "Aboroginal health" },
      { home: "Breast disease" },
      { home: "Cancers" },
      { home: "Cardiovascular" },
      { home: "Dermatology" },
      { home: "Emergency medicine" },
      { home: "Endocrinology" },
      { home: "ENT" },
      { home: "EYE" },
      { home: "Genatics" },
      { home: "Gastroenterology" },
      { home: "Hepatology and Pancreaus" },
      { home: "Functional disorders" },
      { home: "Haematology" }
    ];

    const mycolumns = [
      {
        Header: "Home",
        accessor: "home"
      }
    ];

    return (
      <body>
        <div>
          <Container>
            <Row>
              <Col>
                <button className="but but-li but-li-a">Log In</button>
                <button className="but but-li but-li-a">Register</button>
                <button className="but but-li but-li-a">About</button>
                <button className="but but-li but-li-a">Contact Us</button>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <Container>
            <Col>
              <ReactTable data={mydata} columns={mycolumns} />
            </Col>
          </Container>
        </div>

        <div>
          <Container>
            <Row>
              <Col>
                <header className="App App-header">
                  <p>A Complete Note Set For RACGP</p>
                  <p>Fellowship Exam</p>
                </header>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <Container>
            <Row>
              <Col>
                <header className="App App-search">
                  <h1>Search notes for,</h1>
                </header>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row>
            <Col>
              <form>
                <input
                  className="App-Search-bar"
                  type="text"
                  name="search"
                  placeholder="Search"
                />
              </form>
            </Col>
          </Row>
        </Container>
      </body>
    );
  }
}

export default HomePage;
