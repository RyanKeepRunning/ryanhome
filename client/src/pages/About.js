import React,{Component} from 'react';
import '../css/about.css';
import ryanProfile from '../images/RyanProfile.jpg';
import ryanCausualProfile from '../images/RyanCasualProfileEdited.jpg';
import JourneyInMelb from '../components/JourneyInMelb';
import InfoSection from '../components/InfoSection';

const images=[];
images.push(ryanProfile);
images.push(ryanCausualProfile);

class About extends Component {
    constructor(props){
        super(props);
        this.state={
            showCasualPic:false
        }
    }
    togglePic=()=>{
        this.setState({
            showCasualPic:!this.state.showCasualPic
        })
    }
    render(){
        return(
            <div className='container aboutFrame'>
                <div className='row'>
                    <div className='col-12 aboutTitle'>
                        <i className="fab fa-angellist"></i>
                         Facts about me 
                        <i className="fab fa-angellist"></i>
                    </div>
                    <div className='col-md-4 col-12 text-center'>
                        {this.state.showCasualPic?
                        <img className="profilePic" src={ryanCausualProfile} alt="Profile" onClick={this.togglePic}/>
                        :
                        <img className="profilePic" src={ryanProfile} alt="Profile" onClick={this.togglePic}/>}
                    </div>
                    <div className='col-md-8 col-12'>
                        <ul className="funfacts">
                            <li>Full stack web developer</li>
                            <li>React/Bootstrap/Express/Redux</li>
                            <li>About to graducate from Unimelb in July 2019</li>
                            <li>Actively looking for opportunities in Melbourne</li>
                            <li className="linkedinContainer">LinkedIn: 
                                <a className="linkedin" href="https://www.linkedin.com/in/ryantianmelb">
                                    <span className="linkedinLink">www.linkedin.com/in/ryantianmelb</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 aboutHrContainer">
                        <hr className="aboutHr"/>
                    </div>

                    <div className="col-12">
                        <InfoSection 
                            infoTitle="Education" 
                            infoContent="As an MIT student from University of Melbourne (Jun 2017-present), I did well in my past subjects and achieved 83 average marks. Apart from university subjects, I am also obsessed with web development, I dived into this field and learned a bunch of practical skills such as React, Bootstrap, Express.js, etc. Recently, I have achieved 90 for all sections of PTE test, therefore, I would be eligible to work in Australia after I graduate in July 2019."/>
                    </div>
                    <div className="col-12">
                            <InfoSection
                                infoTitle="Working Experience"
                                infoContent="As a full stack web developer intern (Government sponsored Summertech Program) of RESORTer (Nov 2018 - Feb 2019) and off-site web developer of Zhongchahui Tea (Sep 2018 – present), I am responsible for front/back-end website development (React/Express/Adonis), UX design and user requirement analysis. As a web development intern of Richfit Information Technology Corporation (Dec 2017 – Jan 2018), I assisted with UX survey and front-end design enhancement."
                            />
                    </div>

                    <div className="col-12 aboutHrContainer">
                        <hr className="aboutHr"/>
                    </div>
                    
                    <div className="col-12">
                        <JourneyInMelb width={600} height={400}>
                            {images.map(image => <img src={image} alt="" key={image}/>)}
                        </JourneyInMelb>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default About;