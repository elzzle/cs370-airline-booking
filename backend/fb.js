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
  /*var loginBtn = document.getElementById("login-btn");
  loginBtn.addEventListener('click', e  => {
    var loginEmail = document.getElementById("login-email").value();
    var loginPw = document.getElementById("login-pw").value();

    if(loginEmail!="" && loginPw!=""){
      var result = firebase.auth().signInWithEmailAndPassword(loginEmail, loginPw);
      result.catch(function(error){ 
          var errMsg = error.message;
          console.log(errMsg);
      });
  }
  else window.alert("Please fill out all fields.")
  });*/

  $("#logout-btn").click(function(){
    firebase.auth().signOut();
    window.location.href="login.html"
  });

