//  ========== 
//  = 导航点 = 
//  ========== 

var aDots=document.getElementsByClassName('dots');

for(i=0;i<aDots.length;i++)
{
	(function (i){
				aDots[i].onclick=function () {
					for(i=0;i<aDots.length;i++) {
						aDots[i].style.background='none';
						aDots[i].style.width='15px';
					}
					this.style.background='#fff';
					this.style.width='35px';
				};
	})(i);				
}

//  ========== 
//  = swipper = 
//  ==========






//  ========== 
//  = 伪自适应 = 
//  ========== 
window.onresize=function ()　{
	var container=document.getElementById('container_wrapper');
	var bg=document.getElementById('bg_wrapper');
	var swipper=document.getElementById('swipper_wrapper');
	var img=document.getElementsByTagName('img')[1];
	swipper.style.height=img.offsetHeight+'px';
	container.style.height=document.getElementById('swipper_wrapper').offsetHeight+'px';
	bg.style.height=document.getElementById('swipper_wrapper').offsetHeight+'px';//不要忘记单位
};
window.onload=function ()　{
	var container=document.getElementById('container_wrapper');
	var bg=document.getElementById('bg_wrapper');
	var swipper=document.getElementById('swipper_wrapper');
	var img=document.getElementsByTagName('img')[1];
	swipper.style.height=img.offsetHeight+'px';
	container.style.height=document.getElementById('swipper_wrapper').offsetHeight+'px';
	bg.style.height=document.getElementById('swipper_wrapper').offsetHeight+'px';//不要忘记单位
	timer_auto_swipper=setInterval(function (){
		swipper.style.top=Math.parseInt(swipper.style.top)-Math.parseInt(img.style.top)+'px';
		document.title=swipper.style.top;
		
	},500);
};





/*
stupid

for(i=0;i<aDots.length;i++)
{
	(function (i){
				aDots[i].onclick=function () {
					fnDots (i);
				};
	})(i);
}
//封装智障函数
function fnDots (i){
	if(i==0){
		aDots[0].style.background='#fff';
		aDots[4].style.background='none';
		aDots[1].style.background='none';
		aDots[2].style.background='none';
		aDots[3].style.background='none';
		aDots[5].style.background='none';
		aDots[0].style.width='35px';
		aDots[1].style.width='15px';
		aDots[1].style.width='15px';
		aDots[2].style.width='15px';
		aDots[3].style.width='15px';
		aDots[5].style.width='15px';
	}
	if(i==1){
		aDots[1].style.background='#fff';
		aDots[0].style.background='none';
		aDots[4].style.background='none';
		aDots[2].style.background='none';
		aDots[3].style.background='none';
		aDots[5].style.background='none';
		aDots[1].style.width='35px';
		aDots[0].style.width='15px';
		aDots[4].style.width='15px';
		aDots[2].style.width='15px';
		aDots[3].style.width='15px';
		aDots[5].style.width='15px';
	}
	if(i==2){
		aDots[2].style.background='#fff';
		aDots[0].style.background='none';
		aDots[1].style.background='none';
		aDots[4].style.background='none';
		aDots[3].style.background='none';
		aDots[5].style.background='none';
		aDots[2].style.width='35px';
		aDots[0].style.width='15px';
		aDots[1].style.width='15px';
		aDots[4].style.width='15px';
		aDots[3].style.width='15px';
		aDots[5].style.width='15px';
	}
	if(i==3){
		aDots[3].style.background='#fff';
		aDots[0].style.background='none';
		aDots[1].style.background='none';
		aDots[2].style.background='none';
		aDots[4].style.background='none';
		aDots[5].style.background='none';
		aDots[3].style.width='35px';
		aDots[0].style.width='15px';
		aDots[1].style.width='15px';
		aDots[2].style.width='15px';
		aDots[4].style.width='15px';
		aDots[5].style.width='15px';
	}
	if(i==4){
		aDots[4].style.background='#fff';
		aDots[0].style.background='none';
		aDots[1].style.background='none';
		aDots[2].style.background='none';
		aDots[3].style.background='none';
		aDots[5].style.background='none';
		aDots[4].style.width='35px';
		aDots[0].style.width='15px';
		aDots[1].style.width='15px';
		aDots[2].style.width='15px';
		aDots[3].style.width='15px';
		aDots[5].style.width='15px';
	}
	if(i==5){
		aDots[5].style.background='#fff';
		aDots[0].style.background='none';
		aDots[1].style.background='none';
		aDots[2].style.background='none';
		aDots[3].style.background='none';
		aDots[4].style.background='none';
		aDots[5].style.width='35px';
		aDots[0].style.width='15px';
		aDots[1].style.width='15px';
		aDots[2].style.width='15px';
		aDots[3].style.width='15px';
		aDots[4].style.width='15px';
	}

}
*/