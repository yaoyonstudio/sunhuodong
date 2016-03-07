<?php

	header('Access-Control-Allow-Origin:*');  
	header('Access-Control-Allow-Methods:POST'); 
	header('Access-Control-Allow-Headers:x-requested-with,content-type');  

	if ($_SERVER["REQUEST_METHOD"] === "GET") {

		$adImgArr = array(
			array("id"=>1,"adImgUrl"=>"http://www.sunhuodong.com/api/ad/ad1.jpg","title"=>"广告图片1","url"=>"http://www.sunhuodong.com/"),
			array("id"=>2,"adImgUrl"=>"http://www.sunhuodong.com/api/ad/ad2.jpg","title"=>"广告图片2","url"=>"http://www.sunhuodong.com/")
		);

		echo json_encode($adImgArr);

	}

?>