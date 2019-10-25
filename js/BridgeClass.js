var BridgeClass = function () {
    Object.defineProperties(this, {
        getSystem: {
            writable: false, value: function () { return _getSystem(); }
        },
        getPermissions:{
            writable: false, value: function (key, cb) { return _getPermissions(key, cb); }
        },
        openPermissions: {
            writable: false, value: function (cb) { return _openPermissions(cb); }
        },
        videoview: {
            writable: false, value: function (key, cb,L) { return _videoview(key, cb,L); }
        },
        getData: {
            writable: false, value: function (key, cb) { return _getData(key, cb); }
        },
        getRoot: {
            writable: false, value: function (cb) { return _getRoot(cb); }
        },
        setData: {
            writable: false, value: function (key, value, cb) { return _setData(key, value, cb); }
        },
        readFile: {
            writable: false, value: function (key, cb) { return _readFile(key, cb); }
        },
        ClearData: {
            writable: false, value: function (cb) { return _ClearData(cb); }
        },
        LogOut: {
            writable: false, value: function (cb, s) { return _LogOut(cb, s); }
        },
        setJPushAlias: {
            writable: false, value: function (cb, s) { return _setJPushAlias(cb, s); }
        },
        deleteJPushAlias: {
            writable: false, value: function (cb) { return _deleteJPushAlias(cb); }
        },
        setStatusBarColor: {
            writable: false, value: function (s) { return _setStatusBarColor(s); }
        },
        signIn: {
            writable: false, value: function (s) { return _signIn(s); }
        },
        settokenCallback: {
            writable: false, value: function (cb) { return _settokenCallback(cb); }
        },
        tokenCallback: {
            writable: false, value: function (from, key) { return _tokenCallback(from, key); }
        },
        signOut: {
            writable: false, value: function () { return _signOut(); }
        },
        getPaymentToken: {
            writable: false, value: function (productName, price) { return _getPaymentToken(productName, price); }
        },
        setpaymentTokenCallback: {
            writable: false, value: function (cb) { return _setpaymentTokenCallback(cb); }
        },
        paymentTokenCallback: {
            writable: false, value: function (paymentToken) { return _paymentTokenCallback(paymentToken); }
        },
        transactionResult: {
            writable: false, value: function (b) { return _transactionResult(b); }
        },
        ffmpegExecute: {
            writable: false, value: function (st, cb, page) { return _ffmpegExecute(st, cb, page); }
        },
        ffmpegCancel: {
            writable: false, value: function () { return _ffmpegCancel(); }
        },
        ffmpegLogCallback: {
            writable: false, value: function (st) { return _ffmpegLogCallback(st); }
        },
        ffmpegStatisticsCallback: {
            writable: false, value: function (st) { return _ffmpegStatisticsCallback(st); }
        },
        setffmpegLogCallback: {
            writable: false, value: function (cb) { return _setffmpegLogCallback(cb); }
        },
        setffmpegStatisticsCallback: {
            writable: false, value: function (cb) { return _setffmpegStatisticsCallback(cb); }
        },
        ffmpegOutput :{
            writable: false, value: function (cb) { return _ffmpegOutput(cb); }
        },
        onReceiveRemoteNotification: {
            writable: false, value: function (cb) { return _onReceiveRemoteNotification(cb); }
        },
        onClickRemoteNotification: {
            writable: false, value: function (cb) { return _onClickRemoteNotification(cb); }
        },
        getOnClickRemoteNotificationData: {
            writable: false, value: function () { return _getOnClickRemoteNotificationData(); }
        },
        onCall: {
            writable: false, value: function (cb) { return _onCall(cb); }
        },
        getCallData: {
            writable: false, value: function () { return _getCallData(); }
        },
        clearBadge: {
            writable: false, value: function () { return _clearBadge(); }
        },
        log: {
            writable: false, value: function (s) { return _log(s); }
        },
    });

    var _bridge = null;
    var _log = function (s) {
        _bridge.log(s)
    }
    var _clearBadge = function () {
        try {
            _bridge.clearBadge()
        } catch (e) {}
    }
    var _getOnClickRemoteNotificationData = function () {
        _bridge.getOnClickRemoteNotificationData();
        try {
            _bridge.getOnCallData();
        } catch (e) {

        }
     
    }
    var _getCallData = function () {
        _bridge.getOnCallData();
    }
    var _ffmpegOutput = function (cb) {
        cb(_bridge.ffmpegOutput());
    }
    var ffmpegStatisticsCB;
    var _setffmpegStatisticsCallback = function (cb) {
        ffmpegStatisticsCB = cb;
    }
    var _ffmpegStatisticsCallback = function (st) {
        if (ffmpegStatisticsCB)
            ffmpegStatisticsCB(st)
    }
    var _ffmpegCancel = function () {
        _bridge.ffmpegCancel()
    }

    var ffmpegLogCB;
    var _setffmpegLogCallback = function (cb) {
        ffmpegLogCB = cb;
    }
    var _ffmpegLogCallback = function (st) {
        if (ffmpegLogCB)
            ffmpegLogCB(st)
    }
    var _ffmpegCancel = function () {
        _bridge.ffmpegCancel()
    }
    var _ffmpegExecute = function (st, cb, page) {
        if (page) {
            _bridge.ffmpegExecute(st, page);
        } else {
            _bridge.ffmpegExecute(st);
        }
      
      //  cb(rs);
    }

    var _transactionResult = function (b) {
        _bridge.transactionResult(b);
    }
    var _getPaymentToken = function (productName, price) {
        _bridge.getPaymentToken(productName, price);
    }
    var _signOut = function () {
        if ((Server_Token||"") != "")
           _deleteJPushAlias(JSON.parse(Server_Token).Member_ID.replace(/\-/g, ""));
        Bridge.setData("Server_Token", "", function () {
            Server_Token = "";
            _bridge.signOut();
            var ws = plus.webview.currentWebview();
            ws.loadURL("index.html?" + Math.random());
        });
      
    }
    var paymentTokenCallbackCB;
    var _setpaymentTokenCallback = function (cb) {
        paymentTokenCallbackCB = cb;
    }
    var _paymentTokenCallback = function (paymentToken) {

        if (paymentTokenCallbackCB) {
            paymentTokenCallbackCB(paymentToken);
        }
    }
    var tokenCallbackCB;
    var _settokenCallback = function (cb) {
        tokenCallbackCB = cb;
    }
    var _tokenCallback = function (from, key) {
     
        if (tokenCallbackCB) {
            tokenCallbackCB(from, key);
        }
    }

    var _getSystem = function () {
        return plus.os.name;
    }

    var _getPermissions = function (key, cb) {
        var value = _bridge.getPermissions(key);
        //alert(value);
        if (value === null) {
            cb(false);
        } else {
            cb(value);
        }
    }
    var _openPermissions = function (cb) {
        var value = _bridge.openPermissions();
        if (value === null) {
            cb(false);
        } else {
            cb(value);
        }
    }
    var _getPermissions2 = function (key, cb) {
        _bridge.getPermissions2(key,cb);
      
    }
    var _videoview = function (key, cb, L) {
        var l = false;
        if (L)
            l = true;
        var value = _bridge.videoview(key,l);
        if (value === null) {
            cb("");
        } else {
            cb(value);
        }
    }

    var _getData = function (key, cb) {
        var value = plus.storage.getItem(key);
       // var value = _bridge.getData(key);
        if (value === null) {
            cb("");
        } else {
            cb(value);
        }
    }

    var _getRoot = function (cb) {
        var value = _bridge.getRoot();
        if (value === null) {
            cb("");
        } else {
            cb(value);
        }
    }

    var _setData = function (key, value, cb) {
        plus.storage.setItem(key, value);
       // var isSuccess = _bridge.setData(key, value);
       // if (cb) cb(isSuccess);
        if (cb) cb(true);
    }
    var _setJPushAlias = function ( cb,s) {
        var isSuccess = _bridge.subscribeToTopic(s);
     if (cb) cb(isSuccess);
    }
    var _deleteJPushAlias = function (s) {
        _bridge.unsubscribeFromTopic(s)
      //if (cb) cb(isSuccess);
    }
    var _setStatusBarColor = function (s) {
        _bridge.setStatusBarColor(s);
    }
    var _readFile = function (key, cb) {

        //检查网路模式
        _getData("Setting", function (f) {
            var json;
            if (f === "") {
                json = {};
            } else {
                json = JSON.parse(f);
            }
         
            if (Server_Token != "") {
               
                if (JSON.parse(Server_Token).Status == "管理員" && key != "Version.json") {
                  
                    $.get(debugurl + key + "?" + Math.random(), function (s) {
                        cb(s);
                    });
                }
                else {
                    var content = _bridge.readFile(key);
                    cb(content);
                }
            }
            
            else {
                var content = _bridge.readFile(key);
                cb(content);
            }
        });
    }

    var _ClearData = function (cb) {
        var isSuccess = _bridge.clearData();
        if (cb) cb(isSuccess);
    }

    var _LogOut = function (cb, s) {
        //var st = "";
        //if (s !== undefined) {
        //    st = s;
        //}
        //var isSuccess = _bridge.logout(st);
        ////plus.webview.currentWebview().close();
        //if (cb) cb(isSuccess);
        
       // Server_Token = "";
        Bridge.signOut();
      
      
    }
    var _signIn = function (s) {
        var ns = "Facebook";
        if (s == "Google") {
            ns = "Google";
        } else if (s == "LINE") {
            ns = "LINE";
        }
        _bridge.signIn(ns)
    }

     //document.addEventListener("jpush.receiveMessage", function (msg) {

        //    if (msg.arguments.type == "click") {
        //        //console.dir(msg.arguments.payload.PageMoveTo);
        //        var str = msg.arguments.payload.PageMoveTo;
        //        var page = str.split("|")[0];
        //        if (page == "msg") {
        //            var op = plus.webview.getWebviewById("MessagePage");
        //            if (op)
        //                op.close();
        //            var html = "<a onclick='hovernav(this,\"" + str.split("|")[1] + "\")' btag=\"MessagePage\"></a>"
        //            //console.dir(html)
        //            $(html).click();
        //        }
        //    }
        //    if (msg.arguments.type == "receive") {
        //        //console.dir(msg.arguments.payload.PageMoveTo);
        //        var str = msg.arguments.payload.PageMoveTo;
        //        var page = str.split("|")[0];
        //        if (page == "order") {

        //        }
        //    }

        //}, false);
    var _onReceiveRemoteNotification=function(msgst){
       
    }
    var _onCall = function (msgst) {
        if (plus.webview.getWebviewById("loading") != null)
            plus.webview.getWebviewById("loading").hide();
        console.dir(msgst)
        var cmd = msgst;
      
        var ajaxurl = plus.storage.getItem("APIUrl");
        var Server_Token = plus.storage.getItem("Server_Token");
        var ar = [];
        ar.push(JSON.parse(Server_Token).Member_ID);
        ar.push(cmd.param.TargetID);
        $.ajax({
            url: ajaxurl + "MessageBox",
            type: 'post',
            data: { id: ar },
            headers: { "Server_Token": encodeURIComponent(Server_Token) },
            timeout: 30000,
            success: function (r) {
                if (r.result_status) {
                    var jdata = cmd.param;
                    var myinfo = r.result_content.find(function (el) {
                        return el.Member_ID == JSON.parse(Server_Token).Member_ID
                    });
                    var sheinfo = r.result_content.find(function (el) {
                        return el.Member_ID != JSON.parse(Server_Token).Member_ID
                    });

                    var memid = jdata.TargetID;

                    if (jdata.Event == "BeCallEvent" && jdata.TargetID == sheinfo.Member_ID) {
                        var chk = plus.webview.getWebviewById("CallPage");
                        if (chk == null) {
                            var cw = null;
                            if (JSON.parse(Server_Token).Status == "管理員") {
                                cw = plus.webview.create(debugurl + "Partition/CallPage.html", "CallPage", { "cachemode": "noCache", "background": "white", "popGesture": "none", "height": "100%", "margin": "auto", "width": "100%", "userSelect": false }, { roomid: jdata.RoomID, memid: JSON.parse(Server_Token).Member_ID, callbyme: "", meimg: JSON.stringify(myinfo), herimg: JSON.stringify(sheinfo) });
                            }
                            else {
                                cw = plus.webview.create('Partition/CallPage.html', "CallPage", { "cachemode": "noCache", "background": "white", "popGesture": "none", "height": "100%", "margin": "auto", "width": "100%", "userSelect": false }, { roomid: jdata.RoomID, memid: JSON.parse(Server_Token).Member_ID, callbyme: "", meimg: JSON.stringify(myinfo), herimg: JSON.stringify(sheinfo) });
                            }

                            cw.show("slide-in-right");


                        } else {

                        }

                    }


                } else {
                    console.error(r.result_message);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {

                Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
            }
        });
    }
    var _onClickRemoteNotification = function (msgst) {
        console.dir(msgst)
        var str = msgst.PageMoveTo;
        var page = str.split("|")[0];
        if (page == "msg") {
            var op = plus.webview.getWebviewById("MessagePage");
            if (op)
                op.close();
            var html = "<a onclick='hovernav(this,\"" + str.split("|")[1] + "\")' btag=\"MessagePage\"></a>"
            //console.dir(html)
            $(html).click();
        }
        if (page == "order") {
            var op = plus.webview.getWebviewById("OrderList");
            if (op)
                op.close();
            var html = "<a onclick='hovernav(this,\"" + str.split("|")[1] + "\")' btag=\"OrderList\"></a>"
            //console.dir(html)
            $(html).click();
        }
    }

    var _init = function () {
       
        if (plus.os.name == "Android") {
            _bridge = plus.android.importClass('tw.com.sevencplay.core.Bridge');
        } else if (plus.os.name == "iOS"){
            _bridge = plus.ios.importClass('_cplay.WebUtil');
        }
      
        var content = _bridge.readFile("Version.json");
       
      //  var Version = JSON.parse(content).Version;
       // var APIUrl = JSON.parse(content).APIUrl;
      //  _bridge.setData("Version", "" + Version);
       // _bridge.setData("APIUrl", "" + APIUrl);
    }

    _init();
}











