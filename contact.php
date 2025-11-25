<?php
header("Access-Control-Allow-Origin: https://www.bytelab.az");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "info@bytelab.az";  // Admin email
    $headers = "From: info@bytelab.az\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "
    <h2>ByteLab-dan yeni mesaj! </h2>
    <p><b>Ad:</b> $name</p>
    <p><b>E-poçt:</b> $email</p>
    <p><b>Mövzu:</b> $subject</p>
    <p><b>Mesaj:</b><br>$message</p>
    ";

    // Admina göndər
    $adminMail = mail($to, $subject, $body, $headers);

    // Auto-reply istifadəçiyə
    $replySubject = "ByteLab ilə əlaqə üçün təşəkkür edirik";
    $contactInfo = "
<p><b>Daha tez əlaqə üçün bizə yazın</b></p>
<p>💬 <i>WP </i>: <a href='https://wa.me/+994775542101'>+994515161218</a></p>
<p>📞 <i>Telefon </i>: +994 51 516 12 18</span>
<p>🌐 <i> Website </i>: <a href='https://www.bytelab.az'>https://www.bytelab.az</a></p>

";
    $replyBody = "
    <p>Hörmətli $name,</p>
    <p>Bizimlə əlaqə saxladığınız üçün təşəkkür edirik! Mesajınızı aldıq və tezliklə sizinlə əlaqə saxlayacağıq.</p>
    <p>Hörmətlə,<br>ByteLab</p>
<hr>
$contactInfo
<p>Hörmətlə, ByteLab</p>
    ";
    $replyHeaders = "From: info@bytelab.az\r\n";
    $replyHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";

    $autoReply = mail($email, $replySubject, $replyBody, $replyHeaders);

    if($adminMail && $autoReply){
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "Xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin."]);
    }
}
?>
