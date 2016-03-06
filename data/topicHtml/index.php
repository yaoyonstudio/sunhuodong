<?php

	header('Access-Control-Allow-Origin:*');  
	header('Access-Control-Allow-Methods:POST'); 
	header('Access-Control-Allow-Headers:x-requested-with,content-type');  

	if ($_SERVER["REQUEST_METHOD"] === "GET") {

		$topicArr = array(
			array("id"=>1,"imgUrl"=>"http://www.sunhuodong.com/api/topicHtml/slds/img/thumb.jpg","title"=>"思力灯饰优惠购","excerpt"=>"思力灯饰（O2O家居灯饰领导品牌）春季装修双重优惠购盛大启动，活动期间，全线产品价格惊爆优惠，还有各种抽奖哦！","htmlUrl"=>"http://www.sunhuodong.com/api/topicHtml/slds/index.html"),
			array("id"=>2,"imgUrl"=>"http://www.sunhuodong.com/api/topicHtml/sdm/img/thumb.jpg","title"=>"2015年VIVO苏迪曼杯世界羽毛球混合团体锦标赛","excerpt"=>"2015年vivo·苏迪曼杯世界羽毛球混合团体锦标赛将于5月10日～17日在东莞市篮球中心举行。","htmlUrl"=>"http://www.sunhuodong.com/api/topicHtml/sdm/index.html")
		);

		echo json_encode($topicArr);

	}

?>