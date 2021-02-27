var maxSearch={langCode:"",searchUrl:"",data:{},
defaults:{},version:"v2.0.1"};
maxSearch.defaults.preferredList={};
maxSearch.defaults.preferredList["zh-cn"]={prefer:0,
web:"baidu",
image:"live",
news:"baidu",
music:"baidu",
video:"ku6",
bt:"gougou",
shopping:"taobao",
answer:"baidu",
map:"baidu",
soft:"pconline",
blog:"google",
dict:"iciba"};

maxSearch.defaults.preferredConList={};
maxSearch.defaults.preferredConList["zh-cn"]=[{c:"web",n:"google"},
{c:"web",n:"baidu"},
{c:"web",n:"live"},
{c:"web",n:"soso"},
{c:"music",n:"baidu"},
{c:"bt",n:"gougou"},
{c:"shopping",n:"taobao"}];
maxSearch.defaults.firstShow={};
maxSearch.defaults.firstShow["zh-cn"]={title:"prefer",item:0};
maxSearch.defaults.order={};
maxSearch.defaults.order["zh-cn"]=["prefer","web","music","image","video","shopping","dict","bt","answer","news","map","soft","blog","more","set"];
maxSearch.data["zh-cn"]={};
maxSearch.data["zh-cn"]["more"]={};
maxSearch.data["zh-cn"]["set"]={title:"[语言选择]"};
maxSearch.data["zh-cn"]["prefer"]={title:"首选",
items:[{c:"web",n:"baidu"},
{c:"web",n:"google"},
{c:"web",n:"youdao"},
{c:"web",n:"soso"},
{c:"music",n:"baidu"},
{c:"bt",n:"gougou"},
{c:"shopping",n:"taobao"}]};
maxSearch.data["zh-cn"]

["web"]={title:"网页",

items:{baidu:{title:"百度",
url:"https://www.baidu.com/s?tn=luhuinet&ch=2&ie=utf-8&wd="},

google:{title:"Google",
url:"https://www.google.cn/search?q="},

youdao:{title:"有道",
url:"https://www.youdao.com/search?ue=gbk&keyfrom=browser.maxthon_02&vendor=browser.maxthon_02&q={noEncode}"},

gougou:{title:"狗狗",
url:"https://web.gougou.com/search?page=1&id=28416&search="},

live:{title:"Bing 搜索",
url:"https://cn.bing.com/search?form=QBLH&filt=all&q="},

soso:{title:"搜搜",
url:"https://www.soso.com/q?w={keyword:gb2312}&unc=l400052_3&cid=union.s.wh"}}};

maxSearch.data["zh-cn"]
["image"]={title:"图片",

items:{google:{title:"Google",
subtitle:"图片",
url:"https://www.google.com.hk/images?q="},

sogou:{title:"搜狗",
subtitle:"图片",
url:"https://pic.sogou.com/pics?query={keyword:escape}&p=34030501"},

live:{title:"Bing 搜索",
subtitle:"图片",
url:"https://cn.bing.com/images/search?FORM=BIFD&q="}}};


maxSearch.data["zh-cn"]["news"]={title:"新闻",

items:{baidu:{title:"百度",
subtitle:"新闻",
url:"https://news.baidu.com/ns?word={keyword:gb2312}"},

sogou:{title:"搜狗",
subtitle:"新闻",
url:"https://news.sogou.com/news?query={keyword:gb2312}"},

youdao:{title:"有道",
url:"https://news.youdao.com/search?q={keyword}&keyfrom=web.top"},

aiwen:{title:"爱问",
url:"https://iask.com/n?k={keyword:gb2312}"}}};


maxSearch.data["zh-cn"]["music"]={title:"音乐",

items:{baidu:{title:"百度",
subtitle:"音乐",
url:"https://mp3.baidu.com/m?f=ms&&ct=134217728&lm=-1&word={keyword:gb2312}"},

sogou:{title:"搜狗",
subtitle:"音乐",
url:"https://mp3.sogou.com/music.so?query={keyword:gb2312}&p=99040205"},

sogua:{title:"SoGua",
subtitle:"音乐",
url:"https://search.sogua.com/search.asp?key="},

zhongshou:{title:"中搜",
subtitle:"MP3",
url:"https://mp3.zhongsou.com/m?w={keyword:gb2312}"}}};


