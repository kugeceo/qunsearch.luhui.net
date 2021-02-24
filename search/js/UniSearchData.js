var UniSearch = {
    langCode: "",
    searchUrl: "",
    data: {},
    defaults: {},
    Theme: "google2011"
};
UniSearch.defaults.preferredList = {};
UniSearch.defaults.preferredList["zh-cn"] = {
    prefer: 0,
    web: "google",
    image: "google",
    news: "baidu",
    music: "baidu",
    video: "ku6",
    bt: "gougou",
    shopping: "taobao",
    answer: "baidu",
    map: "baidu",
    soft: "pconline",
    blog: "google",
    dict: "iciba"
};
UniSearch.defaults.preferredConList = {};
UniSearch.defaults.preferredConList["zh-cn"] = [{
    c: "web",
    n: "google"
},
{
    c: "web",
    n: "baidu"
},
{
    c: "web",
    n: "live"
},
{
    c: "web",
    n: "soso"
},
{
    c: "music",
    n: "baidu"
},
{
    c: "bt",
    n: "gougou"
},
{
    c: "shopping",
    n: "taobao"
}];
UniSearch.defaults.firstShow = {};
UniSearch.defaults.firstShow["zh-cn"] = {
    title: "prefer",
    item: 0
};
UniSearch.defaults.order = {};
UniSearch.defaults.order["zh-cn"] = ["prefer", "web", "music", "image", "video", "shopping", "dict", "bt", "answer", "news", "map", "soft", "blog", "more"];
UniSearch.data["zh-cn"] = {};
UniSearch.data["zh-cn"]["more"] = {};
UniSearch.data["zh-cn"]["set"] = {
    title: "[语言选择]"
};
UniSearch.data["zh-cn"]["prefer"] = {
    title: "首选",
    items: [{
        c: "web",
        n: "live"
    },
    {
        c: "web",
        n: "baidu"
    },
    {
        c: "web",
        n: "magi"
    },
    {
        c: "web",
        n: "soso"
    },
    {
        c: "music",
        n: "baidu"
    },
    {
        c: "bt",
        n: "gougou"
    },
    {
        c: "shopping",
        n: "taobao"
    }]
};
UniSearch.data["zh-cn"]["web"] = {
    title: "网页",
    items: {
        baidu: {
            title: "百度",
            url: "https://www.baidu.com/baidu?tn=luhuinet&word="
        },
        google: {
            title: "Google",
            url: "https://www.google.cn/search?hl=zh-CN&source=hp&cad=b&cad=cbv&q="
        },
        magi: {
            title: "magi",
            url: "https://magi.com/search?q={noEncode}"
        },
        lmgtfy: {
            title: "lmgtfy",
            url: "https://lmgtfy.com/?s=l&qtype=search&ovr=1&q="
        },
        live: {
            title: "Bing",
            url: "https://cn.bing.com/search?form=QBLH&filt=all&q="
        },
        chinaso: {
            title: "国搜",
            url: "https://www.chinaso.com/search/pagesearch.htm?q="
        },
        soso: {
            title: "搜狗",
            url: "https://www.sogou.com/web?query={keyword:gb2312}"
        },
        haosou: {
            title: "好搜",
            url: "https://www.haosou.com/s?ie=utf-8&shb=1&src=www.luhui.net&q="
        },
        goobe: {
            title: "goobe",
            url: "https://goobe.io/search.aspx?k="
        },
        zhongsou: {
            title: "中搜",
            url: "https://www.zhongsou.com/third.cgi?w={keyword:gb2312}&kid=&y=5&stag=1&dt=0&pt=0&utf=1"
        },
        sm: {
            title: "神马",
            url: "https://m.sm.cn/s?q={keyword:gb2312}&from=smor&tomode=advanced&safe=1&snum=0"
        },
        fofa: {
            title: "白帽汇",
            url: "https://fofa.so/result?q={keyword:gb2312}&qbase64=6bKB6Jm6&file=&file="	
        },
        searx: {
            title: "searx",
            url: "https://searx.space/?q={keyword:gb2312}&from=smor&tomode=advanced&safe=1&snum=0"	
        },
        search: {
            title: "search",
            url: "https://www.search.com/web?q={keyword:gb2312}&from=smor&tomode=advanced&safe=1&snum=0"	
        },
        looksmart: {
            title: "looksmart",
            url: "https://results.looksmart.com/serp?q={keyword:gb2312}&from=smor&tomode=advanced&safe=1&snum=0"	
        }
    }
};
UniSearch.data["zh-cn"]["image"] = {
    title: "图片",
    items: {
        google: {
            title: "Google",
            subtitle: "图片",
            url: "https://www.google.cn/search?hl=zh-CN&um=1&ie=UTF-8&tbm=isch&source=og&sa=N&tab=wi&q="
        },
        baidu: {
            title: "百度",
            subtitle: "图片",
            url: "https://image.baidu.com/search/index?tn=baiduimage&word="
        },
        sogou: {
            title: "搜狗",
            subtitle: "图片",
            url: "https://pic.sogou.com/pics?query={keyword:escape}"
        },
        lmgtfy: {
            title: "lmgtfy",
            subtitle: "图片",
            url: "https://zh.lmgtfy.app/#gsc.tab=0&gsc.q={keyword:escape}"
        },
        inmagine: {
            title: "123rf",
            subtitle: "图片",
            url: "http://www.123rf.com/%E5%85%8D%E7%89%88%E7%A8%8E%E5%9B%BE%E5%83%8F/{keyword:gb2312}.html?&sti=lyjsmxtwtvytb4c61q"
        },
        live: {
            title: "Bing",
            subtitle: "图片",
            url: "https://cn.bing.com/images/search?FORM=BIFD&q="
        },
        pixabay: {
            title: "pixabay",
            subtitle: "",
            url: "http://pixabay.com/zh/images/search/{keyword:gb2312}"
        },
        yahoo: {
            title: "yahoo",
            subtitle: "雅虎",
            url: "http://search.cn.yahoo.com/search?p={keyword}&v=image"
        },
        so: {
            title: "360",
            subtitle: "图片",
            url: "http://image.so.com/i?q={keyword:gb2312}&src=tab_www"
        }
    }
};
UniSearch.data["zh-cn"]["news"] = {
    title: "新闻",
    items: {
        baidu: {
            title: "百度",
            subtitle: "新闻",
            url: "https://news.baidu.com/ns?word={keyword:gb2312}"
        },
        sogou: {
            title: "搜狗",
            subtitle: "新闻",
            url: "https://news.sogou.com/news?query={keyword:gb2312}"
        },
        youdao: {
            title: "有道",
            url: "https://news.youdao.com/search?q={keyword}&keyfrom=web.top"
        },
        aiwen: {
            title: "爱问",
            url: "https://iask.com/n?k={keyword:gb2312}"
        }
    }
};
UniSearch.data["zh-cn"]["music"] = {
    title: "音乐",
    items: {
        baidu: {
            title: "百度",
            subtitle: "音乐",
            url: "https://mp3.baidu.com/m?f=ms&lm=-1&word={keyword:gb2312}"
        },
        sogou: {
            title: "搜狗",
            subtitle: "音乐",
            url: "https://mp3.sogou.com/music.so?query={keyword:gb2312}"
        },
        sogua: {
            title: "SoGua",
            subtitle: "音乐",
            url: "https://search.sogua.com/search.asp?key="
        },
        zhongshou: {
            title: "中搜",
            subtitle: "MP3",
            url: "https://mp3.zhongsou.com/m?w={keyword:gb2312}"
        }
    }
};
UniSearch.data["zh-cn"]["video"] = {
    title: "视频",
    items: {
        baidu: {
            title: "百度",
            subtitle: "视频",
            url: "https://video.baidu.com/v?rn=20&pn=0&db=0&s=0&fbl=1024&word={keyword:gb2312}"
        },
        Google: {
            title: "Google",
            subtitle: "视频",
            url: "https://72.14.203.106/search?q={keyword}&tbs=vid%3A1"
        },
        youku: {
            title: "优酷",
            subtitle: "视频",
            url: "https://so.youku.com/search_video/q_"
        },
        tudou: {
            title: "土豆",
            subtitle: "视频",
            url: "https://so.tudou.com/isearch.do?kw={keyword:gb2312}"
        },
        ku6: {
            title: "酷6",
            subtitle: "视频",
            url: "https://so.ku6.com/v?q="
        },
        "56": {
            title: "56",
            subtitle: "视频",
            url: "https://so.56.com/index?type=video&key={keyword:gb2312}"
        },
        "6room": {
            title: "六间房",
            subtitle: "视频",
            url: "https://6.cn/search.php?t=v&ko=1&k="
        },
        gougou: {
            title: "狗狗",
            subtitle: "视频",
            url: "https://video.gougou.com/search?id=28416&s="
        },
        OpenV: {
            title: "天线",
            subtitle: "视频",
            url: "https://www.openv.com/ls.php?t=0&x=26&y=10&q="
        }
    }
};
UniSearch.data["zh-cn"]["bt"] = {
    title: "磁力",
    items: {
        gougou: {
            title: "迅雷",
            subtitle: "thunder",
            url: "https://www.baidu.com/baidu?tn=luhuinet&word=thunder:// "
        },
        Verycd: {
            title: "电驴Verycd",
            url: "https://www.baidu.com/baidu?tn=luhuinet&word=ed2k://|file| "
        },
        bing: {
            title: "必应",
            subtitle: "",
            url: "https://www.bing.com/search?q=magnet:?xt=urn:btih: "
        },
        baiduxt: {
            title: "百度",
            url: "https://www.baidu.com/baidu?tn=luhuinet&word=magnet:?xt=urn:btih: "
        },
        qqdl: {
            title: "旋风链接",
            url: "https://www.baidu.com/baidu?tn=luhuinet&word=qqdl:// "
        },
        360: {
            title: "奇虎360",
            url: "https://www.so.com/index.php?a=index&ie=utf-8&shb=1&src=www.luhui.net&q=magnet:?xt=urn:btih: "
        },
        sogou: {
            title: "搜",
            subtitle: "狗",
            url: "https://www.sogou.com/web?query=magnet:?xt=urn:btih: "
		},
        sm: {
            title: "神马",
            url: "https://m.sm.cn/s?q=magnet:?xt=urn:btih: {keyword:gb2312}&from=smor&tomode=advanced&safe=1&snum=0"
		},
        goobe: {
            title: "goobe",
            url: "https://goobe.io/search.aspx?k=magnet:?xt=urn:btih: {keyword:gb2312}"
		},
        chinaso: {
            title: "国搜",
            url: "https://www.chinaso.com/search/pagesearch.htm?q=magnet:?xt=urn:btih: {keyword:gb2312}"
		},
        lmgtfy: {
            title: "lmgtfy",
            url: "https://lmgtfy.com/?s=l&qtype=search&ovr=1&q=magnet:?xt=urn:btih: {keyword:gb2312}"
		},
        google: {
            title: "google谷歌",
            url: "https://www.google.cn/search?hl=zh-CN&source=hp&cad=b&cad=cbv&q=magnet:?xt=urn:btih: {keyword:gb2312}"
        }
    }
};
UniSearch.data["zh-cn"]["shopping"] = {
    title: "购物",
    items: {
        taobao: {
            title: "淘宝",
            subtitle: "购物",
            url: "https://ai.taobao.com/search/index.htm?key={keyword:gb2312}&pid=mm_31320626_0_0&union_lens=recoveryid%3A201_11.11.105.189_5728_1614085897205%3Bprepvid%3A201_11.11.105.189_5728_1614085897205"
        },
        dangdang: {
            title: "当当",
            subtitle: "购物",
            url: "https://search.dangdang.com/search.aspx?key={keyword:gb2312}"
        },
        "360buy": {
            title: "京东商城",
            subtitle: "购物",
            url: "https://Union.360buy.com/SearchRedirect.aspx?Union_Id=197&keyword={keyword:gb2312}"
        },
        "etao": {
            title: "一淘网",
            subtitle: "",
            url: "https://www.etao.com/cjfl/flash.htm?spm=a231o.13503973.1998559106.1.d89c68edoGdFEz&pid=mm_31320626_3466227_58448586&union_lens=recoveryid%3A201_11.224.245.240_89359_1614144716134%3Bprepvid%3A201_11.224.245.240_89359_1614144716134#{keyword:gb2312}"
        },
        "tmall": {
            title: "天猫",
            subtitle: "商城",
            url: "https://www.tmall.com/?ali_trackid=2:mm_31320626_0_0:1614144796_153_313452492&union_lens=recoveryid:201_11.224.245.240_89359_1614144716134;prepvid:201_11.224.245.240_89359_1614144716134&spm=0.0.0.0.0_0.0.0.0&bxsign=tbknpsfE2t5pBml0fh95/kgF3pxUQZk22Z0nVfxpE9m3Eq/sxoH4kx5OfuYullTDIQr5PCISjZeKRPPvAIOLihfW4KUUJo5YIMLJTh2wn6AfoU={keyword:gb2312}"
        },
        amazon: {
            title: "卓越",
            subtitle: "购物",
            url: "https://www.amazon.cn/s/ref=nb_ss?url=search-alias%3Daps&keywords={keyword}&searchKind=keyword"
        },
        tianyancha: {
            title: "天眼",
            subtitle: "查",
            url: "https://www.tianyancha.com/search?key={keyword}"
        },
        google: {
            title: "Google",
            subtitle: "购物",
            url: "https://www.google.cn/products?q="
        }
    }
};
UniSearch.data["zh-cn"]["answer"] = {
    title: "文档",
    items: {
        baidu: {
            title: "百度知道",
            url: "https://zhidao.baidu.com/q?word={keyword:gb2312}&ct=17&pn=0&tn=ikaslist&rn=10"
        },
        baike: {
            title: "百度百科",
            url: "https://baike.baidu.com/w?ct=17&lm=0&tn=baiduWikiSearch&pn=0&rn=10&word={keyword:gb2312}&submit=search"
        },
        jiumodiary: {
            title: "鸠摩",
            url: "https://www.jiumodiary.com/?SearchButton="
        },
        sina: {
            title: "新浪爱问",
            url: "https://iask.sina.com.cn/search_engine/search_knowledge_engine.php?key={keyword:gb2312}&classid=0&title=ttt&gjss=0&x=29&y=9"
        },
        qihoo: {
            title: "奇虎",
            url: "https://www.qihoo.com/wenda.php?kw={keyword:gb2312}&ff=1&do=search&noq=q&src=nindex"
        }
    }
};
UniSearch.data["zh-cn"]["map"] = {
    title: "地图",
    items: {
        baidu: {
            title: "百度地图",
            url: "https://map.baidu.com/#word={keyword:gb2312}&ct=10"
        },
        google: {
            title: "谷歌地图",
            url: "https://maps.google.com/maps?q="
        },
        sogou: {
            title: "搜狗地图",
            url: "https://map.sogou.com/#c=11944000,4152000,4&city=%u5168%u56FD&lq={keyword}&page=1"
        }
    }
};
UniSearch.data["zh-cn"]["soft"] = {
    title: "软件",
    items: {
        github: {
            title: "github",
            subtitle: "",
            url: "https://www.baidu.com/baidu?tn=luhuinet&word=site:github.com {keyword:gb2312}"
        },
		pconline: {
            title: "太平洋",
            subtitle: "软件",
            url: "https://dl.pconline.com.cn/search.jsp?PubDate=0&DLTypeId=1&SearchType=1&submit.x=20&submit.y=14&keyword={keyword:gb2312}"
        },
        onlinedown: {
            title: "华军软件园",
            subtitle: "软件",
            url: "https://search.newhua.com/search.asp?Keyword={keyword:gb2312}"
        },
        skycn: {
            title: "天空",
            subtitle: "软件",
            url: "https://www.skycn.com/search.php?ss_name={keyword:gb2312}"
        },
        mydrivers: {
            title: "驱动之家",
            subtitle: "软件",
            url: "https://so.mydrivers.com/drivers.aspx?q={keyword:gb2312}"
        }
    }
};
UniSearch.data["zh-cn"]["blog"] = {
    title: "人文",
    items: {
		google: {
            title: "Google",
            subtitle: "博客",
            url: "https://www.google.com/search?hl=zh-CN&ie=UTF-8&lr=&tbm=blg&q={keyword:gb2312}"
        },
        yodao: {
            title: "有道",
            subtitle: "博客",
            url: "https://blog.yodao.com/search?q={keyword:gb2312}"
        },
        baidu: {
            title: "百度",
            subtitle: "博客",
            url: "https://blogsearch.baidu.com/s?wd={keyword:gb2312}"
        },
		sogou: {
            title: "搜狗",
            subtitle: "博客",
            url: "https://blogsearch.sogou.com/blog?query={keyword:gb2312}"
        }
    }
};
UniSearch.data["zh-cn"]["dict"] = {
    title: "词典",
    items: {
        iciba: {
            title: "爱词霸",
            url: "https://www.iciba.com/"
        },
        zdic: {
            title: "汉典",
            url: "https://www.zdic.net/search/?q={keyword}"
        },
        yodao: {
            title: "有道",
            subtitle: "海量词典",
            url: "https://dict.yodao.com/search?q={keyword}"
        },
        nciku: {
            title: "N词酷",
            url: "https://www.nciku.com/search/all/"
        },
        dictcn: {
            title: "海词",
            url: "https://www.dict.cn/search/?q={keyword:gb2312}"
        }
    }
};
UniSearch.defaults.firstShow["en-us"] = {
    title: "prefer",
    item: 0
};
UniSearch.defaults.preferredList["en-us"] = {
    prefer: 0,
    web: "google",
    image: "google",
    software: "Brothersoft",
    news: "google",
    misc: "google_groups",
    blog: "google"
};
UniSearch.defaults.order["en-us"] = ["prefer", "web", "misc", "image", "software", "blog", "set"];
UniSearch.defaults.preferredConList["en-us"] = [{
    c: "web",
    n: "google"
},
{
    c: "image",
    n: "google"
},
{
    c: "misc",
    n: "google_groups"
}];
UniSearch.data["en-us"] = {};
UniSearch.data["en-us"]["set"] = {
    title: "Language"
};
UniSearch.data["en-us"]["prefer"] = {
    title: "Prefer",
    items: [{
        c: "web",
        n: "google"
    },
    {
        c: "image",
        n: "google"
    },
    {
        c: "misc",
        n: "amazon"
    }]
};
UniSearch.data["en-us"]["web"] = {
    title: "Web",
    items: {
        google: {
            title: "Google",
            url: "https://www.google.com/search?hl=en-US&source=hp&cad=b&cad=cbv&q="
        },
        yahoo: {
            title: "Yahoo!",
            url: "https://search.yahoo.com/search?ei=utf-8&p={keyword}"
        },
        ask: {
            title: "Ask.com",
            url: "https://www.ask.com/web?q={keyword}"
        },
        live: {
            title: "Live Search",
            url: "https://search.live.com/results.aspx?q={keyword}"
        },
        gigablast: {
            title: "Gigablast",
            url: "https://www.gigablast.com/search?q={keyword}"
        }
    }
};
UniSearch.data["en-us"]["image"] = {
    title: "Images",
    items: {
        google: {
            title: "Google",
            subtitle: " Images",
            url: "https://www.google.com/search?hl=en&um=1&ie=UTF-8&tbm=isch&source=og&sa=N&tab=wi&q={keyword}"
        },
        yahoo: {
            title: "Yahoo!",
            subtitle: " Images",
            url: "https://images.search.yahoo.com/search/images?ei=UTF-8&p={keyword}"
        },
        ask: {
            title: "Ask.com",
            subtitle: " Images",
            url: "https://images.ask.com/pictures?q={keyword}&qsrc=2072&tool=img"
        },
        live: {
            title: "Live Search",
            subtitle: " Images",
            url: "https://search.live.com/images/results.aspx?q={keyword}&FORM=BIRE"
        },
        flickr: {
            title: "Flickr",
            url: "https://www.flickr.com/search/?q={keyword}"
        },
        picsearch: {
            title: "PicSearch",
            url: "https://www.picsearch.com/search.cgi?q={keyword}"
        }
    }
};
UniSearch.data["en-us"]["news"] = {
    title: "News",
    items: {
        google: {
            title: "Google",
            subtitle: " News",
            url: "http://news.google.com/news?hl=en&ned=us&q={keyword}"
        },
        yahoo: {
            title: "Yahoo!",
            subtitle: " News",
            url: "http://news.search.yahoo.com/news/search?p={keyword}"
        },
        live: {
            title: "Live Search",
            subtitle: " News",
            url: "http://search.live.com/news/results.aspx?q={keyword}&FORM=BNRE"
        },
        daypop: {
            title: "Daypop",
            subtitle: " News",
            url: "http://www.daypop.com/search?q={keyword}&t=n"
        },
        alltheweb: {
            title: "AllTheWeb",
            subtitle: " News",
            url: "http://www.alltheweb.com/search?cat=news&cs=utf8&q={keyword}&rys=0&itag=crv&_sb_lang=any"
        },
        altavista: {
            title: "AltaVista",
            subtitle: " News",
            url: "http://www.altavista.com/news/results?q={keyword}&nc=0&nr=0&nd=2"
        }
    }
};
UniSearch.data["en-us"]["misc"] = {
    title: "Misc.",
    items: {
        google_groups: {
            title: "Google Groups",
            url: "http://groups.google.com/groups/search?q={keyword}"
        },
        google_maps: {
            title: "Google Maps",
            url: "http://maps.google.com/maps?ie=UTF-8&oe=UTF-8&hl=en&q={keyword}&z=4&om=1&um=1&sa=N&tab=wl"
        },
        amazon: {
            title: "Amazon",
            url: "http://www.amazon.com/gp/search?ie=UTF8&keywords={keyword}&index=blended&linkCode=ur2&camp=1789&creative=9325"
        },
        ebay: {
            title: "eBay",
            url: "http://shop.ebay.com/items/_W0QQ_nkwZ{keyword}QQ_armrsZ1QQ_fromZR3QQ_mdoZQQ_sopZ1"
        },
        youtube: {
            title: "YouTube",
            url: "http://www.youtube.com/results?search_query={keyword}"
        },
        yahoo: {
            title: "Yahoo! Answers",
            subtitle: "",
            url: "http://answers.yahoo.com/search/search_result;_ylt=AlnxKjDWkwMepoT1FRXn2tgjzKIX?p={keyword}"
        }
    }
};
UniSearch.data["en-us"]["software"] = {
    title: "software",
    items: {
        Brothersoft: {
            title: "Brothersoft",
            url: "http://maxthonsearch.brothersoft.com/home.php?act=search_home.index&keyword={keyword}"
        },
        softpedia: {
            title: "Softpedia",
            url: "http://www.softpedia.com/dyn-search.php?search_term={keyword}"
        }
    }
};
UniSearch.data["en-us"]["blog"] = {
    title: "Blog",
    items: {
        google: {
            title: "Google",
            subtitle: " Blogs",
            url: "http://blogsearch.google.com/blogsearch?ie=UTF8&oe=UTF-8&hl=en&q={keyword}&om=1&z=4&tab=lb"
        },
        ask: {
            title: "Ask.com",
            subtitle: " Blogs",
            url: "http://www.ask.com/blogsearch?q={keyword}"
        },
        technorati: {
            title: "Technorati",
            url: "http://technorati.com/search/{keyword}"
        }
    }
};
UniSearch.data["en-us"]["reference"] = {
    title: "Reference",
    items: {
        dictionary: {
            title: "Dictionary.com",
            url: "http://dictionary.reference.com/browse/{keyword}"
        },
        webster: {
            title: "Merriam-Webster",
            url: "http://www.webster.com/dictionary/{keyword}"
        },
        wikipedia: {
            title: "Wikipedia",
            url: "http://www.wikipedia.org/w/wiki.phtml?search={keyword}"
        },
        encarta: {
            title: "Encarta",
            url: "http://encarta.msn.com/encnet/refpages/search.aspx?q={keyword}"
        },
        britannica: {
            title: "Britannica",
            url: "http://www.britannica.com/search?query={keyword}"
        },
        infomine: {
            title: "Infomine",
            url: "http://infomine.ucr.edu/cgi-bin/canned_search?query={keyword}"
        }
    }
};
UniSearch.defaults.firstShow["fr-fr"] = {
    title: "prefer",
    item: 0
};
UniSearch.defaults.preferredList["fr-fr"] = {
    prefer: 0,
    web: "google",
    image: "google",
    news: "google",
    misc: "google_groups",
    blog: "google",
    reference: "dictionary"
};
UniSearch.defaults.order["fr-fr"] = ["prefer", "web", "news", "image", "blog", "reference", "misc", "set"];
UniSearch.defaults.preferredConList["fr-fr"] = [{
    c: "web",
    n: "google"
},
{
    c: "image",
    n: "google"
},
{
    c: "news",
    n: "google"
}];
UniSearch.data["fr-fr"] = {};
UniSearch.data["fr-fr"]["prefer"] = {
    title: "Préféré",
    items: [{
        c: "web",
        n: "google"
    },
    {
        c: "image",
        n: "google"
    },
    {
        c: "news",
        n: "google"
    }]
};
UniSearch.data["fr-fr"]["set"] = {
    title: "Langue"
};
UniSearch.data["fr-fr"]["web"] = {
    title: "Web",
    items: {
        google: {
            title: "Google",
            url: "http://www.google.com/search?hl=fr&source=hp&cad=b&cad=cbv&q={keyword}"
        },
        yahoo: {
            title: "Yahoo!",
            url: "http://fr.search.yahoo.com/search?ei=utf-8&p={keyword}"
        },
        ask: {
            title: "Ask.com",
            url: "http://fr.ask.com/web?q={keyword}"
        },
        live: {
            title: "Live Search",
            url: "http://search.live.com/results.aspx?q={keyword}"
        },
        exalead: {
            title: "Exalead",
            url: "http://www.exalead.fr/search/results?q={keyword}&%24mode=allweb"
        },
        voila: {
            title: "Voila",
            url: "http://search.ke.voila.fr/S/voila?rtype=kw&rdata={keyword}&profil=voila"
        }
    }
};
UniSearch.data["fr-fr"]["image"] = {
    title: "Images",
    items: {
        google: {
            title: "Google",
            subtitle: " Images",
            url: "http://www.google.com/search?hl=fr&um=1&ie=UTF-8&tbm=isch&source=og&sa=N&tab=wi&q={keyword}"
        },
        yahoo: {
            title: "Yahoo!",
            subtitle: " Images",
            url: "http://fr.search.yahoo.com/search/images?ei=UTF-8&p={keyword}"
        },
        ask: {
            title: "Ask.com",
            subtitle: " Images",
            url: "http://fr.ask.com/pictures?q={keyword}&qsrc=2072&tool=img"
        },
        live: {
            title: "Live Search",
            subtitle: " Images",
            url: "http://search.live.com/images/results.aspx?q={keyword}&FORM=BIRE"
        },
        flickr: {
            title: "Flickr",
            url: "http://www.flickr.com/search/?q={keyword}"
        },
        picsearch: {
            title: "PicSearch",
            url: "http://www.picsearch.fr/search.cgi?q={keyword}"
        }
    }
};
UniSearch.data["fr-fr"]["news"] = {
    title: "Nouvelles",
    items: {
        google: {
            title: "Google",
            subtitle: " News",
            url: "http://news.google.fr/news?hl=fr&ned=fr&q={keyword}"
        },
        yahoo: {
            title: "Yahoo!",
            subtitle: " News",
            url: "http://fr.news.search.yahoo.com/news/search?p={keyword}"
        },
        live: {
            title: "Live Search",
            subtitle: " News",
            url: "http://search.live.com/news/results.aspx?q={keyword}&FORM=BNRE"
        },
        alltheweb: {
            title: "AllTheWeb",
            subtitle: " News",
            url: "http://www.alltheweb.com/search?cat=news&cs=utf8&q={keyword}&rys=0&itag=crv&_sb_lang=fr"
        },
        altavista: {
            title: "AltaVista",
            subtitle: " News",
            url: "http://www.altavista.com/news/results?q={keyword}&nc=0&nr=0&nd=2"
        }
    }
};
UniSearch.data["fr-fr"]["blog"] = {
    title: "Blog",
    items: {
        google: {
            title: "Google",
            subtitle: " Blogs",
            url: "http://blogsearch.google.fr/blogsearch?ie=UTF8&oe=UTF-8&hl=fr&q={keyword}&om=1&z=4&tab=lb"
        },
        ask: {
            title: "Ask.com",
            subtitle: " Blogs",
            url: "http://fr.ask.com/blogsearch?q={keyword}"
        },
        technorati: {
            title: "Technorati",
            url: "http://technorati.com/search/{keyword}?language=fr&authority=n"
        }
    }
};
UniSearch.data["fr-fr"]["reference"] = {
    title: "Références",
    items: {
        dictionary: {
            title: "Dictionary.com",
            url: "http://dictionary.reference.com/browse/{keyword}"
        },
        tv5: {
            title: "Dictionnaire TV5",
            url: "http://dictionnaire.tv5.org/dictionnaires.asp?Action=&param={keyword}&che=1"
        },
        alexandria: {
            title: "Dictionnaire Alexandria",
            url: "http://www.tv5.org/TV5Site/alexandria/definition.php?sl=fr&tl=fr&ok.x=0&ok.y=0&ok=OK&terme={keyword}"
        },
        wikipedia: {
            title: "Wikipédia",
            url: "http://fr.wikipedia.org/wiki/{keyword}"
        },
        encarta: {
            title: "Encarta",
            url: "http://fr.encarta.msn.com/encnet/refpages/search.aspx?q={keyword}"
        }
    }
};
UniSearch.data["fr-fr"]["misc"] = {
    title: "Divers",
    items: {
        google_groups: {
            title: "Google Groupes",
            url: "http://groups.google.fr/groups/search?q={keyword}"
        },
        google_maps: {
            title: "Google Maps",
            url: "http://maps.google.fr/maps?ie=UTF-8&oe=UTF-8&hl=fr&q={keyword}&z=4&om=1&um=1&sa=N&tab=wl"
        },
        amazon: {
            title: "Amazon",
            url: "http://www.amazon.fr/s/ref=nb_ss_gw/002-0555077-8828815?url=search-alias%3Daps&field-keywords={keyword}"
        },
        ebay: {
            title: "eBay",
            url: "http://acheter.ebay.fr/{keyword}"
        },
        youtube: {
            title: "YouTube",
            url: "http://www.youtube.com/results?search_query={keyword}"
        },
        yahoo: {
            title: "Yahoo Questions Réponses",
            subtitle: "",
            url: "http://fr.search.yahoo.com/search?&ygmasrchbtn=web+search&fr=ush-ans&p={keyword}"
        }
    }
};
