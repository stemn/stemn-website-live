webpackJsonp([7,62],{

/***/ "0MEN":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primary":"#4484d3","slider":"FileCompareSlider_slider-3e-Om","active":"FileCompareSlider_active-2S86s"};

/***/ },

/***/ "1L9T":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__("aSqn");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  return _react2.default.createElement(
    _reactIconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M1.125,1.125v21.75h21.75V1.125H1.125z M3.125,3.125H11v17.75H3.125V3.125z M20.875,20.875H13V3.125h7.875V20.875z' })
  );
};

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/side-by-side.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/side-by-side.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "1aPA":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _codemirror = __webpack_require__("8U58");

var _codemirror2 = _interopRequireDefault(_codemirror);

__webpack_require__("+fCR");

var _EditorDisplay = __webpack_require__("i0X4");

var _EditorDisplay2 = _interopRequireDefault(_EditorDisplay);

var _LazyLoading = __webpack_require__("OiUg");

var _Container = __webpack_require__("0h7P");

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requireCodemirrorMode = __webpack_require__(5);

var Viewer = function (_Component) {
  (0, _inherits3.default)(Viewer, _Component);

  function Viewer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Viewer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Viewer.__proto__ || (0, _getPrototypeOf2.default)(Viewer)).call.apply(_ref, [this].concat(args))), _this), _this.getCodemirrorRef = function () {
      var _this2;

      return (_this2 = _this).__getCodemirrorRef__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Viewer, [{
    key: '__getCodemirrorRef__REACT_HOT_LOADER__',
    value: function __getCodemirrorRef__REACT_HOT_LOADER__(ref) {
      var _props = this.props,
          data = _props.data,
          extension = _props.extension;


      if (ref && extension) {
        this.codemirrorRef = ref;
        this.codemirrorRef.innerHTML = '';
        var editorInstance = (0, _codemirror2.default)(this.codemirrorRef, {
          value: data,
          indentWithTabs: true,
          readOnly: true,
          dragDrop: false,
          lineWrapping: true,
          lineNumbers: true
        });
        // Get Mode
        var modeInfo = _codemirror2.default.findModeByExtension(extension);
        var mode = modeInfo ? modeInfo.mode : 'null';
        if (mode && mode != 'null') {
          var modePath = './' + mode + '/' + mode + '.js';
          var webpackModePath = requireCodemirrorMode(modePath);

          // Attach codemirror to the window so the mode pack will find it
          window.CodeMirror = _codemirror2.default;
          // Load the mode
          (0, _LazyLoading.load)([{ src: webpackModePath }]).then(function () {
            // Set the mode after it has loaded
            editorInstance.setOption('mode', mode);
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          data = _props2.data,
          previewMarkdown = _props2.previewMarkdown;


      return _react2.default.createElement(
        'div',
        { className: 'layout-row flex' },
        previewMarkdown && _react2.default.createElement(
          'div',
          { className: 'scroll-box flex', style: { padding: '30px' } },
          _react2.default.createElement(
            _Container2.default,
            null,
            _react2.default.createElement(_EditorDisplay2.default, { value: data })
          )
        ),
        !previewMarkdown && _react2.default.createElement('div', { className: 'scroll-box flex', ref: this.getCodemirrorRef })
      );
    }
  }]);
  return Viewer;
}(_react.Component);

exports.default = Viewer;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Viewer, 'Viewer', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCode/Viewer.jsx');

  __REACT_HOT_LOADER__.register(requireCodemirrorMode, 'requireCodemirrorMode', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCode/Viewer.jsx');
}();

;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "2v8s":
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTUwcHgiIGhlaWdodD0iMTUwcHgiIHZpZXdCb3g9IjAgMCAxNTAgMTUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNTAgMTUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjI1Ljc1IiB5PSIyNi4wMzUiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSI5OC41IiBoZWlnaHQ9IjExLjUiLz4NCgkJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik0xMjYuMjUsMzkuNTM1SDIzLjc1di0xNS41aDEwMi41VjM5LjUzNXogTTI3Ljc1LDM1LjUzNWg5NC41di03LjVoLTk0LjVWMzUuNTM1eiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTMwLjI1LDMxLjcwMmgzLjczOEgzMC4yNXoiLz4NCgkJCTxyZWN0IHg9IjMwLjI1IiB5PSIyOS43MDIiIGZpbGw9IiMyODJEMzMiIHdpZHRoPSIzLjczOCIgaGVpZ2h0PSI0Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzYuNzIyLDMxLjcwMmgzLjc0SDM2LjcyMnoiLz4NCgkJCTxyZWN0IHg9IjM2LjcyMiIgeT0iMjkuNzAyIiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iMy43NCIgaGVpZ2h0PSI0Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDMuMTkzLDMxLjcwMmgzLjc0SDQzLjE5M3oiLz4NCgkJCTxyZWN0IHg9IjQzLjE5MyIgeT0iMjkuNzAyIiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iMy43NCIgaGVpZ2h0PSI0Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cG9seWdvbiBmaWxsPSIjMjgyRDMzIiBwb2ludHM9IjEyNi4yNSw5NS4wMzUgMTEyLjg3Nyw5NS4wMzUgMTEyLjg3Nyw5MS4wMzUgMTIyLjI1LDkxLjAzNSAxMjIuMjUsMzkuNTM1IDI3Ljc1LDM5LjUzNQ0KCQkJCTI3Ljc1LDkxLjAzNSAzNy4xMjMsOTEuMDM1IDM3LjEyMyw5NS4wMzUgMjMuNzUsOTUuMDM1IDIzLjc1LDM1LjUzNSAxMjYuMjUsMzUuNTM1IAkJCSIvPg0KCQk8L2c+DQoJPC9nPg0KCTxyZWN0IHg9IjMxLjc1IiB5PSI0NC41MzUiIGZpbGw9IiNCN0JFQzAiIHdpZHRoPSI4Ni41IiBoZWlnaHQ9IjQxLjUiLz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTA2LjA3LDkyLjg5M2MwLDE3LjE1OS0xMy45MTEsMzEuMDcyLTMxLjA3LDMxLjA3MmMtMTcuMTYxLDAtMzEuMDctMTMuOTEzLTMxLjA3LTMxLjA3Mg0KCQkJCWMwLTE3LjE1NSwxMy45MDktMzEuMDY4LDMxLjA3LTMxLjA2OEM5Mi4xNTksNjEuODI0LDEwNi4wNyw3NS43MzcsMTA2LjA3LDkyLjg5M3oiLz4NCgkJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik03NSwxMjUuOTY1Yy0xOC4yMzUsMC0zMy4wNy0xNC44MzYtMzMuMDctMzMuMDcyYzAtMTguMjMzLDE0LjgzNS0zMy4wNjgsMzMuMDctMzMuMDY4DQoJCQkJczMzLjA3LDE0LjgzNSwzMy4wNywzMy4wNjhDMTA4LjA3LDExMS4xMjksOTMuMjM1LDEyNS45NjUsNzUsMTI1Ljk2NXogTTc1LDYzLjgyNGMtMTYuMDI5LDAtMjkuMDcsMTMuMDQxLTI5LjA3LDI5LjA2OA0KCQkJCWMwLDE2LjAyOSwxMy4wNDEsMjkuMDcyLDI5LjA3LDI5LjA3MnMyOS4wNy0xMy4wNDMsMjkuMDctMjkuMDcyQzEwNC4wNyw3Ni44NjUsOTEuMDI5LDYzLjgyNCw3NSw2My44MjR6Ii8+DQoJCTwvZz4NCgkJPHBhdGggZmlsbD0iIzMwQzBEOCIgZD0iTTc1LDY4LjA4MmMtMC4xMTUsMC0wLjIyOSwwLjAwOC0wLjM0MiwwLjAwOHYyNC42NWgyNS4xNUM5OS43MjcsNzkuMTA5LDg4LjY1Miw2OC4wODIsNzUsNjguMDgyeiIvPg0KCQk8Zz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik04MS4yNTEsNTQuMDI5Yy0wLjAwNCwwLjc0NC0wLjYwNCwxLjM0Ni0xLjM1MiwxLjM0NmgtOS44MDZjLTAuNzQyLDAtMS4zNDUtMC42MDItMS4zNDItMS4zNDYNCgkJCQkJbC0wLjAwMy02LjM3M2MwLjAwMy0wLjc0NiwwLjYwMy0xLjM1LDEuMzQ1LTEuMzVsOS44MDYsMC4wMDJjMC43NDcsMCwxLjM1MiwwLjYwMiwxLjM0OCwxLjM0OEw4MS4yNTEsNTQuMDI5eiIvPg0KCQkJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik03OS44OTksNTcuMzc1aC05LjgwNmMtMC44OTYsMC0xLjczNy0wLjM1LTIuMzY5LTAuOTg0Yy0wLjYzMS0wLjYzMy0wLjk3Ni0xLjQ3NS0wLjk3My0yLjM2OA0KCQkJCQlsLTAuMDAzLTYuMzY0YzAuMDA4LTEuODUyLDEuNTA4LTMuMzUyLDMuMzQ1LTMuMzUybDkuODA3LDAuMDAyYzAuODk4LDAsMS43NDMsMC4zNTEsMi4zNzYsMC45ODcNCgkJCQkJYzAuNjMxLDAuNjM0LDAuOTc2LDEuNDc4LDAuOTcxLDIuMzcxbDAuMDA0LDYuMzYxQzgzLjI0MSw1NS44NzksODEuNzM3LDU3LjM3NSw3OS44OTksNTcuMzc1eiBNNzAuNzUxLDUzLjM3NWg4LjVsLTAuMDA0LTUuMDY2DQoJCQkJCWwtOC40OTgtMC4wMDJMNzAuNzUxLDUzLjM3NXoiLz4NCgkJCTwvZz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxnPg0KCQkJCTxnPg0KCQkJCQk8Zz4NCgkJCQkJCTxnPg0KCQkJCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01Mi44OTYsNjUuNTc0bC0yLjIyOS0zLjI4M2MtMC4yNjItMC4zODMtMC4xNjEtMC45MDUsMC4yMjItMS4xNjRsNS4wNTEtMy40Mw0KCQkJCQkJCQljMC4zODEtMC4yNTgsMC45MDMtMC4xNjEsMS4xNjQsMC4yMjRsMi4yMjksMy4yNzhMNTIuODk2LDY1LjU3NHoiLz4NCgkJCQkJCQk8cGF0aCBmaWxsPSIjMjgyRDMzIiBkPSJNNTEuMjQxLDY2LjY5N2wtMi4yMjktMy4yODNjLTAuNDI2LTAuNjIyLTAuNTg0LTEuMzc5LTAuNDQxLTIuMTI1DQoJCQkJCQkJCWMwLjE0My0wLjc0OCwwLjU2Ny0xLjM5NCwxLjE5Ny0xLjgxOWw1LjA0Ny0zLjQyN2MwLjYyNS0wLjQyNiwxLjM4MS0wLjU4MywyLjEyNy0wLjQzOWMwLjc0NSwwLjE0MiwxLjM5MSwwLjU2NiwxLjgxNiwxLjE5NQ0KCQkJCQkJCQlsMi4yMjgsMy4yNzdsLTMuMzA5LDIuMjQ4bC0xLjU3Ni0yLjMxOGwtMy4xMjgsMi4xMjJsMS41NzgsMi4zMjJMNTEuMjQxLDY2LjY5N3oiLz4NCgkJCQkJCTwvZz4NCgkJCQkJPC9nPg0KCQkJCTwvZz4NCgkJCTwvZz4NCgkJCTxnPg0KCQkJCTxnPg0KCQkJCQk8Zz4NCgkJCQkJCTxnPg0KCQkJCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik05Ny4xMDQsNjUuNTc0bDIuMjI5LTMuMjgzYzAuMjYyLTAuMzgzLDAuMTYtMC45MDQtMC4yMjMtMS4xNjRsLTUuMDUtMy40Mw0KCQkJCQkJCQljLTAuMzgyLTAuMjU4LTAuOTAyLTAuMTYxLTEuMTY0LDAuMjI1bC0yLjIyOSwzLjI3N0w5Ny4xMDQsNjUuNTc0eiIvPg0KCQkJCQkJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik05OC43NTksNjYuNjk3bC0zLjMxMS0yLjI0N2wxLjU3Ni0yLjMyMWwtMy4xMjctMi4xMjNsLTEuNTc4LDIuMzE4bC0zLjMwNy0yLjI0OWwyLjIyOS0zLjI3OA0KCQkJCQkJCQljMC44NzgtMS4yOTMsMi42NDYtMS42MzIsMy45NC0wLjc1NGw1LjA1MiwzLjQzYzAuNjI3LDAuNDI1LDEuMDUxLDEuMDcsMS4xOTMsMS44MTZzLTAuMDE1LDEuNTAyLTAuNDQyLDIuMTI5TDk4Ljc1OSw2Ni42OTcNCgkJCQkJCQkJeiIvPg0KCQkJCQkJPC9nPg0KCQkJCQk8L2c+DQoJCQkJPC9nPg0KCQkJPC9nPg0KCQk8L2c+DQoJCTxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9Ijc0Ljk5OSIgY3k9IjkyLjg5NSIgcj0iMTYuMjEyIi8+DQoJCTxnPg0KCQkJPGc+DQoJCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTc0Ljc3Nyw2OS43Njl2My44ODhWNjkuNzY5eiIvPg0KCQkJCTxyZWN0IHg9IjcyLjc3NyIgeT0iNjkuNzY5IiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iNCIgaGVpZ2h0PSIzLjg4OCIvPg0KCQkJPC9nPg0KCQkJPGc+DQoJCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYzLjI0NSw3Mi45NzdsMS45NDMsMy4zNjdMNjMuMjQ1LDcyLjk3N3oiLz4NCg0KCQkJCQk8cmVjdCB4PSI2Mi4yNzMiIHk9IjcyLjY2MSIgdHJhbnNmb3JtPSJtYXRyaXgoMC40OTk5IDAuODY2MSAtMC44NjYxIDAuNDk5OSA5Ni43ODA2IC0xOC4yNzgxKSIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjMuODg4IiBoZWlnaHQ9IjQiLz4NCgkJCTwvZz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01NC44Niw4MS41MjFsMy4zNjgsMS45NDlMNTQuODYsODEuNTIxeiIvPg0KDQoJCQkJCTxyZWN0IHg9IjU0LjU5OSIgeT0iODAuNDk2IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NTUgMC41MDA5IC0wLjUwMDkgMC44NjU1IDQ4LjkyNTggLTE3LjIyNzcpIiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iMy44OTIiIGhlaWdodD0iMy45OTkiLz4NCgkJCTwvZz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01MS44NzMsOTMuMTE1aDMuODg5SDUxLjg3M3oiLz4NCgkJCQk8cmVjdCB4PSI1MS44NzMiIHk9IjkxLjExNSIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjMuODg5IiBoZWlnaHQ9IjQiLz4NCgkJCTwvZz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01NS4wOCwxMDQuNjVsMy4zNjktMS45NDNMNTUuMDgsMTA0LjY1eiIvPg0KDQoJCQkJCTxyZWN0IHg9IjU0Ljc2NSIgeT0iMTAxLjczMyIgdHJhbnNmb3JtPSJtYXRyaXgoMC40OTk2IDAuODY2MyAtMC44NjYzIDAuNDk5NiAxMTguMjIyNCAyLjcxMTIpIiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iNCIgaGVpZ2h0PSIzLjg5Ii8+DQoJCQk8L2c+DQoJCQk8Zz4NCgkJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjMuNjI1LDExMy4wMzNsMS45NDctMy4zNjdMNjMuNjI1LDExMy4wMzN6Ii8+DQoNCgkJCQkJPHJlY3QgeD0iNjIuNTk4IiB5PSIxMDkuNDA0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NTYgMC41MDA3IC0wLjUwMDcgMC44NjU2IDY0LjQzMDMgLTE3LjM4MTUpIiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iNCIgaGVpZ2h0PSIzLjg5Ii8+DQoJCQk8L2c+DQoJCQk8Zz4NCgkJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNzUuMjE5LDExNi4wMjJsMC4wMDItMy44OUw3NS4yMTksMTE2LjAyMnoiLz4NCgkJCQk8cmVjdCB4PSI3My4yMiIgeT0iMTEyLjEzMiIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjQiIGhlaWdodD0iMy44OTEiLz4NCgkJCTwvZz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik04Ni43NTQsMTEyLjgxNGwtMS45NDMtMy4zNzFMODYuNzU0LDExMi44MTR6Ii8+DQoNCgkJCQkJPHJlY3QgeD0iODMuODM4IiB5PSIxMDkuMTI5IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjQ5OTYgMC44NjYyIC0wLjg2NjIgMC40OTk2IDEzOS4xODQxIC0xOC43MDM2KSIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjMuODg5IiBoZWlnaHQ9IjQiLz4NCgkJCTwvZz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik05NS4xMzcsMTA0LjI3bC0zLjM2Ni0xLjk0OEw5NS4xMzcsMTA0LjI3eiIvPg0KDQoJCQkJCTxyZWN0IHg9IjkxLjUwOSIgeT0iMTAxLjI5NCIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjU3IDAuNTAwNiAtMC41MDA2IDAuODY1NyA2NC4yNjU1IC0zMi45MDkxKSIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjMuODkiIGhlaWdodD0iNC4wMDEiLz4NCgkJCTwvZz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik05OC4xMjUsOTIuNjc4bC0zLjg5LTAuMDA2TDk4LjEyNSw5Mi42Nzh6Ii8+DQoJCQkJPHJlY3QgeD0iOTQuMjM1IiB5PSI5MC42NzUiIHRyYW5zZm9ybT0ibWF0cml4KDEgMC4wMDE1IC0wLjAwMTUgMSAwLjEzOTcgLTAuMTQ0OCkiIGZpbGw9IiMyODJEMzMiIHdpZHRoPSIzLjg5IiBoZWlnaHQ9IjQiLz4NCgkJCTwvZz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik05NC45MTcsODEuMTQzbC0zLjM3LDEuOTQyTDk0LjkxNyw4MS4xNDN6Ii8+DQoNCgkJCQkJPHJlY3QgeD0iOTEuMjMyIiB5PSI4MC4xNjkiIHRyYW5zZm9ybT0ibWF0cml4KDAuNDk5NiAwLjg2NjMgLTAuODY2MyAwLjQ5OTYgMTE3Ljc5MTQgLTM5LjY3MTcpIiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iNCIgaGVpZ2h0PSIzLjg5Ii8+DQoJCQk8L2c+DQoJCQk8Zz4NCgkJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNODYuMzczLDcyLjc1OGwtMS45NDcsMy4zNjVMODYuMzczLDcyLjc1OHoiLz4NCg0KCQkJCQk8cmVjdCB4PSI4My4zOTkiIHk9IjcyLjQ5NiIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjU3IDAuNTAwNSAtMC41MDA1IDAuODY1NyA0OC43MjMxIC0zMi43NDc3KSIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjQiIGhlaWdodD0iMy44OSIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTc2LjczLDkwLjczMmwxMC42MDctMTAuODEyTDc2LjczLDkwLjczMnoiLz4NCg0KCQkJCTxyZWN0IHg9IjgwLjAzNCIgeT0iNzcuNzUzIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcxMzggMC43MDA0IC0wLjcwMDQgMC43MTM4IDgzLjIzODQgLTMzLjAzMjIpIiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iNCIgaGVpZ2h0PSIxNS4xNDYiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik03Ny45NzcsOTIuODY5Yy0wLjAwMi0xLjY0Ni0xLjMzNi0yLjk3Ny0yLjk3OS0yLjk4Yy0xLjY0MywwLjAwMi0yLjk3OSwxLjMzNC0yLjk3NiwyLjk3OQ0KCQkJCQljMCwxLjY0MywxLjMzMSwyLjk3NywyLjk3OCwyLjk3N0M3Ni42NDEsOTUuODQ2LDc3Ljk3NSw5NC41MTEsNzcuOTc3LDkyLjg2OXoiLz4NCgkJCQk8cGF0aCBmaWxsPSIjMjgyRDMzIiBkPSJNNzUuMDAzLDk3Ljg0NUw3NS4wMDMsOTcuODQ1Yy0wLjAwMSwwLTAuMDA0LDAtMC4wMDUsMGMtMi43NDMsMC00Ljk3Ni0yLjIzMi00Ljk3Ni00Ljk3Nw0KCQkJCQljLTAuMDA1LTIuNzM5LDIuMjI2LTQuOTc2LDQuOTczLTQuOTc5YzIuNzQ3LDAuMDA2LDQuOTc5LDIuMjM5LDQuOTgxLDQuOTc4Qzc5Ljk3NCw5NS42MTMsNzcuNzQyLDk3Ljg0NSw3NS4wMDMsOTcuODQ1eg0KCQkJCQkgTTc0Ljk5Myw5MS44ODljLTAuNTMyLDAtMC45NzIsMC40MzgtMC45NzEsMC45NzZjMCwwLjU0MiwwLjQzOCwwLjk4LDAuOTc4LDAuOThoMC4wMDNjMC41MzYsMCwwLjk3My0wLjQzOCwwLjk3NC0wLjk3OQ0KCQkJCQlDNzUuOTc2LDkyLjMzLDc1LjUzNCw5MS44OSw3NC45OTMsOTEuODg5eiIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHJlY3QgeD0iNzMiIHk9IjU1LjIwMSIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjQiIGhlaWdodD0iNC42OTEiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ },

/***/ "37Zr":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Crumb = exports.Breadcrumbs = undefined;

var _Breadcrumbs2 = __webpack_require__("iMBo");

var _Breadcrumbs3 = _interopRequireDefault(_Breadcrumbs2);

var _Crumb2 = __webpack_require__("7acK");

var _Crumb3 = _interopRequireDefault(_Crumb2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = exports.Breadcrumbs = _Breadcrumbs3.default;
var Crumb = exports.Crumb = _Crumb3.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Breadcrumbs, 'Breadcrumbs', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Breadcrumbs/index.js');

  __REACT_HOT_LOADER__.register(Crumb, 'Crumb', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Breadcrumbs/index.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "3xMh":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _LoadSplitCode = __webpack_require__("diW0");

var _LoadSplitCode2 = _interopRequireDefault(_LoadSplitCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var systemImport = function systemImport() {
  return __webpack_require__.e/* System.import */(58).then(__webpack_require__.bind(null, "uFWM"));
};

var _default = function _default(props) {
  return _react2.default.createElement(_LoadSplitCode2.default, (0, _extends3.default)({
    cacheKey: 'PreviewPcb',
    systemImport: systemImport
  }, props));
};

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(systemImport, 'systemImport', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewPcbLoader/PreviewPcbLoader.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewPcbLoader/PreviewPcbLoader.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewPcbLoader/PreviewPcbLoader.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "4Fub":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _PreviewCode = __webpack_require__("9MLQ");

var _PreviewCode2 = _interopRequireDefault(_PreviewCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PreviewCode2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "4Qe5":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var baseFlatten = __webpack_require__("0ewx"),
    baseOrderBy = __webpack_require__("Esii"),
    baseRest = __webpack_require__("z1Oj"),
    isIterateeCall = __webpack_require__("AKJT");

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */
var sortBy = baseRest(function (collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(sortBy, 'sortBy', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/node_modules/lodash/sortBy.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "4cmy":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__("Yrew");

var _Button2 = _interopRequireDefault(_Button);

var _StandardTable = __webpack_require__("kS0c");

var _StandardTable2 = _interopRequireDefault(_StandardTable);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = _react2.default.createClass({
  displayName: 'Component',
  render: function render() {
    var _props = this.props,
        modalCancel = _props.modalCancel,
        modalConfirm = _props.modalConfirm;
    var parts = this.props.parts;

    return _react2.default.createElement(
      'div',
      { style: { width: '500px' } },
      _react2.default.createElement(
        'div',
        { className: 'modal-title' },
        'Assembly part could not be found'
      ),
      _react2.default.createElement(
        'div',
        { className: 'modal-body', style: { lineHeight: '1.4em' } },
        _react2.default.createElement(
          'p',
          null,
          'Assembly rendering is in Beta - we need your help to perfect it. Currently, we can only find sub-parts if they are in the same folder (or a sub-folder) of the main assembly file.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'If your assembly is not rendering, please add your voice to the ',
          _react2.default.createElement(
            'a',
            { className: 'link-primary', target: '_blank', href: 'https://github.com/Stemn/Stemn-Desktop/issues/4' },
            'assembly part not found issue'
          ),
          '.'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'modal-footer-no-line layout-row layout-align-end' },
        _react2.default.createElement(
          _Button2.default,
          {
            className: 'primary',
            onClick: modalConfirm
          },
          'OK'
        )
      )
    );
  }
});

var _default = Component;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Component, 'Component', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/AssemblyPartNotFound/AssemblyPartNotFoundModal/AssemblyPartNotFoundModal.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/AssemblyPartNotFound/AssemblyPartNotFoundModal/AssemblyPartNotFoundModal.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/AssemblyPartNotFound/AssemblyPartNotFoundModal/AssemblyPartNotFoundModal.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "4uMU":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primary":"#4484d3","border1":"rgba(0, 0, 0, 0.1)","bg1":"rgba(0, 0, 0, 0.03)","header":"PreviewFile_header-3pjp9"};

/***/ },

/***/ "5Au4":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var isArrayLikeObject = __webpack_require__("p/cs");

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(castArrayLikeObject, 'castArrayLikeObject', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/node_modules/lodash/_castArrayLikeObject.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "66lh":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports =  true ? __webpack_require__("Uy/o") : require('./FileCompareMenu.desktop.jsx');
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "6DBV":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TogglePanel = undefined;

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("4n+p");

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _TogglePanelActions = __webpack_require__("z53e");

var _TogglePanel = __webpack_require__("vVr8");

var _TogglePanel2 = _interopRequireDefault(_TogglePanel);

var _chevronRight = __webpack_require__("raO4");

var _chevronRight2 = _interopRequireDefault(_chevronRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** ************************************************************
  <TogglePanel cacheKey="some-cache-id">
    <div className="layout-row flex layout-align-start-center">
      <div className="flex">Header Content</div>
    </div>
    <div>
      Panel Content
    </div>
  </TogglePanel>
************************************************************* */

var TogglePanel = exports.TogglePanel = _react2.default.createClass({
  displayName: 'TogglePanel',

  propTypes: {
    cacheKey: _react.PropTypes.string.isRequired // Some cache key string (used as the key in the 'togglePanel' store)
  },
  toggle: function toggle(toState) {
    this.props.dispatch((0, _TogglePanelActions.toggle)({
      cacheKey: this.props.cacheKey,
      value: toState
    }));
  },
  render: function render() {
    var _this = this;

    var _props = this.props,
        toggleState = _props.toggleState,
        className = _props.className;

    var getContent = function getContent() {
      if (toggleState) {
        return _react2.default.createElement(
          'div',
          { className: _TogglePanel2.default.content },
          _this.props.children[2]
        );
      }
    };
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_TogglePanel2.default.titleBar, 'layout-row layout-align-start-center', className) },
        _react2.default.createElement(_chevronRight2.default, { onClick: function onClick() {
            return _this.toggle(null);
          }, className: (0, _classnames2.default)(_TogglePanel2.default.toggleIcon, (0, _defineProperty3.default)({}, _TogglePanel2.default.toggleIconActive, toggleState)), size: '22' }),
        _react2.default.createElement(
          'div',
          { className: 'flex layout-row layout-align-start-center' },
          _react2.default.createElement(
            'div',
            { className: 'flex', onClick: function onClick() {
                return _this.toggle(null);
              } },
            this.props.children[0]
          ),
          this.props.children[1]
        )
      ),
      getContent()
    );
  }
});

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var togglePanel = _ref.togglePanel;
  var cacheKey = _ref2.cacheKey;
  return {
    toggleState: togglePanel[cacheKey]
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(TogglePanel);

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TogglePanel, 'TogglePanel', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/TogglePanel/TogglePanel.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/TogglePanel/TogglePanel.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/TogglePanel/TogglePanel.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/TogglePanel/TogglePanel.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "6KKt":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primary":"#4484d3","border1":"rgba(0, 0, 0, 0.1)","timeline-main":"rgb(188, 188, 188)","timeline-bg":"#f8f8f8","timeline":"Timeline_timeline-Ub3pX","small":"Timeline_small-UBzMg","line":"Timeline_line-3CgyN","dotsOverflow":"Timeline_dotsOverflow-kKbHo"};

/***/ },

/***/ "6ZSw":
/***/ function(module, exports) {

/**
* Detect Element Resize
*
* https://github.com/sdecima/javascript-detect-element-resize
* Sebastian Decima
*
* version: 0.5.3
**/

(function () {
	var attachEvent = document.attachEvent,
		stylesCreated = false;
	
	if (!attachEvent) {
		var requestFrame = (function(){
			var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
								function(fn){ return window.setTimeout(fn, 20); };
			return function(fn){ return raf(fn); };
		})();
		
		var cancelFrame = (function(){
			var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
								   window.clearTimeout;
		  return function(id){ return cancel(id); };
		})();

		function resetTriggers(element){
			var triggers = element.__resizeTriggers__,
				expand = triggers.firstElementChild,
				contract = triggers.lastElementChild,
				expandChild = expand.firstElementChild;
			contract.scrollLeft = contract.scrollWidth;
			contract.scrollTop = contract.scrollHeight;
			expandChild.style.width = expand.offsetWidth + 1 + 'px';
			expandChild.style.height = expand.offsetHeight + 1 + 'px';
			expand.scrollLeft = expand.scrollWidth;
			expand.scrollTop = expand.scrollHeight;
		};

		function checkTriggers(element){
			return element.offsetWidth != element.__resizeLast__.width ||
						 element.offsetHeight != element.__resizeLast__.height;
		}
		
		function scrollListener(e){
			var element = this;
			resetTriggers(this);
			if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
			this.__resizeRAF__ = requestFrame(function(){
				if (checkTriggers(element)) {
					element.__resizeLast__.width = element.offsetWidth;
					element.__resizeLast__.height = element.offsetHeight;
					element.__resizeListeners__.forEach(function(fn){
						fn.call(element, e);
					});
				}
			});
		};
		
		/* Detect CSS Animations support to detect element display/re-attach */
		var animation = false,
			animationstring = 'animation',
			keyframeprefix = '',
			animationstartevent = 'animationstart',
			domPrefixes = 'Webkit Moz O ms'.split(' '),
			startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
			pfx  = '';
		{
			var elm = document.createElement('fakeelement');
			if( elm.style.animationName !== undefined ) { animation = true; }    
			
			if( animation === false ) {
				for( var i = 0; i < domPrefixes.length; i++ ) {
					if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
						pfx = domPrefixes[ i ];
						animationstring = pfx + 'Animation';
						keyframeprefix = '-' + pfx.toLowerCase() + '-';
						animationstartevent = startEvents[ i ];
						animation = true;
						break;
					}
				}
			}
		}
		
		var animationName = 'resizeanim';
		var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
		var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
	}
	
	function createStyles() {
		if (!stylesCreated) {
			//opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
			var css = (animationKeyframes ? animationKeyframes : '') +
					'.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' +
					'.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
				head = document.head || document.getElementsByTagName('head')[0],
				style = document.createElement('style');
			
			style.type = 'text/css';
			if (style.styleSheet) {
				style.styleSheet.cssText = css;
			} else {
				style.appendChild(document.createTextNode(css));
			}

			head.appendChild(style);
			stylesCreated = true;
		}
	}
	
	window.addResizeListener = function(element, fn){
		if (attachEvent) element.attachEvent('onresize', fn);
		else {
			if (!element.__resizeTriggers__) {
				if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
				createStyles();
				element.__resizeLast__ = {};
				element.__resizeListeners__ = [];
				(element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
				element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' +
																						'<div class="contract-trigger"></div>';
				element.appendChild(element.__resizeTriggers__);
				resetTriggers(element);
				element.addEventListener('scroll', scrollListener, true);
				
				/* Listen for a css animation to detect element display/re-attach */
				animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function(e) {
					if(e.animationName == animationName)
						resetTriggers(element);
				});
			}
			element.__resizeListeners__.push(fn);
		}
	};
	
	window.removeResizeListener = function(element, fn){
		if (attachEvent) element.detachEvent('onresize', fn);
		else {
			element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
			if (!element.__resizeListeners__.length) {
					element.removeEventListener('scroll', scrollListener);
					element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
			}
		}
	}
})();

/***/ },

/***/ "6wP3":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderByTime = exports.groupRevisions = undefined;

var _assign = __webpack_require__("woOf");

var _assign2 = _interopRequireDefault(_assign);

var _orderBy2 = __webpack_require__("y8ZT");

var _orderBy3 = _interopRequireDefault(_orderBy2);

var _sortBy2 = __webpack_require__("4Qe5");

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _values2 = __webpack_require__("N3eg");

var _values3 = _interopRequireDefault(_values2);

var _groupBy2 = __webpack_require__("//qL");

var _groupBy3 = _interopRequireDefault(_groupBy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var groupRevisions = exports.groupRevisions = function groupRevisions(revisions) {
  // Group revisions by FileId - add the other revisions to an array
  var grouped = (0, _values3.default)((0, _groupBy3.default)(revisions, 'data.fileId')).map(function (file) {
    return (0, _assign2.default)({}, file[0], { revisions: file });
  });
  // Sort by path - items not in folders should appear first
  return (0, _sortBy3.default)(grouped, [function (item) {
    return item.data.path.split('/').length == 1 ? 1 : 2;
  }, 'data.path']);
};

var orderByTime = exports.orderByTime = function orderByTime(items) {
  return (0, _orderBy3.default)(items, [function (item) {
    return new Date(item.timestamp).getTime();
  }, function (item) {
    return item.data.revisionNumber;
  }], ['desc', 'desc']);
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(groupRevisions, 'groupRevisions', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/Timeline.utils.js');

  __REACT_HOT_LOADER__.register(orderByTime, 'orderByTime', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/Timeline.utils.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "7Y6v":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__("aSqn");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  return _react2.default.createElement(
    _reactIconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M1.125,1.125v21.75h21.75V1.125H1.125z M3.125,20.875V3.125h17.75v17.75H3.125z' })
  );
};

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/single.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/single.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "7acK":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _Crumb = __webpack_require__("Ase/");

var _Crumb2 = _interopRequireDefault(_Crumb);

var _stringConcat = __webpack_require__("19Kw");

var _Link = __webpack_require__("GeCl");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Crumb = function (_Component) {
  (0, _inherits3.default)(Crumb, _Component);

  function Crumb() {
    (0, _classCallCheck3.default)(this, Crumb);
    return (0, _possibleConstructorReturn3.default)(this, (Crumb.__proto__ || (0, _getPrototypeOf2.default)(Crumb)).apply(this, arguments));
  }

  (0, _createClass3.default)(Crumb, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          otherProps = (0, _objectWithoutProperties3.default)(_props, ['text']);

      return _react2.default.createElement(
        _Link2.default,
        (0, _extends3.default)({ className: (0, _classnames2.default)(_Crumb2.default.crumb, 'link-primary') }, otherProps),
        _react2.default.createElement(
          'span',
          { className: _Crumb2.default.slash },
          '/'
        ),
        (0, _stringConcat.middle)(text, 20, 0.6)
      );
    }
  }]);
  return Crumb;
}(_react.Component);

exports.default = Crumb;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Crumb, 'Crumb', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Breadcrumbs/Crumb.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "7z0j":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _LoadingOverlay = __webpack_require__("K+/r");

var _LoadingOverlay2 = _interopRequireDefault(_LoadingOverlay);

var _file = __webpack_require__("XKp3");

var _file2 = _interopRequireDefault(_file);

var _Viewer = __webpack_require__("1aPA");

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviewCode = function (_Component) {
  (0, _inherits3.default)(PreviewCode, _Component);

  function PreviewCode() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PreviewCode);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PreviewCode.__proto__ || (0, _getPrototypeOf2.default)(PreviewCode)).call.apply(_ref, [this].concat(args))), _this), _this.onMount = function () {
      var _this2;

      return (_this2 = _this).__onMount__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PreviewCode, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.onMount(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.onMount(nextProps, this.props);
    }
  }, {
    key: '__onMount__REACT_HOT_LOADER__',
    value: function __onMount__REACT_HOT_LOADER__(nextProps, prevProps) {
      // If the previewId changes, download a new file
      if (!prevProps || nextProps.previewId !== prevProps.previewId) {
        // If we don't already have the file, get it
        if (!nextProps.fileData || !nextProps.fileData.data) {
          nextProps.downloadFn({
            projectId: nextProps.fileMeta.project._id,
            fileId: nextProps.fileMeta.fileId,
            revisionId: nextProps.fileMeta.revisionId,
            provider: nextProps.fileMeta.provider
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          fileData = _props.fileData,
          fileMeta = _props.fileMeta,
          previewMarkdown = _props.previewMarkdown;

      return _react2.default.createElement(
        'div',
        { className: 'layout-column flex' },
        fileData && fileData.data ? _react2.default.createElement(_Viewer2.default, { extension: fileMeta.extension, data: fileData.data, previewMarkdown: previewMarkdown }) : '',
        fileData ? _react2.default.createElement(_LoadingOverlay2.default, { show: fileData.loading }) : null,
        fileData && !fileData.data && !fileData.loading ? _react2.default.createElement(
          'div',
          { className: 'layout-column layout-align-center-center flex text-center' },
          _react2.default.createElement('img', { style: { width: '100px' }, src: _file2.default }),
          _react2.default.createElement(
            'div',
            { className: 'text-title-4', style: { marginBottom: '10px' } },
            'Nothing to display'
          ),
          _react2.default.createElement(
            'div',
            { className: 'text-title-5' },
            'This file appears to be empty.'
          )
        ) : null
      );
    }
  }]);
  return PreviewCode;
}(_react.Component);

exports.default = PreviewCode;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PreviewCode, 'PreviewCode', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCode/PreviewCode.jsx');
}();

;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "9I4c":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"PreviewImage_container-1V8WE"};

/***/ },

/***/ "9MLQ":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__("4n+p");

var _PreviewCode = __webpack_require__("7z0j");

var _PreviewCode2 = _interopRequireDefault(_PreviewCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateToProps = function stateToProps(_ref) {
  var previewMarkdown = _ref.userSettings.previewMarkdown;
  return {
    previewMarkdown: previewMarkdown
  };
};

var dispatchToProps = {};

var _default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(_PreviewCode2.default);

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateToProps, 'stateToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCode/PreviewCode.container.js');

  __REACT_HOT_LOADER__.register(dispatchToProps, 'dispatchToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCode/PreviewCode.container.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCode/PreviewCode.container.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCode/PreviewCode.container.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "A0kG":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _MoreButton = __webpack_require__("eoJm");

var _MoreButton2 = _interopRequireDefault(_MoreButton);

var _chevronRight = __webpack_require__("raO4");

var _chevronRight2 = _interopRequireDefault(_chevronRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createClass({
  displayName: '_default',
  render: function render() {
    return _react2.default.createElement(
      'a',
      {
        title: this.props.title,
        onClick: this.props.onClick,
        className: (0, _classnames2.default)(_MoreButton2.default.moreButton, (0, _defineProperty3.default)({}, _MoreButton2.default.moreButtonRight, this.props.side == 'right'), (0, _defineProperty3.default)({}, _MoreButton2.default.moreButtonLeft, this.props.side == 'left'))
      },
      _react2.default.createElement(_chevronRight2.default, { size: '15' })
    );
  }
});

// Styles


var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/MoreButton/MoreButton.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/MoreButton/MoreButton.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "AIsm":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dragger":"DragResize_dragger-3VvOW","box":"DragResize_box-1BEDG"};

/***/ },

/***/ "ApCO":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ "Ase/":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"crumb":"Crumb_crumb-3HqzC","slash":"Crumb_slash-NK-9h"};

/***/ },

