window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AgencyItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c4c4fJwtD5MQLBBj3dCFuEM", "AgencyItem");
    "use strict";
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
  AudioController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b03ecPLJL1GurVoaRjBepSy", "AudioController");
    "use strict";
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
      start: function start() {
        this.isOnSound = true;
      },
      onDestroy: function onDestroy() {
        cc.audioEngine.stopAll();
      },
      playSpin: function playSpin() {
        this.isOnSound && cc.audioEngine.play(this.spin, false, 1);
      },
      playResult: function playResult() {
        this.isOnSound && cc.audioEngine.play(this.result, false, 1);
      },
      playJackpot: function playJackpot() {
        this.isOnSound && cc.audioEngine.play(this.jackpot, false, 1);
      },
      playBackground: function playBackground() {
        this.bgSound = cc.audioEngine.play(this.bg, true, 1);
      },
      toggleBackround: function toggleBackround(isOn) {
        isOn ? cc.audioEngine.resume(this.bgSound) : cc.audioEngine.pause(this.bgSound);
      },
      toggleSound: function toggleSound(isOn) {
        this.isOnSound = isOn;
      }
    });
    cc._RF.pop();
  }, {} ],
  BXHHuItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a1654oFRxB2buzG5o1862Z", "BXHHuItem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
    var _Helper = require("../Utils/Helper");
    function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object["keys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object["defineProperty"](target, property, desc);
        desc = null;
      }
      return desc;
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.");
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, property = _cc$_decorator.property;
    var BXHHuItem = (_dec = property(cc.Node), _dec2 = property(cc.Label), _dec3 = property(cc.Label), 
    _dec4 = property(cc.Label), _dec5 = property(cc.Label), ccclass(_class = (_class2 = function(_cc$Component) {
      _inherits(BXHHuItem, _cc$Component);
      function BXHHuItem() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, BXHHuItem);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BXHHuItem.__proto__ || Object.getPrototypeOf(BXHHuItem)).call.apply(_ref, [ this ].concat(args))), 
        _this), _initDefineProp(_this, "backgroundNode", _descriptor, _this), _initDefineProp(_this, "playerLabel", _descriptor2, _this), 
        _initDefineProp(_this, "timeLabel", _descriptor3, _this), _initDefineProp(_this, "betLabel", _descriptor4, _this), 
        _initDefineProp(_this, "winLabel", _descriptor5, _this), _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(BXHHuItem, [ {
        key: "setPlayerLabel",
        value: function setPlayerLabel(value) {
          this.playerLabel.string = value;
        }
      }, {
        key: "setTimeLabel",
        value: function setTimeLabel(value) {
          this.timeLabel.string = value;
        }
      }, {
        key: "setBetLabel",
        value: function setBetLabel(value) {
          this.betLabel.string = (0, _Helper.numberWithCommas)(value);
        }
      }, {
        key: "setWinLabel",
        value: function setWinLabel(value) {
          this.winLabel.string = (0, _Helper.numberWithCommas)(value);
        }
      }, {
        key: "setBackGroundColor",
        value: function setBackGroundColor(colorHex) {
          var color = cc.Color.BLACK;
          this.backgroundNode.color = color.toHEX(colorHex);
        }
      }, {
        key: "setGrayBackground",
        value: function setGrayBackground() {
          this.setBackGroundColor("#999999");
        }
      }, {
        key: "setLightGrayBackground",
        value: function setLightGrayBackground() {
          this.setBackGroundColor("#666666");
        }
      } ]);
      return BXHHuItem;
    }(cc.Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "backgroundNode", [ _dec ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerLabel", [ _dec2 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "timeLabel", [ _dec3 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "betLabel", [ _dec4 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "winLabel", [ _dec5 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _class2)) || _class);
    exports.default = BXHHuItem;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../Utils/Helper": "Helper"
  } ],
  BaCayJackpotHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc241Ae7whBjZlVHNh3h6nF", "BaCayJackpotHistory");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _Helper = require("../../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
      setData: function setData(historys) {
        this.content.removeAllChildren();
        for (var i = 0; i < historys.length; i++) {
          var item = cc.instantiate(this.historyItem);
          var name = historys[i].displayName;
          item.children[1].getComponent(cc.Label).string = name.length > 15 ? name.substring(0, 13) + "..." : name;
          item.children[2].getComponent(cc.Label).string = historys[i].time;
          item.children[3].getComponent(cc.Label).string = (0, _Helper.moneyFormat)(historys[i].bet);
          item.children[4].getComponent(cc.Label).string = (0, _Helper.moneyFormat)(historys[i].win);
          item.children[5].getComponent(cc.Label).string = historys[i].desc || "";
          i % 2 !== 0 && (item.children[0].active = false);
          item.parent = this.content;
        }
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper",
    "../Common/BaseDialog": "BaseDialog"
  } ],
  BaCayUserHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62668LWE5hK+ZJNVZmUrzDm", "BaCayUserHistory");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _Helper = require("../../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
      setData: function setData(historys) {
        this.content.removeAllChildren();
        for (var i = 0; i < historys.length; i++) {
          var item = cc.instantiate(this.historyItem);
          item.children[1].getComponent(cc.Label).string = historys[i].id || "";
          item.children[2].getComponent(cc.Label).string = historys[i].time;
          item.children[3].getComponent(cc.Label).string = (0, _Helper.moneyFormat)(historys[i].sub);
          item.children[4].getComponent(cc.Label).string = (0, _Helper.moneyFormat)(historys[i].add);
          i % 2 !== 0 && (item.children[0].active = false);
          item.parent = this.content;
        }
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper",
    "../Common/BaseDialog": "BaseDialog"
  } ],
  BaseDialog: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18481v6lAtHw6U//r/TTlKW", "BaseDialog");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = cc.Class({
      extends: cc.Component,
      properties: {
        isUseShowHideAnim: {
          default: true
        }
      },
      onLoad: function onLoad() {
        this.createAnims();
      },
      createAnims: function createAnims() {
        this.isUseShowHideAnim && (this.hideAnim || (this.hideAnim = cc.sequence(cc.spawn(cc.scaleTo(.2, 0, 0), cc.moveTo(.2, 0, -cc.winSize.height / 2)), cc.callFunc(function() {}, this))));
      },
      resetPos: function resetPos() {
        this.node.setPosition(0, 0);
        this.node.scaleX = 1;
        this.node.scaleY = 1;
      },
      show: function show() {
        this.createAnims();
        this.refreshData && this.refreshData();
        this.resetPos();
        this.node.active = true;
        this.isShow = true;
      },
      hide: function hide() {
        if (this.isUseShowHideAnim) {
          this.createAnims();
          this.node.runAction(cc.sequence(this.hideAnim, cc.delayTime(.1), cc.callFunc(function() {
            this.node.active = false;
            this.isShow = false;
          }, this)));
        } else this.node.active = false;
      },
      setData: function setData(data) {},
      refreshData: function refreshData() {},
      onClickClose: function onClickClose() {
        this.hide();
      }
    });
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  BaseInputBlocker: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4de90UxdfJBE50RJLguU0OR", "BaseInputBlocker");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        isEnableClickOut: {
          default: false
        }
      },
      overlayNode: null,
      onLoad: function onLoad() {},
      start: function start() {},
      show: function show(overlayNode) {
        var _this = this;
        this.node.active = true;
        this.isShow = true;
        this.overlayNode = overlayNode;
        this.isEnableClickOut && this.node.on("touchend", function() {
          _this.onClick();
        });
      },
      hide: function hide() {
        this.node.active = false;
        this.isShow = false;
        this.overlayNode = null;
      },
      onClick: function onClick() {
        this.overlayNode && this.overlayNode.emit("clickOut");
      }
    });
    cc._RF.pop();
  }, {} ],
  BaseListItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d75afLAgs5PoYbKpk9E3kE+", "BaseListItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        lineBackground: {
          default: null,
          type: cc.Node
        },
        isSelectable: {
          default: true
        },
        onSelectHandler: {
          default: null,
          type: cc.Component.EventHandler
        }
      },
      ctor: function ctor() {
        this.data = null;
      },
      setData: function setData(data, index) {
        this.lineBackground && (this.lineBackground.active = index % 2 == 0);
        this.data = data;
        this.onSetData(data, index);
        this.node.active = true;
      },
      onSetData: function onSetData(data) {},
      onClick: function onClick() {},
      onSelect: function onSelect() {},
      onLinked: function onLinked() {}
    });
    cc._RF.pop();
  }, {} ],
  BaseList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "155adbUEylDUb68ZSoNGzcF", "BaseList");
    "use strict";
    var _BaseListItem = require("../Common/BaseListItem");
    var _BaseListItem2 = _interopRequireDefault(_BaseListItem);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        listItemPrefab: {
          default: null,
          type: _BaseListItem2.default
        },
        maxItem: {
          default: -1
        },
        listNode: {
          default: null,
          type: cc.Node
        },
        isCreateItemsOnChange: {
          default: true
        },
        isReuse: {
          default: false
        },
        container: {
          default: null,
          type: cc.Node
        },
        isPaging: {
          default: false
        },
        pageSize: {
          default: 10,
          visible: function visible() {
            return this.isPaging;
          }
        },
        textPage: {
          default: null,
          type: cc.Label,
          visible: function visible() {
            return this.isPaging;
          }
        },
        currentPageNum: {
          default: 0,
          visible: function visible() {
            return this.isPaging;
          }
        }
      },
      ctor: function ctor() {
        this.data = null;
        this.listItemComps = [];
        this.isCreatedItems = false;
      },
      onLoad: function onLoad() {
        this.listItemPrefab.node.active = false;
        this.listNode = this.node;
      },
      start: function start() {},
      setData: function setData(data) {
        this.clear();
        this.data = data;
        this.setFullData(data);
        this.isCreateItemsOnChange && this.createItems();
      },
      setFullData: function setFullData(data) {
        this.fullData = data;
        this.node.emit("data", this.fullData);
      },
      setDataPaging: function setDataPaging(data, pageNum) {
        this.setFullData(data);
        this.isPaging = true;
        this.maxPageNum = Math.ceil(this.fullData.length / this.pageSize);
        this.setPage(pageNum, true);
      },
      setPage: function setPage(pageNum) {
        var isForceChange = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.clear();
        this.currentPageNum = pageNum;
        this.pageOffset = (this.currentPageNum - 1) * this.pageSize;
        this.data = this.fullData.slice(this.pageOffset, this.pageOffset + this.pageSize);
        this.node.emit("page", this.currentPageNum);
        this.isCreateItemsOnChange && this.createItems();
      },
      letNextPage: function letNextPage() {
        if (this.currentPageNum < this.maxPageNum) {
          this.currentPageNum = this.currentPageNum + 1;
          this.setPage(this.currentPageNum);
          this.textPage && (this.textPage.string = this.currentPageNum);
        }
      },
      letPreviousPage: function letPreviousPage() {
        if (this.currentPageNum > 1) {
          this.currentPageNum = this.currentPageNum - 1;
          this.setPage(this.currentPageNum);
          this.textPage && (this.textPage.string = this.currentPageNum);
        }
      },
      recalSize: function recalSize() {
        this.listNode.height = this.listItemPrefab.node.height * this.data.length;
      },
      createItems: function createItems() {
        this.data.forEach(function(listItemData, index) {
          this.isReuse ? index >= this.listItemComps.length || !this.listItemComps[index] ? this.createItemDisplay(listItemData, index) : this.reuseItemDisplay(listItemData, index) : this.createItemDisplay(listItemData, index);
        }, this);
        this.isCreatedItems = true;
      },
      createItemOnDemand: function createItemOnDemand() {},
      createItemDisplay: function createItemDisplay(listItemData, index) {
        var newItemNode = cc.instantiate(this.listItemPrefab.node);
        newItemNode.parent = this.listNode;
        newItemNode.active = true;
        var listItemComp = newItemNode.getComponent(_BaseListItem2.default);
        if (listItemComp) {
          this.listItemComps[index] = listItemComp;
          this.linkItemComp(listItemComp, listItemData, index);
        }
      },
      reuseItemDisplay: function reuseItemDisplay(listItemData, index) {
        var listItemComp = this.listItemComps[index];
        listItemComp.node.active = true;
        listItemComp && this.linkItemComp(listItemComp, listItemData, index);
      },
      linkItemComp: function linkItemComp(listItemComp, listItemData, index) {
        listItemComp.list = this;
        listItemComp.setData(listItemData, index);
        this.createItemInteraction(listItemComp);
        listItemComp.onLinked();
      },
      createItemInteraction: function createItemInteraction(listItemComp) {
        var _this = this;
        listItemComp.node.on("touchend", function() {
          _this.onItemClick(listItemComp);
        });
      },
      clear: function clear() {
        this.data = null;
        if (this.isReuse) this.listItemComps.forEach(function(comp) {
          comp.node.active = false;
        }); else {
          this.listItemComps = [];
          this.listNode.removeAllChildren();
        }
      },
      onItemClick: function onItemClick(item) {},
      onItemLink: function onItemLink(item) {},
      onItemSelect: function onItemSelect(item) {}
    });
    cc._RF.pop();
  }, {
    "../Common/BaseListItem": "BaseListItem"
  } ],
  BasePanelNotification: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c578e8TJ9hOz4pe10kMms2O", "BasePanelNotification");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        textNotification: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.hide();
        this.timeHide = 2;
      },
      start: function start() {},
      show: function show() {
        this.node.active = true;
        this.scheduleOnce(function() {
          this.hide();
        }, this.timeHide);
      },
      hide: function hide() {
        this.node.active = false;
      },
      setText: function setText(text) {
        var isShow = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        var newTimeHide = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.node.active = true;
        this.textNotification.string = text;
        newTimeHide > 0 && (this.timeHide = newTimeHide);
        isShow && this.show();
      }
    });
    cc._RF.pop();
  }, {} ],
  BasePopup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64c1cT61ztD7ofU97Hsw/ki", "BasePopup");
    "use strict";
    var _BaseInputBlocker = require("BaseInputBlocker");
    var _BaseInputBlocker2 = _interopRequireDefault(_BaseInputBlocker);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        blocker: {
          default: null,
          type: _BaseInputBlocker2.default
        }
      },
      ctor: function ctor() {},
      onLoad: function onLoad() {
        this.node.active = false;
      },
      start: function start() {},
      show: function show(callback) {
        this.node.active = true;
        this.isShow = true;
        if (this.blocker) {
          this.blocker.show(this.node);
          this.node.on("clickOut", function() {
            this.hide();
            this.blocker.hide();
          }.bind(this));
        }
        callback && (this.callbackReturnValue = callback);
      },
      returnValue: function returnValue(data) {
        this.hide();
        this.callbackReturnValue && this.callbackReturnValue(data);
      },
      hide: function hide() {
        this.node.active = false;
        this.isShow = false;
        this.blocker && this.blocker.hide();
      }
    });
    cc._RF.pop();
  }, {
    BaseInputBlocker: "BaseInputBlocker"
  } ],
  BaseTabContainer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7771eHFslpKxpTrmZ1VO/4U", "BaseTabContainer");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _BaseTab = require("./BaseTab");
    var _BaseTab2 = _interopRequireDefault(_BaseTab);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.default = cc.Class({
      extends: cc.Component,
      properties: {
        tabs: {
          default: [],
          type: _BaseTab2.default
        },
        currentTab: {
          default: null,
          type: _BaseTab2.default
        }
      },
      onLoad: function onLoad() {
        if (this.tabs) {
          if (this.tabs.length > 1 && !this.currentTab) {
            this.currentTab = this.tabs[0];
            this.showTab(this.currentTab);
          }
          this.tabs.forEach(function(aTab) {
            this.linkTab(aTab);
            aTab != this.currentTab ? this.deSelectTab(aTab) : aTab.onSelected();
          }.bind(this));
          this.showTab(this.currentTab);
        }
      },
      linkTab: function linkTab(aTab) {
        aTab.linkTab(this);
        aTab.tabButton.node.on("touchend", function(event) {
          this.selectTab(aTab);
        }, this);
      },
      selectTab: function selectTab(aTab) {
        if (this.currentTab && this.currentTab != aTab) {
          this.deSelectTab(this.currentTab);
          this.showTab(aTab);
          this.currentTab = aTab;
          aTab.onSelected();
        }
      },
      deSelectTab: function deSelectTab(aTab, next) {
        this.hideTab(aTab);
        aTab.onDeselected();
        next && next();
      },
      showTab: function showTab(aTab) {
        aTab.tabContentNode && (aTab.tabContentNode.active = true);
      },
      hideTab: function hideTab(aTab) {
        aTab.tabContentNode && (aTab.tabContentNode.active = false);
      },
      tabHandle: function tabHandle(index) {
        for (var i = 0; i < this.tabs.length; i++) if (index == i) {
          var tab = this.tabs[i];
          this.selectTab(tab);
        }
      }
    });
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "./BaseTab": "BaseTab"
  } ],
  BaseTab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9df9YJk8VC7JReUOh2ICXS", "BaseTab");
    "use strict";
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
      onDeselected: function onDeselected() {
        if (this.tabButton) {
          this.isShow = false;
          this.tabButton.getComponent(cc.Sprite).spriteFrame = this.spriteNormal;
        }
      },
      onSelected: function onSelected() {
        if (this.tabButton) {
          this.isShow = true;
          this.tabButton.getComponent(cc.Sprite).spriteFrame = this.spriteSelected;
        }
      },
      linkTab: function linkTab(parent) {
        this.parent = parent;
      }
    });
    cc._RF.pop();
  }, {} ],
  BauCuaDoor: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d4b2ffpLhtH7YKKzOB4WRf+", "BauCuaDoor");
    "use strict";
    var _Helper = require("../../Utils/Helper");
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
        }
      },
      reset: function reset() {
        this.txtUserBet.string = 0;
        this.txtTotalBet.string = 0;
        this.light.stop("Light");
        this.light.node.active = false;
      },
      setTotalBet: function setTotalBet(bet) {
        this.txtTotalBet.string = (0, _Helper.moneyFormat)(bet, true);
      },
      setUserBet: function setUserBet(bet) {
        this.txtUserBet.string = (0, _Helper.moneyFormat)(bet || 0, true);
      },
      setWin: function setWin() {
        this.light.node.active = true;
        this.light.play("Light");
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper"
  } ],
  BauCuaHistoryItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04a59AlP/RIwoBt8eDewL/h", "BauCuaHistoryItem");
    "use strict";
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
      setData: function setData(history) {
        for (var i = 0; i < this.listDice.length; i++) {
          var dice = this.listDice[i];
          dice.spriteFrame = this.listSprite[history.faces[i] - 1];
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  BauCuaTopUserItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e2d2R5N+RGopzQBSOEw9TH", "BauCuaTopUserItem");
    "use strict";
    var _Helper = require("../../Utils/Helper");
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
      setData: function setData(_rank, data) {
        this.rank.string = _rank;
        this.fullname.string = data.fullname;
        this.gold.string = (0, _Helper.moneyFormat)(data.gold, true);
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper"
  } ],
  BetPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f4adcWLRdZMMp/T0QDudM+N", "BetPanel");
    "use strict";
    var _Helper = require("../../Utils/Helper");
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
      onLoad: function onLoad() {
        this.setNumberGroup();
      },
      show: function show(potId) {
        this.pot != potId && this.resetBet();
        this.node.active = true;
        this.pot = potId;
      },
      setMinMaxValue: function setMinMaxValue(minBet, maxBet) {
        if (this.minCoinPerBet) return;
        this.minCoinPerBet = minBet;
        this.maxCoinPerBet = maxBet;
        this.setValueGroup(this.minCoinPerBet, this.maxCoinPerBet);
      },
      setValueGroup: function setValueGroup(minBet, maxBet) {
        var _this = this;
        this.valueBets = [ 1, 5, 10, 50, 100, 500, 1e3 ];
        var _loop = function _loop(i) {
          var btn = _this.listValueBtn[i];
          var value = i == _this.listValueBtn.length - 1 ? maxBet : minBet * _this.valueBets[i];
          btn.getComponentInChildren(cc.Label).string = (0, _Helper.moneyFormat)(value, true);
          btn.on(cc.Node.EventType.TOUCH_START, function(event) {
            _this.valueClick(value);
          });
        };
        for (var i = 0; i < this.listValueBtn.length; i++) _loop(i);
      },
      valueClick: function valueClick(value) {
        var currentText = 1 == this.pot ? this.textInputTai : this.textInputXiu;
        var currentBet = (0, _Helper.moneyToInt)(currentText.string);
        currentBet += value;
        currentText.string = (0, _Helper.moneyFormat)(currentBet);
      },
      cancelClick: function cancelClick() {
        this.resetBet();
        this.node.active = false;
      },
      resetBet: function resetBet() {
        this.textInputTai.string = "0";
        this.textInputXiu.string = "0";
      },
      changeNumClick: function changeNumClick() {
        if (this.valueGroup.active) {
          this.valueGroup.active = false;
          this.numberGroup.active = true;
          this.textBtnChange.string = "Ch\u1ecdn nhanh";
        } else {
          this.valueGroup.active = true;
          this.numberGroup.active = false;
          this.textBtnChange.string = "S\u1ed1 kh\xe1c";
        }
        this.resetBet();
      },
      setNumberGroup: function setNumberGroup() {
        var _this2 = this;
        var _loop2 = function _loop2(i) {
          var btn = _this2.listNumberBtn[i];
          i == _this2.listNumberBtn.length - 1 ? btn.on(cc.Node.EventType.TOUCH_START, function(event) {
            _this2.deleteNumber();
          }) : i == _this2.listNumberBtn.length - 2 ? btn.on(cc.Node.EventType.TOUCH_START, function(event) {
            _this2.numberClick("000");
          }) : btn.on(cc.Node.EventType.TOUCH_START, function(event) {
            _this2.numberClick(i);
          });
        };
        for (var i = 0; i < this.listNumberBtn.length; i++) _loop2(i);
      },
      numberClick: function numberClick(num) {
        var currentText = 1 == this.pot ? this.textInputTai : this.textInputXiu;
        var currentBet = (0, _Helper.moneyToInt)(currentText.string);
        var updateBet = currentBet + "" + num;
        currentText.string = (0, _Helper.moneyFormat)(parseInt(updateBet));
      },
      deleteNumber: function deleteNumber() {
        var currentText = 1 == this.pot ? this.textInputTai : this.textInputXiu;
        var currentBet = (0, _Helper.moneyToInt)(currentText.string);
        if (0 == currentBet) return;
        var updateBet = currentBet.toString().slice(0, -1);
        currentText.string = (0, _Helper.moneyFormat)("" == updateBet ? 0 : parseInt(updateBet));
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper"
  } ],
  BetTableController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c8fflEv7lNFaQaxZNUf/xd", "BetTableController");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _dec, _class, _desc, _value, _class2, _descriptor;
    function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object["keys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object["defineProperty"](target, property, desc);
        desc = null;
      }
      return desc;
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.");
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, property = _cc$_decorator.property;
    var BetTableController = (_dec = property(cc.Node), ccclass(_class = (_class2 = function(_cc$Component) {
      _inherits(BetTableController, _cc$Component);
      function BetTableController() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, BetTableController);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BetTableController.__proto__ || Object.getPrototypeOf(BetTableController)).call.apply(_ref, [ this ].concat(args))), 
        _this), _initDefineProp(_this, "betIconContainer", _descriptor, _this), _this.listBetButtons = [], 
        _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(BetTableController, [ {
        key: "onLoad",
        value: function onLoad() {
          this.listBetButtons = this.betIconContainer.children;
        }
      }, {
        key: "chooseList",
        value: function chooseList() {
          var _this2 = this;
          var lines = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.chooseNone();
          lines.forEach(function(line) {
            return _this2.selectSlot(line - 1);
          }, this);
        }
      }, {
        key: "chooseAll",
        value: function chooseAll() {
          for (var index = 0; index < this.listBetButtons.length; index++) this.selectSlot(index);
        }
      }, {
        key: "chooseOdd",
        value: function chooseOdd() {
          for (var index = 0; index < this.listBetButtons.length; index += 2) {
            this.disSelectSlot(index);
            index < this.listBetButtons.length && this.selectSlot(index + 1);
          }
        }
      }, {
        key: "chooseEven",
        value: function chooseEven() {
          for (var index = 0; index < this.listBetButtons.length; index += 2) {
            this.selectSlot(index);
            index < this.listBetButtons.length && this.disSelectSlot(index + 1);
          }
        }
      }, {
        key: "chooseNone",
        value: function chooseNone() {
          for (var index = 0; index < this.listBetButtons.length; index++) this.disSelectSlot(index);
        }
      }, {
        key: "chooseOne",
        value: function chooseOne(selected, index) {
          selected ? this.disSelectSlot(index) : this.selectSlot(index);
        }
      }, {
        key: "selectSlot",
        value: function selectSlot(index) {
          this.listBetButtons[index].color = cc.Color.YELLOW;
        }
      }, {
        key: "disSelectSlot",
        value: function disSelectSlot(index) {
          this.listBetButtons[index].color = cc.Color.WHITE;
        }
      } ]);
      return BetTableController;
    }(cc.Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "betIconContainer", [ _dec ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _class2)) || _class);
    exports.default = BetTableController;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  BigWinEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6a92l+3Z9IeKvkG7ldmWBj", "BigWinEffect");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;
    var _Helper = require("../Utils/Helper");
    function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object["keys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object["defineProperty"](target, property, desc);
        desc = null;
      }
      return desc;
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.");
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, property = _cc$_decorator.property;
    var BigWinEffect = (_dec = property(cc.Node), _dec2 = property(cc.Label), _dec3 = property(cc.Node), 
    ccclass(_class = (_class2 = function(_cc$Component) {
      _inherits(BigWinEffect, _cc$Component);
      function BigWinEffect() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, BigWinEffect);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BigWinEffect.__proto__ || Object.getPrototypeOf(BigWinEffect)).call.apply(_ref, [ this ].concat(args))), 
        _this), _initDefineProp(_this, "spineNode", _descriptor, _this), _initDefineProp(_this, "textJackpot", _descriptor2, _this), 
        _initDefineProp(_this, "textJackpotBg", _descriptor3, _this), _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(BigWinEffect, [ {
        key: "start",
        value: function start() {
          this.textJackpot.string = "0";
        }
      }, {
        key: "show",
        value: function show(jackpotValue) {
          this.spineNode.active = true;
          this.textJackpotBg.active = true;
          (0, _Helper.runNumber)(this.textJackpot, jackpotValue);
        }
      }, {
        key: "hide",
        value: function hide() {
          this.spineNode.active = false;
          this.textJackpotBg.active = false;
          this.textJackpot.string = "0";
        }
      } ]);
      return BigWinEffect;
    }(cc.Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "spineNode", [ _dec ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "textJackpot", [ _dec2 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "textJackpotBg", [ _dec3 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _class2)) || _class);
    exports.default = BigWinEffect;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../Utils/Helper": "Helper"
  } ],
  ButtonKoin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca17frUZFlGraMWVw59/u6x", "ButtonKoin");
    "use strict";
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
      start: function start() {
        this.detailNode.active = false;
      },
      onShowDetail: function onShowDetail() {
        this.detailNode.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  ButtonToggle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34b349cNFVJmauJqLwdKSe0", "ButtonToggle");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        isOn: {
          default: false
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
      start: function start() {
        var _this = this;
        this.updateState();
        this.node.on("touchend", function() {
          _this.toggle();
        });
      },
      toggle: function toggle() {
        this.isOn = !this.isOn;
        this.updateState();
        this.node.emit("toggle", this.isOn);
      },
      updateState: function updateState() {
        this.isOn ? this.sprite.spriteFrame = this.stateOn : this.sprite.spriteFrame = this.stateOff;
      }
    });
    cc._RF.pop();
  }, {} ],
  1: [ function(require, module, exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len = b64.length;
      if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var validLen = b64.indexOf("=");
      -1 === validLen && (validLen = len);
      var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
      return [ validLen, placeHoldersLen ];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
      for (var i = 0; i < len; i += 4) {
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = 255 & tmp;
      }
      if (2 === placeHoldersLen) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = 255 & tmp;
      }
      if (1 === placeHoldersLen) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = 255 & tmp;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[63 & num];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (255 & uint8[i + 2]);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
      if (1 === extraBytes) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (2 === extraBytes) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  }, {} ],
  2: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      var base64 = require("base64-js");
      var ieee754 = require("ieee754");
      var isArray = require("isarray");
      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      Buffer.TYPED_ARRAY_SUPPORT = void 0 !== global.TYPED_ARRAY_SUPPORT ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
      exports.kMaxLength = kMaxLength();
      function typedArraySupport() {
        try {
          var arr = new Uint8Array(1);
          arr.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function() {
              return 42;
            }
          };
          return 42 === arr.foo() && "function" === typeof arr.subarray && 0 === arr.subarray(1, 1).byteLength;
        } catch (e) {
          return false;
        }
      }
      function kMaxLength() {
        return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function createBuffer(that, length) {
        if (kMaxLength() < length) throw new RangeError("Invalid typed array length");
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = new Uint8Array(length);
          that.__proto__ = Buffer.prototype;
        } else {
          null === that && (that = new Buffer(length));
          that.length = length;
        }
        return that;
      }
      function Buffer(arg, encodingOrOffset, length) {
        if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) return new Buffer(arg, encodingOrOffset, length);
        if ("number" === typeof arg) {
          if ("string" === typeof encodingOrOffset) throw new Error("If encoding is specified then the first argument must be a string");
          return allocUnsafe(this, arg);
        }
        return from(this, arg, encodingOrOffset, length);
      }
      Buffer.poolSize = 8192;
      Buffer._augment = function(arr) {
        arr.__proto__ = Buffer.prototype;
        return arr;
      };
      function from(that, value, encodingOrOffset, length) {
        if ("number" === typeof value) throw new TypeError('"value" argument must not be a number');
        if ("undefined" !== typeof ArrayBuffer && value instanceof ArrayBuffer) return fromArrayBuffer(that, value, encodingOrOffset, length);
        if ("string" === typeof value) return fromString(that, value, encodingOrOffset);
        return fromObject(that, value);
      }
      Buffer.from = function(value, encodingOrOffset, length) {
        return from(null, value, encodingOrOffset, length);
      };
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        Buffer.prototype.__proto__ = Uint8Array.prototype;
        Buffer.__proto__ = Uint8Array;
        "undefined" !== typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true
        });
      }
      function assertSize(size) {
        if ("number" !== typeof size) throw new TypeError('"size" argument must be a number');
        if (size < 0) throw new RangeError('"size" argument must not be negative');
      }
      function alloc(that, size, fill, encoding) {
        assertSize(size);
        if (size <= 0) return createBuffer(that, size);
        if (void 0 !== fill) return "string" === typeof encoding ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
        return createBuffer(that, size);
      }
      Buffer.alloc = function(size, fill, encoding) {
        return alloc(null, size, fill, encoding);
      };
      function allocUnsafe(that, size) {
        assertSize(size);
        that = createBuffer(that, size < 0 ? 0 : 0 | checked(size));
        if (!Buffer.TYPED_ARRAY_SUPPORT) for (var i = 0; i < size; ++i) that[i] = 0;
        return that;
      }
      Buffer.allocUnsafe = function(size) {
        return allocUnsafe(null, size);
      };
      Buffer.allocUnsafeSlow = function(size) {
        return allocUnsafe(null, size);
      };
      function fromString(that, string, encoding) {
        "string" === typeof encoding && "" !== encoding || (encoding = "utf8");
        if (!Buffer.isEncoding(encoding)) throw new TypeError('"encoding" must be a valid string encoding');
        var length = 0 | byteLength(string, encoding);
        that = createBuffer(that, length);
        var actual = that.write(string, encoding);
        actual !== length && (that = that.slice(0, actual));
        return that;
      }
      function fromArrayLike(that, array) {
        var length = array.length < 0 ? 0 : 0 | checked(array.length);
        that = createBuffer(that, length);
        for (var i = 0; i < length; i += 1) that[i] = 255 & array[i];
        return that;
      }
      function fromArrayBuffer(that, array, byteOffset, length) {
        array.byteLength;
        if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("'offset' is out of bounds");
        if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("'length' is out of bounds");
        array = void 0 === byteOffset && void 0 === length ? new Uint8Array(array) : void 0 === length ? new Uint8Array(array, byteOffset) : new Uint8Array(array, byteOffset, length);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = array;
          that.__proto__ = Buffer.prototype;
        } else that = fromArrayLike(that, array);
        return that;
      }
      function fromObject(that, obj) {
        if (Buffer.isBuffer(obj)) {
          var len = 0 | checked(obj.length);
          that = createBuffer(that, len);
          if (0 === that.length) return that;
          obj.copy(that, 0, 0, len);
          return that;
        }
        if (obj) {
          if ("undefined" !== typeof ArrayBuffer && obj.buffer instanceof ArrayBuffer || "length" in obj) {
            if ("number" !== typeof obj.length || isnan(obj.length)) return createBuffer(that, 0);
            return fromArrayLike(that, obj);
          }
          if ("Buffer" === obj.type && isArray(obj.data)) return fromArrayLike(that, obj.data);
        }
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }
      function checked(length) {
        if (length >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
        return 0 | length;
      }
      function SlowBuffer(length) {
        +length != length && (length = 0);
        return Buffer.alloc(+length);
      }
      Buffer.isBuffer = function isBuffer(b) {
        return !!(null != b && b._isBuffer);
      };
      Buffer.compare = function compare(a, b) {
        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError("Arguments must be Buffers");
        if (a === b) return 0;
        var x = a.length;
        var y = b.length;
        for (var i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      Buffer.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
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
          return true;

         default:
          return false;
        }
      };
      Buffer.concat = function concat(list, length) {
        if (!isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === list.length) return Buffer.alloc(0);
        var i;
        if (void 0 === length) {
          length = 0;
          for (i = 0; i < list.length; ++i) length += list[i].length;
        }
        var buffer = Buffer.allocUnsafe(length);
        var pos = 0;
        for (i = 0; i < list.length; ++i) {
          var buf = list[i];
          if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
          buf.copy(buffer, pos);
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer.isBuffer(string)) return string.length;
        if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) return string.byteLength;
        "string" !== typeof string && (string = "" + string);
        var len = string.length;
        if (0 === len) return 0;
        var loweredCase = false;
        for (;;) switch (encoding) {
         case "ascii":
         case "latin1":
         case "binary":
          return len;

         case "utf8":
         case "utf-8":
         case void 0:
          return utf8ToBytes(string).length;

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return 2 * len;

         case "hex":
          return len >>> 1;

         case "base64":
          return base64ToBytes(string).length;

         default:
          if (loweredCase) return utf8ToBytes(string).length;
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
        }
      }
      Buffer.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        var loweredCase = false;
        (void 0 === start || start < 0) && (start = 0);
        if (start > this.length) return "";
        (void 0 === end || end > this.length) && (end = this.length);
        if (end <= 0) return "";
        end >>>= 0;
        start >>>= 0;
        if (end <= start) return "";
        encoding || (encoding = "utf8");
        while (true) switch (encoding) {
         case "hex":
          return hexSlice(this, start, end);

         case "utf8":
         case "utf-8":
          return utf8Slice(this, start, end);

         case "ascii":
          return asciiSlice(this, start, end);

         case "latin1":
         case "binary":
          return latin1Slice(this, start, end);

         case "base64":
          return base64Slice(this, start, end);

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return utf16leSlice(this, start, end);

         default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
        }
      }
      Buffer.prototype._isBuffer = true;
      function swap(b, n, m) {
        var i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer.prototype.swap16 = function swap16() {
        var len = this.length;
        if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var i = 0; i < len; i += 2) swap(this, i, i + 1);
        return this;
      };
      Buffer.prototype.swap32 = function swap32() {
        var len = this.length;
        if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer.prototype.swap64 = function swap64() {
        var len = this.length;
        if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer.prototype.toString = function toString() {
        var length = 0 | this.length;
        if (0 === length) return "";
        if (0 === arguments.length) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer.prototype.equals = function equals(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
        if (this === b) return true;
        return 0 === Buffer.compare(this, b);
      };
      Buffer.prototype.inspect = function inspect() {
        var str = "";
        var max = exports.INSPECT_MAX_BYTES;
        if (this.length > 0) {
          str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
          this.length > max && (str += " ... ");
        }
        return "<Buffer " + str + ">";
      };
      Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (!Buffer.isBuffer(target)) throw new TypeError("Argument must be a Buffer");
        void 0 === start && (start = 0);
        void 0 === end && (end = target ? target.length : 0);
        void 0 === thisStart && (thisStart = 0);
        void 0 === thisEnd && (thisEnd = this.length);
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
        if (thisStart >= thisEnd && start >= end) return 0;
        if (thisStart >= thisEnd) return -1;
        if (start >= end) return 1;
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        var x = thisEnd - thisStart;
        var y = end - start;
        var len = Math.min(x, y);
        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start, end);
        for (var i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (0 === buffer.length) return -1;
        if ("string" === typeof byteOffset) {
          encoding = byteOffset;
          byteOffset = 0;
        } else byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648);
        byteOffset = +byteOffset;
        isNaN(byteOffset) && (byteOffset = dir ? 0 : buffer.length - 1);
        byteOffset < 0 && (byteOffset = buffer.length + byteOffset);
        if (byteOffset >= buffer.length) {
          if (dir) return -1;
          byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (!dir) return -1;
          byteOffset = 0;
        }
        "string" === typeof val && (val = Buffer.from(val, encoding));
        if (Buffer.isBuffer(val)) {
          if (0 === val.length) return -1;
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        }
        if ("number" === typeof val) {
          val &= 255;
          if (Buffer.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf) return dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        var indexSize = 1;
        var arrLength = arr.length;
        var valLength = val.length;
        if (void 0 !== encoding) {
          encoding = String(encoding).toLowerCase();
          if ("ucs2" === encoding || "ucs-2" === encoding || "utf16le" === encoding || "utf-16le" === encoding) {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i) {
          return 1 === indexSize ? buf[i] : buf.readUInt16BE(i * indexSize);
        }
        var i;
        if (dir) {
          var foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, -1 === foundIndex ? 0 : i - foundIndex)) {
            -1 === foundIndex && (foundIndex = i);
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            -1 !== foundIndex && (i -= i - foundIndex);
            foundIndex = -1;
          }
        } else {
          byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength);
          for (i = byteOffset; i >= 0; i--) {
            var found = true;
            for (var j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
            if (found) return i;
          }
        }
        return -1;
      }
      Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
        return -1 !== this.indexOf(val, byteOffset, encoding);
      };
      Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        var remaining = buf.length - offset;
        if (length) {
          length = Number(length);
          length > remaining && (length = remaining);
        } else length = remaining;
        var strLen = string.length;
        if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
        length > strLen / 2 && (length = strLen / 2);
        for (var i = 0; i < length; ++i) {
          var parsed = parseInt(string.substr(2 * i, 2), 16);
          if (isNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function latin1Write(buf, string, offset, length) {
        return asciiWrite(buf, string, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer.prototype.write = function write(string, offset, length, encoding) {
        if (void 0 === offset) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (void 0 === length && "string" === typeof offset) {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else {
          if (!isFinite(offset)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          offset |= 0;
          if (isFinite(length)) {
            length |= 0;
            void 0 === encoding && (encoding = "utf8");
          } else {
            encoding = length;
            length = void 0;
          }
        }
        var remaining = this.length - offset;
        (void 0 === length || length > remaining) && (length = remaining);
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        encoding || (encoding = "utf8");
        var loweredCase = false;
        for (;;) switch (encoding) {
         case "hex":
          return hexWrite(this, string, offset, length);

         case "utf8":
         case "utf-8":
          return utf8Write(this, string, offset, length);

         case "ascii":
          return asciiWrite(this, string, offset, length);

         case "latin1":
         case "binary":
          return latin1Write(this, string, offset, length);

         case "base64":
          return base64Write(this, string, offset, length);

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return ucs2Write(this, string, offset, length);

         default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
        }
      };
      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        return 0 === start && end === buf.length ? base64.fromByteArray(buf) : base64.fromByteArray(buf.slice(start, end));
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        var res = [];
        var i = start;
        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
             case 1:
              firstByte < 128 && (codePoint = firstByte);
              break;

             case 2:
              secondByte = buf[i + 1];
              if (128 === (192 & secondByte)) {
                tempCodePoint = (31 & firstByte) << 6 | 63 & secondByte;
                tempCodePoint > 127 && (codePoint = tempCodePoint);
              }
              break;

             case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if (128 === (192 & secondByte) && 128 === (192 & thirdByte)) {
                tempCodePoint = (15 & firstByte) << 12 | (63 & secondByte) << 6 | 63 & thirdByte;
                tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint);
              }
              break;

             case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if (128 === (192 & secondByte) && 128 === (192 & thirdByte) && 128 === (192 & fourthByte)) {
                tempCodePoint = (15 & firstByte) << 18 | (63 & secondByte) << 12 | (63 & thirdByte) << 6 | 63 & fourthByte;
                tempCodePoint > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint);
              }
            }
          }
          if (null === codePoint) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | 1023 & codePoint;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        var len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
        var res = "";
        var i = 0;
        while (i < len) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        return res;
      }
      function asciiSlice(buf, start, end) {
        var ret = "";
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) ret += String.fromCharCode(127 & buf[i]);
        return ret;
      }
      function latin1Slice(buf, start, end) {
        var ret = "";
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
        return ret;
      }
      function hexSlice(buf, start, end) {
        var len = buf.length;
        (!start || start < 0) && (start = 0);
        (!end || end < 0 || end > len) && (end = len);
        var out = "";
        for (var i = start; i < end; ++i) out += toHex(buf[i]);
        return out;
      }
      function utf16leSlice(buf, start, end) {
        var bytes = buf.slice(start, end);
        var res = "";
        for (var i = 0; i < bytes.length; i += 2) res += String.fromCharCode(bytes[i] + 256 * bytes[i + 1]);
        return res;
      }
      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~~start;
        end = void 0 === end ? len : ~~end;
        if (start < 0) {
          start += len;
          start < 0 && (start = 0);
        } else start > len && (start = len);
        if (end < 0) {
          end += len;
          end < 0 && (end = 0);
        } else end > len && (end = len);
        end < start && (end = start);
        var newBuf;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          newBuf = this.subarray(start, end);
          newBuf.__proto__ = Buffer.prototype;
        } else {
          var sliceLen = end - start;
          newBuf = new Buffer(sliceLen, void 0);
          for (var i = 0; i < sliceLen; ++i) newBuf[i] = this[i + start];
        }
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
        if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
        return val;
      };
      Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset + --byteLength];
        var mul = 1;
        while (byteLength > 0 && (mul *= 256)) val += this[offset + --byteLength] * mul;
        return val;
      };
      Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        noAssert || checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + 16777216 * this[offset + 3];
      };
      Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return 16777216 * this[offset] + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
        mul *= 128;
        val >= mul && (val -= Math.pow(2, 8 * byteLength));
        return val;
      };
      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];
        while (i > 0 && (mul *= 256)) val += this[offset + --i] * mul;
        mul *= 128;
        val >= mul && (val -= Math.pow(2, 8 * byteLength));
        return val;
      };
      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
        noAssert || checkOffset(offset, 1, this.length);
        if (!(128 & this[offset])) return this[offset];
        return -1 * (255 - this[offset] + 1);
      };
      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return 32768 & val ? 4294901760 | val : val;
      };
      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return 32768 & val ? 4294901760 | val : val;
      };
      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        noAssert || checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        noAssert || checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
      }
      Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        byteLength |= 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var mul = 1;
        var i = 0;
        this[offset] = 255 & value;
        while (++i < byteLength && (mul *= 256)) this[offset + i] = value / mul & 255;
        return offset + byteLength;
      };
      Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        byteLength |= 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = 255 & value;
        while (--i >= 0 && (mul *= 256)) this[offset + i] = value / mul & 255;
        return offset + byteLength;
      };
      Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 1, 255, 0);
        Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value));
        this[offset] = 255 & value;
        return offset + 1;
      };
      function objectWriteUInt16(buf, value, offset, littleEndian) {
        value < 0 && (value = 65535 + value + 1);
        for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> 8 * (littleEndian ? i : 1 - i);
      }
      Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
        } else objectWriteUInt16(this, value, offset, true);
        return offset + 2;
      };
      Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = 255 & value;
        } else objectWriteUInt16(this, value, offset, false);
        return offset + 2;
      };
      function objectWriteUInt32(buf, value, offset, littleEndian) {
        value < 0 && (value = 4294967295 + value + 1);
        for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) buf[offset + i] = value >>> 8 * (littleEndian ? i : 3 - i) & 255;
      }
      Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset + 3] = value >>> 24;
          this[offset + 2] = value >>> 16;
          this[offset + 1] = value >>> 8;
          this[offset] = 255 & value;
        } else objectWriteUInt32(this, value, offset, true);
        return offset + 4;
      };
      Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = 255 & value;
        } else objectWriteUInt32(this, value, offset, false);
        return offset + 4;
      };
      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = 255 & value;
        while (++i < byteLength && (mul *= 256)) {
          value < 0 && 0 === sub && 0 !== this[offset + i - 1] && (sub = 1);
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = byteLength - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = 255 & value;
        while (--i >= 0 && (mul *= 256)) {
          value < 0 && 0 === sub && 0 !== this[offset + i + 1] && (sub = 1);
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 1, 127, -128);
        Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value));
        value < 0 && (value = 255 + value + 1);
        this[offset] = 255 & value;
        return offset + 1;
      };
      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
        } else objectWriteUInt16(this, value, offset, true);
        return offset + 2;
      };
      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = 255 & value;
        } else objectWriteUInt16(this, value, offset, false);
        return offset + 2;
      };
      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
          this[offset + 2] = value >>> 16;
          this[offset + 3] = value >>> 24;
        } else objectWriteUInt32(this, value, offset, true);
        return offset + 4;
      };
      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648);
        value < 0 && (value = 4294967295 + value + 1);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = 255 & value;
        } else objectWriteUInt32(this, value, offset, false);
        return offset + 4;
      };
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
        if (offset < 0) throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        noAssert || checkIEEE754(buf, value, offset, 4, 3.4028234663852886e38, -3.4028234663852886e38);
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        noAssert || checkIEEE754(buf, value, offset, 8, 1.7976931348623157e308, -1.7976931348623157e308);
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        start || (start = 0);
        end || 0 === end || (end = this.length);
        targetStart >= target.length && (targetStart = target.length);
        targetStart || (targetStart = 0);
        end > 0 && end < start && (end = start);
        if (end === start) return 0;
        if (0 === target.length || 0 === this.length) return 0;
        if (targetStart < 0) throw new RangeError("targetStart out of bounds");
        if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
        if (end < 0) throw new RangeError("sourceEnd out of bounds");
        end > this.length && (end = this.length);
        target.length - targetStart < end - start && (end = target.length - targetStart + start);
        var len = end - start;
        var i;
        if (this === target && start < targetStart && targetStart < end) for (i = len - 1; i >= 0; --i) target[i + targetStart] = this[i + start]; else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) for (i = 0; i < len; ++i) target[i + targetStart] = this[i + start]; else Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
        return len;
      };
      Buffer.prototype.fill = function fill(val, start, end, encoding) {
        if ("string" === typeof val) {
          if ("string" === typeof start) {
            encoding = start;
            start = 0;
            end = this.length;
          } else if ("string" === typeof end) {
            encoding = end;
            end = this.length;
          }
          if (1 === val.length) {
            var code = val.charCodeAt(0);
            code < 256 && (val = code);
          }
          if (void 0 !== encoding && "string" !== typeof encoding) throw new TypeError("encoding must be a string");
          if ("string" === typeof encoding && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        } else "number" === typeof val && (val &= 255);
        if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
        if (end <= start) return this;
        start >>>= 0;
        end = void 0 === end ? this.length : end >>> 0;
        val || (val = 0);
        var i;
        if ("number" === typeof val) for (i = start; i < end; ++i) this[i] = val; else {
          var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
          var len = bytes.length;
          for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
        }
        return this;
      };
      var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = stringtrim(str).replace(INVALID_BASE64_RE, "");
        if (str.length < 2) return "";
        while (str.length % 4 !== 0) str += "=";
        return str;
      }
      function stringtrim(str) {
        if (str.trim) return str.trim();
        return str.replace(/^\s+|\s+$/g, "");
      }
      function toHex(n) {
        if (n < 16) return "0" + n.toString(16);
        return n.toString(16);
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];
        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                (units -= 3) > -1 && bytes.push(239, 191, 189);
                continue;
              }
              if (i + 1 === length) {
                (units -= 3) > -1 && bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              (units -= 3) > -1 && bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = 65536 + (leadSurrogate - 55296 << 10 | codePoint - 56320);
          } else leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, 63 & codePoint | 128);
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
          } else {
            if (!(codePoint < 1114112)) throw new Error("Invalid code point");
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) byteArray.push(255 & str.charCodeAt(i));
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        var c, hi, lo;
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        for (var i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
        return i;
      }
      function isnan(val) {
        return val !== val;
      }
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    "base64-js": 1,
    ieee754: 4,
    isarray: 3
  } ],
  3: [ function(require, module, exports) {
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return "[object Array]" == toString.call(arr);
    };
  }, {} ],
  4: [ function(require, module, exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (;nBits > 0; e = 256 * e + buffer[offset + i], i += d, nBits -= 8) ;
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (;nBits > 0; m = 256 * m + buffer[offset + i], i += d, nBits -= 8) ;
      if (0 === e) e = 1 - eBias; else {
        if (e === eMax) return m ? NaN : Infinity * (s ? -1 : 1);
        m += Math.pow(2, mLen);
        e -= eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = 23 === mLen ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || Infinity === value) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        value += e + eBias >= 1 ? rt / c : rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e += eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (;mLen >= 8; buffer[offset + i] = 255 & m, i += d, m /= 256, mLen -= 8) ;
      e = e << mLen | m;
      eLen += mLen;
      for (;eLen > 0; buffer[offset + i] = 255 & e, i += d, e /= 256, eLen -= 8) ;
      buffer[offset + i - d] |= 128 * s;
    };
  }, {} ],
  CaoThap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29552NCkH9OD737cljsyPr4", "CaoThap");
    "use strict";
    var _lodash = require("lodash");
    var _Constants = require("../../Utils/Constants");
    var _Helper = require("../../Utils/Helper");
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _JackpotEffect = require("../../SlotGame/JackpotEffect");
    var _JackpotEffect2 = _interopRequireDefault(_JackpotEffect);
    var _BaCayUserHistory = require("../Mini3Kay/BaCayUserHistory");
    var _BaCayUserHistory2 = _interopRequireDefault(_BaCayUserHistory);
    var _BaCayJackpotHistory = require("../Mini3Kay/BaCayJackpotHistory");
    var _BaCayJackpotHistory2 = _interopRequireDefault(_BaCayJackpotHistory);
    var _MultipleFund = require("../GameList/MultipleFund");
    var _MultipleFund2 = _interopRequireDefault(_MultipleFund);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var HIGHLOW_TYPE = {
      SUBSCRIBE_ROOM: 23,
      START_MATCH: 202,
      GET_JACKPOT_HISTORY: 221,
      GET_USER_HISTORY: 222,
      FINISH_MATCH_HL: 237,
      SET_BET: 214
    };
    var HIGHLOW_NOTIFY = {
      HIGHLOW_MATCH_UPDATE: 77,
      HIGHLOW_MATCH_FINISH: 78
    };
    var BUTTON = {
      AN_NON: 0,
      TREN: 1,
      DUOI: 2
    };
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
          type: _BaseDialog2.default
        },
        dialogUserHistory: {
          default: null,
          type: _BaCayUserHistory2.default
        },
        dialogJackpotHistory: {
          default: null,
          type: _BaCayJackpotHistory2.default
        },
        winNode: {
          default: null,
          type: cc.Node
        },
        jackpotEffect: {
          default: null,
          type: _JackpotEffect2.default
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
          type: _MultipleFund2.default
        }
      },
      onLoad: function onLoad() {
        this.listCardNames = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];
        this.listFaces = [ "\u2664", "\u2667", "\u2662", "\u2661" ];
        this.listBets = [ 1e3, 1e4, 5e4, 1e5, 5e5 ];
        this.historyPos = this.historyContent.x;
      },
      start: function start() {
        window.$Global.networkService.on("" + _Constants.REQUEST_TYPE.HIGHLOW_GAMES, this.onMessage.bind(this));
        window.$Global.networkService.on("notify_" + HIGHLOW_NOTIFY.HIGHLOW_MATCH_UPDATE, this.onNotifyUpdate.bind(this));
        window.$Global.networkService.on("notify_" + HIGHLOW_NOTIFY.HIGHLOW_MATCH_FINISH, this.onNotifyFinish.bind(this));
        window.$Global.networkService.on("notify_" + _Constants.NOTIFY_TYPE.NOTIFY_MINI_CHANGED, this.onNotifyMiniChanged.bind(this));
      },
      onDestroy: function onDestroy() {
        window.$Global.networkService.off("" + _Constants.REQUEST_TYPE.HIGHLOW_GAMES);
        window.$Global.networkService.off("notify_" + HIGHLOW_NOTIFY.HIGHLOW_MATCH_UPDATE);
        window.$Global.networkService.off("notify_" + HIGHLOW_NOTIFY.HIGHLOW_MATCH_FINISH);
        window.$Global.networkService.off("notify_" + _Constants.NOTIFY_TYPE.NOTIFY_MINI_CHANGED);
        clearInterval(this.timeCountDown);
        this.timeCountDown = null;
      },
      onMessage: function onMessage(event) {
        var detail = event;
        if (detail.resultCode === _Constants.ResponseResultCode.SUCCESS) {
          if (detail.type === HIGHLOW_TYPE.GET_JACKPOT_HISTORY) this.onJackpotHistoryDone(detail.history); else if (detail.type === HIGHLOW_TYPE.GET_USER_HISTORY) this.onUserHistoryDone(detail.history); else if (detail.type === HIGHLOW_TYPE.START_MATCH) this.onStart(detail); else if (detail.type === HIGHLOW_TYPE.SUBSCRIBE_ROOM) {
            this.updateJackpot(detail.jackpot);
            this.turnOnBetBtn(this.currBetIndexSub);
            this.txtWin.string = (0, _Helper.numberWithDot)(this.listBets[this.currBetIndexSub]);
          }
        } else window.$UIHelper.showToast(detail.desc || detail.content || "");
      },
      onNotifyUpdate: function onNotifyUpdate(event) {
        var data = event.data;
        var lastCard = data.lastCard;
        var cardCount = data.listCard.length;
        this.setTimeCountDown(data.countDown);
        this.roll(lastCard);
        this.txtEatTren.string = (0, _Helper.numberWithDot)(data.highWin);
        this.txtEatDuoi.string = (0, _Helper.numberWithDot)(data.lowWin);
        this.txtWin.string = (0, _Helper.numberWithDot)(data.totalWin);
        1 != lastCard.card && this.onOffButton(BUTTON.TREN, true);
        2 != lastCard.card && this.onOffButton(BUTTON.DUOI, true);
        cardCount > 1 && this.onOffButton(BUTTON.AN_NON, true);
        this.btnPlay.node.active = false;
        this.txtClicktoPlay.active = false;
        this.updateANode(data.listCard);
      },
      onNotifyFinish: function onNotifyFinish(event) {
        var _this = this;
        clearInterval(this.timeCountDown);
        this.timeCountDown = null;
        this.txtTime.string = (0, _Helper.timeFormat)(0);
        if (!this.anNon) {
          this.roll(event.data.lastCard);
          this.updateANode(event.data.listCard);
        }
        this.onOffButton(0, false);
        this.onOffButton(1, false);
        this.onOffButton(2, false);
        setTimeout(function() {
          event.isJackpot ? _this.jackpotEffect.show(event.jackpotAmount) : event.data.totalWin > 0 ? _this.showWinChip(event.data.totalWin) : _this.showLose();
        }, 1e3);
        this.scheduleOnce(function() {
          _this.card.spriteFrame = _this.backCard;
          _this.btnPlay.node.active = true;
          _this.txtClicktoPlay.active = true;
          _this.cleanHistory();
          _this.txtEatTren.string = "";
          _this.txtEatDuoi.string = "";
          _this.txtWin.string = (0, _Helper.numberWithDot)(event.data.bet);
          _this.A_Node.forEach(function(a) {
            a.node.color = cc.Color.GRAY;
          });
        }, 2);
      },
      show: function show() {
        this.node.active = true;
        window.$Global.minigame.isShowCaoThap = true;
        this.sub(-1);
        this.currBetIndexSub = 0;
      },
      close: function close() {
        this.reset();
        this.cleanHistory();
        this.node.active = false;
        window.$Global.minigame.isShowCaoThap = false;
      },
      sub: function sub(amount) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.HIGHLOW_GAMES, {
          type: HIGHLOW_TYPE.SUBSCRIBE_ROOM,
          chipType: 1,
          bet: amount
        });
        this.currentBet = amount;
      },
      reset: function reset() {
        this.onOffButton(0, false);
        this.onOffButton(1, false);
        this.onOffButton(2, false);
      },
      startMatch: function startMatch() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.HIGHLOW_GAMES, {
          type: HIGHLOW_TYPE.START_MATCH
        });
        this.anNon = false;
        this.jackpotEffect.hide();
      },
      onBetChanged: function onBetChanged(event, index) {
        this.sub(this.listBets[index]);
        this.currBetIndexSub = index;
      },
      updateJackpot: function updateJackpot(jackpot) {
        (0, _Helper.runNumber)(this.txtJackpot, jackpot);
      },
      onStart: function onStart(detail) {
        this.setMatchId(detail.matchId);
      },
      setTimeCountDown: function setTimeCountDown(remain) {
        var _this2 = this;
        clearInterval(this.timeCountDown);
        this.timeCountDown = null;
        this.timeRemain = remain;
        this.txtTime.string = (0, _Helper.timeFormat)(this.timeRemain);
        this.timeRemain--;
        this.timeCountDown = setInterval(function() {
          if (_this2.timeRemain >= 0) _this2.txtTime.string = (0, _Helper.timeFormat)(_this2.timeRemain); else {
            clearInterval(_this2.timeCountDown);
            _this2.timeCountDown = null;
          }
          _this2.timeRemain--;
        }, 1e3);
      },
      roll: function roll(lastCard) {
        var count = 0;
        var randomCard = function randomCard() {
          var index = (0, _lodash.random)(0, this.listCards.length - 1, false);
          this.card.spriteFrame = this.listCards[index];
          count++;
          if (count >= 10) {
            this.unschedule(randomCard);
            var resultIndex = 4 * (lastCard.card - 1) + (lastCard.face - 1);
            this.card.spriteFrame = this.listCards[resultIndex];
            this.addHistory(lastCard);
          }
        };
        this.schedule(randomCard, .05);
      },
      onOffButton: function onOffButton(index, isOn) {
        switch (index) {
         case BUTTON.AN_NON:
          this.anNonBtn.getComponent(cc.Sprite).spriteFrame = isOn ? this.anNonSpr[1] : this.anNonSpr[0];
          this.anNonBtn.interactable = isOn;
          break;

         case BUTTON.TREN:
          this.highBtn.getComponent(cc.Sprite).spriteFrame = isOn ? this.highSpr[1] : this.highSpr[0];
          this.highBtn.interactable = isOn;
          break;

         case BUTTON.DUOI:
          this.lowBtn.getComponent(cc.Sprite).spriteFrame = isOn ? this.lowSpr[1] : this.lowSpr[0];
          this.lowBtn.interactable = isOn;
        }
      },
      onAnNonClick: function onAnNonClick() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.HIGHLOW_GAMES, {
          type: HIGHLOW_TYPE.FINISH_MATCH_HL
        });
        this.anNon = true;
      },
      onBetHighLowClick: function onBetHighLowClick(event, pot) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.HIGHLOW_GAMES, {
          type: HIGHLOW_TYPE.SET_BET,
          pot: parseInt(pot)
        });
        this.onOffButton(BUTTON.AN_NON, false);
        this.onOffButton(BUTTON.TREN, false);
        this.onOffButton(BUTTON.DUOI, false);
      },
      showUserHistory: function showUserHistory() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.HIGHLOW_GAMES, {
          type: HIGHLOW_TYPE.GET_USER_HISTORY
        });
        this.dialogUserHistory.show();
      },
      onUserHistoryDone: function onUserHistoryDone(historys) {
        this.dialogUserHistory.setData(historys);
      },
      showJackpotHistory: function showJackpotHistory() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.HIGHLOW_GAMES, {
          type: HIGHLOW_TYPE.GET_JACKPOT_HISTORY
        });
        this.dialogJackpotHistory.show();
      },
      onJackpotHistoryDone: function onJackpotHistoryDone(historys) {
        this.dialogJackpotHistory.setData(historys);
      },
      showGuide: function showGuide() {
        this.dialogGuide.show();
      },
      addHistory: function addHistory(card) {
        var his = new cc.Node();
        var txt = his.addComponent(cc.Label);
        txt.fontSize = 35;
        txt.string = this.listCardNames[card.card - 1] + this.listFaces[card.face - 1];
        his.parent = this.historyContent;
        this.historyContent.childrenCount > 8 && (this.historyContent.x -= his.width);
      },
      cleanHistory: function cleanHistory() {
        this.historyContent.removeAllChildren();
        this.historyContent.x = this.historyPos;
      },
      showWinChip: function showWinChip(chip) {
        this.winNode.active = true;
        this.winNode.children[0].getComponent(cc.Label).string = (0, _Helper.numberWithDot)(chip);
        var hide = function hide() {
          this.winNode.active = false;
        };
        this.winNode.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(hide.bind(this)), cc.callFunc(this.onShowWinDone.bind(this))));
      },
      updateANode: function updateANode(listCard) {
        var _this3 = this;
        var count = 0;
        listCard.forEach(function(card) {
          if (1 === card.card) {
            count++;
            _this3.A_Node[count - 1].node.color = cc.Color.WHITE;
          }
        });
      },
      onShowWinDone: function onShowWinDone() {
        window.$Global.networkService.updateMoneyWithZoneId(_Constants.ZONE_ID.CAO_THAP);
      },
      showLose: function showLose() {
        this.loseNode.active = true;
        var hide = function hide() {
          this.loseNode.active = false;
        };
        this.loseNode.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(hide.bind(this)), cc.callFunc(this.onShowWinDone.bind(this))));
      },
      setMatchId: function setMatchId(id) {
        this.txtId.string = "#" + id;
      },
      turnOnBetBtn: function turnOnBetBtn(index) {
        for (var i = 0; i < this.listSprBtnBets.length; i++) {
          var btn = this.listSprBtnBets[i];
          btn.spriteFrame = i == index ? this.listBtnFrames[1] : this.listBtnFrames[0];
        }
      },
      onNotifyMiniChanged: function onNotifyMiniChanged(event) {
        if (event.zoneId == _Constants.ZONE_ID.CAO_THAP && event.bet == this.currentBet) {
          this.updateJackpot(event.jackpot);
          this.multipleFund.setMultipleFund(event.multipleFund);
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
  ChatController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f0d6cKGQKxJwbFxotg6kWZo", "ChatController");
    "use strict";
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
      start: function start() {
        this.chatPool = new cc.NodePool();
        for (var i = 0; i < 50; i++) {
          var item = cc.instantiate(this.chatItem);
          this.chatPool.put(item);
        }
      },
      sendChat: function sendChat() {
        var _this = this;
        var content = this.chatInput.string.trim();
        if ("" == content) {
          window.$UIHelper.showToast("Nh\u1eadp tin nh\u1eafn chat");
          return;
        }
        window.$Global.userService.sendChat(content).then(function(detail) {
          _this.chatInput.string = "";
          void 0 !== detail.desc && window.$UIHelper.showToast(detail.desc);
        });
      },
      clearChat: function clearChat() {
        this.chatContent.removeAllChildren();
      },
      setData: function setData(msg) {
        var message = msg.message;
        var user = msg.user.displayName;
        var provider = msg.user.providerCode;
        var color = cc.Color.CYAN;
        (provider.includes("admin") || provider.includes("agency")) && (color = cc.Color.RED);
        var chat = this.chatPool.get();
        null === chat && (chat = cc.instantiate(this.chatItem));
        var childrens = chat.children;
        childrens[0].getComponent(cc.Label).string = user + ": ";
        childrens[0].color = color;
        childrens[1].getComponent(cc.Label).string = message;
        chat.parent = this.chatContent;
        var childCount = this.chatContent.childrenCount;
        childCount > 50 && this.chatPool.put(this.chatContent[0]);
      }
    });
    cc._RF.pop();
  }, {} ],
  Config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13e0b6VsrhNZb7uy9Qu7SYA", "Config");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CONFIG = exports.CONFIG = {
      URLS: {
        server: "https://lils.sh/api/game/"
      },
      WS: {
        ws: "ws://lils.sh/websocket",
        wss: "wss://lils.sh/websocket"
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
        underReview: false,
        providerCode: "gamecode",
        APPFBID: "0",
        fanpage: "https://www.facebook.com/",
        otpLink: "",
        hotline1: "N/A",
        downloadURL: "",
        latest_version: "",
        forceDownload: false,
        location: "US",
        gameName: "devip",
        goldName: "Gold"
      },
      FB_APPID: "472075346944053"
    };
    cc._RF.pop();
  }, {} ],
  Constants: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd528ggAfdO9KMm5qU3D1NF", "Constants");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CALL_TYPE = exports.CALL_TYPE = {
      REQUEST: 0,
      RESPONSE: 1,
      UPDATE: 2
    };
    var OS = exports.OS = {
      IOS: 1,
      ANDROID: 2,
      WINDOW_PHONE: 3,
      PC: 4
    };
    var REQUEST_TYPE = exports.REQUEST_TYPE = {
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
      MINI_BACAY_GAMES: 125,
      HIGHLOW_GAMES: 126,
      START_MATCH: 202,
      ADD_BET: 214,
      GET_JACKPOT_HISTORY: 221,
      GET_USER_HISTORY: 222
    };
    var ResponseResultCode = exports.ResponseResultCode = {
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
    };
    var NOTIFY_TYPE = exports.NOTIFY_TYPE = {
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
    };
    var LOGIN_TYPE = exports.LOGIN_TYPE = {
      USER_PASS: 1
    };
    var PAYLOAD_TYPE = exports.PAYLOAD_TYPE = {
      MESSAGE_PACK: 3
    };
    var ZONE_ID = exports.ZONE_ID = {
      SLOT_32: 32,
      SLOT_18: 18,
      SLOT_28: 28,
      MINI_POKER: 22,
      TAI_XIU: 21,
      MINI_BAUCUA: 20,
      XOC_DIA: 33,
      MINI_SLOT_BANCA: 36,
      MINI_BACAY: 38,
      CAO_THAP: 39
    };
    var ZONE_NAME = exports.ZONE_NAME = {
      SLOT_32: "End Game",
      SLOT_18: "Kim B\xecnh Mai",
      SLOT_28: "Kim C\u01b0\u01a1ng",
      MINI_POKER: "Minipoker",
      TAI_XIU: "T\xe0i X\u1ec9u",
      MINI_BAUCUA: "B\u1ea7u Cua",
      XOC_DIA: "X\xf3c \u0110\u0129a",
      MINI_SLOT_BANCA: "Mini Kim C\u01b0\u01a1ng",
      MINI_BACAY: "Ba C\xe2y",
      CAO_THAP: "Cao Th\u1ea5p"
    };
    var MONEY_TYPE = exports.MONEY_TYPE = {
      GOLD: 1
    };
    var GAMES = exports.GAMES = {
      CARD: 1,
      CASINO: 2,
      SLOT: 4
    };
    var DEAL_TYPE = exports.DEAL_TYPE = {
      FREE_TRY: 0,
      REAL_SPIN: 1
    };
    var MINI_POKER_STATE = exports.MINI_POKER_STATE = {
      INIT: 0,
      CAN_BET: 1,
      SPIN: 2,
      RESULT: 3,
      WAIT_NEXT: 4
    };
    var MINI_POKER_ACTION_TYPE = exports.MINI_POKER_ACTION_TYPE = {
      SUBSCRIBE_ROOM: 23,
      UNSUBSCRIBE_ROOM: 24,
      START_MATCH: 202,
      ADD_BET: 214,
      GET_JACKPOT_HISTORY: 221,
      GET_USER_HISTORY: 222
    };
    var TAI_XIU_ACTION_TYPE = exports.TAI_XIU_ACTION_TYPE = {
      SUBSCRIBE_ROOM: 23,
      UNSUBSCRIBE_ROOM: 24,
      ADD_BET: 214,
      GET_ROOM_HISTORY: 221,
      GET_USER_HISTORY: 222,
      GET_MATCH_HISTORY: 231,
      GET_TOP_WIN_DAILY: 232,
      GET_TOP_GAME: 236
    };
    var TAI_XIU_STATE = exports.TAI_XIU_STATE = {
      INIT: -1,
      BET: 0,
      BALANCE: 1,
      END_MATCH: 2,
      WAIT_NEW_MATCH: 8
    };
    var TAI_XIU_CHOICE = exports.TAI_XIU_CHOICE = {
      TAI: 1,
      XIU: 0
    };
    var TAI_XIU_NOTIFY_TYPE = exports.TAI_XIU_NOTIFY_TYPE = {
      UPDATE_INFO: 1,
      START_MATCH: 2,
      END_MATCH: 3,
      BALANCE: 7
    };
    var URLS = exports.URLS = {
      DOWNLOAD_ANDROID_2FA: "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2",
      DOWNLOAD_IOS_2FA: "https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8"
    };
    var UpdateMoneyTypeCode = exports.UpdateMoneyTypeCode = {
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
    };
    var GiftCodeResultCode = exports.GiftCodeResultCode = {
      SUCCESS: 0,
      GIFT_CODE_NOT_EXITS: 43,
      GIFT_CODE_USED: 44
    };
    var TransferGoldResultCode = exports.TransferGoldResultCode = {
      SUCCESS: 0,
      TRANSFER_IN_PLAY_MOD: 33,
      TRANSFER_SMALLER_MIN_VALUE: 34,
      TRANSFER_OVER_MAX_VALUE: 35,
      INVALID_REG_USERNAME: 19,
      INVALID_PASSWORD: 18,
      TRANSFER_NOT_OWN_AGENCY: 101,
      TRANSFER_NOT_OWN_PLAYER: 102
    };
    var CONFIG_TYPE = exports.CONFIG_TYPE = {
      TRANSFER_GOLD: 2
    };
    var CONFIG_GOLD = exports.CONFIG_GOLD = {
      goldName: "Gold",
      gameName: "GAMENAME"
    };
    var SYSTEM_MESSAGE_TYPE = exports.SYSTEM_MESSAGE_TYPE = {
      NEW: 1,
      GUIDE: 2,
      WELCOME: 3,
      EVENT: 4,
      EVENT_GROUP: 5
    };
    cc._RF.pop();
  }, {} ],
  DialogBauCuaHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "45bbeqrPxBF3ZEq6B4ZvBMt", "DialogBauCuaHistory");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
      setData: function setData(data) {
        var _this = this;
        this.content.removeAllChildren();
        data.forEach(function(history) {
          var hisItem = cc.instantiate(_this.item);
          hisItem.getComponent("HisItem").setData(history);
          hisItem.parent = _this.content;
        });
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseDialog": "BaseDialog"
  } ],
  DialogBauCuaTop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e94bCwnMZHLbBNW1uodNT1", "DialogBauCuaTop");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
      setData: function setData(data) {
        this.content.removeAllChildren();
        for (var i = 0; i < data.length; i++) {
          var topItem = cc.instantiate(this.item);
          topItem.getComponent("BauCuaTopUserItem").setData(i + 1, data[i]);
          topItem.parent = this.content;
        }
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseDialog": "BaseDialog"
  } ],
  DialogChat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8e57szSsVBCbQSr8IEvvlk", "DialogChat");
    "use strict";
    cc._RF.pop();
  }, {} ],
  DialogMiniPokerHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d2e04i1i9OiItOMLjz7LG0", "DialogMiniPokerHistory");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
      refreshData: function refreshData() {},
      setData: function setData(data) {
        this.listHistory.removeAllChildren();
        for (var index = 0; index < data.length; index++) {
          var element = data[index];
          var item = cc.instantiate(this.historyItem);
          item.getComponent("MiniPokerHistoryItem").setData(index, element);
          item.parent = this.listHistory;
        }
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseDialog": "BaseDialog"
  } ],
  DialogMiniPokerHuHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68908+r3yRKooR0P1uR36bR", "DialogMiniPokerHuHistory");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
      setData: function setData(data) {
        for (var index = 0; index < data.length; index++) {
          var element = data[index];
          var item = cc.instantiate(this.historyItem);
          item.getComponent("MiniPokerHuHistoryItem").setData(index, element);
          item.parent = this.listHistory;
        }
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseDialog": "BaseDialog"
  } ],
  DialogTaiXiuDuaTop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b32eoqx4xFeJ2xFfoJEF09", "DialogTaiXiuDuaTop");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _Constants = require("../../Utils/Constants");
    var _Helper = require("../../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TopType = {
      LOSE: 0,
      WIN: 1
    };
    cc.Class({
      extends: _BaseDialog2.default,
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
      refreshData: function refreshData() {
        this.getTop(TopType.WIN);
      },
      clickTopWin: function clickTopWin() {
        this.topWin.active = true;
        this.topLose.active = false;
        this.rule.active = false;
        this.getTop(TopType.WIN);
      },
      clickTopLose: function clickTopLose() {
        this.topWin.active = false;
        this.topLose.active = true;
        this.rule.active = false;
        this.getTop(TopType.LOSE);
      },
      clickRule: function clickRule() {
        this.topWin.active = false;
        this.topLose.active = false;
        this.rule.active = true;
      },
      getTop: function getTop(is_win) {
        var date = new Date();
        var d = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.TAI_XIU, {
          type: _Constants.TAI_XIU_ACTION_TYPE.GET_TOP_GAME,
          is_win: is_win,
          date: d
        });
      },
      setTopData: function setTopData(data) {
        var _this = this;
        var is_win = data.is_win;
        is_win == TopType.WIN ? this.topWinContent.removeAllChildren() : this.topLoseContent.removeAllChildren();
        var listData = data.list;
        var stt = 0;
        listData.forEach(function(top) {
          stt++;
          var item = cc.instantiate(_this.topItem);
          var texts = item.getComponentsInChildren(cc.Label);
          texts[0].string = stt;
          var name = top.userName;
          texts[1].string = name.length > 15 ? name.substring(0, 15) + "..." : name;
          texts[2].string = top.numberMatchs;
          texts[3].string = (0, _Helper.moneyFormat)(top.numberGolds);
          texts[4].string = top.lastMatchId;
          texts[5].string = (0, _Helper.moneyFormat)(top.bonus);
          is_win == TopType.WIN ? _this.topWinContent.addChild(item) : _this.topLoseContent.addChild(item);
        });
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../../Utils/Helper": "Helper",
    "../Common/BaseDialog": "BaseDialog"
  } ],
  DialogTaiXiuHelp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d74868Cn5J4K2VwpUkCcSz", "DialogTaiXiuHelp");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
      properties: {}
    });
    cc._RF.pop();
  }, {
    "../Common/BaseDialog": "BaseDialog"
  } ],
  DialogTaiXiuHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27257spZl9C/InriS0lOvF2", "DialogTaiXiuHistory");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _ListTaiXiuHistory = require("./ListTaiXiuHistory");
    var _ListTaiXiuHistory2 = _interopRequireDefault(_ListTaiXiuHistory);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
      properties: {
        listHistory: {
          default: null,
          type: _ListTaiXiuHistory2.default
        }
      },
      refreshData: function refreshData() {},
      setData: function setData(data) {
        this.listHistory.setData(data.history);
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseDialog": "BaseDialog",
    "./ListTaiXiuHistory": "ListTaiXiuHistory"
  } ],
  DialogTaiXiuMatchHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b4d0cNCLxHW4R4GmG6J6fi", "DialogTaiXiuMatchHistory");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _ListTaiXiuMatchHistory = require("./ListTaiXiuMatchHistory");
    var _ListTaiXiuMatchHistory2 = _interopRequireDefault(_ListTaiXiuMatchHistory);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
      properties: {
        listHistoryTai: {
          default: null,
          type: _ListTaiXiuMatchHistory2.default
        },
        listHistoryXiu: {
          default: null,
          type: _ListTaiXiuMatchHistory2.default
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
      refreshData: function refreshData() {},
      setData: function setData(data) {
        if (!data.history) {
          window.$UIHelper.showToast("L\u1ed7i");
          return;
        }
        this.displayId = data.history.displayId;
        this.textId.string = "#" + data.history.displayId;
        this.setFace(this.face1, data.history.faces[0]);
        this.setFace(this.face2, data.history.faces[1]);
        this.setFace(this.face3, data.history.faces[2]);
        this.textDiem.string = data.history.point;
        this.listHistoryTai.setData(1, data.history_max);
        this.listHistoryXiu.setData(0, data.history_min);
      },
      setFace: function setFace(sprite, num) {
        sprite.spriteFrame = this.listFaces[num - 1];
      },
      getMatchHistory: function getMatchHistory(displayId) {
        window.$Global.networkService.sendMessage(96, {
          type: 231,
          display_id: displayId,
          chipType: 1
        });
      },
      nextMatch: function nextMatch() {
        this.getMatchHistory(this.displayId + 1);
      },
      preMatch: function preMatch() {
        this.getMatchHistory(this.displayId - 1);
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseDialog": "BaseDialog",
    "./ListTaiXiuMatchHistory": "ListTaiXiuMatchHistory"
  } ],
  DialogTaiXiuThongKe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32fc7hf88BDP5SJeK/chRNd", "DialogTaiXiuThongKe");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _TaiXiuChartLine = require("./TaiXiuChartLine");
    var _TaiXiuChartLine2 = _interopRequireDefault(_TaiXiuChartLine);
    var _TaiXiuChartTable = require("./TaiXiuChartTable");
    var _TaiXiuChartTable2 = _interopRequireDefault(_TaiXiuChartTable);
    var _TaiXiuChartTablePoint = require("./TaiXiuChartTablePoint");
    var _TaiXiuChartTablePoint2 = _interopRequireDefault(_TaiXiuChartTablePoint);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
          type: _TaiXiuChartLine2.default
        },
        chartLine2: {
          default: null,
          type: _TaiXiuChartLine2.default
        },
        chartTable1: {
          default: null,
          type: _TaiXiuChartTablePoint2.default
        },
        chartTable2: {
          default: null,
          type: _TaiXiuChartTable2.default
        }
      },
      onLoad: function onLoad() {
        this.page2.active = false;
        this.page1.active = true;
      },
      onClickNextPage: function onClickNextPage() {
        this.page1.active = false;
        this.page2.active = true;
      },
      onClickPreviousPage: function onClickPreviousPage() {
        this.page2.active = false;
        this.page1.active = true;
      },
      refreshData: function refreshData() {},
      setData: function setData(data) {
        this.chartLine2.style = "point";
        this.chartLine1.setData(data);
        this.chartLine2.style = "faces";
        this.chartLine2.setData(data);
        this.chartTable1.setData(data);
        this.chartTable2.setData(data);
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseDialog": "BaseDialog",
    "./TaiXiuChartLine": "TaiXiuChartLine",
    "./TaiXiuChartTable": "TaiXiuChartTable",
    "./TaiXiuChartTablePoint": "TaiXiuChartTablePoint"
  } ],
  DialogTaiXiuTopUser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9765d8mKixHyqvfAPn5TUEN", "DialogTaiXiuTopUser");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
      refreshData: function refreshData() {},
      setData: function setData(data) {
        this.topUserContent.removeAllChildren();
        var top = data.top_win_daily;
        for (var index = 0; index < top.length; index++) {
          var element = top[index];
          var topItem = cc.instantiate(this.topUserItem);
          topItem.getComponent("TaiXiuTopUserItem").onSetData(index + 1, element);
          this.topUserContent.addChild(topItem);
        }
        this.titleTabEvent.string = data.event_bxh_title;
        this.topEventContent.removeAllChildren();
        var topEventData = data.top_win_event;
        var topBonus = data.event_bxh_bonus;
        for (var _index = 0; _index < topEventData.length; _index++) {
          var topItem = cc.instantiate(this.topEventItem);
          topItem.getComponent("TaiXiuTopEventItem").onSetData(_index + 1, topEventData[_index], topBonus[_index]);
          this.topEventContent.addChild(topItem);
        }
        data.thele && "" != data.thele && (this.topGuide.url = data.thele);
      },
      tabsChanged: function tabsChanged(event, index) {
        if (1 == index) {
          this.topDaily.active = true;
          this.topEvent.active = false;
          this.topGuide.node.active = false;
        } else if (2 == index) {
          this.topDaily.active = false;
          this.topEvent.active = true;
          this.topGuide.node.active = false;
        } else {
          this.topDaily.active = false;
          this.topEvent.active = false;
          this.topGuide.node.active = true;
        }
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseDialog": "BaseDialog"
  } ],
  Dialog_AddInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68481PyeWBB0ZtfhbRFugnh", "Dialog_AddInfo");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _Constants = require("../../Utils/Constants");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
      submit: function submit() {
        var _this = this;
        var displayName = this.inputDisplayName.string;
        var phone = this.inputPhoneNumber.string;
        !this.inputDisplayName.node.parent.active && phone || displayName && phone ? window.$Global.userService.updateInfo({
          name: displayName,
          mobile: phone
        }).then(function(result) {
          if (result.resultCode === _Constants.ResponseResultCode.SUCCESS) {
            window.$UIHelper.showToast("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng");
            _this.hide();
            window.$Global.userService.getUserInfo().then(function(detail) {
              if (detail.resultCode === _Constants.ResponseResultCode.SUCCESS) {
                window.$Global.userService.userInfo = detail.user;
                window.$Global.userService.emit("userInfoFetched", detail.user);
              }
            });
          } else window.$UIHelper.showToast(result.desc);
        }) : window.$UIHelper.showToast("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!");
      },
      updateMobile: function updateMobile() {
        this.inputDisplayName.node.parent.active = false;
        this.inputPhoneNumber.node.parent.y = 30;
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../Common/BaseDialog": "BaseDialog"
  } ],
  Dialog_ChangePassword: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36b1apHpc5JUpfgSyQbcUU/", "Dialog_ChangePassword");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ChangePasswordResultCode = {
      SUCCESS: 0,
      REG_OLD_PASS_WRONG: 10,
      REG_PASS_LEN_WRONG: 7,
      OLD_NEW_EQ_WRONG: 8
    };
    cc.Class({
      extends: _BaseDialog2.default,
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
      refreshData: function refreshData() {},
      onClickCancel: function onClickCancel() {
        this.hide();
      },
      onClickSubmit: function onClickSubmit() {
        var oldPassword = this.textOldPassword.string;
        var newPassword = this.textNewPassword.string;
        var newPasswordConfirm = this.textNewPasswordConfirm.string;
        var isValid = true;
        if (oldPassword && newPassword && newPasswordConfirm) {
          if (oldPassword == newPassword) {
            isValid = false;
            window.$UIHelper.showToast("M\u1eadt kh\u1ea9u m\u1edbi kh\xf4ng \u0111\u01b0\u1ee3c tr\xf9ng v\u1edbi m\u1eadt kh\u1ea9u c\u0169");
          }
          if (newPasswordConfirm != newPassword) {
            isValid = false;
            window.$UIHelper.showToast("Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u m\u1edbi kh\xf4ng tr\xf9ng nhau");
          }
        } else {
          isValid = false;
          window.$UIHelper.showToast("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7!");
        }
        isValid && window.$Global.userService.changePassword(oldPassword, newPassword).then(function(result) {
          window.$UIHelper.showToast(result.desc || "");
        });
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseDialog": "BaseDialog"
  } ],
  Dialog_Event: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0e71kWBkdMwqSQR2g62heH", "Dialog_Event");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _Constants = require("../../Utils/Constants");
    var _Helper = require("../../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
        }
      },
      setContent: function setContent(events) {
        var _this = this;
        this.events = events;
        var _loop = function _loop(i) {
          tabEvent = cc.instantiate(_this.tab);
          title = events[i].title;
          tabEvent.children[2].getComponent(cc.Label).string = title.length > 15 ? title.substring(0, 15) + "..." : title;
          tabEvent.on(cc.Node.EventType.TOUCH_END, function(event) {
            _this.showTab(i);
          });
          tabEvent.parent = _this.listTabs.node;
        };
        for (var i = 0; i < events.length; i++) {
          var tabEvent;
          var title;
          _loop(i);
        }
      },
      showTab: function showTab(index) {
        this.show();
        this.txtTitle.string = this.events[index].title;
        this.txtGuide.string = this.events[index].content;
        this.listTabs.toggleItems[index].check();
        this.listTabsInContent.toggleItems[0].check();
        this.currTab = index;
      },
      changeTabInContent: function changeTabInContent(event, index) {
        if (0 == index) {
          this.guideNode.active = true;
          this.topNodeSlot.active = false;
          this.topNode.active = false;
        } else {
          this.getSystemMessageTop();
          this.guideNode.active = false;
        }
      },
      getSystemMessageTop: function getSystemMessageTop() {
        var _this2 = this;
        window.$Global.networkService.getSystemMessages([ _Constants.SYSTEM_MESSAGE_TYPE.EVENT, _Constants.SYSTEM_MESSAGE_TYPE.EVENT_GROUP ]).then(function(detail) {
          detail.messages[_this2.currTab].type === _Constants.SYSTEM_MESSAGE_TYPE.EVENT ? _this2.onTop(detail.messages[_this2.currTab].contentData) : detail.messages[_this2.currTab].type === _Constants.SYSTEM_MESSAGE_TYPE.EVENT_GROUP && _this2.onTopHu(detail.messages[_this2.currTab].contentData);
        });
      },
      onTopHu: function onTopHu(contentData) {
        var _this3 = this;
        if (this.guideNode.active) return;
        this.topNodeSlot.active = true;
        this.topNode.active = false;
        this.dropDownContent.removeAllChildren();
        var isShow = false;
        this.topData = JSON.parse(contentData).top;
        this.topData.forEach(function(top) {
          var zoneId = top.zoneId;
          var key = (0, _Helper.getKeyByValue)(_Constants.ZONE_ID, zoneId);
          if (key) {
            var dropItem = cc.instantiate(_this3.dropDownItem);
            var name = _Constants.ZONE_NAME[key];
            dropItem.getComponent(cc.Label).string = name;
            dropItem.on(cc.Node.EventType.TOUCH_END, function(event) {
              _this3.dropDownItemClick(zoneId, name);
            });
            dropItem.parent = _this3.dropDownContent;
            if (!isShow) {
              _this3.txtDropDown.string = name;
              _this3.fillTopSlot(zoneId);
              isShow = true;
            }
          }
        });
      },
      dropDownClick: function dropDownClick() {
        this.dropDownContent.active = !this.dropDownContent.active;
      },
      dropDownItemClick: function dropDownItemClick(zoneId, zoneName) {
        this.txtDropDown.string = zoneName;
        this.dropDownClick();
        this.fillTopSlot(zoneId);
      },
      fillTopSlot: function fillTopSlot(zoneId) {
        this.topContentSlot.removeAllChildren();
        for (var i = 0; i < this.topData.length; i++) if (zoneId === this.topData[i].zoneId) {
          for (var j = 0; j < this.topData[i].top.length; j++) {
            var top = this.topData[i].top[j];
            var item = cc.instantiate(this.topItemSlot);
            var textChilds = item.getComponentsInChildren(cc.Label);
            textChilds[0].string = j + 1;
            textChilds[1].string = top.displayName.length > 15 ? top.displayName.substring(0, 15) + "..." : top.displayName;
            textChilds[2].string = (0, _Helper.numberWithDot)(top.bet);
            textChilds[3].string = (0, _Helper.numberWithDot)(top.win);
            textChilds[4].string = top.dateTime;
            item.children[0].active = j % 2 == 0;
            item.parent = this.topContentSlot;
          }
          break;
        }
      },
      onTop: function onTop(contentData) {
        if (this.guideNode.active) return;
        this.topContent.removeAllChildren();
        this.topNodeSlot.active = false;
        this.topNode.active = true;
        try {
          var topData = JSON.parse(contentData);
          for (var i = 0; i < topData.length; i++) {
            var item = cc.instantiate(this.topItem);
            var textChilds = item.getComponentsInChildren(cc.Label);
            textChilds[0].string = i + 1;
            textChilds[1].string = topData[i].fullname.length > 25 ? topData[i].fullname.substring(0, 25) + "..." : topData[i].fullname;
            textChilds[2].string = (0, _Helper.numberWithDot)(topData[i].total_gold);
            item.children[0].active = i % 2 == 0;
            item.parent = this.topContent;
          }
        } catch (error) {
          cc.error(error);
        }
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../../Utils/Helper": "Helper",
    "../Common/BaseDialog": "BaseDialog"
  } ],
  Dialog_GiftCode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e6b0JSQuFC1LBL+5HI3pUT", "Dialog_GiftCode");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _Constants = require("../../Utils/Constants");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
      properties: {
        textGiftCode: {
          default: null,
          type: cc.EditBox
        }
      },
      onClickCancel: function onClickCancel() {
        this.hide();
      },
      onClickNhanGiftCode: function onClickNhanGiftCode() {
        var _this = this;
        var giftcode = this.textGiftCode.string;
        giftcode ? window.$Global.userService.sendGiftCode(giftcode).then(function(resultCode) {
          var text = "";
          resultCode == _Constants.GiftCodeResultCode.SUCCESS ? _this.hide() : text = resultCode == _Constants.GiftCodeResultCode.GIFT_CODE_NOT_EXITS ? "Xin l\u1ed7i h\u1ec7 th\u1ed1ng kh\xf4ng nh\u1eadn di\u1ec7n \u0111\u01b0\u1ee3c giftcode" : resultCode == _Constants.GiftCodeResultCode.GIFT_CODE_USED ? "Giftcode \u0111\xe3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng" : "\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra. M\xe3 l\u1ed7i (" + resultCode.ToString() + ")";
          window.$UIHelper.showToast(text);
        }) : window.$UIHelper.showToast("Vui l\xf2ng nh\u1eadp Giftcode!");
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../Common/BaseDialog": "BaseDialog"
  } ],
  Dialog_GoldHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1a5cD1GYJB8o9Rl8YbGT3I", "Dialog_GoldHistory");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _Dialog_HistoryDetail = require("./Dialog_HistoryDetail");
    var _Dialog_HistoryDetail2 = _interopRequireDefault(_Dialog_HistoryDetail);
    var _Constants = require("../../Utils/Constants");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TransferType = {
      ALL: 0,
      GAME: 1,
      TRANSFER: 2
    };
    cc.Class({
      extends: _BaseDialog2.default,
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
          type: _Dialog_HistoryDetail2.default
        }
      },
      onLoad: function onLoad() {
        this.page = 0;
        this.isLastPage = false;
        this.historyPerPage = 10;
        this.trans_type = TransferType.ALL;
      },
      refreshData: function refreshData() {
        this.getHistory();
      },
      onClickNextPage: function onClickNextPage() {
        if (this.isLastPage) return;
        this.page += 1;
        this.getHistory();
      },
      onClickPreviousPage: function onClickPreviousPage() {
        if (0 === this.page) return;
        this.page -= 1;
        this.getHistory();
      },
      getHistory: function getHistory() {
        var _this = this;
        window.$Global.userService.getUserGoldHistory(this.trans_type || TransferType.ALL, this.page || 0).then(function(result) {
          if (result.resultCode === _Constants.ResponseResultCode.SUCCESS) {
            _this.isLastPage = result.data.length < _this.historyPerPage;
            _this.setHistoryData(result.data);
            _this.textPage.string = _this.page + 1;
          } else window.$UIHelper.showToast(result.desc || "");
        });
      },
      setHistoryData: function setHistoryData(data) {
        var _this2 = this;
        this.listHistory.removeAllChildren();
        data.forEach(function(his) {
          var hisItem = cc.instantiate(_this2.historyItem);
          hisItem.getComponent("GoldHistoryItem").setData(his);
          hisItem.on(cc.Node.EventType.TOUCH_END, function(event) {
            _this2.dialogHistoryDetail.setData(his.reason);
          });
          hisItem.parent = _this2.listHistory;
        });
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../Common/BaseDialog": "BaseDialog",
    "./Dialog_HistoryDetail": "Dialog_HistoryDetail"
  } ],
  Dialog_HistoryDetail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1aba2I1JCJBW5kJP4O+rNl1", "Dialog_HistoryDetail");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
      properties: {
        textContent: {
          default: null,
          type: cc.Label
        }
      },
      setData: function setData(content) {
        this.textContent.string = content;
        this.show();
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseDialog": "BaseDialog"
  } ],
  Dialog_Mail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87264IIQ1pLMpOHlwtOB3Rp", "Dialog_Mail");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _ListMail = require("./ListMail");
    var _ListMail2 = _interopRequireDefault(_ListMail);
    var _BasePanelNotification = require("../Common/BasePanelNotification");
    var _BasePanelNotification2 = _interopRequireDefault(_BasePanelNotification);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
      properties: {
        listMail: {
          default: null,
          type: _ListMail2.default
        },
        panelNotification: {
          default: null,
          type: _BasePanelNotification2.default
        }
      },
      onLoad: function onLoad() {},
      start: function start() {
        this.node.on("readMail", function(data) {
          window.$Global.userService.readMessage(data.msgId).then(function(result) {
            console.log(result);
          });
        });
      },
      refreshData: function refreshData() {
        var _this = this;
        var page = 0;
        window.$Global.userService.getUserMessages(page).then(function(result) {
          _this.listMail.setData(result);
        });
      },
      onClickClearAll: function onClickClearAll() {
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
  Dialog_PlayerList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d59d3/Wh41MXoenKbBIUeLh", "Dialog_PlayerList");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
      onLoad: function onLoad() {
        this.page = 0;
      },
      refreshData: function refreshData() {
        var _this = this;
        window.$Global.userService.getUserList(this.page || 0, 0).then(function(users) {
          _this.setData(users);
        });
      },
      onTextIDChanged: function onTextIDChanged() {
        var _this2 = this;
        var userId = this.textPlayerIdSearch.string.trim();
        "" == userId ? this.refreshData() : window.$Global.userService.getUserList(0, parseInt(userId)).then(function(users) {
          _this2.setData(users);
        });
      },
      onClickNextPage: function onClickNextPage() {
        if (this.page < 10) {
          this.page = this.page + 1;
          this.textPage.string = this.page;
          this.refreshData();
        }
      },
      onClickPreviousPage: function onClickPreviousPage() {
        if (this.page > 1) {
          this.page = this.page - 1;
          this.textPage.string = this.page;
          this.refreshData();
        }
      },
      setData: function setData(users) {
        var _this3 = this;
        this.listUser.removeAllChildren();
        var index = 0;
        users.forEach(function(user) {
          var item = cc.instantiate(_this3.userItem);
          index++;
          item.getComponent("RefUserItem").setData(index, user);
          item.parent = _this3.listUser;
        });
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseDialog": "BaseDialog"
  } ],
  Dialog_ProfileUpdate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f001cZBxqZPRZNAVSRRRfzu", "Dialog_ProfileUpdate");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _Constants = require("../../Utils/Constants");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ChangePasswordResultCode = {
      SUCCESS: 0,
      REG_OLD_PASS_WRONG: 10,
      REG_PASS_LEN_WRONG: 7,
      OLD_NEW_EQ_WRONG: 8
    };
    cc.Class({
      extends: _BaseDialog2.default,
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
      refreshData: function refreshData() {
        var userInfo = window.$Global.userService.userInfo;
        if (userInfo) {
          this.textName.string = userInfo.displayName || "";
          this.textPhone.string = userInfo.mobile || "";
          this.textCMND.string = userInfo.passport || "";
          if (this.checkGender.toggleItems) if (1 == userInfo.gender) {
            this.checkGender.toggleItems[0].isChecked = true;
            this.checkGender.toggleItems[1].isChecked = false;
          } else {
            this.checkGender.toggleItems[0].isChecked = false;
            this.checkGender.toggleItems[1].isChecked = true;
          }
        }
      },
      onClickCancel: function onClickCancel() {
        this.hide();
      },
      onClickSubmit: function onClickSubmit() {
        var _this = this;
        var displayName = this.textName.string;
        var phone = this.textPhone.string;
        var cmnd = this.textCMND.string;
        var gender = this.checkGender.toggleItems[0].isChecked ? 1 : 2;
        var isValid = true;
        if (displayName && phone) ; else {
          isValid = false;
          window.$UIHelper.showToast("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7!");
        }
        isValid && window.$Global.userService.updateInfo({
          name: displayName,
          mobile: phone,
          passport: cmnd,
          gender: gender
        }).then(function(result) {
          window.$UIHelper.showToast(result.desc || "");
          result.resultCode === _Constants.ResponseResultCode.SUCCESS && _this.hide();
        });
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../Common/BaseDialog": "BaseDialog"
  } ],
  Dialog_Profile: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca03cUu6c9B9aNBuSXV+Nfb", "Dialog_Profile");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _PanelProfileInfo = require("./PanelProfileInfo");
    var _PanelProfileInfo2 = _interopRequireDefault(_PanelProfileInfo);
    var _PanelProfileSecurity = require("./PanelProfileSecurity");
    var _PanelProfileSecurity2 = _interopRequireDefault(_PanelProfileSecurity);
    var _Dialog_ProfileUpdate = require("./Dialog_ProfileUpdate");
    var _Dialog_ProfileUpdate2 = _interopRequireDefault(_Dialog_ProfileUpdate);
    var _Dialog_ChangePassword = require("./Dialog_ChangePassword");
    var _Dialog_ChangePassword2 = _interopRequireDefault(_Dialog_ChangePassword);
    var _Dialog_TopUp = require("./Dialog_TopUp");
    var _Dialog_TopUp2 = _interopRequireDefault(_Dialog_TopUp);
    var _Dialog_GoldHistory = require("./Dialog_GoldHistory");
    var _Dialog_GoldHistory2 = _interopRequireDefault(_Dialog_GoldHistory);
    var _Constants = require("../../Utils/Constants");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
      properties: {
        panelProfileInfo: {
          default: null,
          type: _PanelProfileInfo2.default
        },
        panelProfileSecurity: {
          default: null,
          type: _PanelProfileSecurity2.default
        },
        dialogChangePassword: {
          default: null,
          type: _Dialog_ChangePassword2.default
        },
        dialogProfileUpdate: {
          default: null,
          type: _Dialog_ProfileUpdate2.default
        },
        dialogTransfer: {
          default: null,
          type: _Dialog_TopUp2.default
        },
        dialogGoldHistory: {
          default: null,
          type: _Dialog_GoldHistory2.default
        }
      },
      onLoad: function onLoad() {
        this.panelProfileInfo.dialog = this;
        this.panelProfileSecurity.dialog = this;
      },
      refreshData: function refreshData() {
        var _this = this;
        window.$Global.userService.getUserInfo().then(function(detail) {
          if (detail.resultCode == _Constants.ResponseResultCode.SUCCESS) {
            var user = detail.user;
            window.$Global.userService.userInfo = user;
            _this.panelProfileInfo.setData(user);
            _this.panelProfileSecurity.setData(user.loginG2fa);
          }
        });
      },
      onClickChuyenBO: function onClickChuyenBO() {
        this.dialogTransfer.show();
      },
      onClickLichSuBO: function onClickLichSuBO() {
        this.dialogGoldHistory.show();
      },
      onClickProfileUpdate: function onClickProfileUpdate() {
        this.dialogProfileUpdate.show();
      },
      onClickChangePassword: function onClickChangePassword() {
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
  Dialog_SelectLine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ed64A78dJJBIi7KZNpBxU5", "Dialog_SelectLine");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
      onLoad: function onLoad() {
        this.lines = this.linesNode.children;
      },
      start: function start() {
        this.allClick();
      },
      onToggleLineChecked: function onToggleLineChecked(event, line) {
        var index = this.selectedLines.indexOf(parseInt(line));
        if (event.isChecked && index < 0) {
          this.selectedLines.push(line);
          this.node.emit("updateLines", this.selectedLines);
        } else if (!event.isChecked && index >= 0) {
          this.selectedLines.splice(line, 1);
          this.node.emit("updateLines", this.selectedLines);
        }
      },
      oddClick: function oddClick() {
        this.selectedLines = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ];
        for (var i = 0; i < this.lines.length; i++) this.lines[i].getComponent(cc.Toggle).isChecked = i % 2 === 0;
        this.node.emit("updateLines", this.selectedLines);
      },
      evenClick: function evenClick() {
        this.selectedLines = [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
        for (var i = 0; i < this.lines.length; i++) this.lines[i].getComponent(cc.Toggle).isChecked = i % 2 !== 0;
        this.node.emit("updateLines", this.selectedLines);
      },
      allClick: function allClick() {
        this.selectedLines = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
        for (var i = 0; i < this.lines.length; i++) this.lines[i].getComponent(cc.Toggle).isChecked = true;
        this.node.emit("updateLines", this.selectedLines);
      },
      noneClick: function noneClick() {
        this.selectedLines = [];
        for (var i = 0; i < this.lines.length; i++) this.lines[i].getComponent(cc.Toggle).isChecked = false;
        this.node.emit("updateLines", this.selectedLines);
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseDialog": "BaseDialog"
  } ],
  Dialog_Setting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd3a4LukihOyZ0lsHUbzckL", "Dialog_Setting");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
  Dialog_SlotJackpotHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20aa9S1sHtLwYgQErBED5iY", "Dialog_SlotJackpotHistory");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _Helper = require("../../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
      setData: function setData(historys) {
        this.content.removeAllChildren();
        for (var i = 0; i < historys.length; i++) {
          var item = cc.instantiate(this.historyItem);
          var name = historys[i].displayName;
          item.children[1].getComponent(cc.Label).string = name.length > 15 ? name.substring(0, 13) + "..." : name;
          item.children[2].getComponent(cc.Label).string = historys[i].time;
          item.children[3].getComponent(cc.Label).string = (0, _Helper.moneyFormat)(historys[i].bet);
          item.children[4].getComponent(cc.Label).string = (0, _Helper.moneyFormat)(historys[i].win);
          item.children[5].getComponent(cc.Label).string = historys[i].desc;
          i % 2 !== 0 && (item.children[0].active = false);
          item.parent = this.content;
        }
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper",
    "../Common/BaseDialog": "BaseDialog"
  } ],
  Dialog_SlotUserHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c863uV9PhPobUHPpYgg+RD", "Dialog_SlotUserHistory");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _Helper = require("../../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
      setData: function setData(historys) {
        this.content.removeAllChildren();
        for (var i = 0; i < historys.length; i++) {
          var item = cc.instantiate(this.historyItem);
          item.children[1].getComponent(cc.Label).string = historys[i].id;
          item.children[2].getComponent(cc.Label).string = historys[i].time;
          item.children[3].getComponent(cc.Label).string = (0, _Helper.moneyFormat)(historys[i].sub);
          item.children[4].getComponent(cc.Label).string = (0, _Helper.moneyFormat)(historys[i].add);
          i % 2 !== 0 && (item.children[0].active = false);
          item.parent = this.content;
        }
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper",
    "../Common/BaseDialog": "BaseDialog"
  } ],
  Dialog_TopUp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62d95zHDzBKbbs766b72lFC", "Dialog_TopUp");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _PanelAgency = require("./PanelAgency");
    var _PanelAgency2 = _interopRequireDefault(_PanelAgency);
    var _PanelTransfer = require("./PanelTransfer");
    var _PanelTransfer2 = _interopRequireDefault(_PanelTransfer);
    var _PanelCard = require("./PanelCard");
    var _PanelCard2 = _interopRequireDefault(_PanelCard);
    var _Constants = require("../../Utils/Constants");
    var _BaseTabContainer = require("../Common/BaseTabContainer");
    var _BaseTabContainer2 = _interopRequireDefault(_BaseTabContainer);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
      properties: {
        transferTab: {
          default: null,
          type: _PanelTransfer2.default
        },
        agencyTab: {
          default: null,
          type: _PanelAgency2.default
        },
        cardTab: {
          default: null,
          type: _PanelCard2.default
        },
        btnTabCard: {
          default: null,
          type: cc.Node
        },
        tabContainer: {
          default: null,
          type: _BaseTabContainer2.default
        }
      },
      refreshData: function refreshData() {
        var _this = this;
        this.transferTab.refreshData();
        this.agencyTab.refreshData();
        window.$Global.userService.getConfigTransferGold().then(function(msg) {
          if (msg.resultCode === _Constants.ResponseResultCode.SUCCESS) {
            _this.btnTabCard.active = msg.data.enable_napthe || false;
            _this.transferTab.setData(msg);
            _this.cardTab.setData(msg.data.list_card_provider);
          } else window.UIHelper.showToast(msg.desc || "");
        });
      },
      showTab: function showTab(index) {
        this.show();
        this.tabContainer.tabHandle(index);
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../Common/BaseDialog": "BaseDialog",
    "../Common/BaseTabContainer": "BaseTabContainer",
    "./PanelAgency": "PanelAgency",
    "./PanelCard": "PanelCard",
    "./PanelTransfer": "PanelTransfer"
  } ],
  Dialog_VIP: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64456pEO5lNV6jBNZ1vzQnI", "Dialog_VIP");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _Constants = require("../../Utils/Constants");
    var _Helper = require("../../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
      refreshData: function refreshData() {
        var _this = this;
        window.$Global.userService.getVippoint().then(function(detail) {
          var status = detail.resultCode;
          if (status === _Constants.ResponseResultCode.SUCCESS) {
            var userpoint = detail.userpoint;
            _this.txtUserPoint.string = (0, _Helper.numberWithDot)(userpoint);
            _this.txtRatio.string = "1 vippoint - " + (0, _Helper.numberWithDot)(detail.rate) + " " + _Constants.CONFIG_GOLD.goldName;
            if (window.$Global.userService.userInfo.providerCode.includes("agency")) {
              _this.receiveDate.getComponentInChildren(cc.Label).string = detail.receive_date;
              _this.receiveDate.active = true;
            }
            for (var i = 0; i < detail.vip_points.length; i++) {
              var vip = detail.vip_points[i];
              if (userpoint >= vip.point) {
                var rank = vip.rank;
                _this.imgVip.spriteFrame = _this.listSpriteVip[rank - 1];
                _this.txtVipName.string = "VIP " + rank;
                break;
              }
            }
            _this.listVippoint.removeAllChildren();
            detail.vip_points.forEach(function(vipp) {
              var item = cc.instantiate(_this.vipItem);
              item.getComponent("VippointItem").setData(vipp);
              item.parent = _this.listVippoint;
            });
          } else window.$UIHelper.showToast("C\xf3 l\u1ed7i x\u1ea3y ra (" + status + ")");
        });
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../../Utils/Helper": "Helper",
    "../Common/BaseDialog": "BaseDialog"
  } ],
  Dialog_XacThuc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7f5422pAUJO05Nd8jNsTIEG", "Dialog_XacThuc");
    "use strict";
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _BasePanelNotification = require("../Common/BasePanelNotification");
    var _BasePanelNotification2 = _interopRequireDefault(_BasePanelNotification);
    var _Constants = require("../../Utils/Constants");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseDialog2.default,
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
          type: _BasePanelNotification2.default
        }
      },
      start: function start() {},
      setData: function setData(data) {
        console.log(data.g2faQrUrl);
        this.textCode.string = data.g2faSeret;
        this.imageQr.spriteFrame.name = "qrcode";
        this.imageQr.node.width = 200;
        this.imageQr.node.height = 200;
      },
      onClickDownloadAndroid: function onClickDownloadAndroid() {
        cc.sys.openURL(_Constants.URLS.DOWNLOAD_ANDROID_2FA);
      },
      onClickDownloadIOS: function onClickDownloadIOS() {
        cc.sys.openURL(_Constants.URLS.DOWNLOAD_IOS_2FA);
      },
      onClickNhan: function onClickNhan() {
        var _this = this;
        this.textOTP.string ? window.$Global.userService.activateUserAccount(this.textOTP.string).then(function(resultCode) {
          0 == resultCode ? _this.hide() : _this.panelNotification.setText("OTP kh\xf4ng h\u1ee3p l\u1ec7 vui l\xf2ng nh\u1eadp l\u1ea1i");
        }) : this.panelNotification.setText("Vui l\xf2ng nh\u1eadp code");
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../Common/BaseDialog": "BaseDialog",
    "../Common/BasePanelNotification": "BasePanelNotification"
  } ],
  DragAndDrop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cab3bqTSABHJJ5YrveAiaJ5", "DragAndDrop");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        dragNode: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        var _this = this;
        var dragNode = this.dragNode;
        this.isMoving = false;
        this.checkMovingTimeOut = false;
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          var touches = event.getTouches();
          var touchLoc = touches[0].getLocation();
          dragNode.oldTouchLoc = touchLoc;
          dragNode.touchLocOffset = dragNode.convertToNodeSpaceAR(touchLoc);
        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          var touches = event.getTouches();
          var touchLoc = touches[0].getLocation();
          var localTouchLoc = dragNode.parent.convertToNodeSpaceAR(touchLoc);
          dragNode.x = localTouchLoc.x - dragNode.touchLocOffset.x;
          dragNode.y = localTouchLoc.y - dragNode.touchLocOffset.y;
          if (!_this.checkMovingTimeOut) {
            _this.isMoving = false;
            _this.checkMovingTimeOut = true;
            setTimeout(function() {
              _this.isMoving = true;
            }, 100);
          }
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          setTimeout(function() {
            _this.isMoving = false;
          }, 500);
          _this.checkMovingTimeOut = false;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  5: [ function(require, module, exports) {
    function EventLite() {
      if (!(this instanceof EventLite)) return new EventLite();
    }
    (function(EventLite) {
      "undefined" !== typeof module && (module.exports = EventLite);
      var LISTENERS = "listeners";
      var methods = {
        on: on,
        once: once,
        off: off,
        emit: emit
      };
      mixin(EventLite.prototype);
      EventLite.mixin = mixin;
      function mixin(target) {
        for (var key in methods) target[key] = methods[key];
        return target;
      }
      function on(type, func) {
        getListeners(this, type).push(func);
        return this;
      }
      function once(type, func) {
        var that = this;
        wrap.originalListener = func;
        getListeners(that, type).push(wrap);
        return that;
        function wrap() {
          off.call(that, type, wrap);
          func.apply(this, arguments);
        }
      }
      function off(type, func) {
        var that = this;
        var listners;
        if (arguments.length) if (func) {
          listners = getListeners(that, type, true);
          if (listners) {
            listners = listners.filter(ne);
            if (!listners.length) return off.call(that, type);
            that[LISTENERS][type] = listners;
          }
        } else {
          listners = that[LISTENERS];
          if (listners) {
            delete listners[type];
            if (!Object.keys(listners).length) return off.call(that);
          }
        } else delete that[LISTENERS];
        return that;
        function ne(test) {
          return test !== func && test.originalListener !== func;
        }
      }
      function emit(type, value) {
        var that = this;
        var listeners = getListeners(that, type, true);
        if (!listeners) return false;
        var arglen = arguments.length;
        if (1 === arglen) listeners.forEach(zeroarg); else if (2 === arglen) listeners.forEach(onearg); else {
          var args = Array.prototype.slice.call(arguments, 1);
          listeners.forEach(moreargs);
        }
        return !!listeners.length;
        function zeroarg(func) {
          func.call(that);
        }
        function onearg(func) {
          func.call(that, value);
        }
        function moreargs(func) {
          func.apply(that, args);
        }
      }
      function getListeners(that, type, readonly) {
        if (readonly && !that[LISTENERS]) return;
        var listeners = that[LISTENERS] || (that[LISTENERS] = {});
        return listeners[type] || (listeners[type] = []);
      }
    })(EventLite);
  }, {} ],
  6: [ function(require, module, exports) {
    arguments[4][4][0].apply(exports, arguments);
  }, {
    dup: 4
  } ],
  7: [ function(require, module, exports) {
    (function(Buffer) {
      var Uint64BE, Int64BE, Uint64LE, Int64LE;
      !function(exports) {
        var UNDEFINED = "undefined";
        var BUFFER = UNDEFINED !== typeof Buffer && Buffer;
        var UINT8ARRAY = UNDEFINED !== typeof Uint8Array && Uint8Array;
        var ARRAYBUFFER = UNDEFINED !== typeof ArrayBuffer && ArrayBuffer;
        var ZERO = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
        var isArray = Array.isArray || _isArray;
        var BIT32 = 4294967296;
        var BIT24 = 16777216;
        var storage;
        Uint64BE = factory("Uint64BE", true, true);
        Int64BE = factory("Int64BE", true, false);
        Uint64LE = factory("Uint64LE", false, true);
        Int64LE = factory("Int64LE", false, false);
        function factory(name, bigendian, unsigned) {
          var posH = bigendian ? 0 : 4;
          var posL = bigendian ? 4 : 0;
          var pos0 = bigendian ? 0 : 3;
          var pos1 = bigendian ? 1 : 2;
          var pos2 = bigendian ? 2 : 1;
          var pos3 = bigendian ? 3 : 0;
          var fromPositive = bigendian ? fromPositiveBE : fromPositiveLE;
          var fromNegative = bigendian ? fromNegativeBE : fromNegativeLE;
          var proto = Int64.prototype;
          var isName = "is" + name;
          var _isInt64 = "_" + isName;
          proto.buffer = void 0;
          proto.offset = 0;
          proto[_isInt64] = true;
          proto.toNumber = toNumber;
          proto.toString = toString;
          proto.toJSON = toNumber;
          proto.toArray = toArray;
          BUFFER && (proto.toBuffer = toBuffer);
          UINT8ARRAY && (proto.toArrayBuffer = toArrayBuffer);
          Int64[isName] = isInt64;
          exports[name] = Int64;
          return Int64;
          function Int64(buffer, offset, value, raddix) {
            if (!(this instanceof Int64)) return new Int64(buffer, offset, value, raddix);
            return init(this, buffer, offset, value, raddix);
          }
          function isInt64(b) {
            return !!(b && b[_isInt64]);
          }
          function init(that, buffer, offset, value, raddix) {
            if (UINT8ARRAY && ARRAYBUFFER) {
              buffer instanceof ARRAYBUFFER && (buffer = new UINT8ARRAY(buffer));
              value instanceof ARRAYBUFFER && (value = new UINT8ARRAY(value));
            }
            if (!buffer && !offset && !value && !storage) {
              that.buffer = newArray(ZERO, 0);
              return;
            }
            if (!isValidBuffer(buffer, offset)) {
              var _storage = storage || Array;
              raddix = offset;
              value = buffer;
              offset = 0;
              buffer = new _storage(8);
            }
            that.buffer = buffer;
            that.offset = offset |= 0;
            if (UNDEFINED === typeof value) return;
            if ("string" === typeof value) fromString(buffer, offset, value, raddix || 10); else if (isValidBuffer(value, raddix)) fromArray(buffer, offset, value, raddix); else if ("number" === typeof raddix) {
              writeInt32(buffer, offset + posH, value);
              writeInt32(buffer, offset + posL, raddix);
            } else value > 0 ? fromPositive(buffer, offset, value) : value < 0 ? fromNegative(buffer, offset, value) : fromArray(buffer, offset, ZERO, 0);
          }
          function fromString(buffer, offset, str, raddix) {
            var pos = 0;
            var len = str.length;
            var high = 0;
            var low = 0;
            "-" === str[0] && pos++;
            var sign = pos;
            while (pos < len) {
              var chr = parseInt(str[pos++], raddix);
              if (!(chr >= 0)) break;
              low = low * raddix + chr;
              high = high * raddix + Math.floor(low / BIT32);
              low %= BIT32;
            }
            if (sign) {
              high = ~high;
              low ? low = BIT32 - low : high++;
            }
            writeInt32(buffer, offset + posH, high);
            writeInt32(buffer, offset + posL, low);
          }
          function toNumber() {
            var buffer = this.buffer;
            var offset = this.offset;
            var high = readInt32(buffer, offset + posH);
            var low = readInt32(buffer, offset + posL);
            unsigned || (high |= 0);
            return high ? high * BIT32 + low : low;
          }
          function toString(radix) {
            var buffer = this.buffer;
            var offset = this.offset;
            var high = readInt32(buffer, offset + posH);
            var low = readInt32(buffer, offset + posL);
            var str = "";
            var sign = !unsigned && 2147483648 & high;
            if (sign) {
              high = ~high;
              low = BIT32 - low;
            }
            radix = radix || 10;
            while (1) {
              var mod = high % radix * BIT32 + low;
              high = Math.floor(high / radix);
              low = Math.floor(mod / radix);
              str = (mod % radix).toString(radix) + str;
              if (!high && !low) break;
            }
            sign && (str = "-" + str);
            return str;
          }
          function writeInt32(buffer, offset, value) {
            buffer[offset + pos3] = 255 & value;
            value >>= 8;
            buffer[offset + pos2] = 255 & value;
            value >>= 8;
            buffer[offset + pos1] = 255 & value;
            value >>= 8;
            buffer[offset + pos0] = 255 & value;
          }
          function readInt32(buffer, offset) {
            return buffer[offset + pos0] * BIT24 + (buffer[offset + pos1] << 16) + (buffer[offset + pos2] << 8) + buffer[offset + pos3];
          }
        }
        function toArray(raw) {
          var buffer = this.buffer;
          var offset = this.offset;
          storage = null;
          if (false !== raw && 0 === offset && 8 === buffer.length && isArray(buffer)) return buffer;
          return newArray(buffer, offset);
        }
        function toBuffer(raw) {
          var buffer = this.buffer;
          var offset = this.offset;
          storage = BUFFER;
          if (false !== raw && 0 === offset && 8 === buffer.length && Buffer.isBuffer(buffer)) return buffer;
          var dest = new BUFFER(8);
          fromArray(dest, 0, buffer, offset);
          return dest;
        }
        function toArrayBuffer(raw) {
          var buffer = this.buffer;
          var offset = this.offset;
          var arrbuf = buffer.buffer;
          storage = UINT8ARRAY;
          if (false !== raw && 0 === offset && arrbuf instanceof ARRAYBUFFER && 8 === arrbuf.byteLength) return arrbuf;
          var dest = new UINT8ARRAY(8);
          fromArray(dest, 0, buffer, offset);
          return dest.buffer;
        }
        function isValidBuffer(buffer, offset) {
          var len = buffer && buffer.length;
          offset |= 0;
          return len && offset + 8 <= len && "string" !== typeof buffer[offset];
        }
        function fromArray(destbuf, destoff, srcbuf, srcoff) {
          destoff |= 0;
          srcoff |= 0;
          for (var i = 0; i < 8; i++) destbuf[destoff++] = 255 & srcbuf[srcoff++];
        }
        function newArray(buffer, offset) {
          return Array.prototype.slice.call(buffer, offset, offset + 8);
        }
        function fromPositiveBE(buffer, offset, value) {
          var pos = offset + 8;
          while (pos > offset) {
            buffer[--pos] = 255 & value;
            value /= 256;
          }
        }
        function fromNegativeBE(buffer, offset, value) {
          var pos = offset + 8;
          value++;
          while (pos > offset) {
            buffer[--pos] = 255 & -value ^ 255;
            value /= 256;
          }
        }
        function fromPositiveLE(buffer, offset, value) {
          var end = offset + 8;
          while (offset < end) {
            buffer[offset++] = 255 & value;
            value /= 256;
          }
        }
        function fromNegativeLE(buffer, offset, value) {
          var end = offset + 8;
          value++;
          while (offset < end) {
            buffer[offset++] = 255 & -value ^ 255;
            value /= 256;
          }
        }
        function _isArray(val) {
          return !!val && "[object Array]" == Object.prototype.toString.call(val);
        }
      }("object" === typeof exports && "string" !== typeof exports.nodeName ? exports : this || {});
    }).call(this, require("buffer").Buffer);
  }, {
    buffer: 2
  } ],
  8: [ function(require, module, exports) {
    arguments[4][3][0].apply(exports, arguments);
  }, {
    dup: 3
  } ],
  9: [ function(require, module, exports) {
    (function(global) {
      (function() {
        var undefined;
        var VERSION = "4.17.10";
        var LARGE_ARRAY_SIZE = 200;
        var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function";
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var MAX_MEMOIZE_SIZE = 500;
        var PLACEHOLDER = "__lodash_placeholder__";
        var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
        var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
        var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
        var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
        var HOT_COUNT = 800, HOT_SPAN = 16;
        var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
        var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 1.7976931348623157e308, NAN = NaN;
        var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
        var wrapFlags = [ [ "ary", WRAP_ARY_FLAG ], [ "bind", WRAP_BIND_FLAG ], [ "bindKey", WRAP_BIND_KEY_FLAG ], [ "curry", WRAP_CURRY_FLAG ], [ "curryRight", WRAP_CURRY_RIGHT_FLAG ], [ "flip", WRAP_FLIP_FLAG ], [ "partial", WRAP_PARTIAL_FLAG ], [ "partialRight", WRAP_PARTIAL_RIGHT_FLAG ], [ "rearg", WRAP_REARG_FLAG ] ];
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
        var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
        var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
        var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
        var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
        var reTrim = /^\s+|\s+$/g, reTrimStart = /^\s+/, reTrimEnd = /\s+$/;
        var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var reEscapeChar = /\\(\\)?/g;
        var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
        var reFlags = /\w*$/;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var reIsOctal = /^0o[0-7]+$/i;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
        var reNoMatch = /($^)/;
        var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
        var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
        var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
        var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [ rsNonAstral, rsRegional, rsSurrPair ].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [ rsDingbat, rsRegional, rsSurrPair ].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [ rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral ].join("|") + ")";
        var reApos = RegExp(rsApos, "g");
        var reComboMark = RegExp(rsCombo, "g");
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        var reUnicodeWord = RegExp([ rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [ rsBreak, rsUpper, "$" ].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [ rsBreak, rsUpper + rsMiscLower, "$" ].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji ].join("|"), "g");
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var contextProps = [ "Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout" ];
        var templateCounter = -1;
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        var cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
        var deburredLetters = {
          "\xc0": "A",
          "\xc1": "A",
          "\xc2": "A",
          "\xc3": "A",
          "\xc4": "A",
          "\xc5": "A",
          "\xe0": "a",
          "\xe1": "a",
          "\xe2": "a",
          "\xe3": "a",
          "\xe4": "a",
          "\xe5": "a",
          "\xc7": "C",
          "\xe7": "c",
          "\xd0": "D",
          "\xf0": "d",
          "\xc8": "E",
          "\xc9": "E",
          "\xca": "E",
          "\xcb": "E",
          "\xe8": "e",
          "\xe9": "e",
          "\xea": "e",
          "\xeb": "e",
          "\xcc": "I",
          "\xcd": "I",
          "\xce": "I",
          "\xcf": "I",
          "\xec": "i",
          "\xed": "i",
          "\xee": "i",
          "\xef": "i",
          "\xd1": "N",
          "\xf1": "n",
          "\xd2": "O",
          "\xd3": "O",
          "\xd4": "O",
          "\xd5": "O",
          "\xd6": "O",
          "\xd8": "O",
          "\xf2": "o",
          "\xf3": "o",
          "\xf4": "o",
          "\xf5": "o",
          "\xf6": "o",
          "\xf8": "o",
          "\xd9": "U",
          "\xda": "U",
          "\xdb": "U",
          "\xdc": "U",
          "\xf9": "u",
          "\xfa": "u",
          "\xfb": "u",
          "\xfc": "u",
          "\xdd": "Y",
          "\xfd": "y",
          "\xff": "y",
          "\xc6": "Ae",
          "\xe6": "ae",
          "\xde": "Th",
          "\xfe": "th",
          "\xdf": "ss",
          "\u0100": "A",
          "\u0102": "A",
          "\u0104": "A",
          "\u0101": "a",
          "\u0103": "a",
          "\u0105": "a",
          "\u0106": "C",
          "\u0108": "C",
          "\u010a": "C",
          "\u010c": "C",
          "\u0107": "c",
          "\u0109": "c",
          "\u010b": "c",
          "\u010d": "c",
          "\u010e": "D",
          "\u0110": "D",
          "\u010f": "d",
          "\u0111": "d",
          "\u0112": "E",
          "\u0114": "E",
          "\u0116": "E",
          "\u0118": "E",
          "\u011a": "E",
          "\u0113": "e",
          "\u0115": "e",
          "\u0117": "e",
          "\u0119": "e",
          "\u011b": "e",
          "\u011c": "G",
          "\u011e": "G",
          "\u0120": "G",
          "\u0122": "G",
          "\u011d": "g",
          "\u011f": "g",
          "\u0121": "g",
          "\u0123": "g",
          "\u0124": "H",
          "\u0126": "H",
          "\u0125": "h",
          "\u0127": "h",
          "\u0128": "I",
          "\u012a": "I",
          "\u012c": "I",
          "\u012e": "I",
          "\u0130": "I",
          "\u0129": "i",
          "\u012b": "i",
          "\u012d": "i",
          "\u012f": "i",
          "\u0131": "i",
          "\u0134": "J",
          "\u0135": "j",
          "\u0136": "K",
          "\u0137": "k",
          "\u0138": "k",
          "\u0139": "L",
          "\u013b": "L",
          "\u013d": "L",
          "\u013f": "L",
          "\u0141": "L",
          "\u013a": "l",
          "\u013c": "l",
          "\u013e": "l",
          "\u0140": "l",
          "\u0142": "l",
          "\u0143": "N",
          "\u0145": "N",
          "\u0147": "N",
          "\u014a": "N",
          "\u0144": "n",
          "\u0146": "n",
          "\u0148": "n",
          "\u014b": "n",
          "\u014c": "O",
          "\u014e": "O",
          "\u0150": "O",
          "\u014d": "o",
          "\u014f": "o",
          "\u0151": "o",
          "\u0154": "R",
          "\u0156": "R",
          "\u0158": "R",
          "\u0155": "r",
          "\u0157": "r",
          "\u0159": "r",
          "\u015a": "S",
          "\u015c": "S",
          "\u015e": "S",
          "\u0160": "S",
          "\u015b": "s",
          "\u015d": "s",
          "\u015f": "s",
          "\u0161": "s",
          "\u0162": "T",
          "\u0164": "T",
          "\u0166": "T",
          "\u0163": "t",
          "\u0165": "t",
          "\u0167": "t",
          "\u0168": "U",
          "\u016a": "U",
          "\u016c": "U",
          "\u016e": "U",
          "\u0170": "U",
          "\u0172": "U",
          "\u0169": "u",
          "\u016b": "u",
          "\u016d": "u",
          "\u016f": "u",
          "\u0171": "u",
          "\u0173": "u",
          "\u0174": "W",
          "\u0175": "w",
          "\u0176": "Y",
          "\u0177": "y",
          "\u0178": "Y",
          "\u0179": "Z",
          "\u017b": "Z",
          "\u017d": "Z",
          "\u017a": "z",
          "\u017c": "z",
          "\u017e": "z",
          "\u0132": "IJ",
          "\u0133": "ij",
          "\u0152": "Oe",
          "\u0153": "oe",
          "\u0149": "'n",
          "\u017f": "s"
        };
        var htmlEscapes = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        };
        var htmlUnescapes = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        };
        var stringEscapes = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var freeParseFloat = parseFloat, freeParseInt = parseInt;
        var freeGlobal = "object" == typeof global && global && global.Object === Object && global;
        var freeSelf = "object" == typeof self && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var freeExports = "object" == typeof exports && exports && !exports.nodeType && exports;
        var freeModule = freeExports && "object" == typeof module && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = function() {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) return types;
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e) {}
        }();
        var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        function apply(func, thisArg, args) {
          switch (args.length) {
           case 0:
            return func.call(thisArg);

           case 1:
            return func.call(thisArg, args[0]);

           case 2:
            return func.call(thisArg, args[0], args[1]);

           case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }
        function arrayAggregator(array, setter, iteratee, accumulator) {
          var index = -1, length = null == array ? 0 : array.length;
          while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
          }
          return accumulator;
        }
        function arrayEach(array, iteratee) {
          var index = -1, length = null == array ? 0 : array.length;
          while (++index < length) if (false === iteratee(array[index], index, array)) break;
          return array;
        }
        function arrayEachRight(array, iteratee) {
          var length = null == array ? 0 : array.length;
          while (length--) if (false === iteratee(array[length], length, array)) break;
          return array;
        }
        function arrayEvery(array, predicate) {
          var index = -1, length = null == array ? 0 : array.length;
          while (++index < length) if (!predicate(array[index], index, array)) return false;
          return true;
        }
        function arrayFilter(array, predicate) {
          var index = -1, length = null == array ? 0 : array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            predicate(value, index, array) && (result[resIndex++] = value);
          }
          return result;
        }
        function arrayIncludes(array, value) {
          var length = null == array ? 0 : array.length;
          return !!length && baseIndexOf(array, value, 0) > -1;
        }
        function arrayIncludesWith(array, value, comparator) {
          var index = -1, length = null == array ? 0 : array.length;
          while (++index < length) if (comparator(value, array[index])) return true;
          return false;
        }
        function arrayMap(array, iteratee) {
          var index = -1, length = null == array ? 0 : array.length, result = Array(length);
          while (++index < length) result[index] = iteratee(array[index], index, array);
          return result;
        }
        function arrayPush(array, values) {
          var index = -1, length = values.length, offset = array.length;
          while (++index < length) array[offset + index] = values[index];
          return array;
        }
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1, length = null == array ? 0 : array.length;
          initAccum && length && (accumulator = array[++index]);
          while (++index < length) accumulator = iteratee(accumulator, array[index], index, array);
          return accumulator;
        }
        function arrayReduceRight(array, iteratee, accumulator, initAccum) {
          var length = null == array ? 0 : array.length;
          initAccum && length && (accumulator = array[--length]);
          while (length--) accumulator = iteratee(accumulator, array[length], length, array);
          return accumulator;
        }
        function arraySome(array, predicate) {
          var index = -1, length = null == array ? 0 : array.length;
          while (++index < length) if (predicate(array[index], index, array)) return true;
          return false;
        }
        var asciiSize = baseProperty("length");
        function asciiToArray(string) {
          return string.split("");
        }
        function asciiWords(string) {
          return string.match(reAsciiWord) || [];
        }
        function baseFindKey(collection, predicate, eachFunc) {
          var result;
          eachFunc(collection, function(value, key, collection) {
            if (predicate(value, key, collection)) {
              result = key;
              return false;
            }
          });
          return result;
        }
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index-- : ++index < length) if (predicate(array[index], index, array)) return index;
          return -1;
        }
        function baseIndexOf(array, value, fromIndex) {
          return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
        }
        function baseIndexOfWith(array, value, fromIndex, comparator) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) if (comparator(array[index], value)) return index;
          return -1;
        }
        function baseIsNaN(value) {
          return value !== value;
        }
        function baseMean(array, iteratee) {
          var length = null == array ? 0 : array.length;
          return length ? baseSum(array, iteratee) / length : NAN;
        }
        function baseProperty(key) {
          return function(object) {
            return null == object ? undefined : object[key];
          };
        }
        function basePropertyOf(object) {
          return function(key) {
            return null == object ? undefined : object[key];
          };
        }
        function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
          eachFunc(collection, function(value, index, collection) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
          });
          return accumulator;
        }
        function baseSortBy(array, comparer) {
          var length = array.length;
          array.sort(comparer);
          while (length--) array[length] = array[length].value;
          return array;
        }
        function baseSum(array, iteratee) {
          var result, index = -1, length = array.length;
          while (++index < length) {
            var current = iteratee(array[index]);
            current !== undefined && (result = result === undefined ? current : result + current);
          }
          return result;
        }
        function baseTimes(n, iteratee) {
          var index = -1, result = Array(n);
          while (++index < n) result[index] = iteratee(index);
          return result;
        }
        function baseToPairs(object, props) {
          return arrayMap(props, function(key) {
            return [ key, object[key] ];
          });
        }
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }
        function baseValues(object, props) {
          return arrayMap(props, function(key) {
            return object[key];
          });
        }
        function cacheHas(cache, key) {
          return cache.has(key);
        }
        function charsStartIndex(strSymbols, chrSymbols) {
          var index = -1, length = strSymbols.length;
          while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) ;
          return index;
        }
        function charsEndIndex(strSymbols, chrSymbols) {
          var index = strSymbols.length;
          while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) ;
          return index;
        }
        function countHolders(array, placeholder) {
          var length = array.length, result = 0;
          while (length--) array[length] === placeholder && ++result;
          return result;
        }
        var deburrLetter = basePropertyOf(deburredLetters);
        var escapeHtmlChar = basePropertyOf(htmlEscapes);
        function escapeStringChar(chr) {
          return "\\" + stringEscapes[chr];
        }
        function getValue(object, key) {
          return null == object ? undefined : object[key];
        }
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }
        function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string);
        }
        function iteratorToArray(iterator) {
          var data, result = [];
          while (!(data = iterator.next()).done) result.push(data.value);
          return result;
        }
        function mapToArray(map) {
          var index = -1, result = Array(map.size);
          map.forEach(function(value, key) {
            result[++index] = [ key, value ];
          });
          return result;
        }
        function overArg(func, transform) {
          return function(arg) {
            return func(transform(arg));
          };
        }
        function replaceHolders(array, placeholder) {
          var index = -1, length = array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
              array[index] = PLACEHOLDER;
              result[resIndex++] = index;
            }
          }
          return result;
        }
        function safeGet(object, key) {
          return "__proto__" == key ? undefined : object[key];
        }
        function setToArray(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = value;
          });
          return result;
        }
        function setToPairs(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = [ value, value ];
          });
          return result;
        }
        function strictIndexOf(array, value, fromIndex) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) if (array[index] === value) return index;
          return -1;
        }
        function strictLastIndexOf(array, value, fromIndex) {
          var index = fromIndex + 1;
          while (index--) if (array[index] === value) return index;
          return index;
        }
        function stringSize(string) {
          return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
        }
        function stringToArray(string) {
          return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        }
        var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
        function unicodeSize(string) {
          var result = reUnicode.lastIndex = 0;
          while (reUnicode.test(string)) ++result;
          return result;
        }
        function unicodeToArray(string) {
          return string.match(reUnicode) || [];
        }
        function unicodeWords(string) {
          return string.match(reUnicodeWord) || [];
        }
        var runInContext = function runInContext(context) {
          context = null == context ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
          var Array = context.Array, Date = context.Date, Error = context.Error, Function = context.Function, Math = context.Math, Object = context.Object, RegExp = context.RegExp, String = context.String, TypeError = context.TypeError;
          var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
          var coreJsData = context["__core-js_shared__"];
          var funcToString = funcProto.toString;
          var hasOwnProperty = objectProto.hasOwnProperty;
          var idCounter = 0;
          var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
          }();
          var nativeObjectToString = objectProto.toString;
          var objectCtorString = funcToString.call(Object);
          var oldDash = root._;
          var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
          var Buffer = moduleExports ? context.Buffer : undefined, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined, symIterator = Symbol ? Symbol.iterator : undefined, symToStringTag = Symbol ? Symbol.toStringTag : undefined;
          var defineProperty = function() {
            try {
              var func = getNative(Object, "defineProperty");
              func({}, "", {});
              return func;
            } catch (e) {}
          }();
          var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
          var nativeCeil = Math.ceil, nativeFloor = Math.floor, nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object.keys, Object), nativeMax = Math.max, nativeMin = Math.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math.random, nativeReverse = arrayProto.reverse;
          var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object, "create");
          var metaMap = WeakMap && new WeakMap();
          var realNames = {};
          var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
          var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
          function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
              if (value instanceof LodashWrapper) return value;
              if (hasOwnProperty.call(value, "__wrapped__")) return wrapperClone(value);
            }
            return new LodashWrapper(value);
          }
          var baseCreate = function() {
            function object() {}
            return function(proto) {
              if (!isObject(proto)) return {};
              if (objectCreate) return objectCreate(proto);
              object.prototype = proto;
              var result = new object();
              object.prototype = undefined;
              return result;
            };
          }();
          function baseLodash() {}
          function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined;
          }
          lodash.templateSettings = {
            escape: reEscape,
            evaluate: reEvaluate,
            interpolate: reInterpolate,
            variable: "",
            imports: {
              _: lodash
            }
          };
          lodash.prototype = baseLodash.prototype;
          lodash.prototype.constructor = lodash;
          LodashWrapper.prototype = baseCreate(baseLodash.prototype);
          LodashWrapper.prototype.constructor = LodashWrapper;
          function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
          }
          function lazyClone() {
            var result = new LazyWrapper(this.__wrapped__);
            result.__actions__ = copyArray(this.__actions__);
            result.__dir__ = this.__dir__;
            result.__filtered__ = this.__filtered__;
            result.__iteratees__ = copyArray(this.__iteratees__);
            result.__takeCount__ = this.__takeCount__;
            result.__views__ = copyArray(this.__views__);
            return result;
          }
          function lazyReverse() {
            if (this.__filtered__) {
              var result = new LazyWrapper(this);
              result.__dir__ = -1;
              result.__filtered__ = true;
            } else {
              result = this.clone();
              result.__dir__ *= -1;
            }
            return result;
          }
          function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) return baseWrapperValue(array, this.__actions__);
            var result = [];
            outer: while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee = data.iteratee, type = data.type, computed = iteratee(value);
                if (type == LAZY_MAP_FLAG) value = computed; else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) continue outer;
                  break outer;
                }
              }
              result[resIndex++] = value;
            }
            return result;
          }
          LazyWrapper.prototype = baseCreate(baseLodash.prototype);
          LazyWrapper.prototype.constructor = LazyWrapper;
          function Hash(entries) {
            var index = -1, length = null == entries ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }
          function hashDelete(key) {
            var result = this.has(key) && delete this.__data__[key];
            this.size -= result ? 1 : 0;
            return result;
          }
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result = data[key];
              return result === HASH_UNDEFINED ? undefined : result;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined;
          }
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
          }
          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
            return this;
          }
          Hash.prototype.clear = hashClear;
          Hash.prototype["delete"] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;
          function ListCache(entries) {
            var index = -1, length = null == entries ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }
          function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) return false;
            var lastIndex = data.length - 1;
            index == lastIndex ? data.pop() : splice.call(data, index, 1);
            --this.size;
            return true;
          }
          function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? undefined : data[index][1];
          }
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }
          function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              ++this.size;
              data.push([ key, value ]);
            } else data[index][1] = value;
            return this;
          }
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype["delete"] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;
          function MapCache(entries) {
            var index = -1, length = null == entries ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              hash: new Hash(),
              map: new (Map || ListCache)(),
              string: new Hash()
            };
          }
          function mapCacheDelete(key) {
            var result = getMapData(this, key)["delete"](key);
            this.size -= result ? 1 : 0;
            return result;
          }
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }
          function mapCacheSet(key, value) {
            var data = getMapData(this, key), size = data.size;
            data.set(key, value);
            this.size += data.size == size ? 0 : 1;
            return this;
          }
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype["delete"] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;
          function SetCache(values) {
            var index = -1, length = null == values ? 0 : values.length;
            this.__data__ = new MapCache();
            while (++index < length) this.add(values[index]);
          }
          function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
          }
          function setCacheHas(value) {
            return this.__data__.has(value);
          }
          SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
          SetCache.prototype.has = setCacheHas;
          function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size;
          }
          function stackClear() {
            this.__data__ = new ListCache();
            this.size = 0;
          }
          function stackDelete(key) {
            var data = this.__data__, result = data["delete"](key);
            this.size = data.size;
            return result;
          }
          function stackGet(key) {
            return this.__data__.get(key);
          }
          function stackHas(key) {
            return this.__data__.has(key);
          }
          function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
              var pairs = data.__data__;
              if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([ key, value ]);
                this.size = ++data.size;
                return this;
              }
              data = this.__data__ = new MapCache(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
          }
          Stack.prototype.clear = stackClear;
          Stack.prototype["delete"] = stackDelete;
          Stack.prototype.get = stackGet;
          Stack.prototype.has = stackHas;
          Stack.prototype.set = stackSet;
          function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
            for (var key in value) !inherited && !hasOwnProperty.call(value, key) || skipIndexes && ("length" == key || isBuff && ("offset" == key || "parent" == key) || isType && ("buffer" == key || "byteLength" == key || "byteOffset" == key) || isIndex(key, length)) || result.push(key);
            return result;
          }
          function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined;
          }
          function arraySampleSize(array, n) {
            return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
          }
          function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
          }
          function assignMergeValue(object, key, value) {
            (value === undefined || eq(object[key], value)) && (value !== undefined || key in object) || baseAssignValue(object, key, value);
          }
          function assignValue(object, key, value) {
            var objValue = object[key];
            hasOwnProperty.call(object, key) && eq(objValue, value) && (value !== undefined || key in object) || baseAssignValue(object, key, value);
          }
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) if (eq(array[length][0], key)) return length;
            return -1;
          }
          function baseAggregator(collection, setter, iteratee, accumulator) {
            baseEach(collection, function(value, key, collection) {
              setter(accumulator, value, iteratee(value), collection);
            });
            return accumulator;
          }
          function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
          }
          function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
          }
          function baseAssignValue(object, key, value) {
            "__proto__" == key && defineProperty ? defineProperty(object, key, {
              configurable: true,
              enumerable: true,
              value: value,
              writable: true
            }) : object[key] = value;
          }
          function baseAt(object, paths) {
            var index = -1, length = paths.length, result = Array(length), skip = null == object;
            while (++index < length) result[index] = skip ? undefined : get(object, paths[index]);
            return result;
          }
          function baseClamp(number, lower, upper) {
            if (number === number) {
              upper !== undefined && (number = number <= upper ? number : upper);
              lower !== undefined && (number = number >= lower ? number : lower);
            }
            return number;
          }
          function baseClone(value, bitmask, customizer, key, object, stack) {
            var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            customizer && (result = object ? customizer(value, key, object, stack) : customizer(value));
            if (result !== undefined) return result;
            if (!isObject(value)) return value;
            var isArr = isArray(value);
            if (isArr) {
              result = initCloneArray(value);
              if (!isDeep) return copyArray(value, result);
            } else {
              var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
              if (isBuffer(value)) return cloneBuffer(value, isDeep);
              if (tag == objectTag || tag == argsTag || isFunc && !object) {
                result = isFlat || isFunc ? {} : initCloneObject(value);
                if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
              } else {
                if (!cloneableTags[tag]) return object ? value : {};
                result = initCloneByTag(value, tag, isDeep);
              }
            }
            stack || (stack = new Stack());
            var stacked = stack.get(value);
            if (stacked) return stacked;
            stack.set(value, result);
            if (isSet(value)) {
              value.forEach(function(subValue) {
                result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
              });
              return result;
            }
            if (isMap(value)) {
              value.forEach(function(subValue, key) {
                result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
              });
              return result;
            }
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
            var props = isArr ? undefined : keysFunc(value);
            arrayEach(props || value, function(subValue, key) {
              if (props) {
                key = subValue;
                subValue = value[key];
              }
              assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
            });
            return result;
          }
          function baseConforms(source) {
            var props = keys(source);
            return function(object) {
              return baseConformsTo(object, source, props);
            };
          }
          function baseConformsTo(object, source, props) {
            var length = props.length;
            if (null == object) return !length;
            object = Object(object);
            while (length--) {
              var key = props[length], predicate = source[key], value = object[key];
              if (value === undefined && !(key in object) || !predicate(value)) return false;
            }
            return true;
          }
          function baseDelay(func, wait, args) {
            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
            return setTimeout(function() {
              func.apply(undefined, args);
            }, wait);
          }
          function baseDifference(array, values, iteratee, comparator) {
            var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
            if (!length) return result;
            iteratee && (values = arrayMap(values, baseUnary(iteratee)));
            if (comparator) {
              includes = arrayIncludesWith;
              isCommon = false;
            } else if (values.length >= LARGE_ARRAY_SIZE) {
              includes = cacheHas;
              isCommon = false;
              values = new SetCache(values);
            }
            outer: while (++index < length) {
              var value = array[index], computed = null == iteratee ? value : iteratee(value);
              value = comparator || 0 !== value ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) if (values[valuesIndex] === computed) continue outer;
                result.push(value);
              } else includes(values, computed, comparator) || result.push(value);
            }
            return result;
          }
          var baseEach = createBaseEach(baseForOwn);
          var baseEachRight = createBaseEach(baseForOwnRight, true);
          function baseEvery(collection, predicate) {
            var result = true;
            baseEach(collection, function(value, index, collection) {
              result = !!predicate(value, index, collection);
              return result;
            });
            return result;
          }
          function baseExtremum(array, iteratee, comparator) {
            var index = -1, length = array.length;
            while (++index < length) {
              var value = array[index], current = iteratee(value);
              if (null != current && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) var computed = current, result = value;
            }
            return result;
          }
          function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            start < 0 && (start = -start > length ? 0 : length + start);
            end = end === undefined || end > length ? length : toInteger(end);
            end < 0 && (end += length);
            end = start > end ? 0 : toLength(end);
            while (start < end) array[start++] = value;
            return array;
          }
          function baseFilter(collection, predicate) {
            var result = [];
            baseEach(collection, function(value, index, collection) {
              predicate(value, index, collection) && result.push(value);
            });
            return result;
          }
          function baseFlatten(array, depth, predicate, isStrict, result) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result || (result = []);
            while (++index < length) {
              var value = array[index];
              depth > 0 && predicate(value) ? depth > 1 ? baseFlatten(value, depth - 1, predicate, isStrict, result) : arrayPush(result, value) : isStrict || (result[result.length] = value);
            }
            return result;
          }
          var baseFor = createBaseFor();
          var baseForRight = createBaseFor(true);
          function baseForOwn(object, iteratee) {
            return object && baseFor(object, iteratee, keys);
          }
          function baseForOwnRight(object, iteratee) {
            return object && baseForRight(object, iteratee, keys);
          }
          function baseFunctions(object, props) {
            return arrayFilter(props, function(key) {
              return isFunction(object[key]);
            });
          }
          function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while (null != object && index < length) object = object[toKey(path[index++])];
            return index && index == length ? object : undefined;
          }
          function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result = keysFunc(object);
            return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
          }
          function baseGetTag(value) {
            if (null == value) return value === undefined ? undefinedTag : nullTag;
            return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
          }
          function baseGt(value, other) {
            return value > other;
          }
          function baseHas(object, key) {
            return null != object && hasOwnProperty.call(object, key);
          }
          function baseHasIn(object, key) {
            return null != object && key in Object(object);
          }
          function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
          }
          function baseIntersection(arrays, iteratee, comparator) {
            var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = Infinity, result = [];
            while (othIndex--) {
              var array = arrays[othIndex];
              othIndex && iteratee && (array = arrayMap(array, baseUnary(iteratee)));
              maxLength = nativeMin(array.length, maxLength);
              caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer: while (++index < length && result.length < maxLength) {
              var value = array[index], computed = iteratee ? iteratee(value) : value;
              value = comparator || 0 !== value ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) continue outer;
                }
                seen && seen.push(computed);
                result.push(value);
              }
            }
            return result;
          }
          function baseInverter(object, setter, iteratee, accumulator) {
            baseForOwn(object, function(value, key, object) {
              setter(accumulator, iteratee(value), key, object);
            });
            return accumulator;
          }
          function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = null == object ? object : object[toKey(last(path))];
            return null == func ? undefined : apply(func, object, args);
          }
          function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
          }
          function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
          }
          function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag;
          }
          function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) return true;
            if (null == value || null == other || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
          }
          function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
              if (!isBuffer(other)) return false;
              objIsArr = true;
              objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
              stack || (stack = new Stack());
              return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
              var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
              if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                stack || (stack = new Stack());
                return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
              }
            }
            if (!isSameTag) return false;
            stack || (stack = new Stack());
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
          }
          function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag;
          }
          function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (null == object) return !length;
            object = Object(object);
            while (index--) {
              var data = matchData[index];
              if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
            }
            while (++index < length) {
              data = matchData[index];
              var key = data[0], objValue = object[key], srcValue = data[1];
              if (noCustomizer && data[2]) {
                if (objValue === undefined && !(key in object)) return false;
              } else {
                var stack = new Stack();
                if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
                if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false;
              }
            }
            return true;
          }
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) return false;
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }
          function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag;
          }
          function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag;
          }
          function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
          }
          function baseIteratee(value) {
            if ("function" == typeof value) return value;
            if (null == value) return identity;
            if ("object" == typeof value) return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            return property(value);
          }
          function baseKeys(object) {
            if (!isPrototype(object)) return nativeKeys(object);
            var result = [];
            for (var key in Object(object)) hasOwnProperty.call(object, key) && "constructor" != key && result.push(key);
            return result;
          }
          function baseKeysIn(object) {
            if (!isObject(object)) return nativeKeysIn(object);
            var isProto = isPrototype(object), result = [];
            for (var key in object) "constructor" == key && (isProto || !hasOwnProperty.call(object, key)) || result.push(key);
            return result;
          }
          function baseLt(value, other) {
            return value < other;
          }
          function baseMap(collection, iteratee) {
            var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
            baseEach(collection, function(value, key, collection) {
              result[++index] = iteratee(value, key, collection);
            });
            return result;
          }
          function baseMatches(source) {
            var matchData = getMatchData(source);
            if (1 == matchData.length && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            return function(object) {
              return object === source || baseIsMatch(object, source, matchData);
            };
          }
          function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
            return function(object) {
              var objValue = get(object, path);
              return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
          }
          function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) return;
            baseFor(source, function(srcValue, key) {
              if (isObject(srcValue)) {
                stack || (stack = new Stack());
                baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
              } else {
                var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined;
                newValue === undefined && (newValue = srcValue);
                assignMergeValue(object, key, newValue);
              }
            }, keysIn);
          }
          function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
              assignMergeValue(object, key, stacked);
              return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined;
            var isCommon = newValue === undefined;
            if (isCommon) {
              var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
              newValue = srcValue;
              if (isArr || isBuff || isTyped) if (isArray(objValue)) newValue = objValue; else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue); else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else newValue = []; else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                newValue = objValue;
                isArguments(objValue) ? newValue = toPlainObject(objValue) : (!isObject(objValue) || srcIndex && isFunction(objValue)) && (newValue = initCloneObject(srcValue));
              } else isCommon = false;
            }
            if (isCommon) {
              stack.set(srcValue, newValue);
              mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
              stack["delete"](srcValue);
            }
            assignMergeValue(object, key, newValue);
          }
          function baseNth(array, n) {
            var length = array.length;
            if (!length) return;
            n += n < 0 ? length : 0;
            return isIndex(n, length) ? array[n] : undefined;
          }
          function baseOrderBy(collection, iteratees, orders) {
            var index = -1;
            iteratees = arrayMap(iteratees.length ? iteratees : [ identity ], baseUnary(getIteratee()));
            var result = baseMap(collection, function(value, key, collection) {
              var criteria = arrayMap(iteratees, function(iteratee) {
                return iteratee(value);
              });
              return {
                criteria: criteria,
                index: ++index,
                value: value
              };
            });
            return baseSortBy(result, function(object, other) {
              return compareMultiple(object, other, orders);
            });
          }
          function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path) {
              return hasIn(object, path);
            });
          }
          function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result = {};
            while (++index < length) {
              var path = paths[index], value = baseGet(object, path);
              predicate(value, path) && baseSet(result, castPath(path, object), value);
            }
            return result;
          }
          function basePropertyDeep(path) {
            return function(object) {
              return baseGet(object, path);
            };
          }
          function basePullAll(array, values, iteratee, comparator) {
            var indexOf = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values.length, seen = array;
            array === values && (values = copyArray(values));
            iteratee && (seen = arrayMap(array, baseUnary(iteratee)));
            while (++index < length) {
              var fromIndex = 0, value = values[index], computed = iteratee ? iteratee(value) : value;
              while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
                seen !== array && splice.call(seen, fromIndex, 1);
                splice.call(array, fromIndex, 1);
              }
            }
            return array;
          }
          function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while (length--) {
              var index = indexes[length];
              if (length == lastIndex || index !== previous) {
                var previous = index;
                isIndex(index) ? splice.call(array, index, 1) : baseUnset(array, index);
              }
            }
            return array;
          }
          function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
          }
          function baseRange(start, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
            while (length--) {
              result[fromRight ? length : ++index] = start;
              start += step;
            }
            return result;
          }
          function baseRepeat(string, n) {
            var result = "";
            if (!string || n < 1 || n > MAX_SAFE_INTEGER) return result;
            do {
              n % 2 && (result += string);
              n = nativeFloor(n / 2);
              n && (string += string);
            } while (n);
            return result;
          }
          function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + "");
          }
          function baseSample(collection) {
            return arraySample(values(collection));
          }
          function baseSampleSize(collection, n) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n, 0, array.length));
          }
          function baseSet(object, path, value, customizer) {
            if (!isObject(object)) return object;
            path = castPath(path, object);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while (null != nested && ++index < length) {
              var key = toKey(path[index]), newValue = value;
              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined;
                newValue === undefined && (newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {});
              }
              assignValue(nested, key, newValue);
              nested = nested[key];
            }
            return object;
          }
          var baseSetData = metaMap ? function(func, data) {
            metaMap.set(func, data);
            return func;
          } : identity;
          var baseSetToString = defineProperty ? function(func, string) {
            return defineProperty(func, "toString", {
              configurable: true,
              enumerable: false,
              value: constant(string),
              writable: true
            });
          } : identity;
          function baseShuffle(collection) {
            return shuffleSelf(values(collection));
          }
          function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            start < 0 && (start = -start > length ? 0 : length + start);
            end = end > length ? length : end;
            end < 0 && (end += length);
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result = Array(length);
            while (++index < length) result[index] = array[index + start];
            return result;
          }
          function baseSome(collection, predicate) {
            var result;
            baseEach(collection, function(value, index, collection) {
              result = predicate(value, index, collection);
              return !result;
            });
            return !!result;
          }
          function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = null == array ? low : array.length;
            if ("number" == typeof value && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
              while (low < high) {
                var mid = low + high >>> 1, computed = array[mid];
                null !== computed && !isSymbol(computed) && (retHighest ? computed <= value : computed < value) ? low = mid + 1 : high = mid;
              }
              return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
          }
          function baseSortedIndexBy(array, value, iteratee, retHighest) {
            value = iteratee(value);
            var low = 0, high = null == array ? 0 : array.length, valIsNaN = value !== value, valIsNull = null === value, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined;
            while (low < high) {
              var mid = nativeFloor((low + high) / 2), computed = iteratee(array[mid]), othIsDefined = computed !== undefined, othIsNull = null === computed, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
              if (valIsNaN) var setLow = retHighest || othIsReflexive; else setLow = valIsUndefined ? othIsReflexive && (retHighest || othIsDefined) : valIsNull ? othIsReflexive && othIsDefined && (retHighest || !othIsNull) : valIsSymbol ? othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol) : !othIsNull && !othIsSymbol && (retHighest ? computed <= value : computed < value);
              setLow ? low = mid + 1 : high = mid;
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
          }
          function baseSortedUniq(array, iteratee) {
            var index = -1, length = array.length, resIndex = 0, result = [];
            while (++index < length) {
              var value = array[index], computed = iteratee ? iteratee(value) : value;
              if (!index || !eq(computed, seen)) {
                var seen = computed;
                result[resIndex++] = 0 === value ? 0 : value;
              }
            }
            return result;
          }
          function baseToNumber(value) {
            if ("number" == typeof value) return value;
            if (isSymbol(value)) return NAN;
            return +value;
          }
          function baseToString(value) {
            if ("string" == typeof value) return value;
            if (isArray(value)) return arrayMap(value, baseToString) + "";
            if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
            var result = value + "";
            return "0" == result && 1 / value == -INFINITY ? "-0" : result;
          }
          function baseUniq(array, iteratee, comparator) {
            var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
            if (comparator) {
              isCommon = false;
              includes = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE) {
              var set = iteratee ? null : createSet(array);
              if (set) return setToArray(set);
              isCommon = false;
              includes = cacheHas;
              seen = new SetCache();
            } else seen = iteratee ? [] : result;
            outer: while (++index < length) {
              var value = array[index], computed = iteratee ? iteratee(value) : value;
              value = comparator || 0 !== value ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) if (seen[seenIndex] === computed) continue outer;
                iteratee && seen.push(computed);
                result.push(value);
              } else if (!includes(seen, computed, comparator)) {
                seen !== result && seen.push(computed);
                result.push(value);
              }
            }
            return result;
          }
          function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent(object, path);
            return null == object || delete object[toKey(last(path))];
          }
          function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
          }
          function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) ;
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
          }
          function baseWrapperValue(value, actions) {
            var result = value;
            result instanceof LazyWrapper && (result = result.value());
            return arrayReduce(actions, function(result, action) {
              return action.func.apply(action.thisArg, arrayPush([ result ], action.args));
            }, result);
          }
          function baseXor(arrays, iteratee, comparator) {
            var length = arrays.length;
            if (length < 2) return length ? baseUniq(arrays[0]) : [];
            var index = -1, result = Array(length);
            while (++index < length) {
              var array = arrays[index], othIndex = -1;
              while (++othIndex < length) othIndex != index && (result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator));
            }
            return baseUniq(baseFlatten(result, 1), iteratee, comparator);
          }
          function baseZipObject(props, values, assignFunc) {
            var index = -1, length = props.length, valsLength = values.length, result = {};
            while (++index < length) {
              var value = index < valsLength ? values[index] : undefined;
              assignFunc(result, props[index], value);
            }
            return result;
          }
          function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
          }
          function castFunction(value) {
            return "function" == typeof value ? value : identity;
          }
          function castPath(value, object) {
            if (isArray(value)) return value;
            return isKey(value, object) ? [ value ] : stringToPath(toString(value));
          }
          var castRest = baseRest;
          function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
          }
          var clearTimeout = ctxClearTimeout || function(id) {
            return root.clearTimeout(id);
          };
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) return buffer.slice();
            var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result);
            return result;
          }
          function cloneArrayBuffer(arrayBuffer) {
            var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array(result).set(new Uint8Array(arrayBuffer));
            return result;
          }
          function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
          }
          function cloneRegExp(regexp) {
            var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result.lastIndex = regexp.lastIndex;
            return result;
          }
          function cloneSymbol(symbol) {
            return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
          }
          function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
          }
          function compareAscending(value, other) {
            if (value !== other) {
              var valIsDefined = value !== undefined, valIsNull = null === value, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
              var othIsDefined = other !== undefined, othIsNull = null === other, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
              if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
              if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
            }
            return 0;
          }
          function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while (++index < length) {
              var result = compareAscending(objCriteria[index], othCriteria[index]);
              if (result) {
                if (index >= ordersLength) return result;
                var order = orders[index];
                return result * ("desc" == order ? -1 : 1);
              }
            }
            return object.index - other.index;
          }
          function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
            while (++leftIndex < leftLength) result[leftIndex] = partials[leftIndex];
            while (++argsIndex < holdersLength) (isUncurried || argsIndex < argsLength) && (result[holders[argsIndex]] = args[argsIndex]);
            while (rangeLength--) result[leftIndex++] = args[argsIndex++];
            return result;
          }
          function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
            while (++argsIndex < rangeLength) result[argsIndex] = args[argsIndex];
            var offset = argsIndex;
            while (++rightIndex < rightLength) result[offset + rightIndex] = partials[rightIndex];
            while (++holdersIndex < holdersLength) (isUncurried || argsIndex < argsLength) && (result[offset + holders[holdersIndex]] = args[argsIndex++]);
            return result;
          }
          function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array(length));
            while (++index < length) array[index] = source[index];
            return array;
          }
          function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while (++index < length) {
              var key = props[index];
              var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
              newValue === undefined && (newValue = source[key]);
              isNew ? baseAssignValue(object, key, newValue) : assignValue(object, key, newValue);
            }
            return object;
          }
          function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
          }
          function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
          }
          function createAggregator(setter, initializer) {
            return function(collection, iteratee) {
              var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
              return func(collection, setter, getIteratee(iteratee, 2), accumulator);
            };
          }
          function createAssigner(assigner) {
            return baseRest(function(object, sources) {
              var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
              customizer = assigner.length > 3 && "function" == typeof customizer ? (length--, 
              customizer) : undefined;
              if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined : customizer;
                length = 1;
              }
              object = Object(object);
              while (++index < length) {
                var source = sources[index];
                source && assigner(object, source, index, customizer);
              }
              return object;
            });
          }
          function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee) {
              if (null == collection) return collection;
              if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
              var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
              while (fromRight ? index-- : ++index < length) if (false === iteratee(iterable[index], index, iterable)) break;
              return collection;
            };
          }
          function createBaseFor(fromRight) {
            return function(object, iteratee, keysFunc) {
              var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
              while (length--) {
                var key = props[fromRight ? length : ++index];
                if (false === iteratee(iterable[key], key, iterable)) break;
              }
              return object;
            };
          }
          function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
          }
          function createCaseFirst(methodName) {
            return function(string) {
              string = toString(string);
              var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
              var chr = strSymbols ? strSymbols[0] : string.charAt(0);
              var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
              return chr[methodName]() + trailing;
            };
          }
          function createCompounder(callback) {
            return function(string) {
              return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
            };
          }
          function createCtor(Ctor) {
            return function() {
              var args = arguments;
              switch (args.length) {
               case 0:
                return new Ctor();

               case 1:
                return new Ctor(args[0]);

               case 2:
                return new Ctor(args[0], args[1]);

               case 3:
                return new Ctor(args[0], args[1], args[2]);

               case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);

               case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);

               case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);

               case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
              }
              var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
              return isObject(result) ? result : thisBinding;
            };
          }
          function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper);
              while (index--) args[index] = arguments[index];
              var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
              length -= holders.length;
              if (length < arity) return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return apply(fn, this, args);
            }
            return wrapper;
          }
          function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
              var iterable = Object(collection);
              if (!isArrayLike(collection)) {
                var iteratee = getIteratee(predicate, 3);
                collection = keys(collection);
                predicate = function(key) {
                  return iteratee(iterable[key], key, iterable);
                };
              }
              var index = findIndexFunc(collection, predicate, fromIndex);
              return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
            };
          }
          function createFlow(fromRight) {
            return flatRest(function(funcs) {
              var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
              fromRight && funcs.reverse();
              while (index--) {
                var func = funcs[index];
                if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                if (prereq && !wrapper && "wrapper" == getFuncName(func)) var wrapper = new LodashWrapper([], true);
              }
              index = wrapper ? index : length;
              while (++index < length) {
                func = funcs[index];
                var funcName = getFuncName(func), data = "wrapper" == funcName ? getData(func) : undefined;
                wrapper = data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && 1 == data[9] ? wrapper[getFuncName(data[0])].apply(wrapper, data[3]) : 1 == func.length && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
              return function() {
                var args = arguments, value = args[0];
                if (wrapper && 1 == args.length && isArray(value)) return wrapper.plant(value).value();
                var index = 0, result = length ? funcs[index].apply(this, args) : value;
                while (++index < length) result = funcs[index].call(this, result);
                return result;
              };
            });
          }
          function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined : createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array(length), index = length;
              while (index--) args[index] = arguments[index];
              if (isCurried) var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
              partials && (args = composeArgs(args, partials, holders, isCurried));
              partialsRight && (args = composeArgsRight(args, partialsRight, holdersRight, isCurried));
              length -= holdersCount;
              if (isCurried && length < arity) {
                var newHolders = replaceHolders(args, placeholder);
                return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
              }
              var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
              length = args.length;
              argPos ? args = reorder(args, argPos) : isFlip && length > 1 && args.reverse();
              isAry && ary < length && (args.length = ary);
              this && this !== root && this instanceof wrapper && (fn = Ctor || createCtor(fn));
              return fn.apply(thisBinding, args);
            }
            return wrapper;
          }
          function createInverter(setter, toIteratee) {
            return function(object, iteratee) {
              return baseInverter(object, setter, toIteratee(iteratee), {});
            };
          }
          function createMathOperation(operator, defaultValue) {
            return function(value, other) {
              var result;
              if (value === undefined && other === undefined) return defaultValue;
              value !== undefined && (result = value);
              if (other !== undefined) {
                if (result === undefined) return other;
                if ("string" == typeof value || "string" == typeof other) {
                  value = baseToString(value);
                  other = baseToString(other);
                } else {
                  value = baseToNumber(value);
                  other = baseToNumber(other);
                }
                result = operator(value, other);
              }
              return result;
            };
          }
          function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
              iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
              return baseRest(function(args) {
                var thisArg = this;
                return arrayFunc(iteratees, function(iteratee) {
                  return apply(iteratee, thisArg, args);
                });
              });
            });
          }
          function createPadding(length, chars) {
            chars = chars === undefined ? " " : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) return charsLength ? baseRepeat(chars, length) : chars;
            var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join("") : result.slice(0, length);
          }
          function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              while (++leftIndex < leftLength) args[leftIndex] = partials[leftIndex];
              while (argsLength--) args[leftIndex++] = arguments[++argsIndex];
              return apply(fn, isBind ? thisArg : this, args);
            }
            return wrapper;
          }
          function createRange(fromRight) {
            return function(start, end, step) {
              step && "number" != typeof step && isIterateeCall(start, end, step) && (end = step = undefined);
              start = toFinite(start);
              if (end === undefined) {
                end = start;
                start = 0;
              } else end = toFinite(end);
              step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
              return baseRange(start, end, step, fromRight);
            };
          }
          function createRelationalOperation(operator) {
            return function(value, other) {
              if (!("string" == typeof value && "string" == typeof other)) {
                value = toNumber(value);
                other = toNumber(other);
              }
              return operator(value, other);
            };
          }
          function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined, newHoldersRight = isCurry ? undefined : holders, newPartials = isCurry ? partials : undefined, newPartialsRight = isCurry ? undefined : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            bitmask & WRAP_CURRY_BOUND_FLAG || (bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG));
            var newData = [ func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity ];
            var result = wrapFunc.apply(undefined, newData);
            isLaziable(func) && setData(result, newData);
            result.placeholder = placeholder;
            return setWrapToString(result, func, bitmask);
          }
          function createRound(methodName) {
            var func = Math[methodName];
            return function(number, precision) {
              number = toNumber(number);
              precision = null == precision ? 0 : nativeMin(toInteger(precision), 292);
              if (precision) {
                var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                pair = (toString(value) + "e").split("e");
                return +(pair[0] + "e" + (+pair[1] - precision));
              }
              return func(number);
            };
          }
          var createSet = Set && 1 / setToArray(new Set([ , -0 ]))[1] == INFINITY ? function(values) {
            return new Set(values);
          } : noop;
          function createToPairs(keysFunc) {
            return function(object) {
              var tag = getTag(object);
              if (tag == mapTag) return mapToArray(object);
              if (tag == setTag) return setToPairs(object);
              return baseToPairs(object, keysFunc(object));
            };
          }
          function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && "function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
            var length = partials ? partials.length : 0;
            if (!length) {
              bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
              partials = holders = undefined;
            }
            ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
            arity = arity === undefined ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
              var partialsRight = partials, holdersRight = holders;
              partials = holders = undefined;
            }
            var data = isBindKey ? undefined : getData(func);
            var newData = [ func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity ];
            data && mergeData(newData, data);
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            !arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG) && (bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG));
            if (bitmask && bitmask != WRAP_BIND_FLAG) result = bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG ? createCurry(func, bitmask, arity) : bitmask != WRAP_PARTIAL_FLAG && bitmask != (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG) || holders.length ? createHybrid.apply(undefined, newData) : createPartial(func, bitmask, thisArg, partials); else var result = createBind(func, bitmask, thisArg);
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result, newData), func, bitmask);
          }
          function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) return srcValue;
            return objValue;
          }
          function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
              stack.set(srcValue, objValue);
              baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
              stack["delete"](srcValue);
            }
            return objValue;
          }
          function customOmitClone(value) {
            return isPlainObject(value) ? undefined : value;
          }
          function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
            var stacked = stack.get(array);
            if (stacked && stack.get(other)) return stacked == other;
            var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
            stack.set(array, other);
            stack.set(other, array);
            while (++index < arrLength) {
              var arrValue = array[index], othValue = other[index];
              if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
              if (compared !== undefined) {
                if (compared) continue;
                result = false;
                break;
              }
              if (seen) {
                if (!arraySome(other, function(othValue, othIndex) {
                  if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
                })) {
                  result = false;
                  break;
                }
              } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                result = false;
                break;
              }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result;
          }
          function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
             case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
              object = object.buffer;
              other = other.buffer;

             case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
              return true;

             case boolTag:
             case dateTag:
             case numberTag:
              return eq(+object, +other);

             case errorTag:
              return object.name == other.name && object.message == other.message;

             case regexpTag:
             case stringTag:
              return object == other + "";

             case mapTag:
              var convert = mapToArray;

             case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) return false;
              var stacked = stack.get(object);
              if (stacked) return stacked == other;
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result;

             case symbolTag:
              if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
            return false;
          }
          function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) return false;
            var index = objLength;
            while (index--) {
              var key = objProps[index];
              if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
            }
            var stacked = stack.get(object);
            if (stacked && stack.get(other)) return stacked == other;
            var result = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
              key = objProps[index];
              var objValue = object[key], othValue = other[key];
              if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
              if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                result = false;
                break;
              }
              skipCtor || (skipCtor = "constructor" == key);
            }
            if (result && !skipCtor) {
              var objCtor = object.constructor, othCtor = other.constructor;
              objCtor != othCtor && "constructor" in object && "constructor" in other && !("function" == typeof objCtor && objCtor instanceof objCtor && "function" == typeof othCtor && othCtor instanceof othCtor) && (result = false);
            }
            stack["delete"](object);
            stack["delete"](other);
            return result;
          }
          function flatRest(func) {
            return setToString(overRest(func, undefined, flatten), func + "");
          }
          function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
          }
          function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
          }
          var getData = metaMap ? function(func) {
            return metaMap.get(func);
          } : noop;
          function getFuncName(func) {
            var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
            while (length--) {
              var data = array[length], otherFunc = data.func;
              if (null == otherFunc || otherFunc == func) return data.name;
            }
            return result;
          }
          function getHolder(func) {
            var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
            return object.placeholder;
          }
          function getIteratee() {
            var result = lodash.iteratee || iteratee;
            result = result === iteratee ? baseIteratee : result;
            return arguments.length ? result(arguments[0], arguments[1]) : result;
          }
          function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key) ? data["string" == typeof key ? "string" : "hash"] : data.map;
          }
          function getMatchData(object) {
            var result = keys(object), length = result.length;
            while (length--) {
              var key = result[length], value = object[key];
              result[length] = [ key, value, isStrictComparable(value) ];
            }
            return result;
          }
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined;
          }
          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
              value[symToStringTag] = undefined;
              var unmasked = true;
            } catch (e) {}
            var result = nativeObjectToString.call(value);
            unmasked && (isOwn ? value[symToStringTag] = tag : delete value[symToStringTag]);
            return result;
          }
          var getSymbols = nativeGetSymbols ? function(object) {
            if (null == object) return [];
            object = Object(object);
            return arrayFilter(nativeGetSymbols(object), function(symbol) {
              return propertyIsEnumerable.call(object, symbol);
            });
          } : stubArray;
          var getSymbolsIn = nativeGetSymbols ? function(object) {
            var result = [];
            while (object) {
              arrayPush(result, getSymbols(object));
              object = getPrototype(object);
            }
            return result;
          } : stubArray;
          var getTag = baseGetTag;
          (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) && (getTag = function(value) {
            var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) switch (ctorString) {
             case dataViewCtorString:
              return dataViewTag;

             case mapCtorString:
              return mapTag;

             case promiseCtorString:
              return promiseTag;

             case setCtorString:
              return setTag;

             case weakMapCtorString:
              return weakMapTag;
            }
            return result;
          });
          function getView(start, end, transforms) {
            var index = -1, length = transforms.length;
            while (++index < length) {
              var data = transforms[index], size = data.size;
              switch (data.type) {
               case "drop":
                start += size;
                break;

               case "dropRight":
                end -= size;
                break;

               case "take":
                end = nativeMin(end, start + size);
                break;

               case "takeRight":
                start = nativeMax(start, end - size);
              }
            }
            return {
              start: start,
              end: end
            };
          }
          function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
          }
          function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result = false;
            while (++index < length) {
              var key = toKey(path[index]);
              if (!(result = null != object && hasFunc(object, key))) break;
              object = object[key];
            }
            if (result || ++index != length) return result;
            length = null == object ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
          }
          function initCloneArray(array) {
            var length = array.length, result = new array.constructor(length);
            if (length && "string" == typeof array[0] && hasOwnProperty.call(array, "index")) {
              result.index = array.index;
              result.input = array.input;
            }
            return result;
          }
          function initCloneObject(object) {
            return "function" != typeof object.constructor || isPrototype(object) ? {} : baseCreate(getPrototype(object));
          }
          function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
             case arrayBufferTag:
              return cloneArrayBuffer(object);

             case boolTag:
             case dateTag:
              return new Ctor(+object);

             case dataViewTag:
              return cloneDataView(object, isDeep);

             case float32Tag:
             case float64Tag:
             case int8Tag:
             case int16Tag:
             case int32Tag:
             case uint8Tag:
             case uint8ClampedTag:
             case uint16Tag:
             case uint32Tag:
              return cloneTypedArray(object, isDeep);

             case mapTag:
              return new Ctor();

             case numberTag:
             case stringTag:
              return new Ctor(object);

             case regexpTag:
              return cloneRegExp(object);

             case setTag:
              return new Ctor();

             case symbolTag:
              return cloneSymbol(object);
            }
          }
          function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) return source;
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
            details = details.join(length > 2 ? ", " : " ");
            return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
          }
          function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
          }
          function isIndex(value, length) {
            var type = typeof value;
            length = null == length ? MAX_SAFE_INTEGER : length;
            return !!length && ("number" == type || "symbol" != type && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
          }
          function isIterateeCall(value, index, object) {
            if (!isObject(object)) return false;
            var type = typeof index;
            if ("number" == type ? isArrayLike(object) && isIndex(index, object.length) : "string" == type && index in object) return eq(object[index], value);
            return false;
          }
          function isKey(value, object) {
            if (isArray(value)) return false;
            var type = typeof value;
            if ("number" == type || "symbol" == type || "boolean" == type || null == value || isSymbol(value)) return true;
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || null != object && value in Object(object);
          }
          function isKeyable(value) {
            var type = typeof value;
            return "string" == type || "number" == type || "symbol" == type || "boolean" == type ? "__proto__" !== value : null === value;
          }
          function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash[funcName];
            if ("function" != typeof other || !(funcName in LazyWrapper.prototype)) return false;
            if (func === other) return true;
            var data = getData(other);
            return !!data && func === data[0];
          }
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }
          var isMaskable = coreJsData ? isFunction : stubFalse;
          function isPrototype(value) {
            var Ctor = value && value.constructor, proto = "function" == typeof Ctor && Ctor.prototype || objectProto;
            return value === proto;
          }
          function isStrictComparable(value) {
            return value === value && !isObject(value);
          }
          function matchesStrictComparable(key, srcValue) {
            return function(object) {
              if (null == object) return false;
              return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
            };
          }
          function memoizeCapped(func) {
            var result = memoize(func, function(key) {
              cache.size === MAX_MEMOIZE_SIZE && cache.clear();
              return key;
            });
            var cache = result.cache;
            return result;
          }
          function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            if (!(isCommon || isCombo)) return data;
            if (srcBitmask & WRAP_BIND_FLAG) {
              data[2] = source[2];
              newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            var value = source[3];
            if (value) {
              var partials = data[3];
              data[3] = partials ? composeArgs(partials, value, source[4]) : value;
              data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            value = source[5];
            if (value) {
              partials = data[5];
              data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
              data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            value = source[7];
            value && (data[7] = value);
            srcBitmask & WRAP_ARY_FLAG && (data[8] = null == data[8] ? source[8] : nativeMin(data[8], source[8]));
            null == data[9] && (data[9] = source[9]);
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
          }
          function nativeKeysIn(object) {
            var result = [];
            if (null != object) for (var key in Object(object)) result.push(key);
            return result;
          }
          function objectToString(value) {
            return nativeObjectToString.call(value);
          }
          function overRest(func, start, transform) {
            start = nativeMax(start === undefined ? func.length - 1 : start, 0);
            return function() {
              var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
              while (++index < length) array[index] = args[start + index];
              index = -1;
              var otherArgs = Array(start + 1);
              while (++index < start) otherArgs[index] = args[index];
              otherArgs[start] = transform(array);
              return apply(func, this, otherArgs);
            };
          }
          function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
          }
          function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while (length--) {
              var index = indexes[length];
              array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
            }
            return array;
          }
          var setData = shortOut(baseSetData);
          var setTimeout = ctxSetTimeout || function(func, wait) {
            return root.setTimeout(func, wait);
          };
          var setToString = shortOut(baseSetToString);
          function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + "";
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
          }
          function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
              var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
              lastCalled = stamp;
              if (remaining > 0) {
                if (++count >= HOT_COUNT) return arguments[0];
              } else count = 0;
              return func.apply(undefined, arguments);
            };
          }
          function shuffleSelf(array, size) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size = size === undefined ? length : size;
            while (++index < size) {
              var rand = baseRandom(index, lastIndex), value = array[rand];
              array[rand] = array[index];
              array[index] = value;
            }
            array.length = size;
            return array;
          }
          var stringToPath = memoizeCapped(function(string) {
            var result = [];
            46 === string.charCodeAt(0) && result.push("");
            string.replace(rePropName, function(match, number, quote, subString) {
              result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            });
            return result;
          });
          function toKey(value) {
            if ("string" == typeof value || isSymbol(value)) return value;
            var result = value + "";
            return "0" == result && 1 / value == -INFINITY ? "-0" : result;
          }
          function toSource(func) {
            if (null != func) {
              try {
                return funcToString.call(func);
              } catch (e) {}
              try {
                return func + "";
              } catch (e) {}
            }
            return "";
          }
          function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
              var value = "_." + pair[0];
              bitmask & pair[1] && !arrayIncludes(details, value) && details.push(value);
            });
            return details.sort();
          }
          function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) return wrapper.clone();
            var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result.__actions__ = copyArray(wrapper.__actions__);
            result.__index__ = wrapper.__index__;
            result.__values__ = wrapper.__values__;
            return result;
          }
          function chunk(array, size, guard) {
            size = (guard ? isIterateeCall(array, size, guard) : size === undefined) ? 1 : nativeMax(toInteger(size), 0);
            var length = null == array ? 0 : array.length;
            if (!length || size < 1) return [];
            var index = 0, resIndex = 0, result = Array(nativeCeil(length / size));
            while (index < length) result[resIndex++] = baseSlice(array, index, index += size);
            return result;
          }
          function compact(array) {
            var index = -1, length = null == array ? 0 : array.length, resIndex = 0, result = [];
            while (++index < length) {
              var value = array[index];
              value && (result[resIndex++] = value);
            }
            return result;
          }
          function concat() {
            var length = arguments.length;
            if (!length) return [];
            var args = Array(length - 1), array = arguments[0], index = length;
            while (index--) args[index - 1] = arguments[index];
            return arrayPush(isArray(array) ? copyArray(array) : [ array ], baseFlatten(args, 1));
          }
          var difference = baseRest(function(array, values) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
          });
          var differenceBy = baseRest(function(array, values) {
            var iteratee = last(values);
            isArrayLikeObject(iteratee) && (iteratee = undefined);
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2)) : [];
          });
          var differenceWith = baseRest(function(array, values) {
            var comparator = last(values);
            isArrayLikeObject(comparator) && (comparator = undefined);
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];
          });
          function drop(array, n, guard) {
            var length = null == array ? 0 : array.length;
            if (!length) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function dropRight(array, n, guard) {
            var length = null == array ? 0 : array.length;
            if (!length) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function dropRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
          }
          function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
          }
          function fill(array, value, start, end) {
            var length = null == array ? 0 : array.length;
            if (!length) return [];
            if (start && "number" != typeof start && isIterateeCall(array, value, start)) {
              start = 0;
              end = length;
            }
            return baseFill(array, value, start, end);
          }
          function findIndex(array, predicate, fromIndex) {
            var length = null == array ? 0 : array.length;
            if (!length) return -1;
            var index = null == fromIndex ? 0 : toInteger(fromIndex);
            index < 0 && (index = nativeMax(length + index, 0));
            return baseFindIndex(array, getIteratee(predicate, 3), index);
          }
          function findLastIndex(array, predicate, fromIndex) {
            var length = null == array ? 0 : array.length;
            if (!length) return -1;
            var index = length - 1;
            if (fromIndex !== undefined) {
              index = toInteger(fromIndex);
              index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
          }
          function flatten(array) {
            var length = null == array ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
          }
          function flattenDeep(array) {
            var length = null == array ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
          }
          function flattenDepth(array, depth) {
            var length = null == array ? 0 : array.length;
            if (!length) return [];
            depth = depth === undefined ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
          }
          function fromPairs(pairs) {
            var index = -1, length = null == pairs ? 0 : pairs.length, result = {};
            while (++index < length) {
              var pair = pairs[index];
              result[pair[0]] = pair[1];
            }
            return result;
          }
          function head(array) {
            return array && array.length ? array[0] : undefined;
          }
          function indexOf(array, value, fromIndex) {
            var length = null == array ? 0 : array.length;
            if (!length) return -1;
            var index = null == fromIndex ? 0 : toInteger(fromIndex);
            index < 0 && (index = nativeMax(length + index, 0));
            return baseIndexOf(array, value, index);
          }
          function initial(array) {
            var length = null == array ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
          }
          var intersection = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
          });
          var intersectionBy = baseRest(function(arrays) {
            var iteratee = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            iteratee === last(mapped) ? iteratee = undefined : mapped.pop();
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : [];
          });
          var intersectionWith = baseRest(function(arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = "function" == typeof comparator ? comparator : undefined;
            comparator && mapped.pop();
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
          });
          function join(array, separator) {
            return null == array ? "" : nativeJoin.call(array, separator);
          }
          function last(array) {
            var length = null == array ? 0 : array.length;
            return length ? array[length - 1] : undefined;
          }
          function lastIndexOf(array, value, fromIndex) {
            var length = null == array ? 0 : array.length;
            if (!length) return -1;
            var index = length;
            if (fromIndex !== undefined) {
              index = toInteger(fromIndex);
              index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
          }
          function nth(array, n) {
            return array && array.length ? baseNth(array, toInteger(n)) : undefined;
          }
          var pull = baseRest(pullAll);
          function pullAll(array, values) {
            return array && array.length && values && values.length ? basePullAll(array, values) : array;
          }
          function pullAllBy(array, values, iteratee) {
            return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) : array;
          }
          function pullAllWith(array, values, comparator) {
            return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;
          }
          var pullAt = flatRest(function(array, indexes) {
            var length = null == array ? 0 : array.length, result = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index) {
              return isIndex(index, length) ? +index : index;
            }).sort(compareAscending));
            return result;
          });
          function remove(array, predicate) {
            var result = [];
            if (!(array && array.length)) return result;
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index < length) {
              var value = array[index];
              if (predicate(value, index, array)) {
                result.push(value);
                indexes.push(index);
              }
            }
            basePullAt(array, indexes);
            return result;
          }
          function reverse(array) {
            return null == array ? array : nativeReverse.call(array);
          }
          function slice(array, start, end) {
            var length = null == array ? 0 : array.length;
            if (!length) return [];
            if (end && "number" != typeof end && isIterateeCall(array, start, end)) {
              start = 0;
              end = length;
            } else {
              start = null == start ? 0 : toInteger(start);
              end = end === undefined ? length : toInteger(end);
            }
            return baseSlice(array, start, end);
          }
          function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
          }
          function sortedIndexBy(array, value, iteratee) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
          }
          function sortedIndexOf(array, value) {
            var length = null == array ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value);
              if (index < length && eq(array[index], value)) return index;
            }
            return -1;
          }
          function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
          }
          function sortedLastIndexBy(array, value, iteratee) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
          }
          function sortedLastIndexOf(array, value) {
            var length = null == array ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value, true) - 1;
              if (eq(array[index], value)) return index;
            }
            return -1;
          }
          function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : [];
          }
          function sortedUniqBy(array, iteratee) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : [];
          }
          function tail(array) {
            var length = null == array ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
          }
          function take(array, n, guard) {
            if (!(array && array.length)) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function takeRight(array, n, guard) {
            var length = null == array ? 0 : array.length;
            if (!length) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
          }
          function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
          }
          var union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
          });
          var unionBy = baseRest(function(arrays) {
            var iteratee = last(arrays);
            isArrayLikeObject(iteratee) && (iteratee = undefined);
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
          });
          var unionWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = "function" == typeof comparator ? comparator : undefined;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
          });
          function uniq(array) {
            return array && array.length ? baseUniq(array) : [];
          }
          function uniqBy(array, iteratee) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : [];
          }
          function uniqWith(array, comparator) {
            comparator = "function" == typeof comparator ? comparator : undefined;
            return array && array.length ? baseUniq(array, undefined, comparator) : [];
          }
          function unzip(array) {
            if (!(array && array.length)) return [];
            var length = 0;
            array = arrayFilter(array, function(group) {
              if (isArrayLikeObject(group)) {
                length = nativeMax(group.length, length);
                return true;
              }
            });
            return baseTimes(length, function(index) {
              return arrayMap(array, baseProperty(index));
            });
          }
          function unzipWith(array, iteratee) {
            if (!(array && array.length)) return [];
            var result = unzip(array);
            if (null == iteratee) return result;
            return arrayMap(result, function(group) {
              return apply(iteratee, undefined, group);
            });
          }
          var without = baseRest(function(array, values) {
            return isArrayLikeObject(array) ? baseDifference(array, values) : [];
          });
          var xor = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
          });
          var xorBy = baseRest(function(arrays) {
            var iteratee = last(arrays);
            isArrayLikeObject(iteratee) && (iteratee = undefined);
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
          });
          var xorWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = "function" == typeof comparator ? comparator : undefined;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
          });
          var zip = baseRest(unzip);
          function zipObject(props, values) {
            return baseZipObject(props || [], values || [], assignValue);
          }
          function zipObjectDeep(props, values) {
            return baseZipObject(props || [], values || [], baseSet);
          }
          var zipWith = baseRest(function(arrays) {
            var length = arrays.length, iteratee = length > 1 ? arrays[length - 1] : undefined;
            iteratee = "function" == typeof iteratee ? (arrays.pop(), iteratee) : undefined;
            return unzipWith(arrays, iteratee);
          });
          function chain(value) {
            var result = lodash(value);
            result.__chain__ = true;
            return result;
          }
          function tap(value, interceptor) {
            interceptor(value);
            return value;
          }
          function thru(value, interceptor) {
            return interceptor(value);
          }
          var wrapperAt = flatRest(function(paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
              return baseAt(object, paths);
            };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) return this.thru(interceptor);
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
              func: thru,
              args: [ interceptor ],
              thisArg: undefined
            });
            return new LodashWrapper(value, this.__chain__).thru(function(array) {
              length && !array.length && array.push(undefined);
              return array;
            });
          });
          function wrapperChain() {
            return chain(this);
          }
          function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
          }
          function wrapperNext() {
            this.__values__ === undefined && (this.__values__ = toArray(this.value()));
            var done = this.__index__ >= this.__values__.length, value = done ? undefined : this.__values__[this.__index__++];
            return {
              done: done,
              value: value
            };
          }
          function wrapperToIterator() {
            return this;
          }
          function wrapperPlant(value) {
            var result, parent = this;
            while (parent instanceof baseLodash) {
              var clone = wrapperClone(parent);
              clone.__index__ = 0;
              clone.__values__ = undefined;
              result ? previous.__wrapped__ = clone : result = clone;
              var previous = clone;
              parent = parent.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result;
          }
          function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
              var wrapped = value;
              this.__actions__.length && (wrapped = new LazyWrapper(this));
              wrapped = wrapped.reverse();
              wrapped.__actions__.push({
                func: thru,
                args: [ reverse ],
                thisArg: undefined
              });
              return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
          }
          function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
          }
          var countBy = createAggregator(function(result, value, key) {
            hasOwnProperty.call(result, key) ? ++result[key] : baseAssignValue(result, key, 1);
          });
          function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            guard && isIterateeCall(collection, predicate, guard) && (predicate = undefined);
            return func(collection, getIteratee(predicate, 3));
          }
          function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
          }
          var find = createFind(findIndex);
          var findLast = createFind(findLastIndex);
          function flatMap(collection, iteratee) {
            return baseFlatten(map(collection, iteratee), 1);
          }
          function flatMapDeep(collection, iteratee) {
            return baseFlatten(map(collection, iteratee), INFINITY);
          }
          function flatMapDepth(collection, iteratee, depth) {
            depth = depth === undefined ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee), depth);
          }
          function forEach(collection, iteratee) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee, 3));
          }
          function forEachRight(collection, iteratee) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee, 3));
          }
          var groupBy = createAggregator(function(result, value, key) {
            hasOwnProperty.call(result, key) ? result[key].push(value) : baseAssignValue(result, key, [ value ]);
          });
          function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            fromIndex < 0 && (fromIndex = nativeMax(length + fromIndex, 0));
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
          }
          var invokeMap = baseRest(function(collection, path, args) {
            var index = -1, isFunc = "function" == typeof path, result = isArrayLike(collection) ? Array(collection.length) : [];
            baseEach(collection, function(value) {
              result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result;
          });
          var keyBy = createAggregator(function(result, value, key) {
            baseAssignValue(result, key, value);
          });
          function map(collection, iteratee) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee, 3));
          }
          function orderBy(collection, iteratees, orders, guard) {
            if (null == collection) return [];
            isArray(iteratees) || (iteratees = null == iteratees ? [] : [ iteratees ]);
            orders = guard ? undefined : orders;
            isArray(orders) || (orders = null == orders ? [] : [ orders ]);
            return baseOrderBy(collection, iteratees, orders);
          }
          var partition = createAggregator(function(result, value, key) {
            result[key ? 0 : 1].push(value);
          }, function() {
            return [ [], [] ];
          });
          function reduce(collection, iteratee, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
          }
          function reduceRight(collection, iteratee, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
          }
          function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
          }
          function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection);
          }
          function sampleSize(collection, n, guard) {
            n = (guard ? isIterateeCall(collection, n, guard) : n === undefined) ? 1 : toInteger(n);
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n);
          }
          function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
          }
          function size(collection) {
            if (null == collection) return 0;
            if (isArrayLike(collection)) return isString(collection) ? stringSize(collection) : collection.length;
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) return collection.size;
            return baseKeys(collection).length;
          }
          function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            guard && isIterateeCall(collection, predicate, guard) && (predicate = undefined);
            return func(collection, getIteratee(predicate, 3));
          }
          var sortBy = baseRest(function(collection, iteratees) {
            if (null == collection) return [];
            var length = iteratees.length;
            length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1]) ? iteratees = [] : length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2]) && (iteratees = [ iteratees[0] ]);
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
          });
          var now = ctxNow || function() {
            return root.Date.now();
          };
          function after(n, func) {
            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
            n = toInteger(n);
            return function() {
              if (--n < 1) return func.apply(this, arguments);
            };
          }
          function ary(func, n, guard) {
            n = guard ? undefined : n;
            n = func && null == n ? func.length : n;
            return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
          }
          function before(n, func) {
            var result;
            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
            n = toInteger(n);
            return function() {
              --n > 0 && (result = func.apply(this, arguments));
              n <= 1 && (func = undefined);
              return result;
            };
          }
          var bind = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bind));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
          });
          var bindKey = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bindKey));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
          });
          function curry(func, arity, guard) {
            arity = guard ? undefined : arity;
            var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
            result.placeholder = curry.placeholder;
            return result;
          }
          function curryRight(func, arity, guard) {
            arity = guard ? undefined : arity;
            var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
            result.placeholder = curryRight.placeholder;
            return result;
          }
          function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
              leading = !!options.leading;
              maxing = "maxWait" in options;
              maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
              var args = lastArgs, thisArg = lastThis;
              lastArgs = lastThis = undefined;
              lastInvokeTime = time;
              result = func.apply(thisArg, args);
              return result;
            }
            function leadingEdge(time) {
              lastInvokeTime = time;
              timerId = setTimeout(timerExpired, wait);
              return leading ? invokeFunc(time) : result;
            }
            function remainingWait(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
              return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
              return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
              var time = now();
              if (shouldInvoke(time)) return trailingEdge(time);
              timerId = setTimeout(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
              timerId = undefined;
              if (trailing && lastArgs) return invokeFunc(time);
              lastArgs = lastThis = undefined;
              return result;
            }
            function cancel() {
              timerId !== undefined && clearTimeout(timerId);
              lastInvokeTime = 0;
              lastArgs = lastCallTime = lastThis = timerId = undefined;
            }
            function flush() {
              return timerId === undefined ? result : trailingEdge(now());
            }
            function debounced() {
              var time = now(), isInvoking = shouldInvoke(time);
              lastArgs = arguments;
              lastThis = this;
              lastCallTime = time;
              if (isInvoking) {
                if (timerId === undefined) return leadingEdge(lastCallTime);
                if (maxing) {
                  timerId = setTimeout(timerExpired, wait);
                  return invokeFunc(lastCallTime);
                }
              }
              timerId === undefined && (timerId = setTimeout(timerExpired, wait));
              return result;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
          }
          var defer = baseRest(function(func, args) {
            return baseDelay(func, 1, args);
          });
          var delay = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
          });
          function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
          }
          function memoize(func, resolver) {
            if ("function" != typeof func || null != resolver && "function" != typeof resolver) throw new TypeError(FUNC_ERROR_TEXT);
            var memoized = function() {
              var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
              if (cache.has(key)) return cache.get(key);
              var result = func.apply(this, args);
              memoized.cache = cache.set(key, result) || cache;
              return result;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          }
          memoize.Cache = MapCache;
          function negate(predicate) {
            if ("function" != typeof predicate) throw new TypeError(FUNC_ERROR_TEXT);
            return function() {
              var args = arguments;
              switch (args.length) {
               case 0:
                return !predicate.call(this);

               case 1:
                return !predicate.call(this, args[0]);

               case 2:
                return !predicate.call(this, args[0], args[1]);

               case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
              }
              return !predicate.apply(this, args);
            };
          }
          function once(func) {
            return before(2, func);
          }
          var overArgs = castRest(function(func, transforms) {
            transforms = 1 == transforms.length && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
              var index = -1, length = nativeMin(args.length, funcsLength);
              while (++index < length) args[index] = transforms[index].call(this, args[index]);
              return apply(func, this, args);
            });
          });
          var partial = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
          });
          var partialRight = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
          });
          var rearg = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
          });
          function rest(func, start) {
            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
            start = start === undefined ? start : toInteger(start);
            return baseRest(func, start);
          }
          function spread(func, start) {
            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
            start = null == start ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function(args) {
              var array = args[start], otherArgs = castSlice(args, 0, start);
              array && arrayPush(otherArgs, array);
              return apply(func, this, otherArgs);
            });
          }
          function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
            if (isObject(options)) {
              leading = "leading" in options ? !!options.leading : leading;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, {
              leading: leading,
              maxWait: wait,
              trailing: trailing
            });
          }
          function unary(func) {
            return ary(func, 1);
          }
          function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
          }
          function castArray() {
            if (!arguments.length) return [];
            var value = arguments[0];
            return isArray(value) ? value : [ value ];
          }
          function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
          }
          function cloneWith(value, customizer) {
            customizer = "function" == typeof customizer ? customizer : undefined;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
          }
          function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
          }
          function cloneDeepWith(value, customizer) {
            customizer = "function" == typeof customizer ? customizer : undefined;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
          }
          function conformsTo(object, source) {
            return null == source || baseConformsTo(object, source, keys(source));
          }
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }
          var gt = createRelationalOperation(baseGt);
          var gte = createRelationalOperation(function(value, other) {
            return value >= other;
          });
          var isArguments = baseIsArguments(function() {
            return arguments;
          }()) ? baseIsArguments : function(value) {
            return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
          };
          var isArray = Array.isArray;
          var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
          function isArrayLike(value) {
            return null != value && isLength(value.length) && !isFunction(value);
          }
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }
          function isBoolean(value) {
            return true === value || false === value || isObjectLike(value) && baseGetTag(value) == boolTag;
          }
          var isBuffer = nativeIsBuffer || stubFalse;
          var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
          function isElement(value) {
            return isObjectLike(value) && 1 === value.nodeType && !isPlainObject(value);
          }
          function isEmpty(value) {
            if (null == value) return true;
            if (isArrayLike(value) && (isArray(value) || "string" == typeof value || "function" == typeof value.splice || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) return !value.size;
            if (isPrototype(value)) return !baseKeys(value).length;
            for (var key in value) if (hasOwnProperty.call(value, key)) return false;
            return true;
          }
          function isEqual(value, other) {
            return baseIsEqual(value, other);
          }
          function isEqualWith(value, other, customizer) {
            customizer = "function" == typeof customizer ? customizer : undefined;
            var result = customizer ? customizer(value, other) : undefined;
            return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
          }
          function isError(value) {
            if (!isObjectLike(value)) return false;
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag || "string" == typeof value.message && "string" == typeof value.name && !isPlainObject(value);
          }
          function isFinite(value) {
            return "number" == typeof value && nativeIsFinite(value);
          }
          function isFunction(value) {
            if (!isObject(value)) return false;
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
          }
          function isInteger(value) {
            return "number" == typeof value && value == toInteger(value);
          }
          function isLength(value) {
            return "number" == typeof value && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }
          function isObject(value) {
            var type = typeof value;
            return null != value && ("object" == type || "function" == type);
          }
          function isObjectLike(value) {
            return null != value && "object" == typeof value;
          }
          var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
          function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
          }
          function isMatchWith(object, source, customizer) {
            customizer = "function" == typeof customizer ? customizer : undefined;
            return baseIsMatch(object, source, getMatchData(source), customizer);
          }
          function isNaN(value) {
            return isNumber(value) && value != +value;
          }
          function isNative(value) {
            if (isMaskable(value)) throw new Error(CORE_ERROR_TEXT);
            return baseIsNative(value);
          }
          function isNull(value) {
            return null === value;
          }
          function isNil(value) {
            return null == value;
          }
          function isNumber(value) {
            return "number" == typeof value || isObjectLike(value) && baseGetTag(value) == numberTag;
          }
          function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
            var proto = getPrototype(value);
            if (null === proto) return true;
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return "function" == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }
          var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
          function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
          }
          var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
          function isString(value) {
            return "string" == typeof value || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
          }
          function isSymbol(value) {
            return "symbol" == typeof value || isObjectLike(value) && baseGetTag(value) == symbolTag;
          }
          var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
          function isUndefined(value) {
            return value === undefined;
          }
          function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag;
          }
          function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag;
          }
          var lt = createRelationalOperation(baseLt);
          var lte = createRelationalOperation(function(value, other) {
            return value <= other;
          });
          function toArray(value) {
            if (!value) return [];
            if (isArrayLike(value)) return isString(value) ? stringToArray(value) : copyArray(value);
            if (symIterator && value[symIterator]) return iteratorToArray(value[symIterator]());
            var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
            return func(value);
          }
          function toFinite(value) {
            if (!value) return 0 === value ? value : 0;
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
              var sign = value < 0 ? -1 : 1;
              return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
          }
          function toInteger(value) {
            var result = toFinite(value), remainder = result % 1;
            return result === result ? remainder ? result - remainder : result : 0;
          }
          function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
          }
          function toNumber(value) {
            if ("number" == typeof value) return value;
            if (isSymbol(value)) return NAN;
            if (isObject(value)) {
              var other = "function" == typeof value.valueOf ? value.valueOf() : value;
              value = isObject(other) ? other + "" : other;
            }
            if ("string" != typeof value) return 0 === value ? value : +value;
            value = value.replace(reTrim, "");
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
          }
          function toPlainObject(value) {
            return copyObject(value, keysIn(value));
          }
          function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : 0 === value ? value : 0;
          }
          function toString(value) {
            return null == value ? "" : baseToString(value);
          }
          var assign = createAssigner(function(object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
              copyObject(source, keys(source), object);
              return;
            }
            for (var key in source) hasOwnProperty.call(source, key) && assignValue(object, key, source[key]);
          });
          var assignIn = createAssigner(function(object, source) {
            copyObject(source, keysIn(source), object);
          });
          var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
          });
          var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer);
          });
          var at = flatRest(baseAt);
          function create(prototype, properties) {
            var result = baseCreate(prototype);
            return null == properties ? result : baseAssign(result, properties);
          }
          var defaults = baseRest(function(object, sources) {
            object = Object(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined;
            guard && isIterateeCall(sources[0], sources[1], guard) && (length = 1);
            while (++index < length) {
              var source = sources[index];
              var props = keysIn(source);
              var propsIndex = -1;
              var propsLength = props.length;
              while (++propsIndex < propsLength) {
                var key = props[propsIndex];
                var value = object[key];
                (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) && (object[key] = source[key]);
              }
            }
            return object;
          });
          var defaultsDeep = baseRest(function(args) {
            args.push(undefined, customDefaultsMerge);
            return apply(mergeWith, undefined, args);
          });
          function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
          }
          function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
          }
          function forIn(object, iteratee) {
            return null == object ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);
          }
          function forInRight(object, iteratee) {
            return null == object ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);
          }
          function forOwn(object, iteratee) {
            return object && baseForOwn(object, getIteratee(iteratee, 3));
          }
          function forOwnRight(object, iteratee) {
            return object && baseForOwnRight(object, getIteratee(iteratee, 3));
          }
          function functions(object) {
            return null == object ? [] : baseFunctions(object, keys(object));
          }
          function functionsIn(object) {
            return null == object ? [] : baseFunctions(object, keysIn(object));
          }
          function get(object, path, defaultValue) {
            var result = null == object ? undefined : baseGet(object, path);
            return result === undefined ? defaultValue : result;
          }
          function has(object, path) {
            return null != object && hasPath(object, path, baseHas);
          }
          function hasIn(object, path) {
            return null != object && hasPath(object, path, baseHasIn);
          }
          var invert = createInverter(function(result, value, key) {
            null != value && "function" != typeof value.toString && (value = nativeObjectToString.call(value));
            result[value] = key;
          }, constant(identity));
          var invertBy = createInverter(function(result, value, key) {
            null != value && "function" != typeof value.toString && (value = nativeObjectToString.call(value));
            hasOwnProperty.call(result, value) ? result[value].push(key) : result[value] = [ key ];
          }, getIteratee);
          var invoke = baseRest(baseInvoke);
          function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
          }
          function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
          }
          function mapKeys(object, iteratee) {
            var result = {};
            iteratee = getIteratee(iteratee, 3);
            baseForOwn(object, function(value, key, object) {
              baseAssignValue(result, iteratee(value, key, object), value);
            });
            return result;
          }
          function mapValues(object, iteratee) {
            var result = {};
            iteratee = getIteratee(iteratee, 3);
            baseForOwn(object, function(value, key, object) {
              baseAssignValue(result, key, iteratee(value, key, object));
            });
            return result;
          }
          var merge = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
          });
          var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
          });
          var omit = flatRest(function(object, paths) {
            var result = {};
            if (null == object) return result;
            var isDeep = false;
            paths = arrayMap(paths, function(path) {
              path = castPath(path, object);
              isDeep || (isDeep = path.length > 1);
              return path;
            });
            copyObject(object, getAllKeysIn(object), result);
            isDeep && (result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone));
            var length = paths.length;
            while (length--) baseUnset(result, paths[length]);
            return result;
          });
          function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
          }
          var pick = flatRest(function(object, paths) {
            return null == object ? {} : basePick(object, paths);
          });
          function pickBy(object, predicate) {
            if (null == object) return {};
            var props = arrayMap(getAllKeysIn(object), function(prop) {
              return [ prop ];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function(value, path) {
              return predicate(value, path[0]);
            });
          }
          function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1, length = path.length;
            if (!length) {
              length = 1;
              object = undefined;
            }
            while (++index < length) {
              var value = null == object ? undefined : object[toKey(path[index])];
              if (value === undefined) {
                index = length;
                value = defaultValue;
              }
              object = isFunction(value) ? value.call(object) : value;
            }
            return object;
          }
          function set(object, path, value) {
            return null == object ? object : baseSet(object, path, value);
          }
          function setWith(object, path, value, customizer) {
            customizer = "function" == typeof customizer ? customizer : undefined;
            return null == object ? object : baseSet(object, path, value, customizer);
          }
          var toPairs = createToPairs(keys);
          var toPairsIn = createToPairs(keysIn);
          function transform(object, iteratee, accumulator) {
            var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee = getIteratee(iteratee, 4);
            if (null == accumulator) {
              var Ctor = object && object.constructor;
              accumulator = isArrLike ? isArr ? new Ctor() : [] : isObject(object) && isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
              return iteratee(accumulator, value, index, object);
            });
            return accumulator;
          }
          function unset(object, path) {
            return null == object || baseUnset(object, path);
          }
          function update(object, path, updater) {
            return null == object ? object : baseUpdate(object, path, castFunction(updater));
          }
          function updateWith(object, path, updater, customizer) {
            customizer = "function" == typeof customizer ? customizer : undefined;
            return null == object ? object : baseUpdate(object, path, castFunction(updater), customizer);
          }
          function values(object) {
            return null == object ? [] : baseValues(object, keys(object));
          }
          function valuesIn(object) {
            return null == object ? [] : baseValues(object, keysIn(object));
          }
          function clamp(number, lower, upper) {
            if (upper === undefined) {
              upper = lower;
              lower = undefined;
            }
            if (upper !== undefined) {
              upper = toNumber(upper);
              upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined) {
              lower = toNumber(lower);
              lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
          }
          function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined) {
              end = start;
              start = 0;
            } else end = toFinite(end);
            number = toNumber(number);
            return baseInRange(number, start, end);
          }
          function random(lower, upper, floating) {
            floating && "boolean" != typeof floating && isIterateeCall(lower, upper, floating) && (upper = floating = undefined);
            if (floating === undefined) if ("boolean" == typeof upper) {
              floating = upper;
              upper = undefined;
            } else if ("boolean" == typeof lower) {
              floating = lower;
              lower = undefined;
            }
            if (lower === undefined && upper === undefined) {
              lower = 0;
              upper = 1;
            } else {
              lower = toFinite(lower);
              if (upper === undefined) {
                upper = lower;
                lower = 0;
              } else upper = toFinite(upper);
            }
            if (lower > upper) {
              var temp = lower;
              lower = upper;
              upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
              var rand = nativeRandom();
              return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
            }
            return baseRandom(lower, upper);
          }
          var camelCase = createCompounder(function(result, word, index) {
            word = word.toLowerCase();
            return result + (index ? capitalize(word) : word);
          });
          function capitalize(string) {
            return upperFirst(toString(string).toLowerCase());
          }
          function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
          }
          function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
          }
          function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
          }
          function escapeRegExp(string) {
            string = toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
          }
          var kebabCase = createCompounder(function(result, word, index) {
            return result + (index ? "-" : "") + word.toLowerCase();
          });
          var lowerCase = createCompounder(function(result, word, index) {
            return result + (index ? " " : "") + word.toLowerCase();
          });
          var lowerFirst = createCaseFirst("toLowerCase");
          function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) return string;
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
          }
          function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
          }
          function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
          }
          function parseInt(string, radix, guard) {
            guard || null == radix ? radix = 0 : radix && (radix = +radix);
            return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
          }
          function repeat(string, n, guard) {
            n = (guard ? isIterateeCall(string, n, guard) : n === undefined) ? 1 : toInteger(n);
            return baseRepeat(toString(string), n);
          }
          function replace() {
            var args = arguments, string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
          }
          var snakeCase = createCompounder(function(result, word, index) {
            return result + (index ? "_" : "") + word.toLowerCase();
          });
          function split(string, separator, limit) {
            limit && "number" != typeof limit && isIterateeCall(string, separator, limit) && (separator = limit = undefined);
            limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) return [];
            string = toString(string);
            if (string && ("string" == typeof separator || null != separator && !isRegExp(separator))) {
              separator = baseToString(separator);
              if (!separator && hasUnicode(string)) return castSlice(stringToArray(string), 0, limit);
            }
            return string.split(separator, limit);
          }
          var startCase = createCompounder(function(result, word, index) {
            return result + (index ? " " : "") + upperFirst(word);
          });
          function startsWith(string, target, position) {
            string = toString(string);
            position = null == position ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
          }
          function template(string, options, guard) {
            var settings = lodash.templateSettings;
            guard && isIterateeCall(string, options, guard) && (options = undefined);
            string = toString(string);
            options = assignInWith({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            var reDelimiters = RegExp((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
            var sourceURL = "//# sourceURL=" + ("sourceURL" in options ? options.sourceURL : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
              interpolateValue || (interpolateValue = esTemplateValue);
              source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
              if (escapeValue) {
                isEscaping = true;
                source += "' +\n__e(" + escapeValue + ") +\n'";
              }
              if (evaluateValue) {
                isEvaluating = true;
                source += "';\n" + evaluateValue + ";\n__p += '";
              }
              interpolateValue && (source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'");
              index = offset + match.length;
              return match;
            });
            source += "';\n";
            var variable = options.variable;
            variable || (source = "with (obj) {\n" + source + "\n}\n");
            source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
            source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
            var result = attempt(function() {
              return Function(importsKeys, sourceURL + "return " + source).apply(undefined, importsValues);
            });
            result.source = source;
            if (isError(result)) throw result;
            return result;
          }
          function toLower(value) {
            return toString(value).toLowerCase();
          }
          function toUpper(value) {
            return toString(value).toUpperCase();
          }
          function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) return string.replace(reTrim, "");
            if (!string || !(chars = baseToString(chars))) return string;
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join("");
          }
          function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) return string.replace(reTrimEnd, "");
            if (!string || !(chars = baseToString(chars))) return string;
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join("");
          }
          function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) return string.replace(reTrimStart, "");
            if (!string || !(chars = baseToString(chars))) return string;
            var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join("");
          }
          function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
              var separator = "separator" in options ? options.separator : separator;
              length = "length" in options ? toInteger(options.length) : length;
              omission = "omission" in options ? baseToString(options.omission) : omission;
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
              var strSymbols = stringToArray(string);
              strLength = strSymbols.length;
            }
            if (length >= strLength) return string;
            var end = length - stringSize(omission);
            if (end < 1) return omission;
            var result = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
            if (separator === undefined) return result + omission;
            strSymbols && (end += result.length - end);
            if (isRegExp(separator)) {
              if (string.slice(end).search(separator)) {
                var match, substring = result;
                separator.global || (separator = RegExp(separator.source, toString(reFlags.exec(separator)) + "g"));
                separator.lastIndex = 0;
                while (match = separator.exec(substring)) var newEnd = match.index;
                result = result.slice(0, newEnd === undefined ? end : newEnd);
              }
            } else if (string.indexOf(baseToString(separator), end) != end) {
              var index = result.lastIndexOf(separator);
              index > -1 && (result = result.slice(0, index));
            }
            return result + omission;
          }
          function unescape(string) {
            string = toString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
          }
          var upperCase = createCompounder(function(result, word, index) {
            return result + (index ? " " : "") + word.toUpperCase();
          });
          var upperFirst = createCaseFirst("toUpperCase");
          function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined : pattern;
            if (pattern === undefined) return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            return string.match(pattern) || [];
          }
          var attempt = baseRest(function(func, args) {
            try {
              return apply(func, undefined, args);
            } catch (e) {
              return isError(e) ? e : new Error(e);
            }
          });
          var bindAll = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
              key = toKey(key);
              baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
          });
          function cond(pairs) {
            var length = null == pairs ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = length ? arrayMap(pairs, function(pair) {
              if ("function" != typeof pair[1]) throw new TypeError(FUNC_ERROR_TEXT);
              return [ toIteratee(pair[0]), pair[1] ];
            }) : [];
            return baseRest(function(args) {
              var index = -1;
              while (++index < length) {
                var pair = pairs[index];
                if (apply(pair[0], this, args)) return apply(pair[1], this, args);
              }
            });
          }
          function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
          }
          function constant(value) {
            return function() {
              return value;
            };
          }
          function defaultTo(value, defaultValue) {
            return null == value || value !== value ? defaultValue : value;
          }
          var flow = createFlow();
          var flowRight = createFlow(true);
          function identity(value) {
            return value;
          }
          function iteratee(func) {
            return baseIteratee("function" == typeof func ? func : baseClone(func, CLONE_DEEP_FLAG));
          }
          function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
          }
          function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
          }
          var method = baseRest(function(path, args) {
            return function(object) {
              return baseInvoke(object, path, args);
            };
          });
          var methodOf = baseRest(function(object, args) {
            return function(path) {
              return baseInvoke(object, path, args);
            };
          });
          function mixin(object, source, options) {
            var props = keys(source), methodNames = baseFunctions(source, props);
            if (null == options && !(isObject(source) && (methodNames.length || !props.length))) {
              options = source;
              source = object;
              object = this;
              methodNames = baseFunctions(source, keys(source));
            }
            var chain = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
            arrayEach(methodNames, function(methodName) {
              var func = source[methodName];
              object[methodName] = func;
              isFunc && (object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain || chainAll) {
                  var result = object(this.__wrapped__), actions = result.__actions__ = copyArray(this.__actions__);
                  actions.push({
                    func: func,
                    args: arguments,
                    thisArg: object
                  });
                  result.__chain__ = chainAll;
                  return result;
                }
                return func.apply(object, arrayPush([ this.value() ], arguments));
              });
            });
            return object;
          }
          function noConflict() {
            root._ === this && (root._ = oldDash);
            return this;
          }
          function noop() {}
          function nthArg(n) {
            n = toInteger(n);
            return baseRest(function(args) {
              return baseNth(args, n);
            });
          }
          var over = createOver(arrayMap);
          var overEvery = createOver(arrayEvery);
          var overSome = createOver(arraySome);
          function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
          }
          function propertyOf(object) {
            return function(path) {
              return null == object ? undefined : baseGet(object, path);
            };
          }
          var range = createRange();
          var rangeRight = createRange(true);
          function stubArray() {
            return [];
          }
          function stubFalse() {
            return false;
          }
          function stubObject() {
            return {};
          }
          function stubString() {
            return "";
          }
          function stubTrue() {
            return true;
          }
          function times(n, iteratee) {
            n = toInteger(n);
            if (n < 1 || n > MAX_SAFE_INTEGER) return [];
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
            iteratee = getIteratee(iteratee);
            n -= MAX_ARRAY_LENGTH;
            var result = baseTimes(length, iteratee);
            while (++index < n) iteratee(index);
            return result;
          }
          function toPath(value) {
            if (isArray(value)) return arrayMap(value, toKey);
            return isSymbol(value) ? [ value ] : copyArray(stringToPath(toString(value)));
          }
          function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
          }
          var add = createMathOperation(function(augend, addend) {
            return augend + addend;
          }, 0);
          var ceil = createRound("ceil");
          var divide = createMathOperation(function(dividend, divisor) {
            return dividend / divisor;
          }, 1);
          var floor = createRound("floor");
          function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
          }
          function maxBy(array, iteratee) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined;
          }
          function mean(array) {
            return baseMean(array, identity);
          }
          function meanBy(array, iteratee) {
            return baseMean(array, getIteratee(iteratee, 2));
          }
          function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
          }
          function minBy(array, iteratee) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined;
          }
          var multiply = createMathOperation(function(multiplier, multiplicand) {
            return multiplier * multiplicand;
          }, 1);
          var round = createRound("round");
          var subtract = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend;
          }, 0);
          function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0;
          }
          function sumBy(array, iteratee) {
            return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0;
          }
          lodash.after = after;
          lodash.ary = ary;
          lodash.assign = assign;
          lodash.assignIn = assignIn;
          lodash.assignInWith = assignInWith;
          lodash.assignWith = assignWith;
          lodash.at = at;
          lodash.before = before;
          lodash.bind = bind;
          lodash.bindAll = bindAll;
          lodash.bindKey = bindKey;
          lodash.castArray = castArray;
          lodash.chain = chain;
          lodash.chunk = chunk;
          lodash.compact = compact;
          lodash.concat = concat;
          lodash.cond = cond;
          lodash.conforms = conforms;
          lodash.constant = constant;
          lodash.countBy = countBy;
          lodash.create = create;
          lodash.curry = curry;
          lodash.curryRight = curryRight;
          lodash.debounce = debounce;
          lodash.defaults = defaults;
          lodash.defaultsDeep = defaultsDeep;
          lodash.defer = defer;
          lodash.delay = delay;
          lodash.difference = difference;
          lodash.differenceBy = differenceBy;
          lodash.differenceWith = differenceWith;
          lodash.drop = drop;
          lodash.dropRight = dropRight;
          lodash.dropRightWhile = dropRightWhile;
          lodash.dropWhile = dropWhile;
          lodash.fill = fill;
          lodash.filter = filter;
          lodash.flatMap = flatMap;
          lodash.flatMapDeep = flatMapDeep;
          lodash.flatMapDepth = flatMapDepth;
          lodash.flatten = flatten;
          lodash.flattenDeep = flattenDeep;
          lodash.flattenDepth = flattenDepth;
          lodash.flip = flip;
          lodash.flow = flow;
          lodash.flowRight = flowRight;
          lodash.fromPairs = fromPairs;
          lodash.functions = functions;
          lodash.functionsIn = functionsIn;
          lodash.groupBy = groupBy;
          lodash.initial = initial;
          lodash.intersection = intersection;
          lodash.intersectionBy = intersectionBy;
          lodash.intersectionWith = intersectionWith;
          lodash.invert = invert;
          lodash.invertBy = invertBy;
          lodash.invokeMap = invokeMap;
          lodash.iteratee = iteratee;
          lodash.keyBy = keyBy;
          lodash.keys = keys;
          lodash.keysIn = keysIn;
          lodash.map = map;
          lodash.mapKeys = mapKeys;
          lodash.mapValues = mapValues;
          lodash.matches = matches;
          lodash.matchesProperty = matchesProperty;
          lodash.memoize = memoize;
          lodash.merge = merge;
          lodash.mergeWith = mergeWith;
          lodash.method = method;
          lodash.methodOf = methodOf;
          lodash.mixin = mixin;
          lodash.negate = negate;
          lodash.nthArg = nthArg;
          lodash.omit = omit;
          lodash.omitBy = omitBy;
          lodash.once = once;
          lodash.orderBy = orderBy;
          lodash.over = over;
          lodash.overArgs = overArgs;
          lodash.overEvery = overEvery;
          lodash.overSome = overSome;
          lodash.partial = partial;
          lodash.partialRight = partialRight;
          lodash.partition = partition;
          lodash.pick = pick;
          lodash.pickBy = pickBy;
          lodash.property = property;
          lodash.propertyOf = propertyOf;
          lodash.pull = pull;
          lodash.pullAll = pullAll;
          lodash.pullAllBy = pullAllBy;
          lodash.pullAllWith = pullAllWith;
          lodash.pullAt = pullAt;
          lodash.range = range;
          lodash.rangeRight = rangeRight;
          lodash.rearg = rearg;
          lodash.reject = reject;
          lodash.remove = remove;
          lodash.rest = rest;
          lodash.reverse = reverse;
          lodash.sampleSize = sampleSize;
          lodash.set = set;
          lodash.setWith = setWith;
          lodash.shuffle = shuffle;
          lodash.slice = slice;
          lodash.sortBy = sortBy;
          lodash.sortedUniq = sortedUniq;
          lodash.sortedUniqBy = sortedUniqBy;
          lodash.split = split;
          lodash.spread = spread;
          lodash.tail = tail;
          lodash.take = take;
          lodash.takeRight = takeRight;
          lodash.takeRightWhile = takeRightWhile;
          lodash.takeWhile = takeWhile;
          lodash.tap = tap;
          lodash.throttle = throttle;
          lodash.thru = thru;
          lodash.toArray = toArray;
          lodash.toPairs = toPairs;
          lodash.toPairsIn = toPairsIn;
          lodash.toPath = toPath;
          lodash.toPlainObject = toPlainObject;
          lodash.transform = transform;
          lodash.unary = unary;
          lodash.union = union;
          lodash.unionBy = unionBy;
          lodash.unionWith = unionWith;
          lodash.uniq = uniq;
          lodash.uniqBy = uniqBy;
          lodash.uniqWith = uniqWith;
          lodash.unset = unset;
          lodash.unzip = unzip;
          lodash.unzipWith = unzipWith;
          lodash.update = update;
          lodash.updateWith = updateWith;
          lodash.values = values;
          lodash.valuesIn = valuesIn;
          lodash.without = without;
          lodash.words = words;
          lodash.wrap = wrap;
          lodash.xor = xor;
          lodash.xorBy = xorBy;
          lodash.xorWith = xorWith;
          lodash.zip = zip;
          lodash.zipObject = zipObject;
          lodash.zipObjectDeep = zipObjectDeep;
          lodash.zipWith = zipWith;
          lodash.entries = toPairs;
          lodash.entriesIn = toPairsIn;
          lodash.extend = assignIn;
          lodash.extendWith = assignInWith;
          mixin(lodash, lodash);
          lodash.add = add;
          lodash.attempt = attempt;
          lodash.camelCase = camelCase;
          lodash.capitalize = capitalize;
          lodash.ceil = ceil;
          lodash.clamp = clamp;
          lodash.clone = clone;
          lodash.cloneDeep = cloneDeep;
          lodash.cloneDeepWith = cloneDeepWith;
          lodash.cloneWith = cloneWith;
          lodash.conformsTo = conformsTo;
          lodash.deburr = deburr;
          lodash.defaultTo = defaultTo;
          lodash.divide = divide;
          lodash.endsWith = endsWith;
          lodash.eq = eq;
          lodash.escape = escape;
          lodash.escapeRegExp = escapeRegExp;
          lodash.every = every;
          lodash.find = find;
          lodash.findIndex = findIndex;
          lodash.findKey = findKey;
          lodash.findLast = findLast;
          lodash.findLastIndex = findLastIndex;
          lodash.findLastKey = findLastKey;
          lodash.floor = floor;
          lodash.forEach = forEach;
          lodash.forEachRight = forEachRight;
          lodash.forIn = forIn;
          lodash.forInRight = forInRight;
          lodash.forOwn = forOwn;
          lodash.forOwnRight = forOwnRight;
          lodash.get = get;
          lodash.gt = gt;
          lodash.gte = gte;
          lodash.has = has;
          lodash.hasIn = hasIn;
          lodash.head = head;
          lodash.identity = identity;
          lodash.includes = includes;
          lodash.indexOf = indexOf;
          lodash.inRange = inRange;
          lodash.invoke = invoke;
          lodash.isArguments = isArguments;
          lodash.isArray = isArray;
          lodash.isArrayBuffer = isArrayBuffer;
          lodash.isArrayLike = isArrayLike;
          lodash.isArrayLikeObject = isArrayLikeObject;
          lodash.isBoolean = isBoolean;
          lodash.isBuffer = isBuffer;
          lodash.isDate = isDate;
          lodash.isElement = isElement;
          lodash.isEmpty = isEmpty;
          lodash.isEqual = isEqual;
          lodash.isEqualWith = isEqualWith;
          lodash.isError = isError;
          lodash.isFinite = isFinite;
          lodash.isFunction = isFunction;
          lodash.isInteger = isInteger;
          lodash.isLength = isLength;
          lodash.isMap = isMap;
          lodash.isMatch = isMatch;
          lodash.isMatchWith = isMatchWith;
          lodash.isNaN = isNaN;
          lodash.isNative = isNative;
          lodash.isNil = isNil;
          lodash.isNull = isNull;
          lodash.isNumber = isNumber;
          lodash.isObject = isObject;
          lodash.isObjectLike = isObjectLike;
          lodash.isPlainObject = isPlainObject;
          lodash.isRegExp = isRegExp;
          lodash.isSafeInteger = isSafeInteger;
          lodash.isSet = isSet;
          lodash.isString = isString;
          lodash.isSymbol = isSymbol;
          lodash.isTypedArray = isTypedArray;
          lodash.isUndefined = isUndefined;
          lodash.isWeakMap = isWeakMap;
          lodash.isWeakSet = isWeakSet;
          lodash.join = join;
          lodash.kebabCase = kebabCase;
          lodash.last = last;
          lodash.lastIndexOf = lastIndexOf;
          lodash.lowerCase = lowerCase;
          lodash.lowerFirst = lowerFirst;
          lodash.lt = lt;
          lodash.lte = lte;
          lodash.max = max;
          lodash.maxBy = maxBy;
          lodash.mean = mean;
          lodash.meanBy = meanBy;
          lodash.min = min;
          lodash.minBy = minBy;
          lodash.stubArray = stubArray;
          lodash.stubFalse = stubFalse;
          lodash.stubObject = stubObject;
          lodash.stubString = stubString;
          lodash.stubTrue = stubTrue;
          lodash.multiply = multiply;
          lodash.nth = nth;
          lodash.noConflict = noConflict;
          lodash.noop = noop;
          lodash.now = now;
          lodash.pad = pad;
          lodash.padEnd = padEnd;
          lodash.padStart = padStart;
          lodash.parseInt = parseInt;
          lodash.random = random;
          lodash.reduce = reduce;
          lodash.reduceRight = reduceRight;
          lodash.repeat = repeat;
          lodash.replace = replace;
          lodash.result = result;
          lodash.round = round;
          lodash.runInContext = runInContext;
          lodash.sample = sample;
          lodash.size = size;
          lodash.snakeCase = snakeCase;
          lodash.some = some;
          lodash.sortedIndex = sortedIndex;
          lodash.sortedIndexBy = sortedIndexBy;
          lodash.sortedIndexOf = sortedIndexOf;
          lodash.sortedLastIndex = sortedLastIndex;
          lodash.sortedLastIndexBy = sortedLastIndexBy;
          lodash.sortedLastIndexOf = sortedLastIndexOf;
          lodash.startCase = startCase;
          lodash.startsWith = startsWith;
          lodash.subtract = subtract;
          lodash.sum = sum;
          lodash.sumBy = sumBy;
          lodash.template = template;
          lodash.times = times;
          lodash.toFinite = toFinite;
          lodash.toInteger = toInteger;
          lodash.toLength = toLength;
          lodash.toLower = toLower;
          lodash.toNumber = toNumber;
          lodash.toSafeInteger = toSafeInteger;
          lodash.toString = toString;
          lodash.toUpper = toUpper;
          lodash.trim = trim;
          lodash.trimEnd = trimEnd;
          lodash.trimStart = trimStart;
          lodash.truncate = truncate;
          lodash.unescape = unescape;
          lodash.uniqueId = uniqueId;
          lodash.upperCase = upperCase;
          lodash.upperFirst = upperFirst;
          lodash.each = forEach;
          lodash.eachRight = forEachRight;
          lodash.first = head;
          mixin(lodash, function() {
            var source = {};
            baseForOwn(lodash, function(func, methodName) {
              hasOwnProperty.call(lodash.prototype, methodName) || (source[methodName] = func);
            });
            return source;
          }(), {
            chain: false
          });
          lodash.VERSION = VERSION;
          arrayEach([ "bind", "bindKey", "curry", "curryRight", "partial", "partialRight" ], function(methodName) {
            lodash[methodName].placeholder = lodash;
          });
          arrayEach([ "drop", "take" ], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n) {
              n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
              var result = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
              result.__filtered__ ? result.__takeCount__ = nativeMin(n, result.__takeCount__) : result.__views__.push({
                size: nativeMin(n, MAX_ARRAY_LENGTH),
                type: methodName + (result.__dir__ < 0 ? "Right" : "")
              });
              return result;
            };
            LazyWrapper.prototype[methodName + "Right"] = function(n) {
              return this.reverse()[methodName](n).reverse();
            };
          });
          arrayEach([ "filter", "map", "takeWhile" ], function(methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee) {
              var result = this.clone();
              result.__iteratees__.push({
                iteratee: getIteratee(iteratee, 3),
                type: type
              });
              result.__filtered__ = result.__filtered__ || isFilter;
              return result;
            };
          });
          arrayEach([ "head", "last" ], function(methodName, index) {
            var takeName = "take" + (index ? "Right" : "");
            LazyWrapper.prototype[methodName] = function() {
              return this[takeName](1).value()[0];
            };
          });
          arrayEach([ "initial", "tail" ], function(methodName, index) {
            var dropName = "drop" + (index ? "" : "Right");
            LazyWrapper.prototype[methodName] = function() {
              return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
          });
          LazyWrapper.prototype.compact = function() {
            return this.filter(identity);
          };
          LazyWrapper.prototype.find = function(predicate) {
            return this.filter(predicate).head();
          };
          LazyWrapper.prototype.findLast = function(predicate) {
            return this.reverse().find(predicate);
          };
          LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
            if ("function" == typeof path) return new LazyWrapper(this);
            return this.map(function(value) {
              return baseInvoke(value, path, args);
            });
          });
          LazyWrapper.prototype.reject = function(predicate) {
            return this.filter(negate(getIteratee(predicate)));
          };
          LazyWrapper.prototype.slice = function(start, end) {
            start = toInteger(start);
            var result = this;
            if (result.__filtered__ && (start > 0 || end < 0)) return new LazyWrapper(result);
            start < 0 ? result = result.takeRight(-start) : start && (result = result.drop(start));
            if (end !== undefined) {
              end = toInteger(end);
              result = end < 0 ? result.dropRight(-end) : result.take(end - start);
            }
            return result;
          };
          LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse();
          };
          LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH);
          };
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + ("last" == methodName ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) return;
            lodash.prototype[methodName] = function() {
              var value = this.__wrapped__, args = isTaker ? [ 1 ] : arguments, isLazy = value instanceof LazyWrapper, iteratee = args[0], useLazy = isLazy || isArray(value);
              var interceptor = function(value) {
                var result = lodashFunc.apply(lodash, arrayPush([ value ], args));
                return isTaker && chainAll ? result[0] : result;
              };
              useLazy && checkIteratee && "function" == typeof iteratee && 1 != iteratee.length && (isLazy = useLazy = false);
              var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
              if (!retUnwrapped && useLazy) {
                value = onlyLazy ? value : new LazyWrapper(this);
                var result = func.apply(value, args);
                result.__actions__.push({
                  func: thru,
                  args: [ interceptor ],
                  thisArg: undefined
                });
                return new LodashWrapper(result, chainAll);
              }
              if (isUnwrapped && onlyLazy) return func.apply(this, args);
              result = this.thru(interceptor);
              return isUnwrapped ? isTaker ? result.value()[0] : result.value() : result;
            };
          });
          arrayEach([ "pop", "push", "shift", "sort", "splice", "unshift" ], function(methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash.prototype[methodName] = function() {
              var args = arguments;
              if (retUnwrapped && !this.__chain__) {
                var value = this.value();
                return func.apply(isArray(value) ? value : [], args);
              }
              return this[chainName](function(value) {
                return func.apply(isArray(value) ? value : [], args);
              });
            };
          });
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
              var key = lodashFunc.name + "", names = realNames[key] || (realNames[key] = []);
              names.push({
                name: methodName,
                func: lodashFunc
              });
            }
          });
          realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [ {
            name: "wrapper",
            func: undefined
          } ];
          LazyWrapper.prototype.clone = lazyClone;
          LazyWrapper.prototype.reverse = lazyReverse;
          LazyWrapper.prototype.value = lazyValue;
          lodash.prototype.at = wrapperAt;
          lodash.prototype.chain = wrapperChain;
          lodash.prototype.commit = wrapperCommit;
          lodash.prototype.next = wrapperNext;
          lodash.prototype.plant = wrapperPlant;
          lodash.prototype.reverse = wrapperReverse;
          lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
          lodash.prototype.first = lodash.prototype.head;
          symIterator && (lodash.prototype[symIterator] = wrapperToIterator);
          return lodash;
        };
        var _ = runInContext();
        if ("function" == typeof define && "object" == typeof define.amd && define.amd) {
          root._ = _;
          define(function() {
            return _;
          });
        } else if (freeModule) {
          (freeModule.exports = _)._ = _;
          freeExports._ = _;
        } else root._ = _;
      }).call(this);
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {} ],
  10: [ function(require, module, exports) {
    exports.encode = require("./encode").encode;
    exports.decode = require("./decode").decode;
    exports.Encoder = require("./encoder").Encoder;
    exports.Decoder = require("./decoder").Decoder;
    exports.createCodec = require("./ext").createCodec;
    exports.codec = require("./codec").codec;
  }, {
    "./codec": 19,
    "./decode": 21,
    "./decoder": 22,
    "./encode": 24,
    "./encoder": 25,
    "./ext": 29
  } ],
  11: [ function(require, module, exports) {
    (function(Buffer) {
      module.exports = c("undefined" !== typeof Buffer && Buffer) || c(this.Buffer) || c("undefined" !== typeof window && window.Buffer) || this.Buffer;
      function c(B) {
        return B && B.isBuffer && B;
      }
    }).call(this, require("buffer").Buffer);
  }, {
    buffer: 2
  } ],
  12: [ function(require, module, exports) {
    var MAXBUFLEN = 8192;
    exports.copy = copy;
    exports.toString = toString;
    exports.write = write;
    function write(string, offset) {
      var buffer = this;
      var index = offset || (offset |= 0);
      var length = string.length;
      var chr = 0;
      var i = 0;
      while (i < length) {
        chr = string.charCodeAt(i++);
        if (chr < 128) buffer[index++] = chr; else if (chr < 2048) {
          buffer[index++] = 192 | chr >>> 6;
          buffer[index++] = 128 | 63 & chr;
        } else if (chr < 55296 || chr > 57343) {
          buffer[index++] = 224 | chr >>> 12;
          buffer[index++] = 128 | chr >>> 6 & 63;
          buffer[index++] = 128 | 63 & chr;
        } else {
          chr = 65536 + (chr - 55296 << 10 | string.charCodeAt(i++) - 56320);
          buffer[index++] = 240 | chr >>> 18;
          buffer[index++] = 128 | chr >>> 12 & 63;
          buffer[index++] = 128 | chr >>> 6 & 63;
          buffer[index++] = 128 | 63 & chr;
        }
      }
      return index - offset;
    }
    function toString(encoding, start, end) {
      var buffer = this;
      var index = 0 | start;
      end || (end = buffer.length);
      var string = "";
      var chr = 0;
      while (index < end) {
        chr = buffer[index++];
        if (chr < 128) {
          string += String.fromCharCode(chr);
          continue;
        }
        192 === (224 & chr) ? chr = (31 & chr) << 6 | 63 & buffer[index++] : 224 === (240 & chr) ? chr = (15 & chr) << 12 | (63 & buffer[index++]) << 6 | 63 & buffer[index++] : 240 === (248 & chr) && (chr = (7 & chr) << 18 | (63 & buffer[index++]) << 12 | (63 & buffer[index++]) << 6 | 63 & buffer[index++]);
        if (chr >= 65536) {
          chr -= 65536;
          string += String.fromCharCode(55296 + (chr >>> 10), 56320 + (1023 & chr));
        } else string += String.fromCharCode(chr);
      }
      return string;
    }
    function copy(target, targetStart, start, end) {
      var i;
      start || (start = 0);
      end || 0 === end || (end = this.length);
      targetStart || (targetStart = 0);
      var len = end - start;
      if (target === this && start < targetStart && targetStart < end) for (i = len - 1; i >= 0; i--) target[i + targetStart] = this[i + start]; else for (i = 0; i < len; i++) target[i + targetStart] = this[i + start];
      return len;
    }
  }, {} ],
  13: [ function(require, module, exports) {
    var Bufferish = require("./bufferish");
    var exports = module.exports = alloc(0);
    exports.alloc = alloc;
    exports.concat = Bufferish.concat;
    exports.from = from;
    function alloc(size) {
      return new Array(size);
    }
    function from(value) {
      if (!Bufferish.isBuffer(value) && Bufferish.isView(value)) value = Bufferish.Uint8Array.from(value); else if (Bufferish.isArrayBuffer(value)) value = new Uint8Array(value); else {
        if ("string" === typeof value) return Bufferish.from.call(exports, value);
        if ("number" === typeof value) throw new TypeError('"value" argument must not be a number');
      }
      return Array.prototype.slice.call(value);
    }
  }, {
    "./bufferish": 17
  } ],
  14: [ function(require, module, exports) {
    var Bufferish = require("./bufferish");
    var Buffer = Bufferish.global;
    var exports = module.exports = Bufferish.hasBuffer ? alloc(0) : [];
    exports.alloc = Bufferish.hasBuffer && Buffer.alloc || alloc;
    exports.concat = Bufferish.concat;
    exports.from = from;
    function alloc(size) {
      return new Buffer(size);
    }
    function from(value) {
      if (!Bufferish.isBuffer(value) && Bufferish.isView(value)) value = Bufferish.Uint8Array.from(value); else if (Bufferish.isArrayBuffer(value)) value = new Uint8Array(value); else {
        if ("string" === typeof value) return Bufferish.from.call(exports, value);
        if ("number" === typeof value) throw new TypeError('"value" argument must not be a number');
      }
      return Buffer.from && 1 !== Buffer.from.length ? Buffer.from(value) : new Buffer(value);
    }
  }, {
    "./bufferish": 17
  } ],
  15: [ function(require, module, exports) {
    var BufferLite = require("./buffer-lite");
    exports.copy = copy;
    exports.slice = slice;
    exports.toString = toString;
    exports.write = gen("write");
    var Bufferish = require("./bufferish");
    var Buffer = Bufferish.global;
    var isBufferShim = Bufferish.hasBuffer && "TYPED_ARRAY_SUPPORT" in Buffer;
    var brokenTypedArray = isBufferShim && !Buffer.TYPED_ARRAY_SUPPORT;
    function copy(target, targetStart, start, end) {
      var thisIsBuffer = Bufferish.isBuffer(this);
      var targetIsBuffer = Bufferish.isBuffer(target);
      if (thisIsBuffer && targetIsBuffer) return this.copy(target, targetStart, start, end);
      if (brokenTypedArray || thisIsBuffer || targetIsBuffer || !Bufferish.isView(this) || !Bufferish.isView(target)) return BufferLite.copy.call(this, target, targetStart, start, end);
      var buffer = start || null != end ? slice.call(this, start, end) : this;
      target.set(buffer, targetStart);
      return buffer.length;
    }
    function slice(start, end) {
      var f = this.slice || !brokenTypedArray && this.subarray;
      if (f) return f.call(this, start, end);
      var target = Bufferish.alloc.call(this, end - start);
      copy.call(this, target, 0, start, end);
      return target;
    }
    function toString(encoding, start, end) {
      var f = !isBufferShim && Bufferish.isBuffer(this) ? this.toString : BufferLite.toString;
      return f.apply(this, arguments);
    }
    function gen(method) {
      return wrap;
      function wrap() {
        var f = this[method] || BufferLite[method];
        return f.apply(this, arguments);
      }
    }
  }, {
    "./buffer-lite": 12,
    "./bufferish": 17
  } ],
  16: [ function(require, module, exports) {
    var Bufferish = require("./bufferish");
    var exports = module.exports = Bufferish.hasArrayBuffer ? alloc(0) : [];
    exports.alloc = alloc;
    exports.concat = Bufferish.concat;
    exports.from = from;
    function alloc(size) {
      return new Uint8Array(size);
    }
    function from(value) {
      if (Bufferish.isView(value)) {
        var byteOffset = value.byteOffset;
        var byteLength = value.byteLength;
        value = value.buffer;
        if (value.byteLength !== byteLength) if (value.slice) value = value.slice(byteOffset, byteOffset + byteLength); else {
          value = new Uint8Array(value);
          value.byteLength !== byteLength && (value = Array.prototype.slice.call(value, byteOffset, byteOffset + byteLength));
        }
      } else {
        if ("string" === typeof value) return Bufferish.from.call(exports, value);
        if ("number" === typeof value) throw new TypeError('"value" argument must not be a number');
      }
      return new Uint8Array(value);
    }
  }, {
    "./bufferish": 17
  } ],
  17: [ function(require, module, exports) {
    var Buffer = exports.global = require("./buffer-global");
    var hasBuffer = exports.hasBuffer = Buffer && !!Buffer.isBuffer;
    var hasArrayBuffer = exports.hasArrayBuffer = "undefined" !== typeof ArrayBuffer;
    var isArray = exports.isArray = require("isarray");
    exports.isArrayBuffer = hasArrayBuffer ? isArrayBuffer : _false;
    var isBuffer = exports.isBuffer = hasBuffer ? Buffer.isBuffer : _false;
    var isView = exports.isView = hasArrayBuffer ? ArrayBuffer.isView || _is("ArrayBuffer", "buffer") : _false;
    exports.alloc = alloc;
    exports.concat = concat;
    exports.from = from;
    var BufferArray = exports.Array = require("./bufferish-array");
    var BufferBuffer = exports.Buffer = require("./bufferish-buffer");
    var BufferUint8Array = exports.Uint8Array = require("./bufferish-uint8array");
    var BufferProto = exports.prototype = require("./bufferish-proto");
    function from(value) {
      return "string" === typeof value ? fromString.call(this, value) : auto(this).from(value);
    }
    function alloc(size) {
      return auto(this).alloc(size);
    }
    function concat(list, length) {
      if (!length) {
        length = 0;
        Array.prototype.forEach.call(list, dryrun);
      }
      var ref = this !== exports && this || list[0];
      var result = alloc.call(ref, length);
      var offset = 0;
      Array.prototype.forEach.call(list, append);
      return result;
      function dryrun(buffer) {
        length += buffer.length;
      }
      function append(buffer) {
        offset += BufferProto.copy.call(buffer, result, offset);
      }
    }
    var _isArrayBuffer = _is("ArrayBuffer");
    function isArrayBuffer(value) {
      return value instanceof ArrayBuffer || _isArrayBuffer(value);
    }
    function fromString(value) {
      var expected = 3 * value.length;
      var that = alloc.call(this, expected);
      var actual = BufferProto.write.call(that, value);
      expected !== actual && (that = BufferProto.slice.call(that, 0, actual));
      return that;
    }
    function auto(that) {
      return isBuffer(that) ? BufferBuffer : isView(that) ? BufferUint8Array : isArray(that) ? BufferArray : hasBuffer ? BufferBuffer : hasArrayBuffer ? BufferUint8Array : BufferArray;
    }
    function _false() {
      return false;
    }
    function _is(name, key) {
      name = "[object " + name + "]";
      return function(value) {
        return null != value && {}.toString.call(key ? value[key] : value) === name;
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
  18: [ function(require, module, exports) {
    var IS_ARRAY = require("isarray");
    exports.createCodec = createCodec;
    exports.install = install;
    exports.filter = filter;
    var Bufferish = require("./bufferish");
    function Codec(options) {
      if (!(this instanceof Codec)) return new Codec(options);
      this.options = options;
      this.init();
    }
    Codec.prototype.init = function() {
      var options = this.options;
      options && options.uint8array && (this.bufferish = Bufferish.Uint8Array);
      return this;
    };
    function install(props) {
      for (var key in props) Codec.prototype[key] = add(Codec.prototype[key], props[key]);
    }
    function add(a, b) {
      return a && b ? ab : a || b;
      function ab() {
        a.apply(this, arguments);
        return b.apply(this, arguments);
      }
    }
    function join(filters) {
      filters = filters.slice();
      return function(value) {
        return filters.reduce(iterator, value);
      };
      function iterator(value, filter) {
        return filter(value);
      }
    }
    function filter(filter) {
      return IS_ARRAY(filter) ? join(filter) : filter;
    }
    function createCodec(options) {
      return new Codec(options);
    }
    exports.preset = createCodec({
      preset: true
    });
  }, {
    "./bufferish": 17,
    isarray: 8
  } ],
  19: [ function(require, module, exports) {
    require("./read-core");
    require("./write-core");
    exports.codec = {
      preset: require("./codec-base").preset
    };
  }, {
    "./codec-base": 18,
    "./read-core": 31,
    "./write-core": 34
  } ],
  20: [ function(require, module, exports) {
    exports.DecodeBuffer = DecodeBuffer;
    var preset = require("./read-core").preset;
    var FlexDecoder = require("./flex-buffer").FlexDecoder;
    FlexDecoder.mixin(DecodeBuffer.prototype);
    function DecodeBuffer(options) {
      if (!(this instanceof DecodeBuffer)) return new DecodeBuffer(options);
      if (options) {
        this.options = options;
        if (options.codec) {
          var codec = this.codec = options.codec;
          codec.bufferish && (this.bufferish = codec.bufferish);
        }
      }
    }
    DecodeBuffer.prototype.codec = preset;
    DecodeBuffer.prototype.fetch = function() {
      return this.codec.decode(this);
    };
  }, {
    "./flex-buffer": 30,
    "./read-core": 31
  } ],
  21: [ function(require, module, exports) {
    exports.decode = decode;
    var DecodeBuffer = require("./decode-buffer").DecodeBuffer;
    function decode(input, options) {
      var decoder = new DecodeBuffer(options);
      decoder.write(input);
      return decoder.read();
    }
  }, {
    "./decode-buffer": 20
  } ],
  22: [ function(require, module, exports) {
    exports.Decoder = Decoder;
    var EventLite = require("event-lite");
    var DecodeBuffer = require("./decode-buffer").DecodeBuffer;
    function Decoder(options) {
      if (!(this instanceof Decoder)) return new Decoder(options);
      DecodeBuffer.call(this, options);
    }
    Decoder.prototype = new DecodeBuffer();
    EventLite.mixin(Decoder.prototype);
    Decoder.prototype.decode = function(chunk) {
      arguments.length && this.write(chunk);
      this.flush();
    };
    Decoder.prototype.push = function(chunk) {
      this.emit("data", chunk);
    };
    Decoder.prototype.end = function(chunk) {
      this.decode(chunk);
      this.emit("end");
    };
  }, {
    "./decode-buffer": 20,
    "event-lite": 5
  } ],
  23: [ function(require, module, exports) {
    exports.EncodeBuffer = EncodeBuffer;
    var preset = require("./write-core").preset;
    var FlexEncoder = require("./flex-buffer").FlexEncoder;
    FlexEncoder.mixin(EncodeBuffer.prototype);
    function EncodeBuffer(options) {
      if (!(this instanceof EncodeBuffer)) return new EncodeBuffer(options);
      if (options) {
        this.options = options;
        if (options.codec) {
          var codec = this.codec = options.codec;
          codec.bufferish && (this.bufferish = codec.bufferish);
        }
      }
    }
    EncodeBuffer.prototype.codec = preset;
    EncodeBuffer.prototype.write = function(input) {
      this.codec.encode(this, input);
    };
  }, {
    "./flex-buffer": 30,
    "./write-core": 34
  } ],
  24: [ function(require, module, exports) {
    exports.encode = encode;
    var EncodeBuffer = require("./encode-buffer").EncodeBuffer;
    function encode(input, options) {
      var encoder = new EncodeBuffer(options);
      encoder.write(input);
      return encoder.read();
    }
  }, {
    "./encode-buffer": 23
  } ],
  25: [ function(require, module, exports) {
    exports.Encoder = Encoder;
    var EventLite = require("event-lite");
    var EncodeBuffer = require("./encode-buffer").EncodeBuffer;
    function Encoder(options) {
      if (!(this instanceof Encoder)) return new Encoder(options);
      EncodeBuffer.call(this, options);
    }
    Encoder.prototype = new EncodeBuffer();
    EventLite.mixin(Encoder.prototype);
    Encoder.prototype.encode = function(chunk) {
      this.write(chunk);
      this.emit("data", this.read());
    };
    Encoder.prototype.end = function(chunk) {
      arguments.length && this.encode(chunk);
      this.flush();
      this.emit("end");
    };
  }, {
    "./encode-buffer": 23,
    "event-lite": 5
  } ],
  26: [ function(require, module, exports) {
    exports.ExtBuffer = ExtBuffer;
    var Bufferish = require("./bufferish");
    function ExtBuffer(buffer, type) {
      if (!(this instanceof ExtBuffer)) return new ExtBuffer(buffer, type);
      this.buffer = Bufferish.from(buffer);
      this.type = type;
    }
  }, {
    "./bufferish": 17
  } ],
  27: [ function(require, module, exports) {
    exports.setExtPackers = setExtPackers;
    var Bufferish = require("./bufferish");
    var Buffer = Bufferish.global;
    var packTypedArray = Bufferish.Uint8Array.from;
    var _encode;
    var ERROR_COLUMNS = {
      name: 1,
      message: 1,
      stack: 1,
      columnNumber: 1,
      fileName: 1,
      lineNumber: 1
    };
    function setExtPackers(codec) {
      codec.addExtPacker(14, Error, [ packError, encode ]);
      codec.addExtPacker(1, EvalError, [ packError, encode ]);
      codec.addExtPacker(2, RangeError, [ packError, encode ]);
      codec.addExtPacker(3, ReferenceError, [ packError, encode ]);
      codec.addExtPacker(4, SyntaxError, [ packError, encode ]);
      codec.addExtPacker(5, TypeError, [ packError, encode ]);
      codec.addExtPacker(6, URIError, [ packError, encode ]);
      codec.addExtPacker(10, RegExp, [ packRegExp, encode ]);
      codec.addExtPacker(11, Boolean, [ packValueOf, encode ]);
      codec.addExtPacker(12, String, [ packValueOf, encode ]);
      codec.addExtPacker(13, Date, [ Number, encode ]);
      codec.addExtPacker(15, Number, [ packValueOf, encode ]);
      if ("undefined" !== typeof Uint8Array) {
        codec.addExtPacker(17, Int8Array, packTypedArray);
        codec.addExtPacker(18, Uint8Array, packTypedArray);
        codec.addExtPacker(19, Int16Array, packTypedArray);
        codec.addExtPacker(20, Uint16Array, packTypedArray);
        codec.addExtPacker(21, Int32Array, packTypedArray);
        codec.addExtPacker(22, Uint32Array, packTypedArray);
        codec.addExtPacker(23, Float32Array, packTypedArray);
        "undefined" !== typeof Float64Array && codec.addExtPacker(24, Float64Array, packTypedArray);
        "undefined" !== typeof Uint8ClampedArray && codec.addExtPacker(25, Uint8ClampedArray, packTypedArray);
        codec.addExtPacker(26, ArrayBuffer, packTypedArray);
        codec.addExtPacker(29, DataView, packTypedArray);
      }
      Bufferish.hasBuffer && codec.addExtPacker(27, Buffer, Bufferish.from);
    }
    function encode(input) {
      _encode || (_encode = require("./encode").encode);
      return _encode(input);
    }
    function packValueOf(value) {
      return value.valueOf();
    }
    function packRegExp(value) {
      value = RegExp.prototype.toString.call(value).split("/");
      value.shift();
      var out = [ value.pop() ];
      out.unshift(value.join("/"));
      return out;
    }
    function packError(value) {
      var out = {};
      for (var key in ERROR_COLUMNS) out[key] = value[key];
      return out;
    }
  }, {
    "./bufferish": 17,
    "./encode": 24
  } ],
  28: [ function(require, module, exports) {
    exports.setExtUnpackers = setExtUnpackers;
    var Bufferish = require("./bufferish");
    var Buffer = Bufferish.global;
    var _decode;
    var ERROR_COLUMNS = {
      name: 1,
      message: 1,
      stack: 1,
      columnNumber: 1,
      fileName: 1,
      lineNumber: 1
    };
    function setExtUnpackers(codec) {
      codec.addExtUnpacker(14, [ decode, unpackError(Error) ]);
      codec.addExtUnpacker(1, [ decode, unpackError(EvalError) ]);
      codec.addExtUnpacker(2, [ decode, unpackError(RangeError) ]);
      codec.addExtUnpacker(3, [ decode, unpackError(ReferenceError) ]);
      codec.addExtUnpacker(4, [ decode, unpackError(SyntaxError) ]);
      codec.addExtUnpacker(5, [ decode, unpackError(TypeError) ]);
      codec.addExtUnpacker(6, [ decode, unpackError(URIError) ]);
      codec.addExtUnpacker(10, [ decode, unpackRegExp ]);
      codec.addExtUnpacker(11, [ decode, unpackClass(Boolean) ]);
      codec.addExtUnpacker(12, [ decode, unpackClass(String) ]);
      codec.addExtUnpacker(13, [ decode, unpackClass(Date) ]);
      codec.addExtUnpacker(15, [ decode, unpackClass(Number) ]);
      if ("undefined" !== typeof Uint8Array) {
        codec.addExtUnpacker(17, unpackClass(Int8Array));
        codec.addExtUnpacker(18, unpackClass(Uint8Array));
        codec.addExtUnpacker(19, [ unpackArrayBuffer, unpackClass(Int16Array) ]);
        codec.addExtUnpacker(20, [ unpackArrayBuffer, unpackClass(Uint16Array) ]);
        codec.addExtUnpacker(21, [ unpackArrayBuffer, unpackClass(Int32Array) ]);
        codec.addExtUnpacker(22, [ unpackArrayBuffer, unpackClass(Uint32Array) ]);
        codec.addExtUnpacker(23, [ unpackArrayBuffer, unpackClass(Float32Array) ]);
        "undefined" !== typeof Float64Array && codec.addExtUnpacker(24, [ unpackArrayBuffer, unpackClass(Float64Array) ]);
        "undefined" !== typeof Uint8ClampedArray && codec.addExtUnpacker(25, unpackClass(Uint8ClampedArray));
        codec.addExtUnpacker(26, unpackArrayBuffer);
        codec.addExtUnpacker(29, [ unpackArrayBuffer, unpackClass(DataView) ]);
      }
      Bufferish.hasBuffer && codec.addExtUnpacker(27, unpackClass(Buffer));
    }
    function decode(input) {
      _decode || (_decode = require("./decode").decode);
      return _decode(input);
    }
    function unpackRegExp(value) {
      return RegExp.apply(null, value);
    }
    function unpackError(Class) {
      return function(value) {
        var out = new Class();
        for (var key in ERROR_COLUMNS) out[key] = value[key];
        return out;
      };
    }
    function unpackClass(Class) {
      return function(value) {
        return new Class(value);
      };
    }
    function unpackArrayBuffer(value) {
      return new Uint8Array(value).buffer;
    }
  }, {
    "./bufferish": 17,
    "./decode": 21
  } ],
  29: [ function(require, module, exports) {
    require("./read-core");
    require("./write-core");
    exports.createCodec = require("./codec-base").createCodec;
  }, {
    "./codec-base": 18,
    "./read-core": 31,
    "./write-core": 34
  } ],
  30: [ function(require, module, exports) {
    exports.FlexDecoder = FlexDecoder;
    exports.FlexEncoder = FlexEncoder;
    var Bufferish = require("./bufferish");
    var MIN_BUFFER_SIZE = 2048;
    var MAX_BUFFER_SIZE = 65536;
    var BUFFER_SHORTAGE = "BUFFER_SHORTAGE";
    function FlexDecoder() {
      if (!(this instanceof FlexDecoder)) return new FlexDecoder();
    }
    function FlexEncoder() {
      if (!(this instanceof FlexEncoder)) return new FlexEncoder();
    }
    FlexDecoder.mixin = mixinFactory(getDecoderMethods());
    FlexDecoder.mixin(FlexDecoder.prototype);
    FlexEncoder.mixin = mixinFactory(getEncoderMethods());
    FlexEncoder.mixin(FlexEncoder.prototype);
    function getDecoderMethods() {
      return {
        bufferish: Bufferish,
        write: write,
        fetch: fetch,
        flush: flush,
        push: push,
        pull: pull,
        read: read,
        reserve: reserve,
        offset: 0
      };
      function write(chunk) {
        var prev = this.offset ? Bufferish.prototype.slice.call(this.buffer, this.offset) : this.buffer;
        this.buffer = prev ? chunk ? this.bufferish.concat([ prev, chunk ]) : prev : chunk;
        this.offset = 0;
      }
      function flush() {
        while (this.offset < this.buffer.length) {
          var start = this.offset;
          var value;
          try {
            value = this.fetch();
          } catch (e) {
            if (e && e.message != BUFFER_SHORTAGE) throw e;
            this.offset = start;
            break;
          }
          this.push(value);
        }
      }
      function reserve(length) {
        var start = this.offset;
        var end = start + length;
        if (end > this.buffer.length) throw new Error(BUFFER_SHORTAGE);
        this.offset = end;
        return start;
      }
    }
    function getEncoderMethods() {
      return {
        bufferish: Bufferish,
        write: write,
        fetch: fetch,
        flush: flush,
        push: push,
        pull: pull,
        read: read,
        reserve: reserve,
        send: send,
        maxBufferSize: MAX_BUFFER_SIZE,
        minBufferSize: MIN_BUFFER_SIZE,
        offset: 0,
        start: 0
      };
      function fetch() {
        var start = this.start;
        if (start < this.offset) {
          var end = this.start = this.offset;
          return Bufferish.prototype.slice.call(this.buffer, start, end);
        }
      }
      function flush() {
        while (this.start < this.offset) {
          var value = this.fetch();
          value && this.push(value);
        }
      }
      function pull() {
        var buffers = this.buffers || (this.buffers = []);
        var chunk = buffers.length > 1 ? this.bufferish.concat(buffers) : buffers[0];
        buffers.length = 0;
        return chunk;
      }
      function reserve(length) {
        var req = 0 | length;
        if (this.buffer) {
          var size = this.buffer.length;
          var start = 0 | this.offset;
          var end = start + req;
          if (end < size) {
            this.offset = end;
            return start;
          }
          this.flush();
          length = Math.max(length, Math.min(2 * size, this.maxBufferSize));
        }
        length = Math.max(length, this.minBufferSize);
        this.buffer = this.bufferish.alloc(length);
        this.start = 0;
        this.offset = req;
        return 0;
      }
      function send(buffer) {
        var length = buffer.length;
        if (length > this.minBufferSize) {
          this.flush();
          this.push(buffer);
        } else {
          var offset = this.reserve(length);
          Bufferish.prototype.copy.call(buffer, this.buffer, offset);
        }
      }
    }
    function write() {
      throw new Error("method not implemented: write()");
    }
    function fetch() {
      throw new Error("method not implemented: fetch()");
    }
    function read() {
      var length = this.buffers && this.buffers.length;
      if (!length) return this.fetch();
      this.flush();
      return this.pull();
    }
    function push(chunk) {
      var buffers = this.buffers || (this.buffers = []);
      buffers.push(chunk);
    }
    function pull() {
      var buffers = this.buffers || (this.buffers = []);
      return buffers.shift();
    }
    function mixinFactory(source) {
      return mixin;
      function mixin(target) {
        for (var key in source) target[key] = source[key];
        return target;
      }
    }
  }, {
    "./bufferish": 17
  } ],
  31: [ function(require, module, exports) {
    var ExtBuffer = require("./ext-buffer").ExtBuffer;
    var ExtUnpacker = require("./ext-unpacker");
    var readUint8 = require("./read-format").readUint8;
    var ReadToken = require("./read-token");
    var CodecBase = require("./codec-base");
    CodecBase.install({
      addExtUnpacker: addExtUnpacker,
      getExtUnpacker: getExtUnpacker,
      init: init
    });
    exports.preset = init.call(CodecBase.preset);
    function getDecoder(options) {
      var readToken = ReadToken.getReadToken(options);
      return decode;
      function decode(decoder) {
        var type = readUint8(decoder);
        var func = readToken[type];
        if (!func) throw new Error("Invalid type: " + (type ? "0x" + type.toString(16) : type));
        return func(decoder);
      }
    }
    function init() {
      var options = this.options;
      this.decode = getDecoder(options);
      options && options.preset && ExtUnpacker.setExtUnpackers(this);
      return this;
    }
    function addExtUnpacker(etype, unpacker) {
      var unpackers = this.extUnpackers || (this.extUnpackers = []);
      unpackers[etype] = CodecBase.filter(unpacker);
    }
    function getExtUnpacker(type) {
      var unpackers = this.extUnpackers || (this.extUnpackers = []);
      return unpackers[type] || extUnpacker;
      function extUnpacker(buffer) {
        return new ExtBuffer(buffer, type);
      }
    }
  }, {
    "./codec-base": 18,
    "./ext-buffer": 26,
    "./ext-unpacker": 28,
    "./read-format": 32,
    "./read-token": 33
  } ],
  32: [ function(require, module, exports) {
    var ieee754 = require("ieee754");
    var Int64Buffer = require("int64-buffer");
    var Uint64BE = Int64Buffer.Uint64BE;
    var Int64BE = Int64Buffer.Int64BE;
    exports.getReadFormat = getReadFormat;
    exports.readUint8 = uint8;
    var Bufferish = require("./bufferish");
    var BufferProto = require("./bufferish-proto");
    var HAS_MAP = "undefined" !== typeof Map;
    var NO_ASSERT = true;
    function getReadFormat(options) {
      var binarraybuffer = Bufferish.hasArrayBuffer && options && options.binarraybuffer;
      var int64 = options && options.int64;
      var usemap = HAS_MAP && options && options.usemap;
      var readFormat = {
        map: usemap ? map_to_map : map_to_obj,
        array: array,
        str: str,
        bin: binarraybuffer ? bin_arraybuffer : bin_buffer,
        ext: ext,
        uint8: uint8,
        uint16: uint16,
        uint32: uint32,
        uint64: read(8, int64 ? readUInt64BE_int64 : readUInt64BE),
        int8: int8,
        int16: int16,
        int32: int32,
        int64: read(8, int64 ? readInt64BE_int64 : readInt64BE),
        float32: read(4, readFloatBE),
        float64: read(8, readDoubleBE)
      };
      return readFormat;
    }
    function map_to_obj(decoder, len) {
      var value = {};
      var i;
      var k = new Array(len);
      var v = new Array(len);
      var decode = decoder.codec.decode;
      for (i = 0; i < len; i++) {
        k[i] = decode(decoder);
        v[i] = decode(decoder);
      }
      for (i = 0; i < len; i++) value[k[i]] = v[i];
      return value;
    }
    function map_to_map(decoder, len) {
      var value = new Map();
      var i;
      var k = new Array(len);
      var v = new Array(len);
      var decode = decoder.codec.decode;
      for (i = 0; i < len; i++) {
        k[i] = decode(decoder);
        v[i] = decode(decoder);
      }
      for (i = 0; i < len; i++) value.set(k[i], v[i]);
      return value;
    }
    function array(decoder, len) {
      var value = new Array(len);
      var decode = decoder.codec.decode;
      for (var i = 0; i < len; i++) value[i] = decode(decoder);
      return value;
    }
    function str(decoder, len) {
      var start = decoder.reserve(len);
      var end = start + len;
      return BufferProto.toString.call(decoder.buffer, "utf-8", start, end);
    }
    function bin_buffer(decoder, len) {
      var start = decoder.reserve(len);
      var end = start + len;
      var buf = BufferProto.slice.call(decoder.buffer, start, end);
      return Bufferish.from(buf);
    }
    function bin_arraybuffer(decoder, len) {
      var start = decoder.reserve(len);
      var end = start + len;
      var buf = BufferProto.slice.call(decoder.buffer, start, end);
      return Bufferish.Uint8Array.from(buf).buffer;
    }
    function ext(decoder, len) {
      var start = decoder.reserve(len + 1);
      var type = decoder.buffer[start++];
      var end = start + len;
      var unpack = decoder.codec.getExtUnpacker(type);
      if (!unpack) throw new Error("Invalid ext type: " + (type ? "0x" + type.toString(16) : type));
      var buf = BufferProto.slice.call(decoder.buffer, start, end);
      return unpack(buf);
    }
    function uint8(decoder) {
      var start = decoder.reserve(1);
      return decoder.buffer[start];
    }
    function int8(decoder) {
      var start = decoder.reserve(1);
      var value = decoder.buffer[start];
      return 128 & value ? value - 256 : value;
    }
    function uint16(decoder) {
      var start = decoder.reserve(2);
      var buffer = decoder.buffer;
      return buffer[start++] << 8 | buffer[start];
    }
    function int16(decoder) {
      var start = decoder.reserve(2);
      var buffer = decoder.buffer;
      var value = buffer[start++] << 8 | buffer[start];
      return 32768 & value ? value - 65536 : value;
    }
    function uint32(decoder) {
      var start = decoder.reserve(4);
      var buffer = decoder.buffer;
      return 16777216 * buffer[start++] + (buffer[start++] << 16) + (buffer[start++] << 8) + buffer[start];
    }
    function int32(decoder) {
      var start = decoder.reserve(4);
      var buffer = decoder.buffer;
      return buffer[start++] << 24 | buffer[start++] << 16 | buffer[start++] << 8 | buffer[start];
    }
    function read(len, method) {
      return function(decoder) {
        var start = decoder.reserve(len);
        return method.call(decoder.buffer, start, NO_ASSERT);
      };
    }
    function readUInt64BE(start) {
      return new Uint64BE(this, start).toNumber();
    }
    function readInt64BE(start) {
      return new Int64BE(this, start).toNumber();
    }
    function readUInt64BE_int64(start) {
      return new Uint64BE(this, start);
    }
    function readInt64BE_int64(start) {
      return new Int64BE(this, start);
    }
    function readFloatBE(start) {
      return ieee754.read(this, start, false, 23, 4);
    }
    function readDoubleBE(start) {
      return ieee754.read(this, start, false, 52, 8);
    }
  }, {
    "./bufferish": 17,
    "./bufferish-proto": 15,
    ieee754: 6,
    "int64-buffer": 7
  } ],
  33: [ function(require, module, exports) {
    var ReadFormat = require("./read-format");
    exports.getReadToken = getReadToken;
    function getReadToken(options) {
      var format = ReadFormat.getReadFormat(options);
      return options && options.useraw ? init_useraw(format) : init_token(format);
    }
    function init_token(format) {
      var i;
      var token = new Array(256);
      for (i = 0; i <= 127; i++) token[i] = constant(i);
      for (i = 128; i <= 143; i++) token[i] = fix(i - 128, format.map);
      for (i = 144; i <= 159; i++) token[i] = fix(i - 144, format.array);
      for (i = 160; i <= 191; i++) token[i] = fix(i - 160, format.str);
      token[192] = constant(null);
      token[193] = null;
      token[194] = constant(false);
      token[195] = constant(true);
      token[196] = flex(format.uint8, format.bin);
      token[197] = flex(format.uint16, format.bin);
      token[198] = flex(format.uint32, format.bin);
      token[199] = flex(format.uint8, format.ext);
      token[200] = flex(format.uint16, format.ext);
      token[201] = flex(format.uint32, format.ext);
      token[202] = format.float32;
      token[203] = format.float64;
      token[204] = format.uint8;
      token[205] = format.uint16;
      token[206] = format.uint32;
      token[207] = format.uint64;
      token[208] = format.int8;
      token[209] = format.int16;
      token[210] = format.int32;
      token[211] = format.int64;
      token[212] = fix(1, format.ext);
      token[213] = fix(2, format.ext);
      token[214] = fix(4, format.ext);
      token[215] = fix(8, format.ext);
      token[216] = fix(16, format.ext);
      token[217] = flex(format.uint8, format.str);
      token[218] = flex(format.uint16, format.str);
      token[219] = flex(format.uint32, format.str);
      token[220] = flex(format.uint16, format.array);
      token[221] = flex(format.uint32, format.array);
      token[222] = flex(format.uint16, format.map);
      token[223] = flex(format.uint32, format.map);
      for (i = 224; i <= 255; i++) token[i] = constant(i - 256);
      return token;
    }
    function init_useraw(format) {
      var i;
      var token = init_token(format).slice();
      token[217] = token[196];
      token[218] = token[197];
      token[219] = token[198];
      for (i = 160; i <= 191; i++) token[i] = fix(i - 160, format.bin);
      return token;
    }
    function constant(value) {
      return function() {
        return value;
      };
    }
    function flex(lenFunc, decodeFunc) {
      return function(decoder) {
        var len = lenFunc(decoder);
        return decodeFunc(decoder, len);
      };
    }
    function fix(len, method) {
      return function(decoder) {
        return method(decoder, len);
      };
    }
  }, {
    "./read-format": 32
  } ],
  34: [ function(require, module, exports) {
    var ExtBuffer = require("./ext-buffer").ExtBuffer;
    var ExtPacker = require("./ext-packer");
    var WriteType = require("./write-type");
    var CodecBase = require("./codec-base");
    CodecBase.install({
      addExtPacker: addExtPacker,
      getExtPacker: getExtPacker,
      init: init
    });
    exports.preset = init.call(CodecBase.preset);
    function getEncoder(options) {
      var writeType = WriteType.getWriteType(options);
      return encode;
      function encode(encoder, value) {
        var func = writeType[typeof value];
        if (!func) throw new Error('Unsupported type "' + typeof value + '": ' + value);
        func(encoder, value);
      }
    }
    function init() {
      var options = this.options;
      this.encode = getEncoder(options);
      options && options.preset && ExtPacker.setExtPackers(this);
      return this;
    }
    function addExtPacker(etype, Class, packer) {
      packer = CodecBase.filter(packer);
      var name = Class.name;
      if (name && "Object" !== name) {
        var packers = this.extPackers || (this.extPackers = {});
        packers[name] = extPacker;
      } else {
        var list = this.extEncoderList || (this.extEncoderList = []);
        list.unshift([ Class, extPacker ]);
      }
      function extPacker(value) {
        packer && (value = packer(value));
        return new ExtBuffer(value, etype);
      }
    }
    function getExtPacker(value) {
      var packers = this.extPackers || (this.extPackers = {});
      var c = value.constructor;
      var e = c && c.name && packers[c.name];
      if (e) return e;
      var list = this.extEncoderList || (this.extEncoderList = []);
      var len = list.length;
      for (var i = 0; i < len; i++) {
        var pair = list[i];
        if (c === pair[0]) return pair[1];
      }
    }
  }, {
    "./codec-base": 18,
    "./ext-buffer": 26,
    "./ext-packer": 27,
    "./write-type": 36
  } ],
  35: [ function(require, module, exports) {
    var ieee754 = require("ieee754");
    var Int64Buffer = require("int64-buffer");
    var Uint64BE = Int64Buffer.Uint64BE;
    var Int64BE = Int64Buffer.Int64BE;
    var uint8 = require("./write-uint8").uint8;
    var Bufferish = require("./bufferish");
    var Buffer = Bufferish.global;
    var IS_BUFFER_SHIM = Bufferish.hasBuffer && "TYPED_ARRAY_SUPPORT" in Buffer;
    var NO_TYPED_ARRAY = IS_BUFFER_SHIM && !Buffer.TYPED_ARRAY_SUPPORT;
    var Buffer_prototype = Bufferish.hasBuffer && Buffer.prototype || {};
    exports.getWriteToken = getWriteToken;
    function getWriteToken(options) {
      return options && options.uint8array ? init_uint8array() : NO_TYPED_ARRAY || Bufferish.hasBuffer && options && options.safe ? init_safe() : init_token();
    }
    function init_uint8array() {
      var token = init_token();
      token[202] = writeN(202, 4, writeFloatBE);
      token[203] = writeN(203, 8, writeDoubleBE);
      return token;
    }
    function init_token() {
      var token = uint8.slice();
      token[196] = write1(196);
      token[197] = write2(197);
      token[198] = write4(198);
      token[199] = write1(199);
      token[200] = write2(200);
      token[201] = write4(201);
      token[202] = writeN(202, 4, Buffer_prototype.writeFloatBE || writeFloatBE, true);
      token[203] = writeN(203, 8, Buffer_prototype.writeDoubleBE || writeDoubleBE, true);
      token[204] = write1(204);
      token[205] = write2(205);
      token[206] = write4(206);
      token[207] = writeN(207, 8, writeUInt64BE);
      token[208] = write1(208);
      token[209] = write2(209);
      token[210] = write4(210);
      token[211] = writeN(211, 8, writeInt64BE);
      token[217] = write1(217);
      token[218] = write2(218);
      token[219] = write4(219);
      token[220] = write2(220);
      token[221] = write4(221);
      token[222] = write2(222);
      token[223] = write4(223);
      return token;
    }
    function init_safe() {
      var token = uint8.slice();
      token[196] = writeN(196, 1, Buffer.prototype.writeUInt8);
      token[197] = writeN(197, 2, Buffer.prototype.writeUInt16BE);
      token[198] = writeN(198, 4, Buffer.prototype.writeUInt32BE);
      token[199] = writeN(199, 1, Buffer.prototype.writeUInt8);
      token[200] = writeN(200, 2, Buffer.prototype.writeUInt16BE);
      token[201] = writeN(201, 4, Buffer.prototype.writeUInt32BE);
      token[202] = writeN(202, 4, Buffer.prototype.writeFloatBE);
      token[203] = writeN(203, 8, Buffer.prototype.writeDoubleBE);
      token[204] = writeN(204, 1, Buffer.prototype.writeUInt8);
      token[205] = writeN(205, 2, Buffer.prototype.writeUInt16BE);
      token[206] = writeN(206, 4, Buffer.prototype.writeUInt32BE);
      token[207] = writeN(207, 8, writeUInt64BE);
      token[208] = writeN(208, 1, Buffer.prototype.writeInt8);
      token[209] = writeN(209, 2, Buffer.prototype.writeInt16BE);
      token[210] = writeN(210, 4, Buffer.prototype.writeInt32BE);
      token[211] = writeN(211, 8, writeInt64BE);
      token[217] = writeN(217, 1, Buffer.prototype.writeUInt8);
      token[218] = writeN(218, 2, Buffer.prototype.writeUInt16BE);
      token[219] = writeN(219, 4, Buffer.prototype.writeUInt32BE);
      token[220] = writeN(220, 2, Buffer.prototype.writeUInt16BE);
      token[221] = writeN(221, 4, Buffer.prototype.writeUInt32BE);
      token[222] = writeN(222, 2, Buffer.prototype.writeUInt16BE);
      token[223] = writeN(223, 4, Buffer.prototype.writeUInt32BE);
      return token;
    }
    function write1(type) {
      return function(encoder, value) {
        var offset = encoder.reserve(2);
        var buffer = encoder.buffer;
        buffer[offset++] = type;
        buffer[offset] = value;
      };
    }
    function write2(type) {
      return function(encoder, value) {
        var offset = encoder.reserve(3);
        var buffer = encoder.buffer;
        buffer[offset++] = type;
        buffer[offset++] = value >>> 8;
        buffer[offset] = value;
      };
    }
    function write4(type) {
      return function(encoder, value) {
        var offset = encoder.reserve(5);
        var buffer = encoder.buffer;
        buffer[offset++] = type;
        buffer[offset++] = value >>> 24;
        buffer[offset++] = value >>> 16;
        buffer[offset++] = value >>> 8;
        buffer[offset] = value;
      };
    }
    function writeN(type, len, method, noAssert) {
      return function(encoder, value) {
        var offset = encoder.reserve(len + 1);
        encoder.buffer[offset++] = type;
        method.call(encoder.buffer, value, offset, noAssert);
      };
    }
    function writeUInt64BE(value, offset) {
      new Uint64BE(this, offset, value);
    }
    function writeInt64BE(value, offset) {
      new Int64BE(this, offset, value);
    }
    function writeFloatBE(value, offset) {
      ieee754.write(this, value, offset, false, 23, 4);
    }
    function writeDoubleBE(value, offset) {
      ieee754.write(this, value, offset, false, 52, 8);
    }
  }, {
    "./bufferish": 17,
    "./write-uint8": 37,
    ieee754: 6,
    "int64-buffer": 7
  } ],
  36: [ function(require, module, exports) {
    var IS_ARRAY = require("isarray");
    var Int64Buffer = require("int64-buffer");
    var Uint64BE = Int64Buffer.Uint64BE;
    var Int64BE = Int64Buffer.Int64BE;
    var Bufferish = require("./bufferish");
    var BufferProto = require("./bufferish-proto");
    var WriteToken = require("./write-token");
    var uint8 = require("./write-uint8").uint8;
    var ExtBuffer = require("./ext-buffer").ExtBuffer;
    var HAS_UINT8ARRAY = "undefined" !== typeof Uint8Array;
    var HAS_MAP = "undefined" !== typeof Map;
    var extmap = [];
    extmap[1] = 212;
    extmap[2] = 213;
    extmap[4] = 214;
    extmap[8] = 215;
    extmap[16] = 216;
    exports.getWriteType = getWriteType;
    function getWriteType(options) {
      var token = WriteToken.getWriteToken(options);
      var useraw = options && options.useraw;
      var binarraybuffer = HAS_UINT8ARRAY && options && options.binarraybuffer;
      var isBuffer = binarraybuffer ? Bufferish.isArrayBuffer : Bufferish.isBuffer;
      var bin = binarraybuffer ? bin_arraybuffer : bin_buffer;
      var usemap = HAS_MAP && options && options.usemap;
      var map = usemap ? map_to_map : obj_to_map;
      var writeType = {
        boolean: bool,
        function: nil,
        number: number,
        object: useraw ? object_raw : object,
        string: _string(useraw ? raw_head_size : str_head_size),
        symbol: nil,
        undefined: nil
      };
      return writeType;
      function bool(encoder, value) {
        var type = value ? 195 : 194;
        token[type](encoder, value);
      }
      function number(encoder, value) {
        var ivalue = 0 | value;
        var type;
        if (value !== ivalue) {
          type = 203;
          token[type](encoder, value);
          return;
        }
        type = -32 <= ivalue && ivalue <= 127 ? 255 & ivalue : 0 <= ivalue ? ivalue <= 255 ? 204 : ivalue <= 65535 ? 205 : 206 : -128 <= ivalue ? 208 : -32768 <= ivalue ? 209 : 210;
        token[type](encoder, ivalue);
      }
      function uint64(encoder, value) {
        var type = 207;
        token[type](encoder, value.toArray());
      }
      function int64(encoder, value) {
        var type = 211;
        token[type](encoder, value.toArray());
      }
      function str_head_size(length) {
        return length < 32 ? 1 : length <= 255 ? 2 : length <= 65535 ? 3 : 5;
      }
      function raw_head_size(length) {
        return length < 32 ? 1 : length <= 65535 ? 3 : 5;
      }
      function _string(head_size) {
        return string;
        function string(encoder, value) {
          var length = value.length;
          var maxsize = 5 + 3 * length;
          encoder.offset = encoder.reserve(maxsize);
          var buffer = encoder.buffer;
          var expected = head_size(length);
          var start = encoder.offset + expected;
          length = BufferProto.write.call(buffer, value, start);
          var actual = head_size(length);
          if (expected !== actual) {
            var targetStart = start + actual - expected;
            var end = start + length;
            BufferProto.copy.call(buffer, buffer, targetStart, start, end);
          }
          var type = 1 === actual ? 160 + length : actual <= 3 ? 215 + actual : 219;
          token[type](encoder, length);
          encoder.offset += length;
        }
      }
      function object(encoder, value) {
        if (null === value) return nil(encoder, value);
        if (isBuffer(value)) return bin(encoder, value);
        if (IS_ARRAY(value)) return array(encoder, value);
        if (Uint64BE.isUint64BE(value)) return uint64(encoder, value);
        if (Int64BE.isInt64BE(value)) return int64(encoder, value);
        var packer = encoder.codec.getExtPacker(value);
        packer && (value = packer(value));
        if (value instanceof ExtBuffer) return ext(encoder, value);
        map(encoder, value);
      }
      function object_raw(encoder, value) {
        if (isBuffer(value)) return raw(encoder, value);
        object(encoder, value);
      }
      function nil(encoder, value) {
        var type = 192;
        token[type](encoder, value);
      }
      function array(encoder, value) {
        var length = value.length;
        var type = length < 16 ? 144 + length : length <= 65535 ? 220 : 221;
        token[type](encoder, length);
        var encode = encoder.codec.encode;
        for (var i = 0; i < length; i++) encode(encoder, value[i]);
      }
      function bin_buffer(encoder, value) {
        var length = value.length;
        var type = length < 255 ? 196 : length <= 65535 ? 197 : 198;
        token[type](encoder, length);
        encoder.send(value);
      }
      function bin_arraybuffer(encoder, value) {
        bin_buffer(encoder, new Uint8Array(value));
      }
      function ext(encoder, value) {
        var buffer = value.buffer;
        var length = buffer.length;
        var type = extmap[length] || (length < 255 ? 199 : length <= 65535 ? 200 : 201);
        token[type](encoder, length);
        uint8[value.type](encoder);
        encoder.send(buffer);
      }
      function obj_to_map(encoder, value) {
        var keys = Object.keys(value);
        var length = keys.length;
        var type = length < 16 ? 128 + length : length <= 65535 ? 222 : 223;
        token[type](encoder, length);
        var encode = encoder.codec.encode;
        keys.forEach(function(key) {
          encode(encoder, key);
          encode(encoder, value[key]);
        });
      }
      function map_to_map(encoder, value) {
        if (!(value instanceof Map)) return obj_to_map(encoder, value);
        var length = value.size;
        var type = length < 16 ? 128 + length : length <= 65535 ? 222 : 223;
        token[type](encoder, length);
        var encode = encoder.codec.encode;
        value.forEach(function(val, key, m) {
          encode(encoder, key);
          encode(encoder, val);
        });
      }
      function raw(encoder, value) {
        var length = value.length;
        var type = length < 32 ? 160 + length : length <= 65535 ? 218 : 219;
        token[type](encoder, length);
        encoder.send(value);
      }
    }
  }, {
    "./bufferish": 17,
    "./bufferish-proto": 15,
    "./ext-buffer": 26,
    "./write-token": 35,
    "./write-uint8": 37,
    "int64-buffer": 7,
    isarray: 8
  } ],
  37: [ function(require, module, exports) {
    var constant = exports.uint8 = new Array(256);
    for (var i = 0; i <= 255; i++) constant[i] = write0(i);
    function write0(type) {
      return function(encoder) {
        var offset = encoder.reserve(1);
        encoder.buffer[offset] = type;
      };
    }
  }, {} ],
  38: [ function(require, module, exports) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    module.exports = {
      default: "RFC3986",
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return value;
        }
      },
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
  }, {} ],
  39: [ function(require, module, exports) {
    "use strict";
    var stringify = require("./stringify");
    var parse = require("./parse");
    var formats = require("./formats");
    module.exports = {
      formats: formats,
      parse: parse,
      stringify: stringify
    };
  }, {
    "./formats": 38,
    "./parse": 40,
    "./stringify": 41
  } ],
  40: [ function(require, module, exports) {
    "use strict";
    var utils = require("./utils");
    var has = Object.prototype.hasOwnProperty;
    var defaults = {
      allowDots: false,
      allowPrototypes: false,
      arrayLimit: 20,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      parameterLimit: 1e3,
      plainObjects: false,
      strictNullHandling: false
    };
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = {};
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      var limit = Infinity === options.parameterLimit ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = -1 === bracketEqualsPos ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (-1 === pos) {
          key = options.decoder(part, defaults.decoder);
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder);
          val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        has.call(obj, key) ? obj[key] = [].concat(obj[key]).concat(val) : obj[key] = val;
      }
      return obj;
    };
    var parseObject = function(chain, val, options) {
      var leaf = val;
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if ("[]" === root) {
          obj = [];
          obj = obj.concat(leaf);
        } else {
          obj = options.plainObjects ? Object.create(null) : {};
          var cleanRoot = "[" === root.charAt(0) && "]" === root.charAt(root.length - 1) ? root.slice(1, -1) : root;
          var index = parseInt(cleanRoot, 10);
          if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
            obj = [];
            obj[index] = leaf;
          } else obj[cleanRoot] = leaf;
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
      if (!givenKey) return;
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent) && !options.allowPrototypes) return;
        keys.push(parent);
      }
      var i = 0;
      while (null !== (segment = child.exec(key)) && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1)) && !options.allowPrototypes) return;
        keys.push(segment[1]);
      }
      segment && keys.push("[" + key.slice(segment.index) + "]");
      return parseObject(keys, val, options);
    };
    module.exports = function(str, opts) {
      var options = opts ? utils.assign({}, opts) : {};
      if (null !== options.decoder && void 0 !== options.decoder && "function" !== typeof options.decoder) throw new TypeError("Decoder has to be a function.");
      options.ignoreQueryPrefix = true === options.ignoreQueryPrefix;
      options.delimiter = "string" === typeof options.delimiter || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
      options.depth = "number" === typeof options.depth ? options.depth : defaults.depth;
      options.arrayLimit = "number" === typeof options.arrayLimit ? options.arrayLimit : defaults.arrayLimit;
      options.parseArrays = false !== options.parseArrays;
      options.decoder = "function" === typeof options.decoder ? options.decoder : defaults.decoder;
      options.allowDots = "boolean" === typeof options.allowDots ? options.allowDots : defaults.allowDots;
      options.plainObjects = "boolean" === typeof options.plainObjects ? options.plainObjects : defaults.plainObjects;
      options.allowPrototypes = "boolean" === typeof options.allowPrototypes ? options.allowPrototypes : defaults.allowPrototypes;
      options.parameterLimit = "number" === typeof options.parameterLimit ? options.parameterLimit : defaults.parameterLimit;
      options.strictNullHandling = "boolean" === typeof options.strictNullHandling ? options.strictNullHandling : defaults.strictNullHandling;
      if ("" === str || null === str || "undefined" === typeof str) return options.plainObjects ? Object.create(null) : {};
      var tempObj = "string" === typeof str ? parseValues(str, options) : str;
      var obj = options.plainObjects ? Object.create(null) : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
      }
      return utils.compact(obj);
    };
  }, {
    "./utils": 42
  } ],
  41: [ function(require, module, exports) {
    "use strict";
    var utils = require("./utils");
    var formats = require("./formats");
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var toISO = Date.prototype.toISOString;
    var defaults = {
      delimiter: "&",
      encode: true,
      encoder: utils.encode,
      encodeValuesOnly: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly) {
      var obj = object;
      if ("function" === typeof filter) obj = filter(prefix, obj); else if (obj instanceof Date) obj = serializeDate(obj); else if (null === obj) {
        if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        obj = "";
      }
      if ("string" === typeof obj || "number" === typeof obj || "boolean" === typeof obj || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
          return [ formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder)) ];
        }
        return [ formatter(prefix) + "=" + formatter(String(obj)) ];
      }
      var values = [];
      if ("undefined" === typeof obj) return values;
      var objKeys;
      if (Array.isArray(filter)) objKeys = filter; else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (skipNulls && null === obj[key]) continue;
        values = Array.isArray(obj) ? values.concat(stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly)) : values.concat(stringify(obj[key], prefix + (allowDots ? "." + key : "[" + key + "]"), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
      }
      return values;
    };
    module.exports = function(object, opts) {
      var obj = object;
      var options = opts ? utils.assign({}, opts) : {};
      if (null !== options.encoder && void 0 !== options.encoder && "function" !== typeof options.encoder) throw new TypeError("Encoder has to be a function.");
      var delimiter = "undefined" === typeof options.delimiter ? defaults.delimiter : options.delimiter;
      var strictNullHandling = "boolean" === typeof options.strictNullHandling ? options.strictNullHandling : defaults.strictNullHandling;
      var skipNulls = "boolean" === typeof options.skipNulls ? options.skipNulls : defaults.skipNulls;
      var encode = "boolean" === typeof options.encode ? options.encode : defaults.encode;
      var encoder = "function" === typeof options.encoder ? options.encoder : defaults.encoder;
      var sort = "function" === typeof options.sort ? options.sort : null;
      var allowDots = "undefined" !== typeof options.allowDots && options.allowDots;
      var serializeDate = "function" === typeof options.serializeDate ? options.serializeDate : defaults.serializeDate;
      var encodeValuesOnly = "boolean" === typeof options.encodeValuesOnly ? options.encodeValuesOnly : defaults.encodeValuesOnly;
      if ("undefined" === typeof options.format) options.format = formats["default"]; else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) throw new TypeError("Unknown format option provided.");
      var formatter = formats.formatters[options.format];
      var objKeys;
      var filter;
      if ("function" === typeof options.filter) {
        filter = options.filter;
        obj = filter("", obj);
      } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if ("object" !== typeof obj || null === obj) return "";
      var arrayFormat;
      arrayFormat = options.arrayFormat in arrayPrefixGenerators ? options.arrayFormat : "indices" in options ? options.indices ? "indices" : "repeat" : "indices";
      var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
      objKeys || (objKeys = Object.keys(obj));
      sort && objKeys.sort(sort);
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (skipNulls && null === obj[key]) continue;
        keys = keys.concat(stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encode ? encoder : null, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
      }
      var joined = keys.join(delimiter);
      var prefix = true === options.addQueryPrefix ? "?" : "";
      return joined.length > 0 ? prefix + joined : "";
    };
  }, {
    "./formats": 38,
    "./utils": 42
  } ],
  42: [ function(require, module, exports) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      return array;
    }();
    var compactQueue = function compactQueue(queue) {
      var obj;
      while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];
        if (Array.isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) "undefined" !== typeof obj[j] && compacted.push(obj[j]);
          item.obj[item.prop] = compacted;
        }
      }
      return obj;
    };
    var arrayToObject = function arrayToObject(source, options) {
      var obj = options && options.plainObjects ? Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) "undefined" !== typeof source[i] && (obj[i] = source[i]);
      return obj;
    };
    var merge = function merge(target, source, options) {
      if (!source) return target;
      if ("object" !== typeof source) {
        if (Array.isArray(target)) target.push(source); else {
          if ("object" !== typeof target) return [ target, source ];
          (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) && (target[source] = true);
        }
        return target;
      }
      if ("object" !== typeof target) return [ target ].concat(source);
      var mergeTarget = target;
      Array.isArray(target) && !Array.isArray(source) && (mergeTarget = arrayToObject(target, options));
      if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function(item, i) {
          has.call(target, i) ? target[i] && "object" === typeof target[i] ? target[i] = merge(target[i], item, options) : target.push(item) : target[i] = item;
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        has.call(acc, key) ? acc[key] = merge(acc[key], value, options) : acc[key] = value;
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str) {
      try {
        return decodeURIComponent(str.replace(/\+/g, " "));
      } catch (e) {
        return str;
      }
    };
    var encode = function encode(str) {
      if (0 === str.length) return str;
      var string = "string" === typeof str ? str : String(str);
      var out = "";
      for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);
        if (45 === c || 46 === c || 95 === c || 126 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122) {
          out += string.charAt(i);
          continue;
        }
        if (c < 128) {
          out += hexTable[c];
          continue;
        }
        if (c < 2048) {
          out += hexTable[192 | c >> 6] + hexTable[128 | 63 & c];
          continue;
        }
        if (c < 55296 || c >= 57344) {
          out += hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | 63 & c];
          continue;
        }
        i += 1;
        c = 65536 + ((1023 & c) << 10 | 1023 & string.charCodeAt(i));
        out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | 63 & c];
      }
      return out;
    };
    var compact = function compact(value) {
      var queue = [ {
        obj: {
          o: value
        },
        prop: "o"
      } ];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if ("object" === typeof val && null !== val && -1 === refs.indexOf(val)) {
            queue.push({
              obj: obj,
              prop: key
            });
            refs.push(val);
          }
        }
      }
      return compactQueue(queue);
    };
    var isRegExp = function isRegExp(obj) {
      return "[object RegExp]" === Object.prototype.toString.call(obj);
    };
    var isBuffer = function isBuffer(obj) {
      if (null === obj || "undefined" === typeof obj) return false;
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    module.exports = {
      arrayToObject: arrayToObject,
      assign: assign,
      compact: compact,
      decode: decode,
      encode: encode,
      isBuffer: isBuffer,
      isRegExp: isRegExp,
      merge: merge
    };
  }, {} ],
  EventPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51461odZ6pNVpU/IX1D+a6c", "EventPanel");
    "use strict";
    var _Constants = require("../../Utils/Constants");
    var _Dialog_Event = require("../GameList/Dialog_Event");
    var _Dialog_Event2 = _interopRequireDefault(_Dialog_Event);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
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
          type: _Dialog_Event2.default
        }
      },
      start: function start() {
        window.$Global.networkService.on("socketOpen", this.getEvents.bind(this));
      },
      onDestroy: function onDestroy() {
        window.$Global.networkService.off("socketOpen");
        this.unschedule(this.scrollPage);
      },
      getEvents: function getEvents() {
        var _this = this;
        if ("Login" != cc.director.getScene()._name) return;
        window.$Global.networkService.getSystemMessages([ _Constants.SYSTEM_MESSAGE_TYPE.EVENT, _Constants.SYSTEM_MESSAGE_TYPE.EVENT_GROUP ]).then(function(result) {
          if (result.resultCode === _Constants.ResponseResultCode.SUCCESS) {
            window.$Global.CONFIG.SYSTEM_MESSAGE = result.messages;
            _this.initEvent(result.messages);
          } else cc.error("get system message error");
        });
      },
      initEvent: function initEvent(events) {
        var _this2 = this;
        var isContent = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.eventPageView.removeAllPages();
        isContent && this.dialogEvent.setContent(events);
        var _loop = function _loop(i) {
          var item = cc.instantiate(_this2.eventItem);
          try {
            cc.loader.load(events[i].imageUrl, function(err, tex) {
              var child = item.children;
              if (null === child || void 0 === child) return;
              child[0].getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
            });
          } catch (error) {
            cc.error(error);
          }
          isContent && item.on(cc.Node.EventType.TOUCH_END, function(event) {
            _this2.dialogEvent.showTab(i);
          });
          _this2.eventPageView.addPage(item);
        };
        for (var i = 0; i < events.length; i++) _loop(i);
        this.pageSize = events.length;
        this.scrollPage = function() {
          var currPage = this.eventPageView.getCurrentPageIndex();
          var nextPage = currPage == this.pageSize - 1 ? 0 : currPage + 1;
          this.eventPageView.setCurrentPageIndex(nextPage);
        };
        this.schedule(this.scrollPage, 5);
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../GameList/Dialog_Event": "Dialog_Event"
  } ],
  "FxMoveIn.js": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6fbe8fEwCFNypKqTqJOEtQz", "FxMoveIn.js");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  "FxShake.js": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5bbf1f1ds9HFIWEx0fdazL+", "FxShake.js");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  GameListScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61ba3mC+01BW6GKQp+ozV35", "GameListScene");
    "use strict";
    var _PanelPlayer = require("./PanelPlayer");
    var _PanelPlayer2 = _interopRequireDefault(_PanelPlayer);
    var _PanelGameList = require("./PanelGameList");
    var _PanelGameList2 = _interopRequireDefault(_PanelGameList);
    var _Dialog_Setting = require("./Dialog_Setting");
    var _Dialog_Setting2 = _interopRequireDefault(_Dialog_Setting);
    var _Dialog_Profile = require("./Dialog_Profile");
    var _Dialog_Profile2 = _interopRequireDefault(_Dialog_Profile);
    var _Dialog_GiftCode = require("./Dialog_GiftCode");
    var _Dialog_GiftCode2 = _interopRequireDefault(_Dialog_GiftCode);
    var _Dialog_TopUp = require("./Dialog_TopUp");
    var _Dialog_TopUp2 = _interopRequireDefault(_Dialog_TopUp);
    var _Dialog_VIP = require("./Dialog_VIP");
    var _Dialog_VIP2 = _interopRequireDefault(_Dialog_VIP);
    var _Dialog_GoldHistory = require("./Dialog_GoldHistory");
    var _Dialog_GoldHistory2 = _interopRequireDefault(_Dialog_GoldHistory);
    var _Constants = require("../../Utils/Constants");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        panelPlayer: {
          default: null,
          type: _PanelPlayer2.default
        },
        panelGameList: {
          default: null,
          type: _PanelGameList2.default
        },
        dialogSetting: {
          default: null,
          type: _Dialog_Setting2.default
        },
        dialogProfile: {
          default: null,
          type: _Dialog_Profile2.default
        },
        dialogGiftCode: {
          default: null,
          type: _Dialog_GiftCode2.default
        },
        dialogVip: {
          default: null,
          type: _Dialog_VIP2.default
        },
        dialogTransferGold: {
          default: null,
          type: _Dialog_TopUp2.default
        },
        dialogLichSuBO: {
          default: null,
          type: _Dialog_GoldHistory2.default
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
      onLoad: function onLoad() {
        if (void 0 === window.$Global || void 0 === window.$Global.networkService) {
          cc.director.loadScene("Login");
          return;
        }
      },
      start: function start() {
        var _this = this;
        cc.director.preloadScene("Login");
        if (void 0 === window.$Global || void 0 === window.$Global.networkService) {
          cc.director.loadScene("Login");
          return;
        }
        window.$Global.userService.getUserInfo().then(function(result) {
          if (result.resultCode === _Constants.ResponseResultCode.SUCCESS) {
            window.$Global.userService.userInfo = result.user;
            if ("" === result.user.displayName || null === result.user.displayName) {
              var dialog = cc.instantiate(_this.dialogAddInfo);
              dialog.parent = window.$UIHelper.node;
              dialog.getComponent("Dialog_AddInfo").show();
              result.user.displayName = "";
            } else if ("" === result.user.mobile || null === result.user.mobile) {
              var dialog = cc.instantiate(_this.dialogAddInfo);
              dialog.parent = window.$UIHelper.node;
              dialog.getComponent("Dialog_AddInfo").show();
              dialog.getComponent("Dialog_AddInfo").updateMobile();
            }
            window.$Global.userService.emit("userInfoFetched", result.user);
          }
        });
        window.$Global.networkService.on("updateMoney", function(event) {
          var gold = event;
          _this.onUpdateMoney(gold);
        });
        this.isListenNetwork = true;
        this.node.on("transferGold", function(event) {
          _this.dialogTransferGold.show();
        });
        this.node.on("goldHistory", function(event) {
          _this.dialogLichSuBO.show();
        });
        window.$Global.CONFIG.VERSION && (this.hotlineTxt.string = window.$Global.CONFIG.VERSION.hotline);
      },
      onDestroy: function onDestroy() {
        this.isListenNetwork && this.offNetwork();
      },
      offNetwork: function offNetwork() {
        window.$Global.networkService.off("closed");
        window.$Global.networkService.off("updateMoney");
        this.isListenNetwork = false;
      },
      goToLogin: function goToLogin(event) {
        window.$UIHelper.showToast("M\u1ea5t k\u1ebft n\u1ed1i. Vui l\xf2ng th\u1eed l\u1ea1i");
        this.scheduleOnce(function() {
          cc.director.loadScene("Login");
        }, 3);
      },
      onClickBack: function onClickBack() {
        if (this.panelGameList.isShowGameList) {
          var callback = function callback() {
            window.$Global.userService.logout().then(function(data) {
              cc.director.loadScene("Login");
            }).catch(function(error) {
              cc.error("Logout error!!!");
            });
          };
          window.$UIHelper.showPopup("B\u1ea1n c\xf3 mu\u1ed1n \u0111\u0103ng xu\u1ea5t?", callback.bind(this));
        } else this.panelGameList.showGameList();
      },
      onClickProfile: function onClickProfile() {
        this.dialogProfile.show();
      },
      onClickSetting: function onClickSetting() {
        this.dialogSetting.show();
      },
      onClickFanPage: function onClickFanPage() {
        cc.sys.openURL(window.$Global.CONFIG.VERSION.fanpage);
      },
      onClickGift: function onClickGift() {
        this.dialogGiftCode.show();
      },
      onClickWallet: function onClickWallet() {
        this.dialogVip.show();
      },
      onClickOTP: function onClickOTP() {
        cc.sys.openURL(window.$Global.CONFIG.VERSION.otp_download_url);
      },
      onUpdateMoney: function onUpdateMoney(gold) {
        this.panelPlayer.setGold(gold);
      },
      onClickHotline: function onClickHotline() {
        cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_ANDROID ? cc.sys.openURL("tel://" + window.$Global.CONFIG.VERSION.hotline) : true === this.hotlinePanel.active ? this.hotlinePanel.active = false : this.hotlinePanel.active = true;
      },
      onClickAgency: function onClickAgency() {
        this.dialogTransferGold.showTab(1);
      },
      onClickCard: function onClickCard() {
        this.dialogTransferGold.showTab(2);
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
  GamePlayService: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b33215UPaZFyYh9bfuey6/U", "GamePlayService");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {}
    });
    cc._RF.pop();
  }, {} ],
  Global: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1110eM3+HxORLOl9oo/Zf7O", "Global");
    "use strict";
    var _GamePlayService = require("../Services/GamePlayService");
    var _GamePlayService2 = _interopRequireDefault(_GamePlayService);
    var _NetworkService = require("../Services/NetworkService");
    var _NetworkService2 = _interopRequireDefault(_NetworkService);
    var _UserService = require("../Services/UserService");
    var _UserService2 = _interopRequireDefault(_UserService);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var CONFIG = require("../Configs/Config");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        window.$Global && (this.node.active = false);
        window.$Global = this;
        this.CONFIG = CONFIG;
        this.networkService = this.node.getComponent(_NetworkService2.default);
        this.gamePlayService = this.node.getComponent(_GamePlayService2.default);
        this.userService = this.node.getComponent(_UserService2.default);
        this.ui = {};
        this.minigame = {};
        this.firstLogin = true;
        this.forceUpdate = false;
        this.needUpdate = false;
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
  GoldHistoryItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04a0cWQOwZCnqZl9nNTOb59", "GoldHistoryItem");
    "use strict";
    var _Helper = require("../../Utils/Helper");
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
      setData: function setData(data) {
        this.textID.string = data.id;
        this.textTime.string = data.datetime;
        this.textGoldChange.string = (0, _Helper.moneyFormat)(data.goldChange, true);
        this.textGold.string = (0, _Helper.moneyFormat)(data.gold, true);
        this.textReason.string = data.reason;
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper"
  } ],
  Helper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2798eGgOoBGDrc4fY5n55mV", "Helper");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.moneyFormat = moneyFormat;
    exports.timeFormat = timeFormat;
    exports.moneyToInt = moneyToInt;
    exports.moneyToFloat = moneyToFloat;
    exports.runNumber = runNumber;
    exports.getKeyByValue = getKeyByValue;
    var numberWithCommas = exports.numberWithCommas = function numberWithCommas() {
      var x = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    var numberWithDot = exports.numberWithDot = function numberWithDot() {
      var x = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    function moneyFormat(amount) {
      var useUnit = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var unit = "";
      if (useUnit && amount >= 1e3) {
        amount = Math.floor(amount / 1e3);
        unit = "K";
      }
      var commaText = amount.toString();
      commaText = commaText.replace(/\./g, "x");
      commaText = commaText.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      commaText = commaText.replace(/x/g, ".");
      return commaText + unit;
    }
    function timeFormat(time) {
      var hrs = ~~(time / 3600);
      var mins = ~~(time % 3600 / 60);
      var secs = time % 60;
      var ret = "";
      ret += hrs > 0 ? hrs + ":" + (mins < 10 ? "0" : "") : mins < 10 ? "0" : "";
      ret += mins + ":" + (secs < 10 ? "0" : "");
      ret += "" + secs;
      return ret;
    }
    function moneyToInt(text) {
      return parseInt(text.toString().replace(/\./g, ""));
    }
    function moneyToFloat(text) {
      return parseFloat(text.toString().replace(/\./g, ""));
    }
    function runNumber(label, num) {
      var duration = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
      var refreshRate = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100;
      label.runNumber && clearInterval(label.runNumber);
      var currentNum = 0;
      if (!label.string) {
        label.string = numberWithDot(num);
        return;
      }
      currentNum = parseInt(label.string.toString().replace(/\./g, ""));
      currentNum >= num && (currentNum = 0);
      var step = (num - currentNum) / duration / refreshRate;
      function change() {
        if (null == label.node) {
          clearInterval(label.runNumber);
          return;
        }
        var currentNum = 0;
        if (!label.string) {
          label.string = numberWithDot(num);
          return;
        }
        currentNum = parseInt(label.string.toString().replace(/\./g, ""));
        if (currentNum < num) currentNum = Math.round(currentNum + step); else {
          currentNum = num;
          clearInterval(label.runNumber);
        }
        label.string = numberWithDot(currentNum);
      }
      label.runNumber = setInterval(change, 1e3 / refreshRate);
    }
    function getKeyByValue(object, value) {
      return Object.keys(object).find(function(key) {
        return object[key] === value;
      });
    }
    cc._RF.pop();
  }, {} ],
  HisItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1472i9rvJLPridw9nXWiyj", "HisItem");
    "use strict";
    var _Helper = require("../../Utils/Helper");
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
      setData: function setData(data) {
        this.id.string = data.id;
        this.time.string = data.time;
        this.bet.string = (0, _Helper.moneyFormat)(data.sub, true);
        this.win.string = (0, _Helper.moneyFormat)(data.add, true);
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper"
  } ],
  HistoryItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30888B7TLtCzavNUsmAbZ8T", "HistoryItem");
    "use strict";
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
      setData: function setData(point, isLast) {
        if (point <= 10 && isLast) {
          this.getComponent(cc.Sprite).spriteFrame = this.spriteWhiteLast;
          this.getComponent(cc.Animation).play("HistoryItem");
        } else if (point <= 10 && !isLast) this.getComponent(cc.Sprite).spriteFrame = this.spriteWhite; else if (point > 10 && isLast) {
          this.getComponent(cc.Sprite).spriteFrame = this.spriteBlackLast;
          this.getComponent(cc.Animation).play("HistoryItem");
        } else point > 10 && !isLast && (this.getComponent(cc.Sprite).spriteFrame = this.spriteBlack);
      }
    });
    cc._RF.pop();
  }, {} ],
  JackpotEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6bc20BswOFE9YYHsFkj32O1", "JackpotEffect");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
    var _Helper = require("../Utils/Helper");
    function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object["keys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object["defineProperty"](target, property, desc);
        desc = null;
      }
      return desc;
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.");
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, property = _cc$_decorator.property;
    var JackpotEffect = (_dec = property(cc.ParticleSystem), _dec2 = property(cc.ParticleSystem), 
    _dec3 = property(cc.ParticleSystem), _dec4 = property(cc.Node), _dec5 = property(cc.Label), 
    _dec6 = property(cc.Node), ccclass(_class = (_class2 = function(_cc$Component) {
      _inherits(JackpotEffect, _cc$Component);
      function JackpotEffect() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, JackpotEffect);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = JackpotEffect.__proto__ || Object.getPrototypeOf(JackpotEffect)).call.apply(_ref, [ this ].concat(args))), 
        _this), _initDefineProp(_this, "sparkleNode", _descriptor, _this), _initDefineProp(_this, "coinNode", _descriptor2, _this), 
        _initDefineProp(_this, "lightNode", _descriptor3, _this), _initDefineProp(_this, "spineNode", _descriptor4, _this), 
        _initDefineProp(_this, "textJackpot", _descriptor5, _this), _initDefineProp(_this, "textJackpotBg", _descriptor6, _this), 
        _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(JackpotEffect, [ {
        key: "start",
        value: function start() {
          this.textJackpot.string = "0";
        }
      }, {
        key: "show",
        value: function show(jackpotValue) {
          this.node.active = true;
          this.sparkleNode.resetSystem();
          this.coinNode.resetSystem();
          this.lightNode.resetSystem();
          this.spineNode.active = true;
          this.textJackpotBg.active = true;
          (0, _Helper.runNumber)(this.textJackpot, jackpotValue);
        }
      }, {
        key: "hide",
        value: function hide() {
          this.sparkleNode.stopSystem();
          this.coinNode.stopSystem();
          this.lightNode.stopSystem();
          this.spineNode.active = false;
          this.textJackpotBg.active = false;
          this.textJackpot.string = "0";
        }
      } ]);
      return JackpotEffect;
    }(cc.Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "sparkleNode", [ _dec ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coinNode", [ _dec2 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lightNode", [ _dec3 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spineNode", [ _dec4 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "textJackpot", [ _dec5 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "textJackpotBg", [ _dec6 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _class2)) || _class);
    exports.default = JackpotEffect;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../Utils/Helper": "Helper"
  } ],
  JackpotUser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b665Vv8cVNuJ541tfM/J6L", "JackpotUser");
    "use strict";
    var _Constants = require("../../Utils/Constants");
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
      onLoad: function onLoad() {
        "GameList" !== cc.director.getScene()._name && (this.node.active = false);
      },
      show: function show() {
        var _this = this;
        window.$Global.networkService.getUserJackpot().then(function(result) {
          if (result.resultCode === _Constants.ResponseResultCode.SUCCESS) {
            _this.content.removeAllChildren();
            _this.node.active = true;
            result.data && result.data.forEach(function(user) {
              var item = cc.instantiate(_this.userItem);
              item.getComponent("UserJackpotItem").setData(user);
              item.parent = _this.content;
            });
          } else window.$UIHelper.showToast(result.desc || "L\u1ed7i");
        });
      },
      hide: function hide() {
        this.node.active = false;
      },
      jackpotClick: function jackpotClick() {
        this.node.active ? this.hide() : this.show();
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants"
  } ],
  Jackpot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "82c2fXGkvNOf6UvmzlMD6r6", "Jackpot");
    "use strict";
    var _DragAndDrop = require("../../Utils/DragAndDrop");
    var _DragAndDrop2 = _interopRequireDefault(_DragAndDrop);
    var _Helper = require("../../Utils/Helper");
    var _Constants = require("../../Utils/Constants");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        bg: {
          default: null,
          type: cc.Node
        },
        btnJackpot: {
          default: null,
          type: _DragAndDrop2.default
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
        }
      },
      start: function start() {
        this.isShow = false;
        this.currentScene = cc.director.getScene()._name;
        "GameList" !== this.currentScene && (this.node.active = false);
        window.$Global.networkService.on("notify_" + _Constants.NOTIFY_TYPE.ACTIONS_IN_LOBBY, this.updateJackpot.bind(this));
        window.$Global.networkService.on("notify_" + _Constants.NOTIFY_TYPE.NOTIFY_MINI_CHANGED, this.onNotifyMiniChanged.bind(this));
      },
      onDestroy: function onDestroy() {
        window.$Global.networkService.off("notify_" + _Constants.NOTIFY_TYPE.ACTIONS_IN_LOBBY);
        window.$Global.networkService.off("notify_" + _Constants.NOTIFY_TYPE.NOTIFY_MINI_CHANGED);
      },
      showHideJackpot: function showHideJackpot() {
        if (this.btnJackpot.isMoving) return;
        this.bg.active = !this.bg.active;
      },
      onClick100: function onClick100() {
        this.jk100.active = true;
        this.jk1k.active = false;
        this.jk10k.active = false;
      },
      onClick1k: function onClick1k() {
        this.jk100.active = false;
        this.jk1k.active = true;
        this.jk10k.active = false;
      },
      onClick10k: function onClick10k() {
        this.jk100.active = false;
        this.jk1k.active = false;
        this.jk10k.active = true;
      },
      updateJackpot: function updateJackpot(event) {
        var msg = event;
        var roomId = msg.roomId;
        var jackpot = msg.jackpot;
        switch (roomId) {
         case 2009:
          (0, _Helper.runNumber)(this.text2009, jackpot);
          break;

         case 2011:
          (0, _Helper.runNumber)(this.text2011, jackpot);
          break;

         case 2013:
          (0, _Helper.runNumber)(this.text2013, jackpot);
          break;

         case 793:
          (0, _Helper.runNumber)(this.text793, jackpot);
          break;

         case 794:
          (0, _Helper.runNumber)(this.text794, jackpot);
          break;

         case 795:
          (0, _Helper.runNumber)(this.text795, jackpot);
          break;

         case 1997:
          (0, _Helper.runNumber)(this.text1997, jackpot);
          break;

         case 2002:
          (0, _Helper.runNumber)(this.text2002, jackpot);
          break;

         case 2003:
          (0, _Helper.runNumber)(this.text2003, jackpot);
        }
      },
      show: function show() {
        var _this = this;
        if (this.btnJackpot.isMoving) return;
        if (this.isShow) {
          this.node.active = false;
          this.isShow = false;
        } else {
          this.getUserJackpot();
          this.node.active = true;
          this.isShow = true;
          window.$Global.networkService.getFundSlot([ _Constants.ZONE_ID.SLOT_18, _Constants.ZONE_ID.SLOT_28, _Constants.ZONE_ID.SLOT_32, _Constants.ZONE_ID.MINI_BACAY, _Constants.ZONE_ID.MINI_POKER, _Constants.ZONE_ID.MINI_SLOT_BANCA ]).then(function(detail) {
            detail.resultCode === _Constants.ResponseResultCode.SUCCESS && detail.funds.forEach(function(fund) {
              fund.zoneId === _Constants.ZONE_ID.SLOT_18 || fund.zoneId === _Constants.ZONE_ID.SLOT_28 || fund.zoneId === _Constants.ZONE_ID.SLOT_32 ? _this.updateJackpot(fund) : _this.onNotifyMiniChanged(fund);
            });
          });
        }
      },
      getUserJackpot: function getUserJackpot() {
        var _this2 = this;
        window.$Global.networkService.getUserJackpot([ _Constants.ZONE_ID.SLOT_18, _Constants.ZONE_ID.SLOT_28, _Constants.ZONE_ID.SLOT_32, _Constants.ZONE_ID.MINI_BACAY, _Constants.ZONE_ID.MINI_POKER, _Constants.ZONE_ID.MINI_SLOT_BANCA, _Constants.ZONE_ID.CAO_THAP ]).then(function(result) {
          if (result.resultCode === _Constants.ResponseResultCode.SUCCESS) {
            _this2.userJackpotContent.removeAllChildren();
            result.data && result.data.forEach(function(user) {
              var item = cc.instantiate(_this2.userJackpotItem);
              item.getComponent("UserJackpotItem").setData(user);
              item.parent = _this2.userJackpotContent;
            });
          } else window.$UIHelper.showToast(result.desc || "L\u1ed7i");
        });
      },
      onTabChanged: function onTabChanged(event, tab) {
        if (0 == tab) {
          this.gameNode.active = true;
          this.userNode.active = false;
        } else {
          this.gameNode.active = false;
          this.userNode.active = true;
        }
      },
      onNotifyMiniChanged: function onNotifyMiniChanged(event) {
        var zoneId = event.zoneId;
        var bet = event.bet;
        var jackpot = event.jackpot;
        switch (zoneId) {
         case _Constants.ZONE_ID.MINI_POKER:
          100 === bet ? (0, _Helper.runNumber)(this.textMinipoker[0], jackpot) : 1e3 === bet ? (0, 
          _Helper.runNumber)(this.textMinipoker[1], jackpot) : (0, _Helper.runNumber)(this.textMinipoker[2], jackpot);
          break;

         case _Constants.ZONE_ID.MINI_SLOT_BANCA:
          100 === bet ? (0, _Helper.runNumber)(this.textBanca[0], jackpot) : 1e3 === bet ? (0, 
          _Helper.runNumber)(this.textBanca[1], jackpot) : (0, _Helper.runNumber)(this.textBanca[2], jackpot);
          break;

         case _Constants.ZONE_ID.MINI_BACAY:
          100 === bet ? (0, _Helper.runNumber)(this.textMini3cay[0], jackpot) : 1e3 === bet ? (0, 
          _Helper.runNumber)(this.textMini3cay[1], jackpot) : (0, _Helper.runNumber)(this.textMini3cay[2], jackpot);
        }
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../../Utils/DragAndDrop": "DragAndDrop",
    "../../Utils/Helper": "Helper"
  } ],
  ListItemMail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d94088dlMtIUb5paXoLsRjP", "ListItemMail");
    "use strict";
    var _BaseListItem = require("../Common/BaseListItem");
    var _BaseListItem2 = _interopRequireDefault(_BaseListItem);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseListItem2.default,
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
      start: function start() {},
      onSetData: function onSetData(data, index) {
        console.log(data);
        this.textNguoiGui.string = data.sender;
        this.textNgayGui.string = data.sendDate;
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseListItem": "BaseListItem"
  } ],
  ListMail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "659c430MOlCXL1Pp6CEzUqO", "ListMail");
    "use strict";
    var _BaseList = require("../Common/BaseList");
    var _BaseList2 = _interopRequireDefault(_BaseList);
    var _BaseListItem = require("../Common/BaseListItem");
    var _BaseListItem2 = _interopRequireDefault(_BaseListItem);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseList2.default,
      properties: {},
      start: function start() {},
      onClickItem: function onClickItem(item) {
        console.log(item.data);
        this.container.emit("readMail", item.data);
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseList": "BaseList",
    "../Common/BaseListItem": "BaseListItem"
  } ],
  ListTaiXiuHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5cee7uje4lN1pTuOGCp54VF", "ListTaiXiuHistory");
    "use strict";
    var _BaseList = require("../Common/BaseList");
    var _BaseList2 = _interopRequireDefault(_BaseList);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseList2.default,
      properties: {}
    });
    cc._RF.pop();
  }, {
    "../Common/BaseList": "BaseList"
  } ],
  ListTaiXiuMatchHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ac856u4noBKLZqubICSZSq/", "ListTaiXiuMatchHistory");
    "use strict";
    var _Helper = require("../../Utils/Helper");
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
      start: function start() {
        this.pageSize = 14;
        this.currPage = 0;
      },
      setData: function setData(pot, data) {
        this.listContent.removeAllChildren();
        this.data = data;
        this.pot = pot;
        this.maxPage = Math.ceil(data.length / this.pageSize);
        var totalBet = 0;
        var totalBalance = 0;
        data.forEach(function(row) {
          if (0 == pot) {
            totalBet += row.betMin;
            totalBalance += row.betMinReturn;
          } else {
            totalBet += row.betMax;
            totalBalance += row.betMaxReturn;
          }
        });
        this.textTotalBet.string = (0, _Helper.moneyFormat)(totalBet + totalBalance, true);
        this.textTotalBalance.string = (0, _Helper.moneyFormat)(totalBalance, true);
        this.drawHistory(1);
      },
      drawHistory: function drawHistory(pageIndex) {
        if (pageIndex <= 0 || pageIndex > this.maxPage) return;
        this.listContent.removeAllChildren();
        var startIndex = (pageIndex - 1) * this.pageSize;
        var endIndex = startIndex + this.pageSize;
        endIndex > this.data.length && (endIndex = this.data.length);
        for (var index = startIndex; index < endIndex; index++) {
          var rowData = this.data[index];
          var row = cc.instantiate(this.historyItem);
          row.getComponent("TaiXiuMatchHistoryItem").setData(this.pot, rowData);
          row.parent = this.listContent;
        }
        this.currPage = pageIndex;
        this.textPageNum.string = this.currPage;
      },
      onClickNext: function onClickNext() {
        this.drawHistory(this.currPage + 1);
      },
      onClickPrevious: function onClickPrevious() {
        this.drawHistory(this.currPage - 1);
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper"
  } ],
  LoadSdkPlugin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "09d86HHnfFNnaGUjaoiT2XE", "LoadSdkPlugin");
    "use strict";
    var _Config = require("../Configs/Config");
    if (!cc.sys.isNative) {
      window.fbAsyncInit = function() {
        FB.init({
          appId: _Config.CONFIG.FB_APPID,
          xfbml: true,
          version: "v2.9"
        });
        FB.getLoginStatus(function(response) {
          "connected" === response.status ? cc.log("We are connected.") : "not_authorized" === response.status ? cc.log("We are not logged in.") : cc.log("You are not logged into Facebook.");
        });
      };
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
    cc._RF.pop();
  }, {
    "../Configs/Config": "Config"
  } ],
  Loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89e9bLLcVZNx7cieXxTZ3IW", "Loading");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        processbar: {
          default: null,
          type: cc.ProgressBar
        }
      },
      start: function start() {
        cc.director.preloadScene("Login");
        this.schedule(this.process, .05);
      },
      process: function process() {
        this.processbar.progress += .1;
        if (this.processbar.progress >= 1) {
          this.unschedule(this.process);
          cc.director.loadScene("Login");
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  LobbyItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "387b6iQne1EiLsUyxKrCvRr", "LobbyItem");
    "use strict";
    var _Helper = require("../../Utils/Helper");
    var _MultipleFund = require("./MultipleFund");
    var _MultipleFund2 = _interopRequireDefault(_MultipleFund);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
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
          type: _MultipleFund2.default
        },
        data: {
          default: []
        }
      },
      setZoneId: function setZoneId(id) {
        this.zoneId = id;
      },
      getZoneId: function getZoneId() {
        return this.zoneId;
      },
      setJackpot: function setJackpot(data) {
        if (100 == data.bet) {
          this.data[2] = data.jackpot;
          (0, _Helper.runNumber)(this.textHu3, data.jackpot);
          data.multipleFund && this.listMultipleFunds[0].setMultipleFund(data.multipleFund);
        } else if (1e3 == data.bet) {
          this.data[1] = data.jackpot;
          (0, _Helper.runNumber)(this.textHu2, data.jackpot);
          data.multipleFund && this.listMultipleFunds[1].setMultipleFund(data.multipleFund);
        } else if (1e4 == data.bet) {
          this.data[0] = data.jackpot;
          (0, _Helper.runNumber)(this.textHu1, data.jackpot);
          data.multipleFund && this.listMultipleFunds[2].setMultipleFund(data.multipleFund);
        }
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper",
    "./MultipleFund": "MultipleFund"
  } ],
  LocalDataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8e1cQchO9DnZNbN/BJysTc", "LocalDataManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var LocalDataManager = function() {
      function LocalDataManager() {
        _classCallCheck(this, LocalDataManager);
      }
      _createClass(LocalDataManager, null, [ {
        key: "getStringForKey",
        value: function getStringForKey(key, defaultValue) {
          var value = cc.sys.localStorage.getItem(key);
          if (!value) return defaultValue;
          return value;
        }
      }, {
        key: "setStringForKey",
        value: function setStringForKey(key, value) {
          cc.sys.localStorage.setItem(key, value);
        }
      }, {
        key: "getIntForKey",
        value: function getIntForKey(key, defaultValue) {
          var value = this.getStringForKey(key);
          if (!value) return defaultValue;
          return parseInt(value);
        }
      }, {
        key: "setIntForKey",
        value: function setIntForKey(key, value) {
          this.setStringForKey(key, value + "");
        }
      }, {
        key: "getFloatForKey",
        value: function getFloatForKey(key, defaultValue) {
          var value = this.getStringForKey(key);
          if (!value) return defaultValue;
          return parseFloat(value);
        }
      }, {
        key: "setFloatForKey",
        value: function setFloatForKey(key, value) {
          this.setStringForKey(key, value + "");
        }
      }, {
        key: "getObjectForKey",
        value: function getObjectForKey(key, defaultValue) {
          var value = this.getStringForKey(key);
          if (!value) return defaultValue;
          return JSON.parse(value);
        }
      }, {
        key: "setObjectForKey",
        value: function setObjectForKey(key, value) {
          this.setStringForKey(key, JSON.stringify(value));
        }
      }, {
        key: "getBoolForKey",
        value: function getBoolForKey(key, defaultValue) {
          var value = this.getStringForKey(key);
          if (!value) return defaultValue;
          return "true" === value;
        }
      }, {
        key: "setBoolForKey",
        value: function setBoolForKey(key, value) {
          this.setStringForKey(key, value);
        }
      } ]);
      return LocalDataManager;
    }();
    exports.default = LocalDataManager;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  LoginScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc87axsLTlI6bx3nPD6f2Ml", "LoginScene");
    "use strict";
    var _Constants = require("../../Utils/Constants");
    var _UIHelper = require("../Common/UIHelper");
    var _UIHelper2 = _interopRequireDefault(_UIHelper);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
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
          type: _UIHelper2.default
        }
      },
      onLoad: function onLoad() {
        this.myCipher = this.cipher("EhCm7LEH3wP9hWNuJYoRK2Dv7ech3RKA");
        this.myDecipher = this.decipher("EhCm7LEH3wP9hWNuJYoRK2Dv7ech3RKA");
        this.uiHelper.showLoading(true);
        this.panelLogin.active = false;
        this.panelRegister.active = false;
        var userLogin = cc.sys.localStorage.getItem("userData");
        if (userLogin) try {
          var _userLogin = JSON.parse(this.myDecipher(userLogin));
          this.textUsername.string = _userLogin.username;
          this.textPassword.string = _userLogin.password;
        } catch (error) {
          cc.sys.localStorage.removeItem("userData");
        }
        this.listgameNode.width = cc.winSize.width - this.eventNode.width - 50;
        if (window.$Global && window.$Global.networkService) {
          window.$Global.networkService.rootRoom && (window.$Global.networkService.rootRoom = null);
          window.$Global.networkService.currentRoom && (window.$Global.networkService.currentRoom = null);
        }
        this.firstEnterOtp = true;
      },
      start: function start() {
        cc.director.preloadScene("GameList");
        window.$Global.networkService.on("socketOpen", this.autoLogin.bind(this));
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
      },
      onDestroy: function onDestroy() {
        window.$Global.networkService.off("socketOpen");
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
      },
      onKeyDown: function onKeyDown(event) {},
      onKeyUp: function onKeyUp(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.enter:
          this.onClickLogin();
          break;

         case cc.macro.KEY.tab:
          cc.error(this.textUsername.isFocused());
        }
      },
      onClickLoginFacebook: function onClickLoginFacebook() {
        cc.log("start login with web");
        var _this = this;
        FB.getLoginStatus(function(response) {
          if ("connected" === response.status) {
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
            cc.log("accessToken : ", accessToken);
            _this.loginWithAccesToken(accessToken);
          } else FB.login(function(response) {
            response.authResponse ? FB.api("/me", "get", {
              fields: "name,email,gender,verified,link"
            }, function(response) {
              cc.log("fbID : " + response.id);
              var accessToken = FB.getAuthResponse()["accessToken"];
              cc.log("accessToken : ", accessToken);
              _this.loginWithAccesToken(accessToken);
            }) : cc.log("User cancelled login or did not fully authorize.");
          });
        });
      },
      loginWithAccesToken: function loginWithAccesToken(accessToken) {
        var _this2 = this;
        window.$Global.userService.loginFacebook(accessToken, this.inputOTP.string).then(function(detail) {
          window.$UIHelper.showLoading(false);
          if (detail.resultCode === _Constants.ResponseResultCode.SUCCESS) {
            var userDetail = detail.desc;
            window.$Global.networkService.currentGoldClient = userDetail.gold;
            cc.director.loadScene("GameList");
          } else if (detail.resultCode === _Constants.ResponseResultCode.INVALID_PASSWORD) {
            _this2.firstEnterOtp ? _this2.uiHelper.showToast("T\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n \u0111ang c\xe0i \u0111\u1eb7t b\u1ea3o m\u1eadt \u0111\u0103ng nh\u1eadp") : _this2.uiHelper.showToast("OTP sai, vui l\xf2ng nh\u1eadp l\u1ea1i");
            _this2.showOtpPanel();
            _this2.firstEnterOtp = false;
          } else _this2.uiHelper.showToast(detail.desc);
          window.$Global.firstLogin = false;
        });
      },
      onClickLogin: function onClickLogin() {
        var _this3 = this;
        window.$UIHelper.showLoading(true);
        setTimeout(function() {
          window.$UIHelper.showLoading(false);
        }, 5e3);
        var validation = this.checkValidLogin();
        if (!validation.isValid) {
          this.uiHelper.showToast(validation.errors[0]);
          return;
        }
        window.$Global.userService.login(validation.data.username, validation.data.password, this.inputOTP.string).then(function(detail) {
          window.$UIHelper.showLoading(false);
          if (detail.resultCode === _Constants.ResponseResultCode.SUCCESS) {
            var userDetail = detail.desc;
            if (null === cc.sys.localStorage.getItem("userData")) {
              var userLogin = {
                username: _this3.textUsername.string,
                password: _this3.textPassword.string
              };
              cc.sys.localStorage.setItem("userData", _this3.myCipher(JSON.stringify(userLogin)));
            } else try {
              var userLogin = JSON.parse(_this3.myDecipher(cc.sys.localStorage.getItem("userData")));
              userLogin.username = _this3.textUsername.string;
              userLogin.password = _this3.textPassword.string;
              cc.sys.localStorage.removeItem("userData");
              cc.sys.localStorage.setItem("userData", _this3.myCipher(JSON.stringify(userLogin)));
            } catch (error) {
              cc.sys.localStorage.removeItem("userData");
            }
            window.$Global.networkService.currentGoldClient = userDetail.gold;
            cc.director.loadScene("GameList");
          } else if (detail.resultCode === _Constants.ResponseResultCode.INVALID_PASSWORD) {
            _this3.firstEnterOtp ? _this3.uiHelper.showToast("T\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n \u0111ang c\xe0i \u0111\u1eb7t b\u1ea3o m\u1eadt \u0111\u0103ng nh\u1eadp") : _this3.uiHelper.showToast("OTP sai, vui l\xf2ng nh\u1eadp l\u1ea1i");
            _this3.showOtpPanel();
            _this3.firstEnterOtp = false;
          } else _this3.uiHelper.showToast(detail.desc);
          window.$Global.firstLogin = false;
        });
      },
      onClickGoRegister: function onClickGoRegister() {
        this.panelRegister.active = true;
      },
      onClickCancelRegister: function onClickCancelRegister() {
        this.panelRegister.active = false;
      },
      onClickDoRegister: function onClickDoRegister() {
        var _this4 = this;
        this.validationRegister = this.checkValidRegister();
        if (!this.validationRegister.isValid) {
          this.uiHelper.showToast(this.validationRegister.errors[0]);
          return;
        }
        null != window.$Global.CONFIG.token && void 0 != window.$Global.CONFIG.token ? window.$Global.networkService.registerAccount(this.validationRegister.data).then(function(detail) {
          _this4.onRegisterDone(detail);
        }) : window.$Global.networkService.getApiToken().then(function(token) {
          var token = response.data.data;
          window.$Global.CONFIG.token = token;
          window.$Global.networkService.registerAccount(_this4.validationRegister.data).then(function(detail) {
            _this4.onRegisterDone(detail);
          });
          return Promise.resolve(token);
        });
      },
      onRegisterDone: function onRegisterDone(detail) {
        if (detail.status == _Constants.ResponseResultCode.SUCCESS) {
          var callback = function callback() {
            this.textUsername.string = this.validationRegister.data.username;
            this.textPassword.string = this.validationRegister.data.password;
            this.onClickLogin();
          };
          var numOfAcc = detail.data;
          var annoucetext = "B\u1ea1n \u0111\xe3 \u0111\u0103ng k\xfd th\xe0nh c\xf4ng t\xe0i kho\u1ea3n " + this.validationRegister.data.username;
          this.panelRegister.active = false;
          this.uiHelper.showPopup(annoucetext, callback.bind(this), false);
        } else this.uiHelper.showToast(detail.message);
      },
      checkValidLogin: function checkValidLogin() {
        var username = this.textUsername.string;
        var password = this.textPassword.string;
        return {
          isValid: true,
          data: {
            username: username,
            password: password
          }
        };
      },
      checkValidRegister: function checkValidRegister() {
        var username = this.textUsernameReg.string.trim();
        var password = this.textPasswordReg.string.trim();
        var password2 = this.textPasswordReg2.string.trim();
        var refcode = this.inputRefcode.string.trim();
        var validation = {
          errors: []
        };
        var isValid = true;
        if ("" == username) {
          isValid = false;
          validation.errors.push("Vui l\xf2ng nh\u1eadp t\xean \u0111\u0103ng nh\u1eadp");
        }
        if ("" == password || "" == password2) {
          isValid = false;
          validation.errors.push("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u");
        }
        if (password != password2) {
          isValid = false;
          validation.errors.push("X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u kh\xf4ng \u0111\xfang");
        }
        validation.isValid = isValid;
        validation.data = {
          username: username,
          password: password,
          refcode: refcode
        };
        return validation;
      },
      onClickBtn: function onClickBtn() {
        this.uiHelper.showToast("Vui l\xf2ng \u0111\u0103ng nh\u1eadp");
      },
      onClickShowPanelLogin: function onClickShowPanelLogin() {
        this.panelLogin.active = true;
      },
      onClickHidePanelLogin: function onClickHidePanelLogin() {
        this.panelLogin.active = false;
      },
      showOtpPanel: function showOtpPanel() {
        this.inputOTP.string = "";
        this.panelOTP.active = true;
      },
      hideOtpPanel: function hideOtpPanel() {
        this.panelOTP.active = false;
        this.firstEnterOtp = true;
      },
      loginOtp: function loginOtp() {
        if ("" == this.inputOTP.string) {
          this.uiHelper.showToast("OTP kh\xf4ng \u0111\u01b0\u1ee3c ph\xe9p \u0111\u1ec3 tr\u1ed1ng");
          return;
        }
        this.panelOTP.active = false;
        this.onClickLogin();
      },
      onClickOTP: function onClickOTP() {
        var _this5 = this;
        window.$Global.userService.getOTP().then(function(detail) {
          var status = detail.resultCode;
          status == _Constants.ResponseResultCode.SUCCESS ? _this5.uiHelper.showPopup("OTP \u0111\xe3 \u0111\u01b0\u1ee3c g\u1eedi \u0111\u1ebfn \u0111i\u1ec7n tho\u1ea1i c\u1ee7a b\u1ea1n. L\u01b0u \xfd OTP c\xf3 hi\u1ec7u l\u1ef1c trong 4 ph\xfat.", function() {}) : _this5.uiHelper.showToast(detail.desc);
        });
      },
      onTextRefcodeChanged: function onTextRefcodeChanged(event) {
        var _this6 = this;
        var userId = event;
        window.$Global.userService.getUserDetail(userId).then(function(detail) {
          if (detail) {
            var jsData = JSON.parse(detail);
            _this6.txtRefcodeName.string = jsData.fullName;
          } else _this6.txtRefcodeName.string = "Kh\xf4ng t\u1ed3n t\u1ea1i";
        });
      },
      autoLogin: function autoLogin() {
        if (false == window.$Global.firstLogin || window.$Global.forceUpdate || window.$Global.needUpdate || "" == this.textUsername.string || "" == this.textPassword.string) return;
        this.onClickLogin();
      },
      cipher: function cipher(salt) {
        var textToChars = function textToChars(text) {
          return text.split("").map(function(c) {
            return c.charCodeAt(0);
          });
        };
        var byteHex = function byteHex(n) {
          return ("0" + Number(n).toString(16)).substr(-2);
        };
        var applySaltToChar = function applySaltToChar(code) {
          return textToChars(salt).reduce(function(a, b) {
            return a ^ b;
          }, code);
        };
        return function(text) {
          return text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
        };
      },
      decipher: function decipher(salt) {
        var textToChars = function textToChars(text) {
          return text.split("").map(function(c) {
            return c.charCodeAt(0);
          });
        };
        var saltChars = textToChars(salt);
        var applySaltToChar = function applySaltToChar(code) {
          return textToChars(salt).reduce(function(a, b) {
            return a ^ b;
          }, code);
        };
        return function(encoded) {
          return encoded.match(/.{1,2}/g).map(function(hex) {
            return parseInt(hex, 16);
          }).map(applySaltToChar).map(function(charCode) {
            return String.fromCharCode(charCode);
          }).join("");
        };
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../Common/UIHelper": "UIHelper"
  } ],
  MiniBaCay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7dda3LYscJLGK/HrWChCqGd", "MiniBaCay");
    "use strict";
    var _lodash = require("lodash");
    var _Constants = require("../../Utils/Constants");
    var _Helper = require("../../Utils/Helper");
    var _JackpotEffect = require("../../SlotGame/JackpotEffect");
    var _JackpotEffect2 = _interopRequireDefault(_JackpotEffect);
    var _BaCayUserHistory = require("./BaCayUserHistory");
    var _BaCayUserHistory2 = _interopRequireDefault(_BaCayUserHistory);
    var _BaCayJackpotHistory = require("./BaCayJackpotHistory");
    var _BaCayJackpotHistory2 = _interopRequireDefault(_BaCayJackpotHistory);
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _MultipleFund = require("../GameList/MultipleFund");
    var _MultipleFund2 = _interopRequireDefault(_MultipleFund);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var BACAY_TYPE = {
      SUBSCRIBE_ROOM: 23,
      START_MATCH: 202,
      GET_JACKPOT_HISTORY: 221,
      GET_USER_HISTORY: 222
    };
    var BLOCK_HEIGHT = 133;
    var COL_NUM = 3;
    var ITEMS_PER_COL = 25;
    var INIT_POS_Y = 0;
    var OFFSET_FIRST_MOVE = 20;
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
          default: false
        },
        winNode: {
          default: null,
          type: cc.Node
        },
        jackpotEffect: {
          default: null,
          type: _JackpotEffect2.default
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
          type: _BaCayUserHistory2.default
        },
        dialogJackpotHistory: {
          default: null,
          type: _BaCayJackpotHistory2.default
        },
        dialogGuide: {
          default: null,
          type: _BaseDialog2.default
        },
        multipleFund: {
          default: null,
          type: _MultipleFund2.default
        }
      },
      onLoad: function onLoad() {
        this.genRandomItems();
      },
      start: function start() {
        window.$Global.networkService.on("" + _Constants.REQUEST_TYPE.MINI_BACAY_GAMES, this.onMessage.bind(this));
        window.$Global.networkService.on("notify_" + _Constants.NOTIFY_TYPE.NOTIFY_MINI_CHANGED, this.onNotifyMiniChanged.bind(this));
      },
      onDestroy: function onDestroy() {
        window.$Global.networkService.off("" + _Constants.REQUEST_TYPE.MINI_BACAY_GAMES);
        window.$Global.networkService.off("notify_" + _Constants.NOTIFY_TYPE.NOTIFY_MINI_CHANGED);
      },
      show: function show() {
        this.sub(100);
        this.node.active = true;
        window.$Global.minigame.isShowMiniBaCay = true;
      },
      hide: function hide() {
        this.isAuto && this.stopAuto();
        this.reset();
        this.node.active = false;
        window.$Global.minigame.isShowMiniBaCay = false;
      },
      sub: function sub(amount) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_BACAY_GAMES, {
          type: BACAY_TYPE.SUBSCRIBE_ROOM,
          chipType: 1,
          bet: amount
        });
        this.stopAuto();
        this.currentBet = amount;
      },
      spin: function spin() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_BACAY_GAMES, {
          type: BACAY_TYPE.START_MATCH
        });
        this.spinBtn.interactable = false;
        this.jackpotEffect.hide();
      },
      onMessage: function onMessage(event) {
        var detail = event;
        if (detail.resultCode === _Constants.ResponseResultCode.SUCCESS) detail.type === BACAY_TYPE.GET_JACKPOT_HISTORY ? this.onJackpotHistoryDone(detail.history) : detail.type === BACAY_TYPE.GET_USER_HISTORY ? this.onUserHistoryDone(detail.history) : detail.type === BACAY_TYPE.START_MATCH ? this.onSpinDone(detail) : detail.type === BACAY_TYPE.SUBSCRIBE_ROOM && this.updateJackpot(detail.jackpot); else {
          window.$UIHelper.showToast(detail.desc || detail.content || "");
          this.spinBtn.interactable = true;
        }
      },
      genRandomItems: function genRandomItems() {
        this.firstCards = [];
        for (var i = 0; i < COL_NUM; i++) {
          var col = this.listColumns[i];
          for (var j = 0; j < ITEMS_PER_COL; j++) {
            var elementIndex = (0, _lodash.random)(0, this.listCards.length - 1, false);
            if (0 == j) {
              while (-1 != this.firstCards.indexOf(elementIndex)) elementIndex = (0, _lodash.random)(0, this.listCards.length - 1, false);
              this.firstCards.push(elementIndex);
            }
            var newIcon = cc.instantiate(this.card);
            newIcon.x = 0;
            newIcon.y = j * BLOCK_HEIGHT;
            newIcon.getComponent(cc.Sprite).spriteFrame = this.listCards[elementIndex];
            col.addChild(newIcon);
          }
        }
      },
      resetPosition: function resetPosition() {
        for (var i = 0; i < COL_NUM; i++) {
          var col = this.listColumns[i];
          col.y = INIT_POS_Y;
        }
      },
      reset: function reset() {
        this.txtID.string = "";
        this.isAuto = false;
        this.autoToggle.isChecked = false;
        this.spinBtn.interactable = true;
        this.betToggles.toggleItems[0].check();
      },
      stopAuto: function stopAuto() {
        this.autoToggle.isChecked = false;
        this.isAuto = false;
      },
      onSpinDone: function onSpinDone(result) {
        this.cardsResult = result.cards;
        this.winChips = result.winChips;
        this.isWinJackpot = result.isWinJackpot;
        this.jackpot = result.jackpot;
        this.setSpinID(result.spinID);
        this.resetPosition();
        this.setOldResult();
        this.setResult();
        this.roll();
      },
      setOldResult: function setOldResult() {
        if (0 === this.oldsResult.length) {
          this.setResult();
          return;
        }
        for (var indexCol = 0; indexCol < COL_NUM; indexCol++) {
          var col = this.listColumns[indexCol];
          var slot = col.children[0];
          var cardIndex = 4 * (this.oldsResult[indexCol].card - 1) + (this.oldsResult[indexCol].face - 1);
          slot.getComponent(cc.Sprite).spriteFrame = this.listCards[cardIndex];
        }
      },
      setResult: function setResult() {
        if (0 === this.cardsResult.length) return;
        for (var indexCol = 0; indexCol < COL_NUM; indexCol++) {
          var col = this.listColumns[indexCol];
          var slot = col.children[ITEMS_PER_COL - 1];
          var cardIndex = 4 * (this.cardsResult[indexCol].card - 1) + (this.cardsResult[indexCol].face - 1);
          slot.getComponent(cc.Sprite).spriteFrame = this.listCards[cardIndex];
        }
      },
      roll: function roll() {
        var moveHeight = (ITEMS_PER_COL - 1) * BLOCK_HEIGHT + OFFSET_FIRST_MOVE;
        for (var index = 0; index < COL_NUM; index++) {
          var delay = cc.delayTime(.1 * index);
          var line = this.listColumns[index];
          index === COL_NUM - 1 ? line.runAction(cc.sequence(delay, cc.moveBy(.1, 0, OFFSET_FIRST_MOVE), cc.moveBy(1, 0, -moveHeight), cc.callFunc(this.finishRoll, this))) : line.runAction(cc.sequence(delay, cc.moveBy(.1, 0, OFFSET_FIRST_MOVE), cc.moveBy(1, 0, -moveHeight)));
        }
      },
      finishRoll: function finishRoll() {
        this.oldsResult = this.cardsResult;
        this.showResult();
      },
      showResult: function showResult() {
        window.$Global.networkService.updateMoneyWithZoneId(_Constants.ZONE_ID.MINI_BACAY);
        if (this.isWinJackpot) {
          this.jackpotEffect.show(this.winChips);
          this.stopAuto();
        } else this.winChips > 0 ? this.showWinChip(this.winChips) : this.onShowWinDone();
        this.updateJackpot(this.jackpot);
        this.isAuto || (this.spinBtn.interactable = true);
      },
      showWinChip: function showWinChip(chip) {
        this.winNode.active = true;
        this.winNode.children[0].getComponent(cc.Label).string = (0, _Helper.numberWithDot)(chip);
        var hide = function hide() {
          this.winNode.active = false;
        };
        this.winNode.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(hide.bind(this)), cc.callFunc(this.onShowWinDone.bind(this))));
      },
      onShowWinDone: function onShowWinDone() {
        this.isAuto && this.spin();
      },
      updateJackpot: function updateJackpot(jackpot) {
        (0, _Helper.runNumber)(this.txtJackpot, jackpot);
      },
      setSpinID: function setSpinID(id) {
        this.txtID.string = "#" + id;
      },
      autoClick: function autoClick() {
        if (this.isAuto) {
          this.isAuto = false;
          this.spinBtn.interactable = true;
        } else {
          this.isAuto = true;
          this.spinBtn.interactable && this.spin();
        }
      },
      onBetChanged: function onBetChanged(event, amount) {
        this.sub(amount);
      },
      showUserHistory: function showUserHistory() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_BACAY_GAMES, {
          type: BACAY_TYPE.GET_USER_HISTORY
        });
        this.dialogUserHistory.show();
      },
      onUserHistoryDone: function onUserHistoryDone(history) {
        this.dialogUserHistory.setData(history);
      },
      showJackpotHistory: function showJackpotHistory() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_BACAY_GAMES, {
          type: BACAY_TYPE.GET_JACKPOT_HISTORY
        });
        this.dialogJackpotHistory.show();
      },
      onJackpotHistoryDone: function onJackpotHistoryDone(history) {
        this.dialogJackpotHistory.setData(history);
      },
      showGuide: function showGuide() {
        this.dialogGuide.show();
      },
      onNotifyMiniChanged: function onNotifyMiniChanged(event) {
        if (event.zoneId == _Constants.ZONE_ID.MINI_BACAY && event.bet == this.currentBet) {
          this.updateJackpot(event.jackpot);
          this.multipleFund.setMultipleFund(event.multipleFund);
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
  MiniBauCua: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "275c71nhZNHHYfp5z6hejPk", "MiniBauCua");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BauCuaState = exports.BauCuaNotifyType = exports.BauCuaRequestType = void 0;
    var _BauCuaDoor = require("./BauCuaDoor");
    var _BauCuaDoor2 = _interopRequireDefault(_BauCuaDoor);
    var _DialogBauCuaTop = require("./DialogBauCuaTop");
    var _DialogBauCuaTop2 = _interopRequireDefault(_DialogBauCuaTop);
    var _DialogBauCuaHistory = require("./DialogBauCuaHistory");
    var _DialogBauCuaHistory2 = _interopRequireDefault(_DialogBauCuaHistory);
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _Constants = require("../../Utils/Constants");
    var _Helper = require("../../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var BauCuaRequestType = exports.BauCuaRequestType = {
      SUBSCRIBE: 23,
      UN_SUBSCRIBE: 24,
      ADD_BET: 214,
      GET_USER_HISTORY: 222,
      GET_TOP_USERS: 223,
      GET_TOP_WIN_DAILY: 232
    };
    var BauCuaNotifyType = exports.BauCuaNotifyType = {
      UPDATE_INFO: 1,
      USER_SET_BET: 2,
      END_MATCH: 3
    };
    var BauCuaState = exports.BauCuaState = {
      DEAL: 0,
      SET_BET: 1,
      END_MATCH: 2,
      WAIT_NEW_MATCH: 8
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        doors: {
          default: [],
          type: _BauCuaDoor2.default
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
          type: _DialogBauCuaTop2.default
        },
        dialogHis: {
          default: null,
          type: _DialogBauCuaHistory2.default
        },
        dialogGuide: {
          default: null,
          type: _BaseDialog2.default
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
        }
      },
      show: function show() {
        this.node.active = true;
        this.onNetwork();
        this.reset();
        this.subscribe();
      },
      hide: function hide() {
        this.node.active = false;
        this.unsubscribe();
        window.$Global.minigame.isShowBaucua = false;
      },
      subscribe: function subscribe() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_BAUCUA, {
          type: BauCuaRequestType.SUBSCRIBE,
          amount: this.currentBet
        });
      },
      unsubscribe: function unsubscribe() {
        this.offNetwork();
      },
      onNetwork: function onNetwork() {
        window.$Global.networkService.on("" + _Constants.REQUEST_TYPE.MINI_BAUCUA, this.onMessage.bind(this));
        window.$Global.networkService.on("notify_" + _Constants.NOTIFY_TYPE.MINI_BAUCUA, this.onNotify.bind(this));
      },
      offNetwork: function offNetwork() {
        window.$Global.networkService.off("" + _Constants.REQUEST_TYPE.MINI_BAUCUA);
        window.$Global.networkService.off("notify_" + _Constants.NOTIFY_TYPE.MINI_BAUCUA);
        clearInterval(this.timeCountDown);
        this.timeCountDown = null;
      },
      onDestroy: function onDestroy() {
        this.offNetwork();
      },
      reset: function reset() {
        this.listBet[0].isChecked = true;
        this.currentBet = 1e3;
        this.dia.active = false;
        this.bat.setPosition(0, 0);
      },
      betClick: function betClick(event, customEventData) {
        var id = customEventData;
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_BAUCUA, {
          type: BauCuaRequestType.ADD_BET,
          pot: id,
          amount: this.currentBet
        });
      },
      onBetChange: function onBetChange(event, customEventData) {
        this.currentBet = customEventData;
      },
      onMessage: function onMessage(event) {
        var msg = event;
        if (msg.resultCode === _Constants.ResponseResultCode.SUCCESS) switch (msg.type) {
         case BauCuaRequestType.SUBSCRIBE:
          this.onSubscribeDone(msg);
          break;

         case BauCuaRequestType.ADD_BET:
          this.setRoomBet(msg.room, msg.user);
          break;

         case BauCuaRequestType.GET_USER_HISTORY:
          this.dialogHis.setData(msg.history);
          break;

         case BauCuaRequestType.GET_TOP_WIN_DAILY:
          this.dialogTop.setData(msg.top_win);
        } else window.$UIHelper.showToast(msg.desc || "Error");
      },
      onNotify: function onNotify(event) {
        var msg = event;
        switch (msg.type) {
         case BauCuaNotifyType.UPDATE_INFO:
          this.stateChange(msg.room);
          this.txtID.string = "#" + msg.displayId;
          break;

         case BauCuaNotifyType.USER_SET_BET:
          this.setRoomBet(msg.room);
          break;

         case BauCuaNotifyType.END_MATCH:
          this.endMatch(msg);
        }
      },
      resetDoors: function resetDoors() {
        this.doors.forEach(function(door) {
          door.reset();
        });
      },
      onSubscribeDone: function onSubscribeDone(data) {
        this.txtID.string = "#" + data.displayId;
        this.setTimeCountDown(data.room.timeCountDown);
        this.setRoomBet(data.room, data.user);
        this.setHistory(data.history);
        this.historys = data.history;
      },
      setTimeCountDown: function setTimeCountDown(remain) {
        var _this = this;
        if (!this.timeCountDown) {
          this.timeRemain = remain;
          this.txtTime.string = (0, _Helper.timeFormat)(this.timeRemain);
          this.txtTimeCountDown.string = (0, _Helper.timeFormat)(this.timeRemain);
          this.timeRemain--;
          this.timeCountDown = setInterval(function() {
            if (_this.timeRemain > 0) {
              _this.txtTime.string = (0, _Helper.timeFormat)(_this.timeRemain);
              _this.txtTimeCountDown.string = (0, _Helper.timeFormat)(_this.timeRemain);
            } else {
              0 == _this.timeRemain && (_this.txtTime.string = (0, _Helper.timeFormat)(_this.timeRemain));
              _this.txtTimeCountDown.string = (0, _Helper.timeFormat)(_this.timeRemain);
              clearInterval(_this.timeCountDown);
              _this.timeCountDown = null;
            }
            _this.timeRemain--;
          }, 1e3);
        }
      },
      setRoomBet: function setRoomBet(room) {
        var user = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        for (var i = 0; i < this.doors.length; i++) {
          var door = this.doors[i];
          door.setTotalBet(room.slots[i].bet);
        }
        if (user) {
          this.doors[0].setUserBet(user.properties.bc_pot_bet_1);
          this.doors[1].setUserBet(user.properties.bc_pot_bet_2);
          this.doors[2].setUserBet(user.properties.bc_pot_bet_3);
          this.doors[3].setUserBet(user.properties.bc_pot_bet_4);
          this.doors[4].setUserBet(user.properties.bc_pot_bet_5);
          this.doors[5].setUserBet(user.properties.bc_pot_bet_6);
        }
      },
      setHistory: function setHistory(historys) {
        var _this2 = this;
        this.historyContent.removeAllChildren();
        historys.forEach(function(history) {
          var item = cc.instantiate(_this2.historyItem);
          item.getComponent("BauCuaHistoryItem").setData(history);
          item.parent = _this2.historyContent;
        });
      },
      stateChange: function stateChange(room) {
        this.setTimeCountDown(room.timeCountDown);
        switch (room.state) {
         case BauCuaState.WAIT_NEW_MATCH:
          this.resetDoors();
          break;

         case BauCuaState.DEAL:
          this.bat.active = true;
          this.dia.active = true;
          this.shake();
          break;

         case BauCuaState.SET_BET:
          this.dia.active = false;
          break;

         case BauCuaState.END_MATCH:
        }
      },
      endMatch: function endMatch(msg) {
        var _this3 = this;
        if (20 !== msg.zoneId) return;
        this.dia.active = true;
        for (var i = 0; i < this.listDice.length; i++) {
          var dice = this.listDice[i];
          dice.spriteFrame = this.listDiceSprite[msg.vi.faces[i] - 1];
        }
        if (this.toggleNan.isChecked) {
          var timeWait = 0;
          var open = setInterval(function() {
            timeWait++;
            if (_this3.bat.x < -140 || _this3.bat.x > 140 || _this3.bat.y < -125 || _this3.bat.y > 145 || timeWait > 7) {
              _this3.bat.active = false;
              _this3.bat.setPosition(0, 0);
              _this3.showResult(msg);
              clearInterval(open);
            }
          }, 1e3);
        } else this.scheduleOnce(function() {
          _this3.bat.active = false;
          _this3.showResult(msg);
        }, 1);
      },
      shake: function shake() {
        this.dia.runAction(cc.sequence(cc.moveTo(.1, -195, -15), cc.moveTo(.2, -46, -15), cc.moveTo(.2, -195, -15), cc.moveTo(.2, -46, -15), cc.moveTo(.1, -132, -15)));
      },
      showResult: function showResult(msg) {
        var _this4 = this;
        msg.vi.faces.forEach(function(face) {
          _this4.doors[face - 1].setWin();
        });
        this.historys.splice(0, 0, msg.vi);
        this.historys.slice(0, 30);
        this.setHistory(this.historys);
        if (msg.chipChange > 0) {
          window.$Global.networkService.updateMoneyWithZoneId(_Constants.ZONE_ID.MINI_BAUCUA);
          window.$UIHelper.showToast("+" + (0, _Helper.moneyFormat)(msg.chipChange, true) + " " + _Constants.CONFIG_GOLD.goldName, this.node, -150);
        }
      },
      showTopUser: function showTopUser() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_BAUCUA, {
          type: BauCuaRequestType.GET_TOP_WIN_DAILY
        });
        this.dialogTop.show();
      },
      showHistory: function showHistory() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_BAUCUA, {
          type: BauCuaRequestType.GET_USER_HISTORY
        });
        this.dialogHis.show();
      },
      showRule: function showRule() {
        this.dialogGuide.show();
      },
      showSoicau: function showSoicau() {
        this.soicauNode.active = !this.soicauNode.active;
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
  MiniGameMiniPoker: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6050eYRN1ECr8+oig+Q32j", "MiniGameMiniPoker");
    "use strict";
    var _lodash = require("lodash");
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _DialogMiniPokerHistory = require("./DialogMiniPokerHistory");
    var _DialogMiniPokerHistory2 = _interopRequireDefault(_DialogMiniPokerHistory);
    var _DialogMiniPokerHuHistory = require("./DialogMiniPokerHuHistory");
    var _DialogMiniPokerHuHistory2 = _interopRequireDefault(_DialogMiniPokerHuHistory);
    var _Constants = require("../../Utils/Constants");
    var _Helper = require("../../Utils/Helper");
    var _MultipleFund = require("../GameList/MultipleFund");
    var _MultipleFund2 = _interopRequireDefault(_MultipleFund);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ICONS_NUM_PER_LINE = 18;
    var LINE_NUMS = 5;
    var BLOCK_HEIGTH = 132;
    var CardName = {
      TU_QUY_A: 14,
      THUNG_PHA_SANH_THUONG: 13,
      THUNG_PHA_SANH_HA: 12,
      THUNG_PHA_SANH: 11,
      TU_QUY: 10,
      CU_LU: 9,
      THUNG: 8,
      SANH_THUONG: 7,
      SANH_HA: 6,
      SANH: 5,
      SAM_CO: 4,
      THU: 3,
      DOI: 2,
      MAU_THAU: 1
    };
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
          type: _DialogMiniPokerHistory2.default
        },
        dialogHuHistory: {
          default: null,
          type: _DialogMiniPokerHuHistory2.default
        },
        dialogHelp: {
          default: null,
          type: _BaseDialog2.default
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
          type: _MultipleFund2.default
        }
      },
      onLoad: function onLoad() {
        this.bets = [ 100, 1e3, 1e4 ];
        this.state = _Constants.MINI_POKER_STATE.INIT;
        this.initLineY = this.listLines[0].y;
        this.animSpin = this.btnSpin.getComponent(cc.Animation);
      },
      start: function start() {
        this.resetState();
        this.setupCards();
        this.state = _Constants.MINI_POKER_STATE.CAN_BET;
        this.onClickBet(null, 0);
        this.auto = false;
      },
      onDestroy: function onDestroy() {
        this.offNetwork();
      },
      onNetwork: function onNetwork() {
        window.$Global.networkService.on("" + _Constants.REQUEST_TYPE.MINI_POKER, this.onMessage.bind(this));
        window.$Global.networkService.on("notify_" + _Constants.REQUEST_TYPE.MINI_POKER, this.onNotify.bind(this));
        window.$Global.networkService.on("notify_" + _Constants.NOTIFY_TYPE.NOTIFY_MINI_CHANGED, this.onNotifyMiniChanged.bind(this));
      },
      offNetwork: function offNetwork() {
        window.$Global.networkService.off("" + _Constants.REQUEST_TYPE.MINI_POKER);
        window.$Global.networkService.off("notify_" + _Constants.REQUEST_TYPE.MINI_POKER);
        window.$Global.networkService.off("notify_" + _Constants.NOTIFY_TYPE.NOTIFY_MINI_CHANGED);
      },
      resetState: function resetState() {
        this.betAmount = 0;
        this.state = _Constants.MINI_POKER_STATE.CAN_BET;
      },
      setupCards: function setupCards() {
        this.genRandomSlotIcons();
      },
      resetPosition: function resetPosition() {
        for (var i = 0; i < LINE_NUMS; i++) {
          var line = this.listLines[i];
          line.y = this.initLineY;
          var elementIndex = this.firstCards[i];
          var newIcon = line.children[0];
          var spriteIcon = newIcon.getComponent(cc.Sprite);
          spriteIcon.spriteFrame = this.listCardIcons[elementIndex];
        }
      },
      genRandomSlotIcons: function genRandomSlotIcons() {
        this.firstCards = [];
        for (var i = 0; i < LINE_NUMS; i++) {
          var line = this.listLines[i];
          for (var j = 0; j < ICONS_NUM_PER_LINE; j++) {
            var elementIndex = (0, _lodash.random)(0, this.listCardIcons.length - 1, false);
            if (0 == j) {
              while (-1 != this.firstCards.indexOf(elementIndex)) elementIndex = (0, _lodash.random)(0, this.listCardIcons.length - 1, false);
              this.firstCards.push(elementIndex);
            }
            var newIcon = cc.instantiate(this.slotItemPrefab);
            newIcon.x = 0;
            newIcon.y = j * BLOCK_HEIGTH;
            var spriteIcon = newIcon.getComponent(cc.Sprite);
            spriteIcon.spriteFrame = this.listCardIcons[elementIndex];
            line.addChild(newIcon);
            newIcon.active = true;
          }
        }
      },
      hide: function hide() {
        this.node.active = false;
        this.isShow = false;
        this.toggleAuto.isChecked = false;
        this.auto = false;
        this.jackpotEff.active && (this.jackpotEff.active = false);
        this.offNetwork();
        this.unsub();
        window.$Global.minigame.isShowMinipoker = false;
      },
      show: function show() {
        this.node.active = true;
        this.isShow = true;
        this.onNetwork();
        this.userData = window.$Global.userService.userInfo;
      },
      onClickClose: function onClickClose() {
        this.hide();
      },
      onClickAuto: function onClickAuto() {
        this.auto = !this.auto;
      },
      onClickBet: function onClickBet(event, index) {
        var amount = this.bets[index];
        if (this.betAmount !== amount) {
          if (this.toggleAuto.isChecked) {
            this.toggleAuto.isChecked = false;
            this.auto = false;
          }
          this.betAmount = amount;
          this.sub();
        }
      },
      onClickSpin: function onClickSpin() {
        if (this.state !== _Constants.MINI_POKER_STATE.CAN_BET) {
          window.$UIHelper.showToast("Quay qu\xe1 nhanh", this.node, -50);
          return;
        }
        this.jackpotEff.active && (this.jackpotEff.active = false);
        this.spin();
      },
      onClickHelp: function onClickHelp() {
        this.dialogHelp.show();
      },
      onClickLichSuHu: function onClickLichSuHu() {
        this.dialogHuHistory.show();
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_POKER, {
          type: _Constants.MINI_POKER_ACTION_TYPE.GET_JACKPOT_HISTORY
        });
      },
      onClickHistory: function onClickHistory() {
        this.dialogHistory.show();
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_POKER, {
          type: _Constants.MINI_POKER_ACTION_TYPE.GET_USER_HISTORY
        });
      },
      sub: function sub() {
        if (void 0 === window.$Global || void 0 === window.$Global.networkService) return;
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_POKER, {
          type: _Constants.MINI_POKER_ACTION_TYPE.SUBSCRIBE_ROOM,
          bet: this.betAmount,
          chipType: 1
        });
      },
      unsub: function unsub() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_POKER, {
          type: _Constants.MINI_POKER_ACTION_TYPE.UNSUBSCRIBE_ROOM
        });
      },
      onMessage: function onMessage(event) {
        var msg = event;
        if (!this.isShow) return;
        if (msg.resultCode === _Constants.ResponseResultCode.SUCCESS) if (msg.type == _Constants.MINI_POKER_ACTION_TYPE.SUBSCRIBE_ROOM) {
          this.textJackpot.string = "0";
          (0, _Helper.runNumber)(this.textJackpot, msg.jackpot);
        } else msg.type == _Constants.MINI_POKER_ACTION_TYPE.START_MATCH ? this.setCardsAndSpin(msg) : msg.type == _Constants.MINI_POKER_ACTION_TYPE.GET_USER_HISTORY ? this.dialogHistory.setData(msg.history) : msg.type == _Constants.MINI_POKER_ACTION_TYPE.GET_JACKPOT_HISTORY && this.dialogHuHistory.setData(msg.history); else {
          this.btnSpin.interactable = true;
          window.$UIHelper.showToast(msg.desc || msg.content || "");
        }
      },
      onNotify: function onNotify(event) {
        var msg = event;
        (0, _Helper.runNumber)(this.textJackpot, msg.jackpot);
      },
      setCardsAndSpin: function setCardsAndSpin(msg) {
        this.isWinJackpot = msg.isWinJackpot;
        this.winChips = msg.winChips;
        this.typeOfChi = msg.typeOfChi;
        this.state = _Constants.MINI_POKER_STATE.SPIN;
        var cardStates = msg.cards;
        for (var i = 0; i < LINE_NUMS; i++) {
          var line = this.listLines[i];
          var childrenCount = line.childrenCount;
          var slot = line.children[childrenCount - 1];
          var elementIndex = 4 * (cardStates[i].card - 1) + (cardStates[i].face - 1);
          this.firstCards[i] = elementIndex;
          slot.getComponent(cc.Sprite).spriteFrame = this.listCardIcons[elementIndex];
        }
        this.roll();
      },
      roll: function roll() {
        var OFFSET_FIRST_MOVE = 0;
        var moveHeight = (ICONS_NUM_PER_LINE - 1) * BLOCK_HEIGTH + OFFSET_FIRST_MOVE;
        for (var index = 0; index < LINE_NUMS; index++) {
          var delay = cc.delayTime(.1 * index);
          var line = this.listLines[index];
          line.y = this.initLineY;
          line.stopAllActions();
          index !== LINE_NUMS - 1 ? line.runAction(cc.sequence(delay, cc.moveBy(1, 0, -moveHeight))) : line.runAction(cc.sequence(delay, cc.moveBy(1, 0, -moveHeight), cc.callFunc(this.finishRoll, this)));
        }
      },
      finishRoll: function finishRoll() {
        this.showResult();
        this.state = _Constants.MINI_POKER_STATE.RESULT;
        this.prepareForNext();
        window.$Global.networkService.updateMoneyWithZoneId(_Constants.ZONE_ID.MINI_POKER);
        this.btnSpin.interactable = true;
      },
      prepareForNext: function prepareForNext() {
        this.state = _Constants.MINI_POKER_STATE.WAIT_NEXT;
        this.resetState();
        this.resetPosition();
      },
      spin: function spin() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_POKER, {
          type: _Constants.MINI_POKER_ACTION_TYPE.START_MATCH
        });
        this.btnSpin.interactable = false;
        this.animSpin.play();
      },
      showResult: function showResult() {
        if (this.winChips > 0) if (this.isWinJackpot) {
          this.showJackpot();
          if (this.auto) {
            this.toggleAuto.isChecked = false;
            this.auto = false;
          }
        } else {
          var turn = this.getTurnName(this.typeOfChi);
          window.$UIHelper.showToast(turn + "\t+" + (0, _Helper.moneyFormat)(this.winChips), this.node, -50);
          this.auto && this.scheduleOnce(function() {
            this.spin();
          }, 2);
        } else this.auto && this.spin();
      },
      showJackpot: function showJackpot() {
        var textGold = this.jackpotEff.getComponentInChildren(cc.Label);
        textGold.string = "0";
        this.jackpotEff.active = true;
        (0, _Helper.runNumber)(textGold, this.winChips);
      },
      getTurnName: function getTurnName(type) {
        var name = "";
        switch (type) {
         case CardName.MAU_THAU:
          name = "M\u1eadu th\u1ea7u";
          break;

         case CardName.DOI:
          name = "\u0110\xf4i";
          break;

         case CardName.THU:
          name = "Th\xfa";
          break;

         case CardName.SAM_CO:
          name = "S\xe1m c\xf4";
          break;

         case CardName.SANH:
          name = "S\u1ea3nh";
          break;

         case CardName.SANH_HA:
          name = "S\u1ea3nh h\u1ea1";
          break;

         case CardName.SANH_THUONG:
          name = "S\u1ea3nh th\u01b0\u1ee3ng";
          break;

         case CardName.THUNG:
          name = "Th\xf9ng";
          break;

         case CardName.CU_LU:
          name = "C\xf9 l\u0169";
          break;

         case CardName.TU_QUY:
          name = "T\u1ee9 qu\xfd";
          break;

         case CardName.THUNG_PHA_SANH:
          name = "Th\xf9ng ph\xe1 s\u1ea3nh";
          break;

         case CardName.THUNG_PHA_SANH_HA:
          name = "Th\xf9ng ph\xe1 s\u1ea3nh h\u1ea1";
          break;

         case CardName.THUNG_PHA_SANH_THUONG:
          name = "Th\xf9ng ph\xe1 s\u1ea3nh th\u01b0\u1ee3ng";
          break;

         case CardName.TU_QUY_A:
          name = "T\u1ee9 qu\xfd \xe1t";
        }
        return name;
      },
      onNotifyMiniChanged: function onNotifyMiniChanged(event) {
        if (event.zoneId == _Constants.ZONE_ID.MINI_POKER && event.bet == this.betAmount) {
          (0, _Helper.runNumber)(this.textJackpot, event.jackpot);
          this.multipleFund.setMultipleFund(event.multipleFund);
        }
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
  MiniGameTaiXiu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e7daMKm8JG3q9O1BozTKyw", "MiniGameTaiXiu");
    "use strict";
    var _XucXac = require("./XucXac");
    var _XucXac2 = _interopRequireDefault(_XucXac);
    var _DialogTaiXiuTopUser = require("./DialogTaiXiuTopUser");
    var _DialogTaiXiuTopUser2 = _interopRequireDefault(_DialogTaiXiuTopUser);
    var _DialogTaiXiuHelp = require("./DialogTaiXiuHelp");
    var _DialogTaiXiuHelp2 = _interopRequireDefault(_DialogTaiXiuHelp);
    var _DialogTaiXiuHistory = require("./DialogTaiXiuHistory");
    var _DialogTaiXiuHistory2 = _interopRequireDefault(_DialogTaiXiuHistory);
    var _DialogTaiXiuMatchHistory = require("./DialogTaiXiuMatchHistory");
    var _DialogTaiXiuMatchHistory2 = _interopRequireDefault(_DialogTaiXiuMatchHistory);
    var _DialogTaiXiuThongKe = require("./DialogTaiXiuThongKe");
    var _DialogTaiXiuThongKe2 = _interopRequireDefault(_DialogTaiXiuThongKe);
    var _DialogTaiXiuDuaTop = require("./DialogTaiXiuDuaTop");
    var _DialogTaiXiuDuaTop2 = _interopRequireDefault(_DialogTaiXiuDuaTop);
    var _ChatController = require("./ChatController");
    var _ChatController2 = _interopRequireDefault(_ChatController);
    var _Constants = require("../../Utils/Constants");
    var _Helper = require("../../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        effectTai: {
          default: null,
          type: cc.Animation
        },
        effectXiu: {
          default: null,
          type: cc.Animation
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
          type: _XucXac2.default
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
          type: _DialogTaiXiuTopUser2.default
        },
        dialogHistory: {
          default: null,
          type: _DialogTaiXiuHistory2.default
        },
        dialogHistoryPhien: {
          default: null,
          type: _DialogTaiXiuMatchHistory2.default
        },
        dialogHelp: {
          default: null,
          type: _DialogTaiXiuHelp2.default
        },
        dialogStats: {
          default: null,
          type: _DialogTaiXiuThongKe2.default
        },
        dialogDuaTop: {
          default: null,
          type: _DialogTaiXiuDuaTop2.default
        },
        chatPanel: {
          default: null,
          type: _ChatController2.default
        },
        txtDayWin: {
          default: null,
          type: cc.Label
        },
        txtDayLose: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.bowlPos = this.bowl.getPosition();
        this.isNan = false;
        this.chipChange = 0;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
      },
      onDestroy: function onDestroy() {
        this.offNetwork();
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
      },
      offNetwork: function offNetwork() {
        window.$Global.networkService.off("" + _Constants.REQUEST_TYPE.TAI_XIU);
        window.$Global.networkService.off("notify_" + _Constants.NOTIFY_TYPE.TAI_XIU);
        window.$Global.networkService.off("notify_" + _Constants.NOTIFY_TYPE.WORLD_CHAT_NOTIFICATION);
        clearInterval(this.timeCountDown);
        this.timeCountDown = null;
      },
      onKeyDown: function onKeyDown(event) {},
      onKeyUp: function onKeyUp(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.enter:
          this.onClickOk();
        }
      },
      hide: function hide() {
        this.stopEffect();
        this.node.active = false;
        this.unsub();
        window.$Global.minigame.isShowTaixiu = false;
      },
      show: function show() {
        this.node.parent.active || (this.node.parent.active = true);
        this.node.setPosition(0, 0);
        this.node.active = true;
        this.resetState();
        this.sub();
      },
      resetState: function resetState() {
        this.bowl.active = false;
        this.xucxac.node.active = false;
        this.nodeWaitingTime.active = false;
        this.nodeResultPoint.active = false;
        this.textTotalAmountTai.string = 0;
        this.textTotalAmountXiu.string = 0;
        this.textBetInputTai.string = 0;
        this.textBetInputXiu.string = 0;
        this.textMyBetTai.string = 0;
        this.textMyBetXiu.string = 0;
        this.textUsersTai.string = "(0)";
        this.textUsersXiu.string = "(0)";
        this.nodeResultPoint.active = false;
      },
      taiClick: function taiClick() {
        this.showPanelBet(1);
      },
      xiuClick: function xiuClick() {
        this.showPanelBet(0);
      },
      showPanelBet: function showPanelBet(potId) {
        if (this.state != _Constants.TAI_XIU_STATE.BET) return;
        this.choice = 1 == potId ? _Constants.TAI_XIU_CHOICE.TAI : _Constants.TAI_XIU_CHOICE.XIU;
        this.panelBet.getComponent("BetPanel").show(potId);
      },
      hidePanelBet: function hidePanelBet() {
        this.panelBet.active = false;
      },
      setHistoryGame: function setHistoryGame(history) {
        var _this = this;
        if (!history) return;
        this.panelHistory.removeAllChildren();
        var _loop = function _loop(i) {
          var newNode = cc.instantiate(_this.historyItem);
          var data = history[i];
          _this.panelHistory.addChild(newNode);
          newNode.getComponent("HistoryItem").setData(data.point, i == history.length - 1);
          newNode.on(cc.Node.EventType.TOUCH_END, function(event) {
            _this.onClickHistoryNode(data.displayId);
          });
        };
        for (var i = 0; i < history.length; i++) _loop(i);
      },
      letRollDice: function letRollDice(result, cb) {
        this.faces = result;
        this.xucxac.node.active = true;
        this.xucxac.letRoll(result, cb);
      },
      letOnlyShowResultDice: function letOnlyShowResultDice(result) {
        this.faces = result;
        this.xucxac.node.active = true;
        this.xucxac.setResult(this.faces);
        this.xucxac.onFinishRoll();
        this.bowl.active = false;
        this.nodeResultPoint.active = true;
        this.textResultPoint.string = "" + this.point;
      },
      setTimeCountDown: function setTimeCountDown(remain) {
        var _this2 = this;
        if (this.timeCountDown) return;
        this.timeRemain = remain;
        this.textTimeBet.string = (0, _Helper.timeFormat)(this.timeRemain);
        this.textWaitingTime.string = (0, _Helper.timeFormat)(this.timeRemain);
        this.timeRemain--;
        this.timeCountDown = setInterval(function() {
          if (_this2.timeRemain >= 0) {
            _this2.textTimeBet.string = (0, _Helper.timeFormat)(_this2.timeRemain);
            _this2.textWaitingTime.string = (0, _Helper.timeFormat)(_this2.timeRemain);
          } else {
            clearInterval(_this2.timeCountDown);
            _this2.timeCountDown = null;
          }
          _this2.timeRemain--;
        }, 1e3);
      },
      onClickClose: function onClickClose() {
        this.hide();
      },
      onClickOk: function onClickOk() {
        this.hidePanelBet();
        this.betRequest();
      },
      onClickNan: function onClickNan() {
        this.isNan = !this.isNan;
      },
      onClickHelp: function onClickHelp() {
        this.dialogHelp.show();
      },
      onClickLeaderboard: function onClickLeaderboard() {
        this.getTopUser();
        this.dialogLeaderboard.show();
      },
      onClickHistory: function onClickHistory() {
        this.getUserHistory();
        this.dialogHistory.show();
      },
      onClickStats: function onClickStats() {
        this.getRoomHistory();
        this.dialogStats.show();
      },
      onClickHistoryNode: function onClickHistoryNode(displayId) {
        this.getMatchHistory(displayId);
        this.dialogHistoryPhien.show();
      },
      sub: function sub() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.TAI_XIU, {
          type: _Constants.TAI_XIU_ACTION_TYPE.SUBSCRIBE_ROOM,
          chipType: 1
        });
        window.$Global.networkService.on("" + _Constants.REQUEST_TYPE.TAI_XIU, this.onMessage.bind(this));
        window.$Global.networkService.on("notify_" + _Constants.NOTIFY_TYPE.TAI_XIU, this.onNotify.bind(this));
        window.$Global.networkService.on("notify_" + _Constants.NOTIFY_TYPE.WORLD_CHAT_NOTIFICATION, this.onNotifyChat.bind(this));
      },
      unsub: function unsub() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.TAI_XIU, {
          type: _Constants.TAI_XIU_ACTION_TYPE.UNSUBSCRIBE_ROOM
        });
        this.offNetwork();
      },
      onMessage: function onMessage(event) {
        var _this3 = this;
        var msg = event;
        if (msg.resultCode === _Constants.ResponseResultCode.SUCCESS) if (msg.type == _Constants.TAI_XIU_ACTION_TYPE.SUBSCRIBE_ROOM) {
          this.history = msg.history;
          var historyCount = this.history.length;
          historyCount > 15 && this.history.splice(0, historyCount - 15);
          historyCount > 1 && (this.result = this.history[this.history.length - 1]);
          this.setHistoryGame(this.history);
          this.updateRoomInfo(msg);
          this.state = msg.room.state;
          this.transition();
          this.minCoinPerBet = msg.minCoinPerBet;
          this.maxCoinPerBet = msg.maxCoinPerBet;
          this.panelBet.getComponent("BetPanel").setMinMaxValue(this.minCoinPerBet, this.maxCoinPerBet);
          this.textMyBetTai.string = (0, _Helper.moneyFormat)(msg.betMax, true);
          this.textMyBetXiu.string = (0, _Helper.moneyFormat)(msg.betMin, true);
          var chats = msg.chatHistory;
          this.chatPanel.clearChat();
          chats && chats.forEach(function(chat) {
            _this3.chatPanel.setData(chat);
          });
        } else msg.type == _Constants.TAI_XIU_ACTION_TYPE.ADD_BET ? this.onBetRequestDone(msg) : msg.type == _Constants.TAI_XIU_ACTION_TYPE.GET_TOP_WIN_DAILY ? this.dialogLeaderboard.setData(msg) : msg.type == _Constants.TAI_XIU_ACTION_TYPE.GET_USER_HISTORY ? this.dialogHistory.setData(msg) : msg.type == _Constants.TAI_XIU_ACTION_TYPE.GET_MATCH_HISTORY ? this.dialogHistoryPhien.setData(msg) : msg.type == _Constants.TAI_XIU_ACTION_TYPE.GET_ROOM_HISTORY ? this.dialogStats.setData(msg) : msg.type == _Constants.TAI_XIU_ACTION_TYPE.GET_TOP_GAME && this.dialogDuaTop.setTopData(msg); else window.$UIHelper.showToast(msg.desc || "");
      },
      onNotify: function onNotify(event) {
        var msg = event;
        if (msg.type == _Constants.TAI_XIU_NOTIFY_TYPE.UPDATE_INFO) {
          this.updateRoomInfo(msg);
          this.state = msg.room.state;
          if (this.state == _Constants.TAI_XIU_STATE.BALANCE) {
            window.$UIHelper.showToast("Ng\u1eebng \u0111\u1eb7t c\u01b0\u1ee3c v\xe0 c\xe2n c\u1eeda", this.node, -150);
            this.textTimeBet.node.color = new cc.Color(255, 0, 0);
            this.hidePanelBet();
          }
        } else if (msg.type == _Constants.TAI_XIU_NOTIFY_TYPE.START_MATCH) {
          this.setMatchId(msg.displayId);
          this.startMatch(msg);
          this.setHistoryGame(this.history);
        } else if (msg.type == _Constants.TAI_XIU_NOTIFY_TYPE.END_MATCH) {
          this.result = msg.vi;
          this.chipChange = msg.chipChange;
          if (this.history) {
            this.history.push(this.result);
            this.history.shift();
          }
          this.endMatch();
        } else msg.type == _Constants.TAI_XIU_NOTIFY_TYPE.BALANCE && this.balance(msg);
      },
      transition: function transition() {
        if (this.state == _Constants.TAI_XIU_STATE.END_MATCH || this.state == _Constants.TAI_XIU_STATE.WAIT_NEW_MATCH) this.endMatch(false); else if (this.state == _Constants.TAI_XIU_STATE.BALANCE) this.textTimeBet.node.color = new cc.color(255, 0, 0); else {
          this.nodeWaitingTime.active = false;
          this.textTimeBet.node.active = true;
          this.textTimeBet.node.color = new cc.color(255, 255, 255);
        }
      },
      setMatchId: function setMatchId(id) {
        if (id < 0) return;
        this.textMatchId.string = "#" + id;
      },
      onBetRequestDone: function onBetRequestDone(msg) {
        if (msg.pot == _Constants.TAI_XIU_CHOICE.TAI) {
          this.textMyBetTai.string = (0, _Helper.moneyFormat)(msg.total, true);
          this.textTotalAmountTai.string = (0, _Helper.moneyFormat)(msg.totalPot, true);
        } else if (msg.pot == _Constants.TAI_XIU_CHOICE.XIU) {
          this.textMyBetXiu.string = (0, _Helper.moneyFormat)(msg.total, true);
          this.textTotalAmountXiu.string = (0, _Helper.moneyFormat)(msg.totalPot, true);
        }
      },
      startMatch: function startMatch(msg) {
        this.resetState();
        this.stopEffect();
        this.textTimeBet.node.active = true;
        this.textTimeBet.node.color = new cc.Color(255, 255, 255);
        this.setTimeCountDown(msg.room.timeCountDown);
        this.bowl.active = false;
        this.bowl.setPosition(this.bowlPos.x, this.bowlPos.y);
      },
      balance: function balance(msg) {
        var potName = "";
        var pot = msg.pot;
        if (0 == pot) {
          this.textMyBetXiu.string = (0, _Helper.moneyFormat)(msg.remainAmount, true);
          potName = " c\u1eeda x\u1ec9u";
        } else {
          this.textMyBetTai.string = (0, _Helper.moneyFormat)(msg.remainAmount, true);
          potName = " c\u1eeda t\xe0i";
        }
        window.$UIHelper.showToast("B\u1ea1n \u0111\xe3 \u0111\u01b0\u1ee3c ho\xe0n tr\u1ea3 " + (0, 
        _Helper.moneyFormat)(msg.payback, true) + potName, this.node, -200);
      },
      endMatch: function endMatch() {
        var _this4 = this;
        var isRoll = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (null === this.result || void 0 === this.result) return;
        this.point = this.result.point;
        this.faces = this.result.faces;
        this.textTimeBet.node.active = false;
        this.nodeWaitingTime.active = true;
        var openUp = function openUp() {
          var isTai = _this4.point > 10;
          isTai ? _this4.playEffect(true) : _this4.playEffect(false);
          _this4.bowl.active = false;
          _this4.nodeResultPoint.active = true;
          _this4.textResultPoint.string = "" + _this4.point;
        };
        isRoll ? this.letRollDice(this.faces, function() {
          if (_this4.isNan) {
            _this4.bowl.active = true;
            var timeWait = 0;
            var open = setInterval(function() {
              timeWait++;
              if (_this4.bowl.x < -195 || _this4.bowl.x > 210 || _this4.bowl.y < -180 || _this4.bowl.y > 205 || timeWait > 10) {
                _this4.bowl.active = false;
                openUp();
                clearInterval(open);
              }
            }, 1e3);
          } else {
            _this4.bowl.active = false;
            openUp();
          }
        }) : this.letOnlyShowResultDice(this.faces);
        0 !== this.chipChange && this.scheduleOnce(function() {
          window.$Global.networkService.updateMoneyWithZoneId(_Constants.ZONE_ID.TAI_XIU);
          window.$UIHelper.showToast("+" + (0, _Helper.moneyFormat)(_this4.chipChange) + " " + _Constants.CONFIG_GOLD.goldName, _this4.node, -150);
          _this4.chipChange = 0;
        }, 10);
      },
      showChat: function showChat() {
        this.chatPanel.node.active = !this.chatPanel.node.active;
      },
      onNotifyChat: function onNotifyChat(event) {
        var msg = event;
        this.chatPanel.setData(msg);
      },
      updateRoomInfo: function updateRoomInfo(msg) {
        this.room = msg.room;
        this.textUsersTai.string = "(" + this.room.maxUserCount + ")";
        this.textUsersXiu.string = "(" + this.room.minUserCount + ")";
        this.textTotalAmountTai.string = (0, _Helper.moneyFormat)(this.room.maxBet, true);
        this.textTotalAmountXiu.string = (0, _Helper.moneyFormat)(this.room.minBet, true);
        this.setTimeCountDown(this.room.timeCountDown);
        this.setMatchId(msg.displayId);
        this.txtDayWin.string = msg.ThanhDuWin.numberMatchs;
        this.txtDayLose.string = msg.ThanhDuLose.numberMatchs;
      },
      betRequest: function betRequest() {
        var currentText = this.choice == _Constants.TAI_XIU_CHOICE.TAI ? this.textBetInputTai : this.textBetInputXiu;
        this.betAmount = (0, _Helper.moneyToInt)(currentText.string);
        if (this.betAmount <= 0) {
          window.$UIHelper.showToast("H\xe3y ch\u1ecdn m\u1ee9c c\u01b0\u1ee3c!", this.node, -150);
          return;
        }
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.TAI_XIU, {
          type: _Constants.TAI_XIU_ACTION_TYPE.ADD_BET,
          bet: this.betAmount,
          pot: this.choice
        });
        currentText.string = "0";
      },
      getTopUser: function getTopUser() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.TAI_XIU, {
          type: _Constants.TAI_XIU_ACTION_TYPE.GET_TOP_WIN_DAILY,
          chipType: 1
        });
      },
      getUserHistory: function getUserHistory() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.TAI_XIU, {
          type: _Constants.TAI_XIU_ACTION_TYPE.GET_USER_HISTORY
        });
      },
      getRoomHistory: function getRoomHistory() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.TAI_XIU, {
          type: _Constants.TAI_XIU_ACTION_TYPE.GET_ROOM_HISTORY
        });
      },
      getMatchHistory: function getMatchHistory(displayId) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.TAI_XIU, {
          type: _Constants.TAI_XIU_ACTION_TYPE.GET_MATCH_HISTORY,
          display_id: displayId,
          chipType: 1
        });
      },
      onWin: function onWin() {
        this.effectReward.active = true;
      },
      clickDuaTop: function clickDuaTop() {
        this.dialogDuaTop.show();
      },
      playEffect: function playEffect(isTai) {
        if (isTai) {
          this.effectTai.node.active = true;
          this.effectTai.play("EffectTai");
          this.textTai.play("TxtScale");
        } else {
          this.effectXiu.node.active = true;
          this.effectXiu.play("EffectXiu");
          this.textXiu.play("TxtScale");
        }
      },
      stopEffect: function stopEffect() {
        this.effectTai.node.active = false;
        this.effectTai.stop();
        this.textTai.stop();
        this.textTai.node.runAction(cc.scaleTo(1, 1));
        this.effectXiu.node.active = false;
        this.effectXiu.stop();
        this.textXiu.stop();
        this.textXiu.node.runAction(cc.scaleTo(1, 1));
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
  MiniPokerHistoryItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a7a7E8CJZCgYBWJEEd5fcd", "MiniPokerHistoryItem");
    "use strict";
    var _Helper = require("../../Utils/Helper");
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
      setData: function setData(index, data) {
        this.textId.string = data.id;
        this.textTime.string = data.time;
        this.textBet.string = (0, _Helper.moneyFormat)(data.bet, true);
        this.textWin.string = (0, _Helper.moneyFormat)(data.total, true);
        this.textDes.string = data.total < 0 ? "Thua" : "Th\u1eafng";
        this.bg.active = index % 2;
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper"
  } ],
  MiniPokerHuHistoryItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "718b1AK085E8LVUY1NneW4E", "MiniPokerHuHistoryItem");
    "use strict";
    var _Helper = require("../../Utils/Helper");
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
      setData: function setData(index, data) {
        this.textName.string = data.displayName.length > 15 ? data.displayName.substring(0, 13) + "..." : data.displayName;
        this.textTime.string = data.time;
        this.textBet.string = (0, _Helper.moneyFormat)(data.userBet);
        this.textWin.string = (0, _Helper.moneyFormat)(data.win);
        this.bg.active = index % 2;
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper"
  } ],
  MiniSlot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bbed8HyjuROUZRvXVuh+T2o", "MiniSlot");
    "use strict";
    var _lodash = require("lodash");
    var _Constants = require("../../Utils/Constants");
    var _Helper = require("../../Utils/Helper");
    var _JackpotEffect = require("../../SlotGame/JackpotEffect");
    var _JackpotEffect2 = _interopRequireDefault(_JackpotEffect);
    var _Dialog_SelectLine = require("./Dialog_SelectLine");
    var _Dialog_SelectLine2 = _interopRequireDefault(_Dialog_SelectLine);
    var _Dialog_SlotUserHistory = require("./Dialog_SlotUserHistory");
    var _Dialog_SlotUserHistory2 = _interopRequireDefault(_Dialog_SlotUserHistory);
    var _Dialog_SlotJackpotHistory = require("./Dialog_SlotJackpotHistory");
    var _Dialog_SlotJackpotHistory2 = _interopRequireDefault(_Dialog_SlotJackpotHistory);
    var _BaseDialog = require("../Common/BaseDialog");
    var _BaseDialog2 = _interopRequireDefault(_BaseDialog);
    var _MultipleFund = require("../GameList/MultipleFund");
    var _MultipleFund2 = _interopRequireDefault(_MultipleFund);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var BLOCK_HEIGHT = 80;
    var COL_NUM = 3;
    var ROW_NUM = 3;
    var ITEMS_PER_COL = 25;
    var INIT_POS_Y = -80;
    var OFFSET_FIRST_MOVE = 20;
    var MINI_TYPE = {
      SUBSCRIBE_ROOM: 23,
      START_MATCH: 202,
      GET_JACKPOT_HISTORY: 221,
      GET_USER_HISTORY: 222
    };
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
          default: false
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
          type: _JackpotEffect2.default
        },
        listSprites: {
          default: [],
          type: cc.SpriteFrame
        },
        dialogSelectLine: {
          default: null,
          type: _Dialog_SelectLine2.default
        },
        txtLineNum: {
          default: null,
          type: cc.Label
        },
        txtID: {
          default: null,
          type: cc.Label
        },
        dialogUserHistory: {
          default: null,
          type: _Dialog_SlotUserHistory2.default
        },
        dialogJackpotHistory: {
          default: null,
          type: _Dialog_SlotJackpotHistory2.default
        },
        dialogGuide: {
          default: null,
          type: _BaseDialog2.default
        },
        listSlotShow: {
          default: []
        },
        multipleFund: {
          default: null,
          type: _MultipleFund2.default
        }
      },
      onLoad: function onLoad() {
        this.createPool();
        this.genRandomItems();
        this.selectedLines = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
        this.txtLineNum.string = this.selectedLines.length;
      },
      start: function start() {
        this.networkService = window.$Global.networkService;
        this.networkService.on("" + _Constants.REQUEST_TYPE.MINI_SLOT_6, this.onMessage.bind(this));
        this.networkService.on("notify_" + _Constants.NOTIFY_TYPE.NOTIFY_MINI_CHANGED, this.onNotifyMiniChanged.bind(this));
        this.dialogSelectLine.node.on("updateLines", this.updateLines.bind(this));
      },
      onDestroy: function onDestroy() {
        this.networkService.off("" + _Constants.REQUEST_TYPE.MINI_SLOT_6);
        this.networkService.off("notify_" + _Constants.NOTIFY_TYPE.NOTIFY_MINI_CHANGED);
        this.listItemPools.forEach(function(pool) {
          pool.clear();
        });
        this.dialogSelectLine.node.off("updateLines");
      },
      sub: function sub(amount) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_SLOT_6, {
          type: MINI_TYPE.SUBSCRIBE_ROOM,
          chipType: 1,
          bet: amount
        });
        this.stopAuto();
        this.currentBet = amount;
      },
      show: function show() {
        this.sub(100);
        this.node.active = true;
        window.$Global.minigame.isShowMiniSlot_BanCa = true;
      },
      close: function close() {
        this.isAuto && this.stopAuto();
        this.reset();
        this.node.active = false;
        window.$Global.minigame.isShowMiniSlot_BanCa = false;
      },
      createPool: function createPool() {
        for (var i = 0; i < this.listItemPrefabs.length; i++) {
          this.listItemPools[i] = new cc.NodePool();
          for (var j = 0; j < 10; j++) {
            var item = cc.instantiate(this.listItemPrefabs[i]);
            item.index = i;
            this.listItemPools[i].put(item);
          }
        }
      },
      genRandomItems: function genRandomItems() {
        for (var i = 0; i < COL_NUM; i++) {
          var column = this.listColumns[i];
          for (var j = 0; j < ITEMS_PER_COL; j++) {
            var index = (0, _lodash.random)(0, this.listItemPrefabs.length - 1, false);
            var newItem = this.listItemPools[index].get();
            if (null == newItem) {
              newItem = cc.instantiate(this.listItemPrefabs[index]);
              newItem.index = index;
            }
            newItem.y = j * BLOCK_HEIGHT;
            column.addChild(newItem);
          }
        }
      },
      onMessage: function onMessage(event) {
        var detail = event;
        if (detail.resultCode === _Constants.ResponseResultCode.SUCCESS) detail.type === MINI_TYPE.GET_JACKPOT_HISTORY ? this.onJackpotHistoryDone(detail.history) : detail.type === MINI_TYPE.GET_USER_HISTORY ? this.onUserHistoryDone(detail.history) : detail.type === MINI_TYPE.START_MATCH ? this.onSpinDone(detail) : detail.type === MINI_TYPE.SUBSCRIBE_ROOM && this.updateJackpot(detail.jackpot); else {
          window.$UIHelper.showToast(detail.desc || detail.content || "");
          this.spinBtn.interactable = true;
        }
      },
      reset: function reset() {
        this.duration = 1;
        this.speedToggle.isChecked = false;
        this.isAuto = false;
        this.autoToggle.isChecked = false;
        this.spinBtn.interactable = true;
        this.betToggles.toggleItems[0].check();
        this.txtID.string = "";
      },
      onBetChanged: function onBetChanged(event, amount) {
        this.sub(amount);
      },
      spin: function spin() {
        if (0 === this.selectedLines.length) {
          window.$UIHelper.showToast("Vui l\xf2ng ch\u1ecdn d\xf2ng");
          return;
        }
        this.spinBtn.interactable = false;
        var line = this.selectedLines;
        var deal = 1;
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_SLOT_6, {
          type: MINI_TYPE.START_MATCH,
          deal: deal,
          line: line
        });
        this.jackpotEffect.hide();
        this.listSlotShow.forEach(function(slot) {
          slot.getComponent(cc.Animation).stop();
          slot.children[0].runAction(cc.scaleTo(1, 1));
        });
        this.listSlotShow = [];
      },
      onSpinDone: function onSpinDone(spinResultData) {
        this.slotsResult = spinResultData.result.slots.faces;
        this.payLines = spinResultData.result.payLines;
        this.winChips = spinResultData.result.winChips;
        this.isWinJackpot = spinResultData.result.isWinJackpot;
        this.jackpot = spinResultData.jackpot;
        this.setSpinID(spinResultData.spinID);
        this.resetPosition();
        this._setOldResult();
        this.roll();
      },
      resetPosition: function resetPosition() {
        for (var i = 0; i < COL_NUM; i++) {
          var col = this.listColumns[i];
          col.y = INIT_POS_Y;
        }
      },
      roll: function roll() {
        var moveHeight = (ITEMS_PER_COL - 3) * BLOCK_HEIGHT + OFFSET_FIRST_MOVE;
        for (var index = 0; index < COL_NUM; index++) {
          var delay = cc.delayTime(.1 * index);
          var line = this.listColumns[index];
          index === COL_NUM - 1 ? line.runAction(cc.sequence(delay, cc.moveBy(.1, 0, OFFSET_FIRST_MOVE), cc.moveBy(this.duration, 0, -moveHeight), cc.callFunc(this.finishRoll, this))) : line.runAction(cc.sequence(delay, cc.moveBy(.1, 0, OFFSET_FIRST_MOVE), cc.moveBy(this.duration, 0, -moveHeight)));
        }
      },
      finishRoll: function finishRoll() {
        this.oldsResult = this.slotsResult;
        var _lines = this.payLines.map(function(pl) {
          return pl.line;
        });
        this.blinkWinLines(_lines);
        this.showWinSlotsEffect();
        this.showResult();
      },
      onSpeedChanged: function onSpeedChanged() {
        this.duration = this.speedToggle.isChecked ? .5 : 1;
      },
      updateJackpot: function updateJackpot(jackpot) {
        (0, _Helper.runNumber)(this.txtJackpot, jackpot);
      },
      setOldResult: function setOldResult() {
        if (0 === this.oldsResult.length) {
          this.setResult();
          return;
        }
        for (var indexRow = 0; indexRow < ROW_NUM; indexRow++) for (var indexCol = 0; indexCol < COL_NUM; indexCol++) {
          var rowIndex = 2 - indexRow;
          var col = this.listColumns[indexCol];
          var oldSlot = col.children[rowIndex];
          var newSlot = col.children[rowIndex + ITEMS_PER_COL - 3];
          var temp = newSlot.y;
          newSlot.y = oldSlot.y;
          oldSlot.y = temp;
          col.children[rowIndex] = newSlot;
          col.children[rowIndex + ITEMS_PER_COL - 3] = oldSlot;
          indexRow === ROW_NUM - 1 && indexCol === COL_NUM - 1 && this.setResult();
        }
      },
      _setOldResult: function _setOldResult() {
        if (0 === this.oldsResult.length) {
          this.setResult();
          return;
        }
        for (var indexRow = 0; indexRow < ROW_NUM; indexRow++) for (var indexCol = 0; indexCol < COL_NUM; indexCol++) {
          var rowIndex = 2 - indexRow;
          var col = this.listColumns[indexCol];
          var slot = col.children[rowIndex];
          var iconIndex = this.oldsResult[indexRow][indexCol] - 1;
          slot.children[0].getComponent(cc.Sprite).spriteFrame = this.listSprites[iconIndex];
          indexRow === ROW_NUM - 1 && indexCol === COL_NUM - 1 && this.setResult();
        }
      },
      setResult: function setResult() {
        if (0 === this.slotsResult.length) return;
        for (var indexCol = 0; indexCol < COL_NUM; indexCol++) {
          var col = this.listColumns[indexCol];
          var childrenCount = col.childrenCount;
          var listSlotNeedAdd = [];
          for (var indexRow = 0; indexRow < ROW_NUM; indexRow++) {
            var iconIndex = this.slotsResult[indexRow][indexCol] - 1;
            var slot = col.children[childrenCount - indexRow - 1];
            var newY = slot.y;
            this.listItemPools[slot.index].put(slot);
            var newSlot = this.listItemPools[iconIndex].get();
            if (null == newSlot) {
              newSlot = cc.instantiate(this.listItemPrefabs[iconIndex]);
              newSlot.index = iconIndex;
            }
            newSlot.y = newY;
            listSlotNeedAdd.push(newSlot);
            this.listSlotShow[indexRow * COL_NUM + indexCol] = newSlot;
          }
          for (var index = listSlotNeedAdd.length - 1; index >= 0; index--) {
            var element = listSlotNeedAdd[index];
            col.addChild(element);
          }
        }
      },
      blinkWinLines: function blinkWinLines(lines) {
        var _this = this;
        var _loop = function _loop(i) {
          var lineNum = lines[i];
          var line = _this.lines.children[lineNum - 1];
          line.active = true;
          setTimeout(function() {
            line.active = false;
          }, 2e3);
        };
        for (var i = 0; i < lines.length; i++) _loop(i);
      },
      showResult: function showResult() {
        this.networkService.updateMoneyWithZoneId(_Constants.ZONE_ID.MINI_SLOT_BANCA);
        if (this.isWinJackpot) {
          this.jackpotEffect.show(this.winChips);
          this.stopAuto();
        } else this.winChips > 0 ? this.showWinChip(this.winChips) : this.onShowWinDone();
        this.updateJackpot(this.jackpot);
        this.isAuto || (this.spinBtn.interactable = true);
      },
      showWinChip: function showWinChip(chip) {
        this.winNode.active = true;
        this.winNode.children[0].getComponent(cc.Label).string = (0, _Helper.numberWithDot)(chip);
        var hide = function hide() {
          this.winNode.active = false;
        };
        this.winNode.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(hide.bind(this)), cc.callFunc(this.onShowWinDone.bind(this))));
      },
      onShowWinDone: function onShowWinDone() {
        this.isAuto && this.spin();
      },
      autoClick: function autoClick() {
        if (this.isAuto) {
          this.isAuto = false;
          this.spinBtn.interactable = true;
        } else {
          this.isAuto = true;
          this.spinBtn.interactable && this.spin();
        }
      },
      stopAuto: function stopAuto() {
        this.autoToggle.isChecked = false;
        this.isAuto = false;
      },
      updateLines: function updateLines(lines) {
        this.selectedLines = lines;
        this.txtLineNum.string = this.selectedLines.length;
      },
      showSelectLine: function showSelectLine() {
        this.dialogSelectLine.show();
      },
      showUserHistory: function showUserHistory() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_SLOT_6, {
          type: MINI_TYPE.GET_USER_HISTORY
        });
        this.dialogUserHistory.show();
      },
      onUserHistoryDone: function onUserHistoryDone(historys) {
        this.dialogUserHistory.setData(historys);
      },
      showJackpotHistory: function showJackpotHistory() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.MINI_SLOT_6, {
          type: MINI_TYPE.GET_JACKPOT_HISTORY
        });
        this.dialogJackpotHistory.show();
      },
      onJackpotHistoryDone: function onJackpotHistoryDone(historys) {
        this.dialogJackpotHistory.setData(historys);
      },
      showGuide: function showGuide() {
        this.dialogGuide.show();
      },
      setSpinID: function setSpinID(id) {
        this.txtID.string = "#" + id;
      },
      showWinSlotsEffect: function showWinSlotsEffect() {
        var listIndexToShow = [];
        this.payLines.forEach(function(line) {
          line.matched.forEach(function(match) {
            listIndexToShow.indexOf(match) < 0 && listIndexToShow.push(match);
          });
        });
        for (var index = 0; index < listIndexToShow.length; index++) {
          var i = listIndexToShow[index];
          var slot = this.listSlotShow[i];
          slot.getComponent(cc.Animation).play("scale");
        }
      },
      onNotifyMiniChanged: function onNotifyMiniChanged(event) {
        if (event.zoneId == _Constants.ZONE_ID.MINI_SLOT_BANCA && event.bet == this.currentBet) {
          this.updateJackpot(event.jackpot);
          this.multipleFund.setMultipleFund(event.multipleFund);
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
  MinigameLobbyItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5888cBzP3hB8biYUanPRloC", "MinigameLobbyItem");
    "use strict";
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
      setMultipleFund: function setMultipleFund(multipleFund) {
        if (multipleFund > 1) {
          this.multipleAnim.node.active = true;
          this.multipleAnim.play();
        } else {
          this.multipleAnim.stop();
          this.multipleAnim.node.active = false;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Minigame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f795b5nJdHJ4u7ch0JtSzk", "Minigame");
    "use strict";
    var _MiniGameMiniPoker = require("../MiniPoker/MiniGameMiniPoker");
    var _MiniGameMiniPoker2 = _interopRequireDefault(_MiniGameMiniPoker);
    var _MiniGameTaiXiu = require("../TaiXiu/MiniGameTaiXiu");
    var _MiniGameTaiXiu2 = _interopRequireDefault(_MiniGameTaiXiu);
    var _MiniSlot = require("../MiniSlot/MiniSlot");
    var _MiniSlot2 = _interopRequireDefault(_MiniSlot);
    var _DragAndDrop = require("../../Utils/DragAndDrop");
    var _DragAndDrop2 = _interopRequireDefault(_DragAndDrop);
    var _CaoThap = require("../CaoThap/CaoThap");
    var _CaoThap2 = _interopRequireDefault(_CaoThap);
    var _MiniBaCay = require("../Mini3Kay/MiniBaCay");
    var _MiniBaCay2 = _interopRequireDefault(_MiniBaCay);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
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
          type: _MiniGameMiniPoker2.default
        },
        miniGameTaiXiu: {
          default: null,
          type: _MiniGameTaiXiu2.default
        },
        btnMinigame: {
          default: null,
          type: _DragAndDrop2.default
        },
        miniGameBauCua: {
          default: null,
          type: cc.Node
        },
        miniSlot_BanCa: {
          default: null,
          type: _MiniSlot2.default
        },
        caoThap: {
          default: null,
          type: _CaoThap2.default
        },
        miniBaCay: {
          default: null,
          type: _MiniBaCay2.default
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        this.isShowMiniGames = false;
        this.currentScene = cc.director.getScene()._name;
        "Login" == this.currentScene && (this.minigameMenu.active = false);
        this.childrenCount = this.node.childrenCount;
        this.node.children.forEach(function(child) {
          child.on(cc.Node.EventType.TOUCH_START, function(event) {
            _this.setSibling(child);
          });
        });
      },
      onClickMiniGame: function onClickMiniGame() {
        if (this.btnMinigame.isMoving) return;
        this.isShowMiniGames ? this.hideMiniGames() : this.showMiniGames();
      },
      showMiniGames: function showMiniGames() {
        this.isShowMiniGames = true;
        this.animMinigameMenu.play("ShowMinigame");
      },
      hideMiniGames: function hideMiniGames() {
        this.isShowMiniGames = false;
        this.animMinigameMenu.play("HideMinigame");
      },
      showTaiXiu: function showTaiXiu() {
        if ("Login" == this.currentScene) return;
        if (!this.miniGameTaiXiu.node.active) {
          this.miniGameTaiXiu.node.setPosition(0, 0);
          this.miniGameTaiXiu.node.setScale(.7, .7);
          this.miniGameTaiXiu.show();
        }
        this.isShowMiniGames && this.hideMiniGames();
        window.$Global.minigame.isShowTaixiu = true;
        this.setSibling(this.miniGameTaiXiu.node);
      },
      showMiniPoker: function showMiniPoker() {
        if ("Login" == this.currentScene) return;
        if (!this.miniGameMiniPoker.node.active) {
          this.miniGameMiniPoker.node.setScale(.7, .7);
          this.miniGameMiniPoker.show();
        }
        this.isShowMiniGames && this.hideMiniGames();
        window.$Global.minigame.isShowMinipoker = true;
        this.setSibling(this.miniGameMiniPoker.node);
      },
      showBauCua: function showBauCua() {
        if ("Login" == this.currentScene) return;
        if (!this.miniGameBauCua.active) {
          this.miniGameBauCua.setScale(.7, .7);
          this.miniGameBauCua.getComponent("MiniBauCua").show();
        }
        this.isShowMiniGames && this.hideMiniGames();
        window.$Global.minigame.isShowBaucua = true;
        this.setSibling(this.miniGameBauCua);
      },
      showGameComingSoon: function showGameComingSoon() {
        window.$UIHelper.showToast("Game s\u1eafp ra m\u1eaft");
      },
      showMiniSlot_BanCa: function showMiniSlot_BanCa() {
        if ("Login" == this.currentScene) return;
        if (!this.miniSlot_BanCa.node.active) {
          this.miniSlot_BanCa.node.setScale(.7, .7);
          this.miniSlot_BanCa.show();
        }
        this.isShowMiniGames && this.hideMiniGames();
        this.setSibling(this.miniSlot_BanCa.node);
      },
      showCaoThap: function showCaoThap() {
        if ("Login" == this.currentScene) return;
        if (!this.caoThap.node.active) {
          this.caoThap.node.setScale(.7, .7);
          this.caoThap.show();
        }
        this.isShowMiniGames && this.hideMiniGames();
        this.setSibling(this.caoThap.node);
      },
      showMiniBaCay: function showMiniBaCay() {
        if ("Login" == this.currentScene) return;
        if (!this.miniBaCay.node.active) {
          this.miniBaCay.node.setScale(.7, .7);
          this.miniBaCay.show();
        }
        this.isShowMiniGames && this.hideMiniGames();
        this.setSibling(this.miniBaCay.node);
      },
      setSibling: function setSibling(node) {
        node.setSiblingIndex(this.childrenCount - 1);
        var nodeName = node.name;
        if ("MinigameMenu" !== nodeName && "Jackpot" !== nodeName) {
          node.runAction(cc.scaleTo(.1, 1, 1));
          this.node.children.forEach(function(child) {
            true === child.active && child.name !== nodeName && "MinigameMenu" !== child.name && "Jackpot" !== child.name && child.runAction(cc.scaleTo(.1, .7, .7));
          });
        }
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/DragAndDrop": "DragAndDrop",
    "../CaoThap/CaoThap": "CaoThap",
    "../Mini3Kay/MiniBaCay": "MiniBaCay",
    "../MiniPoker/MiniGameMiniPoker": "MiniGameMiniPoker",
    "../MiniSlot/MiniSlot": "MiniSlot",
    "../TaiXiu/MiniGameTaiXiu": "MiniGameTaiXiu"
  } ],
  MultipleFund: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "acb8bhOQNlOMJv2kkXc8WET", "MultipleFund");
    "use strict";
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
        }
      },
      setMultipleFund: function setMultipleFund(multipleFund) {
        if (multipleFund > 1) {
          var index = multipleFund / 2 - 1;
          this.multipleSprite.spriteFrame = this.listMultipleFrames[index];
          this.node.active = true;
          this.multipleAnim.play();
        } else {
          this.multipleAnim.stop();
          this.node.active = false;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  NetworkService: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc651wgXt1OeaMpR0pVjd+e", "NetworkService");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _class;
    var _qs = require("qs");
    var _qs2 = _interopRequireDefault(_qs);
    var _msgpackLite = require("msgpack-lite");
    var _msgpackLite2 = _interopRequireDefault(_msgpackLite);
    var _Config = require("../Configs/Config");
    var _Constants = require("../Utils/Constants");
    var _Helper = require("../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, property = _cc$_decorator.property;
    var WebSocket = WebSocket || window.WebSocket || window.MozWebSocket;
    var NetworkService = ccclass(_class = function(_cc$Component) {
      _inherits(NetworkService, _cc$Component);
      function NetworkService() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, NetworkService);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NetworkService.__proto__ || Object.getPrototypeOf(NetworkService)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.handler = null, _this.handlersByTypes = [], _this.data = {}, _temp), 
        _possibleConstructorReturn(_this, _ret);
      }
      _createClass(NetworkService, [ {
        key: "onLoad",
        value: function onLoad() {
          this.connectGame();
        }
      }, {
        key: "start",
        value: function start() {
          this.node.on("" + _Constants.REQUEST_TYPE.AUTH, this.onLogin.bind(this));
          this.node.on("notify_" + _Constants.NOTIFY_TYPE.UPDATE_MONEY, this.onUpdateMoney.bind(this));
          this.node.on("notify_" + _Constants.NOTIFY_TYPE.NAPCARD_NOTIFY, this.onNotifyRechargeCard.bind(this));
          this.node.on("notify_" + _Constants.NOTIFY_TYPE.SESSION_KICKED_BY_OTHER_LOGIN, this.onNotifyOtherLogin.bind(this));
          this.currentGoldClient = 0;
          this.currentGoldServers = [];
          this.goldChanges = [];
        }
      }, {
        key: "onDestroy",
        value: function onDestroy() {
          this.node.off("" + _Constants.REQUEST_TYPE.AUTH);
          this.node.off("" + _Constants.REQUEST_TYPE.UPDATE_MONEY);
          this.node.off("" + _Constants.REQUEST_TYPE.NAPCARD_NOTIFY);
          this.node.off("" + _Constants.REQUEST_TYPE.SESSION_KICKED_BY_OTHER_LOGIN);
        }
      }, {
        key: "connectGame",
        value: function connectGame() {
          var _this2 = this;
          this.getVersionCfg().then(this.getApiToken()).then(function() {
            return _this2.connectWs();
          }).catch(function(err) {
            window.$UIHelper.showToast("K\u1ebft n\u1ed1i th\u1ea5t b\u1ea1i! Vui l\xf2ng th\u1eed l\u1ea1i");
          });
        }
      }, {
        key: "setHandler",
        value: function setHandler(newHandler) {
          this.handler = newHandler;
        }
      }, {
        key: "addHandlersForType",
        value: function addHandlersForType(type, newHandler) {
          this.handlersByTypes[type] || (this.handlersByTypes[type] = []);
          this.handlersByTypes[type].push(newHandler);
        }
      }, {
        key: "clearHandlersForType",
        value: function clearHandlersForType(type) {
          this.handlersByTypes[type] = [];
        }
      }, {
        key: "removeHandlersForType",
        value: function removeHandlersForType(type, newHandler) {
          if (null != this.handlersByTypes[type]) {
            var index = this.handlersByTypes[type].indexOf(newHandler);
            index > -1 && this.handlersByTypes[type].splice(index, 1);
          }
        }
      }, {
        key: "emit",
        value: function emit(topic, data) {
          this.node.emit(topic, data);
        }
      }, {
        key: "on",
        value: function on(topic, action, prefix) {
          this.node.on(prefix ? prefix + "_" + topic : topic, action);
        }
      }, {
        key: "once",
        value: function once(topic, action) {
          this.node.once(topic, action);
        }
      }, {
        key: "off",
        value: function off(topic, action, prefix) {
          this.node.off(prefix ? prefix + "_" + topic : topic, action);
        }
      }, {
        key: "connectWs",
        value: function connectWs() {
          try {
            var url = _Config.CONFIG.WS.ws;
            ("https:" == window.location.protocol || cc.sys.isNative) && (url = _Config.CONFIG.WS.wss);
            this.socket = new WebSocket(url);
            cc.log("test url ", url);
            url === _Config.CONFIG.WS.wss && cc.sys.isNative && (this.socket = new WebSocket(url, null, cc.url.raw("resources/raw/cacert.pem")));
            this.socket.binaryType = "arraybuffer";
            this.socket.onopen = this.wsOpen.bind(this);
            this.socket.onmessage = this.wsMessage.bind(this);
            this.socket.onerror = this.wsError.bind(this);
            this.socket.onclose = this.wsClose.bind(this);
          } catch (err) {
            cc.error("Can not connect to server ws. Retry after 5s");
            setTimeout(this.connectWs.bind(this), 5e3);
          }
        }
      }, {
        key: "wsOpen",
        value: function wsOpen(event) {
          this.socketConnected = true;
          cc.log("WS open");
          window.$UIHelper.showLoading(false);
          this.emit("socketOpen");
          "Login" != cc.director.getScene()._name && this.wsSendLogin(this.userLogin);
        }
      }, {
        key: "wsMessage",
        value: function wsMessage(event) {
          var data = event.data;
          if (data instanceof ArrayBuffer) {
            var view = new DataView(data);
            var calltype = view.getInt8(0);
            if (calltype === _Constants.CALL_TYPE.RESPONSE) {
              var requestType = view.getInt8(1);
              var resultCode = view.getInt8(2);
              var reserved = view.getInt8(3);
              var payloadType = view.getInt8(4);
              var payLoadBytesLength = view.getUint32(5, false);
              var packed = new Uint8Array(data, 9);
              var unpackedMessage = _msgpackLite2.default.decode(packed);
              "number" == typeof unpackedMessage || (unpackedMessage.resultCode = resultCode);
              cc.log("RESPONSE:", this.getKey(requestType, _Constants.REQUEST_TYPE), resultCode);
              cc.log(unpackedMessage);
              if (this.handler) {
                this.handler.emit("" + requestType, unpackedMessage);
                this.handlersByTypes[requestType] && this.handlersByTypes[requestType].forEach(function(aHandler) {
                  aHandler.emit("" + requestType, unpackedMessage);
                });
              } else this.node.emit("" + requestType, unpackedMessage);
            } else if (calltype === _Constants.CALL_TYPE.UPDATE) {
              var notifyType = view.getInt8(1);
              var _reserved = view.getInt8(2);
              var _payloadType = view.getInt8(3);
              var _payLoadBytesLength = view.getUint32(4, false);
              var _packed = new Uint8Array(data, 8);
              var _unpackedMessage = _msgpackLite2.default.decode(_packed);
              if (this.handler) {
                this.handler.emit("notify_" + notifyType, _unpackedMessage);
                this.handlersByTypes[notifyType] && this.handlersByTypes[notifyType].forEach(function(aHandler) {
                  aHandler.emit("notify_" + notifyType, _unpackedMessage);
                });
              } else this.node.emit("notify_" + notifyType, _unpackedMessage);
            } else {
              cc.error("calltype error", calltype);
              this.handler && this.handler.emit("" + calltype);
            }
          }
        }
      }, {
        key: "wsError",
        value: function wsError(event) {
          cc.log("WebSocket error", event);
          if ("Login" != cc.director.getScene()._name) {
            clearInterval(this.sendKeepAlive);
            cc.director.loadScene("Login", this.connectGame.bind(this));
          }
        }
      }, {
        key: "wsClose",
        value: function wsClose(event) {
          this.socketConnected = false;
          cc.log("WebSocket instance closed.", event);
          cc.log("Try to open ws.");
          clearInterval(this.sendKeepAlive);
          setTimeout(this.connectWs.bind(this), 3e3);
        }
      }, {
        key: "wsSend",
        value: function wsSend(topic, data, isPromise) {
          var _this3 = this;
          if (!this.socketConnected) return;
          this.ws.send(JSON.stringify(data));
          if (isPromise) return new Promise(function(resolve, reject) {
            _this3.ws.onmessage = function(event) {
              resolve(event.data);
            };
          });
        }
      }, {
        key: "getVersionCfg",
        value: function getVersionCfg() {
          var _this4 = this;
          return new Promise(function(resolve, reject) {
            _this4.sendRequestXHR(_Config.CONFIG.URLS.server + _Config.CONFIG.API.PATHS.versionCfg, "POST", _qs2.default.stringify({
              os_type: _Config.CONFIG.INFO.osType,
              version: _Config.CONFIG.INFO.osVersion,
              providerCode: _Config.CONFIG.INFO.providerCode
            }), {
              "Content-type": "application/x-www-form-urlencoded"
            }).then(function(response) {
              cc.log("GET_VERSION_CONFIG");
              cc.log(response);
              var status = response.status;
              if (status === _Constants.ResponseResultCode.SUCCESS) {
                var versionCfg = response.data;
                window.$Global.CONFIG.VERSION = versionCfg;
                var latest_version = versionCfg.latest_version;
                var supported_versions = versionCfg.supported_versions;
                var download_url = versionCfg.download_url;
                if (supported_versions) if (supported_versions.indexOf(_Config.CONFIG.INFO.clientVersion) < 0) {
                  window.$Global.forceUpdate = true;
                  var textContent = "\u0110\xe3 c\xf3 phi\xean b\u1ea3n m\u1edbi c\u1ee7a " + _Config.CONFIG.INFO.gameName + ", b\u1ea1n c\u1ea7n ph\u1ea3i c\u1eadp nh\u1eadt phi\xean b\u1ea3n m\u1edbi nh\u1ea5t \u0111\u1ec3 c\xf3 th\u1ec3 ti\u1ebfp t\u1ee5c ch\u01a1i!";
                  window.$UIHelper.showPopup(textContent, function() {
                    cc.sys.openURL(download_url);
                  }, false, false);
                } else {
                  window.$Global.needUpdate = true;
                  var currVer = _Config.CONFIG.INFO.clientVersion.replace(".", "");
                  var lastVer = latest_version.replace(".", "");
                  if (currVer < lastVer) {
                    var textContent = "\u0110\xe3 c\xf3 phi\xean b\u1ea3n m\u1edbi c\u1ee7a " + _Config.CONFIG.INFO.gameName + ", b\u1ea1n n\xean c\u1eadp nh\u1eadt phi\xean b\u1ea3n m\u1edbi nh\u1ea5t!";
                    window.$UIHelper.showPopup(textContent, function() {
                      cc.sys.openURL(download_url);
                    }, true);
                  }
                }
              }
              resolve(response);
            }).catch(function(error) {
              cc.log(error);
            });
          });
        }
      }, {
        key: "getConfigByKey",
        value: function getConfigByKey(key) {
          var _this5 = this;
          return new Promise(function(resolve, reject) {
            _this5.sendRequestXHR(_Config.CONFIG.URLS.server + _Config.CONFIG.API.PATHS.config, "POST", _qs2.default.stringify({
              config_key: key
            }), {
              "Content-type": "application/x-www-form-urlencoded"
            }).then(function(response) {
              cc.log("GET_CONFIG: " + key);
              cc.log(response);
              resolve(response);
            }).catch(function(error) {
              cc.log(error);
            });
          });
        }
      }, {
        key: "getApiToken",
        value: function getApiToken() {
          return new Promise(function(resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (4 == xhttp.readyState && 200 == xhttp.status) {
                var response = JSON.parse(xhttp.responseText);
                cc.log("GET API TOKEN");
                cc.log(response);
                var token = response.data;
                window.$Global.CONFIG.token = token;
                resolve(token);
              } else cc.log(xhttp.statusText);
            };
            var url = _Config.CONFIG.URLS.server + _Config.CONFIG.API.PATHS.initialize + "?api_key=" + _Config.CONFIG.API.AUTH.key + "&api_secret=" + _Config.CONFIG.API.AUTH.secret;
            xhttp.open("GET", url, true);
            xhttp.send();
          });
        }
      }, {
        key: "getResource",
        value: function getResource(url, params) {
          var _this6 = this;
          return new Promise(function(resolve, reject) {
            _this6.sendRequestXHR(_Config.CONFIG.URLS.server + url, "POST", params, {
              token: window.$Global.CONFIG.token
            }).then(function(response) {
              resolve(response.data);
            }).catch(function(error) {
              cc.log(error);
            });
          });
        }
      }, {
        key: "checkServerStatus",
        value: function checkServerStatus() {}
      }, {
        key: "sendRequestXHR",
        value: function sendRequestXHR(url, method, params, headers, callback, onError) {
          return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
              if (4 == xhr.readyState && xhr.status >= 200 && xhr.status < 400) {
                var response = JSON.parse(xhr.responseText);
                callback && callback(response);
                resolve(response);
              } else onError && onError(xhr);
            };
            xhr.open(method, url, true);
            for (var propertyName in headers) xhr.setRequestHeader(propertyName, headers[propertyName]);
            xhr.send(params);
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin(event) {
          if (event.resultCode === _Constants.ResponseResultCode.SUCCESS) {
            this.userInfo = event.desc;
            window.$Global.userService.onLogin(this.userInfo);
            this.sessionid = event.sessionid;
            this.node.emit("login", this.userInfo);
            this.keepAlive();
          }
        }
      }, {
        key: "wsSendLoginFacebook",
        value: function wsSendLoginFacebook(userInfo) {
          this.userLogin = userInfo;
          var data = {
            fbToken: userInfo.accessoken,
            refcode: userInfo.refcode,
            provider_code: _Config.CONFIG.INFO.providerCode,
            client_version: _Config.CONFIG.INFO.clientVersion,
            platform: _Config.CONFIG.INFO.platform,
            model: "",
            device_uuid: "",
            g2fa: userInfo.g2fa,
            loginType: 2,
            os_version: _Config.CONFIG.INFO.osVersion,
            apiKey: _Config.CONFIG.API.AUTH.key
          };
          this.sendMessage(_Constants.REQUEST_TYPE.AUTH, data);
        }
      }, {
        key: "wsSendLogin",
        value: function wsSendLogin(userInfo) {
          this.userLogin = userInfo;
          var data = {
            username: userInfo.username,
            refcode: userInfo.refcode,
            password: userInfo.password,
            provider_code: _Config.CONFIG.INFO.providerCode,
            client_version: _Config.CONFIG.INFO.clientVersion,
            platform: _Config.CONFIG.INFO.platform,
            model: "",
            device_uuid: "",
            g2fa: userInfo.g2fa,
            loginType: 1,
            os_version: _Config.CONFIG.INFO.osVersion,
            apiKey: _Config.CONFIG.API.AUTH.key
          };
          this.sendMessage(_Constants.REQUEST_TYPE.AUTH, data);
        }
      }, {
        key: "keepAlive",
        value: function keepAlive() {
          var _this7 = this;
          this.sendKeepAlive = setInterval(function() {
            _this7.sendMessage(_Constants.REQUEST_TYPE.SEND_KEEP_ALIVE, {});
          }, 4e3);
        }
      }, {
        key: "registerAccount",
        value: function registerAccount(userInfo) {
          var _this8 = this;
          var headers = {};
          headers["content-type"] = "application/x-www-form-urlencoded";
          headers["token"] = window.$Global.CONFIG.token;
          var data = {
            username: userInfo.username,
            mobile: userInfo.mobile,
            refcode: userInfo.refcode,
            password: userInfo.password,
            full_name: userInfo.full_name,
            provider_code: _Config.CONFIG.INFO.providerCode,
            client_version: _Config.CONFIG.INFO.clientVersion,
            platform: _Config.CONFIG.INFO.platform,
            model: _Config.CONFIG.INFO.model,
            device_uuid: _Config.CONFIG.INFO.deviceId
          };
          return new Promise(function(resolve, reject) {
            _this8.sendRequestXHR(_Config.CONFIG.URLS.server + _Config.CONFIG.API.PATHS.register, "POST", _qs2.default.stringify(data), headers).then(function(response) {
              cc.log(JSON.stringify(response));
              resolve(response);
            }).catch(function(error) {
              cc.error(JSON.stringify(error));
            });
          });
        }
      }, {
        key: "getListGames",
        value: function getListGames() {
          var _this9 = this;
          this.sendMessage(_Constants.REQUEST_TYPE.LIST_GAMES);
          this.once("" + _Constants.REQUEST_TYPE.LIST_GAMES, function(event) {
            _this9.games = event.games;
            _this9.getListLobby();
          });
        }
      }, {
        key: "getListLobby",
        value: function getListLobby() {
          var _this10 = this;
          this.sendMessage(_Constants.REQUEST_TYPE.LIST_LOBBIES, {
            gameId: -1
          });
          this.once("" + _Constants.REQUEST_TYPE.LIST_LOBBIES, function(event) {
            _this10.lobbies = event.lobbies;
          });
        }
      }, {
        key: "subcribeGame",
        value: function subcribeGame(gameId) {
          this.sendMessage(_Constants.REQUEST_TYPE.SUBSCRIBE_GAME, {
            gameId: gameId
          });
        }
      }, {
        key: "subcribeGameSlot",
        value: function subcribeGameSlot() {
          this.sendMessage(_Constants.REQUEST_TYPE.SUBSCRIBE_GAME, {
            gameId: _Constants.GAMES.SLOT
          });
        }
      }, {
        key: "joinLobby",
        value: function joinLobby(lobbyId) {
          this.sendMessage(_Constants.REQUEST_TYPE.JOIN_LOBBY, {
            lobbyId: lobbyId
          });
        }
      }, {
        key: "subcribeLobby",
        value: function subcribeLobby(lobbyId) {
          this.sendMessage(_Constants.REQUEST_TYPE.SUBSCRIBE_LOBBY, {
            lobbyId: lobbyId
          });
        }
      }, {
        key: "leaveLobby",
        value: function leaveLobby(lobbyId) {
          this.sendMessage(_Constants.REQUEST_TYPE.LEAVE_LOBBY, {
            lobbyId: lobbyId
          });
        }
      }, {
        key: "unsubscribeLobby",
        value: function unsubscribeLobby(lobbyId) {
          this.sendMessage(_Constants.REQUEST_TYPE.UNSUBSCRIBE_LOBBY, {
            lobbyId: lobbyId
          });
        }
      }, {
        key: "getRooms",
        value: function getRooms() {
          this.sendMessage(_Constants.REQUEST_TYPE.GET_ROOMS, {
            lobbyId: this.zoneId
          });
        }
      }, {
        key: "joinRoom",
        value: function joinRoom(bet) {
          this.sendMessage(_Constants.REQUEST_TYPE.JOIN_ROOM, {
            bet: bet,
            type: _Constants.MONEY_TYPE.GOLD
          });
        }
      }, {
        key: "leaveRoom",
        value: function leaveRoom() {
          this.sendMessage(_Constants.REQUEST_TYPE.LEAVE_ROOM, {
            roomId: this.roomId
          });
        }
      }, {
        key: "getBXHHu",
        value: function getBXHHu() {
          this.sendMessage(_Constants.REQUEST_TYPE.UPDATE_PEERS, {
            type: _Constants.REQUEST_TYPE.GET_JACKPOT_HISTORY
          });
        }
      }, {
        key: "getHistory",
        value: function getHistory() {
          this.sendMessage(_Constants.REQUEST_TYPE.UPDATE_PEERS, {
            type: _Constants.REQUEST_TYPE.GET_USER_HISTORY
          });
        }
      }, {
        key: "spin",
        value: function spin(deal, line) {
          var data = {
            type: _Constants.REQUEST_TYPE.START_MATCH,
            deal: deal,
            line: line
          };
          cc.log(data);
          this.sendMessage(_Constants.REQUEST_TYPE.UPDATE_PEERS, data);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(requestType) {
          var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var calltype = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          if (!this.socket || !this.socketConnected) {
            cc.error("Not setup socket yet!");
            return;
          }
          cc.log("SENT:", this.getKey(requestType, _Constants.REQUEST_TYPE));
          var dataBytes = _msgpackLite2.default.encode(data);
          var requestId = 0;
          var reserved = 0;
          var payloadType = 3;
          var payLoadBytesLength = dataBytes.length;
          var dataviewLength = 16 + payLoadBytesLength;
          var dataViewBuffer = new ArrayBuffer(dataviewLength);
          var view = new DataView(dataViewBuffer);
          view.setUint8(0, calltype);
          view.setUint8(1, requestType);
          view.setUint32(2, this.sessionid, false);
          view.setUint32(6, requestId, false);
          view.setUint8(10, reserved);
          view.setUint8(11, payloadType);
          view.setUint32(12, payLoadBytesLength, false);
          for (var index = 0; index < dataBytes.length; index++) view.setUint8(index + 16, dataBytes[index]);
          this.socket.send(dataViewBuffer);
        }
      }, {
        key: "getKey",
        value: function getKey(value, arr) {
          for (var key in arr) if (arr[key] == value) return key;
          return null;
        }
      }, {
        key: "onUpdateMoney",
        value: function onUpdateMoney(event) {
          var data = event;
          this.userInfo && (this.userInfo.gold = data.total);
          var goldName = _Constants.CONFIG_GOLD.goldName;
          var gameName = _Constants.CONFIG_GOLD.gameName;
          var change = (0, _Helper.moneyFormat)(data.change, true);
          var textContent = "";
          if (data.type == _Constants.UpdateMoneyTypeCode.HIDDEN_POPUP) switch (data.zone_id) {
           case _Constants.ZONE_ID.MINI_POKER:
           case _Constants.ZONE_ID.SLOT_18:
           case _Constants.ZONE_ID.SLOT_28:
           case _Constants.ZONE_ID.SLOT_32:
            var dataBet = {
              zone_id: data.zone_id,
              total: data.total - data.change - data.bet,
              change: -data.bet,
              desc: "bet"
            };
            var dataEnd = {
              zone_id: data.zone_id,
              total: data.total,
              change: data.change + data.bet,
              desc: "endMatch"
            };
            this.addUpdateMoneyNotify(dataBet);
            this.addUpdateMoneyNotify(dataEnd);
            break;

           default:
            this.addUpdateMoneyNotify(data);
          } else {
            var dataHide = {
              zone_id: -1,
              total: data.total,
              change: data.change,
              desc: "hidePopup"
            };
            this.addUpdateMoneyNotify(dataHide);
            textContent = dataHide.change > 0 ? data.type == _Constants.UpdateMoneyTypeCode.VIDEO_ADS ? "Xem video th\xe0nh c\xf4ng, nh\u1eadn th\u01b0\u1edfng " + change + " " + goldName : data.type == _Constants.UpdateMoneyTypeCode.INVITE_FB ? "M\u1eddi b\u1ea1n th\xe0nh c\xf4ng, nh\u1eadn th\u01b0\u1edfng " + change + goldName : data.type == _Constants.UpdateMoneyTypeCode.SMS ? "T\xe0i kho\u1ea3n v\u1eeba n\u1ea1p th\xe0nh c\xf4ng " + change + goldName + " t\u1eeb giao d\u1ecbch tin nh\u1eafn SMS." : data.type == _Constants.UpdateMoneyTypeCode.CARD ? "T\xe0i kho\u1ea3n v\u1eeba n\u1ea1p th\xe0nh c\xf4ng " + change + " " + goldName + " t\u1eeb giao d\u1ecbch th\u1ebb c\xe0o." : data.type == _Constants.UpdateMoneyTypeCode.IAP ? "T\xe0i kho\u1ea3n v\u1eeba n\u1ea1p th\xe0nh c\xf4ng " + change + " " + goldName + " t\u1eeb giao d\u1ecbch IAP." : data.type == _Constants.UpdateMoneyTypeCode.ADMIN ? "T\xe0i kho\u1ea3n v\u1eeba n\u1ea1p th\xe0nh c\xf4ng " + change + " " + goldName + " t\u1eeb h\u1ec7 th\u1ed1ng." : data.type == _Constants.UpdateMoneyTypeCode.TRANSFER_GOLD ? "T\xe0i kho\u1ea3n v\u1eeba \u0111\u01b0\u1ee3c nh\u1eadn " + change + " " + goldName + " t\u1eeb giao d\u1ecbch chuy\u1ec3n " + goldName + "." : data.type == _Constants.UpdateMoneyTypeCode.IGAME_CHARGING ? "T\xe0i kho\u1ea3n v\u1eeba \u0111\u01b0\u1ee3c n\u1ea1p th\xe0nh c\xf4ng " + change + " " + goldName + " t\u1eeb c\u1ed5ng thanh to\xe1n" + gameName + "." : data.type == _Constants.UpdateMoneyTypeCode.BY_GIFT_CODE ? "Nh\u1eadn th\u01b0\u1edfng th\xe0nh c\xf4ng " + change + " " + goldName + " t\u1eeb Giftcode!" : "T\xe0i kho\u1ea3n v\u1eeba n\u1ea1p th\xe0nh c\xf4ng " + change + " " + goldName : "T\xe0i kho\u1ea3n v\u1eeba b\u1ecb tr\u1eeb " + change + " " + goldName + ". Li\xean h\u1ec7 hotline \u0111\u1ec3 bi\u1ebft th\xeam chi ti\u1ebft.";
            window.$UIHelper.showPopup(textContent, function() {}, false);
          }
        }
      }, {
        key: "updateMoneyWithZoneId",
        value: function updateMoneyWithZoneId(zoneId) {
          var indexRemoves = [];
          for (var i = 0; i < this.goldChanges.length; i++) {
            var goldChange = this.goldChanges[i];
            if (goldChange.zone_id == zoneId) {
              this.currentGoldClient += goldChange.change;
              this.emit("updateMoney", this.currentGoldClient);
              var ii = i;
              indexRemoves.push(ii);
            }
          }
          for (var _i = indexRemoves.length - 1; _i >= 0; _i--) this.goldChanges.splice(indexRemoves[_i], 1);
          if (0 == this.goldChanges.length) {
            if (this.currentGoldServers.length > 0) {
              var lastData = this.currentGoldServers[this.currentGoldServers.length - 1];
              this.currentGoldClient != lastData.total && this.emit("updateMoney", lastData.total);
              this.currentGoldClient = lastData.total;
            }
            this.currentGoldServers.splice(0);
          }
        }
      }, {
        key: "addUpdateMoneyNotify",
        value: function addUpdateMoneyNotify(data) {
          if (0 == data.change) return;
          this.currentGoldServers.push(data);
          this.goldChanges.push(data);
          "endMatch" !== data.desc && this.updateMoneyWithZoneId(data.zone_id);
        }
      }, {
        key: "getFundSlot",
        value: function getFundSlot(zoneIds) {
          var _this11 = this;
          this.sendMessage(_Constants.REQUEST_TYPE.GET_FUND_SLOT, {
            zoneIds: zoneIds
          });
          return new Promise(function(resolve, reject) {
            _this11.once("" + _Constants.REQUEST_TYPE.GET_FUND_SLOT, function(event) {
              resolve(event);
            });
          });
        }
      }, {
        key: "rechargeCard",
        value: function rechargeCard(cardInfo) {
          var _this12 = this;
          this.sendMessage(_Constants.REQUEST_TYPE.NAP_CARD, {
            nhamang_id: cardInfo.id,
            menhgia: cardInfo.value,
            mathe: cardInfo.code,
            seri: cardInfo.seri
          });
          return new Promise(function(resolve, reject) {
            _this12.once("" + _Constants.REQUEST_TYPE.NAP_CARD, function(event) {
              resolve(event);
            });
          });
        }
      }, {
        key: "onNotifyRechargeCard",
        value: function onNotifyRechargeCard(event) {
          window.$UIHelper.showPopup(event.desc, function() {}, false);
        }
      }, {
        key: "getUserJackpot",
        value: function getUserJackpot(zoneIds) {
          var _this13 = this;
          this.sendMessage(_Constants.REQUEST_TYPE.GET_LIST_USER_JACKPOT, {
            zoneIds: zoneIds
          });
          return new Promise(function(resolve, reject) {
            _this13.once("" + _Constants.REQUEST_TYPE.GET_LIST_USER_JACKPOT, function(event) {
              resolve(event);
            });
          });
        }
      }, {
        key: "getSystemMessages",
        value: function getSystemMessages(types) {
          var _this14 = this;
          this.sendMessage(_Constants.REQUEST_TYPE.GET_SYSTEM_MESSAGE, {
            types: types,
            provider_code: _Config.CONFIG.INFO.providerCode
          });
          return new Promise(function(resolve, reject) {
            _this14.once("" + _Constants.REQUEST_TYPE.GET_SYSTEM_MESSAGE, function(event) {
              resolve(event);
            });
          });
        }
      }, {
        key: "getSystemMessagesHttp",
        value: function getSystemMessagesHttp(type) {
          return new Promise(function(resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (4 == xhttp.readyState && 200 == xhttp.status) {
                var response = JSON.parse(xhttp.responseText);
                cc.log("SYSTEM MESSAGE");
                cc.log(response);
                resolve(response);
              } else cc.log(xhttp.statusText);
            };
            var url = _Config.CONFIG.URLS.server + _Config.CONFIG.API.PATHS.systemMessage + "?type=" + type;
            xhttp.open("GET", url, true);
            xhttp.send();
          });
        }
      }, {
        key: "onNotifyOtherLogin",
        value: function onNotifyOtherLogin(event) {
          cc.director.loadScene("Login", function() {
            window.$UIHelper.showPopup(event.desc, function() {}, false, true);
          });
        }
      } ]);
      return NetworkService;
    }(cc.Component)) || _class;
    exports.default = NetworkService;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../Configs/Config": "Config",
    "../Utils/Constants": "Constants",
    "../Utils/Helper": "Helper",
    "msgpack-lite": 10,
    qs: 39
  } ],
  NotifyJackpot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6bd9csLs21Pd50maIIYzk2J", "NotifyJackpot");
    "use strict";
    var _Constants = require("../../Utils/Constants");
    var _Helper = require("../../Utils/Helper");
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
      start: function start() {
        window.$Global.networkService.on("notify_" + _Constants.REQUEST_TYPE.ANOUNCEMENTS, this.onHaveJackpot.bind(this));
      },
      onDestroy: function onDestroy() {
        window.$Global.networkService.off("notify_" + _Constants.REQUEST_TYPE.ANOUNCEMENTS);
      },
      onHaveJackpot: function onHaveJackpot(event) {
        var _this = this;
        if (event.isJackpot) {
          var displayName = event.userDisplayName || "";
          this.user_name.string = displayName.length > 15 ? displayName.substring(0, 15) + "..." : displayName;
          this.gold.string = (0, _Helper.numberWithDot)(event.winAmount || 0);
          var zoneId = event.zoneId || 0;
          var key = (0, _Helper.getKeyByValue)(_Constants.ZONE_ID, zoneId);
          if (null === key || void 0 === key) return;
          var gameName = "game " + _Constants.ZONE_NAME[key];
          this.game_name.string = gameName;
          setTimeout(function() {
            _this.node.y = -360;
            _this.bg.active = true;
            _this.node.runAction(cc.sequence(cc.moveTo(1, 0, -300), cc.callFunc(function() {
              cc.audioEngine.play(_this.sound, false, 1);
            }), cc.callFunc(function() {
              _this.anim.play();
            }), cc.delayTime(5), cc.callFunc(_this.hide.bind(_this))));
          }, 5e3);
        }
      },
      hide: function hide() {
        this.bg.active = false;
        this.anim.stop();
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../../Utils/Helper": "Helper"
  } ],
  ObjectUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d56b1ZlmeJGGoIHIc85Ng8w", "ObjectUtil");
    "use strict";
    cc._RF.pop();
  }, {} ],
  PanelAgency: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72d39MBgEpA4JPfcOJbRua4", "PanelAgency");
    "use strict";
    var _BaseTabContainer = require("../Common/BaseTabContainer");
    var _BaseTabContainer2 = _interopRequireDefault(_BaseTabContainer);
    var _PanelTransfer = require("./PanelTransfer");
    var _PanelTransfer2 = _interopRequireDefault(_PanelTransfer);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
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
          type: _BaseTabContainer2.default
        },
        tabTransfer: {
          default: null,
          type: _PanelTransfer2.default
        }
      },
      refreshData: function refreshData() {
        var _this = this;
        window.$Global.userService.getDealers().then(function(dealers) {
          _this.setData(dealers);
        });
      },
      setData: function setData(data) {
        var _this2 = this;
        this.listAgency.removeAllChildren();
        var index = 0;
        data.forEach(function(dealer) {
          index++;
          var item = cc.instantiate(_this2.agencyItem);
          var txts = item.getComponentsInChildren(cc.Label);
          var btns = item.getComponentsInChildren(cc.Button);
          txts[0].string = index;
          var name = dealer.name;
          txts[1].string = name.length > 13 ? name.substring(0, 13) + "..." : name;
          txts[2].string = dealer.userId;
          txts[3].string = dealer.tel;
          txts[4].string = dealer.add;
          btns[0].node.on(cc.Node.EventType.TOUCH_END, function(event) {
            cc.sys.openURL(dealer.fb);
          });
          var userId = dealer.userId;
          btns[1].node.on(cc.Node.EventType.TOUCH_END, function(event) {
            window.$Global.userService.getUserInfo(userId).then(function(result) {
              _this2.tabTransfer.setTransferUserInfo(result);
            });
            _this2.tabContainer.tabHandle(0);
          });
          item.parent = _this2.listAgency;
        });
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseTabContainer": "BaseTabContainer",
    "./PanelTransfer": "PanelTransfer"
  } ],
  PanelCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18309d3kKVEU5iCLUps7250", "PanelCard");
    "use strict";
    var _Helper = require("../../Utils/Helper");
    var _Constants = require("../../Utils/Constants");
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
      setData: function setData(listCard) {
        var _this = this;
        this.reset();
        this.listCard = listCard;
        this.listCardContent.removeAllChildren();
        var _loop = function _loop(i) {
          item = cc.instantiate(_this.cardItem);
          item.children[0].getComponent(cc.Label).string = listCard[i].name;
          item.on(cc.Node.EventType.TOUCH_END, function(event) {
            _this.clickCard(i);
          });
          item.parent = _this.listCardContent;
          if (i !== listCard.length - 1) {
            l = cc.instantiate(_this.line);
            l.parent = _this.listCardContent;
          }
        };
        for (var i = 0; i < listCard.length; i++) {
          var item;
          var l;
          _loop(i);
        }
        this.listCardName = [ "Viettel", "Vina", "Mobi" ];
        this.listCardValueDefault = [ 1e4, 2e4, 5e4, 1e5, 2e5, 5e5 ];
        this.setExchangeRate(0);
        this.toggleCard1.isChecked = true;
      },
      showListCard: function showListCard() {
        var isActive = this.listCardContent.active;
        this.listCardContent.active = !isActive;
      },
      clickCard: function clickCard(index) {
        this.choiseCode = this.listCard[index].code_name;
        this.choiseValue = null;
        this.listCardContent.active = false;
        var currentCard = this.listCard[index];
        this.txtCardName.string = currentCard.name;
        this.setCardValue(index);
        this.txtCardValue.string = "Ch\u1ecdn m\u1ec7nh gi\xe1";
      },
      setCardValue: function setCardValue(index) {
        var _this2 = this;
        this.listCardValueContent.removeAllChildren();
        var currentCard = this.listCard[index];
        var _loop2 = function _loop2(i) {
          item = cc.instantiate(_this2.cardItem);
          item.children[0].getComponent(cc.Label).string = (0, _Helper.numberWithDot)(currentCard.list_amout[i]);
          item.on(cc.Node.EventType.TOUCH_END, function(event) {
            _this2.clickCardValue(currentCard.list_amout[i]);
          });
          item.parent = _this2.listCardValueContent;
          if (i !== currentCard.list_amout.length - 1) {
            l = cc.instantiate(_this2.line);
            l.parent = _this2.listCardValueContent;
          }
        };
        for (var i = 0; i < currentCard.list_amout.length; i++) {
          var item;
          var l;
          _loop2(i);
        }
      },
      clickCardValue: function clickCardValue(value) {
        this.choiseValue = value;
        this.listCardValueContent.active = false;
        this.txtCardValue.string = (0, _Helper.numberWithDot)(value, true) + " VND";
      },
      showListCardValue: function showListCardValue() {
        var isActive = this.listCardValueContent.active;
        this.listCardValueContent.active = !isActive;
      },
      clickRefreshCaptcha: function clickRefreshCaptcha() {},
      clickCashIn: function clickCashIn() {
        var _this3 = this;
        if (!this.choiseCode) {
          window.$UIHelper.showToast("Vui l\xf2ng ch\u1ecdn nh\xe0 m\u1ea1ng");
          return;
        }
        if (!this.choiseValue) {
          window.$UIHelper.showToast("Vui l\xf2ng ch\u1ecdn m\u1ec7nh gi\xe1");
          return;
        }
        if ("" === this.boxCode.string) {
          window.$UIHelper.showToast("Vui l\xf2ng nh\u1eadp m\xe3 th\u1ebb c\xe0o");
          return;
        }
        if ("" === this.boxSeri.string) {
          window.$UIHelper.showToast("Vui l\xf2ng nh\u1eadp s\u1ed1 seri");
          return;
        }
        window.$Global.networkService.rechargeCard({
          id: this.choiseCode,
          value: this.choiseValue,
          code: this.boxCode.string,
          seri: this.boxSeri.string
        }).then(function(result) {
          result.resultCode === _Constants.ResponseResultCode.SUCCESS && _this3.reset();
          window.$UIHelper.showToast(result.desc || "");
        });
      },
      setExchangeRate: function setExchangeRate(index) {
        var _this4 = this;
        var cardName = this.listCardName[index];
        var isSupport = false;
        this.listCard.forEach(function(card) {
          if (card.name.includes(cardName)) {
            isSupport = true;
            _this4.fillExchangeRate(card.list_amout, card.rate);
          }
        });
        isSupport || this.fillExchangeRate(this.listCardValueDefault, 0);
      },
      fillExchangeRate: function fillExchangeRate(listValue, rate) {
        var _this5 = this;
        this.exchangeRateContent.removeAllChildren();
        listValue.forEach(function(element) {
          var item = cc.instantiate(_this5.exchangeRateItem);
          item.children[0].getComponent(cc.Label).string = (0, _Helper.numberWithDot)(element);
          item.children[1].getComponent(cc.Label).string = rate > 0 ? (0, _Helper.numberWithDot)(element * rate / 100) : "Kh\xf4ng h\u1ed7 tr\u1ee3";
          item.parent = _this5.exchangeRateContent;
        });
      },
      toggleCardChanged: function toggleCardChanged(event, index) {
        this.setExchangeRate(index);
      },
      reset: function reset() {
        this.choiseCode = null;
        this.choiseValue = null;
        this.boxCode.string = "";
        this.boxSeri.string = "";
        this.txtCardName.string = "Ch\u1ecdn nh\xe0 m\u1ea1ng";
        this.txtCardValue.string = "Ch\u1ecdn m\u1ec7nh gi\xe1";
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../../Utils/Helper": "Helper"
  } ],
  PanelGameList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00c35Uj4o1M/L0D8zG8C5/n", "PanelGameList");
    "use strict";
    var _Constants = require("../../Utils/Constants");
    var _LobbyItem = require("./LobbyItem");
    var _LobbyItem2 = _interopRequireDefault(_LobbyItem);
    var _MinigameLobbyItem = require("./MinigameLobbyItem");
    var _MinigameLobbyItem2 = _interopRequireDefault(_MinigameLobbyItem);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
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
        slotRoom32: {
          default: null,
          type: cc.Prefab
        },
        slotRoom18: {
          default: null,
          type: cc.Prefab
        },
        slotRoom28: {
          default: null,
          type: cc.Prefab
        },
        slotSprites: {
          default: [],
          type: cc.SpriteFrame
        },
        slotGroup: {
          default: null,
          type: cc.Node
        },
        listLobbyGames: {
          default: [],
          type: _LobbyItem2.default
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
          default: false
        },
        listMinigames: {
          default: [],
          type: _MinigameLobbyItem2.default
        }
      },
      networkService: null,
      onLoad: function onLoad() {
        if (window.$Global.networkService.currentRoom) {
          this.lobbyGroup.active = false;
          var zoneId = window.$Global.networkService.currentRoom.zone.id;
          switch (zoneId) {
           case _Constants.ZONE_ID.SLOT_32:
            this.background.spriteFrame = this.listBG[1];
            this.isSetRoomBackground = true;
            break;

           case _Constants.ZONE_ID.SLOT_18:
            this.background.spriteFrame = this.listBG[2];
            this.isSetRoomBackground = true;
            break;

           case _Constants.ZONE_ID.SLOT_28:
            this.background.spriteFrame = this.listBG[3];
            this.isSetRoomBackground = true;
            break;

           default:
            this.isSetRoomBackground = false;
          }
        }
        this.isShowGameList = true;
        this.zoneToScene = {};
        this.zoneToScene[_Constants.ZONE_ID.SLOT_32] = "Slot_32";
        this.zoneToScene[_Constants.ZONE_ID.SLOT_18] = "Slot_18";
        this.zoneToScene[_Constants.ZONE_ID.SLOT_28] = "Slot_28";
        this.availableGames = [ "SLOT5", "SLOT", "SLOT1" ];
        this.listSlotRoom = [];
        this.listZoneToGetJackpot = [ _Constants.ZONE_ID.SLOT_18, _Constants.ZONE_ID.SLOT_28, _Constants.ZONE_ID.SLOT_32 ];
      },
      start: function start() {
        var _this = this;
        if (void 0 === window.$Global || void 0 === window.$Global.networkService) return;
        this.networkService = window.$Global.networkService;
        window.$Global.userService.once("userInfoFetched", function(event) {
          _this.networkService.on("" + _Constants.REQUEST_TYPE.LIST_LOBBIES, _this.onListLobby.bind(_this));
          _this.networkService.on("" + _Constants.REQUEST_TYPE.SUBSCRIBE_GAME, _this.onSubcribedGame.bind(_this));
          _this.networkService.on("" + _Constants.REQUEST_TYPE.JOIN_LOBBY, _this.onJoinedLobby.bind(_this));
          _this.networkService.on("" + _Constants.REQUEST_TYPE.SUBSCRIBE_LOBBY, _this.onSubcribedLobby.bind(_this));
          _this.networkService.on("" + _Constants.REQUEST_TYPE.GET_ROOMS, _this.onGetRooms.bind(_this));
          _this.networkService.on("" + _Constants.REQUEST_TYPE.JOIN_ROOM, _this.onJoinRoom.bind(_this));
          _this.networkService.on("" + _Constants.REQUEST_TYPE.LEAVE_LOBBY, _this.onLeaveLobby.bind(_this));
          _this.networkService.on("" + _Constants.REQUEST_TYPE.UNSUBSCRIBE_LOBBY, _this.onUnsubscribeLobby.bind(_this));
          _this.networkService.on("notify_" + _Constants.NOTIFY_TYPE.ACTIONS_IN_LOBBY, _this.onLobbyActions.bind(_this));
          _this.networkService.on("notify_" + _Constants.NOTIFY_TYPE.NOTIFY_MINI_CHANGED, _this.onNotifyMiniChanged.bind(_this));
          _this.isListenNetwork = true;
        });
        null !== this.networkService.rootRoom && void 0 !== this.networkService.rootRoom ? this.goRoom() : this.networkService.getListGames();
        this.lobbyNode.width = cc.winSize.width - this.eventNode.width - 50;
        window.$Global.CONFIG.SYSTEM_MESSAGE && this.eventNode.getComponent("EventPanel").initEvent(window.$Global.CONFIG.SYSTEM_MESSAGE, true);
      },
      onDestroy: function onDestroy() {
        this.isListenNetwork && this.offNetwork();
      },
      showGameList: function showGameList() {
        this.networkService.leaveLobby(this.networkService.zoneId);
        this.initLobby(this.networkService.lobbys);
        this.background.spriteFrame = this.listBG[0];
        this.roomGroup.active = false;
        this.lobbyGroup.active = true;
        this.isShowGameList = true;
        this.isShowListRoom = false;
      },
      offNetwork: function offNetwork() {
        cc.log("PanelGameList", "Off network");
        this.networkService.off("" + _Constants.REQUEST_TYPE.SUBSCRIBE_GAME);
        this.networkService.off("" + _Constants.REQUEST_TYPE.LIST_LOBBIES);
        this.networkService.off("" + _Constants.REQUEST_TYPE.JOIN_LOBBY);
        this.networkService.off("" + _Constants.REQUEST_TYPE.SUBSCRIBE_LOBBY);
        this.networkService.off("" + _Constants.REQUEST_TYPE.GET_ROOMS);
        this.networkService.off("" + _Constants.REQUEST_TYPE.JOIN_ROOM);
        this.networkService.off("" + _Constants.REQUEST_TYPE.LEAVE_LOBBY);
        this.networkService.off("" + _Constants.REQUEST_TYPE.UNSUBSCRIBE_LOBBY);
        this.networkService.off("notify_" + _Constants.NOTIFY_TYPE.ACTIONS_IN_LOBBY);
        this.networkService.off("notify_" + _Constants.NOTIFY_TYPE.NOTIFY_MINI_CHANGED);
        this.isListenNetwork = false;
      },
      onClickLobby: function onClickLobby(lobby) {
        this.currentLobby = lobby;
        this.zoneId = lobby.id;
        this.networkService.zoneId = this.zoneId;
        this.networkService.subcribeGameSlot();
      },
      onClickMinigame: function onClickMinigame(zoneId) {},
      onClick_MucCuoc: function onClick_MucCuoc(event, betAmount) {
        this.networkService.zoneId = this.zoneId;
        this.networkService.data.betAmount = betAmount;
        this.networkService.joinRoom(betAmount);
      },
      onListLobby: function onListLobby(event) {
        var lobbys = event.lobbies;
        this.networkService.lobbys = lobbys;
        this.initLobby(lobbys);
      },
      initLobby: function initLobby(lobbys) {
        var _this2 = this;
        lobbys.forEach(function(lobby) {
          for (var i = 0; i < _this2.availableGames.length; i++) if (lobby.name == _this2.availableGames[i] && void 0 === _this2.zoneId) {
            _this2.listLobbyGames[i].node.on(cc.Node.EventType.TOUCH_END, function(event) {
              _this2.onClickLobby(lobby);
            });
            _this2.listLobbyGames[i].setZoneId(lobby.id);
          }
        });
        this.networkService.getFundSlot(this.listZoneToGetJackpot).then(function(detail) {
          if (detail.resultCode === _Constants.ResponseResultCode.SUCCESS) for (var i = 0; i < _this2.listLobbyGames.length; i++) for (var j = 0; j < detail.funds.length; j++) _this2.listLobbyGames[i].getZoneId() === detail.funds[j].zoneId && _this2.listLobbyGames[i].setJackpot(detail.funds[j]);
        });
      },
      onSubcribedGame: function onSubcribedGame(event) {
        this.zoneName = this.currentLobby.name;
        this.networkService.zoneName = this.zoneName;
        this.networkService.joinLobby(this.zoneId);
      },
      onJoinedLobby: function onJoinedLobby(event) {
        this.zoneId && this.networkService.subcribeLobby(this.zoneId);
      },
      onSubcribedLobby: function onSubcribedLobby(event) {
        var msg = event;
        if (msg.resultCode === _Constants.ResponseResultCode.SUCCESS) {
          this.networkService.rootRoom = msg;
          this.networkService.zoneName.includes("SLOT");
          this.networkService.getRooms();
        } else window.$UIHelper.showToast("C\xf3 l\u1ed7i x\u1ea3y ra (" + msg.resultCode + ")");
      },
      onGetRooms: function onGetRooms(event) {
        this.initSlotRooms(event.rooms);
      },
      onJoinRoom: function onJoinRoom(event) {
        var msg = event;
        if (msg.resultCode === _Constants.ResponseResultCode.SUCCESS) {
          this.networkService.currentRoom = msg.room;
          this.isShowGameList = false;
          this.isShowListRoom = false;
          window.$UIHelper.showLoading(true);
          cc.director.loadScene(this.zoneToScene[this.networkService.zoneId], function() {
            window.$UIHelper.showLoading(false);
          });
        } else window.$UIHelper.showToast("C\xf3 l\u1ed7i x\u1ea3y ra (" + msg.resultCode + ")");
      },
      onLobbyActions: function onLobbyActions(event) {
        var msg = event;
        if (this.isShowGameList) {
          for (var i = 0; i < this.listLobbyGames.length; i++) if (this.listLobbyGames[i].getZoneId() == msg.zoneId) {
            this.listLobbyGames[i].setJackpot(msg);
            break;
          }
        } else this.isShowListRoom && this.listSlotRoom.forEach(function(room) {
          room.getComponent("SlotRoomItem").getRoomId() == msg.roomId && room.getComponent("SlotRoomItem").setJackpot(msg);
        });
      },
      onNotifyMiniChanged: function onNotifyMiniChanged(event) {
        var msg = event;
        for (var i = 0; i < this.listMinigames.length; i++) if (this.listMinigames[i].zoneId == msg.zoneId) {
          this.listMinigames[i].setMultipleFund(msg.multipleFund);
          break;
        }
      },
      initSlotRooms: function initSlotRooms(rooms) {
        var _this3 = this;
        this.slotGroup.removeAllChildren();
        this.listSlotRoom.slice(this.listSlotRoom.length);
        var zoneId = this.networkService.zoneId;
        this.isSetRoomBackground ? this.isSetRoomBackground = false : this.background.spriteFrame = zoneId == _Constants.ZONE_ID.SLOT_32 ? this.listBG[1] : zoneId == _Constants.ZONE_ID.SLOT_18 ? this.listBG[2] : zoneId == _Constants.ZONE_ID.SLOT_28 ? this.listBG[3] : this.listBG[0];
        rooms.forEach(function(room) {
          var roomId = room.id;
          var item = cc.instantiate(zoneId == _Constants.ZONE_ID.SLOT_32 ? _this3.slotRoom32 : roomId == _Constants.ZONE_ID.SLOT_18 ? _this3.slotRoom18 : _this3.slotRoom28);
          var index = _this3.getSpriteById(roomId, _this3.slotSprites, "icon_slot_");
          void 0 != index && (item.getComponent(cc.Sprite).spriteFrame = _this3.slotSprites[index]);
          item.getComponent("SlotRoomItem").setRoomData(room);
          item.on(cc.Node.EventType.TOUCH_END, function(event) {
            _this3.networkService.joinRoom(room.bet);
          });
          item.parent = _this3.slotGroup;
          _this3.listSlotRoom.push(item);
        });
        window.$UIHelper.showLoading(true);
        cc.director.preloadScene(this.zoneToScene[this.networkService.zoneId], function() {
          window.$UIHelper.showLoading(false);
        });
        this.lobbyGroup.active = false;
        this.roomGroup.active = true;
        this.isShowGameList = false;
        this.isShowListRoom = true;
      },
      getSpriteById: function getSpriteById(id, sprites, prefix) {
        for (var index = 0; index < sprites.length; index++) {
          var element = sprites[index];
          if (element.name == prefix + id) return index;
        }
      },
      goRoom: function goRoom() {
        if (this.networkService.zoneName.includes("SLOT")) {
          this.networkService.getRooms();
          this.networkService.subcribeLobby(this.networkService.zoneId);
        }
      },
      onLeaveLobby: function onLeaveLobby(event) {
        if (event.resultCode === _Constants.ResponseResultCode.SUCCESS) {
          this.networkService.unsubscribeLobby(this.networkService.zoneId);
          this.networkService.rootRoom = null;
          this.networkService.currentRoom = null;
        } else window.$UIHelper.showToast(event.desc || "leave error");
      },
      onUnsubscribeLobby: function onUnsubscribeLobby(event) {
        event.resultCode !== _Constants.ResponseResultCode.SUCCESS && window.$UIHelper.showToast(event.desc || "unsub lobby error");
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "./LobbyItem": "LobbyItem",
    "./MinigameLobbyItem": "MinigameLobbyItem"
  } ],
  PanelMoney: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6549fhWzalLVajLHzojkMLm", "PanelMoney");
    "use strict";
    var _Helper = require("../../Utils/Helper");
    var _Dialog_TopUp = require("./Dialog_TopUp");
    var _Dialog_TopUp2 = _interopRequireDefault(_Dialog_TopUp);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        textMoney: {
          default: null,
          type: cc.Label
        },
        dialogTopUp: {
          default: null,
          type: _Dialog_TopUp2.default
        }
      },
      setData: function setData(gold) {
        this.textMoney.string = (0, _Helper.moneyFormat)(gold, true);
      },
      onClickAdd: function onClickAdd() {
        this.dialogTopUp.show();
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper",
    "./Dialog_TopUp": "Dialog_TopUp"
  } ],
  PanelNotificationMarquee: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95fcb5PHjxGL75upB2uO8LL", "PanelNotificationMarquee");
    "use strict";
    var _Constants = require("../../Utils/Constants");
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
      onLoad: function onLoad() {
        this.reset();
      },
      reset: function reset() {
        this.lines = [];
        this.currentIndex = 0;
        this.currentLine = null;
        this.percent = 0;
        this.isShowIn = true;
        this.spaces = 0;
        this.passedTime = 0;
      },
      start: function start() {
        if (void 0 === window.$Global || void 0 === window.$Global.networkService) return;
        window.$Global.networkService.on("notify_" + _Constants.REQUEST_TYPE.ANOUNCEMENTS, this.getMessage.bind(this));
        this.textNotification.string = "";
        this.isListenNetwork = true;
      },
      onDestroy: function onDestroy() {
        this.isListenNetwork && this.offNetwork();
      },
      offNetwork: function offNetwork() {
        window.$Global.networkService.off("notify_" + _Constants.REQUEST_TYPE.ANOUNCEMENTS);
        this.isListenNetwork = false;
      },
      getMessage: function getMessage(event) {
        this.addToQueue(event.content || event.message || "");
        this.currentLine || this.nextLine();
      },
      setData: function setData(data) {
        this.setText(data.content || data.message || "");
      },
      setText: function setText(text) {
        this.textNotification.string = text;
      },
      addToQueue: function addToQueue(content) {
        this.lines.push(content);
      },
      nextLine: function nextLine() {
        this.textNotification.node.x = 1.5 * cc.winSize.width;
        if (this.lines.length > 0) {
          this.currentLine = this.lines.pop();
          this.textNotification.string = this.currentLine;
        }
      },
      update: function update(dt) {
        this.currentLine && (this.textNotification.node.x > -cc.winSize.width ? this.textNotification.node.x -= .2 * this.speed : this.nextLine());
        this.passedTime = 0;
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants"
  } ],
  PanelPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb0480jUtlAPqoLPzoGf/dP", "PanelPlayer");
    "use strict";
    var _PanelMoney = require("./PanelMoney");
    var _PanelMoney2 = _interopRequireDefault(_PanelMoney);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
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
          type: _PanelMoney2.default
        }
      },
      start: function start() {
        if (void 0 === window.$Global || void 0 === window.$Global.networkService) return;
        window.$Global.userService.on("userInfoFetched", this.refreshData.bind(this));
      },
      onDestroy: function onDestroy() {
        window.$Global.userService.off("userInfoFetched");
      },
      setData: function setData(data) {
        var displayName = data.displayName;
        this.textPlayerName.string = displayName.length > 20 ? displayName.substring(0, 16) + "..." : displayName;
        this.textPlayerID.string = data.id;
      },
      refreshData: function refreshData(event) {
        this.setData(event);
        this.panelMoney.setData(event.gold);
      },
      setGold: function setGold(gold) {
        this.panelMoney.setData(gold);
      }
    });
    cc._RF.pop();
  }, {
    "./PanelMoney": "PanelMoney"
  } ],
  PanelProfileInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15d32T28mlChrc5/bIKYNm0", "PanelProfileInfo");
    "use strict";
    var _Helper = require("../../Utils/Helper");
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
      start: function start() {
        if (void 0 === window.$Global || void 0 === window.$Global.networkService) return;
      },
      setData: function setData(userInfo) {
        this.textId.string = userInfo.id;
        this.textName.string = userInfo.displayName || "";
        this.textMobile.string = userInfo.mobile || "";
        this.textGold.string = (0, _Helper.moneyFormat)(userInfo.gold, true);
      },
      onClickGoi: function onClickGoi() {
        if (null == this.agencyMobile || void 0 == this.agencyMobile) return;
        cc.sys.openURL("tel://" + this.agencyMobile);
      },
      onClickChuyenBO: function onClickChuyenBO() {
        this.dialog.onClickChuyenBO();
      },
      onClickLichSu: function onClickLichSu() {
        this.dialog.onClickLichSuBO();
      },
      onClickDoiMatKhau: function onClickDoiMatKhau() {
        this.dialog.onClickChangePassword();
      },
      onClickCapNhat: function onClickCapNhat() {
        this.dialog.onClickProfileUpdate();
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper"
  } ],
  PanelProfileSecurity: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e998bQdIs5B5LYf3i0TySxd", "PanelProfileSecurity");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        check2FA: {
          default: null,
          type: cc.Toggle
        }
      },
      setData: function setData(loginG2fa) {
        this.check2FA.isChecked = 1 == loginG2fa;
      },
      onToggleChanged: function onToggleChanged() {
        var _this = this;
        window.$Global.userService.toggleSecurity(this.check2FA.isChecked ? 1 : 0).then(function(detail) {
          var resultCode = detail.resultCode;
          var status = detail.status;
          if (0 === resultCode) window.$UIHelper.showToast(0 === status ? "Hu\u1ef7 b\u1ea3o m\u1eadt \u0111\u0103ng nh\u1eadp th\xe0nh c\xf4ng" : "B\u1ea3o m\u1eadt \u0111\u0103ng nh\u1eadp th\xe0nh c\xf4ng"); else {
            window.$UIHelper.showToast("Error");
            _this.check2FA.isChecked = !_this.check2FA.isChecked;
          }
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  PanelTransfer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "59c0deCdwRMfbBjKl4D5wgR", "PanelTransfer");
    "use strict";
    var _Constants = require("../../Utils/Constants");
    var _Helper = require("../../Utils/Helper");
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
      refreshData: function refreshData() {
        this.resetData();
      },
      resetData: function resetData() {
        var _this = this;
        this.textID.string = "";
        this.textUserSearchResult.string = "";
        this.textOTP.string = "";
        this.textGold.string = "";
        this.textTransferGold.string = "Th\u1ef1c nh\u1eadn";
        this.textReason.string = "";
        this.providerNode.active = false;
        this.userData = window.$Global.userService.userInfo;
        window.$Global.userService.getUserInfo().then(function(result) {
          _this.userData = result.user;
        });
      },
      setData: function setData(msg) {
        this.configTransferGold = msg.data;
        this.configTransferGold.fee = Math.round(100 * (1 - this.configTransferGold.rate));
        var RULE_TEXT = "QUY \u0110\u1ecaNH CHUY\u1ec2N " + _Constants.CONFIG_GOLD.goldName.toUpperCase() + ":\n- Gi\xe1 tr\u1ecb giao d\u1ecbch t\u1ed1i thi\u1ec3u " + (0, 
        _Helper.moneyFormat)(this.configTransferGold.min) + " " + _Constants.CONFIG_GOLD.goldName + ".\n- Ph\xed giao d\u1ecbch " + this.configTransferGold.fee + "% gi\xe1 tr\u1ecb chuy\u1ec3n kho\u1ea3n.\n- Kh\xf4ng gi\u1edbi h\u1ea1n gi\xe1 tr\u1ecb t\u1ed1i \u0111a v\xe0 s\u1ed1 l\u1ea7n giao d\u1ecbch trong ng\xe0y.\n<color=#00ff00>CH\xda \xdd:\n- ID nh\u1eadn l\xe0 ID c\u1ee7a t\xe0i kho\u1ea3n \u0111\u01b0\u1ee3c nh\u1eadn.\n- C\xe1c giao d\u1ecbch chuy\u1ec3n nh\u1ea7m t\xe0i kho\u1ea3n \u0111\u01b0\u1ee3c t\xednh h\u1ee3p l\u1ec7 v\xe0 kh\xf4ng \u0111\u01b0\u1ee3c ho\xe0n tr\u1ea3.</color>";
        this.textRule.string = RULE_TEXT;
      },
      onTextIDChanged: function onTextIDChanged() {
        this.textUserSearchResult.string = "";
        this.providerNode.active = false;
      },
      onClickSearchUser: function onClickSearchUser() {
        var _this2 = this;
        var userId = this.textID.string;
        userId ? window.$Global.userService.getUserInfo(userId).then(function(result) {
          _this2.setTransferUserInfo(result);
        }) : window.$UIHelper.showToast("H\xe3y nh\u1eadp Id \u0111\u1ec3 t\xecm ki\u1ebfm");
      },
      onGoldChanged: function onGoldChanged(event) {
        if (!this.textGold.string) {
          this.textTransferGold.string = "Th\u1ef1c nh\u1eadn";
          return;
        }
        var amount = parseInt(this.textGold.string);
        if (amount > this.userData.gold) {
          amount = this.userData.gold;
          this.textGold.string = amount;
        }
        this.amountReceive = Math.floor(amount * this.configTransferGold.rate);
        this.textTransferGold.string = "Nh\u1eadn " + (0, _Helper.moneyFormat)(this.amountReceive) + " " + _Constants.CONFIG_GOLD.goldName;
      },
      onClickTransfer: function onClickTransfer() {
        var _this3 = this;
        if (!this.configTransferGold) {
          this.getConfig();
          return;
        }
        var userId = this.textID.string;
        var g2fa = this.textOTP.string;
        var amount = (0, _Helper.moneyToInt)(this.textGold.string);
        var message = this.textReason.string;
        var inputGold = amount * this.configTransferGold.rate;
        var isValid = true;
        if (userId && g2fa && amount) {
          if (amount > this.userData.gold) {
            window.$UIHelper.showToast("B\u1ea1n kh\xf4ng \u0111\u1ee7 " + (0, _Helper.moneyFormat)(amount) + " " + _Constants.CONFIG_GOLD.goldName);
            isValid = false;
          } else if (amount < this.configTransferGold.min) {
            window.$UIHelper.showToast("Chuy\u1ec3n t\u1ed1i thi\u1ec3u " + (0, _Helper.moneyFormat)(this.configTransferGold.min) + " " + _Constants.CONFIG_GOLD.goldName);
            isValid = false;
          }
        } else {
          window.$UIHelper.showToast("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!");
          isValid = false;
        }
        isValid && window.$UIHelper.showPopup("B\u1ea1n c\xf3 mu\u1ed1n chuy\u1ec3n " + (0, 
        _Helper.moneyFormat)(amount) + " " + _Constants.CONFIG_GOLD.goldName + "\n cho t\xe0i kho\u1ea3n c\xf3 ID l\xe0 " + userId + " v\u1edbi gi\xe1 " + (0, 
        _Helper.moneyFormat)(inputGold) + " " + _Constants.CONFIG_GOLD.goldName + "?", function() {
          _this3.transferGold(amount, userId, message, g2fa);
        });
      },
      transferGold: function transferGold(amount, userId, message, g2fa) {
        var _this4 = this;
        window.$Global.userService.transferGold(amount, userId, message, g2fa).then(function(resultCode) {
          var userInfo = window.$Global.userService.userInfo;
          message = resultCode == _Constants.TransferGoldResultCode.SUCCESS ? "Chuy\u1ec3n " + _Constants.CONFIG_GOLD.goldName + " th\xe0nh c\xf4ng. B\u1ea1n hi\u1ec7n c\xf3 " + userInfo.gold + " " + _Constants.CONFIG_GOLD.goldName : resultCode == _Constants.TransferGoldResultCode.TRANSFER_IN_PLAY_MOD ? "Kh\xf4ng th\u1ec3 giao d\u1ecbch " + _Constants.CONFIG_GOLD.goldName + " trong b\xe0n ch\u01a1i." : resultCode == _Constants.TransferGoldResultCode.TRANSFER_SMALLER_MIN_VALUE ? "S\u1ed1 " + _Constants.CONFIG_GOLD.goldName + " giao d\u1ecbch nh\u1ecf h\u01a1n quy \u0111\u1ecbnh. " : resultCode == _Constants.TransferGoldResultCode.TRANSFER_OVER_MAX_VALUE ? "S\u1ed1 " + _Constants.CONFIG_GOLD.goldName + " giao d\u1ecbch l\u1edbn h\u01a1n quy \u0111\u1ecbnh." : resultCode == _Constants.TransferGoldResultCode.INVALID_REG_USERNAME ? "Kh\xf4ng t\xecm th\u1ea5y ng\u01b0\u1eddi ch\u01a1i." : resultCode == _Constants.TransferGoldResultCode.INVALID_PASSWORD ? "OTP kh\xf4ng \u0111\xfang." : resultCode == _Constants.TransferGoldResultCode.TRANSFER_NOT_OWN_AGENCY ? "B\u1ea1n ch\u1ec9 \u0111\u01b0\u1ee3c chuy\u1ec3n ti\u1ec1n cho \u0110/L c\u1ee7a m\xecnh." : resultCode == _Constants.TransferGoldResultCode.TRANSFER_NOT_OWN_PLAYER ? "B\u1ea1n ch\u1ec9 \u0111\u01b0\u1ee3c chuy\u1ec3n ti\u1ec1n cho ng\u01b0\u1eddi ch\u01a1i c\u1ee7a m\xecnh." : "Giao d\u1ecbch " + _Constants.CONFIG_GOLD.goldName + " th\u1ea5t b\u1ea1i. Vui l\xf2ng th\u1eed l\u1ea1i.";
          window.$UIHelper.showToast(message);
          _this4.resetData();
        });
      },
      onClickOTP: function onClickOTP() {
        var userId = this.textID.string;
        var amount = (0, _Helper.moneyToInt)(this.textGold.string);
        var message = this.textReason.string;
        if (!(userId && message && amount)) {
          window.$UIHelper.showToast("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!");
          return;
        }
        window.$Global.userService.getOTP().then(function(detail) {
          window.$UIHelper.showPopup(detail.desc || "", function() {}, false);
        });
      },
      setTransferUserInfo: function setTransferUserInfo(userDetail) {
        if (userDetail.desc) {
          window.$UIHelper.showToast("Kh\xf4ng t\u1ed3n t\u1ea1i Id");
          this.providerNode.active = false;
        } else {
          var refUserInfo = userDetail.user;
          var displayName = refUserInfo.displayName;
          this.textID.string = refUserInfo.id;
          this.textUserSearchResult.string = displayName.length > 15 ? displayName.substring(0, 15) + "..." : displayName;
          var providerCode = refUserInfo.providerCode;
          if ("admin" === providerCode) {
            this.providerName.string = "admin";
            this.providerNode.active = true;
          } else if ("agency_level_1" === providerCode) {
            this.providerName.string = "Uy t\xedn";
            this.providerNode.active = true;
          } else if ("agency_level_2" === providerCode) {
            this.providerName.string = "Uy t\xedn";
            this.providerNode.active = true;
          } else this.providerNode.active = false;
        }
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../../Utils/Helper": "Helper"
  } ],
  PanelViExchange: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c2a7MoNIxLPJUzWz2nV0x6", "PanelViExchange");
    "use strict";
    var _Helper = require("../../Utils/Helper");
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
      setData: function setData(data) {},
      onClickDoi: function onClickDoi() {
        var g2fa = this.text2fa.string;
        var amount = (0, _Helper.moneyToInt)(this.textSoCoin.string);
        var isValid = true;
        if (!(g2fa && amount)) {
          this.panelNotification.setText("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!");
          isValid = false;
        }
        isValid && window.$Global.userService.koinToGold("", amount, g2fa).then(function(result) {});
      },
      onClickXoa: function onClickXoa() {}
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper"
  } ],
  PanelViHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d9d5dnM6qNPHL4feit268W3", "PanelViHistory");
    "use strict";
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
      start: function start() {
        this.page = 0;
        this.maxPage = 10;
      },
      setData: function setData(data) {},
      refreshData: function refreshData() {
        var _this = this;
        window.$Global.userService.getUserGoldHistory(this.page || 0).then(function(result) {
          result.length < 10 && (_this.maxPage = _this.page);
          _this.listLichSu.setData(result);
        });
      },
      onClickNextPage: function onClickNextPage() {
        if (this.page < this.maxPage) {
          this.page = this.page + 1;
          this.textPage.string = this.page;
          this.refreshData();
        }
      },
      onClickPreviousPage: function onClickPreviousPage() {
        if (this.page > 1) {
          this.page = this.page - 1;
          this.textPage.string = this.page;
          this.refreshData();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  PanelViRecharge: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0378eSBmxlC9YMtJUUICwGe", "PanelViRecharge");
    "use strict";
    var _BasePanelNotification = require("../Common/BasePanelNotification");
    var _BasePanelNotification2 = _interopRequireDefault(_BasePanelNotification);
    var _Helper = require("../../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
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
          type: _BasePanelNotification2.default
        }
      },
      setData: function setData(data) {},
      refreshData: function refreshData() {},
      onClickXoa: function onClickXoa() {},
      onClickDoi: function onClickDoi() {
        var g2fa = this.text2fa.string;
        var amount = (0, _Helper.moneyToInt)(this.textSoBo.string);
        var isValid = true;
        if (!(g2fa && amount)) {
          this.panelNotification.setText("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!");
          isValid = false;
        }
        isValid && window.$Global.userService.exchangeGold(amount, g2fa).then(function(result) {});
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper",
    "../Common/BasePanelNotification": "BasePanelNotification"
  } ],
  PanelVipPoint: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "026b5dZygdBNIDiZRv8cHgC", "PanelVipPoint");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  PlayedHistoryItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70d1cboVy1EMpCeBvrtVnHx", "PlayedHistoryItem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
    var _Helper = require("../Utils/Helper");
    function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object["keys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object["defineProperty"](target, property, desc);
        desc = null;
      }
      return desc;
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.");
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, property = _cc$_decorator.property;
    var PlayedHistoryItem = (_dec = property(cc.Node), _dec2 = property(cc.Label), _dec3 = property(cc.Label), 
    _dec4 = property(cc.Label), _dec5 = property(cc.Label), _dec6 = property(cc.Label), 
    ccclass(_class = (_class2 = function(_cc$Component) {
      _inherits(PlayedHistoryItem, _cc$Component);
      function PlayedHistoryItem() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, PlayedHistoryItem);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlayedHistoryItem.__proto__ || Object.getPrototypeOf(PlayedHistoryItem)).call.apply(_ref, [ this ].concat(args))), 
        _this), _initDefineProp(_this, "backgroundNode", _descriptor, _this), _initDefineProp(_this, "idLabel", _descriptor2, _this), 
        _initDefineProp(_this, "timeLabel", _descriptor3, _this), _initDefineProp(_this, "betLabel", _descriptor4, _this), 
        _initDefineProp(_this, "userBetLabel", _descriptor5, _this), _initDefineProp(_this, "winLabel", _descriptor6, _this), 
        _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(PlayedHistoryItem, [ {
        key: "setIDLabel",
        value: function setIDLabel(value) {
          this.idLabel.string = "" + value;
        }
      }, {
        key: "setTimeLabel",
        value: function setTimeLabel(value) {
          this.timeLabel.string = value;
        }
      }, {
        key: "setBetLabel",
        value: function setBetLabel(value) {
          this.betLabel.string = (0, _Helper.numberWithCommas)(value);
        }
      }, {
        key: "setUserBetLabel",
        value: function setUserBetLabel(value) {
          this.userBetLabel.string = (0, _Helper.numberWithCommas)(value);
        }
      }, {
        key: "setWinLabel",
        value: function setWinLabel(value) {
          this.winLabel.string = (0, _Helper.numberWithCommas)(value);
        }
      }, {
        key: "setBackGroundColor",
        value: function setBackGroundColor(colorHex) {
          var color = cc.Color.BLACK;
          this.backgroundNode.color = color.toHEX(colorHex);
        }
      }, {
        key: "setGrayBackground",
        value: function setGrayBackground() {
          this.setBackGroundColor("#999999");
        }
      }, {
        key: "setLightGrayBackground",
        value: function setLightGrayBackground() {
          this.setBackGroundColor("#666666");
        }
      } ]);
      return PlayedHistoryItem;
    }(cc.Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "backgroundNode", [ _dec ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "idLabel", [ _dec2 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "timeLabel", [ _dec3 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "betLabel", [ _dec4 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "userBetLabel", [ _dec5 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "winLabel", [ _dec6 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _class2)) || _class);
    exports.default = PlayedHistoryItem;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../Utils/Helper": "Helper"
  } ],
  PlayerDataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "409f08E+ARPaJ0bSm7cGTyL", "PlayerDataManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _LocalDataManager = require("./LocalDataManager.js");
    var _LocalDataManager2 = _interopRequireDefault(_LocalDataManager);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var AUDIO_KEY = "AUDIO_KEY";
    var PLAYED_TIMES_KEY = "PLAYED_TIMES_KEY_";
    var PlayerDataManager = function() {
      function PlayerDataManager() {
        _classCallCheck(this, PlayerDataManager);
      }
      _createClass(PlayerDataManager, null, [ {
        key: "getAudio",
        value: function getAudio() {
          return _LocalDataManager2.default.getBoolForKey(AUDIO_KEY, true);
        }
      }, {
        key: "setAudio",
        value: function setAudio(isOn) {
          _LocalDataManager2.default.setBoolForKey(AUDIO_KEY, isOn);
        }
      }, {
        key: "getPlayedTimes",
        value: function getPlayedTimes() {
          return _LocalDataManager2.default.getIntForKey(PLAYED_TIMES_KEY, 0);
        }
      }, {
        key: "setPlayedTimes",
        value: function setPlayedTimes(times) {
          _LocalDataManager2.default.setIntForKey(PLAYED_TIMES_KEY, times);
        }
      }, {
        key: "addOnePlayedTime",
        value: function addOnePlayedTime() {
          this.setPlayedTimes(1 + this.getPlayedTimes());
        }
      } ]);
      return PlayerDataManager;
    }();
    exports.default = PlayerDataManager;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "./LocalDataManager.js": "LocalDataManager"
  } ],
  PopupMessage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b2ca2XgyVpNx6Y06HgEdiw6", "PopupMessage");
    "use strict";
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
      hide: function hide() {
        this.btnOK.node.off(cc.Node.EventType.TOUCH_END);
        this.popup.active = false;
      },
      show: function show(content, callback, isCancel, isHide) {
        var _this = this;
        this.content.string = content;
        this.btnCancel.node.active = isCancel;
        this.btnOK.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          _this.node.runAction(cc.sequence(cc.callFunc(callback), cc.delayTime(.5), cc.callFunc(function() {
            isHide && _this.hide();
          })));
        });
        this.popup.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  RefUserItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2635f9h8t1N74FQ/qyKsGr6", "RefUserItem");
    "use strict";
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
      setData: function setData(index, data) {
        this.textSTT.string = index;
        this.textID.string = data.id;
        this.textDisplayName.string = data.displayName;
        this.textMobile.string = data.mobile;
        this.textGold.string = data.gold;
        this.btnCall.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          cc.sys.openURL("tel://" + data.mobile);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  SlotController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "315ff3G4sdJTpPQ6OT54hxj", "SlotController");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
    var _lodash = require("lodash");
    var _BetTableController = require("./BetTableController");
    var _BetTableController2 = _interopRequireDefault(_BetTableController);
    var _SlotGameUIManager = require("./SlotGameUIManager");
    var _SlotGameUIManager2 = _interopRequireDefault(_SlotGameUIManager);
    var _Constants = require("../Utils/Constants");
    var _SlotDialog = require("./SlotDialog");
    var _SlotDialog2 = _interopRequireDefault(_SlotDialog);
    var _JackpotEffect = require("./JackpotEffect");
    var _JackpotEffect2 = _interopRequireDefault(_JackpotEffect);
    var _BigWinEffect = require("./BigWinEffect");
    var _BigWinEffect2 = _interopRequireDefault(_BigWinEffect);
    var _AudioController = require("./AudioController");
    var _AudioController2 = _interopRequireDefault(_AudioController);
    var _SlotItem = require("./SlotItem");
    var _SlotItem2 = _interopRequireDefault(_SlotItem);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object["keys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object["defineProperty"](target, property, desc);
        desc = null;
      }
      return desc;
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.");
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, property = _cc$_decorator.property;
    var ICONS_NUM_PER_COLUMN = 25;
    var COLUMN_NUMS = 5;
    var ROW_NUMS = 3;
    var BLOCK_HEIGTH = 171;
    var SlotController = (_dec = property(Array(cc.Node)), _dec2 = property(Array(cc.SpriteFrame)), 
    _dec3 = property(Array(cc.Prefab)), _dec4 = property(cc.Prefab), _dec5 = property(_SlotGameUIManager2.default), 
    _dec6 = property(_SlotDialog2.default), _dec7 = property(_JackpotEffect2.default), 
    _dec8 = property(_BigWinEffect2.default), _dec9 = property(Array(cc.Node)), _dec10 = property(cc.Toggle), 
    _dec11 = property(_AudioController2.default), _dec12 = property(cc.Node), _dec13 = property(cc.Toggle), 
    _dec14 = property(cc.Toggle), _dec15 = property(cc.Button), ccclass(_class = (_class2 = function(_cc$Component) {
      _inherits(SlotController, _cc$Component);
      function SlotController() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, SlotController);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SlotController.__proto__ || Object.getPrototypeOf(SlotController)).call.apply(_ref, [ this ].concat(args))), 
        _this), _initDefineProp(_this, "listColumns", _descriptor, _this), _initDefineProp(_this, "listItemIcons", _descriptor2, _this), 
        _initDefineProp(_this, "listItemPrefab", _descriptor3, _this), _initDefineProp(_this, "ItemRandomPrefab", _descriptor4, _this), 
        _initDefineProp(_this, "uiManager", _descriptor5, _this), _this.networkService = null, 
        _initDefineProp(_this, "tableDialog", _descriptor6, _this), _initDefineProp(_this, "jackpotEffect", _descriptor7, _this), 
        _initDefineProp(_this, "bigWinEffect", _descriptor8, _this), _initDefineProp(_this, "listBetTableIcons", _descriptor9, _this), 
        _initDefineProp(_this, "toggleAuto", _descriptor10, _this), _initDefineProp(_this, "audioController", _descriptor11, _this), 
        _initDefineProp(_this, "dialogSetting", _descriptor12, _this), _initDefineProp(_this, "toggleSound", _descriptor13, _this), 
        _initDefineProp(_this, "toggleBgSound", _descriptor14, _this), _initDefineProp(_this, "btnSpin", _descriptor15, _this), 
        _this.initY = -165, _this.slotsResult = [], _this.oldsResult = [], _this.selectedBetLines = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ], 
        _this.deal = _Constants.DEAL_TYPE.FREE_TRY, _this.isAutoSpin = false, _this.isSpinning = false, 
        _this.betValue = 100, _this.listSlotShow = [], _this.itemCount = 7, _this.countPerItem = 10, 
        _this.slotItemPool = [], _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(SlotController, [ {
        key: "onLoad",
        value: function onLoad() {
          this.genRandomSlotIcons();
          window.$UIHelper.showLoading(true);
          for (var i = 0; i < this.itemCount; i++) {
            this.slotItemPool[i] = new cc.NodePool();
            for (var j = 0; j < this.countPerItem; j++) {
              var item = cc.instantiate(this.listItemPrefab[i]);
              this.slotItemPool[i].put(item);
              j === this.countPerItem - 1 && i === this.itemCount - 1 && window.$UIHelper.showLoading(false);
            }
          }
        }
      }, {
        key: "start",
        value: function start() {
          var _this2 = this;
          this.betTable = this.uiManager.node.getComponent(_BetTableController2.default);
          this.betTable.chooseList(this.selectedBetLines);
          this.uiManager.showListSelectedLines(this.selectedBetLines);
          this.setupBetTableIcons();
          this.networkService = window.$Global.networkService;
          this.betValue = this.networkService.currentRoom.bet;
          this.updateBetsValue();
          this.uiManager.setTotalCoin(this.networkService.userInfo.gold);
          this.uiManager.updateJackpot(this.networkService.currentRoom.funds);
          this.networkService.node.on("" + _Constants.REQUEST_TYPE.UPDATE_PEERS, this.onHadUpdatePeerData.bind(this));
          this.networkService.node.on("" + _Constants.REQUEST_TYPE.LEAVE_ROOM, this.onLeaveRoom.bind(this));
          this.networkService.node.on("notify_" + _Constants.NOTIFY_TYPE.ROOM_STATE_CHANGED, this.onRoomStateChanged.bind(this));
          this.networkService.node.on("updateMoney", function(event) {
            var gold = event;
            _this2.uiManager.setTotalCoin(gold);
          });
          this.audioController.playBackground();
        }
      }, {
        key: "onDestroy",
        value: function onDestroy() {
          this.networkService.node.off("" + _Constants.REQUEST_TYPE.UPDATE_PEERS);
          this.networkService.node.off("" + _Constants.REQUEST_TYPE.LEAVE_ROOM);
          this.networkService.node.off("notify_" + _Constants.NOTIFY_TYPE.ROOM_STATE_CHANGED);
          this.networkService.node.off("updateMoney");
          this.slotItemPool.forEach(function(element) {
            element.clear();
          });
        }
      }, {
        key: "updateBetsValue",
        value: function updateBetsValue() {
          this.uiManager.setBetValue(this.betValue);
          this.uiManager.setBetLines(this.selectedBetLines.length);
          this.uiManager.setTotalBet(this.selectedBetLines.length * this.betValue);
        }
      }, {
        key: "genRandomSlotIcons",
        value: function genRandomSlotIcons() {
          for (var i = 0; i < COLUMN_NUMS; i++) {
            var column = this.listColumns[i];
            for (var j = 0; j < ICONS_NUM_PER_COLUMN; j++) {
              var index = (0, _lodash.random)(0, this.listItemIcons.length - 1, false);
              var newItem = cc.instantiate(this.listItemPrefab[index]);
              newItem.y = j * BLOCK_HEIGTH;
              column.addChild(newItem);
            }
          }
        }
      }, {
        key: "finishRoll",
        value: function finishRoll() {
          this.oldsResult = this.slotsResult;
          var lines = this.payLines.map(function(pl) {
            return pl.line;
          });
          this.uiManager.blinkWinLines(lines, this.onBlinkDone.bind(this));
        }
      }, {
        key: "onBlinkDone",
        value: function onBlinkDone() {
          var _this3 = this;
          this.isSpinning = false;
          this.networkService.updateMoneyWithZoneId(this.networkService.zoneId);
          if (this.isWinJackpot) {
            this.jackpotEffect.show(this.winChips);
            this.stopAuto();
            this.audioController.playJackpot();
          } else if (this.winChips >= 80 * this.betValue) {
            this.bigWinEffect.show(this.winChips);
            this.audioController.playResult();
            setTimeout(function() {
              _this3.onShowWinEffectDone();
            }, 3e3);
          } else if (this.winChips > 0) {
            this.uiManager.showWinValue(this.winChips, this.onShowWinEffectDone.bind(this));
            this.audioController.playResult();
          } else this.onShowWinEffectDone();
          this.uiManager.setWinValue(this.winChips);
          this.showWinSlotsEffect();
          this.isAutoSpin || (this.btnSpin.interactable = true);
        }
      }, {
        key: "showWinSlotsEffect",
        value: function showWinSlotsEffect() {
          var listIndexToShow = [];
          this.payLines.forEach(function(line) {
            line.matched.forEach(function(match) {
              listIndexToShow.indexOf(match) < 0 && listIndexToShow.push(match);
            });
          });
          for (var index = 0; index < listIndexToShow.length; index++) {
            var i = listIndexToShow[index];
            var slot = this.listSlotShow[i];
            slot && slot.getComponent("SlotItem").showAnimation();
          }
        }
      }, {
        key: "onShowWinEffectDone",
        value: function onShowWinEffectDone() {
          this.isAutoSpin && this.spin();
        }
      }, {
        key: "roll",
        value: function roll() {
          this.audioController.playSpin();
          var OFFSET_FIRST_MOVE = 20;
          var moveHeight = (ICONS_NUM_PER_COLUMN - 3) * BLOCK_HEIGTH + OFFSET_FIRST_MOVE;
          for (var index = 0; index < COLUMN_NUMS; index++) {
            var delay = cc.delayTime(.1 * index);
            var line = this.listColumns[index];
            index === COLUMN_NUMS - 1 ? line.runAction(cc.sequence(delay, cc.moveBy(.1, 0, OFFSET_FIRST_MOVE), cc.moveBy(1, 0, -moveHeight), cc.callFunc(this.finishRoll, this))) : line.runAction(cc.sequence(delay, cc.moveBy(.1, 0, OFFSET_FIRST_MOVE), cc.moveBy(1, 0, -moveHeight)));
          }
        }
      }, {
        key: "resetPositions",
        value: function resetPositions() {
          for (var i = 0; i < COLUMN_NUMS; i++) {
            var col = this.listColumns[i];
            col.y = this.initY;
          }
        }
      }, {
        key: "setupResult",
        value: function setupResult() {
          if (0 === this.slotsResult.length) return;
          for (var indexCol = 0; indexCol < COLUMN_NUMS; indexCol++) {
            var col = this.listColumns[indexCol];
            var childrenCount = col.childrenCount;
            var listSlotNeedAdd = [];
            for (var indexRow = 0; indexRow < ROW_NUMS; indexRow++) {
              var iconIndex = this.slotsResult[indexRow][indexCol] - 1;
              var slot = col.children[childrenCount - indexRow - 1];
              var newY = slot.y;
              if (this.oldsResult.length > 0) {
                var oldIndex = this.oldsResult[indexRow][indexCol] - 1;
                this.slotItemPool[oldIndex].put(slot);
              } else {
                col.removeChild(slot);
                slot.destroy();
              }
              var newSlot = this.slotItemPool[iconIndex].get();
              null == newSlot && (newSlot = cc.instantiate(this.listItemPrefab[iconIndex]));
              newSlot.y = newY;
              listSlotNeedAdd.push(newSlot);
              this.listSlotShow[indexRow * COLUMN_NUMS + indexCol] = newSlot;
            }
            for (var index = listSlotNeedAdd.length - 1; index >= 0; index--) {
              var element = listSlotNeedAdd[index];
              col.addChild(element);
            }
          }
        }
      }, {
        key: "_setupResult",
        value: function _setupResult() {
          if (0 === this.slotsResult.length) return;
          for (var indexCol = 0; indexCol < COLUMN_NUMS; indexCol++) {
            var col = this.listColumns[indexCol];
            var childrenCount = col.childrenCount;
            var listSlotNeedAdd = [];
            for (var indexRow = 0; indexRow < ROW_NUMS; indexRow++) {
              var iconIndex = this.slotsResult[indexRow][indexCol] - 1;
              var slot = col.children[childrenCount - indexRow - 1];
              var newY = slot.y;
              col.removeChild(slot);
              var newSlot = cc.instantiate(this.listItemPrefab[iconIndex]);
              newSlot.y = newY;
              listSlotNeedAdd.push(newSlot);
              this.listSlotShow[indexRow * COLUMN_NUMS + indexCol] = newSlot;
            }
            for (var index = listSlotNeedAdd.length - 1; index >= 0; index--) {
              var element = listSlotNeedAdd[index];
              col.addChild(element);
            }
          }
        }
      }, {
        key: "setOldResult",
        value: function setOldResult() {
          if (0 === this.oldsResult.length) return;
          for (var indexRow = 0; indexRow < ROW_NUMS; indexRow++) for (var indexCol = 0; indexCol < COLUMN_NUMS; indexCol++) {
            var iconIndex = this.oldsResult[indexRow][indexCol] - 1;
            var rowIndex = 2 - indexRow;
            var col = this.listColumns[indexCol];
            var slot = col.children[rowIndex];
            slot.getComponent(cc.Sprite).spriteFrame = this.listItemIcons[iconIndex];
          }
        }
      }, {
        key: "_setOldResult",
        value: function _setOldResult() {
          if (0 === this.oldsResult.length) return;
          for (var indexRow = 0; indexRow < ROW_NUMS; indexRow++) for (var indexCol = 0; indexCol < COLUMN_NUMS; indexCol++) {
            var rowIndex = 2 - indexRow;
            var col = this.listColumns[indexCol];
            var oldSlot = col.children[rowIndex];
            var newSlot = col.children[rowIndex + ICONS_NUM_PER_COLUMN - 3];
            var temp = newSlot.y;
            newSlot.y = oldSlot.y;
            oldSlot.y = temp;
            newSlot.setSiblingIndex(rowIndex);
            oldSlot.setSiblingIndex(rowIndex + ICONS_NUM_PER_COLUMN - 3);
          }
        }
      }, {
        key: "spin",
        value: function spin() {
          if (!this.selectedBetLines.length) return;
          if (this.isSpinning) {
            window.$UIHelper.showToast("Quay qu\xe1 nhanh");
            return;
          }
          this.listSlotShow.forEach(function(slot) {
            slot.getComponent("SlotItem").hideAnimation();
          });
          this.listSlotShow = [];
          this.isSpinning = true;
          this.btnSpin.interactable = false;
          this.networkService.spin(this.deal, this.selectedBetLines);
          this.jackpotEffect.hide();
          this.bigWinEffect.hide();
        }
      }, {
        key: "onClickChan",
        value: function onClickChan() {
          this.betTable.chooseEven();
          this.selectedBetLines = [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
          this.updateBetsValue();
        }
      }, {
        key: "onClickLe",
        value: function onClickLe() {
          this.betTable.chooseOdd();
          this.selectedBetLines = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ];
          this.updateBetsValue();
        }
      }, {
        key: "onClickTatCa",
        value: function onClickTatCa() {
          this.betTable.chooseAll();
          this.selectedBetLines = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
          this.updateBetsValue();
        }
      }, {
        key: "onClickHuy",
        value: function onClickHuy() {
          this.betTable.chooseNone();
          this.selectedBetLines = [];
          this.updateBetsValue();
        }
      }, {
        key: "onClickBet",
        value: function onClickBet(target, selected) {
          var selectedNumber = parseInt(selected);
          var numberIndex = this.selectedBetLines.indexOf(selectedNumber);
          var isSelected = -1 != numberIndex;
          isSelected ? this.selectedBetLines.splice(numberIndex, 1) : this.selectedBetLines.push(selectedNumber);
          this.betTable.chooseOne(isSelected, selectedNumber - 1);
          this.uiManager.showListSelectedLines(this.selectedBetLines);
          this.updateBetsValue();
        }
      }, {
        key: "showBetDialog",
        value: function showBetDialog() {
          this.isAutoSpin && this.stopAuto();
          this.tableDialog.show(1);
          this.betTable.chooseList(this.selectedBetLines);
        }
      }, {
        key: "onHadUpdatePeerData",
        value: function onHadUpdatePeerData(event) {
          var detail = event;
          if (detail.resultCode === _Constants.ResponseResultCode.SUCCESS) detail.type === _Constants.REQUEST_TYPE.GET_JACKPOT_HISTORY ? this.onHaveBXHHu(detail.slotHistory) : detail.type === _Constants.REQUEST_TYPE.GET_USER_HISTORY ? this.onHaveHistory(detail.slotHistory) : detail.type === _Constants.REQUEST_TYPE.START_MATCH && this.onHaveSpinResult(detail); else {
            window.$UIHelper.showToast(detail.desc || detail.content || "");
            this.isSpinning = false;
            this.btnSpin.interactable = true;
          }
        }
      }, {
        key: "onHaveSpinResult",
        value: function onHaveSpinResult(spinResultData) {
          this.resetPositions();
          this._setOldResult();
          this.slotsResult = spinResultData.result.slots.faces;
          this.payLines = spinResultData.result.payLines;
          this.winChips = spinResultData.result.winChips;
          this.freeSpins = spinResultData.result.freeSpins;
          this.isWinJackpot = spinResultData.result.isWinJackpot;
          this.jackpotNum = spinResultData.result.jackpotNum;
          this.chips = spinResultData.chips;
          this.isWinJackpot = spinResultData.result.isWinJackpot;
          this._setupResult();
          this.scheduleOnce(function() {
            this.roll();
          }, .01);
        }
      }, {
        key: "onHaveBXHHu",
        value: function onHaveBXHHu(jackpotHistory) {
          this.uiManager.showBXHHu(jackpotHistory);
        }
      }, {
        key: "onHaveHistory",
        value: function onHaveHistory(slotHistory) {
          this.uiManager.showHistory(slotHistory);
        }
      }, {
        key: "onClickGameMode",
        value: function onClickGameMode() {
          this.deal === _Constants.DEAL_TYPE.FREE_TRY ? this.deal = _Constants.DEAL_TYPE.REAL_SPIN : this.deal = _Constants.DEAL_TYPE.FREE_TRY;
        }
      }, {
        key: "onClickBXHHu",
        value: function onClickBXHHu() {
          this.networkService.getBXHHu();
          this.tableDialog.show(2);
        }
      }, {
        key: "onClickHelp",
        value: function onClickHelp() {
          this.tableDialog.show(0);
        }
      }, {
        key: "onClickHistory",
        value: function onClickHistory() {
          this.networkService.getHistory();
          this.tableDialog.show(3);
        }
      }, {
        key: "onClickBack",
        value: function onClickBack() {
          this.isSpinning ? window.$UIHelper.showToast("\u0110ang quay") : this.networkService.leaveRoom();
        }
      }, {
        key: "onClickAddCoin",
        value: function onClickAddCoin() {}
      }, {
        key: "onClickAutoSpin",
        value: function onClickAutoSpin() {
          if (this.isAutoSpin) {
            this.isAutoSpin = false;
            this.btnSpin.interactable = true;
          } else this.isAutoSpin = true;
        }
      }, {
        key: "setupBetTableIcons",
        value: function setupBetTableIcons() {
          var _this4 = this;
          this.listBetTableIcons.forEach(function(icon, index) {
            icon.getComponent(cc.Sprite).spriteFrame = _this4.listItemIcons[index];
          }, this);
        }
      }, {
        key: "onLeaveRoom",
        value: function onLeaveRoom(event) {
          var msg = event;
          msg.resultCode === _Constants.ResponseResultCode.SUCCESS && cc.director.loadScene("GameList");
        }
      }, {
        key: "onRoomStateChanged",
        value: function onRoomStateChanged(event) {
          var msg = event;
          this.networkService.currentRoom.id == msg.roomId && this.uiManager.updateJackpot(msg.jackpot);
        }
      }, {
        key: "stopAuto",
        value: function stopAuto() {
          this.toggleAuto.isChecked = false;
          this.isAutoSpin = false;
        }
      }, {
        key: "showHideSetting",
        value: function showHideSetting(event, data) {
          this.dialogSetting.active = 1 == data;
        }
      }, {
        key: "soundChanged",
        value: function soundChanged() {
          this.audioController.toggleSound(this.toggleSound.isChecked);
        }
      }, {
        key: "bgSoundChanged",
        value: function bgSoundChanged() {
          this.audioController.toggleBackround(this.toggleBgSound.isChecked);
        }
      } ]);
      return SlotController;
    }(cc.Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listColumns", [ _dec ], {
      enumerable: true,
      initializer: function initializer() {
        return [];
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listItemIcons", [ _dec2 ], {
      enumerable: true,
      initializer: function initializer() {
        return [];
      }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listItemPrefab", [ _dec3 ], {
      enumerable: true,
      initializer: function initializer() {
        return [];
      }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ItemRandomPrefab", [ _dec4 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "uiManager", [ _dec5 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tableDialog", [ _dec6 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "jackpotEffect", [ _dec7 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bigWinEffect", [ _dec8 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "listBetTableIcons", [ _dec9 ], {
      enumerable: true,
      initializer: function initializer() {
        return [];
      }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "toggleAuto", [ _dec10 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "audioController", [ _dec11 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "dialogSetting", [ _dec12 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "toggleSound", [ _dec13 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "toggleBgSound", [ _dec14 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "btnSpin", [ _dec15 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _class2)) || _class);
    exports.default = SlotController;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../Utils/Constants": "Constants",
    "./AudioController": "AudioController",
    "./BetTableController": "BetTableController",
    "./BigWinEffect": "BigWinEffect",
    "./JackpotEffect": "JackpotEffect",
    "./SlotDialog": "SlotDialog",
    "./SlotGameUIManager": "SlotGameUIManager",
    "./SlotItem": "SlotItem",
    lodash: 9
  } ],
  SlotDialog: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "811e7LE/QREfpApPUo+QJ1k", "SlotDialog");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;
    var _BaseTab = require("../Scene/Common/BaseTab");
    var _BaseTab2 = _interopRequireDefault(_BaseTab);
    var _BaseTabContainer = require("../Scene/Common/BaseTabContainer");
    var _BaseTabContainer2 = _interopRequireDefault(_BaseTabContainer);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object["keys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object["defineProperty"](target, property, desc);
        desc = null;
      }
      return desc;
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.");
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, property = _cc$_decorator.property;
    var SlotDialog = (_dec = property(Array(_BaseTab2.default)), _dec2 = property(_BaseTabContainer2.default), 
    ccclass(_class = (_class2 = function(_cc$Component) {
      _inherits(SlotDialog, _cc$Component);
      function SlotDialog() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, SlotDialog);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SlotDialog.__proto__ || Object.getPrototypeOf(SlotDialog)).call.apply(_ref, [ this ].concat(args))), 
        _this), _initDefineProp(_this, "tabs", _descriptor, _this), _initDefineProp(_this, "tabContainer", _descriptor2, _this), 
        _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(SlotDialog, [ {
        key: "resetPos",
        value: function resetPos() {
          this.node.scaleX = 1;
          this.node.scaleY = 1;
        }
      }, {
        key: "show",
        value: function show(index) {
          this.node.active = true;
          this.resetPos();
          this.tabContainer.selectTab(this.tabs[index]);
        }
      }, {
        key: "hide",
        value: function hide() {
          this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.4, 0, 0), cc.moveTo(.4, cc.winSize.width / 2, 0)), cc.callFunc(function() {
            this.node.active = false;
          }, this)));
        }
      }, {
        key: "hidePopup",
        value: function hidePopup() {
          this.node.active = false;
        }
      } ]);
      return SlotDialog;
    }(cc.Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabs", [ _dec ], {
      enumerable: true,
      initializer: function initializer() {
        return [];
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabContainer", [ _dec2 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _class2)) || _class);
    exports.default = SlotDialog;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../Scene/Common/BaseTab": "BaseTab",
    "../Scene/Common/BaseTabContainer": "BaseTabContainer"
  } ],
  SlotGameUIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fae59up2EVKrpi8sqVcE5+w", "SlotGameUIManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
    var _BXHHuItem = require("./BXHHuItem");
    var _BXHHuItem2 = _interopRequireDefault(_BXHHuItem);
    var _Helper = require("../Utils/Helper");
    var _PlayedHistoryItem = require("./PlayedHistoryItem");
    var _PlayedHistoryItem2 = _interopRequireDefault(_PlayedHistoryItem);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object["keys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object["defineProperty"](target, property, desc);
        desc = null;
      }
      return desc;
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.");
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, property = _cc$_decorator.property;
    var TOTAL_LINES = 20;
    var SlotUIManager = (_dec = property(cc.Label), _dec2 = property(cc.Label), _dec3 = property(cc.Label), 
    _dec4 = property(cc.Label), _dec5 = property(cc.Label), _dec6 = property(cc.Node), 
    _dec7 = property(Array(cc.Node)), _dec8 = property(cc.SpriteFrame), _dec9 = property(cc.SpriteFrame), 
    _dec10 = property(cc.Node), _dec11 = property(cc.Prefab), _dec12 = property(cc.Node), 
    _dec13 = property(cc.Prefab), _dec14 = property(cc.Label), _dec15 = property(cc.Node), 
    _dec16 = property(cc.Label), ccclass(_class = (_class2 = function(_cc$Component) {
      _inherits(SlotUIManager, _cc$Component);
      function SlotUIManager() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, SlotUIManager);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SlotUIManager.__proto__ || Object.getPrototypeOf(SlotUIManager)).call.apply(_ref, [ this ].concat(args))), 
        _this), _initDefineProp(_this, "betValue", _descriptor, _this), _initDefineProp(_this, "betLines", _descriptor2, _this), 
        _initDefineProp(_this, "winValue", _descriptor3, _this), _initDefineProp(_this, "totalBet", _descriptor4, _this), 
        _initDefineProp(_this, "totalCoin", _descriptor5, _this), _initDefineProp(_this, "slotLineNode", _descriptor6, _this), 
        _this.slotLinesList = [], _initDefineProp(_this, "betLinesIconList", _descriptor7, _this), 
        _initDefineProp(_this, "activeLineIcon", _descriptor8, _this), _initDefineProp(_this, "deactiveLineIcon", _descriptor9, _this), 
        _initDefineProp(_this, "contentBXHHu", _descriptor10, _this), _initDefineProp(_this, "itemBXHHu", _descriptor11, _this), 
        _initDefineProp(_this, "contentHistory", _descriptor12, _this), _initDefineProp(_this, "itemHistory", _descriptor13, _this), 
        _initDefineProp(_this, "winLabel", _descriptor14, _this), _initDefineProp(_this, "winDialog", _descriptor15, _this), 
        _initDefineProp(_this, "textJackpot", _descriptor16, _this), _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(SlotUIManager, [ {
        key: "start",
        value: function start() {
          this.slotLinesList = this.slotLineNode.children;
          this.textJackpot.string = "0";
        }
      }, {
        key: "setBetValue",
        value: function setBetValue(value) {
          this.betValue.string = (0, _Helper.numberWithCommas)(value);
        }
      }, {
        key: "setBetLines",
        value: function setBetLines(value) {
          this.betLines.string = "" + value;
        }
      }, {
        key: "setWinValue",
        value: function setWinValue(value) {
          this.winValue.string = (0, _Helper.numberWithCommas)(value);
        }
      }, {
        key: "setTotalBet",
        value: function setTotalBet(value) {
          this.totalBet.string = (0, _Helper.numberWithCommas)(value);
        }
      }, {
        key: "setTotalCoin",
        value: function setTotalCoin(value) {
          this.totalCoin.string = (0, _Helper.numberWithDot)(value);
        }
      }, {
        key: "blinkWinLines",
        value: function blinkWinLines() {
          var lines = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          var callback = arguments[1];
          lines.forEach(this.blinkLine, this);
          this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(callback)));
        }
      }, {
        key: "blinkLine",
        value: function blinkLine(lineNum) {
          var slotLine = this.slotLinesList[lineNum - 1];
          slotLine.active = true;
          slotLine.runAction(cc.blink(2, 5));
          setTimeout(function() {
            slotLine.active = false;
          }, 2e3);
        }
      }, {
        key: "selectLineSlot",
        value: function selectLineSlot(lineNum) {
          this.betLinesIconList[lineNum - 1].getComponent(cc.Sprite).spriteFrame = this.activeLineIcon;
        }
      }, {
        key: "deselectLineSlot",
        value: function deselectLineSlot(lineNum) {
          this.betLinesIconList[lineNum - 1].getComponent(cc.Sprite).spriteFrame = this.deactiveLineIcon;
        }
      }, {
        key: "disselectAllLinesIcon",
        value: function disselectAllLinesIcon() {
          for (var index = 1; index <= TOTAL_LINES; index++) this.deselectLineSlot(index);
        }
      }, {
        key: "showListSelectedLines",
        value: function showListSelectedLines() {
          var lines = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.disselectAllLinesIcon();
          lines.forEach(this.selectLineSlot, this);
        }
      }, {
        key: "showBXHHu",
        value: function showBXHHu(jackpotHistory) {
          this.contentBXHHu.removeAllChildren(true);
          this.contentBXHHu.height = jackpotHistory.length * this.itemBXHHu.data.height;
          for (var index = 0; index < jackpotHistory.length; index++) {
            var _jackpotHistory$index = jackpotHistory[index], displayName = _jackpotHistory$index.displayName, time = _jackpotHistory$index.time, bet = _jackpotHistory$index.bet, win = _jackpotHistory$index.win;
            var historyLineNode = cc.instantiate(this.itemBXHHu);
            var historyComponent = historyLineNode.getComponent(_BXHHuItem2.default);
            historyComponent.setPlayerLabel(displayName);
            historyComponent.setTimeLabel(time);
            historyComponent.setBetLabel(bet);
            historyComponent.setWinLabel(win);
            index % 2 ? historyComponent.setGrayBackground() : historyComponent.setLightGrayBackground();
            historyLineNode.y = -(.5 + index) * historyLineNode.height;
            this.contentBXHHu.addChild(historyLineNode);
          }
        }
      }, {
        key: "showHistory",
        value: function showHistory(slotHistory) {
          this.contentHistory.removeAllChildren(true);
          this.contentHistory.height = slotHistory.length * this.itemHistory.data.height;
          for (var index = 0; index < slotHistory.length; index++) {
            var _slotHistory$index = slotHistory[index], id = _slotHistory$index.id, time = _slotHistory$index.time, bet = _slotHistory$index.bet, sub = _slotHistory$index.sub, total = _slotHistory$index.total;
            var historyLineNode = cc.instantiate(this.itemHistory);
            var historyComponent = historyLineNode.getComponent(_PlayedHistoryItem2.default);
            historyComponent.setIDLabel(id);
            historyComponent.setTimeLabel(time);
            historyComponent.setBetLabel(bet);
            historyComponent.setUserBetLabel(sub);
            historyComponent.setWinLabel(total);
            index % 2 ? historyComponent.setGrayBackground() : historyComponent.setLightGrayBackground();
            historyLineNode.y = -(.5 + index) * historyLineNode.height;
            this.contentHistory.addChild(historyLineNode);
          }
        }
      }, {
        key: "showWinValue",
        value: function showWinValue(value, callback) {
          this.winDialog.active = true;
          this.winDialog.runAction(cc.show());
          this.winLabel.string = (0, _Helper.numberWithDot)(value);
          this.winDialog.runAction(cc.sequence(cc.delayTime(2), cc.hide(), cc.callFunc(callback)));
        }
      }, {
        key: "updateJackpot",
        value: function updateJackpot(value) {
          (0, _Helper.runNumber)(this.textJackpot, value);
        }
      } ]);
      return SlotUIManager;
    }(cc.Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "betValue", [ _dec ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "betLines", [ _dec2 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "winValue", [ _dec3 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "totalBet", [ _dec4 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "totalCoin", [ _dec5 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "slotLineNode", [ _dec6 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "betLinesIconList", [ _dec7 ], {
      enumerable: true,
      initializer: function initializer() {
        return [];
      }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "activeLineIcon", [ _dec8 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "deactiveLineIcon", [ _dec9 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "contentBXHHu", [ _dec10 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "itemBXHHu", [ _dec11 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "contentHistory", [ _dec12 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "itemHistory", [ _dec13 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "winLabel", [ _dec14 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "winDialog", [ _dec15 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "textJackpot", [ _dec16 ], {
      enumerable: true,
      initializer: function initializer() {
        return null;
      }
    }), _class2)) || _class);
    exports.default = SlotUIManager;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../Utils/Helper": "Helper",
    "./BXHHuItem": "BXHHuItem",
    "./PlayedHistoryItem": "PlayedHistoryItem"
  } ],
  SlotItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73db0L3xVBHPoRS92rTZSwB", "SlotItem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;
    function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object["keys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object["defineProperty"](target, property, desc);
        desc = null;
      }
      return desc;
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.");
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, property = _cc$_decorator.property;
    var SlotItem = (_dec = property(Array(cc.ParticleSystem)), _dec2 = property(Array(cc.Node)), 
    _dec3 = property(Array(cc.Animation)), ccclass(_class = (_class2 = function(_cc$Component) {
      _inherits(SlotItem, _cc$Component);
      function SlotItem() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, SlotItem);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SlotItem.__proto__ || Object.getPrototypeOf(SlotItem)).call.apply(_ref, [ this ].concat(args))), 
        _this), _initDefineProp(_this, "listParticle", _descriptor, _this), _initDefineProp(_this, "listSpine", _descriptor2, _this), 
        _initDefineProp(_this, "listAnimation", _descriptor3, _this), _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(SlotItem, [ {
        key: "start",
        value: function start() {
          this.isShowAnim = false;
        }
      }, {
        key: "showAnimation",
        value: function showAnimation() {
          if (this.isShowAnim) return;
          this.listParticle.forEach(function(particle) {
            particle.resetSystem();
          });
          this.listSpine.forEach(function(spine) {
            spine.active = true;
          });
          this.listAnimation.forEach(function(anim) {
            anim.play();
          });
          this.isShowAnim = true;
        }
      }, {
        key: "hideAnimation",
        value: function hideAnimation() {
          if (!this.isShowAnim) return;
          this.listParticle.forEach(function(particle) {
            particle.stopSystem();
          });
          this.listSpine.forEach(function(spine) {
            spine.active = false;
          });
          this.listAnimation.forEach(function(anim) {
            anim.stop();
          });
          this.isShowAnim = false;
        }
      } ]);
      return SlotItem;
    }(cc.Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listParticle", [ _dec ], {
      enumerable: true,
      initializer: function initializer() {
        return [];
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listSpine", [ _dec2 ], {
      enumerable: true,
      initializer: function initializer() {
        return [];
      }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listAnimation", [ _dec3 ], {
      enumerable: true,
      initializer: function initializer() {
        return [];
      }
    }), _class2)) || _class);
    exports.default = SlotItem;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  SlotRoomItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b05f24+IT1GH6zmRITHs83i", "SlotRoomItem");
    "use strict";
    var _Helper = require("../../Utils/Helper");
    var _MultipleFund = require("./MultipleFund");
    var _MultipleFund2 = _interopRequireDefault(_MultipleFund);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
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
          type: _MultipleFund2.default
        }
      },
      setJackpot: function setJackpot(room) {
        (0, _Helper.runNumber)(this.textJackpot, room.jackpot);
        room.multipleFund && this.xHu.setMultipleFund(room.multipleFund);
      },
      setRoomData: function setRoomData(room) {
        this.textBet.string = (0, _Helper.numberWithDot)(room.bet);
        (0, _Helper.runNumber)(this.textJackpot, room.funds);
        this.roomId = room.id;
      },
      getRoomId: function getRoomId() {
        return this.roomId;
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper",
    "./MultipleFund": "MultipleFund"
  } ],
  TabGoldHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38a2eYP+35CooE4t9Y2bza9", "TabGoldHistory");
    "use strict";
    var _BaseTabContainer = require("../Common/BaseTabContainer");
    var _BaseTabContainer2 = _interopRequireDefault(_BaseTabContainer);
    var _Dialog_GoldHistory = require("./Dialog_GoldHistory");
    var _Dialog_GoldHistory2 = _interopRequireDefault(_Dialog_GoldHistory);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseTabContainer2.default,
      properties: {
        dialogHistory: {
          default: null,
          type: _Dialog_GoldHistory2.default
        }
      },
      showTab: function showTab(aTab) {
        aTab.tabContentNode && (aTab.tabContentNode.active = true);
        var index = this.tabs.indexOf(aTab);
        if (this.dialogHistory.trans_type == index) return;
        this.dialogHistory.trans_type = index;
        this.dialogHistory.page = 0;
        this.dialogHistory.refreshData();
      }
    });
    cc._RF.pop();
  }, {
    "../Common/BaseTabContainer": "BaseTabContainer",
    "./Dialog_GoldHistory": "Dialog_GoldHistory"
  } ],
  TaiXiuChartLine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61cf6keIQNCMZbB1IrU+Mse", "TaiXiuChartLine");
    "use strict";
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
      start: function start() {
        this.listDice1 = [];
        this.listDice2 = [];
        this.listDice3 = [];
      },
      refreshData: function refreshData() {},
      setData: function setData(data) {
        this.listDice1.length = 0;
        this.listDice2.length = 0;
        this.listDice3.length = 0;
        this.matchNum = 21;
        var historyCount = data.history.length;
        var historys = data.history.slice(historyCount - this.matchNum);
        this.cellX = this.node.width / this.gridX;
        this.cellY = this.node.height / this.gridY;
        this.nodeListBi.removeAllChildren();
        this.nodeListLine.removeAllChildren();
        "point" == this.style && (this.cellY = this.node.height / 15);
        for (var i = 0; i < historys.length - 1; i++) {
          var matchData1 = historys[i];
          var matchData2 = historys[i + 1];
          if ("point" === this.style) this.addLineAtGrid(i, matchData1.point - 3, i + 1, matchData2.point - 3, "green", 1); else {
            this.addLineAtGrid(i, matchData1.faces[0], i + 1, matchData2.faces[0], "yellow", 1);
            this.addLineAtGrid(i, matchData1.faces[1], i + 1, matchData2.faces[1], "pink", 1);
            this.addLineAtGrid(i, matchData1.faces[2], i + 1, matchData2.faces[2], "xanh1", 1);
          }
        }
        for (i = 0; i < historys.length; i++) {
          var matchData = historys[i];
          if ("point" === this.style) {
            var isXiu = matchData.point <= 10;
            this.addNodeAtGrid(i, matchData.point - 3, matchData.point, matchData.point <= 10 ? "white" : "black", 1);
          } else {
            this.addNodeAtGrid(i, matchData.faces[0], "", "yellow", .7);
            this.addNodeAtGrid(i, matchData.faces[1], "", "pink", .7);
            this.addNodeAtGrid(i, matchData.faces[2], "", "xanh1", .7);
          }
        }
      },
      addNodeAt: function addNodeAt(x, y, text, color) {},
      addNodeAtGrid: function addNodeAtGrid(x, y, text, color) {
        var scale = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
        var newNode = null;
        if ("black" === color) newNode = cc.instantiate(this.nodeDen); else if ("white" === color) newNode = cc.instantiate(this.nodeTrang); else {
          newNode = cc.instantiate(this.nodeTrang);
          if ("red" === color) newNode.color = new cc.Color(255, 0, 0); else if ("green" === color) newNode.color = new cc.Color(0, 255, 0); else if ("blue" === color) newNode.color = new cc.Color(0, 0, 255); else if ("yellow" === color) {
            newNode.color = new cc.Color(255, 255, 0);
            this.listDice1.push(newNode);
          } else if ("pink" === color) {
            newNode.color = new cc.Color(255, 0, 245);
            this.listDice2.push(newNode);
          } else if ("xanh1" === color) {
            newNode.color = new cc.Color(2, 219, 228);
            this.listDice3.push(newNode);
          } else newNode.color = color;
        }
        newNode.x = this.cellX * x;
        newNode.y = this.cellY * y;
        newNode.children.length > 0 && (newNode.children[0].getComponent(cc.Label).string = text);
        newNode.parent = this.nodeListBi;
        newNode.active = true;
        newNode.scaleX = scale;
        newNode.scaleY = scale;
      },
      addLineAt: function addLineAt(x1, y1, x2, y2, color) {},
      addLineAtGrid: function addLineAtGrid(x1, y1, x2, y2, color) {
        var lineWidth = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        var newLine = null;
        newLine = cc.instantiate(this.nodeLine);
        if ("white" === color) newLine.color = new cc.Color(255, 255, 255); else if ("black" === color) newLine.color = new cc.Color(0, 0, 0); else if ("red" === color) newLine.color = new cc.Color(255, 0, 0); else if ("green" === color) newLine.color = new cc.Color(0, 255, 0); else if ("blue" === color) newLine.color = new cc.Color(0, 0, 255); else if ("yellow" === color) {
          newLine.color = new cc.Color(255, 255, 0);
          this.listDice1.push(newLine);
        } else if ("pink" === color) {
          newLine.color = new cc.Color(255, 0, 245);
          this.listDice2.push(newLine);
        } else if ("xanh1" === color) {
          newLine.color = new cc.Color(2, 219, 228);
          this.listDice3.push(newLine);
        } else newLine.color = color;
        newLine.x = this.cellX * x1;
        newLine.y = this.cellY * y1;
        var lineLength = Math.sqrt(Math.pow(this.cellX * (x1 - x2), 2) + Math.pow(this.cellY * (y1 - y2), 2));
        var angle = cc.misc.radiansToDegrees(Math.atan(this.cellY * (y1 - y2) / this.cellX * (x2 - x1)));
        newLine.rotation = angle;
        newLine.width = lineLength;
        newLine.height = lineWidth;
        newLine.parent = this.nodeListLine;
        newLine.active = true;
      },
      clear: function clear() {},
      totalCheck: function totalCheck() {
        this.nodeListBi.active = !this.nodeListBi.active;
        this.nodeListLine.active = !this.nodeListLine.active;
      },
      dice1Check: function dice1Check() {
        this.listDice1.forEach(function(node) {
          node.active = !node.active;
        });
      },
      dice2Check: function dice2Check() {
        this.listDice2.forEach(function(node) {
          node.active = !node.active;
        });
      },
      dice3Check: function dice3Check() {
        this.listDice3.forEach(function(node) {
          node.active = !node.active;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  TaiXiuChartTablePoint: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7ba0bxNcvNEiqmWoKsvxUIH", "TaiXiuChartTablePoint");
    "use strict";
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
      setData: function setData(data) {
        this.listLine.forEach(function(line) {
          line.removeAllChildren();
        });
        this.matchNumXiu = 0;
        this.matchNumTai = 0;
        var historys = data.history;
        var lineIndex = 0;
        this.isXiu = historys[historys.length - 1].point <= 10;
        for (var i = historys.length - 1; i >= 0; i--) {
          var matchData = historys[i];
          var point = matchData.point;
          var isXiu = point <= 10;
          this.isXiu === isXiu && this.listLine[lineIndex].childrenCount !== this.numDiceOfCol || lineIndex++;
          if (lineIndex >= this.colNum) break;
          isXiu ? this.matchNumXiu++ : this.matchNumTai++;
          var newNode = cc.instantiate(isXiu ? this.diceWhite : this.diceBlack);
          newNode.getComponentInChildren(cc.Label).string = point;
          this.listLine[lineIndex].addChild(newNode);
          this.isXiu = isXiu;
        }
        this.textNumTai.string = this.matchNumTai;
        this.textNumXiu.string = this.matchNumXiu;
      }
    });
    cc._RF.pop();
  }, {} ],
  TaiXiuChartTable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5bfe1PGfzRAOIjdlhcO5dqH", "TaiXiuChartTable");
    "use strict";
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
      setData: function setData(data) {
        this.listLine.forEach(function(line) {
          line.removeAllChildren();
        });
        this.matchNum = 40;
        this.matchNumXiu = 0;
        this.matchNumTai = 0;
        var historyCount = data.history.length;
        var history = data.history.slice(historyCount - this.matchNum);
        for (var i = 0; i < history.length; i++) {
          var matchData = history[i];
          var isXiu = matchData.point <= 10;
          isXiu ? this.matchNumXiu++ : this.matchNumTai++;
          var newNode = cc.instantiate(isXiu ? this.diceWhite : this.diceBlack);
          var ii = Math.floor(i / 8);
          this.listLine[ii].addChild(newNode);
        }
        this.textNumTai.string = this.matchNumTai;
        this.textNumXiu.string = this.matchNumXiu;
      }
    });
    cc._RF.pop();
  }, {} ],
  TaiXiuHistoryItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7bc91OMlr5HkIw8XM6h6fgK", "TaiXiuHistoryItem");
    "use strict";
    var _BaseListItem = require("../Common/BaseListItem");
    var _BaseListItem2 = _interopRequireDefault(_BaseListItem);
    var _Helper = require("../../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseListItem2.default,
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
      onSetData: function onSetData(data) {
        this.textPhien.string = data.id;
        this.textThoiGian.string = data.time;
        this.textDat.string = data.betMax > 0 ? "T\xe0i" : "X\u1ec9u";
        this.textVe.string = data.result;
        this.textCuoc.string = (0, _Helper.moneyFormat)(data.betMax > 0 ? data.betMax : data.betMin, true);
        this.textHoanTra.string = (0, _Helper.moneyFormat)(data.betMaxReturn > 0 ? data.betMaxReturn : data.betMinReturn, true);
        this.textNhan.string = (0, _Helper.moneyFormat)(data.maxWin > 0 ? data.maxWin : data.minWin, true);
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper",
    "../Common/BaseListItem": "BaseListItem"
  } ],
  TaiXiuMatchHistoryItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d408fv2pBFJgYtSdvLcsWYC", "TaiXiuMatchHistoryItem");
    "use strict";
    var _Helper = require("../../Utils/Helper");
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
      setData: function setData(pot, data) {
        this.textTime.string = data.time.split(" ")[1];
        var username = data.username || "";
        this.textUserName.string = username.length > 15 ? username.substring(0, 15) + "..." : username;
        this.textBet.string = (0, _Helper.moneyFormat)(0 == pot ? data.betMin + data.betMinReturn : data.betMax + data.betMaxReturn, true);
        this.textBalance.string = (0, _Helper.moneyFormat)(0 == pot ? data.betMinReturn : data.betMaxReturn, true);
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper"
  } ],
  TaiXiuTopEventItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bdbd8cziY9GcIwS+cBDNT6I", "TaiXiuTopEventItem");
    "use strict";
    var _BaseListItem = require("../Common/BaseListItem");
    var _BaseListItem2 = _interopRequireDefault(_BaseListItem);
    var _Helper = require("../../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseListItem2.default,
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
      onSetData: function onSetData(rank, data, bonus) {
        var _this = this;
        var name = data.fullname;
        this.textNguoiChoi.string = name.length > 15 ? name.substring(0, 15) + "..." : name;
        this.textHang.string = rank;
        this.textThang.string = (0, _Helper.moneyFormat)(data.total_gold);
        var img = bonus.img;
        if (img && "" != img) {
          bonus.value && "" != bonus.value ? this.textBonus.string = bonus.name + " - " + bonus.value : this.textBonus.string = bonus.name;
          try {
            cc.loader.load(img, function(err, tex) {
              _this.imgBonus.spriteFrame = new cc.SpriteFrame(tex);
              _this.imgBonus.node.active = true;
            });
          } catch (error) {
            cc.error("load img bonus error " + error);
          }
        } else this.textBonus.string = bonus.value;
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper",
    "../Common/BaseListItem": "BaseListItem"
  } ],
  TaiXiuTopUserItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61b68FIXB5IgLs4OMZz3oqn", "TaiXiuTopUserItem");
    "use strict";
    var _BaseListItem = require("../Common/BaseListItem");
    var _BaseListItem2 = _interopRequireDefault(_BaseListItem);
    var _Helper = require("../../Utils/Helper");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: _BaseListItem2.default,
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
      onSetData: function onSetData(rank, data) {
        var name = data.fullname;
        this.textNguoiChoi.string = name.length > 15 ? name.substring(0, 15) + "..." : name;
        this.textHang.string = rank;
        this.textThang.string = (0, _Helper.moneyFormat)(data.total_gold);
        this.textBonus.string = (0, _Helper.moneyFormat)(data.bonus);
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper",
    "../Common/BaseListItem": "BaseListItem"
  } ],
  Toast: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3587bpFAcJDUp6+0kD/K3ml", "Toast");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        contentTxt: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.delayTime = 2;
      },
      show: function show(content) {
        var delay = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.contentTxt.string = content;
        this.node.active = true;
        delay > 0 && (this.delayTime = delay);
        this.scheduleOnce(function() {
          this.node.destroy();
        }, this.delayTime);
      }
    });
    cc._RF.pop();
  }, {} ],
  UIHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ced1LzQRpH8J1rO81mZyOI", "UIHelper");
    "use strict";
    var _PopupMessage = require("./PopupMessage");
    var _PopupMessage2 = _interopRequireDefault(_PopupMessage);
    var _Minigame = require("../Minigame/Minigame");
    var _Minigame2 = _interopRequireDefault(_Minigame);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
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
          type: _PopupMessage2.default
        },
        toast: {
          default: null,
          type: cc.Prefab
        },
        minigame: {
          default: null,
          type: _Minigame2.default
        }
      },
      onLoad: function onLoad() {
        window.$UIHelper = this;
      },
      start: function start() {
        var _this = this;
        var currScene = cc.director.getScene()._name;
        if (currScene.includes("Slot") || "GameList" == currScene) setTimeout(function() {
          if (null === _this.minigame || void 0 === _this.minigame) return;
          ("GameList" == currScene || window.$Global.minigame.isShowTaixiu) && _this.minigame.showTaiXiu();
          window.$Global.minigame.isShowMinipoker && _this.minigame.showMiniPoker();
          window.$Global.minigame.isShowBaucua && _this.minigame.showBauCua();
          window.$Global.minigame.isShowMiniSlot_BanCa && _this.minigame.showMiniSlot_BanCa();
          window.$Global.minigame.isShowMiniBaCay && _this.minigame.showMiniBaCay();
          window.$Global.minigame.isShowCaoThap && _this.minigame.showCaoThap();
        }, 1500); else {
          window.$Global.minigame.isShowTaixiu = false;
          window.$Global.minigame.isShowMinipoker = false;
          window.$Global.minigame.isShowBaucua = false;
          window.$Global.minigame.isShowMiniSlot_BanCa = false;
          window.$Global.minigame.isShowMiniBaCay = false;
          window.$Global.minigame.isShowCaoThap = false;
        }
      },
      showLoading: function showLoading(isLoading) {
        this.loading.active = isLoading;
      },
      showPopup: function showPopup(message, callback) {
        var isCancel = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var isHide = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this.popupMessage.show(message, callback, isCancel, isHide);
      },
      showToast: function showToast(message) {
        var parent = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.node;
        var posY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -264;
        var _toast = cc.instantiate(this.toast);
        _toast.parent = parent;
        _toast.setPosition(0, posY);
        _toast.getComponent("Toast").show(message);
      }
    });
    cc._RF.pop();
  }, {
    "../Minigame/Minigame": "Minigame",
    "./PopupMessage": "PopupMessage"
  } ],
  UserJackpotItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb3a6bwNcdK1LTcDkxYhgoo", "UserJackpotItem");
    "use strict";
    var _Constants = require("../../Utils/Constants");
    var _Helper = require("../../Utils/Helper");
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
      setData: function setData(data) {
        switch (data.zoneId) {
         case _Constants.ZONE_ID.SLOT_32:
          this.jpImg.spriteFrame = this.listSpr[0];
          break;

         case _Constants.ZONE_ID.SLOT_18:
          this.jpImg.spriteFrame = this.listSpr[1];
          break;

         case _Constants.ZONE_ID.SLOT_28:
          this.jpImg.spriteFrame = this.listSpr[2];
          break;

         case _Constants.ZONE_ID.MINI_POKER:
          this.jpImg.spriteFrame = this.listSpr[3];
          break;

         case _Constants.ZONE_ID.MINI_SLOT_BANCA:
          this.jpImg.spriteFrame = this.listSpr[4];
          break;

         case _Constants.ZONE_ID.MINI_BACAY:
          this.jpImg.spriteFrame = this.listSpr[5];
          break;

         case _Constants.ZONE_ID.CAO_THAP:
          this.jpImg.spriteFrame = this.listSpr[6];
        }
        this.username.string = data.displayName.length > 15 ? data.displayName.substring(0, 13) + "..." : data.displayName;
        this.gold.string = (0, _Helper.moneyFormat)(data.win, true);
        this.time.string = data.time;
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Constants": "Constants",
    "../../Utils/Helper": "Helper"
  } ],
  UserService: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c8d0+d3B5Nh6bzi/1UVam8", "UserService");
    "use strict";
    var _qs = require("qs");
    var _qs2 = _interopRequireDefault(_qs);
    var _Config = require("../Configs/Config");
    var _Constants = require("../Utils/Constants");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {},
      emit: function emit(topic, data) {
        this.node.emit(topic, data);
      },
      on: function on(topic, action, prefix) {
        this.node.on(prefix ? prefix + "_" + topic : topic, action);
      },
      off: function off(topic, action, prefix) {
        this.node.off(prefix ? prefix + "_" + topic : topic, action);
      },
      once: function once(topic, action) {
        this.node.once(topic, action);
      },
      onDestroy: function onDestroy() {
        window.$Global.networkService.off("" + _Constants.REQUEST_TYPE.AUTH);
      },
      loginFacebook: function loginFacebook(accessToken, otp) {
        var data = {
          accessoken: accessToken,
          g2fa: otp,
          loginType: 2
        };
        window.$Global.networkService.wsSendLoginFacebook(data);
        var loginPromise = new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.AUTH, function(event) {
            resolve(event);
          });
        });
        return loginPromise;
      },
      login: function login(username, password, otp) {
        var data = {
          username: username,
          password: password,
          g2fa: otp,
          loginType: 1
        };
        window.$Global.networkService.wsSendLogin(data);
        var loginPromise = new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.AUTH, function(event) {
            resolve(event);
          });
        });
        return loginPromise;
      },
      onLogin: function onLogin(userInfoLogin) {
        this.userInfoLogin = userInfoLogin;
      },
      logout: function logout() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.SIGNOUT);
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.SIGNOUT, function(event) {
            resolve(event);
          });
        });
      },
      activateUserAccount: function activateUserAccount(otp) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.VERIFY_G2FA, {
          userId: window.$Global.networkService.userInfo.id
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.VERIFY_G2FA, function(event) {
            var result = event.resultCode;
            resolve(result);
          });
        });
      },
      getUserDetail: function getUserDetail(userId) {
        return new Promise(function(resolve, reject) {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (4 == xhttp.readyState && 200 == xhttp.status) {
              var response = JSON.parse(xhttp.responseText);
              cc.log("GET USER DETAIL");
              cc.log(response);
              var userDetail = response.data;
              resolve(userDetail);
            }
          };
          var url = _Config.CONFIG.URLS.server + _Config.CONFIG.API.PATHS.userDetail + "?userId=" + userId;
          xhttp.open("GET", url, true);
          xhttp.setRequestHeader("token", window.$Global.CONFIG.token);
          xhttp.send();
        });
      },
      getDealers: function getDealers() {
        return new Promise(function(resolve, reject) {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (4 == xhttp.readyState && 200 == xhttp.status) {
              var response = JSON.parse(xhttp.responseText);
              cc.log("GET DEALERS");
              cc.log(response);
              var agencys = response.data.agency;
              resolve(agencys);
            }
          };
          var url = _Config.CONFIG.URLS.server + _Config.CONFIG.API.PATHS.dealers;
          xhttp.open("GET", url, true);
          xhttp.setRequestHeader("token", window.$Global.CONFIG.token);
          xhttp.send();
        });
      },
      getUserList: function getUserList(page, userId) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.GET_LIST_REF_USER, {
          userId: userId,
          page: page
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.GET_LIST_REF_USER, function(event) {
            resolve(event.users);
          });
        });
      },
      getUserInfo: function getUserInfo(userId) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.GET_USER_INFO, {
          userId: userId || window.$Global.networkService.userInfo.id
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.GET_USER_INFO, function(event) {
            resolve(event);
          });
        });
      },
      getUserMessages: function getUserMessages() {
        var page = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.GET_MESSAGES, {
          status: -1,
          page: page
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.GET_MESSAGES, function(event) {
            resolve(event.messages);
          });
        });
      },
      getUserMessageCount: function getUserMessageCount() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.GET_USER_MESSAGE_COUNT, {});
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.GET_USER_MESSAGE_COUNT, function(event) {
            resolve(event);
          });
        });
      },
      sendMessage: function sendMessage(userId, title, message) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.SEND_MESSAGE, {
          userId: userId,
          title: title,
          message: message
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.SEND_MESSAGE, function(event) {
            resolve(event);
          });
        });
      },
      readMessage: function readMessage(msgId) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.READ_MESSAGE, {
          msgId: msgId
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.READ_MESSAGE, function(event) {
            resolve(event);
          });
        });
      },
      deleteMessages: function deleteMessages(msgIds) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.DELETE_MESSAGE, {
          msgIds: msgIds
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.DELETE_MESSAGE, function(event) {
            resolve(event);
          });
        });
      },
      changePassword: function changePassword(oldPassword, newPassword) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.CHANGE_PASS, {
          oldPassword: oldPassword,
          newPassword: newPassword
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.CHANGE_PASS, function(event) {
            resolve(event);
          });
        });
      },
      updateInfo: function updateInfo(newInfo) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.UPDATE_INFO, {
          name: newInfo.name,
          mobile: newInfo.mobile,
          email: "unknow@gmail.com",
          address: "us",
          gender: "1",
          passport: "1"
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.UPDATE_INFO, function(event) {
            resolve(event);
          });
        });
      },
      sendGiftCode: function sendGiftCode(giftcode) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.GIFT_CODE, {
          code: giftcode
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.GIFT_CODE, function(event) {
            resolve(event.resultCode);
          });
        });
      },
      sendChat: function sendChat(content) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.GLOBAL_CHAT, {
          type: _Constants.NOTIFY_TYPE.WORLD_CHAT_NOTIFICATION,
          message: content
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.GLOBAL_CHAT, function(event) {
            resolve(event);
          });
        });
      },
      getListKoin: function getListKoin() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.AVAILABLE_KOIN, {});
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.AVAILABLE_KOIN, function(event) {
            resolve(event);
          });
        });
      },
      exchangeGold: function exchangeGold(amount, g2fa) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.EXCHANGE_GOLD, {
          amount: amount,
          g2fa: g2fa
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.EXCHANGE_GOLD, function(event) {
            resolve(event);
          });
        });
      },
      koinToGold: function koinToGold(code, amount, g2fa) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.KOIN_TO_GOLD, {
          code: code,
          amount: amount,
          g2fa: g2fa
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.KOIN_TO_GOLD, function(event) {
            resolve(event);
          });
        });
      },
      transferGold: function transferGold(amount, userId, message, g2fa) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.TRANSFER_GOLD, {
          amount: amount,
          userId: userId,
          message: message,
          g2fa: g2fa
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.TRANSFER_GOLD, function(event) {
            resolve(event.resultCode);
          });
        });
      },
      setC2: function setC2(userId, agencyRate) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.SET_C2, {
          userId: userId,
          agencyRate: agencyRate
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.SET_C2, function(event) {
            resolve(event);
          });
        });
      },
      removeC2: function removeC2(userId) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.DEL_C2, {
          userId: userId
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.DEL_C2, function(event) {
            resolve(event);
          });
        });
      },
      getUserGoldHistory: function getUserGoldHistory(trans_type, page) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.USER_GOLD_HISTORY, {
          trans_type: trans_type,
          page: page
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.USER_GOLD_HISTORY, function(event) {
            resolve(event);
          });
        });
      },
      updateMoney: function updateMoney() {},
      getConfigTransferGold: function getConfigTransferGold() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.GET_CONFIG, {
          type: _Constants.CONFIG_TYPE.TRANSFER_GOLD
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.GET_CONFIG, function(event) {
            event.type == _Constants.CONFIG_TYPE.TRANSFER_GOLD && resolve(event);
          });
        });
      },
      getOTP: function getOTP() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.GET_OTPCODE);
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.GET_OTPCODE, function(event) {
            resolve(event);
          });
        });
      },
      getVippoint: function getVippoint() {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.GET_VIP_POINTS);
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.GET_VIP_POINTS, function(event) {
            resolve(event);
          });
        });
      },
      toggleSecurity: function toggleSecurity(toggle) {
        window.$Global.networkService.sendMessage(_Constants.REQUEST_TYPE.TOGGLE_LOGIN_G2FA, {
          status: toggle
        });
        return new Promise(function(resolve, reject) {
          window.$Global.networkService.once("" + _Constants.REQUEST_TYPE.TOGGLE_LOGIN_G2FA, function(event) {
            resolve(event);
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
  VippointItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c4678KmNJHBrqMx/DBvrt0", "VippointItem");
    "use strict";
    var _Helper = require("../../Utils/Helper");
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
      setData: function setData(data) {
        this.vipIcon.spriteFrame = this.listIcon[data.rank - 1];
        this.txtVipName.string = "VIP " + data.rank;
        this.txtVippoint.string = (0, _Helper.numberWithDot)(data.point);
        this.txtVipBonus.string = (0, _Helper.numberWithDot)(data.gold);
      }
    });
    cc._RF.pop();
  }, {
    "../../Utils/Helper": "Helper"
  } ],
  XucXac: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e559cPt/ZCyYBEjBIMcpX3", "XucXac");
    "use strict";
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
      hideDice: function hideDice() {
        this.xucxacQuay.active = false;
        this.xucxacKetQua.active = false;
      },
      onFinishRoll: function onFinishRoll() {
        this.xucxacQuay.active = false;
        this.xucxacKetQua.active = true;
        this.showResult(this.values);
        this.node.emit("finishRoll");
      },
      letRoll: function letRoll(result, callback) {
        var _this = this;
        this.node.active = true;
        this.setResult(result);
        this.xucxacKetQua.active = false;
        this.xucxacQuay.active = true;
        var anim = this.xucxacQuay.getComponent(cc.Animation);
        anim ? anim.play("DiceRoll") : cc.error("No animation");
        setTimeout(function() {
          callback && callback();
          _this.onFinishRoll();
        }, 1300);
      },
      showResult: function showResult(values) {
        this.setResultFace(0, values[0]);
        this.setResultFace(1, values[1]);
        this.setResultFace(2, values[2]);
      },
      setResult: function setResult(values) {
        this.values = values;
        this.total = values[0] + values[1] + values[2];
      },
      setResultFace: function setResultFace(faceIndex, value) {
        this.xucxacKetQuaFaces[faceIndex].spriteFrame = this.resultFrames[value - 1];
      },
      getFace: function getFace(faceIndex) {
        return this.xucxacKetQuaFaces[faceIndex];
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Config", "LocalDataManager", "PlayerDataManager", "Global", "BauCuaDoor", "BauCuaHistoryItem", "BauCuaTopUserItem", "DialogBauCuaHistory", "DialogBauCuaTop", "HisItem", "MiniBauCua", "CaoThap", "BaseDialog", "BaseInputBlocker", "BaseList", "BaseListItem", "BasePanelNotification", "BasePopup", "BaseTab", "BaseTabContainer", "NotifyJackpot", "PopupMessage", "Toast", "UIHelper", "FxMoveIn.js", "FxShake.js", "EventPanel", "AgencyItem", "ButtonKoin", "ButtonToggle", "Dialog_AddInfo", "Dialog_ChangePassword", "Dialog_Event", "Dialog_GiftCode", "Dialog_GoldHistory", "Dialog_HistoryDetail", "Dialog_Mail", "Dialog_PlayerList", "Dialog_Profile", "Dialog_ProfileUpdate", "Dialog_Setting", "Dialog_TopUp", "Dialog_VIP", "Dialog_XacThuc", "GameListScene", "GoldHistoryItem", "ListItemMail", "ListMail", "LobbyItem", "MinigameLobbyItem", "MultipleFund", "PanelAgency", "PanelCard", "PanelGameList", "PanelMoney", "PanelNotificationMarquee", "PanelPlayer", "PanelProfileInfo", "PanelProfileSecurity", "PanelTransfer", "PanelViExchange", "PanelViHistory", "PanelViRecharge", "PanelVipPoint", "RefUserItem", "SlotRoomItem", "TabGoldHistory", "VippointItem", "Jackpot", "JackpotUser", "UserJackpotItem", "Loading", "LoginScene", "BaCayJackpotHistory", "BaCayUserHistory", "MiniBaCay", "DialogMiniPokerHistory", "DialogMiniPokerHuHistory", "MiniGameMiniPoker", "MiniPokerHistoryItem", "MiniPokerHuHistoryItem", "Dialog_SelectLine", "Dialog_SlotJackpotHistory", "Dialog_SlotUserHistory", "MiniSlot", "Minigame", "BetPanel", "ChatController", "DialogChat", "DialogTaiXiuDuaTop", "DialogTaiXiuHelp", "DialogTaiXiuHistory", "DialogTaiXiuMatchHistory", "DialogTaiXiuThongKe", "DialogTaiXiuTopUser", "HistoryItem", "ListTaiXiuHistory", "ListTaiXiuMatchHistory", "MiniGameTaiXiu", "TaiXiuChartLine", "TaiXiuChartTable", "TaiXiuChartTablePoint", "TaiXiuHistoryItem", "TaiXiuMatchHistoryItem", "TaiXiuTopEventItem", "TaiXiuTopUserItem", "XucXac", "GamePlayService", "NetworkService", "UserService", "AudioController", "BXHHuItem", "BetTableController", "BigWinEffect", "JackpotEffect", "PlayedHistoryItem", "SlotController", "SlotDialog", "SlotGameUIManager", "SlotItem", "Constants", "DragAndDrop", "Helper", "ObjectUtil", "LoadSdkPlugin" ]);