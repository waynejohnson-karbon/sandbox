import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SomewhereRoute extends Route {
    @service router;

    afterModel(model){
        let here = model;
        console.log(here);
    }

}
