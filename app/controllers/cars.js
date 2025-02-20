import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CarsController extends Controller {

    queryParams = [{
        car: {
            replace: true
        }
    }];
    @tracked car =  null;

    constructor(owner, args) {
        super(owner, args);
    }

}
