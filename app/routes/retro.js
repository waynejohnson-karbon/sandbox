import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RetroRoute extends Route {
    @service router;

    beforeModel(model){
        let here = model;
        console.log(here);
        console.log('Retro route triggered');
    }

    afterModel(model){
        let here = model;
        console.log(here);
    }

}
