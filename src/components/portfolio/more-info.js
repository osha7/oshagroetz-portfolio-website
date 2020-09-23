import React from 'react';

class MoreInfo extends React.Component {



    render() {
        console.log("more-info", this.props)
        if (this.props.githubFrontend) {
        return(
            <div className="more-info">
                <h1>More Info</h1>
                <a href={this.props.githubFrontend} target="_blank" rel="noopener noreferrer" >Github Frontend</a>
                <br />
                <a href={this.props.githubBackend} target="_blank" rel="noopener noreferrer" >Github Backend</a>
                <p>{this.props.moreInfo}</p>
            </div>
        )
        } else {
            return (
                <div className="more-info">
                <h1>More Info</h1>
                <a href={this.props.github} target="_blank" rel="noopener noreferrer"  >Github</a>
                <p>{this.props.moreInfo}</p>
            </div>
            )
        }
    }
}



export default MoreInfo;
