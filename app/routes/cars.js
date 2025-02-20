import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CarsRoute extends Route {
    @service router;

    queryParams = {
        car: {
            refreshModel: true
        }
    };

    resetController(controller, isExiting, transition) {
        if (isExiting) {
            // isExiting would be false if only the route's model was changing
            controller.set('car', null);
        }
    }

    beforeModel(model){
        console.log('beforeModel fires for ', model.from?.name, ' ', model.to?.name);
    }

    afterModel(model){
        let here = model;
    }

}
