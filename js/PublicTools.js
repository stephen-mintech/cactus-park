var PublicTools = function () {
    Object.defineProperties(this, {
        ShowLongWords: {
            writable: false, value: function ($parent, st, needwidth, isorg, font, color, textAlign, IdxToCut) { return _ShowLongWords($parent, st, needwidth, isorg, font, color, textAlign, IdxToCut); }
        },
        CheckVersion:{
            writable: false, value: function () { return _CheckVersion(); }
        },
        ShowActionSheet: {
            writable: false, value: function (conf, cb, onlyphoto, cantakephoto) { return showActionSheet(conf, cb, onlyphoto, cantakephoto); }
        },
        AddCommas: {
            writable: false, value: function (val) { return addCommas(val); }
        },
        BBVue: {
            writable: false, value: function (html, objdata) { return bbVue(html, objdata); }
        },
         Xingzuo: {
             writable: false, value: function (month, date) { return xingzuo(month, date); }
        }
    });
    var xingzuo = function (month, date) {
        var value = "";
            if (month == 1 && date >= 20 || month == 2 && date <= 18) { value = "水瓶座"; }
            if (month == 2 && date >= 19 || month == 3 && date <= 20) { value = "雙魚座"; }
            if (month == 3 && date >= 21 || month == 4 && date <= 19) { value = "牡羊座"; }
            if (month == 4 && date >= 20 || month == 5 && date <= 20) { value = "金牛座"; }
            if (month == 5 && date >= 21 || month == 6 && date <= 21) { value = "雙子座"; }
            if (month == 6 && date >= 22 || month == 7 && date <= 22) { value = "巨蟹座"; }
            if (month == 7 && date >= 23 || month == 8 && date <= 22) { value = "獅子座"; }
            if (month == 8 && date >= 23 || month == 9 && date <= 22) { value = "處女座"; }
            if (month == 9 && date >= 23 || month == 10 && date <= 22) { value = "天秤座"; }
            if (month == 10 && date >= 23 || month == 11 && date <= 21) { value = "天蠍座"; }
            if (month == 11 && date >= 22 || month == 12 && date <= 21) { value = "射手座"; }
            if (month == 12 && date >= 22 || month == 1 && date <= 19) { value = "摩羯座"; }
        return value;
    }
    var bbVue = function (str, data) {
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

    //选取图片的来源，拍照和相册
    var addCommas = function (val) { var aIntNum = val.toString().split('.'); if (aIntNum[0].length >= 4) { aIntNum[0] = aIntNum[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,'); } if (aIntNum[1] && aIntNum[1].length >= 4) { aIntNum[1] = aIntNum[1].replace(/(\d{3})/g, '$1 '); } return aIntNum.join('.'); }

    var showActionSheet = function (conf, cb,onlyphoto,cantakephoto) {
        var divid = conf.id;
       
        var actionbuttons = [{ title: "照片"  }, { title: "影片" }];
        if (onlyphoto) {
            actionbuttons = [{ title: "照片" }];
        }
       
        if (cantakephoto) {
            actionbuttons.push({ title: "拍照" })
        }
        var actionstyle = { title: "選擇", cancel: "取消", buttons: actionbuttons };
        plus.nativeUI.actionSheet(actionstyle, function (e) {
            if (e.index == 1) {
                galleryImg(divid, cb,"image");
            } else if (e.index == 2) {
                if (cantakephoto) {
                    getImage(divid, cb, "image");
                } else {
                    galleryImg(divid, cb, "video");
                }
              
            }
        });
    }
    //相册选取图片
    var galleryImg = function (divid, cb, filter) {
        plus.gallery.pick(function (p) {
            plus.io.resolveLocalFileSystemURL(p, function (entry) {
                compressImage(entry.toLocalURL(), entry.name, divid, cb);
            }, function (e) {
                plus.nativeUI.toast("读取拍照文件错误：" + e.message);
            });
        }, function (e) {
        }, {
                filename: "_doc/camera/",
                filter: filter
            });
    }
    // 拍照
    var getImage = function (divid, cb, filter) {
        var cmr = plus.camera.getCamera();
        cmr.captureImage(function (p) {
            plus.io.resolveLocalFileSystemURL(p, function (entry) {
                compressImage(entry.toLocalURL(), entry.name, divid, cb);
            }, function (e) {
                plus.nativeUI.toast("读取拍照文件错误：" + e.message);
            });
        }, function (e) {
        }, {
                filename: "_doc/camera/",
                filter: filter,
                index: 1
            });
    }
    //压缩图片
    var compressImage = function (url, filename, divid, cb) {
        var name = "_doc/upload/" + divid + "-" + filename;//_doc/upload/F_ZDDZZ-1467602809090.jpg
        plus.zip.compressImage({
            src: url,//src: (String 类型 )压缩转换原始图片的路径
            dst: name,//压缩转换目标图片的路径
            quality: 100,//quality: (Number 类型 )压缩图片的质量.取值范围为1-100
            overwrite: true//overwrite: (Boolean 类型 )覆盖生成新文件
        },
            function (event) {
                //uploadf(event.target,divid);
                var path = name;//压缩转换目标图片的路径
                //event.target获取压缩转换后的图片url路
                //filename图片名称
                console.dir(event.target)
                console.dir(divid)
                console.dir(filename)
                console.dir(path)
                saveimage(event.target, divid, filename, path, cb);
            }, function (error) {
                plus.nativeUI.toast("压缩图片失败，请稍候再试");
            });
    }
    //保存信息到本地
    /**
     * 
     * @param {Object} url  图片的地址
     * @param {Object} divid  字段的名称
     * @param {Object} name   图片的名称
     */
    var saveimage = function (url, divid, name, path,cb) {
        var state = 0;
        var wt = plus.nativeUI.showWaiting();
        var id = "";
        //  plus.storage.clear(); 
        //name = name.substring(0, name.indexOf("."));
        //var id = document.getElementById("ckjl.id").value;
        //var itemname = id + "img-" + divid;
        //var itemvalue = plus.storage.getItem(itemname);
        //if (itemvalue == null) {
        //    itemvalue = "{" + name + "," + path + "," + url + "}";
        //} else {
        //    itemvalue = itemvalue + "{" + name + "," + path + "," + url + "}";
        //}
        //plus.storage.setItem(itemname, itemvalue);

        var src = url;
        //alert("itemvalue="+itemvalue);
        cb(name, divid,id, src);
        wt.close();

    }
    
    var _CheckVersion = function () {
        Bridge.readFile("Version.json", function (content) {
            var NowVersion = JSON.parse(content).Version;
            var CheckUrl = JSON.parse(content).JSON_Url;
            var xhr = new plus.net.XMLHttpRequest();
            xhr.onreadystatechange = function () {
                switch (xhr.readyState) {
                    case 4:
                        if (xhr.status == 200) {
                            var RemoteVersion = JSON.parse(xhr.responseText).Version;
                            if (RemoteVersion > NowVersion) {
                                Bridge.LogOut(function () { }, "有新版本!新版号:" + RemoteVersion)
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
            xhr.open("GET", CheckUrl);
            xhr.send();
        });
        
    }

    var _ShowLongWords = function ($parent, st, needwidth, isorg, font, color, textAlign, IdxToCut) {
        $parent.empty();
        //st = st + "appleappleappleappleapple"
        var canv = document.createElement('canvas');
        needwidth = needwidth ? needwidth : .9;
      
        canv.width = $parent.width()  ;
        canv.height = $parent.height();
       // $(canv).css("opacity", "0.4");
       // $(canv).css("background-color", "gray");
        $(canv).css("margin", "0 auto");
        $parent.css("margin", "0 auto");
        $parent.append($(canv));
        var c = $parent.find("canvas");
       
        
  
     
        var ctx = c[0].getContext("2d");
      
        ctx.font = font ? font : "24px Arial";//"3vw Arial";
        ctx.color = color ? color : "black";//"black";
        ctx.textAlign = textAlign ? textAlign : "center";//"center";
        ctx.textBaseline = 'middle';
        IdxToCut = IdxToCut ? IdxToCut : 100;
        //var testword = "Q";
        //var fw = 1;
        //var testw = ctx.measureText(st.substring(0, fw)).width;
        //if (ctx.measureText(st).width > c.width() * needwidth) {
        //    while (testw < c.width() * needwidth) {
        //        fw++;
        //        testw = ctx.measureText(st.substring(0, fw)).width;
        //    }
        //    IdxToCut = IdxToCut ? IdxToCut : fw;
        //} else {
        //    IdxToCut = IdxToCut ? IdxToCut : 40;
        //}
       
      
      
       
        //alert(c.width());
        //alert(ctx.measureText(st).width);
        var w;
        if (isorg) {
            w = c.width() * needwidth / ctx.measureText(st).width*1.0 ;
            if (st.length < 20)
                w = c.width() * needwidth / ctx.measureText(st).width*0.8;
        } else {
            w = c.width() * needwidth / ctx.measureText(st).width * .8;
            if (st.length < 20)
                w = c.width() * needwidth / ctx.measureText(st).width * .6;
        }
      

        if (w > 1)
            w = 1;
        var h = w;
        if (st.length > IdxToCut) {
            w = c.width() *needwidth / ctx.measureText(st.substring(0, (IdxToCut - 1))).width * 1.0;
            h = w;
        }
       
        ctx.scale(w, h);
         
        //if (st.length >= IdxToCut) {
        //    var sc = Math.ceil(st.length / IdxToCut);
        //    for (var i = 1; i <= sc; i++) {
        //        ctx.fillText(st.substring((i - 1) * IdxToCut, (i) * IdxToCut), c.width() / 2 / w, c.height() * ((0.1 * i / w))  + (c.height() / 2)+2);
        //    }
        //} else {
        //    if (w > 1)
        //        ctx.fillText(st, c.width() / 2 / w + (c.width() * (1 - needwidth) / 2), (c.height() * 0.1 / w) + (c.height() / w), c.width() / w * needwidth);
        //    else
        //        ctx.fillText(st, c.width() / 2 / w + (c.width() * (1 - needwidth) / 2), (c.height() * 0.1 / w) + (c.height() / w), c.width() / w * needwidth);
        //}
        var sc = Math.ceil(st.length / IdxToCut);
        for (var i = 1; i <= sc; i++) {
            ctx.fillText(
                st.substring((i - 1) * IdxToCut, (i) * IdxToCut),
                c.width() * 1.0 / 2 / w + (($parent.width()  - c.width())/2 / w),
                c.height() / w / 2
               // c.height() / w / 1.5 + (c.height() / w * (1-sc)*0.2) + (c.height() / w*0.4 * (i-1))
                // c.height() * ((0.25  * i / w)) + (c.height() / 2 / w / sc) ,
               
            );
        }

       // alert(c.width() / 2 / w)
       // alert(c.height() * ((0.1 * i / w)) + (c.height() / 2/w) + 2)
    }

}











