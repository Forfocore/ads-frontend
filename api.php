<?php

$pdo = new pdo('mysql:host=localhost; database=test_db', 'root', 'root');

$prepare = $pdo -> prepare('INSERT INTO test (id) values(:id)';
$prepare = binValue(':id', 12345);
$prepare -> execute();

if (isset($_GET['add'])) {
    echo 'Добавить объявление';


}

else if (isset($_GET['id'])) {
    echo 'Показать объявление';

}

else if (isset($_GET['all'])) {
    echo 'Показать объявление';

}