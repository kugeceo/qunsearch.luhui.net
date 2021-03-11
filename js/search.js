function setStorage(a, b) {
    window.localStorage[a] = JSON.stringify(b)
}

function getStorage(a) {
    b = null;
    if ("undefined" !== typeof window.localStorage[a]) var b = JSON.parse(window.localStorage[a]);
    return b
}
//设置显示封装 
function setSeverShow(){
	var setSever = $('#setSever');
	setSever.show().animate({'width':'175px'},function(){
		setSever.animate({'height':'66px'},function(){
			setSever.children('p').show();
		})
	})
}
//设置按钮隐藏封装
function setSeverHide(){
	var setSever = $('#setSever');
	setSever.children('p').hide();
		setSever.animate({'width':'0px'},function(){
			setSever.animate({'height':'0px'},function(){
				setSever.hide()
			})
		})
}

function clearStorage(a) {
    window.localStorage.removeItem(a)
}
//设置iFram SRC属性封装
function setSrc(src,ofsetWidth){
	
	if (src) {
		$('#disPlay').attr('src','about:blank').css('width','0');
		var control = getStorage('control');
		if (control == 'column') {
			setTimeout(function(){$('#disPlay').attr('src',src).css('width',ofsetWidth)},10);
		}else{
			setTimeout(function(){$('#disPlay').attr('src',src).css('width',ofsetWidth+218)},10);
		}
	}else{}
}
//隐藏按钮封装
function rightSetSrc(top,showBtn,setKey){

	var control = getStorage('control');
	var ofsetWidth = $('#disPlay').outerWidth() - 1;
	if (control == 'column') {
		top.animate({'width':'0'});
		$('#control').animate({'width':'0'},function(){
			showBtn.show();
			$('#setSever').css({'width':'0px','height':'0px'}).hide();
			setKey = false;
		});
		var clearWidth = ofsetWidth+218;
		$('#disPlay').animate({'width':clearWidth});
	}else{
		top.animate({'height':'0'});
		$('#control').animate({'height':'0'},function(){
			showBtn.show();
			$('#setSever').css({'width':'0px','height':'0px'}).hide();
			setKey = false;
		});
	}
	return false;
}

