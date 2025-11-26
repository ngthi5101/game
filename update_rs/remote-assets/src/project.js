window.__require = function t(e, n, i) {
function o(a, s) {
if (!n[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
}
var u = n[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return o(e[a][1][t] || t);
}, u, u.exports, t, e, n, i);
}
return n[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < i.length; a++) o(i[a]);
return o;
}({
AgencyItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c4c4fJwtD5MQLBBj3dCFuEM", "AgencyItem");
cc.Class({
extends: cc.Component,
properties: {
textSTT: {
default: null,
type: cc.Label
},
textName: {
default: null,
type: cc.Label
},
textID: {
default: null,
type: cc.Label
},
textMobile: {
default: null,
type: cc.Label
},
textAdd: {
default: null,
type: cc.Label
},
btnFb: {
default: null,
type: cc.Button
},
btnTransfer: {
default: null,
type: cc.Button
}
}
});
cc._RF.pop();
}, {} ],
AsyncTask: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "be87fmQMahLb7DdwrRKF0Nl", "AsyncTask");
var i = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}();
function o(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function r(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function a(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./Task"), c = function(t) {
a(e, s.default);
function e() {
o(this, e);
return r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
}
i(e, [ {
key: "run",
value: function() {
setTimeout(function() {
this.callback();
}.bind(this), 1);
}
} ]);
return e;
}();
n.default = c;
cc._RF.pop();
}, {
"./Task": "Task"
} ],
AudioController: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b03ecPLJL1GurVoaRjBepSy", "AudioController");
cc.Class({
extends: cc.Component,
properties: {
spin: {
default: null,
type: cc.AudioClip
},
result: {
default: null,
type: cc.AudioClip
},
jackpot: {
default: null,
type: cc.AudioClip
},
bg: {
default: null,
type: cc.AudioClip
}
},
start: function() {
this.isOnSound = !0;
},
onDestroy: function() {
cc.audioEngine.stopAll();
},
playSpin: function() {
this.isOnSound && cc.audioEngine.play(this.spin, !1, 1);
},
playResult: function() {
this.isOnSound && cc.audioEngine.play(this.result, !1, 1);
},
playJackpot: function() {
this.isOnSound && cc.audioEngine.play(this.jackpot, !1, 1);
},
playBackground: function() {
this.bgSound = cc.audioEngine.play(this.bg, !0, 1);
},
toggleBackround: function(t) {
t ? cc.audioEngine.resume(this.bgSound) : cc.audioEngine.pause(this.bgSound);
},
toggleSound: function(t) {
this.isOnSound = t;
}
});
cc._RF.pop();
}, {} ],
BXHHuItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "4a1654oFRxB2buzG5o1862Z", "BXHHuItem");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i, o, r, a, s, c, l, u, f, h, d, p, g = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}(), y = t("../Utils/Helper");
function m(t, e, n, i) {
n && Object.defineProperty(t, e, {
enumerable: n.enumerable,
configurable: n.configurable,
writable: n.writable,
value: n.initializer ? n.initializer.call(i) : void 0
});
}
function v(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function b(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function w(t, e, n, i, o) {
var r = {};
Object.keys(i).forEach(function(t) {
r[t] = i[t];
});
r.enumerable = !!r.enumerable;
r.configurable = !!r.configurable;
("value" in r || r.initializer) && (r.writable = !0);
r = n.slice().reverse().reduce(function(n, i) {
return i(t, e, n) || n;
}, r);
if (o && void 0 !== r.initializer) {
r.value = r.initializer ? r.initializer.call(o) : void 0;
r.initializer = void 0;
}
if (void 0 === r.initializer) {
Object.defineProperty(t, e, r);
r = null;
}
return r;
}
var S = cc._decorator, C = S.ccclass, T = S.property, E = (i = T(cc.Node), o = T(cc.Label), 
r = T(cc.Label), a = T(cc.Label), s = T(cc.Label), C(c = (l = function(t) {
b(e, cc.Component);
function e() {
var t, n, i, o;
v(this, e);
for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
return o = (n = i = _(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
m(i, "backgroundNode", u, i), m(i, "playerLabel", f, i), m(i, "timeLabel", h, i), 
m(i, "betLabel", d, i), m(i, "winLabel", p, i), n), _(i, o);
}
g(e, [ {
key: "setPlayerLabel",
value: function(t) {
this.playerLabel.string = t;
}
}, {
key: "setTimeLabel",
value: function(t) {
this.timeLabel.string = t;
}
}, {
key: "setBetLabel",
value: function(t) {
this.betLabel.string = (0, y.numberWithCommas)(t);
}
}, {
key: "setWinLabel",
value: function(t) {
this.winLabel.string = (0, y.numberWithCommas)(t);
}
}, {
key: "setBackGroundColor",
value: function(t) {
var e = cc.Color.BLACK;
this.backgroundNode.color = e.toHEX(t);
}
}, {
key: "setGrayBackground",
value: function() {
this.setBackGroundColor("#999999");
}
}, {
key: "setLightGrayBackground",
value: function() {
this.setBackGroundColor("#666666");
}
} ]);
return e;
}(), u = w(l.prototype, "backgroundNode", [ i ], {
enumerable: !0,
initializer: function() {
return null;
}
}), f = w(l.prototype, "playerLabel", [ o ], {
enumerable: !0,
initializer: function() {
return null;
}
}), h = w(l.prototype, "timeLabel", [ r ], {
enumerable: !0,
initializer: function() {
return null;
}
}), d = w(l.prototype, "betLabel", [ a ], {
enumerable: !0,
initializer: function() {
return null;
}
}), p = w(l.prototype, "winLabel", [ s ], {
enumerable: !0,
initializer: function() {
return null;
}
}), l)) || c);
n.default = E;
e.exports = n.default;
cc._RF.pop();
}, {
"../Utils/Helper": "Helper"
} ],
BaCayJackpotHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fc241Ae7whBjZlVHNh3h6nF", "BaCayJackpotHistory");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog")), o = t("../../Utils/Helper");
cc.Class({
extends: i.default,
properties: {
content: {
default: null,
type: cc.Node
},
historyItem: {
default: null,
type: cc.Prefab
}
},
setData: function(t) {
this.content.removeAllChildren();
for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.historyItem), i = t[e].displayName;
n.children[1].getComponent(cc.Label).string = i.length > 15 ? i.substring(0, 13) + "..." : i;
n.children[2].getComponent(cc.Label).string = t[e].time;
n.children[3].getComponent(cc.Label).string = (0, o.moneyFormat)(t[e].bet);
n.children[4].getComponent(cc.Label).string = (0, o.moneyFormat)(t[e].win);
n.children[5].getComponent(cc.Label).string = t[e].desc || "";
e % 2 != 0 && (n.children[0].active = !1);
n.parent = this.content;
}
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper",
"../Common/BaseDialog": "BaseDialog"
} ],
BaCayUserHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "62668LWE5hK+ZJNVZmUrzDm", "BaCayUserHistory");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog")), o = t("../../Utils/Helper");
cc.Class({
extends: i.default,
properties: {
content: {
default: null,
type: cc.Node
},
historyItem: {
default: null,
type: cc.Prefab
}
},
setData: function(t) {
this.content.removeAllChildren();
for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.historyItem);
n.children[1].getComponent(cc.Label).string = t[e].id || "";
n.children[2].getComponent(cc.Label).string = t[e].time;
n.children[3].getComponent(cc.Label).string = (0, o.moneyFormat)(t[e].sub);
n.children[4].getComponent(cc.Label).string = (0, o.moneyFormat)(t[e].add);
e % 2 != 0 && (n.children[0].active = !1);
n.parent = this.content;
}
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper",
"../Common/BaseDialog": "BaseDialog"
} ],
BaseDialog: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "18481v6lAtHw6U//r/TTlKW", "BaseDialog");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = cc.Class({
extends: cc.Component,
properties: {
isUseShowHideAnim: {
default: !0
}
},
onLoad: function() {
this.createAnims();
},
createAnims: function() {
this.isUseShowHideAnim && (this.hideAnim || (this.hideAnim = cc.sequence(cc.spawn(cc.scaleTo(.2, 0, 0), cc.moveTo(.2, 0, -cc.winSize.height / 2)), cc.callFunc(function() {}, this))));
},
resetPos: function() {
this.node.setPosition(0, 0);
this.node.scaleX = 1;
this.node.scaleY = 1;
},
show: function() {
this.createAnims();
this.refreshData && this.refreshData();
this.resetPos();
this.node.active = !0;
this.isShow = !0;
},
hide: function() {
if (this.isUseShowHideAnim) {
this.createAnims();
this.node.runAction(cc.sequence(this.hideAnim, cc.delayTime(.1), cc.callFunc(function() {
this.node.active = !1;
this.isShow = !1;
}, this)));
} else this.node.active = !1;
},
setData: function(t) {},
refreshData: function() {},
onClickClose: function() {
this.hide();
}
});
e.exports = n.default;
cc._RF.pop();
}, {} ],
BaseInputBlocker: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "4de90UxdfJBE50RJLguU0OR", "BaseInputBlocker");
cc.Class({
extends: cc.Component,
properties: {
isEnableClickOut: {
default: !1
}
},
overlayNode: null,
onLoad: function() {},
start: function() {},
show: function(t) {
var e = this;
this.node.active = !0;
this.isShow = !0;
this.overlayNode = t;
this.isEnableClickOut && this.node.on("touchend", function() {
e.onClick();
});
},
hide: function() {
this.node.active = !1;
this.isShow = !1;
this.overlayNode = null;
},
onClick: function() {
this.overlayNode && this.overlayNode.emit("clickOut");
}
});
cc._RF.pop();
}, {} ],
BaseListItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d75afLAgs5PoYbKpk9E3kE+", "BaseListItem");
cc.Class({
extends: cc.Component,
properties: {
lineBackground: {
default: null,
type: cc.Node
},
isSelectable: {
default: !0
},
onSelectHandler: {
default: null,
type: cc.Component.EventHandler
}
},
ctor: function() {
this.data = null;
},
setData: function(t, e) {
this.lineBackground && (this.lineBackground.active = e % 2 == 0);
this.data = t;
this.onSetData(t, e);
this.node.active = !0;
},
onSetData: function(t) {},
onClick: function() {},
onSelect: function() {},
onLinked: function() {}
});
cc._RF.pop();
}, {} ],
BaseList: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "155adbUEylDUb68ZSoNGzcF", "BaseList");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseListItem"));
cc.Class({
extends: cc.Component,
properties: {
listItemPrefab: {
default: null,
type: i.default
},
maxItem: {
default: -1
},
listNode: {
default: null,
type: cc.Node
},
isCreateItemsOnChange: {
default: !0
},
isReuse: {
default: !1
},
container: {
default: null,
type: cc.Node
},
isPaging: {
default: !1
},
pageSize: {
default: 10,
visible: function() {
return this.isPaging;
}
},
textPage: {
default: null,
type: cc.Label,
visible: function() {
return this.isPaging;
}
},
currentPageNum: {
default: 0,
visible: function() {
return this.isPaging;
}
}
},
ctor: function() {
this.data = null;
this.listItemComps = [];
this.isCreatedItems = !1;
},
onLoad: function() {
this.listItemPrefab.node.active = !1;
this.listNode = this.node;
},
start: function() {},
setData: function(t) {
this.clear();
this.data = t;
this.setFullData(t);
this.isCreateItemsOnChange && this.createItems();
},
setFullData: function(t) {
this.fullData = t;
this.node.emit("data", this.fullData);
},
setDataPaging: function(t, e) {
this.setFullData(t);
this.isPaging = !0;
this.maxPageNum = Math.ceil(this.fullData.length / this.pageSize);
this.setPage(e, !0);
},
setPage: function(t) {
arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
this.clear();
this.currentPageNum = t;
this.pageOffset = (this.currentPageNum - 1) * this.pageSize;
this.data = this.fullData.slice(this.pageOffset, this.pageOffset + this.pageSize);
this.node.emit("page", this.currentPageNum);
this.isCreateItemsOnChange && this.createItems();
},
letNextPage: function() {
if (this.currentPageNum < this.maxPageNum) {
this.currentPageNum = this.currentPageNum + 1;
this.setPage(this.currentPageNum);
this.textPage && (this.textPage.string = this.currentPageNum);
}
},
letPreviousPage: function() {
if (this.currentPageNum > 1) {
this.currentPageNum = this.currentPageNum - 1;
this.setPage(this.currentPageNum);
this.textPage && (this.textPage.string = this.currentPageNum);
}
},
recalSize: function() {
this.listNode.height = this.listItemPrefab.node.height * this.data.length;
},
createItems: function() {
this.data.forEach(function(t, e) {
this.isReuse ? e >= this.listItemComps.length || !this.listItemComps[e] ? this.createItemDisplay(t, e) : this.reuseItemDisplay(t, e) : this.createItemDisplay(t, e);
}, this);
this.isCreatedItems = !0;
},
createItemOnDemand: function() {},
createItemDisplay: function(t, e) {
var n = cc.instantiate(this.listItemPrefab.node);
n.parent = this.listNode;
n.active = !0;
var o = n.getComponent(i.default);
if (o) {
this.listItemComps[e] = o;
this.linkItemComp(o, t, e);
}
},
reuseItemDisplay: function(t, e) {
var n = this.listItemComps[e];
n.node.active = !0;
n && this.linkItemComp(n, t, e);
},
linkItemComp: function(t, e, n) {
t.list = this;
t.setData(e, n);
this.createItemInteraction(t);
t.onLinked();
},
createItemInteraction: function(t) {
var e = this;
t.node.on("touchend", function() {
e.onItemClick(t);
});
},
clear: function() {
this.data = null;
if (this.isReuse) this.listItemComps.forEach(function(t) {
t.node.active = !1;
}); else {
this.listItemComps = [];
this.listNode.removeAllChildren();
}
},
onItemClick: function(t) {},
onItemLink: function(t) {},
onItemSelect: function(t) {}
});
cc._RF.pop();
}, {
"../Common/BaseListItem": "BaseListItem"
} ],
BasePanelNotification: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c578e8TJ9hOz4pe10kMms2O", "BasePanelNotification");
cc.Class({
extends: cc.Component,
properties: {
textNotification: {
default: null,
type: cc.Label
}
},
onLoad: function() {
this.hide();
this.timeHide = 2;
},
start: function() {},
show: function() {
this.node.active = !0;
this.scheduleOnce(function() {
this.hide();
}, this.timeHide);
},
hide: function() {
this.node.active = !1;
},
setText: function(t) {
var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
this.node.active = !0;
this.textNotification.string = t;
n > 0 && (this.timeHide = n);
e && this.show();
}
});
cc._RF.pop();
}, {} ],
BasePopup: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "64c1cT61ztD7ofU97Hsw/ki", "BasePopup");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("BaseInputBlocker"));
cc.Class({
extends: cc.Component,
properties: {
blocker: {
default: null,
type: i.default
}
},
ctor: function() {},
onLoad: function() {
this.node.active = !1;
},
start: function() {},
show: function(t) {
this.node.active = !0;
this.isShow = !0;
if (this.blocker) {
this.blocker.show(this.node);
this.node.on("clickOut", function() {
this.hide();
this.blocker.hide();
}.bind(this));
}
t && (this.callbackReturnValue = t);
},
returnValue: function(t) {
this.hide();
this.callbackReturnValue && this.callbackReturnValue(t);
},
hide: function() {
this.node.active = !1;
this.isShow = !1;
this.blocker && this.blocker.hide();
}
});
cc._RF.pop();
}, {
BaseInputBlocker: "BaseInputBlocker"
} ],
BaseTabContainer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7771eHFslpKxpTrmZ1VO/4U", "BaseTabContainer");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./BaseTab"));
n.default = cc.Class({
extends: cc.Component,
properties: {
tabs: {
default: [],
type: i.default
},
currentTab: {
default: null,
type: i.default
}
},
onLoad: function() {
if (this.tabs) {
if (this.tabs.length > 1 && !this.currentTab) {
this.currentTab = this.tabs[0];
this.showTab(this.currentTab);
}
this.tabs.forEach(function(t) {
this.linkTab(t);
t != this.currentTab ? this.deSelectTab(t) : t.onSelected();
}.bind(this));
this.showTab(this.currentTab);
}
},
linkTab: function(t) {
t.linkTab(this);
t.tabButton.node.on("touchend", function(e) {
this.selectTab(t);
}, this);
},
selectTab: function(t) {
if (this.currentTab && this.currentTab != t) {
this.deSelectTab(this.currentTab);
this.showTab(t);
this.currentTab = t;
t.onSelected();
}
},
deSelectTab: function(t, e) {
this.hideTab(t);
t.onDeselected();
e && e();
},
showTab: function(t) {
t.tabContentNode && (t.tabContentNode.active = !0);
},
hideTab: function(t) {
t.tabContentNode && (t.tabContentNode.active = !1);
},
tabHandle: function(t) {
for (var e = 0; e < this.tabs.length; e++) if (t == e) {
var n = this.tabs[e];
this.selectTab(n);
}
}
});
e.exports = n.default;
cc._RF.pop();
}, {
"./BaseTab": "BaseTab"
} ],
BaseTab: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a9df9YJk8VC7JReUOh2ICXS", "BaseTab");
cc.Class({
extends: cc.Component,
properties: {
title: {
default: "Tab"
},
labelTitle: {
default: null,
type: cc.Label
},
tabButton: {
default: null,
type: cc.Button
},
tabContentNode: {
default: null,
type: cc.Node
},
spriteNormal: {
default: null,
type: cc.SpriteFrame
},
spriteSelected: {
default: null,
type: cc.SpriteFrame
}
},
parent: null,
onDeselected: function() {
if (this.tabButton) {
this.isShow = !1;
this.tabButton.getComponent(cc.Sprite).spriteFrame = this.spriteNormal;
}
},
onSelected: function() {
if (this.tabButton) {
this.isShow = !0;
this.tabButton.getComponent(cc.Sprite).spriteFrame = this.spriteSelected;
}
},
linkTab: function(t) {
this.parent = t;
}
});
cc._RF.pop();
}, {} ],
BauCuaDoor: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d4b2ffpLhtH7YKKzOB4WRf+", "BauCuaDoor");
var i = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
txtUserBet: {
default: null,
type: cc.Label
},
txtTotalBet: {
default: null,
type: cc.Label
},
light: {
default: null,
type: cc.Animation
},
spine: {
default: null,
type: cc.Node
}
},
reset: function() {
this.txtUserBet.string = 0;
this.txtTotalBet.string = 0;
this.light.stop("Light");
this.light.node.active = !1;
this.spine.active = !1;
},
setTotalBet: function(t) {
this.txtTotalBet.string = (0, i.moneyFormat)(t, !0);
},
setUserBet: function(t) {
this.txtUserBet.string = (0, i.moneyFormat)(t || 0, !0);
},
setWin: function() {
this.spine.active = !0;
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper"
} ],
BauCuaHistoryItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "04a59AlP/RIwoBt8eDewL/h", "BauCuaHistoryItem");
cc.Class({
extends: cc.Component,
properties: {
listDice: {
default: [],
type: cc.Sprite
},
listSprite: {
default: [],
type: cc.SpriteFrame
}
},
setData: function(t) {
for (var e = 0; e < this.listDice.length; e++) {
this.listDice[e].spriteFrame = this.listSprite[t.faces[e] - 1];
}
}
});
cc._RF.pop();
}, {} ],
BauCuaTopUserItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5e2d2R5N+RGopzQBSOEw9TH", "BauCuaTopUserItem");
var i = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
rank: {
default: null,
type: cc.Label
},
fullname: {
default: null,
type: cc.Label
},
gold: {
default: null,
type: cc.Label
}
},
setData: function(t, e) {
this.rank.string = t;
this.fullname.string = e.fullname;
this.gold.string = (0, i.moneyFormat)(e.gold, !0);
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper"
} ],
BetPanel: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f4adcWLRdZMMp/T0QDudM+N", "BetPanel");
var i = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
taixiuMain: {
default: null,
type: cc.Node
},
valueGroup: {
default: null,
type: cc.Node
},
numberGroup: {
default: null,
type: cc.Node
},
listValueBtn: {
default: [],
type: cc.Node
},
listNumberBtn: {
default: [],
type: cc.Node
},
textInputTai: {
default: null,
type: cc.Label
},
textInputXiu: {
default: null,
type: cc.Label
},
textBtnChange: {
default: null,
type: cc.Label
}
},
onLoad: function() {
this.setNumberGroup();
},
show: function(t) {
this.pot != t && this.resetBet();
this.node.active = !0;
this.pot = t;
},
setMinMaxValue: function(t, e) {
if (!this.minCoinPerBet) {
this.minCoinPerBet = t;
this.maxCoinPerBet = e;
this.setValueGroup(this.minCoinPerBet, this.maxCoinPerBet);
}
},
setValueGroup: function(t, e) {
var n = this;
this.valueBets = [ 1, 5, 10, 50, 100, 500, 1e3 ];
for (var o = function(o) {
var r = n.listValueBtn[o], a = o == n.listValueBtn.length - 1 ? e : t * n.valueBets[o];
r.getComponentInChildren(cc.Label).string = (0, i.moneyFormat)(a, !0);
r.on(cc.Node.EventType.TOUCH_START, function(t) {
n.valueClick(a);
});
}, r = 0; r < this.listValueBtn.length; r++) o(r);
},
valueClick: function(t) {
var e = 1 == this.pot ? this.textInputTai : this.textInputXiu, n = (0, i.moneyToInt)(e.string);
n += t;
e.string = (0, i.moneyFormat)(n);
},
cancelClick: function() {
this.resetBet();
this.node.active = !1;
},
resetBet: function() {
this.textInputTai.string = "0";
this.textInputXiu.string = "0";
},
changeNumClick: function() {
if (this.valueGroup.active) {
this.valueGroup.active = !1;
this.numberGroup.active = !0;
this.textBtnChange.string = "Chọn nhanh";
} else {
this.valueGroup.active = !0;
this.numberGroup.active = !1;
this.textBtnChange.string = "Số khác";
}
this.resetBet();
},
setNumberGroup: function() {
for (var t = this, e = function(e) {
var n = t.listNumberBtn[e];
e == t.listNumberBtn.length - 1 ? n.on(cc.Node.EventType.TOUCH_START, function(e) {
t.deleteNumber();
}) : e == t.listNumberBtn.length - 2 ? n.on(cc.Node.EventType.TOUCH_START, function(e) {
t.numberClick("000");
}) : n.on(cc.Node.EventType.TOUCH_START, function(n) {
t.numberClick(e);
});
}, n = 0; n < this.listNumberBtn.length; n++) e(n);
},
numberClick: function(t) {
var e = 1 == this.pot ? this.textInputTai : this.textInputXiu, n = (0, i.moneyToInt)(e.string) + "" + t;
e.string = (0, i.moneyFormat)(parseInt(n));
},
deleteNumber: function() {
var t = 1 == this.pot ? this.textInputTai : this.textInputXiu, e = (0, i.moneyToInt)(t.string);
if (0 != e) {
var n = e.toString().slice(0, -1);
t.string = (0, i.moneyFormat)("" == n ? 0 : parseInt(n));
}
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper"
} ],
BetTableController: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3c8fflEv7lNFaQaxZNUf/xd", "BetTableController");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i, o, r, a, s = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}();
function c(t, e, n, i) {
n && Object.defineProperty(t, e, {
enumerable: n.enumerable,
configurable: n.configurable,
writable: n.writable,
value: n.initializer ? n.initializer.call(i) : void 0
});
}
function l(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function u(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function f(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var h = cc._decorator, d = h.ccclass, p = (i = (0, h.property)(cc.Node), d(o = (r = function(t) {
f(e, cc.Component);
function e() {
var t, n, i, o;
l(this, e);
for (var r = arguments.length, s = Array(r), f = 0; f < r; f++) s[f] = arguments[f];
return o = (n = i = u(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(s))), 
c(i, "betIconContainer", a, i), i.listBetButtons = [], n), u(i, o);
}
s(e, [ {
key: "onLoad",
value: function() {
this.listBetButtons = this.betIconContainer.children;
}
}, {
key: "chooseList",
value: function() {
var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
this.chooseNone();
e.forEach(function(e) {
return t.selectSlot(e - 1);
}, this);
}
}, {
key: "chooseAll",
value: function() {
for (var t = 0; t < this.listBetButtons.length; t++) this.selectSlot(t);
}
}, {
key: "chooseOdd",
value: function() {
for (var t = 0; t < this.listBetButtons.length; t += 2) {
this.disSelectSlot(t);
t < this.listBetButtons.length && this.selectSlot(t + 1);
}
}
}, {
key: "chooseEven",
value: function() {
for (var t = 0; t < this.listBetButtons.length; t += 2) {
this.selectSlot(t);
t < this.listBetButtons.length && this.disSelectSlot(t + 1);
}
}
}, {
key: "chooseNone",
value: function() {
for (var t = 0; t < this.listBetButtons.length; t++) this.disSelectSlot(t);
}
}, {
key: "chooseOne",
value: function(t, e) {
t ? this.disSelectSlot(e) : this.selectSlot(e);
}
}, {
key: "selectSlot",
value: function(t) {
this.listBetButtons[t].color = cc.Color.YELLOW;
}
}, {
key: "disSelectSlot",
value: function(t) {
this.listBetButtons[t].color = cc.Color.WHITE;
}
} ]);
return e;
}(), a = function(t, e, n, i, o) {
var r = {};
Object.keys(i).forEach(function(t) {
r[t] = i[t];
});
r.enumerable = !!r.enumerable;
r.configurable = !!r.configurable;
("value" in r || r.initializer) && (r.writable = !0);
r = n.slice().reverse().reduce(function(n, i) {
return i(t, e, n) || n;
}, r);
if (o && void 0 !== r.initializer) {
r.value = r.initializer ? r.initializer.call(o) : void 0;
r.initializer = void 0;
}
if (void 0 === r.initializer) {
Object.defineProperty(t, e, r);
r = null;
}
return r;
}(r.prototype, "betIconContainer", [ i ], {
enumerable: !0,
initializer: function() {
return null;
}
}), r)) || o);
n.default = p;
e.exports = n.default;
cc._RF.pop();
}, {} ],
BigWinEffect: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c6a92l+3Z9IeKvkG7ldmWBj", "BigWinEffect");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i, o, r, a, s, c, l, u, f = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}(), h = t("../Utils/Helper");
function d(t, e, n, i) {
n && Object.defineProperty(t, e, {
enumerable: n.enumerable,
configurable: n.configurable,
writable: n.writable,
value: n.initializer ? n.initializer.call(i) : void 0
});
}
function p(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function g(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function y(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function m(t, e, n, i, o) {
var r = {};
Object.keys(i).forEach(function(t) {
r[t] = i[t];
});
r.enumerable = !!r.enumerable;
r.configurable = !!r.configurable;
("value" in r || r.initializer) && (r.writable = !0);
r = n.slice().reverse().reduce(function(n, i) {
return i(t, e, n) || n;
}, r);
if (o && void 0 !== r.initializer) {
r.value = r.initializer ? r.initializer.call(o) : void 0;
r.initializer = void 0;
}
if (void 0 === r.initializer) {
Object.defineProperty(t, e, r);
r = null;
}
return r;
}
var v = cc._decorator, _ = v.ccclass, b = v.property, w = (i = b(cc.Node), o = b(cc.Label), 
r = b(cc.Node), _(a = (s = function(t) {
y(e, cc.Component);
function e() {
var t, n, i, o;
p(this, e);
for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
return o = (n = i = g(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
d(i, "spineNode", c, i), d(i, "textJackpot", l, i), d(i, "textJackpotBg", u, i), 
n), g(i, o);
}
f(e, [ {
key: "start",
value: function() {
this.textJackpot.string = "0";
}
}, {
key: "show",
value: function(t) {
this.spineNode.active = !0;
this.textJackpotBg.active = !0;
(0, h.runNumber)(this.textJackpot, t);
}
}, {
key: "hide",
value: function() {
this.spineNode.active = !1;
this.textJackpotBg.active = !1;
this.textJackpot.string = "0";
}
} ]);
return e;
}(), c = m(s.prototype, "spineNode", [ i ], {
enumerable: !0,
initializer: function() {
return null;
}
}), l = m(s.prototype, "textJackpot", [ o ], {
enumerable: !0,
initializer: function() {
return null;
}
}), u = m(s.prototype, "textJackpotBg", [ r ], {
enumerable: !0,
initializer: function() {
return null;
}
}), s)) || a);
n.default = w;
e.exports = n.default;
cc._RF.pop();
}, {
"../Utils/Helper": "Helper"
} ],
ButtonKoin: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ca17frUZFlGraMWVw59/u6x", "ButtonKoin");
cc.Class({
extends: cc.Component,
properties: {
detailNode: {
default: null,
type: cc.Node
},
textGoldNum: {
default: null,
type: cc.Label
},
textFee: {
default: null,
type: cc.Label
}
},
start: function() {
this.detailNode.active = !1;
},
onShowDetail: function() {
this.detailNode.active = !0;
}
});
cc._RF.pop();
}, {} ],
ButtonToggle: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "34b349cNFVJmauJqLwdKSe0", "ButtonToggle");
cc.Class({
extends: cc.Component,
properties: {
isOn: {
default: !1
},
stateOn: {
default: null,
type: cc.SpriteFrame
},
stateOff: {
default: null,
type: cc.SpriteFrame
},
sprite: {
default: null,
type: cc.Sprite
}
},
start: function() {
var t = this;
this.updateState();
this.node.on("touchend", function() {
t.toggle();
});
},
toggle: function() {
this.isOn = !this.isOn;
this.updateState();
this.node.emit("toggle", this.isOn);
},
updateState: function() {
this.isOn ? this.sprite.spriteFrame = this.stateOn : this.sprite.spriteFrame = this.stateOff;
}
});
cc._RF.pop();
}, {} ],
1: [ function(t, e, n) {
"use strict";
n.byteLength = function(t) {
var e = l(t), n = e[0], i = e[1];
return 3 * (n + i) / 4 - i;
};
n.toByteArray = function(t) {
for (var e, n = l(t), i = n[0], a = n[1], s = new r(u(t, i, a)), c = 0, f = a > 0 ? i - 4 : i, h = 0; h < f; h += 4) {
e = o[t.charCodeAt(h)] << 18 | o[t.charCodeAt(h + 1)] << 12 | o[t.charCodeAt(h + 2)] << 6 | o[t.charCodeAt(h + 3)];
s[c++] = e >> 16 & 255;
s[c++] = e >> 8 & 255;
s[c++] = 255 & e;
}
if (2 === a) {
e = o[t.charCodeAt(h)] << 2 | o[t.charCodeAt(h + 1)] >> 4;
s[c++] = 255 & e;
}
if (1 === a) {
e = o[t.charCodeAt(h)] << 10 | o[t.charCodeAt(h + 1)] << 4 | o[t.charCodeAt(h + 2)] >> 2;
s[c++] = e >> 8 & 255;
s[c++] = 255 & e;
}
return s;
};
n.fromByteArray = function(t) {
for (var e, n = t.length, o = n % 3, r = [], a = 0, s = n - o; a < s; a += 16383) r.push(h(t, a, a + 16383 > s ? s : a + 16383));
if (1 === o) {
e = t[n - 1];
r.push(i[e >> 2] + i[e << 4 & 63] + "==");
} else if (2 === o) {
e = (t[n - 2] << 8) + t[n - 1];
r.push(i[e >> 10] + i[e >> 4 & 63] + i[e << 2 & 63] + "=");
}
return r.join("");
};
for (var i = [], o = [], r = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = a.length; s < c; ++s) {
i[s] = a[s];
o[a.charCodeAt(s)] = s;
}
o["-".charCodeAt(0)] = 62;
o["_".charCodeAt(0)] = 63;
function l(t) {
var e = t.length;
if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
var n = t.indexOf("=");
-1 === n && (n = e);
return [ n, n === e ? 0 : 4 - n % 4 ];
}
function u(t, e, n) {
return 3 * (e + n) / 4 - n;
}
function f(t) {
return i[t >> 18 & 63] + i[t >> 12 & 63] + i[t >> 6 & 63] + i[63 & t];
}
function h(t, e, n) {
for (var i, o = [], r = e; r < n; r += 3) {
i = (t[r] << 16 & 16711680) + (t[r + 1] << 8 & 65280) + (255 & t[r + 2]);
o.push(f(i));
}
return o.join("");
}
}, {} ],
2: [ function(t, e, n) {
(function(e) {
"use strict";
var i = t("base64-js"), o = t("ieee754"), r = t("isarray");
n.Buffer = c;
n.SlowBuffer = function(t) {
+t != t && (t = 0);
return c.alloc(+t);
};
n.INSPECT_MAX_BYTES = 50;
c.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
try {
var t = new Uint8Array(1);
t.__proto__ = {
__proto__: Uint8Array.prototype,
foo: function() {
return 42;
}
};
return 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
} catch (t) {
return !1;
}
}();
n.kMaxLength = a();
function a() {
return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function s(t, e) {
if (a() < e) throw new RangeError("Invalid typed array length");
if (c.TYPED_ARRAY_SUPPORT) (t = new Uint8Array(e)).__proto__ = c.prototype; else {
null === t && (t = new c(e));
t.length = e;
}
return t;
}
function c(t, e, n) {
if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, n);
if ("number" == typeof t) {
if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
return h(this, t);
}
return l(this, t, e, n);
}
c.poolSize = 8192;
c._augment = function(t) {
t.__proto__ = c.prototype;
return t;
};
function l(t, e, n, i) {
if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? g(t, e, n, i) : "string" == typeof e ? d(t, e, n) : y(t, e);
}
c.from = function(t, e, n) {
return l(null, t, e, n);
};
if (c.TYPED_ARRAY_SUPPORT) {
c.prototype.__proto__ = Uint8Array.prototype;
c.__proto__ = Uint8Array;
"undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
value: null,
configurable: !0
});
}
function u(t) {
if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
if (t < 0) throw new RangeError('"size" argument must not be negative');
}
function f(t, e, n, i) {
u(e);
return e <= 0 ? s(t, e) : void 0 !== n ? "string" == typeof i ? s(t, e).fill(n, i) : s(t, e).fill(n) : s(t, e);
}
c.alloc = function(t, e, n) {
return f(null, t, e, n);
};
function h(t, e) {
u(e);
t = s(t, e < 0 ? 0 : 0 | m(e));
if (!c.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
return t;
}
c.allocUnsafe = function(t) {
return h(null, t);
};
c.allocUnsafeSlow = function(t) {
return h(null, t);
};
function d(t, e, n) {
"string" == typeof n && "" !== n || (n = "utf8");
if (!c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
var i = 0 | v(e, n), o = (t = s(t, i)).write(e, n);
o !== i && (t = t.slice(0, o));
return t;
}
function p(t, e) {
var n = e.length < 0 ? 0 : 0 | m(e.length);
t = s(t, n);
for (var i = 0; i < n; i += 1) t[i] = 255 & e[i];
return t;
}
function g(t, e, n, i) {
e.byteLength;
if (n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
if (e.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
e = void 0 === n && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e, n) : new Uint8Array(e, n, i);
c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = p(t, e);
return t;
}
function y(t, e) {
if (c.isBuffer(e)) {
var n = 0 | m(e.length);
if (0 === (t = s(t, n)).length) return t;
e.copy(t, 0, 0, n);
return t;
}
if (e) {
if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || q(e.length) ? s(t, 0) : p(t, e);
if ("Buffer" === e.type && r(e.data)) return p(t, e.data);
}
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function m(t) {
if (t >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
return 0 | t;
}
c.isBuffer = function(t) {
return !(null == t || !t._isBuffer);
};
c.compare = function(t, e) {
if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
if (t === e) return 0;
for (var n = t.length, i = e.length, o = 0, r = Math.min(n, i); o < r; ++o) if (t[o] !== e[o]) {
n = t[o];
i = e[o];
break;
}
return n < i ? -1 : i < n ? 1 : 0;
};
c.isEncoding = function(t) {
switch (String(t).toLowerCase()) {
case "hex":
case "utf8":
case "utf-8":
case "ascii":
case "latin1":
case "binary":
case "base64":
case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return !0;

default:
return !1;
}
};
c.concat = function(t, e) {
if (!r(t)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === t.length) return c.alloc(0);
var n;
if (void 0 === e) {
e = 0;
for (n = 0; n < t.length; ++n) e += t[n].length;
}
var i = c.allocUnsafe(e), o = 0;
for (n = 0; n < t.length; ++n) {
var a = t[n];
if (!c.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
a.copy(i, o);
o += a.length;
}
return i;
};
function v(t, e) {
if (c.isBuffer(t)) return t.length;
if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
"string" != typeof t && (t = "" + t);
var n = t.length;
if (0 === n) return 0;
for (var i = !1; ;) switch (e) {
case "ascii":
case "latin1":
case "binary":
return n;

case "utf8":
case "utf-8":
case void 0:
return X(t).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * n;

case "hex":
return n >>> 1;

case "base64":
return K(t).length;

default:
if (i) return X(t).length;
e = ("" + e).toLowerCase();
i = !0;
}
}
c.byteLength = v;
function _(t, e, n) {
var i = !1;
(void 0 === e || e < 0) && (e = 0);
if (e > this.length) return "";
(void 0 === n || n > this.length) && (n = this.length);
if (n <= 0) return "";
if ((n >>>= 0) <= (e >>>= 0)) return "";
t || (t = "utf8");
for (;;) switch (t) {
case "hex":
return D(this, e, n);

case "utf8":
case "utf-8":
return O(this, e, n);

case "ascii":
return A(this, e, n);

case "latin1":
case "binary":
return U(this, e, n);

case "base64":
return R(this, e, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return B(this, e, n);

default:
if (i) throw new TypeError("Unknown encoding: " + t);
t = (t + "").toLowerCase();
i = !0;
}
}
c.prototype._isBuffer = !0;
function b(t, e, n) {
var i = t[e];
t[e] = t[n];
t[n] = i;
}
c.prototype.swap16 = function() {
var t = this.length;
if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (var e = 0; e < t; e += 2) b(this, e, e + 1);
return this;
};
c.prototype.swap32 = function() {
var t = this.length;
if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (var e = 0; e < t; e += 4) {
b(this, e, e + 3);
b(this, e + 1, e + 2);
}
return this;
};
c.prototype.swap64 = function() {
var t = this.length;
if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (var e = 0; e < t; e += 8) {
b(this, e, e + 7);
b(this, e + 1, e + 6);
b(this, e + 2, e + 5);
b(this, e + 3, e + 4);
}
return this;
};
c.prototype.toString = function() {
var t = 0 | this.length;
return 0 === t ? "" : 0 === arguments.length ? O(this, 0, t) : _.apply(this, arguments);
};
c.prototype.equals = function(t) {
if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
return this === t || 0 === c.compare(this, t);
};
c.prototype.inspect = function() {
var t = "", e = n.INSPECT_MAX_BYTES;
if (this.length > 0) {
t = this.toString("hex", 0, e).match(/.{2}/g).join(" ");
this.length > e && (t += " ... ");
}
return "<Buffer " + t + ">";
};
c.prototype.compare = function(t, e, n, i, o) {
if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
void 0 === e && (e = 0);
void 0 === n && (n = t ? t.length : 0);
void 0 === i && (i = 0);
void 0 === o && (o = this.length);
if (e < 0 || n > t.length || i < 0 || o > this.length) throw new RangeError("out of range index");
if (i >= o && e >= n) return 0;
if (i >= o) return -1;
if (e >= n) return 1;
e >>>= 0;
n >>>= 0;
i >>>= 0;
o >>>= 0;
if (this === t) return 0;
for (var r = o - i, a = n - e, s = Math.min(r, a), l = this.slice(i, o), u = t.slice(e, n), f = 0; f < s; ++f) if (l[f] !== u[f]) {
r = l[f];
a = u[f];
break;
}
return r < a ? -1 : a < r ? 1 : 0;
};
function w(t, e, n, i, o) {
if (0 === t.length) return -1;
if ("string" == typeof n) {
i = n;
n = 0;
} else n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648);
n = +n;
isNaN(n) && (n = o ? 0 : t.length - 1);
n < 0 && (n = t.length + n);
if (n >= t.length) {
if (o) return -1;
n = t.length - 1;
} else if (n < 0) {
if (!o) return -1;
n = 0;
}
"string" == typeof e && (e = c.from(e, i));
if (c.isBuffer(e)) return 0 === e.length ? -1 : S(t, e, n, i, o);
if ("number" == typeof e) {
e &= 255;
return c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : S(t, [ e ], n, i, o);
}
throw new TypeError("val must be string, number or Buffer");
}
function S(t, e, n, i, o) {
var r, a = 1, s = t.length, c = e.length;
if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
if (t.length < 2 || e.length < 2) return -1;
a = 2;
s /= 2;
c /= 2;
n /= 2;
}
function l(t, e) {
return 1 === a ? t[e] : t.readUInt16BE(e * a);
}
if (o) {
var u = -1;
for (r = n; r < s; r++) if (l(t, r) === l(e, -1 === u ? 0 : r - u)) {
-1 === u && (u = r);
if (r - u + 1 === c) return u * a;
} else {
-1 !== u && (r -= r - u);
u = -1;
}
} else {
n + c > s && (n = s - c);
for (r = n; r >= 0; r--) {
for (var f = !0, h = 0; h < c; h++) if (l(t, r + h) !== l(e, h)) {
f = !1;
break;
}
if (f) return r;
}
}
return -1;
}
c.prototype.includes = function(t, e, n) {
return -1 !== this.indexOf(t, e, n);
};
c.prototype.indexOf = function(t, e, n) {
return w(this, t, e, n, !0);
};
c.prototype.lastIndexOf = function(t, e, n) {
return w(this, t, e, n, !1);
};
function C(t, e, n, i) {
n = Number(n) || 0;
var o = t.length - n;
i ? (i = Number(i)) > o && (i = o) : i = o;
var r = e.length;
if (r % 2 != 0) throw new TypeError("Invalid hex string");
i > r / 2 && (i = r / 2);
for (var a = 0; a < i; ++a) {
var s = parseInt(e.substr(2 * a, 2), 16);
if (isNaN(s)) return a;
t[n + a] = s;
}
return a;
}
function T(t, e, n, i) {
return Z(X(e, t.length - n), t, n, i);
}
function E(t, e, n, i) {
return Z(J(e), t, n, i);
}
function I(t, e, n, i) {
return E(t, e, n, i);
}
function k(t, e, n, i) {
return Z(K(e), t, n, i);
}
function N(t, e, n, i) {
return Z(Q(e, t.length - n), t, n, i);
}
c.prototype.write = function(t, e, n, i) {
if (void 0 === e) {
i = "utf8";
n = this.length;
e = 0;
} else if (void 0 === n && "string" == typeof e) {
i = e;
n = this.length;
e = 0;
} else {
if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
e |= 0;
if (isFinite(n)) {
n |= 0;
void 0 === i && (i = "utf8");
} else {
i = n;
n = void 0;
}
}
var o = this.length - e;
(void 0 === n || n > o) && (n = o);
if (t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
i || (i = "utf8");
for (var r = !1; ;) switch (i) {
case "hex":
return C(this, t, e, n);

case "utf8":
case "utf-8":
return T(this, t, e, n);

case "ascii":
return E(this, t, e, n);

case "latin1":
case "binary":
return I(this, t, e, n);

case "base64":
return k(this, t, e, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return N(this, t, e, n);

default:
if (r) throw new TypeError("Unknown encoding: " + i);
i = ("" + i).toLowerCase();
r = !0;
}
};
c.prototype.toJSON = function() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
function R(t, e, n) {
return 0 === e && n === t.length ? i.fromByteArray(t) : i.fromByteArray(t.slice(e, n));
}
function O(t, e, n) {
n = Math.min(t.length, n);
for (var i = [], o = e; o < n; ) {
var r = t[o], a = null, s = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
if (o + s <= n) {
var c, l, u, f;
switch (s) {
case 1:
r < 128 && (a = r);
break;

case 2:
128 == (192 & (c = t[o + 1])) && (f = (31 & r) << 6 | 63 & c) > 127 && (a = f);
break;

case 3:
c = t[o + 1];
l = t[o + 2];
128 == (192 & c) && 128 == (192 & l) && (f = (15 & r) << 12 | (63 & c) << 6 | 63 & l) > 2047 && (f < 55296 || f > 57343) && (a = f);
break;

case 4:
c = t[o + 1];
l = t[o + 2];
u = t[o + 3];
128 == (192 & c) && 128 == (192 & l) && 128 == (192 & u) && (f = (15 & r) << 18 | (63 & c) << 12 | (63 & l) << 6 | 63 & u) > 65535 && f < 1114112 && (a = f);
}
}
if (null === a) {
a = 65533;
s = 1;
} else if (a > 65535) {
a -= 65536;
i.push(a >>> 10 & 1023 | 55296);
a = 56320 | 1023 & a;
}
i.push(a);
o += s;
}
return L(i);
}
var P = 4096;
function L(t) {
var e = t.length;
if (e <= P) return String.fromCharCode.apply(String, t);
for (var n = "", i = 0; i < e; ) n += String.fromCharCode.apply(String, t.slice(i, i += P));
return n;
}
function A(t, e, n) {
var i = "";
n = Math.min(t.length, n);
for (var o = e; o < n; ++o) i += String.fromCharCode(127 & t[o]);
return i;
}
function U(t, e, n) {
var i = "";
n = Math.min(t.length, n);
for (var o = e; o < n; ++o) i += String.fromCharCode(t[o]);
return i;
}
function D(t, e, n) {
var i = t.length;
(!e || e < 0) && (e = 0);
(!n || n < 0 || n > i) && (n = i);
for (var o = "", r = e; r < n; ++r) o += W(t[r]);
return o;
}
function B(t, e, n) {
for (var i = t.slice(e, n), o = "", r = 0; r < i.length; r += 2) o += String.fromCharCode(i[r] + 256 * i[r + 1]);
return o;
}
c.prototype.slice = function(t, e) {
var n, i = this.length;
t = ~~t;
e = void 0 === e ? i : ~~e;
t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i);
e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i);
e < t && (e = t);
if (c.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = c.prototype; else {
var o = e - t;
n = new c(o, void 0);
for (var r = 0; r < o; ++r) n[r] = this[r + t];
}
return n;
};
function x(t, e, n) {
if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
}
c.prototype.readUIntLE = function(t, e, n) {
t |= 0;
e |= 0;
n || x(t, e, this.length);
for (var i = this[t], o = 1, r = 0; ++r < e && (o *= 256); ) i += this[t + r] * o;
return i;
};
c.prototype.readUIntBE = function(t, e, n) {
t |= 0;
e |= 0;
n || x(t, e, this.length);
for (var i = this[t + --e], o = 1; e > 0 && (o *= 256); ) i += this[t + --e] * o;
return i;
};
c.prototype.readUInt8 = function(t, e) {
e || x(t, 1, this.length);
return this[t];
};
c.prototype.readUInt16LE = function(t, e) {
e || x(t, 2, this.length);
return this[t] | this[t + 1] << 8;
};
c.prototype.readUInt16BE = function(t, e) {
e || x(t, 2, this.length);
return this[t] << 8 | this[t + 1];
};
c.prototype.readUInt32LE = function(t, e) {
e || x(t, 4, this.length);
return (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
};
c.prototype.readUInt32BE = function(t, e) {
e || x(t, 4, this.length);
return 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
};
c.prototype.readIntLE = function(t, e, n) {
t |= 0;
e |= 0;
n || x(t, e, this.length);
for (var i = this[t], o = 1, r = 0; ++r < e && (o *= 256); ) i += this[t + r] * o;
i >= (o *= 128) && (i -= Math.pow(2, 8 * e));
return i;
};
c.prototype.readIntBE = function(t, e, n) {
t |= 0;
e |= 0;
n || x(t, e, this.length);
for (var i = e, o = 1, r = this[t + --i]; i > 0 && (o *= 256); ) r += this[t + --i] * o;
r >= (o *= 128) && (r -= Math.pow(2, 8 * e));
return r;
};
c.prototype.readInt8 = function(t, e) {
e || x(t, 1, this.length);
return 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
};
c.prototype.readInt16LE = function(t, e) {
e || x(t, 2, this.length);
var n = this[t] | this[t + 1] << 8;
return 32768 & n ? 4294901760 | n : n;
};
c.prototype.readInt16BE = function(t, e) {
e || x(t, 2, this.length);
var n = this[t + 1] | this[t] << 8;
return 32768 & n ? 4294901760 | n : n;
};
c.prototype.readInt32LE = function(t, e) {
e || x(t, 4, this.length);
return this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
};
c.prototype.readInt32BE = function(t, e) {
e || x(t, 4, this.length);
return this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
};
c.prototype.readFloatLE = function(t, e) {
e || x(t, 4, this.length);
return o.read(this, t, !0, 23, 4);
};
c.prototype.readFloatBE = function(t, e) {
e || x(t, 4, this.length);
return o.read(this, t, !1, 23, 4);
};
c.prototype.readDoubleLE = function(t, e) {
e || x(t, 8, this.length);
return o.read(this, t, !0, 52, 8);
};
c.prototype.readDoubleBE = function(t, e) {
e || x(t, 8, this.length);
return o.read(this, t, !1, 52, 8);
};
function M(t, e, n, i, o, r) {
if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (e > o || e < r) throw new RangeError('"value" argument is out of bounds');
if (n + i > t.length) throw new RangeError("Index out of range");
}
c.prototype.writeUIntLE = function(t, e, n, i) {
t = +t;
e |= 0;
n |= 0;
if (!i) {
M(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
}
var o = 1, r = 0;
this[e] = 255 & t;
for (;++r < n && (o *= 256); ) this[e + r] = t / o & 255;
return e + n;
};
c.prototype.writeUIntBE = function(t, e, n, i) {
t = +t;
e |= 0;
n |= 0;
if (!i) {
M(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
}
var o = n - 1, r = 1;
this[e + o] = 255 & t;
for (;--o >= 0 && (r *= 256); ) this[e + o] = t / r & 255;
return e + n;
};
c.prototype.writeUInt8 = function(t, e, n) {
t = +t;
e |= 0;
n || M(this, t, e, 1, 255, 0);
c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t));
this[e] = 255 & t;
return e + 1;
};
function G(t, e, n, i) {
e < 0 && (e = 65535 + e + 1);
for (var o = 0, r = Math.min(t.length - n, 2); o < r; ++o) t[n + o] = (e & 255 << 8 * (i ? o : 1 - o)) >>> 8 * (i ? o : 1 - o);
}
c.prototype.writeUInt16LE = function(t, e, n) {
t = +t;
e |= 0;
n || M(this, t, e, 2, 65535, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = 255 & t;
this[e + 1] = t >>> 8;
} else G(this, t, e, !0);
return e + 2;
};
c.prototype.writeUInt16BE = function(t, e, n) {
t = +t;
e |= 0;
n || M(this, t, e, 2, 65535, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = t >>> 8;
this[e + 1] = 255 & t;
} else G(this, t, e, !1);
return e + 2;
};
function F(t, e, n, i) {
e < 0 && (e = 4294967295 + e + 1);
for (var o = 0, r = Math.min(t.length - n, 4); o < r; ++o) t[n + o] = e >>> 8 * (i ? o : 3 - o) & 255;
}
c.prototype.writeUInt32LE = function(t, e, n) {
t = +t;
e |= 0;
n || M(this, t, e, 4, 4294967295, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[e + 3] = t >>> 24;
this[e + 2] = t >>> 16;
this[e + 1] = t >>> 8;
this[e] = 255 & t;
} else F(this, t, e, !0);
return e + 4;
};
c.prototype.writeUInt32BE = function(t, e, n) {
t = +t;
e |= 0;
n || M(this, t, e, 4, 4294967295, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = t >>> 24;
this[e + 1] = t >>> 16;
this[e + 2] = t >>> 8;
this[e + 3] = 255 & t;
} else F(this, t, e, !1);
return e + 4;
};
c.prototype.writeIntLE = function(t, e, n, i) {
t = +t;
e |= 0;
if (!i) {
var o = Math.pow(2, 8 * n - 1);
M(this, t, e, n, o - 1, -o);
}
var r = 0, a = 1, s = 0;
this[e] = 255 & t;
for (;++r < n && (a *= 256); ) {
t < 0 && 0 === s && 0 !== this[e + r - 1] && (s = 1);
this[e + r] = (t / a >> 0) - s & 255;
}
return e + n;
};
c.prototype.writeIntBE = function(t, e, n, i) {
t = +t;
e |= 0;
if (!i) {
var o = Math.pow(2, 8 * n - 1);
M(this, t, e, n, o - 1, -o);
}
var r = n - 1, a = 1, s = 0;
this[e + r] = 255 & t;
for (;--r >= 0 && (a *= 256); ) {
t < 0 && 0 === s && 0 !== this[e + r + 1] && (s = 1);
this[e + r] = (t / a >> 0) - s & 255;
}
return e + n;
};
c.prototype.writeInt8 = function(t, e, n) {
t = +t;
e |= 0;
n || M(this, t, e, 1, 127, -128);
c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t));
t < 0 && (t = 255 + t + 1);
this[e] = 255 & t;
return e + 1;
};
c.prototype.writeInt16LE = function(t, e, n) {
t = +t;
e |= 0;
n || M(this, t, e, 2, 32767, -32768);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = 255 & t;
this[e + 1] = t >>> 8;
} else G(this, t, e, !0);
return e + 2;
};
c.prototype.writeInt16BE = function(t, e, n) {
t = +t;
e |= 0;
n || M(this, t, e, 2, 32767, -32768);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = t >>> 8;
this[e + 1] = 255 & t;
} else G(this, t, e, !1);
return e + 2;
};
c.prototype.writeInt32LE = function(t, e, n) {
t = +t;
e |= 0;
n || M(this, t, e, 4, 2147483647, -2147483648);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = 255 & t;
this[e + 1] = t >>> 8;
this[e + 2] = t >>> 16;
this[e + 3] = t >>> 24;
} else F(this, t, e, !0);
return e + 4;
};
c.prototype.writeInt32BE = function(t, e, n) {
t = +t;
e |= 0;
n || M(this, t, e, 4, 2147483647, -2147483648);
t < 0 && (t = 4294967295 + t + 1);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = t >>> 24;
this[e + 1] = t >>> 16;
this[e + 2] = t >>> 8;
this[e + 3] = 255 & t;
} else F(this, t, e, !1);
return e + 4;
};
function H(t, e, n, i, o, r) {
if (n + i > t.length) throw new RangeError("Index out of range");
if (n < 0) throw new RangeError("Index out of range");
}
function Y(t, e, n, i, r) {
r || H(t, 0, n, 4);
o.write(t, e, n, i, 23, 4);
return n + 4;
}
c.prototype.writeFloatLE = function(t, e, n) {
return Y(this, t, e, !0, n);
};
c.prototype.writeFloatBE = function(t, e, n) {
return Y(this, t, e, !1, n);
};
function j(t, e, n, i, r) {
r || H(t, 0, n, 8);
o.write(t, e, n, i, 52, 8);
return n + 8;
}
c.prototype.writeDoubleLE = function(t, e, n) {
return j(this, t, e, !0, n);
};
c.prototype.writeDoubleBE = function(t, e, n) {
return j(this, t, e, !1, n);
};
c.prototype.copy = function(t, e, n, i) {
n || (n = 0);
i || 0 === i || (i = this.length);
e >= t.length && (e = t.length);
e || (e = 0);
i > 0 && i < n && (i = n);
if (i === n) return 0;
if (0 === t.length || 0 === this.length) return 0;
if (e < 0) throw new RangeError("targetStart out of bounds");
if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
if (i < 0) throw new RangeError("sourceEnd out of bounds");
i > this.length && (i = this.length);
t.length - e < i - n && (i = t.length - e + n);
var o, r = i - n;
if (this === t && n < e && e < i) for (o = r - 1; o >= 0; --o) t[o + e] = this[o + n]; else if (r < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (o = 0; o < r; ++o) t[o + e] = this[o + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + r), e);
return r;
};
c.prototype.fill = function(t, e, n, i) {
if ("string" == typeof t) {
if ("string" == typeof e) {
i = e;
e = 0;
n = this.length;
} else if ("string" == typeof n) {
i = n;
n = this.length;
}
if (1 === t.length) {
var o = t.charCodeAt(0);
o < 256 && (t = o);
}
if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
if ("string" == typeof i && !c.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
} else "number" == typeof t && (t &= 255);
if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
if (n <= e) return this;
e >>>= 0;
n = void 0 === n ? this.length : n >>> 0;
t || (t = 0);
var r;
if ("number" == typeof t) for (r = e; r < n; ++r) this[r] = t; else {
var a = c.isBuffer(t) ? t : X(new c(t, i).toString()), s = a.length;
for (r = 0; r < n - e; ++r) this[r + e] = a[r % s];
}
return this;
};
var $ = /[^+\/0-9A-Za-z-_]/g;
function V(t) {
if ((t = z(t).replace($, "")).length < 2) return "";
for (;t.length % 4 != 0; ) t += "=";
return t;
}
function z(t) {
return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function W(t) {
return t < 16 ? "0" + t.toString(16) : t.toString(16);
}
function X(t, e) {
e = e || Infinity;
for (var n, i = t.length, o = null, r = [], a = 0; a < i; ++a) {
if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
if (!o) {
if (n > 56319) {
(e -= 3) > -1 && r.push(239, 191, 189);
continue;
}
if (a + 1 === i) {
(e -= 3) > -1 && r.push(239, 191, 189);
continue;
}
o = n;
continue;
}
if (n < 56320) {
(e -= 3) > -1 && r.push(239, 191, 189);
o = n;
continue;
}
n = 65536 + (o - 55296 << 10 | n - 56320);
} else o && (e -= 3) > -1 && r.push(239, 191, 189);
o = null;
if (n < 128) {
if ((e -= 1) < 0) break;
r.push(n);
} else if (n < 2048) {
if ((e -= 2) < 0) break;
r.push(n >> 6 | 192, 63 & n | 128);
} else if (n < 65536) {
if ((e -= 3) < 0) break;
r.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
} else {
if (!(n < 1114112)) throw new Error("Invalid code point");
if ((e -= 4) < 0) break;
r.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
}
}
return r;
}
function J(t) {
for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
return e;
}
function Q(t, e) {
for (var n, i, o, r = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) {
i = (n = t.charCodeAt(a)) >> 8;
o = n % 256;
r.push(o);
r.push(i);
}
return r;
}
function K(t) {
return i.toByteArray(V(t));
}
function Z(t, e, n, i) {
for (var o = 0; o < i && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
return o;
}
function q(t) {
return t != t;
}
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"base64-js": 1,
ieee754: 4,
isarray: 3
} ],
3: [ function(t, e, n) {
var i = {}.toString;
e.exports = Array.isArray || function(t) {
return "[object Array]" == i.call(t);
};
}, {} ],
4: [ function(t, e, n) {
n.read = function(t, e, n, i, o) {
var r, a, s = 8 * o - i - 1, c = (1 << s) - 1, l = c >> 1, u = -7, f = n ? o - 1 : 0, h = n ? -1 : 1, d = t[e + f];
f += h;
r = d & (1 << -u) - 1;
d >>= -u;
u += s;
for (;u > 0; r = 256 * r + t[e + f], f += h, u -= 8) ;
a = r & (1 << -u) - 1;
r >>= -u;
u += i;
for (;u > 0; a = 256 * a + t[e + f], f += h, u -= 8) ;
if (0 === r) r = 1 - l; else {
if (r === c) return a ? NaN : Infinity * (d ? -1 : 1);
a += Math.pow(2, i);
r -= l;
}
return (d ? -1 : 1) * a * Math.pow(2, r - i);
};
n.write = function(t, e, n, i, o, r) {
var a, s, c, l = 8 * r - o - 1, u = (1 << l) - 1, f = u >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = i ? 0 : r - 1, p = i ? 1 : -1, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
e = Math.abs(e);
if (isNaN(e) || Infinity === e) {
s = isNaN(e) ? 1 : 0;
a = u;
} else {
a = Math.floor(Math.log(e) / Math.LN2);
if (e * (c = Math.pow(2, -a)) < 1) {
a--;
c *= 2;
}
if ((e += a + f >= 1 ? h / c : h * Math.pow(2, 1 - f)) * c >= 2) {
a++;
c /= 2;
}
if (a + f >= u) {
s = 0;
a = u;
} else if (a + f >= 1) {
s = (e * c - 1) * Math.pow(2, o);
a += f;
} else {
s = e * Math.pow(2, f - 1) * Math.pow(2, o);
a = 0;
}
}
for (;o >= 8; t[n + d] = 255 & s, d += p, s /= 256, o -= 8) ;
a = a << o | s;
l += o;
for (;l > 0; t[n + d] = 255 & a, d += p, a /= 256, l -= 8) ;
t[n + d - p] |= 128 * g;
};
}, {} ],
CaoThap: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "29552NCkH9OD737cljsyPr4", "CaoThap");
var i = t("lodash"), o = t("../../Utils/Constants"), r = t("../../Utils/Helper"), a = f(t("../Common/BaseDialog")), s = f(t("../../SlotGame/JackpotEffect")), c = f(t("../Mini3Kay/BaCayUserHistory")), l = f(t("../Mini3Kay/BaCayJackpotHistory")), u = f(t("../GameList/MultipleFund"));
function f(t) {
return t && t.__esModule ? t : {
default: t
};
}
var h = 23, d = 202, p = 221, g = 222, y = 237, m = 214, v = 77, _ = 78, b = 0, w = 1, S = 2;
cc.Class({
extends: cc.Component,
properties: {
txtJackpot: {
default: null,
type: cc.Label
},
card: {
default: null,
type: cc.Sprite
},
listCards: {
default: [],
type: cc.SpriteFrame
},
btnPlay: {
default: null,
type: cc.Button
},
A_Node: {
default: [],
type: cc.Label
},
txtTime: {
default: null,
type: cc.Label
},
anNonBtn: {
default: null,
type: cc.Button
},
txtClicktoPlay: {
default: null,
type: cc.Node
},
highBtn: {
default: null,
type: cc.Button
},
lowBtn: {
default: null,
type: cc.Button
},
txtWin: {
default: null,
type: cc.Label
},
txtEatTren: {
default: null,
type: cc.Label
},
txtEatDuoi: {
default: null,
type: cc.Label
},
backCard: {
default: null,
type: cc.SpriteFrame
},
anNonSpr: {
default: [],
type: cc.SpriteFrame
},
highSpr: {
default: [],
type: cc.SpriteFrame
},
lowSpr: {
default: [],
type: cc.SpriteFrame
},
historyContent: {
default: null,
type: cc.Node
},
listCardNames: {
default: []
},
listFaces: {
default: []
},
dialogGuide: {
default: null,
type: a.default
},
dialogUserHistory: {
default: null,
type: c.default
},
dialogJackpotHistory: {
default: null,
type: l.default
},
winNode: {
default: null,
type: cc.Node
},
jackpotEffect: {
default: null,
type: s.default
},
loseNode: {
default: null,
type: cc.Node
},
txtId: {
default: null,
type: cc.Label
},
listSprBtnBets: {
default: [],
type: cc.Sprite
},
listBtnFrames: {
default: [],
type: cc.SpriteFrame
},
multipleFund: {
default: null,
type: u.default
},
txtJackpotXHu: {
default: null,
type: cc.Label
}
},
onLoad: function() {
this.listCardNames = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];
this.listFaces = [ "♤", "♧", "♢", "♡" ];
this.listBets = [ 1e3, 1e4, 5e4, 1e5, 5e5 ];
this.historyPos = this.historyContent.x;
},
start: function() {
window.$Global.networkService.on("" + o.REQUEST_TYPE.HIGHLOW_GAMES, this.onMessage.bind(this));
window.$Global.networkService.on("notify_" + v, this.onNotifyUpdate.bind(this));
window.$Global.networkService.on("notify_" + _, this.onNotifyFinish.bind(this));
window.$Global.networkService.on("notify_" + o.NOTIFY_TYPE.NOTIFY_MINI_CHANGED, this.onNotifyMiniChanged.bind(this));
},
onDestroy: function() {
window.$Global.networkService.off("" + o.REQUEST_TYPE.HIGHLOW_GAMES);
window.$Global.networkService.off("notify_" + v);
window.$Global.networkService.off("notify_" + _);
window.$Global.networkService.off("notify_" + o.NOTIFY_TYPE.NOTIFY_MINI_CHANGED);
clearInterval(this.timeCountDown);
this.timeCountDown = null;
},
onMessage: function(t) {
var e = t;
if (e.resultCode === o.ResponseResultCode.SUCCESS) {
if (e.type === p) this.onJackpotHistoryDone(e.history); else if (e.type === g) this.onUserHistoryDone(e.history); else if (e.type === d) this.onStart(e); else if (e.type === h) {
this.updateJackpot(e.jackpot);
this.turnOnBetBtn(this.currBetIndexSub);
this.txtWin.string = (0, r.numberWithDot)(this.listBets[this.currBetIndexSub]);
}
} else window.$UIHelper.showToast(e.desc || e.content || "");
},
onNotifyUpdate: function(t) {
var e = t.data, n = e.lastCard, i = e.listCard.length;
this.setTimeCountDown(e.countDown);
this.roll(n);
this.txtEatTren.string = (0, r.numberWithDot)(e.highWin);
this.txtEatDuoi.string = (0, r.numberWithDot)(e.lowWin);
this.txtWin.string = (0, r.numberWithDot)(e.totalWin);
1 != n.card && this.onOffButton(w, !0);
2 != n.card && this.onOffButton(S, !0);
i > 1 && this.onOffButton(b, !0);
this.btnPlay.node.active = !1;
this.txtClicktoPlay.active = !1;
this.updateANode(e.listCard);
},
onNotifyFinish: function(t) {
var e = this;
clearInterval(this.timeCountDown);
this.timeCountDown = null;
this.txtTime.string = (0, r.timeFormat)(0);
if (!this.anNon) {
this.roll(t.data.lastCard);
this.updateANode(t.data.listCard);
}
this.onOffButton(0, !1);
this.onOffButton(1, !1);
this.onOffButton(2, !1);
setTimeout(function() {
t.isJackpot ? e.jackpotEffect.show(t.jackpotAmount) : t.data.totalWin > 0 ? e.showWinChip(t.data.totalWin) : e.showLose();
}, 1e3);
this.scheduleOnce(function() {
e.card.spriteFrame = e.backCard;
e.btnPlay.node.active = !0;
e.txtClicktoPlay.active = !0;
e.cleanHistory();
e.txtEatTren.string = "";
e.txtEatDuoi.string = "";
e.txtWin.string = (0, r.numberWithDot)(t.data.bet);
e.A_Node.forEach(function(t) {
t.node.color = cc.Color.GRAY;
});
}, 2);
},
show: function() {
this.node.active = !0;
window.$Global.minigame.isShowCaoThap = !0;
this.sub(-1);
this.currBetIndexSub = 0;
},
close: function() {
this.reset();
this.cleanHistory();
this.node.active = !1;
window.$Global.minigame.isShowCaoThap = !1;
},
sub: function(t) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.HIGHLOW_GAMES, {
type: h,
chipType: 1,
bet: t
});
this.currentBet = t;
},
reset: function() {
this.onOffButton(0, !1);
this.onOffButton(1, !1);
this.onOffButton(2, !1);
},
startMatch: function() {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.HIGHLOW_GAMES, {
type: d
});
this.anNon = !1;
this.jackpotEffect.hide();
},
onBetChanged: function(t, e) {
this.sub(this.listBets[e]);
this.currBetIndexSub = e;
},
updateJackpot: function(t) {
(0, r.runNumber)(this.txtJackpot, t);
(0, r.runNumber)(this.txtJackpotXHu, t);
},
onStart: function(t) {
this.setMatchId(t.matchId);
},
setTimeCountDown: function(t) {
var e = this;
clearInterval(this.timeCountDown);
this.timeCountDown = null;
this.timeRemain = t;
this.txtTime.string = (0, r.timeFormat)(this.timeRemain);
this.timeRemain--;
this.timeCountDown = setInterval(function() {
if (e.timeRemain >= 0) e.txtTime.string = (0, r.timeFormat)(e.timeRemain); else {
clearInterval(e.timeCountDown);
e.timeCountDown = null;
}
e.timeRemain--;
}, 1e3);
},
roll: function(t) {
var e = 0;
this.schedule(function n() {
var o = (0, i.random)(0, this.listCards.length - 1, !1);
this.card.spriteFrame = this.listCards[o];
if (++e >= 10) {
this.unschedule(n);
var r = 4 * (t.card - 1) + (t.face - 1);
this.card.spriteFrame = this.listCards[r];
this.addHistory(t);
}
}, .05);
},
onOffButton: function(t, e) {
switch (t) {
case b:
this.anNonBtn.getComponent(cc.Sprite).spriteFrame = e ? this.anNonSpr[1] : this.anNonSpr[0];
this.anNonBtn.interactable = e;
break;

case w:
this.highBtn.getComponent(cc.Sprite).spriteFrame = e ? this.highSpr[1] : this.highSpr[0];
this.highBtn.interactable = e;
break;

case S:
this.lowBtn.getComponent(cc.Sprite).spriteFrame = e ? this.lowSpr[1] : this.lowSpr[0];
this.lowBtn.interactable = e;
}
},
onAnNonClick: function() {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.HIGHLOW_GAMES, {
type: y
});
this.anNon = !0;
},
onBetHighLowClick: function(t, e) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.HIGHLOW_GAMES, {
type: m,
pot: parseInt(e)
});
this.onOffButton(b, !1);
this.onOffButton(w, !1);
this.onOffButton(S, !1);
},
showUserHistory: function() {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.HIGHLOW_GAMES, {
type: g
});
this.dialogUserHistory.show();
},
onUserHistoryDone: function(t) {
this.dialogUserHistory.setData(t);
},
showJackpotHistory: function() {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.HIGHLOW_GAMES, {
type: p
});
this.dialogJackpotHistory.show();
},
onJackpotHistoryDone: function(t) {
this.dialogJackpotHistory.setData(t);
},
showGuide: function() {
this.dialogGuide.show();
},
addHistory: function(t) {
var e = new cc.Node(), n = e.addComponent(cc.Label);
n.fontSize = 35;
n.string = this.listCardNames[t.card - 1] + this.listFaces[t.face - 1];
e.parent = this.historyContent;
this.historyContent.childrenCount > 8 && (this.historyContent.x -= e.width);
},
cleanHistory: function() {
this.historyContent.removeAllChildren();
this.historyContent.x = this.historyPos;
},
showWinChip: function(t) {
this.winNode.active = !0;
this.winNode.children[0].getComponent(cc.Label).string = (0, r.numberWithDot)(t);
this.winNode.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
this.winNode.active = !1;
}.bind(this)), cc.callFunc(this.onShowWinDone.bind(this))));
},
updateANode: function(t) {
var e = this, n = 0;
t.forEach(function(t) {
if (1 === t.card) {
n++;
e.A_Node[n - 1].node.color = cc.Color.WHITE;
}
});
},
onShowWinDone: function() {
window.$Global.networkService.updateMoneyWithZoneId(o.ZONE_ID.CAO_THAP);
},
showLose: function() {
this.loseNode.active = !0;
this.loseNode.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
this.loseNode.active = !1;
}.bind(this)), cc.callFunc(this.onShowWinDone.bind(this))));
},
setMatchId: function(t) {
this.txtId.string = "#" + t;
},
turnOnBetBtn: function(t) {
for (var e = 0; e < this.listSprBtnBets.length; e++) {
var n = this.listSprBtnBets[e];
n.spriteFrame = e == t ? this.listBtnFrames[1] : this.listBtnFrames[0];
}
},
onNotifyMiniChanged: function(t) {
if (t.zoneId == o.ZONE_ID.CAO_THAP && t.bet == this.currentBet) {
this.updateJackpot(t.jackpot);
this.multipleFund._setMultipleFund(t.multipleFund);
}
}
});
cc._RF.pop();
}, {
"../../SlotGame/JackpotEffect": "JackpotEffect",
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper",
"../Common/BaseDialog": "BaseDialog",
"../GameList/MultipleFund": "MultipleFund",
"../Mini3Kay/BaCayJackpotHistory": "BaCayJackpotHistory",
"../Mini3Kay/BaCayUserHistory": "BaCayUserHistory",
lodash: 9
} ],
ChatController: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f0d6cKGQKxJwbFxotg6kWZo", "ChatController");
cc.Class({
extends: cc.Component,
properties: {
chatInput: {
default: null,
type: cc.EditBox
},
chatContent: {
default: null,
type: cc.Node
},
chatItem: {
default: null,
type: cc.Prefab
}
},
start: function() {
this.chatPool = new cc.NodePool();
for (var t = 0; t < 50; t++) {
var e = cc.instantiate(this.chatItem);
this.chatPool.put(e);
}
},
sendChat: function() {
var t = this, e = this.chatInput.string.trim();
"" != e ? window.$Global.userService.sendChat(e).then(function(e) {
t.chatInput.string = "";
void 0 !== e.desc && window.$UIHelper.showToast(e.desc);
}) : window.$UIHelper.showToast("Nhập tin nhắn chat");
},
clearChat: function() {
this.chatContent.removeAllChildren();
},
setData: function(t) {
var e = t.message, n = t.user.displayName, i = t.user.providerCode, o = cc.Color.CYAN;
(i.includes("admin") || i.includes("agency")) && (o = cc.Color.RED);
var r = this.chatPool.get();
null === r && (r = cc.instantiate(this.chatItem));
var a = r.children;
a[0].getComponent(cc.Label).string = n + ": ";
a[0].color = o;
a[1].getComponent(cc.Label).string = e;
r.parent = this.chatContent;
this.chatContent.childrenCount > 50 && this.chatPool.put(this.chatContent[0]);
}
});
cc._RF.pop();
}, {} ],
Config: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "13e0b6VsrhNZb7uy9Qu7SYA", "Config");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CONFIG = {
URLS: {
server: "https://x4taikhoan.com/api/game/"
},
WS: {
ws: "ws://x4taikhoan.com/websocket",
wss: "wss://x4taikhoan.com/websocket"
},
API: {
PATHS: {
initialize: "initialize",
versionCfg: "version_cfg",
register: "auth/register",
userDetail: "user_detail",
dealers: "dealer_cfg",
systemMessage: "get_system_messages"
},
AUTH: {
key: "wo3peulgtv3z0xhed",
secret: "y1uiy7kn2e08e6hc06wnleblz"
}
},
INFO: {
deviceId: "",
countOpenApp: 0,
model: "",
osType: cc.sys.isBrowser ? 4 : cc.sys.os === cc.sys.OS_IOS ? 1 : cc.sys.os === cc.sys.OS_ANDROID ? 2 : 4,
platform: cc.sys.isBrowser ? "PC" : cc.sys.os === cc.sys.OS_IOS ? "IOS" : cc.sys.os === cc.sys.OS_ANDROID ? "Android" : "PC",
osVersion: cc.sys.isBrowser ? "1.0.0" : cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_ANDROID ? cc.sys.osVersion : "1.0.0",
packagename: "",
refCode: "",
hotline: "N/A",
clientVersion: "1.0.0",
underReview: !1,
providerCode: "gamecode",
APPFBID: "0",
fanpage: "https://www.facebook.com/",
otpLink: "",
hotline1: "N/A",
downloadURL: "",
latest_version: "",
forceDownload: !1,
location: "US",
gameName: "devip",
goldName: "Gold"
},
FB_APPID: "472075346944053"
};
cc._RF.pop();
}, {} ],
Constants: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "bd528ggAfdO9KMm5qU3D1NF", "Constants");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CALL_TYPE = {
REQUEST: 0,
RESPONSE: 1,
UPDATE: 2
}, n.OS = {
IOS: 1,
ANDROID: 2,
WINDOW_PHONE: 3,
PC: 4
}, n.REQUEST_TYPE = {
AUTH: 1,
LOGIN_FACEBOOK: 2,
SIGNOUT: 4,
GET_USER_INFO: 5,
GET_CONFIG: 8,
JOIN_LOBBY: 10,
SUBSCRIBE_LOBBY: 11,
UNSUBSCRIBE_LOBBY: 12,
LEAVE_LOBBY: 13,
LIST_LOBBIES: 14,
JOIN_ROOM: 22,
SUBSCRIBE_ROOM: 23,
UNSUBSCRIBE_ROOM: 24,
LEAVE_ROOM: 25,
GET_ROOMS: 27,
UPDATE_PEERS: 28,
SEND_KEEP_ALIVE: 30,
VERIFY_G2FA: 31,
TOGGLE_LOGIN_G2FA: 32,
USER_GOLD_HISTORY: 33,
AVAILABLE_KOIN: 35,
SEND_MESSAGE: 43,
GET_MESSAGES: 44,
CHANGE_PASS: 46,
UPDATE_INFO: 47,
READ_MESSAGE: 49,
DELETE_MESSAGES: 50,
GET_SYSTEM_MESSAGE: 53,
ANOUNCEMENTS: 60,
GET_USER_MESSAGE_COUNT: 69,
GLOBAL_CHAT: 73,
LIST_GAMES: 93,
SUBSCRIBE_GAME: 94,
TAI_XIU: 96,
MINI_POKER: 98,
TRANSFER_GOLD: 101,
GIFT_CODE: 103,
GET_LIST_REF_USER: 106,
SET_C2: 113,
DEL_C2: 114,
MINI_BAUCUA: 115,
GET_OTPCODE: 116,
GET_VIP_POINTS: 117,
GET_FUND_SLOT: 120,
GET_LIST_USER_JACKPOT: 121,
NAP_CARD: 122,
MINI_SLOT_6: 123,
MINI_SLOT_7: 127,
MINI_SLOT_8: 123,
MINI_BACAY_GAMES: 125,
HIGHLOW_GAMES: 126,
GET_MOBILE_CARD: 128,
GET_MOBILE_CARD_HISTORY: 129,
START_MATCH: 202,
ADD_BET: 214,
GET_JACKPOT_HISTORY: 221,
GET_USER_HISTORY: 222
}, n.ResponseResultCode = {
SUCCESS: 0,
AUTH_ERROR: 1,
INVALID_SESSION: 2,
USER_IS_LOCK: 3,
BAD_REQUEST: 4,
REG_USER_EXIST: 5,
UNKNOWN_ERROR: 6,
REG_PASS_LEN_WRONG: 7,
OLD_NEW_EQ_WRONG: 8,
REG_USER_EQ_PASS: 9,
REG_OLD_PASS_WRONG: 10,
INVALID_USER: 11,
ROOM_STARTED: 12,
NOT_ROOM_OWNER: 13,
NOT_IN_THE_ROOM: 14,
INVALID_CHIP: 15,
INVALID_MAX_PLAYER: 16,
INVALID_ROOM_NAME: 17,
INVALID_PASSWORD: 18,
INVALID_REG_USERNAME: 19,
NO_MOBILE_NUMBER: 20,
MOBILE_NOT_EQUAL: 21,
INVALID_CHIP_MAX_BET: 22,
INVALID_CHIP_MIN_BET: 24,
INVALID_MAX_USER_PER_DEVICE: 25,
INVALID_CLAIM_VALUE: 26,
ALREADY_CLAIMED: 27,
INVALID_USERNAME: 28,
INVALID_GOLD: 29,
INVALID_PROVIDER: 30,
INVALID_BALANCE: 31,
TRANSFER_IN_PLAY_MOD: 33,
TRANSFER_SMALLER_MIN_VALUE: 34,
TRANSFER_OVER_MAX_VALUE: 35,
CASHOUT_LOCKED: 36,
CASHOUT_ITEM_NOT_EXIST: 37,
CASHOUT_OVER_AMOUNT_DAY: 38,
CASHOUT_OVER_USER_AMOUNT_DAY: 39,
CASHOUT_SMALLER_MIN_VALUE: 40,
CASHOUT_OVER_MAX_VALUE: 41,
USER_LOGGED: 42,
GIFT_CODE_NOT_EXITS: 43,
GIFT_CODE_USED: 44,
UPDATE_PEERS_ERROR: 46,
REG_USER_INVALID_MOBILE: 51,
REG_USER_EQ_FULLNAME: 52,
LOGIN_REQUEST_OTP_SUCCESS: 53,
LOGIN_REQUEST_OTP_NOT_ENOUGH_MONEY: 54,
INVALID_CARD_PROVIDER: 55,
REQUEST_ERROR: 99,
NOT_INTERNET_CONNECTION: 100,
TRANSFER_NOT_OWN_AGENCY: 101,
TRANSFER_NOT_OWN_PLAYER: 102
}, n.NOTIFY_TYPE = {
UPDATE_INFO: 1,
START_MATCH: 2,
END_MATCH: 3,
UPDATE_MONEY: 8,
ROOM_STATE_CHANGED: 14,
ACTIONS_IN_LOBBY: 14,
WORLD_CHAT_NOTIFICATION: 53,
TAI_XIU: 59,
NOTIFY_MINI_CHANGED: 62,
MINI_BAUCUA: 74,
NAPCARD_NOTIFY: 76,
SESSION_KICKED_BY_OTHER_LOGIN: 80
}, n.LOGIN_TYPE = {
USER_PASS: 1
}, n.PAYLOAD_TYPE = {
MESSAGE_PACK: 3
}, n.ZONE_ID = {
SLOT_32: 32,
SLOT_18: 18,
SLOT_28: 28,
MINI_POKER: 22,
TAI_XIU: 21,
MINI_BAUCUA: 20,
XOC_DIA: 33,
MINI_SLOT_BANCA: 36,
MINI_BACAY: 38,
CAO_THAP: 39,
MINI_SLOT7: 40
}, n.ZONE_NAME = {
SLOT_32: "Cowboy",
SLOT_18: "Tây Du Ký",
SLOT_28: "Thor",
MINI_POKER: "Minipoker",
TAI_XIU: "Tài Xỉu",
MINI_BAUCUA: "Bầu Cua",
XOC_DIA: "Xóc Đĩa",
MINI_SLOT_BANCA: "Angry Birds",
MINI_BACAY: "Ba Cây",
CAO_THAP: "Cao Thấp"
}, n.SLOT_ROOM_ID = {
SLOT_32_100: 2009,
SLOT_32_1K: 2011,
SLOT_32_10K: 2013,
SLOT_18_100: 793,
SLOT_18_1K: 794,
SLOT_18_10K: 795,
SLOT_28_100: 1997,
SLOT_28_1K: 2002,
SLOT_28_10K: 2003
}, n.MONEY_TYPE = {
GOLD: 1
}, n.GAMES = {
CARD: 1,
CASINO: 2,
SLOT: 4
}, n.DEAL_TYPE = {
FREE_TRY: 0,
REAL_SPIN: 1
}, n.MINI_POKER_STATE = {
INIT: 0,
CAN_BET: 1,
SPIN: 2,
RESULT: 3,
WAIT_NEXT: 4
}, n.MINI_POKER_ACTION_TYPE = {
SUBSCRIBE_ROOM: 23,
UNSUBSCRIBE_ROOM: 24,
START_MATCH: 202,
ADD_BET: 214,
GET_JACKPOT_HISTORY: 221,
GET_USER_HISTORY: 222
}, n.TAI_XIU_ACTION_TYPE = {
SUBSCRIBE_ROOM: 23,
UNSUBSCRIBE_ROOM: 24,
ADD_BET: 214,
GET_ROOM_HISTORY: 221,
GET_USER_HISTORY: 222,
GET_MATCH_HISTORY: 231,
GET_TOP_WIN_DAILY: 232,
GET_TOP_GAME: 236
}, n.TAI_XIU_STATE = {
INIT: -1,
BET: 0,
BALANCE: 1,
END_MATCH: 2,
WAIT_NEW_MATCH: 8
}, n.TAI_XIU_CHOICE = {
TAI: 1,
XIU: 0
}, n.TAI_XIU_NOTIFY_TYPE = {
UPDATE_INFO: 1,
START_MATCH: 2,
END_MATCH: 3,
BALANCE: 7
}, n.URLS = {
DOWNLOAD_ANDROID_2FA: "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2",
DOWNLOAD_IOS_2FA: "https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8"
}, n.UpdateMoneyTypeCode = {
VIDEO_ADS: 6,
INVITE_FB: 7,
SMS: 1,
CARD: 2,
IAP: 3,
ADMIN: 4,
TRANSFER_GOLD: 8,
IGAME_CHARGING: 11,
BY_GIFT_CODE: 12,
HIDDEN_POPUP: -1
}, n.GiftCodeResultCode = {
SUCCESS: 0,
GIFT_CODE_NOT_EXITS: 43,
GIFT_CODE_USED: 44
}, n.TransferGoldResultCode = {
SUCCESS: 0,
TRANSFER_IN_PLAY_MOD: 33,
TRANSFER_SMALLER_MIN_VALUE: 34,
TRANSFER_OVER_MAX_VALUE: 35,
INVALID_REG_USERNAME: 19,
INVALID_PASSWORD: 18,
TRANSFER_NOT_OWN_AGENCY: 101,
TRANSFER_NOT_OWN_PLAYER: 102
}, n.CONFIG_TYPE = {
TRANSFER_GOLD: 2
}, n.CONFIG_GOLD = {
goldName: "Gold",
gameName: "GAMENAME"
}, n.SYSTEM_MESSAGE_TYPE = {
NEW: 1,
GUIDE: 2,
WELCOME: 3,
EVENT: 4,
EVENT_GROUP: 5
};
cc._RF.pop();
}, {} ],
DialogBauCuaHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "45bbeqrPxBF3ZEq6B4ZvBMt", "DialogBauCuaHistory");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog"));
cc.Class({
extends: i.default,
properties: {
content: {
default: null,
type: cc.Node
},
item: {
default: null,
type: cc.Prefab
}
},
setData: function(t) {
var e = this;
this.content.removeAllChildren();
t.forEach(function(t) {
var n = cc.instantiate(e.item);
n.getComponent("HisItem").setData(t);
n.parent = e.content;
});
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog"
} ],
DialogBauCuaTop: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9e94bCwnMZHLbBNW1uodNT1", "DialogBauCuaTop");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog"));
cc.Class({
extends: i.default,
properties: {
content: {
default: null,
type: cc.Node
},
item: {
default: null,
type: cc.Prefab
}
},
setData: function(t) {
this.content.removeAllChildren();
for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.item);
n.getComponent("BauCuaTopUserItem").setData(e + 1, t[e]);
n.parent = this.content;
}
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog"
} ],
DialogChat: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c8e57szSsVBCbQSr8IEvvlk", "DialogChat");
cc._RF.pop();
}, {} ],
DialogMiniPokerHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9d2e04i1i9OiItOMLjz7LG0", "DialogMiniPokerHistory");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog"));
cc.Class({
extends: i.default,
properties: {
listHistory: {
default: null,
type: cc.Node
},
historyItem: {
default: null,
type: cc.Prefab
}
},
refreshData: function() {},
setData: function(t) {
this.listHistory.removeAllChildren();
for (var e = 0; e < t.length; e++) {
var n = t[e], i = cc.instantiate(this.historyItem);
i.getComponent("MiniPokerHistoryItem").setData(e, n);
i.parent = this.listHistory;
}
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog"
} ],
DialogMiniPokerHuHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "68908+r3yRKooR0P1uR36bR", "DialogMiniPokerHuHistory");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog"));
cc.Class({
extends: i.default,
properties: {
listHistory: {
default: null,
type: cc.Node
},
historyItem: {
default: null,
type: cc.Prefab
}
},
setData: function(t) {
for (var e = 0; e < t.length; e++) {
var n = t[e], i = cc.instantiate(this.historyItem);
i.getComponent("MiniPokerHuHistoryItem").setData(e, n);
i.parent = this.listHistory;
}
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog"
} ],
DialogTaiXiuDuaTop: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2b32eoqx4xFeJ2xFfoJEF09", "DialogTaiXiuDuaTop");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog")), o = t("../../Utils/Constants"), r = t("../../Utils/Helper");
var a = 0, s = 1;
cc.Class({
extends: i.default,
properties: {
topWin: {
default: null,
type: cc.Node
},
topWinContent: {
default: null,
type: cc.Node
},
topLose: {
default: null,
type: cc.Node
},
topLoseContent: {
default: null,
type: cc.Node
},
rule: {
default: null,
type: cc.Node
},
topItem: {
default: null,
type: cc.Prefab
}
},
refreshData: function() {
this.getTop(s);
},
clickTopWin: function() {
this.topWin.active = !0;
this.topLose.active = !1;
this.rule.active = !1;
this.getTop(s);
},
clickTopLose: function() {
this.topWin.active = !1;
this.topLose.active = !0;
this.rule.active = !1;
this.getTop(a);
},
clickRule: function() {
this.topWin.active = !1;
this.topLose.active = !1;
this.rule.active = !0;
},
getTop: function(t) {
var e = new Date(), n = e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.TAI_XIU, {
type: o.TAI_XIU_ACTION_TYPE.GET_TOP_GAME,
is_win: t,
date: n
});
},
setTopData: function(t) {
var e = this, n = t.is_win;
n == s ? this.topWinContent.removeAllChildren() : this.topLoseContent.removeAllChildren();
var i = 0;
t.list.forEach(function(t) {
i++;
var o = cc.instantiate(e.topItem), a = o.getComponentsInChildren(cc.Label);
a[0].string = i;
var c = t.userName;
a[1].string = c.length > 15 ? c.substring(0, 15) + "..." : c;
a[2].string = t.numberMatchs;
a[3].string = (0, r.moneyFormat)(t.numberGolds);
a[4].string = t.lastMatchId;
a[5].string = (0, r.moneyFormat)(t.bonus);
n == s ? e.topWinContent.addChild(o) : e.topLoseContent.addChild(o);
});
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper",
"../Common/BaseDialog": "BaseDialog"
} ],
DialogTaiXiuHelp: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7d74868Cn5J4K2VwpUkCcSz", "DialogTaiXiuHelp");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog"));
cc.Class({
extends: i.default,
properties: {}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog"
} ],
DialogTaiXiuHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "27257spZl9C/InriS0lOvF2", "DialogTaiXiuHistory");
var i = r(t("../Common/BaseDialog")), o = r(t("./ListTaiXiuHistory"));
function r(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: i.default,
properties: {
listHistory: {
default: null,
type: o.default
}
},
refreshData: function() {},
setData: function(t) {
this.listHistory.setData(t.history);
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog",
"./ListTaiXiuHistory": "ListTaiXiuHistory"
} ],
DialogTaiXiuMatchHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3b4d0cNCLxHW4R4GmG6J6fi", "DialogTaiXiuMatchHistory");
var i = r(t("../Common/BaseDialog")), o = r(t("./ListTaiXiuMatchHistory"));
function r(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: i.default,
properties: {
listHistoryTai: {
default: null,
type: o.default
},
listHistoryXiu: {
default: null,
type: o.default
},
face1: {
default: null,
type: cc.Sprite
},
face2: {
default: null,
type: cc.Sprite
},
face3: {
default: null,
type: cc.Sprite
},
textDiem: {
default: null,
type: cc.Label
},
textId: {
default: null,
type: cc.Label
},
listFaces: {
default: [],
type: cc.SpriteFrame
}
},
refreshData: function() {},
setData: function(t) {
if (t.history) {
this.displayId = t.history.displayId;
this.textId.string = "#" + t.history.displayId;
this.setFace(this.face1, t.history.faces[0]);
this.setFace(this.face2, t.history.faces[1]);
this.setFace(this.face3, t.history.faces[2]);
this.textDiem.string = t.history.point;
this.listHistoryTai.setData(1, t.history_max);
this.listHistoryXiu.setData(0, t.history_min);
} else window.$UIHelper.showToast("Lỗi");
},
setFace: function(t, e) {
t.spriteFrame = this.listFaces[e - 1];
},
getMatchHistory: function(t) {
window.$Global.networkService.sendMessage(96, {
type: 231,
display_id: t,
chipType: 1
});
},
nextMatch: function() {
this.getMatchHistory(this.displayId + 1);
},
preMatch: function() {
this.getMatchHistory(this.displayId - 1);
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog",
"./ListTaiXiuMatchHistory": "ListTaiXiuMatchHistory"
} ],
DialogTaiXiuThongKe: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "32fc7hf88BDP5SJeK/chRNd", "DialogTaiXiuThongKe");
var i = s(t("../Common/BaseDialog")), o = s(t("./TaiXiuChartLine")), r = s(t("./TaiXiuChartTable")), a = s(t("./TaiXiuChartTablePoint"));
function s(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: i.default,
properties: {
page1: {
default: null,
type: cc.Node
},
page2: {
default: null,
type: cc.Node
},
arrowNextPage: {
default: null,
type: cc.Node
},
arrowPreviousPage: {
default: null,
type: cc.Node
},
chartLine1: {
default: null,
type: o.default
},
chartLine2: {
default: null,
type: o.default
},
chartTable1: {
default: null,
type: a.default
},
chartTable2: {
default: null,
type: r.default
}
},
onLoad: function() {
this.page2.active = !1;
this.page1.active = !0;
},
onClickNextPage: function() {
this.page1.active = !1;
this.page2.active = !0;
},
onClickPreviousPage: function() {
this.page2.active = !1;
this.page1.active = !0;
},
refreshData: function() {},
setData: function(t) {
this.chartLine2.style = "point";
this.chartLine1.setData(t);
this.chartLine2.style = "faces";
this.chartLine2.setData(t);
this.chartTable1.setData(t);
this.chartTable2.setData(t);
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog",
"./TaiXiuChartLine": "TaiXiuChartLine",
"./TaiXiuChartTable": "TaiXiuChartTable",
"./TaiXiuChartTablePoint": "TaiXiuChartTablePoint"
} ],
DialogTaiXiuTopUser: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9765d8mKixHyqvfAPn5TUEN", "DialogTaiXiuTopUser");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog"));
cc.Class({
extends: i.default,
properties: {
topUserContent: {
default: null,
type: cc.Node
},
topUserItem: {
default: null,
type: cc.Prefab
},
titleTabEvent: {
default: null,
type: cc.Label
},
topDaily: {
default: null,
type: cc.Node
},
topEvent: {
default: null,
type: cc.Node
},
topEventContent: {
default: null,
type: cc.Node
},
topEventItem: {
default: null,
type: cc.Prefab
},
topGuide: {
default: null,
type: cc.WebView
}
},
refreshData: function() {},
setData: function(t) {
this.topUserContent.removeAllChildren();
for (var e = t.top_win_daily, n = 0; n < e.length; n++) {
var i = e[n];
(s = cc.instantiate(this.topUserItem)).getComponent("TaiXiuTopUserItem").onSetData(n + 1, i);
this.topUserContent.addChild(s);
}
this.titleTabEvent.string = t.event_bxh_title;
this.topEventContent.removeAllChildren();
for (var o = t.top_win_event, r = t.event_bxh_bonus, a = 0; a < o.length; a++) {
var s;
(s = cc.instantiate(this.topEventItem)).getComponent("TaiXiuTopEventItem").onSetData(a + 1, o[a], r[a]);
this.topEventContent.addChild(s);
}
t.thele && "" != t.thele && (this.topGuide.url = t.thele);
},
tabsChanged: function(t, e) {
if (1 == e) {
this.topDaily.active = !0;
this.topEvent.active = !1;
this.topGuide.node.active = !1;
} else if (2 == e) {
this.topDaily.active = !1;
this.topEvent.active = !0;
this.topGuide.node.active = !1;
} else {
this.topDaily.active = !1;
this.topEvent.active = !1;
this.topGuide.node.active = !0;
}
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog"
} ],
Dialog_AddInfo: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "68481PyeWBB0ZtfhbRFugnh", "Dialog_AddInfo");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog")), o = t("../../Utils/Constants");
cc.Class({
extends: i.default,
properties: {
inputDisplayName: {
default: null,
type: cc.EditBox
},
inputPhoneNumber: {
default: null,
type: cc.EditBox
}
},
submit: function() {
var t = this, e = this.inputDisplayName.string, n = this.inputPhoneNumber.string;
!this.inputDisplayName.node.parent.active && n || e && n ? window.$Global.userService.updateInfo({
name: e,
mobile: n
}).then(function(e) {
if (e.resultCode === o.ResponseResultCode.SUCCESS) {
window.$UIHelper.showToast("Cập nhật thành công");
t.hide();
window.$Global.userService.getUserInfo().then(function(t) {
if (t.resultCode === o.ResponseResultCode.SUCCESS) {
window.$Global.userService.userInfo = t.user;
window.$Global.userService.emit("userInfoFetched", t.user);
}
});
} else window.$UIHelper.showToast(e.desc);
}) : window.$UIHelper.showToast("Vui lòng nhập đầy đủ thông tin!");
},
updateMobile: function() {
this.inputDisplayName.node.parent.active = !1;
this.inputPhoneNumber.node.parent.y = 30;
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../Common/BaseDialog": "BaseDialog"
} ],
Dialog_ChangePassword: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "36b1apHpc5JUpfgSyQbcUU/", "Dialog_ChangePassword");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog"));
cc.Class({
extends: i.default,
properties: {
textOldPassword: {
default: null,
type: cc.EditBox
},
textNewPassword: {
default: null,
type: cc.EditBox
},
textNewPasswordConfirm: {
default: null,
type: cc.EditBox
}
},
refreshData: function() {},
onClickCancel: function() {
this.hide();
},
onClickSubmit: function() {
var t = this.textOldPassword.string, e = this.textNewPassword.string, n = this.textNewPasswordConfirm.string, i = !0;
if (t && e && n) {
if (t == e) {
i = !1;
window.$UIHelper.showToast("Mật khẩu mới không được trùng với mật khẩu cũ");
}
if (n != e) {
i = !1;
window.$UIHelper.showToast("Nhập lại mật khẩu mới không trùng nhau");
}
} else {
i = !1;
window.$UIHelper.showToast("Vui lòng nhập đầy đủ!");
}
i && window.$Global.userService.changePassword(t, e).then(function(t) {
window.$UIHelper.showToast(t.desc || "");
});
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog"
} ],
Dialog_Event: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e0e71kWBkdMwqSQR2g62heH", "Dialog_Event");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog")), o = t("../../Utils/Constants"), r = t("../../Utils/Helper");
cc.Class({
extends: i.default,
properties: {
listTabs: {
default: null,
type: cc.ToggleContainer
},
tab: {
default: null,
type: cc.Prefab
},
txtTitle: {
default: null,
type: cc.Label
},
txtGuide: {
default: null,
type: cc.Label
},
guideNode: {
default: null,
type: cc.Node
},
topNodeSlot: {
default: null,
type: cc.Node
},
txtDropDown: {
default: null,
type: cc.Label
},
dropDownContent: {
default: null,
type: cc.Node
},
dropDownItem: {
default: null,
type: cc.Prefab
},
topContentSlot: {
default: null,
type: cc.Node
},
topItemSlot: {
default: null,
type: cc.Prefab
},
topNode: {
default: null,
type: cc.Node
},
topContent: {
default: null,
type: cc.Node
},
topItem: {
default: null,
type: cc.Prefab
},
listTabsInContent: {
default: null,
type: cc.ToggleContainer
},
listIcon: {
default: [],
type: cc.SpriteFrame
}
},
setContent: function(t) {
var e = this;
this.events = t;
for (var n = function(n) {
r = cc.instantiate(e.tab);
a = t[n].title;
r.children[2].getComponent(cc.Label).string = a.length > 13 ? a.substring(0, 13) + "..." : a;
r.on(cc.Node.EventType.TOUCH_END, function(t) {
e.showTab(n);
});
switch (t[n].zoneId) {
case o.ZONE_ID.SLOT_28:
r.children[3].getComponent(cc.Sprite).spriteFrame = e.listIcon[0];
break;

case o.ZONE_ID.SLOT_18:
r.children[3].getComponent(cc.Sprite).spriteFrame = e.listIcon[1];
break;

case o.ZONE_ID.SLOT_32:
r.children[3].getComponent(cc.Sprite).spriteFrame = e.listIcon[2];
break;

case o.ZONE_ID.MINI_SLOT_BANCA:
r.children[3].getComponent(cc.Sprite).spriteFrame = e.listIcon[3];
break;

case o.ZONE_ID.MINI_POKER:
r.children[3].getComponent(cc.Sprite).spriteFrame = e.listIcon[4];
break;

case o.ZONE_ID.CAO_THAP:
r.children[3].getComponent(cc.Sprite).spriteFrame = e.listIcon[5];
break;

case o.ZONE_ID.MINI_BACAY:
r.children[3].getComponent(cc.Sprite).spriteFrame = e.listIcon[6];
break;

case o.ZONE_ID.MINI_SLOT7:
r.children[3].getComponent(cc.Sprite).spriteFrame = e.listIcon[7];
break;

case o.ZONE_ID.MINI_BAUCUA:
r.children[3].getComponent(cc.Sprite).spriteFrame = e.listIcon[8];
break;

case o.ZONE_ID.TAI_XIU:
r.children[3].getComponent(cc.Sprite).spriteFrame = e.listIcon[9];
}
r.parent = e.listTabs.node;
}, i = 0; i < t.length; i++) {
var r, a;
n(i);
}
},
showTab: function(t) {
this.show();
this.txtTitle.string = this.events[t].title;
this.txtGuide.string = this.events[t].content;
this.listTabs.toggleItems[t].check();
this.listTabsInContent.toggleItems[0].check();
this.currTab = t;
},
changeTabInContent: function(t, e) {
if (0 == e) {
this.guideNode.active = !0;
this.topNodeSlot.active = !1;
this.topNode.active = !1;
} else {
this.getSystemMessageTop();
this.guideNode.active = !1;
}
},
getSystemMessageTop: function() {
var t = this;
window.$Global.networkService.getSystemMessages([ o.SYSTEM_MESSAGE_TYPE.EVENT, o.SYSTEM_MESSAGE_TYPE.EVENT_GROUP ]).then(function(e) {
e.messages[t.currTab].type === o.SYSTEM_MESSAGE_TYPE.EVENT ? t.onTop(e.messages[t.currTab].contentData) : e.messages[t.currTab].type === o.SYSTEM_MESSAGE_TYPE.EVENT_GROUP && t.onTopHu(e.messages[t.currTab].contentData);
});
},
onTopHu: function(t) {
var e = this;
if (!this.guideNode.active) {
this.topNodeSlot.active = !0;
this.topNode.active = !1;
this.dropDownContent.removeAllChildren();
var n = !1;
this.topData = JSON.parse(t).top;
this.topData.forEach(function(t) {
var i = t.zoneId, a = (0, r.getKeyByValue)(o.ZONE_ID, i);
if (a) {
var s = cc.instantiate(e.dropDownItem), c = o.ZONE_NAME[a];
s.getComponent(cc.Label).string = c;
s.on(cc.Node.EventType.TOUCH_END, function(t) {
e.dropDownItemClick(i, c);
});
s.parent = e.dropDownContent;
if (!n) {
e.txtDropDown.string = c;
e.fillTopSlot(i);
n = !0;
}
}
});
}
},
dropDownClick: function() {
this.dropDownContent.active = !this.dropDownContent.active;
},
dropDownItemClick: function(t, e) {
this.txtDropDown.string = e;
this.dropDownClick();
this.fillTopSlot(t);
},
fillTopSlot: function(t) {
this.topContentSlot.removeAllChildren();
for (var e = 0; e < this.topData.length; e++) if (t === this.topData[e].zoneId) {
for (var n = 0; n < this.topData[e].top.length; n++) {
var i = this.topData[e].top[n], o = cc.instantiate(this.topItemSlot), a = o.getComponentsInChildren(cc.Label);
a[0].string = n + 1;
a[1].string = i.displayName.length > 15 ? i.displayName.substring(0, 15) + "..." : i.displayName;
a[2].string = (0, r.numberWithDot)(i.bet);
a[3].string = (0, r.numberWithDot)(i.win);
a[4].string = i.dateTime;
o.children[0].active = n % 2 == 0;
o.parent = this.topContentSlot;
}
break;
}
},
onTop: function(t) {
if (!this.guideNode.active) {
this.topContent.removeAllChildren();
this.topNodeSlot.active = !1;
this.topNode.active = !0;
try {
for (var e = JSON.parse(t), n = 0; n < e.length; n++) {
var i = cc.instantiate(this.topItem), o = i.getComponentsInChildren(cc.Label);
o[0].string = n + 1;
o[1].string = e[n].fullname.length > 25 ? e[n].fullname.substring(0, 25) + "..." : e[n].fullname;
o[2].string = (0, r.numberWithDot)(e[n].total_gold);
i.children[0].active = n % 2 == 0;
i.parent = this.topContent;
}
} catch (t) {
cc.error(t);
}
}
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper",
"../Common/BaseDialog": "BaseDialog"
} ],
Dialog_GiftCode: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9e6b0JSQuFC1LBL+5HI3pUT", "Dialog_GiftCode");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog")), o = t("../../Utils/Constants");
cc.Class({
extends: i.default,
properties: {
textGiftCode: {
default: null,
type: cc.EditBox
}
},
onClickCancel: function() {
this.hide();
},
onClickNhanGiftCode: function() {
var t = this, e = this.textGiftCode.string;
e ? window.$Global.userService.sendGiftCode(e).then(function(e) {
var n = "";
e == o.GiftCodeResultCode.SUCCESS ? t.hide() : n = e == o.GiftCodeResultCode.GIFT_CODE_NOT_EXITS ? "Xin lỗi hệ thống không nhận diện được giftcode" : e == o.GiftCodeResultCode.GIFT_CODE_USED ? "Giftcode đã được sử dụng" : "Đã có lỗi xảy ra. Mã lỗi (" + e.ToString() + ")";
window.$UIHelper.showToast(n);
}) : window.$UIHelper.showToast("Vui lòng nhập Giftcode!");
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../Common/BaseDialog": "BaseDialog"
} ],
Dialog_GoldHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c1a5cD1GYJB8o9Rl8YbGT3I", "Dialog_GoldHistory");
var i = a(t("../Common/BaseDialog")), o = a(t("./Dialog_HistoryDetail")), r = t("../../Utils/Constants");
function a(t) {
return t && t.__esModule ? t : {
default: t
};
}
var s = 0;
cc.Class({
extends: i.default,
properties: {
listHistory: {
default: null,
type: cc.Node
},
historyItem: {
default: null,
type: cc.Prefab
},
textPage: {
default: null,
type: cc.Label
},
dialogHistoryDetail: {
default: null,
type: o.default
}
},
onLoad: function() {
this.page = 0;
this.isLastPage = !1;
this.historyPerPage = 10;
this.trans_type = s;
},
refreshData: function() {
this.getHistory();
},
onClickNextPage: function() {
if (!this.isLastPage) {
this.page += 1;
this.getHistory();
}
},
onClickPreviousPage: function() {
if (0 !== this.page) {
this.page -= 1;
this.getHistory();
}
},
getHistory: function() {
var t = this;
window.$Global.userService.getUserGoldHistory(this.trans_type || s, this.page || 0).then(function(e) {
if (e.resultCode === r.ResponseResultCode.SUCCESS) {
t.isLastPage = e.data.length < t.historyPerPage;
t.setHistoryData(e.data);
t.textPage.string = t.page + 1;
} else window.$UIHelper.showToast(e.desc || "");
});
},
setHistoryData: function(t) {
var e = this;
this.listHistory.removeAllChildren();
t.forEach(function(t) {
var n = cc.instantiate(e.historyItem);
n.getComponent("GoldHistoryItem").setData(t);
n.on(cc.Node.EventType.TOUCH_END, function(n) {
e.dialogHistoryDetail.setData(t.reason);
});
n.parent = e.listHistory;
});
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../Common/BaseDialog": "BaseDialog",
"./Dialog_HistoryDetail": "Dialog_HistoryDetail"
} ],
Dialog_HistoryDetail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1aba2I1JCJBW5kJP4O+rNl1", "Dialog_HistoryDetail");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog"));
cc.Class({
extends: i.default,
properties: {
textContent: {
default: null,
type: cc.Label
}
},
setData: function(t) {
this.textContent.string = t;
this.show();
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog"
} ],
Dialog_Mail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "87264IIQ1pLMpOHlwtOB3Rp", "Dialog_Mail");
var i = a(t("../Common/BaseDialog")), o = a(t("./ListMail")), r = a(t("../Common/BasePanelNotification"));
function a(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: i.default,
properties: {
listMail: {
default: null,
type: o.default
},
panelNotification: {
default: null,
type: r.default
}
},
onLoad: function() {},
start: function() {
this.node.on("readMail", function(t) {
window.$Global.userService.readMessage(t.msgId).then(function(t) {
console.log(t);
});
});
},
refreshData: function() {
var t = this;
window.$Global.userService.getUserMessages(0).then(function(e) {
t.listMail.setData(e);
});
},
onClickClearAll: function() {
window.$Global.userService.deleteMessages();
this.listMail.clear();
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog",
"../Common/BasePanelNotification": "BasePanelNotification",
"./ListMail": "ListMail"
} ],
Dialog_PlayerList: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d59d3/Wh41MXoenKbBIUeLh", "Dialog_PlayerList");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog"));
cc.Class({
extends: i.default,
properties: {
textPlayerIdSearch: {
default: null,
type: cc.EditBox
},
textPage: {
default: null,
type: cc.Label
},
listUser: {
default: null,
type: cc.Node
},
userItem: {
default: null,
type: cc.Prefab
}
},
onLoad: function() {
this.page = 0;
},
refreshData: function() {
var t = this;
window.$Global.userService.getUserList(this.page || 0, 0).then(function(e) {
t.setData(e);
});
},
onTextIDChanged: function() {
var t = this, e = this.textPlayerIdSearch.string.trim();
"" == e ? this.refreshData() : window.$Global.userService.getUserList(0, parseInt(e)).then(function(e) {
t.setData(e);
});
},
onClickNextPage: function() {
if (this.page < 10) {
this.page = this.page + 1;
this.textPage.string = this.page;
this.refreshData();
}
},
onClickPreviousPage: function() {
if (this.page > 1) {
this.page = this.page - 1;
this.textPage.string = this.page;
this.refreshData();
}
},
setData: function(t) {
var e = this;
this.listUser.removeAllChildren();
var n = 0;
t.forEach(function(t) {
var i = cc.instantiate(e.userItem);
n++;
i.getComponent("RefUserItem").setData(n, t);
i.parent = e.listUser;
});
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog"
} ],
Dialog_ProfileUpdate: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f001cZBxqZPRZNAVSRRRfzu", "Dialog_ProfileUpdate");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog")), o = t("../../Utils/Constants");
cc.Class({
extends: i.default,
properties: {
textName: {
default: null,
type: cc.EditBox
},
textPhone: {
default: null,
type: cc.EditBox
},
textCMND: {
default: null,
type: cc.EditBox
},
checkGender: {
default: null,
type: cc.ToggleContainer
}
},
refreshData: function() {
var t = window.$Global.userService.userInfo;
if (t) {
this.textName.string = t.displayName || "";
this.textPhone.string = t.mobile || "";
this.textCMND.string = t.passport || "";
if (this.checkGender.toggleItems) if (1 == t.gender) {
this.checkGender.toggleItems[0].isChecked = !0;
this.checkGender.toggleItems[1].isChecked = !1;
} else {
this.checkGender.toggleItems[0].isChecked = !1;
this.checkGender.toggleItems[1].isChecked = !0;
}
}
},
onClickCancel: function() {
this.hide();
},
onClickSubmit: function() {
var t = this, e = this.textName.string, n = this.textPhone.string, i = this.textCMND.string, r = this.checkGender.toggleItems[0].isChecked ? 1 : 2, a = !0;
if (e && n) ; else {
a = !1;
window.$UIHelper.showToast("Vui lòng nhập đầy đủ!");
}
a && window.$Global.userService.updateInfo({
name: e,
mobile: n,
passport: i,
gender: r
}).then(function(e) {
window.$UIHelper.showToast(e.desc || "");
e.resultCode === o.ResponseResultCode.SUCCESS && t.hide();
});
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../Common/BaseDialog": "BaseDialog"
} ],
Dialog_Profile: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ca03cUu6c9B9aNBuSXV+Nfb", "Dialog_Profile");
var i = f(t("../Common/BaseDialog")), o = f(t("./PanelProfileInfo")), r = f(t("./PanelProfileSecurity")), a = f(t("./Dialog_ProfileUpdate")), s = f(t("./Dialog_ChangePassword")), c = f(t("./Dialog_TopUp")), l = f(t("./Dialog_GoldHistory")), u = t("../../Utils/Constants");
function f(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: i.default,
properties: {
panelProfileInfo: {
default: null,
type: o.default
},
panelProfileSecurity: {
default: null,
type: r.default
},
dialogChangePassword: {
default: null,
type: s.default
},
dialogProfileUpdate: {
default: null,
type: a.default
},
dialogTransfer: {
default: null,
type: c.default
},
dialogGoldHistory: {
default: null,
type: l.default
}
},
onLoad: function() {
this.panelProfileInfo.dialog = this;
this.panelProfileSecurity.dialog = this;
},
refreshData: function() {
var t = this;
window.$Global.userService.getUserInfo().then(function(e) {
if (e.resultCode == u.ResponseResultCode.SUCCESS) {
var n = e.user;
window.$Global.userService.userInfo = n;
t.panelProfileInfo.setData(n);
t.panelProfileSecurity.setData(n.loginG2fa);
}
});
},
onClickChuyenBO: function() {
this.dialogTransfer.show();
},
onClickLichSuBO: function() {
this.dialogGoldHistory.show();
},
onClickProfileUpdate: function() {
this.dialogProfileUpdate.show();
},
onClickChangePassword: function() {
this.dialogChangePassword.show();
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../Common/BaseDialog": "BaseDialog",
"./Dialog_ChangePassword": "Dialog_ChangePassword",
"./Dialog_GoldHistory": "Dialog_GoldHistory",
"./Dialog_ProfileUpdate": "Dialog_ProfileUpdate",
"./Dialog_TopUp": "Dialog_TopUp",
"./PanelProfileInfo": "PanelProfileInfo",
"./PanelProfileSecurity": "PanelProfileSecurity"
} ],
Dialog_SelectLine: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6ed64A78dJJBIi7KZNpBxU5", "Dialog_SelectLine");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog"));
cc.Class({
extends: i.default,
properties: {
linesNode: {
default: null,
type: cc.Node
},
selectedLines: {
default: []
},
lines: {
default: []
}
},
onLoad: function() {
this.lines = this.linesNode.children;
},
start: function() {
this.allClick();
},
onToggleLineChecked: function(t, e) {
var n = this.selectedLines.indexOf(parseInt(e));
if (t.isChecked && n < 0) {
this.selectedLines.push(e);
this.node.emit("updateLines", this.selectedLines);
} else if (!t.isChecked && n >= 0) {
this.selectedLines.splice(e, 1);
this.node.emit("updateLines", this.selectedLines);
}
},
oddClick: function() {
this.selectedLines = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ];
for (var t = 0; t < this.lines.length; t++) this.lines[t].getComponent(cc.Toggle).isChecked = t % 2 == 0;
this.node.emit("updateLines", this.selectedLines);
},
evenClick: function() {
this.selectedLines = [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
for (var t = 0; t < this.lines.length; t++) this.lines[t].getComponent(cc.Toggle).isChecked = t % 2 != 0;
this.node.emit("updateLines", this.selectedLines);
},
allClick: function() {
this.selectedLines = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
for (var t = 0; t < this.lines.length; t++) this.lines[t].getComponent(cc.Toggle).isChecked = !0;
this.node.emit("updateLines", this.selectedLines);
},
noneClick: function() {
this.selectedLines = [];
for (var t = 0; t < this.lines.length; t++) this.lines[t].getComponent(cc.Toggle).isChecked = !1;
this.node.emit("updateLines", this.selectedLines);
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog"
} ],
Dialog_Setting: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "dd3a4LukihOyZ0lsHUbzckL", "Dialog_Setting");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog"));
cc.Class({
extends: i.default,
properties: {
radioSound: {
default: null,
type: cc.Toggle
}
}
});
cc._RF.pop();
}, {
"../Common/BaseDialog": "BaseDialog"
} ],
Dialog_SlotJackpotHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "20aa9S1sHtLwYgQErBED5iY", "Dialog_SlotJackpotHistory");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog")), o = t("../../Utils/Helper");
cc.Class({
extends: i.default,
properties: {
content: {
default: null,
type: cc.Node
},
historyItem: {
default: null,
type: cc.Prefab
}
},
setData: function(t) {
this.content.removeAllChildren();
for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.historyItem), i = t[e].displayName;
n.children[1].getComponent(cc.Label).string = i.length > 15 ? i.substring(0, 13) + "..." : i;
n.children[2].getComponent(cc.Label).string = t[e].time;
n.children[3].getComponent(cc.Label).string = (0, o.moneyFormat)(t[e].bet);
n.children[4].getComponent(cc.Label).string = (0, o.moneyFormat)(t[e].win);
n.children[5].getComponent(cc.Label).string = t[e].desc;
e % 2 != 0 && (n.children[0].active = !1);
n.parent = this.content;
}
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper",
"../Common/BaseDialog": "BaseDialog"
} ],
Dialog_SlotUserHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2c863uV9PhPobUHPpYgg+RD", "Dialog_SlotUserHistory");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog")), o = t("../../Utils/Helper");
cc.Class({
extends: i.default,
properties: {
content: {
default: null,
type: cc.Node
},
historyItem: {
default: null,
type: cc.Prefab
}
},
setData: function(t) {
this.content.removeAllChildren();
for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.historyItem);
n.children[1].getComponent(cc.Label).string = t[e].id;
n.children[2].getComponent(cc.Label).string = t[e].time;
n.children[3].getComponent(cc.Label).string = (0, o.moneyFormat)(t[e].sub);
n.children[4].getComponent(cc.Label).string = (0, o.moneyFormat)(t[e].add);
e % 2 != 0 && (n.children[0].active = !1);
n.parent = this.content;
}
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper",
"../Common/BaseDialog": "BaseDialog"
} ],
Dialog_TopUp: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "62d95zHDzBKbbs766b72lFC", "Dialog_TopUp");
var i = u(t("../Common/BaseDialog")), o = u(t("./PanelAgency")), r = u(t("./PanelTransfer")), a = u(t("./PanelCard")), s = u(t("./PanelExchange")), c = t("../../Utils/Constants"), l = u(t("../Common/BaseTabContainer"));
function u(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: i.default,
properties: {
transferTab: {
default: null,
type: r.default
},
agencyTab: {
default: null,
type: o.default
},
cardTab: {
default: null,
type: a.default
},
btnTabCard: {
default: null,
type: cc.Node
},
tabContainer: {
default: null,
type: l.default
},
exchangeTab: {
default: null,
type: s.default
}
},
refreshData: function() {
var t = this;
this.transferTab.refreshData();
this.agencyTab.refreshData();
window.$Global.userService.getConfigTransferGold().then(function(e) {
if (e.resultCode === c.ResponseResultCode.SUCCESS) {
t.btnTabCard.active = e.data.enable_napthe || !1;
t.transferTab.setData(e);
t.cardTab.setData(e.data.list_card_provider);
t.exchangeTab.setData(e.data.list_card_provider);
} else window.UIHelper.showToast(e.desc || "");
});
},
showTab: function(t) {
this.show();
this.tabContainer.tabHandle(t);
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../Common/BaseDialog": "BaseDialog",
"../Common/BaseTabContainer": "BaseTabContainer",
"./PanelAgency": "PanelAgency",
"./PanelCard": "PanelCard",
"./PanelExchange": "PanelExchange",
"./PanelTransfer": "PanelTransfer"
} ],
Dialog_VIP: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "64456pEO5lNV6jBNZ1vzQnI", "Dialog_VIP");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseDialog")), o = t("../../Utils/Constants"), r = t("../../Utils/Helper");
cc.Class({
extends: i.default,
properties: {
txtUserPoint: {
default: null,
type: cc.Label
},
txtRatio: {
default: null,
type: cc.Label
},
imgVip: {
default: null,
type: cc.Sprite
},
txtVipName: {
default: null,
type: cc.Label
},
listVippoint: {
default: null,
type: cc.Node
},
listSpriteVip: {
default: [],
type: cc.SpriteFrame
},
vipItem: {
default: null,
type: cc.Prefab
},
timeVippoint: {
default: null,
type: cc.Label
},
receiveDate: {
default: null,
type: cc.Node
}
},
refreshData: function() {
var t = this;
window.$Global.userService.getVippoint().then(function(e) {
var n = e.resultCode;
if (n === o.ResponseResultCode.SUCCESS) {
var i = e.userpoint;
t.txtUserPoint.string = (0, r.numberWithDot)(i);
t.txtRatio.string = "1 vippoint - " + (0, r.numberWithDot)(e.rate) + " " + o.CONFIG_GOLD.goldName;
if (window.$Global.userService.userInfo.providerCode.includes("agency")) {
t.receiveDate.getComponentInChildren(cc.Label).string = e.receive_date;
t.receiveDate.active = !0;
}
for (var a = 0; a < e.vip_points.length; a++) {
var s = e.vip_points[a];
if (i >= s.point) {
var c = s.rank;
t.imgVip.spriteFrame = t.listSpriteVip[c - 1];
t.txtVipName.string = "VIP " + c;
break;
}
}
t.listVippoint.removeAllChildren();
e.vip_points.forEach(function(e) {
var n = cc.instantiate(t.vipItem);
n.getComponent("VippointItem").setData(e);
n.parent = t.listVippoint;
});
} else window.$UIHelper.showToast("Có lỗi xảy ra (" + n + ")");
});
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper",
"../Common/BaseDialog": "BaseDialog"
} ],
Dialog_XacThuc: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7f5422pAUJO05Nd8jNsTIEG", "Dialog_XacThuc");
var i = a(t("../Common/BaseDialog")), o = a(t("../Common/BasePanelNotification")), r = t("../../Utils/Constants");
function a(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: i.default,
properties: {
textCode: {
default: null,
type: cc.EditBox
},
imageQr: {
default: null,
type: cc.Sprite
},
textOTP: {
default: null,
type: cc.EditBox
},
panelNotification: {
default: null,
type: o.default
}
},
start: function() {},
setData: function(t) {
console.log(t.g2faQrUrl);
this.textCode.string = t.g2faSeret;
this.imageQr.spriteFrame.name = "qrcode";
this.imageQr.node.width = 200;
this.imageQr.node.height = 200;
},
onClickDownloadAndroid: function() {
cc.sys.openURL(r.URLS.DOWNLOAD_ANDROID_2FA);
},
onClickDownloadIOS: function() {
cc.sys.openURL(r.URLS.DOWNLOAD_IOS_2FA);
},
onClickNhan: function() {
var t = this;
this.textOTP.string ? window.$Global.userService.activateUserAccount(this.textOTP.string).then(function(e) {
0 == e ? t.hide() : t.panelNotification.setText("OTP không hợp lệ vui lòng nhập lại");
}) : this.panelNotification.setText("Vui lòng nhập code");
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../Common/BaseDialog": "BaseDialog",
"../Common/BasePanelNotification": "BasePanelNotification"
} ],
DragAndDrop: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "cab3bqTSABHJJ5YrveAiaJ5", "DragAndDrop");
cc.Class({
extends: cc.Component,
properties: {
dragNode: {
default: null,
type: cc.Node
}
},
start: function() {
var t = this, e = this.dragNode;
this.isMoving = !1;
this.checkMovingTimeOut = !1;
this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
var n = t.getTouches()[0].getLocation();
e.oldTouchLoc = n;
e.touchLocOffset = e.convertToNodeSpaceAR(n);
});
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(n) {
var i = n.getTouches()[0].getLocation(), o = e.parent.convertToNodeSpaceAR(i);
e.x = o.x - e.touchLocOffset.x;
e.y = o.y - e.touchLocOffset.y;
if (!t.checkMovingTimeOut) {
t.isMoving = !1;
t.checkMovingTimeOut = !0;
setTimeout(function() {
t.isMoving = !0;
}, 100);
}
});
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
setTimeout(function() {
t.isMoving = !1;
}, 500);
t.checkMovingTimeOut = !1;
});
}
});
cc._RF.pop();
}, {} ],
5: [ function(t, e, n) {
(function(t) {
"undefined" != typeof e && (e.exports = t);
var n = "listeners", i = {
on: function(t, e) {
a(this, t).push(e);
return this;
},
once: function(t, e) {
var n = this;
i.originalListener = e;
a(n, t).push(i);
return n;
function i() {
r.call(n, t, i);
e.apply(this, arguments);
}
},
off: r,
emit: function(t, e) {
var n = this, i = a(n, t, !0);
if (!i) return !1;
var o = arguments.length;
if (1 === o) i.forEach(function(t) {
t.call(n);
}); else if (2 === o) i.forEach(function(t) {
t.call(n, e);
}); else {
var r = Array.prototype.slice.call(arguments, 1);
i.forEach(function(t) {
t.apply(n, r);
});
}
return !!i.length;
}
};
o(t.prototype);
t.mixin = o;
function o(t) {
for (var e in i) t[e] = i[e];
return t;
}
function r(t, e) {
var i;
if (arguments.length) {
if (e) {
if (i = a(this, t, !0)) {
if (!(i = i.filter(function(t) {
return t !== e && t.originalListener !== e;
})).length) return r.call(this, t);
this[n][t] = i;
}
} else if (i = this[n]) {
delete i[t];
if (!Object.keys(i).length) return r.call(this);
}
} else delete this[n];
return this;
}
function a(t, e, i) {
if (!i || t[n]) {
var o = t[n] || (t[n] = {});
return o[e] || (o[e] = []);
}
}
})(function t() {
if (!(this instanceof t)) return new t();
});
}, {} ],
6: [ function(t, e, n) {
arguments[4][4][0].apply(n, arguments);
}, {
dup: 4
} ],
7: [ function(t, e, n) {
(function(t) {
!function(e) {
var n, i = "undefined", o = i !== typeof t && t, r = i !== typeof Uint8Array && Uint8Array, a = i !== typeof ArrayBuffer && ArrayBuffer, s = [ 0, 0, 0, 0, 0, 0, 0, 0 ], c = Array.isArray || function(t) {
return !!t && "[object Array]" == Object.prototype.toString.call(t);
}, l = 4294967296, u = 16777216;
f("Uint64BE", !0, !0);
f("Int64BE", !0, !1);
f("Uint64LE", !1, !0);
f("Int64LE", !1, !1);
function f(t, c, f) {
var S = c ? 0 : 4, C = c ? 4 : 0, T = c ? 0 : 3, E = c ? 1 : 2, I = c ? 2 : 1, k = c ? 3 : 0, N = c ? v : b, R = c ? _ : w, O = A.prototype, P = "is" + t, L = "_" + P;
O.buffer = void 0;
O.offset = 0;
O[L] = !0;
O.toNumber = B;
O.toString = function(t) {
var e = this.buffer, n = this.offset, i = M(e, n + S), o = M(e, n + C), r = "", a = !f && 2147483648 & i;
if (a) {
i = ~i;
o = l - o;
}
t = t || 10;
for (;;) {
var s = i % t * l + o;
i = Math.floor(i / t);
o = Math.floor(s / t);
r = (s % t).toString(t) + r;
if (!i && !o) break;
}
a && (r = "-" + r);
return r;
};
O.toJSON = B;
O.toArray = h;
o && (O.toBuffer = d);
r && (O.toArrayBuffer = p);
A[P] = function(t) {
return !(!t || !t[L]);
};
e[t] = A;
return A;
function A(t, e, n, i) {
return this instanceof A ? U(this, t, e, n, i) : new A(t, e, n, i);
}
function U(t, e, o, c, l) {
if (r && a) {
e instanceof a && (e = new r(e));
c instanceof a && (c = new r(c));
}
if (e || o || c || n) {
if (!g(e, o)) {
var u = n || Array;
l = o;
c = e;
o = 0;
e = new u(8);
}
t.buffer = e;
t.offset = o |= 0;
if (i !== typeof c) if ("string" == typeof c) D(e, o, c, l || 10); else if (g(c, l)) y(e, o, c, l); else if ("number" == typeof l) {
x(e, o + S, c);
x(e, o + C, l);
} else c > 0 ? N(e, o, c) : c < 0 ? R(e, o, c) : y(e, o, s, 0);
} else t.buffer = m(s, 0);
}
function D(t, e, n, i) {
var o = 0, r = n.length, a = 0, s = 0;
"-" === n[0] && o++;
for (var c = o; o < r; ) {
var u = parseInt(n[o++], i);
if (!(u >= 0)) break;
s = s * i + u;
a = a * i + Math.floor(s / l);
s %= l;
}
if (c) {
a = ~a;
s ? s = l - s : a++;
}
x(t, e + S, a);
x(t, e + C, s);
}
function B() {
var t = this.buffer, e = this.offset, n = M(t, e + S), i = M(t, e + C);
f || (n |= 0);
return n ? n * l + i : i;
}
function x(t, e, n) {
t[e + k] = 255 & n;
n >>= 8;
t[e + I] = 255 & n;
n >>= 8;
t[e + E] = 255 & n;
n >>= 8;
t[e + T] = 255 & n;
}
function M(t, e) {
return t[e + T] * u + (t[e + E] << 16) + (t[e + I] << 8) + t[e + k];
}
}
function h(t) {
var e = this.buffer, i = this.offset;
n = null;
return !1 !== t && 0 === i && 8 === e.length && c(e) ? e : m(e, i);
}
function d(e) {
var i = this.buffer, r = this.offset;
n = o;
if (!1 !== e && 0 === r && 8 === i.length && t.isBuffer(i)) return i;
var a = new o(8);
y(a, 0, i, r);
return a;
}
function p(t) {
var e = this.buffer, i = this.offset, o = e.buffer;
n = r;
if (!1 !== t && 0 === i && o instanceof a && 8 === o.byteLength) return o;
var s = new r(8);
y(s, 0, e, i);
return s.buffer;
}
function g(t, e) {
var n = t && t.length;
e |= 0;
return n && e + 8 <= n && "string" != typeof t[e];
}
function y(t, e, n, i) {
e |= 0;
i |= 0;
for (var o = 0; o < 8; o++) t[e++] = 255 & n[i++];
}
function m(t, e) {
return Array.prototype.slice.call(t, e, e + 8);
}
function v(t, e, n) {
for (var i = e + 8; i > e; ) {
t[--i] = 255 & n;
n /= 256;
}
}
function _(t, e, n) {
var i = e + 8;
n++;
for (;i > e; ) {
t[--i] = 255 & -n ^ 255;
n /= 256;
}
}
function b(t, e, n) {
for (var i = e + 8; e < i; ) {
t[e++] = 255 & n;
n /= 256;
}
}
function w(t, e, n) {
var i = e + 8;
n++;
for (;e < i; ) {
t[e++] = 255 & -n ^ 255;
n /= 256;
}
}
}("object" == typeof n && "string" != typeof n.nodeName ? n : this || {});
}).call(this, t("buffer").Buffer);
}, {
buffer: 2
} ],
8: [ function(t, e, n) {
arguments[4][3][0].apply(n, arguments);
}, {
dup: 3
} ],
9: [ function(t, e, n) {
(function(t) {
(function() {
var i, o = 200, r = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", a = "Expected a function", s = "__lodash_hash_undefined__", c = 500, l = "__lodash_placeholder__", u = 1, f = 2, h = 4, d = 1, p = 2, g = 1, y = 2, m = 4, v = 8, _ = 16, b = 32, w = 64, S = 128, C = 256, T = 512, E = 30, I = "...", k = 800, N = 16, R = 1, O = 2, P = 1 / 0, L = 9007199254740991, A = 1.7976931348623157e308, U = NaN, D = 4294967295, B = D - 1, x = D >>> 1, M = [ [ "ary", S ], [ "bind", g ], [ "bindKey", y ], [ "curry", v ], [ "curryRight", _ ], [ "flip", T ], [ "partial", b ], [ "partialRight", w ], [ "rearg", C ] ], G = "[object Arguments]", F = "[object Array]", H = "[object AsyncFunction]", Y = "[object Boolean]", j = "[object Date]", $ = "[object DOMException]", V = "[object Error]", z = "[object Function]", W = "[object GeneratorFunction]", X = "[object Map]", J = "[object Number]", Q = "[object Null]", K = "[object Object]", Z = "[object Proxy]", q = "[object RegExp]", tt = "[object Set]", et = "[object String]", nt = "[object Symbol]", it = "[object Undefined]", ot = "[object WeakMap]", rt = "[object WeakSet]", at = "[object ArrayBuffer]", st = "[object DataView]", ct = "[object Float32Array]", lt = "[object Float64Array]", ut = "[object Int8Array]", ft = "[object Int16Array]", ht = "[object Int32Array]", dt = "[object Uint8Array]", pt = "[object Uint8ClampedArray]", gt = "[object Uint16Array]", yt = "[object Uint32Array]", mt = /\b__p \+= '';/g, vt = /\b(__p \+=) '' \+/g, _t = /(__e\(.*?\)|\b__t\)) \+\n'';/g, bt = /&(?:amp|lt|gt|quot|#39);/g, wt = /[&<>"']/g, St = RegExp(bt.source), Ct = RegExp(wt.source), Tt = /<%-([\s\S]+?)%>/g, Et = /<%([\s\S]+?)%>/g, It = /<%=([\s\S]+?)%>/g, kt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Nt = /^\w*$/, Rt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ot = /[\\^$.*+?()[\]{}|]/g, Pt = RegExp(Ot.source), Lt = /^\s+|\s+$/g, At = /^\s+/, Ut = /\s+$/, Dt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Bt = /\{\n\/\* \[wrapped with (.+)\] \*/, xt = /,? & /, Mt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Gt = /\\(\\)?/g, Ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ht = /\w*$/, Yt = /^[-+]0x[0-9a-f]+$/i, jt = /^0b[01]+$/i, $t = /^\[object .+?Constructor\]$/, Vt = /^0o[0-7]+$/i, zt = /^(?:0|[1-9]\d*)$/, Wt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Xt = /($^)/, Jt = /['\n\r\u2028\u2029\\]/g, Qt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Kt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Zt = "[\\ud800-\\udfff]", qt = "[" + Kt + "]", te = "[" + Qt + "]", ee = "\\d+", ne = "[\\u2700-\\u27bf]", ie = "[a-z\\xdf-\\xf6\\xf8-\\xff]", oe = "[^\\ud800-\\udfff" + Kt + ee + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]", re = "\\ud83c[\\udffb-\\udfff]", ae = "[^\\ud800-\\udfff]", se = "(?:\\ud83c[\\udde6-\\uddff]){2}", ce = "[\\ud800-\\udbff][\\udc00-\\udfff]", le = "[A-Z\\xc0-\\xd6\\xd8-\\xde]", ue = "(?:" + ie + "|" + oe + ")", fe = "(?:" + le + "|" + oe + ")", he = "(?:" + te + "|" + re + ")" + "?", de = "[\\ufe0e\\ufe0f]?" + he + ("(?:\\u200d(?:" + [ ae, se, ce ].join("|") + ")[\\ufe0e\\ufe0f]?" + he + ")*"), pe = "(?:" + [ ne, se, ce ].join("|") + ")" + de, ge = "(?:" + [ ae + te + "?", te, se, ce, Zt ].join("|") + ")", ye = RegExp("['’]", "g"), me = RegExp(te, "g"), ve = RegExp(re + "(?=" + re + ")|" + ge + de, "g"), _e = RegExp([ le + "?" + ie + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [ qt, le, "$" ].join("|") + ")", fe + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [ qt, le + ue, "$" ].join("|") + ")", le + "?" + ue + "+(?:['’](?:d|ll|m|re|s|t|ve))?", le + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ee, pe ].join("|"), "g"), be = RegExp("[\\u200d\\ud800-\\udfff" + Qt + "\\ufe0e\\ufe0f]"), we = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Se = [ "Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout" ], Ce = -1, Te = {};
Te[ct] = Te[lt] = Te[ut] = Te[ft] = Te[ht] = Te[dt] = Te[pt] = Te[gt] = Te[yt] = !0;
Te[G] = Te[F] = Te[at] = Te[Y] = Te[st] = Te[j] = Te[V] = Te[z] = Te[X] = Te[J] = Te[K] = Te[q] = Te[tt] = Te[et] = Te[ot] = !1;
var Ee = {};
Ee[G] = Ee[F] = Ee[at] = Ee[st] = Ee[Y] = Ee[j] = Ee[ct] = Ee[lt] = Ee[ut] = Ee[ft] = Ee[ht] = Ee[X] = Ee[J] = Ee[K] = Ee[q] = Ee[tt] = Ee[et] = Ee[nt] = Ee[dt] = Ee[pt] = Ee[gt] = Ee[yt] = !0;
Ee[V] = Ee[z] = Ee[ot] = !1;
var Ie = {
"\\": "\\",
"'": "'",
"\n": "n",
"\r": "r",
"\u2028": "u2028",
"\u2029": "u2029"
}, ke = parseFloat, Ne = parseInt, Re = "object" == typeof t && t && t.Object === Object && t, Oe = "object" == typeof self && self && self.Object === Object && self, Pe = Re || Oe || Function("return this")(), Le = "object" == typeof n && n && !n.nodeType && n, Ae = Le && "object" == typeof e && e && !e.nodeType && e, Ue = Ae && Ae.exports === Le, De = Ue && Re.process, Be = function() {
try {
var t = Ae && Ae.require && Ae.require("util").types;
return t || De && De.binding && De.binding("util");
} catch (t) {}
}(), xe = Be && Be.isArrayBuffer, Me = Be && Be.isDate, Ge = Be && Be.isMap, Fe = Be && Be.isRegExp, He = Be && Be.isSet, Ye = Be && Be.isTypedArray;
function je(t, e, n) {
switch (n.length) {
case 0:
return t.call(e);

case 1:
return t.call(e, n[0]);

case 2:
return t.call(e, n[0], n[1]);

case 3:
return t.call(e, n[0], n[1], n[2]);
}
return t.apply(e, n);
}
function $e(t, e, n, i) {
for (var o = -1, r = null == t ? 0 : t.length; ++o < r; ) {
var a = t[o];
e(i, a, n(a), t);
}
return i;
}
function Ve(t, e) {
for (var n = -1, i = null == t ? 0 : t.length; ++n < i && !1 !== e(t[n], n, t); ) ;
return t;
}
function ze(t, e) {
for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t); ) ;
return t;
}
function We(t, e) {
for (var n = -1, i = null == t ? 0 : t.length; ++n < i; ) if (!e(t[n], n, t)) return !1;
return !0;
}
function Xe(t, e) {
for (var n = -1, i = null == t ? 0 : t.length, o = 0, r = []; ++n < i; ) {
var a = t[n];
e(a, n, t) && (r[o++] = a);
}
return r;
}
function Je(t, e) {
return !!(null == t ? 0 : t.length) && cn(t, e, 0) > -1;
}
function Qe(t, e, n) {
for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) if (n(e, t[i])) return !0;
return !1;
}
function Ke(t, e) {
for (var n = -1, i = null == t ? 0 : t.length, o = Array(i); ++n < i; ) o[n] = e(t[n], n, t);
return o;
}
function Ze(t, e) {
for (var n = -1, i = e.length, o = t.length; ++n < i; ) t[o + n] = e[n];
return t;
}
function qe(t, e, n, i) {
var o = -1, r = null == t ? 0 : t.length;
i && r && (n = t[++o]);
for (;++o < r; ) n = e(n, t[o], o, t);
return n;
}
function tn(t, e, n, i) {
var o = null == t ? 0 : t.length;
i && o && (n = t[--o]);
for (;o--; ) n = e(n, t[o], o, t);
return n;
}
function en(t, e) {
for (var n = -1, i = null == t ? 0 : t.length; ++n < i; ) if (e(t[n], n, t)) return !0;
return !1;
}
var nn = hn("length");
function on(t) {
return t.split("");
}
function rn(t) {
return t.match(Mt) || [];
}
function an(t, e, n) {
var i;
n(t, function(t, n, o) {
if (e(t, n, o)) {
i = n;
return !1;
}
});
return i;
}
function sn(t, e, n, i) {
for (var o = t.length, r = n + (i ? 1 : -1); i ? r-- : ++r < o; ) if (e(t[r], r, t)) return r;
return -1;
}
function cn(t, e, n) {
return e == e ? Mn(t, e, n) : sn(t, un, n);
}
function ln(t, e, n, i) {
for (var o = n - 1, r = t.length; ++o < r; ) if (i(t[o], e)) return o;
return -1;
}
function un(t) {
return t != t;
}
function fn(t, e) {
var n = null == t ? 0 : t.length;
return n ? yn(t, e) / n : U;
}
function hn(t) {
return function(e) {
return null == e ? i : e[t];
};
}
function dn(t) {
return function(e) {
return null == t ? i : t[e];
};
}
function pn(t, e, n, i, o) {
o(t, function(t, o, r) {
n = i ? (i = !1, t) : e(n, t, o, r);
});
return n;
}
function gn(t, e) {
var n = t.length;
t.sort(e);
for (;n--; ) t[n] = t[n].value;
return t;
}
function yn(t, e) {
for (var n, o = -1, r = t.length; ++o < r; ) {
var a = e(t[o]);
a !== i && (n = n === i ? a : n + a);
}
return n;
}
function mn(t, e) {
for (var n = -1, i = Array(t); ++n < t; ) i[n] = e(n);
return i;
}
function vn(t, e) {
return Ke(e, function(e) {
return [ e, t[e] ];
});
}
function _n(t) {
return function(e) {
return t(e);
};
}
function bn(t, e) {
return Ke(e, function(e) {
return t[e];
});
}
function wn(t, e) {
return t.has(e);
}
function Sn(t, e) {
for (var n = -1, i = t.length; ++n < i && cn(e, t[n], 0) > -1; ) ;
return n;
}
function Cn(t, e) {
for (var n = t.length; n-- && cn(e, t[n], 0) > -1; ) ;
return n;
}
function Tn(t, e) {
for (var n = t.length, i = 0; n--; ) t[n] === e && ++i;
return i;
}
var En = dn({
"À": "A",
"Á": "A",
"Â": "A",
"Ã": "A",
"Ä": "A",
"Å": "A",
"à": "a",
"á": "a",
"â": "a",
"ã": "a",
"ä": "a",
"å": "a",
"Ç": "C",
"ç": "c",
"Ð": "D",
"ð": "d",
"È": "E",
"É": "E",
"Ê": "E",
"Ë": "E",
"è": "e",
"é": "e",
"ê": "e",
"ë": "e",
"Ì": "I",
"Í": "I",
"Î": "I",
"Ï": "I",
"ì": "i",
"í": "i",
"î": "i",
"ï": "i",
"Ñ": "N",
"ñ": "n",
"Ò": "O",
"Ó": "O",
"Ô": "O",
"Õ": "O",
"Ö": "O",
"Ø": "O",
"ò": "o",
"ó": "o",
"ô": "o",
"õ": "o",
"ö": "o",
"ø": "o",
"Ù": "U",
"Ú": "U",
"Û": "U",
"Ü": "U",
"ù": "u",
"ú": "u",
"û": "u",
"ü": "u",
"Ý": "Y",
"ý": "y",
"ÿ": "y",
"Æ": "Ae",
"æ": "ae",
"Þ": "Th",
"þ": "th",
"ß": "ss",
"Ā": "A",
"Ă": "A",
"Ą": "A",
"ā": "a",
"ă": "a",
"ą": "a",
"Ć": "C",
"Ĉ": "C",
"Ċ": "C",
"Č": "C",
"ć": "c",
"ĉ": "c",
"ċ": "c",
"č": "c",
"Ď": "D",
"Đ": "D",
"ď": "d",
"đ": "d",
"Ē": "E",
"Ĕ": "E",
"Ė": "E",
"Ę": "E",
"Ě": "E",
"ē": "e",
"ĕ": "e",
"ė": "e",
"ę": "e",
"ě": "e",
"Ĝ": "G",
"Ğ": "G",
"Ġ": "G",
"Ģ": "G",
"ĝ": "g",
"ğ": "g",
"ġ": "g",
"ģ": "g",
"Ĥ": "H",
"Ħ": "H",
"ĥ": "h",
"ħ": "h",
"Ĩ": "I",
"Ī": "I",
"Ĭ": "I",
"Į": "I",
"İ": "I",
"ĩ": "i",
"ī": "i",
"ĭ": "i",
"į": "i",
"ı": "i",
"Ĵ": "J",
"ĵ": "j",
"Ķ": "K",
"ķ": "k",
"ĸ": "k",
"Ĺ": "L",
"Ļ": "L",
"Ľ": "L",
"Ŀ": "L",
"Ł": "L",
"ĺ": "l",
"ļ": "l",
"ľ": "l",
"ŀ": "l",
"ł": "l",
"Ń": "N",
"Ņ": "N",
"Ň": "N",
"Ŋ": "N",
"ń": "n",
"ņ": "n",
"ň": "n",
"ŋ": "n",
"Ō": "O",
"Ŏ": "O",
"Ő": "O",
"ō": "o",
"ŏ": "o",
"ő": "o",
"Ŕ": "R",
"Ŗ": "R",
"Ř": "R",
"ŕ": "r",
"ŗ": "r",
"ř": "r",
"Ś": "S",
"Ŝ": "S",
"Ş": "S",
"Š": "S",
"ś": "s",
"ŝ": "s",
"ş": "s",
"š": "s",
"Ţ": "T",
"Ť": "T",
"Ŧ": "T",
"ţ": "t",
"ť": "t",
"ŧ": "t",
"Ũ": "U",
"Ū": "U",
"Ŭ": "U",
"Ů": "U",
"Ű": "U",
"Ų": "U",
"ũ": "u",
"ū": "u",
"ŭ": "u",
"ů": "u",
"ű": "u",
"ų": "u",
"Ŵ": "W",
"ŵ": "w",
"Ŷ": "Y",
"ŷ": "y",
"Ÿ": "Y",
"Ź": "Z",
"Ż": "Z",
"Ž": "Z",
"ź": "z",
"ż": "z",
"ž": "z",
"Ĳ": "IJ",
"ĳ": "ij",
"Œ": "Oe",
"œ": "oe",
"ŉ": "'n",
"ſ": "s"
}), In = dn({
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;",
"'": "&#39;"
});
function kn(t) {
return "\\" + Ie[t];
}
function Nn(t, e) {
return null == t ? i : t[e];
}
function Rn(t) {
return be.test(t);
}
function On(t) {
return we.test(t);
}
function Pn(t) {
for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
return n;
}
function Ln(t) {
var e = -1, n = Array(t.size);
t.forEach(function(t, i) {
n[++e] = [ i, t ];
});
return n;
}
function An(t, e) {
return function(n) {
return t(e(n));
};
}
function Un(t, e) {
for (var n = -1, i = t.length, o = 0, r = []; ++n < i; ) {
var a = t[n];
if (a === e || a === l) {
t[n] = l;
r[o++] = n;
}
}
return r;
}
function Dn(t, e) {
return "__proto__" == e ? i : t[e];
}
function Bn(t) {
var e = -1, n = Array(t.size);
t.forEach(function(t) {
n[++e] = t;
});
return n;
}
function xn(t) {
var e = -1, n = Array(t.size);
t.forEach(function(t) {
n[++e] = [ t, t ];
});
return n;
}
function Mn(t, e, n) {
for (var i = n - 1, o = t.length; ++i < o; ) if (t[i] === e) return i;
return -1;
}
function Gn(t, e, n) {
for (var i = n + 1; i--; ) if (t[i] === e) return i;
return i;
}
function Fn(t) {
return Rn(t) ? jn(t) : nn(t);
}
function Hn(t) {
return Rn(t) ? $n(t) : on(t);
}
var Yn = dn({
"&amp;": "&",
"&lt;": "<",
"&gt;": ">",
"&quot;": '"',
"&#39;": "'"
});
function jn(t) {
for (var e = ve.lastIndex = 0; ve.test(t); ) ++e;
return e;
}
function $n(t) {
return t.match(ve) || [];
}
function Vn(t) {
return t.match(_e) || [];
}
var zn = function t(e) {
var n = (e = null == e ? Pe : zn.defaults(Pe.Object(), e, zn.pick(Pe, Se))).Array, Mt = e.Date, Qt = e.Error, Kt = e.Function, Zt = e.Math, qt = e.Object, te = e.RegExp, ee = e.String, ne = e.TypeError, ie = n.prototype, oe = Kt.prototype, re = qt.prototype, ae = e["__core-js_shared__"], se = oe.toString, ce = re.hasOwnProperty, le = 0, ue = function() {
var t = /[^.]+$/.exec(ae && ae.keys && ae.keys.IE_PROTO || "");
return t ? "Symbol(src)_1." + t : "";
}(), fe = re.toString, he = se.call(qt), de = Pe._, pe = te("^" + se.call(ce).replace(Ot, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ge = Ue ? e.Buffer : i, ve = e.Symbol, _e = e.Uint8Array, be = ge ? ge.allocUnsafe : i, we = An(qt.getPrototypeOf, qt), Ie = qt.create, Re = re.propertyIsEnumerable, Oe = ie.splice, Le = ve ? ve.isConcatSpreadable : i, Ae = ve ? ve.iterator : i, De = ve ? ve.toStringTag : i, Be = function() {
try {
var t = ha(qt, "defineProperty");
t({}, "", {});
return t;
} catch (t) {}
}(), nn = e.clearTimeout !== Pe.clearTimeout && e.clearTimeout, on = Mt && Mt.now !== Pe.Date.now && Mt.now, dn = e.setTimeout !== Pe.setTimeout && e.setTimeout, Mn = Zt.ceil, jn = Zt.floor, $n = qt.getOwnPropertySymbols, Wn = ge ? ge.isBuffer : i, Xn = e.isFinite, Jn = ie.join, Qn = An(qt.keys, qt), Kn = Zt.max, Zn = Zt.min, qn = Mt.now, ti = e.parseInt, ei = Zt.random, ni = ie.reverse, ii = ha(e, "DataView"), oi = ha(e, "Map"), ri = ha(e, "Promise"), ai = ha(e, "Set"), si = ha(e, "WeakMap"), ci = ha(qt, "create"), li = si && new si(), ui = {}, fi = Ja(ii), hi = Ja(oi), di = Ja(ri), pi = Ja(ai), gi = Ja(si), yi = ve ? ve.prototype : i, mi = yi ? yi.valueOf : i, vi = yi ? yi.toString : i;
function _i(t) {
if (dc(t) && !nc(t) && !(t instanceof Ci)) {
if (t instanceof Si) return t;
if (ce.call(t, "__wrapped__")) return Ka(t);
}
return new Si(t);
}
var bi = function() {
function t() {}
return function(e) {
if (!hc(e)) return {};
if (Ie) return Ie(e);
t.prototype = e;
var n = new t();
t.prototype = i;
return n;
};
}();
function wi() {}
function Si(t, e) {
this.__wrapped__ = t;
this.__actions__ = [];
this.__chain__ = !!e;
this.__index__ = 0;
this.__values__ = i;
}
_i.templateSettings = {
escape: Tt,
evaluate: Et,
interpolate: It,
variable: "",
imports: {
_: _i
}
};
_i.prototype = wi.prototype;
_i.prototype.constructor = _i;
Si.prototype = bi(wi.prototype);
Si.prototype.constructor = Si;
function Ci(t) {
this.__wrapped__ = t;
this.__actions__ = [];
this.__dir__ = 1;
this.__filtered__ = !1;
this.__iteratees__ = [];
this.__takeCount__ = D;
this.__views__ = [];
}
Ci.prototype = bi(wi.prototype);
Ci.prototype.constructor = Ci;
function Ti(t) {
var e = -1, n = null == t ? 0 : t.length;
this.clear();
for (;++e < n; ) {
var i = t[e];
this.set(i[0], i[1]);
}
}
Ti.prototype.clear = function() {
this.__data__ = ci ? ci(null) : {};
this.size = 0;
};
Ti.prototype.delete = function(t) {
var e = this.has(t) && delete this.__data__[t];
this.size -= e ? 1 : 0;
return e;
};
Ti.prototype.get = function(t) {
var e = this.__data__;
if (ci) {
var n = e[t];
return n === s ? i : n;
}
return ce.call(e, t) ? e[t] : i;
};
Ti.prototype.has = function(t) {
var e = this.__data__;
return ci ? e[t] !== i : ce.call(e, t);
};
Ti.prototype.set = function(t, e) {
var n = this.__data__;
this.size += this.has(t) ? 0 : 1;
n[t] = ci && e === i ? s : e;
return this;
};
function Ei(t) {
var e = -1, n = null == t ? 0 : t.length;
this.clear();
for (;++e < n; ) {
var i = t[e];
this.set(i[0], i[1]);
}
}
Ei.prototype.clear = function() {
this.__data__ = [];
this.size = 0;
};
Ei.prototype.delete = function(t) {
var e = this.__data__, n = Di(e, t);
if (n < 0) return !1;
n == e.length - 1 ? e.pop() : Oe.call(e, n, 1);
--this.size;
return !0;
};
Ei.prototype.get = function(t) {
var e = this.__data__, n = Di(e, t);
return n < 0 ? i : e[n][1];
};
Ei.prototype.has = function(t) {
return Di(this.__data__, t) > -1;
};
Ei.prototype.set = function(t, e) {
var n = this.__data__, i = Di(n, t);
if (i < 0) {
++this.size;
n.push([ t, e ]);
} else n[i][1] = e;
return this;
};
function Ii(t) {
var e = -1, n = null == t ? 0 : t.length;
this.clear();
for (;++e < n; ) {
var i = t[e];
this.set(i[0], i[1]);
}
}
Ii.prototype.clear = function() {
this.size = 0;
this.__data__ = {
hash: new Ti(),
map: new (oi || Ei)(),
string: new Ti()
};
};
Ii.prototype.delete = function(t) {
var e = ua(this, t).delete(t);
this.size -= e ? 1 : 0;
return e;
};
Ii.prototype.get = function(t) {
return ua(this, t).get(t);
};
Ii.prototype.has = function(t) {
return ua(this, t).has(t);
};
Ii.prototype.set = function(t, e) {
var n = ua(this, t), i = n.size;
n.set(t, e);
this.size += n.size == i ? 0 : 1;
return this;
};
function ki(t) {
var e = -1, n = null == t ? 0 : t.length;
this.__data__ = new Ii();
for (;++e < n; ) this.add(t[e]);
}
ki.prototype.add = ki.prototype.push = function(t) {
this.__data__.set(t, s);
return this;
};
ki.prototype.has = function(t) {
return this.__data__.has(t);
};
function Ni(t) {
var e = this.__data__ = new Ei(t);
this.size = e.size;
}
Ni.prototype.clear = function() {
this.__data__ = new Ei();
this.size = 0;
};
Ni.prototype.delete = function(t) {
var e = this.__data__, n = e.delete(t);
this.size = e.size;
return n;
};
Ni.prototype.get = function(t) {
return this.__data__.get(t);
};
Ni.prototype.has = function(t) {
return this.__data__.has(t);
};
Ni.prototype.set = function(t, e) {
var n = this.__data__;
if (n instanceof Ei) {
var i = n.__data__;
if (!oi || i.length < o - 1) {
i.push([ t, e ]);
this.size = ++n.size;
return this;
}
n = this.__data__ = new Ii(i);
}
n.set(t, e);
this.size = n.size;
return this;
};
function Ri(t, e) {
var n = nc(t), i = !n && ec(t), o = !n && !i && ac(t), r = !n && !i && !o && wc(t), a = n || i || o || r, s = a ? mn(t.length, ee) : [], c = s.length;
for (var l in t) !e && !ce.call(t, l) || a && ("length" == l || o && ("offset" == l || "parent" == l) || r && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Ea(l, c)) || s.push(l);
return s;
}
function Oi(t) {
var e = t.length;
return e ? t[xo(0, e - 1)] : i;
}
function Pi(t, e) {
return za(Cr(t), Hi(e, 0, t.length));
}
function Li(t) {
return za(Cr(t));
}
function Ai(t, e, n) {
(n === i || Zs(t[e], n)) && (n !== i || e in t) || Gi(t, e, n);
}
function Ui(t, e, n) {
var o = t[e];
ce.call(t, e) && Zs(o, n) && (n !== i || e in t) || Gi(t, e, n);
}
function Di(t, e) {
for (var n = t.length; n--; ) if (Zs(t[n][0], e)) return n;
return -1;
}
function Bi(t, e, n, i) {
Wi(t, function(t, o, r) {
e(i, t, n(t), r);
});
return i;
}
function xi(t, e) {
return t && Tr(e, jc(e), t);
}
function Mi(t, e) {
return t && Tr(e, $c(e), t);
}
function Gi(t, e, n) {
"__proto__" == e && Be ? Be(t, e, {
configurable: !0,
enumerable: !0,
value: n,
writable: !0
}) : t[e] = n;
}
function Fi(t, e) {
for (var o = -1, r = e.length, a = n(r), s = null == t; ++o < r; ) a[o] = s ? i : Mc(t, e[o]);
return a;
}
function Hi(t, e, n) {
if (t == t) {
n !== i && (t = t <= n ? t : n);
e !== i && (t = t >= e ? t : e);
}
return t;
}
function Yi(t, e, n, o, r, a) {
var s, c = e & u, l = e & f, d = e & h;
n && (s = r ? n(t, o, r, a) : n(t));
if (s !== i) return s;
if (!hc(t)) return t;
var p = nc(t);
if (p) {
s = ba(t);
if (!c) return Cr(t, s);
} else {
var g = ya(t), y = g == z || g == W;
if (ac(t)) return dr(t, c);
if (g == K || g == G || y && !r) {
s = l || y ? {} : wa(t);
if (!c) return l ? Ir(t, Mi(s, t)) : Er(t, xi(s, t));
} else {
if (!Ee[g]) return r ? t : {};
s = Sa(t, g, c);
}
}
a || (a = new Ni());
var m = a.get(t);
if (m) return m;
a.set(t, s);
if (vc(t)) {
t.forEach(function(i) {
s.add(Yi(i, e, n, i, t, a));
});
return s;
}
if (pc(t)) {
t.forEach(function(i, o) {
s.set(o, Yi(i, e, n, o, t, a));
});
return s;
}
var v = p ? i : (d ? l ? ra : oa : l ? $c : jc)(t);
Ve(v || t, function(i, o) {
v && (i = t[o = i]);
Ui(s, o, Yi(i, e, n, o, t, a));
});
return s;
}
function ji(t) {
var e = jc(t);
return function(n) {
return $i(n, t, e);
};
}
function $i(t, e, n) {
var o = n.length;
if (null == t) return !o;
t = qt(t);
for (;o--; ) {
var r = n[o], a = e[r], s = t[r];
if (s === i && !(r in t) || !a(s)) return !1;
}
return !0;
}
function Vi(t, e, n) {
if ("function" != typeof t) throw new ne(a);
return Ya(function() {
t.apply(i, n);
}, e);
}
function zi(t, e, n, i) {
var r = -1, a = Je, s = !0, c = t.length, l = [], u = e.length;
if (!c) return l;
n && (e = Ke(e, _n(n)));
if (i) {
a = Qe;
s = !1;
} else if (e.length >= o) {
a = wn;
s = !1;
e = new ki(e);
}
t: for (;++r < c; ) {
var f = t[r], h = null == n ? f : n(f);
f = i || 0 !== f ? f : 0;
if (s && h == h) {
for (var d = u; d--; ) if (e[d] === h) continue t;
l.push(f);
} else a(e, h, i) || l.push(f);
}
return l;
}
var Wi = Rr(no), Xi = Rr(io, !0);
function Ji(t, e) {
var n = !0;
Wi(t, function(t, i, o) {
return n = !!e(t, i, o);
});
return n;
}
function Qi(t, e, n) {
for (var o = -1, r = t.length; ++o < r; ) {
var a = t[o], s = e(a);
if (null != s && (c === i ? s == s && !bc(s) : n(s, c))) var c = s, l = a;
}
return l;
}
function Ki(t, e, n, o) {
var r = t.length;
(n = Ic(n)) < 0 && (n = -n > r ? 0 : r + n);
(o = o === i || o > r ? r : Ic(o)) < 0 && (o += r);
o = n > o ? 0 : kc(o);
for (;n < o; ) t[n++] = e;
return t;
}
function Zi(t, e) {
var n = [];
Wi(t, function(t, i, o) {
e(t, i, o) && n.push(t);
});
return n;
}
function qi(t, e, n, i, o) {
var r = -1, a = t.length;
n || (n = Ta);
o || (o = []);
for (;++r < a; ) {
var s = t[r];
e > 0 && n(s) ? e > 1 ? qi(s, e - 1, n, i, o) : Ze(o, s) : i || (o[o.length] = s);
}
return o;
}
var to = Or(), eo = Or(!0);
function no(t, e) {
return t && to(t, e, jc);
}
function io(t, e) {
return t && eo(t, e, jc);
}
function oo(t, e) {
return Xe(e, function(e) {
return lc(t[e]);
});
}
function ro(t, e) {
for (var n = 0, o = (e = lr(e, t)).length; null != t && n < o; ) t = t[Xa(e[n++])];
return n && n == o ? t : i;
}
function ao(t, e, n) {
var i = e(t);
return nc(t) ? i : Ze(i, n(t));
}
function so(t) {
return null == t ? t === i ? it : Q : De && De in qt(t) ? da(t) : xa(t);
}
function co(t, e) {
return t > e;
}
function lo(t, e) {
return null != t && ce.call(t, e);
}
function uo(t, e) {
return null != t && e in qt(t);
}
function fo(t, e, n) {
return t >= Zn(e, n) && t < Kn(e, n);
}
function ho(t, e, o) {
for (var r = o ? Qe : Je, a = t[0].length, s = t.length, c = s, l = n(s), u = Infinity, f = []; c--; ) {
var h = t[c];
c && e && (h = Ke(h, _n(e)));
u = Zn(h.length, u);
l[c] = !o && (e || a >= 120 && h.length >= 120) ? new ki(c && h) : i;
}
h = t[0];
var d = -1, p = l[0];
t: for (;++d < a && f.length < u; ) {
var g = h[d], y = e ? e(g) : g;
g = o || 0 !== g ? g : 0;
if (!(p ? wn(p, y) : r(f, y, o))) {
c = s;
for (;--c; ) {
var m = l[c];
if (!(m ? wn(m, y) : r(t[c], y, o))) continue t;
}
p && p.push(y);
f.push(g);
}
}
return f;
}
function po(t, e, n, i) {
no(t, function(t, o, r) {
e(i, n(t), o, r);
});
return i;
}
function go(t, e, n) {
var o = null == (t = Ga(t, e = lr(e, t))) ? t : t[Xa(cs(e))];
return null == o ? i : je(o, t, n);
}
function yo(t) {
return dc(t) && so(t) == G;
}
function mo(t, e, n, i, o) {
return t === e || (null == t || null == e || !dc(t) && !dc(e) ? t != t && e != e : vo(t, e, n, i, mo, o));
}
function vo(t, e, n, i, o, r) {
var a = nc(t), s = nc(e), c = a ? F : ya(t), l = s ? F : ya(e), u = (c = c == G ? K : c) == K, f = (l = l == G ? K : l) == K, h = c == l;
if (h && ac(t)) {
if (!ac(e)) return !1;
a = !0;
u = !1;
}
if (h && !u) {
r || (r = new Ni());
return a || wc(t) ? ta(t, e, n, i, o, r) : ea(t, e, c, n, i, o, r);
}
if (!(n & d)) {
var p = u && ce.call(t, "__wrapped__"), g = f && ce.call(e, "__wrapped__");
if (p || g) {
var y = p ? t.value() : t, m = g ? e.value() : e;
r || (r = new Ni());
return o(y, m, n, i, r);
}
}
if (!h) return !1;
r || (r = new Ni());
return na(t, e, n, i, o, r);
}
function _o(t, e, n, o) {
var r = n.length, a = r, s = !o;
if (null == t) return !a;
t = qt(t);
for (;r--; ) {
var c = n[r];
if (s && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
}
for (;++r < a; ) {
var l = (c = n[r])[0], u = t[l], f = c[1];
if (s && c[2]) {
if (u === i && !(l in t)) return !1;
} else {
var h = new Ni();
if (o) var g = o(u, f, l, t, e, h);
if (!(g === i ? mo(f, u, d | p, o, h) : g)) return !1;
}
}
return !0;
}
function bo(t) {
return !(!hc(t) || Oa(t)) && (lc(t) ? pe : $t).test(Ja(t));
}
function wo(t) {
return "function" == typeof t ? t : null == t ? gl : "object" == typeof t ? nc(t) ? ko(t[0], t[1]) : Io(t) : Tl(t);
}
function So(t) {
if (!La(t)) return Qn(t);
var e = [];
for (var n in qt(t)) ce.call(t, n) && "constructor" != n && e.push(n);
return e;
}
function Co(t) {
if (!hc(t)) return Ba(t);
var e = La(t), n = [];
for (var i in t) ("constructor" != i || !e && ce.call(t, i)) && n.push(i);
return n;
}
function To(t, e) {
return t < e;
}
function Eo(t, e) {
var i = -1, o = oc(t) ? n(t.length) : [];
Wi(t, function(t, n, r) {
o[++i] = e(t, n, r);
});
return o;
}
function Io(t) {
var e = fa(t);
return 1 == e.length && e[0][2] ? Ua(e[0][0], e[0][1]) : function(n) {
return n === t || _o(n, t, e);
};
}
function ko(t, e) {
return ka(t) && Aa(e) ? Ua(Xa(t), e) : function(n) {
var o = Mc(n, t);
return o === i && o === e ? Gc(n, t) : mo(e, o, d | p);
};
}
function No(t, e, n, o, r) {
t !== e && to(e, function(a, s) {
if (hc(a)) {
r || (r = new Ni());
Ro(t, e, s, n, No, o, r);
} else {
var c = o ? o(Dn(t, s), a, s + "", t, e, r) : i;
c === i && (c = a);
Ai(t, s, c);
}
}, $c);
}
function Ro(t, e, n, o, r, a, s) {
var c = Dn(t, n), l = Dn(e, n), u = s.get(l);
if (u) Ai(t, n, u); else {
var f = a ? a(c, l, n + "", t, e, s) : i, h = f === i;
if (h) {
var d = nc(l), p = !d && ac(l), g = !d && !p && wc(l);
f = l;
if (d || p || g) if (nc(c)) f = c; else if (rc(c)) f = Cr(c); else if (p) {
h = !1;
f = dr(l, !0);
} else if (g) {
h = !1;
f = vr(l, !0);
} else f = []; else if (yc(l) || ec(l)) {
f = c;
ec(c) ? f = Rc(c) : (!hc(c) || o && lc(c)) && (f = wa(l));
} else h = !1;
}
if (h) {
s.set(l, f);
r(f, l, o, a, s);
s.delete(l);
}
Ai(t, n, f);
}
}
function Oo(t, e) {
var n = t.length;
if (n) return Ea(e += e < 0 ? n : 0, n) ? t[e] : i;
}
function Po(t, e, n) {
var i = -1;
e = Ke(e.length ? e : [ gl ], _n(la()));
return gn(Eo(t, function(t, n, o) {
return {
criteria: Ke(e, function(e) {
return e(t);
}),
index: ++i,
value: t
};
}), function(t, e) {
return br(t, e, n);
});
}
function Lo(t, e) {
return Ao(t, e, function(e, n) {
return Gc(t, n);
});
}
function Ao(t, e, n) {
for (var i = -1, o = e.length, r = {}; ++i < o; ) {
var a = e[i], s = ro(t, a);
n(s, a) && jo(r, lr(a, t), s);
}
return r;
}
function Uo(t) {
return function(e) {
return ro(e, t);
};
}
function Do(t, e, n, i) {
var o = i ? ln : cn, r = -1, a = e.length, s = t;
t === e && (e = Cr(e));
n && (s = Ke(t, _n(n)));
for (;++r < a; ) for (var c = 0, l = e[r], u = n ? n(l) : l; (c = o(s, u, c, i)) > -1; ) {
s !== t && Oe.call(s, c, 1);
Oe.call(t, c, 1);
}
return t;
}
function Bo(t, e) {
for (var n = t ? e.length : 0, i = n - 1; n--; ) {
var o = e[n];
if (n == i || o !== r) {
var r = o;
Ea(o) ? Oe.call(t, o, 1) : er(t, o);
}
}
return t;
}
function xo(t, e) {
return t + jn(ei() * (e - t + 1));
}
function Mo(t, e, i, o) {
for (var r = -1, a = Kn(Mn((e - t) / (i || 1)), 0), s = n(a); a--; ) {
s[o ? a : ++r] = t;
t += i;
}
return s;
}
function Go(t, e) {
var n = "";
if (!t || e < 1 || e > L) return n;
do {
e % 2 && (n += t);
(e = jn(e / 2)) && (t += t);
} while (e);
return n;
}
function Fo(t, e) {
return ja(Ma(t, e, gl), t + "");
}
function Ho(t) {
return Oi(Zc(t));
}
function Yo(t, e) {
var n = Zc(t);
return za(n, Hi(e, 0, n.length));
}
function jo(t, e, n, o) {
if (!hc(t)) return t;
for (var r = -1, a = (e = lr(e, t)).length, s = a - 1, c = t; null != c && ++r < a; ) {
var l = Xa(e[r]), u = n;
if (r != s) {
var f = c[l];
(u = o ? o(f, l, c) : i) === i && (u = hc(f) ? f : Ea(e[r + 1]) ? [] : {});
}
Ui(c, l, u);
c = c[l];
}
return t;
}
var $o = li ? function(t, e) {
li.set(t, e);
return t;
} : gl, Vo = Be ? function(t, e) {
return Be(t, "toString", {
configurable: !0,
enumerable: !1,
value: hl(e),
writable: !0
});
} : gl;
function zo(t) {
return za(Zc(t));
}
function Wo(t, e, i) {
var o = -1, r = t.length;
e < 0 && (e = -e > r ? 0 : r + e);
(i = i > r ? r : i) < 0 && (i += r);
r = e > i ? 0 : i - e >>> 0;
e >>>= 0;
for (var a = n(r); ++o < r; ) a[o] = t[o + e];
return a;
}
function Xo(t, e) {
var n;
Wi(t, function(t, i, o) {
return !(n = e(t, i, o));
});
return !!n;
}
function Jo(t, e, n) {
var i = 0, o = null == t ? i : t.length;
if ("number" == typeof e && e == e && o <= x) {
for (;i < o; ) {
var r = i + o >>> 1, a = t[r];
null !== a && !bc(a) && (n ? a <= e : a < e) ? i = r + 1 : o = r;
}
return o;
}
return Qo(t, e, gl, n);
}
function Qo(t, e, n, o) {
e = n(e);
for (var r = 0, a = null == t ? 0 : t.length, s = e != e, c = null === e, l = bc(e), u = e === i; r < a; ) {
var f = jn((r + a) / 2), h = n(t[f]), d = h !== i, p = null === h, g = h == h, y = bc(h);
if (s) var m = o || g; else m = u ? g && (o || d) : c ? g && d && (o || !p) : l ? g && d && !p && (o || !y) : !p && !y && (o ? h <= e : h < e);
m ? r = f + 1 : a = f;
}
return Zn(a, B);
}
function Ko(t, e) {
for (var n = -1, i = t.length, o = 0, r = []; ++n < i; ) {
var a = t[n], s = e ? e(a) : a;
if (!n || !Zs(s, c)) {
var c = s;
r[o++] = 0 === a ? 0 : a;
}
}
return r;
}
function Zo(t) {
return "number" == typeof t ? t : bc(t) ? U : +t;
}
function qo(t) {
if ("string" == typeof t) return t;
if (nc(t)) return Ke(t, qo) + "";
if (bc(t)) return vi ? vi.call(t) : "";
var e = t + "";
return "0" == e && 1 / t == -P ? "-0" : e;
}
function tr(t, e, n) {
var i = -1, r = Je, a = t.length, s = !0, c = [], l = c;
if (n) {
s = !1;
r = Qe;
} else if (a >= o) {
var u = e ? null : Xr(t);
if (u) return Bn(u);
s = !1;
r = wn;
l = new ki();
} else l = e ? [] : c;
t: for (;++i < a; ) {
var f = t[i], h = e ? e(f) : f;
f = n || 0 !== f ? f : 0;
if (s && h == h) {
for (var d = l.length; d--; ) if (l[d] === h) continue t;
e && l.push(h);
c.push(f);
} else if (!r(l, h, n)) {
l !== c && l.push(h);
c.push(f);
}
}
return c;
}
function er(t, e) {
return null == (t = Ga(t, e = lr(e, t))) || delete t[Xa(cs(e))];
}
function nr(t, e, n, i) {
return jo(t, e, n(ro(t, e)), i);
}
function ir(t, e, n, i) {
for (var o = t.length, r = i ? o : -1; (i ? r-- : ++r < o) && e(t[r], r, t); ) ;
return n ? Wo(t, i ? 0 : r, i ? r + 1 : o) : Wo(t, i ? r + 1 : 0, i ? o : r);
}
function or(t, e) {
var n = t;
n instanceof Ci && (n = n.value());
return qe(e, function(t, e) {
return e.func.apply(e.thisArg, Ze([ t ], e.args));
}, n);
}
function rr(t, e, i) {
var o = t.length;
if (o < 2) return o ? tr(t[0]) : [];
for (var r = -1, a = n(o); ++r < o; ) for (var s = t[r], c = -1; ++c < o; ) c != r && (a[r] = zi(a[r] || s, t[c], e, i));
return tr(qi(a, 1), e, i);
}
function ar(t, e, n) {
for (var o = -1, r = t.length, a = e.length, s = {}; ++o < r; ) {
var c = o < a ? e[o] : i;
n(s, t[o], c);
}
return s;
}
function sr(t) {
return rc(t) ? t : [];
}
function cr(t) {
return "function" == typeof t ? t : gl;
}
function lr(t, e) {
return nc(t) ? t : ka(t, e) ? [ t ] : Wa(Oc(t));
}
var ur = Fo;
function fr(t, e, n) {
var o = t.length;
n = n === i ? o : n;
return !e && n >= o ? t : Wo(t, e, n);
}
var hr = nn || function(t) {
return Pe.clearTimeout(t);
};
function dr(t, e) {
if (e) return t.slice();
var n = t.length, i = be ? be(n) : new t.constructor(n);
t.copy(i);
return i;
}
function pr(t) {
var e = new t.constructor(t.byteLength);
new _e(e).set(new _e(t));
return e;
}
function gr(t, e) {
var n = e ? pr(t.buffer) : t.buffer;
return new t.constructor(n, t.byteOffset, t.byteLength);
}
function yr(t) {
var e = new t.constructor(t.source, Ht.exec(t));
e.lastIndex = t.lastIndex;
return e;
}
function mr(t) {
return mi ? qt(mi.call(t)) : {};
}
function vr(t, e) {
var n = e ? pr(t.buffer) : t.buffer;
return new t.constructor(n, t.byteOffset, t.length);
}
function _r(t, e) {
if (t !== e) {
var n = t !== i, o = null === t, r = t == t, a = bc(t), s = e !== i, c = null === e, l = e == e, u = bc(e);
if (!c && !u && !a && t > e || a && s && l && !c && !u || o && s && l || !n && l || !r) return 1;
if (!o && !a && !u && t < e || u && n && r && !o && !a || c && n && r || !s && r || !l) return -1;
}
return 0;
}
function br(t, e, n) {
for (var i = -1, o = t.criteria, r = e.criteria, a = o.length, s = n.length; ++i < a; ) {
var c = _r(o[i], r[i]);
if (c) return i >= s ? c : c * ("desc" == n[i] ? -1 : 1);
}
return t.index - e.index;
}
function wr(t, e, i, o) {
for (var r = -1, a = t.length, s = i.length, c = -1, l = e.length, u = Kn(a - s, 0), f = n(l + u), h = !o; ++c < l; ) f[c] = e[c];
for (;++r < s; ) (h || r < a) && (f[i[r]] = t[r]);
for (;u--; ) f[c++] = t[r++];
return f;
}
function Sr(t, e, i, o) {
for (var r = -1, a = t.length, s = -1, c = i.length, l = -1, u = e.length, f = Kn(a - c, 0), h = n(f + u), d = !o; ++r < f; ) h[r] = t[r];
for (var p = r; ++l < u; ) h[p + l] = e[l];
for (;++s < c; ) (d || r < a) && (h[p + i[s]] = t[r++]);
return h;
}
function Cr(t, e) {
var i = -1, o = t.length;
e || (e = n(o));
for (;++i < o; ) e[i] = t[i];
return e;
}
function Tr(t, e, n, o) {
var r = !n;
n || (n = {});
for (var a = -1, s = e.length; ++a < s; ) {
var c = e[a], l = o ? o(n[c], t[c], c, n, t) : i;
l === i && (l = t[c]);
r ? Gi(n, c, l) : Ui(n, c, l);
}
return n;
}
function Er(t, e) {
return Tr(t, pa(t), e);
}
function Ir(t, e) {
return Tr(t, ga(t), e);
}
function kr(t, e) {
return function(n, i) {
var o = nc(n) ? $e : Bi, r = e ? e() : {};
return o(n, t, la(i, 2), r);
};
}
function Nr(t) {
return Fo(function(e, n) {
var o = -1, r = n.length, a = r > 1 ? n[r - 1] : i, s = r > 2 ? n[2] : i;
a = t.length > 3 && "function" == typeof a ? (r--, a) : i;
if (s && Ia(n[0], n[1], s)) {
a = r < 3 ? i : a;
r = 1;
}
e = qt(e);
for (;++o < r; ) {
var c = n[o];
c && t(e, c, o, a);
}
return e;
});
}
function Rr(t, e) {
return function(n, i) {
if (null == n) return n;
if (!oc(n)) return t(n, i);
for (var o = n.length, r = e ? o : -1, a = qt(n); (e ? r-- : ++r < o) && !1 !== i(a[r], r, a); ) ;
return n;
};
}
function Or(t) {
return function(e, n, i) {
for (var o = -1, r = qt(e), a = i(e), s = a.length; s--; ) {
var c = a[t ? s : ++o];
if (!1 === n(r[c], c, r)) break;
}
return e;
};
}
function Pr(t, e, n) {
var i = e & g, o = Ur(t);
return function e() {
return (this && this !== Pe && this instanceof e ? o : t).apply(i ? n : this, arguments);
};
}
function Lr(t) {
return function(e) {
var n = Rn(e = Oc(e)) ? Hn(e) : i, o = n ? n[0] : e.charAt(0), r = n ? fr(n, 1).join("") : e.slice(1);
return o[t]() + r;
};
}
function Ar(t) {
return function(e) {
return qe(ll(el(e).replace(ye, "")), t, "");
};
}
function Ur(t) {
return function() {
var e = arguments;
switch (e.length) {
case 0:
return new t();

case 1:
return new t(e[0]);

case 2:
return new t(e[0], e[1]);

case 3:
return new t(e[0], e[1], e[2]);

case 4:
return new t(e[0], e[1], e[2], e[3]);

case 5:
return new t(e[0], e[1], e[2], e[3], e[4]);

case 6:
return new t(e[0], e[1], e[2], e[3], e[4], e[5]);

case 7:
return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
}
var n = bi(t.prototype), i = t.apply(n, e);
return hc(i) ? i : n;
};
}
function Dr(t, e, o) {
var r = Ur(t);
return function a() {
for (var s = arguments.length, c = n(s), l = s, u = ca(a); l--; ) c[l] = arguments[l];
var f = s < 3 && c[0] !== u && c[s - 1] !== u ? [] : Un(c, u);
return (s -= f.length) < o ? zr(t, e, Mr, a.placeholder, i, c, f, i, i, o - s) : je(this && this !== Pe && this instanceof a ? r : t, this, c);
};
}
function Br(t) {
return function(e, n, o) {
var r = qt(e);
if (!oc(e)) {
var a = la(n, 3);
e = jc(e);
n = function(t) {
return a(r[t], t, r);
};
}
var s = t(e, n, o);
return s > -1 ? r[a ? e[s] : s] : i;
};
}
function xr(t) {
return ia(function(e) {
var n = e.length, o = n, r = Si.prototype.thru;
t && e.reverse();
for (;o--; ) {
var s = e[o];
if ("function" != typeof s) throw new ne(a);
if (r && !c && "wrapper" == sa(s)) var c = new Si([], !0);
}
o = c ? o : n;
for (;++o < n; ) {
var l = sa(s = e[o]), u = "wrapper" == l ? aa(s) : i;
c = u && Ra(u[0]) && u[1] == (S | v | b | C) && !u[4].length && 1 == u[9] ? c[sa(u[0])].apply(c, u[3]) : 1 == s.length && Ra(s) ? c[l]() : c.thru(s);
}
return function() {
var t = arguments, i = t[0];
if (c && 1 == t.length && nc(i)) return c.plant(i).value();
for (var o = 0, r = n ? e[o].apply(this, t) : i; ++o < n; ) r = e[o].call(this, r);
return r;
};
});
}
function Mr(t, e, o, r, a, s, c, l, u, f) {
var h = e & S, d = e & g, p = e & y, m = e & (v | _), b = e & T, w = p ? i : Ur(t);
return function i() {
for (var g = arguments.length, y = n(g), v = g; v--; ) y[v] = arguments[v];
if (m) var _ = ca(i), S = Tn(y, _);
r && (y = wr(y, r, a, m));
s && (y = Sr(y, s, c, m));
g -= S;
if (m && g < f) {
var C = Un(y, _);
return zr(t, e, Mr, i.placeholder, o, y, C, l, u, f - g);
}
var T = d ? o : this, E = p ? T[t] : t;
g = y.length;
l ? y = Fa(y, l) : b && g > 1 && y.reverse();
h && u < g && (y.length = u);
this && this !== Pe && this instanceof i && (E = w || Ur(E));
return E.apply(T, y);
};
}
function Gr(t, e) {
return function(n, i) {
return po(n, t, e(i), {});
};
}
function Fr(t, e) {
return function(n, o) {
var r;
if (n === i && o === i) return e;
n !== i && (r = n);
if (o !== i) {
if (r === i) return o;
if ("string" == typeof n || "string" == typeof o) {
n = qo(n);
o = qo(o);
} else {
n = Zo(n);
o = Zo(o);
}
r = t(n, o);
}
return r;
};
}
function Hr(t) {
return ia(function(e) {
e = Ke(e, _n(la()));
return Fo(function(n) {
var i = this;
return t(e, function(t) {
return je(t, i, n);
});
});
});
}
function Yr(t, e) {
var n = (e = e === i ? " " : qo(e)).length;
if (n < 2) return n ? Go(e, t) : e;
var o = Go(e, Mn(t / Fn(e)));
return Rn(e) ? fr(Hn(o), 0, t).join("") : o.slice(0, t);
}
function jr(t, e, i, o) {
var r = e & g, a = Ur(t);
return function e() {
for (var s = -1, c = arguments.length, l = -1, u = o.length, f = n(u + c), h = this && this !== Pe && this instanceof e ? a : t; ++l < u; ) f[l] = o[l];
for (;c--; ) f[l++] = arguments[++s];
return je(h, r ? i : this, f);
};
}
function $r(t) {
return function(e, n, o) {
o && "number" != typeof o && Ia(e, n, o) && (n = o = i);
e = Ec(e);
if (n === i) {
n = e;
e = 0;
} else n = Ec(n);
return Mo(e, n, o = o === i ? e < n ? 1 : -1 : Ec(o), t);
};
}
function Vr(t) {
return function(e, n) {
if ("string" != typeof e || "string" != typeof n) {
e = Nc(e);
n = Nc(n);
}
return t(e, n);
};
}
function zr(t, e, n, o, r, a, s, c, l, u) {
var f = e & v;
e |= f ? b : w;
(e &= ~(f ? w : b)) & m || (e &= ~(g | y));
var h = [ t, e, r, f ? a : i, f ? s : i, f ? i : a, f ? i : s, c, l, u ], d = n.apply(i, h);
Ra(t) && Ha(d, h);
d.placeholder = o;
return $a(d, t, e);
}
function Wr(t) {
var e = Zt[t];
return function(t, n) {
t = Nc(t);
if (n = null == n ? 0 : Zn(Ic(n), 292)) {
var i = (Oc(t) + "e").split("e");
return +((i = (Oc(e(i[0] + "e" + (+i[1] + n))) + "e").split("e"))[0] + "e" + (+i[1] - n));
}
return e(t);
};
}
var Xr = ai && 1 / Bn(new ai([ , -0 ]))[1] == P ? function(t) {
return new ai(t);
} : bl;
function Jr(t) {
return function(e) {
var n = ya(e);
return n == X ? Ln(e) : n == tt ? xn(e) : vn(e, t(e));
};
}
function Qr(t, e, n, o, r, s, c, l) {
var u = e & y;
if (!u && "function" != typeof t) throw new ne(a);
var f = o ? o.length : 0;
if (!f) {
e &= ~(b | w);
o = r = i;
}
c = c === i ? c : Kn(Ic(c), 0);
l = l === i ? l : Ic(l);
f -= r ? r.length : 0;
if (e & w) {
var h = o, d = r;
o = r = i;
}
var p = u ? i : aa(t), m = [ t, e, n, o, r, h, d, s, c, l ];
p && Da(m, p);
t = m[0];
e = m[1];
n = m[2];
o = m[3];
r = m[4];
!(l = m[9] = m[9] === i ? u ? 0 : t.length : Kn(m[9] - f, 0)) && e & (v | _) && (e &= ~(v | _));
if (e && e != g) S = e == v || e == _ ? Dr(t, e, l) : e != b && e != (g | b) || r.length ? Mr.apply(i, m) : jr(t, e, n, o); else var S = Pr(t, e, n);
return $a((p ? $o : Ha)(S, m), t, e);
}
function Kr(t, e, n, o) {
return t === i || Zs(t, re[n]) && !ce.call(o, n) ? e : t;
}
function Zr(t, e, n, o, r, a) {
if (hc(t) && hc(e)) {
a.set(e, t);
No(t, e, i, Zr, a);
a.delete(e);
}
return t;
}
function qr(t) {
return yc(t) ? i : t;
}
function ta(t, e, n, o, r, a) {
var s = n & d, c = t.length, l = e.length;
if (c != l && !(s && l > c)) return !1;
var u = a.get(t);
if (u && a.get(e)) return u == e;
var f = -1, h = !0, g = n & p ? new ki() : i;
a.set(t, e);
a.set(e, t);
for (;++f < c; ) {
var y = t[f], m = e[f];
if (o) var v = s ? o(m, y, f, e, t, a) : o(y, m, f, t, e, a);
if (v !== i) {
if (v) continue;
h = !1;
break;
}
if (g) {
if (!en(e, function(t, e) {
if (!wn(g, e) && (y === t || r(y, t, n, o, a))) return g.push(e);
})) {
h = !1;
break;
}
} else if (y !== m && !r(y, m, n, o, a)) {
h = !1;
break;
}
}
a.delete(t);
a.delete(e);
return h;
}
function ea(t, e, n, i, o, r, a) {
switch (n) {
case st:
if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
t = t.buffer;
e = e.buffer;

case at:
return !(t.byteLength != e.byteLength || !r(new _e(t), new _e(e)));

case Y:
case j:
case J:
return Zs(+t, +e);

case V:
return t.name == e.name && t.message == e.message;

case q:
case et:
return t == e + "";

case X:
var s = Ln;

case tt:
var c = i & d;
s || (s = Bn);
if (t.size != e.size && !c) return !1;
var l = a.get(t);
if (l) return l == e;
i |= p;
a.set(t, e);
var u = ta(s(t), s(e), i, o, r, a);
a.delete(t);
return u;

case nt:
if (mi) return mi.call(t) == mi.call(e);
}
return !1;
}
function na(t, e, n, o, r, a) {
var s = n & d, c = oa(t), l = c.length;
if (l != oa(e).length && !s) return !1;
for (var u = l; u--; ) {
var f = c[u];
if (!(s ? f in e : ce.call(e, f))) return !1;
}
var h = a.get(t);
if (h && a.get(e)) return h == e;
var p = !0;
a.set(t, e);
a.set(e, t);
for (var g = s; ++u < l; ) {
var y = t[f = c[u]], m = e[f];
if (o) var v = s ? o(m, y, f, e, t, a) : o(y, m, f, t, e, a);
if (!(v === i ? y === m || r(y, m, n, o, a) : v)) {
p = !1;
break;
}
g || (g = "constructor" == f);
}
if (p && !g) {
var _ = t.constructor, b = e.constructor;
_ != b && "constructor" in t && "constructor" in e && !("function" == typeof _ && _ instanceof _ && "function" == typeof b && b instanceof b) && (p = !1);
}
a.delete(t);
a.delete(e);
return p;
}
function ia(t) {
return ja(Ma(t, i, is), t + "");
}
function oa(t) {
return ao(t, jc, pa);
}
function ra(t) {
return ao(t, $c, ga);
}
var aa = li ? function(t) {
return li.get(t);
} : bl;
function sa(t) {
for (var e = t.name + "", n = ui[e], i = ce.call(ui, e) ? n.length : 0; i--; ) {
var o = n[i], r = o.func;
if (null == r || r == t) return o.name;
}
return e;
}
function ca(t) {
return (ce.call(_i, "placeholder") ? _i : t).placeholder;
}
function la() {
var t = _i.iteratee || yl;
t = t === yl ? wo : t;
return arguments.length ? t(arguments[0], arguments[1]) : t;
}
function ua(t, e) {
var n = t.__data__;
return Na(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
}
function fa(t) {
for (var e = jc(t), n = e.length; n--; ) {
var i = e[n], o = t[i];
e[n] = [ i, o, Aa(o) ];
}
return e;
}
function ha(t, e) {
var n = Nn(t, e);
return bo(n) ? n : i;
}
function da(t) {
var e = ce.call(t, De), n = t[De];
try {
t[De] = i;
var o = !0;
} catch (t) {}
var r = fe.call(t);
o && (e ? t[De] = n : delete t[De]);
return r;
}
var pa = $n ? function(t) {
if (null == t) return [];
t = qt(t);
return Xe($n(t), function(e) {
return Re.call(t, e);
});
} : kl, ga = $n ? function(t) {
for (var e = []; t; ) {
Ze(e, pa(t));
t = we(t);
}
return e;
} : kl, ya = so;
(ii && ya(new ii(new ArrayBuffer(1))) != st || oi && ya(new oi()) != X || ri && "[object Promise]" != ya(ri.resolve()) || ai && ya(new ai()) != tt || si && ya(new si()) != ot) && (ya = function(t) {
var e = so(t), n = e == K ? t.constructor : i, o = n ? Ja(n) : "";
if (o) switch (o) {
case fi:
return st;

case hi:
return X;

case di:
return "[object Promise]";

case pi:
return tt;

case gi:
return ot;
}
return e;
});
function ma(t, e, n) {
for (var i = -1, o = n.length; ++i < o; ) {
var r = n[i], a = r.size;
switch (r.type) {
case "drop":
t += a;
break;

case "dropRight":
e -= a;
break;

case "take":
e = Zn(e, t + a);
break;

case "takeRight":
t = Kn(t, e - a);
}
}
return {
start: t,
end: e
};
}
function va(t) {
var e = t.match(Bt);
return e ? e[1].split(xt) : [];
}
function _a(t, e, n) {
for (var i = -1, o = (e = lr(e, t)).length, r = !1; ++i < o; ) {
var a = Xa(e[i]);
if (!(r = null != t && n(t, a))) break;
t = t[a];
}
return r || ++i != o ? r : !!(o = null == t ? 0 : t.length) && fc(o) && Ea(a, o) && (nc(t) || ec(t));
}
function ba(t) {
var e = t.length, n = new t.constructor(e);
if (e && "string" == typeof t[0] && ce.call(t, "index")) {
n.index = t.index;
n.input = t.input;
}
return n;
}
function wa(t) {
return "function" != typeof t.constructor || La(t) ? {} : bi(we(t));
}
function Sa(t, e, n) {
var i = t.constructor;
switch (e) {
case at:
return pr(t);

case Y:
case j:
return new i(+t);

case st:
return gr(t, n);

case ct:
case lt:
case ut:
case ft:
case ht:
case dt:
case pt:
case gt:
case yt:
return vr(t, n);

case X:
return new i();

case J:
case et:
return new i(t);

case q:
return yr(t);

case tt:
return new i();

case nt:
return mr(t);
}
}
function Ca(t, e) {
var n = e.length;
if (!n) return t;
var i = n - 1;
e[i] = (n > 1 ? "& " : "") + e[i];
e = e.join(n > 2 ? ", " : " ");
return t.replace(Dt, "{\n/* [wrapped with " + e + "] */\n");
}
function Ta(t) {
return nc(t) || ec(t) || !!(Le && t && t[Le]);
}
function Ea(t, e) {
var n = typeof t;
return !!(e = null == e ? L : e) && ("number" == n || "symbol" != n && zt.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Ia(t, e, n) {
if (!hc(n)) return !1;
var i = typeof e;
return !!("number" == i ? oc(n) && Ea(e, n.length) : "string" == i && e in n) && Zs(n[e], t);
}
function ka(t, e) {
if (nc(t)) return !1;
var n = typeof t;
return !("number" != n && "symbol" != n && "boolean" != n && null != t && !bc(t)) || Nt.test(t) || !kt.test(t) || null != e && t in qt(e);
}
function Na(t) {
var e = typeof t;
return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
}
function Ra(t) {
var e = sa(t), n = _i[e];
if ("function" != typeof n || !(e in Ci.prototype)) return !1;
if (t === n) return !0;
var i = aa(n);
return !!i && t === i[0];
}
function Oa(t) {
return !!ue && ue in t;
}
var Pa = ae ? lc : Nl;
function La(t) {
var e = t && t.constructor;
return t === ("function" == typeof e && e.prototype || re);
}
function Aa(t) {
return t == t && !hc(t);
}
function Ua(t, e) {
return function(n) {
return null != n && n[t] === e && (e !== i || t in qt(n));
};
}
function Da(t, e) {
var n = t[1], i = e[1], o = n | i, r = o < (g | y | S), a = i == S && n == v || i == S && n == C && t[7].length <= e[8] || i == (S | C) && e[7].length <= e[8] && n == v;
if (!r && !a) return t;
if (i & g) {
t[2] = e[2];
o |= n & g ? 0 : m;
}
var s = e[3];
if (s) {
var c = t[3];
t[3] = c ? wr(c, s, e[4]) : s;
t[4] = c ? Un(t[3], l) : e[4];
}
if (s = e[5]) {
c = t[5];
t[5] = c ? Sr(c, s, e[6]) : s;
t[6] = c ? Un(t[5], l) : e[6];
}
(s = e[7]) && (t[7] = s);
i & S && (t[8] = null == t[8] ? e[8] : Zn(t[8], e[8]));
null == t[9] && (t[9] = e[9]);
t[0] = e[0];
t[1] = o;
return t;
}
function Ba(t) {
var e = [];
if (null != t) for (var n in qt(t)) e.push(n);
return e;
}
function xa(t) {
return fe.call(t);
}
function Ma(t, e, o) {
e = Kn(e === i ? t.length - 1 : e, 0);
return function() {
for (var i = arguments, r = -1, a = Kn(i.length - e, 0), s = n(a); ++r < a; ) s[r] = i[e + r];
r = -1;
for (var c = n(e + 1); ++r < e; ) c[r] = i[r];
c[e] = o(s);
return je(t, this, c);
};
}
function Ga(t, e) {
return e.length < 2 ? t : ro(t, Wo(e, 0, -1));
}
function Fa(t, e) {
for (var n = t.length, o = Zn(e.length, n), r = Cr(t); o--; ) {
var a = e[o];
t[o] = Ea(a, n) ? r[a] : i;
}
return t;
}
var Ha = Va($o), Ya = dn || function(t, e) {
return Pe.setTimeout(t, e);
}, ja = Va(Vo);
function $a(t, e, n) {
var i = e + "";
return ja(t, Ca(i, Qa(va(i), n)));
}
function Va(t) {
var e = 0, n = 0;
return function() {
var o = qn(), r = N - (o - n);
n = o;
if (r > 0) {
if (++e >= k) return arguments[0];
} else e = 0;
return t.apply(i, arguments);
};
}
function za(t, e) {
var n = -1, o = t.length, r = o - 1;
e = e === i ? o : e;
for (;++n < e; ) {
var a = xo(n, r), s = t[a];
t[a] = t[n];
t[n] = s;
}
t.length = e;
return t;
}
var Wa = function(t) {
var e = zs(t, function(t) {
n.size === c && n.clear();
return t;
}), n = e.cache;
return e;
}(function(t) {
var e = [];
46 === t.charCodeAt(0) && e.push("");
t.replace(Rt, function(t, n, i, o) {
e.push(i ? o.replace(Gt, "$1") : n || t);
});
return e;
});
function Xa(t) {
if ("string" == typeof t || bc(t)) return t;
var e = t + "";
return "0" == e && 1 / t == -P ? "-0" : e;
}
function Ja(t) {
if (null != t) {
try {
return se.call(t);
} catch (t) {}
try {
return t + "";
} catch (t) {}
}
return "";
}
function Qa(t, e) {
Ve(M, function(n) {
var i = "_." + n[0];
e & n[1] && !Je(t, i) && t.push(i);
});
return t.sort();
}
function Ka(t) {
if (t instanceof Ci) return t.clone();
var e = new Si(t.__wrapped__, t.__chain__);
e.__actions__ = Cr(t.__actions__);
e.__index__ = t.__index__;
e.__values__ = t.__values__;
return e;
}
var Za = Fo(function(t, e) {
return rc(t) ? zi(t, qi(e, 1, rc, !0)) : [];
}), qa = Fo(function(t, e) {
var n = cs(e);
rc(n) && (n = i);
return rc(t) ? zi(t, qi(e, 1, rc, !0), la(n, 2)) : [];
}), ts = Fo(function(t, e) {
var n = cs(e);
rc(n) && (n = i);
return rc(t) ? zi(t, qi(e, 1, rc, !0), i, n) : [];
});
function es(t, e, n) {
var i = null == t ? 0 : t.length;
if (!i) return -1;
var o = null == n ? 0 : Ic(n);
o < 0 && (o = Kn(i + o, 0));
return sn(t, la(e, 3), o);
}
function ns(t, e, n) {
var o = null == t ? 0 : t.length;
if (!o) return -1;
var r = o - 1;
if (n !== i) {
r = Ic(n);
r = n < 0 ? Kn(o + r, 0) : Zn(r, o - 1);
}
return sn(t, la(e, 3), r, !0);
}
function is(t) {
return null != t && t.length ? qi(t, 1) : [];
}
function os(t) {
return t && t.length ? t[0] : i;
}
var rs = Fo(function(t) {
var e = Ke(t, sr);
return e.length && e[0] === t[0] ? ho(e) : [];
}), as = Fo(function(t) {
var e = cs(t), n = Ke(t, sr);
e === cs(n) ? e = i : n.pop();
return n.length && n[0] === t[0] ? ho(n, la(e, 2)) : [];
}), ss = Fo(function(t) {
var e = cs(t), n = Ke(t, sr);
(e = "function" == typeof e ? e : i) && n.pop();
return n.length && n[0] === t[0] ? ho(n, i, e) : [];
});
function cs(t) {
var e = null == t ? 0 : t.length;
return e ? t[e - 1] : i;
}
var ls = Fo(us);
function us(t, e) {
return t && t.length && e && e.length ? Do(t, e) : t;
}
var fs = ia(function(t, e) {
var n = null == t ? 0 : t.length, i = Fi(t, e);
Bo(t, Ke(e, function(t) {
return Ea(t, n) ? +t : t;
}).sort(_r));
return i;
});
function hs(t) {
return null == t ? t : ni.call(t);
}
var ds = Fo(function(t) {
return tr(qi(t, 1, rc, !0));
}), ps = Fo(function(t) {
var e = cs(t);
rc(e) && (e = i);
return tr(qi(t, 1, rc, !0), la(e, 2));
}), gs = Fo(function(t) {
var e = cs(t);
e = "function" == typeof e ? e : i;
return tr(qi(t, 1, rc, !0), i, e);
});
function ys(t) {
if (!t || !t.length) return [];
var e = 0;
t = Xe(t, function(t) {
if (rc(t)) {
e = Kn(t.length, e);
return !0;
}
});
return mn(e, function(e) {
return Ke(t, hn(e));
});
}
function ms(t, e) {
if (!t || !t.length) return [];
var n = ys(t);
return null == e ? n : Ke(n, function(t) {
return je(e, i, t);
});
}
var vs = Fo(function(t, e) {
return rc(t) ? zi(t, e) : [];
}), _s = Fo(function(t) {
return rr(Xe(t, rc));
}), bs = Fo(function(t) {
var e = cs(t);
rc(e) && (e = i);
return rr(Xe(t, rc), la(e, 2));
}), ws = Fo(function(t) {
var e = cs(t);
e = "function" == typeof e ? e : i;
return rr(Xe(t, rc), i, e);
}), Ss = Fo(ys);
var Cs = Fo(function(t) {
var e = t.length, n = e > 1 ? t[e - 1] : i;
return ms(t, n = "function" == typeof n ? (t.pop(), n) : i);
});
function Ts(t) {
var e = _i(t);
e.__chain__ = !0;
return e;
}
function Es(t, e) {
return e(t);
}
var Is = ia(function(t) {
var e = t.length, n = e ? t[0] : 0, o = this.__wrapped__, r = function(e) {
return Fi(e, t);
};
if (e > 1 || this.__actions__.length || !(o instanceof Ci) || !Ea(n)) return this.thru(r);
(o = o.slice(n, +n + (e ? 1 : 0))).__actions__.push({
func: Es,
args: [ r ],
thisArg: i
});
return new Si(o, this.__chain__).thru(function(t) {
e && !t.length && t.push(i);
return t;
});
});
var ks = kr(function(t, e, n) {
ce.call(t, n) ? ++t[n] : Gi(t, n, 1);
});
var Ns = Br(es), Rs = Br(ns);
function Os(t, e) {
return (nc(t) ? Ve : Wi)(t, la(e, 3));
}
function Ps(t, e) {
return (nc(t) ? ze : Xi)(t, la(e, 3));
}
var Ls = kr(function(t, e, n) {
ce.call(t, n) ? t[n].push(e) : Gi(t, n, [ e ]);
});
var As = Fo(function(t, e, i) {
var o = -1, r = "function" == typeof e, a = oc(t) ? n(t.length) : [];
Wi(t, function(t) {
a[++o] = r ? je(e, t, i) : go(t, e, i);
});
return a;
}), Us = kr(function(t, e, n) {
Gi(t, n, e);
});
function Ds(t, e) {
return (nc(t) ? Ke : Eo)(t, la(e, 3));
}
var Bs = kr(function(t, e, n) {
t[n ? 0 : 1].push(e);
}, function() {
return [ [], [] ];
});
var xs = Fo(function(t, e) {
if (null == t) return [];
var n = e.length;
n > 1 && Ia(t, e[0], e[1]) ? e = [] : n > 2 && Ia(e[0], e[1], e[2]) && (e = [ e[0] ]);
return Po(t, qi(e, 1), []);
}), Ms = on || function() {
return Pe.Date.now();
};
function Gs(t, e, n) {
e = n ? i : e;
e = t && null == e ? t.length : e;
return Qr(t, S, i, i, i, i, e);
}
function Fs(t, e) {
var n;
if ("function" != typeof e) throw new ne(a);
t = Ic(t);
return function() {
--t > 0 && (n = e.apply(this, arguments));
t <= 1 && (e = i);
return n;
};
}
var Hs = Fo(function(t, e, n) {
var i = g;
if (n.length) {
var o = Un(n, ca(Hs));
i |= b;
}
return Qr(t, i, e, n, o);
}), Ys = Fo(function(t, e, n) {
var i = g | y;
if (n.length) {
var o = Un(n, ca(Ys));
i |= b;
}
return Qr(e, i, t, n, o);
});
function js(t, e, n) {
var o, r, s, c, l, u, f = 0, h = !1, d = !1, p = !0;
if ("function" != typeof t) throw new ne(a);
e = Nc(e) || 0;
if (hc(n)) {
h = !!n.leading;
s = (d = "maxWait" in n) ? Kn(Nc(n.maxWait) || 0, e) : s;
p = "trailing" in n ? !!n.trailing : p;
}
function g(e) {
var n = o, a = r;
o = r = i;
f = e;
return c = t.apply(a, n);
}
function y(t) {
f = t;
l = Ya(_, e);
return h ? g(t) : c;
}
function m(t) {
var n = e - (t - u);
return d ? Zn(n, s - (t - f)) : n;
}
function v(t) {
var n = t - u;
return u === i || n >= e || n < 0 || d && t - f >= s;
}
function _() {
var t = Ms();
if (v(t)) return b(t);
l = Ya(_, m(t));
}
function b(t) {
l = i;
if (p && o) return g(t);
o = r = i;
return c;
}
function w() {
var t = Ms(), n = v(t);
o = arguments;
r = this;
u = t;
if (n) {
if (l === i) return y(u);
if (d) {
l = Ya(_, e);
return g(u);
}
}
l === i && (l = Ya(_, e));
return c;
}
w.cancel = function() {
l !== i && hr(l);
f = 0;
o = u = r = l = i;
};
w.flush = function() {
return l === i ? c : b(Ms());
};
return w;
}
var $s = Fo(function(t, e) {
return Vi(t, 1, e);
}), Vs = Fo(function(t, e, n) {
return Vi(t, Nc(e) || 0, n);
});
function zs(t, e) {
if ("function" != typeof t || null != e && "function" != typeof e) throw new ne(a);
var n = function() {
var i = arguments, o = e ? e.apply(this, i) : i[0], r = n.cache;
if (r.has(o)) return r.get(o);
var a = t.apply(this, i);
n.cache = r.set(o, a) || r;
return a;
};
n.cache = new (zs.Cache || Ii)();
return n;
}
zs.Cache = Ii;
function Ws(t) {
if ("function" != typeof t) throw new ne(a);
return function() {
var e = arguments;
switch (e.length) {
case 0:
return !t.call(this);

case 1:
return !t.call(this, e[0]);

case 2:
return !t.call(this, e[0], e[1]);

case 3:
return !t.call(this, e[0], e[1], e[2]);
}
return !t.apply(this, e);
};
}
var Xs = ur(function(t, e) {
var n = (e = 1 == e.length && nc(e[0]) ? Ke(e[0], _n(la())) : Ke(qi(e, 1), _n(la()))).length;
return Fo(function(i) {
for (var o = -1, r = Zn(i.length, n); ++o < r; ) i[o] = e[o].call(this, i[o]);
return je(t, this, i);
});
}), Js = Fo(function(t, e) {
var n = Un(e, ca(Js));
return Qr(t, b, i, e, n);
}), Qs = Fo(function(t, e) {
var n = Un(e, ca(Qs));
return Qr(t, w, i, e, n);
}), Ks = ia(function(t, e) {
return Qr(t, C, i, i, i, e);
});
function Zs(t, e) {
return t === e || t != t && e != e;
}
var qs = Vr(co), tc = Vr(function(t, e) {
return t >= e;
}), ec = yo(function() {
return arguments;
}()) ? yo : function(t) {
return dc(t) && ce.call(t, "callee") && !Re.call(t, "callee");
}, nc = n.isArray, ic = xe ? _n(xe) : function(t) {
return dc(t) && so(t) == at;
};
function oc(t) {
return null != t && fc(t.length) && !lc(t);
}
function rc(t) {
return dc(t) && oc(t);
}
var ac = Wn || Nl, sc = Me ? _n(Me) : function(t) {
return dc(t) && so(t) == j;
};
function cc(t) {
if (!dc(t)) return !1;
var e = so(t);
return e == V || e == $ || "string" == typeof t.message && "string" == typeof t.name && !yc(t);
}
function lc(t) {
if (!hc(t)) return !1;
var e = so(t);
return e == z || e == W || e == H || e == Z;
}
function uc(t) {
return "number" == typeof t && t == Ic(t);
}
function fc(t) {
return "number" == typeof t && t > -1 && t % 1 == 0 && t <= L;
}
function hc(t) {
var e = typeof t;
return null != t && ("object" == e || "function" == e);
}
function dc(t) {
return null != t && "object" == typeof t;
}
var pc = Ge ? _n(Ge) : function(t) {
return dc(t) && ya(t) == X;
};
function gc(t) {
return "number" == typeof t || dc(t) && so(t) == J;
}
function yc(t) {
if (!dc(t) || so(t) != K) return !1;
var e = we(t);
if (null === e) return !0;
var n = ce.call(e, "constructor") && e.constructor;
return "function" == typeof n && n instanceof n && se.call(n) == he;
}
var mc = Fe ? _n(Fe) : function(t) {
return dc(t) && so(t) == q;
};
var vc = He ? _n(He) : function(t) {
return dc(t) && ya(t) == tt;
};
function _c(t) {
return "string" == typeof t || !nc(t) && dc(t) && so(t) == et;
}
function bc(t) {
return "symbol" == typeof t || dc(t) && so(t) == nt;
}
var wc = Ye ? _n(Ye) : function(t) {
return dc(t) && fc(t.length) && !!Te[so(t)];
};
var Sc = Vr(To), Cc = Vr(function(t, e) {
return t <= e;
});
function Tc(t) {
if (!t) return [];
if (oc(t)) return _c(t) ? Hn(t) : Cr(t);
if (Ae && t[Ae]) return Pn(t[Ae]());
var e = ya(t);
return (e == X ? Ln : e == tt ? Bn : Zc)(t);
}
function Ec(t) {
return t ? (t = Nc(t)) === P || t === -P ? (t < 0 ? -1 : 1) * A : t == t ? t : 0 : 0 === t ? t : 0;
}
function Ic(t) {
var e = Ec(t), n = e % 1;
return e == e ? n ? e - n : e : 0;
}
function kc(t) {
return t ? Hi(Ic(t), 0, D) : 0;
}
function Nc(t) {
if ("number" == typeof t) return t;
if (bc(t)) return U;
if (hc(t)) {
var e = "function" == typeof t.valueOf ? t.valueOf() : t;
t = hc(e) ? e + "" : e;
}
if ("string" != typeof t) return 0 === t ? t : +t;
t = t.replace(Lt, "");
var n = jt.test(t);
return n || Vt.test(t) ? Ne(t.slice(2), n ? 2 : 8) : Yt.test(t) ? U : +t;
}
function Rc(t) {
return Tr(t, $c(t));
}
function Oc(t) {
return null == t ? "" : qo(t);
}
var Pc = Nr(function(t, e) {
if (La(e) || oc(e)) Tr(e, jc(e), t); else for (var n in e) ce.call(e, n) && Ui(t, n, e[n]);
}), Lc = Nr(function(t, e) {
Tr(e, $c(e), t);
}), Ac = Nr(function(t, e, n, i) {
Tr(e, $c(e), t, i);
}), Uc = Nr(function(t, e, n, i) {
Tr(e, jc(e), t, i);
}), Dc = ia(Fi);
var Bc = Fo(function(t, e) {
t = qt(t);
var n = -1, o = e.length, r = o > 2 ? e[2] : i;
r && Ia(e[0], e[1], r) && (o = 1);
for (;++n < o; ) for (var a = e[n], s = $c(a), c = -1, l = s.length; ++c < l; ) {
var u = s[c], f = t[u];
(f === i || Zs(f, re[u]) && !ce.call(t, u)) && (t[u] = a[u]);
}
return t;
}), xc = Fo(function(t) {
t.push(i, Zr);
return je(zc, i, t);
});
function Mc(t, e, n) {
var o = null == t ? i : ro(t, e);
return o === i ? n : o;
}
function Gc(t, e) {
return null != t && _a(t, e, uo);
}
var Fc = Gr(function(t, e, n) {
null != e && "function" != typeof e.toString && (e = fe.call(e));
t[e] = n;
}, hl(gl)), Hc = Gr(function(t, e, n) {
null != e && "function" != typeof e.toString && (e = fe.call(e));
ce.call(t, e) ? t[e].push(n) : t[e] = [ n ];
}, la), Yc = Fo(go);
function jc(t) {
return oc(t) ? Ri(t) : So(t);
}
function $c(t) {
return oc(t) ? Ri(t, !0) : Co(t);
}
var Vc = Nr(function(t, e, n) {
No(t, e, n);
}), zc = Nr(function(t, e, n, i) {
No(t, e, n, i);
}), Wc = ia(function(t, e) {
var n = {};
if (null == t) return n;
var i = !1;
e = Ke(e, function(e) {
e = lr(e, t);
i || (i = e.length > 1);
return e;
});
Tr(t, ra(t), n);
i && (n = Yi(n, u | f | h, qr));
for (var o = e.length; o--; ) er(n, e[o]);
return n;
});
var Xc = ia(function(t, e) {
return null == t ? {} : Lo(t, e);
});
function Jc(t, e) {
if (null == t) return {};
var n = Ke(ra(t), function(t) {
return [ t ];
});
e = la(e);
return Ao(t, n, function(t, n) {
return e(t, n[0]);
});
}
var Qc = Jr(jc), Kc = Jr($c);
function Zc(t) {
return null == t ? [] : bn(t, jc(t));
}
var qc = Ar(function(t, e, n) {
e = e.toLowerCase();
return t + (n ? tl(e) : e);
});
function tl(t) {
return cl(Oc(t).toLowerCase());
}
function el(t) {
return (t = Oc(t)) && t.replace(Wt, En).replace(me, "");
}
var nl = Ar(function(t, e, n) {
return t + (n ? "-" : "") + e.toLowerCase();
}), il = Ar(function(t, e, n) {
return t + (n ? " " : "") + e.toLowerCase();
}), ol = Lr("toLowerCase");
var rl = Ar(function(t, e, n) {
return t + (n ? "_" : "") + e.toLowerCase();
});
var al = Ar(function(t, e, n) {
return t + (n ? " " : "") + cl(e);
});
var sl = Ar(function(t, e, n) {
return t + (n ? " " : "") + e.toUpperCase();
}), cl = Lr("toUpperCase");
function ll(t, e, n) {
t = Oc(t);
return (e = n ? i : e) === i ? On(t) ? Vn(t) : rn(t) : t.match(e) || [];
}
var ul = Fo(function(t, e) {
try {
return je(t, i, e);
} catch (t) {
return cc(t) ? t : new Qt(t);
}
}), fl = ia(function(t, e) {
Ve(e, function(e) {
e = Xa(e);
Gi(t, e, Hs(t[e], t));
});
return t;
});
function hl(t) {
return function() {
return t;
};
}
var dl = xr(), pl = xr(!0);
function gl(t) {
return t;
}
function yl(t) {
return wo("function" == typeof t ? t : Yi(t, u));
}
var ml = Fo(function(t, e) {
return function(n) {
return go(n, t, e);
};
}), vl = Fo(function(t, e) {
return function(n) {
return go(t, n, e);
};
});
function _l(t, e, n) {
var i = jc(e), o = oo(e, i);
if (null == n && (!hc(e) || !o.length && i.length)) {
n = e;
e = t;
t = this;
o = oo(e, jc(e));
}
var r = !(hc(n) && "chain" in n && !n.chain), a = lc(t);
Ve(o, function(n) {
var i = e[n];
t[n] = i;
a && (t.prototype[n] = function() {
var e = this.__chain__;
if (r || e) {
var n = t(this.__wrapped__);
(n.__actions__ = Cr(this.__actions__)).push({
func: i,
args: arguments,
thisArg: t
});
n.__chain__ = e;
return n;
}
return i.apply(t, Ze([ this.value() ], arguments));
});
});
return t;
}
function bl() {}
var wl = Hr(Ke), Sl = Hr(We), Cl = Hr(en);
function Tl(t) {
return ka(t) ? hn(Xa(t)) : Uo(t);
}
var El = $r(), Il = $r(!0);
function kl() {
return [];
}
function Nl() {
return !1;
}
var Rl = Fr(function(t, e) {
return t + e;
}, 0), Ol = Wr("ceil"), Pl = Fr(function(t, e) {
return t / e;
}, 1), Ll = Wr("floor");
var Al = Fr(function(t, e) {
return t * e;
}, 1), Ul = Wr("round"), Dl = Fr(function(t, e) {
return t - e;
}, 0);
_i.after = function(t, e) {
if ("function" != typeof e) throw new ne(a);
t = Ic(t);
return function() {
if (--t < 1) return e.apply(this, arguments);
};
};
_i.ary = Gs;
_i.assign = Pc;
_i.assignIn = Lc;
_i.assignInWith = Ac;
_i.assignWith = Uc;
_i.at = Dc;
_i.before = Fs;
_i.bind = Hs;
_i.bindAll = fl;
_i.bindKey = Ys;
_i.castArray = function() {
if (!arguments.length) return [];
var t = arguments[0];
return nc(t) ? t : [ t ];
};
_i.chain = Ts;
_i.chunk = function(t, e, o) {
e = (o ? Ia(t, e, o) : e === i) ? 1 : Kn(Ic(e), 0);
var r = null == t ? 0 : t.length;
if (!r || e < 1) return [];
for (var a = 0, s = 0, c = n(Mn(r / e)); a < r; ) c[s++] = Wo(t, a, a += e);
return c;
};
_i.compact = function(t) {
for (var e = -1, n = null == t ? 0 : t.length, i = 0, o = []; ++e < n; ) {
var r = t[e];
r && (o[i++] = r);
}
return o;
};
_i.concat = function() {
var t = arguments.length;
if (!t) return [];
for (var e = n(t - 1), i = arguments[0], o = t; o--; ) e[o - 1] = arguments[o];
return Ze(nc(i) ? Cr(i) : [ i ], qi(e, 1));
};
_i.cond = function(t) {
var e = null == t ? 0 : t.length, n = la();
t = e ? Ke(t, function(t) {
if ("function" != typeof t[1]) throw new ne(a);
return [ n(t[0]), t[1] ];
}) : [];
return Fo(function(n) {
for (var i = -1; ++i < e; ) {
var o = t[i];
if (je(o[0], this, n)) return je(o[1], this, n);
}
});
};
_i.conforms = function(t) {
return ji(Yi(t, u));
};
_i.constant = hl;
_i.countBy = ks;
_i.create = function(t, e) {
var n = bi(t);
return null == e ? n : xi(n, e);
};
_i.curry = function t(e, n, o) {
var r = Qr(e, v, i, i, i, i, i, n = o ? i : n);
r.placeholder = t.placeholder;
return r;
};
_i.curryRight = function t(e, n, o) {
var r = Qr(e, _, i, i, i, i, i, n = o ? i : n);
r.placeholder = t.placeholder;
return r;
};
_i.debounce = js;
_i.defaults = Bc;
_i.defaultsDeep = xc;
_i.defer = $s;
_i.delay = Vs;
_i.difference = Za;
_i.differenceBy = qa;
_i.differenceWith = ts;
_i.drop = function(t, e, n) {
var o = null == t ? 0 : t.length;
return o ? Wo(t, (e = n || e === i ? 1 : Ic(e)) < 0 ? 0 : e, o) : [];
};
_i.dropRight = function(t, e, n) {
var o = null == t ? 0 : t.length;
return o ? Wo(t, 0, (e = o - (e = n || e === i ? 1 : Ic(e))) < 0 ? 0 : e) : [];
};
_i.dropRightWhile = function(t, e) {
return t && t.length ? ir(t, la(e, 3), !0, !0) : [];
};
_i.dropWhile = function(t, e) {
return t && t.length ? ir(t, la(e, 3), !0) : [];
};
_i.fill = function(t, e, n, i) {
var o = null == t ? 0 : t.length;
if (!o) return [];
if (n && "number" != typeof n && Ia(t, e, n)) {
n = 0;
i = o;
}
return Ki(t, e, n, i);
};
_i.filter = function(t, e) {
return (nc(t) ? Xe : Zi)(t, la(e, 3));
};
_i.flatMap = function(t, e) {
return qi(Ds(t, e), 1);
};
_i.flatMapDeep = function(t, e) {
return qi(Ds(t, e), P);
};
_i.flatMapDepth = function(t, e, n) {
n = n === i ? 1 : Ic(n);
return qi(Ds(t, e), n);
};
_i.flatten = is;
_i.flattenDeep = function(t) {
return null != t && t.length ? qi(t, P) : [];
};
_i.flattenDepth = function(t, e) {
return null != t && t.length ? qi(t, e = e === i ? 1 : Ic(e)) : [];
};
_i.flip = function(t) {
return Qr(t, T);
};
_i.flow = dl;
_i.flowRight = pl;
_i.fromPairs = function(t) {
for (var e = -1, n = null == t ? 0 : t.length, i = {}; ++e < n; ) {
var o = t[e];
i[o[0]] = o[1];
}
return i;
};
_i.functions = function(t) {
return null == t ? [] : oo(t, jc(t));
};
_i.functionsIn = function(t) {
return null == t ? [] : oo(t, $c(t));
};
_i.groupBy = Ls;
_i.initial = function(t) {
return null != t && t.length ? Wo(t, 0, -1) : [];
};
_i.intersection = rs;
_i.intersectionBy = as;
_i.intersectionWith = ss;
_i.invert = Fc;
_i.invertBy = Hc;
_i.invokeMap = As;
_i.iteratee = yl;
_i.keyBy = Us;
_i.keys = jc;
_i.keysIn = $c;
_i.map = Ds;
_i.mapKeys = function(t, e) {
var n = {};
e = la(e, 3);
no(t, function(t, i, o) {
Gi(n, e(t, i, o), t);
});
return n;
};
_i.mapValues = function(t, e) {
var n = {};
e = la(e, 3);
no(t, function(t, i, o) {
Gi(n, i, e(t, i, o));
});
return n;
};
_i.matches = function(t) {
return Io(Yi(t, u));
};
_i.matchesProperty = function(t, e) {
return ko(t, Yi(e, u));
};
_i.memoize = zs;
_i.merge = Vc;
_i.mergeWith = zc;
_i.method = ml;
_i.methodOf = vl;
_i.mixin = _l;
_i.negate = Ws;
_i.nthArg = function(t) {
t = Ic(t);
return Fo(function(e) {
return Oo(e, t);
});
};
_i.omit = Wc;
_i.omitBy = function(t, e) {
return Jc(t, Ws(la(e)));
};
_i.once = function(t) {
return Fs(2, t);
};
_i.orderBy = function(t, e, n, o) {
if (null == t) return [];
nc(e) || (e = null == e ? [] : [ e ]);
nc(n = o ? i : n) || (n = null == n ? [] : [ n ]);
return Po(t, e, n);
};
_i.over = wl;
_i.overArgs = Xs;
_i.overEvery = Sl;
_i.overSome = Cl;
_i.partial = Js;
_i.partialRight = Qs;
_i.partition = Bs;
_i.pick = Xc;
_i.pickBy = Jc;
_i.property = Tl;
_i.propertyOf = function(t) {
return function(e) {
return null == t ? i : ro(t, e);
};
};
_i.pull = ls;
_i.pullAll = us;
_i.pullAllBy = function(t, e, n) {
return t && t.length && e && e.length ? Do(t, e, la(n, 2)) : t;
};
_i.pullAllWith = function(t, e, n) {
return t && t.length && e && e.length ? Do(t, e, i, n) : t;
};
_i.pullAt = fs;
_i.range = El;
_i.rangeRight = Il;
_i.rearg = Ks;
_i.reject = function(t, e) {
return (nc(t) ? Xe : Zi)(t, Ws(la(e, 3)));
};
_i.remove = function(t, e) {
var n = [];
if (!t || !t.length) return n;
var i = -1, o = [], r = t.length;
e = la(e, 3);
for (;++i < r; ) {
var a = t[i];
if (e(a, i, t)) {
n.push(a);
o.push(i);
}
}
Bo(t, o);
return n;
};
_i.rest = function(t, e) {
if ("function" != typeof t) throw new ne(a);
return Fo(t, e = e === i ? e : Ic(e));
};
_i.reverse = hs;
_i.sampleSize = function(t, e, n) {
e = (n ? Ia(t, e, n) : e === i) ? 1 : Ic(e);
return (nc(t) ? Pi : Yo)(t, e);
};
_i.set = function(t, e, n) {
return null == t ? t : jo(t, e, n);
};
_i.setWith = function(t, e, n, o) {
o = "function" == typeof o ? o : i;
return null == t ? t : jo(t, e, n, o);
};
_i.shuffle = function(t) {
return (nc(t) ? Li : zo)(t);
};
_i.slice = function(t, e, n) {
var o = null == t ? 0 : t.length;
if (!o) return [];
if (n && "number" != typeof n && Ia(t, e, n)) {
e = 0;
n = o;
} else {
e = null == e ? 0 : Ic(e);
n = n === i ? o : Ic(n);
}
return Wo(t, e, n);
};
_i.sortBy = xs;
_i.sortedUniq = function(t) {
return t && t.length ? Ko(t) : [];
};
_i.sortedUniqBy = function(t, e) {
return t && t.length ? Ko(t, la(e, 2)) : [];
};
_i.split = function(t, e, n) {
n && "number" != typeof n && Ia(t, e, n) && (e = n = i);
return (n = n === i ? D : n >>> 0) ? (t = Oc(t)) && ("string" == typeof e || null != e && !mc(e)) && !(e = qo(e)) && Rn(t) ? fr(Hn(t), 0, n) : t.split(e, n) : [];
};
_i.spread = function(t, e) {
if ("function" != typeof t) throw new ne(a);
e = null == e ? 0 : Kn(Ic(e), 0);
return Fo(function(n) {
var i = n[e], o = fr(n, 0, e);
i && Ze(o, i);
return je(t, this, o);
});
};
_i.tail = function(t) {
var e = null == t ? 0 : t.length;
return e ? Wo(t, 1, e) : [];
};
_i.take = function(t, e, n) {
return t && t.length ? Wo(t, 0, (e = n || e === i ? 1 : Ic(e)) < 0 ? 0 : e) : [];
};
_i.takeRight = function(t, e, n) {
var o = null == t ? 0 : t.length;
return o ? Wo(t, (e = o - (e = n || e === i ? 1 : Ic(e))) < 0 ? 0 : e, o) : [];
};
_i.takeRightWhile = function(t, e) {
return t && t.length ? ir(t, la(e, 3), !1, !0) : [];
};
_i.takeWhile = function(t, e) {
return t && t.length ? ir(t, la(e, 3)) : [];
};
_i.tap = function(t, e) {
e(t);
return t;
};
_i.throttle = function(t, e, n) {
var i = !0, o = !0;
if ("function" != typeof t) throw new ne(a);
if (hc(n)) {
i = "leading" in n ? !!n.leading : i;
o = "trailing" in n ? !!n.trailing : o;
}
return js(t, e, {
leading: i,
maxWait: e,
trailing: o
});
};
_i.thru = Es;
_i.toArray = Tc;
_i.toPairs = Qc;
_i.toPairsIn = Kc;
_i.toPath = function(t) {
return nc(t) ? Ke(t, Xa) : bc(t) ? [ t ] : Cr(Wa(Oc(t)));
};
_i.toPlainObject = Rc;
_i.transform = function(t, e, n) {
var i = nc(t), o = i || ac(t) || wc(t);
e = la(e, 4);
if (null == n) {
var r = t && t.constructor;
n = o ? i ? new r() : [] : hc(t) && lc(r) ? bi(we(t)) : {};
}
(o ? Ve : no)(t, function(t, i, o) {
return e(n, t, i, o);
});
return n;
};
_i.unary = function(t) {
return Gs(t, 1);
};
_i.union = ds;
_i.unionBy = ps;
_i.unionWith = gs;
_i.uniq = function(t) {
return t && t.length ? tr(t) : [];
};
_i.uniqBy = function(t, e) {
return t && t.length ? tr(t, la(e, 2)) : [];
};
_i.uniqWith = function(t, e) {
e = "function" == typeof e ? e : i;
return t && t.length ? tr(t, i, e) : [];
};
_i.unset = function(t, e) {
return null == t || er(t, e);
};
_i.unzip = ys;
_i.unzipWith = ms;
_i.update = function(t, e, n) {
return null == t ? t : nr(t, e, cr(n));
};
_i.updateWith = function(t, e, n, o) {
o = "function" == typeof o ? o : i;
return null == t ? t : nr(t, e, cr(n), o);
};
_i.values = Zc;
_i.valuesIn = function(t) {
return null == t ? [] : bn(t, $c(t));
};
_i.without = vs;
_i.words = ll;
_i.wrap = function(t, e) {
return Js(cr(e), t);
};
_i.xor = _s;
_i.xorBy = bs;
_i.xorWith = ws;
_i.zip = Ss;
_i.zipObject = function(t, e) {
return ar(t || [], e || [], Ui);
};
_i.zipObjectDeep = function(t, e) {
return ar(t || [], e || [], jo);
};
_i.zipWith = Cs;
_i.entries = Qc;
_i.entriesIn = Kc;
_i.extend = Lc;
_i.extendWith = Ac;
_l(_i, _i);
_i.add = Rl;
_i.attempt = ul;
_i.camelCase = qc;
_i.capitalize = tl;
_i.ceil = Ol;
_i.clamp = function(t, e, n) {
if (n === i) {
n = e;
e = i;
}
n !== i && (n = (n = Nc(n)) == n ? n : 0);
e !== i && (e = (e = Nc(e)) == e ? e : 0);
return Hi(Nc(t), e, n);
};
_i.clone = function(t) {
return Yi(t, h);
};
_i.cloneDeep = function(t) {
return Yi(t, u | h);
};
_i.cloneDeepWith = function(t, e) {
return Yi(t, u | h, e = "function" == typeof e ? e : i);
};
_i.cloneWith = function(t, e) {
return Yi(t, h, e = "function" == typeof e ? e : i);
};
_i.conformsTo = function(t, e) {
return null == e || $i(t, e, jc(e));
};
_i.deburr = el;
_i.defaultTo = function(t, e) {
return null == t || t != t ? e : t;
};
_i.divide = Pl;
_i.endsWith = function(t, e, n) {
t = Oc(t);
e = qo(e);
var o = t.length, r = n = n === i ? o : Hi(Ic(n), 0, o);
return (n -= e.length) >= 0 && t.slice(n, r) == e;
};
_i.eq = Zs;
_i.escape = function(t) {
return (t = Oc(t)) && Ct.test(t) ? t.replace(wt, In) : t;
};
_i.escapeRegExp = function(t) {
return (t = Oc(t)) && Pt.test(t) ? t.replace(Ot, "\\$&") : t;
};
_i.every = function(t, e, n) {
var o = nc(t) ? We : Ji;
n && Ia(t, e, n) && (e = i);
return o(t, la(e, 3));
};
_i.find = Ns;
_i.findIndex = es;
_i.findKey = function(t, e) {
return an(t, la(e, 3), no);
};
_i.findLast = Rs;
_i.findLastIndex = ns;
_i.findLastKey = function(t, e) {
return an(t, la(e, 3), io);
};
_i.floor = Ll;
_i.forEach = Os;
_i.forEachRight = Ps;
_i.forIn = function(t, e) {
return null == t ? t : to(t, la(e, 3), $c);
};
_i.forInRight = function(t, e) {
return null == t ? t : eo(t, la(e, 3), $c);
};
_i.forOwn = function(t, e) {
return t && no(t, la(e, 3));
};
_i.forOwnRight = function(t, e) {
return t && io(t, la(e, 3));
};
_i.get = Mc;
_i.gt = qs;
_i.gte = tc;
_i.has = function(t, e) {
return null != t && _a(t, e, lo);
};
_i.hasIn = Gc;
_i.head = os;
_i.identity = gl;
_i.includes = function(t, e, n, i) {
t = oc(t) ? t : Zc(t);
n = n && !i ? Ic(n) : 0;
var o = t.length;
n < 0 && (n = Kn(o + n, 0));
return _c(t) ? n <= o && t.indexOf(e, n) > -1 : !!o && cn(t, e, n) > -1;
};
_i.indexOf = function(t, e, n) {
var i = null == t ? 0 : t.length;
if (!i) return -1;
var o = null == n ? 0 : Ic(n);
o < 0 && (o = Kn(i + o, 0));
return cn(t, e, o);
};
_i.inRange = function(t, e, n) {
e = Ec(e);
if (n === i) {
n = e;
e = 0;
} else n = Ec(n);
return fo(t = Nc(t), e, n);
};
_i.invoke = Yc;
_i.isArguments = ec;
_i.isArray = nc;
_i.isArrayBuffer = ic;
_i.isArrayLike = oc;
_i.isArrayLikeObject = rc;
_i.isBoolean = function(t) {
return !0 === t || !1 === t || dc(t) && so(t) == Y;
};
_i.isBuffer = ac;
_i.isDate = sc;
_i.isElement = function(t) {
return dc(t) && 1 === t.nodeType && !yc(t);
};
_i.isEmpty = function(t) {
if (null == t) return !0;
if (oc(t) && (nc(t) || "string" == typeof t || "function" == typeof t.splice || ac(t) || wc(t) || ec(t))) return !t.length;
var e = ya(t);
if (e == X || e == tt) return !t.size;
if (La(t)) return !So(t).length;
for (var n in t) if (ce.call(t, n)) return !1;
return !0;
};
_i.isEqual = function(t, e) {
return mo(t, e);
};
_i.isEqualWith = function(t, e, n) {
var o = (n = "function" == typeof n ? n : i) ? n(t, e) : i;
return o === i ? mo(t, e, i, n) : !!o;
};
_i.isError = cc;
_i.isFinite = function(t) {
return "number" == typeof t && Xn(t);
};
_i.isFunction = lc;
_i.isInteger = uc;
_i.isLength = fc;
_i.isMap = pc;
_i.isMatch = function(t, e) {
return t === e || _o(t, e, fa(e));
};
_i.isMatchWith = function(t, e, n) {
n = "function" == typeof n ? n : i;
return _o(t, e, fa(e), n);
};
_i.isNaN = function(t) {
return gc(t) && t != +t;
};
_i.isNative = function(t) {
if (Pa(t)) throw new Qt(r);
return bo(t);
};
_i.isNil = function(t) {
return null == t;
};
_i.isNull = function(t) {
return null === t;
};
_i.isNumber = gc;
_i.isObject = hc;
_i.isObjectLike = dc;
_i.isPlainObject = yc;
_i.isRegExp = mc;
_i.isSafeInteger = function(t) {
return uc(t) && t >= -L && t <= L;
};
_i.isSet = vc;
_i.isString = _c;
_i.isSymbol = bc;
_i.isTypedArray = wc;
_i.isUndefined = function(t) {
return t === i;
};
_i.isWeakMap = function(t) {
return dc(t) && ya(t) == ot;
};
_i.isWeakSet = function(t) {
return dc(t) && so(t) == rt;
};
_i.join = function(t, e) {
return null == t ? "" : Jn.call(t, e);
};
_i.kebabCase = nl;
_i.last = cs;
_i.lastIndexOf = function(t, e, n) {
var o = null == t ? 0 : t.length;
if (!o) return -1;
var r = o;
n !== i && (r = (r = Ic(n)) < 0 ? Kn(o + r, 0) : Zn(r, o - 1));
return e == e ? Gn(t, e, r) : sn(t, un, r, !0);
};
_i.lowerCase = il;
_i.lowerFirst = ol;
_i.lt = Sc;
_i.lte = Cc;
_i.max = function(t) {
return t && t.length ? Qi(t, gl, co) : i;
};
_i.maxBy = function(t, e) {
return t && t.length ? Qi(t, la(e, 2), co) : i;
};
_i.mean = function(t) {
return fn(t, gl);
};
_i.meanBy = function(t, e) {
return fn(t, la(e, 2));
};
_i.min = function(t) {
return t && t.length ? Qi(t, gl, To) : i;
};
_i.minBy = function(t, e) {
return t && t.length ? Qi(t, la(e, 2), To) : i;
};
_i.stubArray = kl;
_i.stubFalse = Nl;
_i.stubObject = function() {
return {};
};
_i.stubString = function() {
return "";
};
_i.stubTrue = function() {
return !0;
};
_i.multiply = Al;
_i.nth = function(t, e) {
return t && t.length ? Oo(t, Ic(e)) : i;
};
_i.noConflict = function() {
Pe._ === this && (Pe._ = de);
return this;
};
_i.noop = bl;
_i.now = Ms;
_i.pad = function(t, e, n) {
t = Oc(t);
var i = (e = Ic(e)) ? Fn(t) : 0;
if (!e || i >= e) return t;
var o = (e - i) / 2;
return Yr(jn(o), n) + t + Yr(Mn(o), n);
};
_i.padEnd = function(t, e, n) {
t = Oc(t);
var i = (e = Ic(e)) ? Fn(t) : 0;
return e && i < e ? t + Yr(e - i, n) : t;
};
_i.padStart = function(t, e, n) {
t = Oc(t);
var i = (e = Ic(e)) ? Fn(t) : 0;
return e && i < e ? Yr(e - i, n) + t : t;
};
_i.parseInt = function(t, e, n) {
n || null == e ? e = 0 : e && (e = +e);
return ti(Oc(t).replace(At, ""), e || 0);
};
_i.random = function(t, e, n) {
n && "boolean" != typeof n && Ia(t, e, n) && (e = n = i);
if (n === i) if ("boolean" == typeof e) {
n = e;
e = i;
} else if ("boolean" == typeof t) {
n = t;
t = i;
}
if (t === i && e === i) {
t = 0;
e = 1;
} else {
t = Ec(t);
if (e === i) {
e = t;
t = 0;
} else e = Ec(e);
}
if (t > e) {
var o = t;
t = e;
e = o;
}
if (n || t % 1 || e % 1) {
var r = ei();
return Zn(t + r * (e - t + ke("1e-" + ((r + "").length - 1))), e);
}
return xo(t, e);
};
_i.reduce = function(t, e, n) {
var i = nc(t) ? qe : pn, o = arguments.length < 3;
return i(t, la(e, 4), n, o, Wi);
};
_i.reduceRight = function(t, e, n) {
var i = nc(t) ? tn : pn, o = arguments.length < 3;
return i(t, la(e, 4), n, o, Xi);
};
_i.repeat = function(t, e, n) {
e = (n ? Ia(t, e, n) : e === i) ? 1 : Ic(e);
return Go(Oc(t), e);
};
_i.replace = function() {
var t = arguments, e = Oc(t[0]);
return t.length < 3 ? e : e.replace(t[1], t[2]);
};
_i.result = function(t, e, n) {
var o = -1, r = (e = lr(e, t)).length;
if (!r) {
r = 1;
t = i;
}
for (;++o < r; ) {
var a = null == t ? i : t[Xa(e[o])];
if (a === i) {
o = r;
a = n;
}
t = lc(a) ? a.call(t) : a;
}
return t;
};
_i.round = Ul;
_i.runInContext = t;
_i.sample = function(t) {
return (nc(t) ? Oi : Ho)(t);
};
_i.size = function(t) {
if (null == t) return 0;
if (oc(t)) return _c(t) ? Fn(t) : t.length;
var e = ya(t);
return e == X || e == tt ? t.size : So(t).length;
};
_i.snakeCase = rl;
_i.some = function(t, e, n) {
var o = nc(t) ? en : Xo;
n && Ia(t, e, n) && (e = i);
return o(t, la(e, 3));
};
_i.sortedIndex = function(t, e) {
return Jo(t, e);
};
_i.sortedIndexBy = function(t, e, n) {
return Qo(t, e, la(n, 2));
};
_i.sortedIndexOf = function(t, e) {
var n = null == t ? 0 : t.length;
if (n) {
var i = Jo(t, e);
if (i < n && Zs(t[i], e)) return i;
}
return -1;
};
_i.sortedLastIndex = function(t, e) {
return Jo(t, e, !0);
};
_i.sortedLastIndexBy = function(t, e, n) {
return Qo(t, e, la(n, 2), !0);
};
_i.sortedLastIndexOf = function(t, e) {
if (null != t && t.length) {
var n = Jo(t, e, !0) - 1;
if (Zs(t[n], e)) return n;
}
return -1;
};
_i.startCase = al;
_i.startsWith = function(t, e, n) {
t = Oc(t);
n = null == n ? 0 : Hi(Ic(n), 0, t.length);
e = qo(e);
return t.slice(n, n + e.length) == e;
};
_i.subtract = Dl;
_i.sum = function(t) {
return t && t.length ? yn(t, gl) : 0;
};
_i.sumBy = function(t, e) {
return t && t.length ? yn(t, la(e, 2)) : 0;
};
_i.template = function(t, e, n) {
var o = _i.templateSettings;
n && Ia(t, e, n) && (e = i);
t = Oc(t);
e = Ac({}, e, o, Kr);
var r, a, s = Ac({}, e.imports, o.imports, Kr), c = jc(s), l = bn(s, c), u = 0, f = e.interpolate || Xt, h = "__p += '", d = te((e.escape || Xt).source + "|" + f.source + "|" + (f === It ? Ft : Xt).source + "|" + (e.evaluate || Xt).source + "|$", "g"), p = "//# sourceURL=" + ("sourceURL" in e ? e.sourceURL : "lodash.templateSources[" + ++Ce + "]") + "\n";
t.replace(d, function(e, n, i, o, s, c) {
i || (i = o);
h += t.slice(u, c).replace(Jt, kn);
if (n) {
r = !0;
h += "' +\n__e(" + n + ") +\n'";
}
if (s) {
a = !0;
h += "';\n" + s + ";\n__p += '";
}
i && (h += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'");
u = c + e.length;
return e;
});
h += "';\n";
var g = e.variable;
g || (h = "with (obj) {\n" + h + "\n}\n");
h = (a ? h.replace(mt, "") : h).replace(vt, "$1").replace(_t, "$1;");
h = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (r ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
var y = ul(function() {
return Kt(c, p + "return " + h).apply(i, l);
});
y.source = h;
if (cc(y)) throw y;
return y;
};
_i.times = function(t, e) {
if ((t = Ic(t)) < 1 || t > L) return [];
var n = D, i = Zn(t, D);
e = la(e);
t -= D;
for (var o = mn(i, e); ++n < t; ) e(n);
return o;
};
_i.toFinite = Ec;
_i.toInteger = Ic;
_i.toLength = kc;
_i.toLower = function(t) {
return Oc(t).toLowerCase();
};
_i.toNumber = Nc;
_i.toSafeInteger = function(t) {
return t ? Hi(Ic(t), -L, L) : 0 === t ? t : 0;
};
_i.toString = Oc;
_i.toUpper = function(t) {
return Oc(t).toUpperCase();
};
_i.trim = function(t, e, n) {
if ((t = Oc(t)) && (n || e === i)) return t.replace(Lt, "");
if (!t || !(e = qo(e))) return t;
var o = Hn(t), r = Hn(e);
return fr(o, Sn(o, r), Cn(o, r) + 1).join("");
};
_i.trimEnd = function(t, e, n) {
if ((t = Oc(t)) && (n || e === i)) return t.replace(Ut, "");
if (!t || !(e = qo(e))) return t;
var o = Hn(t);
return fr(o, 0, Cn(o, Hn(e)) + 1).join("");
};
_i.trimStart = function(t, e, n) {
if ((t = Oc(t)) && (n || e === i)) return t.replace(At, "");
if (!t || !(e = qo(e))) return t;
var o = Hn(t);
return fr(o, Sn(o, Hn(e))).join("");
};
_i.truncate = function(t, e) {
var n = E, o = I;
if (hc(e)) {
var r = "separator" in e ? e.separator : r;
n = "length" in e ? Ic(e.length) : n;
o = "omission" in e ? qo(e.omission) : o;
}
var a = (t = Oc(t)).length;
if (Rn(t)) {
var s = Hn(t);
a = s.length;
}
if (n >= a) return t;
var c = n - Fn(o);
if (c < 1) return o;
var l = s ? fr(s, 0, c).join("") : t.slice(0, c);
if (r === i) return l + o;
s && (c += l.length - c);
if (mc(r)) {
if (t.slice(c).search(r)) {
var u, f = l;
r.global || (r = te(r.source, Oc(Ht.exec(r)) + "g"));
r.lastIndex = 0;
for (;u = r.exec(f); ) var h = u.index;
l = l.slice(0, h === i ? c : h);
}
} else if (t.indexOf(qo(r), c) != c) {
var d = l.lastIndexOf(r);
d > -1 && (l = l.slice(0, d));
}
return l + o;
};
_i.unescape = function(t) {
return (t = Oc(t)) && St.test(t) ? t.replace(bt, Yn) : t;
};
_i.uniqueId = function(t) {
var e = ++le;
return Oc(t) + e;
};
_i.upperCase = sl;
_i.upperFirst = cl;
_i.each = Os;
_i.eachRight = Ps;
_i.first = os;
_l(_i, function() {
var t = {};
no(_i, function(e, n) {
ce.call(_i.prototype, n) || (t[n] = e);
});
return t;
}(), {
chain: !1
});
_i.VERSION = "4.17.10";
Ve([ "bind", "bindKey", "curry", "curryRight", "partial", "partialRight" ], function(t) {
_i[t].placeholder = _i;
});
Ve([ "drop", "take" ], function(t, e) {
Ci.prototype[t] = function(n) {
n = n === i ? 1 : Kn(Ic(n), 0);
var o = this.__filtered__ && !e ? new Ci(this) : this.clone();
o.__filtered__ ? o.__takeCount__ = Zn(n, o.__takeCount__) : o.__views__.push({
size: Zn(n, D),
type: t + (o.__dir__ < 0 ? "Right" : "")
});
return o;
};
Ci.prototype[t + "Right"] = function(e) {
return this.reverse()[t](e).reverse();
};
});
Ve([ "filter", "map", "takeWhile" ], function(t, e) {
var n = e + 1, i = n == R || 3 == n;
Ci.prototype[t] = function(t) {
var e = this.clone();
e.__iteratees__.push({
iteratee: la(t, 3),
type: n
});
e.__filtered__ = e.__filtered__ || i;
return e;
};
});
Ve([ "head", "last" ], function(t, e) {
var n = "take" + (e ? "Right" : "");
Ci.prototype[t] = function() {
return this[n](1).value()[0];
};
});
Ve([ "initial", "tail" ], function(t, e) {
var n = "drop" + (e ? "" : "Right");
Ci.prototype[t] = function() {
return this.__filtered__ ? new Ci(this) : this[n](1);
};
});
Ci.prototype.compact = function() {
return this.filter(gl);
};
Ci.prototype.find = function(t) {
return this.filter(t).head();
};
Ci.prototype.findLast = function(t) {
return this.reverse().find(t);
};
Ci.prototype.invokeMap = Fo(function(t, e) {
return "function" == typeof t ? new Ci(this) : this.map(function(n) {
return go(n, t, e);
});
});
Ci.prototype.reject = function(t) {
return this.filter(Ws(la(t)));
};
Ci.prototype.slice = function(t, e) {
t = Ic(t);
var n = this;
if (n.__filtered__ && (t > 0 || e < 0)) return new Ci(n);
t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t));
e !== i && (n = (e = Ic(e)) < 0 ? n.dropRight(-e) : n.take(e - t));
return n;
};
Ci.prototype.takeRightWhile = function(t) {
return this.reverse().takeWhile(t).reverse();
};
Ci.prototype.toArray = function() {
return this.take(D);
};
no(Ci.prototype, function(t, e) {
var n = /^(?:filter|find|map|reject)|While$/.test(e), o = /^(?:head|last)$/.test(e), r = _i[o ? "take" + ("last" == e ? "Right" : "") : e], a = o || /^find/.test(e);
r && (_i.prototype[e] = function() {
var e = this.__wrapped__, s = o ? [ 1 ] : arguments, c = e instanceof Ci, l = s[0], u = c || nc(e), f = function(t) {
var e = r.apply(_i, Ze([ t ], s));
return o && h ? e[0] : e;
};
u && n && "function" == typeof l && 1 != l.length && (c = u = !1);
var h = this.__chain__, d = !!this.__actions__.length, p = a && !h, g = c && !d;
if (!a && u) {
e = g ? e : new Ci(this);
var y = t.apply(e, s);
y.__actions__.push({
func: Es,
args: [ f ],
thisArg: i
});
return new Si(y, h);
}
if (p && g) return t.apply(this, s);
y = this.thru(f);
return p ? o ? y.value()[0] : y.value() : y;
});
});
Ve([ "pop", "push", "shift", "sort", "splice", "unshift" ], function(t) {
var e = ie[t], n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(t);
_i.prototype[t] = function() {
var t = arguments;
if (i && !this.__chain__) {
var o = this.value();
return e.apply(nc(o) ? o : [], t);
}
return this[n](function(n) {
return e.apply(nc(n) ? n : [], t);
});
};
});
no(Ci.prototype, function(t, e) {
var n = _i[e];
if (n) {
var i = n.name + "";
(ui[i] || (ui[i] = [])).push({
name: e,
func: n
});
}
});
ui[Mr(i, y).name] = [ {
name: "wrapper",
func: i
} ];
Ci.prototype.clone = function() {
var t = new Ci(this.__wrapped__);
t.__actions__ = Cr(this.__actions__);
t.__dir__ = this.__dir__;
t.__filtered__ = this.__filtered__;
t.__iteratees__ = Cr(this.__iteratees__);
t.__takeCount__ = this.__takeCount__;
t.__views__ = Cr(this.__views__);
return t;
};
Ci.prototype.reverse = function() {
if (this.__filtered__) {
var t = new Ci(this);
t.__dir__ = -1;
t.__filtered__ = !0;
} else (t = this.clone()).__dir__ *= -1;
return t;
};
Ci.prototype.value = function() {
var t = this.__wrapped__.value(), e = this.__dir__, n = nc(t), i = e < 0, o = n ? t.length : 0, r = ma(0, o, this.__views__), a = r.start, s = r.end, c = s - a, l = i ? s : a - 1, u = this.__iteratees__, f = u.length, h = 0, d = Zn(c, this.__takeCount__);
if (!n || !i && o == c && d == c) return or(t, this.__actions__);
var p = [];
t: for (;c-- && h < d; ) {
for (var g = -1, y = t[l += e]; ++g < f; ) {
var m = u[g], v = m.iteratee, _ = m.type, b = v(y);
if (_ == O) y = b; else if (!b) {
if (_ == R) continue t;
break t;
}
}
p[h++] = y;
}
return p;
};
_i.prototype.at = Is;
_i.prototype.chain = function() {
return Ts(this);
};
_i.prototype.commit = function() {
return new Si(this.value(), this.__chain__);
};
_i.prototype.next = function() {
this.__values__ === i && (this.__values__ = Tc(this.value()));
var t = this.__index__ >= this.__values__.length;
return {
done: t,
value: t ? i : this.__values__[this.__index__++]
};
};
_i.prototype.plant = function(t) {
for (var e, n = this; n instanceof wi; ) {
var o = Ka(n);
o.__index__ = 0;
o.__values__ = i;
e ? r.__wrapped__ = o : e = o;
var r = o;
n = n.__wrapped__;
}
r.__wrapped__ = t;
return e;
};
_i.prototype.reverse = function() {
var t = this.__wrapped__;
if (t instanceof Ci) {
var e = t;
this.__actions__.length && (e = new Ci(this));
(e = e.reverse()).__actions__.push({
func: Es,
args: [ hs ],
thisArg: i
});
return new Si(e, this.__chain__);
}
return this.thru(hs);
};
_i.prototype.toJSON = _i.prototype.valueOf = _i.prototype.value = function() {
return or(this.__wrapped__, this.__actions__);
};
_i.prototype.first = _i.prototype.head;
Ae && (_i.prototype[Ae] = function() {
return this;
});
return _i;
}();
if ("function" == typeof define && "object" == typeof define.amd && define.amd) {
Pe._ = zn;
define(function() {
return zn;
});
} else if (Ae) {
(Ae.exports = zn)._ = zn;
Le._ = zn;
} else Pe._ = zn;
}).call(this);
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {} ],
10: [ function(t, e, n) {
n.encode = t("./encode").encode;
n.decode = t("./decode").decode;
n.Encoder = t("./encoder").Encoder;
n.Decoder = t("./decoder").Decoder;
n.createCodec = t("./ext").createCodec;
n.codec = t("./codec").codec;
}, {
"./codec": 19,
"./decode": 21,
"./decoder": 22,
"./encode": 24,
"./encoder": 25,
"./ext": 29
} ],
11: [ function(t, e, n) {
(function(t) {
e.exports = n("undefined" != typeof t && t) || n(this.Buffer) || n("undefined" != typeof window && window.Buffer) || this.Buffer;
function n(t) {
return t && t.isBuffer && t;
}
}).call(this, t("buffer").Buffer);
}, {
buffer: 2
} ],
12: [ function(t, e, n) {
n.copy = function(t, e, n, i) {
var o;
n || (n = 0);
i || 0 === i || (i = this.length);
e || (e = 0);
var r = i - n;
if (t === this && n < e && e < i) for (o = r - 1; o >= 0; o--) t[o + e] = this[o + n]; else for (o = 0; o < r; o++) t[o + e] = this[o + n];
return r;
};
n.toString = function(t, e, n) {
var i = 0 | e;
n || (n = this.length);
var o = "", r = 0;
for (;i < n; ) if ((r = this[i++]) < 128) o += String.fromCharCode(r); else {
192 == (224 & r) ? r = (31 & r) << 6 | 63 & this[i++] : 224 == (240 & r) ? r = (15 & r) << 12 | (63 & this[i++]) << 6 | 63 & this[i++] : 240 == (248 & r) && (r = (7 & r) << 18 | (63 & this[i++]) << 12 | (63 & this[i++]) << 6 | 63 & this[i++]);
if (r >= 65536) {
r -= 65536;
o += String.fromCharCode(55296 + (r >>> 10), 56320 + (1023 & r));
} else o += String.fromCharCode(r);
}
return o;
};
n.write = function(t, e) {
var n = e || (e |= 0), i = t.length, o = 0, r = 0;
for (;r < i; ) if ((o = t.charCodeAt(r++)) < 128) this[n++] = o; else if (o < 2048) {
this[n++] = 192 | o >>> 6;
this[n++] = 128 | 63 & o;
} else if (o < 55296 || o > 57343) {
this[n++] = 224 | o >>> 12;
this[n++] = 128 | o >>> 6 & 63;
this[n++] = 128 | 63 & o;
} else {
o = 65536 + (o - 55296 << 10 | t.charCodeAt(r++) - 56320);
this[n++] = 240 | o >>> 18;
this[n++] = 128 | o >>> 12 & 63;
this[n++] = 128 | o >>> 6 & 63;
this[n++] = 128 | 63 & o;
}
return n - e;
};
}, {} ],
13: [ function(t, e, n) {
var i = t("./bufferish");
(n = e.exports = o(0)).alloc = o;
n.concat = i.concat;
n.from = function(t) {
if (!i.isBuffer(t) && i.isView(t)) t = i.Uint8Array.from(t); else if (i.isArrayBuffer(t)) t = new Uint8Array(t); else {
if ("string" == typeof t) return i.from.call(n, t);
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
}
return Array.prototype.slice.call(t);
};
function o(t) {
return new Array(t);
}
}, {
"./bufferish": 17
} ],
14: [ function(t, e, n) {
var i = t("./bufferish"), o = i.global;
(n = e.exports = i.hasBuffer ? r(0) : []).alloc = i.hasBuffer && o.alloc || r;
n.concat = i.concat;
n.from = function(t) {
if (!i.isBuffer(t) && i.isView(t)) t = i.Uint8Array.from(t); else if (i.isArrayBuffer(t)) t = new Uint8Array(t); else {
if ("string" == typeof t) return i.from.call(n, t);
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
}
return o.from && 1 !== o.from.length ? o.from(t) : new o(t);
};
function r(t) {
return new o(t);
}
}, {
"./bufferish": 17
} ],
15: [ function(t, e, n) {
var i = t("./buffer-lite");
n.copy = c;
n.slice = l;
n.toString = function(t, e, n) {
return (!a && o.isBuffer(this) ? this.toString : i.toString).apply(this, arguments);
};
n.write = function(t) {
return function() {
return (this[t] || i[t]).apply(this, arguments);
};
}("write");
var o = t("./bufferish"), r = o.global, a = o.hasBuffer && "TYPED_ARRAY_SUPPORT" in r, s = a && !r.TYPED_ARRAY_SUPPORT;
function c(t, e, n, r) {
var a = o.isBuffer(this), c = o.isBuffer(t);
if (a && c) return this.copy(t, e, n, r);
if (s || a || c || !o.isView(this) || !o.isView(t)) return i.copy.call(this, t, e, n, r);
var u = n || null != r ? l.call(this, n, r) : this;
t.set(u, e);
return u.length;
}
function l(t, e) {
var n = this.slice || !s && this.subarray;
if (n) return n.call(this, t, e);
var i = o.alloc.call(this, e - t);
c.call(this, i, 0, t, e);
return i;
}
}, {
"./buffer-lite": 12,
"./bufferish": 17
} ],
16: [ function(t, e, n) {
var i = t("./bufferish");
(n = e.exports = i.hasArrayBuffer ? o(0) : []).alloc = o;
n.concat = i.concat;
n.from = function(t) {
if (i.isView(t)) {
var e = t.byteOffset, o = t.byteLength;
(t = t.buffer).byteLength !== o && (t.slice ? t = t.slice(e, e + o) : (t = new Uint8Array(t)).byteLength !== o && (t = Array.prototype.slice.call(t, e, e + o)));
} else {
if ("string" == typeof t) return i.from.call(n, t);
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
}
return new Uint8Array(t);
};
function o(t) {
return new Uint8Array(t);
}
}, {
"./bufferish": 17
} ],
17: [ function(t, e, n) {
var i = n.global = t("./buffer-global"), o = n.hasBuffer = i && !!i.isBuffer, r = n.hasArrayBuffer = "undefined" != typeof ArrayBuffer, a = n.isArray = t("isarray");
n.isArrayBuffer = r ? function(t) {
return t instanceof ArrayBuffer || p(t);
} : m;
var s = n.isBuffer = o ? i.isBuffer : m, c = n.isView = r ? ArrayBuffer.isView || v("ArrayBuffer", "buffer") : m;
n.alloc = d;
n.concat = function(t, e) {
if (!e) {
e = 0;
Array.prototype.forEach.call(t, function(t) {
e += t.length;
});
}
var i = this !== n && this || t[0], o = d.call(i, e), r = 0;
Array.prototype.forEach.call(t, function(t) {
r += h.copy.call(t, o, r);
});
return o;
};
n.from = function(t) {
return "string" == typeof t ? g.call(this, t) : y(this).from(t);
};
var l = n.Array = t("./bufferish-array"), u = n.Buffer = t("./bufferish-buffer"), f = n.Uint8Array = t("./bufferish-uint8array"), h = n.prototype = t("./bufferish-proto");
function d(t) {
return y(this).alloc(t);
}
var p = v("ArrayBuffer");
function g(t) {
var e = 3 * t.length, n = d.call(this, e), i = h.write.call(n, t);
e !== i && (n = h.slice.call(n, 0, i));
return n;
}
function y(t) {
return s(t) ? u : c(t) ? f : a(t) ? l : o ? u : r ? f : l;
}
function m() {
return !1;
}
function v(t, e) {
t = "[object " + t + "]";
return function(n) {
return null != n && {}.toString.call(e ? n[e] : n) === t;
};
}
}, {
"./buffer-global": 11,
"./bufferish-array": 13,
"./bufferish-buffer": 14,
"./bufferish-proto": 15,
"./bufferish-uint8array": 16,
isarray: 8
} ],
18: [ function(t, e, n) {
var i = t("isarray");
n.createCodec = c;
n.install = function(t) {
for (var e in t) r.prototype[e] = a(r.prototype[e], t[e]);
};
n.filter = function(t) {
return i(t) ? s(t) : t;
};
var o = t("./bufferish");
function r(t) {
if (!(this instanceof r)) return new r(t);
this.options = t;
this.init();
}
r.prototype.init = function() {
var t = this.options;
t && t.uint8array && (this.bufferish = o.Uint8Array);
return this;
};
function a(t, e) {
return t && e ? function() {
t.apply(this, arguments);
return e.apply(this, arguments);
} : t || e;
}
function s(t) {
t = t.slice();
return function(n) {
return t.reduce(e, n);
};
function e(t, e) {
return e(t);
}
}
function c(t) {
return new r(t);
}
n.preset = c({
preset: !0
});
}, {
"./bufferish": 17,
isarray: 8
} ],
19: [ function(t, e, n) {
t("./read-core");
t("./write-core");
n.codec = {
preset: t("./codec-base").preset
};
}, {
"./codec-base": 18,
"./read-core": 31,
"./write-core": 34
} ],
20: [ function(t, e, n) {
n.DecodeBuffer = o;
var i = t("./read-core").preset;
t("./flex-buffer").FlexDecoder.mixin(o.prototype);
function o(t) {
if (!(this instanceof o)) return new o(t);
if (t) {
this.options = t;
if (t.codec) {
var e = this.codec = t.codec;
e.bufferish && (this.bufferish = e.bufferish);
}
}
}
o.prototype.codec = i;
o.prototype.fetch = function() {
return this.codec.decode(this);
};
}, {
"./flex-buffer": 30,
"./read-core": 31
} ],
21: [ function(t, e, n) {
n.decode = function(t, e) {
var n = new i(e);
n.write(t);
return n.read();
};
var i = t("./decode-buffer").DecodeBuffer;
}, {
"./decode-buffer": 20
} ],
22: [ function(t, e, n) {
n.Decoder = r;
var i = t("event-lite"), o = t("./decode-buffer").DecodeBuffer;
function r(t) {
if (!(this instanceof r)) return new r(t);
o.call(this, t);
}
r.prototype = new o();
i.mixin(r.prototype);
r.prototype.decode = function(t) {
arguments.length && this.write(t);
this.flush();
};
r.prototype.push = function(t) {
this.emit("data", t);
};
r.prototype.end = function(t) {
this.decode(t);
this.emit("end");
};
}, {
"./decode-buffer": 20,
"event-lite": 5
} ],
23: [ function(t, e, n) {
n.EncodeBuffer = o;
var i = t("./write-core").preset;
t("./flex-buffer").FlexEncoder.mixin(o.prototype);
function o(t) {
if (!(this instanceof o)) return new o(t);
if (t) {
this.options = t;
if (t.codec) {
var e = this.codec = t.codec;
e.bufferish && (this.bufferish = e.bufferish);
}
}
}
o.prototype.codec = i;
o.prototype.write = function(t) {
this.codec.encode(this, t);
};
}, {
"./flex-buffer": 30,
"./write-core": 34
} ],
24: [ function(t, e, n) {
n.encode = function(t, e) {
var n = new i(e);
n.write(t);
return n.read();
};
var i = t("./encode-buffer").EncodeBuffer;
}, {
"./encode-buffer": 23
} ],
25: [ function(t, e, n) {
n.Encoder = r;
var i = t("event-lite"), o = t("./encode-buffer").EncodeBuffer;
function r(t) {
if (!(this instanceof r)) return new r(t);
o.call(this, t);
}
r.prototype = new o();
i.mixin(r.prototype);
r.prototype.encode = function(t) {
this.write(t);
this.emit("data", this.read());
};
r.prototype.end = function(t) {
arguments.length && this.encode(t);
this.flush();
this.emit("end");
};
}, {
"./encode-buffer": 23,
"event-lite": 5
} ],
26: [ function(t, e, n) {
n.ExtBuffer = function t(e, n) {
if (!(this instanceof t)) return new t(e, n);
this.buffer = i.from(e);
this.type = n;
};
var i = t("./bufferish");
}, {
"./bufferish": 17
} ],
27: [ function(t, e, n) {
n.setExtPackers = function(t) {
t.addExtPacker(14, Error, [ f, c ]);
t.addExtPacker(1, EvalError, [ f, c ]);
t.addExtPacker(2, RangeError, [ f, c ]);
t.addExtPacker(3, ReferenceError, [ f, c ]);
t.addExtPacker(4, SyntaxError, [ f, c ]);
t.addExtPacker(5, TypeError, [ f, c ]);
t.addExtPacker(6, URIError, [ f, c ]);
t.addExtPacker(10, RegExp, [ u, c ]);
t.addExtPacker(11, Boolean, [ l, c ]);
t.addExtPacker(12, String, [ l, c ]);
t.addExtPacker(13, Date, [ Number, c ]);
t.addExtPacker(15, Number, [ l, c ]);
if ("undefined" != typeof Uint8Array) {
t.addExtPacker(17, Int8Array, a);
t.addExtPacker(18, Uint8Array, a);
t.addExtPacker(19, Int16Array, a);
t.addExtPacker(20, Uint16Array, a);
t.addExtPacker(21, Int32Array, a);
t.addExtPacker(22, Uint32Array, a);
t.addExtPacker(23, Float32Array, a);
"undefined" != typeof Float64Array && t.addExtPacker(24, Float64Array, a);
"undefined" != typeof Uint8ClampedArray && t.addExtPacker(25, Uint8ClampedArray, a);
t.addExtPacker(26, ArrayBuffer, a);
t.addExtPacker(29, DataView, a);
}
o.hasBuffer && t.addExtPacker(27, r, o.from);
};
var i, o = t("./bufferish"), r = o.global, a = o.Uint8Array.from, s = {
name: 1,
message: 1,
stack: 1,
columnNumber: 1,
fileName: 1,
lineNumber: 1
};
function c(e) {
i || (i = t("./encode").encode);
return i(e);
}
function l(t) {
return t.valueOf();
}
function u(t) {
(t = RegExp.prototype.toString.call(t).split("/")).shift();
var e = [ t.pop() ];
e.unshift(t.join("/"));
return e;
}
function f(t) {
var e = {};
for (var n in s) e[n] = t[n];
return e;
}
}, {
"./bufferish": 17,
"./encode": 24
} ],
28: [ function(t, e, n) {
n.setExtUnpackers = function(t) {
t.addExtUnpacker(14, [ s, l(Error) ]);
t.addExtUnpacker(1, [ s, l(EvalError) ]);
t.addExtUnpacker(2, [ s, l(RangeError) ]);
t.addExtUnpacker(3, [ s, l(ReferenceError) ]);
t.addExtUnpacker(4, [ s, l(SyntaxError) ]);
t.addExtUnpacker(5, [ s, l(TypeError) ]);
t.addExtUnpacker(6, [ s, l(URIError) ]);
t.addExtUnpacker(10, [ s, c ]);
t.addExtUnpacker(11, [ s, u(Boolean) ]);
t.addExtUnpacker(12, [ s, u(String) ]);
t.addExtUnpacker(13, [ s, u(Date) ]);
t.addExtUnpacker(15, [ s, u(Number) ]);
if ("undefined" != typeof Uint8Array) {
t.addExtUnpacker(17, u(Int8Array));
t.addExtUnpacker(18, u(Uint8Array));
t.addExtUnpacker(19, [ f, u(Int16Array) ]);
t.addExtUnpacker(20, [ f, u(Uint16Array) ]);
t.addExtUnpacker(21, [ f, u(Int32Array) ]);
t.addExtUnpacker(22, [ f, u(Uint32Array) ]);
t.addExtUnpacker(23, [ f, u(Float32Array) ]);
"undefined" != typeof Float64Array && t.addExtUnpacker(24, [ f, u(Float64Array) ]);
"undefined" != typeof Uint8ClampedArray && t.addExtUnpacker(25, u(Uint8ClampedArray));
t.addExtUnpacker(26, f);
t.addExtUnpacker(29, [ f, u(DataView) ]);
}
o.hasBuffer && t.addExtUnpacker(27, u(r));
};
var i, o = t("./bufferish"), r = o.global, a = {
name: 1,
message: 1,
stack: 1,
columnNumber: 1,
fileName: 1,
lineNumber: 1
};
function s(e) {
i || (i = t("./decode").decode);
return i(e);
}
function c(t) {
return RegExp.apply(null, t);
}
function l(t) {
return function(e) {
var n = new t();
for (var i in a) n[i] = e[i];
return n;
};
}
function u(t) {
return function(e) {
return new t(e);
};
}
function f(t) {
return new Uint8Array(t).buffer;
}
}, {
"./bufferish": 17,
"./decode": 21
} ],
29: [ function(t, e, n) {
t("./read-core");
t("./write-core");
n.createCodec = t("./codec-base").createCodec;
}, {
"./codec-base": 18,
"./read-core": 31,
"./write-core": 34
} ],
30: [ function(t, e, n) {
n.FlexDecoder = s;
n.FlexEncoder = c;
var i = t("./bufferish"), o = 2048, r = 65536, a = "BUFFER_SHORTAGE";
function s() {
if (!(this instanceof s)) return new s();
}
function c() {
if (!(this instanceof c)) return new c();
}
s.mixin = p(function() {
return {
bufferish: i,
write: function(t) {
var e = this.offset ? i.prototype.slice.call(this.buffer, this.offset) : this.buffer;
this.buffer = e ? t ? this.bufferish.concat([ e, t ]) : e : t;
this.offset = 0;
},
fetch: u,
flush: function() {
for (;this.offset < this.buffer.length; ) {
var t, e = this.offset;
try {
t = this.fetch();
} catch (t) {
if (t && t.message != a) throw t;
this.offset = e;
break;
}
this.push(t);
}
},
push: h,
pull: d,
read: f,
reserve: function(t) {
var e = this.offset, n = e + t;
if (n > this.buffer.length) throw new Error(a);
this.offset = n;
return e;
},
offset: 0
};
}());
s.mixin(s.prototype);
c.mixin = p(function() {
return {
bufferish: i,
write: l,
fetch: function() {
var t = this.start;
if (t < this.offset) {
var e = this.start = this.offset;
return i.prototype.slice.call(this.buffer, t, e);
}
},
flush: function() {
for (;this.start < this.offset; ) {
var t = this.fetch();
t && this.push(t);
}
},
push: h,
pull: function() {
var t = this.buffers || (this.buffers = []), e = t.length > 1 ? this.bufferish.concat(t) : t[0];
t.length = 0;
return e;
},
read: f,
reserve: function(t) {
var e = 0 | t;
if (this.buffer) {
var n = this.buffer.length, i = 0 | this.offset, o = i + e;
if (o < n) {
this.offset = o;
return i;
}
this.flush();
t = Math.max(t, Math.min(2 * n, this.maxBufferSize));
}
t = Math.max(t, this.minBufferSize);
this.buffer = this.bufferish.alloc(t);
this.start = 0;
this.offset = e;
return 0;
},
send: function(t) {
var e = t.length;
if (e > this.minBufferSize) {
this.flush();
this.push(t);
} else {
var n = this.reserve(e);
i.prototype.copy.call(t, this.buffer, n);
}
},
maxBufferSize: r,
minBufferSize: o,
offset: 0,
start: 0
};
}());
c.mixin(c.prototype);
function l() {
throw new Error("method not implemented: write()");
}
function u() {
throw new Error("method not implemented: fetch()");
}
function f() {
if (!(this.buffers && this.buffers.length)) return this.fetch();
this.flush();
return this.pull();
}
function h(t) {
(this.buffers || (this.buffers = [])).push(t);
}
function d() {
return (this.buffers || (this.buffers = [])).shift();
}
function p(t) {
return function(e) {
for (var n in t) e[n] = t[n];
return e;
};
}
}, {
"./bufferish": 17
} ],
31: [ function(t, e, n) {
var i = t("./ext-buffer").ExtBuffer, o = t("./ext-unpacker"), r = t("./read-format").readUint8, a = t("./read-token"), s = t("./codec-base");
s.install({
addExtUnpacker: function(t, e) {
(this.extUnpackers || (this.extUnpackers = []))[t] = s.filter(e);
},
getExtUnpacker: function(t) {
return (this.extUnpackers || (this.extUnpackers = []))[t] || function(e) {
return new i(e, t);
};
},
init: l
});
n.preset = l.call(s.preset);
function c(t) {
var e = a.getReadToken(t);
return function(t) {
var n = r(t), i = e[n];
if (!i) throw new Error("Invalid type: " + (n ? "0x" + n.toString(16) : n));
return i(t);
};
}
function l() {
var t = this.options;
this.decode = c(t);
t && t.preset && o.setExtUnpackers(this);
return this;
}
}, {
"./codec-base": 18,
"./ext-buffer": 26,
"./ext-unpacker": 28,
"./read-format": 32,
"./read-token": 33
} ],
32: [ function(t, e, n) {
var i = t("ieee754"), o = t("int64-buffer"), r = o.Uint64BE, a = o.Int64BE;
n.getReadFormat = function(t) {
var e = s.hasArrayBuffer && t && t.binarraybuffer, n = t && t.int64;
return {
map: l && t && t.usemap ? h : f,
array: d,
str: p,
bin: e ? y : g,
ext: m,
uint8: v,
uint16: b,
uint32: S,
uint64: T(8, n ? k : E),
int8: _,
int16: w,
int32: C,
int64: T(8, n ? N : I),
float32: T(4, R),
float64: T(8, O)
};
};
n.readUint8 = v;
var s = t("./bufferish"), c = t("./bufferish-proto"), l = "undefined" != typeof Map, u = !0;
function f(t, e) {
var n, i = {}, o = new Array(e), r = new Array(e), a = t.codec.decode;
for (n = 0; n < e; n++) {
o[n] = a(t);
r[n] = a(t);
}
for (n = 0; n < e; n++) i[o[n]] = r[n];
return i;
}
function h(t, e) {
var n, i = new Map(), o = new Array(e), r = new Array(e), a = t.codec.decode;
for (n = 0; n < e; n++) {
o[n] = a(t);
r[n] = a(t);
}
for (n = 0; n < e; n++) i.set(o[n], r[n]);
return i;
}
function d(t, e) {
for (var n = new Array(e), i = t.codec.decode, o = 0; o < e; o++) n[o] = i(t);
return n;
}
function p(t, e) {
var n = t.reserve(e), i = n + e;
return c.toString.call(t.buffer, "utf-8", n, i);
}
function g(t, e) {
var n = t.reserve(e), i = n + e, o = c.slice.call(t.buffer, n, i);
return s.from(o);
}
function y(t, e) {
var n = t.reserve(e), i = n + e, o = c.slice.call(t.buffer, n, i);
return s.Uint8Array.from(o).buffer;
}
function m(t, e) {
var n = t.reserve(e + 1), i = t.buffer[n++], o = n + e, r = t.codec.getExtUnpacker(i);
if (!r) throw new Error("Invalid ext type: " + (i ? "0x" + i.toString(16) : i));
return r(c.slice.call(t.buffer, n, o));
}
function v(t) {
var e = t.reserve(1);
return t.buffer[e];
}
function _(t) {
var e = t.reserve(1), n = t.buffer[e];
return 128 & n ? n - 256 : n;
}
function b(t) {
var e = t.reserve(2), n = t.buffer;
return n[e++] << 8 | n[e];
}
function w(t) {
var e = t.reserve(2), n = t.buffer, i = n[e++] << 8 | n[e];
return 32768 & i ? i - 65536 : i;
}
function S(t) {
var e = t.reserve(4), n = t.buffer;
return 16777216 * n[e++] + (n[e++] << 16) + (n[e++] << 8) + n[e];
}
function C(t) {
var e = t.reserve(4), n = t.buffer;
return n[e++] << 24 | n[e++] << 16 | n[e++] << 8 | n[e];
}
function T(t, e) {
return function(n) {
var i = n.reserve(t);
return e.call(n.buffer, i, u);
};
}
function E(t) {
return new r(this, t).toNumber();
}
function I(t) {
return new a(this, t).toNumber();
}
function k(t) {
return new r(this, t);
}
function N(t) {
return new a(this, t);
}
function R(t) {
return i.read(this, t, !1, 23, 4);
}
function O(t) {
return i.read(this, t, !1, 52, 8);
}
}, {
"./bufferish": 17,
"./bufferish-proto": 15,
ieee754: 6,
"int64-buffer": 7
} ],
33: [ function(t, e, n) {
var i = t("./read-format");
n.getReadToken = function(t) {
var e = i.getReadFormat(t);
return t && t.useraw ? r(e) : o(e);
};
function o(t) {
var e, n = new Array(256);
for (e = 0; e <= 127; e++) n[e] = a(e);
for (e = 128; e <= 143; e++) n[e] = c(e - 128, t.map);
for (e = 144; e <= 159; e++) n[e] = c(e - 144, t.array);
for (e = 160; e <= 191; e++) n[e] = c(e - 160, t.str);
n[192] = a(null);
n[193] = null;
n[194] = a(!1);
n[195] = a(!0);
n[196] = s(t.uint8, t.bin);
n[197] = s(t.uint16, t.bin);
n[198] = s(t.uint32, t.bin);
n[199] = s(t.uint8, t.ext);
n[200] = s(t.uint16, t.ext);
n[201] = s(t.uint32, t.ext);
n[202] = t.float32;
n[203] = t.float64;
n[204] = t.uint8;
n[205] = t.uint16;
n[206] = t.uint32;
n[207] = t.uint64;
n[208] = t.int8;
n[209] = t.int16;
n[210] = t.int32;
n[211] = t.int64;
n[212] = c(1, t.ext);
n[213] = c(2, t.ext);
n[214] = c(4, t.ext);
n[215] = c(8, t.ext);
n[216] = c(16, t.ext);
n[217] = s(t.uint8, t.str);
n[218] = s(t.uint16, t.str);
n[219] = s(t.uint32, t.str);
n[220] = s(t.uint16, t.array);
n[221] = s(t.uint32, t.array);
n[222] = s(t.uint16, t.map);
n[223] = s(t.uint32, t.map);
for (e = 224; e <= 255; e++) n[e] = a(e - 256);
return n;
}
function r(t) {
var e, n = o(t).slice();
n[217] = n[196];
n[218] = n[197];
n[219] = n[198];
for (e = 160; e <= 191; e++) n[e] = c(e - 160, t.bin);
return n;
}
function a(t) {
return function() {
return t;
};
}
function s(t, e) {
return function(n) {
var i = t(n);
return e(n, i);
};
}
function c(t, e) {
return function(n) {
return e(n, t);
};
}
}, {
"./read-format": 32
} ],
34: [ function(t, e, n) {
var i = t("./ext-buffer").ExtBuffer, o = t("./ext-packer"), r = t("./write-type"), a = t("./codec-base");
a.install({
addExtPacker: function(t, e, n) {
n = a.filter(n);
var o = e.name;
if (o && "Object" !== o) {
var r = this.extPackers || (this.extPackers = {});
r[o] = c;
} else {
var s = this.extEncoderList || (this.extEncoderList = []);
s.unshift([ e, c ]);
}
function c(e) {
n && (e = n(e));
return new i(e, t);
}
},
getExtPacker: function(t) {
var e = this.extPackers || (this.extPackers = {}), n = t.constructor, i = n && n.name && e[n.name];
if (i) return i;
for (var o = this.extEncoderList || (this.extEncoderList = []), r = o.length, a = 0; a < r; a++) {
var s = o[a];
if (n === s[0]) return s[1];
}
},
init: c
});
n.preset = c.call(a.preset);
function s(t) {
var e = r.getWriteType(t);
return function(t, n) {
var i = e[typeof n];
if (!i) throw new Error('Unsupported type "' + typeof n + '": ' + n);
i(t, n);
};
}
function c() {
var t = this.options;
this.encode = s(t);
t && t.preset && o.setExtPackers(this);
return this;
}
}, {
"./codec-base": 18,
"./ext-buffer": 26,
"./ext-packer": 27,
"./write-type": 36
} ],
35: [ function(t, e, n) {
var i = t("ieee754"), o = t("int64-buffer"), r = o.Uint64BE, a = o.Int64BE, s = t("./write-uint8").uint8, c = t("./bufferish"), l = c.global, u = c.hasBuffer && "TYPED_ARRAY_SUPPORT" in l && !l.TYPED_ARRAY_SUPPORT, f = c.hasBuffer && l.prototype || {};
n.getWriteToken = function(t) {
return t && t.uint8array ? h() : u || c.hasBuffer && t && t.safe ? p() : d();
};
function h() {
var t = d();
t[202] = v(202, 4, w);
t[203] = v(203, 8, S);
return t;
}
function d() {
var t = s.slice();
t[196] = g(196);
t[197] = y(197);
t[198] = m(198);
t[199] = g(199);
t[200] = y(200);
t[201] = m(201);
t[202] = v(202, 4, f.writeFloatBE || w, !0);
t[203] = v(203, 8, f.writeDoubleBE || S, !0);
t[204] = g(204);
t[205] = y(205);
t[206] = m(206);
t[207] = v(207, 8, _);
t[208] = g(208);
t[209] = y(209);
t[210] = m(210);
t[211] = v(211, 8, b);
t[217] = g(217);
t[218] = y(218);
t[219] = m(219);
t[220] = y(220);
t[221] = m(221);
t[222] = y(222);
t[223] = m(223);
return t;
}
function p() {
var t = s.slice();
t[196] = v(196, 1, l.prototype.writeUInt8);
t[197] = v(197, 2, l.prototype.writeUInt16BE);
t[198] = v(198, 4, l.prototype.writeUInt32BE);
t[199] = v(199, 1, l.prototype.writeUInt8);
t[200] = v(200, 2, l.prototype.writeUInt16BE);
t[201] = v(201, 4, l.prototype.writeUInt32BE);
t[202] = v(202, 4, l.prototype.writeFloatBE);
t[203] = v(203, 8, l.prototype.writeDoubleBE);
t[204] = v(204, 1, l.prototype.writeUInt8);
t[205] = v(205, 2, l.prototype.writeUInt16BE);
t[206] = v(206, 4, l.prototype.writeUInt32BE);
t[207] = v(207, 8, _);
t[208] = v(208, 1, l.prototype.writeInt8);
t[209] = v(209, 2, l.prototype.writeInt16BE);
t[210] = v(210, 4, l.prototype.writeInt32BE);
t[211] = v(211, 8, b);
t[217] = v(217, 1, l.prototype.writeUInt8);
t[218] = v(218, 2, l.prototype.writeUInt16BE);
t[219] = v(219, 4, l.prototype.writeUInt32BE);
t[220] = v(220, 2, l.prototype.writeUInt16BE);
t[221] = v(221, 4, l.prototype.writeUInt32BE);
t[222] = v(222, 2, l.prototype.writeUInt16BE);
t[223] = v(223, 4, l.prototype.writeUInt32BE);
return t;
}
function g(t) {
return function(e, n) {
var i = e.reserve(2), o = e.buffer;
o[i++] = t;
o[i] = n;
};
}
function y(t) {
return function(e, n) {
var i = e.reserve(3), o = e.buffer;
o[i++] = t;
o[i++] = n >>> 8;
o[i] = n;
};
}
function m(t) {
return function(e, n) {
var i = e.reserve(5), o = e.buffer;
o[i++] = t;
o[i++] = n >>> 24;
o[i++] = n >>> 16;
o[i++] = n >>> 8;
o[i] = n;
};
}
function v(t, e, n, i) {
return function(o, r) {
var a = o.reserve(e + 1);
o.buffer[a++] = t;
n.call(o.buffer, r, a, i);
};
}
function _(t, e) {
new r(this, e, t);
}
function b(t, e) {
new a(this, e, t);
}
function w(t, e) {
i.write(this, t, e, !1, 23, 4);
}
function S(t, e) {
i.write(this, t, e, !1, 52, 8);
}
}, {
"./bufferish": 17,
"./write-uint8": 37,
ieee754: 6,
"int64-buffer": 7
} ],
36: [ function(t, e, n) {
var i = t("isarray"), o = t("int64-buffer"), r = o.Uint64BE, a = o.Int64BE, s = t("./bufferish"), c = t("./bufferish-proto"), l = t("./write-token"), u = t("./write-uint8").uint8, f = t("./ext-buffer").ExtBuffer, h = "undefined" != typeof Uint8Array, d = "undefined" != typeof Map, p = [];
p[1] = 212;
p[2] = 213;
p[4] = 214;
p[8] = 215;
p[16] = 216;
n.getWriteType = function(t) {
var e = l.getWriteToken(t), n = t && t.useraw, o = h && t && t.binarraybuffer, g = o ? s.isArrayBuffer : s.isBuffer, y = o ? function(t, e) {
C(t, new Uint8Array(e));
} : C, m = d && t && t.usemap ? function(t, n) {
if (!(n instanceof Map)) return E(t, n);
var i = n.size;
e[i < 16 ? 128 + i : i <= 65535 ? 222 : 223](t, i);
var o = t.codec.encode;
n.forEach(function(e, n, i) {
o(t, n);
o(t, e);
});
} : E;
return {
boolean: function(t, n) {
e[n ? 195 : 194](t, n);
},
function: w,
number: function(t, n) {
var i, o = 0 | n;
if (n !== o) {
e[i = 203](t, n);
return;
}
i = -32 <= o && o <= 127 ? 255 & o : 0 <= o ? o <= 255 ? 204 : o <= 65535 ? 205 : 206 : -128 <= o ? 208 : -32768 <= o ? 209 : 210;
e[i](t, o);
},
object: n ? function(t, e) {
if (g(e)) return I(t, e);
b(t, e);
} : b,
string: function(t) {
return function(n, i) {
var o = i.length, r = 5 + 3 * o;
n.offset = n.reserve(r);
var a = n.buffer, s = t(o), l = n.offset + s;
o = c.write.call(a, i, l);
var u = t(o);
if (s !== u) {
var f = l + u - s, h = l + o;
c.copy.call(a, a, f, l, h);
}
e[1 === u ? 160 + o : u <= 3 ? 215 + u : 219](n, o);
n.offset += o;
};
}(n ? function(t) {
return t < 32 ? 1 : t <= 65535 ? 3 : 5;
} : function(t) {
return t < 32 ? 1 : t <= 255 ? 2 : t <= 65535 ? 3 : 5;
}),
symbol: w,
undefined: w
};
function v(t, n) {
e[207](t, n.toArray());
}
function _(t, n) {
e[211](t, n.toArray());
}
function b(t, e) {
if (null === e) return w(t, e);
if (g(e)) return y(t, e);
if (i(e)) return S(t, e);
if (r.isUint64BE(e)) return v(t, e);
if (a.isInt64BE(e)) return _(t, e);
var n = t.codec.getExtPacker(e);
n && (e = n(e));
if (e instanceof f) return T(t, e);
m(t, e);
}
function w(t, n) {
e[192](t, n);
}
function S(t, n) {
var i = n.length, o = i < 16 ? 144 + i : i <= 65535 ? 220 : 221;
e[o](t, i);
for (var r = t.codec.encode, a = 0; a < i; a++) r(t, n[a]);
}
function C(t, n) {
var i = n.length, o = i < 255 ? 196 : i <= 65535 ? 197 : 198;
e[o](t, i);
t.send(n);
}
function T(t, n) {
var i = n.buffer, o = i.length, r = p[o] || (o < 255 ? 199 : o <= 65535 ? 200 : 201);
e[r](t, o);
u[n.type](t);
t.send(i);
}
function E(t, n) {
var i = Object.keys(n), o = i.length, r = o < 16 ? 128 + o : o <= 65535 ? 222 : 223;
e[r](t, o);
var a = t.codec.encode;
i.forEach(function(e) {
a(t, e);
a(t, n[e]);
});
}
function I(t, n) {
var i = n.length, o = i < 32 ? 160 + i : i <= 65535 ? 218 : 219;
e[o](t, i);
t.send(n);
}
};
}, {
"./bufferish": 17,
"./bufferish-proto": 15,
"./ext-buffer": 26,
"./write-token": 35,
"./write-uint8": 37,
"int64-buffer": 7,
isarray: 8
} ],
37: [ function(t, e, n) {
for (var i = n.uint8 = new Array(256), o = 0; o <= 255; o++) i[o] = r(o);
function r(t) {
return function(e) {
var n = e.reserve(1);
e.buffer[n] = t;
};
}
}, {} ],
38: [ function(t, e, n) {
"use strict";
var i = String.prototype.replace, o = /%20/g;
e.exports = {
default: "RFC3986",
formatters: {
RFC1738: function(t) {
return i.call(t, o, "+");
},
RFC3986: function(t) {
return t;
}
},
RFC1738: "RFC1738",
RFC3986: "RFC3986"
};
}, {} ],
39: [ function(t, e, n) {
"use strict";
var i = t("./stringify"), o = t("./parse"), r = t("./formats");
e.exports = {
formats: r,
parse: o,
stringify: i
};
}, {
"./formats": 38,
"./parse": 40,
"./stringify": 41
} ],
40: [ function(t, e, n) {
"use strict";
var i = t("./utils"), o = Object.prototype.hasOwnProperty, r = {
allowDots: !1,
allowPrototypes: !1,
arrayLimit: 20,
decoder: i.decode,
delimiter: "&",
depth: 5,
parameterLimit: 1e3,
plainObjects: !1,
strictNullHandling: !1
}, a = function(t, e) {
for (var n = {}, i = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = Infinity === e.parameterLimit ? void 0 : e.parameterLimit, s = i.split(e.delimiter, a), c = 0; c < s.length; ++c) {
var l, u, f = s[c], h = f.indexOf("]="), d = -1 === h ? f.indexOf("=") : h + 1;
if (-1 === d) {
l = e.decoder(f, r.decoder);
u = e.strictNullHandling ? null : "";
} else {
l = e.decoder(f.slice(0, d), r.decoder);
u = e.decoder(f.slice(d + 1), r.decoder);
}
o.call(n, l) ? n[l] = [].concat(n[l]).concat(u) : n[l] = u;
}
return n;
}, s = function(t, e, n) {
for (var i = e, o = t.length - 1; o >= 0; --o) {
var r, a = t[o];
if ("[]" === a) r = (r = []).concat(i); else {
r = n.plainObjects ? Object.create(null) : {};
var s = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a, c = parseInt(s, 10);
!isNaN(c) && a !== s && String(c) === s && c >= 0 && n.parseArrays && c <= n.arrayLimit ? (r = [])[c] = i : r[s] = i;
}
i = r;
}
return i;
}, c = function(t, e, n) {
if (t) {
var i = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, r = /(\[[^[\]]*])/g, a = /(\[[^[\]]*])/.exec(i), c = a ? i.slice(0, a.index) : i, l = [];
if (c) {
if (!n.plainObjects && o.call(Object.prototype, c) && !n.allowPrototypes) return;
l.push(c);
}
for (var u = 0; null !== (a = r.exec(i)) && u < n.depth; ) {
u += 1;
if (!n.plainObjects && o.call(Object.prototype, a[1].slice(1, -1)) && !n.allowPrototypes) return;
l.push(a[1]);
}
a && l.push("[" + i.slice(a.index) + "]");
return s(l, e, n);
}
};
e.exports = function(t, e) {
var n = e ? i.assign({}, e) : {};
if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder) throw new TypeError("Decoder has to be a function.");
n.ignoreQueryPrefix = !0 === n.ignoreQueryPrefix;
n.delimiter = "string" == typeof n.delimiter || i.isRegExp(n.delimiter) ? n.delimiter : r.delimiter;
n.depth = "number" == typeof n.depth ? n.depth : r.depth;
n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : r.arrayLimit;
n.parseArrays = !1 !== n.parseArrays;
n.decoder = "function" == typeof n.decoder ? n.decoder : r.decoder;
n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : r.allowDots;
n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : r.plainObjects;
n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : r.allowPrototypes;
n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : r.parameterLimit;
n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : r.strictNullHandling;
if ("" === t || null === t || "undefined" == typeof t) return n.plainObjects ? Object.create(null) : {};
for (var o = "string" == typeof t ? a(t, n) : t, s = n.plainObjects ? Object.create(null) : {}, l = Object.keys(o), u = 0; u < l.length; ++u) {
var f = l[u], h = c(f, o[f], n);
s = i.merge(s, h, n);
}
return i.compact(s);
};
}, {
"./utils": 42
} ],
41: [ function(t, e, n) {
"use strict";
var i = t("./utils"), o = t("./formats"), r = {
brackets: function(t) {
return t + "[]";
},
indices: function(t, e) {
return t + "[" + e + "]";
},
repeat: function(t) {
return t;
}
}, a = Date.prototype.toISOString, s = {
delimiter: "&",
encode: !0,
encoder: i.encode,
encodeValuesOnly: !1,
serializeDate: function(t) {
return a.call(t);
},
skipNulls: !1,
strictNullHandling: !1
}, c = function t(e, n, o, r, a, c, l, u, f, h, d, p) {
var g = e;
if ("function" == typeof l) g = l(n, g); else if (g instanceof Date) g = h(g); else if (null === g) {
if (r) return c && !p ? c(n, s.encoder) : n;
g = "";
}
if ("string" == typeof g || "number" == typeof g || "boolean" == typeof g || i.isBuffer(g)) {
if (c) {
return [ d(p ? n : c(n, s.encoder)) + "=" + d(c(g, s.encoder)) ];
}
return [ d(n) + "=" + d(String(g)) ];
}
var y, m = [];
if ("undefined" == typeof g) return m;
if (Array.isArray(l)) y = l; else {
var v = Object.keys(g);
y = u ? v.sort(u) : v;
}
for (var _ = 0; _ < y.length; ++_) {
var b = y[_];
a && null === g[b] || (m = Array.isArray(g) ? m.concat(t(g[b], o(n, b), o, r, a, c, l, u, f, h, d, p)) : m.concat(t(g[b], n + (f ? "." + b : "[" + b + "]"), o, r, a, c, l, u, f, h, d, p)));
}
return m;
};
e.exports = function(t, e) {
var n = t, a = e ? i.assign({}, e) : {};
if (null !== a.encoder && void 0 !== a.encoder && "function" != typeof a.encoder) throw new TypeError("Encoder has to be a function.");
var l = "undefined" == typeof a.delimiter ? s.delimiter : a.delimiter, u = "boolean" == typeof a.strictNullHandling ? a.strictNullHandling : s.strictNullHandling, f = "boolean" == typeof a.skipNulls ? a.skipNulls : s.skipNulls, h = "boolean" == typeof a.encode ? a.encode : s.encode, d = "function" == typeof a.encoder ? a.encoder : s.encoder, p = "function" == typeof a.sort ? a.sort : null, g = "undefined" != typeof a.allowDots && a.allowDots, y = "function" == typeof a.serializeDate ? a.serializeDate : s.serializeDate, m = "boolean" == typeof a.encodeValuesOnly ? a.encodeValuesOnly : s.encodeValuesOnly;
if ("undefined" == typeof a.format) a.format = o.default; else if (!Object.prototype.hasOwnProperty.call(o.formatters, a.format)) throw new TypeError("Unknown format option provided.");
var v, _, b = o.formatters[a.format];
"function" == typeof a.filter ? n = (_ = a.filter)("", n) : Array.isArray(a.filter) && (v = _ = a.filter);
var w, S = [];
if ("object" != typeof n || null === n) return "";
w = a.arrayFormat in r ? a.arrayFormat : "indices" in a ? a.indices ? "indices" : "repeat" : "indices";
var C = r[w];
v || (v = Object.keys(n));
p && v.sort(p);
for (var T = 0; T < v.length; ++T) {
var E = v[T];
f && null === n[E] || (S = S.concat(c(n[E], E, C, u, f, h ? d : null, _, p, g, y, b, m)));
}
var I = S.join(l), k = !0 === a.addQueryPrefix ? "?" : "";
return I.length > 0 ? k + I : "";
};
}, {
"./formats": 38,
"./utils": 42
} ],
42: [ function(t, e, n) {
"use strict";
var i = Object.prototype.hasOwnProperty, o = function() {
for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
return t;
}(), r = function(t) {
for (var e; t.length; ) {
var n = t.pop();
e = n.obj[n.prop];
if (Array.isArray(e)) {
for (var i = [], o = 0; o < e.length; ++o) "undefined" != typeof e[o] && i.push(e[o]);
n.obj[n.prop] = i;
}
}
return e;
}, a = function(t, e) {
for (var n = e && e.plainObjects ? Object.create(null) : {}, i = 0; i < t.length; ++i) "undefined" != typeof t[i] && (n[i] = t[i]);
return n;
};
e.exports = {
arrayToObject: a,
assign: function(t, e) {
return Object.keys(e).reduce(function(t, n) {
t[n] = e[n];
return t;
}, t);
},
compact: function(t) {
for (var e = [ {
obj: {
o: t
},
prop: "o"
} ], n = [], i = 0; i < e.length; ++i) for (var o = e[i], a = o.obj[o.prop], s = Object.keys(a), c = 0; c < s.length; ++c) {
var l = s[c], u = a[l];
if ("object" == typeof u && null !== u && -1 === n.indexOf(u)) {
e.push({
obj: a,
prop: l
});
n.push(u);
}
}
return r(e);
},
decode: function(t) {
try {
return decodeURIComponent(t.replace(/\+/g, " "));
} catch (e) {
return t;
}
},
encode: function(t) {
if (0 === t.length) return t;
for (var e = "string" == typeof t ? t : String(t), n = "", i = 0; i < e.length; ++i) {
var r = e.charCodeAt(i);
if (45 === r || 46 === r || 95 === r || 126 === r || r >= 48 && r <= 57 || r >= 65 && r <= 90 || r >= 97 && r <= 122) n += e.charAt(i); else if (r < 128) n += o[r]; else if (r < 2048) n += o[192 | r >> 6] + o[128 | 63 & r]; else if (r < 55296 || r >= 57344) n += o[224 | r >> 12] + o[128 | r >> 6 & 63] + o[128 | 63 & r]; else {
i += 1;
r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(i));
n += o[240 | r >> 18] + o[128 | r >> 12 & 63] + o[128 | r >> 6 & 63] + o[128 | 63 & r];
}
}
return n;
},
isBuffer: function(t) {
return null !== t && "undefined" != typeof t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
},
isRegExp: function(t) {
return "[object RegExp]" === Object.prototype.toString.call(t);
},
merge: function t(e, n, o) {
if (!n) return e;
if ("object" != typeof n) {
if (Array.isArray(e)) e.push(n); else {
if ("object" != typeof e) return [ e, n ];
(o.plainObjects || o.allowPrototypes || !i.call(Object.prototype, n)) && (e[n] = !0);
}
return e;
}
if ("object" != typeof e) return [ e ].concat(n);
var r = e;
Array.isArray(e) && !Array.isArray(n) && (r = a(e, o));
if (Array.isArray(e) && Array.isArray(n)) {
n.forEach(function(n, r) {
i.call(e, r) ? e[r] && "object" == typeof e[r] ? e[r] = t(e[r], n, o) : e.push(n) : e[r] = n;
});
return e;
}
return Object.keys(n).reduce(function(e, r) {
var a = n[r];
i.call(e, r) ? e[r] = t(e[r], a, o) : e[r] = a;
return e;
}, r);
}
};
}, {} ],
EventPanel: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "51461odZ6pNVpU/IX1D+a6c", "EventPanel");
var i = t("../../Utils/Constants"), o = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../GameList/Dialog_Event"));
cc.Class({
extends: cc.Component,
properties: {
eventPageView: {
default: null,
type: cc.PageView
},
eventItem: {
default: null,
type: cc.Prefab
},
dialogEvent: {
default: null,
type: o.default
}
},
start: function() {
window.$Global.networkService.on("socketOpen", this.getEvents.bind(this));
},
onDestroy: function() {
window.$Global.networkService.off("socketOpen");
this.unschedule(this.scrollPage);
},
getEvents: function() {
var t = this;
"Login" == cc.director.getScene()._name && window.$Global.networkService.getSystemMessages([ i.SYSTEM_MESSAGE_TYPE.EVENT, i.SYSTEM_MESSAGE_TYPE.EVENT_GROUP ]).then(function(e) {
if (e.resultCode === i.ResponseResultCode.SUCCESS) {
window.$Global.CONFIG.SYSTEM_MESSAGE = e.messages;
t.initEvent(e.messages);
} else cc.error("get system message error");
});
},
initEvent: function(t) {
var e = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
this.eventPageView.removeAllPages();
n && this.dialogEvent.setContent(t);
for (var i = function(i) {
var o = cc.instantiate(e.eventItem);
try {
cc.loader.load(t[i].imageUrl, function(t, e) {
var n = o.children;
null !== n && void 0 !== n && (n[0].getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e));
});
} catch (t) {
cc.error(t);
}
n && o.on(cc.Node.EventType.TOUCH_END, function(t) {
e.dialogEvent.showTab(i);
});
e.eventPageView.addPage(o);
}, o = 0; o < t.length; o++) i(o);
this.pageSize = t.length;
this.scrollPage = function() {
var t = this.eventPageView.getCurrentPageIndex(), e = t == this.pageSize - 1 ? 0 : t + 1;
this.eventPageView.setCurrentPageIndex(e);
};
this.schedule(this.scrollPage, 5);
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../GameList/Dialog_Event": "Dialog_Event"
} ],
FrameWorkLogin: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7680aMJYa1D3qyt+alUIBGt", "FrameWorkLogin");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.FacebookPluginAndroid = {
doLoginSuccess: null,
doLoginFailure: null,
doLoginCancel: null,
login: function(t, e, n) {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "loginFacebook", "()V");
this.doLoginSuccess = t;
this.doLoginFailure = e;
this.doLoginCancel = n;
},
call: function(t) {
cc.log("called mother fucker");
this.doLoginSuccess(t);
},
logout: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "logoutFacebook", "()V");
}
};
n.FacebookPluginIOS = {
doLoginSuccess: null,
doLoginFailure: null,
login: function(t, e) {
jsb.reflection.callStaticMethod("NativeObjC", "doLoginFacebook");
this.doLoginSuccess = t;
this.doLoginFailure = e;
},
logout: function() {
jsb.reflection.callStaticMethod("NativeObjC", "doLogoutFacebook");
}
};
cc._RF.pop();
}, {} ],
"FxMoveIn.js": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6fbe8fEwCFNypKqTqJOEtQz", "FxMoveIn.js");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ],
"FxShake.js": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5bbf1f1ds9HFIWEx0fdazL+", "FxShake.js");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ],
GameListScene: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "61ba3mC+01BW6GKQp+ozV35", "GameListScene");
var i = h(t("./PanelPlayer")), o = h(t("./PanelGameList")), r = h(t("./Dialog_Setting")), a = h(t("./Dialog_Profile")), s = h(t("./Dialog_GiftCode")), c = h(t("./Dialog_TopUp")), l = h(t("./Dialog_VIP")), u = h(t("./Dialog_GoldHistory")), f = t("../../Utils/Constants");
function h(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: cc.Component,
properties: {
panelPlayer: {
default: null,
type: i.default
},
panelGameList: {
default: null,
type: o.default
},
dialogSetting: {
default: null,
type: r.default
},
dialogProfile: {
default: null,
type: a.default
},
dialogGiftCode: {
default: null,
type: s.default
},
dialogVip: {
default: null,
type: l.default
},
dialogTransferGold: {
default: null,
type: c.default
},
dialogLichSuBO: {
default: null,
type: u.default
},
hotlinePanel: {
default: null,
type: cc.Node
},
hotlineTxt: {
default: null,
type: cc.Label
},
dialogAddInfo: {
default: null,
type: cc.Prefab
}
},
onLoad: function() {
void 0 !== window.$Global && void 0 !== window.$Global.networkService || cc.director.loadScene("Login");
},
start: function() {
var t = this;
if (void 0 !== window.$Global && void 0 !== window.$Global.networkService) {
window.$Global.userService.getUserInfo().then(function(e) {
if (e.resultCode === f.ResponseResultCode.SUCCESS) {
window.$Global.userService.userInfo = e.user;
if ("" === e.user.displayName || null === e.user.displayName) {
(n = cc.instantiate(t.dialogAddInfo)).parent = window.$UIHelper.node;
n.getComponent("Dialog_AddInfo").show();
e.user.displayName = "";
} else if ("" === e.user.mobile || null === e.user.mobile) {
var n;
(n = cc.instantiate(t.dialogAddInfo)).parent = window.$UIHelper.node;
n.getComponent("Dialog_AddInfo").show();
n.getComponent("Dialog_AddInfo").updateMobile();
}
window.$Global.userService.emit("userInfoFetched", e.user);
}
});
window.$Global.networkService.on("updateMoney", function(e) {
var n = e;
t.onUpdateMoney(n);
});
this.isListenNetwork = !0;
this.node.on("transferGold", function(e) {
t.dialogTransferGold.show();
});
this.node.on("goldHistory", function(e) {
t.dialogLichSuBO.show();
});
window.$Global.CONFIG.VERSION && (this.hotlineTxt.string = window.$Global.CONFIG.VERSION.hotline);
} else cc.director.loadScene("Login");
},
onDestroy: function() {
this.isListenNetwork && this.offNetwork();
},
offNetwork: function() {
window.$Global.networkService.off("closed");
window.$Global.networkService.off("updateMoney");
this.isListenNetwork = !1;
},
goToLogin: function(t) {
window.$UIHelper.showToast("Mất kết nối. Vui lòng thử lại");
this.scheduleOnce(function() {
cc.director.loadScene("Login");
}, 3);
},
onClickBack: function() {
if (this.panelGameList.isShowGameList) {
window.$UIHelper.showPopup("Bạn có muốn đăng xuất?", function() {
window.$Global.userService.logout().then(function(t) {
cc.director.loadScene("Login");
}).catch(function(t) {
cc.error("Logout error!!!");
});
}.bind(this));
} else this.panelGameList.showGameList();
},
onClickProfile: function() {
this.dialogProfile.show();
},
onClickSetting: function() {
this.dialogSetting.show();
},
onClickFanPage: function() {
cc.sys.openURL(window.$Global.CONFIG.VERSION.fanpage);
},
onClickGift: function() {
this.dialogGiftCode.show();
},
onClickWallet: function() {
this.dialogVip.show();
},
onClickOTP: function() {
cc.sys.openURL(window.$Global.CONFIG.VERSION.otp_download_url);
},
onUpdateMoney: function(t) {
this.panelPlayer.setGold(t);
},
onClickHotline: function() {
cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_ANDROID ? cc.sys.openURL("tel://" + window.$Global.CONFIG.VERSION.hotline) : !0 === this.hotlinePanel.active ? this.hotlinePanel.active = !1 : this.hotlinePanel.active = !0;
},
onClickAgency: function() {
this.dialogTransferGold.showTab(1);
},
onClickCard: function() {
this.dialogTransferGold.showTab(2);
},
onClickTransfer: function() {
this.dialogTransferGold.showTab(0);
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"./Dialog_GiftCode": "Dialog_GiftCode",
"./Dialog_GoldHistory": "Dialog_GoldHistory",
"./Dialog_Profile": "Dialog_Profile",
"./Dialog_Setting": "Dialog_Setting",
"./Dialog_TopUp": "Dialog_TopUp",
"./Dialog_VIP": "Dialog_VIP",
"./PanelGameList": "PanelGameList",
"./PanelPlayer": "PanelPlayer"
} ],
GamePlayService: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b33215UPaZFyYh9bfuey6/U", "GamePlayService");
cc.Class({
extends: cc.Component,
properties: {}
});
cc._RF.pop();
}, {} ],
GameUtil: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "300fdOMAMFFlok96/w/13gz", "GameUtil");
var i = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}();
function o(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("./FrameWorkLogin"), a = function() {
function t() {
o(this, t);
}
i(t, null, [ {
key: "isAndroidDevice",
value: function() {
return cc.sys.os === cc.sys.OS_ANDROID && cc.sys.platform === cc.sys.ANDROID;
}
}, {
key: "isIOSDevice",
value: function() {
return cc.sys.isNative ? cc.sys.os === cc.sys.OS_IOS : cc.sys.os === cc.sys.OS_IOS && (cc.sys.platform === cc.sys.IPHONE || cc.sys.platform === cc.sys.IPAD);
}
}, {
key: "isWin32Device",
value: function() {
return cc.sys.os === cc.sys.OS_WINDOWS && cc.sys.platform === cc.sys.WIN32;
}
}, {
key: "isMacDevice",
value: function() {
return cc.sys.platform === cc.sys.MACOS;
}
}, {
key: "isWebBrowser",
value: function() {
return cc.sys.platform === cc.sys.DESKTOP_BROWSER || cc.sys.platform === cc.sys.MOBILE_BROWSER;
}
} ]);
return t;
}();
a.ANDROID_DEVICE = 0;
a.IOS_DEVICE = 1;
a.WEB_BROWSER = 2;
n.default = a;
window.FacebookPluginAndroid = window.FacebookPluginAndroid || r.FacebookPluginAndroid;
window.FacebookPluginIOS = window.FacebookPluginIOS || r.FacebookPluginIOS;
cc._RF.pop();
}, {
"./FrameWorkLogin": "FrameWorkLogin"
} ],
Global: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1110eM3+HxORLOl9oo/Zf7O", "Global");
var i = a(t("../Services/GamePlayService")), o = a(t("../Services/NetworkService")), r = a(t("../Services/UserService"));
function a(t) {
return t && t.__esModule ? t : {
default: t
};
}
var s = t("../Configs/Config");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
window.$Global && (this.node.active = !1);
window.$Global = this;
this.CONFIG = s;
this.networkService = this.node.getComponent(o.default);
this.gamePlayService = this.node.getComponent(i.default);
this.userService = this.node.getComponent(r.default);
this.ui = {};
this.minigame = {};
this.firstLogin = !0;
this.forceUpdate = !1;
this.needUpdate = !1;
cc.game.addPersistRootNode(this.node);
}
});
cc._RF.pop();
}, {
"../Configs/Config": "Config",
"../Services/GamePlayService": "GamePlayService",
"../Services/NetworkService": "NetworkService",
"../Services/UserService": "UserService"
} ],
GoldHistoryItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "04a0cWQOwZCnqZl9nNTOb59", "GoldHistoryItem");
var i = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
textID: {
default: null,
type: cc.Label
},
textTime: {
default: null,
type: cc.Label
},
textGoldChange: {
default: null,
type: cc.Label
},
textGold: {
default: null,
type: cc.Label
},
textReason: {
default: null,
type: cc.Label
}
},
setData: function(t) {
this.textID.string = t.id;
this.textTime.string = t.datetime;
this.textGoldChange.string = (0, i.moneyFormat)(t.goldChange, !0);
this.textGold.string = (0, i.moneyFormat)(t.gold, !0);
this.textReason.string = t.reason;
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper"
} ],
Helper: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2798eGgOoBGDrc4fY5n55mV", "Helper");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.moneyFormat = function(t) {
var e = "";
if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && t >= 1e3) {
t = Math.floor(t / 1e3);
e = "K";
}
var n = t.toString();
return (n = (n = (n = n.replace(/\./g, "x")).replace(/\B(?=(\d{3})+(?!\d))/g, ".")).replace(/x/g, ".")) + e;
};
n.timeFormat = function(t) {
var e = ~~(t / 3600), n = ~~(t % 3600 / 60), i = t % 60, o = "";
o += e > 0 ? e + ":" + (n < 10 ? "0" : "") : n < 10 ? "0" : "";
o += n + ":" + (i < 10 ? "0" : "");
return o += "" + i;
};
n.timeSecondFormat = function(t) {
var e = t % 60, n = "";
n += e < 10 ? "0" : "";
return n += "" + e;
};
n.moneyToInt = function(t) {
return parseInt(t.toString().replace(/\./g, ""));
};
n.moneyToFloat = function(t) {
return parseFloat(t.toString().replace(/\./g, ""));
};
n.runNumber = function(t, e) {
var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100;
t.runNumber && clearInterval(t.runNumber);
var r = 0;
if (!t.string) {
t.string = i(e);
return;
}
r = parseInt(t.string.toString().replace(/\./g, ""));
r >= e && (r = 0);
var a = (e - r) / n / o;
t.runNumber = setInterval(function() {
if (null == t.node) {
clearInterval(t.runNumber);
return;
}
var n = 0;
if (!t.string) {
t.string = i(e);
return;
}
n = parseInt(t.string.toString().replace(/\./g, ""));
if (n < e) n = Math.round(n + a); else {
n = e;
clearInterval(t.runNumber);
}
t.string = i(n);
}, 1e3 / o);
};
n.getKeyByValue = function(t, e) {
return Object.keys(t).find(function(n) {
return t[n] === e;
});
};
n.numberWithCommas = function() {
return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
var i = n.numberWithDot = function() {
return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
cc._RF.pop();
}, {} ],
HisItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b1472i9rvJLPridw9nXWiyj", "HisItem");
var i = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
id: {
default: null,
type: cc.Label
},
time: {
default: null,
type: cc.Label
},
bet: {
default: null,
type: cc.Label
},
win: {
default: null,
type: cc.Label
}
},
setData: function(t) {
this.id.string = t.id;
this.time.string = t.time;
this.bet.string = (0, i.moneyFormat)(t.sub, !0);
this.win.string = (0, i.moneyFormat)(t.add, !0);
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper"
} ],
HistoryItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "30888B7TLtCzavNUsmAbZ8T", "HistoryItem");
cc.Class({
extends: cc.Component,
properties: {
spriteWhite: {
default: null,
type: cc.SpriteFrame
},
spriteBlack: {
default: null,
type: cc.SpriteFrame
},
spriteWhiteLast: {
default: null,
type: cc.SpriteFrame
},
spriteBlackLast: {
default: null,
type: cc.SpriteFrame
}
},
setData: function(t, e) {
if (t <= 10 && e) {
this.getComponent(cc.Sprite).spriteFrame = this.spriteWhiteLast;
this.getComponent(cc.Animation).play("HistoryItem");
} else if (t <= 10 && !e) this.getComponent(cc.Sprite).spriteFrame = this.spriteWhite; else if (t > 10 && e) {
this.getComponent(cc.Sprite).spriteFrame = this.spriteBlackLast;
this.getComponent(cc.Animation).play("HistoryItem");
} else t > 10 && !e && (this.getComponent(cc.Sprite).spriteFrame = this.spriteBlack);
}
});
cc._RF.pop();
}, {} ],
HotUpdate: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a1639vFA4lIwLFXRNoei2kt", "HotUpdate");
var i = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}(), o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};
function r(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function a(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function s(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var c = function(t, e, n, i) {
var r, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (s = (a < 3 ? r(s) : a > 3 ? r(e, n, s) : r(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var l = cc._decorator, u = l.ccclass, f = l.property, h = JSON.stringify({
packageUrl: "",
remoteManifestUrl: "",
remoteVersionUrl: "",
version: "0.0.0",
assets: {},
searchPaths: []
}), d = function(t) {
s(e, cc.Component);
function e() {
r(this, e);
var t = a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
t.infoUpdate = null;
t.fileProgress = null;
t.fileLabel = null;
t.byteProgress = null;
t.byteLabel = null;
t.checkBtn = null;
t.retryBtn = null;
t.updateBtn = null;
t.manifestUrl = null;
t._updating = !1;
t._canRetry = !1;
t._storagePath = "";
t.callbackUpdate = null;
t.isInit = !1;
return t;
}
i(e, [ {
key: "checkCb",
value: function(t) {
cc.log("HotUpdate/checkCb/Code: " + t.getEventCode());
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
this.showInfo("No local manifest file found, hot update skipped.");
this.resetAmAndUpdateStatus();
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
this.showInfo("Fail to download manifest file, hot update skipped.");
this.resetAmAndUpdateStatus();
this.callbackUpdate && this.callbackUpdate.callbackFailDownloadManifest();
break;

case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
this.showInfo("Fail to PARSE manifest file, hot update skipped.");
this.resetAmAndUpdateStatus();
this.callbackUpdate && this.callbackUpdate.callbackFailParseManifest();
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this.callbackUpdate && this.callbackUpdate.callbackUpToDate();
this.showInfo("Already up to date with the latest remote version.");
this.resetAmAndUpdateStatus();
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
this.showInfo("New version found, please try to update.");
this.checkBtn && (this.checkBtn.interactable = !1);
this.showFileProgress(0);
this.showByteProgress(0);
this.callbackUpdate ? this.callbackUpdate.callbackNewVersionFound() : cc.log("callbackUpdate is null or undefind");
this.resetAmAndUpdateStatus();
break;

default:
return;
}
}
}, {
key: "resetAmAndUpdateStatus",
value: function() {
this._am.setEventCallback(null);
this._checkListener = null;
this._updating = !1;
}
}, {
key: "updateCb",
value: function(t) {
var e = !1, n = !1;
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
this.showInfo("No local manifest file found, hot update skipped.");
this.callbackUpdate && this.callbackUpdate.callbackFail();
n = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
this.showByteProgress(t.getPercent());
this.showFileProgress(t.getPercentByFile());
this.callbackUpdate && this.callbackUpdate.callbackUpdateProgress(t.getPercentByFile());
this.fileLabel && (this.fileLabel.string = t.getDownloadedFiles() + " / " + t.getTotalFiles());
this.byteLabel && (this.byteLabel.string = t.getDownloadedBytes() + " / " + t.getTotalBytes());
var i = t.getMessage();
i && this.showInfo("Updated file: " + i);
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
this.showInfo("Fail to download manifest file, hot update skipped.");
this.callbackUpdate && this.callbackUpdate.callbackFail();
n = !0;
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this.showInfo("Already up to date with the latest remote version.");
n = !0;
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
this.showInfo("Update finished. " + t.getMessage());
e = !0;
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
cc.log("hotUpdateCb/UPDATE_FAILED/event: ");
cc.log(JSON.stringify(t));
this.showInfo("Update failed. " + t.getMessage());
this.retryBtn && (this.retryBtn.interactable = !0);
this._updating = !1;
this._canRetry = !0;
this.callbackUpdate && this.callbackUpdate.callbackFail();
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
this.showInfo("Asset update error: " + t.getAssetId() + ", " + t.getMessage());
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
this.showInfo(t.getMessage());
}
if (n) {
this._am.setEventCallback(null);
this._updateListener = null;
this._updating = !1;
}
if (e) {
this._am.setEventCallback(null);
this._updateListener = null;
var o = jsb.fileUtils.getSearchPaths(), r = this._am.getLocalManifest().getSearchPaths();
console.log(JSON.stringify(r));
Array.prototype.unshift.apply(o, r);
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(o));
jsb.fileUtils.setSearchPaths(o);
cc.audioEngine.stopAll();
cc.game.restart();
}
}
}, {
key: "loadCustomManifest",
value: function() {
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var t = new jsb.Manifest(h, this._storagePath);
this._am.loadLocalManifest(t, this._storagePath);
this.showInfo("Using custom manifest");
}
}
}, {
key: "retry",
value: function() {
cc.log("hot update retry");
if (!this._updating && this._canRetry) {
this.retryBtn && (this.retryBtn.interactable = !1);
this._canRetry = !1;
this.showInfo("Retry failed Assets...");
this._am.downloadFailedAssets();
}
}
}, {
key: "canRetry",
value: function() {
return !this._updating && this._canRetry;
}
}, {
key: "checkUpdate",
value: function() {
cc.log("hot update checkUpdate");
if (this._updating) this.showInfo("Checking or updating ..."); else {
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var t = this.manifestUrl.nativeUrl;
cc.loader.md5Pipe && (t = cc.loader.md5Pipe.transformURL(t));
cc.log("HotUpdate/checkUpdate/nativeUrl: " + t);
this._am.loadLocalManifest(t);
}
if (this._am.getLocalManifest() && this._am.getLocalManifest().isLoaded()) {
this._am.setEventCallback(this.checkCb.bind(this));
this._am.checkUpdate();
this._updating = !0;
} else this.showInfo("Failed to load local manifest ...");
}
}
}, {
key: "hotUpdate",
value: function() {
cc.log("HotUpdate/hotUpdate");
if (this._am && !this._updating) {
this._am.setEventCallback(this.updateCb.bind(this));
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var t = this.manifestUrl.nativeUrl;
cc.loader.md5Pipe && (t = cc.loader.md5Pipe.transformURL(t));
cc.log("HotUpdate/hotUpdate/nativeUrl: " + t);
this._am.loadLocalManifest(t);
}
this._failCount = 0;
this._am.update();
this.updateBtn && (this.updateBtn.interactable = !1);
this._updating = !0;
}
}
}, {
key: "isReadyUpdate",
value: function() {
return this._am && !this._updating;
}
}, {
key: "updateResource",
value: function(t) {
this.callbackUpdate = t;
cc.sys.isNative ? this.checkUpdate() : cc.log("Hot Update is Only available on native");
}
}, {
key: "init",
value: function(t) {
this.initialize(t);
}
}, {
key: "initialize",
value: function(t) {
cc.log("HotUpdate/init");
cc.log("manifestUrl: " + JSON.stringify(this.manifestUrl));
if (cc.sys.isNative) {
this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "blackjack-remote-asset";
cc.log("Storage path for remote asset : " + this._storagePath);
this.versionCompareHandle = function(t, e) {
cc.log("JS Custom Version Compare: version A is " + t + ", version B is " + e);
for (var n = t.split("."), i = e.split("."), o = 0; o < n.length; ++o) {
var r = parseInt(n[o]), a = parseInt(i[o] || 0);
if (r !== a) return r - a;
}
return i.length > n.length ? -1 : 0;
};
this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle);
this.showInfo("Hot update is ready, please check or directly update.");
if (cc.sys.os === cc.sys.OS_ANDROID) {
this._am.setMaxConcurrentTask(2);
this.showInfo("Max concurrent tasks count have been limited to 2");
}
this.showByteProgress(0);
this.showFileProgress(0);
this.isInit = !0;
this.scheduleOnce(function() {
t && t();
}, 1);
} else cc.log("onLoad/Hot update is only available in Native build");
}
}, {
key: "showInfo",
value: function(t) {
this.infoUpdate && (this.infoUpdate.string = t);
cc.log("HotUpdate/Info: " + t);
}
}, {
key: "showFileProgress",
value: function(t) {
this.fileProgress && (this.fileProgress.progress = t);
}
}, {
key: "showByteProgress",
value: function(t) {
this.byteProgress && (this.byteProgress.progress = t);
}
}, {
key: "onDestroy",
value: function() {
if (this._updateListener) {
this._am.setEventCallback(null);
this._updateListener = null;
}
}
}, {
key: "info",
get: function() {
return this.infoUpdate;
},
set: function(t) {
this.infoUpdate = t;
}
} ]);
return e;
}();
c([ f(cc.Label) ], d.prototype, "infoUpdate", void 0);
c([ f(cc.ProgressBar) ], d.prototype, "fileProgress", void 0);
c([ f(cc.Label) ], d.prototype, "fileLabel", void 0);
c([ f(cc.ProgressBar) ], d.prototype, "byteProgress", void 0);
c([ f(cc.Label) ], d.prototype, "byteLabel", void 0);
c([ f(cc.Button) ], d.prototype, "checkBtn", void 0);
c([ f(cc.Button) ], d.prototype, "retryBtn", void 0);
c([ f(cc.Button) ], d.prototype, "updateBtn", void 0);
c([ f({
type: cc.Asset
}) ], d.prototype, "manifestUrl", void 0);
d = c([ u ], d);
n.default = d;
cc._RF.pop();
}, {} ],
JackpotEffect: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6bc20BswOFE9YYHsFkj32O1", "JackpotEffect");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i, o, r, a, s, c, l, u, f, h, d, p, g, y, m = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}(), v = t("../Utils/Helper");
function _(t, e, n, i) {
n && Object.defineProperty(t, e, {
enumerable: n.enumerable,
configurable: n.configurable,
writable: n.writable,
value: n.initializer ? n.initializer.call(i) : void 0
});
}
function b(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function w(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function S(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function C(t, e, n, i, o) {
var r = {};
Object.keys(i).forEach(function(t) {
r[t] = i[t];
});
r.enumerable = !!r.enumerable;
r.configurable = !!r.configurable;
("value" in r || r.initializer) && (r.writable = !0);
r = n.slice().reverse().reduce(function(n, i) {
return i(t, e, n) || n;
}, r);
if (o && void 0 !== r.initializer) {
r.value = r.initializer ? r.initializer.call(o) : void 0;
r.initializer = void 0;
}
if (void 0 === r.initializer) {
Object.defineProperty(t, e, r);
r = null;
}
return r;
}
var T = cc._decorator, E = T.ccclass, I = T.property, k = (i = I(cc.ParticleSystem), 
o = I(cc.ParticleSystem), r = I(cc.ParticleSystem), a = I(cc.Node), s = I(cc.Label), 
c = I(cc.Node), E(l = (u = function(t) {
S(e, cc.Component);
function e() {
var t, n, i, o;
b(this, e);
for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
return o = (n = i = w(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
_(i, "sparkleNode", f, i), _(i, "coinNode", h, i), _(i, "lightNode", d, i), _(i, "spineNode", p, i), 
_(i, "textJackpot", g, i), _(i, "textJackpotBg", y, i), n), w(i, o);
}
m(e, [ {
key: "start",
value: function() {
this.textJackpot.string = "0";
}
}, {
key: "show",
value: function(t) {
this.node.active = !0;
this.sparkleNode.resetSystem();
this.coinNode.resetSystem();
this.lightNode.resetSystem();
this.spineNode.active = !0;
this.textJackpotBg.active = !0;
(0, v.runNumber)(this.textJackpot, t);
}
}, {
key: "hide",
value: function() {
this.sparkleNode.stopSystem();
this.coinNode.stopSystem();
this.lightNode.stopSystem();
this.spineNode.active = !1;
this.textJackpotBg.active = !1;
this.textJackpot.string = "0";
}
} ]);
return e;
}(), f = C(u.prototype, "sparkleNode", [ i ], {
enumerable: !0,
initializer: function() {
return null;
}
}), h = C(u.prototype, "coinNode", [ o ], {
enumerable: !0,
initializer: function() {
return null;
}
}), d = C(u.prototype, "lightNode", [ r ], {
enumerable: !0,
initializer: function() {
return null;
}
}), p = C(u.prototype, "spineNode", [ a ], {
enumerable: !0,
initializer: function() {
return null;
}
}), g = C(u.prototype, "textJackpot", [ s ], {
enumerable: !0,
initializer: function() {
return null;
}
}), y = C(u.prototype, "textJackpotBg", [ c ], {
enumerable: !0,
initializer: function() {
return null;
}
}), u)) || l);
n.default = k;
e.exports = n.default;
cc._RF.pop();
}, {
"../Utils/Helper": "Helper"
} ],
JackpotUser: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3b665Vv8cVNuJ541tfM/J6L", "JackpotUser");
var i = t("../../Utils/Constants");
cc.Class({
extends: cc.Component,
properties: {
bg: {
default: null,
type: cc.Node
},
content: {
default: null,
type: cc.Node
},
userItem: {
default: null,
type: cc.Prefab
}
},
onLoad: function() {
"GameList" !== cc.director.getScene()._name && (this.node.active = !1);
},
show: function() {
var t = this;
window.$Global.networkService.getUserJackpot().then(function(e) {
if (e.resultCode === i.ResponseResultCode.SUCCESS) {
t.content.removeAllChildren();
t.node.active = !0;
e.data && e.data.forEach(function(e) {
var n = cc.instantiate(t.userItem);
n.getComponent("UserJackpotItem").setData(e);
n.parent = t.content;
});
} else window.$UIHelper.showToast(e.desc || "Lỗi");
});
},
hide: function() {
this.node.active = !1;
},
jackpotClick: function() {
this.node.active ? this.hide() : this.show();
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants"
} ],
Jackpot: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "82c2fXGkvNOf6UvmzlMD6r6", "Jackpot");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../../Utils/DragAndDrop")), o = t("../../Utils/Helper"), r = t("../../Utils/Constants");
cc.Class({
extends: cc.Component,
properties: {
bg: {
default: null,
type: cc.Node
},
btnJackpot: {
default: null,
type: i.default
},
jk100: {
default: null,
type: cc.Node
},
jk1k: {
default: null,
type: cc.Node
},
jk10k: {
default: null,
type: cc.Node
},
text2009: {
default: null,
type: cc.Label
},
text2011: {
default: null,
type: cc.Label
},
text2013: {
default: null,
type: cc.Label
},
text793: {
default: null,
type: cc.Label
},
text794: {
default: null,
type: cc.Label
},
text795: {
default: null,
type: cc.Label
},
text1997: {
default: null,
type: cc.Label
},
text2002: {
default: null,
type: cc.Label
},
text2003: {
default: null,
type: cc.Label
},
userJackpotContent: {
default: null,
type: cc.Node
},
userJackpotItem: {
default: null,
type: cc.Prefab
},
gameNode: {
default: null,
type: cc.Node
},
userNode: {
default: null,
type: cc.Node
},
textMinipoker: {
default: [],
type: cc.Label
},
textBanca: {
default: [],
type: cc.Label
},
textMini3cay: {
default: [],
type: cc.Label
},
textMiniSlot7: {
default: [],
type: cc.Label
}
},
start: function() {
this.isShow = !1;
this.currentScene = cc.director.getScene()._name;
"GameList" !== this.currentScene && (this.node.active = !1);
window.$Global.networkService.on("notify_" + r.NOTIFY_TYPE.ACTIONS_IN_LOBBY, this.updateJackpot.bind(this));
window.$Global.networkService.on("notify_" + r.NOTIFY_TYPE.NOTIFY_MINI_CHANGED, this.onNotifyMiniChanged.bind(this));
},
onDestroy: function() {
window.$Global.networkService.off("notify_" + r.NOTIFY_TYPE.ACTIONS_IN_LOBBY);
window.$Global.networkService.off("notify_" + r.NOTIFY_TYPE.NOTIFY_MINI_CHANGED);
},
showHideJackpot: function() {
var t = this;
if (!this.btnJackpot.isMoving) if (this.isShow) {
this.bg.active = !1;
this.isShow = !1;
} else {
this.getUserJackpot();
this.bg.active = !0;
this.isShow = !0;
window.$Global.networkService.getFundSlot([ r.ZONE_ID.SLOT_18, r.ZONE_ID.SLOT_28, r.ZONE_ID.SLOT_32, r.ZONE_ID.MINI_BACAY, r.ZONE_ID.MINI_POKER, r.ZONE_ID.MINI_SLOT_BANCA ]).then(function(e) {
e.resultCode === r.ResponseResultCode.SUCCESS && e.funds.forEach(function(e) {
e.zoneId === r.ZONE_ID.SLOT_18 || e.zoneId === r.ZONE_ID.SLOT_28 || e.zoneId === r.ZONE_ID.SLOT_32 ? t.updateJackpot(e) : t.onNotifyMiniChanged(e);
});
});
}
},
onClick100: function() {
this.jk100.active = !0;
this.jk1k.active = !1;
this.jk10k.active = !1;
},
onClick1k: function() {
this.jk100.active = !1;
this.jk1k.active = !0;
this.jk10k.active = !1;
},
onClick10k: function() {
this.jk100.active = !1;
this.jk1k.active = !1;
this.jk10k.active = !0;
},
updateJackpot: function(t) {
var e = t, n = e.roomId, i = e.jackpot;
switch (n) {
case 2009:
(0, o.runNumber)(this.text2009, i);
break;

case 2011:
(0, o.runNumber)(this.text2011, i);
break;

case 2013:
(0, o.runNumber)(this.text2013, i);
break;

case 793:
(0, o.runNumber)(this.text793, i);
break;

case 794:
(0, o.runNumber)(this.text794, i);
break;

case 795:
(0, o.runNumber)(this.text795, i);
break;

case 1997:
(0, o.runNumber)(this.text1997, i);
break;

case 2002:
(0, o.runNumber)(this.text2002, i);
break;

case 2003:
(0, o.runNumber)(this.text2003, i);
}
},
show: function() {
var t = this;
if (!this.btnJackpot.isMoving) if (this.isShow) {
this.node.active = !1;
this.isShow = !1;
} else {
this.getUserJackpot();
this.node.active = !0;
this.isShow = !0;
window.$Global.networkService.getFundSlot([ r.ZONE_ID.SLOT_18, r.ZONE_ID.SLOT_28, r.ZONE_ID.SLOT_32, r.ZONE_ID.MINI_BACAY, r.ZONE_ID.MINI_POKER, r.ZONE_ID.MINI_SLOT_BANCA ]).then(function(e) {
e.resultCode === r.ResponseResultCode.SUCCESS && e.funds.forEach(function(e) {
e.zoneId === r.ZONE_ID.SLOT_18 || e.zoneId === r.ZONE_ID.SLOT_28 || e.zoneId === r.ZONE_ID.SLOT_32 ? t.updateJackpot(e) : t.onNotifyMiniChanged(e);
});
});
}
},
getUserJackpot: function() {
var t = this;
window.$Global.networkService.getUserJackpot([ r.ZONE_ID.SLOT_18, r.ZONE_ID.SLOT_28, r.ZONE_ID.SLOT_32, r.ZONE_ID.MINI_BACAY, r.ZONE_ID.MINI_POKER, r.ZONE_ID.MINI_SLOT_BANCA, r.ZONE_ID.CAO_THAP, r.ZONE_ID.MINI_SLOT7 ]).then(function(e) {
if (e.resultCode === r.ResponseResultCode.SUCCESS) {
t.userJackpotContent.removeAllChildren();
e.data && e.data.forEach(function(e) {
var n = cc.instantiate(t.userJackpotItem);
n.getComponent("UserJackpotItem").setData(e);
n.parent = t.userJackpotContent;
});
} else window.$UIHelper.showToast(e.desc || "Lỗi");
});
},
onTabChanged: function(t, e) {
if (0 == e) {
this.gameNode.active = !0;
this.userNode.active = !1;
} else {
this.gameNode.active = !1;
this.userNode.active = !0;
}
},
onNotifyMiniChanged: function(t) {
var e = t.zoneId, n = t.bet, i = t.jackpot;
switch (e) {
case r.ZONE_ID.MINI_POKER:
100 === n ? (0, o.runNumber)(this.textMinipoker[0], i) : 1e3 === n ? (0, o.runNumber)(this.textMinipoker[1], i) : (0, 
o.runNumber)(this.textMinipoker[2], i);
break;

case r.ZONE_ID.MINI_SLOT_BANCA:
100 === n ? (0, o.runNumber)(this.textBanca[0], i) : 1e3 === n ? (0, o.runNumber)(this.textBanca[1], i) : (0, 
o.runNumber)(this.textBanca[2], i);
break;

case r.ZONE_ID.MINI_BACAY:
100 === n ? (0, o.runNumber)(this.textMini3cay[0], i) : 1e3 === n ? (0, o.runNumber)(this.textMini3cay[1], i) : (0, 
o.runNumber)(this.textMini3cay[2], i);
break;

case r.ZONE_ID.MINI_BACAY:
100 === n ? (0, o.runNumber)(this.textMiniSlot7[0], i) : 1e3 === n ? (0, o.runNumber)(this.textMiniSlot7[1], i) : (0, 
o.runNumber)(this.textMiniSlot7[2], i);
}
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../Utils/DragAndDrop": "DragAndDrop",
"../../Utils/Helper": "Helper"
} ],
ListItemMail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d94088dlMtIUb5paXoLsRjP", "ListItemMail");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseListItem"));
cc.Class({
extends: i.default,
properties: {
nodeNewMail: {
default: null,
type: cc.Node
},
imageAvatar: {
default: null,
type: cc.Sprite
},
textNguoiGui: {
default: null,
type: cc.Label
},
textNgayGui: {
default: null,
type: cc.Label
}
},
start: function() {},
onSetData: function(t, e) {
console.log(t);
this.textNguoiGui.string = t.sender;
this.textNgayGui.string = t.sendDate;
}
});
cc._RF.pop();
}, {
"../Common/BaseListItem": "BaseListItem"
} ],
ListMail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "659c430MOlCXL1Pp6CEzUqO", "ListMail");
var i = o(t("../Common/BaseList"));
o(t("../Common/BaseListItem"));
function o(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: i.default,
properties: {},
start: function() {},
onClickItem: function(t) {
console.log(t.data);
this.container.emit("readMail", t.data);
}
});
cc._RF.pop();
}, {
"../Common/BaseList": "BaseList",
"../Common/BaseListItem": "BaseListItem"
} ],
ListTaiXiuHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5cee7uje4lN1pTuOGCp54VF", "ListTaiXiuHistory");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseList"));
cc.Class({
extends: i.default,
properties: {}
});
cc._RF.pop();
}, {
"../Common/BaseList": "BaseList"
} ],
ListTaiXiuMatchHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ac856u4noBKLZqubICSZSq/", "ListTaiXiuMatchHistory");
var i = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
textTotalBet: {
default: null,
type: cc.Label
},
textTotalBalance: {
default: null,
type: cc.Label
},
textPageNum: {
default: null,
type: cc.Label
},
listContent: {
default: null,
type: cc.Node
},
historyItem: {
default: null,
type: cc.Prefab
}
},
start: function() {
this.pageSize = 14;
this.currPage = 0;
},
setData: function(t, e) {
this.listContent.removeAllChildren();
this.data = e;
this.pot = t;
this.maxPage = Math.ceil(e.length / this.pageSize);
var n = 0, o = 0;
e.forEach(function(e) {
if (0 == t) {
n += e.betMin;
o += e.betMinReturn;
} else {
n += e.betMax;
o += e.betMaxReturn;
}
});
this.textTotalBet.string = (0, i.moneyFormat)(n + o, !0);
this.textTotalBalance.string = (0, i.moneyFormat)(o, !0);
this.drawHistory(1);
},
drawHistory: function(t) {
if (!(t <= 0 || t > this.maxPage)) {
this.listContent.removeAllChildren();
var e = (t - 1) * this.pageSize, n = e + this.pageSize;
n > this.data.length && (n = this.data.length);
for (var i = e; i < n; i++) {
var o = this.data[i], r = cc.instantiate(this.historyItem);
r.getComponent("TaiXiuMatchHistoryItem").setData(this.pot, o);
r.parent = this.listContent;
}
this.currPage = t;
this.textPageNum.string = this.currPage;
}
},
onClickNext: function() {
this.drawHistory(this.currPage + 1);
},
onClickPrevious: function() {
this.drawHistory(this.currPage - 1);
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper"
} ],
LoadSdkPlugin: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "09d86HHnfFNnaGUjaoiT2XE", "LoadSdkPlugin");
var i = t("../Configs/Config");
if (!cc.sys.isNative) {
window.fbAsyncInit = function() {
FB.init({
appId: i.CONFIG.FB_APPID,
xfbml: !0,
version: "v2.9"
});
FB.getLoginStatus(function(t) {
"connected" === t.status ? cc.log("We are connected.") : "not_authorized" === t.status ? cc.log("We are not logged in.") : cc.log("You are not logged into Facebook.");
});
};
(function(t, e, n) {
var i, o = t.getElementsByTagName(e)[0];
if (!t.getElementById(n)) {
(i = t.createElement(e)).id = n;
i.src = "//connect.facebook.net/en_US/sdk.js";
o.parentNode.insertBefore(i, o);
}
})(document, "script", "facebook-jssdk");
}
cc._RF.pop();
}, {
"../Configs/Config": "Config"
} ],
LoadingScene: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0e3a96Q8bBLvpSwcqTv3VSL", "LoadingScene");
var i = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}(), o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};
function r(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function a(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function s(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var c = function(t, e, n, i) {
var r, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (s = (a < 3 ? r(s) : a > 3 ? r(e, n, s) : r(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var l = t("../base/framework/hot-update/HotUpdate"), u = cc._decorator, f = u.ccclass, h = u.property, d = t("../base/framework/task/TaskManager"), p = t("../base/framework/task/AsyncTask"), g = t("../base/LocalStorageManager"), y = t("../base/NotificationTxt"), m = function(t) {
s(e, cc.Component);
function e() {
r(this, e);
var t = a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
t._taskManager = null;
t.info = null;
t.isUsedToRunGame = !1;
t.anotherNodeGame = null;
t.progressBar = null;
t.mainSceneName = "Login";
t.isHotUpdate = !0;
t.hotUpdate = null;
t.persent = null;
return t;
}
i(e, [ {
key: "onLoad",
value: function() {
var t = this;
cc.log("skip update: " + JSON.stringify(this.isSkipUpdate()));
this.showInfo(y.NotificationTxt.CHECKING_UPDATE);
if (this.isHotUpdate && this.hotUpdate && cc.sys.isNative && !this.isSkipUpdate()) {
cc.log("Loading/HotUpdate");
this.hotUpdate.init(function() {
cc.log("LoadingScene/hot update");
this.hotUpdate.updateResource({
callbackUpToDate: function() {
cc.log("callbackUpToDate");
t.showInfo(y.NotificationTxt.UP_TO_DATE);
t.setSkipUpdate(!0);
cc.game.restart();
},
callbackNewVersionFound: function() {
cc.log("callbackNewVersionFound");
t.showInfo(y.NotificationTxt.NEW_VERSION_FOUND);
t.setSkipUpdate(!0);
t.showInfo(y.NotificationTxt.UPDATING);
t.hotUpdate.isReadyUpdate() ? t.hotUpdate.hotUpdate() : t.scheduleOnce(function() {
if (t.hotUpdate.isReadyUpdate()) t.hotUpdate.hotUpdate(); else {
cc.log("cannot update.");
t.setSkipUpdate(!1);
t.showInfo(y.NotificationTxt.ERR_UPDATE);
cc.game.restart();
}
}, 1);
},
callbackFail: function() {
cc.log("callbackFail");
t.showInfo(y.NotificationTxt.ERR_UPDATE);
if (t.hotUpdate.canRetry()) {
t.showInfo(y.NotificationTxt.RETRY_UPDATE);
t.hotUpdate.retry();
} else {
t.setSkipUpdate(!1);
cc.game.restart();
}
},
callbackFinish: function() {
cc.log("callbackFinish");
t.setSkipUpdate(!0);
},
callbackUpdateProgress: function(e) {
t._setPercent(e);
},
callbackTimeout: function() {
cc.log("callbackTimeout");
cc.game.restart();
},
callbackFailDownloadManifest: function() {
cc.log("LoadingScene/callbackFailDownloadManifest");
},
callbackFailParseManifest: function() {
cc.log("LoadingScene/callbackFailParseManifest");
}
});
}.bind(this));
} else {
cc.log("skip update main loading");
this.setSkipUpdate(!1);
this.mainLoading();
}
}
}, {
key: "mainLoading",
value: function() {
this.showInfo("");
this._taskManager = new d.default();
var t = this;
this._taskManager.addTask(new p.default(function() {
cc.log("task main sence");
cc.director.preloadScene("GameList", function(e, n, i) {
t._setPercent(e / n);
t.persent.string = Math.floor(100 * t.progressBar.progress) + "%";
}, function(t) {
if (t) throw t;
cc.log("Next scene pre loaded");
this.completedCallback();
}.bind(this));
}));
this._taskManager.addTask(new p.default(function() {
cc.log("task main sence");
cc.director.preloadScene(t.mainSceneName, function(e, n, i) {
t._setPercent(e / n);
}, function(t) {
if (t) throw t;
cc.log("Next scene pre loaded");
this.completedCallback();
}.bind(this));
}));
this._taskManager.run(function(e, n) {
t._setPercent(e / n);
}, function(e) {
cc.log("complete load config");
if (e) {
cc.log(e);
throw e;
}
setTimeout(function() {
t._onLoadingComplete();
}, 1e3);
});
}
}, {
key: "_setPercent",
value: function(t) {
var e = t.toFixed(2);
this.progressBar && (this.progressBar.progress = e);
}
}, {
key: "_onLoadingComplete",
value: function() {
cc.director.loadScene(this.mainSceneName);
}
}, {
key: "showInfo",
value: function(t) {
this.info && (this.info.string = t);
}
}, {
key: "isSkipUpdate",
value: function() {
return g.LocalStorageManager.getBooleanIsSkipUpdate();
}
}, {
key: "setSkipUpdate",
value: function(t) {
if (t) {
cc.log("set skip update true");
g.LocalStorageManager.setTrueIsSkipUpdate();
} else {
cc.log("set skip update remove skip update local key");
g.LocalStorageManager.removeLocalIsSkipUpdate();
}
}
} ]);
return e;
}();
c([ h(cc.Label) ], m.prototype, "info", void 0);
c([ h(cc.Label) ], m.prototype, "persent", void 0);
c([ h(cc.Boolean) ], m.prototype, "isUsedToRunGame", void 0);
c([ h({
type: cc.Node,
visible: function() {
return this.isUsedToRunGame;
}
}) ], m.prototype, "anotherNodeGame", void 0);
c([ h(cc.ProgressBar) ], m.prototype, "progressBar", void 0);
c([ h(cc.String) ], m.prototype, "isHotUpdate", void 0);
c([ h({
type: l.default,
visible: function() {
return this.isHotUpdate;
}
}) ], m.prototype, "hotUpdate", void 0);
m = c([ f ], m);
n.default = m;
cc._RF.pop();
}, {
"../base/LocalStorageManager": "LocalStorageManager",
"../base/NotificationTxt": "NotificationTxt",
"../base/framework/hot-update/HotUpdate": "HotUpdate",
"../base/framework/task/AsyncTask": "AsyncTask",
"../base/framework/task/TaskManager": "TaskManager"
} ],
Loading: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "89e9bLLcVZNx7cieXxTZ3IW", "Loading");
cc.Class({
extends: cc.Component,
properties: {
processbar: {
default: null,
type: cc.ProgressBar
},
persent: {
default: null,
type: cc.Label
}
},
onLoad: function() {
this.listScene = [ "Login", "GameList", "Slot_32", "Slot_18", "Slot_28" ];
this.step = 1 / this.listScene.length;
},
start: function() {
this.process(0);
},
process: function(t) {
var e = this;
this.persent.string = Math.floor(100 * this.processbar.progress) + "%";
cc.director.preloadScene(this.listScene[t], function() {
e.processbar.progress += e.step;
t >= e.listScene.length - 1 ? cc.director.loadScene("Login") : e.process(t + 1);
});
}
});
cc._RF.pop();
}, {} ],
LobbyItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "387b6iQne1EiLsUyxKrCvRr", "LobbyItem");
var i = t("../../Utils/Helper"), o = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./MultipleFund"));
cc.Class({
extends: cc.Component,
properties: {
textHu1: {
default: null,
type: cc.Label
},
textHu2: {
default: null,
type: cc.Label
},
textHu3: {
default: null,
type: cc.Label
},
listMultipleFunds: {
default: [],
type: o.default
},
data: {
default: []
}
},
setZoneId: function(t) {
this.zoneId = t;
},
getZoneId: function() {
return this.zoneId;
},
setJackpot: function(t) {
if (100 == t.bet) {
this.data[2] = t.jackpot;
(0, i.runNumber)(this.textHu3, t.jackpot);
t.multipleFund && this.listMultipleFunds[0]._setMultipleFundIconGame(t.multipleFund);
} else if (1e3 == t.bet) {
this.data[1] = t.jackpot;
(0, i.runNumber)(this.textHu2, t.jackpot);
t.multipleFund && this.listMultipleFunds[1]._setMultipleFundIconGame(t.multipleFund);
} else if (1e4 == t.bet) {
this.data[0] = t.jackpot;
(0, i.runNumber)(this.textHu1, t.jackpot);
t.multipleFund && this.listMultipleFunds[2]._setMultipleFundIconGame(t.multipleFund);
}
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper",
"./MultipleFund": "MultipleFund"
} ],
LocalDataManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d8e1cQchO9DnZNbN/BJysTc", "LocalDataManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}();
function o(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
var r = function() {
function t() {
o(this, t);
}
i(t, null, [ {
key: "getStringForKey",
value: function(t, e) {
var n = cc.sys.localStorage.getItem(t);
return n || e;
}
}, {
key: "setStringForKey",
value: function(t, e) {
cc.sys.localStorage.setItem(t, e);
}
}, {
key: "getIntForKey",
value: function(t, e) {
var n = this.getStringForKey(t);
return n ? parseInt(n) : e;
}
}, {
key: "setIntForKey",
value: function(t, e) {
this.setStringForKey(t, e + "");
}
}, {
key: "getFloatForKey",
value: function(t, e) {
var n = this.getStringForKey(t);
return n ? parseFloat(n) : e;
}
}, {
key: "setFloatForKey",
value: function(t, e) {
this.setStringForKey(t, e + "");
}
}, {
key: "getObjectForKey",
value: function(t, e) {
var n = this.getStringForKey(t);
return n ? JSON.parse(n) : e;
}
}, {
key: "setObjectForKey",
value: function(t, e) {
this.setStringForKey(t, JSON.stringify(e));
}
}, {
key: "getBoolForKey",
value: function(t, e) {
var n = this.getStringForKey(t);
return n ? "true" === n : e;
}
}, {
key: "setBoolForKey",
value: function(t, e) {
this.setStringForKey(t, e);
}
} ]);
return t;
}();
n.default = r;
e.exports = n.default;
cc._RF.pop();
}, {} ],
LocalStorageManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "379b6uJw5hJC4DAPvCuZIHO", "LocalStorageManager");
var i = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}();
function o(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = function() {
function t() {
o(this, t);
}
i(t, null, [ {
key: "getCountFailureCardVn",
value: function() {
var t = cc.sys.localStorage.getItem("CountFailureCardVn");
cc.log("getCountFailureCardVn: " + t);
return t ? JSON.parse(t) : {
count: 0,
time: 0
};
}
}, {
key: "setCountFailureCardVn",
value: function(t) {
var e = JSON.stringify(t);
cc.log("setCountFailureCardVn: " + e);
cc.sys.localStorage.setItem("CountFailureCardVn", e);
}
}, {
key: "getIsFirstLogin",
value: function() {
var t = cc.sys.localStorage.getItem("isFirstLogin");
return null === t || "1" === t;
}
}, {
key: "setIsFirstLogin",
value: function(t) {
var e = t ? "1" : "0";
cc.sys.localStorage.setItem("isFirstLogin", e);
}
}, {
key: "getDataLanguage",
value: function() {
return cc.sys.localStorage.getItem(JSON.stringify("lang"));
}
}, {
key: "setDataLanguage",
value: function(t) {
cc.sys.localStorage.setItem(JSON.stringify("lang"), JSON.stringify(t));
}
}, {
key: "getSkipUpdate",
value: function() {
return cc.sys.localStorage.getItem("is_skip");
}
}, {
key: "setSkipUpdate",
value: function(t) {
cc.sys.localStorage.setItem("is_skip", t);
}
}, {
key: "getBooleanIsSkipUpdate",
value: function() {
return "true" === this.getSkipUpdate();
}
}, {
key: "setTrueIsSkipUpdate",
value: function() {
t.setSkipUpdate("true");
}
}, {
key: "removeLocalIsSkipUpdate",
value: function() {
t.setSkipUpdate("");
}
}, {
key: "getDateUtm",
value: function() {
return cc.sys.localStorage.getItem(JSON.stringify("dateTimeUtm"));
}
}, {
key: "setDateUtm",
value: function() {
cc.sys.localStorage.setItem(JSON.stringify("dateTimeUtm"), JSON.stringify(new Date().getTime()));
}
}, {
key: "setLongReferer",
value: function(t) {
cc.sys.localStorage.setItem(JSON.stringify("longReferrer"), JSON.stringify(t));
}
}, {
key: "setNullToken",
value: function() {
cc.sys.localStorage.setItem(JSON.stringify("token"), "");
}
}, {
key: "getUserNameToken",
value: function() {
var t = cc.sys.localStorage.getItem(JSON.stringify("username"));
return t || "";
}
}, {
key: "isSaveLogin",
value: function() {
return !!cc.sys.localStorage.getItem("isSaveLogin");
}
}, {
key: "setSaveLogin",
value: function(t) {
t ? cc.sys.localStorage.setItem("isSaveLogin", 1) : cc.sys.localStorage.setItem("isSaveLogin", "");
}
}, {
key: "setUserNameToken",
value: function(t) {
cc.sys.localStorage.setItem(JSON.stringify("username"), t);
}
}, {
key: "getPasswordToken",
value: function() {
var t = cc.sys.localStorage.getItem(JSON.stringify("password"));
return t || "";
}
}, {
key: "setPassWordToken",
value: function(t) {
cc.sys.localStorage.setItem(JSON.stringify("password"), t);
}
}, {
key: "setIsAutoLogin",
value: function(t) {
cc.sys.localStorage.setItem(JSON.stringify("isAutoLogin"), JSON.stringify(t));
}
}, {
key: "getIsAutoLogin",
value: function() {
return cc.sys.localStorage.getItem(JSON.stringify("isAutoLogin"));
}
}, {
key: "setFalseAutoLogin",
value: function() {
this.setIsAutoLogin(0);
}
}, {
key: "setTrueIsAutoLogin",
value: function() {
this.setIsAutoLogin(1);
}
}, {
key: "isAutoLogin",
value: function() {
return "1" === this.getIsAutoLogin();
}
}, {
key: "setSettingSound",
value: function(t) {
var e = t ? "1" : "0";
cc.sys.localStorage.setItem("soundWinOn", e);
}
}, {
key: "getIsOnSound",
value: function() {
var t = cc.sys.localStorage.getItem("soundWinOn");
return !t || "1" == t;
}
} ]);
return t;
}();
n.LocalStorageManager = r;
cc._RF.pop();
}, {} ],
LoginScene: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fc87axsLTlI6bx3nPD6f2Ml", "LoginScene");
var i = t("../../Utils/Constants"), o = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/UIHelper"));
var r = t("../../plugins/FrameWorkLogin"), a = t("../../plugins/GameUtil");
cc.Class({
extends: cc.Component,
properties: {
textUsername: {
default: null,
type: cc.EditBox
},
textPassword: {
default: null,
type: cc.EditBox
},
buttonLogin: {
default: null,
type: cc.Button
},
buttonRegister: {
default: null,
type: cc.Button
},
textUsernameReg: {
default: null,
type: cc.EditBox
},
textPasswordReg: {
default: null,
type: cc.EditBox
},
textPasswordReg2: {
default: null,
type: cc.EditBox
},
panelLogin: {
default: null,
type: cc.Node
},
panelRegister: {
default: null,
type: cc.Node
},
eventNode: {
default: null,
type: cc.Node
},
listgameNode: {
default: null,
type: cc.Node
},
panelOTP: {
default: null,
type: cc.Node
},
inputOTP: {
default: null,
type: cc.EditBox
},
txtRefcodeName: {
default: null,
type: cc.Label
},
inputRefcode: {
default: null,
type: cc.EditBox
},
uiHelper: {
default: null,
type: o.default
}
},
onLoad: function() {
this.myCipher = this.cipher("EhCm7LEH3wP9hWNuJYoRK2Dv7ech3RKA");
this.myDecipher = this.decipher("EhCm7LEH3wP9hWNuJYoRK2Dv7ech3RKA");
this.uiHelper.showLoading(!0);
this.panelLogin.active = !1;
this.panelRegister.active = !1;
var t = cc.sys.localStorage.getItem("userData");
if (t) try {
var e = JSON.parse(this.myDecipher(t));
this.textUsername.string = e.username;
this.textPassword.string = e.password;
} catch (t) {
cc.sys.localStorage.removeItem("userData");
}
this.listgameNode.width = cc.winSize.width - this.eventNode.width - 50;
if (window.$Global && window.$Global.networkService) {
window.$Global.networkService.rootRoom && (window.$Global.networkService.rootRoom = null);
window.$Global.networkService.currentRoom && (window.$Global.networkService.currentRoom = null);
}
this.firstEnterOtp = !0;
},
start: function() {
window.$Global.networkService.on("socketOpen", this.autoLogin.bind(this));
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
},
onDestroy: function() {
window.$Global.networkService.off("socketOpen");
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
},
onKeyDown: function(t) {},
onKeyUp: function(t) {
switch (t.keyCode) {
case cc.macro.KEY.enter:
this.onClickLogin();
break;

case cc.macro.KEY.tab:
cc.error(this.textUsername.isFocused());
}
},
onClickLoginFacebook: function() {
var t = this;
if (cc.sys.isNative) if (a.default.isAndroidDevice()) {
cc.log("call function android");
r.FacebookPluginAndroid.login(function(e) {
cc.log("call success from native");
t.loginWithAccesToken(e);
}, function() {
cc.log("login facebook android failure");
}, function() {
cc.log("login facebook android failure");
});
} else a.default.isIOSDevice(); else {
cc.log("start login with web");
FB.getLoginStatus(function(e) {
if ("connected" === e.status) {
e.authResponse.userID;
var n = e.authResponse.accessToken;
cc.log("accessToken : ", n);
t.loginWithAccesToken(n);
} else FB.login(function(e) {
e.authResponse ? FB.api("/me", "get", {
fields: "name,email,gender,verified,link"
}, function(e) {
cc.log("fbID : " + e.id);
var n = FB.getAuthResponse().accessToken;
cc.log("accessToken : ", n);
t.loginWithAccesToken(n);
}) : cc.log("User cancelled login or did not fully authorize.");
});
});
}
},
loginWithAccesToken: function(t) {
var e = this;
window.$Global.userService.loginFacebook(t, this.inputOTP.string).then(function(t) {
window.$UIHelper.showLoading(!1);
if (t.resultCode === i.ResponseResultCode.SUCCESS) {
var n = t.desc;
window.$Global.networkService.currentGoldClient = n.gold;
cc.director.loadScene("GameList");
} else if (t.resultCode === i.ResponseResultCode.INVALID_PASSWORD) {
e.firstEnterOtp ? e.uiHelper.showToast("Tài khoản của bạn đang cài đặt bảo mật đăng nhập") : e.uiHelper.showToast("OTP sai, vui lòng nhập lại");
e.showOtpPanel();
e.firstEnterOtp = !1;
} else e.uiHelper.showToast(t.desc);
window.$Global.firstLogin = !1;
});
},
onClickLogin: function() {
var t = this;
window.$UIHelper.showLoading(!0);
setTimeout(function() {
window.$UIHelper.showLoading(!1);
}, 5e3);
var e = this.checkValidLogin();
e.isValid ? window.$Global.userService.login(e.data.username, e.data.password, this.inputOTP.string).then(function(e) {
window.$UIHelper.showLoading(!1);
if (e.resultCode === i.ResponseResultCode.SUCCESS) {
var n = e.desc;
if (null === cc.sys.localStorage.getItem("userData")) {
var o = {
username: t.textUsername.string,
password: t.textPassword.string
};
cc.sys.localStorage.setItem("userData", t.myCipher(JSON.stringify(o)));
} else try {
(o = JSON.parse(t.myDecipher(cc.sys.localStorage.getItem("userData")))).username = t.textUsername.string;
o.password = t.textPassword.string;
cc.sys.localStorage.removeItem("userData");
cc.sys.localStorage.setItem("userData", t.myCipher(JSON.stringify(o)));
} catch (t) {
cc.sys.localStorage.removeItem("userData");
}
window.$Global.networkService.currentGoldClient = n.gold;
cc.director.loadScene("GameList");
} else if (e.resultCode === i.ResponseResultCode.INVALID_PASSWORD) {
t.firstEnterOtp ? t.uiHelper.showToast("Tài khoản của bạn đang cài đặt bảo mật đăng nhập") : t.uiHelper.showToast("OTP sai, vui lòng nhập lại");
t.showOtpPanel();
t.firstEnterOtp = !1;
} else t.uiHelper.showToast(e.desc);
window.$Global.firstLogin = !1;
}) : this.uiHelper.showToast(e.errors[0]);
},
onClickGoRegister: function() {
this.panelRegister.active = !0;
},
onClickCancelRegister: function() {
this.panelRegister.active = !1;
},
onClickDoRegister: function() {
var t = this;
this.validationRegister = this.checkValidRegister();
this.validationRegister.isValid ? null != window.$Global.CONFIG.token && void 0 != window.$Global.CONFIG.token ? window.$Global.networkService.registerAccount(this.validationRegister.data).then(function(e) {
t.onRegisterDone(e);
}) : window.$Global.networkService.getApiToken().then(function(e) {
e = response.data.data;
window.$Global.CONFIG.token = e;
window.$Global.networkService.registerAccount(t.validationRegister.data).then(function(e) {
t.onRegisterDone(e);
});
return Promise.resolve(e);
}) : this.uiHelper.showToast(this.validationRegister.errors[0]);
},
onRegisterDone: function(t) {
if (t.status == i.ResponseResultCode.SUCCESS) {
t.data;
var e = "Bạn đã đăng ký thành công tài khoản " + this.validationRegister.data.username;
this.panelRegister.active = !1;
this.uiHelper.showPopup(e, function() {
this.textUsername.string = this.validationRegister.data.username;
this.textPassword.string = this.validationRegister.data.password;
this.onClickLogin();
}.bind(this), !1);
} else this.uiHelper.showToast(t.message);
},
checkValidLogin: function() {
return {
isValid: !0,
data: {
username: this.textUsername.string,
password: this.textPassword.string
}
};
},
checkValidRegister: function() {
var t = this.textUsernameReg.string.trim(), e = this.textPasswordReg.string.trim(), n = this.textPasswordReg2.string.trim(), i = this.inputRefcode.string.trim(), o = {
errors: []
}, r = !0;
if ("" == t) {
r = !1;
o.errors.push("Vui lòng nhập tên đăng nhập");
}
if ("" == e || "" == n) {
r = !1;
o.errors.push("Vui lòng nhập mật khẩu");
}
if (e != n) {
r = !1;
o.errors.push("Xác nhận mật khẩu không đúng");
}
o.isValid = r;
o.data = {
username: t,
password: e,
refcode: i
};
return o;
},
onClickBtn: function() {
this.uiHelper.showToast("Vui lòng đăng nhập");
},
onClickShowPanelLogin: function() {
this.panelLogin.active = !0;
},
onClickHidePanelLogin: function() {
this.panelLogin.active = !1;
},
showOtpPanel: function() {
this.inputOTP.string = "";
this.panelOTP.active = !0;
},
hideOtpPanel: function() {
this.panelOTP.active = !1;
this.firstEnterOtp = !0;
},
loginOtp: function() {
if ("" != this.inputOTP.string) {
this.panelOTP.active = !1;
this.onClickLogin();
} else this.uiHelper.showToast("OTP không được phép để trống");
},
onClickOTP: function() {
var t = this;
window.$Global.userService.getOTP().then(function(e) {
e.resultCode == i.ResponseResultCode.SUCCESS ? t.uiHelper.showPopup("OTP đã được gửi đến điện thoại của bạn. Lưu ý OTP có hiệu lực trong 4 phút.", function() {}) : t.uiHelper.showToast(e.desc);
});
},
onTextRefcodeChanged: function(t) {
var e = this, n = t;
window.$Global.userService.getUserDetail(n).then(function(t) {
if (t) {
var n = JSON.parse(t);
e.txtRefcodeName.string = n.fullName;
} else e.txtRefcodeName.string = "Không tồn tại";
});
},
autoLogin: function() {
0 == window.$Global.firstLogin || window.$Global.forceUpdate || window.$Global.needUpdate || "" == this.textUsername.string || "" == this.textPassword.string || this.onClickLogin();
},
cipher: function(t) {
var e = function(t) {
return t.split("").map(function(t) {
return t.charCodeAt(0);
});
}, n = function(t) {
return ("0" + Number(t).toString(16)).substr(-2);
}, i = function(n) {
return e(t).reduce(function(t, e) {
return t ^ e;
}, n);
};
return function(t) {
return t.split("").map(e).map(i).map(n).join("");
};
},
decipher: function(t) {
var e = function(t) {
return t.split("").map(function(t) {
return t.charCodeAt(0);
});
}, n = (e(t), function(n) {
return e(t).reduce(function(t, e) {
return t ^ e;
}, n);
});
return function(t) {
return t.match(/.{1,2}/g).map(function(t) {
return parseInt(t, 16);
}).map(n).map(function(t) {
return String.fromCharCode(t);
}).join("");
};
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../plugins/FrameWorkLogin": "FrameWorkLogin",
"../../plugins/GameUtil": "GameUtil",
"../Common/UIHelper": "UIHelper"
} ],
MiniBaCay: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7dda3LYscJLGK/HrWChCqGd", "MiniBaCay");
var i = t("lodash"), o = t("../../Utils/Constants"), r = t("../../Utils/Helper"), a = f(t("../../SlotGame/JackpotEffect")), s = f(t("./BaCayUserHistory")), c = f(t("./BaCayJackpotHistory")), l = f(t("../Common/BaseDialog")), u = f(t("../GameList/MultipleFund"));
function f(t) {
return t && t.__esModule ? t : {
default: t
};
}
var h = 23, d = 202, p = 221, g = 222;
cc.Class({
extends: cc.Component,
properties: {
listColumns: {
default: [],
type: cc.Node
},
card: {
default: null,
type: cc.Prefab
},
listCards: {
default: [],
type: cc.SpriteFrame
},
oldsResult: {
default: []
},
cardsResult: {
default: []
},
autoToggle: {
default: null,
type: cc.Toggle
},
spinBtn: {
default: null,
type: cc.Button
},
isAuto: {
default: !1
},
winNode: {
default: null,
type: cc.Node
},
jackpotEffect: {
default: null,
type: a.default
},
txtJackpot: {
default: null,
type: cc.Label
},
txtID: {
default: null,
type: cc.Label
},
betToggles: {
default: null,
type: cc.ToggleContainer
},
dialogUserHistory: {
default: null,
type: s.default
},
dialogJackpotHistory: {
default: null,
type: c.default
},
dialogGuide: {
default: null,
type: l.default
},
multipleFund: {
default: null,
type: u.default
},
txtJackpotXHu: {
default: null,
type: cc.Label
}
},
onLoad: function() {
this.genRandomItems();
this.animSpin = this.spinBtn.getComponent(cc.Animation);
},
start: function() {
window.$Global.networkService.on("" + o.REQUEST_TYPE.MINI_BACAY_GAMES, this.onMessage.bind(this));
window.$Global.networkService.on("notify_" + o.NOTIFY_TYPE.NOTIFY_MINI_CHANGED, this.onNotifyMiniChanged.bind(this));
},
onDestroy: function() {
window.$Global.networkService.off("" + o.REQUEST_TYPE.MINI_BACAY_GAMES);
window.$Global.networkService.off("notify_" + o.NOTIFY_TYPE.NOTIFY_MINI_CHANGED);
},
show: function() {
this.sub(100);
this.node.active = !0;
window.$Global.minigame.isShowMiniBaCay = !0;
},
hide: function() {
this.isAuto && this.stopAuto();
this.reset();
this.node.active = !1;
window.$Global.minigame.isShowMiniBaCay = !1;
},
sub: function(t) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.MINI_BACAY_GAMES, {
type: h,
chipType: 1,
bet: t
});
this.stopAuto();
this.currentBet = t;
},
spin: function() {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.MINI_BACAY_GAMES, {
type: d
});
this.spinBtn.interactable = !1;
this.jackpotEffect.hide();
this.animSpin.play();
},
onMessage: function(t) {
var e = t;
if (e.resultCode === o.ResponseResultCode.SUCCESS) e.type === p ? this.onJackpotHistoryDone(e.history) : e.type === g ? this.onUserHistoryDone(e.history) : e.type === d ? this.onSpinDone(e) : e.type === h && this.updateJackpot(e.jackpot); else {
window.$UIHelper.showToast(e.desc || e.content || "");
this.spinBtn.interactable = !0;
}
},
genRandomItems: function() {
this.firstCards = [];
for (var t = 0; t < 3; t++) for (var e = this.listColumns[t], n = 0; n < 25; n++) {
var o = (0, i.random)(0, this.listCards.length - 1, !1);
if (0 == n) {
for (;-1 != this.firstCards.indexOf(o); ) o = (0, i.random)(0, this.listCards.length - 1, !1);
this.firstCards.push(o);
}
var r = cc.instantiate(this.card);
r.x = 0;
r.y = 133 * n;
r.getComponent(cc.Sprite).spriteFrame = this.listCards[o];
e.addChild(r);
}
},
resetPosition: function() {
for (var t = 0; t < 3; t++) {
this.listColumns[t].y = 0;
}
},
reset: function() {
this.txtID.string = "";
this.isAuto = !1;
this.autoToggle.isChecked = !1;
this.spinBtn.interactable = !0;
this.betToggles.toggleItems[0].check();
},
stopAuto: function() {
this.autoToggle.isChecked = !1;
this.isAuto = !1;
},
onSpinDone: function(t) {
this.cardsResult = t.cards;
this.winChips = t.winChips;
this.isWinJackpot = t.isWinJackpot;
this.jackpot = t.jackpot;
this.setSpinID(t.spinID);
this.resetPosition();
this.setOldResult();
this.setResult();
this.roll();
},
setOldResult: function() {
if (0 !== this.oldsResult.length) for (var t = 0; t < 3; t++) {
var e = this.listColumns[t].children[0], n = 4 * (this.oldsResult[t].card - 1) + (this.oldsResult[t].face - 1);
e.getComponent(cc.Sprite).spriteFrame = this.listCards[n];
} else this.setResult();
},
setResult: function() {
if (0 !== this.cardsResult.length) for (var t = 0; t < 3; t++) {
var e = this.listColumns[t].children[24], n = 4 * (this.cardsResult[t].card - 1) + (this.cardsResult[t].face - 1);
e.getComponent(cc.Sprite).spriteFrame = this.listCards[n];
}
},
roll: function() {
for (var t = 0; t < 3; t++) {
var e = cc.delayTime(.1 * t), n = this.listColumns[t];
2 === t ? n.runAction(cc.sequence(e, cc.moveBy(.1, 0, 20), cc.moveBy(1, 0, -3212), cc.callFunc(this.finishRoll, this))) : n.runAction(cc.sequence(e, cc.moveBy(.1, 0, 20), cc.moveBy(1, 0, -3212)));
}
},
finishRoll: function() {
this.oldsResult = this.cardsResult;
this.showResult();
},
showResult: function() {
window.$Global.networkService.updateMoneyWithZoneId(o.ZONE_ID.MINI_BACAY);
if (this.isWinJackpot) {
this.jackpotEffect.show(this.winChips);
this.stopAuto();
} else this.winChips > 0 ? this.showWinChip(this.winChips) : this.onShowWinDone();
this.updateJackpot(this.jackpot);
this.isAuto || (this.spinBtn.interactable = !0);
},
showWinChip: function(t) {
this.winNode.active = !0;
this.winNode.children[0].getComponent(cc.Label).string = (0, r.numberWithDot)(t);
this.winNode.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
this.winNode.active = !1;
}.bind(this)), cc.callFunc(this.onShowWinDone.bind(this))));
},
onShowWinDone: function() {
this.isAuto && this.spin();
},
updateJackpot: function(t) {
(0, r.runNumber)(this.txtJackpot, t);
(0, r.runNumber)(this.txtJackpotXHu, t);
},
setSpinID: function(t) {
this.txtID.string = "#" + t;
},
autoClick: function() {
if (this.isAuto) {
this.isAuto = !1;
this.spinBtn.interactable = !0;
} else {
this.isAuto = !0;
this.spinBtn.interactable && this.spin();
}
},
onBetChanged: function(t, e) {
this.sub(e);
},
showUserHistory: function() {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.MINI_BACAY_GAMES, {
type: g
});
this.dialogUserHistory.show();
},
onUserHistoryDone: function(t) {
this.dialogUserHistory.setData(t);
},
showJackpotHistory: function() {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.MINI_BACAY_GAMES, {
type: p
});
this.dialogJackpotHistory.show();
},
onJackpotHistoryDone: function(t) {
this.dialogJackpotHistory.setData(t);
},
showGuide: function() {
this.dialogGuide.show();
},
onNotifyMiniChanged: function(t) {
if (t.zoneId == o.ZONE_ID.MINI_BACAY && t.bet == this.currentBet) {
this.updateJackpot(t.jackpot);
this.multipleFund._setMultipleFund(t.multipleFund);
}
}
});
cc._RF.pop();
}, {
"../../SlotGame/JackpotEffect": "JackpotEffect",
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper",
"../Common/BaseDialog": "BaseDialog",
"../GameList/MultipleFund": "MultipleFund",
"./BaCayJackpotHistory": "BaCayJackpotHistory",
"./BaCayUserHistory": "BaCayUserHistory",
lodash: 9
} ],
MiniBauCua: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "275c71nhZNHHYfp5z6hejPk", "MiniBauCua");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ANIM_STATE = n.BauCuaState = n.BauCuaNotifyType = n.BauCuaRequestType = void 0;
var i = l(t("./BauCuaDoor")), o = l(t("./DialogBauCuaTop")), r = l(t("./DialogBauCuaHistory")), a = l(t("../Common/BaseDialog")), s = t("../../Utils/Constants"), c = t("../../Utils/Helper");
function l(t) {
return t && t.__esModule ? t : {
default: t
};
}
var u = n.BauCuaRequestType = {
SUBSCRIBE: 23,
UN_SUBSCRIBE: 24,
ADD_BET: 214,
GET_USER_HISTORY: 222,
GET_TOP_USERS: 223,
GET_TOP_WIN_DAILY: 232
}, f = n.BauCuaNotifyType = {
UPDATE_INFO: 1,
USER_SET_BET: 2,
END_MATCH: 3
}, h = n.BauCuaState = {
DEAL: 0,
SET_BET: 1,
END_MATCH: 2,
WAIT_NEW_MATCH: 8
}, d = n.ANIM_STATE = {
NORMAL: 1,
END: 2,
RESULT: 3,
FINISH: 4
};
cc.Class({
extends: cc.Component,
properties: {
doors: {
default: [],
type: i.default
},
listBet: {
default: [],
type: cc.Toggle
},
txtTime: {
default: null,
type: cc.Label
},
txtID: {
default: null,
type: cc.Label
},
listDice: {
default: [],
type: cc.Sprite
},
listDiceSprite: {
default: [],
type: cc.SpriteFrame
},
bat: {
default: null,
type: cc.Node
},
dia: {
default: null,
type: cc.Node
},
historyContent: {
default: null,
type: cc.Node
},
historyItem: {
default: null,
type: cc.Prefab
},
dialogTop: {
default: null,
type: o.default
},
dialogHis: {
default: null,
type: r.default
},
dialogGuide: {
default: null,
type: a.default
},
toggleNan: {
default: null,
type: cc.Toggle
},
soicauNode: {
default: null,
type: cc.Node
},
txtTimeCountDown: {
default: null,
type: cc.Label
},
xucxac: {
default: null,
type: cc.Animation
},
animEnd: {
default: null,
type: cc.Node
},
animNormal: {
default: null,
type: cc.Node
},
animFinish: {
default: null,
type: cc.Node
},
imgFinish: {
default: null,
type: cc.Node
}
},
show: function() {
this.node.active = !0;
this.onNetwork();
this.reset();
this.subscribe();
},
hide: function() {
this.node.active = !1;
this.unsubscribe();
window.$Global.minigame.isShowBaucua = !1;
},
subscribe: function() {
window.$Global.networkService.sendMessage(s.REQUEST_TYPE.MINI_BAUCUA, {
type: u.SUBSCRIBE,
amount: this.currentBet
});
},
unsubscribe: function() {
this.offNetwork();
},
onNetwork: function() {
window.$Global.networkService.on("" + s.REQUEST_TYPE.MINI_BAUCUA, this.onMessage.bind(this));
window.$Global.networkService.on("notify_" + s.NOTIFY_TYPE.MINI_BAUCUA, this.onNotify.bind(this));
},
offNetwork: function() {
window.$Global.networkService.off("" + s.REQUEST_TYPE.MINI_BAUCUA);
window.$Global.networkService.off("notify_" + s.NOTIFY_TYPE.MINI_BAUCUA);
clearInterval(this.timeCountDown);
this.timeCountDown = null;
},
onDestroy: function() {
this.offNetwork();
},
reset: function() {
this.listBet[0].isChecked = !0;
this.currentBet = 1e3;
this.dia.active = !1;
this.stopDice();
this.bat.setPosition(-131.809, -13.982);
},
betClick: function(t, e) {
var n = e;
window.$Global.networkService.sendMessage(s.REQUEST_TYPE.MINI_BAUCUA, {
type: u.ADD_BET,
pot: n,
amount: this.currentBet
});
},
onBetChange: function(t, e) {
this.currentBet = e;
},
onMessage: function(t) {
var e = t;
if (e.resultCode === s.ResponseResultCode.SUCCESS) switch (e.type) {
case u.SUBSCRIBE:
this.onSubscribeDone(e);
break;

case u.ADD_BET:
this.setRoomBet(e.room, e.user);
break;

case u.GET_USER_HISTORY:
this.dialogHis.setData(e.history);
break;

case u.GET_TOP_WIN_DAILY:
this.dialogTop.setData(e.top_win);
} else window.$UIHelper.showToast(e.desc || "Error");
},
onNotify: function(t) {
var e = t;
switch (e.type) {
case f.UPDATE_INFO:
this.stateChange(e.room);
e.displayId > 0 && (this.txtID.string = "#" + e.displayId);
break;

case f.USER_SET_BET:
this.setRoomBet(e.room);
break;

case f.END_MATCH:
this.endMatch(e);
}
},
resetDoors: function() {
this.doors.forEach(function(t) {
t.reset();
});
},
onSubscribeDone: function(t) {
this.txtID.string = "#" + t.displayId;
this.setTimeCountDown(t.room.timeCountDown);
this.setRoomBet(t.room, t.user);
this.setHistory(t.history);
this.historys = t.history;
this.setPlateAnimation(d.NORMAL);
},
setTimeCountDown: function(t) {
var e = this;
if (!this.timeCountDown) {
this.timeRemain = t;
this.txtTime.string = (0, c.timeFormat)(this.timeRemain);
this.txtTimeCountDown.string = (0, c.timeSecondFormat)(this.timeRemain);
this.timeRemain--;
this.timeCountDown = setInterval(function() {
if (e.timeRemain > 0) {
e.txtTime.string = (0, c.timeFormat)(e.timeRemain);
e.txtTimeCountDown.string = (0, c.timeSecondFormat)(e.timeRemain);
} else {
0 == e.timeRemain && (e.txtTime.string = (0, c.timeFormat)(e.timeRemain));
e.txtTimeCountDown.string = (0, c.timeSecondFormat)(e.timeRemain);
clearInterval(e.timeCountDown);
e.timeCountDown = null;
}
5 === e.timeRemain && e.state === h.SET_BET && e.setPlateAnimation(d.END);
e.timeRemain--;
}, 1e3);
}
},
setRoomBet: function(t) {
for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = 0; n < this.doors.length; n++) {
this.doors[n].setTotalBet(t.slots[n].bet);
}
if (e) {
this.doors[0].setUserBet(e.properties.bc_pot_bet_1);
this.doors[1].setUserBet(e.properties.bc_pot_bet_2);
this.doors[2].setUserBet(e.properties.bc_pot_bet_3);
this.doors[3].setUserBet(e.properties.bc_pot_bet_4);
this.doors[4].setUserBet(e.properties.bc_pot_bet_5);
this.doors[5].setUserBet(e.properties.bc_pot_bet_6);
}
},
setHistory: function(t) {
var e = this;
this.historyContent.removeAllChildren();
t.forEach(function(t) {
var n = cc.instantiate(e.historyItem);
n.getComponent("BauCuaHistoryItem").setData(t);
n.parent = e.historyContent;
});
},
stateChange: function(t) {
this.state = t.state;
switch (t.state) {
case h.WAIT_NEW_MATCH:
this.resetDoors();
break;

case h.DEAL:
break;

case h.SET_BET:
this.setTimeCountDown(t.timeCountDown);
this.dia.active = !1;
this.txtTimeCountDown.node.active = !0;
this.txtTime.node.active = !1;
this.setPlateAnimation(d.NORMAL);
break;

case h.END_MATCH:
this.setTimeCountDown(t.timeCountDown);
}
},
endMatch: function(t) {
var e = this;
if (20 === t.zoneId) {
for (var n = 0; n < this.listDice.length; n++) {
this.listDice[n].spriteFrame = this.listDiceSprite[t.vi.faces[n] - 1];
}
this.txtTimeCountDown.node.active = !1;
this.txtTime.node.active = !0;
this.setPlateAnimation(d.RESULT);
this.rollDice();
this.scheduleOnce(function() {
e.setPlateAnimation(d.FINISH);
e.stopDice();
e.bat.active = !0;
e.dia.active = !0;
if (e.toggleNan.isChecked) var n = 0, i = setInterval(function() {
n++;
if (e.bat.x < -140 || e.bat.x > 140 || e.bat.y < -125 || e.bat.y > 145 || n > 7) {
e.bat.active = !1;
e.bat.setPosition(-131.809, -13.982);
e.showResult(t);
clearInterval(i);
}
}, 1e3); else {
e.bat.active = !1;
e.showResult(t);
}
}, 1.1);
}
},
shake: function() {
this.dia.runAction(cc.sequence(cc.moveTo(.1, -195, -15), cc.moveTo(.2, -46, -15), cc.moveTo(.2, -195, -15), cc.moveTo(.2, -46, -15), cc.moveTo(.1, -132, -15)));
},
showResult: function(t) {
var e = this;
t.vi.faces.forEach(function(t) {
e.doors[t - 1].setWin();
});
this.historys.splice(0, 0, t.vi);
this.historys.slice(0, 30);
this.setHistory(this.historys);
if (t.chipChange > 0) {
window.$Global.networkService.updateMoneyWithZoneId(s.ZONE_ID.MINI_BAUCUA);
window.$UIHelper.showToast("+" + (0, c.moneyFormat)(t.chipChange, !0) + " " + s.CONFIG_GOLD.goldName, this.node, -150);
}
},
showTopUser: function() {
window.$Global.networkService.sendMessage(s.REQUEST_TYPE.MINI_BAUCUA, {
type: u.GET_TOP_WIN_DAILY
});
this.dialogTop.show();
},
showHistory: function() {
window.$Global.networkService.sendMessage(s.REQUEST_TYPE.MINI_BAUCUA, {
type: u.GET_USER_HISTORY
});
this.dialogHis.show();
},
showRule: function() {
this.dialogGuide.show();
},
showSoicau: function() {
this.soicauNode.active = !this.soicauNode.active;
},
rollDice: function() {
this.xucxac.node.active = !0;
this.xucxac.play();
},
stopDice: function() {
this.xucxac.node.active = !1;
this.xucxac.stop();
},
setPlateAnimation: function(t) {
switch (t) {
case d.NORMAL:
this.animNormal.active = !0;
this.animEnd.active = !1;
this.animFinish.active = !1;
this.imgFinish.active = !1;
break;

case d.END:
this.animNormal.active = !1;
this.animEnd.active = !0;
this.animFinish.active = !1;
this.imgFinish.active = !1;
break;

case d.RESULT:
this.animNormal.active = !1;
this.animEnd.active = !1;
this.animFinish.active = !0;
this.imgFinish.active = !1;
break;

case d.FINISH:
this.animNormal.active = !1;
this.animEnd.active = !1;
this.animFinish.active = !1;
this.imgFinish.active = !0;
}
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper",
"../Common/BaseDialog": "BaseDialog",
"./BauCuaDoor": "BauCuaDoor",
"./DialogBauCuaHistory": "DialogBauCuaHistory",
"./DialogBauCuaTop": "DialogBauCuaTop"
} ],
MiniGameMiniPoker: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c6050eYRN1ECr8+oig+Q32j", "MiniGameMiniPoker");
var i = t("lodash"), o = u(t("../Common/BaseDialog")), r = u(t("./DialogMiniPokerHistory")), a = u(t("./DialogMiniPokerHuHistory")), s = t("../../Utils/Constants"), c = t("../../Utils/Helper"), l = u(t("../GameList/MultipleFund"));
function u(t) {
return t && t.__esModule ? t : {
default: t
};
}
var f = 14, h = 13, d = 12, p = 11, g = 10, y = 9, m = 8, v = 7, _ = 6, b = 5, w = 4, S = 3, C = 2, T = 1;
cc.Class({
extends: cc.Component,
properties: {
textPrice: {
default: null,
type: cc.Label
},
textJackpot: {
default: null,
type: cc.Label
},
listCardIcons: {
default: [],
type: cc.SpriteFrame
},
panelCards: {
default: null,
type: cc.Node
},
listLines: {
default: [],
type: cc.Node
},
slotItemPrefab: {
default: null,
type: cc.Node
},
dialogHistory: {
default: null,
type: r.default
},
dialogHuHistory: {
default: null,
type: a.default
},
dialogHelp: {
default: null,
type: o.default
},
toggleAuto: {
default: null,
type: cc.Toggle
},
jackpotEff: {
default: null,
type: cc.Node
},
btnSpin: {
default: null,
type: cc.Button
},
multipleFund: {
default: null,
type: l.default
},
txtJackpotXHu: {
default: null,
type: cc.Label
}
},
onLoad: function() {
this.bets = [ 100, 1e3, 1e4 ];
this.state = s.MINI_POKER_STATE.INIT;
this.initLineY = this.listLines[0].y;
this.animSpin = this.btnSpin.getComponent(cc.Animation);
},
start: function() {
this.resetState();
this.setupCards();
this.state = s.MINI_POKER_STATE.CAN_BET;
this.onClickBet(null, 0);
this.auto = !1;
},
onDestroy: function() {
this.offNetwork();
},
onNetwork: function() {
window.$Global.networkService.on("" + s.REQUEST_TYPE.MINI_POKER, this.onMessage.bind(this));
window.$Global.networkService.on("notify_" + s.REQUEST_TYPE.MINI_POKER, this.onNotify.bind(this));
window.$Global.networkService.on("notify_" + s.NOTIFY_TYPE.NOTIFY_MINI_CHANGED, this.onNotifyMiniChanged.bind(this));
},
offNetwork: function() {
window.$Global.networkService.off("" + s.REQUEST_TYPE.MINI_POKER);
window.$Global.networkService.off("notify_" + s.REQUEST_TYPE.MINI_POKER);
window.$Global.networkService.off("notify_" + s.NOTIFY_TYPE.NOTIFY_MINI_CHANGED);
},
resetState: function() {
this.betAmount = 0;
this.state = s.MINI_POKER_STATE.CAN_BET;
},
setupCards: function() {
this.genRandomSlotIcons();
},
resetPosition: function() {
for (var t = 0; t < 5; t++) {
var e = this.listLines[t];
e.y = this.initLineY;
var n = this.firstCards[t];
e.children[0].getComponent(cc.Sprite).spriteFrame = this.listCardIcons[n];
}
},
genRandomSlotIcons: function() {
this.firstCards = [];
for (var t = 0; t < 5; t++) for (var e = this.listLines[t], n = 0; n < 18; n++) {
var o = (0, i.random)(0, this.listCardIcons.length - 1, !1);
if (0 == n) {
for (;-1 != this.firstCards.indexOf(o); ) o = (0, i.random)(0, this.listCardIcons.length - 1, !1);
this.firstCards.push(o);
}
var r = cc.instantiate(this.slotItemPrefab);
r.x = 0;
r.y = 132 * n;
r.getComponent(cc.Sprite).spriteFrame = this.listCardIcons[o];
e.addChild(r);
r.active = !0;
}
},
hide: function() {
this.node.active = !1;
this.isShow = !1;
this.toggleAuto.isChecked = !1;
this.auto = !1;
this.jackpotEff.active && (this.jackpotEff.active = !1);
this.offNetwork();
this.unsub();
window.$Global.minigame.isShowMinipoker = !1;
},
show: function() {
this.node.active = !0;
this.isShow = !0;
this.onNetwork();
this.userData = window.$Global.userService.userInfo;
},
onClickClose: function() {
this.hide();
},
onClickAuto: function() {
this.auto = !this.auto;
},
onClickBet: function(t, e) {
var n = this.bets[e];
if (this.betAmount !== n) {
if (this.toggleAuto.isChecked) {
this.toggleAuto.isChecked = !1;
this.auto = !1;
}
this.betAmount = n;
this.sub();
}
},
onClickSpin: function() {
if (this.state === s.MINI_POKER_STATE.CAN_BET) {
this.jackpotEff.active && (this.jackpotEff.active = !1);
this.spin();
} else window.$UIHelper.showToast("Quay quá nhanh", this.node, -50);
},
onClickHelp: function() {
this.dialogHelp.show();
},
onClickLichSuHu: function() {
this.dialogHuHistory.show();
window.$Global.networkService.sendMessage(s.REQUEST_TYPE.MINI_POKER, {
type: s.MINI_POKER_ACTION_TYPE.GET_JACKPOT_HISTORY
});
},
onClickHistory: function() {
this.dialogHistory.show();
window.$Global.networkService.sendMessage(s.REQUEST_TYPE.MINI_POKER, {
type: s.MINI_POKER_ACTION_TYPE.GET_USER_HISTORY
});
},
sub: function() {
void 0 !== window.$Global && void 0 !== window.$Global.networkService && window.$Global.networkService.sendMessage(s.REQUEST_TYPE.MINI_POKER, {
type: s.MINI_POKER_ACTION_TYPE.SUBSCRIBE_ROOM,
bet: this.betAmount,
chipType: 1
});
},
unsub: function() {
window.$Global.networkService.sendMessage(s.REQUEST_TYPE.MINI_POKER, {
type: s.MINI_POKER_ACTION_TYPE.UNSUBSCRIBE_ROOM
});
},
onMessage: function(t) {
var e = t;
if (this.isShow) if (e.resultCode === s.ResponseResultCode.SUCCESS) if (e.type == s.MINI_POKER_ACTION_TYPE.SUBSCRIBE_ROOM) {
this.textJackpot.string = "0";
this.updateJackpot(e.jackpot);
} else e.type == s.MINI_POKER_ACTION_TYPE.START_MATCH ? this.setCardsAndSpin(e) : e.type == s.MINI_POKER_ACTION_TYPE.GET_USER_HISTORY ? this.dialogHistory.setData(e.history) : e.type == s.MINI_POKER_ACTION_TYPE.GET_JACKPOT_HISTORY && this.dialogHuHistory.setData(e.history); else {
this.btnSpin.interactable = !0;
window.$UIHelper.showToast(e.desc || e.content || "");
}
},
onNotify: function(t) {
var e = t;
this.updateJackpot(e.jackpot);
},
setCardsAndSpin: function(t) {
this.isWinJackpot = t.isWinJackpot;
this.winChips = t.winChips;
this.typeOfChi = t.typeOfChi;
this.state = s.MINI_POKER_STATE.SPIN;
for (var e = t.cards, n = 0; n < 5; n++) {
var i = this.listLines[n], o = i.childrenCount, r = i.children[o - 1], a = 4 * (e[n].card - 1) + (e[n].face - 1);
this.firstCards[n] = a;
r.getComponent(cc.Sprite).spriteFrame = this.listCardIcons[a];
}
this.roll();
},
roll: function() {
for (var t = 0; t < 5; t++) {
var e = cc.delayTime(.1 * t), n = this.listLines[t];
n.y = this.initLineY;
n.stopAllActions();
4 !== t ? n.runAction(cc.sequence(e, cc.moveBy(1, 0, -2244))) : n.runAction(cc.sequence(e, cc.moveBy(1, 0, -2244), cc.callFunc(this.finishRoll, this)));
}
},
finishRoll: function() {
this.showResult();
this.state = s.MINI_POKER_STATE.RESULT;
this.prepareForNext();
window.$Global.networkService.updateMoneyWithZoneId(s.ZONE_ID.MINI_POKER);
this.btnSpin.interactable = !0;
},
prepareForNext: function() {
this.state = s.MINI_POKER_STATE.WAIT_NEXT;
this.resetState();
this.resetPosition();
},
spin: function() {
window.$Global.networkService.sendMessage(s.REQUEST_TYPE.MINI_POKER, {
type: s.MINI_POKER_ACTION_TYPE.START_MATCH
});
this.btnSpin.interactable = !1;
this.animSpin.play();
},
showResult: function() {
if (this.winChips > 0) if (this.isWinJackpot) {
this.showJackpot();
if (this.auto) {
this.toggleAuto.isChecked = !1;
this.auto = !1;
}
} else {
var t = this.getTurnName(this.typeOfChi);
window.$UIHelper.showToast(t + "\t+" + (0, c.moneyFormat)(this.winChips), this.node, -50);
this.auto && this.scheduleOnce(function() {
this.spin();
}, 2);
} else this.auto && this.spin();
},
showJackpot: function() {
var t = this.jackpotEff.getComponentInChildren(cc.Label);
t.string = "0";
this.jackpotEff.active = !0;
(0, c.runNumber)(t, this.winChips);
},
getTurnName: function(t) {
var e = "";
switch (t) {
case T:
e = "Mậu thầu";
break;

case C:
e = "Đôi";
break;

case S:
e = "Thú";
break;

case w:
e = "Sám cô";
break;

case b:
e = "Sảnh";
break;

case _:
e = "Sảnh hạ";
break;

case v:
e = "Sảnh thượng";
break;

case m:
e = "Thùng";
break;

case y:
e = "Cù lũ";
break;

case g:
e = "Tứ quý";
break;

case p:
e = "Thùng phá sảnh";
break;

case d:
e = "Thùng phá sảnh hạ";
break;

case h:
e = "Thùng phá sảnh thượng";
break;

case f:
e = "Tứ quý át";
}
return e;
},
onNotifyMiniChanged: function(t) {
if (t.zoneId == s.ZONE_ID.MINI_POKER && t.bet == this.betAmount) {
this.updateJackpot(t.jackpot);
this.multipleFund._setMultipleFund(t.multipleFund);
}
},
updateJackpot: function(t) {
(0, c.runNumber)(this.textJackpot, t);
(0, c.runNumber)(this.txtJackpotXHu, t);
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper",
"../Common/BaseDialog": "BaseDialog",
"../GameList/MultipleFund": "MultipleFund",
"./DialogMiniPokerHistory": "DialogMiniPokerHistory",
"./DialogMiniPokerHuHistory": "DialogMiniPokerHuHistory",
lodash: 9
} ],
MiniGameTaiXiu: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9e7daMKm8JG3q9O1BozTKyw", "MiniGameTaiXiu");
var i = d(t("./XucXac")), o = d(t("./DialogTaiXiuTopUser")), r = d(t("./DialogTaiXiuHelp")), a = d(t("./DialogTaiXiuHistory")), s = d(t("./DialogTaiXiuMatchHistory")), c = d(t("./DialogTaiXiuThongKe")), l = d(t("./DialogTaiXiuDuaTop")), u = d(t("./ChatController")), f = t("../../Utils/Constants"), h = t("../../Utils/Helper");
function d(t) {
return t && t.__esModule ? t : {
default: t
};
}
var p = 1, g = 2, y = 3, m = 4;
cc.Class({
extends: cc.Component,
properties: {
effectTai: {
default: null,
type: cc.Node
},
effectXiu: {
default: null,
type: cc.Node
},
textTai: {
default: null,
type: cc.Animation
},
textXiu: {
default: null,
type: cc.Animation
},
textMatchId: {
default: null,
type: cc.Label
},
textUsersTai: {
default: null,
type: cc.Label
},
textUsersXiu: {
default: null,
type: cc.Label
},
textMyBetTai: {
default: null,
type: cc.Label
},
textMyBetXiu: {
default: null,
type: cc.Label
},
textTotalAmountTai: {
default: null,
type: cc.Label
},
textTotalAmountXiu: {
default: null,
type: cc.Label
},
textBetInputTai: {
default: null,
type: cc.Label
},
textBetInputXiu: {
default: null,
type: cc.Label
},
nodeResultPoint: {
default: null,
type: cc.Node
},
textResultPoint: {
default: null,
type: cc.Label
},
nodeWaitingTime: {
default: null,
type: cc.Node
},
textWaitingTime: {
default: null,
type: cc.Label
},
textTimeBet: {
default: null,
type: cc.Label
},
bowl: {
default: null,
type: cc.Node
},
xucxac: {
default: null,
type: i.default
},
panelHistory: {
default: null,
type: cc.Node
},
historyItem: {
default: null,
type: cc.Prefab
},
panelBet: {
default: null,
type: cc.Node
},
dialogLeaderboard: {
default: null,
type: o.default
},
dialogHistory: {
default: null,
type: a.default
},
dialogHistoryPhien: {
default: null,
type: s.default
},
dialogHelp: {
default: null,
type: r.default
},
dialogStats: {
default: null,
type: c.default
},
dialogDuaTop: {
default: null,
type: l.default
},
chatPanel: {
default: null,
type: u.default
},
txtDayWin: {
default: null,
type: cc.Label
},
txtDayLose: {
default: null,
type: cc.Label
},
animEnd: {
default: null,
type: cc.Node
},
animNormal: {
default: null,
type: cc.Node
},
animFinish: {
default: null,
type: cc.Node
},
imgFinish: {
default: null,
type: cc.Node
}
},
onLoad: function() {
this.bowlPos = this.bowl.getPosition();
this.isNan = !1;
this.chipChange = 0;
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
},
onDestroy: function() {
this.offNetwork();
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
},
offNetwork: function() {
window.$Global.networkService.off("" + f.REQUEST_TYPE.TAI_XIU);
window.$Global.networkService.off("notify_" + f.NOTIFY_TYPE.TAI_XIU);
window.$Global.networkService.off("notify_" + f.NOTIFY_TYPE.WORLD_CHAT_NOTIFICATION);
clearInterval(this.timeCountDown);
this.timeCountDown = null;
},
onKeyDown: function(t) {},
onKeyUp: function(t) {
switch (t.keyCode) {
case cc.macro.KEY.enter:
this.onClickOk();
}
},
hide: function() {
this.stopEffect();
this.node.active = !1;
this.unsub();
window.$Global.minigame.isShowTaixiu = !1;
},
show: function() {
this.node.parent.active || (this.node.parent.active = !0);
this.node.setPosition(0, 0);
this.node.active = !0;
this.resetState();
this.sub();
},
resetState: function() {
this.bowl.active = !1;
this.xucxac.node.active = !1;
this.nodeWaitingTime.active = !1;
this.nodeResultPoint.active = !1;
this.textTotalAmountTai.string = 0;
this.textTotalAmountXiu.string = 0;
this.textBetInputTai.string = 0;
this.textBetInputXiu.string = 0;
this.textMyBetTai.string = 0;
this.textMyBetXiu.string = 0;
this.textUsersTai.string = "(0)";
this.textUsersXiu.string = "(0)";
this.nodeResultPoint.active = !1;
},
taiClick: function() {
this.showPanelBet(1);
},
xiuClick: function() {
this.showPanelBet(0);
},
showPanelBet: function(t) {
if (this.state == f.TAI_XIU_STATE.BET) {
this.choice = 1 == t ? f.TAI_XIU_CHOICE.TAI : f.TAI_XIU_CHOICE.XIU;
this.panelBet.getComponent("BetPanel").show(t);
}
},
hidePanelBet: function() {
this.panelBet.active = !1;
},
setHistoryGame: function(t) {
var e = this;
if (t) {
this.panelHistory.removeAllChildren();
for (var n = function(n) {
var i = cc.instantiate(e.historyItem), o = t[n];
e.panelHistory.addChild(i);
i.getComponent("HistoryItem").setData(o.point, n == t.length - 1);
i.on(cc.Node.EventType.TOUCH_END, function(t) {
e.onClickHistoryNode(o.displayId);
});
}, i = 0; i < t.length; i++) n(i);
}
},
letRollDice: function(t, e) {
this.faces = t;
this.xucxac.node.active = !0;
this.xucxac.letRoll(t, e);
},
letOnlyShowResultDice: function(t) {
this.faces = t;
this.xucxac.node.active = !0;
this.xucxac.setResult(this.faces);
this.xucxac.onFinishRoll();
this.bowl.active = !1;
this.nodeResultPoint.active = !0;
this.textResultPoint.string = "" + this.point;
},
setTimeCountDown: function(t) {
var e = this;
if (!this.timeCountDown) {
this.timeRemain = t;
this.textTimeBet.string = (0, h.timeSecondFormat)(this.timeRemain);
this.textWaitingTime.string = (0, h.timeFormat)(this.timeRemain);
this.timeRemain--;
this.timeCountDown = setInterval(function() {
if (e.timeRemain >= 0) {
e.textTimeBet.string = (0, h.timeSecondFormat)(e.timeRemain);
e.textWaitingTime.string = (0, h.timeFormat)(e.timeRemain);
} else {
clearInterval(e.timeCountDown);
e.timeCountDown = null;
}
e.timeRemain--;
}, 1e3);
}
},
onClickClose: function() {
this.hide();
},
onClickOk: function() {
this.hidePanelBet();
this.betRequest();
},
onClickNan: function() {
this.isNan = !this.isNan;
},
onClickHelp: function() {
this.dialogHelp.show();
},
onClickLeaderboard: function() {
this.getTopUser();
this.dialogLeaderboard.show();
},
onClickHistory: function() {
this.getUserHistory();
this.dialogHistory.show();
},
onClickStats: function() {
this.getRoomHistory();
this.dialogStats.show();
},
onClickHistoryNode: function(t) {
this.getMatchHistory(t);
this.dialogHistoryPhien.show();
},
sub: function() {
window.$Global.networkService.sendMessage(f.REQUEST_TYPE.TAI_XIU, {
type: f.TAI_XIU_ACTION_TYPE.SUBSCRIBE_ROOM,
chipType: 1
});
window.$Global.networkService.on("" + f.REQUEST_TYPE.TAI_XIU, this.onMessage.bind(this));
window.$Global.networkService.on("notify_" + f.NOTIFY_TYPE.TAI_XIU, this.onNotify.bind(this));
window.$Global.networkService.on("notify_" + f.NOTIFY_TYPE.WORLD_CHAT_NOTIFICATION, this.onNotifyChat.bind(this));
},
unsub: function() {
window.$Global.networkService.sendMessage(f.REQUEST_TYPE.TAI_XIU, {
type: f.TAI_XIU_ACTION_TYPE.UNSUBSCRIBE_ROOM
});
this.offNetwork();
},
onMessage: function(t) {
var e = this, n = t;
if (n.resultCode === f.ResponseResultCode.SUCCESS) if (n.type == f.TAI_XIU_ACTION_TYPE.SUBSCRIBE_ROOM) {
this.history = n.history;
var i = this.history.length;
i > 13 && this.history.splice(0, i - 13);
i > 1 && (this.result = this.history[this.history.length - 1]);
this.setHistoryGame(this.history);
this.updateRoomInfo(n);
this.state = n.room.state;
this.transition();
this.minCoinPerBet = n.minCoinPerBet;
this.maxCoinPerBet = n.maxCoinPerBet;
this.panelBet.getComponent("BetPanel").setMinMaxValue(this.minCoinPerBet, this.maxCoinPerBet);
this.textMyBetTai.string = (0, h.moneyFormat)(n.betMax, !1);
this.textMyBetXiu.string = (0, h.moneyFormat)(n.betMin, !1);
var o = n.chatHistory;
this.chatPanel.clearChat();
o && o.forEach(function(t) {
e.chatPanel.setData(t);
});
} else n.type == f.TAI_XIU_ACTION_TYPE.ADD_BET ? this.onBetRequestDone(n) : n.type == f.TAI_XIU_ACTION_TYPE.GET_TOP_WIN_DAILY ? this.dialogLeaderboard.setData(n) : n.type == f.TAI_XIU_ACTION_TYPE.GET_USER_HISTORY ? this.dialogHistory.setData(n) : n.type == f.TAI_XIU_ACTION_TYPE.GET_MATCH_HISTORY ? this.dialogHistoryPhien.setData(n) : n.type == f.TAI_XIU_ACTION_TYPE.GET_ROOM_HISTORY ? this.dialogStats.setData(n) : n.type == f.TAI_XIU_ACTION_TYPE.GET_TOP_GAME && this.dialogDuaTop.setTopData(n); else window.$UIHelper.showToast(n.desc || "");
},
onNotify: function(t) {
var e = t;
if (e.type == f.TAI_XIU_NOTIFY_TYPE.UPDATE_INFO) {
this.updateRoomInfo(e);
this.state = e.room.state;
if (this.state == f.TAI_XIU_STATE.BALANCE) {
window.$UIHelper.showToast("Ngừng đặt cược và cân cửa", this.node, -150);
this.textTimeBet.node.color = new cc.Color(255, 0, 0);
this.setPlateAnimation(g);
this.hidePanelBet();
}
} else if (e.type == f.TAI_XIU_NOTIFY_TYPE.START_MATCH) {
this.setMatchId(e.displayId);
this.startMatch(e);
this.setHistoryGame(this.history);
} else if (e.type == f.TAI_XIU_NOTIFY_TYPE.END_MATCH) {
this.result = e.vi;
this.chipChange = e.chipChange;
if (this.history) {
this.history.push(this.result);
this.history.shift();
}
this.endMatch();
} else e.type == f.TAI_XIU_NOTIFY_TYPE.BALANCE && this.balance(e);
},
transition: function() {
if (this.state == f.TAI_XIU_STATE.END_MATCH || this.state == f.TAI_XIU_STATE.WAIT_NEW_MATCH) this.endMatch(!1); else if (this.state == f.TAI_XIU_STATE.BALANCE) {
this.textTimeBet.node.color = new cc.color(255, 0, 0);
this.setPlateAnimation(g);
} else {
this.nodeWaitingTime.active = !1;
this.textTimeBet.node.active = !0;
this.textTimeBet.node.color = new cc.color(255, 255, 255);
this.setPlateAnimation(p);
}
},
setMatchId: function(t) {
t < 0 || (this.textMatchId.string = "#" + t);
},
onBetRequestDone: function(t) {
if (t.pot == f.TAI_XIU_CHOICE.TAI) {
this.textMyBetTai.string = (0, h.moneyFormat)(t.total, !1);
this.textTotalAmountTai.string = (0, h.moneyFormat)(t.totalPot, !1);
} else if (t.pot == f.TAI_XIU_CHOICE.XIU) {
this.textMyBetXiu.string = (0, h.moneyFormat)(t.total, !1);
this.textTotalAmountXiu.string = (0, h.moneyFormat)(t.totalPot, !1);
}
},
startMatch: function(t) {
this.resetState();
this.stopEffect();
this.textTimeBet.node.active = !0;
this.textTimeBet.node.color = new cc.Color(255, 255, 255);
this.setPlateAnimation(p);
this.setTimeCountDown(t.room.timeCountDown);
this.bowl.active = !1;
this.bowl.setPosition(this.bowlPos.x, this.bowlPos.y);
},
balance: function(t) {
var e = "";
if (0 == t.pot) {
this.textMyBetXiu.string = (0, h.moneyFormat)(t.remainAmount, !1);
e = " cửa xỉu";
} else {
this.textMyBetTai.string = (0, h.moneyFormat)(t.remainAmount, !1);
e = " cửa tài";
}
window.$UIHelper.showToast("Bạn đã được hoàn trả " + (0, h.moneyFormat)(t.payback, !1) + e, this.node, -200);
},
endMatch: function() {
var t = this, e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
if (null !== this.result && void 0 !== this.result) {
this.point = this.result.point;
this.faces = this.result.faces;
this.textTimeBet.node.active = !1;
this.nodeWaitingTime.active = !0;
var n = function() {
t.playEffect(t.point);
t.bowl.active = !1;
t.nodeResultPoint.active = !0;
t.textResultPoint.string = "" + t.point;
};
if (e) {
this.setPlateAnimation(y);
this.letRollDice(this.faces, function() {
t.setPlateAnimation(m);
if (t.isNan) {
t.bowl.active = !0;
var e = 0, i = setInterval(function() {
e++;
if (t.bowl.x < -195 || t.bowl.x > 210 || t.bowl.y < -180 || t.bowl.y > 205 || e > 9) {
t.bowl.active = !1;
n();
clearInterval(i);
}
}, 1e3);
} else {
t.bowl.active = !1;
n();
}
});
} else {
this.setPlateAnimation(m);
this.letOnlyShowResultDice(this.faces);
}
0 !== this.chipChange && this.scheduleOnce(function() {
window.$Global.networkService.updateMoneyWithZoneId(f.ZONE_ID.TAI_XIU);
window.$UIHelper.showToast("+" + (0, h.moneyFormat)(t.chipChange) + " " + f.CONFIG_GOLD.goldName, t.node, -150);
t.chipChange = 0;
}, 10);
}
},
showChat: function() {
this.chatPanel.node.active = !this.chatPanel.node.active;
},
onNotifyChat: function(t) {
var e = t;
this.chatPanel.setData(e);
},
updateRoomInfo: function(t) {
this.room = t.room;
this.textUsersTai.string = "(" + this.room.maxUserCount + ")";
this.textUsersXiu.string = "(" + this.room.minUserCount + ")";
this.textTotalAmountTai.string = (0, h.moneyFormat)(this.room.maxBet, !1);
this.textTotalAmountXiu.string = (0, h.moneyFormat)(this.room.minBet, !1);
this.setTimeCountDown(this.room.timeCountDown);
this.setMatchId(t.displayId);
this.txtDayWin.string = t.ThanhDuWin.numberMatchs;
this.txtDayLose.string = t.ThanhDuLose.numberMatchs;
},
betRequest: function() {
var t = this.choice == f.TAI_XIU_CHOICE.TAI ? this.textBetInputTai : this.textBetInputXiu;
this.betAmount = (0, h.moneyToInt)(t.string);
if (this.betAmount <= 0) window.$UIHelper.showToast("Hãy chọn mức cược!", this.node, -150); else {
window.$Global.networkService.sendMessage(f.REQUEST_TYPE.TAI_XIU, {
type: f.TAI_XIU_ACTION_TYPE.ADD_BET,
bet: this.betAmount,
pot: this.choice
});
t.string = "0";
}
},
getTopUser: function() {
window.$Global.networkService.sendMessage(f.REQUEST_TYPE.TAI_XIU, {
type: f.TAI_XIU_ACTION_TYPE.GET_TOP_WIN_DAILY,
chipType: 1
});
},
getUserHistory: function() {
window.$Global.networkService.sendMessage(f.REQUEST_TYPE.TAI_XIU, {
type: f.TAI_XIU_ACTION_TYPE.GET_USER_HISTORY
});
},
getRoomHistory: function() {
window.$Global.networkService.sendMessage(f.REQUEST_TYPE.TAI_XIU, {
type: f.TAI_XIU_ACTION_TYPE.GET_ROOM_HISTORY
});
},
getMatchHistory: function(t) {
window.$Global.networkService.sendMessage(f.REQUEST_TYPE.TAI_XIU, {
type: f.TAI_XIU_ACTION_TYPE.GET_MATCH_HISTORY,
display_id: t,
chipType: 1
});
},
onWin: function() {
this.effectReward.active = !0;
},
clickDuaTop: function() {
this.dialogDuaTop.show();
},
playEffect: function(t) {
t > 10 ? this.effectTai.active = !0 : this.effectXiu.active = !0;
},
stopEffect: function() {
this.effectTai.active = !1;
this.effectXiu.active = !1;
},
setPlateAnimation: function(t) {
switch (t) {
case p:
this.animNormal.active = !0;
this.animEnd.active = !1;
this.animFinish.active = !1;
this.imgFinish.active = !1;
break;

case g:
this.animNormal.active = !1;
this.animEnd.active = !0;
this.animFinish.active = !1;
this.imgFinish.active = !1;
break;

case y:
this.animNormal.active = !1;
this.animEnd.active = !1;
this.animFinish.active = !0;
this.imgFinish.active = !1;
break;

case m:
this.animNormal.active = !1;
this.animEnd.active = !1;
this.animFinish.active = !1;
this.imgFinish.active = !0;
}
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper",
"./ChatController": "ChatController",
"./DialogTaiXiuDuaTop": "DialogTaiXiuDuaTop",
"./DialogTaiXiuHelp": "DialogTaiXiuHelp",
"./DialogTaiXiuHistory": "DialogTaiXiuHistory",
"./DialogTaiXiuMatchHistory": "DialogTaiXiuMatchHistory",
"./DialogTaiXiuThongKe": "DialogTaiXiuThongKe",
"./DialogTaiXiuTopUser": "DialogTaiXiuTopUser",
"./XucXac": "XucXac"
} ],
MiniPokerHistoryItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1a7a7E8CJZCgYBWJEEd5fcd", "MiniPokerHistoryItem");
var i = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
textId: {
default: null,
type: cc.Label
},
textTime: {
default: null,
type: cc.Label
},
textBet: {
default: null,
type: cc.Label
},
textWin: {
default: null,
type: cc.Label
},
textDes: {
default: null,
type: cc.Label
},
bg: {
default: null,
type: cc.Node
}
},
setData: function(t, e) {
this.textId.string = e.id;
this.textTime.string = e.time;
this.textBet.string = (0, i.moneyFormat)(e.bet, !0);
this.textWin.string = (0, i.moneyFormat)(e.total, !0);
this.textDes.string = e.total < 0 ? "Thua" : "Thắng";
this.bg.active = t % 2;
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper"
} ],
MiniPokerHuHistoryItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "718b1AK085E8LVUY1NneW4E", "MiniPokerHuHistoryItem");
var i = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
textName: {
default: null,
type: cc.Label
},
textTime: {
default: null,
type: cc.Label
},
textBet: {
default: null,
type: cc.Label
},
textWin: {
default: null,
type: cc.Label
},
bg: {
default: null,
type: cc.Node
}
},
setData: function(t, e) {
this.textName.string = e.displayName.length > 15 ? e.displayName.substring(0, 13) + "..." : e.displayName;
this.textTime.string = e.time;
this.textBet.string = (0, i.moneyFormat)(e.userBet);
this.textWin.string = (0, i.moneyFormat)(e.win);
this.bg.active = t % 2;
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper"
} ],
MiniSlot: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "bbed8HyjuROUZRvXVuh+T2o", "MiniSlot");
var i = t("lodash"), o = t("../../Utils/Constants"), r = t("../../Utils/Helper"), a = h(t("../../SlotGame/JackpotEffect")), s = h(t("./Dialog_SelectLine")), c = h(t("./Dialog_SlotUserHistory")), l = h(t("./Dialog_SlotJackpotHistory")), u = h(t("../Common/BaseDialog")), f = h(t("../GameList/MultipleFund"));
function h(t) {
return t && t.__esModule ? t : {
default: t
};
}
var d = 23, p = 202, g = 221, y = 222;
cc.Class({
extends: cc.Component,
properties: {
listColumns: {
default: [],
type: cc.Node
},
listItemPrefabs: {
default: [],
type: cc.Prefab
},
listItemPools: {
default: []
},
duration: {
default: 1
},
speedToggle: {
default: null,
type: cc.Toggle
},
isAuto: {
default: !1
},
autoToggle: {
default: null,
type: cc.Toggle
},
betToggles: {
default: null,
type: cc.ToggleContainer
},
spinBtn: {
default: null,
type: cc.Button
},
selectedLines: {
default: []
},
txtJackpot: {
default: null,
type: cc.Label
},
slotsResult: {
default: []
},
oldsResult: {
default: []
},
lines: {
default: null,
type: cc.Node
},
winNode: {
default: null,
type: cc.Node
},
jackpotEffect: {
default: null,
type: a.default
},
listSprites: {
default: [],
type: cc.SpriteFrame
},
dialogSelectLine: {
default: null,
type: s.default
},
txtLineNum: {
default: null,
type: cc.Label
},
txtID1: {
default: null,
type: cc.Label
},
dialogUserHistory: {
default: null,
type: c.default
},
dialogJackpotHistory: {
default: null,
type: l.default
},
dialogGuide: {
default: null,
type: u.default
},
listSlotShow: {
default: []
},
multipleFund: {
default: null,
type: f.default
},
txtJackpotXHu: {
default: null,
type: cc.Label
},
requestType: {
default: 123
},
blockHEIGHT: {
default: 80
},
initPOS_Y: {
default: -80
}
},
onLoad: function() {
this.createPool();
this.genRandomItems();
this.selectedLines = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
this.txtLineNum.string = this.selectedLines.length;
this.txtID1.string = "123";
this.updateJackpot(0);
cc.log("SetStringOnloadDone  " + this.txtID1.string);
},
start: function() {
this.networkService = window.$Global.networkService;
this.networkService.on("" + this.requestType, this.onMessage.bind(this));
this.networkService.on("notify_" + o.NOTIFY_TYPE.NOTIFY_MINI_CHANGED, this.onNotifyMiniChanged.bind(this));
this.dialogSelectLine.node.on("updateLines", this.updateLines.bind(this));
},
onDestroy: function() {
this.networkService.off("" + this.requestType);
this.networkService.off("notify_" + o.NOTIFY_TYPE.NOTIFY_MINI_CHANGED);
this.listItemPools.forEach(function(t) {
t.clear();
});
this.dialogSelectLine.node.off("updateLines");
},
sub: function(t, e) {
window.$Global.networkService.sendMessage(e, {
type: d,
chipType: 1,
bet: t
});
this.stopAuto();
this.currentBet = t;
},
show: function(t) {
this.request_type = t;
this.sub(100, this.request_type);
this.node.active = !0;
switch (this.request_type) {
case o.REQUEST_TYPE.MINI_SLOT_6:
window.$Global.minigame.isShowMiniSlot_6 = !0;
break;

case o.REQUEST_TYPE.MINI_SLOT_7:
window.$Global.minigame.isShowMiniSlot_7 = !0;
break;

case o.REQUEST_TYPE.MINI_SLOT_8:
window.$Global.minigame.isShowMiniSlot_8 = !0;
}
},
close: function() {
this.isAuto && this.stopAuto();
this.reset();
this.node.active = !1;
switch (this.request_type) {
case o.REQUEST_TYPE.MINI_SLOT_6:
window.$Global.minigame.isShowMiniSlot_6 = !1;
break;

case o.REQUEST_TYPE.MINI_SLOT_7:
window.$Global.minigame.isShowMiniSlot_7 = !1;
break;

case o.REQUEST_TYPE.MINI_SLOT_8:
window.$Global.minigame.isShowMiniSlot_8 = !1;
}
},
createPool: function() {
for (var t = 0; t < this.listItemPrefabs.length; t++) {
this.listItemPools[t] = new cc.NodePool();
for (var e = 0; e < 10; e++) {
var n = cc.instantiate(this.listItemPrefabs[t]);
n.index = t;
this.listItemPools[t].put(n);
}
}
},
genRandomItems: function() {
for (var t = 0; t < 3; t++) for (var e = this.listColumns[t], n = 0; n < 60; n++) {
var o = (0, i.random)(0, this.listItemPrefabs.length - 1, !1), r = this.listItemPools[o].get();
null == r && ((r = cc.instantiate(this.listItemPrefabs[o])).index = o);
r.y = n * this.blockHEIGHT;
e.addChild(r);
}
},
onMessage: function(t) {
var e = t;
if (e.resultCode === o.ResponseResultCode.SUCCESS) e.type === g ? this.onJackpotHistoryDone(e.history) : e.type === y ? this.onUserHistoryDone(e.history) : e.type === p ? this.onSpinDone(e) : e.type === d && this.updateJackpot(e.jackpot); else {
window.$UIHelper.showToast(e.desc || e.content || "");
this.spinBtn.interactable = !0;
}
},
reset: function() {
this.duration = 1;
this.speedToggle.isChecked = !1;
this.isAuto = !1;
this.autoToggle.isChecked = !1;
this.spinBtn.interactable = !0;
this.betToggles.toggleItems[0].check();
this.txtID1.string = "";
},
onBetChanged: function(t, e) {
this.sub(e, this.requestType);
},
spin: function() {
if (0 !== this.selectedLines.length) {
this.spinBtn.interactable = !1;
var t = this.selectedLines;
window.$Global.networkService.sendMessage(this.request_type, {
type: p,
deal: 1,
line: t
});
this.jackpotEffect.hide();
this.listSlotShow.forEach(function(t) {
t.getComponent(cc.Animation).stop();
t.children[0].runAction(cc.scaleTo(1, 1));
});
this.listSlotShow = [];
} else window.$UIHelper.showToast("Vui lòng chọn dòng");
},
onSpinDone: function(t) {
this.slotsResult = t.result.slots.faces;
this.payLines = t.result.payLines;
this.winChips = t.result.winChips;
this.isWinJackpot = t.result.isWinJackpot;
this.jackpot = t.jackpot;
this.setSpinID(t.spinID);
this.resetPosition();
this._setOldResult();
this.roll();
},
resetPosition: function() {
for (var t = 0; t < 3; t++) {
this.listColumns[t].y = this.initPOS_Y;
}
},
roll: function() {
for (var t = 57 * this.blockHEIGHT + 20, e = 0; e < 3; e++) {
var n = cc.delayTime(.1 * e), i = this.listColumns[e];
2 === e ? i.runAction(cc.sequence(n, cc.moveBy(.1, 0, 20), cc.moveBy(this.duration, 0, -t), cc.callFunc(this.finishRoll, this))) : i.runAction(cc.sequence(n, cc.moveBy(.1, 0, 20), cc.moveBy(this.duration, 0, -t)));
}
},
finishRoll: function() {
this.oldsResult = this.slotsResult;
var t = this.payLines.map(function(t) {
return t.line;
});
this.blinkWinLines(t);
this.showWinSlotsEffect();
this.showResult();
},
onSpeedChanged: function() {
this.duration = this.speedToggle.isChecked ? .4 : .8;
},
updateJackpot: function(t) {
(0, r.runNumber)(this.txtJackpot, t);
(0, r.runNumber)(this.txtJackpotXHu, t);
},
setOldResult: function() {
if (0 !== this.oldsResult.length) for (var t = 0; t < 3; t++) for (var e = 0; e < 3; e++) {
var n = 2 - t, i = this.listColumns[e], o = i.children[n], r = i.children[n + 60 - 3], a = r.y;
r.y = o.y;
o.y = a;
i.children[n] = r;
i.children[n + 60 - 3] = o;
2 === t && 2 === e && this.setResult();
} else this.setResult();
},
_setOldResult: function() {
if (0 !== this.oldsResult.length) for (var t = 0; t < 3; t++) for (var e = 0; e < 3; e++) {
var n = 2 - t, i = this.listColumns[e].children[n], o = this.oldsResult[t][e] - 1;
i.children[0].getComponent(cc.Sprite).spriteFrame = this.listSprites[o];
2 === t && 2 === e && this.setResult();
} else this.setResult();
},
setResult: function() {
if (0 !== this.slotsResult.length) for (var t = 0; t < 3; t++) {
for (var e = this.listColumns[t], n = e.childrenCount, i = [], o = 0; o < 3; o++) {
var r = this.slotsResult[o][t] - 1, a = e.children[n - o - 1], s = a.y;
this.listItemPools[a.index].put(a);
var c = this.listItemPools[r].get();
null == c && ((c = cc.instantiate(this.listItemPrefabs[r])).index = r);
c.y = s;
i.push(c);
this.listSlotShow[3 * o + t] = c;
}
for (var l = i.length - 1; l >= 0; l--) {
var u = i[l];
e.addChild(u);
}
}
},
blinkWinLines: function(t) {
for (var e = this, n = function(n) {
var i = t[n], o = e.lines.children[i - 1];
o.active = !0;
setTimeout(function() {
o.active = !1;
}, 2e3);
}, i = 0; i < t.length; i++) n(i);
},
getZoneID: function() {
return this.requestType == o.REQUEST_TYPE.MINI_SLOT_7 ? o.ZONE_ID.MINI_SLOT7 : o.ZONE_ID.MINI_SLOT_BANCA;
},
showResult: function() {
this.networkService.updateMoneyWithZoneId(this.getZoneID());
if (this.isWinJackpot) {
this.jackpotEffect.show(this.winChips);
this.stopAuto();
} else this.winChips > 0 ? this.showWinChip(this.winChips) : this.onShowWinDone();
this.updateJackpot(this.jackpot);
this.isAuto || (this.spinBtn.interactable = !0);
},
showWinChip: function(t) {
this.winNode.active = !0;
this.winNode.children[0].getComponent(cc.Label).string = (0, r.numberWithDot)(t);
this.winNode.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
this.winNode.active = !1;
}.bind(this)), cc.callFunc(this.onShowWinDone.bind(this))));
},
onShowWinDone: function() {
this.isAuto && this.spin();
},
autoClick: function() {
if (this.isAuto) {
this.isAuto = !1;
this.spinBtn.interactable = !0;
} else {
this.isAuto = !0;
this.spinBtn.interactable && this.spin();
}
},
stopAuto: function() {
this.autoToggle.isChecked = !1;
this.isAuto = !1;
},
updateLines: function(t) {
this.selectedLines = t;
this.txtLineNum.string = this.selectedLines.length;
},
showSelectLine: function() {
this.dialogSelectLine.show();
},
showUserHistory: function() {
window.$Global.networkService.sendMessage(this.request_type, {
type: y
});
this.dialogUserHistory.show();
},
onUserHistoryDone: function(t) {
this.dialogUserHistory.setData(t);
},
showJackpotHistory: function() {
window.$Global.networkService.sendMessage(this.request_type, {
type: g
});
this.dialogJackpotHistory.show();
},
onJackpotHistoryDone: function(t) {
this.dialogJackpotHistory.setData(t);
},
showGuide: function() {
this.dialogGuide.show();
},
setSpinID: function(t) {
this.txtID1.string = "#" + t;
},
showWinSlotsEffect: function() {
var t = [];
this.payLines.forEach(function(e) {
e.matched.forEach(function(e) {
t.indexOf(e) < 0 && t.push(e);
});
});
for (var e = 0; e < t.length; e++) {
var n = t[e];
this.listSlotShow[n].getComponent(cc.Animation).play("scale");
}
},
onNotifyMiniChanged: function(t) {
if (t.zoneId == this.getZoneID() && t.bet == this.currentBet) {
this.updateJackpot(t.jackpot);
this.multipleFund._setMultipleFund(t.multipleFund);
}
}
});
cc._RF.pop();
}, {
"../../SlotGame/JackpotEffect": "JackpotEffect",
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper",
"../Common/BaseDialog": "BaseDialog",
"../GameList/MultipleFund": "MultipleFund",
"./Dialog_SelectLine": "Dialog_SelectLine",
"./Dialog_SlotJackpotHistory": "Dialog_SlotJackpotHistory",
"./Dialog_SlotUserHistory": "Dialog_SlotUserHistory",
lodash: 9
} ],
MinigameLobbyItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5888cBzP3hB8biYUanPRloC", "MinigameLobbyItem");
cc.Class({
extends: cc.Component,
properties: {
zoneId: {
default: Number
},
multipleAnim: {
default: null,
type: cc.Animation
}
},
setMultipleFund: function(t) {
if (t > 1) {
this.multipleAnim.node.active = !0;
this.multipleAnim.play();
} else {
this.multipleAnim.stop();
this.multipleAnim.node.active = !1;
}
}
});
cc._RF.pop();
}, {} ],
Minigame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0f795b5nJdHJ4u7ch0JtSzk", "Minigame");
var i = u(t("../MiniPoker/MiniGameMiniPoker")), o = u(t("../TaiXiu/MiniGameTaiXiu")), r = u(t("../MiniSlot/MiniSlot")), a = u(t("../../Utils/DragAndDrop")), s = u(t("../CaoThap/CaoThap")), c = u(t("../Mini3Kay/MiniBaCay")), l = t("../../Utils/Constants");
function u(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: cc.Component,
properties: {
minigameMenu: {
default: null,
type: cc.Node
},
animMinigameMenu: {
default: null,
type: cc.Animation
},
miniGameMiniPoker: {
default: null,
type: i.default
},
miniGameTaiXiu: {
default: null,
type: o.default
},
btnMinigame: {
default: null,
type: a.default
},
miniGameBauCua: {
default: null,
type: cc.Node
},
miniSlot6: {
default: null,
type: r.default
},
caoThap: {
default: null,
type: s.default
},
miniBaCay: {
default: null,
type: c.default
},
miniSlot7: {
default: null,
type: r.default
}
},
onLoad: function() {
var t = this;
this.isShowMiniGames = !1;
this.currentScene = cc.director.getScene()._name;
"Login" == this.currentScene && (this.minigameMenu.active = !1);
this.childrenCount = this.node.childrenCount;
this.node.children.forEach(function(e) {
e.on(cc.Node.EventType.TOUCH_START, function(n) {
"TaiXiu" === e.name ? t.setSibling(e, 1.2) : t.setSibling(e);
});
});
},
onClickMiniGame: function() {
this.btnMinigame.isMoving || (this.isShowMiniGames ? this.hideMiniGames() : this.showMiniGames());
},
showMiniGames: function() {
this.isShowMiniGames = !0;
this.animMinigameMenu.play("ShowMinigame");
},
hideMiniGames: function() {
this.isShowMiniGames = !1;
this.animMinigameMenu.play("HideMinigame");
},
showTaiXiu: function() {
if ("Login" != this.currentScene) {
if (!this.miniGameTaiXiu.node.active) {
this.miniGameTaiXiu.node.setPosition(0, 0);
this.miniGameTaiXiu.node.setScale(.7, .7);
this.miniGameTaiXiu.show();
}
this.isShowMiniGames && this.hideMiniGames();
window.$Global.minigame.isShowTaixiu = !0;
this.setSibling(this.miniGameTaiXiu.node, 1.2);
}
},
showMiniPoker: function() {
if ("Login" != this.currentScene) {
if (!this.miniGameMiniPoker.node.active) {
this.miniGameMiniPoker.node.setScale(.7, .7);
this.miniGameMiniPoker.show();
}
this.isShowMiniGames && this.hideMiniGames();
window.$Global.minigame.isShowMinipoker = !0;
this.setSibling(this.miniGameMiniPoker.node);
}
},
showBauCua: function() {
if ("Login" != this.currentScene) {
if (!this.miniGameBauCua.active) {
this.miniGameBauCua.setScale(.7, .7);
this.miniGameBauCua.getComponent("MiniBauCua").show();
}
this.isShowMiniGames && this.hideMiniGames();
window.$Global.minigame.isShowBaucua = !0;
this.setSibling(this.miniGameBauCua);
}
},
showGameComingSoon: function() {
window.$UIHelper.showToast("Game sắp ra mắt");
},
showMiniSlot: function(t, e) {
if ("Login" != this.currentScene) {
this.isShowMiniGames && this.hideMiniGames();
var n = parseInt(e);
cc.log("test request type  " + e);
switch (n) {
case l.REQUEST_TYPE.MINI_SLOT_6:
if (!this.miniSlot6.node.active) {
this.miniSlot6.node.setScale(.7, .7);
this.miniSlot6.show(n);
}
this.setSibling(this.miniSlot6.node);
break;

case l.REQUEST_TYPE.MINI_SLOT_7:
if (!this.miniSlot7.node.active) {
this.miniSlot7.node.setScale(.7, .7);
this.miniSlot7.show(n);
}
this.setSibling(this.miniSlot7.node);
break;

case l.REQUEST_TYPE.MINI_SLOT_8:
if (!this.miniSlot8.node.active) {
this.miniSlot8.node.setScale(.7, .7);
this.miniSlot8.show(n);
}
this.setSibling(this.miniSlot8.node);
}
}
},
showCaoThap: function() {
if ("Login" != this.currentScene) {
if (!this.caoThap.node.active) {
this.caoThap.node.setScale(.7, .7);
this.caoThap.show();
}
this.isShowMiniGames && this.hideMiniGames();
this.setSibling(this.caoThap.node);
}
},
showMiniBaCay: function() {
if ("Login" != this.currentScene) {
if (!this.miniBaCay.node.active) {
this.miniBaCay.node.setScale(.7, .7);
this.miniBaCay.show();
}
this.isShowMiniGames && this.hideMiniGames();
this.setSibling(this.miniBaCay.node);
}
},
setSibling: function(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
t.setSiblingIndex(this.childrenCount - 1);
var n = t.name;
if ("MinigameMenu" !== n && "Jackpot" !== n) {
t.runAction(cc.scaleTo(.1, e, e));
this.node.children.forEach(function(t) {
!0 === t.active && t.name !== n && "MinigameMenu" !== t.name && "Jackpot" !== t.name && t.runAction(cc.scaleTo(.1, .7, .7));
});
}
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../Utils/DragAndDrop": "DragAndDrop",
"../CaoThap/CaoThap": "CaoThap",
"../Mini3Kay/MiniBaCay": "MiniBaCay",
"../MiniPoker/MiniGameMiniPoker": "MiniGameMiniPoker",
"../MiniSlot/MiniSlot": "MiniSlot",
"../TaiXiu/MiniGameTaiXiu": "MiniGameTaiXiu"
} ],
MultipleFund: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "acb8bhOQNlOMJv2kkXc8WET", "MultipleFund");
cc.Class({
extends: cc.Component,
properties: {
multipleAnim: {
default: null,
type: cc.Animation
},
multipleSprite: {
default: null,
type: cc.Sprite
},
listMultipleFrames: {
default: [],
type: cc.SpriteFrame
},
txtMultiple: {
default: null,
type: cc.Label
}
},
setMultipleFund: function(t) {
if (t > 1) {
var e = t / 2 - 1;
this.multipleSprite.spriteFrame = this.listMultipleFrames[e];
this.node.active = !0;
this.multipleAnim.play();
} else {
this.multipleAnim.stop();
this.node.active = !1;
}
},
_setMultipleFund: function(t) {
if (t > 1) {
this.txtMultiple.string = "x" + t + " hũ";
this.node.active = !0;
this.multipleAnim && this.multipleAnim.play();
} else {
this.node.active = !1;
this.multipleAnim && this.multipleAnim.stop();
}
},
_setMultipleFundIconGame: function(t) {
if (t > 1) {
this.txtMultiple.string = "x" + t;
this.node.active = !0;
this.multipleAnim.play();
} else {
this.node.active = !1;
this.multipleAnim.stop();
}
}
});
cc._RF.pop();
}, {} ],
NetworkService: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fc651wgXt1OeaMpR0pVjd+e", "NetworkService");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i, o = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}(), r = u(t("qs")), a = u(t("msgpack-lite")), s = t("../Configs/Config"), c = t("../Utils/Constants"), l = t("../Utils/Helper");
function u(t) {
return t && t.__esModule ? t : {
default: t
};
}
function f(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function h(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function d(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var p = cc._decorator, g = p.ccclass, y = (p.property, y || window.WebSocket || window.MozWebSocket), m = g(i = function(t) {
d(e, cc.Component);
function e() {
var t, n, i, o;
f(this, e);
for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
return o = (n = i = h(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
i.handler = null, i.handlersByTypes = [], i.data = {}, n), h(i, o);
}
o(e, [ {
key: "onLoad",
value: function() {
this.connectGame();
}
}, {
key: "start",
value: function() {
this.node.on("" + c.REQUEST_TYPE.AUTH, this.onLogin.bind(this));
this.node.on("notify_" + c.NOTIFY_TYPE.UPDATE_MONEY, this.onUpdateMoney.bind(this));
this.node.on("notify_" + c.NOTIFY_TYPE.NAPCARD_NOTIFY, this.onNotifyRechargeCard.bind(this));
this.node.on("notify_" + c.NOTIFY_TYPE.SESSION_KICKED_BY_OTHER_LOGIN, this.onNotifyOtherLogin.bind(this));
this.currentGoldClient = 0;
this.currentGoldServers = [];
this.goldChanges = [];
}
}, {
key: "onDestroy",
value: function() {
this.node.off("" + c.REQUEST_TYPE.AUTH);
this.node.off("" + c.REQUEST_TYPE.UPDATE_MONEY);
this.node.off("" + c.REQUEST_TYPE.NAPCARD_NOTIFY);
this.node.off("" + c.REQUEST_TYPE.SESSION_KICKED_BY_OTHER_LOGIN);
}
}, {
key: "connectGame",
value: function() {
var t = this;
this.getVersionCfg().then(this.getApiToken()).then(function() {
return t.connectWs();
}).catch(function(t) {
window.$UIHelper.showToast("Kết nối thất bại! Vui lòng thử lại");
});
}
}, {
key: "setHandler",
value: function(t) {
this.handler = t;
}
}, {
key: "addHandlersForType",
value: function(t, e) {
this.handlersByTypes[t] || (this.handlersByTypes[t] = []);
this.handlersByTypes[t].push(e);
}
}, {
key: "clearHandlersForType",
value: function(t) {
this.handlersByTypes[t] = [];
}
}, {
key: "removeHandlersForType",
value: function(t, e) {
if (null != this.handlersByTypes[t]) {
var n = this.handlersByTypes[t].indexOf(e);
n > -1 && this.handlersByTypes[t].splice(n, 1);
}
}
}, {
key: "emit",
value: function(t, e) {
this.node.emit(t, e);
}
}, {
key: "on",
value: function(t, e, n) {
this.node.on(n ? n + "_" + t : t, e);
}
}, {
key: "once",
value: function(t, e) {
this.node.once(t, e);
}
}, {
key: "off",
value: function(t, e, n) {
this.node.off(n ? n + "_" + t : t, e);
}
}, {
key: "connectWs",
value: function() {
try {
var t = s.CONFIG.WS.ws;
("https:" == window.location.protocol || cc.sys.isNative) && (t = s.CONFIG.WS.wss);
this.socket = new y(t);
cc.log("test url ", t);
t === s.CONFIG.WS.wss && cc.sys.isNative && (this.socket = new y(t, null, cc.url.raw("resources/raw/cacert.pem")));
this.socket.binaryType = "arraybuffer";
this.socket.onopen = this.wsOpen.bind(this);
this.socket.onmessage = this.wsMessage.bind(this);
this.socket.onerror = this.wsError.bind(this);
this.socket.onclose = this.wsClose.bind(this);
} catch (t) {
cc.error("Can not connect to server ws. Retry after 5s");
setTimeout(this.connectWs.bind(this), 5e3);
}
}
}, {
key: "wsOpen",
value: function(t) {
this.socketConnected = !0;
cc.log("WS open");
window.$UIHelper.showLoading(!1);
this.emit("socketOpen");
"Login" != cc.director.getScene()._name && this.wsSendLogin(this.userLogin);
}
}, {
key: "wsMessage",
value: function(t) {
var e = t.data;
if (e instanceof ArrayBuffer) {
var n = new DataView(e), i = n.getInt8(0);
if (i === c.CALL_TYPE.RESPONSE) {
var o = n.getInt8(1), r = n.getInt8(2), s = (n.getInt8(3), n.getInt8(4), n.getUint32(5, !1), 
new Uint8Array(e, 9)), l = a.default.decode(s);
"number" != typeof l && (l.resultCode = r);
cc.log("RESPONSE:", this.getKey(o, c.REQUEST_TYPE), r);
cc.log(l);
if (this.handler) {
this.handler.emit("" + o, l);
this.handlersByTypes[o] && this.handlersByTypes[o].forEach(function(t) {
t.emit("" + o, l);
});
} else this.node.emit("" + o, l);
} else if (i === c.CALL_TYPE.UPDATE) {
var u = n.getInt8(1), f = (n.getInt8(2), n.getInt8(3), n.getUint32(4, !1), new Uint8Array(e, 8)), h = a.default.decode(f);
cc.log("NOTIFY:", u);
cc.log(h);
if (this.handler) {
this.handler.emit("notify_" + u, h);
this.handlersByTypes[u] && this.handlersByTypes[u].forEach(function(t) {
t.emit("notify_" + u, h);
});
} else this.node.emit("notify_" + u, h);
} else {
cc.error("calltype error", i);
this.handler && this.handler.emit("" + i);
}
}
}
}, {
key: "wsError",
value: function(t) {
cc.log("WebSocket error", t);
if ("Login" != cc.director.getScene()._name) {
clearInterval(this.sendKeepAlive);
cc.director.loadScene("Login", this.connectGame.bind(this));
}
}
}, {
key: "wsClose",
value: function(t) {
this.socketConnected = !1;
cc.log("WebSocket instance closed.", t);
cc.log("Try to open ws.");
clearInterval(this.sendKeepAlive);
setTimeout(this.connectWs.bind(this), 3e3);
}
}, {
key: "wsSend",
value: function(t, e, n) {
var i = this;
if (this.socketConnected) {
this.ws.send(JSON.stringify(e));
return n ? new Promise(function(t, e) {
i.ws.onmessage = function(e) {
t(e.data);
};
}) : void 0;
}
}
}, {
key: "getVersionCfg",
value: function() {
var t = this;
return new Promise(function(e, n) {
t.sendRequestXHR(s.CONFIG.URLS.server + s.CONFIG.API.PATHS.versionCfg, "POST", r.default.stringify({
os_type: s.CONFIG.INFO.osType,
version: s.CONFIG.INFO.osVersion,
providerCode: s.CONFIG.INFO.providerCode
}), {
"Content-type": "application/x-www-form-urlencoded"
}).then(function(t) {
cc.log("GET_VERSION_CONFIG");
cc.log(t);
if (t.status === c.ResponseResultCode.SUCCESS) {
var n = t.data;
window.$Global.CONFIG.VERSION = n;
var i = n.latest_version, o = n.supported_versions, r = n.download_url;
if (o) if (o.indexOf(s.CONFIG.INFO.clientVersion) < 0) {
window.$Global.forceUpdate = !0;
var a = "Đã có phiên bản mới của " + s.CONFIG.INFO.gameName + ", bạn cần phải cập nhật phiên bản mới nhất để có thể tiếp tục chơi!";
window.$UIHelper.showPopup(a, function() {
cc.sys.openURL(r);
}, !1, !1);
} else {
window.$Global.needUpdate = !0;
if (s.CONFIG.INFO.clientVersion.replace(".", "") < i.replace(".", "")) {
a = "Đã có phiên bản mới của " + s.CONFIG.INFO.gameName + ", bạn nên cập nhật phiên bản mới nhất!";
window.$UIHelper.showPopup(a, function() {
cc.sys.openURL(r);
}, !0);
}
}
}
e(t);
}).catch(function(t) {
cc.log(t);
});
});
}
}, {
key: "getConfigByKey",
value: function(t) {
var e = this;
return new Promise(function(n, i) {
e.sendRequestXHR(s.CONFIG.URLS.server + s.CONFIG.API.PATHS.config, "POST", r.default.stringify({
config_key: t
}), {
"Content-type": "application/x-www-form-urlencoded"
}).then(function(e) {
cc.log("GET_CONFIG: " + t);
cc.log(e);
n(e);
}).catch(function(t) {
cc.log(t);
});
});
}
}, {
key: "getApiToken",
value: function() {
return new Promise(function(t, e) {
var n = new XMLHttpRequest();
n.onreadystatechange = function() {
if (4 == n.readyState && 200 == n.status) {
var e = JSON.parse(n.responseText);
cc.log("GET API TOKEN");
cc.log(e);
var i = e.data;
window.$Global.CONFIG.token = i;
t(i);
} else cc.log(n.statusText);
};
var i = s.CONFIG.URLS.server + s.CONFIG.API.PATHS.initialize + "?api_key=" + s.CONFIG.API.AUTH.key + "&api_secret=" + s.CONFIG.API.AUTH.secret;
n.open("GET", i, !0);
n.send();
});
}
}, {
key: "getResource",
value: function(t, e) {
var n = this;
return new Promise(function(i, o) {
n.sendRequestXHR(s.CONFIG.URLS.server + t, "POST", e, {
token: window.$Global.CONFIG.token
}).then(function(t) {
i(t.data);
}).catch(function(t) {
cc.log(t);
});
});
}
}, {
key: "checkServerStatus",
value: function() {}
}, {
key: "sendRequestXHR",
value: function(t, e, n, i, o, r) {
return new Promise(function(a, s) {
var c = new XMLHttpRequest();
c.onreadystatechange = function() {
if (4 == c.readyState && c.status >= 200 && c.status < 400) {
var t = JSON.parse(c.responseText);
o && o(t);
a(t);
} else r && r(c);
};
c.open(e, t, !0);
for (var l in i) c.setRequestHeader(l, i[l]);
c.send(n);
});
}
}, {
key: "onLogin",
value: function(t) {
if (t.resultCode === c.ResponseResultCode.SUCCESS) {
this.userInfo = t.desc;
window.$Global.userService.onLogin(this.userInfo);
this.sessionid = t.sessionid;
this.node.emit("login", this.userInfo);
this.keepAlive();
}
}
}, {
key: "wsSendLoginFacebook",
value: function(t) {
this.userLogin = t;
var e = {
fbToken: t.accessoken,
refcode: t.refcode,
provider_code: s.CONFIG.INFO.providerCode,
client_version: s.CONFIG.INFO.clientVersion,
platform: s.CONFIG.INFO.platform,
model: "",
device_uuid: "",
g2fa: t.g2fa,
loginType: 2,
os_version: s.CONFIG.INFO.osVersion,
apiKey: s.CONFIG.API.AUTH.key
};
this.sendMessage(c.REQUEST_TYPE.AUTH, e);
}
}, {
key: "wsSendLogin",
value: function(t) {
this.userLogin = t;
var e = {
username: t.username,
refcode: t.refcode,
password: t.password,
provider_code: s.CONFIG.INFO.providerCode,
client_version: s.CONFIG.INFO.clientVersion,
platform: s.CONFIG.INFO.platform,
model: "",
device_uuid: "",
g2fa: t.g2fa,
loginType: 1,
os_version: s.CONFIG.INFO.osVersion,
apiKey: s.CONFIG.API.AUTH.key
};
this.sendMessage(c.REQUEST_TYPE.AUTH, e);
}
}, {
key: "keepAlive",
value: function() {
var t = this;
this.sendKeepAlive = setInterval(function() {
t.sendMessage(c.REQUEST_TYPE.SEND_KEEP_ALIVE, {});
}, 4e3);
}
}, {
key: "registerAccount",
value: function(t) {
var e = this, n = {
"content-type": "application/x-www-form-urlencoded"
};
n.token = window.$Global.CONFIG.token;
var i = {
username: t.username,
mobile: t.mobile,
refcode: t.refcode,
password: t.password,
full_name: t.full_name,
provider_code: s.CONFIG.INFO.providerCode,
client_version: s.CONFIG.INFO.clientVersion,
platform: s.CONFIG.INFO.platform,
model: s.CONFIG.INFO.model,
device_uuid: s.CONFIG.INFO.deviceId
};
return new Promise(function(t, o) {
e.sendRequestXHR(s.CONFIG.URLS.server + s.CONFIG.API.PATHS.register, "POST", r.default.stringify(i), n).then(function(e) {
cc.log(JSON.stringify(e));
t(e);
}).catch(function(t) {
cc.error(JSON.stringify(t));
});
});
}
}, {
key: "getListGames",
value: function() {
var t = this;
this.sendMessage(c.REQUEST_TYPE.LIST_GAMES);
this.once("" + c.REQUEST_TYPE.LIST_GAMES, function(e) {
t.games = e.games;
t.getListLobby();
});
}
}, {
key: "getListLobby",
value: function() {
var t = this;
this.sendMessage(c.REQUEST_TYPE.LIST_LOBBIES, {
gameId: -1
});
this.once("" + c.REQUEST_TYPE.LIST_LOBBIES, function(e) {
t.lobbies = e.lobbies;
});
}
}, {
key: "subcribeGame",
value: function(t) {
this.sendMessage(c.REQUEST_TYPE.SUBSCRIBE_GAME, {
gameId: t
});
}
}, {
key: "subcribeGameSlot",
value: function() {
this.sendMessage(c.REQUEST_TYPE.SUBSCRIBE_GAME, {
gameId: c.GAMES.SLOT
});
}
}, {
key: "joinLobby",
value: function(t) {
this.sendMessage(c.REQUEST_TYPE.JOIN_LOBBY, {
lobbyId: t
});
}
}, {
key: "subcribeLobby",
value: function(t) {
this.sendMessage(c.REQUEST_TYPE.SUBSCRIBE_LOBBY, {
lobbyId: t
});
}
}, {
key: "leaveLobby",
value: function(t) {
this.sendMessage(c.REQUEST_TYPE.LEAVE_LOBBY, {
lobbyId: t
});
}
}, {
key: "unsubscribeLobby",
value: function(t) {
this.sendMessage(c.REQUEST_TYPE.UNSUBSCRIBE_LOBBY, {
lobbyId: t
});
}
}, {
key: "getRooms",
value: function() {
this.sendMessage(c.REQUEST_TYPE.GET_ROOMS, {
lobbyId: this.zoneId
});
}
}, {
key: "joinRoom",
value: function(t) {
this.sendMessage(c.REQUEST_TYPE.JOIN_ROOM, {
bet: t,
type: c.MONEY_TYPE.GOLD
});
}
}, {
key: "leaveRoom",
value: function() {
this.sendMessage(c.REQUEST_TYPE.LEAVE_ROOM, {
roomId: this.roomId
});
}
}, {
key: "getBXHHu",
value: function() {
this.sendMessage(c.REQUEST_TYPE.UPDATE_PEERS, {
type: c.REQUEST_TYPE.GET_JACKPOT_HISTORY
});
}
}, {
key: "getHistory",
value: function() {
this.sendMessage(c.REQUEST_TYPE.UPDATE_PEERS, {
type: c.REQUEST_TYPE.GET_USER_HISTORY
});
}
}, {
key: "spin",
value: function(t, e) {
var n = {
type: c.REQUEST_TYPE.START_MATCH,
deal: t,
line: e
};
cc.log(n);
this.sendMessage(c.REQUEST_TYPE.UPDATE_PEERS, n);
}
}, {
key: "sendMessage",
value: function(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
if (this.socket && this.socketConnected) {
cc.log("SENT:", this.getKey(t, c.REQUEST_TYPE));
var i = a.default.encode(e), o = i.length, r = new ArrayBuffer(16 + o), s = new DataView(r);
s.setUint8(0, n);
s.setUint8(1, t);
s.setUint32(2, this.sessionid, !1);
s.setUint32(6, 0, !1);
s.setUint8(10, 0);
s.setUint8(11, 3);
s.setUint32(12, o, !1);
for (var l = 0; l < i.length; l++) s.setUint8(l + 16, i[l]);
this.socket.send(r);
} else cc.error("Not setup socket yet!");
}
}, {
key: "getKey",
value: function(t, e) {
for (var n in e) if (e[n] == t) return n;
return null;
}
}, {
key: "onUpdateMoney",
value: function(t) {
var e = t;
this.userInfo && (this.userInfo.gold = e.total);
var n = c.CONFIG_GOLD.goldName, i = c.CONFIG_GOLD.gameName, o = (0, l.moneyFormat)(e.change, !0), r = "";
if (e.type == c.UpdateMoneyTypeCode.HIDDEN_POPUP) switch (e.zone_id) {
case c.ZONE_ID.MINI_POKER:
case c.ZONE_ID.SLOT_18:
case c.ZONE_ID.SLOT_28:
case c.ZONE_ID.SLOT_32:
var a = {
zone_id: e.zone_id,
total: e.total - e.change - e.bet,
change: -e.bet,
desc: "bet"
}, s = {
zone_id: e.zone_id,
total: e.total,
change: e.change + e.bet,
desc: "endMatch"
};
this.addUpdateMoneyNotify(a);
this.addUpdateMoneyNotify(s);
break;

default:
this.addUpdateMoneyNotify(e);
} else {
var u = {
zone_id: -1,
total: e.total,
change: e.change,
desc: "hidePopup"
};
this.addUpdateMoneyNotify(u);
r = u.change > 0 ? e.type == c.UpdateMoneyTypeCode.VIDEO_ADS ? "Xem video thành công, nhận thưởng " + o + " " + n : e.type == c.UpdateMoneyTypeCode.INVITE_FB ? "Mời bạn thành công, nhận thưởng " + o + n : e.type == c.UpdateMoneyTypeCode.SMS ? "Tài khoản vừa nạp thành công " + o + n + " từ giao dịch tin nhắn SMS." : e.type == c.UpdateMoneyTypeCode.CARD ? "Tài khoản vừa nạp thành công " + o + " " + n + " từ giao dịch thẻ cào." : e.type == c.UpdateMoneyTypeCode.IAP ? "Tài khoản vừa nạp thành công " + o + " " + n + " từ giao dịch IAP." : e.type == c.UpdateMoneyTypeCode.ADMIN ? "Tài khoản vừa nạp thành công " + o + " " + n + " từ hệ thống." : e.type == c.UpdateMoneyTypeCode.TRANSFER_GOLD ? "Tài khoản vừa được nhận " + o + " " + n + " từ giao dịch chuyển " + n + "." : e.type == c.UpdateMoneyTypeCode.IGAME_CHARGING ? "Tài khoản vừa được nạp thành công " + o + " " + n + " từ cổng thanh toán" + i + "." : e.type == c.UpdateMoneyTypeCode.BY_GIFT_CODE ? "Nhận thưởng thành công " + o + " " + n + " từ Giftcode!" : "Tài khoản vừa nạp thành công " + o + " " + n : "Tài khoản vừa bị trừ " + o + " " + n + ". Liên hệ hotline để biết thêm chi tiết.";
window.$UIHelper.showPopup(r, function() {}, !1);
}
}
}, {
key: "updateMoneyWithZoneId",
value: function(t) {
for (var e = [], n = 0; n < this.goldChanges.length; n++) {
var i = this.goldChanges[n];
if (i.zone_id == t) {
this.currentGoldClient += i.change;
this.emit("updateMoney", this.currentGoldClient);
var o = n;
e.push(o);
}
}
for (var r = e.length - 1; r >= 0; r--) this.goldChanges.splice(e[r], 1);
if (0 == this.goldChanges.length) {
if (this.currentGoldServers.length > 0) {
var a = this.currentGoldServers[this.currentGoldServers.length - 1];
this.currentGoldClient != a.total && this.emit("updateMoney", a.total);
this.currentGoldClient = a.total;
}
this.currentGoldServers.splice(0);
}
}
}, {
key: "addUpdateMoneyNotify",
value: function(t) {
if (0 != t.change) {
this.currentGoldServers.push(t);
this.goldChanges.push(t);
"endMatch" !== t.desc && this.updateMoneyWithZoneId(t.zone_id);
}
}
}, {
key: "getFundSlot",
value: function(t) {
var e = this;
this.sendMessage(c.REQUEST_TYPE.GET_FUND_SLOT, {
zoneIds: t
});
return new Promise(function(t, n) {
e.once("" + c.REQUEST_TYPE.GET_FUND_SLOT, function(e) {
t(e);
});
});
}
}, {
key: "rechargeCard",
value: function(t) {
var e = this;
this.sendMessage(c.REQUEST_TYPE.NAP_CARD, {
nhamang_id: t.id,
menhgia: t.value,
mathe: t.code,
seri: t.seri
});
return new Promise(function(t, n) {
e.once("" + c.REQUEST_TYPE.NAP_CARD, function(e) {
t(e);
});
});
}
}, {
key: "onNotifyRechargeCard",
value: function(t) {
window.$UIHelper.showPopup(t.desc, function() {}, !1);
}
}, {
key: "getUserJackpot",
value: function(t) {
var e = this;
this.sendMessage(c.REQUEST_TYPE.GET_LIST_USER_JACKPOT, {
zoneIds: t
});
return new Promise(function(t, n) {
e.once("" + c.REQUEST_TYPE.GET_LIST_USER_JACKPOT, function(e) {
t(e);
});
});
}
}, {
key: "getSystemMessages",
value: function(t) {
var e = this;
this.sendMessage(c.REQUEST_TYPE.GET_SYSTEM_MESSAGE, {
types: t,
provider_code: s.CONFIG.INFO.providerCode
});
return new Promise(function(t, n) {
e.once("" + c.REQUEST_TYPE.GET_SYSTEM_MESSAGE, function(e) {
t(e);
});
});
}
}, {
key: "getSystemMessagesHttp",
value: function(t) {
return new Promise(function(e, n) {
var i = new XMLHttpRequest();
i.onreadystatechange = function() {
if (4 == i.readyState && 200 == i.status) {
var t = JSON.parse(i.responseText);
cc.log("SYSTEM MESSAGE");
cc.log(t);
e(t);
} else cc.log(i.statusText);
};
var o = s.CONFIG.URLS.server + s.CONFIG.API.PATHS.systemMessage + "?type=" + t;
i.open("GET", o, !0);
i.send();
});
}
}, {
key: "onNotifyOtherLogin",
value: function(t) {
cc.director.loadScene("Login", function() {
window.$UIHelper.showPopup(t.desc, function() {}, !1, !0);
});
}
}, {
key: "exchangeCard",
value: function(t) {
var e = this;
this.sendMessage(c.REQUEST_TYPE.GET_MOBILE_CARD, {
telecom: t.id,
amount: t.value
});
return new Promise(function(t, n) {
e.once("" + c.REQUEST_TYPE.GET_MOBILE_CARD, function(e) {
t(e);
});
});
}
}, {
key: "getHistoryCard",
value: function() {
var t = this;
this.sendMessage(c.REQUEST_TYPE.GET_MOBILE_CARD_HISTORY);
return new Promise(function(e, n) {
t.once("" + c.REQUEST_TYPE.GET_MOBILE_CARD_HISTORY, function(t) {
e(t);
});
});
}
} ]);
return e;
}()) || i;
n.default = m;
e.exports = n.default;
cc._RF.pop();
}, {
"../Configs/Config": "Config",
"../Utils/Constants": "Constants",
"../Utils/Helper": "Helper",
"msgpack-lite": 10,
qs: 39
} ],
NotificationTxt: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "bdb84pizKFN8oNX7pFcONYL", "NotificationTxt");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.NotificationTxt = {
CHECKING_UPDATE: "Kiểm tra cập nhật",
UPDATING: "Đang cập nhật",
NEW_VERSION_FOUND: "Tìm thấy phiên bản mới",
ERR_UPDATE: "Cập nhật không thành công",
UP_TO_DATE: "Đã cập nhật phiên bản mới nhất",
RETRY_UPDATE: "Lỗi cập nhật, đang thử lại"
};
cc._RF.pop();
}, {} ],
NotifyJackpot: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6bd9csLs21Pd50maIIYzk2J", "NotifyJackpot");
var i = t("../../Utils/Constants"), o = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
anim: {
default: null,
type: cc.Animation
},
user_name: {
default: null,
type: cc.Label
},
gold: {
default: null,
type: cc.Label
},
game_name: {
default: null,
type: cc.Label
},
sound: {
default: null,
type: cc.AudioClip
},
bg: {
default: null,
type: cc.Node
}
},
start: function() {
window.$Global.networkService.on("notify_" + i.REQUEST_TYPE.ANOUNCEMENTS, this.onHaveJackpot.bind(this));
},
onDestroy: function() {
window.$Global.networkService.off("notify_" + i.REQUEST_TYPE.ANOUNCEMENTS);
},
onHaveJackpot: function(t) {
var e = this;
if (t.isJackpot) {
var n = t.userDisplayName || "";
this.user_name.string = n.length > 15 ? n.substring(0, 15) + "..." : n;
this.gold.string = (0, o.numberWithDot)(t.winAmount || 0);
var r = t.zoneId || 0, a = (0, o.getKeyByValue)(i.ZONE_ID, r);
if (null === a || void 0 === a) return;
var s = "game " + i.ZONE_NAME[a];
this.game_name.string = s;
setTimeout(function() {
e.node.y = -360;
e.bg.active = !0;
e.node.runAction(cc.sequence(cc.moveTo(1, 0, -300), cc.callFunc(function() {
cc.audioEngine.play(e.sound, !1, 1);
}), cc.callFunc(function() {
e.anim.play();
}), cc.delayTime(5), cc.callFunc(e.hide.bind(e))));
}, 5e3);
}
},
hide: function() {
this.bg.active = !1;
this.anim.stop();
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper"
} ],
ObjectUtil: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d56b1ZlmeJGGoIHIc85Ng8w", "ObjectUtil");
cc._RF.pop();
}, {} ],
PanelAgency: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "72d39MBgEpA4JPfcOJbRua4", "PanelAgency");
var i = r(t("../Common/BaseTabContainer")), o = r(t("./PanelTransfer"));
function r(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: cc.Component,
properties: {
listAgency: {
default: null,
type: cc.Node
},
agencyItem: {
default: null,
type: cc.Prefab
},
tabContainer: {
default: null,
type: i.default
},
tabTransfer: {
default: null,
type: o.default
}
},
refreshData: function() {
var t = this;
window.$Global.userService.getDealers().then(function(e) {
t.setData(e);
});
},
setData: function(t) {
var e = this;
this.listAgency.removeAllChildren();
var n = 0;
t.forEach(function(t) {
n++;
var i = cc.instantiate(e.agencyItem), o = i.getComponentsInChildren(cc.Label), r = i.getComponentsInChildren(cc.Button);
o[0].string = n;
var a = t.name;
o[1].string = a.length > 13 ? a.substring(0, 13) + "..." : a;
o[2].string = t.userId;
o[3].string = t.tel;
o[4].string = t.add;
r[0].node.on(cc.Node.EventType.TOUCH_END, function(e) {
cc.sys.openURL(t.fb);
});
var s = t.userId;
r[1].node.on(cc.Node.EventType.TOUCH_END, function(t) {
window.$Global.userService.getUserInfo(s).then(function(t) {
e.tabTransfer.setTransferUserInfo(t);
});
e.tabContainer.tabHandle(0);
});
i.parent = e.listAgency;
});
}
});
cc._RF.pop();
}, {
"../Common/BaseTabContainer": "BaseTabContainer",
"./PanelTransfer": "PanelTransfer"
} ],
PanelCard: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "18309d3kKVEU5iCLUps7250", "PanelCard");
var i = t("../../Utils/Helper"), o = t("../../Utils/Constants");
cc.Class({
extends: cc.Component,
properties: {
listCardContent: {
default: null,
type: cc.Node
},
cardItem: {
default: null,
type: cc.Prefab
},
line: {
default: null,
type: cc.Prefab
},
txtCardName: {
default: null,
type: cc.Label
},
listCardValueContent: {
default: null,
type: cc.Node
},
txtCardValue: {
default: null,
type: cc.Label
},
boxCode: {
default: null,
type: cc.EditBox
},
boxSeri: {
default: null,
type: cc.EditBox
},
boxCaptcha: {
default: null,
type: cc.EditBox
},
captchaImg: {
default: null,
type: cc.Sprite
},
exchangeRateContent: {
default: null,
type: cc.Node
},
exchangeRateItem: {
default: null,
type: cc.Prefab
},
toggleCard1: {
default: null,
type: cc.Toggle
}
},
setData: function(t) {
var e = this;
this.reset();
this.listCard = t;
this.listCardContent.removeAllChildren();
for (var n = function(n) {
(o = cc.instantiate(e.cardItem)).children[0].getComponent(cc.Label).string = t[n].name;
o.on(cc.Node.EventType.TOUCH_END, function(t) {
e.clickCard(n);
});
o.parent = e.listCardContent;
n !== t.length - 1 && (cc.instantiate(e.line).parent = e.listCardContent);
}, i = 0; i < t.length; i++) {
var o;
n(i);
}
this.listCardName = [ "Viettel", "Vina", "Mobi" ];
this.listCardValueDefault = [ 1e4, 2e4, 5e4, 1e5, 2e5, 5e5 ];
this.setExchangeRate(0);
this.toggleCard1.isChecked = !0;
},
showListCard: function() {
var t = this.listCardContent.active;
this.listCardContent.active = !t;
this.boxCode.node.active = t;
},
clickCard: function(t) {
this.choiseCode = this.listCard[t].code_name;
this.choiseValue = null;
this.listCardContent.active = !1;
var e = this.listCard[t];
this.txtCardName.string = e.name;
this.setCardValue(t);
this.txtCardValue.string = "Chọn mệnh giá";
this.boxCode.node.active = !0;
},
setCardValue: function(t) {
var e = this;
this.listCardValueContent.removeAllChildren();
for (var n = this.listCard[t], o = function(t) {
(a = cc.instantiate(e.cardItem)).children[0].getComponent(cc.Label).string = (0, 
i.numberWithDot)(n.list_amout[t]);
a.on(cc.Node.EventType.TOUCH_END, function(i) {
e.clickCardValue(n.list_amout[t]);
});
a.parent = e.listCardValueContent;
t !== n.list_amout.length - 1 && (cc.instantiate(e.line).parent = e.listCardValueContent);
}, r = 0; r < n.list_amout.length; r++) {
var a;
o(r);
}
},
clickCardValue: function(t) {
this.choiseValue = t;
this.listCardValueContent.active = !1;
this.txtCardValue.string = (0, i.numberWithDot)(t, !0) + " VND";
this.boxCode.node.active = !0;
this.boxSeri.node.active = !0;
},
showListCardValue: function() {
var t = this.listCardValueContent.active;
this.listCardValueContent.active = !t;
if (listCardValueContent.childrenCount > 0) {
this.boxCode.node.active = t;
this.boxSeri.node.active = t;
}
},
clickRefreshCaptcha: function() {},
clickCashIn: function() {
var t = this;
this.choiseCode ? this.choiseValue ? "" !== this.boxCode.string ? "" !== this.boxSeri.string ? window.$Global.networkService.rechargeCard({
id: this.choiseCode,
value: this.choiseValue,
code: this.boxCode.string,
seri: this.boxSeri.string
}).then(function(e) {
e.resultCode === o.ResponseResultCode.SUCCESS && t.reset();
window.$UIHelper.showToast(e.desc || "");
}) : window.$UIHelper.showToast("Vui lòng nhập số seri") : window.$UIHelper.showToast("Vui lòng nhập mã thẻ cào") : window.$UIHelper.showToast("Vui lòng chọn mệnh giá") : window.$UIHelper.showToast("Vui lòng chọn nhà mạng");
},
setExchangeRate: function(t) {
var e = this, n = this.listCardName[t], i = !1;
this.listCard.forEach(function(t) {
if (t.name.includes(n)) {
i = !0;
e.fillExchangeRate(t.list_amout, t.rate_to_gold);
}
});
i || this.fillExchangeRate(this.listCardValueDefault, 0);
},
fillExchangeRate: function(t, e) {
var n = this;
this.exchangeRateContent.removeAllChildren();
t.forEach(function(t) {
var o = cc.instantiate(n.exchangeRateItem);
o.children[0].getComponent(cc.Label).string = (0, i.numberWithDot)(t);
o.children[1].getComponent(cc.Label).string = e > 0 ? (0, i.numberWithDot)(t * e / 100) : "Không hỗ trợ";
o.parent = n.exchangeRateContent;
});
},
toggleCardChanged: function(t, e) {
this.setExchangeRate(e);
},
reset: function() {
this.choiseCode = null;
this.choiseValue = null;
this.boxCode.string = "";
this.boxSeri.string = "";
this.txtCardName.string = "Chọn nhà mạng";
this.txtCardValue.string = "Chọn mệnh giá";
},
clickExchange: function() {
var t = this;
this.choiseCode ? this.choiseValue ? window.$Global.networkService.exchangeCard({
id: this.choiseCode,
value: this.choiseValue
}).then(function(e) {
e.resultCode === o.ResponseResultCode.SUCCESS && t.reset();
window.$UIHelper.showToast(e.desc || "");
}) : window.$UIHelper.showToast("Vui lòng chọn mệnh giá") : window.$UIHelper.showToast("Vui lòng chọn nhà mạng");
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper"
} ],
PanelExchange: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "873125DeUdMBLwqf+ExoBi8", "PanelExchange");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./PanelCard")), o = t("../../Utils/Constants"), r = t("../../Utils/Helper");
cc.Class({
extends: i.default,
properties: {
cardContent: {
default: null,
type: cc.Node
},
cardHistoryItem: {
default: null,
type: cc.Prefab
}
},
showListCard: function() {
var t = this.listCardContent.active;
this.listCardContent.active = !t;
},
clickCard: function(t) {
this.choiseCode = this.listCard[t].code_name;
this.choiseValue = null;
this.listCardContent.active = !1;
var e = this.listCard[t];
this.txtCardName.string = e.name;
this.setCardValue(t);
this.txtCardValue.string = "Chọn mệnh giá";
},
clickCardValue: function(t) {
this.choiseValue = t;
this.listCardValueContent.active = !1;
this.txtCardValue.string = (0, r.numberWithDot)(t, !0) + " VND";
},
showListCardValue: function() {
var t = this.listCardValueContent.active;
this.listCardValueContent.active = !t;
},
reset: function() {
this.choiseCode = null;
this.choiseValue = null;
this.txtCardName.string = "Chọn nhà mạng";
this.txtCardValue.string = "Chọn mệnh giá";
},
clickExchange: function() {
var t = this;
this.choiseCode ? this.choiseValue ? window.$Global.networkService.exchangeCard({
id: this.choiseCode,
value: this.choiseValue.toString()
}).then(function(e) {
if (e.resultCode === o.ResponseResultCode.SUCCESS) {
t.reset();
window.$UIHelper.showPopup("Mã thẻ: " + e.pin + "Seri: " + e.seri, function() {}, !1, !0);
}
window.$UIHelper.showToast(e.desc || "");
}) : window.$UIHelper.showToast("Vui lòng chọn mệnh giá") : window.$UIHelper.showToast("Vui lòng chọn nhà mạng");
},
setExchangeRate: function(t) {
var e = this, n = this.listCardName[t], i = !1;
this.listCard.forEach(function(t) {
if (t.name.includes(n)) {
i = !0;
e.fillExchangeRate(t.list_amout, t.rate_to_card);
}
});
i || this.fillExchangeRate(this.listCardValueDefault, 0);
},
getHistory: function() {
var t = this;
window.$Global.networkService.getHistoryCard().then(function(e) {
if (e.resultCode === o.ResponseResultCode.SUCCESS) {
e.data.forEach(function(e) {
var n = cc.instantiate(t.cardHistoryItem), i = n.getComponentsInChildren(cc.Label);
i[0].string = e.date_create || "";
i[1].string = e.name || "";
i[2].string = (0, r.moneyFormat)(e.amount) || "";
i[3].string = e.pin || "";
i[4].string = e.seri || "";
n.parent = t.cardContent;
});
}
});
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper",
"./PanelCard": "PanelCard"
} ],
PanelGameList: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "00c35Uj4o1M/L0D8zG8C5/n", "PanelGameList");
var i = t("../../Utils/Constants"), o = a(t("./LobbyItem")), r = a(t("./MinigameLobbyItem"));
function a(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: cc.Component,
properties: {
lobbyGroup: {
default: null,
type: cc.Node
},
roomGroup: {
default: null,
type: cc.Node
},
listSlotRoomPrefab: {
default: [],
type: cc.Prefab
},
slotGroup: {
default: null,
type: cc.Node
},
listLobbyGames: {
default: [],
type: o.default
},
eventNode: {
default: null,
type: cc.Node
},
lobbyNode: {
default: null,
type: cc.Node
},
background: {
default: null,
type: cc.Sprite
},
listBG: {
default: [],
type: cc.SpriteFrame
},
isSetRoomBackground: {
default: !1
},
listMinigames: {
default: [],
type: r.default
}
},
networkService: null,
onLoad: function() {
if (window.$Global.networkService.currentRoom) {
this.lobbyGroup.active = !1;
switch (window.$Global.networkService.currentRoom.zone.id) {
case i.ZONE_ID.SLOT_32:
this.background.spriteFrame = this.listBG[1];
this.isSetRoomBackground = !0;
break;

case i.ZONE_ID.SLOT_18:
this.background.spriteFrame = this.listBG[2];
this.isSetRoomBackground = !0;
break;

case i.ZONE_ID.SLOT_28:
this.background.spriteFrame = this.listBG[3];
this.isSetRoomBackground = !0;
break;

default:
this.isSetRoomBackground = !1;
}
}
this.isShowGameList = !0;
this.zoneToScene = {};
this.zoneToScene[i.ZONE_ID.SLOT_32] = "Slot_32";
this.zoneToScene[i.ZONE_ID.SLOT_18] = "Slot_18";
this.zoneToScene[i.ZONE_ID.SLOT_28] = "Slot_28";
this.availableGames = [ "SLOT5", "SLOT", "SLOT1" ];
this.listSlotRoom = [];
this.listZoneToGetJackpot = [ i.ZONE_ID.SLOT_18, i.ZONE_ID.SLOT_28, i.ZONE_ID.SLOT_32 ];
},
start: function() {
var t = this;
if (void 0 !== window.$Global && void 0 !== window.$Global.networkService) {
this.networkService = window.$Global.networkService;
window.$Global.userService.once("userInfoFetched", function(e) {
t.networkService.on("" + i.REQUEST_TYPE.LIST_LOBBIES, t.onListLobby.bind(t));
t.networkService.on("" + i.REQUEST_TYPE.SUBSCRIBE_GAME, t.onSubcribedGame.bind(t));
t.networkService.on("" + i.REQUEST_TYPE.JOIN_LOBBY, t.onJoinedLobby.bind(t));
t.networkService.on("" + i.REQUEST_TYPE.SUBSCRIBE_LOBBY, t.onSubcribedLobby.bind(t));
t.networkService.on("" + i.REQUEST_TYPE.GET_ROOMS, t.onGetRooms.bind(t));
t.networkService.on("" + i.REQUEST_TYPE.JOIN_ROOM, t.onJoinRoom.bind(t));
t.networkService.on("" + i.REQUEST_TYPE.LEAVE_LOBBY, t.onLeaveLobby.bind(t));
t.networkService.on("" + i.REQUEST_TYPE.UNSUBSCRIBE_LOBBY, t.onUnsubscribeLobby.bind(t));
t.networkService.on("notify_" + i.NOTIFY_TYPE.ACTIONS_IN_LOBBY, t.onLobbyActions.bind(t));
t.networkService.on("notify_" + i.NOTIFY_TYPE.NOTIFY_MINI_CHANGED, t.onNotifyMiniChanged.bind(t));
t.isListenNetwork = !0;
});
null !== this.networkService.rootRoom && void 0 !== this.networkService.rootRoom ? this.goRoom() : this.networkService.getListGames();
this.lobbyNode.width = cc.winSize.width - this.eventNode.width - 50;
window.$Global.CONFIG.SYSTEM_MESSAGE && this.eventNode.getComponent("EventPanel").initEvent(window.$Global.CONFIG.SYSTEM_MESSAGE, !0);
}
},
onDestroy: function() {
this.isListenNetwork && this.offNetwork();
},
showGameList: function() {
this.networkService.leaveLobby(this.networkService.zoneId);
this.initLobby(this.networkService.lobbys);
this.background.spriteFrame = this.listBG[0];
this.roomGroup.active = !1;
this.lobbyGroup.active = !0;
this.isShowGameList = !0;
this.isShowListRoom = !1;
},
offNetwork: function() {
cc.log("PanelGameList", "Off network");
this.networkService.off("" + i.REQUEST_TYPE.SUBSCRIBE_GAME);
this.networkService.off("" + i.REQUEST_TYPE.LIST_LOBBIES);
this.networkService.off("" + i.REQUEST_TYPE.JOIN_LOBBY);
this.networkService.off("" + i.REQUEST_TYPE.SUBSCRIBE_LOBBY);
this.networkService.off("" + i.REQUEST_TYPE.GET_ROOMS);
this.networkService.off("" + i.REQUEST_TYPE.JOIN_ROOM);
this.networkService.off("" + i.REQUEST_TYPE.LEAVE_LOBBY);
this.networkService.off("" + i.REQUEST_TYPE.UNSUBSCRIBE_LOBBY);
this.networkService.off("notify_" + i.NOTIFY_TYPE.ACTIONS_IN_LOBBY);
this.networkService.off("notify_" + i.NOTIFY_TYPE.NOTIFY_MINI_CHANGED);
this.isListenNetwork = !1;
},
onClickLobby: function(t) {
this.currentLobby = t;
this.zoneId = t.id;
this.networkService.zoneId = this.zoneId;
this.networkService.subcribeGameSlot();
},
onClickMinigame: function(t) {},
onClick_MucCuoc: function(t, e) {
this.networkService.zoneId = this.zoneId;
this.networkService.data.betAmount = e;
this.networkService.joinRoom(e);
},
onListLobby: function(t) {
var e = t.lobbies;
this.networkService.lobbys = e;
this.initLobby(e);
},
initLobby: function(t) {
var e = this;
t.forEach(function(t) {
for (var n = 0; n < e.availableGames.length; n++) if (t.name == e.availableGames[n] && void 0 === e.zoneId) {
e.listLobbyGames[n].node.on(cc.Node.EventType.TOUCH_END, function(n) {
e.onClickLobby(t);
});
e.listLobbyGames[n].setZoneId(t.id);
}
});
this.networkService.getFundSlot(this.listZoneToGetJackpot).then(function(t) {
if (t.resultCode === i.ResponseResultCode.SUCCESS) for (var n = 0; n < e.listLobbyGames.length; n++) for (var o = 0; o < t.funds.length; o++) e.listLobbyGames[n].getZoneId() === t.funds[o].zoneId && e.listLobbyGames[n].setJackpot(t.funds[o]);
});
},
onSubcribedGame: function(t) {
this.zoneName = this.currentLobby.name;
this.networkService.zoneName = this.zoneName;
this.networkService.joinLobby(this.zoneId);
},
onJoinedLobby: function(t) {
this.zoneId && this.networkService.subcribeLobby(this.zoneId);
},
onSubcribedLobby: function(t) {
var e = t;
if (e.resultCode === i.ResponseResultCode.SUCCESS) {
this.networkService.rootRoom = e;
this.networkService.zoneName.includes("SLOT");
this.networkService.getRooms();
} else window.$UIHelper.showToast("Có lỗi xảy ra (" + e.resultCode + ")");
},
onGetRooms: function(t) {
this.initSlotRooms(t.rooms);
},
onJoinRoom: function(t) {
var e = t;
if (e.resultCode === i.ResponseResultCode.SUCCESS) {
this.networkService.currentRoom = e.room;
this.isShowGameList = !1;
this.isShowListRoom = !1;
window.$UIHelper.showLoading(!0);
cc.director.loadScene(this.zoneToScene[this.networkService.zoneId], function() {
window.$UIHelper.showLoading(!1);
});
} else window.$UIHelper.showToast("Có lỗi xảy ra (" + e.resultCode + ")");
},
onLobbyActions: function(t) {
var e = t;
if (this.isShowGameList) {
for (var n = 0; n < this.listLobbyGames.length; n++) if (this.listLobbyGames[n].getZoneId() == e.zoneId) {
this.listLobbyGames[n].setJackpot(e);
break;
}
} else this.isShowListRoom && this.listSlotRoom.forEach(function(t) {
t.getComponent("SlotRoomItem").getRoomId() == e.roomId && t.getComponent("SlotRoomItem").setJackpot(e);
});
},
onNotifyMiniChanged: function(t) {
for (var e = t, n = 0; n < this.listMinigames.length; n++) if (this.listMinigames[n].zoneId == e.zoneId) {
this.listMinigames[n].setMultipleFund(e.multipleFund);
break;
}
},
initSlotRooms: function(t) {
var e = this;
this.slotGroup.removeAllChildren();
this.listSlotRoom.slice(this.listSlotRoom.length);
var n = this.networkService.zoneId;
this.isSetRoomBackground ? this.isSetRoomBackground = !1 : this.background.spriteFrame = n == i.ZONE_ID.SLOT_32 ? this.listBG[1] : n == i.ZONE_ID.SLOT_18 ? this.listBG[2] : n == i.ZONE_ID.SLOT_28 ? this.listBG[3] : this.listBG[0];
t.forEach(function(t) {
var n = void 0;
switch (t.id) {
case i.SLOT_ROOM_ID.SLOT_32_100:
n = cc.instantiate(e.listSlotRoomPrefab[0]);
break;

case i.SLOT_ROOM_ID.SLOT_32_1K:
n = cc.instantiate(e.listSlotRoomPrefab[1]);
break;

case i.SLOT_ROOM_ID.SLOT_32_10K:
n = cc.instantiate(e.listSlotRoomPrefab[2]);
break;

case i.SLOT_ROOM_ID.SLOT_18_100:
n = cc.instantiate(e.listSlotRoomPrefab[3]);
break;

case i.SLOT_ROOM_ID.SLOT_18_1K:
n = cc.instantiate(e.listSlotRoomPrefab[4]);
break;

case i.SLOT_ROOM_ID.SLOT_18_10K:
n = cc.instantiate(e.listSlotRoomPrefab[5]);
break;

case i.SLOT_ROOM_ID.SLOT_28_100:
n = cc.instantiate(e.listSlotRoomPrefab[6]);
break;

case i.SLOT_ROOM_ID.SLOT_28_1K:
n = cc.instantiate(e.listSlotRoomPrefab[7]);
break;

case i.SLOT_ROOM_ID.SLOT_28_10K:
n = cc.instantiate(e.listSlotRoomPrefab[8]);
}
n.getComponent("SlotRoomItem").setRoomData(t);
n.on(cc.Node.EventType.TOUCH_END, function(n) {
e.networkService.joinRoom(t.bet);
});
n.parent = e.slotGroup;
e.listSlotRoom.push(n);
});
this.lobbyGroup.active = !1;
this.roomGroup.active = !0;
this.isShowGameList = !1;
this.isShowListRoom = !0;
},
getSpriteById: function(t, e, n) {
for (var i = 0; i < e.length; i++) {
if (e[i].name == n + t) return i;
}
},
goRoom: function() {
if (this.networkService.zoneName.includes("SLOT")) {
this.networkService.getRooms();
this.networkService.subcribeLobby(this.networkService.zoneId);
}
},
onLeaveLobby: function(t) {
if (t.resultCode === i.ResponseResultCode.SUCCESS) {
this.networkService.unsubscribeLobby(this.networkService.zoneId);
this.networkService.rootRoom = null;
this.networkService.currentRoom = null;
} else window.$UIHelper.showToast(t.desc || "leave error");
},
onUnsubscribeLobby: function(t) {
t.resultCode !== i.ResponseResultCode.SUCCESS && window.$UIHelper.showToast(t.desc || "unsub lobby error");
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"./LobbyItem": "LobbyItem",
"./MinigameLobbyItem": "MinigameLobbyItem"
} ],
PanelMoney: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6549fhWzalLVajLHzojkMLm", "PanelMoney");
var i = t("../../Utils/Helper"), o = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./Dialog_TopUp"));
cc.Class({
extends: cc.Component,
properties: {
textMoney: {
default: null,
type: cc.Label
},
dialogTopUp: {
default: null,
type: o.default
}
},
setData: function(t) {
this.textMoney.string = (0, i.moneyFormat)(t, !1);
},
onClickAdd: function() {
this.dialogTopUp.show();
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper",
"./Dialog_TopUp": "Dialog_TopUp"
} ],
PanelNotificationMarquee: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "95fcb5PHjxGL75upB2uO8LL", "PanelNotificationMarquee");
var i = t("../../Utils/Constants");
cc.Class({
extends: cc.Component,
properties: {
textNotification: {
default: null,
type: cc.Label
},
speed: {
default: 1
},
interval: {
default: .2
},
totalLength: {
default: 80
}
},
onLoad: function() {
this.reset();
},
reset: function() {
this.lines = [];
this.currentIndex = 0;
this.currentLine = null;
this.percent = 0;
this.isShowIn = !0;
this.spaces = 0;
this.passedTime = 0;
},
start: function() {
if (void 0 !== window.$Global && void 0 !== window.$Global.networkService) {
window.$Global.networkService.on("notify_" + i.REQUEST_TYPE.ANOUNCEMENTS, this.getMessage.bind(this));
this.textNotification.string = "";
this.isListenNetwork = !0;
}
},
onDestroy: function() {
this.isListenNetwork && this.offNetwork();
},
offNetwork: function() {
window.$Global.networkService.off("notify_" + i.REQUEST_TYPE.ANOUNCEMENTS);
this.isListenNetwork = !1;
},
getMessage: function(t) {
this.addToQueue(t.content || t.message || "");
this.currentLine || this.nextLine();
},
setData: function(t) {
this.setText(t.content || t.message || "");
},
setText: function(t) {
this.textNotification.string = t;
},
addToQueue: function(t) {
this.lines.push(t);
},
nextLine: function() {
this.textNotification.node.x = 1.5 * cc.winSize.width;
if (this.lines.length > 0) {
this.currentLine = this.lines.pop();
this.textNotification.string = this.currentLine;
}
},
update: function(t) {
this.currentLine && (this.textNotification.node.x > -cc.winSize.width ? this.textNotification.node.x -= .2 * this.speed : this.nextLine());
this.passedTime = 0;
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants"
} ],
PanelPlayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "eb0480jUtlAPqoLPzoGf/dP", "PanelPlayer");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./PanelMoney"));
cc.Class({
extends: cc.Component,
properties: {
textPlayerName: {
default: null,
type: cc.Label
},
textPlayerID: {
default: null,
type: cc.Label
},
imageAvatar: {
default: null,
type: cc.Sprite
},
panelMoney: {
default: null,
type: i.default
}
},
start: function() {
void 0 !== window.$Global && void 0 !== window.$Global.networkService && window.$Global.userService.on("userInfoFetched", this.refreshData.bind(this));
},
onDestroy: function() {
window.$Global.userService.off("userInfoFetched");
},
setData: function(t) {
var e = t.displayName;
this.textPlayerName.string = e.length > 20 ? e.substring(0, 16) + "..." : e;
this.textPlayerID.string = t.id;
},
refreshData: function(t) {
this.setData(t);
this.panelMoney.setData(t.gold);
},
setGold: function(t) {
this.panelMoney.setData(t);
}
});
cc._RF.pop();
}, {
"./PanelMoney": "PanelMoney"
} ],
PanelProfileInfo: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "15d32T28mlChrc5/bIKYNm0", "PanelProfileInfo");
var i = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
textId: {
default: null,
type: cc.Label
},
textName: {
default: null,
type: cc.Label
},
textMobile: {
default: null,
type: cc.Label
},
textGold: {
default: null,
type: cc.Label
}
},
start: function() {
void 0 !== window.$Global && window.$Global.networkService;
},
setData: function(t) {
this.textId.string = t.id;
this.textName.string = t.displayName || "";
this.textMobile.string = t.mobile || "";
this.textGold.string = (0, i.moneyFormat)(t.gold, !0);
},
onClickGoi: function() {
null != this.agencyMobile && void 0 != this.agencyMobile && cc.sys.openURL("tel://" + this.agencyMobile);
},
onClickChuyenBO: function() {
this.dialog.onClickChuyenBO();
},
onClickLichSu: function() {
this.dialog.onClickLichSuBO();
},
onClickDoiMatKhau: function() {
this.dialog.onClickChangePassword();
},
onClickCapNhat: function() {
this.dialog.onClickProfileUpdate();
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper"
} ],
PanelProfileSecurity: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e998bQdIs5B5LYf3i0TySxd", "PanelProfileSecurity");
cc.Class({
extends: cc.Component,
properties: {
check2FA: {
default: null,
type: cc.Toggle
}
},
setData: function(t) {
this.check2FA.isChecked = 1 == t;
},
onToggleChanged: function() {
var t = this;
window.$Global.userService.toggleSecurity(this.check2FA.isChecked ? 1 : 0).then(function(e) {
var n = e.resultCode, i = e.status;
if (0 === n) window.$UIHelper.showToast(0 === i ? "Huỷ bảo mật đăng nhập thành công" : "Bảo mật đăng nhập thành công"); else {
window.$UIHelper.showToast("Error");
t.check2FA.isChecked = !t.check2FA.isChecked;
}
});
}
});
cc._RF.pop();
}, {} ],
PanelTransfer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "59c0deCdwRMfbBjKl4D5wgR", "PanelTransfer");
var i = t("../../Utils/Constants"), o = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
textID: {
default: null,
type: cc.EditBox
},
textGold: {
default: null,
type: cc.EditBox
},
textTransferGold: {
default: null,
type: cc.Label
},
textReason: {
default: null,
type: cc.EditBox
},
textOTP: {
default: null,
type: cc.EditBox
},
textUserSearchResult: {
default: null,
type: cc.Label
},
textRule: {
default: null,
type: cc.RichText
},
providerNode: {
default: null,
type: cc.Node
},
providerName: {
default: null,
type: cc.Label
}
},
refreshData: function() {
this.resetData();
},
resetData: function() {
var t = this;
this.textID.string = "";
this.textUserSearchResult.string = "";
this.textOTP.string = "";
this.textGold.string = "";
this.textTransferGold.string = "Thực nhận";
this.textReason.string = "";
this.providerNode.active = !1;
this.userData = window.$Global.userService.userInfo;
window.$Global.userService.getUserInfo().then(function(e) {
t.userData = e.user;
});
},
setData: function(t) {
this.configTransferGold = t.data;
this.configTransferGold.fee = Math.round(100 * (1 - this.configTransferGold.rate));
var e = "QUY ĐỊNH CHUYỂN " + i.CONFIG_GOLD.goldName.toUpperCase() + ":\n- Giá trị giao dịch tối thiểu " + (0, 
o.moneyFormat)(this.configTransferGold.min) + " " + i.CONFIG_GOLD.goldName + ".\n- Phí giao dịch " + this.configTransferGold.fee + "% giá trị chuyển khoản.\n- Không giới hạn giá trị tối đa và số lần giao dịch trong ngày.\n<color=#00ff00>CHÚ Ý:\n- ID nhận là ID của tài khoản được nhận.\n- Các giao dịch chuyển nhầm tài khoản được tính hợp lệ và không được hoàn trả.</color>";
this.textRule.string = e;
},
onTextIDChanged: function() {
this.textUserSearchResult.string = "";
this.providerNode.active = !1;
},
onClickSearchUser: function() {
var t = this, e = this.textID.string;
e ? window.$Global.userService.getUserInfo(e).then(function(e) {
t.setTransferUserInfo(e);
}) : window.$UIHelper.showToast("Hãy nhập Id để tìm kiếm");
},
onGoldChanged: function(t) {
if (this.textGold.string) {
var e = parseInt(this.textGold.string);
if (e > this.userData.gold) {
e = this.userData.gold;
this.textGold.string = e;
}
this.amountReceive = Math.floor(e * this.configTransferGold.rate);
this.textTransferGold.string = "Nhận " + (0, o.moneyFormat)(this.amountReceive) + " " + i.CONFIG_GOLD.goldName;
} else this.textTransferGold.string = "Thực nhận";
},
onClickTransfer: function() {
var t = this;
if (this.configTransferGold) {
var e = this.textID.string, n = this.textOTP.string, r = (0, o.moneyToInt)(this.textGold.string), a = this.textReason.string, s = r * this.configTransferGold.rate, c = !0;
if (e && n && r) {
if (r > this.userData.gold) {
window.$UIHelper.showToast("Bạn không đủ " + (0, o.moneyFormat)(r) + " " + i.CONFIG_GOLD.goldName);
c = !1;
} else if (r < this.configTransferGold.min) {
window.$UIHelper.showToast("Chuyển tối thiểu " + (0, o.moneyFormat)(this.configTransferGold.min) + " " + i.CONFIG_GOLD.goldName);
c = !1;
}
} else {
window.$UIHelper.showToast("Vui lòng nhập đầy đủ thông tin!");
c = !1;
}
c && window.$UIHelper.showPopup("Bạn có muốn chuyển " + (0, o.moneyFormat)(r) + " " + i.CONFIG_GOLD.goldName + "\n cho tài khoản có ID là " + e + " với giá " + (0, 
o.moneyFormat)(s) + " " + i.CONFIG_GOLD.goldName + "?", function() {
t.transferGold(r, e, a, n);
});
} else this.getConfig();
},
transferGold: function(t, e, n, o) {
var r = this;
window.$Global.userService.transferGold(t, e, n, o).then(function(t) {
var e = window.$Global.userService.userInfo;
n = t == i.TransferGoldResultCode.SUCCESS ? "Chuyển " + i.CONFIG_GOLD.goldName + " thành công. Bạn hiện có " + e.gold + " " + i.CONFIG_GOLD.goldName : t == i.TransferGoldResultCode.TRANSFER_IN_PLAY_MOD ? "Không thể giao dịch " + i.CONFIG_GOLD.goldName + " trong bàn chơi." : t == i.TransferGoldResultCode.TRANSFER_SMALLER_MIN_VALUE ? "Số " + i.CONFIG_GOLD.goldName + " giao dịch nhỏ hơn quy định. " : t == i.TransferGoldResultCode.TRANSFER_OVER_MAX_VALUE ? "Số " + i.CONFIG_GOLD.goldName + " giao dịch lớn hơn quy định." : t == i.TransferGoldResultCode.INVALID_REG_USERNAME ? "Không tìm thấy người chơi." : t == i.TransferGoldResultCode.INVALID_PASSWORD ? "OTP không đúng." : t == i.TransferGoldResultCode.TRANSFER_NOT_OWN_AGENCY ? "Bạn chỉ được chuyển tiền cho Đ/L của mình." : t == i.TransferGoldResultCode.TRANSFER_NOT_OWN_PLAYER ? "Bạn chỉ được chuyển tiền cho người chơi của mình." : "Giao dịch " + i.CONFIG_GOLD.goldName + " thất bại. Vui lòng thử lại.";
window.$UIHelper.showToast(n);
r.resetData();
});
},
onClickOTP: function() {
var t = this.textID.string, e = (0, o.moneyToInt)(this.textGold.string), n = this.textReason.string;
t && n && e ? window.$Global.userService.getOTP().then(function(t) {
window.$UIHelper.showPopup(t.desc || "", function() {}, !1);
}) : window.$UIHelper.showToast("Vui lòng nhập đầy đủ thông tin!");
},
setTransferUserInfo: function(t) {
if (t.desc) {
window.$UIHelper.showToast("Không tồn tại Id");
this.providerNode.active = !1;
} else {
var e = t.user, n = e.displayName;
this.textID.string = e.id;
this.textUserSearchResult.string = n.length > 15 ? n.substring(0, 15) + "..." : n;
var i = e.providerCode;
if ("admin" === i) {
this.providerName.string = "admin";
this.providerNode.active = !0;
} else if ("agency_level_1" === i) {
this.providerName.string = "Uy tín";
this.providerNode.active = !0;
} else if ("agency_level_2" === i) {
this.providerName.string = "Uy tín";
this.providerNode.active = !0;
} else this.providerNode.active = !1;
}
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper"
} ],
PanelViExchange: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9c2a7MoNIxLPJUzWz2nV0x6", "PanelViExchange");
var i = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
koinButtons: {
default: [],
type: cc.Node
},
textSoCoin: {
default: null,
type: cc.EditBox
},
text2fa: {
default: null,
type: cc.EditBox
}
},
setData: function(t) {},
onClickDoi: function() {
var t = this.text2fa.string, e = (0, i.moneyToInt)(this.textSoCoin.string), n = !0;
if (!t || !e) {
this.panelNotification.setText("Vui lòng nhập đầy đủ thông tin!");
n = !1;
}
n && window.$Global.userService.koinToGold("", e, t).then(function(t) {});
},
onClickXoa: function() {}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper"
} ],
PanelViHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d9d5dnM6qNPHL4feit268W3", "PanelViHistory");
cc.Class({
extends: cc.Component,
properties: {
listHistory: {
default: null,
type: cc.Node
},
historyItem: {
default: null,
type: cc.Prefab
},
textPage: {
default: null,
type: cc.Label
}
},
start: function() {
this.page = 0;
this.maxPage = 10;
},
setData: function(t) {},
refreshData: function() {
var t = this;
window.$Global.userService.getUserGoldHistory(this.page || 0).then(function(e) {
e.length < 10 && (t.maxPage = t.page);
t.listLichSu.setData(e);
});
},
onClickNextPage: function() {
if (this.page < this.maxPage) {
this.page = this.page + 1;
this.textPage.string = this.page;
this.refreshData();
}
},
onClickPreviousPage: function() {
if (this.page > 1) {
this.page = this.page - 1;
this.textPage.string = this.page;
this.refreshData();
}
}
});
cc._RF.pop();
}, {} ],
PanelViRecharge: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0378eSBmxlC9YMtJUUICwGe", "PanelViRecharge");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BasePanelNotification")), o = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
textSoBo: {
default: null,
type: cc.EditBox
},
text2fa: {
default: null,
type: cc.EditBox
},
panelNotification: {
default: null,
type: i.default
}
},
setData: function(t) {},
refreshData: function() {},
onClickXoa: function() {},
onClickDoi: function() {
var t = this.text2fa.string, e = (0, o.moneyToInt)(this.textSoBo.string), n = !0;
if (!t || !e) {
this.panelNotification.setText("Vui lòng nhập đầy đủ thông tin!");
n = !1;
}
n && window.$Global.userService.exchangeGold(e, t).then(function(t) {});
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper",
"../Common/BasePanelNotification": "BasePanelNotification"
} ],
PanelVipPoint: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "026b5dZygdBNIDiZRv8cHgC", "PanelVipPoint");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ],
PlayedHistoryItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "70d1cboVy1EMpCeBvrtVnHx", "PlayedHistoryItem");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i, o, r, a, s, c, l, u, f, h, d, p, g, y, m = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}(), v = t("../Utils/Helper");
function _(t, e, n, i) {
n && Object.defineProperty(t, e, {
enumerable: n.enumerable,
configurable: n.configurable,
writable: n.writable,
value: n.initializer ? n.initializer.call(i) : void 0
});
}
function b(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function w(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function S(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function C(t, e, n, i, o) {
var r = {};
Object.keys(i).forEach(function(t) {
r[t] = i[t];
});
r.enumerable = !!r.enumerable;
r.configurable = !!r.configurable;
("value" in r || r.initializer) && (r.writable = !0);
r = n.slice().reverse().reduce(function(n, i) {
return i(t, e, n) || n;
}, r);
if (o && void 0 !== r.initializer) {
r.value = r.initializer ? r.initializer.call(o) : void 0;
r.initializer = void 0;
}
if (void 0 === r.initializer) {
Object.defineProperty(t, e, r);
r = null;
}
return r;
}
var T = cc._decorator, E = T.ccclass, I = T.property, k = (i = I(cc.Node), o = I(cc.Label), 
r = I(cc.Label), a = I(cc.Label), s = I(cc.Label), c = I(cc.Label), E(l = (u = function(t) {
S(e, cc.Component);
function e() {
var t, n, i, o;
b(this, e);
for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
return o = (n = i = w(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
_(i, "backgroundNode", f, i), _(i, "idLabel", h, i), _(i, "timeLabel", d, i), _(i, "betLabel", p, i), 
_(i, "userBetLabel", g, i), _(i, "winLabel", y, i), n), w(i, o);
}
m(e, [ {
key: "setIDLabel",
value: function(t) {
this.idLabel.string = "" + t;
}
}, {
key: "setTimeLabel",
value: function(t) {
this.timeLabel.string = t;
}
}, {
key: "setBetLabel",
value: function(t) {
this.betLabel.string = (0, v.numberWithCommas)(t);
}
}, {
key: "setUserBetLabel",
value: function(t) {
this.userBetLabel.string = (0, v.numberWithCommas)(t);
}
}, {
key: "setWinLabel",
value: function(t) {
this.winLabel.string = (0, v.numberWithCommas)(t);
}
}, {
key: "setBackGroundColor",
value: function(t) {
var e = cc.Color.BLACK;
this.backgroundNode.color = e.toHEX(t);
}
}, {
key: "setGrayBackground",
value: function() {
this.setBackGroundColor("#999999");
}
}, {
key: "setLightGrayBackground",
value: function() {
this.setBackGroundColor("#666666");
}
} ]);
return e;
}(), f = C(u.prototype, "backgroundNode", [ i ], {
enumerable: !0,
initializer: function() {
return null;
}
}), h = C(u.prototype, "idLabel", [ o ], {
enumerable: !0,
initializer: function() {
return null;
}
}), d = C(u.prototype, "timeLabel", [ r ], {
enumerable: !0,
initializer: function() {
return null;
}
}), p = C(u.prototype, "betLabel", [ a ], {
enumerable: !0,
initializer: function() {
return null;
}
}), g = C(u.prototype, "userBetLabel", [ s ], {
enumerable: !0,
initializer: function() {
return null;
}
}), y = C(u.prototype, "winLabel", [ c ], {
enumerable: !0,
initializer: function() {
return null;
}
}), u)) || l);
n.default = k;
e.exports = n.default;
cc._RF.pop();
}, {
"../Utils/Helper": "Helper"
} ],
PlayerDataManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "409f08E+ARPaJ0bSm7cGTyL", "PlayerDataManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}(), o = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./LocalDataManager.js"));
function r(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
var a = function() {
function t() {
r(this, t);
}
i(t, null, [ {
key: "getAudio",
value: function() {
return o.default.getBoolForKey("AUDIO_KEY", !0);
}
}, {
key: "setAudio",
value: function(t) {
o.default.setBoolForKey("AUDIO_KEY", t);
}
}, {
key: "getPlayedTimes",
value: function() {
return o.default.getIntForKey("PLAYED_TIMES_KEY_", 0);
}
}, {
key: "setPlayedTimes",
value: function(t) {
o.default.setIntForKey("PLAYED_TIMES_KEY_", t);
}
}, {
key: "addOnePlayedTime",
value: function() {
this.setPlayedTimes(1 + this.getPlayedTimes());
}
} ]);
return t;
}();
n.default = a;
e.exports = n.default;
cc._RF.pop();
}, {
"./LocalDataManager.js": "LocalDataManager"
} ],
PopupMessage: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b2ca2XgyVpNx6Y06HgEdiw6", "PopupMessage");
cc.Class({
extends: cc.Component,
properties: {
popup: {
default: null,
type: cc.Node
},
content: {
default: null,
type: cc.Label
},
btnOK: {
default: null,
type: cc.Button
},
btnCancel: {
default: null,
type: cc.Button
}
},
hide: function() {
this.btnOK.node.off(cc.Node.EventType.TOUCH_END);
this.popup.active = !1;
},
show: function(t, e, n, i) {
var o = this;
this.content.string = t;
this.btnCancel.node.active = n;
this.btnOK.node.on(cc.Node.EventType.TOUCH_END, function(t) {
o.node.runAction(cc.sequence(cc.callFunc(e), cc.delayTime(.5), cc.callFunc(function() {
i && o.hide();
})));
});
this.popup.active = !0;
}
});
cc._RF.pop();
}, {} ],
RefUserItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2635f9h8t1N74FQ/qyKsGr6", "RefUserItem");
cc.Class({
extends: cc.Component,
properties: {
textSTT: {
default: null,
type: cc.Label
},
textID: {
default: null,
type: cc.Label
},
textDisplayName: {
default: null,
type: cc.Label
},
textGold: {
default: null,
type: cc.Label
},
textMobile: {
default: null,
type: cc.Label
},
btnCall: {
default: null,
type: cc.Button
}
},
setData: function(t, e) {
this.textSTT.string = t;
this.textID.string = e.id;
this.textDisplayName.string = e.displayName;
this.textMobile.string = e.mobile;
this.textGold.string = e.gold;
this.btnCall.node.on(cc.Node.EventType.TOUCH_END, function(t) {
cc.sys.openURL("tel://" + e.mobile);
});
}
});
cc._RF.pop();
}, {} ],
SlotController: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "315ff3G4sdJTpPQ6OT54hxj", "SlotController");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i, o, r, a, s, c, l, u, f, h, d, p, g, y, m, v, _, b, w, S, C, T, E, I, k, N, R, O, P, L, A, U, D, B, x = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}(), M = t("lodash"), G = W(t("./BetTableController")), F = W(t("./SlotGameUIManager")), H = t("../Utils/Constants"), Y = W(t("./SlotDialog")), j = W(t("./JackpotEffect")), $ = W(t("./BigWinEffect")), V = W(t("./AudioController")), z = W(t("../Scene/GameList/MultipleFund"));
function W(t) {
return t && t.__esModule ? t : {
default: t
};
}
function X(t, e, n, i) {
n && Object.defineProperty(t, e, {
enumerable: n.enumerable,
configurable: n.configurable,
writable: n.writable,
value: n.initializer ? n.initializer.call(i) : void 0
});
}
function J(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Q(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function K(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function Z(t, e, n, i, o) {
var r = {};
Object.keys(i).forEach(function(t) {
r[t] = i[t];
});
r.enumerable = !!r.enumerable;
r.configurable = !!r.configurable;
("value" in r || r.initializer) && (r.writable = !0);
r = n.slice().reverse().reduce(function(n, i) {
return i(t, e, n) || n;
}, r);
if (o && void 0 !== r.initializer) {
r.value = r.initializer ? r.initializer.call(o) : void 0;
r.initializer = void 0;
}
if (void 0 === r.initializer) {
Object.defineProperty(t, e, r);
r = null;
}
return r;
}
var q = cc._decorator, tt = q.ccclass, et = q.property, nt = (i = et(Array(cc.Node)), 
o = et(Array(cc.SpriteFrame)), r = et(Array(cc.Prefab)), a = et(cc.Prefab), s = et(F.default), 
c = et(Y.default), l = et(j.default), u = et($.default), f = et(Array(cc.Node)), 
h = et(cc.Toggle), d = et(V.default), p = et(cc.Node), g = et(cc.Toggle), y = et(cc.Toggle), 
m = et(cc.Button), v = et(z.default), tt(_ = (b = function(t) {
K(e, cc.Component);
function e() {
var t, n, i, o;
J(this, e);
for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
return o = (n = i = Q(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
X(i, "listColumns", w, i), X(i, "listItemIcons", S, i), X(i, "listItemPrefab", C, i), 
X(i, "ItemRandomPrefab", T, i), X(i, "uiManager", E, i), i.networkService = null, 
X(i, "tableDialog", I, i), X(i, "jackpotEffect", k, i), X(i, "bigWinEffect", N, i), 
X(i, "listBetTableIcons", R, i), X(i, "toggleAuto", O, i), X(i, "audioController", P, i), 
X(i, "dialogSetting", L, i), X(i, "toggleSound", A, i), X(i, "toggleBgSound", U, i), 
X(i, "btnSpin", D, i), X(i, "multipleFund", B, i), i.initY = -150, i.slotsResult = [], 
i.oldsResult = [], i.selectedBetLines = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ], 
i.deal = H.DEAL_TYPE.FREE_TRY, i.isAutoSpin = !1, i.isSpinning = !1, i.betValue = 100, 
i.listSlotShow = [], i.itemCount = 7, i.countPerItem = 10, i.slotItemPool = [], 
n), Q(i, o);
}
x(e, [ {
key: "onLoad",
value: function() {
this.genRandomSlotIcons();
window.$UIHelper.showLoading(!0);
for (var t = 0; t < this.itemCount; t++) {
this.slotItemPool[t] = new cc.NodePool();
for (var e = 0; e < this.countPerItem; e++) {
var n = cc.instantiate(this.listItemPrefab[t]);
this.slotItemPool[t].put(n);
e === this.countPerItem - 1 && t === this.itemCount - 1 && window.$UIHelper.showLoading(!1);
}
}
}
}, {
key: "start",
value: function() {
var t = this;
this.betTable = this.uiManager.node.getComponent(G.default);
this.betTable.chooseList(this.selectedBetLines);
this.uiManager.showListSelectedLines(this.selectedBetLines);
this.setupBetTableIcons();
this.networkService = window.$Global.networkService;
this.betValue = this.networkService.currentRoom.bet;
this.updateBetsValue();
this.uiManager.setTotalCoin(this.networkService.userInfo.gold);
this.uiManager.updateJackpot(this.networkService.currentRoom.funds);
this.networkService.node.on("" + H.REQUEST_TYPE.UPDATE_PEERS, this.onHadUpdatePeerData.bind(this));
this.networkService.node.on("" + H.REQUEST_TYPE.LEAVE_ROOM, this.onLeaveRoom.bind(this));
this.networkService.node.on("notify_" + H.NOTIFY_TYPE.ROOM_STATE_CHANGED, this.onRoomStateChanged.bind(this));
this.networkService.node.on("updateMoney", function(e) {
var n = e;
t.uiManager.setTotalCoin(n);
});
this.audioController.playBackground();
}
}, {
key: "onDestroy",
value: function() {
this.networkService.node.off("" + H.REQUEST_TYPE.UPDATE_PEERS);
this.networkService.node.off("" + H.REQUEST_TYPE.LEAVE_ROOM);
this.networkService.node.off("notify_" + H.NOTIFY_TYPE.ROOM_STATE_CHANGED);
this.networkService.node.off("updateMoney");
this.slotItemPool.forEach(function(t) {
t.clear();
});
}
}, {
key: "updateBetsValue",
value: function() {
this.uiManager.setBetValue(this.betValue);
this.uiManager.setBetLines(this.selectedBetLines.length);
this.uiManager.setTotalBet(this.selectedBetLines.length * this.betValue);
}
}, {
key: "genRandomSlotIcons",
value: function() {
for (var t = 0; t < 5; t++) for (var e = this.listColumns[t], n = 0; n < 25; n++) {
var i = (0, M.random)(0, this.listItemIcons.length - 1, !1), o = cc.instantiate(this.listItemPrefab[i]);
o.y = 150 * n;
e.addChild(o);
}
}
}, {
key: "finishRoll",
value: function() {
this.oldsResult = this.slotsResult;
var t = this.payLines.map(function(t) {
return t.line;
});
this.uiManager.blinkWinLines(t, this.onBlinkDone.bind(this));
}
}, {
key: "onBlinkDone",
value: function() {
var t = this;
this.isSpinning = !1;
this.networkService.updateMoneyWithZoneId(this.networkService.zoneId);
if (this.isWinJackpot) {
this.jackpotEffect.show(this.winChips);
this.stopAuto();
this.audioController.playJackpot();
} else if (this.winChips >= 80 * this.betValue) {
this.bigWinEffect.show(this.winChips);
this.audioController.playResult();
setTimeout(function() {
t.onShowWinEffectDone();
}, 3e3);
} else if (this.winChips > 0) {
this.uiManager.showWinValue(this.winChips, this.onShowWinEffectDone.bind(this));
this.audioController.playResult();
} else this.onShowWinEffectDone();
this.uiManager.setWinValue(this.winChips);
this.showWinSlotsEffect();
this.isAutoSpin || (this.btnSpin.interactable = !0);
}
}, {
key: "showWinSlotsEffect",
value: function() {
var t = [];
this.payLines.forEach(function(e) {
e.matched.forEach(function(e) {
t.indexOf(e) < 0 && t.push(e);
});
});
for (var e = 0; e < t.length; e++) {
var n = t[e], i = this.listSlotShow[n];
i && i.getComponent("SlotItem").showAnimation();
}
}
}, {
key: "onShowWinEffectDone",
value: function() {
this.isAutoSpin && this.spin();
}
}, {
key: "roll",
value: function() {
this.audioController.playSpin();
for (var t = 0; t < 5; t++) {
var e = cc.delayTime(.1 * t), n = this.listColumns[t];
4 === t ? n.runAction(cc.sequence(e, cc.moveBy(.1, 0, 20), cc.moveBy(1, 0, -3320), cc.callFunc(this.finishRoll, this))) : n.runAction(cc.sequence(e, cc.moveBy(.1, 0, 20), cc.moveBy(1, 0, -3320)));
}
}
}, {
key: "resetPositions",
value: function() {
for (var t = 0; t < 5; t++) {
this.listColumns[t].y = this.initY;
}
}
}, {
key: "setupResult",
value: function() {
if (0 !== this.slotsResult.length) for (var t = 0; t < 5; t++) {
for (var e = this.listColumns[t], n = e.childrenCount, i = [], o = 0; o < 3; o++) {
var r = this.slotsResult[o][t] - 1, a = e.children[n - o - 1], s = a.y;
if (this.oldsResult.length > 0) {
var c = this.oldsResult[o][t] - 1;
this.slotItemPool[c].put(a);
} else {
e.removeChild(a);
a.destroy();
}
var l = this.slotItemPool[r].get();
null == l && (l = cc.instantiate(this.listItemPrefab[r]));
l.y = s;
i.push(l);
this.listSlotShow[5 * o + t] = l;
}
for (var u = i.length - 1; u >= 0; u--) {
var f = i[u];
e.addChild(f);
}
}
}
}, {
key: "_setupResult",
value: function() {
if (0 !== this.slotsResult.length) for (var t = 0; t < 5; t++) {
for (var e = this.listColumns[t], n = e.childrenCount, i = [], o = 0; o < 3; o++) {
var r = this.slotsResult[o][t] - 1, a = e.children[n - o - 1], s = a.y;
e.removeChild(a);
var c = cc.instantiate(this.listItemPrefab[r]);
c.y = s;
i.push(c);
this.listSlotShow[5 * o + t] = c;
}
for (var l = i.length - 1; l >= 0; l--) {
var u = i[l];
e.addChild(u);
}
}
}
}, {
key: "setOldResult",
value: function() {
if (0 !== this.oldsResult.length) for (var t = 0; t < 3; t++) for (var e = 0; e < 5; e++) {
var n = this.oldsResult[t][e] - 1, i = 2 - t;
this.listColumns[e].children[i].getComponent(cc.Sprite).spriteFrame = this.listItemIcons[n];
}
}
}, {
key: "_setOldResult",
value: function() {
if (0 !== this.oldsResult.length) for (var t = 0; t < 3; t++) for (var e = 0; e < 5; e++) {
var n = 2 - t, i = this.listColumns[e], o = i.children[n], r = i.children[n + 25 - 3], a = r.y;
r.y = o.y;
o.y = a;
r.setSiblingIndex(n);
o.setSiblingIndex(n + 25 - 3);
}
}
}, {
key: "spin",
value: function() {
if (this.selectedBetLines.length) if (this.isSpinning) window.$UIHelper.showToast("Quay quá nhanh"); else {
this.listSlotShow.forEach(function(t) {
t.getComponent("SlotItem").hideAnimation();
});
this.listSlotShow = [];
this.isSpinning = !0;
this.btnSpin.interactable = !1;
this.networkService.spin(this.deal, this.selectedBetLines);
this.jackpotEffect.hide();
this.bigWinEffect.hide();
}
}
}, {
key: "onClickChan",
value: function() {
this.betTable.chooseEven();
this.selectedBetLines = [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
this.updateBetsValue();
}
}, {
key: "onClickLe",
value: function() {
this.betTable.chooseOdd();
this.selectedBetLines = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ];
this.updateBetsValue();
}
}, {
key: "onClickTatCa",
value: function() {
this.betTable.chooseAll();
this.selectedBetLines = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
this.updateBetsValue();
}
}, {
key: "onClickHuy",
value: function() {
this.betTable.chooseNone();
this.selectedBetLines = [];
this.updateBetsValue();
}
}, {
key: "onClickBet",
value: function(t, e) {
var n = parseInt(e), i = this.selectedBetLines.indexOf(n), o = -1 != i;
o ? this.selectedBetLines.splice(i, 1) : this.selectedBetLines.push(n);
this.betTable.chooseOne(o, n - 1);
this.uiManager.showListSelectedLines(this.selectedBetLines);
this.updateBetsValue();
}
}, {
key: "showBetDialog",
value: function() {
this.isAutoSpin && this.stopAuto();
this.tableDialog.show(1);
this.betTable.chooseList(this.selectedBetLines);
}
}, {
key: "onHadUpdatePeerData",
value: function(t) {
var e = t;
if (e.resultCode === H.ResponseResultCode.SUCCESS) e.type === H.REQUEST_TYPE.GET_JACKPOT_HISTORY ? this.onHaveBXHHu(e.slotHistory) : e.type === H.REQUEST_TYPE.GET_USER_HISTORY ? this.onHaveHistory(e.slotHistory) : e.type === H.REQUEST_TYPE.START_MATCH && this.onHaveSpinResult(e); else {
window.$UIHelper.showToast(e.desc || e.content || "");
this.isSpinning = !1;
this.btnSpin.interactable = !0;
}
}
}, {
key: "onHaveSpinResult",
value: function(t) {
this.resetPositions();
this._setOldResult();
this.slotsResult = t.result.slots.faces;
this.payLines = t.result.payLines;
this.winChips = t.result.winChips;
this.freeSpins = t.result.freeSpins;
this.isWinJackpot = t.result.isWinJackpot;
this.jackpotNum = t.result.jackpotNum;
this.chips = t.chips;
this.isWinJackpot = t.result.isWinJackpot;
this._setupResult();
this.scheduleOnce(function() {
this.roll();
}, .01);
}
}, {
key: "onHaveBXHHu",
value: function(t) {
this.uiManager.showBXHHu(t);
}
}, {
key: "onHaveHistory",
value: function(t) {
this.uiManager.showHistory(t);
}
}, {
key: "onClickGameMode",
value: function() {
this.deal === H.DEAL_TYPE.FREE_TRY ? this.deal = H.DEAL_TYPE.REAL_SPIN : this.deal = H.DEAL_TYPE.FREE_TRY;
}
}, {
key: "onClickBXHHu",
value: function() {
this.networkService.getBXHHu();
this.tableDialog.show(2);
}
}, {
key: "onClickHelp",
value: function() {
this.tableDialog.show(0);
}
}, {
key: "onClickHistory",
value: function() {
this.networkService.getHistory();
this.tableDialog.show(3);
}
}, {
key: "onClickBack",
value: function() {
this.isSpinning ? window.$UIHelper.showToast("Đang quay") : this.networkService.leaveRoom();
}
}, {
key: "onClickAddCoin",
value: function() {}
}, {
key: "onClickAutoSpin",
value: function() {
if (this.isAutoSpin) {
this.isAutoSpin = !1;
this.btnSpin.interactable = !0;
} else this.isAutoSpin = !0;
}
}, {
key: "setupBetTableIcons",
value: function() {
var t = this;
this.listBetTableIcons.forEach(function(e, n) {
e.getComponent(cc.Sprite).spriteFrame = t.listItemIcons[n];
}, this);
}
}, {
key: "onLeaveRoom",
value: function(t) {
t.resultCode === H.ResponseResultCode.SUCCESS && cc.director.loadScene("GameList");
}
}, {
key: "onRoomStateChanged",
value: function(t) {
var e = t;
if (this.networkService.currentRoom.id == e.roomId) {
this.uiManager.updateJackpot(e.jackpot);
this.multipleFund._setMultipleFund(e.multipleFund);
}
}
}, {
key: "stopAuto",
value: function() {
this.toggleAuto.isChecked = !1;
this.isAutoSpin = !1;
}
}, {
key: "showHideSetting",
value: function(t, e) {
this.dialogSetting.active = 1 == e;
}
}, {
key: "soundChanged",
value: function() {
this.audioController.toggleSound(this.toggleSound.isChecked);
}
}, {
key: "bgSoundChanged",
value: function() {
this.audioController.toggleBackround(this.toggleBgSound.isChecked);
}
} ]);
return e;
}(), w = Z(b.prototype, "listColumns", [ i ], {
enumerable: !0,
initializer: function() {
return [];
}
}), S = Z(b.prototype, "listItemIcons", [ o ], {
enumerable: !0,
initializer: function() {
return [];
}
}), C = Z(b.prototype, "listItemPrefab", [ r ], {
enumerable: !0,
initializer: function() {
return [];
}
}), T = Z(b.prototype, "ItemRandomPrefab", [ a ], {
enumerable: !0,
initializer: function() {
return null;
}
}), E = Z(b.prototype, "uiManager", [ s ], {
enumerable: !0,
initializer: function() {
return null;
}
}), I = Z(b.prototype, "tableDialog", [ c ], {
enumerable: !0,
initializer: function() {
return null;
}
}), k = Z(b.prototype, "jackpotEffect", [ l ], {
enumerable: !0,
initializer: function() {
return null;
}
}), N = Z(b.prototype, "bigWinEffect", [ u ], {
enumerable: !0,
initializer: function() {
return null;
}
}), R = Z(b.prototype, "listBetTableIcons", [ f ], {
enumerable: !0,
initializer: function() {
return [];
}
}), O = Z(b.prototype, "toggleAuto", [ h ], {
enumerable: !0,
initializer: function() {
return null;
}
}), P = Z(b.prototype, "audioController", [ d ], {
enumerable: !0,
initializer: function() {
return null;
}
}), L = Z(b.prototype, "dialogSetting", [ p ], {
enumerable: !0,
initializer: function() {
return null;
}
}), A = Z(b.prototype, "toggleSound", [ g ], {
enumerable: !0,
initializer: function() {
return null;
}
}), U = Z(b.prototype, "toggleBgSound", [ y ], {
enumerable: !0,
initializer: function() {
return null;
}
}), D = Z(b.prototype, "btnSpin", [ m ], {
enumerable: !0,
initializer: function() {
return null;
}
}), B = Z(b.prototype, "multipleFund", [ v ], {
enumerable: !0,
initializer: function() {
return null;
}
}), b)) || _);
n.default = nt;
e.exports = n.default;
cc._RF.pop();
}, {
"../Scene/GameList/MultipleFund": "MultipleFund",
"../Utils/Constants": "Constants",
"./AudioController": "AudioController",
"./BetTableController": "BetTableController",
"./BigWinEffect": "BigWinEffect",
"./JackpotEffect": "JackpotEffect",
"./SlotDialog": "SlotDialog",
"./SlotGameUIManager": "SlotGameUIManager",
lodash: 9
} ],
SlotDialog: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "811e7LE/QREfpApPUo+QJ1k", "SlotDialog");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i, o, r, a, s, c, l = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}(), u = h(t("../Scene/Common/BaseTab")), f = h(t("../Scene/Common/BaseTabContainer"));
function h(t) {
return t && t.__esModule ? t : {
default: t
};
}
function d(t, e, n, i) {
n && Object.defineProperty(t, e, {
enumerable: n.enumerable,
configurable: n.configurable,
writable: n.writable,
value: n.initializer ? n.initializer.call(i) : void 0
});
}
function p(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function g(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function y(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function m(t, e, n, i, o) {
var r = {};
Object.keys(i).forEach(function(t) {
r[t] = i[t];
});
r.enumerable = !!r.enumerable;
r.configurable = !!r.configurable;
("value" in r || r.initializer) && (r.writable = !0);
r = n.slice().reverse().reduce(function(n, i) {
return i(t, e, n) || n;
}, r);
if (o && void 0 !== r.initializer) {
r.value = r.initializer ? r.initializer.call(o) : void 0;
r.initializer = void 0;
}
if (void 0 === r.initializer) {
Object.defineProperty(t, e, r);
r = null;
}
return r;
}
var v = cc._decorator, _ = v.ccclass, b = v.property, w = (i = b(Array(u.default)), 
o = b(f.default), _(r = (a = function(t) {
y(e, cc.Component);
function e() {
var t, n, i, o;
p(this, e);
for (var r = arguments.length, a = Array(r), l = 0; l < r; l++) a[l] = arguments[l];
return o = (n = i = g(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
d(i, "tabs", s, i), d(i, "tabContainer", c, i), n), g(i, o);
}
l(e, [ {
key: "resetPos",
value: function() {
this.node.scaleX = 1;
this.node.scaleY = 1;
}
}, {
key: "show",
value: function(t) {
this.node.active = !0;
this.resetPos();
this.tabContainer.selectTab(this.tabs[t]);
}
}, {
key: "hide",
value: function() {
this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.4, 0, 0), cc.moveTo(.4, cc.winSize.width / 2, 0)), cc.callFunc(function() {
this.node.active = !1;
}, this)));
}
}, {
key: "hidePopup",
value: function() {
this.node.active = !1;
}
} ]);
return e;
}(), s = m(a.prototype, "tabs", [ i ], {
enumerable: !0,
initializer: function() {
return [];
}
}), c = m(a.prototype, "tabContainer", [ o ], {
enumerable: !0,
initializer: function() {
return null;
}
}), a)) || r);
n.default = w;
e.exports = n.default;
cc._RF.pop();
}, {
"../Scene/Common/BaseTab": "BaseTab",
"../Scene/Common/BaseTabContainer": "BaseTabContainer"
} ],
SlotGameUIManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fae59up2EVKrpi8sqVcE5+w", "SlotGameUIManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i, o, r, a, s, c, l, u, f, h, d, p, g, y, m, v, _, b, w, S, C, T, E, I, k, N, R, O, P, L, A, U, D, B, x = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}(), M = H(t("./BXHHuItem")), G = t("../Utils/Helper"), F = H(t("./PlayedHistoryItem"));
function H(t) {
return t && t.__esModule ? t : {
default: t
};
}
function Y(t, e, n, i) {
n && Object.defineProperty(t, e, {
enumerable: n.enumerable,
configurable: n.configurable,
writable: n.writable,
value: n.initializer ? n.initializer.call(i) : void 0
});
}
function j(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function $(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function V(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function z(t, e, n, i, o) {
var r = {};
Object.keys(i).forEach(function(t) {
r[t] = i[t];
});
r.enumerable = !!r.enumerable;
r.configurable = !!r.configurable;
("value" in r || r.initializer) && (r.writable = !0);
r = n.slice().reverse().reduce(function(n, i) {
return i(t, e, n) || n;
}, r);
if (o && void 0 !== r.initializer) {
r.value = r.initializer ? r.initializer.call(o) : void 0;
r.initializer = void 0;
}
if (void 0 === r.initializer) {
Object.defineProperty(t, e, r);
r = null;
}
return r;
}
var W = cc._decorator, X = W.ccclass, J = W.property, Q = (i = J(cc.Label), o = J(cc.Label), 
r = J(cc.Label), a = J(cc.Label), s = J(cc.Label), c = J(cc.Node), l = J(Array(cc.Node)), 
u = J(cc.SpriteFrame), f = J(cc.SpriteFrame), h = J(cc.Node), d = J(cc.Prefab), 
p = J(cc.Node), g = J(cc.Prefab), y = J(cc.Label), m = J(cc.Node), v = J(cc.Label), 
X(_ = (b = function(t) {
V(e, cc.Component);
function e() {
var t, n, i, o;
j(this, e);
for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
return o = (n = i = $(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
Y(i, "betValue", w, i), Y(i, "betLines", S, i), Y(i, "winValue", C, i), Y(i, "totalBet", T, i), 
Y(i, "totalCoin", E, i), Y(i, "slotLineNode", I, i), i.slotLinesList = [], Y(i, "betLinesIconList", k, i), 
Y(i, "activeLineIcon", N, i), Y(i, "deactiveLineIcon", R, i), Y(i, "contentBXHHu", O, i), 
Y(i, "itemBXHHu", P, i), Y(i, "contentHistory", L, i), Y(i, "itemHistory", A, i), 
Y(i, "winLabel", U, i), Y(i, "winDialog", D, i), Y(i, "textJackpot", B, i), n), 
$(i, o);
}
x(e, [ {
key: "start",
value: function() {
this.slotLinesList = this.slotLineNode.children;
this.textJackpot.string = "0";
}
}, {
key: "setBetValue",
value: function(t) {
this.betValue.string = (0, G.numberWithCommas)(t);
}
}, {
key: "setBetLines",
value: function(t) {
this.betLines.string = "" + t;
}
}, {
key: "setWinValue",
value: function(t) {
this.winValue.string = (0, G.numberWithCommas)(t);
}
}, {
key: "setTotalBet",
value: function(t) {
this.totalBet.string = (0, G.numberWithCommas)(t);
}
}, {
key: "setTotalCoin",
value: function(t) {
this.totalCoin.string = (0, G.numberWithDot)(t);
}
}, {
key: "blinkWinLines",
value: function() {
var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments[1];
t.forEach(this.blinkLine, this);
this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(e)));
}
}, {
key: "blinkLine",
value: function(t) {
var e = this.slotLinesList[t - 1];
e.active = !0;
e.runAction(cc.blink(2, 5));
setTimeout(function() {
e.active = !1;
}, 2e3);
}
}, {
key: "selectLineSlot",
value: function(t) {
this.betLinesIconList[t - 1].getComponent(cc.Sprite).spriteFrame = this.activeLineIcon;
}
}, {
key: "deselectLineSlot",
value: function(t) {
this.betLinesIconList[t - 1].getComponent(cc.Sprite).spriteFrame = this.deactiveLineIcon;
}
}, {
key: "disselectAllLinesIcon",
value: function() {
for (var t = 1; t <= 20; t++) this.deselectLineSlot(t);
}
}, {
key: "showListSelectedLines",
value: function() {
var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
this.disselectAllLinesIcon();
t.forEach(this.selectLineSlot, this);
}
}, {
key: "showBXHHu",
value: function(t) {
this.contentBXHHu.removeAllChildren(!0);
this.contentBXHHu.height = t.length * this.itemBXHHu.data.height;
for (var e = 0; e < t.length; e++) {
var n = t[e], i = n.displayName, o = n.time, r = n.bet, a = n.win, s = cc.instantiate(this.itemBXHHu), c = s.getComponent(M.default);
c.setPlayerLabel(i);
c.setTimeLabel(o);
c.setBetLabel(r);
c.setWinLabel(a);
e % 2 ? c.setGrayBackground() : c.setLightGrayBackground();
s.y = -(.5 + e) * s.height;
this.contentBXHHu.addChild(s);
}
}
}, {
key: "showHistory",
value: function(t) {
this.contentHistory.removeAllChildren(!0);
this.contentHistory.height = t.length * this.itemHistory.data.height;
for (var e = 0; e < t.length; e++) {
var n = t[e], i = n.id, o = n.time, r = n.bet, a = n.sub, s = n.total, c = cc.instantiate(this.itemHistory), l = c.getComponent(F.default);
l.setIDLabel(i);
l.setTimeLabel(o);
l.setBetLabel(r);
l.setUserBetLabel(a);
l.setWinLabel(s);
e % 2 ? l.setGrayBackground() : l.setLightGrayBackground();
c.y = -(.5 + e) * c.height;
this.contentHistory.addChild(c);
}
}
}, {
key: "showWinValue",
value: function(t, e) {
this.winDialog.active = !0;
this.winDialog.runAction(cc.show());
this.winLabel.string = (0, G.numberWithDot)(t);
this.winDialog.runAction(cc.sequence(cc.delayTime(2), cc.hide(), cc.callFunc(e)));
}
}, {
key: "updateJackpot",
value: function(t) {
(0, G.runNumber)(this.textJackpot, t);
}
} ]);
return e;
}(), w = z(b.prototype, "betValue", [ i ], {
enumerable: !0,
initializer: function() {
return null;
}
}), S = z(b.prototype, "betLines", [ o ], {
enumerable: !0,
initializer: function() {
return null;
}
}), C = z(b.prototype, "winValue", [ r ], {
enumerable: !0,
initializer: function() {
return null;
}
}), T = z(b.prototype, "totalBet", [ a ], {
enumerable: !0,
initializer: function() {
return null;
}
}), E = z(b.prototype, "totalCoin", [ s ], {
enumerable: !0,
initializer: function() {
return null;
}
}), I = z(b.prototype, "slotLineNode", [ c ], {
enumerable: !0,
initializer: function() {
return null;
}
}), k = z(b.prototype, "betLinesIconList", [ l ], {
enumerable: !0,
initializer: function() {
return [];
}
}), N = z(b.prototype, "activeLineIcon", [ u ], {
enumerable: !0,
initializer: function() {
return null;
}
}), R = z(b.prototype, "deactiveLineIcon", [ f ], {
enumerable: !0,
initializer: function() {
return null;
}
}), O = z(b.prototype, "contentBXHHu", [ h ], {
enumerable: !0,
initializer: function() {
return null;
}
}), P = z(b.prototype, "itemBXHHu", [ d ], {
enumerable: !0,
initializer: function() {
return null;
}
}), L = z(b.prototype, "contentHistory", [ p ], {
enumerable: !0,
initializer: function() {
return null;
}
}), A = z(b.prototype, "itemHistory", [ g ], {
enumerable: !0,
initializer: function() {
return null;
}
}), U = z(b.prototype, "winLabel", [ y ], {
enumerable: !0,
initializer: function() {
return null;
}
}), D = z(b.prototype, "winDialog", [ m ], {
enumerable: !0,
initializer: function() {
return null;
}
}), B = z(b.prototype, "textJackpot", [ v ], {
enumerable: !0,
initializer: function() {
return null;
}
}), b)) || _);
n.default = Q;
e.exports = n.default;
cc._RF.pop();
}, {
"../Utils/Helper": "Helper",
"./BXHHuItem": "BXHHuItem",
"./PlayedHistoryItem": "PlayedHistoryItem"
} ],
SlotItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "73db0L3xVBHPoRS92rTZSwB", "SlotItem");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i, o, r, a, s, c, l, u, f = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}();
function h(t, e, n, i) {
n && Object.defineProperty(t, e, {
enumerable: n.enumerable,
configurable: n.configurable,
writable: n.writable,
value: n.initializer ? n.initializer.call(i) : void 0
});
}
function d(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function p(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function g(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function y(t, e, n, i, o) {
var r = {};
Object.keys(i).forEach(function(t) {
r[t] = i[t];
});
r.enumerable = !!r.enumerable;
r.configurable = !!r.configurable;
("value" in r || r.initializer) && (r.writable = !0);
r = n.slice().reverse().reduce(function(n, i) {
return i(t, e, n) || n;
}, r);
if (o && void 0 !== r.initializer) {
r.value = r.initializer ? r.initializer.call(o) : void 0;
r.initializer = void 0;
}
if (void 0 === r.initializer) {
Object.defineProperty(t, e, r);
r = null;
}
return r;
}
var m = cc._decorator, v = m.ccclass, _ = m.property, b = (i = _(Array(cc.ParticleSystem)), 
o = _(Array(cc.Node)), r = _(Array(cc.Animation)), v(a = (s = function(t) {
g(e, cc.Component);
function e() {
var t, n, i, o;
d(this, e);
for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
return o = (n = i = p(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
h(i, "listParticle", c, i), h(i, "listSpine", l, i), h(i, "listAnimation", u, i), 
n), p(i, o);
}
f(e, [ {
key: "start",
value: function() {
this.isShowAnim = !1;
}
}, {
key: "showAnimation",
value: function() {
if (!this.isShowAnim) {
this.listParticle.forEach(function(t) {
t.resetSystem();
});
this.listSpine.forEach(function(t) {
t.active = !0;
});
this.listAnimation.forEach(function(t) {
t.play();
});
this.isShowAnim = !0;
}
}
}, {
key: "hideAnimation",
value: function() {
if (this.isShowAnim) {
this.listParticle.forEach(function(t) {
t.stopSystem();
});
this.listSpine.forEach(function(t) {
t.active = !1;
});
this.listAnimation.forEach(function(t) {
t.stop();
});
this.isShowAnim = !1;
}
}
} ]);
return e;
}(), c = y(s.prototype, "listParticle", [ i ], {
enumerable: !0,
initializer: function() {
return [];
}
}), l = y(s.prototype, "listSpine", [ o ], {
enumerable: !0,
initializer: function() {
return [];
}
}), u = y(s.prototype, "listAnimation", [ r ], {
enumerable: !0,
initializer: function() {
return [];
}
}), s)) || a);
n.default = b;
e.exports = n.default;
cc._RF.pop();
}, {} ],
SlotRoomItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b05f24+IT1GH6zmRITHs83i", "SlotRoomItem");
var i = t("../../Utils/Helper"), o = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./MultipleFund"));
cc.Class({
extends: cc.Component,
properties: {
textBet: {
default: null,
type: cc.Label
},
textJackpot: {
default: null,
type: cc.Label
},
roomId: {
default: 0
},
xHu: {
default: null,
type: o.default
}
},
setJackpot: function(t) {
(0, i.runNumber)(this.textJackpot, t.jackpot);
t.multipleFund && this.xHu.setMultipleFund(t.multipleFund);
},
setRoomData: function(t) {
this.textBet.string = (0, i.numberWithDot)(t.bet);
(0, i.runNumber)(this.textJackpot, t.funds);
this.roomId = t.id;
},
getRoomId: function() {
return this.roomId;
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper",
"./MultipleFund": "MultipleFund"
} ],
SyncTask: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "19b77VhIphNRbxCG6Qgsja8", "SyncTask");
var i = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}();
function o(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function r(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function a(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./Task"), c = function(t) {
a(e, s.default);
function e() {
o(this, e);
return r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
}
i(e, [ {
key: "run",
value: function() {
setTimeout(function() {
this.callback();
this.completedCallback();
}.bind(this), 1);
}
} ]);
return e;
}();
n.default = c;
cc._RF.pop();
}, {
"./Task": "Task"
} ],
TabGoldHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "38a2eYP+35CooE4t9Y2bza9", "TabGoldHistory");
var i = r(t("../Common/BaseTabContainer")), o = r(t("./Dialog_GoldHistory"));
function r(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: i.default,
properties: {
dialogHistory: {
default: null,
type: o.default
}
},
showTab: function(t) {
t.tabContentNode && (t.tabContentNode.active = !0);
var e = this.tabs.indexOf(t);
if (this.dialogHistory.trans_type != e) {
this.dialogHistory.trans_type = e;
this.dialogHistory.page = 0;
this.dialogHistory.refreshData();
}
}
});
cc._RF.pop();
}, {
"../Common/BaseTabContainer": "BaseTabContainer",
"./Dialog_GoldHistory": "Dialog_GoldHistory"
} ],
TaiXiuChartLine: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "61cf6keIQNCMZbB1IrU+Mse", "TaiXiuChartLine");
cc.Class({
extends: cc.Component,
properties: {
nodeLine: {
default: null,
type: cc.Node
},
nodeTrang: {
default: null,
type: cc.Node
},
nodeDen: {
default: null,
type: cc.Node
},
nodeListBi: {
default: null,
type: cc.Node
},
nodeListLine: {
default: null,
type: cc.Node
},
nodeGraphics: {
default: null,
type: cc.Node
},
gridX: {
default: 20
},
gridY: {
default: 6
},
style: {
default: "point"
}
},
start: function() {
this.listDice1 = [];
this.listDice2 = [];
this.listDice3 = [];
},
refreshData: function() {},
setData: function(t) {
this.listDice1.length = 0;
this.listDice2.length = 0;
this.listDice3.length = 0;
this.matchNum = 21;
var e = t.history.length, n = t.history.slice(e - this.matchNum);
this.cellX = this.node.width / this.gridX;
this.cellY = this.node.height / this.gridY;
this.nodeListBi.removeAllChildren();
this.nodeListLine.removeAllChildren();
"point" == this.style && (this.cellY = this.node.height / 15);
for (var i = 0; i < n.length - 1; i++) {
var o = n[i], r = n[i + 1];
if ("point" === this.style) this.addLineAtGrid(i, o.point - 3, i + 1, r.point - 3, "green", 1); else {
this.addLineAtGrid(i, o.faces[0], i + 1, r.faces[0], "yellow", 1);
this.addLineAtGrid(i, o.faces[1], i + 1, r.faces[1], "pink", 1);
this.addLineAtGrid(i, o.faces[2], i + 1, r.faces[2], "xanh1", 1);
}
}
for (i = 0; i < n.length; i++) {
var a = n[i];
if ("point" === this.style) {
a.point;
this.addNodeAtGrid(i, a.point - 3, a.point, a.point <= 10 ? "white" : "black", 1);
} else {
this.addNodeAtGrid(i, a.faces[0], "", "yellow", .7);
this.addNodeAtGrid(i, a.faces[1], "", "pink", .7);
this.addNodeAtGrid(i, a.faces[2], "", "xanh1", .7);
}
}
},
addNodeAt: function(t, e, n, i) {},
addNodeAtGrid: function(t, e, n, i) {
var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, r = null;
if ("black" === i) r = cc.instantiate(this.nodeDen); else if ("white" === i) r = cc.instantiate(this.nodeTrang); else {
r = cc.instantiate(this.nodeTrang);
if ("red" === i) r.color = new cc.Color(255, 0, 0); else if ("green" === i) r.color = new cc.Color(0, 255, 0); else if ("blue" === i) r.color = new cc.Color(0, 0, 255); else if ("yellow" === i) {
r.color = new cc.Color(255, 255, 0);
this.listDice1.push(r);
} else if ("pink" === i) {
r.color = new cc.Color(255, 0, 245);
this.listDice2.push(r);
} else if ("xanh1" === i) {
r.color = new cc.Color(2, 219, 228);
this.listDice3.push(r);
} else r.color = i;
}
r.x = this.cellX * t;
r.y = this.cellY * e;
r.children.length > 0 && (r.children[0].getComponent(cc.Label).string = n);
r.parent = this.nodeListBi;
r.active = !0;
r.scaleX = o;
r.scaleY = o;
},
addLineAt: function(t, e, n, i, o) {},
addLineAtGrid: function(t, e, n, i, o) {
var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1, a = null;
a = cc.instantiate(this.nodeLine);
if ("white" === o) a.color = new cc.Color(255, 255, 255); else if ("black" === o) a.color = new cc.Color(0, 0, 0); else if ("red" === o) a.color = new cc.Color(255, 0, 0); else if ("green" === o) a.color = new cc.Color(0, 255, 0); else if ("blue" === o) a.color = new cc.Color(0, 0, 255); else if ("yellow" === o) {
a.color = new cc.Color(255, 255, 0);
this.listDice1.push(a);
} else if ("pink" === o) {
a.color = new cc.Color(255, 0, 245);
this.listDice2.push(a);
} else if ("xanh1" === o) {
a.color = new cc.Color(2, 219, 228);
this.listDice3.push(a);
} else a.color = o;
a.x = this.cellX * t;
a.y = this.cellY * e;
var s = Math.sqrt(Math.pow(this.cellX * (t - n), 2) + Math.pow(this.cellY * (e - i), 2)), c = cc.misc.radiansToDegrees(Math.atan(this.cellY * (e - i) / this.cellX * (n - t)));
a.rotation = c;
a.width = s;
a.height = r;
a.parent = this.nodeListLine;
a.active = !0;
},
clear: function() {},
totalCheck: function() {
this.nodeListBi.active = !this.nodeListBi.active;
this.nodeListLine.active = !this.nodeListLine.active;
},
dice1Check: function() {
this.listDice1.forEach(function(t) {
t.active = !t.active;
});
},
dice2Check: function() {
this.listDice2.forEach(function(t) {
t.active = !t.active;
});
},
dice3Check: function() {
this.listDice3.forEach(function(t) {
t.active = !t.active;
});
}
});
cc._RF.pop();
}, {} ],
TaiXiuChartTablePoint: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7ba0bxNcvNEiqmWoKsvxUIH", "TaiXiuChartTablePoint");
cc.Class({
extends: cc.Component,
properties: {
diceWhite: {
default: null,
type: cc.Prefab
},
diceBlack: {
default: null,
type: cc.Prefab
},
listLine: {
default: [],
type: cc.Node
},
textNumTai: {
default: null,
type: cc.Label
},
textNumXiu: {
default: null,
type: cc.Label
},
colNum: {
default: 16
},
numDiceOfCol: {
default: 5
}
},
setData: function(t) {
this.listLine.forEach(function(t) {
t.removeAllChildren();
});
this.matchNumXiu = 0;
this.matchNumTai = 0;
var e = t.history, n = 0;
this.isXiu = e[e.length - 1].point <= 10;
for (var i = e.length - 1; i >= 0; i--) {
var o = e[i].point, r = o <= 10;
this.isXiu === r && this.listLine[n].childrenCount !== this.numDiceOfCol || n++;
if (n >= this.colNum) break;
r ? this.matchNumXiu++ : this.matchNumTai++;
var a = cc.instantiate(r ? this.diceWhite : this.diceBlack);
a.getComponentInChildren(cc.Label).string = o;
this.listLine[n].addChild(a);
this.isXiu = r;
}
this.textNumTai.string = this.matchNumTai;
this.textNumXiu.string = this.matchNumXiu;
}
});
cc._RF.pop();
}, {} ],
TaiXiuChartTable: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5bfe1PGfzRAOIjdlhcO5dqH", "TaiXiuChartTable");
cc.Class({
extends: cc.Component,
properties: {
diceWhite: {
default: null,
type: cc.Prefab
},
diceBlack: {
default: null,
type: cc.Prefab
},
listLine: {
default: [],
type: cc.Node
},
textNumTai: {
default: null,
type: cc.Label
},
textNumXiu: {
default: null,
type: cc.Label
}
},
setData: function(t) {
this.listLine.forEach(function(t) {
t.removeAllChildren();
});
this.matchNum = 40;
this.matchNumXiu = 0;
this.matchNumTai = 0;
for (var e = t.history.length, n = t.history.slice(e - this.matchNum), i = 0; i < n.length; i++) {
var o = n[i].point <= 10;
o ? this.matchNumXiu++ : this.matchNumTai++;
var r = cc.instantiate(o ? this.diceWhite : this.diceBlack), a = Math.floor(i / 8);
this.listLine[a].addChild(r);
}
this.textNumTai.string = this.matchNumTai;
this.textNumXiu.string = this.matchNumXiu;
}
});
cc._RF.pop();
}, {} ],
TaiXiuHistoryItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7bc91OMlr5HkIw8XM6h6fgK", "TaiXiuHistoryItem");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseListItem")), o = t("../../Utils/Helper");
cc.Class({
extends: i.default,
properties: {
textPhien: {
default: null,
type: cc.Label
},
textThoiGian: {
default: null,
type: cc.Label
},
textCuoc: {
default: null,
type: cc.Label
},
textDat: {
default: null,
type: cc.Label
},
textVe: {
default: null,
type: cc.Label
},
textHoanTra: {
default: null,
type: cc.Label
},
textNhan: {
default: null,
type: cc.Label
}
},
onSetData: function(t) {
this.textPhien.string = t.id;
this.textThoiGian.string = t.time;
this.textDat.string = t.betMax > 0 ? "Tài" : "Xỉu";
this.textVe.string = t.result;
this.textCuoc.string = (0, o.moneyFormat)(t.betMax > 0 ? t.betMax : t.betMin, !0);
this.textHoanTra.string = (0, o.moneyFormat)(t.betMaxReturn > 0 ? t.betMaxReturn : t.betMinReturn, !0);
this.textNhan.string = (0, o.moneyFormat)(t.maxWin > 0 ? t.maxWin : t.minWin, !0);
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper",
"../Common/BaseListItem": "BaseListItem"
} ],
TaiXiuMatchHistoryItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d408fv2pBFJgYtSdvLcsWYC", "TaiXiuMatchHistoryItem");
var i = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
textTime: {
default: null,
type: cc.Label
},
textUserName: {
default: null,
type: cc.Label
},
textBet: {
default: null,
type: cc.Label
},
textBalance: {
default: null,
type: cc.Label
}
},
setData: function(t, e) {
this.textTime.string = e.time.split(" ")[1];
var n = e.username || "";
this.textUserName.string = n.length > 15 ? n.substring(0, 15) + "..." : n;
this.textBet.string = (0, i.moneyFormat)(0 == t ? e.betMin + e.betMinReturn : e.betMax + e.betMaxReturn, !0);
this.textBalance.string = (0, i.moneyFormat)(0 == t ? e.betMinReturn : e.betMaxReturn, !0);
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper"
} ],
TaiXiuTopEventItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "bdbd8cziY9GcIwS+cBDNT6I", "TaiXiuTopEventItem");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseListItem")), o = t("../../Utils/Helper");
cc.Class({
extends: i.default,
properties: {
textNguoiChoi: {
default: null,
type: cc.Label
},
textHang: {
default: null,
type: cc.Label
},
textThang: {
default: null,
type: cc.Label
},
textBonus: {
default: null,
type: cc.Label
},
imgBonus: {
default: null,
type: cc.Sprite
}
},
onSetData: function(t, e, n) {
var i = this, r = e.fullname;
this.textNguoiChoi.string = r.length > 15 ? r.substring(0, 15) + "..." : r;
this.textHang.string = t;
this.textThang.string = (0, o.moneyFormat)(e.total_gold);
var a = n.img;
if (a && "" != a) {
n.value && "" != n.value ? this.textBonus.string = n.name + " - " + n.value : this.textBonus.string = n.name;
try {
cc.loader.load(a, function(t, e) {
i.imgBonus.spriteFrame = new cc.SpriteFrame(e);
i.imgBonus.node.active = !0;
});
} catch (t) {
cc.error("load img bonus error " + t);
}
} else this.textBonus.string = n.value;
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper",
"../Common/BaseListItem": "BaseListItem"
} ],
TaiXiuTopUserItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "61b68FIXB5IgLs4OMZz3oqn", "TaiXiuTopUserItem");
var i = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("../Common/BaseListItem")), o = t("../../Utils/Helper");
cc.Class({
extends: i.default,
properties: {
textNguoiChoi: {
default: null,
type: cc.Label
},
textHang: {
default: null,
type: cc.Label
},
textThang: {
default: null,
type: cc.Label
},
textBonus: {
default: null,
type: cc.Label
}
},
onSetData: function(t, e) {
var n = e.fullname;
this.textNguoiChoi.string = n.length > 15 ? n.substring(0, 15) + "..." : n;
this.textHang.string = t;
this.textThang.string = (0, o.moneyFormat)(e.total_gold);
this.textBonus.string = (0, o.moneyFormat)(e.bonus);
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper",
"../Common/BaseListItem": "BaseListItem"
} ],
TaskManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "65564QMU+RAnb5RbDBOcqi4", "TaskManager");
var i = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}();
function o(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("./Task"), a = function() {
function t() {
o(this, t);
this._tasks = [];
}
i(t, [ {
key: "addTask",
value: function(t) {
if (!(t instanceof r.default)) throw new Error("task must be instance of Task");
this._tasks.push(t);
}
}, {
key: "run",
value: function(t, e) {
for (var n = this, i = 0, o = this._tasks.length, r = 0; r < o; ++r) this._tasks[r].setOnCompleted(function() {
if (++i < o) {
n._tasks[i].run();
t && t(i, o);
} else e && e(!1);
});
o >= 1 ? this._tasks[0].run() : e && e(!1);
}
}, {
key: "count",
value: function() {
return this._tasks.length;
}
} ]);
return t;
}();
n.default = a;
cc._RF.pop();
}, {
"./Task": "Task"
} ],
Task: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f3819KtW6REqLRe8wB1glwx", "Task");
var i = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
n && t(e.prototype, n);
i && t(e, i);
return e;
};
}();
function o(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = function() {
function t(e) {
o(this, t);
this.callback = null;
this._completedCallback = null;
this.callback = e.bind(this, this.completedCallback.bind(this));
}
i(t, [ {
key: "run",
value: function() {
throw new Error("Please Implement Me");
}
}, {
key: "setOnCompleted",
value: function(t) {
this._completedCallback = t;
}
}, {
key: "completedCallback",
value: function() {
this._completedCallback();
}
} ]);
return t;
}();
n.default = r;
cc._RF.pop();
}, {} ],
Toast: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3587bpFAcJDUp6+0kD/K3ml", "Toast");
cc.Class({
extends: cc.Component,
properties: {
contentTxt: {
default: null,
type: cc.Label
}
},
onLoad: function() {
this.delayTime = 2;
},
show: function(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
this.contentTxt.string = t;
this.node.active = !0;
e > 0 && (this.delayTime = e);
this.scheduleOnce(function() {
this.node.destroy();
}, this.delayTime);
}
});
cc._RF.pop();
}, {} ],
UIHelper: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9ced1LzQRpH8J1rO81mZyOI", "UIHelper");
var i = a(t("./PopupMessage")), o = a(t("../Minigame/Minigame")), r = t("../../Utils/Constants");
function a(t) {
return t && t.__esModule ? t : {
default: t
};
}
cc.Class({
extends: cc.Component,
properties: {
loading: {
default: null,
type: cc.Node
},
popupMessage: {
default: null,
type: i.default
},
toast: {
default: null,
type: cc.Prefab
},
minigame: {
default: null,
type: o.default
}
},
onLoad: function() {
window.$UIHelper = this;
},
start: function() {
var t = this, e = cc.director.getScene()._name;
if (e.includes("Slot") || "GameList" == e) setTimeout(function() {
if (null !== t.minigame && void 0 !== t.minigame) {
("GameList" == e || window.$Global.minigame.isShowTaixiu) && t.minigame.showTaiXiu();
window.$Global.minigame.isShowMinipoker && t.minigame.showMiniPoker();
window.$Global.minigame.isShowBaucua && t.minigame.showBauCua();
window.$Global.minigame.isShowMiniSlot_6 && t.minigame.showMiniSlot(event, r.REQUEST_TYPE.MINI_SLOT_6);
window.$Global.minigame.isShowMiniSlot_7 && t.minigame.showMiniSlot(r.REQUEST_TYPE.MINI_SLOT_7);
window.$Global.minigame.isShowMiniSlot_8 && t.minigame.showMiniSlot(r.REQUEST_TYPE.MINI_SLOT_8);
window.$Global.minigame.isShowMiniBaCay && t.minigame.showMiniBaCay();
window.$Global.minigame.isShowCaoThap && t.minigame.showCaoThap();
}
}, 1500); else {
window.$Global.minigame.isShowTaixiu = !1;
window.$Global.minigame.isShowMinipoker = !1;
window.$Global.minigame.isShowBaucua = !1;
window.$Global.minigame.isShowMiniSlot_6 = !1;
window.$Global.minigame.isShowMiniSlot_7 = !1;
window.$Global.minigame.isShowMiniSlot_8 = !1;
window.$Global.minigame.isShowMiniBaCay = !1;
window.$Global.minigame.isShowCaoThap = !1;
}
},
showLoading: function(t) {
this.loading.active = t;
},
showPopup: function(t, e) {
var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
this.popupMessage.show(t, e, n, i);
},
showToast: function(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.node, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -264, i = cc.instantiate(this.toast);
i.parent = e;
i.setPosition(0, n);
i.getComponent("Toast").show(t);
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../Minigame/Minigame": "Minigame",
"./PopupMessage": "PopupMessage"
} ],
UserJackpotItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fb3a6bwNcdK1LTcDkxYhgoo", "UserJackpotItem");
var i = t("../../Utils/Constants"), o = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
jpImg: {
default: null,
type: cc.Sprite
},
listSpr: {
default: [],
type: cc.SpriteFrame
},
username: {
default: null,
type: cc.Label
},
gold: {
default: null,
type: cc.Label
},
time: {
default: null,
type: cc.Label
}
},
setData: function(t) {
switch (t.zoneId) {
case i.ZONE_ID.SLOT_32:
this.jpImg.spriteFrame = this.listSpr[0];
break;

case i.ZONE_ID.SLOT_18:
this.jpImg.spriteFrame = this.listSpr[1];
break;

case i.ZONE_ID.SLOT_28:
this.jpImg.spriteFrame = this.listSpr[2];
break;

case i.ZONE_ID.MINI_POKER:
this.jpImg.spriteFrame = this.listSpr[3];
break;

case i.ZONE_ID.MINI_SLOT_BANCA:
this.jpImg.spriteFrame = this.listSpr[4];
break;

case i.ZONE_ID.MINI_BACAY:
this.jpImg.spriteFrame = this.listSpr[5];
break;

case i.ZONE_ID.CAO_THAP:
this.jpImg.spriteFrame = this.listSpr[6];
}
this.username.string = t.displayName.length > 15 ? t.displayName.substring(0, 13) + "..." : t.displayName;
this.gold.string = (0, o.moneyFormat)(t.win, !0);
this.time.string = t.time;
}
});
cc._RF.pop();
}, {
"../../Utils/Constants": "Constants",
"../../Utils/Helper": "Helper"
} ],
UserService: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0c8d0+d3B5Nh6bzi/1UVam8", "UserService");
(function(t) {
t && t.__esModule;
})(t("qs"));
var i = t("../Configs/Config"), o = t("../Utils/Constants");
cc.Class({
extends: cc.Component,
properties: {},
emit: function(t, e) {
this.node.emit(t, e);
},
on: function(t, e, n) {
this.node.on(n ? n + "_" + t : t, e);
},
off: function(t, e, n) {
this.node.off(n ? n + "_" + t : t, e);
},
once: function(t, e) {
this.node.once(t, e);
},
onDestroy: function() {
window.$Global.networkService.off("" + o.REQUEST_TYPE.AUTH);
},
loginFacebook: function(t, e) {
var n = {
accessoken: t,
g2fa: e,
loginType: 2
};
window.$Global.networkService.wsSendLoginFacebook(n);
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.AUTH, function(e) {
t(e);
});
});
},
login: function(t, e, n) {
var i = {
username: t,
password: e,
g2fa: n,
loginType: 1
};
window.$Global.networkService.wsSendLogin(i);
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.AUTH, function(e) {
t(e);
});
});
},
onLogin: function(t) {
this.userInfoLogin = t;
},
logout: function() {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.SIGNOUT);
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.SIGNOUT, function(e) {
t(e);
});
});
},
activateUserAccount: function(t) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.VERIFY_G2FA, {
userId: window.$Global.networkService.userInfo.id
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.VERIFY_G2FA, function(e) {
var n = e.resultCode;
t(n);
});
});
},
getUserDetail: function(t) {
return new Promise(function(e, n) {
var o = new XMLHttpRequest();
o.onreadystatechange = function() {
if (4 == o.readyState && 200 == o.status) {
var t = JSON.parse(o.responseText);
cc.log("GET USER DETAIL");
cc.log(t);
var n = t.data;
e(n);
}
};
var r = i.CONFIG.URLS.server + i.CONFIG.API.PATHS.userDetail + "?userId=" + t;
o.open("GET", r, !0);
o.setRequestHeader("token", window.$Global.CONFIG.token);
o.send();
});
},
getDealers: function() {
return new Promise(function(t, e) {
var n = new XMLHttpRequest();
n.onreadystatechange = function() {
if (4 == n.readyState && 200 == n.status) {
var e = JSON.parse(n.responseText);
cc.log("GET DEALERS");
cc.log(e);
var i = e.data.agency;
t(i);
}
};
var o = i.CONFIG.URLS.server + i.CONFIG.API.PATHS.dealers;
n.open("GET", o, !0);
n.setRequestHeader("token", window.$Global.CONFIG.token);
n.send();
});
},
getUserList: function(t, e) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.GET_LIST_REF_USER, {
userId: e,
page: t
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.GET_LIST_REF_USER, function(e) {
t(e.users);
});
});
},
getUserInfo: function(t) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.GET_USER_INFO, {
userId: t || window.$Global.networkService.userInfo.id
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.GET_USER_INFO, function(e) {
t(e);
});
});
},
getUserMessages: function() {
var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.GET_MESSAGES, {
status: -1,
page: t
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.GET_MESSAGES, function(e) {
t(e.messages);
});
});
},
getUserMessageCount: function() {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.GET_USER_MESSAGE_COUNT, {});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.GET_USER_MESSAGE_COUNT, function(e) {
t(e);
});
});
},
sendMessage: function(t, e, n) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.SEND_MESSAGE, {
userId: t,
title: e,
message: n
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.SEND_MESSAGE, function(e) {
t(e);
});
});
},
readMessage: function(t) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.READ_MESSAGE, {
msgId: t
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.READ_MESSAGE, function(e) {
t(e);
});
});
},
deleteMessages: function(t) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.DELETE_MESSAGE, {
msgIds: t
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.DELETE_MESSAGE, function(e) {
t(e);
});
});
},
changePassword: function(t, e) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.CHANGE_PASS, {
oldPassword: t,
newPassword: e
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.CHANGE_PASS, function(e) {
t(e);
});
});
},
updateInfo: function(t) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.UPDATE_INFO, {
name: t.name,
mobile: t.mobile,
email: "unknow@gmail.com",
address: "us",
gender: "1",
passport: "1"
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.UPDATE_INFO, function(e) {
t(e);
});
});
},
sendGiftCode: function(t) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.GIFT_CODE, {
code: t
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.GIFT_CODE, function(e) {
t(e.resultCode);
});
});
},
sendChat: function(t) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.GLOBAL_CHAT, {
type: o.NOTIFY_TYPE.WORLD_CHAT_NOTIFICATION,
message: t
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.GLOBAL_CHAT, function(e) {
t(e);
});
});
},
getListKoin: function() {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.AVAILABLE_KOIN, {});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.AVAILABLE_KOIN, function(e) {
t(e);
});
});
},
exchangeGold: function(t, e) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.EXCHANGE_GOLD, {
amount: t,
g2fa: e
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.EXCHANGE_GOLD, function(e) {
t(e);
});
});
},
koinToGold: function(t, e, n) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.KOIN_TO_GOLD, {
code: t,
amount: e,
g2fa: n
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.KOIN_TO_GOLD, function(e) {
t(e);
});
});
},
transferGold: function(t, e, n, i) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.TRANSFER_GOLD, {
amount: t,
userId: e,
message: n,
g2fa: i
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.TRANSFER_GOLD, function(e) {
t(e.resultCode);
});
});
},
setC2: function(t, e) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.SET_C2, {
userId: t,
agencyRate: e
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.SET_C2, function(e) {
t(e);
});
});
},
removeC2: function(t) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.DEL_C2, {
userId: t
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.DEL_C2, function(e) {
t(e);
});
});
},
getUserGoldHistory: function(t, e) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.USER_GOLD_HISTORY, {
trans_type: t,
page: e
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.USER_GOLD_HISTORY, function(e) {
t(e);
});
});
},
updateMoney: function() {},
getConfigTransferGold: function() {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.GET_CONFIG, {
type: o.CONFIG_TYPE.TRANSFER_GOLD
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.GET_CONFIG, function(e) {
e.type == o.CONFIG_TYPE.TRANSFER_GOLD && t(e);
});
});
},
getOTP: function() {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.GET_OTPCODE);
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.GET_OTPCODE, function(e) {
t(e);
});
});
},
getVippoint: function() {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.GET_VIP_POINTS);
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.GET_VIP_POINTS, function(e) {
t(e);
});
});
},
toggleSecurity: function(t) {
window.$Global.networkService.sendMessage(o.REQUEST_TYPE.TOGGLE_LOGIN_G2FA, {
status: t
});
return new Promise(function(t, e) {
window.$Global.networkService.once("" + o.REQUEST_TYPE.TOGGLE_LOGIN_G2FA, function(e) {
t(e);
});
});
}
});
cc._RF.pop();
}, {
"../Configs/Config": "Config",
"../Utils/Constants": "Constants",
qs: 39
} ],
VippointItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7c4678KmNJHBrqMx/DBvrt0", "VippointItem");
var i = t("../../Utils/Helper");
cc.Class({
extends: cc.Component,
properties: {
vipIcon: {
default: null,
type: cc.Sprite
},
listIcon: {
default: [],
type: cc.SpriteFrame
},
txtVipName: {
default: null,
type: cc.Label
},
txtVippoint: {
default: null,
type: cc.Label
},
txtVipBonus: {
default: null,
type: cc.Label
}
},
setData: function(t) {
this.vipIcon.spriteFrame = this.listIcon[t.rank - 1];
this.txtVipName.string = "VIP " + t.rank;
this.txtVippoint.string = (0, i.numberWithDot)(t.point);
this.txtVipBonus.string = (0, i.numberWithDot)(t.gold);
}
});
cc._RF.pop();
}, {
"../../Utils/Helper": "Helper"
} ],
XucXac: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1e559cPt/ZCyYBEjBIMcpX3", "XucXac");
cc.Class({
extends: cc.Component,
properties: {
xucxacQuay: {
default: null,
type: cc.Node
},
xucxacKetQua: {
default: null,
type: cc.Node
},
xucxacKetQuaFaces: {
default: [],
type: cc.Sprite
},
resultFrames: {
default: [],
type: cc.SpriteFrame
}
},
hideDice: function() {
this.xucxacQuay.active = !1;
this.xucxacKetQua.active = !1;
},
onFinishRoll: function() {
this.xucxacQuay.active = !1;
this.xucxacKetQua.active = !0;
this.showResult(this.values);
this.node.emit("finishRoll");
},
letRoll: function(t, e) {
var n = this;
this.node.active = !0;
this.setResult(t);
this.xucxacKetQua.active = !1;
this.xucxacQuay.active = !0;
var i = this.xucxacQuay.getComponent(cc.Animation);
i ? i.play("DiceRoll") : cc.error("No animation");
setTimeout(function() {
e && e();
n.onFinishRoll();
}, 1300);
},
showResult: function(t) {
this.setResultFace(0, t[0]);
this.setResultFace(1, t[1]);
this.setResultFace(2, t[2]);
},
setResult: function(t) {
this.values = t;
this.total = t[0] + t[1] + t[2];
},
setResultFace: function(t, e) {
this.xucxacKetQuaFaces[t].spriteFrame = this.resultFrames[e - 1];
},
getFace: function(t) {
return this.xucxacKetQuaFaces[t];
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "Config", "LocalDataManager", "PlayerDataManager", "Global", "BauCuaDoor", "BauCuaHistoryItem", "BauCuaTopUserItem", "DialogBauCuaHistory", "DialogBauCuaTop", "HisItem", "MiniBauCua", "CaoThap", "BaseDialog", "BaseInputBlocker", "BaseList", "BaseListItem", "BasePanelNotification", "BasePopup", "BaseTab", "BaseTabContainer", "NotifyJackpot", "PopupMessage", "Toast", "UIHelper", "FxMoveIn.js", "FxShake.js", "EventPanel", "AgencyItem", "ButtonKoin", "ButtonToggle", "Dialog_AddInfo", "Dialog_ChangePassword", "Dialog_Event", "Dialog_GiftCode", "Dialog_GoldHistory", "Dialog_HistoryDetail", "Dialog_Mail", "Dialog_PlayerList", "Dialog_Profile", "Dialog_ProfileUpdate", "Dialog_Setting", "Dialog_TopUp", "Dialog_VIP", "Dialog_XacThuc", "GameListScene", "GoldHistoryItem", "ListItemMail", "ListMail", "LobbyItem", "MinigameLobbyItem", "MultipleFund", "PanelAgency", "PanelCard", "PanelExchange", "PanelGameList", "PanelMoney", "PanelNotificationMarquee", "PanelPlayer", "PanelProfileInfo", "PanelProfileSecurity", "PanelTransfer", "PanelViExchange", "PanelViHistory", "PanelViRecharge", "PanelVipPoint", "RefUserItem", "SlotRoomItem", "TabGoldHistory", "VippointItem", "Jackpot", "JackpotUser", "UserJackpotItem", "Loading", "LoginScene", "BaCayJackpotHistory", "BaCayUserHistory", "MiniBaCay", "DialogMiniPokerHistory", "DialogMiniPokerHuHistory", "MiniGameMiniPoker", "MiniPokerHistoryItem", "MiniPokerHuHistoryItem", "Dialog_SelectLine", "Dialog_SlotJackpotHistory", "Dialog_SlotUserHistory", "MiniSlot", "Minigame", "BetPanel", "ChatController", "DialogChat", "DialogTaiXiuDuaTop", "DialogTaiXiuHelp", "DialogTaiXiuHistory", "DialogTaiXiuMatchHistory", "DialogTaiXiuThongKe", "DialogTaiXiuTopUser", "HistoryItem", "ListTaiXiuHistory", "ListTaiXiuMatchHistory", "MiniGameTaiXiu", "TaiXiuChartLine", "TaiXiuChartTable", "TaiXiuChartTablePoint", "TaiXiuHistoryItem", "TaiXiuMatchHistoryItem", "TaiXiuTopEventItem", "TaiXiuTopUserItem", "XucXac", "GamePlayService", "NetworkService", "UserService", "AudioController", "BXHHuItem", "BetTableController", "BigWinEffect", "JackpotEffect", "PlayedHistoryItem", "SlotController", "SlotDialog", "SlotGameUIManager", "SlotItem", "Constants", "DragAndDrop", "Helper", "ObjectUtil", "LoadingScene", "LocalStorageManager", "NotificationTxt", "HotUpdate", "AsyncTask", "SyncTask", "Task", "TaskManager", "FrameWorkLogin", "GameUtil", "LoadSdkPlugin" ]);