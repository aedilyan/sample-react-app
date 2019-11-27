import React, { useState, useEffect } from 'react'
import './GoogleTranslate.css'
import GoogleTranslateApi from '../../../api/GoogleTranslateApi';
import { window } from 'Utils'
import { Modal } from 'Components'

export const GoogleTranslate = () => {
    const gTranslateApi = new GoogleTranslateApi();
    const isGoogleTranslateClosed = !gTranslateApi.showGoogleTranslate();
    const googleTranslateElement = React.createRef();
    const [isGoogleTranslateShow, setGoogleTranslateShow] = useState(false);

    useEffect(() => {
        const gTranslatePromise = gTranslateApi.load();

        if (!isGoogleTranslateClosed) {
            gTranslatePromise.then(() => {
                googleTranslateElementInit();
            });
        }
    }, [])

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL
        }, 'google_translate_element_reg');
        setGoogleTranslateShow(true);
    }

    let customStyles = {};

    const closeTranslate = () => {
        gTranslateApi.closeGoogleTranslate();
        setGoogleTranslateShow(false)
    };

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            {!isGoogleTranslateClosed ? (
                <div id="google_translate_element_reg"
                    ref={googleTranslateElement}
                    className={isGoogleTranslateShow ? 'show' : ''}
                >
                    <a className="close-google-translate" onClick={() => openModal()}></a>
                </div>
            ) : ('')}

            {modalIsOpen
                ? <Modal
                    isOpen={modalIsOpen}
                    header="My repayment schedule"
                    onClose={closeModal}
                    style={customStyles}
                >
                    <div className="payment-modal">
                        <h3>Close Google Translate.</h3>
                        <button onClick={() => closeTranslate()}>Close</button>
                    </div>
                </Modal>
                : ""}
        </>
    );
};