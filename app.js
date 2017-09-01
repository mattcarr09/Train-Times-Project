
  var config = {
    apiKey: "AIzaSyDu-p4poN5nqvbO9tlEyvHnnZB5XWI3xsk",
    authDomain: "trainspotters-9db87.firebaseapp.com",
    databaseURL: "https://trainspotters-9db87.firebaseio.com",
    projectId: "trainspotters-9db87",
    storageBucket: "trainspotters-9db87.appspot.com",
    messagingSenderId: "838873898457"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var firstTrain = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
  var frequency = $("#rate-input").val().trim();


  // Creates local "temporary" object for holding train data
  var newTrain = {
    train: trainName,
    destination: trainDestination,
    firstTrain: firstTrain,
    frequency: frequency
  };

  // Uploads train data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.train);
  console.log(newTrain.destination);
  console.log(newTrain.firstTrain);
  console.log(newTrain.frequency);

  // Alert
  alert("train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");

});

// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().train;
  var trainDestination = childSnapshot.val().destination;
  var firstTrain = childSnapshot.val().firstTrain;
  var frequency = childSnapshot.val().frequency;

  // train Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(firstTrain);
  console.log(frequency);

  // Prettify the train start
  var trainStartPretty = moment.unix(firstTrain).format("HH:mm");

  // Calculate the months worked using hardcore math
  // To calculate the months worked
  

  // Calculate the total billed rate
 

  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  trainStartPretty + "</td><td>" +  + "</td><td>" +  + "</td><td>" +  + "</td></tr>");
});

// Example Time Math
// -----------------------------------------------------------------------------
// Assume train start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case
