from setuptools import setup

setup(name='YourAppName',
      version='1.0',
      description='OpenShift App',
      author='vl',
      author_email='example@example.com',
      url='http://www.python.org/sigs/distutils-sig/',
      install_requires=['Django<=1.6','django-haystack','django-oauth2-provider','django-imagekit','django-recaptcha','Pillow','django-tastypie','markdown','django-filter'],
     )
