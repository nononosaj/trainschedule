
// Variables for train data
	var trainName = "";
	var destination = "";
	var firstTrainTime = "";
	var frequency = "";

// On click function when user submits info
$("#addButton").on("click", function(){

// These variables will hold the results we get from the user's inputs via HTML
	      var trainName = $("#trainName").val().trim();
	      var destination = $("#destination").val().trim();
	      var firstTrainTime = $("#firstTrainTime").val().trim(); 
	      var frequency = $("#frequency").val().trim();      

// Add the values to local storage
		localStorage.setItem("train-name", trainName);
		localStorage.setItem("train-destination", destination);
		localStorage.setItem("first-time", firstTime);
		localStorage.setItem("train-frequency", frequency);

