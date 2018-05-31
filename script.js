let DragManager = (function Dragable(){
	let o;
	let offset = {
		x: 0,
		y: 0
	};
	function mouse_move(e){
		o.style.marginLeft = (parseInt(o.style.marginLeft) || 0) + e.clientX - offset.x +'px';
		o.style.marginTop = (parseInt(o.style.marginTop) || 0) + e.clientY - offset.y +'px';
		offset.x = e.clientX;
		offset.y = e.clientY;
	}
	function mouse_up(e){
		document.removeEventListener('mousemove', mouse_move);
		document.removeEventListener('mouseup', mouse_up);
	}
	function make(element){
		element.addEventListener('mousedown', e => {
			o = e.target;
			offset.x = e.clientX;
			offset.y = e.clientY;
			document.addEventListener('mousemove', mouse_move);
			document.addEventListener('mouseup', mouse_up);
		});
	}
	return {
		'make': make
	};
})();

let KartaManager = (function karta(){
	let ctx;
	let width;
	let size;
	function init(canvas){
		ctx = canvas.getContext("2d");
		width = canvas.width;
		size = width/800;
	}
	function assist_grid(client_size){
		ctx.strokeStyle = 'lightgrey';
		ctx.beginPath()
		for(let i=0; i<width/client_size+1; i++){
			ctx.moveTo(0, client_size*i);
			ctx.lineTo(width, client_size*i);
		}
		for(let j=0; j<width/client_size+1; j++){
			ctx.moveTo(client_size*j, 0);
			ctx.lineTo(client_size*j, width);
		}	
		ctx.stroke();
	}
	function main_grid(){	
		ctx.strokeStyle = 'black';
		ctx.beginPath()
		ctx.moveTo(width / 2, 0);
		ctx.lineTo(width / 2, width);
		ctx.moveTo(0, width / 2);
		ctx.lineTo(width, width / 2);
		ctx.stroke();
	}
	function rect_field(x, y, color){
		ctx.fillStyle = color;
		ctx.beginPath()
		ctx.rect(x*size, y*size, size, size);
		ctx.fill();
	}
	return {
		'init': init,
		'assist_grid': assist_grid,
		'main_grid': main_grid,
		'rect_field': rect_field
	};
})();
