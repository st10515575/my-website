const location =[
    {
        title: "Silverton",
        address: "473 Pretoria Road\nSilverton\n0184",
        phone: "0861 NASKAR\n(012) 804 1000",
        email: "salessl@naskar.co.za",
        postal: "P.O. Box 857\nSilverton\n0127"
    },
    {
        title: "Silver Lakes",
        address: "shop 5\nCnr Solomon Mahlangu Dr\n& Bendeman Blvd, 0184",
        phone: "(012) 023 0100",
        email: "salessl@naskar.co.za",
        postal: ""
    },
    {
        title: "Pretoria North",
        address: "569 Gerrit Maritz Rd\nPretoria North\n0116",
        phone: "(012) 023 3300",
        email: "henryptn@naskar.co.za",
        postal: ""
    },
    {
        title: "Gezina",
        address: "556 Steve Biko\n Cnr Swemmer/steve Biko\n pretoria, 0031",
        phone: "(012) 884 0323",
        email: "",
        postal: ""
    }
];

document.addEventListener("DOMContentLoaded", function (){
    const form= document.getElementById("contactForm");
    const successMessage= document.getElementById("formSuccess");

    //form inputs
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const message =document.getElementById("message");

    //error span containers
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    form.addEventListener("submit", function (event) {
        //prevent default browser form behavior
        event.preventDefault();

        //Track validation status
        let isValid = true;

        //Reset errors and success state
        resetErrors();

        //1.validate Name
        if (username.Value.trim() === ""){
            showError(nameError , "Please enter your full name.");
            isValid = false;
        }

        // 2.Validate Email
        if (email.value.trim() === "") {
            showError(emailError , "Please enter your email address.");
            isValid = false;
        } else if(!validateEmail(email.value.trim())) {
            showError(emailError , "Please enter a validemail address layout.");
            isValid = false;
        }

        // 3. Validate message body
        if (message.value.trim() === "") {
            showError(messageError , "Please write a message before submitting.");
            isValid = false;
        }

        //Action when form is completely valid
        if (isValid) {
            successMessage.textContent = "Thank ypu, your message has been sent successfully.";
            successMessage.style.display = "block";
            form.reset(); //clear form fields
        }
    const myForm = document.getElementById("myForm");
    
    });

    //Helper function to handle error messaging displays
    function showError(element, messagingText) {
        element.textContent = messageText;
        element.style.display = "block";
    }

    //Helper function to clear previous messages
    function resetErrors() {
        nameError.style.display = "none";
        emailError.style.display = "none";
        messageError.style.display = "none";
        successMessage.style.display = "none";
    }

    // Standard Regular Expression format lookup for checking email structure
    function validateEmail(emailstr) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(emailStr);
    }

});

var map = L.map('map').setView([25.7479,28.2293], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//The pins and popups
L.marker([-25.7334624,28.2944352]).addTo(map)
    .bindPopup(`Silverton`);

L.marker([-25.7765197,28.3498802]).addTo(map)
    .bindPopup(`Silverlakes`);

L.marker([-25.6745024,28.1654627]).addTo(map)
    .bindPopup(`Pretoria North`);

L.marker([-25.7046208,28.2399758]).addTo(map)
    .bindPopup(`Gezina`);