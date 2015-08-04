var errorText1="This name is either taken or contains not allowed characters. Please use following characters to name rooms: a-z 0-9 _ -";
var errorText2="This Youtube link is not working correct. Please delete  '&feature=youtu.be' part.";
$(document).ready(function(){
	$("#error").hide();
	$("#error2").hide();
	var newurl;
	chrome.tabs.query({active:true,lastFocusedWindow:true}, function(result){
			newurl = result[0].url;

	});

	$(document).keypress(function(e) {
    if(e.which == 13) {
        createRoom();
        
    }
	});

	$("#open").click(function(){
			createRoom();	  
		
	});

function createRoom(){

	var data={
			link:newurl,
			name: $("#roomName").val()			
		}
	if(data.link.indexOf("youtube")>=0){
		$("#error").hide();
		$("#error2").show();
		return;
	}
	$.ajax(
		{
            url: "http://roomit.tv/room/create/",
            type: "POST",
            data: data,
            dataType: "text",
            success: function(responce){
				var x = jQuery.parseJSON(responce);
				if(x.error==null){chrome.tabs.update({url:"http://roomit.tv/room/"+ x.name},function(tab){window.close();});}
				else{ 
					$("#error2").hide();$("#error").show();
				}
			}
		})	
	};	
});