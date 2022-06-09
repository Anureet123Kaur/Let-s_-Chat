
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAVQhMzzMXx7Qmio4G8V_B95HcnUZmZ7PM",
      authDomain: "kwitter-3794a.firebaseapp.com",
      databaseURL: "https://kwitter-3794a-default-rtdb.firebaseio.com",
      projectId: "kwitter-3794a",
      storageBucket: "kwitter-3794a.appspot.com",
      messagingSenderId: "760377295434",
      appId: "1:760377295434:web:a94a2d41b34a5b337a1cb3",
      measurementId: "G-L7FY16KSP0"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