/***/ "Cc65":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _LoadSplitCode = __webpack_require__("diW0");

var _LoadSplitCode2 = _interopRequireDefault(_LoadSplitCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var systemImport = function systemImport() {
  return __webpack_require__.e/* System.import */(59).then(__webpack_require__.bind(null, "BeEk"));
};

var _default = function _default(props) {
  return _react2.default.createElement(_LoadSplitCode2.default, (0, _extends3.default)({
    cacheKey: 'PreviewPdf',
    systemImport: systemImport
  }, props));
};

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(systemImport, 'systemImport', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewPdfLoader/PreviewPdfLoader.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewPdfLoader/PreviewPdfLoader.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewPdfLoader/PreviewPdfLoader.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "DDgy":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"SubSubHeader_header-3_JRv","headerBorder":"SubSubHeader_headerBorder-3N5ww"};

/***/ },

/***/ "E45T":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.File404 = undefined;

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _file = __webpack_require__("XKp3");

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var File404 = exports.File404 = _react2.default.createClass({
  displayName: 'File404',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'layout-column layout-align-center-center flex text-center' },
      _react2.default.createElement(
        'div',
        { style: { maxWidth: '300px' } },
        _react2.default.createElement('img', { style: { width: '100px' }, src: _file2.default }),
        _react2.default.createElement(
          'div',
          { className: 'text-title-4', style: { marginBottom: '10px' } },
          'File could not be found'
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-title-5' },
          'Typically, this means it has been deleted.'
        )
      )
    );
  }
});

var _default = File404;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(File404, 'File404', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/File404/File404.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/File404/File404.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/File404/File404.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "EU1k":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _TimelineInner = __webpack_require__("ZIJ1");

var _TimelineInner2 = _interopRequireDefault(_TimelineInner);

var _Timeline = __webpack_require__("6wP3");

var _moment = __webpack_require__("PJh5");

var _moment2 = _interopRequireDefault(_moment);

var _Popover = __webpack_require__("Erdv");

var _Popover2 = _interopRequireDefault(_Popover);

var _stringConcat = __webpack_require__("19Kw");

var stringConcat = _interopRequireWildcard(_stringConcat);

var _UserAvatar = __webpack_require__("vs4/");

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventMap = {
  commit: function commit(item) {
    var timeFromNow = (0, _moment2.default)(item.timestamp).fromNow();
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_TimelineInner2.default.popup, 'layout-row layout-align-start-center') },
      _react2.default.createElement(_UserAvatar2.default, {
        className: _TimelineInner2.default.popupImage,
        picture: item.user.picture,
        name: item.user.name,
        shape: 'square',
        size: 40
      }),
      _react2.default.createElement(
        'div',
        { className: 'flex' },
        _react2.default.createElement(
          'b',
          null,
          'Commit: ',
          stringConcat.end(item.data.name, 25)
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-grey-3' },
          timeFromNow,
          ' by ',
          item.user.name
        )
      )
    );
  },
  revision: function revision(item) {
    var timeFromNow = (0, _moment2.default)(item.timestamp).fromNow();
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_TimelineInner2.default.popup, 'layout-row layout-align-start-center') },
      _react2.default.createElement(_UserAvatar2.default, {
        className: _TimelineInner2.default.popupImage,
        picture: item.user.picture,
        name: item.user.name,
        shape: 'square',
        size: 40
      }),
      _react2.default.createElement(
        'div',
        { className: 'flex' },
        _react2.default.createElement(
          'b',
          null,
          'Revision: ',
          item.data.revisionNumber
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-grey-3' },
          timeFromNow,
          ' by ',
          item.user.name
        )
      )
    );
  }
};

var PopupContent = function PopupContent(item) {
  var PopupInner = EventMap[item.event];
  return PopupInner ? PopupInner(item) : 'Unknown event type';
};

var Dot = _react2.default.createClass({
  displayName: 'Dot',
  render: function render() {
    var _props = this.props,
        isSelected = _props.isSelected,
        selected = _props.selected,
        onSelect = _props.onSelect,
        item = _props.item,
        preferPlace = _props.preferPlace;

    var dotClasses = (0, _classnames2.default)(_TimelineInner2.default.dot, (0, _defineProperty3.default)({}, _TimelineInner2.default.active, isSelected ? isSelected(item) : selected == item._id));
    return (
      // If the isSelected function is provided, we use this to determine if the item is active
      _react2.default.createElement(
        'a',
        { className: dotClasses, onClick: function onClick() {
            return onSelect(item);
          } },
        _react2.default.createElement(
          _Popover2.default,
          { preferPlace: preferPlace || 'below', trigger: 'hoverDelay', tipSize: 6 },
          _react2.default.createElement('div', { className: 'layout-column layout-align-center-center', style: { height: '100%' } }),
          _react2.default.createElement(
            'div',
            null,
            PopupContent(item)
          )
        )
      )
    );
  }
});

