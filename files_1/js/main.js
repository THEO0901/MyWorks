$(document).ready(function(){

// 首页导航下拉列表
	var num;
	$('.nav li[id]').hover(function(){
		/*选中效果*/
		$(this).removeClass().addClass('nav-act');
        /*下拉框出现*/
		var Obj = $(this).attr('id');
		num = Obj.substring(3,Obj.length);
		$('#box-'+num).slideDown(300);
	},function(){
		/*取消选中效果*/
        $(this).removeClass();
        /*下拉框消失*/
        $('#box-'+num).hide();
    });
    $('.drop-down>ul').hover(function () {
    	/*保持选中效果*/
        $('#li-'+num).removeClass().addClass('nav-act');
        $(this).show();
    },function () {
    	$(this).slideUp(200);
        $('#li-'+num).removeClass();
    });

// 首页图片新闻
    function banner () {
        var index=0; 
        var liWidth=$(".banner-img").find("li").width();
        var imgPos=$(".banner-img").find("li");

        var cloneOne=imgPos.first().clone();
        $(".banner-img").append(cloneOne);

        var liLength=$(".banner-img").find("li").length;
        $(".banner-img").width(liLength*liWidth)

        // 定时器
        var timer=0;
        var interval=4000;      // 时间间隔
        function setTime() {
            timer=setInterval(function(){
                index++;
                move();
            },interval);
        }
        setTime();

        // 鼠标悬停则停止滑动
        $(".banner-img").hover(function(){
            clearInterval(timer);
        },function () {
            setTime();
        });

        // 页码按钮
        function numBtn () {
            $(".banner-num").children().eq(0).addClass("banner-on");

            $(".banner-num").children().click(function () {
                var i= $(this).index();
                index=i;
                $(".banner-img").animate({left:-index*liWidth});
                $(".banner-num").children().eq(index).addClass("banner-on").siblings().removeClass("banner-on");
            })
        }
        numBtn();

        function move() {
            if (index == liLength) {
                $(".banner-img").css({left:0});
                index=1;
            }

            if (index == -1) {
                $(".banner-img").css({left:-liWidth*(liLength-1)});
                index=liLength-2;
            }

            $(".banner-img").stop(true).animate({
                left:-index*liWidth
            });

            if (index == liLength-1) {
                $(".banner-num").children().eq(0).addClass("banner-on").siblings().removeClass("banner-on");
            }else{
                $(".banner-num").children().eq(index).addClass("banner-on").siblings().removeClass("banner-on");
            }
        }
    }
    banner ();

// 首页日程表
    function moveCalender(){  //1000为移动速度
        $(".calendar-box").animate({top:"-75px"},1000,"linear",function(){  
            $(this).css({top:"0px"});  
            $(this).children("li").first().remove().clone(true).appendTo(".calendar-box");  
        });  
    }  
    var startCalender=setInterval(moveCalender,3000);  //3000为停留时间
    $("#calendar").hover(function () {  
        clearInterval(startCalender);  
    }, function () {  
        startCalender=setInterval(moveCalender,3000);  
    });

// 列表页目录收放
    // 点击收放菜单
    $('.menu-list li>a').click(function(){
        var click = $(this).hasClass("click");
        $(this).closest(".menu-item").show();

        if (click) {
            $(this).siblings().slideUp();
            $(this).removeClass('click');
            $(this).children().removeClass('span');
        } else {
            $(this).siblings().slideDown();
            $(this).children().addClass('span');
            $(this).addClass('click');
            $(this).parent().siblings().children().removeClass('click');
        }
    });
    // js模拟点击菜单时，使隐藏的菜单显现
    $('.menu-list-second li>a').click(function () {
        $(this).parent().parent().slideDown();
    });

// 接受参数自动打开目录
    var urlID = getUrlParam("Itemid");
    findMenu(urlID);

    // 根据ID找到对应目录
    function findMenu(urlID) {
        // idList为id和栏目的清单
        var idList = new Array();
            idList["2372"] = "学院新闻";
            idList["2373"] = "通知公告";
            idList["2273"] = "教科研动态";
            idList["2306"] = "学生风采";
            idList["2317"] = "信息公开";

            idList["350"] = "学院概况";
            idList["2247"] = "学院简介";
            idList["2246"] = "历史沿革";
            idList["352"] = "师资队伍";
            idList["2245"] = "师资概况";
            idList["348"] = "教授博士";
            idList["2248"] = "机构设置";
            idList["2249"] = "现任领导";

            idList["351"] = "党建工作";
            idList["2250"] = "组织机构";
            idList["2251"] = "党委班子";
            idList["2252"] = "学院工会";
            idList["2253"] = "党支部设置";
            idList["2254"] = "制度建设";
            idList["2255"] = "党员教育";
            idList["2198"] = "党员发展";

            idList["353"] = "教学工作";
            idList["2256"] = "专业设置";
            idList["2257"] = "专业设置简介";
            idList["398"] = "物理学专业";
            idList["399"] = "机械设计制造及其自动化专业";
            idList["400"] = "自动化专业";
            idList["401"] = "电子信息科学与技术专业";
            idList["402"] = "车辆工程专业";
            idList["2258"] = "交通运输专业";
            idList["2259"] = "课程建设";
            idList["2260"] = "省级精品课程";
            idList["2261"] = "校级精品课程";
            idList["2262"] = "质量工程";
            idList["2263"] = "教学团队";
            idList["2264"] = "质量工程项目";
            idList["2265"] = "教育教学改革";
            idList["2266"] = "创新竞赛";
            idList["2267"] = "大学生创新创业训练项目";
            idList["2268"] = "攀登计划项目";
            idList["22669"] = "学科竞赛成果";
            idList["2270"] = "挑战杯";
            idList["2271"] = "学生考研";
            idList["2272"] = "教学安排";

            idList["354"] = "科学研究";
            idList["2273"] = "科研概况";
            idList["2274"] = "学科建设";
            idList["2275"] = "平台项目";
            idList["2276"] = "科研平台";
            idList["2277"] = "科研项目";
            idList["2278"] = "成果交流";
            idList["2279"] = "科研成果";
            idList["2280"] = "学术交流";
            idList["2281"] = "科研管理";

            idList["2282"] = "实验实践";            
            idList["2283"] = "中心概况";
            idList["2284"] = "实验教学";
            idList["2285"] = "实验管理";
            idList["2286"] = "实验示范中心";
            idList["2287"] = "实践基地";

            idList["355"] = "团学工作";
            idList["2288"] = "学生组织";
            idList["2289"] = "学院团委";
            idList["2290"] = "学生会";
            idList["2291"] = "学生社团";
            idList["2292"] = "级委会";
            idList["2293"] = "管理服务";
            idList["2294"] = "学生工作流程";
            idList["2295"] = "学生管理制度";
            idList["2296"] = "学生工作分工";
            idList["2297"] = "资料下载";
            idList["2298"] = "班团建设";
            idList["2299"] = "学风建设";
            idList["2300"] = "先进集体";
            idList["2301"] = "团日活动";
            idList["2302"] = "助学工作";
            idList["2303"] = "助学政策";
            idList["2304"] = "助学项目";
            idList["2305"] = "学生受助情况";
            idList["2306"] = "学子风采";

            idList["2307"] = "招生就业";
            idList["2308"] = "招生信息";
            idList["2309"] = "就业指导";
            idList["2310"] = "就业信息";
            idList["2311"] = "技能证书";           

            idList["2312"] = "社会服务";
            idList["2313"] = "校企合作";
            idList["356"] = "成教工作";
            idList["2314"] = "驾驶培训";
            idList["2315"] = "校友风采";

        for (var i = idList.length - 1; i >= 0; i--) {
            if (i == urlID) {
                var idNow = idList[i];
            }
        };
        var idBox = new Array();
        $('.menu-list a').each(function () {
            var arr = $(this).text()
            idBox.push(arr);
        });
        for(var i=0;i<idBox.length;i++){
            if(idBox[i] == idNow){
                idBox.push(i);
            }
        };
        var idNum = idBox[idBox.length-1];
        $('.menu-list a').eq(idNum).click();

        listhead(idNow);
        function listhead(idNow) {
            $(".bread").find("a").eq(1).text(idNow);
            $(".list-head").find("h1").eq(0).text(idNow);
        };
    };
});

// 封装获取url中的id的函数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}