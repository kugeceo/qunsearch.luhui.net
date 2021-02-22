//**********************************************************************
// Default Values
//**********************************************************************
Search.defaults = {};

Search.defaults.langCode = "zh-cn";
Search.defaults.category = "prefered";
Search.defaults.saveHistory = 20;
Search.defaults.loadAll = 0;

Search.defaults.preferedList = {};

Search.defaults.preferedList["en-us"] = [
	{c: "web", n: "yahoo"},
	{c: "web", n: "ask"}
]

Search.defaults.preferedList["zh-cn"] = [
	{c: "web", n: "baidu"},
	{c: "web", n: "３６０"},
	{c: "web", n: "bing"}
]


//**********************************************************************
// Search Engine Lists
//**********************************************************************
Search.localeList = {};

//**********************************************************************
// English
//**********************************************************************
Search.localeList["en-us"] = {};

Search.localeList["en-us"]["web"] = {
	"title": "Web",

	"items": {
		"yahoo": { title: "Yahoo!",
			url: "https://search.yahoo.com/search?p={keyword}" },
		"ask": { title: "Ask.com",
			url: "https://www.ask.com/web?q={keyword}" },
		"live": { title: "Live Search",
			url: "https://search.live.com/results.aspx?q={keyword}" },
		"gigablast": { title: "Gigablast",
			url: "http://www.gigablast.com/search?q={keyword}" }
	}
}

Search.localeList["en-us"]["image"] = {
	"title": "Images",

	"items": {
		"yahoo": { title: "Yahoo!", subtitle: " Images",
			url: "http://images.search.yahoo.com/search/images?p={keyword}" },
		"ask": { title: "Ask.com", subtitle: " Images",
			url: "http://images.ask.com/pictures?q={keyword}" },
		"live": { title: "Live Search", subtitle: " Images",
			url: "http://search.live.com/images/results.aspx?q={keyword}&FORM=BIRE" },
		"flickr": { title: "Flickr",
			url: "http://www.flickr.com/search/?q={keyword}" },
		"picsearch": { title: "PicSearch",
			url: "http://www.picsearch.com/search.cgi?q={keyword}" }
	}
}


Search.localeList["en-us"]["news"] = {
	"title": "News",

	"items": {
		"yahoo": { title: "Yahoo!", subtitle: " News",
			url: "http://news.search.yahoo.com/news/search?p={keyword}" },
		"live": { title: "Live Search", subtitle: " News",
			url: "http://search.live.com/news/results.aspx?q={keyword}&FORM=BNRE" },
		"altavista": { title: "AltaVista", subtitle: " News",
			url: "http://www.altavista.com/news/results?q={keyword}" }
	}
}



Search.localeList["en-us"]["blog"] = {
	"title": "Blog",

	"items": {
		"ask": { title: "Ask.com", subtitle: " Blogs",
			url: "http://www.ask.com/blogsearch?q={keyword}" }
	}
}


Search.localeList["en-us"]["reference"] = {
	"title": "Reference",
	"items": {
		"dictionary": { title: "Dictionary.com",
			url: "http://dictionary.reference.com/browse/{keyword}" },
		"webster": { title: "Merriam-Webster",
			url: "http://www.webster.com/dictionary/{keyword}" },
		"wikipedia": { title: "Wikipedia",
			url: "http://www.wikipedia.org/w/wiki.phtml?search={keyword}" },
		"encarta": { title: "Encarta",
			url: "http://encarta.msn.com/encnet/refpages/search.aspx?q={keyword}" },
		"britannica": { title: "Britannica",
			url: "http://www.britannica.com/search?query={keyword}" },
		"infomine": { title: "Infomine",
			url: "http://infomine.ucr.edu/cgi-bin/canned_search?query={keyword}" }
	}

}


Search.localeList["en-us"]["misc"] = {

	"title": "Misc.",

	"items": {
		"amazon": { title: "Amazon",
			url: "http://www.amazon.com/s?field-keywords={keyword}" },
		"ebay": { title: "eBay",
			url: "http://buy.ebay.com/{keyword}" },
		"youtube": { title: "YouTube",
			url: "http://www.youtube.com/results?search_query={keyword}" }
	}

}



//**********************************************************************
// 简体中文
//**********************************************************************
Search.localeList["zh-cn"] = {};

Search.localeList["zh-cn"]["web"] = {
	"title": "网页",
	"items": {
		"baidu": { title: "百度", subtitle: "(网页)",	url: "https://www.baidu.com/baidu?tn=luhuinet&word={keyword}" },
		"bing": { title: "必应", subtitle: "(网页)",	url: "https://cn.bing.com/search?q={keyword}" },
		"３６０": { title: "３６０",			url: "https://www.so.com/s?q={keyword}" },
		"yodao": { title: "有道",			url: "https://www.yodao.com/search?q={keyword}" },
		"soso": { title: "搜搜",			url: "https://www.soso.com/q?w={keyword:gb2312}" },
		"sogou": { title: "搜狗",			url: "https://www.sogou.com/web?pid=yuzi&query={keyword:gb2312}" }

	}
}


Search.localeList["zh-cn"]["news"] = {
	"title": "新闻",
	"items": {
		"bing": { title: "必应",			url: "https://cn.bing.com/news/results.aspx?q={keyword}" },
		"360sou": { title: "360",			url: "https://news.so.com/ns?ie=utf-8&tn=news&q={keyword}" },
		"zhongshou": { title: "中搜",			url: "https://z.zhongsou.com/n?w={keyword:gb2312}" },
		"sogou": { title: "搜狗",			url: "https://news.sogou.com/news?query={keyword:gb2312}" }
	}
}


