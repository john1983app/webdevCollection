<?php
	if (isset($_POST['option'])){
		$OptionShow = $_POST['option'];
		if ($_POST['option']=="1"){
			$GettingData = file_get_contents('https://www.w3schools.com');
			echo $GettingData;
		}
		else if ($_POST['option']=="2"){
			$GettingData = file_get_contents('https://stock.wespai.com/');
			echo $GettingData;
		}
	}
	else {
		$OptionShow ="(Not enter)";
		
	}

?>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Auto Operate</title>
  </head>
  <body>
    <p><br>
    </p>
    <form action="AutoSearch.php" method="POST">
      請輸入想取得的資料，1:w3c,2:stock
	  
      <input type="text" name="option">
      <input type="submit" value="確定">
    </form>
      
  </body>
</html>
