<?php 

if (isset($_POST['newTask'])) {
    
    $tasksJson = file_get_contents('tasks.json');
    $tasks = json_decode($tasksJson);
    $tasks[] = $_POST['newTask'];
    $newTasksJson = json_encode($tasks);
    file_put_contents('tasks.json', $newTasksJson);
    
} else {
    
    
    $jsonToString = file_get_contents('tasks.json');
    $tasks = json_decode($jsonToString);
    
    // array_splice($tasks, -2, 1);
    
    header('Content-type: application/json');
    echo json_encode($tasks);

}

?>