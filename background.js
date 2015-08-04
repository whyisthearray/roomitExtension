chrome.tabs.onActivated.addListener(
		function (activeInfo){	
			chrome.tabs.get(activeInfo.tabId, function(tab){

				var expression = /^(((https?:\/\/)?(www\.)?)?(((twitch|azubu|hitbox)\.tv)|douyutv\.com|games\.dailymotion\.com\/live|huomaotv\.com\/live|youtube\.com|youtu\.be)\/(watch\?v\=)?([^\/]+)\/?)?$/g
				var regex = new RegExp(expression);
				if(tab.url.match(regex)){					
					chrome.browserAction.setIcon({path:"rLogo.png"});
					chrome.browserAction.setTitle({title:"Create room on Roomit.tv"});
					chrome.browserAction.setPopup({popup:"popup.html"});					
				}
				else{
					chrome.browserAction.setIcon({path:"rLogoDis.png"});
					chrome.browserAction.setPopup({popup:""});
					chrome.browserAction.setTitle({title:"Cannot create a room with this link. Choose one of stream channels."});
				
				}
			})
		}
	);





chrome.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab)
	{
		if(!tab.selected) return;
		var expression = /^(((https?:\/\/)?(www\.)?)?(((twitch|azubu|hitbox)\.tv)|douyutv\.com|games\.dailymotion\.com\/live|huomaotv\.com\/live|youtube\.com|youtu\.be)\/(watch\?v\=)?([^\/]+)\/?)?$/g
				var regex = new RegExp(expression);
				if(tab.url.match(regex)){					
					chrome.browserAction.setIcon({path:"rLogo.png"});
					chrome.browserAction.setTitle({title:"Create room on Roomit.tv"});
					chrome.browserAction.setPopup({popup:"popup.html"});					
				}
				else{
					chrome.browserAction.setIcon({path:"rLogoDis.png"});
					chrome.browserAction.setPopup({popup:""});
					chrome.browserAction.setTitle({title:"Cannot create a room with this link. Choose one of stream channels."});
				
				}
	}
	);
	