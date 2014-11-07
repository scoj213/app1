$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var text = $('#textinput').val();
	alert(text);
	storeValue("app", text);
}

function storeValue(key, value) {
	console.log("storing data");
	window.localStorage.setItem(
		key,
		value
	);
}