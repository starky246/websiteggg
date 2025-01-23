<?php
// create_invoice_regular.php

// Securely retrieve your Sellix API Key
$api_key = 'LMCiIc6tdujujhEHtneFLDsyobC0IoolnAadZ47A86UV7SFlV69hMzySkm3l3PHF'; // Replace with your actual Sellix API key

// Set header to return JSON content
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect inputs
    $viewerAmount = intval($_POST['viewerAmount']);
    $channelName = isset($_POST['channelName']) ? trim($_POST['channelName']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $discordUsername = isset($_POST['discordUsername']) ? trim($_POST['discordUsername']) : '';

    // Validate inputs
    $errors = [];

    if ($viewerAmount < 25) {
        $errors[] = 'Invalid viewer amount.';
    }

    if (empty($channelName)) {
        $errors[] = 'Channel name is required.';
    }

    if (empty($email)) {
        $errors[] = 'Email address is required.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email address.';
    }

    if (!empty($errors)) {
        echo json_encode(['status' => 'error', 'message' => implode(' ', $errors)]);
        exit;
    }

    // Calculate total price
    $pricePerViewer = 0.7; // Your pricing rate for Regular Viewers
    $totalPrice = $viewerAmount * $pricePerViewer;
    $formattedTotalPrice = number_format($totalPrice, 2, '.', '');

    // Prepare data for the Sellix API request
    $data = [
        'title' => 'Purchase of Regular Twitch Viewers',
        'currency' => 'USD',
        'value' => $formattedTotalPrice,
        'email' => $email,
        'custom_fields' => [
            'Channel Name'      => $channelName, // Set to empty to prompt customer
            'Discord Username'  => $discordUsername, // Set to empty to prompt customer
        ],
        'return_url' => 'https://viewbot.gg/thank_you.html',
    ];

    // Convert data to JSON
    $postData = json_encode($data);

    // Initialize cURL
    $ch = curl_init('https://dev.sellix.io/v1/payments');

    // Set cURL options
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $postData,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $api_key,
            'Content-Type: application/json',
        ],
    ]);

    // Execute cURL request
    $response = curl_exec($ch);
    $err = curl_error($ch);
    curl_close($ch);

    // Handle response
    if ($err) {
        echo json_encode(['status' => 'error', 'message' => 'cURL Error: ' . $err]);
    } else {
        $result = json_decode($response, true);

        // For debugging: Uncomment to see the full response
        // file_put_contents('sellix_api_log.txt', date('Y-m-d H:i:s') . " - Response: " . print_r($result, true) . "\n", FILE_APPEND);

        if (isset($result['status']) && ($result['status'] === 'SUCCESS' || $result['status'] === 200)) {
            // Return the payment URL in JSON format
            echo json_encode(['status' => 'success', 'url' => $result['data']['url']]);
        } else {
            // Display detailed error message
            $errorMessage = isset($result['error']) ? json_encode($result['error']) : (isset($result['message']) ? $result['message'] : 'Unknown error');
            echo json_encode([
                'status' => 'error',
                'message' => 'Error creating payment: ' . $errorMessage,
                'response' => $result,
            ]);
        }
    }
    exit;
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>
