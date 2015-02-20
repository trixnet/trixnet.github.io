	var tool;
	var cord={};
	var movestate=false;
	var color="black";
	function settool(x){
		tool=x;
		document.getElementById("tooldisplay").innerHTML=tool;
	};
	function save(){
		var b_canvas = document.getElementById("a");
		var image=b_canvas.toDataURL();
		var down=document.getElementById("download");
		down.href=image;
		down.click();
	};
	function setstart(){
		if(tool=="eraser" || tool=="pen")
			movestate=true;
		c=document.getElementById("a");
		cord.sx=event.clientX-c.getBoundingClientRect().left;
		cord.sy=event.clientY-c.getBoundingClientRect().top;
		console.log(cord);
	};
	function setend(){
                movestate=false;
                c=document.getElementById("a");
                cord.ex=event.clientX-c.getBoundingClientRect().left-cord.sx;
                cord.ey=event.clientY-c.getBoundingClientRect().top-cord.sy;
                console.log(cord);
		drawshape();
        };
	function drawshape(){
		var b_canvas = document.getElementById("a");
                var b_context = b_canvas.getContext("2d");
		b_context.fillStyle=color;
		b_context.strokeStyle=color;
		console.log(color);
		b_context.beginPath();
		if(tool=="rect"){
			b_context.strokeRect(cord.sx,cord.sy,cord.ex,cord.ey);
			b_context.stroke();
		};
		if(tool=="fillrecr"){
                        b_context.fillRect(cord.sx,cord.sy,cord.ex,cord.ey);
                };
		if(tool=="circle" || tool=="filledcircle"){
		       var radius=Math.sqrt(Math.pow(cord.ex,2)+Math.pow(cord.ey,2));
		       b_context.beginPath();
                       b_context.arc(cord.sx,cord.sy,radius,0,Math.PI*2,false);
		       if(tool=="circle")
		       		b_context.stroke();
		       else
				b_context.fill();
                };
		if(tool=="text"){
			var text=document.getElementById("textbox").value;
			var size=Math.sqrt(Math.pow(cord.ex,2)+Math.pow(cord.ey,2));
			b_context.font =size+"px Arial";
			b_context.textBaseline = "top";
			b_context.fillText(text,cord.sx,cord.sy);
		};
		if(tool=="line"){
                	x=event.clientX-c.getBoundingClientRect().left;
                	y=event.clientY-c.getBoundingClientRect().top;
			b_context.moveTo(cord.sx,cord.sy);
			b_context.lineTo(x,y);
			b_context.stroke();
			b_context.closePath();
		};
	};
	function clearscreen(){
                var b_canvas = document.getElementById("a");
                b_canvas.width = b_canvas.width;
        };
	function moveactions(){
		var bcan = document.getElementById("a");
                var b = bcan.getContext("2d");
                x=event.clientX-bcan.getBoundingClientRect().left;
                y=event.clientY-bcan.getBoundingClientRect().top;
                b.beginPath();
		console.log(tool,movestate);
		if (tool=="eraser" && movestate==true){
			b.clearRect(x,y,5,5);
                };
		if(tool=="pen" && movestate==true){
			b.fillStyle=color;
                        b.fillRect(x,y,3,3);
		}
	};
        function mycan(){
    		var c = document.getElementById("colorcanvas");
    		var ctx = c.getContext("2d");
    		var img = document.getElementById("colormap");
    		ctx.drawImage(img,10,10);};
        function setcolor(){
    		var c = document.getElementById("colorcanvas");
    		var ctx = c.getContext("2d");
    		var img = document.getElementById("colormap");
    		x=event.clientX-c.getBoundingClientRect().left;
    		y=event.clientY-c.getBoundingClientRect().top;
    		var p=ctx.getImageData(x, y, 1, 1).data;
    		var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    		console.log(hex);
    		color=hex;
    		return hex;
	};
	function rgbToHex(r, g, b){
    		if (r > 255 || g > 255 || b > 255)
        	throw "Invalid color component";
    		return ((r << 16) | (g << 8) | b).toString(16);
    	};