var Component = _react2.default.createClass({
  displayName: 'Component',
  render: function render() {
    var _props2 = this.props,
        items = _props2.items,
        selected = _props2.selected,
        isSelected = _props2.isSelected,
        page = _props2.page,
        onSelect = _props2.onSelect,
        preferPlace = _props2.preferPlace,
        size = _props2.size,
        refInner = _props2.refInner;

    var translation = 'translateX(' + page * 100 + '%)';

    var Items = items.map(function (item, index) {
      if (item.event == 'commit') {
        // Order the items by the timestamp
        var subItemsOrdered = (0, _Timeline.orderByTime)(item.data.items).reverse();

        // These are reversed because they go left to right (not right to left like the other items)
        return _react2.default.createElement(
          _Popover2.default,
          { preferPlace: preferPlace || 'below', trigger: 'hoverSingleDelay', tipSize: 6 },
          _react2.default.createElement(
            'div',
            { key: item._id, className: (0, _classnames2.default)(_TimelineInner2.default.dotGroup, 'layout-row layout-align-center-center') },
            subItemsOrdered.map(function (subItem) {
              return _react2.default.createElement(Dot, {
                key: subItem._id,
                item: subItem,
                isSelected: isSelected,
                selected: selected,
                onSelect: onSelect,
                preferPlace: preferPlace
              });
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            PopupContent(item)
          )
        );
      }

      return _react2.default.createElement(Dot, {
        key: item._id,
        item: item,
        isSelected: isSelected,
        selected: selected,
        onSelect: onSelect,
        preferPlace: preferPlace
      });
    });

    var containerClasses = (0, _classnames2.default)('layout-row layout-align-end-center', _TimelineInner2.default.dots, (0, _defineProperty3.default)({}, _TimelineInner2.default.small, size == 'sm'));
    return _react2.default.createElement(
      'div',
      { ref: refInner, className: containerClasses, style: { transform: translation } },
      Items
    );
  }
});

var _default = Component;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EventMap, 'EventMap', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/TimelineInner/TimelineInner.jsx');

  __REACT_HOT_LOADER__.register(PopupContent, 'PopupContent', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/TimelineInner/TimelineInner.jsx');

  __REACT_HOT_LOADER__.register(Dot, 'Dot', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/TimelineInner/TimelineInner.jsx');

  __REACT_HOT_LOADER__.register(Component, 'Component', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/TimelineInner/TimelineInner.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/TimelineInner/TimelineInner.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/TimelineInner/TimelineInner.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "Esfs":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__("CzcJ");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createClass({
  displayName: '_default',
  render: function render() {
    var fileMeta = this.props.fileMeta;

    return _react2.default.createElement(
      'div',
      { className: 'flex rel-box layout-column' },
      _react2.default.createElement('iframe', { className: 'flex', src: 'https://docs.google.com/gview?url=' + (0, _utils.getDownloadUrl)(fileMeta) + '&embedded=true', style: { border: 'none' } })
    );
  }
});

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewGoogle/PreviewGoogle.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewGoogle/PreviewGoogle.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "FOlW":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

function clickDrag(Component) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var touch = opts.touch || false;
    var resetOnSpecialKeys = opts.resetOnSpecialKeys || false;
    var getSpecificEventData = opts.getSpecificEventData || function () {
        return {};
    };

    var onDragStart = opts.onDragStart || noop;
    var onDragStop = opts.onDragStop || noop;
    var onDragMove = opts.onDragMove || noop;

    var ClickDrag = function (_React$Component) {
        _inherits(ClickDrag, _React$Component);

        function ClickDrag(props) {
            _classCallCheck(this, ClickDrag);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClickDrag).call(this, props));

            _this.onMouseDown = _this.onMouseDown.bind(_this);
            _this.onMouseUp = _this.onMouseUp.bind(_this);
            _this.onMouseMove = _this.onMouseMove.bind(_this);

            _this.state = {
                isMouseDown: false,
                isMoving: false,
                mouseDownPositionX: 0,
                mouseDownPositionY: 0,
                moveDeltaX: 0,
                moveDeltaY: 0
            };

            _this.wasUsingSpecialKeys = false;
            return _this;
        }

        _createClass(ClickDrag, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var node = (0, _reactDom.findDOMNode)(this);

                node.addEventListener('mousedown', this.onMouseDown);
                document.addEventListener('mousemove', this.onMouseMove);
                document.addEventListener('mouseup', this.onMouseUp);

                if (touch) {
                    node.addEventListener('touchstart', this.onMouseDown);
                    document.addEventListener('touchmove', this.onMouseMove);
                    document.addEventListener('touchend', this.onMouseUp);
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                var node = (0, _reactDom.findDOMNode)(this);

                node.removeEventListener('mousedown', this.onMouseDown);
                document.removeEventListener('mousemove', this.onMouseMove);
                document.removeEventListener('mouseup', this.onMouseUp);

                if (touch) {
                    node.removeEventListener('touchstart', this.onMouseDown);
                    document.removeEventListener('touchmove', this.onMouseMove);
                    document.removeEventListener('touchend', this.onMouseUp);
                }
            }
        }, {
            key: 'onMouseDown',
            value: function onMouseDown(e) {
                // only left mouse button
                if (touch || e.button === 0) {
                    var pt = e.changedTouches && e.changedTouches[0] || e;

                    this.setMousePosition(pt.clientX, pt.clientY);

                    onDragStart(e);
                }
            }
        }, {
            key: 'onMouseUp',
            value: function onMouseUp(e) {
                if (this.state.isMouseDown) {
                    this.setState({
                        isMouseDown: false,
                        isMoving: false
                    });

                    onDragStop(e);
                }
            }
        }, {
            key: 'onMouseMove',
            value: function onMouseMove(e) {
                if (this.state.isMouseDown) {
                    var pt = e.changedTouches && e.changedTouches[0] || e;

                    var isUsingSpecialKeys = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
                    if (resetOnSpecialKeys && this.wasUsingSpecialKeys !== isUsingSpecialKeys) {
                        this.wasUsingSpecialKeys = isUsingSpecialKeys;
                        this.setMousePosition(pt.clientX, pt.clientY);
                    } else {
                        this.setState(_extends({
                            isMoving: true,
                            moveDeltaX: pt.clientX - this.state.mouseDownPositionX,
                            moveDeltaY: pt.clientY - this.state.mouseDownPositionY
                        }, getSpecificEventData(e)));
                    }

                    onDragMove(e);
                }
            }
        }, {
            key: 'setMousePosition',
            value: function setMousePosition(x, y) {
                this.setState({
                    isMouseDown: true,
                    isMoving: false,
                    mouseDownPositionX: x,
                    mouseDownPositionY: y,
                    moveDeltaX: 0,
                    moveDeltaY: 0
                });
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(Component, _extends({}, this.props, { dataDrag: this.state }));
            }
        }]);

        return ClickDrag;
    }(_react2.default.Component);

    return ClickDrag;
}

exports.default = clickDrag;

/***/ },

/***/ "FTSl":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _ProjectCommit = __webpack_require__("h5iT");

var _ProjectCommit2 = _interopRequireDefault(_ProjectCommit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ProjectCommit2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "Ia4n":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _SubSubHeader = __webpack_require__("DDgy");

var _SubSubHeader2 = _interopRequireDefault(_SubSubHeader);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _Layout = __webpack_require__("PjCM");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubHeader = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(SubHeader, _Component);

  function SubHeader() {
    (0, _classCallCheck3.default)(this, SubHeader);
    return (0, _possibleConstructorReturn3.default)(this, (SubHeader.__proto__ || (0, _getPrototypeOf2.default)(SubHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(SubHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          children = _props.children,
          className = _props.className,
          otherProps = (0, _objectWithoutProperties3.default)(_props, ['title', 'children', 'className']);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: (0, _classnames2.default)(_SubSubHeader2.default.header, className) }, otherProps),
        _react2.default.createElement(
          _Layout.Container,
          null,
          _react2.default.createElement('div', { className: _SubSubHeader2.default.headerBorder }),
          children
        )
      );
    }
  }]);
  return SubHeader;
}(_react.Component), _class.propTypes = {
  children: _react.PropTypes.node
}, _temp);
exports.default = SubHeader;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SubHeader, 'SubHeader', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/modules/SubSubHeader/SubSubHeader.jsx');
}();

;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "L5gr":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSelected = exports.orderItemsByTime = exports.getCompareModes = exports.getCompareIcon = undefined;

var _get2 = __webpack_require__("NRvQ");

var _get3 = _interopRequireDefault(_get2);

var _orderBy2 = __webpack_require__("y8ZT");

var _orderBy3 = _interopRequireDefault(_orderBy2);

var _intersection2 = __webpack_require__("YE3x");

var _intersection3 = _interopRequireDefault(_intersection2);

var _index = __webpack_require__("y5Ae");

var CompareIcons = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compareModeInfo = [// Compare modes and text
{
  value: 'sideBySide',
  text: 'Side By Side'
}, {
  value: 'aboveAndBelow',
  text: 'Above and Below'
}, {
  value: 'onion',
  text: 'Onion Skin'
}, {
  value: 'slider',
  text: 'Slider'
}, {
  value: 'single',
  text: 'None'
}];

var iconMap = {
  sideBySide: CompareIcons.SideBySide,
  aboveAndBelow: CompareIcons.TopBottom,
  onion: CompareIcons.OnionSkin,
  slider: CompareIcons.Slide,
  single: CompareIcons.Single

  // This table maps the compare modes (above) to the preview mode
};var compareModeTable = {
  gerber: [0, 1, 2, 3, 4],
  code: [0, 1, 4],
  autodesk: [0, 1, 2, 3, 4],
  google: [0, 1, 4],
  image: [0, 1, 2, 3, 4],
  pdf: [0, 1, 4],
  pcb: [0, 1, 2, 3, 4],
  gdoc: [0, 1, 4],
  other: [0, 1, 4],
  none: [4]
};

var getCompareIcon = exports.getCompareIcon = function getCompareIcon(compareMode) {
  return iconMap[compareMode] || CompareIcons.SideBySide;
};

var getCompareModes = exports.getCompareModes = function getCompareModes(previewerType1, previewerType2) {
  var compareModes1 = compareModeTable[previewerType1];
  var compareModes2 = compareModeTable[previewerType2];
  var compareModes = compareModes2 ? (0, _intersection3.default)(compareModes1, compareModes2) : compareModeTable.none;
  return compareModes.map(function (modeNum) {
    return compareModeInfo[modeNum];
  });
};

var orderItemsByTime = exports.orderItemsByTime = function orderItemsByTime(mode, item1, item2) {
  if (mode == 'single' || !item2) {
    return [item1];
  }
  return (0, _orderBy3.default)([item1, item2], function (item) {
    return new Date(item.timestamp).getTime();
  }, 'desc');
};

