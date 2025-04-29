<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Fixed recipient email address for all requests
    $to = "deepanshkhandelwal2006@gmail.com";
    $subject = "New Organic Waste Pickup Request";

    // Compose the message
    $message = "Name: " . $_POST['name'] . "\n";
    $message .= "Restaurant Name: " . $_POST['restaurantName'] . "\n";
    $message .= "Amount of Organic Waste (kg): " . $_POST['amount'] . "\n";
    $message .= "Address: " . $_POST['address'] . "\n";
    $message .= "Pickup Time: " . $_POST['time'] . "\n";
    $message .= "Compost Hub: " . $_POST['compostHub'] . "\n";

    // Set email headers
    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: no-reply@yourdomain.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Attempt to send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Request submitted successfully.";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request.";
}
?>
