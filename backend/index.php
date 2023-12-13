<?php
header("Access-Control-Allow-Origin: *");

include 'Rectangle.php';
include 'Circle.php';

$rectangle = new Rectangle("blue", 5, 8);
$circle = new Circle("red", 3);
$shapes = [
    [
        'color'=>$rectangle->color,
        'width'=>$rectangle->width,
        'height'=>$rectangle->height,
        'area'=>$rectangle->calculateArea()
    ],
    [
        'color'=>$circle->color,
        'radius'=>$circle->radius,
        'area'=>$circle->calculateArea()
    ]
];
echo json_encode($shapes);
return;