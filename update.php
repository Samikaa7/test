<?php
include 'db.php';

$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$course = $_POST['course'];
$marks = $_POST['marks'];

$sql = "UPDATE students 
        SET name='$name', email='$email', course='$course', marks='$marks'
        WHERE id=$id";

if ($conn->query($sql)) {
    header("Location: index.php");
} else {
    echo "Error: " . $conn->error;
}
?>