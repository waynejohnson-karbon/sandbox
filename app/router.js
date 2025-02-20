import EmberRouter from '@ember/routing/router';
import config from 'sandbox/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('apples', function(){
    this.route('red');
    this.route('orange');
    this.route('green');
  });

  this.route('apples-personal', { path: '/apples/:id' }, function(){
    this.route('red');
    this.route('orange');
    this.route('green');  
  });

  this.route('cars');
  // , function(){
  //   this.route('astra');
  //   this.route('mazda');
  //   this.route('vw');
  // });

});
