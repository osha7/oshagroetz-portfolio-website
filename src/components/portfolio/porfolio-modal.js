import React from 'react';
import ReactDOM from 'react-dom'
import FocusTrap from 'focus-trap-react';
import MoreInfo from './more-info';

export const Modal = ({
    onClickOutside,
    onKeyDown,
    modalRef,
    buttonRef,
    closeModal,
    id,
    website,
    githubFrontend,
    githubBackend,
    github,
    moreInfo
  }) => {
    return ReactDOM.createPortal(
        
      <FocusTrap>
        <aside
          tag="aside"
          role="dialog"
          tabIndex="-1"
          aria-modal="true"
          className="modal-cover"
          onClick={onClickOutside}
          onKeyDown={onKeyDown}
        >
          <div className="modal-area med-glow" ref={modalRef} id={id}>
            <button
              ref={buttonRef}
              aria-label="Close Modal"
              aria-labelledby="close-modal"
              className="_modal-close"
              onClick={closeModal}
            >
              <span id="close-modal" className="_hide-visual">
                Close
              </span>
              <svg className="_modal-close-icon" viewBox="0 0 40 40">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </button>
            <div className="modal-body">
              <MoreInfo 
              id={id} 
              closeModal={closeModal}
              // website={website}
              githubFrontend={githubFrontend}
              githubBackend={githubBackend}
              github={github}
              moreInfo={moreInfo}
              />
            </div>
          </div>
        </aside>
      </FocusTrap>,
      document.body
    );
  };