var isSelected = exports.isSelected = function isSelected(_ref) {
  var item = _ref.item,
      selected1 = _ref.selected1,
      selected2 = _ref.selected2,
      mode = _ref.mode;

  var isSelected1 = (0, _get3.default)(selected1, 'data.revisionId', undefined) === item.data.revisionId;
  var isSelected2 = (0, _get3.default)(selected2, 'data.revisionId', undefined) === item.data.revisionId;
  return mode === 'single' ? isSelected1 : isSelected1 || isSelected2;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getCompareIcon, 'getCompareIcon', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.utils.js');

  __REACT_HOT_LOADER__.register(getCompareModes, 'getCompareModes', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.utils.js');

  __REACT_HOT_LOADER__.register(orderItemsByTime, 'orderItemsByTime', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.utils.js');

  __REACT_HOT_LOADER__.register(isSelected, 'isSelected', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.utils.js');

  __REACT_HOT_LOADER__.register(compareModeInfo, 'compareModeInfo', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.utils.js');

  __REACT_HOT_LOADER__.register(iconMap, 'iconMap', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.utils.js');

  __REACT_HOT_LOADER__.register(compareModeTable, 'compareModeTable', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.utils.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "M1D5":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primary":"#4484d3","border1":"rgba(0, 0, 0, 0.1)","bg1":"rgba(0, 0, 0, 0.03)","modal":"DownloadModal_modal-3OT2t","ribbon":"DownloadModal_ribbon-3x3oF","row":"DownloadModal_row-1FJml"};

/***/ },

/***/ "MUlJ":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var modalName = 'PREVIEW_EXPIRED';

var _default = {"APP_TYPE":"web","NODE_ENV":"production","WEBSITE_URL":"https://stemn.com","API_SERVER":"https://dev.stemn.com","WEBSOCKET_SERVER":"https://dev.stemn.com:8443"}.APP_THREAD === 'electron' ? modalName : __webpack_require__("yAuS").default(modalName);

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(modalName, 'modalName', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/PreviewExpired/PreviewExpiredModal/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/PreviewExpired/PreviewExpiredModal/index.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/PreviewExpired/PreviewExpiredModal/index.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "Ma0r":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var arrayEach = __webpack_require__("JUBG"),
    baseEach = __webpack_require__("XWWJ"),
    castFunction = __webpack_require__("rrdH"),
    isArray = __webpack_require__("7gq8");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(forEach, 'forEach', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/node_modules/lodash/forEach.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "Mh/p":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _LoadingOverlay = __webpack_require__("K+/r");

var _LoadingOverlay2 = _interopRequireDefault(_LoadingOverlay);

var _LazyLoading = __webpack_require__("OiUg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviewCadLoader = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(PreviewCadLoader, _Component);

  function PreviewCadLoader(props) {
    (0, _classCallCheck3.default)(this, PreviewCadLoader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PreviewCadLoader.__proto__ || (0, _getPrototypeOf2.default)(PreviewCadLoader)).call(this, props));

    _this.state = {
      mainLoaded: false,
      otherLoaded: false
    };
    return _this;
  }

  (0, _createClass3.default)(PreviewCadLoader, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var _props = this.props,
          loadCode = _props.loadCode,
          systemImport = _props.systemImport,
          otherModules = _props.otherModules,
          cacheKey = _props.cacheKey;

      var wrappedSystemImport = systemImport().then(function (response) {
        _this2.LoadedComponent = response.default;
        _this2.setState({
          mainLoaded: true
        });
      });

      var otherModulesLoader = (0, _LazyLoading.load)(otherModules).then(function (response) {
        _this2.setState({
          otherLoaded: true
        });
      });

      loadCode(wrappedSystemImport, cacheKey);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          loadCode = _props2.loadCode,
          cacheKey = _props2.cacheKey,
          systemImport = _props2.systemImport,
          otherProps = (0, _objectWithoutProperties3.default)(_props2, ['loadCode', 'cacheKey', 'systemImport']);
      var _state = this.state,
          mainLoaded = _state.mainLoaded,
          otherLoaded = _state.otherLoaded;

      var loaded = mainLoaded && otherLoaded;
      return _react2.default.createElement(
        'div',
        { className: 'layout-column flex' },
        loaded ? _react2.default.createElement(this.LoadedComponent, otherProps) : null,
        _react2.default.createElement(_LoadingOverlay2.default, { show: !loaded })
      );
    }
  }]);
  return PreviewCadLoader;
}(_react.Component), _class.propTypes = {
  systemImport: _react.PropTypes.func, // The actual system.import
  cacheKey: _react.PropTypes.string.isRequired, // The cachekey
  otherModules: _react.PropTypes.array, // This is an array of global modules
  loadCode: _react.PropTypes.func.isRequired // The loadCode function from the container
}, _class.defaultProps = {
  otherModules: []
}, _temp);
exports.default = PreviewCadLoader;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PreviewCadLoader, 'PreviewCadLoader', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/CodeSplitting/LoadSplitCode/LoadSplitCode.jsx');
}();

;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "NamU":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getViewerType = exports.viewerFileTypes = undefined;

var _keys = __webpack_require__("fZjL");

var _keys2 = _interopRequireDefault(_keys);

var _forEach2 = __webpack_require__("Ma0r");

var _forEach3 = _interopRequireDefault(_forEach2);

var _icepick = __webpack_require__("PgM/");

var _icepick2 = _interopRequireDefault(_icepick);

var _codemirror = __webpack_require__("8U58");

var _codemirror2 = _interopRequireDefault(_codemirror);

__webpack_require__("+fCR");

var _whatsThatGerber = __webpack_require__("T6CH");

var _whatsThatGerber2 = _interopRequireDefault(_whatsThatGerber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCodeMirrorExts = function getCodeMirrorExts() {
  var codeExts = [];
  (0, _forEach3.default)(_codemirror2.default.modeInfo, function (mode) {
    if (mode.ext) {
      codeExts = codeExts.concat(mode.ext);
    }
  });
  return codeExts;
};

var viewerFileTypes = exports.viewerFileTypes = {
  general: {
    gerber: ['gerber'],
    pcb: ['brd', 'pcb', 'kicad_pcb'],
    image: ['png', 'jpg', 'jpeg', 'gif', 'svg', 'bmp', 'ico'],
    code: getCodeMirrorExts(),
    autodesk: ['3dm', '3ds', 'asm', 'cam360', 'catpart', 'catproduct', 'cgr', 'collaboration', 'dae', 'dgn', 'dlv3', 'dwf', 'dwfx', 'dwg', 'dwt', 'dxf', 'exp', 'f3d', 'fbx', 'g', 'gbxml', 'iam', 'idw', 'ifc', 'ige', 'iges', 'igs', 'ipt', 'jt', 'model', 'neu', 'nwc', 'nwd', 'obj', 'prt', 'rcp', 'rvt', 'sab', 'sat', 'session', 'skp', 'sldasm', 'sldprt', 'smb', 'smt', 'ste', 'step', 'stl', 'stla', 'stlb', 'stp', 'wire', 'x_b', 'x_t', 'xas', 'xpr'],
    google: ['webm', 'mpeg4', '3gpp', 'mov', 'avi', 'mpegps', 'wmv', 'flv', // https://gist.github.com/izazueta/4961650
    'xls', 'xlsx', 'pages', 'psd', 'tiff', 'eps', 'ps', 'ai', 'ttf', 'xps'],
    pdf: ['pdf']
    //            pcb      : ['brd', 'pcb', 'kicad_pcb'],
  },
  dropbox: {
    pdf: ['docx', 'doc', 'docm', 'ppt', 'pps', 'ppsx', 'ppsm', 'pptx', 'pptm', 'rtf']
  },
  drive: {
    google: ['docx', 'doc', 'docm', 'ppt', 'pps', 'ppsx', 'ppsm', 'pptx', 'pptm', 'rtf'],
    gdoc: ['gdoc', 'gsheet', 'gslides']
  }
};

var getViewerType = exports.getViewerType = function getViewerType(fileName, provider) {
  var extension = fileName.split('.').pop();

  var providers = ['dropbox', 'drive'];
  if (!providers.includes(provider)) {
    console.error('Invalid provider type:', provider);
    return;
  }
  var generalFileTypes = viewerFileTypes.general;
  var providerFileTypes = viewerFileTypes[provider];

  // This merge resolver concats arrays.
  var mergeResolver = function mergeResolver(targetVal, sourceVal) {
    return Array.isArray(targetVal) && sourceVal ? targetVal.concat(sourceVal) : sourceVal;
  };
  var mergedFileTypes = _icepick2.default.merge(generalFileTypes, providerFileTypes, mergeResolver);

  if ((0, _whatsThatGerber2.default)(fileName)) {
    return 'gerber';
  }
  // Get the viewer type
  var extensionLower = extension ? extension.toLowerCase() : '';
  var viewerType = (0, _keys2.default)(mergedFileTypes).find(function (viewerType) {
    return mergedFileTypes[viewerType].includes(extensionLower);
  });
  return viewerType || 'other';
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(viewerFileTypes, 'viewerFileTypes', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewFile.utils.js');

  __REACT_HOT_LOADER__.register(getViewerType, 'getViewerType', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewFile.utils.js');

  __REACT_HOT_LOADER__.register(getCodeMirrorExts, 'getCodeMirrorExts', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewFile.utils.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "OFqu":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssemblyPartNotFound = undefined;

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _modelLocked = __webpack_require__("ocwg");

var _modelLocked2 = _interopRequireDefault(_modelLocked);

var _reactRedux = __webpack_require__("4n+p");

var _ModalActions = __webpack_require__("u2h7");

var ModalActions = _interopRequireWildcard(_ModalActions);

var _AssemblyPartNotFoundModal = __webpack_require__("eq6m");

var _AssemblyPartNotFoundModal2 = _interopRequireDefault(_AssemblyPartNotFoundModal);

var _AssemblyPartNotFound = __webpack_require__("dxvn");

var _AssemblyPartNotFound2 = _interopRequireDefault(_AssemblyPartNotFound);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AssemblyPartNotFound = exports.AssemblyPartNotFound = _react2.default.createClass({
  displayName: 'AssemblyPartNotFound',
  render: function render() {
    var _props = this.props,
        dispatch = _props.dispatch,
        parts = _props.parts;


    var openModal = function openModal() {
      dispatch(ModalActions.showModal({ modalType: _AssemblyPartNotFoundModal2.default, modalProps: { parts: parts } }));
    };

    console.log(parts);
    return _react2.default.createElement(
      'div',
      { className: 'layout-column layout-align-center-center flex text-center' },
      _react2.default.createElement(
        'div',
        { style: { maxWidth: '300px' } },
        _react2.default.createElement('img', { style: { width: '100px' }, src: _modelLocked2.default }),
        _react2.default.createElement(
          'div',
          { className: 'text-title-4', style: { marginBottom: '10px' } },
          'Assembly part',
          parts.length > 1 && 's',
          ' could not be found!'
        ),
        _react2.default.createElement(
          'div',
          { className: _AssemblyPartNotFound2.default.well },
          parts.map(function (part) {
            return _react2.default.createElement(
              'div',
              { className: 'text-title-5', key: part },
              part
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-title-5' },
          'Assembly rendering is Beta.',
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'a',
            { className: 'link-primary', onClick: openModal },
            'Help us fix it.'
          )
        )
      )
    );
  }
});

var _default = (0, _reactRedux.connect)()(AssemblyPartNotFound);

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AssemblyPartNotFound, 'AssemblyPartNotFound', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/AssemblyPartNotFound/AssemblyPartNotFound.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/AssemblyPartNotFound/AssemblyPartNotFound.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/AssemblyPartNotFound/AssemblyPartNotFound.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "OiUg":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = exports.resources = undefined;

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resources = exports.resources = {};

var getSrcSplit = function getSrcSplit(src) {
  var queryParamsIndex = src.indexOf('?');
  if (queryParamsIndex > 0) {
    return src.substring(0, src.indexOf('?')).split('.');
  }
  return src.split('.');
};

var load = exports.load = function load(items) {
  var promiseArray = [];

  var loadStyles = function loadStyles(srcUrl) {
    var promise = new _promise2.default(function (resolve, reject) {
      var callback = function callback() {
        resources[srcUrl] = true;
        resolve('Styles Loaded');
      };
      var linkTag = document.createElement('link');
      linkTag.href = srcUrl;
      linkTag.rel = 'stylesheet';
      linkTag.type = 'text/css';
      linkTag.onreadystatechange = function () {
        if (this.readyState === 'complete') {
          callback();
        }
      };
      linkTag.onload = callback;
      document.getElementsByTagName('head')[0].appendChild(linkTag);
    });
    resources[srcUrl] = promise;
    return promise;
  };

  var loadScript = function loadScript(srcUrl, globalName) {
    var promise = new _promise2.default(function (resolve) {
      var callback = function callback() {
        resources[srcUrl] = true;
        if (window[globalName]) {
          resolve(window[globalName]);
        } else {
          resolve('Js Loaded');
        }
      };

      var scriptTag = document.createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.async = true;
      scriptTag.src = srcUrl;
      scriptTag.onreadystatechange = function () {
        if (this.readyState === 'complete') {
          callback();
        }
      };
      scriptTag.onload = callback;
      document.getElementsByTagName('body')[0].appendChild(scriptTag);
    });
    resources[srcUrl] = promise;
    return promise;
  };

  // If we have some scripts to load, try and load them
  if (items) {
    items.forEach(function (item) {
      // If the src is not yet registered, register it
      if (!resources[item.src]) {
        var srcSplit = getSrcSplit(item.src);
        var fileType = item.type || srcSplit[srcSplit.length - 1];

        if (fileType === 'js') {
          promiseArray.push(loadScript(item.src, item.global));
        } else if (fileType === 'css') {
          promiseArray.push(loadStyles(item.src));
        } else {
          console.error('Unsupported file type');
        }
      } else if (resources[item.src] !== true) {
        // Else, if it is not true, it is loading and the promise is assigned
        promiseArray.push(resources[item.src]);
      }
    });
  }

  return _promise2.default.all(promiseArray);
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(resources, 'resources', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/LazyLoading/LazyLoading.utils.js');

  __REACT_HOT_LOADER__.register(load, 'load', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/LazyLoading/LazyLoading.utils.js');

  __REACT_HOT_LOADER__.register(getSrcSplit, 'getSrcSplit', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/LazyLoading/LazyLoading.utils.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "Okz5":
/***/ function(module, exports) {

module.exports = (staticPath) => {
  return `${location.origin}${staticPath}`
}


/***/ },

/***/ "P1+L":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _SubSubHeader = __webpack_require__("Ia4n");

var _SubSubHeader2 = _interopRequireDefault(_SubSubHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SubSubHeader2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "PAgI":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _redux = __webpack_require__("c9Fv");

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__("4n+p");

var _FilesActions = __webpack_require__("iLLw");

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _LoadingOverlay = __webpack_require__("K+/r");

var _LoadingOverlay2 = _interopRequireDefault(_LoadingOverlay);

var _utils = __webpack_require__("CzcJ");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DownloadFile = function (_Component) {
  (0, _inherits3.default)(DownloadFile, _Component);

  function DownloadFile() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DownloadFile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DownloadFile.__proto__ || (0, _getPrototypeOf2.default)(DownloadFile)).call.apply(_ref, [this].concat(args))), _this), _this.saveFile = function () {
      var _this2;

      return (_this2 = _this).__saveFile__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.anchorRef = null, _this.getAnchorRef = function () {
      var _this3;

      return (_this3 = _this).__getAnchorRef__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DownloadFile, [{
    key: '__saveFile__REACT_HOT_LOADER__',
    value: function __saveFile__REACT_HOT_LOADER__() {
      var _props = this.props,
          file = _props.file,
          fileUrl = _props.fileUrl,
          saveFile = _props.saveFile;

      var anchorEl = _reactDom2.default.findDOMNode(this.anchorRef);
      // If we dont have a href attribute, we run the saveFile function
      // If we do, the click action will have already started downloading via the html5 download api
      // This second method will only work on desktop
      if (!anchorEl.getAttribute('href')) {
        saveFile({
          file: file,
          fileUrl: fileUrl,
          anchorEl: anchorEl // This is only used on web - not desktop
        });
      }
    }
  }, {
    key: '__getAnchorRef__REACT_HOT_LOADER__',
    value: function __getAnchorRef__REACT_HOT_LOADER__(ref) {
      if (ref) {
        this.anchorRef = ref;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          title = _props2.title,
          file = _props2.file,
          fileUrl = _props2.fileUrl,
          progress = _props2.progress;

      return _react2.default.createElement(
        'a',
        {
          ref: this.getAnchorRef,
          className: 'link-primary',
          onClick: this.saveFile,
          title: title
        },
        children,
        _react2.default.createElement(_LoadingOverlay2.default, {
          show: progress && progress > 0 && progress < 100,
          linear: true,
          hideBg: true
        })
      );
    }
  }]);
  return DownloadFile;
}(_react.Component);

function mapStateToProps(_ref2, _ref3) {
  var files = _ref2.files;
  var file = _ref3.file;

  var fileUrl = (0, _utils.getDownloadUrl)(file);
  return {
    fileUrl: fileUrl,
    progress: files.downloadProgress[fileUrl]
  };
}

var dispatchToProps = {
  saveFile: _FilesActions.saveFile
};

var _default = (0, _reactRedux.connect)(mapStateToProps, dispatchToProps)(DownloadFile);

var _default2 = _default;
exports.default = _default2;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/DownloadFile/DownloadFile.jsx');

  __REACT_HOT_LOADER__.register(DownloadFile, 'DownloadFile', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/DownloadFile/DownloadFile.jsx');

  __REACT_HOT_LOADER__.register(dispatchToProps, 'dispatchToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/DownloadFile/DownloadFile.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/DownloadFile/DownloadFile.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/DownloadFile/DownloadFile.jsx');
}();

;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "PVY5":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ModalRegistry = __webpack_require__("p8CK");

var _AssemblyPartNotFoundModal = __webpack_require__("4cmy");

var _AssemblyPartNotFoundModal2 = _interopRequireDefault(_AssemblyPartNotFoundModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(modalName) {
  (0, _ModalRegistry.registerModal)(modalName, _AssemblyPartNotFoundModal2.default);
  return modalName;
};

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/AssemblyPartNotFound/AssemblyPartNotFoundModal/AssemblyPartNotFoundModal.container.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/AssemblyPartNotFound/AssemblyPartNotFoundModal/AssemblyPartNotFoundModal.container.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "PcgJ":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = __webpack_require__("NRvQ");

var _get3 = _interopRequireDefault(_get2);

var _reactRedux = __webpack_require__("4n+p");

var _FileCompare = __webpack_require__("lHlc");

var _FileCompare2 = _interopRequireDefault(_FileCompare);

var _FetchDataHoc = __webpack_require__("YapR");

var _FetchDataHoc2 = _interopRequireDefault(_FetchDataHoc);

var _redux = __webpack_require__("c9Fv");

var _SyncTimelineActions = __webpack_require__("frFe");

var _TogglePanel = __webpack_require__("z53e");

var _FileCompare3 = __webpack_require__("tDaj");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateToProps = function stateToProps(_ref, _ref2) {
  var syncTimeline = _ref.syncTimeline,
      fileCompare = _ref.fileCompare;
  var file = _ref2.file;

  var syncTimelineCacheKey = '' + file.data.fileId;
  var togglePanelCacheKey = file.data.fileId + '-' + file.data.revisionId;
  return {
    compare: (0, _get3.default)(fileCompare, syncTimelineCacheKey, {}),
    syncTimelineCacheKey: syncTimelineCacheKey,
    togglePanelCacheKey: togglePanelCacheKey
  };
};

var dispatchToProps = {
  fetchTimeline: _SyncTimelineActions.fetchTimeline,
  toggle: _TogglePanel.toggle,
  initCompare: _FileCompare3.initCompare,
  changeMode: _FileCompare3.changeMode,
  select: _FileCompare3.select
};

var fetchConfigs = [{
  hasChanged: 'syncTimelineCacheKey',
  onChange: function onChange(props) {
    props.initCompare({
      cacheKey: props.syncTimelineCacheKey,
      file: props.file
    });
  }
}, {
  hasChanged: 'togglePanelCacheKey',
  onChange: function onChange(props) {
    if (props.isOpen) {
      props.toggle({
        cacheKey: props.togglePanelCacheKey,
        value: true
      });
    }
  }
}];

var withFetchData = (0, _FetchDataHoc2.default)(fetchConfigs)(_FileCompare2.default);
var withRedux = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(withFetchData);
var _default = withRedux;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateToProps, 'stateToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.container.js');

  __REACT_HOT_LOADER__.register(dispatchToProps, 'dispatchToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.container.js');

  __REACT_HOT_LOADER__.register(fetchConfigs, 'fetchConfigs', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.container.js');

  __REACT_HOT_LOADER__.register(withFetchData, 'withFetchData', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.container.js');

  __REACT_HOT_LOADER__.register(withRedux, 'withRedux', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.container.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.container.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.container.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "PozI":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _MoreDots = __webpack_require__("elA1");

var _MoreDots2 = _interopRequireDefault(_MoreDots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
var _default = _react2.default.createClass({
  displayName: '_default',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_MoreDots2.default.moreDots, 'layout-row', (0, _defineProperty3.default)({}, _MoreDots2.default.right, this.props.side == 'right')) },
      _react2.default.createElement('div', null),
      _react2.default.createElement('div', null),
      _react2.default.createElement('div', null)
    );
  }
});

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/MoreDots/MoreDots.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/MoreDots/MoreDots.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "T6CH":
/***/ function(module, exports) {

"use strict";
'use strict'

// TODO: replace with Array.find once 0.10 support can be dropped
// https://github.com/nodejs/LTS#lts-schedule
var find = function(collection, predicate) {
  var i
  var element

  for (i = 0; i < collection.length; i++) {
    element = collection[i]

    if (predicate(element)) {
      return element
    }
  }
}

var layerTypes = [
  {
    id: 'tcu',
    name: {
      en: 'top copper'
    },
    match: /((F.Cu)|(top\.gbr))|(\.((cmp)|(top$)|(gtl)))|(\.toplayer\.ger)/i
  },
  {
    id: 'tsm',
    name: {
      en: 'top soldermask'
    },
    match: /((F.Mask)|(topmask))|(\.((stc)|(tsm)|(gts)|(smt)))|(\.topsoldermask\.ger)/i
  },
  {
    id: 'tss',
    name: {
      en: 'top silkscreen'
    },
    match: /((F.SilkS)|(topsilk))|(\.((plc)|(tsk)|(gto)|(sst)))|(\.topsilkscreen\.ger)/i
  },
  {
    id: 'tsp',
    name: {
      en: 'top solderpaste'
    },
    match: /((F.Paste)|(toppaste))|(\.((crc)|(tsp)|(gtp)|(spt)))|(\.tcream\.ger)/i
  },
  {
    id: 'bcu',
    name: {
      en: 'bottom copper'
    },
    match: /(B.Cu|bottom\.gbr)|(\.((sol)|(bot$)|(gbl)))|(\.bottomlayer\.ger)/i
  },
  {
    id: 'bsm',
    name: {
      en: 'bottom soldermask'
    },
    match: /(B.Mask|bottommask\.)|(\.((sts)|(bsm)|(gbs)|(smb)))|(\.bottomsoldermask\.ger)/i
  },
  {
    id: 'bss',
    name: {
      en: 'bottom silkscreen'
    },
    match: /((B.SilkS)|(bottomsilk\.))|(\.((pls)|(bsk)|(gbo)|(ssb)))|(\.bottomsilkscreen\.ger)/i
  },
  {
    id: 'bsp',
    name: {
      en: 'bottom solderpaste'
    },
    match: /(B.Paste)|(\.((crs)|(bsp)|(gbp)|(spb)))|(\.bcream\.ger)/i
  },
  {
    id: 'icu',
    name: {
      en: 'inner copper'
    },
    match: /(In(ner)?\d+.Cu)|(\.((ly)|(g)|(in))\d+)|(\.internalplane\d+\.ger)/i
  },
  {
    id: 'out',
    name: {
      en: 'board outline'
    },
    match: /((Edge.Cuts)|(outline))|(\.((dim)|(mil)|(gm[l\d])|(gko)|(fab$)))|(\.boardoutline\.ger)/i
  },
  {
    id: 'drl',
    name: {
      en: 'drill hits'
    },
    match: /\.((fab\.gbr)|(cnc)|(drl)|(xln)|(txt)|(tap)|(drd)|(exc))/i
  },
  {
    id: undefined,
    name: {
      en: 'catch all'
    },
    match: /.*/
  }
]

module.exports = function whatsThatGerber(filename) {
  return find(layerTypes, function(type) {
    return type.match.test(filename)
  }).id
}

module.exports.getAllTypes = function() {
  return layerTypes.map(function(type) {
    return type.id
  })
}

module.exports.isValidType = function(type) {
  return layerTypes.some(function(layerType) {
    return layerType.id === type
  })
}

module.exports.getFullName = function whatsThatGerberTypeName(typeId, locale) {
  var type = find(layerTypes, function(type) {
    return type.id === typeId
  })

  locale = locale || 'en'

  if (!type || !type.name[locale]) {
    return ''
  }

  return type.name[locale]
}


/***/ },

/***/ "TMNS":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _ProjectCommit = __webpack_require__("ieBU");

var _ProjectCommit2 = _interopRequireDefault(_ProjectCommit);

var _TimelineUtils = __webpack_require__("6wP3");

var _Breadcrumbs = __webpack_require__("37Zr");

var _Layout = __webpack_require__("PjCM");

var _UserAvatar = __webpack_require__("vs4/");

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

var _FileCompare = __webpack_require__("X4Gv");

var _FileCompare2 = _interopRequireDefault(_FileCompare);

var _SubSubHeader = __webpack_require__("P1+L");

var _SubSubHeader2 = _interopRequireDefault(_SubSubHeader);

var _EditorDisplay = __webpack_require__("i0X4");

var _EditorDisplay2 = _interopRequireDefault(_EditorDisplay);

var _Link = __webpack_require__("GeCl");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectCommit = function (_Component) {
  (0, _inherits3.default)(ProjectCommit, _Component);

  function ProjectCommit() {
    (0, _classCallCheck3.default)(this, ProjectCommit);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectCommit.__proto__ || (0, _getPrototypeOf2.default)(ProjectCommit)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectCommit, [{
    key: 'renderLoaded',
    value: function renderLoaded() {
      var _props = this.props,
          commit = _props.commit.data,
          project = _props.project;


      var groupedRevisions = (0, _TimelineUtils.groupRevisions)(commit.data.items);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _SubSubHeader2.default,
          null,
          _react2.default.createElement(
            _Breadcrumbs.Breadcrumbs,
            null,
            _react2.default.createElement(_Breadcrumbs.Crumb, { name: 'projectCommitsRoute', params: { projectId: project.data._id }, text: 'History' }),
            _react2.default.createElement(_Breadcrumbs.Crumb, { name: 'projectCommitsRoute', params: { projectId: project.data._id }, query: { type: 'commits' }, text: 'Commits' }),
            _react2.default.createElement(_Breadcrumbs.Crumb, { text: commit.data.name })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h2',
            { className: _ProjectCommit2.default.title },
            _react2.default.createElement(
              'span',
              null,
              commit.data.name
            ),
            _react2.default.createElement(
              'span',
              { className: _ProjectCommit2.default.number },
              '\xA0#C',
              commit.data.commitNumber
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _ProjectCommit2.default.blurb },
            _react2.default.createElement(_EditorDisplay2.default, { value: commit.data.body })
          ),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('layout-row layout-align-start-center', _ProjectCommit2.default.meta) },
            _react2.default.createElement(
              _Link2.default,
              {
                name: 'userRoute',
                params: { userId: commit.user._id }
              },
              _react2.default.createElement(_UserAvatar2.default, {
                className: _ProjectCommit2.default.avatar,
                name: commit.user.name,
                picture: commit.user.picture,
                size: 20,
                shape: 'square'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'text-ellipsis' },
              _react2.default.createElement(
                _Link2.default,
                {
                  name: 'userRoute',
                  params: { userId: commit.user._id }
                },
                _react2.default.createElement(
                  'b',
                  null,
                  commit.user.name
                )
              ),
              '\xA0commited ',
              groupedRevisions.length,
              ' files containing a total of ',
              commit.data.items.length,
              ' revisions.'
            )
          )
        ),
        _react2.default.createElement(
          _Layout.Container,
          { className: _ProjectCommit2.default.files },
          _react2.default.createElement(
            'div',
            { className: 'text-mini-caps' },
            'Files updated:'
          ),
          groupedRevisions.map(function (file, index) {
            return _react2.default.createElement(_FileCompare2.default, {
              className: _ProjectCommit2.default.file,
              project: project,
              file: file,
              type: 'collapse',
              isOpen: index === 0,
              key: file._id
            });
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var commit = this.props.commit;

      return _react2.default.createElement(
        'div',
        { className: _ProjectCommit2.default.content },
        commit && commit.data ? this.renderLoaded() : null
      );
    }
  }]);
  return ProjectCommit;
}(_react.Component);

exports.default = ProjectCommit;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProjectCommit, 'ProjectCommit', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectCommit/ProjectCommit.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "URI7":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__("fZjL");

var _keys2 = _interopRequireDefault(_keys);

var _omit2 = __webpack_require__("xZp4");

var _omit3 = _interopRequireDefault(_omit2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypesObject = {
  children: _react.PropTypes.node.isRequired, // Child element
  zoomIn: _react.PropTypes.func.isRequired, // Zoom function - This is run once on each scroll
  zoomOut: _react.PropTypes.func.isRequired // Zoom function - This is run once on each scroll
};

var ScrollZoom = _react2.default.createClass({
  displayName: 'ScrollZoom',
  componentDidMount: function componentDidMount() {
    this.refs.container.addEventListener('DOMMouseScroll', this.handleMouseWheel);
    this.refs.container.addEventListener('mousewheel', this.handleMouseWheel);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.refs.container.removeEventListener('DOMMouseScroll', this.handleMouseWheel);
    this.refs.container.removeEventListener('mousewheel', this.handleMouseWheel);
  },
  handleMouseWheel: function handleMouseWheel(evt) {
    if (evt.ctrlKey) {
      if (evt.wheelDelta < 0) {
        // Zoom Out
        if (this.props.zoomOut) this.props.zoomOut();
      } else if (evt.wheelDelta > 0) {
        // Zoom In
        if (this.props.zoomIn) this.props.zoomIn();
      }
      // Only zoom the pages, not the entire viewer.
      evt.preventDefault();
    }
  },
  render: function render() {
    var children = this.props.children;


    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({ ref: 'container' }, (0, _omit3.default)(this.props, (0, _keys2.default)(propTypesObject))),
      children
    );
  }
});

var _default = ScrollZoom;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypesObject, 'propTypesObject', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Scroll/ScrollZoom/ScrollZoom.jsx');

  __REACT_HOT_LOADER__.register(ScrollZoom, 'ScrollZoom', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Scroll/ScrollZoom/ScrollZoom.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Scroll/ScrollZoom/ScrollZoom.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Scroll/ScrollZoom/ScrollZoom.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "Uy/o":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileCompareMenu = undefined;

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactRedux = __webpack_require__("4n+p");

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _PreviewFileUtils = __webpack_require__("NamU");

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _SimpleIconButton = __webpack_require__("D2fa");

var _SimpleIconButton2 = _interopRequireDefault(_SimpleIconButton);

var _Button = __webpack_require__("Yrew");

var _Button2 = _interopRequireDefault(_Button);

var _FileCompareUtils = __webpack_require__("L5gr");

var _Popover = __webpack_require__("Erdv");

var _Popover2 = _interopRequireDefault(_Popover);

var _moreHoriz = __webpack_require__("O8U9");

var _moreHoriz2 = _interopRequireDefault(_moreHoriz);

var _openInNew = __webpack_require__("isx9");

var _openInNew2 = _interopRequireDefault(_openInNew);

var _PopoverMenuList = __webpack_require__("Xo2K");

var _PopoverMenuList2 = _interopRequireDefault(_PopoverMenuList);

var _ModalActions = __webpack_require__("u2h7");

var _DownloadModal = __webpack_require__("hfFu");

var _DownloadModal2 = _interopRequireDefault(_DownloadModal);

var _UserSettings = __webpack_require__("6fbs");

var _visibility = __webpack_require__("BlEd");

var _visibility2 = _interopRequireDefault(_visibility);

var _code = __webpack_require__("dHRu");

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** ************************************************************************
We pass in either revisions or file1 + file2.
************************************************************************* */
var FileCompareMenu = exports.FileCompareMenu = function (_Component) {
  (0, _inherits3.default)(FileCompareMenu, _Component);

  function FileCompareMenu() {
    (0, _classCallCheck3.default)(this, FileCompareMenu);
    return (0, _possibleConstructorReturn3.default)(this, (FileCompareMenu.__proto__ || (0, _getPrototypeOf2.default)(FileCompareMenu)).apply(this, arguments));
  }

  (0, _createClass3.default)(FileCompareMenu, [{
    key: 'renderMenu',
    value: function renderMenu() {
      var _props = this.props,
          file1 = _props.file1,
          revisions = _props.revisions,
          showModal = _props.showModal;

      var downloadFile = {
        label: 'Download File',
        onClick: function onClick() {
          showModal({
            modalType: _DownloadModal2.default,
            modalProps: {
              revisions: revisions,
              file: file1
            },
            scope: 'local'
          });
        }
      };
      return [downloadFile];
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          enablePreview = _props2.enablePreview,
          mode = _props2.mode,
          changeMode = _props2.changeMode,
          revisions = _props2.revisions,
          file1 = _props2.file1,
          file2 = _props2.file2,
          previewMarkdown = _props2.previewMarkdown,
          togglePreviewMarkdown = _props2.togglePreviewMarkdown;


      if (!file1) {
        return null;
      }

      var previewType = (0, _PreviewFileUtils.getViewerType)(file1.name, file1.provider);
      var compareModes = (0, _FileCompareUtils.getCompareModes)(previewType, previewType);
      var CompareIcon = (0, _FileCompareUtils.getCompareIcon)(mode);
      var hasRevisions = revisions && revisions.length > 1 || file1 && file2;
      var isMarkdown = file1.extension === 'md';

      return _react2.default.createElement(
        'div',
        { className: 'layout-row layout-align-start-center' },
        isMarkdown && _react2.default.createElement(
          _SimpleIconButton2.default,
          { onClick: togglePreviewMarkdown, title: previewMarkdown ? 'Preview Mode' : 'Code Mode' },
          !previewMarkdown ? _react2.default.createElement(_code2.default, { size: 26 }) : _react2.default.createElement(_visibility2.default, { size: 24 })
        ),
        hasRevisions && _react2.default.createElement(
          _Popover2.default,
          { preferPlace: 'below', offset: 9 },
          _react2.default.createElement(
            _SimpleIconButton2.default,
            { title: 'Compare' },
            _react2.default.createElement(CompareIcon, { size: 20 })
          ),
          _react2.default.createElement(
            'div',
            { className: 'PopoverMenu' },
            compareModes.map(function (item) {
              return _react2.default.createElement(
                'a',
                {
                  key: item.value,
                  className: (0, _classnames2.default)({ active: mode === item.value }),
                  onClick: function onClick() {
                    return changeMode(item.value, revisions);
                  }
                },
                'Compare: ',
                item.text
              );
            })
          )
        ),
        enablePreview && _react2.default.createElement(
          _SimpleIconButton2.default,
          {
            title: 'Open File',
            name: 'fileRoute',
            params: {
              projectId: file1.project._id,
              fileId: file1.fileId,
              revisionId: file1.revisionId
            }
          },
          _react2.default.createElement(_openInNew2.default, { size: 23 })
        ),
        _react2.default.createElement(
          _Popover2.default,
          { preferPlace: 'below', offset: 9 },
          _react2.default.createElement(
            _SimpleIconButton2.default,
            { title: 'Options' },
            _react2.default.createElement(_moreHoriz2.default, { size: '20px' })
          ),
          _react2.default.createElement(_PopoverMenuList2.default, { menu: this.renderMenu() })
        )
      );
    }
  }]);
  return FileCompareMenu;
}(_react.Component);

var stateToProps = function stateToProps(_ref) {
  var previewMarkdown = _ref.userSettings.previewMarkdown;
  return {
    previewMarkdown: previewMarkdown
  };
};

var dispatchToProps = {
  togglePreviewMarkdown: _UserSettings.togglePreviewMarkdown,
  showModal: _ModalActions.showModal
};

var _default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(FileCompareMenu);

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FileCompareMenu, 'FileCompareMenu', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompareMenu/FileCompareMenu.web.jsx');

  __REACT_HOT_LOADER__.register(stateToProps, 'stateToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompareMenu/FileCompareMenu.web.jsx');

  __REACT_HOT_LOADER__.register(dispatchToProps, 'dispatchToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompareMenu/FileCompareMenu.web.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompareMenu/FileCompareMenu.web.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompareMenu/FileCompareMenu.web.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "VFfI":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviewExpired = undefined;

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _expired = __webpack_require__("2v8s");

var _expired2 = _interopRequireDefault(_expired);

var _reactRedux = __webpack_require__("4n+p");

var _ModalActions = __webpack_require__("u2h7");

var ModalActions = _interopRequireWildcard(_ModalActions);

var _PreviewExpiredModal = __webpack_require__("MUlJ");

var _PreviewExpiredModal2 = _interopRequireDefault(_PreviewExpiredModal);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviewExpired = exports.PreviewExpired = _react2.default.createClass({
  displayName: 'PreviewExpired',
  render: function render() {
    var _props = this.props,
        provider = _props.provider,
        dispatch = _props.dispatch;


    var openModal = function openModal() {
      dispatch(ModalActions.showModal({ modalType: _PreviewExpiredModal2.default, modalProps: { provider: provider } }));
    };
    return _react2.default.createElement(
      'div',
      { className: 'layout-column layout-align-center-center flex text-center' },
      _react2.default.createElement(
        'div',
        { style: { maxWidth: '300px' } },
        _react2.default.createElement('img', { style: { width: '100px' }, src: _expired2.default }),
        _react2.default.createElement(
          'div',
          { className: 'text-title-4', style: { marginBottom: '10px' } },
          'This revision has expired'
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-title-5' },
          'We could not find this revision in your ',
          _react2.default.createElement(
            'span',
            { style: { textTransform: 'capitalize' } },
            provider || 'provider'
          ),
          '.',
          _react2.default.createElement('br', null),
          ' ',
          _react2.default.createElement(
            'a',
            { className: 'link-primary', onClick: openModal },
            'Learn more.'
          )
        )
      )
    );
  }
});

var _default = (0, _reactRedux.connect)()(PreviewExpired);

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PreviewExpired, 'PreviewExpired', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/PreviewExpired/PreviewExpired.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/PreviewExpired/PreviewExpired.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/PreviewExpired/PreviewExpired.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "WLt+":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createClass({
  displayName: "_default",
  render: function render() {
    var fileMeta = this.props.fileMeta;

    return _react2.default.createElement(
      "div",
      { className: "flex rel-box layout-column" },
      _react2.default.createElement("iframe", { className: "flex", src: fileMeta.url, style: { border: 'none' } })
    );
  }
});

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewGdoc/PreviewGdoc.jsx");

  __REACT_HOT_LOADER__.register(_default2, "default", "C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewGdoc/PreviewGdoc.jsx");
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "WWpa":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__("aSqn");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  return _react2.default.createElement(
    _reactIconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M1.125,1.125v21.75h21.75V1.125H1.125z M20.875,16.501L16.5,20.875h-3.352l7.727-7.724V16.501z M3.125,7.082l3.957-3.957\r h3.351l-7.308,7.307V7.082z M3.125,11.845l8.722-8.72h3.35L3.125,15.194V11.845z M3.125,16.608L16.61,3.125h3.349L3.125,19.959\r V16.608z M20.875,3.624v3.352l-13.902,13.9h-3.35L20.875,3.624z M20.875,8.389v3.349l-9.141,9.137H8.387L20.875,8.389z M5.668,3.125\r L3.125,5.668V3.125H5.668z M17.914,20.875l2.961-2.96v2.96H17.914z' })
  );
};

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/onion-skin.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/onion-skin.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "X4Gv":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FileCompare = __webpack_require__("PcgJ");

var _FileCompare2 = _interopRequireDefault(_FileCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FileCompare2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "XKp3":
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTUwcHgiIGhlaWdodD0iMTUwcHgiIHZpZXdCb3g9IjAgMCAxNTAgMTUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNTAgMTUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjkxLjE2MywyNy4yNDIgNDEuMzI5LDI3LjI0MiA0MS4zMjksNDYuMDggNDEuMzI5LDcwLjkxOSA0MS4zMjksMTIxLjY2OSAxMTAuNDE3LDEyMS42NjkNCgkJCTExMC40MTcsNzAuOTE5IDExMC40MTcsNDYuNSAJCSIvPg0KCQk8cG9seWdvbiBmaWxsPSIjMjgyRDMzIiBwb2ludHM9IjExMi40MTcsMTIzLjY2OSAzOS4zMjksMTIzLjY2OSAzOS4zMjksMjUuMjQyIDkxLjE2MywyNS4yNDIgOTEuMTYzLDI5LjI0MiA0My4zMjksMjkuMjQyDQoJCQk0My4zMjksMTE5LjY2OSAxMDguNDE3LDExOS42NjkgMTA4LjQxNyw0Ni41IDExMi40MTcsNDYuNSAJCSIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBvbHlnb24gZmlsbD0iI0I3QkVDMCIgcG9pbnRzPSI5NC40MSw0My4yNTIgMTEyLjY0Myw0My4yNTIgOTQuNDEsMjUuMDE3IAkJIi8+DQoJPC9nPg0KCTxnPg0KCQk8cmVjdCB4PSI1MC41NjgiIHk9IjQ1LjU5MiIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjE5Ljg0NCIgaGVpZ2h0PSI0Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cmVjdCB4PSI1MC4yMDUiIHk9IjU5LjkxNiIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjQ3LjEzIiBoZWlnaHQ9IjQiLz4NCgk8L2c+DQoJPGc+DQoJCTxyZWN0IHg9IjUwLjIwNSIgeT0iNzAuMzc3IiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iNDcuMTMiIGhlaWdodD0iNCIvPg0KCTwvZz4NCgk8Zz4NCgkJPHJlY3QgeD0iNTAuMjA1IiB5PSI4MC44NCIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjQ3LjEzIiBoZWlnaHQ9IjQiLz4NCgk8L2c+DQoJPGc+DQoJCTxyZWN0IHg9IjUwLjIwNSIgeT0iOTEuMyIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjQ2LjgzOCIgaGVpZ2h0PSI0Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cmVjdCB4PSI1MC4yMDUiIHk9IjEwMy44NTQiIGZpbGw9IiMyODJEMzMiIHdpZHRoPSIxMy41NDgiIGhlaWdodD0iNCIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ },

/***/ "YE3x":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var arrayMap = __webpack_require__("FGuL"),
    baseIntersection = __webpack_require__("epZW"),
    baseRest = __webpack_require__("z1Oj"),
    castArrayLikeObject = __webpack_require__("5Au4");

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function (arrays) {
    var mapped = arrayMap(arrays, castArrayLikeObject);
    return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
});

module.exports = intersection;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(intersection, 'intersection', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/node_modules/lodash/intersection.js');
}();

;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ },

/***/ "YFa3":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primary":"#4484d3","border1":"rgba(0, 0, 0, 0.1)","rangeSlider":"FileCompareInner_rangeSlider-zPsEl","sideBySide":"FileCompareInner_sideBySide-2HUyY","preview2":"FileCompareInner_preview2-2gMBY","aboveAndBelow":"FileCompareInner_aboveAndBelow-2gVgM","onion":"FileCompareInner_onion-1s5h4","preview1":"FileCompareInner_preview1-_jV1e","slider":"FileCompareInner_slider-1V4bH","single":"FileCompareInner_single-3iwBd"};

/***/ },

/***/ "ZIJ1":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primary-bg":"#4484d3","border1":"rgba(0, 0, 0, 0.1)","bg1":"rgba(0, 0, 0, 0.03)","timeline-main":"rgb(188, 188, 188)","timeline-bg":"#f8f8f8","dots":"TimelineInner_dots-24OPs","dotGroup":"TimelineInner_dotGroup-1iVSM","dot":"TimelineInner_dot-1Chkh","active":"TimelineInner_active-1Pqj0","popup":"TimelineInner_popup-1pS6h","popupImage":"TimelineInner_popupImage-XAw95"};

/***/ },

/***/ "bt+N":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__("aSqn");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  return _react2.default.createElement(
    _reactIconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M1.125,1.125v21.75h21.75V1.125H1.125z M20.875,20.875h-8.874V3.125h8.874V20.875z' })
  );
};

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/slide.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/slide.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "d0nm":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _PreviewCadLoader = __webpack_require__("kgZQ");

var _PreviewCadLoader2 = _interopRequireDefault(_PreviewCadLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PreviewCadLoader2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "diW0":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _LoadSplitCode = __webpack_require__("w7A3");

var _LoadSplitCode2 = _interopRequireDefault(_LoadSplitCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _LoadSplitCode2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "dxvn":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"well":"AssemblyPartNotFound_well-dl6jY"};

/***/ },

/***/ "eg74":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__("Yrew");

var _Button2 = _interopRequireDefault(_Button);

var _StandardTable = __webpack_require__("kS0c");

var _StandardTable2 = _interopRequireDefault(_StandardTable);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component Core
var Component = _react2.default.createClass({
  displayName: 'Component',
  render: function render() {
    var _props = this.props,
        modalCancel = _props.modalCancel,
        modalConfirm = _props.modalConfirm;
    var provider = this.props.provider;

    var providerText = provider == 'drive' ? 'Google Drive' : 'Dropbox';
    return _react2.default.createElement(
      'div',
      { style: { width: '600px' } },
      _react2.default.createElement(
        'div',
        { className: 'modal-title' },
        'This revision has expired'
      ),
      _react2.default.createElement(
        'div',
        { className: 'modal-body', style: { lineHeight: '1.4em' } },
        _react2.default.createElement(
          'div',
          null,
          providerText,
          ' only stores a 30 day file history for accounts on their free plan.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _StandardTable2.default,
          null,
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { style: { width: '33%' } },
                'Cloud Provider'
              ),
              _react2.default.createElement(
                'td',
                { style: { width: '33%' } },
                'Plan: Free'
              ),
              _react2.default.createElement(
                'td',
                { style: { width: '33%' } },
                'Plan: Pro'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            provider == 'drive' ? _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'Google Drive'
              ),
              _react2.default.createElement(
                'td',
                null,
                '30 days'
              ),
              _react2.default.createElement(
                'td',
                null,
                'Infinite'
              )
            ) : _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'Dropbox'
              ),
              _react2.default.createElement(
                'td',
                null,
                '30 days'
              ),
              _react2.default.createElement(
                'td',
                null,
                '30 days (Infinite on a ',
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.dropbox.com/plans', className: 'link-primary' },
                  'business plan'
                ),
                ')'
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        'There are 3 ways to access infinite revision history.',
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _StandardTable2.default,
          null,
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Method 1 (coming soon)'
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                'Change your project to an open-source \'Public\' project.'
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Method 2 (coming soon)'
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                'Upgrade to Stemn Pro.'
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Method 3'
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                'Upgrade ',
                providerText,
                ' to a pro account.'
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'modal-footer-no-line layout-row layout-align-end' },
        _react2.default.createElement(
          _Button2.default,
          {
            className: 'primary',
            onClick: modalConfirm
          },
          'Ok'
        )
      )
    );
  }
});

var _default = Component;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Component, 'Component', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/PreviewExpired/PreviewExpiredModal/PreviewExpiredModal.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/PreviewExpired/PreviewExpiredModal/PreviewExpiredModal.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/PreviewExpired/PreviewExpiredModal/PreviewExpiredModal.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "elA1":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"timeline-bg":"#f8f8f8","moreDots":"MoreDots_moreDots-122IW","right":"MoreDots_right-UMO_e"};

/***/ },

/***/ "eoJm":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"timeline-main":"rgb(188, 188, 188)","moreButton":"MoreButton_moreButton-3I0RU","moreButtonLeft":"MoreButton_moreButtonLeft-1ZC55","moreButtonRight":"MoreButton_moreButtonRight-zuy2H"};

/***/ },

/***/ "epZW":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var SetCache = __webpack_require__("T1VL"),
    arrayIncludes = __webpack_require__("hacZ"),
    arrayIncludesWith = __webpack_require__("V+V8"),
    arrayMap = __webpack_require__("FGuL"),
    baseUnary = __webpack_require__("M6rb"),
    cacheHas = __webpack_require__("Jdqb");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer: while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = comparator || value !== 0 ? value : 0;
    if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(nativeMin, 'nativeMin', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/node_modules/lodash/_baseIntersection.js');

  __REACT_HOT_LOADER__.register(baseIntersection, 'baseIntersection', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/node_modules/lodash/_baseIntersection.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "eq6m":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var modalName = 'ASSEMBLY_PART_NOT_FOUND';

var _default = {"APP_TYPE":"web","NODE_ENV":"production","WEBSITE_URL":"https://stemn.com","API_SERVER":"https://dev.stemn.com","WEBSOCKET_SERVER":"https://dev.stemn.com:8443"}.APP_THREAD === 'electron' ? modalName : __webpack_require__("PVY5").default(modalName);

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(modalName, 'modalName', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/AssemblyPartNotFound/AssemblyPartNotFoundModal/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/AssemblyPartNotFound/AssemblyPartNotFoundModal/index.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/AssemblyPartNotFound/AssemblyPartNotFoundModal/index.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "ewRW":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _Timeline = __webpack_require__("6KKt");

var _Timeline2 = _interopRequireDefault(_Timeline);

var _Timeline3 = __webpack_require__("6wP3");

var _MoreDots = __webpack_require__("PozI");

var _MoreDots2 = _interopRequireDefault(_MoreDots);

var _MoreButton = __webpack_require__("A0kG");

var _MoreButton2 = _interopRequireDefault(_MoreButton);

var _TimelineInner = __webpack_require__("EU1k");

var _TimelineInner2 = _interopRequireDefault(_TimelineInner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /////////////////////////////// COMPONENT /////////////////////////////////

// Styles
var propTypesObject = {
  items: _react.PropTypes.array.isRequired,

  selected: _react.PropTypes.string,
  isSelected: _react.PropTypes.func, // function of the form (item) => return true||false

  onSelect: _react.PropTypes.func,
  preferPlace: _react.PropTypes.string,
  size: _react.PropTypes.string, // 'sm'

  style: _react.PropTypes.object,
  className: _react.PropTypes.string
};

// Sub Components
// Component Core


var Component = _react2.default.createClass({
  displayName: 'Component',
  getInitialState: function getInitialState() {
    return {
      page: 0,
      numPages: 1
    };
  },
  scroll: function scroll(direction) {
    if (direction == 'left') {
      this.setState({ page: this.state.page + 1 });
    } else if (direction == 'right' && this.state.page > 0) {
      this.setState({ page: this.state.page - 1 });
    }
  },
  getRefInner: function getRefInner(ref) {
    if (ref) {
      this.refInner = ref;
      this.tryGetPages();
    }
  },
  getRefOuter: function getRefOuter(ref) {
    if (ref) {
      this.refOuter = ref;
      this.tryGetPages();
    }
  },
  tryGetPages: function tryGetPages() {
    // If we have both refs, we can get the number of pages.
    if (this.refOuter && this.refInner) {
      var contentWidth = this.refInner.offsetWidth;
      var containerWidth = this.refOuter.offsetWidth;
      var numPages = Math.ceil(contentWidth / containerWidth);
      this.setState({ numPages: numPages });
    }
  },
  render: function render() {
    var _this = this;

    var _props = this.props,
        items = _props.items,
        selected = _props.selected,
        isSelected = _props.isSelected,
        onSelect = _props.onSelect,
        preferPlace = _props.preferPlace,
        style = _props.style,
        className = _props.className,
        size = _props.size;
    var _state = this.state,
        page = _state.page,
        numPages = _state.numPages;

    var numberToShow = 15;
    var moreLeft = numPages - 1 > page;
    var moreRight = page > 0;

    // Order the items by the timestamp
    var itemsOrdered = (0, _Timeline3.orderByTime)(items).reverse();

    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_Timeline2.default.timeline, className, (0, _defineProperty3.default)({}, _Timeline2.default.small, size == 'sm')), style: style },
      _react2.default.createElement(
        'div',
        { className: 'rel-box' },
        _react2.default.createElement(
          'div',
          { className: _Timeline2.default.line },
          moreLeft ? _react2.default.createElement(_MoreButton2.default, { title: 'Older events', onClick: function onClick() {
              return _this.scroll('left');
            }, side: 'left' }) : '',
          moreRight ? _react2.default.createElement(_MoreButton2.default, { title: 'Newer events', onClick: function onClick() {
              return _this.scroll('right');
            }, side: 'right' }) : '',
          moreLeft ? _react2.default.createElement(_MoreDots2.default, { side: 'left' }) : '',
          moreRight ? _react2.default.createElement(_MoreDots2.default, { side: 'right' }) : ''
        ),
        _react2.default.createElement(
          'div',
          { ref: this.getRefOuter, className: _Timeline2.default.dotsOverflow },
          items && items.length > 0 ? _react2.default.createElement(_TimelineInner2.default, {
            onSelect: onSelect,
            page: page,
            items: itemsOrdered,
            selected: selected,
            isSelected: isSelected,
            preferPlace: preferPlace,
            refInner: this.getRefInner,
            size: size
          }) : null
        )
      )
    );
  }
});

Component.propTypes = propTypesObject;

var _default = Component;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypesObject, 'propTypesObject', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/Timeline.jsx');

  __REACT_HOT_LOADER__.register(Component, 'Component', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/Timeline.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/Timeline.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Timeline/Timeline.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "h5iT":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("4n+p");

var _FetchDataHoc = __webpack_require__("YapR");

var _FetchDataHoc2 = _interopRequireDefault(_FetchDataHoc);

var _CommitsActions = __webpack_require__("soWG");

var _ProjectCommit = __webpack_require__("TMNS");

var _ProjectCommit2 = _interopRequireDefault(_ProjectCommit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateToProps = function stateToProps(_ref, _ref2) {
  var projects = _ref.projects,
      commits = _ref.commits;
  var params = _ref2.params;

  var projectId = params.stub;
  var commitId = params.commitId;;
  var project = projects.data[projectId];
  var commit = commits[commitId];

  return {
    project: project,
    projectId: projectId,
    commitId: commitId,
    commit: commit
  };
};

var dispatchToProps = {
  getCommit: _CommitsActions.getCommit
};

var fetchConfigs = [{
  hasChanged: 'commitId',
  onChange: function onChange(_ref3) {
    var getCommit = _ref3.getCommit,
        commitId = _ref3.commitId;
    return getCommit({ commitId: commitId });
  }
}];

var ProjectCommitContainer = (_dec = (0, _reactRedux.connect)(stateToProps, dispatchToProps), _dec2 = (0, _FetchDataHoc2.default)(fetchConfigs), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(ProjectCommitContainer, _Component);

  function ProjectCommitContainer() {
    (0, _classCallCheck3.default)(this, ProjectCommitContainer);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectCommitContainer.__proto__ || (0, _getPrototypeOf2.default)(ProjectCommitContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectCommitContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_ProjectCommit2.default, this.props);
    }
  }]);
  return ProjectCommitContainer;
}(_react.Component)) || _class) || _class);
exports.default = ProjectCommitContainer;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProjectCommitContainer, 'ProjectCommitContainer', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectCommit/ProjectCommit.container.js');

  __REACT_HOT_LOADER__.register(stateToProps, 'stateToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectCommit/ProjectCommit.container.js');

  __REACT_HOT_LOADER__.register(dispatchToProps, 'dispatchToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectCommit/ProjectCommit.container.js');

  __REACT_HOT_LOADER__.register(fetchConfigs, 'fetchConfigs', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectCommit/ProjectCommit.container.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "hfFu":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _DownloadModal = __webpack_require__("nHqc");

var _DownloadModal2 = _interopRequireDefault(_DownloadModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DownloadModal2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "hsss":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCad = exports.isAssembly = exports.isWebGlSupported = undefined;

var _PreviewFile = __webpack_require__("NamU");

var isWebGlSupported = exports.isWebGlSupported = function isWebGlSupported(return_context) {
  if (window.WebGLRenderingContext) {
    var canvas = document.createElement('canvas'),
        names = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d'],
        context = false;

    for (var i = 0; i < 4; i++) {
      try {
        context = canvas.getContext(names[i]);
        if (context && typeof context.getParameter === 'function') {
          // WebGL is enabled
          if (return_context) {
            // return WebGL object if the function's argument is present
            return { name: names[i], gl: context };
          }
          // else, return just true
          return true;
        }
      } catch (e) {}
    }
    // WebGL is supported, but disabled
    return false;
  }
  // WebGL not supported
  return false;
};

var isAssembly = exports.isAssembly = function isAssembly(fileType) {
  var assemblyFileTypes = ['sldasm', 'catproduct', 'iam'];
  return assemblyFileTypes.includes(fileType.toLowerCase());
};

var isCad = exports.isCad = function isCad(fileType) {
  return _PreviewFile.viewerFileTypes.general.autodesk.includes(fileType);
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isWebGlSupported, 'isWebGlSupported', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCad/PreviewCad.utils.js');

  __REACT_HOT_LOADER__.register(isAssembly, 'isAssembly', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCad/PreviewCad.utils.js');

  __REACT_HOT_LOADER__.register(isCad, 'isCad', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCad/PreviewCad.utils.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "iMBo":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _Breadcrumbs = __webpack_require__("ApCO");

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = function (_Component) {
  (0, _inherits3.default)(Breadcrumbs, _Component);

  function Breadcrumbs() {
    (0, _classCallCheck3.default)(this, Breadcrumbs);
    return (0, _possibleConstructorReturn3.default)(this, (Breadcrumbs.__proto__ || (0, _getPrototypeOf2.default)(Breadcrumbs)).apply(this, arguments));
  }

  (0, _createClass3.default)(Breadcrumbs, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'layout-row' },
        this.props.children
      );
    }
  }]);
  return Breadcrumbs;
}(_react.Component);

