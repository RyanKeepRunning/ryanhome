import React,{Component} from 'react';
import PageFooter from './components/PageFooter';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Comments from './pages/Comments';
import About from './pages/About';

class RootRouter extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavExpanded:false,
            navHeight:"57.98px"
        }
    }
    navToggleExpand=(navHeight)=>{
        if(parseInt(navHeight)>57.98){
            this.setState({
                navHeight:`${navHeight}px`
            });
        }
        else if(parseInt(navHeight)===57.98){
            this.setState({
                navHeight:`${navHeight}px`
            });
        }else{
            this.setState({
                navHeight:`57.98px`
            });
        }
    }
    
    render(){
        
        return(
            <BrowserRouter>
                <div className="container-fluid" style={{paddingLeft:0,paddingRight:0, position: "relative",minHeight:"100vh", marginTop:this.state.navHeight}}>
                    <div style={{paddingBottom:"10rem",boxSizing:'border-box'}}>
                        <Nav navToggleExpand={this.navToggleExpand}/>
                        <div style={{marginBottom:'100px'}}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/comments" component={Comments}/>
                        </Switch>
                        </div>
                        <PageFooter/>
                    </div>
                </div>
            </BrowserRouter>
        );

    }
}

export default RootRouter;