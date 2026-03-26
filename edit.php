<?php
include 'db.php';

$id = $_GET['id'];
$result = $conn->query("SELECT * FROM students WHERE id=$id");
$row = $result->fetch_assoc();
?>

<h2>Edit Student</h2>

<form action="update.php" method="POST">
    <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
    
    Name: <input type="text" name="name" value="<?php echo $row['name']; ?>"><br>
    Email: <input type="email" name="email" value="<?php echo $row['email']; ?>"><br>
    Course: <input type="text" name="course" value="<?php echo $row['course']; ?>"><br>
    Marks: <input type="number" name="marks" value="<?php echo $row['marks']; ?>"><br>

    <input type="submit" value="Update">
</form>