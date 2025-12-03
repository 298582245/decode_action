//Wed Dec 03 2025 16:33:46 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const cheerio = require("cheerio"),
  axios = require("axios"),
  crypto = require("crypto"),
  qs = require("qs");
function sleep(_0x575117) {
  console.log("🛌开始等待" + _0x575117 / 1000 + "秒");
  return new Promise(_0x43a8cd => setTimeout(_0x43a8cd, _0x575117));
}
function get13DigitTimestamp() {
  return Date.now();
}
function generateRandomString(_0x2a9f73 = 16) {
  const _0x140bf8 = "abcdefghijklmnopqrstuvwxyz0123456789";
  let _0xa6f6fa = "";
  const _0x324d00 = _0x140bf8.length;
  for (let _0x2e8b8d = 0; _0x2e8b8d < _0x2a9f73; _0x2e8b8d++) {
    _0xa6f6fa += _0x140bf8.charAt(Math.floor(Math.random() * _0x324d00));
  }
  return _0xa6f6fa;
}
function getUserReqKey() {
  function _0x17bae1() {
    {
      const _0x177fe6 = new Date(),
        _0x1bb5fc = _0x177fe6.getFullYear(),
        _0x3a0ae0 = String(_0x177fe6.getMonth() + 1).padStart(2, "0"),
        _0x554adf = String(_0x177fe6.getDate()).padStart(2, "0"),
        _0x3dc9be = String(_0x177fe6.getHours()).padStart(2, "0"),
        _0x27a7e8 = String(_0x177fe6.getMinutes()).padStart(2, "0"),
        _0x463abb = String(_0x177fe6.getSeconds()).padStart(2, "0");
      return "" + _0x1bb5fc + _0x3a0ae0 + _0x554adf + _0x3dc9be + _0x27a7e8 + _0x463abb;
    }
  }
  let _0x5a08f8 = _0x17bae1();
  !_0x5a08f8 && (_0x5a08f8 = generateRandomString(8));
  return generateRandomString(2) + _0x5a08f8.substring(3) + generateRandomString(3);
}
async function getOne() {
  try {
    {
      const _0x2049d8 = await axios.get("https://api.nxvav.cn/api/yiyan/?encode=json&charset=utf-8");
      return _0x2049d8.data?.["yiyan"] || "人生得意须尽欢";
    }
  } catch (_0x4e832a) {
    console.log("error", _0x4e832a);
    return "人生得意须尽欢";
  }
}
class decryptAndEncrypt {
  constructor() {}
  ["md5Encrypt"](_0x355360) {
    const _0x262f96 = crypto.createHash("md5");
    return _0x262f96.update(_0x355360).digest("hex");
  }
  ["sha256"](_0x31f25e) {
    return crypto.createHash("sha256").update(_0x31f25e).digest("hex");
  }
  ["aesEncrypt"](_0x11031c, _0x30186f, _0xd99896) {
    const _0x5c7b7a = crypto.createCipheriv("aes-256-cbc", _0x30186f, _0xd99896);
    let _0xefb4f2 = _0x5c7b7a.update(_0x11031c, "utf8", "hex");
    _0xefb4f2 += _0x5c7b7a.final("hex");
    return _0xefb4f2;
  }
  ["aesDecrypt"](_0x3fa7a4, _0x9819f9, _0x117ed0) {
    const _0x21291d = crypto.createDecipheriv("aes-256-cbc", _0x9819f9, _0x117ed0);
    let _0x58b07e = _0x21291d.update(_0x3fa7a4, "hex", "utf8");
    _0x58b07e += _0x21291d.final("utf8");
    return _0x58b07e;
  }
  ["rsaEncrypt"](_0xa730e1, _0x38264e) {
    const _0x51f192 = Buffer.from(_0xa730e1, "utf8"),
      _0x2029df = crypto.publicEncrypt({
        "key": _0x38264e,
        "padding": crypto.constants.RSA_PKCS1_PADDING
      }, _0x51f192);
    return _0x2029df.toString("base64");
  }
  ["rsaDecrypt"](_0x5cfc8c, _0x28f565) {
    const _0xb7a7f4 = Buffer.from(_0x5cfc8c, "base64"),
      _0x3ae7f3 = crypto.privateDecrypt({
        "key": _0x28f565,
        "padding": crypto.constants.RSA_PKCS1_PADDING
      }, _0xb7a7f4);
    return _0x3ae7f3.toString("utf8");
  }
}
class Cxh5 {
  constructor(_0x2751ce, _0x2d8ce5) {
    this.x_token = _0x2751ce;
    let _0x205f06 = JSON.stringify({
      "x-token": _0x2751ce,
      "x-version": "774",
      "x-fontsize": "1"
    });
    const _0x50ff04 = encodeURI("headInfo=" + _0x205f06);
    this.decryptAndEncrypt = new decryptAndEncrypt();
    this.reqKey = getUserReqKey();
    this.articleList = [];
    this.userId = "631167";
    this.postList = [];
    this.deviceKey = _0x2d8ce5;
  }
  ["getSIgn"](_0x186ad0, _0x5049c6, _0x537362) {
    let _0x33b327 = "@#@$AXdm123%)(ds" + _0x186ad0 + _0x5049c6 + this.reqKey + _0x537362;
    return this.decryptAndEncrypt.md5Encrypt(_0x33b327);
  }
  ["getHeaders"]() {
    let _0x3c0bf9 = {
      "User-Agent": "okhttp/3.11.0",
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip",
      "accept-version": "200",
      "x-version": "730",
      "version": "7.19.0",
      "X-Token": this.x_token
    };
    return _0x3c0bf9;
  }
  async ["getUserInfo"]() {
    let _0x469bc0 = get13DigitTimestamp(),
      _0x1e3cf2 = "api/UserInfo/GetRedNumberModel",
      _0x50bbe8 = generateRandomString(7),
      _0x48a7ec = this.getSIgn(_0x469bc0, _0x50bbe8, _0x1e3cf2),
      _0x565ba1 = "" + _0x469bc0 + _0x50bbe8 + this.reqKey,
      _0x38d6f6 = {
        "method": "GET",
        "url": "https://cxapi.xiaodingkeji.com/api/UserInfo/GetRedNumberModel?newspapergroupId=15403&&sign=" + _0x48a7ec + "&stamp=" + _0x565ba1 + "&page=1",
        "headers": this.getHeaders()
      };
    const _0x17e5dd = await axios(_0x38d6f6);
    _0x17e5dd.data.success ? (console.log("✅获取个人信息成功"), this.userId = _0x17e5dd.data.data.userinfo.Id, this.userPhone = _0x17e5dd.data.data.userinfo.phone) : console.log("❌获取个人信息失败");
  }
  async ["userSignEveryDay"]() {
    let _0x29cbe5 = get13DigitTimestamp(),
      _0x214de6 = "api/UserInfo/UserSignIn",
      _0x3cb545 = generateRandomString(7),
      _0x139946 = this.getSIgn(_0x29cbe5, _0x3cb545, _0x214de6),
      _0xe2009d = "" + _0x29cbe5 + _0x3cb545 + this.reqKey,
      _0x2d65bf = {
        "method": "GET",
        "url": "https://cxapi.xiaodingkeji.com/api/UserInfo/UserSignIn?newspapergroupId=15403&sign=" + _0x139946 + "&stamp=" + _0xe2009d + "&page=1",
        "headers": this.getHeaders()
      };
    const _0x2f00ef = await axios(_0x2d65bf);
    if (_0x2f00ef.data.success) {
      {
        let _0x374233 = _0x2f00ef.data.data.score,
          _0x32b64a = _0x2f00ef.data.data.addScore;
        console.log("✅签到成功，获得" + _0x32b64a + "积分，当前总积分" + _0x374233);
      }
    } else console.log("❌每日签到失败");
  }
  async ["getUserTaskList"]() {
    let _0x52f8c3 = get13DigitTimestamp(),
      _0x3c6856 = "api/UserInfo/TaskProgress",
      _0x518d25 = generateRandomString(7),
      _0x472fd1 = this.getSIgn(_0x52f8c3, _0x518d25, _0x3c6856),
      _0x4b79e8 = "" + _0x52f8c3 + _0x518d25 + this.reqKey,
      _0x32f7ef = {
        "method": "GET",
        "url": "https://cxapi.xiaodingkeji.com/api/UserInfo/TaskProgress?newspapergroupId=15403&&sign=" + _0x472fd1 + "&stamp=" + _0x4b79e8 + "&page=1",
        "headers": this.getHeaders()
      };
    const _0x3a25c4 = await axios(_0x32f7ef);
    if (_0x3a25c4.data.success) {
      {
        console.log("✅获取任务列表成功");
        const _0x3b3353 = _0x3a25c4.data.data;
        for (const _0x3e1c9c of _0x3b3353) {
          if (_0x3e1c9c.taskName == "邀请新人") continue;else console.log(_0x3e1c9c.taskName + "==>可获得积分：" + _0x3e1c9c.awardScore + "  ==>可完成次数：" + _0x3e1c9c.totalProgress + "  ==>已完成次数：" + _0x3e1c9c.myProgress + "  ==>完成状态：" + (_0x3e1c9c.state == 0 ? "未完成" : "已完成"));
        }
      }
    } else console.log("❌获取任务列表失败");
  }
  async ["getArticleList"]() {
    let _0x31feb5 = get13DigitTimestamp(),
      _0x5b44b2 = "api/News/GetArticleList",
      _0x21b06e = generateRandomString(7),
      _0x240801 = this.getSIgn(_0x31feb5, _0x21b06e, _0x5b44b2),
      _0x4a867e = "" + _0x31feb5 + _0x21b06e + this.reqKey,
      _0x5a31b9 = {
        "method": "GET",
        "url": "https://cxapi.xiaodingkeji.com/api/News/GetArticleList?ColumnId=0&PageSize=20&newspapergroupId=15403&sign=" + _0x240801 + "&stamp=" + _0x4a867e + "&page=1",
        "headers": this.getHeaders()
      };
    const _0x477e4a = await axios(_0x5a31b9);
    _0x477e4a.data.success ? (console.log("✅获取文章列表成功"), this.articleList = _0x477e4a.data.articleList) : console.log("❌获取文章列表失败");
  }
  async ["getArticleHtml"](_0xa33bff) {
    let _0x301e35 = await axios.get("https://cxh5.xiaodingkeji.com/news/article?ArticleId=" + _0xa33bff + "&NewspaperGroupId=15403");
    const _0x44049e = _0x301e35.data,
      _0x14e01d = cheerio.load(_0x44049e),
      _0x388d41 = _0x14e01d("#sign").val(),
      _0xa741ee = _0x14e01d("#stamp").val();
    return {
      "articleId": _0xa33bff,
      "stamp": _0xa741ee,
      "sign": _0x388d41
    };
  }
  async ["addReaderNumber"](_0x5dea9c) {
    let _0x1e3c9c = qs.stringify(_0x5dea9c),
      _0x24cd54 = {
        "method": "POST",
        "url": "https://cxh5.xiaodingkeji.com/News/AddReaderNumber",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22021211RC Build/TKQ1.220807.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/137.0.7151.89 Mobile Safari/537.36;xdinformation;x-token:[" + this.x_token + "];x-userinfoId:[" + this.userId + "];x-device:[" + this.deviceKey + "]",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Content-Type": "application/x-www-form-urlencoded",
          "pragma": "no-cache",
          "cache-control": "no-cache",
          "sec-ch-ua-platform": "\"Android\"",
          "x-requested-with": "XMLHttpRequest",
          "sec-ch-ua": "\"Android WebView\";v=\"137\", \"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "sec-ch-ua-mobile": "?1",
          "origin": "https://cxh5.xiaodingkeji.com",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://cxh5.xiaodingkeji.com/news/article?ArticleId=" + _0x5dea9c.articleId + "&NewspaperGroupId=15403",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "priority": "u=1, i",
          "Cookie": this.x_cookie
        },
        "data": _0x1e3c9c
      };
    const _0xee74a4 = await axios(_0x24cd54);
    _0xee74a4.data.result ? console.log("✅该文章阅读记录添加成功") : console.log("❌该文章阅读记录添加失败");
    return _0xee74a4.data.result;
  }
  async ["getArticlePrize"](_0x3372b7) {
    let _0x2d740c = get13DigitTimestamp(),
      _0x1523e0 = "api/News/ReadNewsAward",
      _0x109836 = generateRandomString(7),
      _0x5554db = this.getSIgn(_0x2d740c, _0x109836, _0x1523e0),
      _0xc11ba0 = "" + _0x2d740c + _0x109836 + this.reqKey,
      _0x1e84e4 = {
        "method": "GET",
        "url": "https://cxapi.xiaodingkeji.com/api/News/ReadNewsAward?articleType=1&newspapergroupId=15403&sign=" + _0x5554db + "&stamp=" + _0xc11ba0 + "&ArticleId=" + _0x3372b7,
        "headers": this.getHeaders()
      };
    const _0x52fad6 = await axios(_0x1e84e4);
    return _0x52fad6.data.success;
  }
  async ["shareArticle"](_0x325988) {
    let _0x4b1c95 = get13DigitTimestamp(),
      _0x4c2320 = "api/News/ShareArticle",
      _0x477a88 = generateRandomString(7),
      _0x21de10 = this.getSIgn(_0x4b1c95, _0x477a88, _0x4c2320),
      _0x15cc03 = "" + _0x4b1c95 + _0x477a88 + this.reqKey,
      _0x3f45a5 = {
        "method": "GET",
        "url": "https://cxapi.xiaodingkeji.com/api/News/ShareArticle?articleType=1&newspapergroupId=15403&sign=" + _0x21de10 + "&UserInfoId=" + this.userId + "&stamp=" + _0x15cc03 + "&ArticleId=" + _0x325988 + "&ShareChannel=2",
        "headers": this.getHeaders()
      };
    const _0x390cf2 = await axios(_0x3f45a5);
    if (_0x390cf2.data.success) {
      console.log("✅文章分享成功,获得积分：" + _0x390cf2.data.data.addScore);
    } else console.log("❌文章分享失败");
  }
  async ["getSharePrize"]() {
    let _0x2f79bd = get13DigitTimestamp(),
      _0x5d4cdd = "api/News/RollPrize",
      _0x517d08 = generateRandomString(7),
      _0x259988 = this.getSIgn(_0x2f79bd, _0x517d08, _0x5d4cdd),
      _0x4cd1f5 = "" + _0x2f79bd + _0x517d08 + this.reqKey,
      _0x278cde = {
        "method": "GET",
        "url": "https://cxapi.xiaodingkeji.com/api/News/RollPrize?actionType=1&newspapergroupId=15403&sign=" + _0x259988 + "&stamp=" + _0x4cd1f5,
        "headers": this.getHeaders()
      };
    const _0x48b407 = await axios(_0x278cde);
    _0x48b407.data.success ? console.log("✅文章分享奖励领取成功,获得积分：" + _0x48b407.data.data.score) : (console.log("❌文章分享奖励领取失败"), console.log(JSON.stringify(_0x48b407.data)));
  }
  async ["likeArticle"](_0x373cf5) {
    let _0x24798a = get13DigitTimestamp(),
      _0x584f3e = "api/News/SayGood",
      _0x1030c6 = generateRandomString(7),
      _0x4c150c = this.getSIgn(_0x24798a, _0x1030c6, _0x584f3e),
      _0x430b2f = "" + _0x24798a + _0x1030c6 + this.reqKey,
      _0x892103 = {
        "method": "GET",
        "url": "https://cxapi.xiaodingkeji.com/api/News/SayGood?articleType=1&newspapergroupId=15403&sign=" + _0x4c150c + "&UserInfoId=" + this.userId + "&stamp=" + _0x430b2f + "&ArticleId=" + _0x373cf5,
        "headers": this.getHeaders()
      };
    const _0x3df7a5 = await axios(_0x892103);
    return _0x3df7a5.data.success;
  }
  async ["plArticle"](_0x17983c) {
    let _0x12a024 = get13DigitTimestamp(),
      _0x5115f9 = "api/News/PostComment",
      _0x464adf = generateRandomString(7),
      _0x4a7ca2 = this.getSIgn(_0x12a024, _0x464adf, _0x5115f9),
      _0x123c30 = "" + _0x12a024 + _0x464adf + this.reqKey;
    const _0x3cd29d = ["祝慈晓越来越好", "祝大家万事顺遂", "祝大家春风得意", "中国蓬勃发展ing"],
      _0x308e20 = _0x3cd29d[Math.floor(Math.random() * _0x3cd29d.length)];
    let _0x17f72c = qs.stringify({
        "replyCommentId": "",
        "articleType": "1",
        "Content": _0x308e20,
        "newspapergroupId": "15403",
        "articleId": _0x17983c,
        "sign": _0x4a7ca2,
        "stamp": _0x123c30
      }),
      _0x10f835 = {
        "method": "POST",
        "url": "https://cxapi.xiaodingkeji.com/api/News/PostComment",
        "headers": this.getHeaders(),
        "data": _0x17f72c
      };
    const _0x555bd2 = await axios(_0x10f835);
    if (_0x555bd2.data.success) {
      console.log("✅该文章评论添加成功");
      console.log(_0x555bd2.data.message + "==>" + _0x555bd2.data.data.content);
    } else console.log("❌该文章阅读评论添加失败"), console.log("" + JSON.stringify(_0x555bd2.data));
  }
  async ["articleTask"]() {
    await this.getArticleList();
    await sleep(1000);
    for (const _0x2b62e8 of this.articleList) {
      {
        if (_0x2b62e8.Id == 0 || _0x2b62e8.Id == 315 || _0x2b62e8.columnName == null) {
          console.log("🚶‍♀️‍➡️跳过轮播图，这一个不是文章");
          continue;
        } else {
          console.log("开始阅读文章：" + _0x2b62e8.title + "\n获取文章信息");
          const _0x15467f = await this.getArticleHtml(_0x2b62e8.Id);
          await sleep(1000);
          await this.addReaderNumber(_0x15467f);
          await sleep(5000);
          let _0x1f128c = await this.getArticlePrize(_0x2b62e8.Id);
          _0x1f128c ? console.log("✅文章==>" + _0x2b62e8.title + "==>已领取奖励") : console.log("❌文章==>" + _0x2b62e8.title + "==>积分领取失败");
          let _0xc1b03a = await this.likeArticle(_0x2b62e8.Id);
          _0xc1b03a ? console.log("✅文章==>" + _0x2b62e8.title + "==>点赞成功") : console.log("❌文章==>" + _0x2b62e8.title + "==>点赞失败");
          await sleep(3000);
          await this.shareArticle(_0x2b62e8.Id);
          await sleep(2000);
          await this.getSharePrize();
          await sleep(5000);
          await this.plArticle(_0x2b62e8.Id);
        }
      }
    }
  }
  async ["getPostsList"]() {
    let _0x4cf7a3 = get13DigitTimestamp(),
      _0xe66fd7 = "api/Posts/GetPostsList",
      _0x4b8003 = generateRandomString(7),
      _0x398af6 = this.getSIgn(_0x4cf7a3, _0x4b8003, _0xe66fd7),
      _0x580c8b = "" + _0x4cf7a3 + _0x4b8003 + this.reqKey,
      _0x4ef7a1 = {
        "method": "GET",
        "url": "https://cxapi.xiaodingkeji.com/api/Posts/GetPostsList?PageSize=20&newspapergroupId=15403&sign=" + _0x398af6 + "&UserInfoId=" + this.userId + "&stamp=" + _0x580c8b + "&page=1",
        "headers": this.getHeaders()
      };
    const _0xd65ff7 = await axios(_0x4ef7a1);
    _0xd65ff7.data.success ? (console.log("✅帖子列表获取成功"), this.postList = _0xd65ff7.data.postsList) : console.log("❌帖子列表获取失败");
  }
  async ["likePosts"](_0x39e430) {
    let _0xbfdabc = get13DigitTimestamp(),
      _0x49be10 = "api/Posts/SayGood",
      _0x592a34 = generateRandomString(7),
      _0x2b28c8 = this.getSIgn(_0xbfdabc, _0x592a34, _0x49be10),
      _0x1a2d21 = "" + _0xbfdabc + _0x592a34 + this.reqKey,
      _0x24ab34 = {
        "method": "GET",
        "url": "https://cxapi.xiaodingkeji.com/api/Posts/SayGood?newspapergroupId=15403&sign=" + _0x2b28c8 + "&UserInfoId=" + this.userId + "&PostsId=" + _0x39e430 + "&stamp=" + _0x1a2d21 + "&page=1",
        "headers": this.getHeaders()
      };
    const _0x2bcd75 = await axios(_0x24ab34);
    _0x2bcd75.data.success ? console.log("✅帖子点赞成功，获得了" + _0x2bcd75.data.addcoin + "分") : console.log("❌帖子点赞失败，可能是已经点赞");
  }
  async ["sharePosts"](_0x13d86a) {
    let _0x560210 = get13DigitTimestamp(),
      _0xe7c91 = "api/UserInfo/UserShare",
      _0x55cf2f = generateRandomString(7),
      _0x5bc978 = this.getSIgn(_0x560210, _0x55cf2f, _0xe7c91),
      _0x40956f = "" + _0x560210 + _0x55cf2f + this.reqKey,
      _0x12ddb9 = {
        "method": "GET",
        "url": "https://cxapi.xiaodingkeji.com/api/UserInfo/UserShare?newspapergroupId=15403&ClientInfoId=15403&sign=" + _0x5bc978 + "&UserInfoId=" + this.userId + "&PostsId=" + _0x13d86a + "&stamp=" + _0x40956f + "&ShareChannel=2",
        "headers": this.getHeaders()
      };
    const _0x302ee2 = await axios(_0x12ddb9);
    _0x302ee2.data.success ? console.log("✅帖子分享成功，" + _0x302ee2.data.message) : console.log("❌帖子分享失败，" + _0x302ee2.data.message);
  }
  async ["getPostReply"](_0x194d4a) {
    let _0x58b633 = get13DigitTimestamp(),
      _0x34bb6f = "api/Posts/GetPostsReply",
      _0x1535d6 = generateRandomString(7),
      _0x3af668 = this.getSIgn(_0x58b633, _0x1535d6, _0x34bb6f),
      _0x225861 = "" + _0x58b633 + _0x1535d6 + this.reqKey,
      _0x1f6ee9 = {
        "method": "GET",
        "url": "https://cxapi.xiaodingkeji.com/api/Posts/GetPostsReply?orderType=0&newspapergroupId=15403&sign=" + _0x3af668 + "&PostsId=" + _0x194d4a + "&UserInfoId=" + this.userId + "&stamp=" + _0x225861 + "&page=1",
        "headers": this.getHeaders()
      };
    const _0x240075 = await axios(_0x1f6ee9);
    if (_0x240075.data.success) return console.log("✅帖子评论列表获取成功"), _0x240075.data.data || [];else console.log("❌帖子评论列表获取失败，" + _0x240075.data.message);
  }
  async ["likeReply"](_0x8df546) {
    let _0xd3a4a1 = get13DigitTimestamp(),
      _0x2a5d7a = "api/Posts/SayReplyGood",
      _0x14b840 = generateRandomString(7),
      _0x587a7d = this.getSIgn(_0xd3a4a1, _0x14b840, _0x2a5d7a),
      _0x1bb9f8 = "" + _0xd3a4a1 + _0x14b840 + this.reqKey,
      _0x229b52 = {
        "method": "GET",
        "url": "https://cxapi.xiaodingkeji.com/api/Posts/SayReplyGood?ReplyId=" + _0x8df546 + "&newspapergroupId=15403&sign=" + _0x587a7d + "&UserInfoId=" + this.userId + "&stamp=" + _0x1bb9f8,
        "headers": this.getHeaders()
      };
    const _0x357e88 = await axios(_0x229b52);
    if (_0x357e88.data.success) return console.log("✅帖子评论点赞成功，获得积分:" + _0x357e88.data.addcoin), _0x357e88.data.data || [];else {
      console.log("❌帖子评论点赞失败，" + _0x357e88.data.message);
    }
  }
  async ["replyPosts"](_0x1e9a5b, _0x477e01) {
    let _0x3abec8 = get13DigitTimestamp(),
      _0x52e031 = "api/Posts/PostReply",
      _0xba56e4 = generateRandomString(7),
      _0x4ab6ba = this.getSIgn(_0x3abec8, _0xba56e4, _0x52e031),
      _0x3b86b2 = "" + _0x3abec8 + _0xba56e4 + this.reqKey,
      _0x20786b = qs.stringify({
        "Content": _0x477e01,
        "newspapergroupId": "15403",
        "sign": _0x4ab6ba,
        "PostsId": _0x1e9a5b,
        "stamp": _0x3b86b2
      }),
      _0x4d3087 = {
        "method": "POST",
        "url": "https://cxapi.xiaodingkeji.com/api/Posts/PostReply",
        "headers": this.getHeaders(),
        "data": _0x20786b
      };
    const _0x14e523 = await axios(_0x4d3087);
    if (_0x14e523.data.success) {
      console.log("✅帖子评论成功");
      return _0x14e523.data.data.Id;
    } else console.log("❌帖子评论失败，" + _0x14e523.data.message);
  }
  async ["postsTask"]() {
    await this.getPostsList();
    await sleep(1000);
    for (const _0x4fb8d2 of this.postList) {
      console.log("开始阅读帖子：" + _0x4fb8d2.detail);
      await this.likePosts(_0x4fb8d2.postsId);
      await sleep(3000);
      await this.sharePosts(_0x4fb8d2.postsId);
      await sleep(3000);
      const _0x2a9cf = await this.getPostReply(_0x4fb8d2.postsId);
      if (_0x2a9cf.length > 0) {
        _0x2a9cf.forEach(async _0x14f5a3 => {
          console.log("开始点赞帖子评论：" + _0x14f5a3.replyContent);
          await this.likeReply(_0x14f5a3.Id);
          await sleep(2000);
        });
      } else console.log("当前帖子：" + _0x4fb8d2.detail + "  评论列表为空，不执行评论点赞");
      console.log("开始评论帖子：" + _0x4fb8d2.detail);
      let _0x1cdcb8 = "";
      if (_0x2a9cf.length === 0) {
        console.log("当前帖子：" + _0x4fb8d2.detail + "  无评论，随机评论");
        const _0x5cea76 = ["祝慈晓越来越好", "祝大家万事顺遂", "祝大家春风得意", "中国蓬勃发展ing"];
        _0x1cdcb8 = _0x5cea76[Math.floor(Math.random() * _0x5cea76.length)];
      } else _0x1cdcb8 = _0x2a9cf[0].replyContent;
      const _0x35b70f = await this.replyPosts(_0x4fb8d2.postsId, _0x1cdcb8);
      await sleep(2000);
      console.log("开始点赞自己的评论：" + _0x1cdcb8);
      await this.likeReply(_0x35b70f);
      await sleep(2000);
    }
  }
  async ["everyExchange"](_0x717636) {
    let _0x367f73 = get13DigitTimestamp(),
      _0x4f6b77 = "api/ScoreMall/Exchange",
      _0x322ec8 = generateRandomString(7),
      _0x6c5a96 = this.getSIgn(_0x367f73, _0x322ec8, _0x4f6b77),
      _0xf5f2f6 = "" + _0x367f73 + _0x322ec8 + this.reqKey,
      _0x571f9b = {
        "method": "GET",
        "headers": this.getHeaders(),
        "url": "https://cxapi.xiaodingkeji.com/api/ScoreMall/Exchange?goodsId=" + _0x717636 + "&newspapergroupId=15403&sign=" + _0x6c5a96 + "&deviceKey=" + this.deviceKey + "&stamp=" + _0xf5f2f6
      };
    const _0x4e43ba = await axios(_0x571f9b);
    _0x4e43ba.data.success ? console.log("✅积分兑换成功") : console.log("❌积分兑换失败，" + _0x4e43ba.data.message);
  }
  async ["doTask"]() {
    await this.getUserInfo();
    await sleep(1000);
    await this.userSignEveryDay();
    await sleep(1000);
    await this.articleTask();
    await sleep(1000);
    await this.postsTask();
    await sleep(1000);
    await this.getUserTaskList();
    await sleep(1000);
    const _0x29762e = new Date().getDay(),
      _0x4801e5 = "598";
    _0x29762e == 0 || _0x29762e == 6 ? (console.log("今天是周末，使用20积分兑换积分商品"), _0x4801e5 = "599") : console.log("今天是工作日，使用50积分兑换积分商品");
    this.everyExchange(_0x4801e5);
  }
}
let user = process.env.CXUSER || "";
if (user.length == 0) {}
let userList = user.split("&").map(_0x3b57bf => {
  let _0x56a91b = _0x3b57bf.split("#"),
    _0x333045 = "",
    _0x4b3870 = "";
  if (_0x56a91b.length == 2) {
    _0x333045 = _0x56a91b[0];
    _0x4b3870 = _0x56a91b[1];
  } else _0x333045 = _0x56a91b[0], _0x4b3870 = generateRandomString(40).toUpperCase();
  return {
    "token": _0x333045,
    "devideId": _0x4b3870
  };
});
const base64String = "ICAgJCQkICAgICAgICAgJCQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkJCAgICAgICAgICAKICAgJCQkICAgJCQkJCQkJCQkJCQkJCQkJCAgICQkJCQkJCQkJCQkJCQkJCQkJCQkJCAgICQkJCQkJCQkJCQgJCQkICAgICAgICAgICAKICQkJCQkJCQkJCQkICAgICAkJCQgICQkJCAgICAgICAgICAgICAgICAgICAgJCQkJCAgICQkJCQkJCQkJCQgJCQkJCQkJCQkJCQkJCQKJCQkJCQkJCQkJCQkICQkJCAkJCQgICQkJCAgICAkJCQkJCQkJCQkJCQkJCQkJCQkJCAgICQkJCAgICQkJCAkJCQgICQkJCAgICQkJCAKICAgJCQkJCAgJCQkICQkJCAkJCQgICQkJCAgICAgICAgICAgICAgICAgICAgJCQkJCAgICAkJCQgICQkJCQkJCAgJCQkJCAkJCQkICAKICAkJCQkJCQkJCQkICQkJCAkJCQgICQkJCAgICQkJCQkJCQkJCQkJCQkJCQkJCQkJCAgICAgJCQkJCQkJCAkJCAgJCQkJCAgICAgICAKICQkJCQkICQkJCQkICQkJCAkJCQgICQkJCAgICAgICAgICAgICAgICAgICQkJCAgICAgICAgICQkJCQkICAgICAgJCQkJCAgICAgICAKJCQkJCQkICAgJCQkJCQkJCAkJCQgICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCAgICAkJCQkJCAgICAkJCQkJCQgICAgICAKJCQgJCQkICAkJCQkJCQkJCAkJCQgICQkJCAgICAgICQkJCAgICAgICAgICQkJCAgICAgICAgJCQkJCQkJCQgICQkJCQgJCQkJCAgICAKICAgJCQkICAgICAgJCQkICAkJCQkJCQkICAgICAgICQkJCQkICAgICAgICQkJCAgICAgICAkJCQkICAkJCQkJCQkJCAgICQkJCQgICAKICAgJCQkICAgICQkJCQgICAkJCQgICAgICAgICAgICAgICQkICAgICAgICQkJCAgICAgJCQkJCAgICAgJCQkJCQgICAgICAkJCQkJCQKICAgJCQkICQkJCQkICAgICAkJCQgICAgICAgICAgICAgICAgICAkJCQkJCQkICAgICAgICAgICAgICAkJCQgICAgICAgICAgICAkJCAgICAgCuatpOiEmuacrOWPquS4uuacrOe+pOWGhemDqOe+pOWRmOS9v+eUqO+8jOacque7j+WFgeiuuOemgeatouS8oOaSre+8jOS4gOe7j+WPkeeOsOWQjuaenOiHqui0n+OAggrlpoLmnpzkvaDmhI/lpJbojrflvpfmraTmnKzlj6/ogZTns7vnvqTkuLvvvIzkuL7miqXkvKDmkq3ogIXlj6/ku6Pmm7/ku5bnmoTkvY3nva4K5YG35pK4576k5Li7cTo0MzE0MjQwNzAq5LuY6LS56L+b77yM5LuL5oSP5Yu/5omwCuaKk+WMheWlluWTgeWFkeaNoumhteS4i+eahGRldmlkZUlk5ZKMdG9rZW7vvIzmoLzlvI8idG9rZW4jZGV2aWRlSWQi77yMZGV2aWRlSWTlj6/ku6XkuI3loavvvIzlj5jph4/lkI3np7DigJxDWFVTRVLigJ0KCkBhdXRob3IgYnkgbGl1eHVuaHVhbgpjcmVhdGVUaW1lIDIwMjUuNy4z";
try {
  const decodedBuffer = Buffer.from(base64String, "base64"),
    decodedString = decodedBuffer.toString("utf8");
  console.log(decodedString);
  console.log("<==================================================>");
} catch (_0x1a9074) {
  console.error(_0x1a9074);
}
console.log("共" + userList.length + "个用户");
const clients = userList.map(_0x3df480 => new Cxh5(_0x3df480.token, _0x3df480.devideId));
(async () => {
  for (const _0x357979 of clients) {
    await _0x357979.doTask();
  }
})();