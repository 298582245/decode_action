//Tue Sep 02 2025 02:21:33 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x541b7e = {
  rejectUnauthorized: false
};
const https = require("https");
const agent = new https.Agent(_0x541b7e);
const accounts = (process.env.dnys || "").split("\n").map(_0x5726b8 => _0x5726b8.trim()).filter(Boolean).map(_0x1ec2e9 => {
  const [_0x199f63, _0x27e2f2] = _0x1ec2e9.split("#");
  return {
    remark: _0x199f63.trim(),
    token: _0x27e2f2.trim()
  };
});
!accounts.length && (console.log("环境变量 dyns 未设置或格式不正确"), process.exit(0));
const baseURL = "https://api.digital4danone.com.cn/healthyaging/danone/wx/ha/selfcare";
const today = new Date().toISOString().slice(0, 10);
async function getTaskList(_0x2adffd) {
  const _0x58e95d = {
    "X-Access-Token": _0x2adffd
  };
  const _0x5be0b5 = {
    headers: _0x58e95d,
    agent: agent
  };
  const _0x274a3d = await fetch(baseURL + "/getCalendar", _0x5be0b5);
  return _0x274a3d.json();
}
async function punchTask(_0x86ea24, _0xeeacba, _0x33bc8f, _0x346033 = {}) {
  const _0x337645 = {
    userTaskDetailId: _0xeeacba,
    ruleIds: _0x33bc8f,
    taskDataCode: "Auto",
    taskDataValue: _0x346033
  };
  const _0x2d370b = await fetch(baseURL + "/clickIn", {
    method: "POST",
    headers: {
      "X-Access-Token": _0x86ea24,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(_0x337645),
    agent: agent
  });
  return _0x2d370b.json();
}
async function getSummary(_0x2c9ca5) {
  const _0x122a5f = {
    "X-Access-Token": _0x2c9ca5
  };
  const _0x3dbbb7 = {
    headers: _0x122a5f,
    agent: agent
  };
  const _0x11ccb7 = await fetch(baseURL + "/getUserTaskSummary", _0x3dbbb7);
  return _0x11ccb7.json();
}
(async () => {
  const _0x47f344 = {
    IYEOc: "未知错误",
    nRUOi: "https://gitee.com/MaoJiu2025/Script/raw/master/file/Maojiu.txt",
    neuIO: function (_0xac8934, _0x1f93b8) {
      return _0xac8934(_0x1f93b8);
    },
    kDgdb: "获取文件内容失败",
    evCea: function (_0x574473, _0x54da1d) {
      return _0x574473 !== _0x54da1d;
    },
    OhWmv: "ebPaI",
    HvnPY: "ZdWpF",
    gDPII: "今天没有可打卡任务",
    sEuCu: function (_0x43d9c4, _0x52e527) {
      return _0x43d9c4 === _0x52e527;
    },
    jHdNk: function (_0x124e27, _0x4b6c36, _0x3ea9ac, _0x4c6422, _0x47455a) {
      return _0x124e27(_0x4b6c36, _0x3ea9ac, _0x4c6422, _0x47455a);
    },
    fNCrv: function (_0x1544af, _0x43da1d) {
      return _0x1544af === _0x43da1d;
    },
    jLThY: "pxAWV",
    BqCwv: "WKkrP",
    stKgX: "wInsr",
    vGiPd: function (_0x3a7eb5, _0x299e56) {
      {
        return _0x3a7eb5 === _0x299e56;
      }
    },
    YQzrd: "rgdSK",
    rRocL: "vnAnf",
    DEarn: "EhOzZ"
  };
  const _0x1873ad = _0x47f344.nRUOi;
  const _0x30e1e3 = await _0x47f344.neuIO(fetch, _0x1873ad);
  if (!_0x30e1e3.ok) {
    throw new Error(_0x47f344.kDgdb);
  }
  const _0x19869d = await _0x30e1e3.text();
  console.log(_0x19869d);
  for (const {
    remark: _0x13a8ca,
    token: _0x5a5ea2
  } of accounts) {
    try {
      {
        if (_0x47f344.evCea(_0x47f344.OhWmv, _0x47f344.HvnPY)) {
          const {
            result: _0x5559a7
          } = await _0x47f344.neuIO(getTaskList, _0x5a5ea2);
          const _0x2597a6 = (_0x5559a7?.["taskCalendarList"] || []).filter(_0x20d2b8 => _0x20d2b8.taskDate === today).flatMap(_0x492ab0 => _0x492ab0.taskDetailsVoList || []);
          if (!_0x2597a6.length) {
            {
              console.log(_0x47f344.gDPII);
              continue;
            }
          }
          for (const _0x382b20 of _0x2597a6) {
            const _0x330a28 = {
              step: 38000,
              authorization: true
            };
            const {
              userTaskDetailId: _0x24a46c,
              taskName: _0x42c192,
              optionList = [],
              operationGuide: _0x7460b2
            } = _0x382b20;
            const _0x28d8f7 = optionList.length ? [Math.max(...optionList.map(_0x47b4e7 => _0x47b4e7.id))] : [];
            const _0x38bfcf = _0x47f344.sEuCu(_0x7460b2, "我走了") ? _0x330a28 : {};
            const _0x566950 = await _0x47f344.jHdNk(punchTask, _0x5a5ea2, _0x24a46c, _0x28d8f7, _0x38bfcf);
            _0x47f344.sEuCu(_0x566950.code, 200) ? console.log("【" + _0x13a8ca + "】" + _0x42c192 + "：打卡成功") : _0x47f344.fNCrv(_0x47f344.jLThY, "pxAWV") ? console.log("【" + _0x13a8ca + "】" + _0x42c192 + "：" + (_0x566950.message || "未知错误")) : (_0x537bbb.log("环境变量 dyns 未设置或格式不正确"), _0x3feb21.exit(0));
            await new Promise(_0x5c0eaa => setTimeout(_0x5c0eaa, 800));
          }
          const _0x5b2c89 = await _0x47f344.neuIO(getSummary, _0x5a5ea2);
          if (_0x47f344.sEuCu(_0x5b2c89.code, 200)) {
            if (_0x47f344.evCea(_0x47f344.BqCwv, _0x47f344.stKgX)) {
              const {
                checkDays: _0x281ecb,
                totalTaskDays: _0x4e690b
              } = _0x5b2c89.result;
              console.log("【" + _0x13a8ca + "】打卡进度 " + _0x281ecb + "/" + _0x4e690b);
            } else {
              _0x245db2.log("【" + _0x370955 + "】" + _0x16f24c + "：" + (_0x527dcf.message || _0x47f344.IYEOc));
            }
          } else {
            _0x47f344.vGiPd("Qjtbr", _0x47f344.YQzrd) ? _0x2a75f6.log("【" + _0x57ae1c + "】" + _0x378ba0 + "：打卡成功") : console.log("【" + _0x13a8ca + "】" + (_0x5b2c89.message || _0x47f344.IYEOc));
          }
        } else {
          _0x61ede4.log("【" + _0x50cfc7 + "】" + (_0x4f8aab.message || _0x47f344.IYEOc));
        }
      }
    } catch (_0x2ecacc) {
      {
        if (_0x47f344.evCea(_0x47f344.rRocL, _0x47f344.DEarn)) {
          console.log("【" + _0x13a8ca + "】异常：" + _0x2ecacc.message);
        } else {
          {
            const [_0x86051c, _0xa76f6d] = _0xbaeebf.split("#");
            return {
              remark: _0x86051c.trim(),
              token: _0xa76f6d.trim()
            };
          }
        }
      }
    }
  }
})();