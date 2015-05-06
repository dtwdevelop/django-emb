from blog.models import Category , Page, Comment,Gallery
from tastypie.resources import ModelResource
from tastypie import fields

class CommentResource(ModelResource):
    class Meta:
        queryset = Comment.objects.all()
        resource_name = 'comment'
        fields = ('id', 'title','page_id','topic','category_id','pub_date',)
        
class GalleryResource(ModelResource):

    class Meta:
       # fields = ('id','title' 'avatar',)
        queryset = Gallery.objects.all()
        resource_name = 'gallery'


class PageResource(ModelResource):
#     category =  fields.ForeignKey('serializers.CategoryResource', 'category',related_name='pages')
    class Meta:
#         fields = ('id','category_id' 'title','topic','comments','pub_date','img_url',)
        queryset = Page.objects.all()
        resource_name = 'page'


class CategoryResource(ModelResource):
    pages = fields.ToManyField(PageResource,'pages', full=True)
    class Meta:
       
        fields = ('id', 'title_category', 'post','pages','url','hide', 'pub_date',)
        
        queryset = Category.objects.all()
        resource_name = 'category'
        
        


        
# 
# 

# from rest_framework import serializers
# 
# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Comment
#         fields = ('id', 'title','page_id','topic','category_id','pub_date',)
# 
# 
# class PagesSerializer(serializers.ModelSerializer):
#     comments = CommentSerializer(many=True, read_only=True)
#     class Meta:
#         model = Page
#         fields = ('id', 'title','topic','category_id','comments','pub_date','img_url',)
# 
# 
# class CategorySerializer(serializers.ModelSerializer):
#     pages = PagesSerializer(many=True, read_only=True)
#     class Meta:
#         model = Category
#         # resource_name = 'categories'
# 
#         fields = ('id', 'title_category', 'post','pages','url','hide', 'pub_date',)

