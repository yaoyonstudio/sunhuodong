<?php

	header('Access-Control-Allow-Origin:*');  
	header('Access-Control-Allow-Methods:POST'); 
	header('Access-Control-Allow-Headers:x-requested-with,content-type');  

	if ($_SERVER["REQUEST_METHOD"] === "GET") {
	
		// $sliderImgArr = array();
		

		// $sliderImgArr[0] = {id:1,sliderImgUrl:'http://www.test.com/slider1.jpg',title:'slider1'};
		// $sliderImgArr[1] = {id:2,sliderImgUrl:'http://www.test.com/slider1.jpg',title:'slider1'};
		// $sliderImgArr[2] = {id:3,sliderImgUrl:'http://www.test.com/slider1.jpg',title:'slider1'};
		// $sliderImgArr[3] = {id:4,sliderImgUrl:'http://www.test.com/slider1.jpg',title:'slider1'};

			// {id:1,sliderImgUrl:'http://www.test.com/slider1.jpg',title:'slider1'},
			// {id:2,sliderImgUrl:'http://www.test.com/slider2.jpg',title:'slider2'},
			// {id:3,sliderImgUrl:'http://www.test.com/slider3.jpg',title:'slider3'},
			// {id:4,sliderImgUrl:'http://www.test.com/slider4.jpg',title:'slider4'}
		// );


		$sliderImgArr = array(
			array("id"=>1,"sliderImgUrl"=>"http://www.test.com/slider1.jpg","title"=>"slider1"),
			array("id"=>2,"sliderImgUrl"=>"http://www.test.com/slider2.jpg","title"=>"slider2"),
			array("id"=>3,"sliderImgUrl"=>"http://www.test.com/slider3.jpg","title"=>"slider3"),
			array("id"=>4,"sliderImgUrl"=>"http://www.test.com/slider4.jpg","title"=>"slider4")
		);


		echo json_encode($sliderImgArr);

	}


?>