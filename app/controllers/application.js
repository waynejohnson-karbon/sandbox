import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
    @service router;

    someVariable = 552;
    @tracked trackedVariable = 40;

    @tracked content = 'my content';

    @tracked inputContent = 'my content';

    @tracked boxes = [];
    // @tracked menuData = [1, 2, 7, 8];
    @tracked menuData = [
        {
            section: 'Apples',
            route: 'apples',
            items: ['red', 'orange', 'green']
        },
        {
            section: 'Apples (ID)',
            route: 'apples-personal',
            id: 123,
            items: ['red', 'orange', 'green']
        }
    ];

    @tracked activeRoute = 'none';

    //ap;

    constructor(owner, args) {
        super(owner, args);
        // this.initArray();
        this.router.on('routeDidChange', transition => {
            this.activeRoute = transition;
        });
    }

    get currentRoute(){
        //return this.activeRoute;
        return this.router.currentRouteName;
    }

    get proxiedArrayData(){
        return this.ap.get('content');
    }

    initArray(){
        // this.ap = ArrayProxy.create(
        //     { 
        //         content: A(this.boxes),
        //         changed: function() {
        //             console.log('here');
        //         }.observer('content.@each') 
        //     });
        // this.ap.addObject({number: 999, junk: Math.random()});

        // this.boxes.addObserver('junk', function() {
        //     console.log('junk changed');
        // });
    }

    

    @action onIncrease(){
        this.trackedVariable++;
    }

    // get junk(){
    //     return this.boxes.length > 2;
    // }

    @action addABox(){
        this.boxes.forEach(box => {
            box.junk = Math.random();
        });
        //let p = this.proxiedArrayData;

        // p.forEach(box => {
        //     box.junk = Math.random();
        // });

        

        //this.boxes.pushObject({number: this.boxes.length, junk: Math.random()});
        //console.log('ap', this.ap.get('content'));  
        //this.ap.set('content', [...p, {number: this.boxes.length, junk: Math.random()}] );

        this.boxes = [...this.boxes, {number: this.boxes.length, junk: Math.random()}];
        //this.boxes.push({number: this.boxes.length, junk: Math.random()});
    }

    get getTrackedVariable(){
        return this.trackedVariable;
    }
}
