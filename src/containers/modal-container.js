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
        // console.log("modal", this.props, this.props.triggerText.header)
      return (
        <React.Fragment>
          <TriggerButton
            showModal={this.showModal}
            buttonRef={(n) => (this.TriggerButton = n)}
            triggerText={this.props.triggerText.header}
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
            />
          ) : null}
        </React.Fragment>
      );
    }
  }
  
  export default Container;
  