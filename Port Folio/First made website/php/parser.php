<?php
    if( isset($_POST['n']) && isset($_POST['e']) && isset($_POST['m']) ) {
        $n = $_POST['n'];
        $e = $_POST['e'];
        $m = nl2br($_POST['m']);
        $to = "kacper.duniewicz@gmail.com";
        $from = $e;
        $subject = 'Contact Form Website';
        $message = 'Name:'.$n."\n"."Email:" .$e."\n".$m;
        $headers = "From: $from\n";
        $headers .= "MIME-Version: 1.0\n";
        $headers .= "Content type: text; charset=iso-8859-1\n";

        if( mail($to, $subject, $message, $headers)) {
            echo "success";
        } else {
            echo "The server failed to send the message. Please try again later.";
        }
    }
?>
