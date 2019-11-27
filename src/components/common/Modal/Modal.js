import React from 'react';
import { createPortal } from 'react-dom';
import './modal.css'

export const Modal = (props) => {

    const modalRoot = document.getElementById('modal-root');
    const childElements = props.children;
    const modalWrapper = React.createRef();

    const closeModal = () => {
        if (typeof props.onClose === 'function') {
            props.onClose();
        }
    }

    const onModalClick = (event) => {
        if (event.target == modalWrapper.current && typeof props.onClose === 'function' && props.closeOnOutClick) {
            props.onClose();
        }
    }

    const renderModal = () => {
        if (props.isOpen) {
            const modalElement = <div className="modal-wrapper" onClick={(e) => onModalClick(e)} ref={modalWrapper}>
                <div className="modal-container">
                    <div className="modal-header">
                        <button className="close" onClick={() => closeModal()}>X</button>
                    </div>
                    <div className="modal-body">
                        {childElements}
                    </div>
                </div>
            </div>;

            return modalElement;
        }

        return null
    }

    return (
        createPortal(renderModal(), modalRoot)
    );
}
