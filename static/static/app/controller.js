App.IndexController = Ember.ArrayController.extend({
    //filteredContent
    //arrangedContent
    sortProperties: ["title","pub_date"],
    sortAscending: false,
    
    filter:'',

    actions: {
   sort: function(property) {
       this.set('sortProperties', [property]);
       this.toggleProperty('sortAscending');
       
       
       // this.set('sortAscending', !this.get('sortAscending'));

      }
   },
   
    filteredContent: function() {
   	
   	var filter = this.get('filter');
    var rx = new RegExp(filter, 'gi');
    var contents = this.get('arrangedContent');
   
     if(this.get('filter') === '') {
           return this.get('arrangedContent');
     }
     
     else {
       
        return contents.filter(function(cont) {
          return cont.get('title').match(rx) ;
    });
       //return this.get('arrangedContent').filterBy('title_category',this.get('filter'));
           
           
     }
     
  }.property('arrangedContent','filter')
  

});

App.NavigationBarController = Ember.ArrayController.extend({
	menu:null,
   init: function() {
    var controller = this;

    var data = this.store.find('category');
     Ember.run.next(function() {
       controller.set("menu",data );
     });
    
  
    this._super();
    
  }

   });
   
   
   App.LastNewsController = Ember.ArrayController.extend({
	lnews:null,
	 
	 sortProperties: ["pub_date:desc"],
	 sortAscending: false,
   init: function() {
    var controller = this;

    var data = this.store.find('page');
    controller.set("lnews",data );
     // Ember.run.next(function() {
//        
     // });
    
  
    this._super();
    
  },
  

   });
   
   
// Ember.TextSupport.reopenClass({
  // attributeBindings: [ 'required' ]
// });


App.ContactController = Ember.Controller.extend({
	// fields
post:'',
name:'',
email:'',
info:'',
type:null,
type2:null,


init:function(){
	
	
},
actions: {
    send: function() {
    	//do something
       
        this.set('info','Thanks you ,Contact send success');
         this.set('name',' ');
          this.set('email',' ');
           this.set('post',' ');
        
    }
   }
 
  
});

App.ProfileController = Ember.Controller.extend({
login:'',
pass:'',
infodata:'',
user:false,


init:function(){
	
	
},
actions: {
    login: function() {
    	//do something
    	var fl=false;
       $.post( "blog/login",{ login: this.login, password: this.pass }, function( data ) {
         
         if(data.inside){
         	console.log(data.inside);
         	fl=true;
         }
         else{
         	fl=false;
         }
            
       });
         
         if(fl){
         	
			  // this.store.createRecord('user', {
			  // login: this.login,
			  // inside: true
			// });
         	this.set('user',true);
         	 this.set('infodata',true);
         }
         else{
         	this.set("user",false);
          	 this.set('infodata',false);
         }
        
    }
   }
 
  
});