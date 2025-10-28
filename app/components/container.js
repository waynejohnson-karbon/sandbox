import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContainerComponent extends Component {
    @tracked boxes = [];

    @action onIncrease(){
        this.trackedVariable++;
    }

    @action addABox(){
        this.boxes.push(this.boxes.length);
    }
}
