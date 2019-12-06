var firebaseConfig = {
    apiKey: "AIzaSyBltYvd7aGt0K3A2d8pT2iYfyZcbxzkSe0",
    authDomain: "airbook-60cbd.firebaseapp.com",
    databaseURL: "https://airbook-60cbd.firebaseio.com",
    projectId: "airbook-60cbd",
    storageBucket: "airbook-60cbd.appspot.com",
    messagingSenderId: "256822869010",
    appId: "1:256822869010:web:78228e51da8972439caccb",
    measurementId: "G-6F8XLZNEFW"
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    if(firebase.initializeApp(firebaseConfig)) console.log("success");
    else console.log("fail")
    //firebase.initializeApp(firebaseConfig);
}

  firebase.auth.Auth.Persistence.LOCAL;

  /*firebase.auth().onAuthStateChanged(function(user){
    if(user){
        console.log("sucksess");
        window.location.href="test.html";
    }
    else console.log("fuCKKKKKKKK");
});*/

$("#login-btn").click(function(){
    
  var loginEmail = $("#login-email").val();
  var loginPw= $("#login-pw").val();
  console.log(loginEmail + " " + loginPw)

  if(loginEmail!="" && loginPw!=""){
      firebase.auth().signInWithEmailAndPassword(loginEmail, loginPw)
      .then(user => {
        window.location.href="test.html"
      })
      .catch(function(error){ 
          var errMsg = error.message;
          console.log(errMsg);
      });
  }
  else window.alert("Please fill out all fields.")
});
 
$("#signup-btn").click(function(){
    
  var signupEmail = $("#signup-email").val();
  var signupPw= $("#signup-pw").val();
  console.log(signupEmail + " " + signupPw)

  if(signupEmail!="" && signupPw!=""){
    firebase.auth().createUserWithEmailAndPassword(signupEmail, signupPw)
    .then(user => {
      window.location.href="test2.html"
    })
    .catch(function(error){ 
        var errMsg = error.message;
        console.log(errMsg);
    });
  }
  else window.alert("Please fill out all fields.");
});

  $("#logout-btn").click(function(){
    firebase.auth().signOut();
    window.location.href="login.html"
  });
  
  var flights;
    /*this function is retrieving the JSON data, and inside the function it's
    storing all of the data into the "flights" var that was declared above.*/
    $.getJSON("flights.json", function(json) {
      //console.log(json.flights[3]); // show the JSON file content into console
      flights=json.flights;
  });


  /*JSON works like an array, you can check if something matches by doing what
  was done below.*/
    $("#json-btn").click(function(){
      for (var i = 0; i < flights.length; i++) {
          if(flights[i].airline == "Delta Airlines") console.log(flights[i]);
      }
    });

