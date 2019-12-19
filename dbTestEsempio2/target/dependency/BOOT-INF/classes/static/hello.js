$(document).ready(function() {
    $.ajax({
        url: "http://10.0.2.15:31058/demo/all"
    }).then(function(data) {
    	console.log(data);
    	for(var i = 0; i < data.length; i++) {
    		$('.greeting-id').append("<div>The ID is "+data[i].id+"</div>");
    		$('.greeting-name').append("<div>The name is"+data[i].name+"</div>");
    		$('.greeting-email').append("<div>The email is "+data[i].email+"</div>");
    	}
    });
    
});