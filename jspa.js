'use strict';


var script = {
	page: function(page){
		var scripts  = {
				            '/index': {
								'style':[],
								'script':[]
							     },
							'/me': {
								'style':[],
								'script':[]
							     },
							'/me/new': {
								'style': ['http://coinfeeder.com/me/css/demo.css','http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css',
								          'http://coinfeeder.com/me/css/medium-editor.css', 'http://coinfeeder.com/me/css/themes/bootstrap.css',
										  'http://coinfeeder.com/me/css/main.css'],
								'script':['https://code.jquery.com/jquery-1.10.1.min.js', 'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js',
								          'http://coinfeeder.com/me/js/medium-editor.js', 'http://coinfeeder.com/me/js/rangy-core.js',
										  'http://coinfeeder.com/me/js/rangy-cssclassapplier.js','http://coinfeeder.com/me/js/jquery.slimscroll.js',
										 ]
							     },
							'/me/profile': {
								'style':[],
								'script':[]
							   }
								 
							}
							return scripts[page];
	},
	load:  function(page){
		var scripts  = this.page(page);
		for(var i in scripts){
			if(i == 'style'){
				for(var style in scripts['style']){
					 var resource = document.createElement('link');
						 resource.rel = "stylesheet";
						 resource.href = scripts['style'][style];
						 resource.type = 'text/css';
					  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(resource);
				}
			}else
				if(i == 'script'){
					for(var script in scripts['style']){
					 var resource = document.createElement('script');
						 resource.type = 'text/javascript';
						 resource.async = true;
						 resource.src = scripts['style'][script];
					  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(resource);
				    }
				
			      }
				}
             }
};
		
		/*
	 var resource = document.createElement('script');
		 resource.type = 'text/javascript';
		 resource.async = true;
		 resource.src = 'https://s3.buysellads.com/ac/bsa.js';
	  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(resource);
	  */


/*  -----------------------------------------------------------------------------------------------------------------------------------
    Start of code
*/

var page = window.location.pathname.replace(/\/+$/, "");

switch(page){
	case '/me':
	case '/me/content':
	 script.load('/me');
	break;
	case '/me/new':
	script.load(page);
	break;
}
