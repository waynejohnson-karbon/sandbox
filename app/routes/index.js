import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SomewhereRoute extends Route {
    @service router;

    beforeModel(model){
        this.router.transitionTo('apples');
    }

}
