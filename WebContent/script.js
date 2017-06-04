function login(ele){
	$("#login .inputBox2").offset({top : $(".row").outerHeight(), left : $(window).width() - $("#login").outerWidth()});
	$("#login").fadeToggle("slow");
}
function signup(ele){
	$("#signup .inputBox2").offset({top : $(".row").outerHeight(), left : $(window).width() - $("#signup").outerWidth()});
	$("#signup").fadeToggle("slow");
}
function showMore(ele){
	$("#more").fadeToggle("slow");
}
function confirmLogin(){
	var email = $("#loginEmail").val();
	var password = $("#loginPassword").val();
	if(password == ""){
		alert("password cannot be empty");
		return false;
	}
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!re.test(email)){
		alert("Email is incorrect");
		return false;
	}
	if(password != "anuja"){
		alert("Password is incorrect");
		return false;
	}
	loginUser(email, password);
}
function clearEmailField(){
	if($("#loginEmail").val() == "example@example.com"){
		$("#loginEmail").val("");
	}
}
function loginUser(email, password){
	
}