<?php
// create_invoice.php

// Securely retrieve your Sellix API Key
$api_key = 'LMCiIc6tdujujhEHtneFLDsyobC0IoolnAadZ47A86UV7SFlV69hMzySkm3l3PHF'; // Replace with your actual Sellix API key

// Set header to return JSON content
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect inputs
    $viewerAmount = intval($_POST['viewerAmount']);
    $streamingHours = intval($_POST['streamingHours']);

    // Set default email for debugging
    $email = 'thestarkinc@gmail.com';

    // Validate inputs
    if ($viewerAmount < 25 || $streamingHours < 1) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid input values.']);
        exit;
    }

    // Calculate total price
    $pricePerViewerHour = 0.0015; // Your pricing rate
    $totalPrice = $viewerAmount * $streamingHours * $pricePerViewerHour;

    // Prepare data for the Sellix API request
    $data = [
        'title' => 'Twitch embed viewer package',
        'value' => number_format($totalPrice, 2, '.', ''),
        'currency' => 'USD',
        'email' => $email,
        'return_url' => 'https://viewbot.gg', // Replace with your actual return URL
        // Include any other optional fields as needed
    ];

    // Convert data to JSON
    $postData = json_encode($data);

    // Initialize cURL
    $ch = curl_init('https://dev.sellix.io/v1/payments'); // Use the development endpoint for testing

    // Set cURL options
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => 'POST',
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
        if (isset($result['status']) && $result['status'] === 200) {
            // Return the payment URL in JSON format
            echo json_encode(['status' => 'success', 'url' => $result['data']['url']]);
        } else {
            // Display error message
            $errorMessage = $result['error'] ?? $result['message'] ?? 'Unknown error';
            echo json_encode(['status' => 'error', 'message' => 'Error creating payment: ' . $errorMessage]);
        }
    }
    exit;
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>
