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
       
        // return contents.filter(function(cont) {
          // return cont.get('title').match(rx) || cont.get('topic').match(rx);
    // });
       return this.get('arrangedContent').filterBy('title_category',this.get('filter'));
           
           
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