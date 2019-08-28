import React,{Component} from 'react';
import "../css/infoSection.css";
class InfoSection extends Component {
    render(){
        return(
            <div className="container infoContainer">
                <div className="row">
                    <div className="infoTitle">
                        {this.props.infoTitle}
                    </div>
                    <div className="infoContent">
                        {this.props.infoContent}
                    </div>
                </div>
            </div>
        )
    }
}
export default InfoSection;