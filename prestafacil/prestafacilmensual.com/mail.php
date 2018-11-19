<?php
ini_set ( 'post_max_size', '100M' );
		ini_set ( 'upload_max_filesize', '100M' );
		ini_set ( 'max_execution_time', '1000' );
		ini_set ( 'max_input_time', '1000' );
		// ini_set ( 'display_errors', '1' );
	//$modulo_codigo="1";
	require_once ("libs/class.phpmailer.php");
	// $obj_cron= valid_cron ();

// echo "request: ".print_r($_REQUEST);

		$mail = new PHPMailer ();
		$mail->SetLanguage ( 'es' );
		$archivo = 'v_correo.html';
		$body = $mail->getFile ( $archivo );
		// $body = preg_replace ( '/[\]/', '', $body );
		// $nombre = 'Felix Eduardo diaz';
		// $textlink = 'hola';

$input1=$_REQUEST['input1'];
$input2=$_REQUEST['input2'];
$input3=$_REQUEST['input3'];
$input4=$_REQUEST['input4'];
		$body = str_ireplace ( '[input1]', $input1, $body );
		$body = str_ireplace ( '[input2]', $input2, $body );
		$body = str_ireplace ( '[input3]', $input3, $body );
		$body = str_ireplace ( '[input4]', $input4, $body );


		$mail->IsSMTP ();
		$mail->Host = "smtp.gmail.com";
		$mail->Port = 465;
		// $mail->Debugoutput = 'html';

		$mail->SMTPAuth = true;
		$mail->SMTPSecure = 'ssl';
		$mail->Username = 'prestafacilmensual@gmail.com';
		$mail->Password = 'prestafacil123';
		// $mail->SMTPDebug = 2;

		$mail->From = "prestafacilmensual@gmail.com";
		$mail->FromName = "Datos Clientes";

		$mail->Subject = "Contacto de cliente interesado";
		$mail->AltBody = "Para ver el mensaje, por favor, utilice un correo electr�nico HTML compatible!";

		$mail->ClearAttachments ();
		$mail->MsgHTML ( $body );

		$mail->ClearAddresses ();
		$mail->AddAddress ( "prestafacilmensual@gmail.com", "Contacto Cliente Presta Facil Mensual" );



		if (! $mail->Send ()) {
			// $mensaje_mail = "Mailer Error: " . $mail->ErrorInfo;
			$result['result'] = 'Datos No Enviados!';
			$result['msj'] = 'Intenta mas tarde';
			$result['resultType'] = 'error';
			// echo $mensaje_mail;
			// return false;
		} else {
			$result['result'] = 'Datos Enviados!';
			$result['msj'] = 'Pronto nos comunicaremos contigo';
			$result['resultType'] = 'success';
			// return true;
			// echo "msj send..";
		}
			// $result['result'] = 'Datos Enviados!';
			// $result['msj'] = 'Pronto nos comunicaremos contigo';
			// $result['resultType'] = 'success';
		echo json_encode($result);

?>
