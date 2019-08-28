import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import AlertWindow from "../components/AlertWindow";
import '../css/nav.css';

const collapse = (height) => {
    if(height>100){
        document.getElementById('toggleButton').click();
    }
}

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state={
            activeTag: "",
            searchText:"",
            ifSearched:false,
            emptySearch:false
        }
    }

    handleClickHomePage=()=>{
        this.setState({
            activeTag:""
        },()=>{
            collapse(this.refs.nav.clientHeight);
        });
    }
    handleClickAbout=()=>{
        this.setState({
            activeTag:"About"
        },()=>{
            collapse(this.refs.nav.clientHeight);
        });
    }
    handleClickComments=()=>{
        this.setState({
            activeTag:"Comments"
        },()=>{
            collapse(this.refs.nav.clientHeight);  
        });
    }
    handleInputSearchText=(e)=>{
        this.setState({
            searchText:e.target.value
        });
    }

    toggleExpand=()=>{
        setTimeout(()=>{
            const navHeight = this.refs.nav.clientHeight;
            console.log(navHeight);
            this.props.navToggleExpand(navHeight);
        }, 300);
    }
    handleEmptyInput=()=>{
        this.setState({emptySearch:true},()=>{
            collapse();  
        });
    }
    
    handleSearch=()=>{
        this.setState({searchText:""});
    }

    componentDidMount(){
        window.addEventListener('resize',  ()=>this.toggleExpand());
    }

    render(){
        let about = 'nav-item';
        let comments = "nav-item";
        switch(this.state.activeTag){
            case "": break;
            case "About": about="nav-item active";break;
            case "Comments": comments="nav-item active";break;
            default: 
        }

        return(
            <React.Fragment>
                <nav className="fixed-top navbar navbar-expand-md navbar-light" style={{backgroundColor:'#e3f2fd'}}  ref="nav">
                    <Link to='/' className="navbar-brand" role="button" onClick={this.handleClickHomePage}>
                        <span className='brandTag'><i className="far fa-smile-wink"></i>RyanHome</span>
                    </Link>
                    <button id="toggleButton" className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation"
                    onClick={this.toggleExpand}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className={comments}>
                                <Link to='/comments' className="nav-link" onClick={this.handleClickComments}>
                                    <span className='sectionTag'>Comments</span>
                                </Link>
                            </li>
                            <li className={about}>
                                <Link to='/about' className="nav-link" onClick={this.handleClickAbout}>
                                <span className='sectionTag'>AboutMe</span></Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0 searchBar">
                            <input className="form-control mr-sm-2" 
                            style={{height:'42px',width:'280px',fontSize:'17px'}}
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            value={this.state.searchText} 
                            onChange={this.handleInputSearchText}
                            onInvalid={this.alertEmptyInput}
                            />
                            {this.state.searchText?
                            <Link to={`/search/${this.state.searchText}`}>
                                <button className="btn searchSubmit my-2 my-sm-0" onClick={this.handleSearch}><span style={{fontSize:'17px'}}><i className="fas fa-search"></i></span></button>
                            </Link>:<button className="btn searchSubmit my-2 my-sm-0" onClick={this.handleEmptyInput} type="button"><span style={{fontSize:'17px'}}><i className="fas fa-search"></i></span></button>}
                        </form>
                        
                    </div>
                </nav>
                {this.state.emptySearch? (
                <AlertWindow
                    displayText={
                    <div>
                        <h4>Stop playing around! What are you after? Pls type something before searching!</h4>
                    </div>
                    }
                    btnNum="1"
                    mode="customMode"
                    btnText="Fine. You're the boss."
                    onHandleClose={() => {
                        this.setState({ emptySearch: false });
                        }}
                    onHandleClick={() => {
                    this.setState({ emptySearch: false });
                    }}
                />
                ) : (
                ""
                )}
            </React.Fragment>
        )
    }
}
export default NavBar;