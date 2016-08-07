m = [
		setInfo("k15",12,29,5,"black",3),
		setInfo("k15",11,28,5,"black",3),
		setInfo("k15",12,28,5,"black",3),
		setInfo("k15",13,27,5,"black",3),
		setInfo("k15",13,25,5,"black",3),
		setInfo("k15",13,26,5,"black",3),
		setInfo("k9",12,26,5,"black",3),
		setInfo("k9",13,28,5,"black",3),		
		setInfo("k9",10,40,5,"black",3),		
		setInfo("k9",50,50,5,"black",3)		]
function setInfo(sclass, cx, cy, r, fill,xzoom){
	cxz = cx*900/100
	cyz = cy*900/100
	return {
		"xclass":sclass,
		"cx":cxz.toString(),
		"cy":cyz.toString(),
		"r":r.toString(),
		"fill":fill,
		"onclick":"alert('x="+cx.toString()+" y="+cy.toString()+"');"
	}
}
function setCircle(options){
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("class", options.xclass)
	c.setAttribute("cx", options.cx)
	c.setAttribute("cy", options.cy)
	c.setAttribute("r", options.r)
	c.setAttribute("fill", options.fill)
	c.setAttribute("onclick", options.onclick)
	msvg.appendChild(c)
}
function main(){
	for(var i=0; i<m.length;i++){
		setCircle(m[i]);
	}
}