maxSearch.data["zh-cn"]["video"]={title:"视频",

items:{baidu:{title:"百度",
subtitle:"视频",
url:"https://video.baidu.com/v?ct=301989888&rn=20&pn=0&db=0&s=0&fbl=1024&word={keyword:gb2312}"},

Google:{title:"Google",
subtitle:"视频",
url:"https://www.google.cn/search?q={keyword}&tbs=vid%3A1"},

youku:{title:"优酷",
subtitle:"视频",
url:"https://so.youku.com/search_video/q_"},

tudou:{title:"土豆",
subtitle:"视频",
url:"https://so.tudou.com/isearch.do?kw={keyword:gb2312}"},

ku6:{title:"酷6",
subtitle:"视频",
url:"https://so.ku6.com/v?q="},

"56":{title:"56",
subtitle:"视频",
url:"https://so.56.com/index?type=video&key={keyword:gb2312}"},

"6room":{title:"六间房",
subtitle:"视频",
url:"https://6.cn/search.php?t=v&ko=1&k="},

gougou:{title:"狗狗",
subtitle:"视频",
url:"https://video.gougou.com/search?id=28416&s="},

OpenV:{title:"天线",
subtitle:"视频",
url:"https://www.openv.com/ls.php?t=0&x=26&y=10&q="}}};

maxSearch.data["zh-cn"]
["bt"]={title:"影视",

items:{gougou:{title:"狗狗影视",
subtitle:"BT",
url:"https://www.gougou.com/search?id=28416&search="},

Verycd:{title:"Verycd",
url:"https://www.verycd.com/search/folders/"},

mtime:{title:"时光网",
url:"https://www.mtime.com/search/?"},

douban:{title:"豆瓣影评",
url:"https://www.douban.com/subject_search?cat=1002&search_text="},

shooter:{title:"射手字幕",
subtitle:"BT",
url:"https://shooter.cn/sub/?searchword="}}};


maxSearch.data["zh-cn"]
["shopping"]={title:"购物",

items:{taobao:{title:"淘宝",
subtitle:"购物",
url:"https://search8.taobao.com/browse/search_auction.htm?q={keyword:gb2312}&pid=mm_12431063_2220385_8721096&commend=all&search_type=auction&user_action=initiative&f=D9_5_1&at_topsearch=1&sort=&spercent=0"},

dangdang:{title:"当当",
subtitle:"购物",url:"https://union.dangdang.com/transfer/transfer.aspx?from=P-271135&backurl=https://search.dangdang.com/search.aspx?key={keyword:gb2312}"},

"360buy":{title:"京东商城",
subtitle:"购物",
url:"https://union.360buy.com/SearchRedirect.aspx?union_Id=197&keyword={keyword:gb2312}"},

amazon:{title:"卓越",
subtitle:"购物",
url:"https://www.amazon.cn/s/ref=nb_ss?url=search-alias%3Daps&keywords={keyword}&searchKind=keyword&source=maxthon1"},

google:{title:"Google",
subtitle:"购物",
url:"https://www.google.cn/products?q="}}};

maxSearch.data["zh-cn"]["answer"]={title:"知识问答",
items:{baidu:{title:"百度知道",
url:"https://zhidao.baidu.com/q?word={keyword:gb2312}&ct=17&pn=0&tn=ikaslist&rn=10"},

baike:{title:"百度百科",
url:"https://baike.baidu.com/w?ct=17&lm=0&tn=baiduWikiSearch&pn=0&rn=10&word={keyword:gb2312}&submit=search"},

soso:{title:"搜搜问问",
url:"https://wenwen.soso.com/z/SearchSolved.e?ch=k2&sp="},

sina:{title:"新浪爱问",
url:"https://iask.sina.com.cn/search_engine/search_knowledge_engine.php?key={keyword:gb2312}&classid=0&title=ttt&gjss=0&x=29&y=9"},

qihoo:{title:"奇虎",
url:"https://www.qihoo.com/wenda.php?kw={keyword:gb2312}&ff=1&do=search&noq=q&src=nindex"}}};


maxSearch.data["zh-cn"]
["map"]={title:"地图",

items:{baidu:{title:"百度地图",
url:"https://map.baidu.com/#word={keyword:gb2312}&ct=10"},

google:{title:"谷歌地图",
url:"https://maps.google.com/maps?q="},

sogou:{title:"搜狗地图",
url:"https://map.sogou.com/#c=11944000,4152000,4&city=%u5168%u56FD&lq={keyword}&page=1"}}};

