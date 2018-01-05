<?php
    if( (!empty($_POST['name']))
        && !empty($_POST['email'])
        && !empty($_POST['phone'])
        && !empty($_POST['message'])) {
        echo "success";
    } else {
      return header('HTTP/1.0 400 Bad error');
    }
?>
