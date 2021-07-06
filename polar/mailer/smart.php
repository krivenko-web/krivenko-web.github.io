<?php 

$name = $_POST['name']; 
$phone = $_POST['phone'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';



$mail->isSMTP();                                      
$mail->Host = 'smtp.ukr.net';  
$mail->SMTPAuth = true;                              
$mail->Username = 'oksana_zari@ukr.net';                 
$mail->Password = '  ';                           
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;                                    
 
$mail->setFrom('oksana_zari@ukr.net', 'Pulse');   
$mail->addAddress('ksu2@i.ua');   
$mail->isHTML(true);                                  

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>