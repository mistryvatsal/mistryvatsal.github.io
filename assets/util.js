function subscribeTo() {
    subscriptionForm = document.getElementById("mc-embedded-subscribe-form");
    subscriptionForm.submit();
    subscriptionForm.reset();
    document.getElementById("message_on_success").innerHTML = "You're successfully registered. ThankYou!";
}