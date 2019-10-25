var BBIM = function (urlbb, ServerToken, initcb,beforecb) {
    // var bbim = new BBIM("ws://127.0.0.1:3002/App/",Server_Token,function(ev){console.dir(ev)});
    Object.defineProperties(this, {
        on: {
            //UnreadUpdate
            writable: false, value: function (evt, cb) { return _on(evt, cb); }
        },
        sendmsg: {
            writable: false, value: function (targetid, msg, cb) { return _sendmsg(targetid, msg, cb); }
        },
        sendmsg_new: {
            writable: false, value: function (param, cb) { return _sendmsg_new(param, cb); }
        },
        send: {
            writable: false, value: function (data) { return _send(data); }
        },
        //bbim.getHistory("946d9650-b4ec-4621-9479-65ac12d28e7a",200,function(ev){console.dir(ev)})
        getHistory: {
            writable: false, value: function (targetid, co, cb) { return _getHistory(targetid, co, cb); }
        },
        getHistory_new: {
            writable: false, value: function (param, cb) { return _getHistory_new(param, cb); }
        },
        getOrderInfo: {
            writable: false, value: function (targetid, cb) { return _getOrderInfo(targetid, cb); }
        },
        getHistoryList: {
            writable: false, value: function (param, cb) { return _getHistoryList(param, cb); }
        },
        readed: {
            writable: false, value: function (param, cb) { return _readed(param, cb); }
        },
        getNewsList:{
            writable: false, value: function (param, cb) { return _getNewsList(param, cb); }
        },
        chgpoint: {
            writable: false, value: function (param, cb) { return _chgpoint(param, cb); }
        },
        getNewsListAll: {
            writable: false, value: function (param, cb) { return _getNewsListAll(param, cb); }
        },
        getSkillList: {
            writable: false, value: function (param, cb) { return _getSkillList(param, cb); }
        },
        getGiftList: {
            writable: false, value: function (param, cb) { return _getGiftList(param, cb); }
        },
        getGiftList2: {
            writable: false, value: function (param, cb) { return _getGiftList2(param, cb); }
        },
        getPaymentList: {
            writable: false, value: function (param, cb) { return _getPaymentList(param, cb); }
        },
        sendGift: {
            writable: false, value: function (param, cb) { return _sendGift(param, cb); }
        },
        getPlayerInfo: {
            writable: false, value: function (param, cb) { return _getPlayerInfo(param, cb); }
        },
        getSkillInfo: {
            writable: false, value: function (param, cb) { return _getSkillInfo(param, cb); }
        },
        buyOrder: {
            writable: false, value: function (param, cb) { return _buyOrder(param, cb); }
        },
        buyOrderQuick: {
            writable: false, value: function (param, cb) { return _buyOrderQuick(param, cb); }
        },
        getBankInfo:{
            writable: false, value: function (param, cb) { return _getBankInfo(param, cb); }
        },
        getMyCert: {
            writable: false, value: function (param, cb) { return _getMyCert(param, cb); }
        },
        getHistoryTrace: {
            writable: false, value: function (param, cb) { return _getHistoryTrace(param, cb); }
        }, 
        getAnnouncement: {
            writable: false, value: function (param, cb) { return _getAnnouncement(param, cb); }
        },
        callphone: {
            writable: false, value: function (param, room) { return _callphone(param, room); }
        },
        setcallphonecb: {
            writable: false, value: function (cb) { return _setcallphonecb(cb); }
        },
        getmcw: {
            writable: false, value: function () { return mcwlist; }
        }, 
        setmarquee: {
            writable: false, value: function (cb) { return (marqueefn = cb); }
        }, 
        p_get: {
            writable: false, value: function (puuid, eventname, fnname, param) { return _p_get(puuid, eventname, fnname, param); }
        }
    });
    var wsUri = "wss://127.0.0.1:3002/App/";

    function _p_get(puuid, eventname, fnname, param) {
        var cb = function (s) {
           
            var obj = { detail: s }
            try {
                plus.webview._find__Window_By_UUID__(puuid).evalJS("window.dispatchEvent(new CustomEvent('" + eventname + "', " + JSON.stringify(obj) + "))")
            } catch (e) {

            }
          
        }
        try {
            eval("_" + fnname)(param, cb);
        } catch (e) {

        }
    
    }
    var RevMsg;
    var SndMsg;
    var UnreadUpdate;
    var UnreadUpdate;
    var OrderListener;
    var ReconnectListener;
    var OrderCountListener;
    var RedBagListener;
    var GetRedBagListener;
    var _readed = function (param, cb) {
        var initdata = {};
        initdata["cmd"] = "readed";
        initdata["param"] = { targetid: param.targetid, list: param.li };
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
      
      
    }
  
    var _send = function (data) {
        //try {
        //    bbws.send(JSON.stringify(data));
        //} catch (e) {
        //    bbws.send(data);
        //}
        bbws.send(JSON.stringify(data));
    }
    var _sendmsg = function (targetid, msg, cb) {
        var initdata = {};
        initdata["cmd"] = "singlechat";
        initdata["SendTo"] = targetid;
        initdata["param"] = msg;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
      
        if (cb)
            SndMsg = cb;
    }

    var sendmsg_newCB;
    var _sendmsg_new = function (param, cb) {
        var initdata = {};
        initdata["cmd"] = "singlechat";
        initdata["SendTo"] = param.targetid;
        initdata["param"] = param.msg;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }

        if (cb)
            sendmsg_newCB = cb;
    }
    var _on = function (evt, cb) {
      
        if (evt == "RevMsg") {
            RevMsg = cb;
        }
        if (evt == "OrderCount")
              OrderCountListener = cb;
        if (evt == "ReconnectListener") {
            ReconnectListener = cb;
        }
        if (evt == "OrderListener") {
            OrderListener = cb;
        }
        if (evt == "UnreadUpdate") {
            UnreadUpdate = cb;
        }
        if (evt == "RedBag_r")
            RedBagListener = cb;
        if (evt == "GetRedBag_r")
            GetRedBagListener = cb;
        
    }
  
    var getHistoryCB;
    var _getHistory_new = function (param, cb) {
        getHistoryCB = cb;
        var initdata = {};
        initdata["cmd"] = "gethistory";
        initdata["param"] = { "count": param.co, "member": param.targetid };
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }

   
    var _getHistory = function (targetid, co, cb) {
        getHistoryCB = cb;
        var initdata = {};
        initdata["cmd"] = "gethistory";
        initdata["param"] = { "count": co, "member": targetid };
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var getHistoryCB2;
    var _getHistoryList = function (param, cb) {
        getHistoryCB2 = cb;
        var initdata = {};
        initdata["cmd"] = "gethistory";
        initdata["param"] = param;// { "count": 0, "member": "" };
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }


    }
    var getOrderInfoCB;
    var _getOrderInfo = function (targetid, cb) {
        getOrderInfoCB = cb;
        var initdata = {};
        initdata["cmd"] = "getorderinfo";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
     

    }
   
    var getNewsListAllCB;
    var _getNewsListAll = function (targetid, cb) {
        getNewsListAllCB = cb;
        var initdata = {};
        initdata["cmd"] = "getNewsListAll";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var getNewsListCB;
    var _getNewsList = function (targetid, cb) {
        getNewsListCB = cb;
        var initdata = {};
        initdata["cmd"] = "getNewsList";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var chgpointCB;
    var _chgpoint = function (targetid, cb) {
        chgpointCB = cb;
        var initdata = {};
        initdata["cmd"] = "chgpoint";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var getSkillListCB;
    var _getSkillList = function (targetid, cb) {
        getSkillListCB = cb;
        var initdata = {};
        initdata["cmd"] = "getSkillList";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var getGiftListCB;
    var _getGiftList = function (targetid, cb) {
        getGiftListCB = cb;
        var initdata = {};
        initdata["cmd"] = "getGiftList";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var getGiftList2CB;
    var _getGiftList2 = function (targetid, cb) {
        getGiftList2CB = cb;
        var initdata = {};
        initdata["cmd"] = "getGiftList2";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var getPaymentListCB;
    var _getPaymentList = function (targetid, cb) {
        getPaymentListCB = cb;
        var initdata = {};
        initdata["cmd"] = "getPaymentList";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    
    var sendGiftCB;
    var _sendGift = function (targetid, cb) {
        sendGiftCB = cb;
        var initdata = {};
        initdata["cmd"] = "sendGift";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var getPlayerInfoCB;
    var _getPlayerInfo = function (targetid, cb) {
        getPlayerInfoCB = cb;
        var initdata = {};
        initdata["cmd"] = "getPlayerInfo";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var getSkillInfoCB;
    var _getSkillInfo = function (targetid, cb) {
        getSkillInfoCB = cb;
        var initdata = {};
        initdata["cmd"] = "getSkillInfo";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
  
    var buyOrderQuickCB;
    var _buyOrderQuick = function (targetid, cb) {
        console.dir("buyOrderQuick")
        buyOrderQuickCB = cb;
        var initdata = {};
        initdata["cmd"] = "buyOrderQuick";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var buyOrderCB;
    var _buyOrder = function (targetid, cb) {
        buyOrderCB = cb;
        var initdata = {};
        initdata["cmd"] = "buyOrder";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var getBankInfoCB;
    var _getBankInfo = function (targetid, cb) {
        getBankInfoCB = cb;
        var initdata = {};
        initdata["cmd"] = "getBankInfo";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var getMyCertCB;
    var _getMyCert = function (targetid, cb) {
        getMyCertCB = cb;
        var initdata = {};
        initdata["cmd"] = "getMyCert";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var getHistoryTraceCB;
    var _getHistoryTrace = function (targetid, cb) {
        getHistoryTraceCB = cb;
        var initdata = {};
        initdata["cmd"] = "getHistoryTrace";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var getAnnouncementCB;
    var _getAnnouncement = function (targetid, cb) {
        getAnnouncementCB = cb;
        var initdata = {};
        initdata["cmd"] = "getAnnouncement";
        initdata["param"] = targetid;
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }

    var callphoneCB;
    var _callphone = function (targetid,room) {
   
        var initdata = {};
        initdata["cmd"] = "callphone";
        initdata["param"] = targetid;
        if (room) {
            initdata["key"] = room;
        } else {
            initdata["key"] = "";
        }
       
        try {
            bbws.send(JSON.stringify(initdata));
        } catch (e) {

        }
    }
    var _setcallphonecb = function (cb) {
        callphoneCB = cb;
      
    }
    function onMessage(ev) {
        var cmd = JSON.parse(ev.data);
        if (cmd.cmd == "recvmsg") {
            if (RevMsg)
                RevMsg(cmd.param);
        } else if (cmd.cmd == "OrderListener") {
            if (OrderListener)
                OrderListener(cmd.param);
        } else if (cmd.cmd == "OrderCountListener") {//RedBagListener
            if (OrderCountListener)
                OrderCountListener(cmd.param);

        }
        else if (cmd.cmd == "RedBag_r") {
            if (RedBagListener)
                RedBagListener(cmd);
        } else if (cmd.cmd == "GetRedBag_r") {
            if (GetRedBagListener)
                GetRedBagListener(cmd.param);
        }else if (cmd.cmd == "UnreadUpdate") {
            if (UnreadUpdate)
                UnreadUpdate(cmd.param);
        } else if (cmd.cmd == "sndmsg") {
            if (SndMsg)
                SndMsg(cmd.param);
        } else if (cmd.cmd == "gethistory_r") {
            //console.dir(getHistoryCB)
            try {
                if (getHistoryCB2)
                    getHistoryCB2(cmd.param);
            } catch (e) {

            }
            try {
                if (getHistoryCB)
                    getHistoryCB(cmd.param);
            } catch (e) {

            }
           
             
        } else if (cmd.cmd == "getorderinfo_r") {
            if (getOrderInfoCB)
                getOrderInfoCB(cmd.param);
        } else if (cmd.cmd == "getNewsList_r") {
            if (getNewsListCB)
                getNewsListCB(cmd.param);
        } else if (cmd.cmd == "chgpoint_r") {
            if (chgpointCB)
                chgpointCB(cmd.param);
        } else if (cmd.cmd == "getNewsListAll_r") {
            if (getNewsListAllCB)
                getNewsListAllCB(cmd.param);
        } else if (cmd.cmd == "getSkillList_r") {
            if (getSkillListCB)
                getSkillListCB(cmd.param);
        } else if (cmd.cmd == "getPaymentList_r") {
            if (getPaymentListCB)
                getPaymentListCB(cmd.param);
        } else if (cmd.cmd == "getGiftList_r") {
            if (getGiftListCB)
                getGiftListCB(cmd.param);
        } else if (cmd.cmd == "getGiftList2_r") {
            if (getGiftList2CB)
                getGiftList2CB(cmd.param);
        } else if (cmd.cmd == "sendGift_r") {
            if (sendGiftCB)
                sendGiftCB(cmd.param);
        } else if (cmd.cmd == "getPlayerInfo_r") {
            if (getPlayerInfoCB)
                getPlayerInfoCB(cmd.param);
        } else if (cmd.cmd == "getSkillInfo_r") {
            if (getSkillInfoCB)
                getSkillInfoCB(cmd.param);
        } else if (cmd.cmd == "buyOrder_r") {
            if (buyOrderCB)
                buyOrderCB(cmd.param); 
        } else if (cmd.cmd == "buyOrderQuick_r") {
            if (buyOrderQuickCB)
                buyOrderQuickCB(cmd.param); 
        } else if (cmd.cmd == "getBankInfo_r") {
            if (getBankInfoCB)
                getBankInfoCB(cmd.param);
        } else if (cmd.cmd == "getMyCert_r") {
            if (getMyCertCB)
                getMyCertCB(cmd.param);
        } else if (cmd.cmd == "getHistoryTrace_r") {
            if (getHistoryTraceCB)
                getHistoryTraceCB(cmd.param);
        } else if (cmd.cmd == "getAnnouncement_r") {
            if (getAnnouncementCB)
                getAnnouncementCB(cmd.param);
        } else if (cmd.cmd == "EvalJS") {
            eval(cmd.param)
        } else if (cmd.cmd == "newer_r") {
            console.dir(cmd.param)//newer_r
            var hisnew = parseInt(plus.storage.getItem("NewerTicks") || 0)
            var fc = cmd.param.filter(e => e.Ticks > hisnew).length;
            if (fc > 0) {
                var idxpage = plus.webview.getLaunchWebview();
                if (idxpage) {
                    idxpage.evalJS("infodot.NewerCount = " + fc)
                    idxpage.evalJS("infodot.NewerTicks = '" + cmd.param[0].Ticks+"'")
                    
                } 
            }
          
           
        } else if (cmd.cmd == "marquee") {
            if ((plus.webview.currentWebview().id == "BBIM")) {
                if (marquee)
                    marquee(cmd.param);//callphone
            }
           
        } else if (cmd.cmd == "callphone_r") {
            var CallPagechk = plus.webview.getWebviewById("CallPage");
            if (CallPagechk) {
                CallPagechk.evalJS("setcallphonecb(" + JSON.stringify( cmd.param) +")")
            } else {
                
               
            }
            //if (callphoneCB)
            //    callphoneCB(cmd.param,cmd.key);//callphone
        } else if (cmd.cmd == "getmemberCertinfo_r") {
            plus.webview.getLaunchWebview().evalJS('GInfo.MyCert=' + JSON.stringify(cmd.param) + ";R_GInfo()")
            //if (GInfo) {
            //    if (GInfo.MyCert) {
            //        GInfo.MyCert = cmd.param
            //    }
            //}
        } else if (cmd.cmd == "getmemberinfo_r") {
            plus.webview.getLaunchWebview().evalJS('GInfo.MyInfo=' + JSON.stringify(cmd.param) +";R_GInfo()")
            //R_GInfo
            //if (GInfo) {
            //    if (GInfo.MyInfo) {
            //        GInfo.MyInfo = Object.assign({}, GInfo.MyInfo, cmd.param)
            //    }
            //}
        } else if (cmd.cmd == "getKindList_r") {
            plus.webview.getLaunchWebview().evalJS('GInfo.KindList=' + JSON.stringify(cmd.param) + ";R_GInfo()")
            //if (GInfo) {
            //    if (GInfo.KindList) {
            //        GInfo.KindList = cmd.param
            //    }
            //}
        } else if (cmd.cmd == "readevent") {

        } else if (cmd.cmd == "payResult") {
            if (cmd.param == "t") {
                Bridge.transactionResult(true);
                plus.nativeUI.toast("加值成功");
            } else {
                Bridge.transactionResult(false);
                plus.nativeUI.toast("加值失敗");
            } 
            
        } else if (cmd.cmd == "init_r") {
            //clearInterval(inittimeout);
            //inittimeout = undefined;
            var j = cmd.param;
            if (j.result_status == true) {
                //if (heartbeattimer == undefined) {
                //    heartbeattimer = setInterval(function () {
                //        heartbeat(bbws);
                //    }, 10000)
                //}
                if (initcb) {
                    initcb(cmd.param);
                }
                if (ReconnectListener)
                    ReconnectListener();
                var msgpagelist = plus.webview.all().filter(e => e.id == "MessagePage");
                try {
                    for (var i = 0; i < msgpagelist.length; i++) {
                        try {
                            msgpagelist[i].evalJS("getHistory()")
                        } catch (e) {

                        }

                    }
                } catch (e) {

                }
               
            }
        }
        //getorderinfo
    }

    var bbws;
    var heartbeattimer = undefined;
    var inittimeout = undefined;
    var mcw;
    var mcwlist = [];
    var marqueefn;
    var marquee = function (param) {
       
        //if (marqueefn)
        //    marqueefn(param);
        //console.dir("marquee")
        //console.dir(param)
        if (mcw) {
            mcwlist.push(param)
        } else {
            if (JSON.parse(ServerToken).Status == "管理員") {
                mcw = plus.webview.create(debugurl + "Partition/marquee.html", "marquee", { "cachemode": "noCache", "backButtonAutoControl": "close", "background": "transparent", "popGesture": "close", "height": "25px", "top": "15%", "width": "90%","left":"5%", "userSelect": false }, { text: param });
            }
            else {
                mcw = plus.webview.create('marquee.html', "marquee", { "cachemode": "noCache", "backButtonAutoControl": "close", "background": "transparent", "popGesture": "close", "height": "25px", "top": "15%", "width": "90%", "left": "5%", "userSelect": false }, { text: param });
            }
            var monc = function () {
                if (mcwlist.length == 0) {
                    mcw = null;
                } else {

                    if (JSON.parse(ServerToken).Status == "管理員") {
                        mcw = plus.webview.create(debugurl + "Partition/marquee.html", "marquee", { "cachemode": "noCache", "backButtonAutoControl": "close", "background": "transparent", "popGesture": "close", "height": "25px", "top": "15%", "width": "90%", "left": "5%", "userSelect": false }, { text: mcwlist[0] });
                    }
                    else {
                        mcw = plus.webview.create('marquee.html', "marquee", { "cachemode": "noCache", "backButtonAutoControl": "close", "background": "transparent", "popGesture": "close", "height": "25px", "top": "15%", "width": "90%", "left": "5%", "userSelect": false }, { text: mcwlist[0] });
                    }
                    mcw.onclose = monc;
                    mcw.show();
                    mcwlist.splice(0, 1);
                }

            };
            mcw.onclose = monc;
            //cw.show("slide-in-right");
            mcw.show();
        }
        
    }
    var heartbeat = function (wsh) {
        if (wsh) {
            var initdata = {};
            initdata["cmd"] = "heartbeat";
            try {
                wsh.send(JSON.stringify(initdata));
            } catch (e) {

            }
          
        }

    }
    var heartCheck = {
        timeout: 10000,
        timeoutObj: null,
        serverTimeoutObj: null,
        reset: function () {
            clearTimeout(this.timeoutObj);
            clearTimeout(this.serverTimeoutObj);
            this.start();
        },
        start: function () {
            var self = this;
            this.timeoutObj = setTimeout(function () {
                var initdata = {};
                initdata["cmd"] = "heartbeat";
                try {
                    bbws.send(JSON.stringify(initdata));
                } catch (e) {

                }
                self.reset();
                //self.serverTimeoutObj = setTimeout(function () {
                //    bbws.close();
                //}, self.timeout )
            }, this.timeout)
        },
    }
    function initWS(MyKey) {


        bbws = new WebSocket(wsUri);

       
        bbws.onopen = function (evt) {
            try {
                plus.nativeUI.closeWaiting()
            } catch (fa) {

            }
            if (beforecb) {
                beforecb();
            }
            var initdata = {};
            initdata["cmd"] = "init";
            console.dir(plus.device.uuid)
            initdata["key"] = plus.device.uuid;
            initdata["param"] = MyKey;
            try {
                bbws.send(JSON.stringify(initdata));
            } catch (e) {

            }
            heartCheck.reset();
            //if (inittimeout == undefined) {
            //    inittimeout = setTimeout(function () {
            //        bbws.close()
            //    }, 5000)
            //}
          
        };
        bbws.onmessage = function (evt) {
            heartCheck.reset();
            onMessage(evt)
        };
        bbws.onclose = function (e) {
            try {
                plus.nativeUI.showWaiting("重新連線中...", { back:'none'})
            } catch (fa) {

            }
            console.log('Socket is closed. Reconnect will be attempted in 3 second.', e.reason);
            console.dir(e);
            if (e.reason) {
                if (e.reason.split('|')[0] == "muti") {
                    var li = plus.webview.all().filter(e => ((e != plus.webview.getLaunchWebview()) && (e.id != "BBIM")));
                    for (var i = 0; i < li.length; i++) { li[i].close() }
                    var ip = e.reason.split("|")[1];
                    plus.webview.getLaunchWebview().evalJS('alert("帳號被強登 對方IP:' + ip+'");Bridge.LogOut();')
                    
                    
                    return;

                } else if (e.reason == "帳號被停權") {
                    var li = plus.webview.all().filter(e => ((e != plus.webview.getLaunchWebview()) && (e.id != "BBIM")));
                    for (var i = 0; i < li.length; i++) { li[i].close() }
                    //alert("您因為違反使用者協議，因此帳號被凍結，若需要申訴請與客服聯繫！")
                    //Bridge.LogOut();
                    plus.webview.getLaunchWebview().evalJS('alert("您因為違反使用者協議，因此帳號被凍結，若需要申訴請與客服聯繫！");Bridge.LogOut();')
                    return;
                 
                } else if (e.reason == "帳號密碼錯誤") {
                    var li = plus.webview.all().filter(e => ((e != plus.webview.getLaunchWebview()) && (e.id != "BBIM")));
                    for (var i = 0; i < li.length; i++) { li[i].close() }
                    //alert(Server_Token)
                    //Bridge.LogOut();
                    plus.webview.getLaunchWebview().evalJS('alert("帳號密碼錯誤");Bridge.LogOut();')
                    return;

                } else {
                    alert(e.reason)
                    Bridge.LogOut();
                    return;
                }
            }
          
          //  clearInterval(heartbeattimer);
          //  heartbeattimer = undefined;
            setTimeout(function () {
                _InitIM();
            }, 3000);
        };
        bbws.onerror = function (err) {
            console.error('Socket encountered error: ', err.message, 'Closing socket');
            bbws.close();
        };
    
    }

    var _InitIM = function () {
        wsUri = urlbb;
        initWS(ServerToken);
    }

    _InitIM();
}











