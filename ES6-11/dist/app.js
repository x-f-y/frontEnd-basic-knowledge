"use strict";

var _module = require("./module1.js");

var m1 = _interopRequireWildcard(_module);

var _module2 = require("./module2.js");

var m2 = _interopRequireWildcard(_module2);

var _module3 = require("./module3.js");

var m3 = _interopRequireWildcard(_module3);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(m1); // {school: '尚硅谷', __esModule: true, teach: ƒ}
//入口文件

//模块引入
console.log(m2); // {school: '尚硅谷', __esModule: true, findJob: ƒ}
console.log(m3); // {default: {…}, __esModule: true}

m1.teach(); // 我们可以教给你开发技能
m2.findJob(); // 我们可以帮你找工作
m3.default.change(); // 我们可以改变你

/* 修改box盒子的边框 */
// 1 安装jquery包 npm i jquery
// 2 导入jquery包
// const $ = require('jquery')
console.log((0, _jquery2.default)(".box"));
(0, _jquery2.default)(".box").css("border", "5px solid skyblue");