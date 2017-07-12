window.onload=function(){
	
	//轮播图
        var oBox=document.getElementById('flash');
       var oBox2=document.getElementById('box');
        var oBox3=document.getElementById('div4');
        var aSpan=oBox3.getElementsByTagName('span');
        var inow=0;
        for(var i=0;i<aSpan.length;i++){
            aSpan[i].index=i;
            aSpan[i].onmouseover=function () {
                inow=this.index;
                move()
            }
        }
       //自动播放
        var timer=null;
        function  tab() {
            clearInterval(timer);
            timer= setInterval(function () {
                inow++;
                if(inow==aSpan.length){
                    inow=0;
                }
                move()
            }
            ,5000)
        }
        tab();
        oBox2.onmouseover=function () {
            clearInterval(timer);};
        oBox2.onmouseout=tab;

        //自动播放结束

        function move(){
           for(var i=0;i<aSpan.length;i++){
            aSpan[i].style.backgroundColor='whitesmoke'
        }
        aSpan[inow].style.backgroundColor='blue';
        oBox2.style.marginLeft=inow*-720+'px';
        }

        //选项卡
        var oNav=document.getElementById('nav');
        var aList=oNav.getElementsByTagName('li');
        var aDiv=oNav.getElementsByClassName('nav-list');
        for(var i=0;i<aList.length;i++){
        	aList[i].index=i;
        	aList[i].onclick=function  () {
        		for(var i=0;i<aList.length;i++){
        			aList[i].className='';
        			aDiv[i].className='nav-list';
        		}
        		this.className='on';
        		aDiv[this.index].className='show nav-list'
        	}
        }; 

        // 吸顶条
       var oDiv=document.getElementById('div1');
	   var oDiv2=document.getElementById('div2');
	
	   var sT=oDiv.offsetTop;
	   window.onscroll=function (){
		if(document.documentElement.scrollTop||document.body.scrollTop>sT){
			oDiv.style.position='fixed';
			oDiv2.style.display='block';
			
		}else{
			oDiv.style.position='relative';
			oDiv2.style.display='none';
		}
	};

    // // 回到顶部的按钮
    //  var oBli=document.getElementById("li");
    //  var oBtn=document.getElementById("button");
    //  if(document.documentElement.scrollTop||document.body.scrollTop>300px){
    //     oBli.style.display="block";
    //  }else{
    //     oBli.style.display="none";
    //  }

}