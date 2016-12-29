window.onload=function(){
    
    setInterval(function(){
		var dt = new Date();
	    var currenthours = dt.getHours();
        var currentminutes = dt.getMinutes();
        var currentseconds = dt.getSeconds();
		var second=document.getElementById("seimg");
	    second.style.transform="rotate("+6*currentseconds+"deg)";
		var minute=document.getElementById("minimg");
		minute.style.transform="rotate("+6*currentminutes+"deg)";
		var hour=document.getElementById("hourimg");
		hour.style.transform="rotate("+(currenthours + currentminutes/60)/ 12 * 360+"deg)";
	},1000);

}