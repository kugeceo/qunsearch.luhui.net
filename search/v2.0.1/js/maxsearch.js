var curLunage=null,
newAdd=null;
var navPrefer,
nevTit;
var keyWordsObj=null;
if(document.all){var location="";
var domain=document.domain}var cCookArr=new Array();
var maxCurDom;var maxSearchBase={seachDomIframe:null,
perferCreat:null,
showMore:function(B,A){Base.setStyle(A,
{left:Base.domRealPos(B)[0]+2+"px",
top:Base.domRealPos(B)[1]+Base.getDomWH(B).h+2+"px",display:"block"})},
hidDom:function(A){Base.setStyle(A,{display:"none"})},
getParentId:function(D,C){if(!D||!C){return false}if(
$(D).id==C){return true}
var B=$(D).parentNode;while(B){
	var A=B.parentNode;
	if(B.id==C){return true}B=A}return false},
	styHidDom:function(A){switch(A){case"options":
	$("perConfigCon").style.display="none";
	$("options").style.display="none";
	if(this.seachDomIframe||
	$("iframeDom").getAttribute("cuIframe")=="noSrc"){
	$("noteWrapper").style.display=""}else{
	$("iframeDom").style.display=""}break;case"perConfigCon":
	$("perConfigCon").style.display="none";
	$("options").style.display="none";
		if(this.seachDomIframe||
	$("iframeDom").getAttribute("cuIframe")=="noSrc"){
	$("noteWrapper").style.display=""}else{
	$("iframeDom").style.display=""}default:return}},showDom:function(C){switch(C){case"perConfigCon":if(
	$("perConfigCon").style.display==""){
	$("perConfigCon").style.display="none";if(this.seachDomIframe||
	$("iframeDom").getAttribute("cuIframe")=="noSrc"){
	$("noteWrapper").style.display=""}else{
	$("iframeDom").style.display=""}return null}$("options").style.display="none";
	if(maxSearchBase.perferCreat==true){navPrefer.resetDom(maxSearch.data[maxSearch.langCode]);maxSearchBase.perferCreat=null}
	$("perConfigCon").style.display="";
	$("noteWrapper").style.display="none";
	$("iframeDom").style.display="none";
	break;case"moreConMain":Base.setOpacity("moreConMain",0.5);
	$("moreConMain").style.width=Base.getWindowView().w+"px";
	$("moreConMain").style.height=Base.getWindowView().h+"px";
	var B=parseInt(Base.getWindowView().w*0.7);var A=parseInt((Base.getWindowView().w-B)/2);
	$("moreConMainUp").style.width=B+"px";
	$("moreConMainUp").style.left=A+"px";
	$("moreConMainUp").style.top=80+"px";
	$("moreConMain").style.display="";
	$("moreConMainUp").style.display="";
	$("moreBg1").style.display="";
	$("moreBg1").style.width=B+22+"px";
	$("moreBg1").style.height=Base.getDomWH("moreConMainUp").h+22+"px";
	$("moreBg1").style.left=A-11+"px";
	$("moreBg1").style.top=69+"px";Base.setOpacity("moreBg1",0.3);
	if($("options").style.display==""){
		$("opt_lang").style.display="none"}break;case"backcon":Base.setStyle("moreConMain",
		{display:"none"});
		Base.setStyle("moreConMainUp",
		{display:"none"});Base.setStyle("moreBg1",
		{display:"none"});if(
		$("options").style.display==""){
		$("opt_lang").style.display=""}break;case"options":if($("options").style.display==""){$("options").style.display="none";if(this.seachDomIframe||$("iframeDom").getAttribute("cuIframe")=="noSrc"){$("noteWrapper").style.display=""}else{$("iframeDom").style.display=""}return}$("options").style.display="";
		$("noteWrapper").style.display="none";
		$("perConfigCon").style.display="none";
		$("iframeDom").style.display="none";
		break;case"historyBut":
		$("hisDom").style.display="";
		this.changeCookieLeng();
		$("hisDom").focus();
		$("hisDom").onblur=function(){window.setTimeout(function(){$("hisDom").style.display="none"},200)};
		break;default:return}},savePre:function(){$("keyword").value="";
		this.seachDomIframe=true;
		$("iframeDom").style.display="none";
		$("noteWrapper").style.display="";
		$("perConfigCon").style.display="none"},setIframeUI:function(){$("iframeDom").width=Base.getView().w+"px";
		$("iframeDom").height=(Base.getView().h-Base.getDomWH("header").h-Base.getDomWH("headerNav").h)+"px"},iframeLoad:function(){var A=$("iframeDom");A.src="about:blank";var B='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Search Result</title><link rel="stylesheet" type="text/css" href="'+maxSearch.version+'/css/base.css" /></head>';B+="<body>";B+='<div class="loading"><img src="'+maxSearch.version+'/images/loading.gif" />&nbsp;&nbsp;loading...</div>';B+="</body></html>";
		try{var D=A.contentWindow.document;D.open();D.write(B);D.close()}catch(C){}},searchWordCache:"",searchWoooord:function(){if($("keyword").value){$("options").style.display="none";
		$("perConfigCon").style.display="none";
		$("noteWrapper").style.display="none";
		$("iframeDom").style.display="";
		$("iframeDom").src="about:blank";
		this.seachDomIframe=null;maxSearchBase.iframeLoad();
		var H=maxSearch.searchUrl;var B=$("keyword").value;B=B.replace(/\xb7/g," ");if(H.indexOf("{keyword:gb2312}")>-1){H=H.replace("{keyword:gb2312}",$GB2312.encodeURIComponent(B))}else{if(H.indexOf("{keyword:escape}")>-1){H=H.replace("{keyword:escape}",escape(B))}else{if(H.indexOf("{keyword:escape}")>-1){H=H.replace("{keyword:escape}",escape(B))}else{if(H.indexOf("{keyword}")>-1){H=H.replace("{keyword}",encodeURIComponent(B))}else{if(H.indexOf("{nokeyword}")>-1){H=H.replace("{nokeyword}","")}else{if(H.indexOf("{noEncode}")>-1){H=H.replace("{noEncode}",B)}else{H=H+encodeURIComponent(B)}}}}}}window.setTimeout(function(){$("iframeDom").src=H},100);maxSearchBase.insetCookieDom(B);
		$("iframeDom").setAttribute("cuIframe","hasSrc");
		this.AjaxGetWords();var D="";var G="";var C="";try{D=external.max_invoke("getMac");G=external.max_invoke("getUserId")}catch(F){D="";G="";C=""}
	var E=Math.random();var A=E.toString().substr(2,4);
	$("keyWordsSubmit").src="http://www.luhui.net/search/?q="+D+"/l="+maxSearch.langCode+"&k="+encodeURIComponent(
	$("keyword").value)+"&uid="+G+"&cid="+C+"&rad="+A}},AjaxGetWords:function()
	{if(maxSearch.langCode=="zh-cn"){if(this.searchWordCache!=$("keyword").value){
		$("SearKeys").style.display="";
	var kUrl="../?q="+encodeURIComponent(
	$("keyword").value);
	Ajax.get(kUrl,"",function(o){try{var keywords=eval("("+o.responseText+")")}catch(e){if(keyWordsObj){keyWordsObj.clearDom()}return}if(keyWordsObj){try{if(Base.isArray(keywords)){if(keywords.length==0){keyWordsObj.clearDom()}else{keyWordsObj.resetDom(keywords)}}else{keyWordsObj.clearDom()}}catch(e){}}else{try{if(Base.isArray(keywords)&&(keywords.length!=0)){keyWordsObj=new scrollWords("SearKeys",keywords)}}catch(e){}}},false)}}this.searchWordCache=$("keyword").value},runSetTime:null,cL:110,cT:30,Steps:10,step:0,times:25,runlthw:{},runobj:{},clinetShow:function(){var D=maxCurDom._x-maxSearchBase.cL;var B=maxCurDom._y-maxSearchBase.cT;var C=maxCurDom._w;var A=maxCurDom._h;
	$("effect").style.display="";
	$("effect").style.width=maxCurDom._w+"px";
	$("effect").style.height=maxCurDom._h+"px";
	$("effect").style.left=maxCurDom._x+"px";
	$("effect").style.top=maxCurDom._y+"px";
	this.runSetTime=window.setInterval(function(){maxSearchBase.effectshow()},
	this.times);
	this.runlthw={xdistance:D,ydistance:B,height:A,width:C}},
	effectshow:function(){if(this.step<this.Steps){
		$("effect").style.left=parseInt(
		$("effect").style.left)-(this.runlthw.xdistance/this.Steps)+"px";
	$("effect").style.top=parseInt(
	$("effect").style.top)-(this.runlthw.ydistance/this.Steps)+"px";
	$("effect").style.height=(this.runlthw.height-(this.runlthw.height/this.Steps)*(this.step+1))+"px";
	$("effect").style.width=(this.runlthw.width-(this.runlthw.width/this.Steps)*(this.step+1))+"px";
	this.step++}else{window.clearInterval(this.runSetTime);
	$("effect").style.display="none";
	this.step=0}},getCurSearchSatus:function(){var C={c:maxCurDom.c,n:maxCurDom.n};
	var A=maxSearch.data[maxSearch.langCode]["prefer"].items.length;
	for(var B=0;B<A;B++){if(maxSearch.data[maxSearch.langCode]
	["prefer"].items[B].c==C.c&&maxSearch.data[maxSearch.langCode]
	["prefer"].items[B].n==C.n){if(maxSearch.langCode=="zh-cn")
	{alert("已添加过此搜索引擎")}else{alert("Already in PreferList!")}return}}maxSearch.data
[maxSearch.langCode]
["prefer"].items.push(C);maxSearchBase.pushPreferCookie();maxSearchBase.clinetShow();
maxSearchBase.perferCreat=true;newAdd=true},changeCookieLeng:function(){if(cCookArr.length==0){
	$("hisDom").style.height="20px"}else{if(cCookArr.length>0&&cCookArr.length<3){
		$("hisDom").style.height=(cCookArr.length+1)*20+"px"}else{
			$("hisDom").style.height="80px"}}},
	deCookie:function(){
		$("hisDom").innerHTML='<a class="hisItemDel" id="doCookie">删除关键字</a><div class="clear"></div>';
	Cookie.setCookie("aArr","");
	$("doCookie").onclick=function(){maxSearchBase.deCookie()};cCookArr=null;cCookArr=new Array();
	$("doCookie").style.display="none";
	$("hisDom").style.display="none"},firstGetCookieCreatDom:function(){var C=Cookie.getCookie("aArr");
	if(C==null||C==""){
		$("doCookie").style.display="none"}else{var A=C.split(",").length;
		for(var B=0;B<A;B++){cCookArr[B]=Base.domCreat("a");cCookArr[B].innerHTML=unescape(C.split(",")[B]).encodeHTML();cCookArr[B].className="hisItem";cCookArr[B].onmouseover=function(D){Base.getSrcDom(D).className="hisItemHover"};cCookArr[B].onmouseout=function(D){Base.getSrcDom(D).className="hisItem"};
	cCookArr[B].onclick=function(D){
		$("keyword").value=Base.getSrcDom(D).innerHTML.decodeHTML();
		$("hisDom").style.display="none"};
		$("hisDom").insertBefore(cCookArr[B],
		$("hisDom").firstChild)}this.changeCookieLeng();
		$("doCookie").style.display=""}
		$("doCookie").onclick=function(){maxSearchBase.deCookie()}},
		insetCookieDom:function(F){var D=Cookie.getCookie("aArr");
		var A=cCookArr.length;var C=/^\s*$/;if(C.test(
		$("keyword").value)){return}if(A==0){Cookie.setCookie("aArr",escape(F));
		cCookArr[0]=Base.domCreat("a");cCookArr[0].innerHTML=F.encodeHTML();cCookArr[0].className="hisItem";
		cCookArr[0].onmouseover=function(G){Base.getSrcDom(G).className="hisItemHover"};
		cCookArr[0].onmouseout=function(G){Base.getSrcDom(G).className="hisItem"};
		cCookArr[0].onclick=function(){
		$("keyword").value=F.decodeHTML();
		$("hisDom").style.display="none"};
		$("doCookie").style.display="";
		$("hisDom").insertBefore(cCookArr[0],
		$("hisDom").firstChild);
		this.changeCookieLeng()}else{if(F==
		$("hisDom").firstChild.firstChild.nodeValue){return}for(var B=0;
		B<Cookie.getCookie("aArr").split(",").length;B++){if(F==unescape(Cookie.getCookie("aArr").split(",")[B])){try{
			$("hisDom").insertBefore(cCookArr[B],
			$("hisDom").firstChild)}catch(E){}return}}D=D+","+escape(F);
			Cookie.setCookie("aArr",D);cCookArr[A]=Base.domCreat("a");cCookArr[A].innerHTML=F.encodeHTML();
			cCookArr[A].className="hisItem";
			cCookArr[A].onclick=function(G){
				$("keyword").value=Base.getSrcDom(G).innerHTML.decodeHTML();
	$("hisDom").style.display="none"};
	cCookArr[A].onmouseover=function(G){Base.getSrcDom(G).className="hisItemHover"};
	cCookArr[A].onmouseout=function(G){Base.getSrcDom(G).className="hisItem"};
	$("hisDom").insertBefore(cCookArr[A],
	$("hisDom").firstChild);
	this.changeCookieLeng()}},
	insertCookieWord:function(B){var A=Cookie.getCookie("aArr");if(A==null||A==""){
		Cookie.setCookie("aArr",escape(B))}else{A=A+","+escape(B);Cookie.setCookie("aArr",A)}},
		onchangeLang:function(){var A=$("opt_lang").options[$("opt_lang").options.selectedIndex].value;curLunage=A},
		changeLanguage:function(){if(curLunage==null||curLunage==maxSearch.langCode){
			$("perConfigCon").style.display="none";
			$("options").style.display="none";if(this.seachDomIframe||
			$("iframeDom").getAttribute("cuIframe")=="noSrc"){
			$("noteWrapper").style.display=""}else{
			$("iframeDom").style.display=""}return}
			$("keyword").value="";Cookie.setCookie("userLan",curLunage,
	Cookie.getExpDate(200000,23,33));var A=document.location.href.replace(/\?.*$/,"");document.location.href=A},baseLang:function(){if(Cookie.getCookie("userLan")!=""){maxSearch.langCode=Cookie.getCookie("userLan");curLunage=maxSearch.langCode}else{maxSearch.langCode=maxSearch.defaults.language;Cookie.setCookie("userLan",maxSearch.langCode,Cookie.getExpDate(200000,23,33))}},getNavigatorLan:function(){var A;if(navigator.language){A=navigator.language}else{A=navigator.userLanguage}A=A.toLowerCase();if(A=="zh-cn"||A=="en-us"||A=="fr-fr"){return A}else{return"en-us"}},reDesString:function(B){var C=[];
	for(var A=0;A<B.length;A++){C.push(B[A].c);C.push(B[A].n)}return C},reBuiltCookieString:function(D){var F=[];var A=D.split(",").length;
	var E=D.split(",");
	for(var C=0;C<A;C+=2){var B=C;var H=E[B];var G=E[B+1];
	F.push({c:H,n:G})}return F},
	readPreferCookie:function(){if(Cookie.getCookie("preferArr"+maxSearch.langCode)=="")
	{return}else{maxSearch.data[maxSearch.langCode]
    ["prefer"].items=maxSearchBase.reBuiltCookieString(Cookie.getCookie("preferArr"+maxSearch.langCode))}},
	pushPreferCookie:function(){Cookie.setCookie("preferArr"+maxSearch.langCode,
	maxSearchBase.reDesString(maxSearch.data[maxSearch.langCode]["prefer"].items),
	Cookie.getExpDate(200000,23,33))},WebLan:function(A){if(A=="zh-cn"){
	$("opt_lang").options[0].selected=true;
	$("opt_title").innerHTML="界面语言";
	$("txt_opt_lang").innerHTML="语言选择";
	$("opt_butSave").value="保存";
	$("opt_butCancel").value="取消";

$("max_web").innerHTML="鲁虺软件";
$("max_web").href="http://soft.luhui.net";
$("custom_prefer").innerHTML="修改首选搜索引擎列表";
$("custom_curr").innerHTML="当前首选搜索引擎";
$("custom_def").innerHTML="恢复默认搜索引擎列表";
$("custom_list").innerHTML="搜索引擎列表";
$("custom_butSave").value="保存";
$("custom_butCancel").value="取消";
$("btn_set_home").innerHTML="设置首页";
$("btn_add_fav").onclick=function(){Base.addFavorite("http://search.luhui.net/","鲁虺群搜索");return false};
$("btn_add_fav").innerHTML="添加到收藏夹";
$("btn_privacy").innerHTML="隐私策略";
$("btn_privacy").href="?q=privacy.htm";
$("doCookie").innerHTML="删除关键字";
$("addPreferImg").alt="添加到首选";
$("newPreferImg").alt="修改首选搜索引擎列表";
$("searchBut").title="搜索";
$("searchImgTop").alt="鲁虺多重搜索 - 上网从鲁虺开始！";
$("btn_bbs").innerHTML="发送反馈";
$("max_webTit").innerHTML="互动社区";
$("btn_bbs").href="http://t.luhui.net";
$("max_webTit").href="http://club.luhui.net";
$("selfCon").innerHTML="自定义"}else{if(A=="en-us"){
	$("opt_title").innerHTML="Interface Language";
$("txt_opt_lang").innerHTML="Language Choice";
$("opt_lang").options[1].selected=true;
$("opt_butSave").value="Save";
$("opt_butCancel").value="Cancel";
$("max_web").innerHTML="luhui Website";
$("max_web").href="http://www.luhui.net";
$("custom_prefer").innerHTML="Customize Searches";
$("custom_curr").innerHTML="Preferred Searches";
$("custom_def").innerHTML="Restore Default";
$("custom_list").innerHTML="Searches list";
$("custom_butSave").value="Save";
$("custom_butCancel").value="Cancel";
$("btn_set_home").innerHTML="Set as Homepage";
$("btn_add_fav").onclick=function(){Base.addFavorite("http://search.luhui.net/","luhui Multi-Search");return false};
$("btn_add_fav").innerHTML="Add to Favorites";
$("btn_privacy").innerHTML="Privacy Policy";
$("btn_privacy").href="?q=privacy.htm";
$("doCookie").innerHTML="Delete Keywords";
$("addPreferImg").alt="Add to Prefer";
$("newPreferImg").alt="New Prefer";
$("searchBut").title="Search";
$("searchImgTop").alt="luhui Search";
$("btn_bbs").innerHTML="Submit search engine";
$("max_webTit").innerHTML="Submit search engine";
$("btn_bbs").href="http://bbs.luhui.net/";
$("max_webTit").href="http://bbs.luhui.net/";
$("selfCon").innerHTML="Customize";
document.title="luhui Search"}else{if(A=="fr-fr"){
	$("opt_title").innerHTML="Langue de l'interface";
	$("txt_opt_lang").innerHTML="Choix de la langue";
	$("opt_lang").options[2].selected=true;
	$("opt_butSave").value="Enregistrer";
	$("opt_butCancel").value="Annuler";
	$("max_web").innerHTML="Site Web de luhui";
	$("max_web").href="http://www.luhui.net";
	$("custom_prefer").innerHTML="Recherches personnalisées";
	$("custom_curr").innerHTML="Recherches préférées";
	$("custom_def").innerHTML="Paramètres par défaut";
	$("custom_list").innerHTML="Liste de recherches";
	$("custom_butSave").value="Enregistrer";
	$("custom_butCancel").value="Annuler";
	$("btn_set_home").innerHTML="Définir comme page de démarrage";
	$("btn_add_fav").onclick=function(){Base.addFavorite("http://search.luhui.net/","luhui Multi-Search");return false};
	$("btn_add_fav").innerHTML="Ajouter aux Favoris";
	$("btn_privacy").innerHTML="Respect de la vie privée";
	$("btn_privacy").href="?q=privacy.htm";
	$("doCookie").innerHTML="Supprimer les mots-clés";
	$("addPreferImg").alt="Ajouter aux préférés";
	$("newPreferImg").alt="Nouveau préféré";
	$("searchBut").title="Rechercher";
	$("searchImgTop").alt="luhui Recherche";
	$("btn_bbs").innerHTML="Lancer le moteur de recherche";
	$("max_webTit").innerHTML="Lancer le moteur de recherche";
	$("btn_bbs").href="http://t.luhui.net/";
	$("max_webTit").href="http://t.luhui.net/";
	$("selfCon").innerHTML="Personnaliser";document.title="Recherche de luhui"}else{alert("Language Error !!!!");
	return}}}}};function titleCreate(E,B,D){var A=this;
	this.data=D;
	this.list=B;
	this.dom=$(E);
	this.arr=new Array();
	this.readyCreate={};var C=maxSearch.langCode;
	this.createDom=function(){var H=this.data;
	this.dom.innerHTML="";
	for(var F=0;F<this.list.length;F++){var G=this.list[F];
	this.arr[F]=Base.domCreat("a");
	this.arr[F].href="javascript:void(1);";
	this.arr[F].id=this.list[F];
	this.dom.appendChild(this.arr[F]);
	this.arr[F].onclick=function(I){A.domClick(I)};
	if(G==maxSearch.defaults.firstShow[C].title){this.arr[F].className="curType";
	this.dom.setAttribute("curD",this.arr[F].id);
	if(G=="prefer"){this.arr[F].innerHTML=H[G].title;
	this.readyCreate[G]=new perferMade("searches",maxSearch.data[C]["prefer"]);
	$("searchConfig").style.display="";
	continue}this.readyCreate[this.arr[F].id]=new navSelect("searches",maxSearch.data[C][this.arr[F].id],this.arr[F].id);
	$("addPreferDom").style.display=""}else{if(G=="more"){this.arr[F].className="more";
	this.arr[F].appendChild(Base.domCreat("span").appendChild(document.createTextNode("更多")));
	this.arr[F].onclick=function(){maxSearchBase.showDom("moreConMain")};
	continue}else{if(G=="set"){this.arr[F].onclick=function(){maxSearchBase.showDom("options")}}}}this.arr[F].innerHTML=H[G].title}};
	this.domClick=function(F){Base.getSrcDom(F).blur();
	if($("keyword").value==""&&$("iframeDom").style.display!=""&&Base.getSrcDom(F).id!="set"){$("noteWrapper").style.display="";
	$("options").style.display="none";
	$("perConfigCon").style.display="none"}if($(this.dom.getAttribute("curD"))==Base.getSrcDom(F)){return}this.readyCreate[this.dom.getAttribute("curD")].Con.style.display="none";
	Base.getSrcDom(F).className="curType";
	$(this.dom.getAttribute("curD")).className="";
	this.dom.setAttribute("curD",Base.getSrcDom(F).id);
	if(this.readyCreate[this.dom.getAttribute("curD")]==null){if(this.dom.getAttribute("curD")=="prefer"){this.readyCreate[Base.getSrcDom(F).id]=new perferMade("searches",maxSearch.data[C][Base.getSrcDom(F).id],Base.getSrcDom(F).id);
	$("addPreferDom").style.display="none";
	$("searchConfig").style.display=""}else{this.readyCreate[Base.getSrcDom(F).id]=new navSelect("searches",maxSearch.data[C][Base.getSrcDom(F).id],Base.getSrcDom(F).id);
	$("searchConfig").style.display="none";
	$("addPreferDom").style.display=""}
	$("perConfigCon").style.display="none";
	$("options").style.display="none"}else{if(Base.getSrcDom(F).id=="prefer"){
	$("searchConfig").style.display="";
	$("addPreferDom").style.display="none";
	if(newAdd==true){this.readyCreate.prefer.newCreat(this.data.prefer);
	newAdd=null}}else{$("searchConfig").style.display="none";
	$("addPreferDom").style.display="";
	maxCurDom=this.readyCreate[this.dom.getAttribute("curD")].domStyle}
	$("perConfigCon").style.display="none";
	$("options").style.display="none";
	this.readyCreate[this.dom.getAttribute("curD")].Con.style.display="";
	maxSearch.searchUrl=this.readyCreate[this.dom.getAttribute("curD")].getUrl();
	if($("keyword").value!=""){maxSearchBase.searchWoooord()}}};
	this.createDom()}function navSelect(E,D,C){var A=this;
	this.dom=$(E);
	this.data=D;
	this.Con=this.dom.appendChild(Base.domCreat("div"));
	this.domStyle={};
	this.arr={};var B;
	this.createDom=function(){var G=this.data.items;
	var F=maxSearch.defaults.preferredList[maxSearch.langCode][C];
	for(i in G){this.arr[i]=Base.domCreat("a");
	this.arr[i].href="javascript:void(0);";
	this.arr[i].innerHTML=G[i].title+(G[i].subtitle?G[i].subtitle:"");
	this.arr[i].setAttribute("curSearch",i);
	this.arr[i].setAttribute("currC",C);
	this.arr[i].id="maxSeacrch_"+maxSearch.langCode+C+"_"+i;
	this.Con.appendChild(this.arr[i]);
	this.arr[i].onclick=function(H){A.domClick(H)};
	if(i==F){this.Con.setAttribute("curDomChose",this.arr[i].id);
	this.arr[i].className="curr";
	maxSearch.searchUrl=G[i].url;
	this.Con.setAttribute("curUrl",G[i].url);B={_x:Base.domRealPos(this.arr[i])[0],_y:Base.domRealPos(this.arr[i])[1],_w:Base.getDomWH(this.arr[i].id).w,_h:Base.getDomWH(this.arr[i].id).h,c:C,n:i};
	this.domStyle=B;maxCurDom=B;if($("keyword").value!=""){maxSearchBase.searchWoooord()}continue}}};
	this.domClick=function(F){Base.getSrcDom(F).blur();
	if($(this.Con.getAttribute("curDomChose"))==Base.getSrcDom(F)){return}Base.getSrcDom(F).className="curr";
	$(this.Con.getAttribute("curDomChose")).className="";
	this.Con.setAttribute("curDomChose",Base.getSrcDom(F).id);
	maxSearch.searchUrl=this.data.items[Base.getSrcDom(F).getAttribute("curSearch")].url;
	this.Con.setAttribute("curUrl",maxSearch.searchUrl);
	if($("keyword").value!=""){maxSearchBase.searchWoooord()}B={_x:Base.domRealPos(Base.getSrcDom(F))[0],_y:Base.domRealPos(Base.getSrcDom(F))[1],_w:Base.getDomWH(Base.getSrcDom(F)).w,_h:Base.getDomWH(Base.getSrcDom(F)).h,c:C,n:Base.getSrcDom(F).getAttribute("curSearch")};
	this.domStyle=B;maxCurDom=B};
	this.getUrl=function(){return this.Con.getAttribute("curUrl")};
	this.getCurDomStatus=function(){return this.domStyle};
	this.createDom()}function perferMade(D,C){var A=this;
	this.dom=$(D);
	this.data=C;
	this.Con=this.dom.appendChild(Base.domCreat("div"));
	this.arr=new Array();
	this.delArr=new Array();
	var B=maxSearch.langCode;
	this.createDom=function(){var E=this.data.items.length;
	this.curLen=E;
	for(var G=0;G<E;G++){var F=maxSearch.data[maxSearch.langCode][this.data.items[G].c]["items"]
	[this.data.items[G].n];if(!F){continue}this.arr[G]=Base.domCreat("a");
	this.arr[G].href="javascript:void(0);";
	this.arr[G].innerHTML=F.title+(F.subtitle?F.subtitle:"");
	this.arr[G].id="maxSearch_"+B+this.data.items[G].c+"_"+this.data.items[G].n;
	this.arr[G].config={con:this.data.items[G].c,na:this.data.items[G].n,num:G};
	this.Con.appendChild(this.arr[G]);
	this.arr[G].onclick=function(H){A.domClick(H)};
	this.arr[G].onmouseover=function(H){A.domOver(H)};
	this.arr[G].onmouseout=function(H){A.domOut(H)};
	if(G==maxSearch.defaults.preferredList[B].prefer){this.arr[G].className="currPr";
	this.Con.setAttribute("curDomChose",this.arr[G].id);
	maxSearch.searchUrl=maxSearch.data[B][this.arr[G].config.con].items[this.arr[G].config.na].url;
	this.Con.setAttribute("curUrl",maxSearch.searchUrl);
	if($("keyword").value!=""){maxSearchBase.searchWoooord()}}}};
	this.newCreat=function(E){this.Con.innerHTML="";
	this.data=E;
	this.createDom()};
	this.getkkk=function(H,G){if(H==0){G=false}if(G){for(var F=H-1;F>=0;F--){if(this.arr[F].style.display!="none"){return F}}this.getkkk(H,false)}for(var E=H+1;E<=this.arr.length;E++){if(this.arr[E].style.display!="none"){return E}}};
	this.domOver=function(E){if(Base.getSrcDom(E).tagName.toLowerCase()=="span"){Base.getSrcDom(E).style.background="url("+maxSearch.version+"/images/tab_close_hover.gif) no-repeat center right"}};
	this.domOut=function(E){if(Base.getSrcDom(E).tagName.toLowerCase()=="span"){Base.getSrcDom(E).style.background="url("+maxSearch.version+"/images/tab_close.gif) no-repeat center right"}};
	this.domClick=function(F){var H=0;var E=0;var G=0;if(Base.getSrcDom(F).tagName.toLowerCase()=="span"){this.curLen--;if(this.curLen<=0){if(maxSearch.langCode=="zh-cn"){alert("剩下最后一项，您不能删除!")}else{alert("You can't do that!!")}return}for(
var J=0;J<this.delArr.length;J++){if(this.delArr[J]<Base.getSrcDom(F).parentNode.config.num){H++}}this.data.items.splice(Base.getSrcDom(F).parentNode.config.num-H,1);maxSearchBase.perferCreat=true;
this.delArr.push(Base.getSrcDom(F).parentNode.config.num);if($("perConfigCon").style.display==""){navPrefer.Lremove(Base.getSrcDom(F).parentNode.config.num)}this.arr[Base.getSrcDom(F).parentNode.config.num].style.display="none";maxSearchBase.pushPreferCookie();var I=this.getkkk(Base.getSrcDom(F).parentNode.config.num,true);
this.arr[I].className="currPr";
this.Con.setAttribute("curDomChose",this.arr[I].id);maxSearch.searchUrl=maxSearch.data[B][this.arr[I].config.con].items[this.arr[I].config.na].url;
this.Con.setAttribute("curUrl",maxSearch.searchUrl);if($("iframeDom").style.display!="none"){maxSearchBase.searchWoooord()}return}else{Base.getSrcDom(F).blur()}if($(this.Con.getAttribute("curDomChose"))==Base.getSrcDom(F)){return}Base.getSrcDom(F).className="currPr";
$(this.Con.getAttribute("curDomChose")).className="";
this.Con.setAttribute("curDomChose",Base.getSrcDom(F).id);maxSearch.searchUrl=maxSearch.data[B][Base.getSrcDom(F).config.con].items[Base.getSrcDom(F).config.na].url;
this.Con.setAttribute("curUrl",maxSearch.searchUrl);maxSearchBase.searchWoooord()};
this.getUrl=function(){return this.Con.getAttribute("curUrl")};
this.createDom()}function preferConfig(C,B,D){var A=this;
this.data=D;
this.domL=$(C);
this.domR=$(B);
this.ArrR={};
this.ArrL=[];
this.preferArr=this.data.prefer["items"];
this.domLCreate=function(){
	var E=this.preferArr.length;
	for(var G=0;G<E;G++){
		var F=this.data[this.data.prefer["items"][G].c]["items"]
		[this.data.prefer["items"][G].n];if(!F){continue}this.ArrL[G]=Base.domCreat("div");
		this.ArrL[G].className="preferItems";
		this.ArrL[G].selfCon={c:this.data.prefer["items"][G].c,
		n:this.data.prefer["items"][G].n,con:G};
		this.domL.appendChild(this.ArrL[G]);
		this.ArrL[G].innerHTML="<span>"+F.title+(F.subtitle?F.subtitle:"")+'</span><img src="'+maxSearch.version+'/images/btn_remove.png" width="16" height="16" alt="" class="delImg" act="del" />';
		this.ArrL[G].onclick=function(H){A.domLItemsClick(H)}}};
		this.domLItemsClick=function(E){if(Base.getSrcDom(E).tagName.toLowerCase()=="img"){if(this.domL.childNodes.length==1){if(maxSearch.langCode=="zh-cn"){alert("剩下最后一项，您不能删除!")}else{alert("You can't do that!!")}return}if(Base.getSrcDom(E).parentNode.selfCon.con==this.domL.getAttribute("culic")){this.domL.setAttribute("culic",null);
		$("muveImg").style.display="none"}this.domL.removeChild(Base.getSrcDom(E).parentNode);
		this.ArrR[Base.getSrcDom(E).parentNode.selfCon.c].sp[Base.getSrcDom(E).parentNode.selfCon.n].style.display="";
		maxSearchBase.perferCreat=true}else{if(Base.getSrcDom(E).tagName.toLowerCase()=="span"){if(!!this.domL.getAttribute("culic")){this.ArrL[this.domL.getAttribute("culic")].className="preferItems";Base.getSrcDom(E).parentNode.className="act";
		this.domL.setAttribute("culic",Base.getSrcDom(E).parentNode.selfCon.con);
		$("muveImg").style.display="";return}Base.getSrcDom(E).parentNode.className="act";
		this.domL.setAttribute("culic",Base.getSrcDom(E).parentNode.selfCon.con);
		$("muveImg").style.display=""}else{if(!!this.domL.getAttribute("culic")||this.domL.getAttribute("culic")==0){this.ArrL[this.domL.getAttribute("culic")].className="preferItems";Base.getSrcDom(E).className="act";
		this.domL.setAttribute("culic",Base.getSrcDom(E).selfCon.con);
		$("muveImg").style.display="";return}Base.getSrcDom(E).className="act";
		this.domL.setAttribute("culic",Base.getSrcDom(E).selfCon.con);
		$("muveImg").style.display=""}}};
		this.Lremove=function(E){this.ArrR[this.ArrL[E].selfCon.c].sp[this.ArrL[E].selfCon.n].style.display="";
	this.domL.removeChild(this.ArrL[E]);
	if(E==this.domL.getAttribute("culic")){
		this.domL.setAttribute("culic",null);
	$("muveImg").style.display="none"}};
	this.LAdd=function(){var E=this.ArrL.length;
	var F=this.data[maxCurDom.c].items[maxCurDom.n];
	this.ArrL[E]=Base.domCreat("div");
	this.ArrL[E].className="preferItems";
	this.ArrL[E].selfCon={c:maxCurDom.c,n:maxCurDom.n,con:E};
	this.domL.appendChild(this.ArrL[E]);
	this.ArrL[E].innerHTML="<span>"+F.title+(F.subtitle?F.subtitle:"")+'</span><img src="'+maxSearch.version+'/images/btn_remove.png" width="16" height="16" alt="" class="delImg" act="del" />';
	this.ArrL[E].onclick=function(G){A.domLItemsClick(G)};
	this.ArrR[maxCurDom.c].sp[maxCurDom.n].style.display="none"};
	this.domRCreate=function(){for(var G in this.data){if(G=="more"||G=="prefer"||G=="set"){continue}this.ArrR[G]=Base.domCreat("div");
	this.ArrR[G].className="searchMenuTit";
	this.ArrR[G].cli={cur:null,t:this.data[G].title};
	this.ArrR[G].innerHTML="<code> - </code>"+this.data[G].title;
	this.ArrR[G].onclick=function(I){A.titRClick(I)};
	this.ArrR[G].sp=Base.domCreat("div");
	this.ArrR[G].sp.className="searchMenuList";
	this.domR.appendChild(this.ArrR[G]);
	this.domR.appendChild(this.ArrR[G].sp);
	for(var E in this.data[G]["items"]){this.ArrR[G].sp[E]=Base.domCreat("div");
	this.ArrR[G].sp[E].className="ListItems";
	this.ArrR[G].sp[E].bsaeconfig={c:G,n:E};
	this.ArrR[G].sp[E].onclick=function(I){A.domRItemsClick(I)};
	this.ArrR[G].sp[E].innerHTML=this.data[G]["items"][E].title;
	this.ArrR[G].sp.appendChild(this.ArrR[G].sp[E])}}for(var F=0;F<this.preferArr.length;F++){var H=this.ArrR[this.preferArr[F].c].sp[this.preferArr[F].n];if(!H){continue}H.style.display="none"}};
	this.titRClick=function(E){if(!Base.getSrcDom(E).cli){return}if(Base.getSrcDom(E).cli.cur==null){Base.getSrcDom(E).cli.cur=true;Base.getSrcDom(E).innerHTML="<code> + </code>"+Base.getSrcDom(E).cli.t;Base.getSrcDom(E).sp.style.display="none"}else{Base.getSrcDom(E).cli.cur=null;Base.getSrcDom(E).innerHTML="<code> - </code>"+Base.getSrcDom(E).cli.t;Base.getSrcDom(E).sp.style.display=""}};
	this.domRItemsClick=function(E){var G=this.domL.childNodes.length;Base.getSrcDom(E).style.display="none";
	this.ArrL[G]=Base.domCreat("div");
	this.ArrL[G].className="preferItems";
	this.ArrL[G].selfCon={c:Base.getSrcDom(E).bsaeconfig.c,n:Base.getSrcDom(E).bsaeconfig.n,con:G};
	this.domL.appendChild(this.ArrL[G]);
	var F=this.data[Base.getSrcDom(E).bsaeconfig.c]["items"][Base.getSrcDom(E).bsaeconfig.n];
	this.ArrL[G].innerHTML="<span>"+F.title+(F.subtitle?F.subtitle:"")+'</span><img src="'+maxSearch.version+'/images/btn_remove.png" width="16" height="16" alt="" class="delImg" act="del" />';
	this.ArrL[G].onclick=function(H){A.domLItemsClick(H)}};
	this.moveUp=function(){if(this.domL.getAttribute("culic")!=null){if(this.ArrL[this.domL.getAttribute("culic")].previousSibling){this.domL.insertBefore(this.ArrL[this.domL.getAttribute("culic")],this.ArrL[this.domL.getAttribute("culic")].previousSibling)}}};
	this.moveDown=function(){if(this.domL.getAttribute("culic")!=null){if(this.ArrL[this.domL.getAttribute("culic")].nextSibling){this.domL.insertBefore(this.ArrL[this.domL.getAttribute("culic")].nextSibling,this.ArrL[this.domL.getAttribute("culic")])}}};
	this.resetDom=function(E){this.data=E;
	this.domL.innerHTML="";
	this.domR.innerHTML="";
	this.domRCreate();
	this.domLCreate()};
	this.init=function(){this.domRCreate();
	this.domLCreate()};
	this.saveConfig=function(){var E=this.domL.childNodes.length;
	this.preferArr=null;
	this.preferArr=new Array();
	for(var F=0;F<E;F++){this.preferArr.push({c:this.domL.childNodes[F].selfCon.c,n:this.domL.childNodes[F].selfCon.n})}this.data.prefer["items"]=this.preferArr;
	this.domL.innerHTML="";
	this.domR.innerHTML="";
	this.domRCreate();
	this.domLCreate();maxSearchBase.pushPreferCookie()};
	this.cancleDom=function(){this.preferArr=this.data.prefer["items"];
	this.domL.innerHTML="";
	this.domR.innerHTML="";
	this.domRCreate();
	this.domLCreate()};
	this.preferDef=function(){if(maxSearch.langCode=="zh-cn"){var I=window.confirm("你确定要恢复默认设置吗?")}else{if(maxSearch.langCode=="fr-fr"){var I=window.confirm("Etes-vous sûr de vouloir remettre les réglages par défaut ?")}else{var I=window.confirm("Are you sure want to restore the default settings?")}}if(I){var G=maxSearch.langCode;
	this.preferArr=maxSearch.defaults.preferredConList[G];
	this.domL.innerHTML="";
	var E=this.preferArr.length;
	for(var H=0;H<E;H++){var F=this.data[maxSearch.defaults.preferredConList[G][H].c]["items"][maxSearch.defaults.preferredConList[G][H].n];
	this.ArrL[H]=Base.domCreat("div");
	this.ArrL[H].className="preferItems";
	this.ArrL[H].selfCon={c:maxSearch.defaults.preferredConList[G][H].c,n:maxSearch.defaults.preferredConList[G][H].n,con:H};
	this.domL.appendChild(this.ArrL[H]);
	this.ArrL[H].innerHTML="<span>"+F.title+(F.subtitle?F.subtitle:"")+'</span><img src="'+maxSearch.version+'/images/btn_remove.png" width="16" height="16" alt="" class="delImg" act="del" />';
	this.ArrL[H].onclick=function(J){A.domLItemsClick(J)}}this.domR.innerHTML="";
	this.domRCreate()}else{return}};
	this.returnNewPrefer=function(){return newPrefer=this.data.prefer};
	this.init()}function scrollWords(B,I){var L=this;var H=$(B);var K;var N=I.length;var F=H.offsetHeight;var G=0;var M=1;var D=3000;var C=null;var J=null;var E=1;var A;
	this.createDom=function(O){H.innerHTML="";H.scrollTop=0;K=null;C=null;J=null;G=0;A=0;E=1;K=H.appendChild(Base.domCreat("div"));
	for(var P=0;P<O.length;P++){var Q=K.appendChild(Base.domCreat("a"));Q.innerHTML=O[P];Q.href="javascript:void(0)";Q.onclick=function(S){L.clickDom(S)};G+=Q.offsetWidth;if(G>H.offsetWidth){K.insertBefore(Base.domCreat("br"),Q);G=Q.offsetWidth}}var R=K.appendChild(Base.domCreat("div"));R.className="clear";A=Math.floor(K.offsetHeight/H.offsetHeight)};
	this.clickDom=function(P){var O=Base.getSrcDom(P);if(!O.innerHTML){return}if(Base.getSrcDom(P).tagName.toLowerCase()=="span"){$("keyword").value=Base.getSrcDom(P).parentNode.innerHTML.stripTags()}else{$("keyword").value=O.innerHTML.stripTags()}maxSearchBase.searchWoooord()};
	this.cloneDom=function(){H.appendChild(K.cloneNode(true))};
	this.startScroll=function(){C=window.setInterval(function(){L.ScrollAdd()},D)};
	this.stopScroll=function(){window.clearInterval(C);C=null};
	this.stopScrInner=function(){window.clearTimeout(J);J=null};
	this.clearDom=function(){H.innerHTML="";H.scrollTop=0;
	this.stopScroll();
	this.stopScrInner();H.onmouseover=null;H.onmouseout=null};
	this.ScrollAdd=function(){if(H.scrollTop+M>=E*F){H.scrollTop=E*F;E++;
	if(E>A){E=1;H.scrollTop=0}return}H.scrollTop+=M;J=window.setTimeout(function(){L.ScrollAdd()},20)};
	this.resetDom=function(O){this.stopScroll();
	this.stopScrInner();H.scrollTop=0;H.onmouseover=null;H.onmouseout=null;
	if(!O||!Base.isArray(O)){O=[]}this.createDom(O);
	this.cloneDom();
	this.startScroll();
	this.domOver()};
	this.init=function(){this.createDom(I);
	this.cloneDom();
	this.startScroll();
	this.domOver()};
	this.domOver=function(){H.onmouseover=function(){L.stopScroll()};H.onmouseout=function(){if(C){return}L.startScroll()}};
	this.init()}window.onload=function(){};window.onresize=function(){maxSearchBase.setIframeUI();if($("moreConMain").style.display==""){$("moreConMain").style.width=Base.getView().w+"px";var B=parseInt(Base.getView().w*0.7);var A=parseInt((Base.getView().w-B)/2);
	$("moreConMainUp").style.width=B+"px";
	$("moreConMainUp").style.left=A+"px";
	$("moreConMainUp").style.display="";
	$("moreConMainUp").style.top=80+"px";
	$("moreBg1").style.width=B+22+"px";
	$("moreBg1").style.height=Base.getDomWH("moreConMainUp").h+22+"px";
	$("moreBg1").style.left=A-11+"px";
	$("moreBg1").style.top=69+"px"}};document.onkeydown=function(A){var A=A?A:window.event;if(A.keyCode=="13"){if($("keyword").value==""){return}maxSearchBase.searchWoooord()}};maxSearchBase.init=function(){
		var G,A,E,F;maxSearch.defaults.language=maxSearchBase.getNavigatorLan();maxSearchBase.baseLang();
		if(document.location.href.indexOf("?")>-1){var B=document.location.href.split("?")[1];
		var D=B.split("&");
		for(var C=0;C<D.length;C++){if(D[C].indexOf("lan=")>-1){G=D[C].split("=")[1]}if(D[C].indexOf("type=")>-1){E=D[C].split("=")[1]}if(D[C].indexOf("q=")>-1){A=D[C].split("=")[1]}}if(G){if(G=="zh-cn"||G=="fr-fr"||G=="en-us"){maxSearch.langCode=G;Cookie.setCookie("userLan",G,Cookie.getExpDate(200000,23,33))}}if(E){for(var C=0;C<maxSearch.defaults.order[maxSearch.langCode].length;C++){if(maxSearch.defaults.order[maxSearch.langCode][C]==E){maxSearch.defaults.firstShow[maxSearch.langCode]={title:E,item:0};F=true}}if(!F){maxSearch.defaults.firstShow[maxSearch.langCode]={title:"prefer",item:0}}}if(A!=""&&!!A){$("keyword").value=decodeURIComponent(A.replace(/\+/g,"%20"))}else{$("noteWrapper").style.display="";
		$("iframeDom").setAttribute("cuIframe","noSrc");
		$("keyword").focus()}}else{$("noteWrapper").style.display="";
		$("iframeDom").setAttribute("cuIframe","noSrc");
		$("keyword").focus()}maxSearchBase.readPreferCookie();maxSearchBase.firstGetCookieCreatDom();
		nevTit=new titleCreate("titleMenu",maxSearch.defaults.order[maxSearch.langCode],maxSearch.data[maxSearch.langCode]);
		navPrefer=new preferConfig("preferList","searchListAll",maxSearch.data[maxSearch.langCode]);
		maxSearchBase.setIframeUI();maxSearchBase.WebLan(maxSearch.langCode);
		$("perConfigCon").onselectstart=function(){return false}};window.onerror=function(){return true};