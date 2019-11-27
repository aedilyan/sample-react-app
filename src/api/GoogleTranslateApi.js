/**
 * GoogleTranslateApi
 */

import { window } from 'Utils'

let instance = null;

const userActionsEnum = {
    key: 'user_actions',
    insightsIntro: 'insights_intro',
    payLaterIntro: 'paylater_intro',
    googleTranslateClosed: 'google_translate',
    actionsFirstView: 'actions_first_view',
    actionsIntro: 'actions_intro'
};

export default class GoogleTranslateApi {

    constructor() {
        // api key for google maps
        if (!instance) {
            instance = this;
        }
        // set a globally scoped callback if it doesn't already exist
        if (!window._GoogleTranslateApi) {
            this.callbackName = '_GoogleTranslateApi.scriptLoaded';
            window._GoogleTranslateApi = this;
            window._GoogleTranslateApi.scriptLoaded = this.scriptLoaded.bind(this);
        }

        return instance;
    }

    load() {
        if (!this.promise) {
            this.promise = new Promise(resolve => {
                this.resolve = resolve;
                if (!window.google || !window.google.translate || typeof window.google.translate.TranslateElement === 'undefined') {
                    const script = document.createElement('script');
                    script.src = `//translate.google.com/translate_a/element.js?cb=${this.callbackName}`;
                    script.async = true;
                    document.body.appendChild(script);
                } else {
                    this.resolve();
                }
            });
        }

        return this.promise;
    }

    scriptLoaded() {
        if (this.resolve) {
            this.resolve();
        }
    }

    closeGoogleTranslate() {
        let userActions = JSON.parse(localStorage.getItem(userActionsEnum.key)) || {};
        userActions[userActionsEnum.googleTranslateClosed] = 1;
        localStorage.setItem(userActionsEnum.key, JSON.stringify(userActions));
    }

    showGoogleTranslate() {
        let userActions = JSON.parse(localStorage.getItem(userActionsEnum.key)) || {};
        //remove condition below after  07.1.A sprint
        if (localStorage.getItem('isGoogleTranslateClosed') === 'true') {
            localStorage.removeItem('isGoogleTranslateClosed');
            userActions[userActionsEnum.googleTranslateClosed] = 1;
            localStorage.setItem(userActionsEnum.key, JSON.stringify(userActions));
        }
        return !userActions[userActionsEnum.googleTranslateClosed];
    }
}