exports.default = Breadcrumbs;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Breadcrumbs, 'Breadcrumbs', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Breadcrumbs/Breadcrumbs.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "ieBU":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"ProjectCommit_title-3AUjC","blurb":"ProjectCommit_blurb-34vNQ","number":"ProjectCommit_number-2glNA","meta":"ProjectCommit_meta-1_t40","avatar":"ProjectCommit_avatar-1vjY7","files":"ProjectCommit_files-3IAEU","file":"ProjectCommit_file-1Zg86"};

/***/ },

/***/ "ilh4":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRevisions = undefined;

var _uniqBy2 = __webpack_require__("gi1O");

var _uniqBy3 = _interopRequireDefault(_uniqBy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRevisions = exports.getRevisions = function getRevisions(syncTimeline) {
  // syncTimeline contains revision and commit events
  // This will look inside commits and create an array of revisions.
  var result = [];

  syncTimeline.forEach(function (item) {
    if (item.event == 'revision') {
      result.push(item);
    } else if (item.event == 'commit') {
      item.data.items.forEach(function (subItem) {
        result.push(subItem);
      });
    }
  });

  return (0, _uniqBy3.default)(result, '_id');
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getRevisions, 'getRevisions', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/SyncTimeline/SyncTimeline.utils.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "isx9":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__("aSqn");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdOpenInNew = function MdOpenInNew(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        (0, _extends3.default)({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm23.4 5h11.6v11.6h-3.4v-5.9l-16.3 16.3-2.3-2.3 16.3-16.3h-5.9v-3.4z m8.2 26.6v-11.6h3.4v11.6q0 1.4-1 2.4t-2.4 1h-23.2q-1.4 0-2.4-1t-1-2.4v-23.2q0-1.4 1-2.4t2.4-1h11.6v3.4h-11.6v23.2h23.2z' })
        )
    );
};

var _default = MdOpenInNew;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MdOpenInNew, 'MdOpenInNew', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/react-icons/md/open-in-new.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/react-icons/md/open-in-new.js');

    __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/react-icons/md/open-in-new.js');
}();

;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ },

