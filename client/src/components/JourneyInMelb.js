import React, { Component } from 'react';
import "../css/journeyInMelb.css";
import melb1 from "../images/melb1.jpg";
import melb2 from "../images/melb2.jpg";
import melb3 from "../images/melb3.jpg";
export default class JourneyInMelb extends Component {
  render() {

    return (
        <div className="container carouselContainer">
        <h2 className="carouselTitle">My Journey In Melbourne</h2>  
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
      
          <div className="carousel-inner">
            <div className="item active">
              <img src={melb1} alt="Los Angeles" style={{width:"100%"}}/>
            </div>
      
            <div className="item">
              <img src={melb2} alt="Chicago"  style={{width:"100%"}}/>
            </div>
          
            <div className="item">
              <img src={melb3} alt="New york"  style={{width:"100%"}}/>
            </div>
          </div>
      
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
