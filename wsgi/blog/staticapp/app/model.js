/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var attr = DS.attr;
App.Category = DS.Model.extend({
 title_category: attr(),
 post:attr(),
 pages: attr(),
 url:attr(),
 hide:attr(),
 pub_date:attr(),
 page: DS.hasMany('page')

});

App.Comment = DS.Model.extend({
   title: attr(),
    
});

App.Gallery = DS.Model.extend({
   
   title: attr(),
   avatar:attr()
   
    
});

App.Page = DS.Model.extend({
   title: attr(),
    topic:attr(),
    category_id:attr(),
    category:DS.belongsTo('category'),
    comments:attr(),
    pub_date:attr(),
    img_url:attr()
    
    
});