/***/ "jjFu":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("6ZSw");

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _FileCompareInner = __webpack_require__("YFa3");

var _FileCompareInner2 = _interopRequireDefault(_FileCompareInner);

var _PreviewFile = __webpack_require__("ov3P");

var _PreviewFile2 = _interopRequireDefault(_PreviewFile);

var _FileCompareSlider = __webpack_require__("ykyt");

var _FileCompareSlider2 = _interopRequireDefault(_FileCompareSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

///////////////////////////////// COMPONENT /////////////////////////////////

// addResizeListener && removeResizeListener
var FileCompareInner = function (_Component) {
  (0, _inherits3.default)(FileCompareInner, _Component);

  function FileCompareInner(props) {
    (0, _classCallCheck3.default)(this, FileCompareInner);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FileCompareInner.__proto__ || (0, _getPrototypeOf2.default)(FileCompareInner)).call(this, props));

    _this.updateDimensions = function () {
      return _this.__updateDimensions__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.sliderChange = function () {
      return _this.__sliderChange__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.changeFn = function () {
      return _this.__changeFn__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      position: 50,
      width: 0
    };
    return _this;
  }

  (0, _createClass3.default)(FileCompareInner, [{
    key: '__updateDimensions__REACT_HOT_LOADER__',
    value: function __updateDimensions__REACT_HOT_LOADER__() {
      if (this.refs.container) {
        this.setState({ width: this.refs.container.offsetWidth });
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateDimensions();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addResizeListener(this.refs.container, this.updateDimensions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeResizeListener(this.refs.container, this.updateDimensions);
    }
  }, {
    key: '__sliderChange__REACT_HOT_LOADER__',
    value: function __sliderChange__REACT_HOT_LOADER__(position) {
      this.setState({ position: position });
    }
  }, {
    key: '__changeFn__REACT_HOT_LOADER__',
    value: function __changeFn__REACT_HOT_LOADER__(event) {
      this.setState({ position: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          project = _props.project,
          file1 = _props.file1,
          file2 = _props.file2,
          event = _props.event,
          compareId = _props.compareId,
          mode = _props.mode,
          header = _props.header;
      var _state = this.state,
          width = _state.width,
          position = _state.position;


      var compareModeClasses = {
        sideBySide: 'layout-row',
        aboveAndBelow: 'layout-column',
        onion: 'layout-row',
        slider: 'layout-row',
        single: 'layout-row'
      };

      var preview2Style = {
        sideBySide: {},
        aboveAndBelow: {},
        onion: {
          opacity: position / 100
        },
        slider: {
          width: position + '%'
        },
        single: {}
      };

      var overylayStyles = mode === 'slider' && this.refs.container ? { width: width + 'px' } : {};

      var filePreview1 = function filePreview1() {
        return _react2.default.createElement(
          'div',
          {
            className: _FileCompareInner2.default.preview1 + ' flex layout-column',
            style: preview2Style[mode]
          },
          _react2.default.createElement(
            'div',
            {
              className: 'layout-column flex',
              style: overylayStyles
            },
            file2 && _react2.default.createElement(_PreviewFile2.default, {
              project: project,
              file: file2,
              event: event,
              header: header
            })
          )
        );
      };

      var filePreview2 = function filePreview2() {
        if (file1) {
          return _react2.default.createElement(
            'div',
            { className: _FileCompareInner2.default.preview2 + ' flex layout-column' },
            file1 && _react2.default.createElement(_PreviewFile2.default, {
              project: project,
              file: file1,
              event: event,
              header: header
            })
          );
        }
      };

      return _react2.default.createElement(
        'div',
        { className: 'layout-column flex' },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('flex', 'rel-box', 'scroll-box', compareModeClasses[mode], _FileCompareInner2.default[mode]), ref: 'container' },
          filePreview1(),
          mode === 'slider' && _react2.default.createElement(_FileCompareSlider2.default, {
            container: this.refs.container,
            changeFn: this.sliderChange,
            position: this.state.position
          }),
          filePreview2()
        ),
        mode === 'onion' && _react2.default.createElement(
          'div',
          { className: _FileCompareInner2.default.rangeSlider + ' layout-row' },
          _react2.default.createElement('input', {
            className: 'flex',
            type: 'range',
            min: '0',
            max: '100',
            step: '0.1',
            style: { cursor: 'move' },
            onChange: this.changeFn
          })
        )
      );
    }
  }]);
  return FileCompareInner;
}(_react.Component);

exports.default = FileCompareInner;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FileCompareInner, 'FileCompareInner', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompareInner/FileCompareInner.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "kS0c":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _StandardTable = __webpack_require__("pB9t");

var _StandardTable2 = _interopRequireDefault(_StandardTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /////////////////////////////// COMPONENT /////////////////////////////////

// Component Core
var _default = _react2.default.createClass({
  displayName: '_default',
  render: function render() {
    var children = this.props.children;

    return _react2.default.createElement(
      'table',
      { className: _StandardTable2.default.table },
      children
    );
  }
});

// Styles


var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tables/StandardTable/StandardTable.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tables/StandardTable/StandardTable.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "kgZQ":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _LoadSplitCode = __webpack_require__("diW0");

var _LoadSplitCode2 = _interopRequireDefault(_LoadSplitCode);

var _getRootPath = __webpack_require__("Okz5");

var _getRootPath2 = _interopRequireDefault(_getRootPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var otherModules = [{
  global: 'Autodesk',
  src: (0, _getRootPath2.default)('/static/other/autodesk/viewer-2-16/viewer3D.min.js')
}, {
  global: 'THREE',
  src: (0, _getRootPath2.default)('/static/other/autodesk/viewer-2-16/three.min.js')
}, {
  src: (0, _getRootPath2.default)('/static/other/autodesk/viewer-2-16/style.min.css')
}];
var systemImport = function systemImport() {
  return __webpack_require__.e/* System.import */(60).then(__webpack_require__.bind(null, "3h54"));
};

var _default = function _default(props) {
  return _react2.default.createElement(_LoadSplitCode2.default, (0, _extends3.default)({
    cacheKey: 'PreviewCad',
    systemImport: systemImport,
    otherModules: otherModules
  }, props));
};

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(otherModules, 'otherModules', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCadLoader/PreviewCadLoader.jsx');

  __REACT_HOT_LOADER__.register(systemImport, 'systemImport', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCadLoader/PreviewCadLoader.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCadLoader/PreviewCadLoader.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewCadLoader/PreviewCadLoader.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "ktek":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primary":"#4484d3","border1":"rgba(0, 0, 0, 0.1)","bg1":"rgba(0, 0, 0, 0.03)","timeline":"FileCompare_timeline-3Xl0F","header":"FileCompare_header-3dcTo"};

/***/ },

/***/ "lHlc":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__("NRvQ");

var _get3 = _interopRequireDefault(_get2);

var _class, _temp2;

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _FileCompare = __webpack_require__("ktek");

var _FileCompare2 = _interopRequireDefault(_FileCompare);

var _FileCompareUtils = __webpack_require__("L5gr");

var _TogglePanel = __webpack_require__("6DBV");

var _TogglePanel2 = _interopRequireDefault(_TogglePanel);

var _DragResize = __webpack_require__("xWsN");

var _DragResize2 = _interopRequireDefault(_DragResize);

var _FileCompareMenu = __webpack_require__("66lh");

var _FileCompareMenu2 = _interopRequireDefault(_FileCompareMenu);

var _FileCompareInner = __webpack_require__("jjFu");

var _FileCompareInner2 = _interopRequireDefault(_FileCompareInner);

var _Timeline = __webpack_require__("ewRW");

var _Timeline2 = _interopRequireDefault(_Timeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileCompare = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(FileCompare, _Component);

  function FileCompare() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FileCompare);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FileCompare.__proto__ || (0, _getPrototypeOf2.default)(FileCompare)).call.apply(_ref, [this].concat(args))), _this), _this.onSelect = function () {
      var _this2;

      return (_this2 = _this).__onSelect__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.changeMode = function () {
      var _this3;

      return (_this3 = _this).__changeMode__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.isSelected = function () {
      var _this4;

      return (_this4 = _this).__isSelected__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FileCompare, [{
    key: '__onSelect__REACT_HOT_LOADER__',
    value: function __onSelect__REACT_HOT_LOADER__(file) {
      var _props = this.props,
          select = _props.select,
          syncTimelineCacheKey = _props.syncTimelineCacheKey,
          _props$compare = _props.compare,
          mode = _props$compare.mode,
          lastSelected = _props$compare.lastSelected;

      select({
        file: file,
        mode: mode,
        lastSelected: lastSelected,
        cacheKey: syncTimelineCacheKey
      });
    }
  }, {
    key: '__changeMode__REACT_HOT_LOADER__',
    value: function __changeMode__REACT_HOT_LOADER__(mode, revisions) {
      var _props2 = this.props,
          changeMode = _props2.changeMode,
          syncTimelineCacheKey = _props2.syncTimelineCacheKey;

      changeMode({
        cacheKey: syncTimelineCacheKey,
        mode: mode
      });
    }
  }, {
    key: '__isSelected__REACT_HOT_LOADER__',
    value: function __isSelected__REACT_HOT_LOADER__(item) {
      var _props$compare2 = this.props.compare,
          selected1 = _props$compare2.selected1,
          selected2 = _props$compare2.selected2,
          mode = _props$compare2.mode;

      return (0, _FileCompareUtils.isSelected)({
        item: item,
        selected1: selected1,
        selected2: selected2,
        mode: mode
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props3 = this.props,
          _props3$compare = _props3.compare,
          mode = _props3$compare.mode,
          selected1 = _props3$compare.selected1,
          selected2 = _props3$compare.selected2,
          file = _props3.file,
          project = _props3.project,
          togglePanelCacheKey = _props3.togglePanelCacheKey,
          type = _props3.type,
          className = _props3.className;

      var items = (0, _FileCompareUtils.orderItemsByTime)(mode, selected1, selected2);
      var file1 = (0, _get3.default)(items, [0, 'data']);
      var file2 = (0, _get3.default)(items, [1, 'data']);

      var collapseTemplate = function collapseTemplate() {
        return _react2.default.createElement(
          'div',
          { className: className },
          _react2.default.createElement(
            _TogglePanel2.default,
            { cacheKey: togglePanelCacheKey },
            _react2.default.createElement(
              'div',
              { className: 'text-ellipsis text-grey-4' },
              file.data.path
            ),
            _react2.default.createElement(_FileCompareMenu2.default, {
              file1: file1,
              file2: file2,
              revisions: file.revisions,
              mode: mode,
              changeMode: _this5.changeMode,
              enablePreview: true
            }),
            _react2.default.createElement(
              _DragResize2.default,
              {
                side: 'bottom',
                height: '500',
                heightRange: [0, 1000],
                className: 'layout-column flex'
              },
              _react2.default.createElement(_FileCompareInner2.default, {
                project: project.data,
                event: selected1,
                file1: file1,
                file2: file2,
                mode: mode
              }),
              file.revisions.length > 1 ? _react2.default.createElement(_Timeline2.default, {
                className: _FileCompare2.default.timeline,
                size: 'sm',
                onSelect: _this5.onSelect,
                isSelected: _this5.isSelected,
                items: file.revisions,
                preferPlace: 'above'
              }) : null
            )
          )
        );
      };

      var standardTemplate = function standardTemplate() {
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('layout-column flex', className) },
          _react2.default.createElement(
            'div',
            { className: _FileCompare2.default.header + ' layout-row layout-align-start-center' },
            _react2.default.createElement(
              'div',
              { className: 'flex' },
              file.data.path
            ),
            _react2.default.createElement(_FileCompareMenu2.default, {
              file1: file1,
              file2: file2,
              revisions: file.revisions,
              mode: mode,
              changeMode: _this5.changeMode,
              enablePreview: true
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'layout-column flex' },
            _react2.default.createElement(_FileCompareInner2.default, {
              project: project,
              event: selected1,
              file1: file1,
              file2: file2,
              mode: mode,
              header: ['sideBySide', 'aboveAndBelow'].includes(mode)
            })
          ),
          _react2.default.createElement(_Timeline2.default, {
            className: _FileCompare2.default.timeline,
            size: 'sm',
            onSelect: _this5.onSelect,
            isSelected: _this5.isSelected,
            items: file.revisions,
            preferPlace: 'above'
          })
        );
      };

      if (!file1) {
        return null;
      }
      return type == 'collapse' ? collapseTemplate() : standardTemplate();
    }
  }]);
  return FileCompare;
}(_react.Component), _class.propTypes = {
  className: _react.PropTypes.string,
  project: _react.PropTypes.object.isRequired,
  file: _react.PropTypes.object.isRequired,
  isOpen: _react.PropTypes.bool, // Is it open ( to be used with collapse )
  type: _react.PropTypes.oneOf(['collapse', undefined])
}, _temp2);
exports.default = FileCompare;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FileCompare, 'FileCompare', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.jsx');
}();

;
;

var _temp4 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "nHqc":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = __webpack_require__("NRvQ");

var _get3 = _interopRequireDefault(_get2);

var _reactRedux = __webpack_require__("4n+p");

var _ModalRegistry = __webpack_require__("p8CK");

var _SyncTimelineActions = __webpack_require__("frFe");

var _DownloadModal = __webpack_require__("ofc4");

var _DownloadModal2 = _interopRequireDefault(_DownloadModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateToProps = function stateToProps(_ref, _ref2) {
  var syncTimeline = _ref.syncTimeline;
  var file = _ref2.file;
  return {
    syncTimeline: (0, _get3.default)(syncTimeline, [file.fileId], {})
  };
};

var dispatchToProps = {
  fetchTimeline: _SyncTimelineActions.fetchTimeline
};

var modalName = 'FILE_DOWNLOAD';
var ModalComponent = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(_DownloadModal2.default);
(0, _ModalRegistry.registerModal)(modalName, ModalComponent);
var _default = modalName;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateToProps, 'stateToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Download/DownloadModal/DownloadModal.container.js');

  __REACT_HOT_LOADER__.register(dispatchToProps, 'dispatchToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Download/DownloadModal/DownloadModal.container.js');

  __REACT_HOT_LOADER__.register(modalName, 'modalName', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Download/DownloadModal/DownloadModal.container.js');

  __REACT_HOT_LOADER__.register(ModalComponent, 'ModalComponent', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Download/DownloadModal/DownloadModal.container.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Download/DownloadModal/DownloadModal.container.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Download/DownloadModal/DownloadModal.container.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "ocwg":
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTUwcHgiIGhlaWdodD0iMTUwcHgiIHZpZXdCb3g9IjAgMCAxNTAgMTUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNTAgMTUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cG9seWdvbiBmaWxsPSIjMzBDMEQ4IiBwb2ludHM9Ijc0LjIwMiwyNy4wNjMgMTEwLjI1NCw0Ny42NjcgNzQuMDU4LDY4LjYxNSAzNy45MTgsNDguMDExIAkJIi8+DQoJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik03NC4wNTgsNzAuNjE1Yy0wLjM0MiwwLTAuNjg0LTAuMDg4LTAuOTkxLTAuMjYzbC0zNi4xNC0yMC42MDRjLTAuNjIyLTAuMzU0LTEuMDA3LTEuMDE2LTEuMDA5LTEuNzMyDQoJCQljLTAuMDAyLTAuNzE2LDAuMzc5LTEuMzc5LDEtMS43MzZMNzMuMjAyLDI1LjMzYzAuNjE2LTAuMzU1LDEuMzc1LTAuMzU3LDEuOTkyLTAuMDA0bDM2LjA1MiwyMC42MDQNCgkJCWMwLjYyMiwwLjM1NSwxLjAwNiwxLjAxNSwxLjAwOCwxLjczMWMwLjAwMiwwLjcxNS0wLjM3OSwxLjM3Ny0wLjk5OCwxLjczNkw3NS4wNiw3MC4zNDYNCgkJCUM3NC43NSw3MC41MjUsNzQuNDA0LDcwLjYxNSw3NC4wNTgsNzAuNjE1eiBNNDEuOTM4LDQ4bDMyLjExMywxOC4zMDlsMzIuMTkxLTE4LjYzMUw3NC4yMDcsMjkuMzY5TDQxLjkzOCw0OHoiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik04OC42NjgsMTA0LjU1OWwtMi0zLjQ2NWwyMS45OTQtMTIuNzAxbC0wLjM3My0zNy4yNzdsLTMyLjIzLDE4LjY1M3Y3LjMyM2gtNHYtOC40NzcNCgkJCWMwLTAuNzE0LDAuMzgtMS4zNzMsMC45OTgtMS43M2wzNi4xOTYtMjAuOTQ5YzAuNjE3LTAuMzU1LDEuMzc2LTAuMzU4LDEuOTkyLTAuMDA2YzAuNjE5LDAuMzUyLDEuMDAzLDEuMDA2LDEuMDEsMS43MTcNCgkJCWwwLjQyLDQxLjg3M2MwLjAwOCwwLjcyMy0wLjM3NSwxLjM5Mi0xLDEuNzUyTDg4LjY2OCwxMDQuNTU5eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzI4MkQzMyIgZD0iTTYwLjIwNSwxMDQuNjkzTDM3LjM0MSw5MS42MjVjLTAuNjE3LTAuMzUzLTEtMS4wMDYtMS4wMDctMS43MTdMMzUuOTE4LDQ4LjAzDQoJCQljLTAuMDA3LTAuNzE2LDAuMzY5LTEuMzgxLDAuOTg3LTEuNzQ0YzAuNjE3LTAuMzYyLDEuMzgxLTAuMzY3LDIuMDA0LTAuMDEzbDM2LjE0LDIwLjYwNGMwLjYyNCwwLjM1NSwxLjAxLDEuMDE5LDEuMDEsMS43MzcNCgkJCXY4LjQ3N2gtNHYtNy4zMTRMMzkuOTUzLDUxLjQ3M2wwLjM3LDM3LjI1bDIxLjg2OCwxMi40OThMNjAuMjA1LDEwNC42OTN6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik04NS45MDYsOTUuNTA4aC00di00LjU4NmMwLTMuNDg0LTIuODM0LTYuMzE5LTYuMzE2LTYuMzE5aC0yLjU4N2MtMy40ODIsMC02LjMxNSwyLjgzNS02LjMxNSw2LjMxOQ0KCQkJCQl2NC41ODZoLTR2LTQuNTg2YzAtNS42OSw0LjYyNy0xMC4zMTksMTAuMzE1LTEwLjMxOWgyLjU4N2M1LjY4OCwwLDEwLjMxNiw0LjYyOSwxMC4zMTYsMTAuMzE5Vjk1LjUwOHoiLz4NCgkJCTwvZz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjU5LjU0NiIgeT0iOTQuNDYxIiBmaWxsPSIjQjdCRUMwIiB3aWR0aD0iMjkuNSIgaGVpZ2h0PSIyNy42NTUiLz4NCgkJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik04Ny4wNDcsOTYuNDYxdjIzLjY1NWgtMjUuNVY5Ni40NjFIODcuMDQ3TDg3LjA0Nyw5Ni40NjF6IE05MS4wNDcsOTIuNDYxaC00aC0yNS41aC00djR2MjMuNjU1djRoNGgyNS41DQoJCQkJaDR2LTRWOTYuNDYxVjkyLjQ2MUw5MS4wNDcsOTIuNDYxeiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTc0LjEyMSwxMDUuMjc3Yy0wLjA0MS0wLjAyNC0wLjE3Ni0wLjExOS0wLjE3Ni0wLjMwMWMwLTAuMTk0LDAuMTU4LTAuMzUzLDAuMzUzLTAuMzUzDQoJCQkJczAuMzUyLDAuMTU4LDAuMzUyLDAuMzUzYzAsMC4xODItMC4xMzMsMC4yNzUtMC4xNzQsMC4zbC0wLjE3OSwwLjEwN0w3NC4xMjEsMTA1LjI3N3oiLz4NCgkJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik03NC4yOTcsMTAyLjYyNGMtMS4yOTgsMC0yLjM1MywxLjA1Mi0yLjM1MywyLjM1M2MwLDAuODU2LDAuNDYxLDEuNjA0LDEuMTQ2LDIuMDE2bC0wLjUzMiw1Ljc5NGgxLjczOQ0KCQkJCWgxLjczOGwtMC41MzMtNS43OTRjMC42ODgtMC40MTIsMS4xNDYtMS4xNTksMS4xNDYtMi4wMTZDNzYuNjQ4LDEwMy42NzYsNzUuNTk2LDEwMi42MjQsNzQuMjk3LDEwMi42MjRMNzQuMjk3LDEwMi42MjR6Ii8+DQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KDQoJCQkJPHJlY3QgeD0iODEuNTc5IiB5PSI4Ni40NDgiIHRyYW5zZm9ybT0ibWF0cml4KDAuNDk5OSAwLjg2NjEgLTAuODY2MSAwLjQ5OTkgMTE3LjUzMjcgLTI4LjY1NDQpIiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iNC4wMDEiIGhlaWdodD0iMiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iIzI4MkQzMyIgZD0iTTg5LjExNSw4Ni41NjNsLTItMy40NjNsMy42NjgtMi4xMTlsMiwzLjQ2NEw4OS4xMTUsODYuNTYzeiBNOTYuNDUzLDgyLjMyNmwtMi0zLjQ2NGwzLjY2OS0yLjExOA0KCQkJCWwyLDMuNDY0TDk2LjQ1Myw4Mi4zMjZ6IE0xMDMuNzkxLDc4LjA5bC0yLTMuNDY0bDMuNjY5LTIuMTE4bDIsMy40NjRMMTAzLjc5MSw3OC4wOXogTTExMS4xMjksNzMuODU0bC0yLTMuNDY1bDMuNjctMi4xMTcNCgkJCQlsMiwzLjQ2NEwxMTEuMTI5LDczLjg1NHogTTExOC40NjcsNjkuNjE3bC0yLTMuNDY0bDMuNjctMi4xMTlsMiwzLjQ2NEwxMTguNDY3LDY5LjYxN3oiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik0xMjUuODA3LDY1LjM4bC0wLjcyOS0xLjI2M2wtMS4yNjgtMC43MjVsMC40MjMtMC43MzlsLTAuNDI3LTAuNzM3bDEuMjY1LTAuNzNsMC43MjMtMS4yNjZsMS43MzYsMC45OTENCgkJCQljMC42MjIsMC4zNTUsMS4wMDYsMS4wMTYsMS4wMDgsMS43MzFjMC4wMDIsMC43MTctMC4zNzksMS4zNzktMC45OTksMS43MzdMMTI1LjgwNyw2NS4zOHoiLz4NCgkJPC9nPg0KCQk8Zz4NCg0KCQkJCTxyZWN0IHg9IjExOC42MjYiIHk9IjU3LjEwNiIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjgyIDAuNDk2MiAtMC40OTYyIDAuODY4MiA0NS4xOTIgLTUxLjkyNTIpIiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iMy40MjYiIGhlaWdodD0iNCIvPg0KCQk8L2c+DQoJCTxnPg0KDQoJCQkJPHJlY3QgeD0iMTE0LjAwOSIgeT0iNTQuMDYiIHRyYW5zZm9ybT0ibWF0cml4KDAuODY4IDAuNDk2NSAtMC40OTY1IDAuODY4IDQzLjAxMTcgLTQ5LjcwNDgpIiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iMiIgaGVpZ2h0PSI0Ii8+DQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KDQoJCQkJPHJlY3QgeD0iNjQuMDE1IiB5PSI4NS40NDkiIHRyYW5zZm9ybT0ibWF0cml4KDAuODY1OSAwLjUwMDEgLTAuNTAwMSAwLjg2NTkgNTIuNDUwOCAtMjAuNzkzNCkiIGZpbGw9IiMyODJEMzMiIHdpZHRoPSIxLjk5OSIgaGVpZ2h0PSIzLjk5OSIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iIzI4MkQzMyIgZD0iTTU5LjQ4LDg2LjU2M2wtMy42NjktMi4xMThsMi0zLjQ2NWwzLjY2OSwyLjExOEw1OS40OCw4Ni41NjN6IE01Mi4xNDIsODIuMzI2bC0zLjY2OS0yLjExN2wyLTMuNDY1DQoJCQkJbDMuNjY5LDIuMTE4TDUyLjE0Miw4Mi4zMjZ6IE00NC44MDQsNzguMDlsLTMuNjY5LTIuMTE4bDItMy40NjRsMy42NjksMi4xMThMNDQuODA0LDc4LjA5eiBNMzcuNDY2LDczLjg1NGwtMy42NjktMi4xMThsMi0zLjQ2NA0KCQkJCWwzLjY2OSwyLjExOUwzNy40NjYsNzMuODU0eiBNMzAuMTI4LDY5LjYxN2wtMy42NjktMi4xMThsMi0zLjQ2NGwzLjY2OSwyLjExOEwzMC4xMjgsNjkuNjE3eiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iIzI4MkQzMyIgZD0iTTIyLjc5LDY1LjM4bC0xLjczMi0xYy0wLjYyLTAuMzU4LTEuMDAxLTEuMDIxLTEtMS43MzZzMC4zODYtMS4zNzcsMS4wMDgtMS43MzJsMS43MzYtMC45OTFsMC43MjMsMS4yNjYNCgkJCQlsMS4yNjUsMC43M2wtMC40MjYsMC43MzhsMC40MjIsMC43MzhsLTEuMjY2LDAuNzI0TDIyLjc5LDY1LjM4eiIvPg0KCQk8L2c+DQoJCTxnPg0KDQoJCQkJPHJlY3QgeD0iMjYuMjU2IiB5PSI1Ny4zOTMiIHRyYW5zZm9ybT0ibWF0cml4KDAuNDk2MSAwLjg2ODIgLTAuODY4MiAwLjQ5NjEgNjUuNTU1MSA1LjI0ODcpIiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iNCIgaGVpZ2h0PSIzLjQyNiIvPg0KCQk8L2c+DQoJCTxnPg0KDQoJCQkJPHJlY3QgeD0iMzEuNTg1IiB5PSI1NS4wNiIgdHJhbnNmb3JtPSJtYXRyaXgoMC40OTYzIDAuODY4MSAtMC44NjgxIDAuNDk2MyA2NS41ODQxIC0wLjkyMDYpIiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iNCIgaGVpZ2h0PSIyIi8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ },

/***/ "ofc4":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__("PJh5");

var _moment2 = _interopRequireDefault(_moment);

var _Timeline = __webpack_require__("6wP3");

var _SyncTimeline = __webpack_require__("ilh4");

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _DownloadModal = __webpack_require__("M1D5");

var _DownloadModal2 = _interopRequireDefault(_DownloadModal);

var _Button = __webpack_require__("Yrew");

var _Button2 = _interopRequireDefault(_Button);

var _done = __webpack_require__("Xu4g");

var _done2 = _interopRequireDefault(_done);

var _DownloadFile = __webpack_require__("PAgI");

var _DownloadFile2 = _interopRequireDefault(_DownloadFile);

var _Label = __webpack_require__("XDK3");

var _Label2 = _interopRequireDefault(_Label);

var _LoadingOverlay = __webpack_require__("K+/r");

var _LoadingOverlay2 = _interopRequireDefault(_LoadingOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypesObject = {
  //  revisions: PropTypes.array,                // Standard array of revisions
  file: _react.PropTypes.object.isRequired // File object
};

var _default = _react2.default.createClass({
  displayName: '_default',

  propTypes: propTypesObject,
  componentWillMount: function componentWillMount() {
    var _props = this.props,
        file = _props.file,
        fetchTimeline = _props.fetchTimeline;

    if (file.project && file.project._id) {
      // If this is a sync file
      fetchTimeline({
        entityType: 'file',
        entityId: file.fileId,
        cacheKey: file.fileId
      });
    } else {
      // If this is remote file
      fetchTimeline({
        entityType: 'file',
        entityId: file.fileId,
        provider: file.provider,
        cacheKey: file.fileId
      });
    }
  },
  render: function render() {
    var _props2 = this.props,
        syncTimeline = _props2.syncTimeline,
        modalCancel = _props2.modalCancel,
        modalConfirm = _props2.modalConfirm;


    var allRevisions = syncTimeline && syncTimeline.data ? (0, _Timeline.orderByTime)((0, _SyncTimeline.getRevisions)(syncTimeline.data)) : [];

    return _react2.default.createElement(
      'div',
      { className: _DownloadModal2.default.modal + ' layout-column' },
      _react2.default.createElement(
        'div',
        { className: 'modal-title' },
        'Download previous versions'
      ),
      _react2.default.createElement(
        'div',
        { className: _DownloadModal2.default.ribbon + ' text-grey-3' },
        'You can download any previous version of this file. Take care when overwriting the latest version.'
      ),
      _react2.default.createElement(
        'div',
        { className: 'modal-body flex scroll-box rel-box', style: { padding: '0' } },
        _react2.default.createElement(_LoadingOverlay2.default, { show: syncTimeline && syncTimeline.loading, linear: true, hideBg: true }),
        allRevisions.map(function (revision, index) {
          return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(_DownloadModal2.default.row, 'layout-row layout-align-start-center'), key: revision._id },
            _react2.default.createElement(
              'div',
              { style: { width: '70px' } },
              'Version ',
              revision.data.revisionNumber
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex text-grey-3' },
              revision.timestamp ? (0, _moment2.default)(revision.timestamp).fromNow() : null
            ),
            index == 0 ? _react2.default.createElement(
              _Label2.default,
              { style: { marginRight: '10px' } },
              'Latest Version'
            ) : null,
            _react2.default.createElement(
              _DownloadFile2.default,
              { file: revision.data },
              'Download'
            )
          );
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'modal-footer layout-row layout-align-start-center' },
        _react2.default.createElement('div', { className: 'flex' }),
        _react2.default.createElement(
          _Button2.default,
          { className: 'primary', onClick: modalCancel },
          'Close'
        )
      )
    );
  }
});

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypesObject, 'propTypesObject', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Download/DownloadModal/DownloadModal.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Download/DownloadModal/DownloadModal.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Download/DownloadModal/DownloadModal.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "ov3P":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _redux = __webpack_require__("c9Fv");

var _reactRedux = __webpack_require__("4n+p");

var _FilesActions = __webpack_require__("iLLw");

var FilesActions = _interopRequireWildcard(_FilesActions);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _PreviewFile = __webpack_require__("4uMU");

var _PreviewFile2 = _interopRequireDefault(_PreviewFile);

var _PreviewCode = __webpack_require__("4Fub");

var _PreviewCode2 = _interopRequireDefault(_PreviewCode);

var _PreviewCadLoader = __webpack_require__("d0nm");

var _PreviewCadLoader2 = _interopRequireDefault(_PreviewCadLoader);

var _PreviewPdfLoader = __webpack_require__("z7Ks");

var _PreviewPdfLoader2 = _interopRequireDefault(_PreviewPdfLoader);

var _PreviewPcbLoader = __webpack_require__("qa9G");

var _PreviewPcbLoader2 = _interopRequireDefault(_PreviewPcbLoader);

var _PreviewImage = __webpack_require__("vcqR");

var _PreviewImage2 = _interopRequireDefault(_PreviewImage);

var _PreviewGoogle = __webpack_require__("Esfs");

var _PreviewGoogle2 = _interopRequireDefault(_PreviewGoogle);

var _PreviewGdoc = __webpack_require__("WLt+");

var _PreviewGdoc2 = _interopRequireDefault(_PreviewGdoc);

var _laptopSpanner = __webpack_require__("vUYb");

var _laptopSpanner2 = _interopRequireDefault(_laptopSpanner);

var _PreviewFileUtils = __webpack_require__("NamU");

var _PreviewCadUtils = __webpack_require__("hsss");

var _DownloadFile = __webpack_require__("PAgI");

var _DownloadFile2 = _interopRequireDefault(_DownloadFile);

var _Messages = __webpack_require__("y+z/");

var _Messages2 = _interopRequireDefault(_Messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// /////////////////////////////// COMPONENT /////////////////////////////////

var Component = exports.Component = _react2.default.createClass({
  displayName: 'Component',
  render: function render() {
    var _props = this.props,
        file = _props.file,
        fileData = _props.fileData,
        fileRender = _props.fileRender,
        filesActions = _props.filesActions,
        header = _props.header,
        event = _props.event;

    var previewId = file.project._id + '-' + file.fileId + '-' + file.revisionId;

    var renderFn = function renderFn() {
      filesActions.renderFile({
        projectId: file.project._id,
        fileId: file.fileId,
        revisionId: file.revisionId,
        provider: file.provider,
        timestamp: event && (0, _PreviewCadUtils.isAssembly)(file.extension) ? event.timestamp : ''
      });
    };

    var getPreview = function getPreview() {
      var viewerType = (0, _PreviewFileUtils.getViewerType)(file.name, file.provider);

      if (fileData && fileData.error || fileRender && fileRender.error) {
        return _react2.default.createElement(_Messages2.default, {
          error: fileData && fileData.error ? fileData.error : fileRender.error,
          fileMeta: file
        });
      } else if (viewerType === 'gerber' || viewerType === 'pcb') {
        return _react2.default.createElement(_PreviewPcbLoader2.default, {
          previewId: previewId,
          fileMeta: file,
          fileData: fileData,
          downloadFn: filesActions.getFile
        });
      } else if (viewerType === 'code') {
        return _react2.default.createElement(_PreviewCode2.default, {
          previewId: previewId,
          fileMeta: file,
          fileData: fileData,
          downloadFn: filesActions.getFile
        });
      } else if (viewerType === 'autodesk') {
        return _react2.default.createElement(_PreviewCadLoader2.default, {
          previewId: previewId,
          fileMeta: file,
          fileRender: fileRender,
          renderFn: renderFn
        });
      } else if (viewerType === 'google') {
        return _react2.default.createElement(_PreviewGoogle2.default, {
          previewId: previewId,
          fileMeta: file
        });
      } else if (viewerType === 'gdoc') {
        return _react2.default.createElement(_PreviewGdoc2.default, {
          previewId: previewId,
          fileMeta: file
        });
      } else if (viewerType === 'image') {
        return _react2.default.createElement(_PreviewImage2.default, {
          previewId: previewId,
          fileMeta: file,
          fileData: fileData,
          downloadFn: filesActions.getFile
        });
      } else if (viewerType === 'pdf') {
        return _react2.default.createElement(_PreviewPdfLoader2.default, {
          previewId: previewId,
          fileMeta: file,
          fileData: fileData,
          downloadFn: filesActions.getFile
        });
      }
      return _react2.default.createElement(
        'div',
        { className: 'layout-column layout-align-center-center flex' },
        _react2.default.createElement('img', { src: _laptopSpanner2.default, style: { width: '100px' } }),
        _react2.default.createElement(
          'div',
          { className: 'text-title-5 text-center', style: { marginTop: '10px' } },
          'Cannot preview this file type.'
        )
      );
    };
    return _react2.default.createElement(
      'div',
      { className: 'layout-column flex rel-box' },
      header ? _react2.default.createElement(
        'div',
        { className: _PreviewFile2.default.header + ' layout-row layout-align-start-center rel-box' },
        _react2.default.createElement(
          'div',
          null,
          'Version: ',
          file.revisionNumber
        ),
        _react2.default.createElement('div', { className: 'flex' }),
        _react2.default.createElement(
          _DownloadFile2.default,
          { file: file, title: 'Download Version ' + file.revisionNumber + ' of this file.' },
          'Download'
        )
      ) : null,
      getPreview()
    );
  }
});

// /////////////////////////////// CONTAINER /////////////////////////////////

function mapStateToProps(_ref, _ref2) {
  var files = _ref.files;
  var project = _ref2.project,
      file = _ref2.file,
      event = _ref2.event;

  // If the file has sub-parts, it is a gerber assembly - we need to fetch multiple files
  if (file.parts) {
    var _fileData = file.parts.map(function (file) {
      return files.fileData[file.fileId + '-' + file.revisionId];
    });
    return {
      fileData: _fileData
    };
  }
  var cacheKey = event && event.timestamp && (0, _PreviewCadUtils.isAssembly)(file.extension) ? file.fileId + '-' + file.revisionId + '-' + event.timestamp : file.fileId + '-' + file.revisionId;

  var fileData = files.fileData[cacheKey];
  return {
    fileData: fileData,
    fileRender: files.fileRenders[cacheKey]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filesActions: (0, _redux.bindActionCreators)(FilesActions, dispatch)
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Component);

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Component, 'Component', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewFile.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewFile.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewFile.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewFile.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewFile.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "pB9t":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"table":"StandardTable_table-3RaPn"};

/***/ },

/***/ "qa9G":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _PreviewPcbLoader = __webpack_require__("3xMh");

var _PreviewPcbLoader2 = _interopRequireDefault(_PreviewPcbLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PreviewPcbLoader2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "rrdH":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var identity = __webpack_require__("mD4+");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(castFunction, 'castFunction', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/node_modules/lodash/_castFunction.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "soWG":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommit = undefined;

var _axios = __webpack_require__("mtWM");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCommit = exports.getCommit = function getCommit(_ref) {
  var commitId = _ref.commitId;
  return {
    type: 'COMMITS/GET_COMMIT',
    payload: (0, _axios2.default)('api/v1/commits/' + commitId),
    meta: {
      cacheKey: commitId
    }
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getCommit, 'getCommit', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Commits/Commits.actions.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "tDaj":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeMode = exports.select = exports.initCompare = undefined;

var _get2 = __webpack_require__("NRvQ");

var _get3 = _interopRequireDefault(_get2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initCompare = exports.initCompare = function initCompare(_ref) {
  var file = _ref.file,
      cacheKey = _ref.cacheKey;
  return {
    type: 'FILE_COMPARE/INIT',
    payload: {
      selected1: (0, _get3.default)(file, ['revisions', '0'], file),
      selected2: (0, _get3.default)(file, 'revisions.length', 0) > 1 ? file.revisions[file.revisions.length - 1] : undefined,
      mode: (0, _get3.default)(file, 'revisions.length', 0) > 1 ? 'sideBySide' : 'single'
    },
    meta: {
      cacheKey: cacheKey
    }
  };
};

var select = exports.select = function select(_ref2) {
  var file = _ref2.file,
      mode = _ref2.mode,
      lastSelected = _ref2.lastSelected,
      cacheKey = _ref2.cacheKey;
  return {
    type: 'FILE_COMPARE/SELECT',
    payload: {
      file: file,
      selectedKey: mode === 'single' || lastSelected === 2 ? 1 : 2
    },
    meta: {
      cacheKey: cacheKey
    }
  };
};

var changeMode = exports.changeMode = function changeMode(_ref3) {
  var mode = _ref3.mode,
      cacheKey = _ref3.cacheKey;
  return (
    //    let { selected1, selected2 } = this.state;
    //    // If a second file is not selected - we select one if possible
    //    if(!selected2){
    //      const revisionIndex = revisions.findIndex(revision => revision.data.fileId == selected1.data.fileId && revision.data.revisionId == selected1.data.revisionId);
    //      if(revisions[revisionIndex - 1]){selected2 = revisions[revisionIndex - 1];}
    //      else if(revisions[revisionIndex + 1]){selected2 = revisions[revisionIndex + 1];}
    //    }
    //    this.setState({mode, selected2})
    {
      type: 'FILE_COMPARE/CHANGE_MODE',
      payload: {
        mode: mode
      },
      meta: {
        cacheKey: cacheKey
      }
    }
  );
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initCompare, 'initCompare', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.actions.js');

  __REACT_HOT_LOADER__.register(select, 'select', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.actions.js');

  __REACT_HOT_LOADER__.register(changeMode, 'changeMode', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompare.actions.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "vUYb":
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTUwcHgiIGhlaWdodD0iMTUwcHgiIHZpZXdCb3g9IjAgMCAxNTAgMTUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNTAgMTUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxyZWN0IHg9IjY5Mi4yNyIgeT0iMjAxMS4yMzMiIGZpbGw9IiNCN0JFQzAiIHdpZHRoPSI3MC41MTgiIGhlaWdodD0iNDMuMDY1Ii8+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik02NzMuOTc3LDIwNjAuMTE5djUuMDYyYzAsMCwzLjcwMywyLjc2NSw2LjQyMywyLjc2NWgzNC4wNzNoMjYuMTExaDM0LjA3Mg0KCQkJYzIuNzIxLDAsNi40MjQtMi43NjUsNi40MjQtMi43NjV2LTUuMDYySDY3My45Nzd6Ii8+DQoJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik03NzQuNjU2LDIwNjkuOTQ1aC05NC4yNTdjLTMuMjksMC03LjE4Ny0yLjgzOC03LjYyLTMuMTYybC0wLjgwMy0wLjZ2LTguMDY0SDc4My4wOHY4LjA2NGwtMC44MDQsMC42DQoJCQlDNzgxLjg0NCwyMDY3LjEwNyw3NzcuOTQ3LDIwNjkuOTQ1LDc3NC42NTYsMjA2OS45NDV6IE02NzUuOTc3LDIwNjQuMTMxYzEuMzI0LDAuODUyLDMuMjEzLDEuODE0LDQuNDIzLDEuODE0aDk0LjI1Nw0KCQkJYzEuMjQsMCwzLjE2OS0xLjAxNSw0LjQyNC0xLjgxNnYtMi4wMUg2NzUuOTc3VjIwNjQuMTMxeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTcwMi4xNjIsMjAzOS44MThoOC43NjRoMzMuMjA1aDguNzY0YzIuMDI5LDMuNzc5LDYuMDE2LDYuMzU0LDEwLjYwNSw2LjM1NA0KCQkJYzQuODM2LDAsOC45OTQtMi44NjIsMTAuOTA0LTYuOTc5aC0xMC4yNDZsLTIuOTE4LTUuMDUxbDIuOTE4LTUuMDUxaDEwLjI0NmMtMS45MS00LjExNi02LjA2OC02Ljk3OC0xMC45MDQtNi45NzgNCgkJCWMtNC41OSwwLTguNTc2LDIuNTcyLTEwLjYwNSw2LjM1NGwtOC43NjQtMC4wMDJsLTMzLjIwNSwwLjAwMmgtOC43NjRjLTIuMDI3LTMuNzgxLTYuMDE2LTYuMzU0LTEwLjYwNC02LjM1NA0KCQkJYy00LjgzNiwwLTguOTk2LDIuODYxLTEwLjkwNiw2Ljk3OGgxMC4yNDdsMi45MTUsNS4wNTFsLTIuOTE1LDUuMDUxaC0xMC4yNDdjMS45MSw0LjExNiw2LjA3LDYuOTc5LDEwLjkwNCw2Ljk3OQ0KCQkJQzY5Ni4xNDgsMjA0Ni4xNzIsNzAwLjEzNSwyMDQzLjU5OCw3MDIuMTYyLDIwMzkuODE4eiIvPg0KCQk8cGF0aCBmaWxsPSIjMjgyRDMzIiBkPSJNNzYzLjUsMjA0OC4xNzJjLTQuNzY2LDAtOS4xNi0yLjQwNi0xMS43NDEtNi4zNTRoLTQ4LjQ2Yy0yLjU4LDMuOTQ3LTYuOTc2LDYuMzU0LTExLjc0Miw2LjM1NA0KCQkJYy01LjQzNCwwLTEwLjQyNi0zLjE5NC0xMi43MTktOC4xMzdsLTEuMzE3LTIuODQyaDEyLjIyNGwxLjc2Mi0zLjA1MWwtMS43NjItMy4wNTFoLTEyLjIyNGwxLjMxNy0yLjg0Mg0KCQkJYzIuMjkzLTQuOTQyLDcuMjg2LTguMTM2LDEyLjcyMS04LjEzNmM0Ljc2NiwwLDkuMTYsMi40MDUsMTEuNzQsNi4zNTRsNDguNDYtMC4wMDFjMi41OC0zLjk0Nyw2Ljk3NS02LjM1MywxMS43NDEtNi4zNTMNCgkJCWM1LjQzMiwwLDEwLjQyNCwzLjE5MywxMi43MTgsOC4xMzZsMS4zMTksMi44NDJoLTEyLjIyNWwtMS43NjIsMy4wNTFsMS43NjIsMy4wNTFoMTIuMjI1bC0xLjMxOSwyLjg0Mg0KCQkJQzc3My45MjQsMjA0NC45NzgsNzY4LjkzMiwyMDQ4LjE3Miw3NjMuNSwyMDQ4LjE3MnogTTcwMC45NjcsMjAzNy44MThoNTMuMTI1bDAuNTY1LDEuMDU1YzEuNzU0LDMuMjY4LDUuMTQyLDUuMjk5LDguODQzLDUuMjk5DQoJCQljMi43MDQsMCw1LjI1Ni0xLjExLDcuMTEtMi45NzloLTcuNjA2bC00LjA3Mi03LjA1MWw0LjA3Mi03LjA1MWg3LjYwNmMtMS44NTQtMS44NjgtNC40MDYtMi45NzgtNy4xMS0yLjk3OA0KCQkJYy0zLjcwMSwwLTcuMDksMi4wMy04Ljg0Myw1LjI5OWwtMC41NjUsMS4wNTVsLTkuOTYyLTAuMDAybC00My4xNjQsMC4wMDJsLTAuNTY1LTEuMDU1Yy0xLjc1NC0zLjI2OS01LjE0Mi01LjI5OS04Ljg0Mi01LjI5OQ0KCQkJYy0yLjcwNiwwLTUuMjU5LDEuMTA5LTcuMTEzLDIuOTc4aDcuNjA5bDQuMDY5LDcuMDUxbC00LjA2OSw3LjA1MWgtNy42MDljMS44NTQsMS44NjksNC40MDYsMi45NzksNy4xMTEsMi45NzkNCgkJCWMzLjcwMSwwLDcuMDktMi4wMzEsOC44NDQtNS4yOTlMNzAwLjk2NywyMDM3LjgxOHoiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik03NzAuNzg3LDIwMTcuMjk5aC00di05LjI0NmMwLTAuNDUyLTAuMzY4LTAuODE5LTAuODItMC44MTloLTc2Ljg3OWMtMC40NTEsMC0wLjgxOCwwLjM2Ny0wLjgxOCwwLjgxOQ0KCQkJdjkuMjQ2aC00di05LjI0NmMwLTIuNjU3LDIuMTYyLTQuODE5LDQuODE4LTQuODE5aDc2Ljg3OWMyLjY1OCwwLDQuODIsMi4xNjIsNC44Miw0LjgxOVYyMDE3LjI5OXoiLz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KCQkJPHJlY3QgeD0iNzY2Ljc4NyIgeT0iMjA1MC41NDkiIGZpbGw9IiMyODJEMzMiIHdpZHRoPSI0IiBoZWlnaHQ9IjkuODMxIi8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cmVjdCB4PSI2ODQuMjciIHk9IjIwNTAuNTQ5IiBmaWxsPSIjMjgyRDMzIiB3aWR0aD0iNCIgaGVpZ2h0PSI5LjgzMSIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPHJlY3QgeD0iMzkuMjciIHk9IjUyLjIzMyIgZmlsbD0iI0I3QkVDMCIgd2lkdGg9IjcwLjUxOCIgaGVpZ2h0PSI0My4wNjUiLz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTIwLjk3NywxMDEuMTE5djUuMDYyYzAsMCwzLjcwMywyLjc2NSw2LjQyMywyLjc2NWgzNC4wNzNoMjYuMTExaDM0LjA3MmMyLjcyMSwwLDYuNDI0LTIuNzY1LDYuNDI0LTIuNzY1DQoJCQl2LTUuMDYySDIwLjk3N3oiLz4NCgkJPHBhdGggZmlsbD0iIzI4MkQzMyIgZD0iTTEyMS42NTYsMTEwLjk0NUgyNy4zOTljLTMuMjksMC03LjE4Ny0yLjgzOC03LjYyLTMuMTYybC0wLjgwMy0wLjZ2LTguMDY0SDEzMC4wOHY4LjA2NGwtMC44MDQsMC42DQoJCQlDMTI4Ljg0NCwxMDguMTA3LDEyNC45NDcsMTEwLjk0NSwxMjEuNjU2LDExMC45NDV6IE0yMi45NzcsMTA1LjEzMWMxLjMyNCwwLjg1MiwzLjIxMywxLjgxNCw0LjQyMywxLjgxNGg5NC4yNTcNCgkJCWMxLjI0LDAsMy4xNjktMS4wMTUsNC40MjQtMS44MTZ2LTIuMDFIMjIuOTc3VjEwNS4xMzF6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDkuMTYyLDgwLjgxOGg4Ljc2NGgzMy4yMDVoOC43NjRjMi4wMjksMy43NzksNi4wMTYsNi4zNTQsMTAuNjA1LDYuMzU0DQoJCQljNC44MzYsMCw4Ljk5NC0yLjg2MiwxMC45MDQtNi45NzloLTEwLjI0NmwtMi45MTgtNS4wNTFsMi45MTgtNS4wNTFoMTAuMjQ2Yy0xLjkxLTQuMTE2LTYuMDY4LTYuOTc4LTEwLjkwNC02Ljk3OA0KCQkJYy00LjU5LDAtOC41NzYsMi41NzItMTAuNjA1LDYuMzU0bC04Ljc2NC0wLjAwMmwtMzMuMjA1LDAuMDAyaC04Ljc2NGMtMi4wMjctMy43ODEtNi4wMTYtNi4zNTQtMTAuNjA0LTYuMzU0DQoJCQljLTQuODM2LDAtOC45OTYsMi44NjEtMTAuOTA2LDYuOTc4aDEwLjI0N2wyLjkxNSw1LjA1MWwtMi45MTUsNS4wNTFIMjcuNjUyYzEuOTEsNC4xMTYsNi4wNyw2Ljk3OSwxMC45MDQsNi45NzkNCgkJCUM0My4xNDgsODcuMTcyLDQ3LjEzNSw4NC41OTgsNDkuMTYyLDgwLjgxOHoiLz4NCgkJPHBhdGggZmlsbD0iIzI4MkQzMyIgZD0iTTExMC41LDg5LjE3MmMtNC43NjYsMC05LjE2LTIuNDA2LTExLjc0MS02LjM1NGgtNDguNDZjLTIuNTgsMy45NDctNi45NzYsNi4zNTQtMTEuNzQyLDYuMzU0DQoJCQljLTUuNDM0LDAtMTAuNDI2LTMuMTk0LTEyLjcxOS04LjEzN2wtMS4zMTctMi44NDJoMTIuMjI0bDEuNzYyLTMuMDUxbC0xLjc2Mi0zLjA1MUgyNC41MjFsMS4zMTctMi44NDINCgkJCWMyLjI5My00Ljk0Miw3LjI4Ni04LjEzNiwxMi43MjEtOC4xMzZjNC43NjYsMCw5LjE2LDIuNDA1LDExLjc0LDYuMzU0bDQ4LjQ2LTAuMDAxYzIuNTgtMy45NDcsNi45NzUtNi4zNTMsMTEuNzQxLTYuMzUzDQoJCQljNS40MzIsMCwxMC40MjQsMy4xOTMsMTIuNzE4LDguMTM2bDEuMzE5LDIuODQyaC0xMi4yMjVsLTEuNzYyLDMuMDUxbDEuNzYyLDMuMDUxaDEyLjIyNWwtMS4zMTksMi44NDINCgkJCUMxMjAuOTI0LDg1Ljk3OCwxMTUuOTMyLDg5LjE3MiwxMTAuNSw4OS4xNzJ6IE00Ny45NjcsNzguODE4aDUzLjEyNWwwLjU2NSwxLjA1NWMxLjc1NCwzLjI2OCw1LjE0Miw1LjI5OSw4Ljg0Myw1LjI5OQ0KCQkJYzIuNzA0LDAsNS4yNTYtMS4xMSw3LjExLTIuOTc5aC03LjYwNmwtNC4wNzItNy4wNTFsNC4wNzItNy4wNTFoNy42MDZjLTEuODU0LTEuODY4LTQuNDA2LTIuOTc4LTcuMTEtMi45NzgNCgkJCWMtMy43MDEsMC03LjA5LDIuMDMtOC44NDMsNS4yOTlsLTAuNTY1LDEuMDU1bC05Ljk2Mi0wLjAwMmwtNDMuMTY0LDAuMDAyTDQ3LjQsNzAuNDEzYy0xLjc1NC0zLjI2OS01LjE0Mi01LjI5OS04Ljg0Mi01LjI5OQ0KCQkJYy0yLjcwNiwwLTUuMjU5LDEuMTA5LTcuMTEzLDIuOTc4aDcuNjA5bDQuMDY5LDcuMDUxbC00LjA2OSw3LjA1MWgtNy42MDljMS44NTQsMS44NjksNC40MDYsMi45NzksNy4xMTEsMi45NzkNCgkJCWMzLjcwMSwwLDcuMDktMi4wMzEsOC44NDQtNS4yOTlMNDcuOTY3LDc4LjgxOHoiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik0xMTcuNzg3LDU4LjI5OWgtNHYtOS4yNDZjMC0wLjQ1Mi0wLjM2OC0wLjgxOS0wLjgyLTAuODE5SDM2LjA4OGMtMC40NTEsMC0wLjgxOCwwLjM2Ny0wLjgxOCwwLjgxOXY5LjI0Ng0KCQkJaC00di05LjI0NmMwLTIuNjU3LDIuMTYyLTQuODE5LDQuODE4LTQuODE5aDc2Ljg3OWMyLjY1OCwwLDQuODIsMi4xNjIsNC44Miw0LjgxOVY1OC4yOTl6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjExMy43ODciIHk9IjkxLjU0OSIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjQiIGhlaWdodD0iOS44MzEiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjMxLjI3IiB5PSI5MS41NDkiIGZpbGw9IiMyODJEMzMiIHdpZHRoPSI0IiBoZWlnaHQ9IjkuODMxIi8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ },

/***/ "vVr8":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"border1":"rgba(0, 0, 0, 0.1)","titleBar":"TogglePanel_titleBar-37a0p","toggleIcon":"TogglePanel_toggleIcon-3Bjck","toggleIconActive":"TogglePanel_toggleIconActive-2cHXc","content":"TogglePanel_content-ksKiC"};

/***/ },

/***/ "vcqR":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _PreviewImage = __webpack_require__("9I4c");

var _PreviewImage2 = _interopRequireDefault(_PreviewImage);

var _LoadingOverlay = __webpack_require__("K+/r");

var _LoadingOverlay2 = _interopRequireDefault(_LoadingOverlay);

var _ScrollZoom = __webpack_require__("URI7");

var _ScrollZoom2 = _interopRequireDefault(_ScrollZoom);

var _utils = __webpack_require__("CzcJ");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createClass({
  displayName: '_default',
  getInitialState: function getInitialState() {
    return {
      scale: 1,
      naturalWidth: 0,
      naturalHeight: 0
    };
  },
  componentWillMount: function componentWillMount() {
    this.onMount(this.props);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.onMount(nextProps, this.props);
  },
  onMount: function onMount(nextProps, prevProps) {
    // If the previewId changes, download a new file
    if (!prevProps || nextProps.previewId !== prevProps.previewId) {
      nextProps.downloadFn({
        projectId: nextProps.fileMeta.project._id,
        fileId: nextProps.fileMeta.fileId,
        revisionId: nextProps.fileMeta.revisionId,
        provider: nextProps.fileMeta.provider,
        responseType: 'path'
      });
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    setTimeout(function () {
      var _ref = [_this.refs.container.offsetWidth, _this.refs.container.offsetHeight],
          containerWidth = _ref[0],
          containerHeight = _ref[1];
      var _refs$image = _this.refs.image,
          naturalWidth = _refs$image.naturalWidth,
          naturalHeight = _refs$image.naturalHeight;

      var widthScale = containerWidth / naturalWidth * 0.9;
      var heightScale = containerHeight / naturalHeight * 0.9;
      var scale = widthScale < heightScale ? widthScale : heightScale;
      _this.setState({
        scale: scale > 1 ? 1 : scale,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight
      });
    }, 1);
  },
  zoom: function zoom(direction) {
    var newValue = 0;
    if (direction == 'in') {
      newValue = Math.round(this.state.scale * 1.1 * 100) / 100;
    } else {
      newValue = Math.round(this.state.scale * 0.9 * 100) / 100;
      newValue = newValue > 0 ? newValue : this.state.scale;
    }
    this.setState({ scale: newValue });
  },
  render: function render() {
    var _this2 = this;

    var _props = this.props,
        fileMeta = _props.fileMeta,
        fileData = _props.fileData;
    var _state = this.state,
        scale = _state.scale,
        naturalWidth = _state.naturalWidth,
        naturalHeight = _state.naturalHeight;

    var sizeStyles = {
      width: naturalWidth * scale,
      height: naturalHeight * scale
    };

    var imageUrl = fileData && fileData.data ? fileData.data : '';
    var isLoading = fileData && fileData.data ? fileData.loading : true;

    return _react2.default.createElement(
      'div',
      { ref: 'container', className: _PreviewImage2.default.container + ' flex rel-box' },
      _react2.default.createElement(
        _ScrollZoom2.default,
        { zoomIn: function zoomIn() {
            return _this2.zoom('in');
          }, zoomOut: function zoomOut() {
            return _this2.zoom('out');
          }, style: { display: 'table', width: '100%', height: '100%' } },
        _react2.default.createElement(
          'div',
          { style: { display: 'table-cell', textAlign: 'center', verticalAlign: 'middle' } },
          _react2.default.createElement('img', {
            src: imageUrl,
            ref: 'image',
            className: _PreviewImage2.default.image,
            style: sizeStyles,
            onLoad: this.onLoad
          })
        )
      ),
      _react2.default.createElement(_LoadingOverlay2.default, { show: isLoading })
    );
  }
});

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewImage/PreviewImage.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/PreviewImage/PreviewImage.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "w64s":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__("aSqn");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  return _react2.default.createElement(
    _reactIconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M22.875,1.125H1.125v21.75h21.75V1.125z M20.875,3.125V11H3.125V3.125H20.875z M3.125,20.875V13h17.75v7.875H3.125z' })
  );
};

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/top-bottom.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/top-bottom.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "w7A3":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__("4n+p");

var _CodeSplitting = __webpack_require__("YsX+");

var _LoadSplitCode = __webpack_require__("Mh/p");

var _LoadSplitCode2 = _interopRequireDefault(_LoadSplitCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateToProps = function stateToProps() {
  return {};
};

var dispatchToProps = {
  loadCode: _CodeSplitting.loadCode
};

var _default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(_LoadSplitCode2.default);

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateToProps, 'stateToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/CodeSplitting/LoadSplitCode/LoadSplitCode.container.js');

  __REACT_HOT_LOADER__.register(dispatchToProps, 'dispatchToProps', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/CodeSplitting/LoadSplitCode/LoadSplitCode.container.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/CodeSplitting/LoadSplitCode/LoadSplitCode.container.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/CodeSplitting/LoadSplitCode/LoadSplitCode.container.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "xWsN":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactClickdrag = __webpack_require__("FOlW");

var _reactClickdrag2 = _interopRequireDefault(_reactClickdrag);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _DragResize = __webpack_require__("AIsm");

var _DragResize2 = _interopRequireDefault(_DragResize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
var DraggerComponent = _react2.default.createClass({
  displayName: 'DraggerComponent',
  getInitialState: function getInitialState() {
    return {
      lastEventId: null,
      active: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.dataDrag.isMoving && nextProps.dataDrag.id && nextProps.dataDrag.id != this.state.lastEventId) {
      this.setState({ active: true, lastEventId: nextProps.dataDrag.id });
      if (nextProps.side == 'left' || nextProps.side == 'right') {
        this.props.changeFn({
          deltaX: nextProps.side == 'right' ? nextProps.dataDrag.deltaX : -nextProps.dataDrag.deltaX
        });
      } else {
        this.props.changeFn({
          deltaY: nextProps.side == 'bottom' ? nextProps.dataDrag.deltaY : -nextProps.dataDrag.deltaY
        });
      }
    } else {
      this.setState({ active: false });
    }
  },
  render: function render() {
    var styles = {
      right: {
        width: '6px',
        top: '0',
        bottom: '0',
        right: '0',
        marginRight: '-6px',
        cursor: 'col-resize'
      },
      left: {
        width: '6px',
        top: '0',
        bottom: '0',
        left: '0',
        marginLeft: '-6px',
        cursor: 'col-resize'
      },
      bottom: {
        height: '6px',
        bottom: '0',
        right: '0',
        left: '0',
        marginBottom: '0px',
        cursor: 'row-resize'
      },
      top: {
        height: '6px',
        top: '0',
        right: '0',
        left: '0',
        marginTop: '-3px',
        cursor: 'row-resize'
      }
    };

    return _react2.default.createElement('div', { className: _DragResize2.default.dragger, style: styles[this.props.side] });
  }
});

var Dragger = (0, _reactClickdrag2.default)(DraggerComponent, { touch: true });

var _default = _react2.default.createClass({
  displayName: '_default',
  getInitialState: function getInitialState() {
    if (this.props.width) {
      return { width: parseInt(this.props.width) };
    } else if (this.props.height) {
      return { height: parseInt(this.props.height) };
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this = this;

    if (nextProps.animateHide != this.props.animateHide) {
      if (nextProps.width) {
        this.setState({ width: nextProps.animateHide ? '0' : nextProps.width, animate: true });
      } else {
        this.setState({ height: nextProps.animateHide ? '0' : nextProps.height, animate: true });
      }
      setTimeout(function () {
        return _this.setState({ animate: false });
      }, 300);
    }
  },
  drag: function drag(change) {
    var _props = this.props,
        widthRange = _props.widthRange,
        heightRange = _props.heightRange;

    if (change.deltaX) {
      var width = parseInt(this.state.width) + change.deltaX;
      if (widthRange) {
        if (width < widthRange[0]) {
          width = widthRange[0];
        } else if (width > widthRange[1]) {
          width = widthRange[1];
        }
      }
      this.setState({ width: width });
    } else if (change.deltaY) {
      var height = parseInt(this.state.height) + change.deltaY;
      if (heightRange) {
        if (height < heightRange[0]) {
          height = heightRange[0];
        } else if (height > heightRange[1]) {
          height = heightRange[1];
        }
      }
      this.setState({ height: height });
    }
  },
  render: function render() {
    var style = {
      width: this.state.width + 'px',
      height: this.state.height + 'px',
      transition: this.state.animate ? '0.3s ease all' : 'none'
    };
    return _react2.default.createElement(
      'div',
      { style: style, className: (0, _classnames2.default)(_DragResize2.default.box, this.props.className) },
      this.props.children,
      _react2.default.createElement(Dragger, { changeFn: this.drag, side: this.props.side })
    );
  }
});

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DraggerComponent, 'DraggerComponent', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/DragResize/DragResize.jsx');

  __REACT_HOT_LOADER__.register(Dragger, 'Dragger', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/DragResize/DragResize.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/DragResize/DragResize.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/DragResize/DragResize.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "y+z/":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _PreviewExpired = __webpack_require__("VFfI");

var _PreviewExpired2 = _interopRequireDefault(_PreviewExpired);

var _AssemblyPartNotFound = __webpack_require__("OFqu");

var _AssemblyPartNotFound2 = _interopRequireDefault(_AssemblyPartNotFound);

var _File = __webpack_require__("E45T");

var _File2 = _interopRequireDefault(_File);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createClass({
  displayName: '_default',
  render: function render() {
    var _props = this.props,
        error = _props.error,
        fileMeta = _props.fileMeta;


    if (error.type == 'REVISION_NOT_FOUND') {
      return _react2.default.createElement(_PreviewExpired2.default, { provider: fileMeta.provider });
    } else if (error.type == 'ASSEMBLY_PART_NOT_FOUND') {
      return _react2.default.createElement(_AssemblyPartNotFound2.default, { parts: error.data.parts });
    }
    // This 404 is a special case
    // This is produced in the fileCache - it is a wierd structure because it is stream related
    else if (error.statusCode == 404) {
        return _react2.default.createElement(_File2.default, null);
      }

    return _react2.default.createElement(
      'div',
      { className: 'layout-column layout-align-center-center flex' },
      _react2.default.createElement(
        'div',
        { className: 'text-title-5' },
        error.message
      )
    );
  }
});

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/Messages.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/Messages.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "y5Ae":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slide = exports.SideBySide = exports.TopBottom = exports.Single = exports.OnionSkin = undefined;

var _onionSkin = __webpack_require__("WWpa");

var _onionSkin2 = _interopRequireDefault(_onionSkin);

var _single = __webpack_require__("7Y6v");

var _single2 = _interopRequireDefault(_single);

var _topBottom = __webpack_require__("w64s");

var _topBottom2 = _interopRequireDefault(_topBottom);

var _sideBySide = __webpack_require__("1L9T");

var _sideBySide2 = _interopRequireDefault(_sideBySide);

var _slide = __webpack_require__("bt+N");

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OnionSkin = exports.OnionSkin = _onionSkin2.default;
var Single = exports.Single = _single2.default;
var TopBottom = exports.TopBottom = _topBottom2.default;
var SideBySide = exports.SideBySide = _sideBySide2.default;
var Slide = exports.Slide = _slide2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(OnionSkin, 'OnionSkin', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/index.js');

  __REACT_HOT_LOADER__.register(Single, 'Single', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/index.js');

  __REACT_HOT_LOADER__.register(TopBottom, 'TopBottom', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/index.js');

  __REACT_HOT_LOADER__.register(SideBySide, 'SideBySide', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/index.js');

  __REACT_HOT_LOADER__.register(Slide, 'Slide', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/compare/index.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "yAuS":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ModalRegistry = __webpack_require__("p8CK");

var _PreviewExpiredModal = __webpack_require__("eg74");

var _PreviewExpiredModal2 = _interopRequireDefault(_PreviewExpiredModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(modalName) {
  (0, _ModalRegistry.registerModal)(modalName, _PreviewExpiredModal2.default);
  return modalName;
};

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/PreviewExpired/PreviewExpiredModal/PreviewExpiredModal.container.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/PreviewFile/Messages/PreviewExpired/PreviewExpiredModal/PreviewExpiredModal.container.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "ykyt":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _FileCompareSlider = __webpack_require__("0MEN");

var _FileCompareSlider2 = _interopRequireDefault(_FileCompareSlider);

var _reactClickdrag = __webpack_require__("FOlW");

var _reactClickdrag2 = _interopRequireDefault(_reactClickdrag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = _react2.default.createClass({
  displayName: 'Component',
  getInitialState: function getInitialState() {
    return {
      active: false,
      lastEventId: ''
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.dataDrag.isMoving && nextProps.dataDrag.id && nextProps.dataDrag.id != this.state.lastEventId) {
      var containerWidth = this.props.container.offsetWidth;
      var prevPositionPx = nextProps.position / 100 * containerWidth;
      var newPositionPx = prevPositionPx + nextProps.dataDrag.deltaX;
      if (newPositionPx <= 0) {
        newPositionPx = 0;
      } else if (newPositionPx >= containerWidth) {
        newPositionPx = containerWidth;
      }
      var positionPerc = newPositionPx / containerWidth * 100;
      this.setState({ active: true });
      this.setState({ lastEventId: nextProps.dataDrag.id });
      this.props.changeFn(positionPerc);
    } else {
      this.setState({ active: false });
    }
  },
  render: function render() {
    var translation = this.props.position + '%';
    return _react2.default.createElement('div', { className: (0, _classnames2.default)(_FileCompareSlider2.default.slider, (0, _defineProperty3.default)({}, _FileCompareSlider2.default.active, this.state.active)), style: { left: translation } });
  }
});

// Styles

var _default = (0, _reactClickdrag2.default)(Component, { touch: true });

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Component, 'Component', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompareInner/FileCompareSlider/FileCompareSlider.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompareInner/FileCompareSlider/FileCompareSlider.jsx');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/FileCompare/FileCompareInner/FileCompareSlider/FileCompareSlider.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "z53e":
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toggle = exports.toggle = function toggle(_ref) {
  var cacheKey = _ref.cacheKey,
      value = _ref.value;
  return function (dispatch, getState) {
    var currentValue = getState().togglePanel[cacheKey];

    // If value == null - we toggle.
    // Otherwise, we set it to the value.

    dispatch({
      type: 'TOGGLE_PANEL/TOGGLE',
      payload: {
        cacheKey: cacheKey,
        value: value === null ? !currentValue : value
      }
    });
  };
};
var toggleMulti = exports.toggleMulti = function toggleMulti(_ref2) {
  var cacheKeys = _ref2.cacheKeys;
  return function (dispatch, getState) {
    var newValue = cacheKeys && cacheKeys[0] ? !getState().togglePanel[cacheKeys[0]] : false;
    dispatch({
      type: 'TOGGLE_PANEL/TOGGLE_MULTI',
      payload: {
        cacheKeys: cacheKeys,
        value: newValue
      }
    });
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(toggle, 'toggle', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/TogglePanel/TogglePanel.actions.js');

  __REACT_HOT_LOADER__.register(toggleMulti, 'toggleMulti', 'C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/TogglePanel/TogglePanel.actions.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ },

/***/ "z7Ks":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _PreviewPdfLoader = __webpack_require__("Cc65");

var _PreviewPdfLoader2 = _interopRequireDefault(_PreviewPdfLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PreviewPdfLoader2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }

});
//# sourceMappingURL=7.a22611d1f610bacb9999.js.map