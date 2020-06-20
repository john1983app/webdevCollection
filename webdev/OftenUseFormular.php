
<?php
	if (isset($_POST['name'])) $name = $_POST['name'];
	else $name ="(Not enter)";
	
	echo <<<_End
	<html>
	  <head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<title>OftenUseFormula</title>
	  </head>
	  <body>
		<p><br>
		</p>
		<form method="post" action="OftenUseFormular.php">
			What is your name?
			<input type="text" name="name">
			<input type="submit">
		</form>
		<p>Your name is:$name</p>
	  </body>
	</html>
	_End;
?>