maxSearch.data["zh-cn"]
["soft"]={title:"软件",

items:{pconline:{title:"太平洋",
subtitle:"软件",
url:"https://dl.pconline.com.cn/search.jsp?PubDate=0&DLTypeId=1&SearchType=1&submit.x=20&submit.y=14&keyword={keyword:gb2312}"},

onlinedown:{title:"华军软件园",
subtitle:"软件",
url:"https://search.newhua.com/search.asp?Keyword={keyword:gb2312}"},

skycn:{title:"天空",
subtitle:"软件",
url:"https://www.skycn.com/search.php?ss_name={keyword:gb2312}"},

mydrivers:{title:"驱动之家",subtitle:"软件",
url:"https://so.mydrivers.com/drivers.aspx?q={keyword:gb2312}"}}};


maxSearch.data["zh-cn"]
["blog"]={title:"博客",

items:{yodao:{title:"有道",
subtitle:"博客",url:"https://blog.yodao.com/search?q={keyword:gb2312}"},

baidu:{title:"百度",
subtitle:"博客",
url:"https://blogsearch.baidu.com/s?wd={keyword:gb2312}"}}};



maxSearch.data["zh-cn"]["dict"]={title:"词典",

items:{iciba:{title:"爱词霸",
url:"https://www.iciba.com/"},

zdic:{title:"汉典",
url:"https://www.zdic.net/zd/search/?q={keyword}"},

yodao:{title:"有道",
subtitle:"海量词典",
url:"https://dict.yodao.com/search?q={keyword}"},

nciku:{title:"N词酷",
url:"https://www.nciku.com/search/all/"},

dictcn:{title:"海词",
url:"https://www.dict.cn/search/?q={keyword:gb2312}"}}};

maxSearch.defaults.firstShow["en-us"]={title:"prefer",item:0};

maxSearch.defaults.preferredList["en-us"]={prefer:0,
web:"google",
image:"google",
software:"Brothersoft",
news:"google",
misc:"google_groups",
blog:"google"};

maxSearch.defaults.order["en-us"]=["prefer","web","misc","image","software","blog","set"];
maxSearch.defaults.preferredConList["en-us"]=[
{c:"web",n:"google"},
{c:"image",n:"google"},
{c:"misc",n:"google_groups"}];

maxSearch.data["en-us"]={};
maxSearch.data["en-us"]
["set"]={title:"Language"};
maxSearch.data["en-us"]
["prefer"]={title:"Prefer",
items:[{c:"web",n:"google"},
{c:"image",n:"google"},
{c:"misc",n:"amazon"}]};
maxSearch.data["en-us"]
["web"]={title:"Web",

items:{google:{title:"Google",
url:"https://www.google.com/search?q={keyword}"},

yahoo:{title:"Yahoo!",
url:"https://search.yahoo.com/search?fr=cb-max&serveUrl=luhui.net&ei=utf-8&p={keyword}"},

ask:{title:"Ask.com",
url:"https://www.ask.com/web?q={keyword}"},

live:{title:"Live Search",
url:"https://search.live.com/results.aspx?q={keyword}"},

gigablast:{title:"Gigablast",
url:"https://www.gigablast.com/search?q={keyword}"}}};


maxSearch.data["en-us"]
["image"]={title:"Images",

items:{google:{title:"Google",
subtitle:" Images",
url:"https://images.google.com/images?hl=en&q={keyword}&gbv=2"},

yahoo:{title:"Yahoo!",
subtitle:" Images",
url:"https://images.search.yahoo.com/search/images?ei=UTF-8&fr=cb-max&serveUrl=luhui.net&p={keyword}"},

ask:{title:"Ask.com",
subtitle:" Images",
url:"https://images.ask.com/pictures?q={keyword}&qsrc=2072&tool=img"},

live:{title:"Live Search",
subtitle:" Images",
url:"https://search.live.com/images/results.aspx?q={keyword}&FORM=BIRE"},

flickr:{title:"Flickr",
url:"https://www.flickr.com/search/?q={keyword}"},

picsearch:{title:"PicSearch",
url:"https://www.picsearch.com/search.cgi?q={keyword}"}}};


maxSearch.data["en-us"]
["news"]={title:"News",

items:{google:{title:"Google",
subtitle:" News",
url:"https://news.google.com/news?hl=en&ned=us&q={keyword}"},

yahoo:{title:"Yahoo!",
subtitle:" News",
url:"https://news.search.yahoo.com/news/search?p={keyword}"},

live:{title:"Live Search",
subtitle:" News",
url:"https://search.live.com/news/results.aspx?q={keyword}&FORM=BNRE"},

daypop:{title:"Daypop",
subtitle:" News",
url:"https://www.daypop.com/search?q={keyword}&t=n"},

alltheweb:{title:"AllTheWeb",
subtitle:" News",
url:"https://www.alltheweb.com/search?cat=news&cs=utf8&q={keyword}&rys=0&itag=crv&_sb_lang=any"},

altavista:{title:"AltaVista",
subtitle:" News",
url:"https://www.altavista.com/news/results?q={keyword}&nc=0&nr=0&nd=2"}}};


