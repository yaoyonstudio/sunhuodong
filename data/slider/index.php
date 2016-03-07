<?php

	header('Access-Control-Allow-Origin:*');  
	header('Access-Control-Allow-Methods:POST'); 
	header('Access-Control-Allow-Headers:x-requested-with,content-type');  

	if ($_SERVER["REQUEST_METHOD"] === "GET") {

		$sliderImgArr = array(
			array("id"=>1,"sliderImgUrl"=>"http://www.sunhuodong.com/uploads/slider1.jpg","title"=>"slider1"),
			array("id"=>2,"sliderImgUrl"=>"http://www.sunhuodong.com/uploads/slider2.jpg","title"=>"slider2"),
			array("id"=>3,"sliderImgUrl"=>"http://www.sunhuodong.com/uploads/slider3.jpg","title"=>"slider3"),
			array("id"=>4,"sliderImgUrl"=>"http://www.sunhuodong.com/uploads/slider4.jpg","title"=>"slider4")
		);

		echo json_encode($sliderImgArr);

	}

?>