import firebase from 'firebase'
// import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
	apiKey: "AIzaSyA4HfNCMAc0mWbHfjXB02ZUVRUdAqDzA_0",
	authDomain: "ninja-chat-189a0.firebaseapp.com",
	databaseURL: "https://ninja-chat-189a0.firebaseio.com",
	projectId: "ninja-chat-189a0",
	storageBucket: "ninja-chat-189a0.appspot.com",
	messagingSenderId: "93585101031"
}

const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
