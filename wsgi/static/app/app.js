
App = Ember.Application.create({
    // LOG_TRANSITIONS: true,
//     LOG_TRANSITIONS_INTERNAL: true
});

App.Router.map(function() {
	
   this.route('index', { path: '/' });
   
   
    this.resource("page",{ path: '/page/:id'});
     this.resource("pages",{ path: '/pages/:id'});
      this.resource("gallery",{ path: '/gallery'});
      this.route("contact",{ path: '/contact'});
      this.resource("profile",{ path: '/profile/'});
 
   // this.resource("comment",{ path: '/comment' });

});

//App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.ApplicationAdapter = DS.DjangoTastypieAdapter.extend({
	 namespace: "api/public"
});
App.ApplicationSerializer = DS.DjangoTastypieSerializer.extend({});

//App.ApplicationAdapter = DS.RESTAdapter.extend({
//    host: '/api',
//   defaultSerializer: 'django'
//});




Ember.Handlebars.registerBoundHelper('printdate', function(pub_date,options) {
	
	  return new Ember.Handlebars.SafeString(new Date(pub_date).toDateString());
     
  });
  
/**
 * page route
 */
App.PageRoute = Ember.Route.extend({

model: function(params) {
    
         
    return this.store.find('page', params.id );
 
       

},
 
});
/***
 * Profile login
 */
App.ProfileRoute = Ember.Route.extend({

// model: function(params) {
//     
//          
    // return this.store.find('page', params.id );
//  
//        
// 
// },
 
});
/**
 * pages route by category
 */
App.PagesRoute = Ember.Route.extend({

model: function(params) {
    
         
    return this.store.find('category',  params.id );
 
       

},
 
});
/**
 * Gallery route
 */
App.GalleryRoute = Ember.Route.extend({

model: function(params) {
    
         
    return this.store.find('gallery');
 
       

},
 
});

/**
 * Contact route
 */
App.ContactRoute = Ember.Route.extend({

});

/**
 * all categories
 */
App.IndexRoute = Ember.Route.extend({

model: function() {
   
     
    return this.store.find('page').then(function(data){
    	return data;
    });
 
       

},
  setupController: function(controller, model) {
  
   controller.setProperties(model);
 }
});









