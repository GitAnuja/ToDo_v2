(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['todo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div style=\"margin : 50px auto; width : 380px;\">\n	<section style=\"position : relative; width : 260px; margin : 0 auto; padding : 12px 0; background : #fff; border : 1px solid; border-color : #dfdcdc #d9d6d6 #ccc; border-radius : 2px; box-shadow : 0 1px 2px rgba(0, 0, 0, 0.1); height : 250px;\">\n		<ul style=\"margin : 0 15px 12px 50px; height : 12px; list-style : none;\">\n			<li style=\"float : left;\">TASKS</li>\n		</ul>\n		<ul style=\"list-style : none; border-top : 1px solid #e6ebed;\">\n			<li style=\"position : relative; padding : 7px 15px 7px 50px; line-height : 21px; font-size: 12px; color : #8b8f97; border-bottom : 1px solid #e6ebed;\">\n				<input type=\"checkbox\">\n				<input type=\"text\" placeholder=\"Enter Text\" style=\"border : none;\">\n			</li>\n		</ul>\n	</section>\n</div>\n";
},"useData":true});
})();