// import React from 'react';

// class Trigger extends React.Component {
    
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <a href={this.props.showModal} data-target={this.props.showModal} >
//                 {this.props.triggerText}
//                 </a>
//             </div>
//         )
//     }
// }

// export default Trigger;

import React from 'react';

const Trigger = ({ triggerText, buttonRef, showModal }) => {
    return (
        <button
            className="btn btn-lg btn-danger center modal-button"
            ref={buttonRef}
            onClick={showModal}
            >
                {triggerText}
            </button>
    )
}

export default Trigger;