maxSearch.data["en-us"]
["misc"]={title:"Misc.",
items:{google_groups:{title:"Google Groups",
url:"https://groups.google.com/groups/search?q={keyword}"},

google_maps:{title:"Google Maps",
url:"https://maps.google.com/maps?ie=UTF-8&oe=UTF-8&hl=en&q={keyword}&z=4&om=1&um=1&sa=N&tab=wl"},

amazon:{title:"Amazon",
url:"https://www.amazon.com/gp/search?ie=UTF8&keywords={keyword}&tag=wwwmaxthoncom-20&index=blended&linkCode=ur2&camp=1789&creative=9325"},

ebay:{title:"eBay",
url:"https://shop.ebay.com/items/_W0QQ_nkwZ{keyword}QQ_armrsZ1QQ_fromZR3QQ_mdoZQQ_sopZ1"},

youtube:{title:"YouTube",
url:"https://www.youtube.com/results?search_query={keyword}"},

yahoo:{title:"Yahoo! Answers",
subtitle:"",
url:"https://answers.yahoo.com/search/search_result;_ylt=AlnxKjDWkwMepoT1FRXn2tgjzKIX?p={keyword}"}}};

maxSearch.data["en-us"]
["software"]={title:"software",
items:{Brothersoft:{title:"Brothersoft",
url:"https://maxthonsearch.brothersoft.com/home.php?act=search_home.index&keyword={keyword}"},

softpedia:{title:"Softpedia",
url:"https://www.softpedia.com/dyn-search.php?search_term={keyword}"}}};

maxSearch.data["en-us"]
["blog"]={title:"Blog",
items:{google:{title:"Google",

subtitle:" Blogs",
url:"https://blogsearch.google.com/blogsearch?ie=UTF8&oe=UTF-8&hl=en&q={keyword}&om=1&z=4&tab=lb"},

ask:{title:"Ask.com",
subtitle:" Blogs",
url:"https://www.ask.com/blogsearch?q={keyword}"},

technorati:{title:"Technorati",
url:"https://technorati.com/search/{keyword}"}}};


maxSearch.data["en-us"]["reference"]={title:"Reference",

items:{dictionary:{title:"Dictionary.com",
url:"https://dictionary.reference.com/browse/{keyword}"},

webster:{title:"Merriam-Webster",
url:"https://www.webster.com/dictionary/{keyword}"},

wikipedia:{title:"Wikipedia",
url:"https://www.wikipedia.org/w/wiki.phtml?search={keyword}"},

encarta:{title:"Encarta",
url:"https://encarta.msn.com/encnet/refpages/search.aspx?q={keyword}"},

britannica:{title:"Britannica",
url:"https://www.britannica.com/search?query={keyword}"},

infomine:{title:"Infomine",
url:"https://infomine.ucr.edu/cgi-bin/canned_search?query={keyword}"}}};





maxSearch.defaults.firstShow["fr-fr"]={title:"prefer",item:0};
maxSearch.defaults.preferredList["fr-fr"]={prefer:0,

web:"google",
image:"google",
news:"google",
misc:"google_groups",
blog:"google",
reference:"dictionary"};

maxSearch.defaults.order["fr-fr"]=["prefer","web","news","image","blog","reference","misc","set"];

maxSearch.defaults.preferredConList["fr-fr"]=[
{c:"web",n:"google"},
{c:"image",n:"google"},
{c:"news",n:"google"}];
maxSearch.data["fr-fr"]={};
maxSearch.data["fr-fr"]
["prefer"]={title:"Préféré",items:[
{c:"web",n:"google"},
{c:"image",n:"google"},
{c:"news",n:"google"}]};

maxSearch.data["fr-fr"]
["set"]={title:"Langue"};
maxSearch.data["fr-fr"]
["web"]={title:"Web",

items:{google:{title:"Google",
url:"https://www.google.fr/search?client=aff-maxthon&forid=1&ie=utf-8&oe=utf-8&hl=fr&q={keyword}"},

yahoo:{title:"Yahoo!",
url:"https://fr.search.yahoo.com/search?fr=ond_maxthon_off&ei=utf-8&p={keyword}"},

ask:{title:"Ask.com",
url:"https://fr.ask.com/web?q={keyword}"},

live:{title:"Live Search",
url:"https://search.live.com/results.aspx?q={keyword}"},

exalead:{title:"Exalead",
url:"https://www.exalead.fr/search/results?q={keyword}&%24mode=allweb"},

voila:{title:"Voila",
url:"https://search.ke.voila.fr/S/voila?rtype=kw&rdata={keyword}&profil=voila"}}};

