/*  ADD TO CART FEATURE  */

var count=0;
var total=0;


function increase0() {
	alert('Your Item Has Been Added To Cart');
	count++;
	total=total+399
	document.getElementById('counter').innerHTML=count
	document.getElementById("total").innerHTML=total
	document.getElementById("n1").innerHTML=total
	sessionStorage.setItem("t",total)
    
	
}
function increase() {
	alert('Your Item Has Been Added To Cart');
	total=total+499
	document.getElementById('total').innerHTML=total
	count++;
	document.getElementById('counter').innerHTML=count
	document.getElementById("n1").innerHTML=total
	sessionStorage.setItem("t",total)
	
}
function increase1() {
	alert('Your Item Has Been Added To Cart');
	total=total+250
	document.getElementById('total').innerHTML=total
	count++;
	document.getElementById('counter').innerHTML=count
	document.getElementById("n1").innerHTML=total
	sessionStorage.setItem("t",total)
}
function increase2() {
	alert('Your Item Has Been Added To Cart');
	total=total+250
	document.getElementById('total').innerHTML=total
	count++;
	document.getElementById('counter').innerHTML=count
	document.getElementById("n1").innerHTML=total
	sessionStorage.setItem("t",total)
}
function increase3() {
	alert('Your Item Has Been Added To Cart');
	total=total+100
	document.getElementById('total').innerHTML=total
	count++;
	document.getElementById('counter').innerHTML=count
	document.getElementById("n1").innerHTML=total
	sessionStorage.setItem("t",total)
}
function increase4() {
	alert('Your Item Has Been Added To Cart');
	count++;
	total=total+150
	document.getElementById('total').innerHTML=total
	document.getElementById('counter').innerHTML=count
	document.getElementById("n1").innerHTML=total
	sessionStorage.setItem("t",total)
}
function increase5() {
	alert('Your Item Has Been Added To Cart');
	count++;
	total=total+150
	document.getElementById('total').innerHTML=total
	document.getElementById('counter').innerHTML=count
	document.getElementById("n1").innerHTML=total
	sessionStorage.setItem("t",total)
}
function increase6() {
	alert('Your Item Has Been Added To Cart');
	count++;
	total=total+100
	document.getElementById('total').innerHTML=total
	document.getElementById('counter').innerHTML=count
	document.getElementById("n1").innerHTML=total
	sessionStorage.setItem("t",total)
}
function increase7() {
	alert('Your Item Has Been Added To Cart');
	count++;
	total=total+399
	document.getElementById('total').innerHTML=total
	document.getElementById('counter').innerHTML=count
	document.getElementById("n1").innerHTML=total
	sessionStorage.setItem("t",total)
}
function increase8() {
	alert('Your Item Has Been Added To Cart');
	count++;
	total=total+79
	document.getElementById('total').innerHTML=total
	document.getElementById('counter').innerHTML=count
	document.getElementById("n1").innerHTML=total
	sessionStorage.setItem("t",total)
}
function increase9() {
	alert('Your Item Has Been Added To Cart');
	count++;
	total=total+100
	document.getElementById('total').innerHTML=total
	document.getElementById('counter').innerHTML=count
	document.getElementById("n1").innerHTML=total
	sessionStorage.setItem("t",total)
}
function increase10() {
	alert('Your Item Has Been Added To Cart');
	count++;
	total=total+150
	document.getElementById('total').innerHTML=total
	document.getElementById('counter').innerHTML=count
	document.getElementById("n1").innerHTML=total
	sessionStorage.setItem("t",total)
}
var coun=0;
function abc(){

if(coun==0){
	document.getElementById("sidediv").setAttribute("id","changepos1")
	setTimeout(function(){
		show();
	},50)
	coun++;

}
else{
	document.getElementById("changepos").setAttribute("id","sidediv")
	setTimeout(function(){
		sh();
	},50)
	coun=0;

}

	

	
}
function show(){
	
	document.getElementById("changepos1").setAttribute("id","changepos")




}


