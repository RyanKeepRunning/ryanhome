import React,{Component} from 'react';

const footerStyle={
    bottom:"0",
    position:"absolute",
    height:"5.5rem",
    textAlign:"center",
    width:"100%",
    background:"#e3f2fd", 
    paddingTop:"5px",
    paddingBottom:"5px",
    borderTop:'1px solid #608dd6',
    borderBottom:'1px solid #608dd6',
}
const textStyle={
    marginTop:'1px',
    fontFamily:'Arial, Helvetica, sans-serif',
    fontSize:'1.1em',
    color:'#608dd6'
}

class PageFooter extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className="container-fluid" style={footerStyle}>
                <div className="row">
                    <div className="col-12" style={textStyle}>Ryan T</div>
                    <div className="col-12" style={textStyle}>Web developer (Unimelb)</div>
                    <div className="col-12" style={textStyle}>Melbourne</div>
                </div>
            </div>
        )
    }
}   

export default PageFooter;