import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

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
