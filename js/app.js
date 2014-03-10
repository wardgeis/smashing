/* /app.js 
*/
window.App = Ember.Application.create();

/* /store.js 
*/
App.ApplicationAdapter = DS.FixtureAdapter;

/* /models/user.js 
*/
App.User = DS.Model.extend({
  name         : DS.attr(),
  email        : DS.attr(),
  bio          : DS.attr(),
  avatarUrl    : DS.attr(),
  creationDate : DS.attr()
});

/* /models/user.js 
*/
App.User.FIXTURES = [{
  id: 1,
  name: 'Sponge Bob',
  email: 'bob@sponge.com',
  bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
  avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/sb.jpg',
  creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
}, {
  id: 2,
  name: 'John David',
  email: 'john@david.com',
  bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
  avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/jk.jpg',
  creationDate: 'Fri, 07 Aug 2013 10:10:10 GMT'
}];

/* /router.js 
*/
App.Router.map(function(){
  this.resource('users', function(){
    this.resource('user', { path:'/:user_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
});

/* /routes/usersRoute.js 
*/
App.UsersRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('user');
  }
});