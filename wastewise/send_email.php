<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $restaurantName = htmlspecialchars($_POST['restaurantName']);
    $foodType = htmlspecialchars($_POST['foodType']);
    $quantity = htmlspecialchars($_POST['quantity']);
    $address = htmlspecialchars($_POST['address']);
    $ngoEmail = htmlspecialchars($_POST['ngo']);

    $subject = "Food Donation from " . $restaurantName;
    $message = "Restaurant Name: $restaurantName\n"
             . "Food Type: $foodType\n"
             . "Quantity: $quantity\n"
             . "Address: $address";

    // Use mail function to send email
    if (mail($ngoEmail, $subject, $message)) {
        echo "Donation details sent successfully!";
    } else {
        echo "Failed to send email. Please try again.";
    }
}
?>
