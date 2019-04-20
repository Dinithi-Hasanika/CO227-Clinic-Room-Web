import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./member.css";
import "./home.css";
import bookList from "./books.json";
import fire from "../config-member/fire";
import { abc } from "./abc.pdf";

var bookCode = "NA";

class MemberPage extends Component {
  state = {
    search: ""
  };

  renderNotes = note => {
    bookCode = note.code;

    return (
      <div>
        <div class="btn-group">
          <button onClick={this.onClick}>
            <div>{note.name}</div>
          </button>
        </div>
      </div>
    );
  };

  onClick = e => {
    this.database = fire
      .database()
      .ref("/User_Name/Dulanjali")
      .child(bookCode);

    this.database.on("value", snap => {
      this.setState({
        Book: snap.val()
      });
    });
  };

  onChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredBooks = bookList.filter(note => {
      return note.name.toLowerCase().indexOf(search) !== -1;
    });

    return (
      <div>
        <div className="but-body">
          <Row>
            <Col>
              <nav class="navbar navbar-expand-sm skyblue navbar-dark sticky-top">
                <a class="navbar-brand">
                  <i class="fas fa-user" />
                  &nbsp;
                  <i class="fas fa-ellipsis-v" />
                </a>
              </nav>
            </Col>
          </Row>
        </div>

        <Row>
          <Col xs="3">
            <div class="container-fluid bg-gray" id="accordion-style-1">
              <div class="container">
                <section>
                  <div class="row">
                    <div class="col-20 mx-auto">
                      <div class="accordion" id="accordionExample">
                        <div class="card">
                          <div class="card-header" id="home">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseZero"
                                aria-expanded="true"
                                aria-controls="collapseZero"
                              >
                                <i class="fa fa-home main" />
                                Home
                              </button>
                            </h5>
                          </div>
                        </div>

                        <div class="card">
                          <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                <i class="fa fa-angle-double-right mr-3" />
                                Chapter 1 - Introduction to AKT/KFP
                              </button>
                            </h5>
                          </div>

                          <div
                            id="collapseOne"
                            class="panel-collapse collapse show fade"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                          >
                            <ul class="list-group">
                              <a href="" class="list-group-item">
                                Webinar of Chapter 1
                              </a>

                              <a href="" class="list-group-item">
                                Slide show of webinar 1
                              </a>

                              <a href="" class="list-group-item">
                                Time management
                              </a>

                              <a href="" class="list-group-item">
                                KFP answering techniques
                              </a>

                              <a href="" class="list-group-item">
                                Scoring technique for the 26 questions
                              </a>

                              <a href="" class="list-group-item">
                                Areas to Study
                              </a>

                              <a href="" class="list-group-item">
                                Study Plan
                              </a>

                              <a href="" class="list-group-item">
                                50 KFP questions
                              </a>
                            </ul>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                <i class="fa fa-angle-double-right mr-3" />
                                Chapter 2
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseTwo"
                            class="panel-collapse collapse fade"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                          >
                            <ul class="list-group">
                              <a href="" class="list-group-item">
                                Webinar of Chapter 2
                              </a>
                              <a href="" class="list-group-item">
                                Slide show of webinar 2
                              </a>
                              <a href="" class="list-group-item">
                                Dermatology
                              </a>
                              <a href="" class="list-group-item">
                                Respiratory
                              </a>
                              <a href="" class="list-group-item">
                                Ear, Nose and Throat
                              </a>
                              <a href="" class="list-group-item">
                                Eye notes
                              </a>
                              <a href="" class="list-group-item">
                                Endocrinology
                              </a>
                              <a href="" class="list-group-item">
                                Rheumatology
                              </a>
                              <a href="" class="list-group-item">
                                Sexually transmitted diseases
                              </a>
                              <a href="" class="list-group-item">
                                Aboriginal and Torres Strait Islander Health-
                              </a>
                              <a href="" class="list-group-item">
                                Red book Notes
                              </a>
                              <a href="" class="list-group-item">
                                KFP questions from chapter 2
                              </a>
                            </ul>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <i class="fa fa-angle-double-right mr-3" />
                                Chapter 3
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseThree"
                            class="panel-collapse collapse fade"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                          >
                            <ul class="list-group">
                              <a href="" class="list-group-item">
                                Webinar of Chapter 3
                              </a>
                              <a href="" class="list-group-item">
                                Slide show of webinar 3
                              </a>
                              <a href="" class="list-group-item">
                                Cardiovascular Disease
                              </a>
                              <a href="" class="list-group-item">
                                Nephrology
                              </a>
                              <a href="" class="list-group-item">
                                Urology
                              </a>
                              <a href="" class="list-group-item">
                                Musculoskeletal
                              </a>
                              <a href="" class="list-group-item">
                                Palliative care and Pain
                              </a>
                              <a href="" class="list-group-item">
                                Gastroenterology
                              </a>
                              <a href="" class="list-group-item">
                                Hepatology - Pancreas
                              </a>
                              <a href="" class="list-group-item">
                                Mens Health
                              </a>
                              <a href="" class="list-group-item">
                                Infertility
                              </a>
                              <a href="" class="list-group-item">
                                Travel medicine
                              </a>
                              <a href="" class="list-group-item">
                                Haematology
                              </a>
                              <a href="" class="list-group-item">
                                Malignancies
                              </a>
                              <a href="" class="list-group-item">
                                KFP questions from chapter 3
                              </a>
                              <a href="" class="list-group-item">
                                Webinar on chapter 3
                              </a>
                            </ul>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingFour">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                <i class="fa fa-angle-double-right mr-3" />
                                Chapter 4
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseFour"
                            class="panel-collapse collapse fade"
                            aria-labelledby="headingFour"
                            data-parent="#accordionExample"
                          >
                            <ul class="list-group">
                              <a href="" class="list-group-item">
                                Webinar of Chapter 4
                              </a>
                              <a href="" class="list-group-item">
                                Slide show of webinar 4
                              </a>
                              <a href="" class="list-group-item">
                                Psychiatry
                              </a>
                              <a href="" class="list-group-item">
                                Obstetric
                              </a>
                              <a href="" class="list-group-item">
                                Gynaecology
                              </a>
                              <a href="" class="list-group-item">
                                Paediatrics
                              </a>
                              <a href="" class="list-group-item">
                                Neurology
                              </a>
                              <a href="" class="list-group-item">
                                Emergency medicine
                              </a>
                              <a href="" class="list-group-item">
                                Nutrition
                              </a>
                              <a href="" class="list-group-item">
                                Infections Disease
                              </a>
                              <a href="" class="list-group-item">
                                Vaccination
                              </a>
                              <a href="" class="list-group-item">
                                Breast Disease
                              </a>
                              <a href="" class="list-group-item">
                                Surgery
                              </a>
                              <a href="" class="list-group-item">
                                Pharmacology
                              </a>
                              <a href="" class="list-group-item">
                                Radiology
                              </a>
                              <a href="" class="list-group-item">
                                Genetics
                              </a>
                              <a href="" class="list-group-item">
                                Miscellaneous and Preventive Health
                              </a>
                              <a href="" class="list-group-item">
                                KFP questions from chapter 4
                              </a>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Col>

          <Col>
            <div>
              <h1 className="your-book">
                Your Book:{" "}
                <a href={this.state.Book}>
                  <div className="your-book">{this.state.Book}</div>
                </a>{" "}
              </h1>
            </div>
            <div className="search-box-whole">
              <input
                className="search-txt-whole"
                type="text"
                onChange={this.onChange}
                placeholder="Search"
              />
              <button class="search-btn">
                <i class="fa fa-search" />
              </button>
              <div className="list-top">
                {filteredBooks.map(note => {
                  return this.renderNotes(note);
                })}
              </div>
            </div>
          </Col>

          <Col>
            <div class="row profile">
              <div class="profile-sidebar">
                <div class="profile-usertitle">
                  <div class="profile-usertitle-name">Dulanjali</div>
                </div>

                <div class="container">
                  <ul class="list-group">
                    <a
                      href=""
                      class="li-items list-group-item border-0 li-text"
                    >
                      <i class="fas fa-star" />
                      <a className="d-inline-flex p-2">Starred</a>
                    </a>

                    <a href="" class="list-group-item border-0 li-text">
                      <i class="fas fa-book" />
                      <a className="d-inline-flex p-2">All notes</a>
                    </a>
                    <a
                      href="bookmarks"
                      class="list-group-item border-0 li-text"
                    >
                      <i class="fas fa-bookmark" />
                      <a className="d-inline-flex p-2">Bookmarks</a>
                    </a>
                    <a href="" class="list-group-item border-0 li-text">
                      <i class="fas fa-tags" />
                      <a className="d-inline-flex p-2">Tags</a>
                    </a>
                    <a href="" class="list-group-item border-0 li-text">
                      <i class="fas fa-user-friends" />
                      <a className="d-inline-flex p-2">Shared</a>
                    </a>
                    <a href="" class="list-group-item border-0 li-text">
                      <i class="fas fa-trash" />
                      <a class="d-inline-flex p-2">Trash</a>
                    </a>
                    <button type="button" class="btn btn-default">
                      <a href="/">LOG OUT</a>
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

//export {};
export default MemberPage;
