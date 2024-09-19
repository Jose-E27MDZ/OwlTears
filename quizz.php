<?php

$answer1 = $_POST['q1'];
$answer2 = $_POST['q2'];
$answer3 = $_POST['q3'];
$answer4 = $_POST['4'];
$answer5 = $_POST['q5'];

$totalCorrect = 0;

if ($answer1 == "B") { $totalCorrect++; }
if ($answer2 == "A") { $totalCorrect++; }
if ($answer3 == "C") { $totalCorrect++; }
if ($answer4 == "D") { $totalCorrect++; }
if ($answer5) { $totalCorrect++; }

echo "<div id='results'>$totalCorrect /5 correct</div>";

?>