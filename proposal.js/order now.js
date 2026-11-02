const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector(".accordion-content");
    
    accordionContents.forEach((content) => {
            if (content !== accordionContent) {
                content.classList.remove("active");
                content.style.maxHeight = "0";
             }
        });

        accordionContent.classList.toggle("active");

        if (accordionContent.classList.contains("active")) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px" ;
        } else{
            accordionContent.style.maxHeight = "0";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const orderForm = document.querySelector("form");

    orderForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const nameInput = document.getElementById("username");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");

        if(!nameInput.value.trim() || !emailInput.value.trim() || !phoneInput.value.trim()) {
            alert("Please fill in all the required ordering fields.");
            return;
        }

        const orderData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim()
        };

        console.log("Order submitted successfully:", orderData);
        alert (`Thank you, ${orderData.name}! Your ordering details have been captured.`);

        orderForm.reset();
    });
});