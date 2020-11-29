import React from 'react';
import {Modal} from '../components/portfolio/porfolio-modal';
import TriggerButton from './trigger-button';

export class Container extends React.Component {
    state = { isShown: false };
   
    showModal = () => {
      this.setState({ isShown: true }, () => {
        this.closeButton.focus();
      });
      this.toggleScrollLock();
    };
    
    closeModal = () => {
        // debugger
      this.setState({ isShown: false });
      this.TriggerButton.focus();
      this.toggleScrollLock();
    };
    
    onKeyDown = (event) => {
      if (event.keyCode === 27) {
        this.closeModal();
      }
    };
    
    onClickOutside = (event) => {
      if (this.modal && this.modal.contains(event.target)) return;
      this.closeModal();
    };
  
    toggleScrollLock = () => {
      document.querySelector('html').classList.toggle('scroll-lock');
    };
    
    render() {
  //  console.log("modal", this.props)
      return (
        <div>
          <h2 className="project__title">{this.props.triggerText.header}</h2>
          <TriggerButton
            showModal={this.showModal}
            buttonRef={(n) => (this.TriggerButton = n)}
          />
          {this.state.isShown ? (
            <Modal
              onSubmit={this.props.onSubmit}
              modalRef={(n) => (this.modal = n)}
              buttonRef={(n) => (this.closeButton = n)}
              closeModal={this.closeModal}
              onKeyDown={this.onKeyDown}
              onClickOutside={this.onClickOutside}
              id={this.props.id}
              website={this.props.website.website}
              githubFrontend={this.props.githubFrontend.githubFrontend}
              githubBackend={this.props.githubBackend.githubBackend}
              github={this.props.github.github}
              moreInfo={this.props.moreInfo.moreInfo}
            />
          ) : null}
        </div>
      );
    }
  }
  
  export default Container;
  