function sh(){
	if(coun==0){
		sh()

	}
	document.getElementById("sidediv").setAttribute("id","changepos1");
	

}
function s(){
	document.getElementById("changepos1").setAttribute("id","changepos");

}
$(document).ready(function(){
	$('#append1').click(function(){
		$(".side").append('<div class=item-0 id=div1><img class=item-pic src="foodImages/cake1.jpg"> <span class=item-name>Choco Lava</span><img class=delete src="https://cdn0.iconfinder.com/data/icons/camping-189/80/garbage__delete__trash__basket__remove-512.png" onclick="dela()"><span class=price>Rs 399</span></div>')
	})
})
$(document).ready(function(){
	$('#apppend2').click(function(){
		$(".side").append('<div class=item-0 id="div2"><img class=item-pic src="foodImages/cake2.jpg"> <span class=item-name>Strawberry-Cake</span><img class=delete src="https://cdn0.iconfinder.com/data/icons/camping-189/80/garbage__delete__trash__basket__remove-512.png" onclick="delb()"><span class=price>Rs 499</span></div>')
	})
})
$(document).ready(function(){
	$('#apppend3').click(function(){
		$(".side").append('<div class=item-0 id="div3"><img class=item-pic src="foodImages/cake3.jpg"> <span class=item-name>Fruit Cake</span><img class=delete src="https://cdn0.iconfinder.com/data/icons/camping-189/80/garbage__delete__trash__basket__remove-512.png" onclick="delc()"><span class=price>Rs 250</span></div>')
	})
})
$(document).ready(function(){
	$('#apppend4').click(function(){
		$(".side").append('<div class=item-0 id="div4"><img class=item-pic src="foodImages/sweet1.jpg"> <span class=item-name>Stars</span><img class=delete src="https://cdn0.iconfinder.com/data/icons/camping-189/80/garbage__delete__trash__basket__remove-512.png" onclick="deld()"><span class=price>Rs 250</span></div>')
	})
})
$(document).ready(function(){
	$('#apppend5').click(function(){
		$(".side").append('<div class=item-0 id="div5"><img class=item-pic src="foodImages/sweet2.jpg"> <span class=item-name>Hearts</span><img class=delete src="https://cdn0.iconfinder.com/data/icons/camping-189/80/garbage__delete__trash__basket__remove-512.png" onclick="dele()" ><span class=price>Rs 100</span></div>')
	})
})
$(document).ready(function(){
	$('#apppend6').click(function(){
		$(".side").append('<div class=item-0 id="div6"><img class=item-pic src="foodImages/sweet3.jpg"> <span class=item-name>Custard Tart</span><img class=delete src="https://cdn0.iconfinder.com/data/icons/camping-189/80/garbage__delete__trash__basket__remove-512.png"  onclick="delf()"><span class=price>Rs 150</span></div>')
	})
})
$(document).ready(function(){
	$('#apppend7').click(function(){
		$(".side").append('<div class=item-0 id="div7"><img class=item-pic src="foodImages/donut1.jpg"> <span class=item-name>Oreo Donut</span><img class=delete src="https://cdn0.iconfinder.com/data/icons/camping-189/80/garbage__delete__trash__basket__remove-512.png"  onclick="delg()"><span class=price>Rs 150</span></div>')
	})
})
$(document).ready(function(){
	$('#apppend8').click(function(){
		$(".side").append('<div class=item-0 id="div8"><img class=item-pic src="foodImages/donut2.jpg"> <span class=item-name>Strawberry Donut</span><img class=delete src="https://cdn0.iconfinder.com/data/icons/camping-189/80/garbage__delete__trash__basket__remove-512.png"  onclick="delh()"><span class=price>Rs 100</span></div>')
	})
})
$(document).ready(function(){
	$('#apppend9').click(function(){
		$(".side").append('<div class=item-0 id="div9"><img class=item-pic src="foodImages/donut3.jpg"> <span class=item-name>Choco Donut</span><img class=delete src="https://cdn0.iconfinder.com/data/icons/camping-189/80/garbage__delete__trash__basket__remove-512.png"  onclick="deli()"><span class=price>Rs 399</span></div>')
	})
})
$(document).ready(function(){
	$('#apppend10').click(function(){
		$(".side").append('<div class=item-0 id="div10"><img class=item-pic src="foodImages/coffee1.jpg"> <span class=item-name>Caffee Latte</span><img class=delete src="https://cdn0.iconfinder.com/data/icons/camping-189/80/garbage__delete__trash__basket__remove-512.png"  onclick="delj()"><span class=price>Rs 79</span></div>')
	})
})
$(document).ready(function(){
	$('#apppend11').click(function(){
		$(".side").append('<div class=item-0 id="div11"><img class=item-pic src="foodImages/coffee2.jpg"> <span class=item-name>Cappuccino</span><img class=delete src="https://cdn0.iconfinder.com/data/icons/camping-189/80/garbage__delete__trash__basket__remove-512.png"  onclick="delk()"><span class=price>Rs 100</span></div>')
	})
})
$(document).ready(function(){
	$('#apppend12').click(function(){
		$(".side").append('<div class=item-0 id="div12"><img class=item-pic src="foodImages/coffee3.jpg"> <span class=item-name>Espresso</span><img class=delete src="https://cdn0.iconfinder.com/data/icons/camping-189/80/garbage__delete__trash__basket__remove-512.png"  onclick="dell()"><span class=price>Rs 150</span></div>')
	})

	$("#b0").click(function(){
		$(".side").empty();
		
	})
})
function reset(){
	total=0
	count=0
	document.getElementById("n1").innerHTML="0"
	document.getElementById("counter").innerHTML="0"
	document.getElementById("total").innerHTML="0"
	sessionStorage.setItem("t",total)
}
function dela(){
	document.getElementById("div1").remove();
	total=total-399
	count=count-1
	document.getElementById("n1").innerHTML=total;
	document.getElementById("counter").innerHTML=count;
	document.getElementById("total").innerHTML=total;
	sessionStorage.setItem("t",total)
}
function delb(){
	document.getElementById("div2").remove();
	total=total-499
	count=count-1
	document.getElementById("n1").innerHTML=total;
	document.getElementById("counter").innerHTML=count;
	document.getElementById("total").innerHTML=total;
	sessionStorage.setItem("t",total)
}
function delc(){
	document.getElementById("div3").remove();
	total=total-250
	count=count-1
	document.getElementById("n1").innerHTML=total;
	document.getElementById("counter").innerHTML=count;
	document.getElementById("total").innerHTML=total;
	sessionStorage.setItem("t",total)
}
function deld(){
	document.getElementById("div4").remove();
	total=total-250
	count=count-1
	document.getElementById("n1").innerHTML=total;
	document.getElementById("counter").innerHTML=count;
	document.getElementById("total").innerHTML=total;
	sessionStorage.setItem("t",total)
}
function dele(){
	document.getElementById("div5").remove();
	total=total-100
	count=count-1
	document.getElementById("n1").innerHTML=total;
	document.getElementById("counter").innerHTML=count;
	document.getElementById("total").innerHTML=total;
	sessionStorage.setItem("t",total)
}
function delf(){
	document.getElementById("div6").remove();
	total=total-150
	count=count-1
	document.getElementById("n1").innerHTML=total;
	document.getElementById("counter").innerHTML=count;
	document.getElementById("total").innerHTML=total;
	sessionStorage.setItem("t",total)
}
function delg(){
	document.getElementById("div7").remove();
	total=total-150
	count=count-1
	document.getElementById("n1").innerHTML=total;
	document.getElementById("counter").innerHTML=count;
	document.getElementById("total").innerHTML=total;
	sessionStorage.setItem("t",total)
}
function delh(){
	document.getElementById("div8").remove();
	total=total-100
	count=count-1
	document.getElementById("n1").innerHTML=total;
	document.getElementById("counter").innerHTML=count;
	document.getElementById("total").innerHTML=total;
	sessionStorage.setItem("t",total)
}
function deli(){
	document.getElementById("div9").remove();
	total=total-399
	count=count-1
	document.getElementById("n1").innerHTML=total;
	document.getElementById("counter").innerHTML=count;
	document.getElementById("total").innerHTML=total;
	sessionStorage.setItem("t",total)
}
function delj(){
	document.getElementById("div10").remove();
	total=total-79
	count=count-1
	document.getElementById("n1").innerHTML=total;
	document.getElementById("counter").innerHTML=count;
	document.getElementById("total").innerHTML=total;
	sessionStorage.setItem("t",total)
}
function delk(){
	document.getElementById("div11").remove();
	total=total-100
	count=count-1
	document.getElementById("n1").innerHTML=total;
	document.getElementById("counter").innerHTML=count;
	document.getElementById("total").innerHTML=total;
	sessionStorage.setItem("t",total)
}
function dell(){
	document.getElementById("div12").remove();
	total=total-150
	count=count-1
	document.getElementById("n1").innerHTML=total;
	document.getElementById("counter").innerHTML=count;
	document.getElementById("total").innerHTML=total;
	sessionStorage.setItem("t",total)
}




