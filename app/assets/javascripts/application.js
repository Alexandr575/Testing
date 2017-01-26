// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require_tree .
$(document).ready(function() {


$('input').iCheck({
	checkboxClass: 'icheckbox_square-blue',
});


});

$(document).on("click", "#add_todo", function(){
	$("#form_todo").submit();
});

$(document).on("click", "#check_b", function(event){
	var c =  "#form_check" + this.name;
	$(c).submit();
});

$(document).on("click", "#hide_form", function(){
   $("#todo_form").hide();
});

$(document).on("click", "#show_form", function(){
   $("#todo_form").show();
});

