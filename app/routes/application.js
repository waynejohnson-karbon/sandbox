import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
    @service intl;
    
    beforeModel(model){
        const locale = window.navigator.userLanguage || window.navigator.language;

        if (locale) {
            this.intl.setLocale([locale.toLowerCase(), 'en-us']);
        }
    }

}
