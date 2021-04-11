// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBB3lVl7zPy57ClBpSXkEDpec2Ru3F0RXc",
    authDomain: "contactform-b0fa6.firebaseapp.com",
    databaseURL: "https://contactform-b0fa6.firebaseio.com",
    projectId: "contactform-b0fa6",
    storageBucket: "",
    messagingSenderId: "1001846608937",
    appId: "1:1001846608937:web:e1874aeba50a13603a3838",
    measurementId: "G-XW22GLSKTG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submition
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e){
    e.preventDefault();
    
    // Get all values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
    
    // Save message
    saveMessage(name, email, message);
    
    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    
    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        message:message
    });
}