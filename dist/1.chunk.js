webpackJsonp([1],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcArticleBox105_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77d5cbfb_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcArticleBox105_vue__ = __webpack_require__(25);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcArticleBox105_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77d5cbfb_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcArticleBox105_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcArticleBox105.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcArticleBox105.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77d5cbfb", Component.options)
  } else {
    hotAPI.reload("data-v-77d5cbfb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  watch: {
    // : function () {
    // }
  },
  props: ["prName1"],
  components: {},
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "vcarticlebox105"
  }, [_c('div', {
    staticClass: "vcarticlebox105_img-holder"
  }, [_c('img', {
    attrs: {
      "src": "img.jpg",
      "alt": "img alt",
      "title": "img title"
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "vcarticlebox105_img-holder_heading"
  }, [_vm._v("Img title")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n      tempor incididunt ut labore et dolore magna aliqua.")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn1-01",
    attrs: {
      "data-message": "button1",
      "tabindex": "0"
    }
  }, [_vm._v("button1")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn1-01",
    attrs: {
      "data-message": "button2",
      "tabindex": "0"
    }
  }, [_vm._v("button2")])]), _vm._v(" "), _c('article', {
    attrs: {
      "role": "article"
    }
  }, [_c('h3', {
    staticClass: "vcarticlebox105_heading"
  }, [_vm._v("Article title")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', [_vm._v("\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n        quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n      ")])]), _vm._v(" "), _c('footer', {
    staticClass: "vcarticlebox105_extras"
  }, [_c('button', {
    staticClass: "btn btn1-01",
    attrs: {
      "data-message": "button1",
      "tabindex": "0"
    }
  }, [_vm._v("extra button")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-77d5cbfb", esExports)
  }
}

/***/ })

});