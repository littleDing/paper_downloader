/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
 
 
//localStorage.paper_index=0;

function recordURL(paper_name,paper_url){
	var urls="{}";
	if(localStorage.urls){
		urls=JSON.parse(localStorage.urls);
	}
	urls[paper_name]=paper_url;
	//alert(urls);
	localStorage.urls = JSON.stringify(urls);
}

function downloadPaper(request,win){
	//alert("request= "+request+" doc= "+doc);
	if(request != undefined){
		//alert(request);
		//$(doc).find("").css("background-color","red");
		var haha = $(".gs_ggs")[0].firstChild.getAttribute("href");  //document.getElementById("gs_ccl");
		//$.fileDownload(haha);
		//location(haha);
		//window.open(haha);
		//alert("request = "+request + " url = "+ haha);
		recordURL(request,haha);
	}else {
		//alert("undefined!");
	}
}


function clean(){
	localStorage.urls = "{}";
	localStorage.paper_index=0;
	//location.href = "http://scholar.google.com.hk";
}

var paper_index =0;
var current_paper = null,next_paper=null;
function loadPaper(){
	if (!localStorage['paper_index']) {
		clean();
	}
	paper_index = localStorage.paper_index;
	localStorage.paper_index = new Number(paper_index)+1;
	current_paper = papers[paper_index];
	next_paper = papers[localStorage.paper_index];
	//alert("index = "+paper_index + "current_paper = "+current_paper+" next_paper = "+next_paper);
}

function nextPage(){
	var url = "http://scholar.google.com.hk/scholar?q="+next_paper+"&hl=zh-CN&as_sdt=0&as_vis=1&oi=scholart&sa=X&ei=1uwtUOvADMWhiQeSu4DgDg&ved=0CEcQgQMwAA";
	//alert("next paper = " + next_paper+ " url = "+ url );
	window.location.href = url;
}

//localStorage.urls="{}";

function printOut(){
	localStorage.paper_index=0;
	var ans = "";
	var urls = localStorage.urls;
	//alert("urls = " + urls);
	urls = JSON.parse(urls);
	//alert(urls+"");
	for ( p in urls){
		ans += "" + p + " " + urls[p] + "<br>";
		//alert(urls[p]);
	}
	//alert(ans);	
	document.writeln(ans);
}

function main(){
	if(document.domain != "scholar.google.com.hk"){
		clean();
	}

	loadPaper();
	//alert(paper_index+" "+current_paper);
	downloadPaper(current_paper,this);
	if(next_paper!=undefined){
		nextPage();
	}else{
		printOut();
		clean();	
	}	
	//alert("index= "+paper_index + " paper = " + paper);
}
main();














