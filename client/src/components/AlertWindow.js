import React, { Component } from "react";
import SmallEllipseBtn from "./SmallEllipseBtn";
import { Link } from "react-router-dom";

class AlertWindow extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.handlePassValue = this.handlePassValue.bind(this);
  }

  handlePassValue(e) {
    this.props.onHandClickTwo(e);
  }
  handleClickOne=()=>{
    this.props.onHandleClickOne();
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="row"
          style={{ position: "fixed", left: "50%", zIndex: "999", top: "40%" }}
        >
          <div
            className="container"
            style={{
              position: "relative",
              background: "white",
              color: "rgb(93, 135, 221)",
              top: "-40%",
              left: "-50%",
              width: "auto",
              height: "auto",
              maxWidth: "500px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              border: "1px solid rgb(130, 171, 255)",
              borderRadius: "10px 10px 10px 10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "20px",
              paddingRight: "20px"
            }}
          >
            <br />
            {/* close  */}
            <div style={{ textAlign: "right", cursor: "pointer" }}>
              <i
                className="fas fa-times"
                style={{ fontSize: "3ex" }}
                onClick={this.props.onHandleClose}
              />
            </div>
            <br />

            <h4>{this.props.displayText}</h4>
            <br />
            {/* one btn */}
            {this.props.btnNum === "1" ? (
              <div className="row">
                <div className="col-12">
                  {/* link mode */}
                  {this.props.mode === "linkMode" ? (
                    <div>
                      <Link
                        to={this.props.linkTo}
                        onClick={this.props.onHandleClose}
                      >
                        <SmallEllipseBtn
                          text={this.props.btnText}
                          style={{
                            backgroundColor: "#e3f2fd",
                            width: "100%"
                          }}
                        />
                      </Link>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                  {/* customer mode */}
                  {this.props.mode === "customMode" ? (
                    <div>
                      <span onClick={this.props.onHandleClick}>
                        <SmallEllipseBtn
                          text={this.props.btnText}
                          style={{
                            backgroundColor: "#e3f2fd",
                            width: "100%"
                          }}
                        />
                      </span>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
            {/* two btn */}
            {this.props.btnNum === "2" ? (
              <div className="row">
                {/* left btn */}
                <div
                  className="col-12 col-lg-6"
                  style={{ paddingBottom: "20px" }}
                >
                  {this.props.btnOneMode === "linkMode" ? (
                    <div>
                      <Link
                        to={this.props.btnOneLinkTo}
                        onClick={this.props.onHandleClose}
                      >
                        <SmallEllipseBtn
                          text={this.props.btnOneText}
                          style={{
                            backgroundColor: "#e3f2fd",
                            width: "100%"
                          }}
                        />
                      </Link>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                  {/* customer mode */}
                  {this.props.btnOneMode === "customMode" ? (
                    <div>
                      <span onClick={this.handleClickOne}>
                        <SmallEllipseBtn
                          text={this.props.btnOneText}
                          style={{
                            backgroundColor: "rgba(255, 97, 97, 1)",
                            width: "100%"
                          }}
                        />
                      </span>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {/* right btn */}
                <div className="col-12 col-lg-6">
                  {this.props.btnTwoMode === "linkMode" ? (
                    <div>
                      <Link
                        to={this.props.btnTwoLinkTo}
                        onClick={this.props.onHandleClose}
                      >
                        <SmallEllipseBtn
                          text={this.props.btnTwoText}
                          style={{
                            backgroundColor: "#e3f2fd",
                            width: "100%"
                          }}
                        />
                      </Link>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                  {/* customer mode */}
                  {this.props.btnTwoMode === "customMode" ? (
                    <div>
                      <span onClick={this.handlePassValue}>
                        <SmallEllipseBtn
                          text={this.props.btnTwoText}
                          style={{
                            backgroundColor: "rgba(255, 97, 97, 1)",
                            width: "100%"
                          }}
                        />
                      </span>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
            <br />
            {this.props.btnNum === "3" ? (
              <div className="row">
                {/* left btn */}
                <div
                  className="col-12 col-lg-4"
                  style={{ paddingBottom: "20px" }}
                >
                  {this.props.btnOneMode === "linkMode" ? (
                    <div>
                      <Link
                        to={this.props.btnOneLinkTo}
                        onClick={this.props.onHandleClose}
                      >
                        <SmallEllipseBtn
                          text={this.props.btnOneText}
                          style={{
                            backgroundColor: "#e3f2fd",
                            width: "100%",
                            textAlign: "center"
                          }}
                        />
                      </Link>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                  {/* customer mode */}
                  {this.props.btnOneMode === "customMode" ? (
                    <div>
                      <span onClick={this.props.onHandClickOne}>
                        <SmallEllipseBtn
                          text={this.props.btnOneText}
                          style={{
                            backgroundColor: "rgba(255, 97, 97, 1)",
                            width: "100%",
                            textAlign: "center"
                          }}
                        />
                      </span>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {/* right btn */}
                <div
                  className="col-12 col-lg-4"
                  style={{ paddingBottom: "20px" }}
                >
                  {this.props.btnTwoMode === "linkMode" ? (
                    <div>
                      <Link
                        to={this.props.btnTwoLinkTo}
                        onClick={this.props.onHandleClose}
                      >
                        <SmallEllipseBtn
                          text={this.props.btnTwoText}
                          style={{
                            backgroundColor: "rgba(70, 130, 180, 1)",
                            width: "100%",
                            textAlign: "center"
                          }}
                        />
                      </Link>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                  {/* customer mode */}
                  {this.props.btnTwoMode === "customMode" ? (
                    <div>
                      <span onClick={this.handlePassValue}>
                        <SmallEllipseBtn
                          text={this.props.btnTwoText}
                          style={{
                            backgroundColor: "rgba(255, 97, 97, 1)",
                            width: "100%",
                            textAlign: "center"
                          }}
                        />
                      </span>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className="col-12 col-lg-4"
                  style={{ paddingBottom: "20px" }}
                >
                  {this.props.btnThreeMode === "linkMode" ? (
                    <div>
                      <Link
                        to={this.props.btnThreeLinkTo}
                        onClick={this.props.onHandleClose}
                      >
                        <SmallEllipseBtn
                          text={this.props.btnThreeText}
                          style={{
                            backgroundColor: "#e3f2fd",
                            width: "100%",
                            textAlign: "center"
                          }}
                        />
                      </Link>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                  {/* customer mode */}
                  {this.props.btnThreeMode === "customMode" ? (
                    <div>
                      <span onClick={this.handlePassValue}>
                        <SmallEllipseBtn
                          text={this.props.btnThreeText}
                          style={{
                            backgroundColor: "rgba(255, 97, 97, 1)",
                            width: "100%",
                            textAlign: "center"
                          }}
                        />
                      </span>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ) : (
              ""
            )}

            {this.props.checkBoxMessage ? (
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={this.props.onCheckBoxActive}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  {this.props.checkBoxMessage}
                </label>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AlertWindow;
