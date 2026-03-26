<?php
include 'db.php';

$name = $_POST['name'];
$email = $_POST['email'];
$course = $_POST['course'];
$marks = $_POST['marks'];

$sql = "INSERT INTO students (name, email, course, marks)
        VALUES ('$name', '$email', '$course', '$marks')";

if ($conn->query($sql)) {
    header("Location: index.php");
} else {
    echo "Error: " . $conn->error;
}
?>