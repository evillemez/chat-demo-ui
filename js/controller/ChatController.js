
function ChatController($scope) {
	//the array of messages in chat
	$scope.messages = [];
	
	//TODO: register listeners
	
	//updates the interface with the message this
	//client submitted, and sends it to the server
	$scope.submitChatMessage = function () {
		//update our interface
		$scope.messages.push({
			name: "Evan", //user.name
			text: $scope.messageSubmission
		});
		
		$scope.messageSubmission = '';
		
		//TODO: scroll down to most recent chat submission
	}
}

//TODO: inject event dispatcher, user and/or websocket
//ChatController.$inject();