Search.localeList["zh-cn"]["images"] = {
	"title": "图像",
	"items": {
		"bing": { title: "必应", subtitle: "(图像)",	url: "https://cn.bing.com/images/results.aspx?q={keyword}" },
		"zhongshou": { title: "中搜",			url: "http://img.zhongsou.com/i?w={keyword:gb2312}" },
		"iask": { title: "爱问",			url: "https://p.iask.com/p?k={keyword:gb2312}" },
		"sogou": { title: "搜狗",			url: "http://pic.sogou.com/pics?query={keyword:gb2312}" }
	}
}


Search.localeList["zh-cn"]["music"] = {
	"title": "音乐",
	"items": {
		"baidu": { title: "百度",			url: "http://mp3.baidu.com/m?ct=134217728&word={keyword:gb2312}" },
		"zhongshou": { title: "中搜",			url: "http://mp3.zhongsou.com/musicResult.html?w={keyword}" },
		"sogou": { title: "搜狗",			url: "http://d.sogou.com/music.so?query={keyword:gb2312}" },
		"youdao": { title: "有道",			url: "http://mp3.youdao.com/search?q={keyword}" }
	}
}



Search.localeList["zh-cn"]["video"] = {
	"title": "视频",
	"items": {
		"bing": { title: "必应",			url: "http://cn.bing.com/video/results.aspx?q={keyword}" },
		"soku": { title: "搜酷",			url: "http://www.soku.com/v?keyword={keyword}" },
		"soso": { title: "搜搜",			url: "http://video.soso.com/search/?w={keyword}" }
	}
}


Search.localeList["zh-cn"]["movie"] = {
	"title": "影视",
	"items": {
		"ed2000": { title: "ED2000",			url: "http://www.ed2000.com/FileList.asp?SearchWord={keyword}" },
		"xunlei": { title: "迅雷",			url: "http://search.daquan.xunlei.com/web/search.html?keyword={keyword}" },
		"mtime": { title: "时光网",			url: "http://www.mtime.com/search/?{keyword}" },
		"shooter": { title: "射手字幕",			url: "http://shooter.cn/search/{keyword}" },
		"douban": { title: "豆瓣影评",			url: "http://www.douban.com/subject_search?search_text={keyword}" }
	}
}


Search.localeList["zh-cn"]["soft"] = {
	"title": "软件",
	"items": {
		"sina": {	title: "新浪",		url: "http://php.tech.sina.com.cn/download/d_search.php?f_name={keyword:gb2312}" },
		"pconline": {	title: "太平洋",	url: "http://ks.pconline.com.cn/download.jsp?q={keyword:gb2312}" },
		"newhua": {	title: "华军",		url: "http://search.newhua.com/search_list.php?searchname={keyword}" },
		"skycn": {	title: "天空",		url: "http://www.skycn.com/search.php?sor=00&ss_name={keyword:gb2312}" }
	}
}


Search.localeList["zh-cn"]["dict"] = {
	"title": "词典",
	"items": {
		"bing": { title: "必应",			url: "http://dict.bing.com.cn/?q={keyword}" },
		"iciba": { title: "爱词霸",			url: "http://www.iciba.com/search?s={keyword}" },
		"yodao": { title: "有道",			url: "http://dict.yodao.com/search?q={keyword}" },
		"nciku": { title: "词酷",			url: "http://www.nciku.com/search/zh/{keyword}" },
		"zdic": { title: "汉典",			url: "http://www.zdic.net/zd/search/?q={keyword}" },
		"dictcn": { title: "DICT",			url: "http://www.dict.cn/search/?q={keyword:gb2312}" }
	}
}

Search.localeList["zh-cn"]["buy"] = {
	"title": "购物",
	"items": {
		"taobao": { title: "淘宝网",			url: "http://ai.taobao.com/search?q={keyword:gb2312}&pid=mm_31320626_0_0" },
		"baidu": { title: "百度",			url: "http://gouwu.baidu.com/s?wd={keyword}" },
		"youdao": { title: "惠惠",			url: "http://www.huihui.cn/search?q={keyword}" },
		"360buy": { title: "京东商城",			url: "http://search.360buy.com/Search?keyword={keyword:gb2312}" },
		"eachnet": { title: "易趣",			url: "http://search.eachnet.com/Search?keyword={keyword}" },
		"dangdang": { title: "当当",			url: "http://searchb.dangdang.com/?key={keyword:gb2312}" },
		"amazon": { title: "卓越亚马逊",		url: "http://www.amazon.cn/search/search.asp?searchWord={keyword}" }
	}
}

Search.localeList["zh-cn"]["zhishi"] = {
	"title": "知识",
	"items": {
		"baidu": { title: "百度",			url: "http://baike.baidu.com/searchword/?word={keyword:gb2312}&pic=1" },
		"wenwen": { title: "问问",			url: "http://wenwen.soso.com/z/Search.e?sp={keyword}" },
		"wikipedia": { title: "维基百科",		url: "http://zh.wikipedia.org/wiki/Special:Search?search={keyword}" },
		"iask": { title: "爱问",			url: "http://iask.sina.com.cn/search_engine/search_knowledge_engine.php?key={keyword:gb2312}" }
	}
}