maxSearch.data["fr-fr"]
["image"]={title:"Images",

items:{google:{title:"Google",
subtitle:" Images",
url:"https://images.google.fr/images?hl=fr&q={keyword}&gbv=2"},

yahoo:{title:"Yahoo!",
subtitle:" Images",
url:"https://fr.search.yahoo.com/search/images?ei=UTF-8&fr=ond_maxthon_off&p={keyword}"},

ask:{title:"Ask.com",
subtitle:" Images",
url:"https://fr.ask.com/pictures?q={keyword}&qsrc=2072&tool=img"},

live:{title:"Live Search",
subtitle:" Images",
url:"https://search.live.com/images/results.aspx?q={keyword}&FORM=BIRE"},

flickr:{title:"Flickr",
url:"https://www.flickr.com/search/?q={keyword}"},

picsearch:{title:"PicSearch",
url:"https://www.picsearch.fr/search.cgi?q={keyword}"}}};

maxSearch.data["fr-fr"]
["news"]={title:"Nouvelles",

items:{google:{title:"Google",
subtitle:" News",
url:"https://news.google.fr/news?hl=fr&ned=fr&q={keyword}"},

yahoo:{title:"Yahoo!",
subtitle:" News",
url:"https://fr.news.search.yahoo.com/news/search?p={keyword}"},

live:{title:"Live Search",
subtitle:" News",
url:"https://search.live.com/news/results.aspx?q={keyword}&FORM=BNRE"},

alltheweb:{title:"AllTheWeb",
subtitle:" News",
url:"https://www.alltheweb.com/search?cat=news&cs=utf8&q={keyword}&rys=0&itag=crv&_sb_lang=fr"},

altavista:{title:"AltaVista",
subtitle:" News",
url:"https://www.altavista.com/news/results?q={keyword}&nc=0&nr=0&nd=2"}}};

maxSearch.data["fr-fr"]
["blog"]={title:"Blog",
items:{google:{title:"Google",
subtitle:" Blogs",
url:"https://blogsearch.google.fr/blogsearch?ie=UTF8&oe=UTF-8&hl=fr&q={keyword}&om=1&z=4&tab=lb"},

ask:{title:"Ask.com",
subtitle:" Blogs",
url:"https://fr.ask.com/blogsearch?q={keyword}"},

technorati:{title:"Technorati",
url:"https://technorati.com/search/{keyword}?language=fr&authority=n"}}};


maxSearch.data["fr-fr"]
["reference"]={title:"Références",

items:{dictionary:{title:"Dictionary.com",
url:"https://dictionary.reference.com/browse/{keyword}"},

tv5:{title:"Dictionnaire TV5",
url:"https://dictionnaire.tv5.org/dictionnaires.asp?Action=&param={keyword}&che=1"},

alexandria:{title:"Dictionnaire Alexandria",
url:"https://www.tv5.org/TV5Site/alexandria/definition.php?sl=fr&tl=fr&ok.x=0&ok.y=0&ok=OK&terme={keyword}"},

wikipedia:{title:"Wikipédia",
url:"https://fr.wikipedia.org/wiki/{keyword}"},

encarta:{title:"Encarta",
url:"https://fr.encarta.msn.com/encnet/refpages/search.aspx?q={keyword}"}}};

maxSearch.data["fr-fr"]
["misc"]={title:"Divers",
items:{google_groups:{title:"Google Groupes",
url:"https://groups.google.fr/groups/search?q={keyword}"},

google_maps:{title:"Google Maps",
url:"https://maps.google.fr/maps?ie=UTF-8&oe=UTF-8&hl=fr&q={keyword}&z=4&om=1&um=1&sa=N&tab=wl"},

amazon:{title:"Amazon",
url:"https://www.amazon.fr/s/ref=nb_ss_gw/002-0555077-8828815?url=search-alias%3Daps&field-keywords={keyword}"},

ebay:{title:"eBay",
url:"https://acheter.ebay.fr/{keyword}"},

youtube:{title:"YouTube",
url:"https://www.youtube.com/results?search_query={keyword}"},

yahoo:{title:"Yahoo Questions Réponses",
subtitle:"",
url:"https://fr.answers.yahoo.com/search/search_result;_ylt=AlnxKjDWkwMepoT1FRXn2tgjzKIX?p={keyword}"}}};
var keywords=[["情人节礼物选什么","情人节礼物选什么"]];
var google_search_url="?u=情人节";
