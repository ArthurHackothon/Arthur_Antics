//window.onload = choosePic;
	
	function choosePic(){
var myPix = ["pix/1.jpg",
"pix/2.jpg",
"pix/3.jpg",
"pix/4.jpg",
"pix/5.jpg",
"pix/6.jpg",
"pix/7.jpg",
"pix/8.jpg",
"pix/9.jpg",
"pix/10.jpg",
"pix/11.jpg",
"pix/12.jpg",
"pix/13.jpg",
"pix/14.jpg",
"pix/15.jpg",
"pix/16.jpg",
"pix/17.jpg",
"pix/18.jpg",
"pix/19.jpg",
"pix/20.jpg",
"pix/21.png",
"pix/22.jpg",
"pix/23.jpg",
"pix/24.jpg",
"pix/25.jpg",
"pix/26.jpg",
"pix/27.jpg",
"pix/28.jpg",
"pix/29.jpg",
"pix/30.jpg",
"pix/31.jpg",
"pix/32.jpg",
"pix/33.png",
"pix/34.png",
"pix/35.jpg",
"pix/36.png",
"pix/37.png",
"pix/38.jpg",
"pix/39.jpg",
"pix/40.png",
"pix/41.png",
"pix/42.png",
"pix/43.jpg",
"pix/44.jpg"];
var randomPic = Math.floor(Math.random() * myPix.length);
	document.getElementById("myPicture").innerHTML =
	myPix[randomPic];
	}


//getRandomImage(imgArray, "");
//var imgAr;
img = new Array(8);
img[0]='1.jpg';
img[1]='2.jpg';
img[2]='3.jpg';
img[3]='4.jpg';
img[4]='5.jpg';
img[5]='6.jpg';
img[6]='7.jpg';
img[7]='8.jpg';

function getRandomImage(imgArray, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgArray.length );
    var img = imgArray[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}