$(function(){
	var ofsetWidth = $('#disPlay').outerWidth() - 1;
	var setKey = false;
	setStorage("control",'column');
	var ofsetWidth = $('#disPlay').outerWidth() - 1;
	//设置为横行菜单
	$('#setRow').click(function(){
		$('#link_h').attr('href','css/style_w.css');
		setSeverHide();
		$('#control').css({'width':'100%','height':'84px'});
		$('#disPlay').animate({'width':'100%'});
		setStorage("control",'row');
		setKey = false;
	});
	//设置纵向菜单
	$('#setColumn').click(function(){
		$('#link_h').attr('href','css/style_h.css');
		setSeverHide();
		$('#disPlay').css({'width':ofsetWidth,'paddingTop':'86px'}).animate({'paddingTop':'0'},500);
		$('#control').css({'width':'218px','height':'100%'});
		setStorage("control",'column');
		setKey = false;
	});
	//设置按钮点击
	$('.icon_btn i').bind('click',function(){
		if (setKey == false) {
			setSeverShow();
			setKey = true;
		}else{
			setSeverHide();
			setKey = false;
		}
	})

	var top = $('.top'),
		select = $('.select_left'),
		showBtn = $('#showBtn');
		//显示菜单点击判断形态进行展示 
	$('#showBtn').bind('click',function(){
		var control = getStorage('control');
		if (control == 'column') {
			top.animate({'width':'214px'});
			$('#control').animate({'width':'218px'},function(){
				showBtn.hide();
			});
			var ofsetWidth = $('#disPlay').outerWidth() - 219;
			$('#disPlay').animate({'width':ofsetWidth});
		}else{
			top.animate({'height':'84px'});
			$('#control').animate({'height':'84px'},function(){
				showBtn.hide();
			});
		}
	});
	var linkData = getStorage('linkData');
	var rightJson = {'AfirstChoice':[{info:'鲁虺',href:'http://www.luhui.net',class:'backBlue'},{info:'搜狗',href:'http://www.sogou.com'},{info:'百度',href:'http://www.baidu.com'},{info:'必应',href:'http://www.bing.com'},{info:'谷歌',href:'https://g.hancel.net'},{info:'淘宝',href:'http://www.taobao.com'}],
					 'AwebPage':[{info:'百度百科',href:'http://baike.baidu.com',class:'backBlue'},{info:'新浪',href:'http://www.sina.com.cn'},{info:'腾讯',href:'http://www.qq.com'},{info:'网易',href:'http://www.163.com'}],
					 'Amusic':[{info:'QQ音乐',href:'http://y.qq.com',class:'backBlue'},{info:'百度音乐',href:'http://music.baidu.com'},{info:'酷狗',href:'http://www.kugou.com'},{info:'虾米',href:'http://www.xiami.com'},{info:'一听',href:'http://www.1ting.com'}],
					 'Apicture':[{info:'Bing图片',href:'http://cn.bing.com/images',class:'backBlue'},{info:'素材公社',href:'http://www.tooopen.com'},{info:'昵图网',href:'http://www.nipic.com/index.html'},{info:'EasyIcon',href:'http://www.easyicon.net'},{info:'百度图片',href:'http://image.baidu.com/?tn=98050039_dg'},{info:'FindIcons',href:'http://findicons.com'},{info:'桌面天下',href:'http://www.desktx.com'},{info:'主题之家',href:'http://www.51ztzj.com'}],
					 'Avideo':[{info:'优酷',href:'http://www.youku.com',class:'backBlue'},{info:'哔哩哔哩',href:'http://www.bilibili.com'},{info:'爱奇艺',href:'http://www.iqiyi.com'},{info:'搜狐',href:'http://tv.sohu.com'},{info:'乐视',href:'http://www.le.com'},{info:'腾讯视频',href:'https://v.qq.com'},{info:'酷6',href:'http://www.ku6.com'}],
					 'Anews':[{info:'新浪新闻',href:'http://news.sina.com.cn',class:'backBlue'},{info:'中国新闻网',href:'http://www.chinanews.com'},{info:'凤凰',href:'http://www.ifeng.com'},{info:'网易新闻',href:'http://news.163.com'},{info:'环球网',href:'http://www.huanqiu.com'},{info:'澎湃',href:'http://www.thepaper.cn/'},{info:'参考消息',href:'http://www.cankaoxiaoxi.com'}],
					 'Ashopping':[{info:'淘宝',href:'https://www.taobao.com',class:'backBlue'},{info:'天猫',href:'https://www.tmall.com/?spm=a2156.1676643.a2226n0.1.nzrcRn'},{info:'唯品会',href:'http://www.vip.com/'},{info:'京东',href:'https://www.JD.com'},{info:'苏宁',href:'http://www.suning.com/'},{info:'聚划算',href:'https://ju.taobao.com/'},{info:'国美',href:'https://http://www.gome.com.cn/'}],
					 'Afile':[{info:'作文网',href:'http://www.zuowen.com',class:'backBlue'},{info:'豆丁',href:'http://www.docin.com'},{info:'论文网',href:'http://www.xzbu.com'},{info:'万方数据',href:'http://www.wanfangdata.com.cn'},{info:'MBA智库',href:'http://doc.mbalib.com'},{info:'无忧商务',href:'http://www.5ucom.com/list.html'},{info:'第一范文',href:'http://www.diyifanwen.com'},{info:'教育文摘',href:'http://www.eduzhai.net'},{info:'第一课件',href:'http://www.1kejian.com'},{info:'21世纪教育网',href:'http://www.21cnjy.com'},{info:'中国论文网',href:'http://www.lunwendata.com/'}],
					 'Anovel':[{info:'纵横中文',href:'http://www.zongheng.com',class:'backBlue'},{info:'潇湘书院',href:'http://www.xxsy.net'},{info:'小说阅读网',href:'http://www.readnovel.com'},{info:'红袖添香',href:'http://www.hongxiu.com/'},{info:'17K小说',href:'http://www.17k.com'},{info:'腾讯书城',href:'http://book.qq.com'},{info:'创世纪',href:'http://chuangshi.qq.com'},{info:'网易小说',href:'http://yuedu.163.com'},{info:'看书网',href:'http://www.kanshu.com'},{info:'3G书城',href:'http://www.3gsc.com.cn'}],
					 'AsoftWare':[{info:'西西软件',href:'http://www.cr173.com',class:'backBlue'},{info:'华军软件',href:'http://www.onlinedown.net'},{info:'ZOL软件',href:'http://xiazai.zol.com.cn'},{info:'天空下载',href:'http://www.skycn.com'},{info:'PC6下载',href:'http://www.pc6.com'},{info:'非凡软件站',href:'http://www.crsky.com'},{info:'华彩软件',href:'http://www.huacolor.com'},{info:'游民星空',href:'http://www.gamersky.com'}],
					 'Atranslate':[{info:'百度翻译',href:'http://fanyi.baidu.com',class:'backBlue'},{info:'有道翻译',href:'http://dict.youdao.com'},{info:'海词',href:'http://dict.cn'},{info:'爱词霸',href:'http://www.iciba.com'},{info:'沪江小d',href:'http://dict.hjenglish.com/jp'}],
					 'AdirectSeeding':[{info:'虎牙TV',href:'http://www.huya.com/',class:'backBlue'},{info:'战旗TV',href:'http://www.zhanqi.tv/'},{info:'熊猫TV',href:'http://www.panda.tv/all'},{info:'来疯直播',href:'http://www.laifeng.com/'},{info:'全民TV',href:'http://www.quanmin.tv/'},{info:'龙珠TV',href:'http://www.longzhu.com'},{info:'YY直播',href:'http://www.yy.com/'},{info:'触手TV',href:'http://chushou.tv/'},{info:'Twitch',href:'http://www.twitch.tv/'},{info:'网易bobo',href:'http://www.bobo.com/'},{info:'奇秀',href:'http://x.pps.tv/'}]
					};
		var defaultArr = rightJson.AfirstChoice;
		//页面加载 创建右侧菜单
		var rightHtml = '';
		var Afirst = getStorage('linkData');
		if ( Afirst&&Afirst != ''){
			for(var i = 0 ; i < Afirst.length ; i++){
				var rightLi = '<li class="" value="'+Afirst[i].href+'"><span>'+Afirst[i].info+'</span></li>';
				rightHtml+=rightLi;
			}
			$('.s_right').children('li').eq(0).after(rightHtml);
			$('.s_right').children('li').eq(1).addClass('backBlue');
			setSrc(Afirst[0].href,ofsetWidth);
		}else{
			linkData = rightJson.AfirstChoice;
			for(var i = 0 ; i < rightJson.AfirstChoice.length ; i++){
				var rightLi = '<li class="'+rightJson.AfirstChoice[i].class+'" value="'+rightJson.AfirstChoice[i].href+'"><span>'+rightJson.AfirstChoice[i].info+'</span></li>';
				rightHtml+=rightLi;
			}
			$('.s_right').children('li').eq(0).after(rightHtml);
			setSrc('http://www.baidu.com',ofsetWidth);
		}
		//右侧菜单点击
		$('.s_right').children('li').click(function(){
			var src = $(this).attr('value');
			setSrc(src,ofsetWidth);
			$('.s_right').children('li').removeClass('backBlue').eq($(this).index()).addClass('backBlue');
		});
		//左侧菜单点击
	$('.s_left').children('li').click(function(){
		$('.s_left').children('li').removeClass('action').eq($(this).index()).addClass('action');
		$('#title').text($(this).text());
		var rightHtml = '';
		var ifSrc = $(this).attr('value');
		if (ifSrc == 'AfirstChoice') {
			var linkData = getStorage('linkData');
			if (linkData) {
				for(var i = 0 ; i < linkData.length ; i++){
					var rightLi = '<li class="" value="'+linkData[i].href+'"><span>'+linkData[i].info+'</span></li>';
					rightHtml+=rightLi;
				}
				$('.s_right').children('li').eq(0).nextAll().remove();
				$('.s_right').children('li').eq(0).after(rightHtml);
				$('.s_right').children('li').eq(1).addClass('backBlue');
				setSrc(Afirst[0].href,ofsetWidth);
			}else{
				var Arr = rightJson[ifSrc];
				for(var i = 0 ; i < Arr.length ; i++){
					var rightLi = '<li class="'+Arr[i].class+'" value="'+Arr[i].href+'"><span>'+Arr[i].info+'</span></li>';
					rightHtml+=rightLi;
				}
				$('.s_right').children('li').eq(0).nextAll().remove();
				$('.s_right').children('li').eq(0).after(rightHtml);
			}
		}else{
			var Arr = rightJson[ifSrc];
			for(var i = 0 ; i < Arr.length ; i++){
				var rightLi = '<li class="'+Arr[i].class+'" value="'+Arr[i].href+'"><span>'+Arr[i].info+'</span></li>';
				rightHtml+=rightLi;
			}
			$('.s_right').children('li').eq(0).nextAll().remove();
			$('.s_right').children('li').eq(0).after(rightHtml);
		}
		var rightLi = $('.s_right').children('li');
		var oneLiSrc = rightLi.eq(1).attr('value');
		setSrc(oneLiSrc,ofsetWidth);
		var timer = null;
		//右侧菜单点击
		rightLi.click(function(){
			var src = $(this).attr('value');
			setSrc(src,ofsetWidth);
			$('.s_right').children('li').removeClass('backBlue').eq($(this).index()).addClass('backBlue');
		});
		//隐藏菜单事件冲突，必须放下面
		$('#addLink .hide').click(function(){
			showBtn.show();
			rightSetSrc(top,showBtn,setKey,ofsetWidth);
		});
	});
	//搜索框提交到ifarm
	$('#search_b').bind('click',function(){
		var question = $('#search_t').val();
		setSrc('http://www.luhui.net:70/?q='+question,ofsetWidth);
	})

	
	$('.right_ul').children('li').click(function(){
		$('#linkBox').remove();
		var sSpan = '';
		$('.right_ul').children('li').removeClass('click');
		var ArrName = $(this).attr('value');
		var currArr = rightJson[ArrName];
		for(var i = 0; i<currArr.length; i++){
			sSpan +='<span>'+currArr[i].info+'</span>';
		}
		$(this).addClass('click').after('<li id="linkBox">'+sSpan+'</li>');
		$('#linkBox').children('span').click(function(){
			if ($('.left_ul').children('li').size() >= 15) {
				alert('已经达到添加上限');
			}else{
				var add = currArr[$(this).index()];
				linkData.push(add);
				linkData = $.unique(linkData);
				var leftUlHtml = $('.left_ul').html();
				leftUlHtml += '<li><span>'+add.info+'</span><i>x</i></li>';
				$('.left_ul').html(leftUlHtml).children('li').find('i').click(function(){
					linkData.splice($(this).parent().index(),1);
					$(this).parent().remove();
				});
			}
		})
	})
	$('#sure').click(function(){
		var firstChed = $('#first').attr('class');
		if (firstChed == 'action') {
			var defHtml = '<li id="addLink"><span class="link"></span><span class="hide"></span></li>';
			for(var i = 0 ; i < linkData.length ; i++){
				var rightLi = '<li class="" value="'+linkData[i].href+'"><span>'+linkData[i].info+'</span></li>';
				defHtml+=rightLi;
			}
			$('.s_right').html(defHtml);
		}
		setStorage('linkData',$.unique(linkData));
		$('#addLink .hide').click(function(){
			showBtn.show();
			rightSetSrc(top,showBtn,setKey,ofsetWidth);
		});
		$('#addLink .link').click(function(){
		$('.sky').show();
			var current = '';
			var link = getStorage('linkData');
			if (link&&link != '') {
				for(var i=0;i<link.length;i++){
					current += '<li><span>'+link[i].info+'</span><i>x</i></li>';
				}
				$('.left_ul').html(current).children('li').find('i').click(function(){
					linkData.splice($(this).parent().index(),1);
					$(this).parent().remove();
				});
			}else{
				var Arr = rightJson.AfirstChoice;
				for(var i=0;i<Arr.length;i++){
					current += '<li><span>'+Arr[i].info+'</span><i>x</i></li>';
				}
				$('.left_ul').html(current).children('li').find('i').click(function(){
					linkData.splice($(this).parent().index(),1);
					$(this).parent().remove();
				});
			}
		})
		$('.s_right').children('li').click(function(){
			var src = $(this).attr('value');
			setSrc(src,ofsetWidth);
			$('.s_right').children('li').removeClass('backBlue').eq($(this).index()).addClass('backBlue');
		});
		$('.sky').hide();
	})
	$('#none').click(function(){
		$('.sky').hide();
	})
	$('#addLink .hide').click(function(){
		showBtn.show();
		rightSetSrc(top,showBtn,setKey,ofsetWidth);
	});
	$('#addLink .link').click(function(){
		$('.sky').show();
		var current = '';
		var link = getStorage('linkData');
		if (link) {
			for(var i=0;i<link.length;i++){
				current += '<li><span>'+link[i].info+'</span><i>x</i></li>';
			}
			$('.left_ul').html(current).children('li').find('i').click(function(){
				linkData.splice($(this).parent().index(),1);
				$(this).parent().remove();
			});
		}else{
			var Arr = rightJson.AfirstChoice;
			for(var i=0;i<Arr.length;i++){
				current += '<li><span>'+Arr[i].info+'</span><i>x</i></li>';
			}
			$('.left_ul').html(current).children('li').find('i').click(function(){
				linkData.splice($(this).parent().index(),1);
				$(this).parent().remove();
			});

		}
	})
	$('#default').click(function(){
			var current = '';
			for(var i=0;i<defaultArr.length;i++){
				current += '<li><span>'+defaultArr[i].info+'</span><i>x</i></li>';
			}
			linkData = [{info:'百度',href:'http://www.baidu.com',class:'backBlue'},{info:'搜狗',href:'http://www.sogou.com'},{info:'快搜',href:'http://www.kuaiso.com'},{info:'必应',href:'http://www.bing.com'},{info:'谷歌',href:'http://www.google.com'},{info:'淘宝',href:'http://www.taobao.com'}];
			$('.left_ul').html(current).children('li').find('i').click(function(){
				linkData.splice($(this).parent().index(),1);
				$(this).parent().remove();
			});
			
	})
})
