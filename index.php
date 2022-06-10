<?php
error_reporting(0);
$vinagetURL="http://vinagetServer.etc";
$vinagetPass="VinagetServerPass";
                
                function boyutCeviri($size){
  $base = log($size) / log(1024);
  $suffix = array("", "KB", "MB", "GB", "TB");
  $f_base = floor($base);
  return round(pow(1024, $base - floor($base)), 1) . $suffix[$f_base];

}


function secure_login($sifre,$ceviri_sitesi,$link,$login=1){
		$ch = curl_init();
		curl_setopt ($ch, CURLOPT_POST, 1);
		if($login==1){
		curl_setopt($ch, CURLOPT_URL, $ceviri_sitesi.'login.php');
    	
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt ($ch, CURLOPT_POSTFIELDS, 'secure='.$sifre);
		curl_setopt ($ch, CURLOPT_COOKIEJAR, 'log.txt');		
		
		$source = curl_exec ($ch);
		}
		curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);		
		curl_setopt($ch, CURLOPT_URL, $ceviri_sitesi.'index.php');
		curl_setopt($ch, CURLOPT_POSTFIELDS, 'urllist='.$link);		
		$content = curl_exec($ch);
return $content;
}

if(empty($_GET['link'])){
	
	$fakeData["hata"]="Bir Hata Oluştu";
$fakeData["msg"]="Lütfen Geçerli Bir URL  girin ";

header('Content-type: application/json');
die( json_encode($fakeData,JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
	
	
	
	
	
}

   $girisyap=secure_login($vinagetPass,$vinagetURL,urlencode($_GET['link']),1);


//For NEW Vinaget System Get File Info CODE By LaZEnEs
//Get File Link
   $kem = explode("href='",$girisyap);
   $kem = explode("'",$kem[1]); 
   $link = preg_replace('/\s+/',' ',$kem[0]);
   $link = str_replace(" ","%20",$link); 

   
//Get File Name   
   $kzm = explode("color='#00CC00'>",$girisyap);
   $kzm = explode("<",$kzm[1]); 
   $dadi = preg_replace('/\s+/',' ',$kzm[0]);

//Get File Size
   $kum = explode("color='#FF66FF'>(",$girisyap);
   $kum = explode(")",$kum[1]); 
   $size = preg_replace('/\s+/',' ',$kum[0]);
   //Size Convertion
  if(strstr($size,'GB')){ 
  
  $size = str_replace("GB","",$size);
 
  $size=trim($size);
  $boyut=1024*1024*1024*$size;
 
  }elseif(strstr($size,'MB')){
  
  $size = str_replace("MB","",$size);
 
  $size=trim($size);
   $boyut=1024*1024*$size;
  
  }elseif(strstr($size,'KB')){
  
  $size = str_replace("KB","",$size);

  $size=trim($size);
   $boyut=1024*$size;
  
  }

 $contentLength=$boyut;
 
//For OLD Version Vinaget System Get File Info CODE By LaZEnEs

 if(empty($dadi)||empty( $boyut) || empty($link)){
 
 //Get File Link
//Get File Link
   $kem = explode('href',$girisyap);
   $kem = explode("'",$kem[1]); 
   $link = preg_replace('/\s+/',' ',$kem[1]);
   $link = str_replace(" ","%20",$link); 
//Get File Name   
   $kzm = explode("color='#00CC00'>",$girisyap);
   $kzm = explode("<",$kzm[1]); 
   $dadi = preg_replace('/\s+/',' ',$kzm[0]);
//Get File Size
//Get File Size
   $kum = explode("color='#FF66FF'>(",$girisyap);
   $kum = explode(")",$kum[1]); 
   $size = preg_replace('/\s+/',' ',$kum[0]);
   //Size Convertion
  if(strstr($size,'GB')){ 
  
  $size = str_replace("GB","",$size);
 
  $size=trim($size);
  $boyut=1024*1024*1024*$size;
 
  }elseif(strstr($size,'MB')){
  
  $size = str_replace("MB","",$size);
 
  $size=trim($size);
   $boyut=1024*1024*$size;
  
  }elseif(strstr($size,'KB')){
  
  $size = str_replace("KB","",$size);

  $size=trim($size);
   $boyut=1024*$size;
  
  }

 $contentLength=$boyut;

 }
  
if(empty($dadi)){
	
$fakeData["hata"]="Bir Hata Oluştu";
$fakeData["msg"]="Bu Linki Şuanda Desteklemiyoruz Veya Link Hatalı";

header('Content-type: application/json');
echo json_encode($fakeData,JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
	
	
	
}else{

$fakeData["FileName"]=$dadi;
$fakeData["FileSize"]=boyutCeviri( $contentLength);
$fakeData["getlink"]=$_GET['link'];
$fakeData["URL"]= $link;
header('Content-type: application/json');
echo json_encode($fakeData,JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

}
