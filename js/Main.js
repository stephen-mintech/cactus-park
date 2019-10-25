var MainUI = function () {
    Object.defineProperties(this, {
        //改版後2.0
        NewHome: {
            writable: false, value: function (stuinfo, cb, param) { newhome(stuinfo, cb, param) }
        },
        //改版後2.0
        Home: {
            writable: false, value: function (stuinfo, cb, param) { home(stuinfo, cb, param) }
        },
        //改版後2.0
        RareHome: {
            writable: false, value: function (stuinfo, cb, param) { rarehome(stuinfo, cb, param) }
        },
        //改版後2.0
        SkillList: {
            writable: false, value: function (stuinfo, cb, param) { skillList(stuinfo, cb, param) }
        },
        //改版後2.0
        SkillListView: {
            writable: false, value: function (stuinfo, cb, param) { skillListView(stuinfo, cb, param) }
        },
        GiftPage: {
            writable: false, value: function (stuinfo, cb, param) { giftPage(stuinfo, cb, param) }
        },
        //改版後2.0
        Setting: {
            writable: false, value: function (info, cb, param) { settingpage(info, cb, param) }
        },
        //改版後2.0
        Setting_Login: {
            writable: false, value: function (info, cb, param) { setting_Login(info, cb, param) }
        },
        //改版後2.0
        Setting_Reg: {
            writable: false, value: function (info, cb, param) { setting_reg(info, cb, param) }
        },
        //改版後
        PlayerPage: {
            writable: false, value: function (stuinfo, cb, param) { playerPage(stuinfo, cb, param) }
        },
        //改版後
        FollowPage: {
            writable: false, value: function (stuinfo, cb, param) { followPage(stuinfo, cb, param) }
        },
        //改版後
        FansPage: {
            writable: false, value: function (stuinfo, cb, param) { fansPage(stuinfo, cb, param) }
        },
        //改版後
        HistoryTrace: {
            writable: false, value: function (stuinfo, cb, param) { historyTrace(stuinfo, cb, param) }
        },
        //改版後
        OrderPage: {
            writable: false, value: function (stuinfo, cb, param) { orderPage(stuinfo, cb, param) }
        },
        //改版後
        Skill: {
            writable: false, value: function (stuinfo, cb, param) { skill(stuinfo, cb, param) }
        },
        //改版後2.0
        Wallet: {
            writable: false, value: function (stuinfo, cb, param) { wallet(stuinfo, cb, param) }
        },
        //改版後
        AddNews: {
            writable: false, value: function (stuinfo, cb, param) { addNews(stuinfo, cb, param) }
        },
        //改版後
        NewsPage: {
            writable: false, value: function (stuinfo, cb, param) { newsPage(stuinfo, cb, param) }
        },
        //改版後2.0
        GroupPage: {
            writable: false, value: function (stuinfo, cb, param) { groupPage(stuinfo, cb, param) }
        },
        //改版後2.0
        ChatRoom: {
            writable: false, value: function (stuinfo, cb, param) { chatRoom(stuinfo, cb, param) }
        },
        //改版後2.0
        MessageBox: {
            writable: false, value: function (stuinfo, cb, param) { messageBox(stuinfo, cb, param) }
        },
        //改版後
        MessagePage: {
            writable: false, value: function (stuinfo, cb, param) { messagePage(stuinfo, cb, param) }
        },
        //改版後
        ParamPage: {
            writable: false, value: function (stuinfo, cb, param) { paramPage(stuinfo, cb, param) }
        },
        //改版後2.0
        CertSkill: {
            writable: false, value: function (stuinfo, cb, param) { certSkill(stuinfo, cb, param) }
        },
        //改版後2.0
        CertUpload: {
            writable: false, value: function (stuinfo, cb, param) { certUpload(stuinfo, cb, param) }
        },
        //改版後2.0
        CertSkillEdit: {
            writable: false, value: function (stuinfo, cb, param) { certSkillEdit(stuinfo, cb, param) }
        },
        //改版後2.0
        CertSkillEditDetail: {
            writable: false, value: function (stuinfo, cb, param) { certSkillEditDetail(stuinfo, cb, param) }
        },
        //改版後
        ProfileEdit: {
            writable: false, value: function (stuinfo, cb, param) { profileEdit(stuinfo, cb, param) }
        },
        //改版後
        OrderList: {
            writable: false, value: function (stuinfo, cb, param) { orderList(stuinfo, cb, param) }
        },
        BankInfo: {
            writable: false, value: function (stuinfo, cb, param) { bankInfo(stuinfo, cb, param) }
        },
        LoginTest: {
            writable: false, value: function (stuinfo, cb, param) { _gologintest(stuinfo, cb, param) }

        },
        OrderCheckPage: {
            writable: false, value: function (stuinfo, cb, param) { _OrderCheckPage(stuinfo, cb, param) }
        },
        Announcement: {
            writable: false, value: function (stuinfo, cb, param) { _Announcement(stuinfo, cb, param) }
        },
        NewPlayer: {
            writable: false, value: function (stuinfo, cb, param) { _NewPlayer(stuinfo, cb, param) }
        },
        PaiDanPage: {
            writable: false, value: function (stuinfo, cb, param) { _PaiDanPage(stuinfo, cb, param) }
        },
        Jail: {
            writable: false, value: function (stuinfo, cb, param) { _Jail(stuinfo, cb, param) }
        },
        
        PaiDanAdd: {
            writable: false, value: function (stuinfo, cb, param) { _PaiDanAdd(stuinfo, cb, param) }
        },
        PaiDanDetail: {
            writable: false, value: function (stuinfo, cb, param) { _PaiDanDetail(stuinfo, cb, param) }
        },
        ChangePW: {
            writable: false, value: function (stuinfo, cb, param) { _ChangePW(stuinfo, cb, param) }
        },
        RecommendPage: {
            writable: false, value: function (stuinfo, cb, param) { _RecommendPage(stuinfo, cb, param) }
        },
        HomeAllType: {
            writable: false, value: function (stuinfo, cb, param) { _homeAllType(stuinfo, cb, param) }
        },
        GetMoney: {
            writable: false, value: function (stuinfo, cb, param) { _GetMoney(stuinfo, cb, param) }
        },
        GetMoneyDetail: {
            writable: false, value: function (stuinfo, cb, param) { _GetMoneyDetail(stuinfo, cb, param) }
        },
        Coupon: {
            writable: false, value: function (stuinfo, cb, param) { _Coupon(stuinfo, cb, param) }
        },
        GiftList: {
            writable: false, value: function (stuinfo, cb, param) { _GiftList(stuinfo, cb, param) }
        },
    });

    var applyProps = function (str, data) {
        var newstr = str.replace(/{{(.*?)}}/g, function (para) {

            try {
                if (typeof eval("data." + para.replace("{{", "").replace("}}", "")) == "undefined") {
                    return para;
                }
                else if (typeof eval("data." + para.replace("{{", "").replace("}}", "")) == "object") {
                    if (eval("data." + para.replace("{{", "").replace("}}", "")) == null) {
                        return "";
                    }
                    var tmp = JSON.stringify(JSON.stringify(eval("data." + para.replace("{{", "").replace("}}", ""))));
                    return tmp.substring(1, tmp.length - 1);
                }
            } catch (e) {
                return para;
            }
            return eval("data." + para.replace("{{", "").replace("}}", ""));


        });
        return newstr;
    }
    var _gologin = function (cb) {
        console.dir("_gologin")
        Bridge.readFile("Partition/Setting_login.html", function (st) {
            Bridge.getData("Setting", function (setting) {
                if (setting == "") { setting = "{}" }
                var json = JSON.parse(setting);

                var newstring = applyProps(st, json);
                cb(newstring);
            });
        });
    }
    var _gologintest = function (stuinfo, cb, param) {
        Bridge.readFile("Partition/Setting_login.html", function (st) {
            Bridge.getData("Setting", function (setting) {
                if (setting == "") { setting = "{}" }
                var json = JSON.parse(setting);

                var newstring = applyProps(st, json);
                if (cb) {
                    cb(newstring);
                    return;
                }

                if (stuinfo)
                    stuinfo(newstring)
            });
        });
    }
    var _homeAllType = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/HomeAllType.html", function (st) {
                cb(st);
            });
        }
    }
    var _Coupon = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            $.ajax({
                url: ajaxurl + "Coupon",
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                success: function (r) {
                    if (r.result_status) {
                        Bridge.readFile("Partition/Coupon.html", function (st) {
                            top["DataBase"]["Partition"] = r.result_content;
                            cb(st);
                        });


                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
                }
            });

        }
    }
    var _GiftList = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            $.ajax({
                url: ajaxurl + "GiftList",
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                success: function (r) {
                    if (r.result_status) {
                        Bridge.readFile("Partition/GiftList.html", function (st) {
                            top["DataBase"]["Partition"] = r.result_content;
                            cb(st);
                        });


                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
                }
            });

        }
    }
    var _GetMoney = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            $.ajax({
                url: ajaxurl + "GetMoney",
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                success: function (r) {
                    if (r.result_status) {
                        Bridge.readFile("Partition/GetMoney.html", function (st) {
                            top["DataBase"]["Partition"] = r.result_content;
                            cb(st);
                        });


                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
                }
            });

        }
    }
    var _GetMoneyDetail = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/GetMoneyDetail.html", function (st) {
                top["DataBase"]["Partition"] = param;
                cb(st);
            });
        }
    }
    var _RecommendPage = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            $.ajax({
                url: ajaxurl + "Recommend",
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                timeout: 30000,
                success: function (r) {
                    if (r.result_status) {
                        Bridge.readFile("Partition/RecommendPage.html", function (st) {
                            top["DataBase"]["Partition"] = r.result_content;
                            cb(st);
                        });


                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
                }
            });

        }
    }
    var bankInfo = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/BankInfo.html", function (st) {
                //  var newstring = applyProps(st, { param: param })

                cb(st);
            });



        }

    }
    var _ChangePW = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/ChangePW.html", function (st) {
                cb(st);
            });
        }
    }
    var _OrderCheckPage = function (stuinfo, cb, param) {

        // console.dir(param)
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/OrderCheckPage.html", function (st) {
                var newstring = applyProps(st, { param: param })
                cb(newstring);
                // cb(st);
            });
        }
    }
    var playerPage = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            //getimdata("getBankInfo", "", function (r) {

            //})
            getimdata("getPlayerInfo", param, function (r) {
                if (r.result_status) {
                    Bridge.readFile("Partition/PlayerPage.html", function (st) {
                        var newstring = applyProps(st, { r: param, data: r.result_content })
                        top["DataBase"]["Partition"] = r.result_content;
                        cb(newstring);
                    });
                } else {
                    console.error(r.result_message);
                }
            })
          
            

        }

    }
    var followPage = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            $.ajax({
                url: ajaxurl + "FollowList",
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                timeout: 30000,
                success: function (r) {
                    if (r.result_status) {

                        Bridge.readFile("Partition/FollowPage.html", function (st) {
                            var newstring = applyProps(st, { data: r.result_content })
                            top["DataBase"]["Partition"] = r.result_content;
                            cb(newstring);
                        });

                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
                }
            });

        }
    }
    var fansPage = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            $.ajax({
                url: ajaxurl + "FansList",
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                timeout: 30000,
                success: function (r) {
                    if (r.result_status) {

                        Bridge.readFile("Partition/FansPage.html", function (st) {
                            var newstring = applyProps(st, { data: r.result_content })
                            top["DataBase"]["Partition"] = r.result_content;
                            cb(newstring);
                        });

                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
                }
            });

        }
    }
    var orderList = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            $.ajax({
                url: ajaxurl + "Order",
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                timeout: 30000,
                success: function (r) {
                    if (r.result_status) {

                        Bridge.readFile("Partition/OrderList.html", function (st) {
                            var newstring = applyProps(st, { param: ((param) ? param : "id") })
                            top["DataBase"]["Partition"] = r.result_content;
                            cb(newstring);
                        });

                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
                }
            });

        }
    }
    var historyTrace = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            plus.nativeUI.showWaiting("讀取中...")
            //HistoryTrace
            $.ajax({
                url: ajaxurl + "HistoryTrace",
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                success: function (r) {
                    if (r.result_status) {

                        Bridge.readFile("Partition/HistoryTrace.html", function (st) {
                            var newstring = applyProps(st, { data: r.result_content })
                            top["DataBase"]["Partition"] = r.result_content;
                            cb(newstring);
                            plus.nativeUI.closeWaiting()
                        });

                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
                }
            });
            //getimdata("getHistoryTrace", "", function (r) {
            //    if (r.result_status) {

            //        Bridge.readFile("Partition/HistoryTrace.html", function (st) {
            //            var newstring = applyProps(st, { data: r.result_content })
            //            top["DataBase"]["Partition"] = r.result_content;
            //            cb(newstring);
            //            plus.nativeUI.closeWaiting()
            //        });

            //    } else {
            //        console.error(r.result_message);
            //    }
            //})
         
            

        }
    }
    var orderPage = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            $.ajax({
                url: ajaxurl + "Order/" + param,
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                timeout: 30000,
                success: function (r) {
                    if (r.result_status) {
                        Bridge.readFile("Partition/OrderPage.html", function (st) {
                            // var newstring = applyProps(st, { r: param, data: r.result_content })
                            top["DataBase"]["Partition"] = r.result_content;
                            cb(st);
                        });


                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
                }
            });

        }
    }
    var skill = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else { 

            getimdata("getSkillInfo", param, function (r) {
                if (r.result_status) {
                    Bridge.readFile("Partition/SkillPage.html", function (st) {
                        var newstring = applyProps(st, { r: param, data: r.result_content })
                        top["DataBase"]["Partition"] = r.result_content;
                        cb(newstring);
                    });
                } else {
                    console.error(r.result_message);
                }
            })
            

        }
    }

    var addNews = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            $.ajax({
                url: ajaxurl + "KindList/" + JSON.parse(Server_Token).Member_ID,
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                timeout: 30000,
                success: function (r) {
                    if (r.result_status) {

                        Bridge.readFile("Partition/AddNews.html", function (st) {
                            var newstring = applyProps(st, { r: param, data: r.result_content })
                            top["DataBase"]["Partition"] = r.result_content;
                            cb(newstring);
                        });

                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
                }
            });

        }
    }
    var newsPage = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            var nparam = decodeURIComponent(param);
            getimdata("getNewsList", param, function (r) {
                if (r.result_status) {
                    Bridge.readFile("Partition/NewsPage.html", function (st) {

                        var newstring = applyProps(st, { r: nparam, data: r.result_content })
                        // top["NewsPagew"].evalJS("reloadnew('NewsPage'," + newstring + ")");
                        cb(newstring);
                    });
                } else {
                    console.error(r.result_message);
                }
            })
           
        }
    }
    var groupPage = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/GroupPage.html", function (st) {
                cb(st);
            });

        }
    }
    var chatRoom = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/ChatRoom.html", function (st) {
                cb(st);
            });

        }
    }
    var messageBox = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/MessageBox.html", function (st) {
                cb(st);
            });


        }
    }
    var messagePage = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            // IMClient.getConversation(param).then(function (bob) {
          
            $.ajax({
                url: ajaxurl + "MessageBox",
                type: 'get',
                data: { id: param },
                timeout: 30000,
                success: function (r) {
                    if (r.result_status) {
                        Bridge.readFile("Partition/MessagePage.html", function (st) {
                            //var myinfo = r.result_content.find(function (el) {
                            //    return el.Member_ID == JSON.parse(Server_Token).Member_ID
                            //});
                            var myinfo = GInfo.MyInfo
                            var sheinfo = r.result_content;

                            var newstring = applyProps(st, { r: param, data: r.result_content, myinfo: myinfo, sheinfo: sheinfo })

                            cb(newstring);
                        });
                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
                }
            });

        }
    }
    var paramPage = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            $.ajax({
                url: ajaxurl + "OnlineStatus_new",
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                timeout: 30000,
                success: function (r) {
                    Bridge.readFile("Partition/ParamPage.html", function (st) {
                        top["OnlineStatus"] = r.OnlineStatus
                        top["iamhide"] = r.iamhide
                        cb(st);
                    });
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入1" + errorThrown)
                }
            });
           

        }
    }
    var certSkill = function (stuinfo, cb, param) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/CertSkill.html", function (st) {
                cb(st);
            });
        }
    }
    var certUpload = function (stuinfo, cb, param) {
        param = decodeURIComponent(param);
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/CertUpload.html", function (st) {

                var newstring = applyProps(st, { ID: param.split('|')[0], Name: param.split('|')[1] })

                cb(newstring);
            });

        }
    }
    var certSkillEdit = function (stuinfo, cb, param) {
        param = decodeURIComponent(param);
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            $.ajax({
                url: ajaxurl + "Certification/" + param,
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                timeout: 30000,
                success: function (r) {
                    if (r.result_status) {

                        Bridge.readFile("Partition/CertSkillEdit.html", function (st) {
                            var newstring = applyProps(st, { r: param, data: r.result_content })

                            cb(newstring);
                        });


                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入1" + errorThrown)
                }
            });



        }
    }
    var certSkillEditDetail = function (stuinfo, cb, param) {
        param = decodeURIComponent(param);
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            $.ajax({
                url: ajaxurl + "CertificationDetail/" + param,
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                timeout: 30000,
                success: function (r) {
                    if (r.result_status) {

                        Bridge.readFile("Partition/CertSkillEditDetail.html", function (st) {
                            var newstring = applyProps(st, { r: param, data: r.result_content })

                            cb(newstring);
                        });


                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入1" + errorThrown)
                }
            });



        }
    }
    var rarehome = function (stuinfo, cb, param) {
        //News get 0
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/RareHome.html", function (st) {
                cb(st);
            });
        }
    }
    var home = function (stuinfo, cb, param) {
        //News get 0
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/Home.html", function (st) {
                cb(st);
            });
        }
    }
    var newhome = function (stuinfo, cb, param) {
        //News get 0
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/NewHome.html", function (st) {
              
                cb(st);
            });
            //$.ajax({
            //    url: ajaxurl + "Home",
            //    type: 'get',
            //    headers: { "Server_Token": encodeURIComponent(Server_Token) },
            //    timeout: 30000,
            //    success: function (r) {
            //        if (r.result_status) {
            //            Bridge.readFile("Partition/NewHome.html", function (st) {
            //                top["DataBase"]["NewHome"] = r.result_content;
            //                cb(st);
            //            });


            //        } else {
            //            console.error(r.result_message);
            //        }
            //    },
            //    error: function (jqXHR, textStatus, errorThrown) {

            //        Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
            //    }
            //});

        }
    }
    var skillList = function (stuinfo, cb, param) {
        //News get 0
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            getimdata("getSkillList", null, function (r) {
                if (r.result_status) {
                    Bridge.readFile("Partition/SkillList.html", function (st) {
                        top["DataBase"]["SkillList"] = r.result_content.data;
                        top["DataBase"]["KindList"] = r.result_content.KindList;
                        top["DataBase"]["SkillListParam"] = param;
                        cb(st);
                    });
                } else {
                    console.error(r.result_message);
                }
            })
         

        }

    }
    var giftPage = function (stuinfo, cb, param) {
        //News get 0
        if (Server_Token == "") {
            _gologin(cb);
        } else {

            Bridge.readFile("Partition/GiftPage.html", function (st) {
             
                cb(st);
            });




        }

    }
    var skillListView = function (stuinfo, cb, param) {
        //News get 0
        if (Server_Token == "") {
            _gologin(cb);
        } else {

            var nparam = JSON.parse(decodeURIComponent(param));
            var free = false;

            if (nparam.isfree) {
                free = nparam.isfree;
            }
            console.dir("free")
            console.dir(free)
            $.ajax({
                url: ajaxurl + "Home/" + nparam.id + "?free=" + free,
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                timeout: 30000,
                success: function (r) {
                    if (r.result_status) {
                        Bridge.readFile("Partition/SkillListView.html", function (st) {
                            top["DataBase"]["NewHome"] = r.result_content;
                            top["DataBase"]["Free"] = free;
                            cb(st);
                        });


                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
                }
            });



        }

    }
    var setting_Login = function (stuinfo, cb, param) {
        Bridge.readFile("Partition/Setting_login.html", function (st) {
            cb(st);
        });
    }
    var setting_reg = function (stuinfo, cb, param) {
        Bridge.readFile("Partition/Setting_reg.html", function (st) {
            cb(st);
        });
    }
    var settingpage = function (tinfo, cb) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/Setting.html", function (st) {
                cb(st);
            });
        }
    }
    var _Announcement = function (tinfo, cb) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/Announcement.html", function (st) {
                cb(st);
            });
        }
    }
  
    var _PaiDanPage = function (tinfo, cb) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/PaiDanPage.html", function (st) {
                cb(st);
            });
        }
    }
    var _Jail = function (tinfo, cb) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/Jail.html", function (st) {
                cb(st);
            });
        }
    }
    
    var _PaiDanAdd = function (tinfo, cb) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/PaiDanAdd.html", function (st) {
                cb(st);
            });
        }
    }
    var _PaiDanDetail = function (tinfo, cb) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/PaiDanDetail.html", function (st) {
                cb(st);
            });
        }
    }
    
    var _NewPlayer = function (tinfo, cb) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/NewPlayer.html", function (st) {
                cb(st);
            });
        }
    }
    
    var wallet = function (tinfo, cb) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            Bridge.readFile("Partition/Wallet.html", function (st) {
                cb(st);
            });
        }

    }
    var profileEdit = function (tinfo, cb) {
        if (Server_Token == "") {
            _gologin(cb);
        } else {
            //WalletInfo
            $.ajax({
                url: ajaxurl + "PlayerInfo",
                type: 'get',
                headers: { "Server_Token": encodeURIComponent(Server_Token) },
                timeout: 30000,
                success: function (r) {
                    if (r.result_status) {
                        Bridge.readFile("Partition/ProfileEdit.html", function (st) {
                            // var newstring = applyProps(st, { data: r.result_content })
                            top["DataBase"]["Partition"] = r.result_content;
                            cb(st);
                        });

                    } else {
                        console.error(r.result_message);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    Bridge.LogOut(function () { }, "連線逾時，請您重新登入")
                }
            });

        }

    }

    var init = function () {
        if (!(top["DataBase"]))
            top["DataBase"] = {};
        //if (plus.navigator.hasNotchInScreen()) {
        //   // plus.navigator.setFullscreen(false)

        //    var winH = $(window).height() - plus.navigator.getStatusbarHeight();

        //    $("body").height(winH);
        //} else {
        //    //plus.navigator.setFullscreen(false)
        //    var winH = $(window).height();
        //    $("body").height(winH);
        //}
        //setInterval(function () {
        //    if (plus.navigator.hasNotchInScreen()) {
        //       // plus.navigator.setFullscreen(false)

        //        var winH = $(window).height() - plus.navigator.getStatusbarHeight();

        //        $("body").height(winH);
        //    } else {
        //       // plus.navigator.setFullscreen(false)
        //        var winH = $(window).height();
        //        $("body").height(winH);
        //    }
        //}, 500)

        $.each(['show', 'hide'], function (i, ev) {
            var el = $.fn[ev];
            $.fn[ev] = function () {
                this.trigger(ev);
                return el.apply(this, arguments);
            };
        });
    }
    init();
}
function hovernav_gift(e, param, needim, orgdata) {
    var mask = $('<div class="weui-mask" style="display:none"></div>');
    var newneedim = true;
    if (needim == false) {
        newneedim = false;
    }
    if (needim == undefined) {
        needim = "";
    }
    addBackEvent(BackBtnFn_org);
    if (param == undefined) {
        if ($(e).attr("bparam"))
            param = $(e).attr("bparam");
        else
            param = "";
    }

    var tagid = e;
    
    var callback = function (s) {
        var $html = $(s).addClass('slideIn');

        $html.on('animationend webkitAnimationEnd',
            function () {
                $html.removeClass('slideIn').addClass('js_show');
                $("#loadingToast").hide();//$("#loadingToast").remove();
            });

        $(".layers.page").prepend($html);

    }
 
    if (JSON.parse(Server_Token).Status == "管理員") {
        var w = plus.webview.create(debugurl + 'layout.html?needim=false&p=' + $(e).attr("btag"), $(e).attr("btag"), { "top": "50%","bottom":"0px", "cachemode": "default", "popGesture": "close", "userSelect": true }, { PreloadData: (orgdata || null), param: encodeURIComponent(param), newneedim: false });
        w.show("slide-in-bottom");
    }
    else {
        var w = plus.webview.create('layout.html?needim=false&p=' + $(e).attr("btag"), $(e).attr("btag"), { "top": "50%", "bottom": "0px","cachemode": "default", "popGesture": "close", "userSelect": true }, { PreloadData: (orgdata || null), param: encodeURIComponent(param), newneedim: false });
        w.show("slide-in-bottom");
    }
    $("body").prepend(mask);
    mask.fadeIn(200);
    mask.on("click", function () {
        w.close("auto");
    })
    w.addEventListener('close', function () {
        mask.remove();
    }, false);

}