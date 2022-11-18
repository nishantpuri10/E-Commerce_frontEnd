
var extra=0;
var time=200;
$("document").ready(function(){
    
   
        var s=setInterval(function(){
            if(extra==7){
                clearInterval(s)
                setTimeout(function(){
                      setInterval(function(){
                    a();
                },200)

                },1000)
              
            }
           
            a();
              
              
          },time);

    
    
   
})
function a(){

	
	
	
    if(extra==0){
        b="G|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;
  
    }
    else if(extra==1){
        b="Gr|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==2){
        b="Gra|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==3){
        b="Gran|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==4){
        b="Grand|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==5){
        b="Grandm|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==6){
        b="Grandma|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;


    }
    else if(extra==7){
        b="Grandma's|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==8){
        b="Grandma|"
        
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

 

    }
    
    else if(extra==9){
        b="Grandm|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==10){
        b="Grand|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==11){
        b="Gran|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==12){
        b="Gra|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==13){
        b="Gr|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==14){
        b="G|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==15){
        b="|"
        document.getElementById("Main-Heading").innerHTML=b;
    
    extra=0;

    }
    
   
    

}










  

 
