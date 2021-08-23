const app = firebase.initializeApp({
    // I will delete this app tommorow, so the app will stop working go here and past relevant bits to connect to your own (create account then add an app, change storage rules to this:
    //     rules_version = '2';
    // service firebase.storage {
    //   match /b/{bucket}/o {
    //     match /{allPaths=**} {
    //       allow read, write;
    //     }
    //   }
    // });

    // https://console.firebase.google.com/u/0/
    apiKey: "AIzaSyBtTKh9Fh8IyImUIa0fWcYVfqru2mWAT4M",
    authDomain: "photo-example-d0ed4.firebaseapp.com",
    projectId: "photo-example-d0ed4",
    storageBucket: "photo-example-d0ed4.appspot.com",
    messagingSenderId: "1078144568775",
    appId: "1:1078144568775:web:c1ed79a8ce4f2ed9171de2",
});

const storage = app.storage();
const setImage = url =>
    document.getElementById("image").setAttribute("src", url);
const handleSnapshot = snapshot => snapshot.ref.getDownloadURL().then(setImage);

const uploadImage = (storage, imageAsFile) =>
    storage
        .ref(`/images/${imageAsFile.name}`)
        .put(imageAsFile)
        .then(handleSnapshot)
        .catch(err => console.log(err));

const handleImageUpload = e => uploadImage(storage, e.target.files[0]);

document
    .getElementById("image-upload")
    .addEventListener("change", handleImageUpload);
