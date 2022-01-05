var firebaseConfig = {
      apiKey: "AIzaSyB1XDqzbAQGr35eUo00h-tvCVsC9HyB5ak",
      authDomain: "kwitter-894d3.firebaseapp.com",
      databaseURL: "https://kwitter-894d3-default-rtdb.firebaseio.com",
      projectId: "kwitter-894d3",
      storageBucket: "kwitter-894d3.appspot.com",
      messagingSenderId: "292156235798",
      appId: "1:292156235798:web:4d378847ebc27a552dd537"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
