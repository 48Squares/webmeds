"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_screens_index_js"],{

/***/ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayLikeToArray": () => (/* binding */ _arrayLikeToArray),
/* harmony export */   "createForOfIteratorHelperLoose": () => (/* binding */ _createForOfIteratorHelperLoose),
/* harmony export */   "extends": () => (/* binding */ _extends),
/* harmony export */   "objectWithoutPropertiesLoose": () => (/* binding */ _objectWithoutPropertiesLoose),
/* harmony export */   "unsupportedIterableToArray": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}


//# sourceMappingURL=_rollupPluginBabelHelpers.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.esm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keys": () => (/* binding */ Keys)
/* harmony export */ });
// TODO: This must already exist somewhere, right? 🤔
// Ref: https://www.w3.org/TR/uievents-key/#named-key-attribute-values
var Keys;

(function (Keys) {
  Keys["Space"] = " ";
  Keys["Enter"] = "Enter";
  Keys["Escape"] = "Escape";
  Keys["Backspace"] = "Backspace";
  Keys["ArrowLeft"] = "ArrowLeft";
  Keys["ArrowUp"] = "ArrowUp";
  Keys["ArrowRight"] = "ArrowRight";
  Keys["ArrowDown"] = "ArrowDown";
  Keys["Home"] = "Home";
  Keys["End"] = "End";
  Keys["PageUp"] = "PageUp";
  Keys["PageDown"] = "PageDown";
  Keys["Tab"] = "Tab";
})(Keys || (Keys = {}));


//# sourceMappingURL=keyboard.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/menu/menu.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/menu/menu.esm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-sync-refs.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js");
/* harmony import */ var _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/bugs.esm.js */ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/focus-management.esm.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.esm.js");
/* harmony import */ var _hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-window-event.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js");
/* harmony import */ var _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal/open-closed.esm.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js");
/* harmony import */ var _hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js");
/* harmony import */ var _utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/disposables.esm.js */ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js");
/* harmony import */ var _hooks_use_disposables_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-disposables.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.esm.js");
/* harmony import */ var _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculate-active-index.esm.js */ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.esm.js");
/* harmony import */ var _hooks_use_tree_walker_esm_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-tree-walker.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.esm.js");


















var _reducers;
var MenuStates;

(function (MenuStates) {
  MenuStates[MenuStates["Open"] = 0] = "Open";
  MenuStates[MenuStates["Closed"] = 1] = "Closed";
})(MenuStates || (MenuStates = {}));

var ActionTypes;

(function (ActionTypes) {
  ActionTypes[ActionTypes["OpenMenu"] = 0] = "OpenMenu";
  ActionTypes[ActionTypes["CloseMenu"] = 1] = "CloseMenu";
  ActionTypes[ActionTypes["GoToItem"] = 2] = "GoToItem";
  ActionTypes[ActionTypes["Search"] = 3] = "Search";
  ActionTypes[ActionTypes["ClearSearch"] = 4] = "ClearSearch";
  ActionTypes[ActionTypes["RegisterItem"] = 5] = "RegisterItem";
  ActionTypes[ActionTypes["UnregisterItem"] = 6] = "UnregisterItem";
})(ActionTypes || (ActionTypes = {}));

var reducers = (_reducers = {}, _reducers[ActionTypes.CloseMenu] = function (state) {
  if (state.menuState === MenuStates.Closed) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    activeItemIndex: null,
    menuState: MenuStates.Closed
  });
}, _reducers[ActionTypes.OpenMenu] = function (state) {
  if (state.menuState === MenuStates.Open) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    menuState: MenuStates.Open
  });
}, _reducers[ActionTypes.GoToItem] = function (state, action) {
  var activeItemIndex = (0,_utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.calculateActiveIndex)(action, {
    resolveItems: function resolveItems() {
      return state.items;
    },
    resolveActiveIndex: function resolveActiveIndex() {
      return state.activeItemIndex;
    },
    resolveId: function resolveId(item) {
      return item.id;
    },
    resolveDisabled: function resolveDisabled(item) {
      return item.dataRef.current.disabled;
    }
  });
  if (state.searchQuery === '' && state.activeItemIndex === activeItemIndex) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    searchQuery: '',
    activeItemIndex: activeItemIndex
  });
}, _reducers[ActionTypes.Search] = function (state, action) {
  var searchQuery = state.searchQuery + action.value.toLowerCase();
  var match = state.items.findIndex(function (item) {
    var _item$dataRef$current;

    return ((_item$dataRef$current = item.dataRef.current.textValue) == null ? void 0 : _item$dataRef$current.startsWith(searchQuery)) && !item.dataRef.current.disabled;
  });
  if (match === -1 || match === state.activeItemIndex) return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    searchQuery: searchQuery
  });
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    searchQuery: searchQuery,
    activeItemIndex: match
  });
}, _reducers[ActionTypes.ClearSearch] = function (state) {
  if (state.searchQuery === '') return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    searchQuery: ''
  });
}, _reducers[ActionTypes.RegisterItem] = function (state, action) {
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    items: [].concat(state.items, [{
      id: action.id,
      dataRef: action.dataRef
    }])
  });
}, _reducers[ActionTypes.UnregisterItem] = function (state, action) {
  var nextItems = state.items.slice();
  var currentActiveItem = state.activeItemIndex !== null ? nextItems[state.activeItemIndex] : null;
  var idx = nextItems.findIndex(function (a) {
    return a.id === action.id;
  });
  if (idx !== -1) nextItems.splice(idx, 1);
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    items: nextItems,
    activeItemIndex: function () {
      if (idx === state.activeItemIndex) return null;
      if (currentActiveItem === null) return null; // If we removed the item before the actual active index, then it would be out of sync. To
      // fix this, we will find the correct (new) index position.

      return nextItems.indexOf(currentActiveItem);
    }()
  });
}, _reducers);
var MenuContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
MenuContext.displayName = 'MenuContext';

function useMenuContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MenuContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Menu.name + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useMenuContext);
    throw err;
  }

  return context;
}

function stateReducer(state, action) {
  return (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(action.type, reducers, state, action);
} // ---


var DEFAULT_MENU_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function Menu(props) {
  var _match;

  var reducerBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateReducer, {
    menuState: MenuStates.Closed,
    buttonRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),
    itemsRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),
    items: [],
    searchQuery: '',
    activeItemIndex: null
  });
  var _reducerBag$ = reducerBag[0],
      menuState = _reducerBag$.menuState,
      itemsRef = _reducerBag$.itemsRef,
      buttonRef = _reducerBag$.buttonRef,
      dispatch = reducerBag[1]; // Handle outside click

  (0,_hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_4__.useWindowEvent)('mousedown', function (event) {
    var _buttonRef$current, _itemsRef$current;

    var target = event.target;
    if (menuState !== MenuStates.Open) return;
    if ((_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.contains(target)) return;
    if ((_itemsRef$current = itemsRef.current) == null ? void 0 : _itemsRef$current.contains(target)) return;
    dispatch({
      type: ActionTypes.CloseMenu
    });

    if (!(0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.isFocusableElement)(target, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.FocusableMode.Loose)) {
      var _buttonRef$current2;

      event.preventDefault();
      (_buttonRef$current2 = buttonRef.current) == null ? void 0 : _buttonRef$current2.focus();
    }
  });
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: menuState === MenuStates.Open
    };
  }, [menuState]);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuContext.Provider, {
    value: reducerBag
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.OpenClosedProvider, {
    value: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(menuState, (_match = {}, _match[MenuStates.Open] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.State.Open, _match[MenuStates.Closed] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.State.Closed, _match))
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: props,
    slot: slot,
    defaultTag: DEFAULT_MENU_TAG,
    name: 'Menu'
  })));
} // ---

var DEFAULT_BUTTON_TAG = 'button';
var Button = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.forwardRefWithAs)(function Button(props, ref) {
  var _state$itemsRef$curre;

  var _useMenuContext = useMenuContext([Menu.name, Button.name].join('.')),
      state = _useMenuContext[0],
      dispatch = _useMenuContext[1];

  var buttonRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(state.buttonRef, ref);
  var id = "headlessui-menu-button-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_9__.useId)();
  var d = (0,_hooks_use_disposables_esm_js__WEBPACK_IMPORTED_MODULE_10__.useDisposables)();
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    switch (event.key) {
      // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-13
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowDown:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.OpenMenu
        });
        d.nextFrame(function () {
          return dispatch({
            type: ActionTypes.GoToItem,
            focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First
          });
        });
        break;

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowUp:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.OpenMenu
        });
        d.nextFrame(function () {
          return dispatch({
            type: ActionTypes.GoToItem,
            focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last
          });
        });
        break;
    }
  }, [dispatch, d]);
  var handleKeyUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    switch (event.key) {
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:
        // Required for firefox, event.preventDefault() in handleKeyDown for
        // the Space key doesn't cancel the handleKeyUp, which in turn
        // triggers a *click*.
        event.preventDefault();
        break;
    }
  }, []);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if ((0,_utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_12__.isDisabledReactIssue7711)(event.currentTarget)) return event.preventDefault();
    if (props.disabled) return;

    if (state.menuState === MenuStates.Open) {
      dispatch({
        type: ActionTypes.CloseMenu
      });
      d.nextFrame(function () {
        var _state$buttonRef$curr;

        return (_state$buttonRef$curr = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr.focus({
          preventScroll: true
        });
      });
    } else {
      event.preventDefault();
      event.stopPropagation();
      dispatch({
        type: ActionTypes.OpenMenu
      });
    }
  }, [dispatch, d, state, props.disabled]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.menuState === MenuStates.Open
    };
  }, [state]);
  var passthroughProps = props;
  var propsWeControl = {
    ref: buttonRef,
    id: id,
    type: (0,_hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_13__.useResolveButtonType)(props, state.buttonRef),
    'aria-haspopup': true,
    'aria-controls': (_state$itemsRef$curre = state.itemsRef.current) == null ? void 0 : _state$itemsRef$curre.id,
    'aria-expanded': props.disabled ? undefined : state.menuState === MenuStates.Open,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: 'Menu.Button'
  });
}); // ---

var DEFAULT_ITEMS_TAG = 'div';
var ItemsRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.RenderStrategy | _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.Static;
var Items = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.forwardRefWithAs)(function Items(props, ref) {
  var _state$items$state$ac, _state$buttonRef$curr4;

  var _useMenuContext2 = useMenuContext([Menu.name, Items.name].join('.')),
      state = _useMenuContext2[0],
      dispatch = _useMenuContext2[1];

  var itemsRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(state.itemsRef, ref);
  var id = "headlessui-menu-items-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_9__.useId)();
  var searchDisposables = (0,_hooks_use_disposables_esm_js__WEBPACK_IMPORTED_MODULE_10__.useDisposables)();
  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.useOpenClosed)();

  var visible = function () {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.State.Open;
    }

    return state.menuState === MenuStates.Open;
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var container = state.itemsRef.current;
    if (!container) return;
    if (state.menuState !== MenuStates.Open) return;
    if (container === document.activeElement) return;
    container.focus({
      preventScroll: true
    });
  }, [state.menuState, state.itemsRef]);
  (0,_hooks_use_tree_walker_esm_js__WEBPACK_IMPORTED_MODULE_14__.useTreeWalker)({
    container: state.itemsRef.current,
    enabled: state.menuState === MenuStates.Open,
    accept: function accept(node) {
      if (node.getAttribute('role') === 'menuitem') return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute('role')) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk: function walk(node) {
      node.setAttribute('role', 'none');
    }
  });
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    searchDisposables.dispose();

    switch (event.key) {
      // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-12
      // @ts-expect-error Fallthrough is expected here
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:
        if (state.searchQuery !== '') {
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes.Search,
            value: event.key
          });
        }

      // When in type ahead mode, fallthrough

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.CloseMenu
        });

        if (state.activeItemIndex !== null) {
          var _document$getElementB;

          var _id = state.items[state.activeItemIndex].id;
          (_document$getElementB = document.getElementById(_id)) == null ? void 0 : _document$getElementB.click();
        }

        (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__.disposables)().nextFrame(function () {
          var _state$buttonRef$curr2;

          return (_state$buttonRef$curr2 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr2.focus({
            preventScroll: true
          });
        });
        break;

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowDown:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Next
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowUp:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Previous
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Home:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.PageUp:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.End:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.PageDown:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Escape:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.CloseMenu
        });
        (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__.disposables)().nextFrame(function () {
          var _state$buttonRef$curr3;

          return (_state$buttonRef$curr3 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr3.focus({
            preventScroll: true
          });
        });
        break;

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Tab:
        event.preventDefault();
        event.stopPropagation();
        break;

      default:
        if (event.key.length === 1) {
          dispatch({
            type: ActionTypes.Search,
            value: event.key
          });
          searchDisposables.setTimeout(function () {
            return dispatch({
              type: ActionTypes.ClearSearch
            });
          }, 350);
        }

        break;
    }
  }, [dispatch, searchDisposables, state]);
  var handleKeyUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    switch (event.key) {
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:
        // Required for firefox, event.preventDefault() in handleKeyDown for
        // the Space key doesn't cancel the handleKeyUp, which in turn
        // triggers a *click*.
        event.preventDefault();
        break;
    }
  }, []);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.menuState === MenuStates.Open
    };
  }, [state]);
  var propsWeControl = {
    'aria-activedescendant': state.activeItemIndex === null ? undefined : (_state$items$state$ac = state.items[state.activeItemIndex]) == null ? void 0 : _state$items$state$ac.id,
    'aria-labelledby': (_state$buttonRef$curr4 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr4.id,
    id: id,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    role: 'menu',
    tabIndex: 0,
    ref: itemsRef
  };
  var passthroughProps = props;
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_ITEMS_TAG,
    features: ItemsRenderFeatures,
    visible: visible,
    name: 'Menu.Items'
  });
}); // ---

var DEFAULT_ITEM_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;

function Item(props) {
  var _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      onClick = props.onClick,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["disabled", "onClick"]);

  var _useMenuContext3 = useMenuContext([Menu.name, Item.name].join('.')),
      state = _useMenuContext3[0],
      dispatch = _useMenuContext3[1];

  var id = "headlessui-menu-item-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_9__.useId)();
  var active = state.activeItemIndex !== null ? state.items[state.activeItemIndex].id === id : false;
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(function () {
    if (state.menuState !== MenuStates.Open) return;
    if (!active) return;
    var d = (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__.disposables)();
    d.nextFrame(function () {
      var _document$getElementB2;

      return (_document$getElementB2 = document.getElementById(id)) == null ? void 0 : _document$getElementB2.scrollIntoView == null ? void 0 : _document$getElementB2.scrollIntoView({
        block: 'nearest'
      });
    });
    return d.dispose;
  }, [id, active, state.menuState]);
  var bag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    disabled: disabled
  });
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(function () {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(function () {
    var _document$getElementB3, _document$getElementB4;

    bag.current.textValue = (_document$getElementB3 = document.getElementById(id)) == null ? void 0 : (_document$getElementB4 = _document$getElementB3.textContent) == null ? void 0 : _document$getElementB4.toLowerCase();
  }, [bag, id]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(function () {
    dispatch({
      type: ActionTypes.RegisterItem,
      id: id,
      dataRef: bag
    });
    return function () {
      return dispatch({
        type: ActionTypes.UnregisterItem,
        id: id
      });
    };
  }, [bag, id]);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (disabled) return event.preventDefault();
    dispatch({
      type: ActionTypes.CloseMenu
    });
    (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__.disposables)().nextFrame(function () {
      var _state$buttonRef$curr5;

      return (_state$buttonRef$curr5 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr5.focus({
        preventScroll: true
      });
    });
    if (onClick) return onClick(event);
  }, [dispatch, state.buttonRef, disabled, onClick]);
  var handleFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (disabled) return dispatch({
      type: ActionTypes.GoToItem,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing
    });
    dispatch({
      type: ActionTypes.GoToItem,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,
      id: id
    });
  }, [disabled, id, dispatch]);
  var handleMove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (disabled) return;
    if (active) return;
    dispatch({
      type: ActionTypes.GoToItem,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,
      id: id
    });
  }, [disabled, active, id, dispatch]);
  var handleLeave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (disabled) return;
    if (!active) return;
    dispatch({
      type: ActionTypes.GoToItem,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing
    });
  }, [disabled, active, dispatch]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      active: active,
      disabled: disabled
    };
  }, [active, disabled]);
  var propsWeControl = {
    id: id,
    role: 'menuitem',
    tabIndex: disabled === true ? undefined : -1,
    'aria-disabled': disabled === true ? true : undefined,
    disabled: undefined,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_ITEM_TAG,
    name: 'Menu.Item'
  });
} // ---


Menu.Button = Button;
Menu.Items = Items;
Menu.Item = Item;


//# sourceMappingURL=menu.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transition": () => (/* binding */ Transition)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _hooks_use_is_mounted_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-is-mounted.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js");
/* harmony import */ var _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../internal/open-closed.esm.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js");
/* harmony import */ var _hooks_use_is_initial_render_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-is-initial-render.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js");
/* harmony import */ var _utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/transition.esm.js */ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js");












function useSplitClasses(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return classes.split(' ').filter(function (className) {
      return className.trim().length > 1;
    });
  }, [classes]);
}

var TransitionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
TransitionContext.displayName = 'TransitionContext';
var TreeStates;

(function (TreeStates) {
  TreeStates["Visible"] = "visible";
  TreeStates["Hidden"] = "hidden";
})(TreeStates || (TreeStates = {}));

function useTransitionContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransitionContext);

  if (context === null) {
    throw new Error('A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.');
  }

  return context;
}

function useParentNesting() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NestingContext);

  if (context === null) {
    throw new Error('A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.');
  }

  return context;
}

var NestingContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
NestingContext.displayName = 'NestingContext';

function hasChildren(bag) {
  if ('children' in bag) return hasChildren(bag.children);
  return bag.current.filter(function (_ref) {
    var state = _ref.state;
    return state === TreeStates.Visible;
  }).length > 0;
}

function useNesting(done) {
  var doneRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(done);
  var transitionableChildren = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var mounted = (0,_hooks_use_is_mounted_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsMounted)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    doneRef.current = done;
  }, [done]);
  var unregister = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (childId, strategy) {
    var _match;

    if (strategy === void 0) {
      strategy = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden;
    }

    var idx = transitionableChildren.current.findIndex(function (_ref2) {
      var id = _ref2.id;
      return id === childId;
    });
    if (idx === -1) return;
    (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(strategy, (_match = {}, _match[_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Unmount] = function () {
      transitionableChildren.current.splice(idx, 1);
    }, _match[_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden] = function () {
      transitionableChildren.current[idx].state = TreeStates.Hidden;
    }, _match));

    if (!hasChildren(transitionableChildren) && mounted.current) {
      doneRef.current == null ? void 0 : doneRef.current();
    }
  }, [doneRef, mounted, transitionableChildren]);
  var register = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (childId) {
    var child = transitionableChildren.current.find(function (_ref3) {
      var id = _ref3.id;
      return id === childId;
    });

    if (!child) {
      transitionableChildren.current.push({
        id: childId,
        state: TreeStates.Visible
      });
    } else if (child.state !== TreeStates.Visible) {
      child.state = TreeStates.Visible;
    }

    return function () {
      return unregister(childId, _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Unmount);
    };
  }, [transitionableChildren, unregister]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      children: transitionableChildren,
      register: register,
      unregister: unregister
    };
  }, [register, unregister, transitionableChildren]);
}

function noop() {}

var eventNames = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave'];

function ensureEventHooksExist(events) {
  var result = {};

  for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createForOfIteratorHelperLoose)(eventNames), _step; !(_step = _iterator()).done;) {
    var _events$name;

    var name = _step.value;
    result[name] = (_events$name = events[name]) != null ? _events$name : noop;
  }

  return result;
}

function useEvents(events) {
  var eventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(ensureEventHooksExist(events));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    eventsRef.current = ensureEventHooksExist(events);
  }, [events]);
  return eventsRef;
} // ---


var DEFAULT_TRANSITION_CHILD_TAG = 'div';
var TransitionChildRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy;

function TransitionChild(props) {
  var _match3;

  var beforeEnter = props.beforeEnter,
      afterEnter = props.afterEnter,
      beforeLeave = props.beforeLeave,
      afterLeave = props.afterLeave,
      enter = props.enter,
      enterFrom = props.enterFrom,
      enterTo = props.enterTo,
      entered = props.entered,
      leave = props.leave,
      leaveFrom = props.leaveFrom,
      leaveTo = props.leaveTo,
      rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.objectWithoutPropertiesLoose)(props, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]);

  var container = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(TreeStates.Visible),
      state = _useState[0],
      setState = _useState[1];

  var strategy = rest.unmount ? _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Unmount : _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden;

  var _useTransitionContext = useTransitionContext(),
      show = _useTransitionContext.show,
      appear = _useTransitionContext.appear;

  var _useParentNesting = useParentNesting(),
      register = _useParentNesting.register,
      unregister = _useParentNesting.unregister;

  var initial = (0,_hooks_use_is_initial_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.useIsInitialRender)();
  var id = (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_6__.useId)();
  var isTransitioning = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var nesting = useNesting(function () {
    // When all children have been unmounted we can only hide ourselves if and only if we are not
    // transitioning ourselves. Otherwise we would unmount before the transitions are finished.
    if (!isTransitioning.current) {
      setState(TreeStates.Hidden);
      unregister(id);
      events.current.afterLeave();
    }
  });
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_7__.useIsoMorphicEffect)(function () {
    if (!id) return;
    return register(id);
  }, [register, id]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_7__.useIsoMorphicEffect)(function () {
    var _match2;

    // If we are in another mode than the Hidden mode then ignore
    if (strategy !== _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden) return;
    if (!id) return; // Make sure that we are visible

    if (show && state !== TreeStates.Visible) {
      setState(TreeStates.Visible);
      return;
    }

    (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(state, (_match2 = {}, _match2[TreeStates.Hidden] = function () {
      return unregister(id);
    }, _match2[TreeStates.Visible] = function () {
      return register(id);
    }, _match2));
  }, [state, id, register, unregister, show, strategy]);
  var enterClasses = useSplitClasses(enter);
  var enterFromClasses = useSplitClasses(enterFrom);
  var enterToClasses = useSplitClasses(enterTo);
  var enteredClasses = useSplitClasses(entered);
  var leaveClasses = useSplitClasses(leave);
  var leaveFromClasses = useSplitClasses(leaveFrom);
  var leaveToClasses = useSplitClasses(leaveTo);
  var events = useEvents({
    beforeEnter: beforeEnter,
    afterEnter: afterEnter,
    beforeLeave: beforeLeave,
    afterLeave: afterLeave
  });
  var ready = (0,_hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_8__.useServerHandoffComplete)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (ready && state === TreeStates.Visible && container.current === null) {
      throw new Error('Did you forget to passthrough the `ref` to the actual DOM node?');
    }
  }, [container, state, ready]); // Skipping initial transition

  var skip = initial && !appear;
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_7__.useIsoMorphicEffect)(function () {
    var node = container.current;
    if (!node) return;
    if (skip) return;
    isTransitioning.current = true;
    if (show) events.current.beforeEnter();
    if (!show) events.current.beforeLeave();
    return show ? (0,_utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_9__.transition)(node, enterClasses, enterFromClasses, enterToClasses, enteredClasses, function (reason) {
      isTransitioning.current = false;
      if (reason === _utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_9__.Reason.Finished) events.current.afterEnter();
    }) : (0,_utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_9__.transition)(node, leaveClasses, leaveFromClasses, leaveToClasses, enteredClasses, function (reason) {
      isTransitioning.current = false;
      if (reason !== _utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_9__.Reason.Finished) return; // When we don't have children anymore we can safely unregister from the parent and hide
      // ourselves.

      if (!hasChildren(nesting)) {
        setState(TreeStates.Hidden);
        unregister(id);
        events.current.afterLeave();
      }
    });
  }, [events, id, isTransitioning, unregister, nesting, container, skip, show, enterClasses, enterFromClasses, enterToClasses, leaveClasses, leaveFromClasses, leaveToClasses]);
  var propsWeControl = {
    ref: container
  };
  var passthroughProps = rest;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(NestingContext.Provider, {
    value: nesting
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.OpenClosedProvider, {
    value: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(state, (_match3 = {}, _match3[TreeStates.Visible] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.State.Open, _match3[TreeStates.Hidden] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.State.Closed, _match3))
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__["extends"])({}, passthroughProps, propsWeControl),
    defaultTag: DEFAULT_TRANSITION_CHILD_TAG,
    features: TransitionChildRenderFeatures,
    visible: state === TreeStates.Visible,
    name: 'Transition.Child'
  })));
}

function Transition(props) {
  // @ts-expect-error
  var show = props.show,
      _props$appear = props.appear,
      appear = _props$appear === void 0 ? false : _props$appear,
      unmount = props.unmount,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.objectWithoutPropertiesLoose)(props, ["show", "appear", "unmount"]);

  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)();

  if (show === undefined && usesOpenClosedState !== null) {
    var _match4;

    show = (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(usesOpenClosedState, (_match4 = {}, _match4[_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.State.Open] = true, _match4[_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.State.Closed] = false, _match4));
  }

  if (![true, false].includes(show)) {
    throw new Error('A <Transition /> is used but it is missing a `show={true | false}` prop.');
  }

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(show ? TreeStates.Visible : TreeStates.Hidden),
      state = _useState2[0],
      setState = _useState2[1];

  var nestingBag = useNesting(function () {
    setState(TreeStates.Hidden);
  });
  var initial = (0,_hooks_use_is_initial_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.useIsInitialRender)();
  var transitionBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      show: show,
      appear: appear || !initial
    };
  }, [show, appear, initial]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (show) {
      setState(TreeStates.Visible);
    } else if (!hasChildren(nestingBag)) {
      setState(TreeStates.Hidden);
    }
  }, [show, nestingBag]);
  var sharedProps = {
    unmount: unmount
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(NestingContext.Provider, {
    value: nestingBag
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionContext.Provider, {
    value: transitionBag
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__["extends"])({}, sharedProps, {
      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
      children: react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionChild, Object.assign({}, sharedProps, passthroughProps))
    }),
    defaultTag: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    features: TransitionChildRenderFeatures,
    visible: state === TreeStates.Visible,
    name: 'Transition'
  })));
}

Transition.Child = function Child(props) {
  var hasTransitionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransitionContext) !== null;
  var hasOpenClosedContext = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)() !== null;
  return !hasTransitionContext && hasOpenClosedContext ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(Transition, Object.assign({}, props)) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionChild, Object.assign({}, props));
};

Transition.Root = Transition;


//# sourceMappingURL=transition.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reason": () => (/* binding */ Reason),
/* harmony export */   "transition": () => (/* binding */ transition)
/* harmony export */ });
/* harmony import */ var _utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/disposables.esm.js */ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js");
/* harmony import */ var _utils_once_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/once.esm.js */ "./node_modules/@headlessui/react/dist/utils/once.esm.js");



function addClasses(node) {
  var _node$classList;

  for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classes[_key - 1] = arguments[_key];
  }

  node && classes.length > 0 && (_node$classList = node.classList).add.apply(_node$classList, classes);
}

function removeClasses(node) {
  var _node$classList2;

  for (var _len2 = arguments.length, classes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    classes[_key2 - 1] = arguments[_key2];
  }

  node && classes.length > 0 && (_node$classList2 = node.classList).remove.apply(_node$classList2, classes);
}

var Reason;

(function (Reason) {
  Reason["Finished"] = "finished";
  Reason["Cancelled"] = "cancelled";
})(Reason || (Reason = {}));

function waitForTransition(node, done) {
  var d = (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_0__.disposables)();
  if (!node) return d.dispose; // Safari returns a comma separated list of values, so let's sort them and take the highest value.

  var _getComputedStyle = getComputedStyle(node),
      transitionDuration = _getComputedStyle.transitionDuration,
      transitionDelay = _getComputedStyle.transitionDelay;

  var _map = [transitionDuration, transitionDelay].map(function (value) {
    var _value$split$filter$m = value.split(',') // Remove falsy we can't work with
    .filter(Boolean) // Values are returned as `0.3s` or `75ms`
    .map(function (v) {
      return v.includes('ms') ? parseFloat(v) : parseFloat(v) * 1000;
    }).sort(function (a, z) {
      return z - a;
    }),
        _value$split$filter$m2 = _value$split$filter$m[0],
        resolvedValue = _value$split$filter$m2 === void 0 ? 0 : _value$split$filter$m2;

    return resolvedValue;
  }),
      durationMs = _map[0],
      delaysMs = _map[1]; // Waiting for the transition to end. We could use the `transitionend` event, however when no
  // actual transition/duration is defined then the `transitionend` event is not fired.
  //
  // TODO: Downside is, when you slow down transitions via devtools this timeout is still using the
  // full 100% speed instead of the 25% or 10%.


  if (durationMs !== 0) {
    d.setTimeout(function () {
      done(Reason.Finished);
    }, durationMs + delaysMs);
  } else {
    // No transition is happening, so we should cleanup already. Otherwise we have to wait until we
    // get disposed.
    done(Reason.Finished);
  } // If we get disposed before the timeout runs we should cleanup anyway


  d.add(function () {
    return done(Reason.Cancelled);
  });
  return d.dispose;
}

function transition(node, base, from, to, entered, done) {
  var d = (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_0__.disposables)();

  var _done = done !== undefined ? (0,_utils_once_esm_js__WEBPACK_IMPORTED_MODULE_1__.once)(done) : function () {};

  removeClasses.apply(void 0, [node].concat(entered));
  addClasses.apply(void 0, [node].concat(base, from));
  d.nextFrame(function () {
    removeClasses.apply(void 0, [node].concat(from));
    addClasses.apply(void 0, [node].concat(to));
    d.add(waitForTransition(node, function (reason) {
      removeClasses.apply(void 0, [node].concat(to, base));
      addClasses.apply(void 0, [node].concat(entered));
      return _done(reason);
    }));
  }); // Once we get disposed, we should ensure that we cleanup after ourselves. In case of an unmount,
  // the node itself will be nullified and will be a no-op. In case of a full transition the classes
  // are already removed which is also a no-op. However if you go from enter -> leave mid-transition
  // then we have some leftovers that should be cleaned.

  d.add(function () {
    return removeClasses.apply(void 0, [node].concat(base, from, to, entered));
  }); // When we get disposed early, than we should also call the done method but switch the reason.

  d.add(function () {
    return _done(Reason.Cancelled);
  });
  return d.dispose;
}


//# sourceMappingURL=transition.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-disposables.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-disposables.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDisposables": () => (/* binding */ useDisposables)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/disposables.esm.js */ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js");



function useDisposables() {
  // Using useState instead of useRef so that we can use the initializer function.
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_1__.disposables),
      d = _useState[0];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      return d.dispose();
    };
  }, [d]);
  return d;
}


//# sourceMappingURL=use-disposables.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-id.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useId": () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-server-handoff-complete.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js");




// didn't take care of the Suspense case. To fix this we used the approach the @reach-ui/auto-id
// uses.
//
// Credits: https://github.com/reach/reach-ui/blob/develop/packages/auto-id/src/index.tsx

var id = 0;

function generateId() {
  return ++id;
}

function useId() {
  var ready = (0,_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_1__.useServerHandoffComplete)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ready ? generateId : null),
      id = _useState[0],
      setId = _useState[1];

  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(function () {
    if (id === null) setId(generateId());
  }, [id]);
  return id != null ? '' + id : undefined;
}


//# sourceMappingURL=use-id.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsInitialRender": () => (/* binding */ useIsInitialRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function useIsInitialRender() {
  var initial = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    initial.current = false;
  }, []);
  return initial.current;
}


//# sourceMappingURL=use-is-initial-render.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsMounted": () => (/* binding */ useIsMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function useIsMounted() {
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return mounted;
}


//# sourceMappingURL=use-is-mounted.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsoMorphicEffect": () => (/* binding */ useIsoMorphicEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var useIsoMorphicEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;


//# sourceMappingURL=use-iso-morphic-effect.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useResolveButtonType": () => (/* binding */ useResolveButtonType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");



function resolveType(props) {
  var _props$as;

  if (props.type) return props.type;
  var tag = (_props$as = props.as) != null ? _props$as : 'button';
  if (typeof tag === 'string' && tag.toLowerCase() === 'button') return 'button';
  return undefined;
}

function useResolveButtonType(props, ref) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return resolveType(props);
  }),
      type = _useState[0],
      setType = _useState[1];

  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(function () {
    setType(resolveType(props));
  }, [props.type, props.as]);
  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(function () {
    if (type) return;
    if (!ref.current) return;

    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute('type')) {
      setType('button');
    }
  }, [type, ref]);
  return type;
}


//# sourceMappingURL=use-resolve-button-type.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useServerHandoffComplete": () => (/* binding */ useServerHandoffComplete)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var state = {
  serverHandoffComplete: false
};
function useServerHandoffComplete() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(state.serverHandoffComplete),
      serverHandoffComplete = _useState[0],
      setServerHandoffComplete = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (serverHandoffComplete === true) return;
    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (state.serverHandoffComplete === false) state.serverHandoffComplete = true;
  }, []);
  return serverHandoffComplete;
}


//# sourceMappingURL=use-server-handoff-complete.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSyncRefs": () => (/* binding */ useSyncRefs)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function useSyncRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    cache.current = refs;
  }, [refs]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(cache.current), _step; !(_step = _iterator()).done;) {
      var ref = _step.value;
      if (ref == null) continue;
      if (typeof ref === 'function') ref(value);else ref.current = value;
    }
  }, [cache]);
}


//# sourceMappingURL=use-sync-refs.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tree-walker.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTreeWalker": () => (/* binding */ useTreeWalker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");



function useTreeWalker(_ref) {
  var container = _ref.container,
      accept = _ref.accept,
      walk = _ref.walk,
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled;
  var acceptRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(accept);
  var walkRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(walk);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    acceptRef.current = accept;
    walkRef.current = walk;
  }, [accept, walk]);
  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(function () {
    if (!container) return;
    if (!enabled) return;
    var accept = acceptRef.current;
    var walk = walkRef.current;
    var acceptNode = Object.assign(function (node) {
      return accept(node);
    }, {
      acceptNode: accept
    });
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, acceptNode, false);

    while (walker.nextNode()) {
      walk(walker.currentNode);
    }
  }, [container, enabled, acceptRef, walkRef]);
}


//# sourceMappingURL=use-tree-walker.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWindowEvent": () => (/* binding */ useWindowEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function useWindowEvent(type, listener, options) {
  var listenerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(listener);
  listenerRef.current = listener;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function handler(event) {
      listenerRef.current.call(window, event);
    }

    window.addEventListener(type, handler, options);
    return function () {
      return window.removeEventListener(type, handler, options);
    };
  }, [type, options]);
}


//# sourceMappingURL=use-window-event.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/open-closed.esm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenClosedProvider": () => (/* binding */ OpenClosedProvider),
/* harmony export */   "State": () => (/* binding */ State),
/* harmony export */   "useOpenClosed": () => (/* binding */ useOpenClosed)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
Context.displayName = 'OpenClosedContext';
var State;

(function (State) {
  State[State["Open"] = 0] = "Open";
  State[State["Closed"] = 1] = "Closed";
})(State || (State = {}));

function useOpenClosed() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
}
function OpenClosedProvider(_ref) {
  var value = _ref.value,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
    value: value
  }, children);
}


//# sourceMappingURL=open-closed.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/bugs.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDisabledReactIssue7711": () => (/* binding */ isDisabledReactIssue7711)
/* harmony export */ });
// See: https://github.com/facebook/react/issues/7711
// See: https://github.com/facebook/react/pull/20612
// See: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#concept-fe-disabled (2.)
function isDisabledReactIssue7711(element) {
  var _ref, _parent;

  var parent = element.parentElement;
  var legend = null;

  while (parent && !(parent instanceof HTMLFieldSetElement)) {
    if (parent instanceof HTMLLegendElement) legend = parent;
    parent = parent.parentElement;
  }

  var isParentDisabled = (_ref = ((_parent = parent) == null ? void 0 : _parent.getAttribute('disabled')) === '') != null ? _ref : false;
  if (isParentDisabled && isFirstLegend(legend)) return false;
  return isParentDisabled;
}

function isFirstLegend(element) {
  if (!element) return false;
  var previous = element.previousElementSibling;

  while (previous !== null) {
    if (previous instanceof HTMLLegendElement) return false;
    previous = previous.previousElementSibling;
  }

  return true;
}


//# sourceMappingURL=bugs.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/calculate-active-index.esm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Focus": () => (/* binding */ Focus),
/* harmony export */   "calculateActiveIndex": () => (/* binding */ calculateActiveIndex)
/* harmony export */ });
function assertNever(x) {
  throw new Error('Unexpected object: ' + x);
}

var Focus;

(function (Focus) {
  /** Focus the first non-disabled item. */
  Focus[Focus["First"] = 0] = "First";
  /** Focus the previous non-disabled item. */

  Focus[Focus["Previous"] = 1] = "Previous";
  /** Focus the next non-disabled item. */

  Focus[Focus["Next"] = 2] = "Next";
  /** Focus the last non-disabled item. */

  Focus[Focus["Last"] = 3] = "Last";
  /** Focus a specific item based on the `id` of the item. */

  Focus[Focus["Specific"] = 4] = "Specific";
  /** Focus no items at all. */

  Focus[Focus["Nothing"] = 5] = "Nothing";
})(Focus || (Focus = {}));

function calculateActiveIndex(action, resolvers) {
  var items = resolvers.resolveItems();
  if (items.length <= 0) return null;
  var currentActiveIndex = resolvers.resolveActiveIndex();
  var activeIndex = currentActiveIndex != null ? currentActiveIndex : -1;

  var nextActiveIndex = function () {
    switch (action.focus) {
      case Focus.First:
        return items.findIndex(function (item) {
          return !resolvers.resolveDisabled(item);
        });

      case Focus.Previous:
        {
          var idx = items.slice().reverse().findIndex(function (item, idx, all) {
            if (activeIndex !== -1 && all.length - idx - 1 >= activeIndex) return false;
            return !resolvers.resolveDisabled(item);
          });
          if (idx === -1) return idx;
          return items.length - 1 - idx;
        }

      case Focus.Next:
        return items.findIndex(function (item, idx) {
          if (idx <= activeIndex) return false;
          return !resolvers.resolveDisabled(item);
        });

      case Focus.Last:
        {
          var _idx = items.slice().reverse().findIndex(function (item) {
            return !resolvers.resolveDisabled(item);
          });

          if (_idx === -1) return _idx;
          return items.length - 1 - _idx;
        }

      case Focus.Specific:
        return items.findIndex(function (item) {
          return resolvers.resolveId(item) === action.id;
        });

      case Focus.Nothing:
        return null;

      default:
        assertNever(action);
    }
  }();

  return nextActiveIndex === -1 ? currentActiveIndex : nextActiveIndex;
}


//# sourceMappingURL=calculate-active-index.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/disposables.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disposables": () => (/* binding */ disposables)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");


function disposables() {
  var disposables = [];
  var api = {
    requestAnimationFrame: function (_requestAnimationFrame) {
      function requestAnimationFrame() {
        return _requestAnimationFrame.apply(this, arguments);
      }

      requestAnimationFrame.toString = function () {
        return _requestAnimationFrame.toString();
      };

      return requestAnimationFrame;
    }(function () {
      var raf = requestAnimationFrame.apply(void 0, arguments);
      api.add(function () {
        return cancelAnimationFrame(raf);
      });
    }),
    nextFrame: function nextFrame() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      api.requestAnimationFrame(function () {
        api.requestAnimationFrame.apply(api, args);
      });
    },
    setTimeout: function (_setTimeout) {
      function setTimeout() {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function () {
      var timer = setTimeout.apply(void 0, arguments);
      api.add(function () {
        return clearTimeout(timer);
      });
    }),
    add: function add(cb) {
      disposables.push(cb);
    },
    dispose: function dispose() {
      for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createForOfIteratorHelperLoose)(disposables.splice(0)), _step; !(_step = _iterator()).done;) {
        var dispose = _step.value;
        dispose();
      }
    }
  };
  return api;
}


//# sourceMappingURL=disposables.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/focus-management.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/focus-management.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Focus": () => (/* binding */ Focus),
/* harmony export */   "FocusResult": () => (/* binding */ FocusResult),
/* harmony export */   "FocusableMode": () => (/* binding */ FocusableMode),
/* harmony export */   "focusElement": () => (/* binding */ focusElement),
/* harmony export */   "focusIn": () => (/* binding */ focusIn),
/* harmony export */   "getFocusableElements": () => (/* binding */ getFocusableElements),
/* harmony export */   "isFocusableElement": () => (/* binding */ isFocusableElement)
/* harmony export */ });
/* harmony import */ var _match_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");


//  - https://stackoverflow.com/a/30753870

var focusableSelector = /*#__PURE__*/['[contentEditable=true]', '[tabindex]', 'a[href]', 'area[href]', 'button:not([disabled])', 'iframe', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])'].map( false ? // TODO: Remove this once JSDOM fixes the issue where an element that is
// "hidden" can be the document.activeElement, because this is not possible
// in real browsers.
// TODO: Remove this once JSDOM fixes the issue where an element that is
0 : function (selector) {
  return selector + ":not([tabindex='-1'])";
}).join(',');
var Focus;

(function (Focus) {
  /** Focus the first non-disabled element */
  Focus[Focus["First"] = 1] = "First";
  /** Focus the previous non-disabled element */

  Focus[Focus["Previous"] = 2] = "Previous";
  /** Focus the next non-disabled element */

  Focus[Focus["Next"] = 4] = "Next";
  /** Focus the last non-disabled element */

  Focus[Focus["Last"] = 8] = "Last";
  /** Wrap tab around */

  Focus[Focus["WrapAround"] = 16] = "WrapAround";
  /** Prevent scrolling the focusable elements into view */

  Focus[Focus["NoScroll"] = 32] = "NoScroll";
})(Focus || (Focus = {}));

var FocusResult;

(function (FocusResult) {
  /** Something went wrong while trying to focus. */
  FocusResult[FocusResult["Error"] = 0] = "Error";
  /** When `Focus.WrapAround` is enabled, going from position `N` to `N+1` where `N` is the last index in the array, then we overflow. */

  FocusResult[FocusResult["Overflow"] = 1] = "Overflow";
  /** Focus was successful. */

  FocusResult[FocusResult["Success"] = 2] = "Success";
  /** When `Focus.WrapAround` is enabled, going from position `N` to `N-1` where `N` is the first index in the array, then we underflow. */

  FocusResult[FocusResult["Underflow"] = 3] = "Underflow";
})(FocusResult || (FocusResult = {}));

var Direction;

(function (Direction) {
  Direction[Direction["Previous"] = -1] = "Previous";
  Direction[Direction["Next"] = 1] = "Next";
})(Direction || (Direction = {}));

function getFocusableElements(container) {
  if (container === void 0) {
    container = document.body;
  }

  if (container == null) return [];
  return Array.from(container.querySelectorAll(focusableSelector));
}
var FocusableMode;

(function (FocusableMode) {
  /** The element itself must be focusable. */
  FocusableMode[FocusableMode["Strict"] = 0] = "Strict";
  /** The element should be inside of a focusable element. */

  FocusableMode[FocusableMode["Loose"] = 1] = "Loose";
})(FocusableMode || (FocusableMode = {}));

function isFocusableElement(element, mode) {
  var _match;

  if (mode === void 0) {
    mode = FocusableMode.Strict;
  }

  if (element === document.body) return false;
  return (0,_match_esm_js__WEBPACK_IMPORTED_MODULE_0__.match)(mode, (_match = {}, _match[FocusableMode.Strict] = function () {
    return element.matches(focusableSelector);
  }, _match[FocusableMode.Loose] = function () {
    var next = element;

    while (next !== null) {
      if (next.matches(focusableSelector)) return true;
      next = next.parentElement;
    }

    return false;
  }, _match));
}
function focusElement(element) {
  element == null ? void 0 : element.focus({
    preventScroll: true
  });
}
function focusIn(container, focus) {
  var elements = Array.isArray(container) ? container : getFocusableElements(container);
  var active = document.activeElement;

  var direction = function () {
    if (focus & (Focus.First | Focus.Next)) return Direction.Next;
    if (focus & (Focus.Previous | Focus.Last)) return Direction.Previous;
    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
  }();

  var startIndex = function () {
    if (focus & Focus.First) return 0;
    if (focus & Focus.Previous) return Math.max(0, elements.indexOf(active)) - 1;
    if (focus & Focus.Next) return Math.max(0, elements.indexOf(active)) + 1;
    if (focus & Focus.Last) return elements.length - 1;
    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
  }();

  var focusOptions = focus & Focus.NoScroll ? {
    preventScroll: true
  } : {};
  var offset = 0;
  var total = elements.length;
  var next = undefined;

  do {
    var _next;

    // Guard against infinite loops
    if (offset >= total || offset + total <= 0) return FocusResult.Error;
    var nextIdx = startIndex + offset;

    if (focus & Focus.WrapAround) {
      nextIdx = (nextIdx + total) % total;
    } else {
      if (nextIdx < 0) return FocusResult.Underflow;
      if (nextIdx >= total) return FocusResult.Overflow;
    }

    next = elements[nextIdx]; // Try the focus the next element, might not work if it is "hidden" to the user.

    (_next = next) == null ? void 0 : _next.focus(focusOptions); // Try the next one in line

    offset += direction;
  } while (next !== document.activeElement); // This is a little weird, but let me try and explain: There are a few scenario's
  // in chrome for example where a focused `<a>` tag does not get the default focus
  // styles and sometimes they do. This highly depends on whether you started by
  // clicking or by using your keyboard. When you programmatically add focus `anchor.focus()`
  // then the active element (document.activeElement) is this anchor, which is expected.
  // However in that case the default focus styles are not applied *unless* you
  // also add this tabindex.


  if (!next.hasAttribute('tabindex')) next.setAttribute('tabindex', '0');
  return FocusResult.Success;
}


//# sourceMappingURL=focus-management.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/match.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/match.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "match": () => (/* binding */ match)
/* harmony export */ });
function match(value, lookup) {
  if (value in lookup) {
    var returnValue = lookup[value];

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return typeof returnValue === 'function' ? returnValue.apply(void 0, args) : returnValue;
  }

  var error = new Error("Tried to handle \"" + value + "\" but there is no handler defined. Only defined handlers are: " + Object.keys(lookup).map(function (key) {
    return "\"" + key + "\"";
  }).join(', ') + ".");
  if (Error.captureStackTrace) Error.captureStackTrace(error, match);
  throw error;
}


//# sourceMappingURL=match.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/once.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/once.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "once": () => (/* binding */ once)
/* harmony export */ });
function once(cb) {
  var state = {
    called: false
  };
  return function () {
    if (state.called) return;
    state.called = true;
    return cb.apply(void 0, arguments);
  };
}


//# sourceMappingURL=once.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/render.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/render.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": () => (/* binding */ Features),
/* harmony export */   "RenderStrategy": () => (/* binding */ RenderStrategy),
/* harmony export */   "forwardRefWithAs": () => (/* binding */ forwardRefWithAs),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _match_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");




var Features;

(function (Features) {
  /** No features at all */
  Features[Features["None"] = 0] = "None";
  /**
   * When used, this will allow us to use one of the render strategies.
   *
   * **The render strategies are:**
   *    - **Unmount**   _(Will unmount the component.)_
   *    - **Hidden**    _(Will hide the component using the [hidden] attribute.)_
   */

  Features[Features["RenderStrategy"] = 1] = "RenderStrategy";
  /**
   * When used, this will allow the user of our component to be in control. This can be used when
   * you want to transition based on some state.
   */

  Features[Features["Static"] = 2] = "Static";
})(Features || (Features = {}));

var RenderStrategy;

(function (RenderStrategy) {
  RenderStrategy[RenderStrategy["Unmount"] = 0] = "Unmount";
  RenderStrategy[RenderStrategy["Hidden"] = 1] = "Hidden";
})(RenderStrategy || (RenderStrategy = {}));

function render(_ref) {
  var props = _ref.props,
      slot = _ref.slot,
      defaultTag = _ref.defaultTag,
      features = _ref.features,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible,
      name = _ref.name;
  // Visible always render
  if (visible) return _render(props, slot, defaultTag, name);
  var featureFlags = features != null ? features : Features.None;

  if (featureFlags & Features.Static) {
    var _props$static = props["static"],
        isStatic = _props$static === void 0 ? false : _props$static,
        rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["static"]); // When the `static` prop is passed as `true`, then the user is in control, thus we don't care about anything else


    if (isStatic) return _render(rest, slot, defaultTag, name);
  }

  if (featureFlags & Features.RenderStrategy) {
    var _match;

    var _props$unmount = props.unmount,
        unmount = _props$unmount === void 0 ? true : _props$unmount,
        _rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["unmount"]);

    var strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
    return (0,_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function () {
      return null;
    }, _match[RenderStrategy.Hidden] = function () {
      return _render((0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, _rest, {
        hidden: true,
        style: {
          display: 'none'
        }
      }), slot, defaultTag, name);
    }, _match));
  } // No features enabled, just render


  return _render(props, slot, defaultTag, name);
}

function _render(props, slot, tag, name) {
  var _ref2;

  if (slot === void 0) {
    slot = {};
  }

  var _omit = omit(props, ['unmount', 'static']),
      _omit$as = _omit.as,
      Component = _omit$as === void 0 ? tag : _omit$as,
      children = _omit.children,
      _omit$refName = _omit.refName,
      refName = _omit$refName === void 0 ? 'ref' : _omit$refName,
      passThroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(_omit, ["as", "children", "refName"]); // This allows us to use `<HeadlessUIComponent as={MyComponent} refName="innerRef" />`


  var refRelatedProps = props.ref !== undefined ? (_ref2 = {}, _ref2[refName] = props.ref, _ref2) : {};
  var resolvedChildren = typeof children === 'function' ? children(slot) : children; // Allow for className to be a function with the slot as the contents

  if (passThroughProps.className && typeof passThroughProps.className === 'function') {
    passThroughProps.className = passThroughProps.className(slot);
  }

  if (Component === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
    if (Object.keys(passThroughProps).length > 0) {
      if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
        throw new Error(['Passing props on "Fragment"!', '', "The current component <" + name + " /> is rendering a \"Fragment\".", "However we need to passthrough the following props:", Object.keys(passThroughProps).map(function (line) {
          return "  - " + line;
        }).join('\n'), '', 'You can apply a few solutions:', ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', 'Render a single element as the child so that we can forward the props onto that element.'].map(function (line) {
          return "  - " + line;
        }).join('\n')].join('\n'));
      }

      return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(resolvedChildren, Object.assign({}, // Filter out undefined values so that they don't override the existing values
      mergeEventFunctions(compact(omit(passThroughProps, ['ref'])), resolvedChildren.props, ['onClick']), refRelatedProps));
    }
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, Object.assign({}, omit(passThroughProps, ['ref']), Component !== react__WEBPACK_IMPORTED_MODULE_0__.Fragment && refRelatedProps), resolvedChildren);
}
/**
 * We can use this function for the following useCase:
 *
 * <Menu.Item> <button onClick={console.log} /> </Menu.Item>
 *
 * Our `Menu.Item` will have an internal `onClick`, if you passthrough an `onClick` to the actual
 * `Menu.Item` component we will call it correctly. However, when we have an `onClick` on the actual
 * first child, that one should _also_ be called (but before this implementation, it was just
 * overriding the `onClick`). But it is only when we *render* that we have access to the existing
 * props of this component.
 *
 * It's a bit hacky, and not that clean, but it is something internal and we have tests to rely on
 * so that we can refactor this later (if needed).
 */


function mergeEventFunctions(passThroughProps, existingProps, functionsToMerge) {
  var clone = Object.assign({}, passThroughProps);

  var _loop = function _loop() {
    var func = _step.value;

    if (passThroughProps[func] !== undefined && existingProps[func] !== undefined) {
      var _Object$assign;

      Object.assign(clone, (_Object$assign = {}, _Object$assign[func] = function (event) {
        // Props we control
        if (!event.defaultPrevented) passThroughProps[func](event); // Existing props on the component

        if (!event.defaultPrevented) existingProps[func](event);
      }, _Object$assign));
    }
  };

  for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(functionsToMerge), _step; !(_step = _iterator()).done;) {
    _loop();
  }

  return clone;
}
/**
 * This is a hack, but basically we want to keep the full 'API' of the component, but we do want to
 * wrap it in a forwardRef so that we _can_ passthrough the ref
 */


function forwardRefWithAs(component) {
  var _component$displayNam;

  return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(component), {
    displayName: (_component$displayNam = component.displayName) != null ? _component$displayNam : component.name
  });
}

function compact(object) {
  var clone = Object.assign({}, object);

  for (var key in clone) {
    if (clone[key] === undefined) delete clone[key];
  }

  return clone;
}

function omit(object, keysToOmit) {
  if (keysToOmit === void 0) {
    keysToOmit = [];
  }

  var clone = Object.assign({}, object);

  for (var _iterator2 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(keysToOmit), _step2; !(_step2 = _iterator2()).done;) {
    var key = _step2.value;
    if (key in clone) delete clone[key];
  }

  return clone;
}


//# sourceMappingURL=render.esm.js.map


/***/ }),

/***/ "./resources/js/components/Banners/Banner.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Banners/Banner.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function Banner() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "bg-white py-1 shadow",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      src: "https://res.cloudinary.com/sq48/image/upload/v1615692908/banner_nn2bh3.png",
      alt: ""
    })
  });
}

/***/ }),

/***/ "./resources/js/components/DeskopMenu/MenuItem/MyAccount.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/DeskopMenu/MenuItem/MyAccount.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyAccount)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/menu/menu.esm.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyAccount() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "w-32 text-right z-10",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {
      as: "div",
      className: "relative inline-block text-left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Button, {
          className: "inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
          children: ["Login", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon, {
            className: "w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100",
            "aria-hidden": "true"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
        as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Items, {
          className: "absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "px-1 py-1 ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {
              children: function children(_ref) {
                var active = _ref.active;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
                  className: "".concat(active ? 'bg-violet-500 text-regal-blue' : 'text-gray-800', " group flex rounded-md items-center w-full px-2 py-2 text-sm"),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(EditActiveIcon, {
                    className: "w-5 h-5 mr-2 text-regal-blue",
                    "aria-hidden": "true"
                  }), "Register"]
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {
              children: function children(_ref2) {
                var active = _ref2.active;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
                  className: "".concat(active ? 'bg-violet-500 text-regal-blue' : 'text-gray-800', " group flex rounded-md items-center w-full px-2 py-2 text-sm"),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(EditActiveIcon, {
                    className: "w-5 h-5 mr-2 text-regal-blue",
                    "aria-hidden": "true"
                  }), "Login"]
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {
              children: function children(_ref3) {
                var active = _ref3.active;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
                  className: "".concat(active ? 'bg-violet-500 text-regal-blue' : 'text-gray-900', " group flex rounded-md items-center w-full px-2 py-2 text-sm"),
                  children: [active ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DuplicateActiveIcon, {
                    className: "w-5 h-5 mr-2",
                    "aria-hidden": "true"
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DuplicateInactiveIcon, {
                    className: "w-5 h-5 mr-2",
                    "aria-hidden": "true"
                  }), "Order"]
                });
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "px-1 py-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {
              children: function children(_ref4) {
                var active = _ref4.active;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
                  className: "".concat(active ? 'bg-violet-500 text-regal-blue' : 'text-gray-900', " group flex rounded-md items-center w-full px-2 py-2 text-sm"),
                  children: [active ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ArchiveActiveIcon, {
                    className: "w-5 h-5 mr-2",
                    "aria-hidden": "true"
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ArchiveInactiveIcon, {
                    className: "w-5 h-5 mr-2",
                    "aria-hidden": "true"
                  }), "Wishlist"]
                });
              }
            })
          })]
        })
      })]
    })
  });
}

function EditInactiveIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M4 13V16H7L16 7L13 4L4 13Z",
      fill: "#EDE9FE",
      stroke: "#A78BFA",
      strokeWidth: "2"
    })
  }));
}

function EditActiveIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M4 13V16H7L16 7L13 4L4 13Z",
      fill: "#8B5CF6",
      stroke: "#C4B5FD",
      strokeWidth: "2"
    })
  }));
}

function DuplicateInactiveIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M4 4H12V12H4V4Z",
      fill: "#EDE9FE",
      stroke: "#A78BFA",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M8 8H16V16H8V8Z",
      fill: "#EDE9FE",
      stroke: "#A78BFA",
      strokeWidth: "2"
    })]
  }));
}

function DuplicateActiveIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M4 4H12V12H4V4Z",
      fill: "#8B5CF6",
      stroke: "#C4B5FD",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M8 8H16V16H8V8Z",
      fill: "#8B5CF6",
      stroke: "#C4B5FD",
      strokeWidth: "2"
    })]
  }));
}

function ArchiveInactiveIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
      x: "5",
      y: "8",
      width: "10",
      height: "8",
      fill: "#EDE9FE",
      stroke: "#A78BFA",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
      x: "4",
      y: "4",
      width: "12",
      height: "4",
      fill: "#EDE9FE",
      stroke: "#A78BFA",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M8 12H12",
      stroke: "#A78BFA",
      strokeWidth: "2"
    })]
  }));
}

function ArchiveActiveIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
      x: "5",
      y: "8",
      width: "10",
      height: "8",
      fill: "#8B5CF6",
      stroke: "#C4B5FD",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
      x: "4",
      y: "4",
      width: "12",
      height: "4",
      fill: "#8B5CF6",
      stroke: "#C4B5FD",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M8 12H12",
      stroke: "#A78BFA",
      strokeWidth: "2"
    })]
  }));
}

function MoveInactiveIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M10 4H16V10",
      stroke: "#A78BFA",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M16 4L8 12",
      stroke: "#A78BFA",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M8 6H4V16H14V12",
      stroke: "#A78BFA",
      strokeWidth: "2"
    })]
  }));
}

function MoveActiveIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M10 4H16V10",
      stroke: "#C4B5FD",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M16 4L8 12",
      stroke: "#C4B5FD",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M8 6H4V16H14V12",
      stroke: "#C4B5FD",
      strokeWidth: "2"
    })]
  }));
}

function DeleteInactiveIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
      x: "5",
      y: "6",
      width: "10",
      height: "10",
      fill: "#EDE9FE",
      stroke: "#A78BFA",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M3 6H17",
      stroke: "#A78BFA",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M8 6V4H12V6",
      stroke: "#A78BFA",
      strokeWidth: "2"
    })]
  }));
}

function DeleteActiveIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
      x: "5",
      y: "6",
      width: "10",
      height: "10",
      fill: "#8B5CF6",
      stroke: "#C4B5FD",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M3 6H17",
      stroke: "#C4B5FD",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M8 6V4H12V6",
      stroke: "#C4B5FD",
      strokeWidth: "2"
    })]
  }));
}

/***/ }),

/***/ "./resources/js/components/DesktopMenuBar.js":
/*!***************************************************!*\
  !*** ./resources/js/components/DesktopMenuBar.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DesktopMenuBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper-slide.js");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function DesktopMenuBar() {
  var images = [{
    label: "Personal Care",
    url: "https://res.cloudinary.com/webmeds/image/upload/v1621988929/personal_care_2_pgw60a.jpg"
  }, {
    label: "Mom and Baby",
    url: "https://res.cloudinary.com/webmeds/image/upload/v1621988929/mom-baby_rk6lne.png"
  }, {
    label: "Fitness",
    url: "https://res.cloudinary.com/webmeds/image/upload/v1621988929/fitness_e8i0hz.jpg"
  }, {
    label: "Surgical",
    url: "https://res.cloudinary.com/webmeds/image/upload/v1621988930/surgical_wtq5yz.jpg"
  }, {
    label: "Diabetes",
    url: "https://res.cloudinary.com/webmeds/image/upload/v1621988929/diabetes_cletrq.jpg"
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", {
    className: "bg-white shadow-md mb-2",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("header", {
      className: "h-16 py-1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
        slidesPerView: 5,
        spaceBetween: 4,
        children: images.map(function (image, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "/" + image.label + "?tid=" + image.label,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                className: "rounded object-cover",
                src: image.url,
                alt: image.label,
                width: "80"
              })
            })
          }, index);
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/components/DesktopNavigation.js":
/*!******************************************************!*\
  !*** ./resources/js/components/DesktopNavigation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DesktopNavigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _DeskopMenu_MenuItem_MyAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeskopMenu/MenuItem/MyAccount */ "./resources/js/components/DeskopMenu/MenuItem/MyAccount.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function DesktopNavigation() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", {
    className: "hidden bg-regal-blue text-white desktop-meu py-2 sm:hidden md:block",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "sm:container flex mx-auto items-center justify-center space-x-8",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "text-base",
          children: "Webmeds"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "px-2 w-5/12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex bg-white h-9 items-center rounded-sm space-x-2 px-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
              className: "flex-grow h-full py-4 text-gray-700 text-sm hover:outline-none focus:outline-none placeholder-gray-600",
              type: "search",
              placeholder: "Search Product, Brand and More"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
              className: "text-gray-500 w-6 h-6 inline-block",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              })
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DeskopMenu_MenuItem_MyAccount__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: "/cart",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
          className: "flex items-center space-x-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
            className: "text-white w-6 h-6",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: "Cart"
          })]
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/components/DesktopSlider.js":
/*!**************************************************!*\
  !*** ./resources/js/components/DesktopSlider.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DesktopSlider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper-slide.js");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/esm/components/pagination/pagination.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






swiper_core__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_4__["default"]]);
function DesktopSlider() {
  var sliders = ["/slider/1.png", "/slider/1.png", "/slider/1.png", "/slider/1.png"];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "bg-white py-2 mt-2 shadow",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "w-full h-48",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
        autoplay: true,
        pagination: {
          clickable: true
        },
        children: sliders.map(function (url, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: url,
              alt: ""
            })
          }, index);
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/components/DiscountForYou.js":
/*!***************************************************!*\
  !*** ./resources/js/components/DiscountForYou.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscountForYou)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper-slide.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/esm/components/pagination/pagination.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // install Swiper modules



swiper_core__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_4__["default"]]);
function DiscountForYou(props) {
  var categories = ["https://res.cloudinary.com/sq48/image/upload/v1614492220/covid-essentials_n9ifrp.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492882/fitness_lq8gfr.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492481/diabetes_ml3tkd.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492658/eyewear_abud4i.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492790/ayush_b7vbi9.png"];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.products),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];
  /**
   * Pagination formula: |totalSlides - slidersPerView| + 1
   * @returns {*}
   */


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bg-white py-2 mt-2 shadow",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex justify-between p-4 items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: "text-xl font-medium text-gray-800 leading-none",
          children: "Discount For You"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "/discounts",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "px-6 py-3 bg-regal-blue text-sm text-white rounded-sm uppercase shadow-md",
            children: "View More"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "w-full p-1 h-48",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 5,
        pagination: {
          clickable: true
        },
        children: categories.map(function (url, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: url,
              alt: "",
              width: "184",
              height: "150"
            })
          }, index);
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/FeaturedBrands.js":
/*!***************************************************!*\
  !*** ./resources/js/components/FeaturedBrands.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrendingBrands)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/esm/components/pagination/pagination.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper-slide.js");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




 // install Swiper modules



swiper_core__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_4__["default"]]);
function TrendingBrands() {
  var categories = ["https://res.cloudinary.com/sq48/image/upload/v1614492220/covid-essentials_n9ifrp.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492882/fitness_lq8gfr.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492481/diabetes_ml3tkd.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492658/eyewear_abud4i.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492790/ayush_b7vbi9.png"];
  /**
   * Pagination formula: |totalSlides - slidersPerView| + 1
   * @returns {*}
   */

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bg-white py-2 mt-2 shadow",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex justify-between p-4 items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: "text-xl font-medium text-gray-800 leading-none",
          children: "Featured Brands"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "/discounts",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "px-6 py-3 bg-regal-blue text-sm text-white rounded-sm uppercase shadow-md",
            children: "View More"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "w-full p-1 h-48",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
        autoplay: true,
        slidesPerView: 4,
        spaceBetween: 5,
        pagination: {
          clickable: true
        },
        children: categories.map(function (url, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: url,
              alt: "",
              width: "184",
              height: "150"
            })
          }, index);
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/MetaHeader.js":
/*!***********************************************!*\
  !*** ./resources/js/components/MetaHeader.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetaHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function MetaHeader() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      name: "twitter:card",
      content: "product"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      name: "twitter:site",
      content: "@publisher_handle"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      name: "twitter:title",
      content: "Page Title"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      name: "twitter:description",
      content: "Page description less than 200 characters"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      name: "twitter:creator",
      content: "@webmeds1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      name: "twitter:image",
      content: "http://www.example.com/image.jpg"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      name: "twitter:data1",
      content: "$3"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      name: "twitter:label1",
      content: "Price"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      name: "twitter:data2",
      content: "Black"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      name: "twitter:label2",
      content: "Color"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title", {
      children: "Webmeds"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      name: "theme-color",
      content: "teal"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      content: "Webmeds is multivendor medical platform allowing every medical vendor to sell medicine with peace of mind."
    }, "description")]
  });
}

/***/ }),

/***/ "./resources/js/components/MobileNavigation.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/MobileNavigation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileNavigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNav */ "./resources/js/components/SideNav.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function MobileNavigation(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", {
    className: "bg-regal-blue text-white md:hidden mobile-menu",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container mx-auto pb-2 ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
        className: "flex justify-between relative",
        children: [props.sideNav ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SideNav__WEBPACK_IMPORTED_MODULE_1__["default"], {
          callback: props.callback
        }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex py-4 px-3 space-x-3 ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
            className: "text-white w-6 h-6",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            onClick: props.onClick,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M4 6h16M4 12h16M4 18h16"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex items-center text-white",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "/",
              children: "WebMeds"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex px-3 py-4 space-x-4 ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
            className: "text-white w-6 h-6",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            href: "/cart",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
              className: "text-white w-6 h-6",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "cursor-pointer",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "/login",
              children: "Login"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "px-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "/search",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex bg-white h-10 items-center rounded-sm space-x-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
              className: "text-gray-500 w-6 h-6 ml-2 inline-block",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
              className: "flex-grow h-full py-4 text-gray-600 text-sm hover:outline-none focus:outline-none",
              type: "search",
              placeholder: "Search Product, Brand and More"
            })]
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/components/Seo/HomePageSeo.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Seo/HomePageSeo.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePageSeo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function HomePageSeo() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
    className: "bg-white p-4 my-2 shadow",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
      className: "text-2xl text-bold pb-4",
      children: "Stay Healthy with Webmeds Your Favourite Online Pharmacy and Healthcare Platform"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
      className: "text-xl pb-2",
      children: "We Bring Care to Health."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-sm text-gray-700 py-2",
      children: "Webmeds is India's leading digital healthcare platform. From doctor consultations on chat to online pharmacy and lab tests at home: we have it all covered for you. Having delivered over 25 million orders in 1000+ cities till date, we are on a mission to bring \"care\" to \"health\" to give you a flawless healthcare experience."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
      children: "Webmeds Your Favourite Online Pharmacy! "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-sm text-gray-700 py-2",
      children: "Webmeds is India's leading online chemist with over 2 lakh medicines available at the best prices. We are your one-stop destination for other healthcare products as well, such as over the counter pharmaceuticals, healthcare devices and homeopathy and ayurveda medicines."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-sm text-gray-700 py-2",
      children: "With Webmeds you can buy medicines online and get them delivered at your doorstep anywhere in India! But, is ordering medicines online a difficult process? Not at all! Simply search for the products you want to buy, add to cart and checkout. Now all you need to do is sit back as we get your order delivered to you."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-sm text-gray-700 py-2",
      children: "In case you need assistance, just give us a call and we will help you complete your order."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-sm text-gray-700 py-2",
      children: "Don't want to go through the hassle of adding each medicine separately? You can simply upload your prescription and we will place your order for you. And there is more! At Webmeds you can buy health products and medicines online at best discounts."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-sm text-gray-700 py-2",
      children: "Now, isn't that easy? Why go all the way to the medicine store and wait in line, when you have Webmeds Pharmacy at your service."
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/SideNav.js":
/*!********************************************!*\
  !*** ./resources/js/components/SideNav.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideNav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function SideNav(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "fixed left-0 top-0 w-3/4 h-screen bg-white z-20",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      className: "fixed inset-0 w-screen h-screen z-10 bg-opacity-60 bg-gray-900",
      onClick: props.callback
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "bg-regal-blue z-20 relative",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex justify-between px-2 py-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            className: "text-white w-6 h-6",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "text-sm font-medium",
            children: "Login & Register"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            className: "text-white w-6 h-6",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "px-2 py-2 relative z-20 bg-white h-screen",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "flex items-center space-x-2 my-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/categories",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center space-x-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              className: "w-6 h-6 text-regal-blue",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "text-black text-sm font-medium",
              children: "All Categories"
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: "/my-offer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center space-x-2 my-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            className: "w-6 h-6 text-regal-blue",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "text-black text-sm font-medium",
            children: "Offers"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {
        className: "my-2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: "/myorder",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center space-x-2 my-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            className: "w-6 h-6 text-regal-blue",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              fill: "#fff",
              d: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "text-black text-sm font-medium",
            children: "My Orders"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: "/my-coupon",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center space-x-2 my-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            className: "w-6 h-6 text-regal-blue",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "text-black text-sm font-medium",
            children: "My Coupons"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: "/cart",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center space-x-2 my-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            className: "w-6 h-6 text-regal-blue",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "text-black text-sm font-medium",
            children: "My Cart"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: "/my-wishlist",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center space-x-2 my-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            className: "w-6 h-6 text-regal-blue",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "text-black text-sm font-medium",
            children: "My Wishlist"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "flex items-center space-x-2 my-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/Profile",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center space-x-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              className: "w-6 h-6 text-regal-blue",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "text-black text-sm font-medium",
              children: "My Account"
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: "/notification",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center space-x-2 my-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            className: "w-6 h-6 text-regal-blue",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "text-black text-sm font-medium",
            children: "My Notification"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {
        className: "my-2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: "/help-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center space-x-2 my-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            className: "w-6 h-6 text-regal-blue",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "text-black text-sm font-medium",
            children: "Help Center"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/legals",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center space-x-2 my-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              className: "w-6 h-6 text-regal-blue",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "text-black text-sm font-medium",
              children: "Legal"
            })]
          })
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/TrendingBrands.js":
/*!***************************************************!*\
  !*** ./resources/js/components/TrendingBrands.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrendingBrands)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper-slide.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/esm/components/pagination/pagination.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




 // install Swiper modules



swiper_core__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_4__["default"]]);
function TrendingBrands() {
  var categories = ["https://res.cloudinary.com/sq48/image/upload/v1614492220/covid-essentials_n9ifrp.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492882/fitness_lq8gfr.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492481/diabetes_ml3tkd.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492658/eyewear_abud4i.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492790/ayush_b7vbi9.png"];
  /**
   * Pagination formula: |totalSlides - slidersPerView| + 1
   * @returns {*}
   */

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bg-white py-2 mt-2 shadow",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex justify-between p-4 items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: "text-xl font-medium text-gray-800 leading-none",
          children: "Trending Brands"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "/discounts",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "px-6 py-3 bg-regal-blue text-sm text-white rounded-sm uppercase shadow-md",
            children: "View More"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "w-full p-1 h-48",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 5,
        pagination: {
          clickable: true
        },
        children: categories.map(function (url, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: url,
              alt: "",
              width: "184",
              height: "150"
            })
          }, index);
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/TrendingProducts.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/TrendingProducts.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrendingBrands)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper-slide.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/esm/components/pagination/pagination.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




 // install Swiper modules



swiper_core__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_4__["default"]]);
function TrendingBrands() {
  var categories = ["https://res.cloudinary.com/sq48/image/upload/v1614492220/covid-essentials_n9ifrp.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492882/fitness_lq8gfr.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492481/diabetes_ml3tkd.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492658/eyewear_abud4i.jpg", "https://res.cloudinary.com/sq48/image/upload/v1614492790/ayush_b7vbi9.png"];
  /**
   * Pagination formula: |totalSlides - slidersPerView| + 1
   * @returns {*}
   */

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bg-white py-2 mt-2 shadow",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex justify-between p-4 items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: "text-xl font-medium text-gray-800 leading-none",
          children: "Trending Products"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "/discounts",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "px-6 py-3 bg-regal-blue text-sm text-white rounded-sm uppercase shadow-md",
            children: "View More"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "w-full p-1 h-48",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
        autoplay: true,
        slidesPerView: 2,
        spaceBetween: 5,
        pagination: {
          clickable: true
        },
        children: categories.map(function (url, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: url,
              alt: "",
              width: "184",
              height: "150"
            })
          }, index);
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/etc/CopyRight.js":
/*!**************************************************!*\
  !*** ./resources/js/components/etc/CopyRight.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CopyRight)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function CopyRight() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "bg-white flex justify-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      className: "text-sm py-2 text-gray-400",
      children: ["Webmeds \xA9 ", new Date().getFullYear()]
    })
  });
}

/***/ }),

/***/ "./resources/js/screens/index.js":
/*!***************************************!*\
  !*** ./resources/js/screens/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_MetaHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MetaHeader */ "./resources/js/components/MetaHeader.js");
/* harmony import */ var _components_DesktopNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DesktopNavigation */ "./resources/js/components/DesktopNavigation.js");
/* harmony import */ var _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MobileNavigation */ "./resources/js/components/MobileNavigation.js");
/* harmony import */ var _components_DesktopSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DesktopSlider */ "./resources/js/components/DesktopSlider.js");
/* harmony import */ var _components_DesktopMenuBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DesktopMenuBar */ "./resources/js/components/DesktopMenuBar.js");
/* harmony import */ var _components_DiscountForYou__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DiscountForYou */ "./resources/js/components/DiscountForYou.js");
/* harmony import */ var _components_TrendingBrands__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TrendingBrands */ "./resources/js/components/TrendingBrands.js");
/* harmony import */ var _components_TrendingProducts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TrendingProducts */ "./resources/js/components/TrendingProducts.js");
/* harmony import */ var _components_FeaturedBrands__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FeaturedBrands */ "./resources/js/components/FeaturedBrands.js");
/* harmony import */ var _components_Banners_Banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Banners/Banner */ "./resources/js/components/Banners/Banner.js");
/* harmony import */ var _components_Seo_HomePageSeo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Seo/HomePageSeo */ "./resources/js/components/Seo/HomePageSeo.js");
/* harmony import */ var _components_etc_CopyRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/etc/CopyRight */ "./resources/js/components/etc/CopyRight.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function App(_ref) {
  var featuredProducts = _ref.featuredProducts;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      sideNav = _useState2[0],
      setSideNav = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(featuredProducts),
      _useState4 = _slicedToArray(_useState3, 2),
      discountForYou = _useState4[0],
      setDiscountForYou = _useState4[1];

  var sideNavCallback = function sideNavCallback() {
    setSideNav(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: "bg-indigo-50",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_MetaHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sideNav: sideNav,
      callback: sideNavCallback,
      onClick: function onClick() {
        return setSideNav(!sideNav);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_DesktopNavigation__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_DesktopMenuBar__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_DesktopSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_DiscountForYou__WEBPACK_IMPORTED_MODULE_6__["default"], {
      products: discountForYou
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_TrendingBrands__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_TrendingProducts__WEBPACK_IMPORTED_MODULE_8__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_FeaturedBrands__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Banners_Banner__WEBPACK_IMPORTED_MODULE_10__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Seo_HomePageSeo__WEBPACK_IMPORTED_MODULE_11__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_etc_CopyRight__WEBPACK_IMPORTED_MODULE_12__["default"], {})]
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/swiper/swiper.min.css":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/swiper/swiper.min.css ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Swiper 6.8.4\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2021 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: August 23, 2021\n */\n\n@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA') format('woff');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-container-pointer-events{touch-action:pan-y}.swiper-container-pointer-events.swiper-container-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/dom7/dom7.esm.js":
/*!***************************************!*\
  !*** ./node_modules/dom7/dom7.esm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "animate": () => (/* binding */ animate),
/* harmony export */   "animationEnd": () => (/* binding */ animationEnd),
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "appendTo": () => (/* binding */ appendTo),
/* harmony export */   "attr": () => (/* binding */ attr),
/* harmony export */   "blur": () => (/* binding */ blur),
/* harmony export */   "change": () => (/* binding */ change),
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "click": () => (/* binding */ click),
/* harmony export */   "closest": () => (/* binding */ closest),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "dataset": () => (/* binding */ dataset),
/* harmony export */   "detach": () => (/* binding */ detach),
/* harmony export */   "each": () => (/* binding */ each),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "eq": () => (/* binding */ eq),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "focus": () => (/* binding */ focus),
/* harmony export */   "focusin": () => (/* binding */ focusin),
/* harmony export */   "focusout": () => (/* binding */ focusout),
/* harmony export */   "hasClass": () => (/* binding */ hasClass),
/* harmony export */   "height": () => (/* binding */ height),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "index": () => (/* binding */ index),
/* harmony export */   "insertAfter": () => (/* binding */ insertAfter),
/* harmony export */   "insertBefore": () => (/* binding */ insertBefore),
/* harmony export */   "is": () => (/* binding */ is),
/* harmony export */   "keydown": () => (/* binding */ keydown),
/* harmony export */   "keypress": () => (/* binding */ keypress),
/* harmony export */   "keyup": () => (/* binding */ keyup),
/* harmony export */   "mousedown": () => (/* binding */ mousedown),
/* harmony export */   "mouseenter": () => (/* binding */ mouseenter),
/* harmony export */   "mouseleave": () => (/* binding */ mouseleave),
/* harmony export */   "mousemove": () => (/* binding */ mousemove),
/* harmony export */   "mouseout": () => (/* binding */ mouseout),
/* harmony export */   "mouseover": () => (/* binding */ mouseover),
/* harmony export */   "mouseup": () => (/* binding */ mouseup),
/* harmony export */   "next": () => (/* binding */ next),
/* harmony export */   "nextAll": () => (/* binding */ nextAll),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "offset": () => (/* binding */ offset),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "once": () => (/* binding */ once),
/* harmony export */   "outerHeight": () => (/* binding */ outerHeight),
/* harmony export */   "outerWidth": () => (/* binding */ outerWidth),
/* harmony export */   "parent": () => (/* binding */ parent),
/* harmony export */   "parents": () => (/* binding */ parents),
/* harmony export */   "prepend": () => (/* binding */ prepend),
/* harmony export */   "prependTo": () => (/* binding */ prependTo),
/* harmony export */   "prev": () => (/* binding */ prev),
/* harmony export */   "prevAll": () => (/* binding */ prevAll),
/* harmony export */   "prop": () => (/* binding */ prop),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "removeAttr": () => (/* binding */ removeAttr),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "removeData": () => (/* binding */ removeData),
/* harmony export */   "resize": () => (/* binding */ resize),
/* harmony export */   "scroll": () => (/* binding */ scroll),
/* harmony export */   "scrollLeft": () => (/* binding */ scrollLeft),
/* harmony export */   "scrollTo": () => (/* binding */ scrollTo),
/* harmony export */   "scrollTop": () => (/* binding */ scrollTop),
/* harmony export */   "show": () => (/* binding */ show),
/* harmony export */   "siblings": () => (/* binding */ siblings),
/* harmony export */   "stop": () => (/* binding */ stop),
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "submit": () => (/* binding */ submit),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "touchend": () => (/* binding */ touchend),
/* harmony export */   "touchmove": () => (/* binding */ touchmove),
/* harmony export */   "touchstart": () => (/* binding */ touchstart),
/* harmony export */   "transform": () => (/* binding */ transform),
/* harmony export */   "transition": () => (/* binding */ transition),
/* harmony export */   "transitionEnd": () => (/* binding */ transitionEnd),
/* harmony export */   "trigger": () => (/* binding */ trigger),
/* harmony export */   "val": () => (/* binding */ val),
/* harmony export */   "value": () => (/* binding */ value),
/* harmony export */   "width": () => (/* binding */ width)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/**
 * Dom7 3.0.0
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/* eslint-disable no-proto */
function makeReactive(obj) {
  var proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get: function get() {
      return proto;
    },
    set: function set(value) {
      proto.__proto__ = value;
    }
  });
}

var Dom7 = /*#__PURE__*/function (_Array) {
  _inheritsLoose(Dom7, _Array);

  function Dom7(items) {
    var _this;

    _this = _Array.call.apply(_Array, [this].concat(items)) || this;
    makeReactive(_assertThisInitialized(_this));
    return _this;
  }

  return Dom7;
}( /*#__PURE__*/_wrapNativeSuper(Array));

function arrayFlat(arr) {
  if (arr === void 0) {
    arr = [];
  }

  var res = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      res.push.apply(res, arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group) {
    return group.toUpperCase();
  });
}

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  var a = [];
  var res = context.querySelectorAll(selector);

  for (var i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    var html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      var toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      var tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (var i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

function addClass() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, classNames);
  });
  return this;
}

function removeClass() {
  for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    classes[_key2] = arguments[_key2];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList2;

    (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
  });
  return this;
}

function toggleClass() {
  for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    classes[_key3] = arguments[_key3];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    classNames.forEach(function (className) {
      el.classList.toggle(className);
    });
  });
}

function hasClass() {
  for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    classes[_key4] = arguments[_key4];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  return arrayFilter(this, function (el) {
    return classNames.filter(function (className) {
      return el.classList.contains(className);
    }).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function data(key, value) {
  var el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    var dataKey = el.getAttribute("data-" + key);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      var _attr = el.attributes[i];

      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }

  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    var el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      var values = [];

      for (var i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (var _i = 0; _i < this.length; _i += 1) {
    var _el = this[_i];

    if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < _el.options.length; j += 1) {
        _el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
      }
    } else {
      _el.value = value;
    }
  }

  return this;
}

function value(value) {
  return this.val(value);
}

function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition(duration) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
  }

  return this;
}

function on() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line


      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  var events = eventType.split(' ');
  var j;

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });

        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  var events = eventType.split(' ');

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once() {
  var dom = this;

  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  function onceHandler() {
    for (var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      eventArgs[_key8] = arguments[_key8];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var events = args[0].split(' ');
  var eventData = args[1];

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];

      if (window.CustomEvent) {
        var evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function width() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles = this.styles();

      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles2 = this.styles();

      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window ? window.scrollY : el.scrollTop;
    var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach(function (el, index) {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  var result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  var child = this[0];
  var i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    var returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append() {
  var newChild;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var i;
  var j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  var before = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  var after = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);

    el = _next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    var el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);

    el = _prev;
  }

  return $(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }

      _parent = _parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  var foundElements = [];

  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);

    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].children;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add() {
  var dom = this;
  var i;
  var j;

  for (var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    els[_key10] = arguments[_key10];
  }

  for (i = 0; i < els.length; i += 1) {
    var toAdd = $(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

function scrollTo() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time) {
      if (time === void 0) {
        time = new Date().getTime();
      }

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (el, index) {
        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance;

  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;

  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'undefined') {
      for (var i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on.apply(this, [name].concat(args));
  }

  return eventHandler;
}

var click = shortcut('click');
var blur = shortcut('blur');
var focus = shortcut('focus');
var focusin = shortcut('focusin');
var focusout = shortcut('focusout');
var keyup = shortcut('keyup');
var keydown = shortcut('keydown');
var keypress = shortcut('keypress');
var submit = shortcut('submit');
var change = shortcut('change');
var mousedown = shortcut('mousedown');
var mousemove = shortcut('mousemove');
var mouseup = shortcut('mouseup');
var mouseenter = shortcut('mouseenter');
var mouseleave = shortcut('mouseleave');
var mouseout = shortcut('mouseout');
var mouseover = shortcut('mouseover');
var touchstart = shortcut('touchstart');
var touchend = shortcut('touchend');
var touchmove = shortcut('touchmove');
var resize = shortcut('resize');
var scroll = shortcut('scroll');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);



/***/ }),

/***/ "./node_modules/ssr-window/ssr-window.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "getDocument": () => (/* binding */ getDocument),
/* harmony export */   "getWindow": () => (/* binding */ getWindow),
/* harmony export */   "ssrDocument": () => (/* binding */ ssrDocument),
/* harmony export */   "ssrWindow": () => (/* binding */ ssrWindow)
/* harmony export */ });
/**
 * SSR Window 3.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend(target, src) {
    if (target === void 0) { target = {}; }
    if (src === void 0) { src = {}; }
    Object.keys(src).forEach(function (key) {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject(src[key]) &&
            isObject(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}

var ssrDocument = {
    body: {},
    addEventListener: function () { },
    removeEventListener: function () { },
    activeElement: {
        blur: function () { },
        nodeName: '',
    },
    querySelector: function () {
        return null;
    },
    querySelectorAll: function () {
        return [];
    },
    getElementById: function () {
        return null;
    },
    createEvent: function () {
        return {
            initEvent: function () { },
        };
    },
    createElement: function () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () { },
            getElementsByTagName: function () {
                return [];
            },
        };
    },
    createElementNS: function () {
        return {};
    },
    importNode: function () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
}

var ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState: function () { },
        pushState: function () { },
        go: function () { },
        back: function () { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener: function () { },
    removeEventListener: function () { },
    getComputedStyle: function () {
        return {
            getPropertyValue: function () {
                return '';
            },
        };
    },
    Image: function () { },
    Date: function () { },
    screen: {},
    setTimeout: function () { },
    clearTimeout: function () { },
    matchMedia: function () {
        return {};
    },
    requestAnimationFrame: function (callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function (id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    },
};
function getWindow() {
    var win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
}




/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./swiper.min.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/swiper/swiper.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBreakpoint)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }

  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  var breakpoint = false;
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  var points = Object.keys(breakpoints).map(function (point) {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      var minRatio = parseFloat(point.substr(1));
      var value = currentHeight * minRatio;
      return {
        value: value,
        point: point
      };
    }

    return {
      value: point,
      point: point
    };
  });
  points.sort(function (a, b) {
    return parseInt(a.value, 10) - parseInt(b.value, 10);
  });

  for (var i = 0; i < points.length; i += 1) {
    var _points$i = points[i],
        point = _points$i.point,
        value = _points$i.value;

    if (base === 'window') {
      if (window.matchMedia("(min-width: " + value + "px)").matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/breakpoints/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint */ "./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js");
/* harmony import */ var _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint */ "./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setBreakpoint: _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__["default"],
  getBreakpoint: _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setBreakpoint)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params,
      $el = swiper.$el;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

  if (breakpointOnlyParams) {
    ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
      var paramValue = breakpointOnlyParams[param];
      if (typeof paramValue === 'undefined') return;

      if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
        breakpointOnlyParams[param] = 'auto';
      } else if (param === 'slidesPerView') {
        breakpointOnlyParams[param] = parseFloat(paramValue);
      } else {
        breakpointOnlyParams[param] = parseInt(paramValue, 10);
      }
    });
  }

  var breakpointParams = breakpointOnlyParams || swiper.originalParams;
  var wasMultiRow = params.slidesPerColumn > 1;
  var isMultiRow = breakpointParams.slidesPerColumn > 1;
  var wasEnabled = params.enabled;

  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(params.containerModifierClass + "multirow");

    if (breakpointParams.slidesPerColumnFill && breakpointParams.slidesPerColumnFill === 'column' || !breakpointParams.slidesPerColumnFill && params.slidesPerColumnFill === 'column') {
      $el.addClass(params.containerModifierClass + "multirow-column");
    }

    swiper.emitContainerClasses();
  }

  var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

  if (directionChanged && initialized) {
    swiper.changeDirection();
  }

  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, breakpointParams);
  var isEnabled = swiper.params.enabled;
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });

  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }

  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);

  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }

  swiper.emit('breakpoint', breakpointParams);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/check-overflow/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/check-overflow/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function checkOverflow() {
  var swiper = this;
  var params = swiper.params;
  var wasLocked = swiper.isLocked;
  var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

  if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
    swiper.isLocked = lastSlidePosition <= swiper.size;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked; // events

  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    if (swiper.navigation) swiper.navigation.update();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  checkOverflow: checkOverflow
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/classes/addClasses.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/addClasses.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addClasses)
/* harmony export */ });
function prepareClasses(entries, prefix) {
  var resultClasses = [];
  entries.forEach(function (item) {
    if (typeof item === 'object') {
      Object.keys(item).forEach(function (classNames) {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el,
      device = swiper.device,
      support = swiper.support; // prettier-ignore

  var suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': support.pointerEvents && !support.touch
  }, {
    'free-mode': params.freeMode
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'multirow': params.slidesPerColumn > 1
  }, {
    'multirow-column': params.slidesPerColumn > 1 && params.slidesPerColumnFill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }], params.containerModifierClass);
  classNames.push.apply(classNames, suffixes);
  $el.addClass([].concat(classNames).join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/classes/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses */ "./node_modules/swiper/esm/components/core/classes/addClasses.js");
/* harmony import */ var _removeClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses */ "./node_modules/swiper/esm/components/core/classes/removeClasses.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addClasses: _addClasses__WEBPACK_IMPORTED_MODULE_0__["default"],
  removeClasses: _removeClasses__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/classes/removeClasses.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/removeClasses.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeClasses)
/* harmony export */ });
function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/core-class.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/core-class.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
/* harmony import */ var _utils_get_support__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/get-support */ "./node_modules/swiper/esm/utils/get-support.js");
/* harmony import */ var _utils_get_device__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/get-device */ "./node_modules/swiper/esm/utils/get-device.js");
/* harmony import */ var _utils_get_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/get-browser */ "./node_modules/swiper/esm/utils/get-browser.js");
/* harmony import */ var _modules_resize_resize__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../modules/resize/resize */ "./node_modules/swiper/esm/modules/resize/resize.js");
/* harmony import */ var _modules_observer_observer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../modules/observer/observer */ "./node_modules/swiper/esm/modules/observer/observer.js");
/* harmony import */ var _modular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modular */ "./node_modules/swiper/esm/components/core/modular.js");
/* harmony import */ var _events_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-emitter */ "./node_modules/swiper/esm/components/core/events-emitter.js");
/* harmony import */ var _update_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update/index */ "./node_modules/swiper/esm/components/core/update/index.js");
/* harmony import */ var _translate_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translate/index */ "./node_modules/swiper/esm/components/core/translate/index.js");
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition/index */ "./node_modules/swiper/esm/components/core/transition/index.js");
/* harmony import */ var _slide_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slide/index */ "./node_modules/swiper/esm/components/core/slide/index.js");
/* harmony import */ var _loop_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loop/index */ "./node_modules/swiper/esm/components/core/loop/index.js");
/* harmony import */ var _grab_cursor_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grab-cursor/index */ "./node_modules/swiper/esm/components/core/grab-cursor/index.js");
/* harmony import */ var _manipulation_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manipulation/index */ "./node_modules/swiper/esm/components/core/manipulation/index.js");
/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/index */ "./node_modules/swiper/esm/components/core/events/index.js");
/* harmony import */ var _breakpoints_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./breakpoints/index */ "./node_modules/swiper/esm/components/core/breakpoints/index.js");
/* harmony import */ var _classes_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./classes/index */ "./node_modules/swiper/esm/components/core/classes/index.js");
/* harmony import */ var _images_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/index */ "./node_modules/swiper/esm/components/core/images/index.js");
/* harmony import */ var _check_overflow_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./check-overflow/index */ "./node_modules/swiper/esm/components/core/check-overflow/index.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./defaults */ "./node_modules/swiper/esm/components/core/defaults.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint no-param-reassign: "off" */























var prototypes = {
  modular: _modular__WEBPACK_IMPORTED_MODULE_2__["default"],
  eventsEmitter: _events_emitter__WEBPACK_IMPORTED_MODULE_3__["default"],
  update: _update_index__WEBPACK_IMPORTED_MODULE_4__["default"],
  translate: _translate_index__WEBPACK_IMPORTED_MODULE_5__["default"],
  transition: _transition_index__WEBPACK_IMPORTED_MODULE_6__["default"],
  slide: _slide_index__WEBPACK_IMPORTED_MODULE_7__["default"],
  loop: _loop_index__WEBPACK_IMPORTED_MODULE_8__["default"],
  grabCursor: _grab_cursor_index__WEBPACK_IMPORTED_MODULE_9__["default"],
  manipulation: _manipulation_index__WEBPACK_IMPORTED_MODULE_10__["default"],
  events: _events_index__WEBPACK_IMPORTED_MODULE_11__["default"],
  breakpoints: _breakpoints_index__WEBPACK_IMPORTED_MODULE_12__["default"],
  checkOverflow: _check_overflow_index__WEBPACK_IMPORTED_MODULE_13__["default"],
  classes: _classes_index__WEBPACK_IMPORTED_MODULE_14__["default"],
  images: _images_index__WEBPACK_IMPORTED_MODULE_15__["default"]
};
var extendedDefaults = {};

var Swiper = /*#__PURE__*/function () {
  function Swiper() {
    var el;
    var params;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }

    if (!params) params = {};
    params = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el).length > 1) {
      var swipers = [];
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el).each(function (containerEl) {
        var newParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    } // Swiper Instance


    var swiper = this;
    swiper.__swiper__ = true;
    swiper.support = (0,_utils_get_support__WEBPACK_IMPORTED_MODULE_17__.getSupport)();
    swiper.device = (0,_utils_get_device__WEBPACK_IMPORTED_MODULE_18__.getDevice)({
      userAgent: params.userAgent
    });
    swiper.browser = (0,_utils_get_browser__WEBPACK_IMPORTED_MODULE_19__.getBrowser)();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];

    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }

    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];

      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;

        if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
          params[moduleParamName] = {
            auto: true
          };
        }

        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    }); // Extend defaults with modules params

    var swiperParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, _defaults__WEBPACK_IMPORTED_MODULE_20__["default"]);
    swiper.useParams(swiperParams); // Extend defaults with passed params

    swiper.params = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, swiper.params);
    swiper.passedParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(function (eventName) {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = _utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"]; // Extend Swiper

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)(swiper, {
      enabled: swiper.params.enabled,
      el: el,
      // Classes
      classNames: [],
      // Slides
      slides: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];

        if (swiper.support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        }

        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.now)(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }); // Install Modules

    swiper.useModules();
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return swiper;
  }

  var _proto = Swiper.prototype;

  _proto.enable = function enable() {
    var swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;

    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    swiper.emit('enable');
  };

  _proto.disable = function disable() {
    var swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;

    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }

    swiper.emit('disable');
  };

  _proto.setProgress = function setProgress(progress, speed) {
    var swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    var min = swiper.minTranslate();
    var max = swiper.maxTranslate();
    var current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  };

  _proto.emitContainerClasses = function emitContainerClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var classes = swiper.el.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', classes.join(' '));
  };

  _proto.getSlideClasses = function getSlideClasses(slideEl) {
    var swiper = this;
    return slideEl.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  };

  _proto.emitSlidesClasses = function emitSlidesClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var updates = [];
    swiper.slides.each(function (slideEl) {
      var classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl: slideEl,
        classNames: classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  };

  _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
    var swiper = this;
    var params = swiper.params,
        slides = swiper.slides,
        slidesGrid = swiper.slidesGrid,
        swiperSize = swiper.size,
        activeIndex = swiper.activeIndex;
    var spv = 1;

    if (params.centeredSlides) {
      var slideSize = slides[activeIndex].swiperSlideSize;
      var breakLoop;

      for (var i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
        if (slides[_i] && !breakLoop) {
          slideSize += slides[_i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
        if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }

    return spv;
  };

  _proto.update = function update() {
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var snapGrid = swiper.snapGrid,
        params = swiper.params; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    var translated;

    if (swiper.params.freeMode) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  };

  _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }

    var swiper = this;
    var currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(function (slideEl) {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  };

  _proto.mount = function mount(el) {
    var swiper = this;
    if (swiper.mounted) return true; // Find el

    var $el = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper;

    var getWrapperSelector = function getWrapperSelector() {
      return "." + (swiper.params.wrapperClass || '').trim().split(' ').join('.');
    };

    var getWrapper = function getWrapper() {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        var res = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

        res.children = function (options) {
          return $el.children(options);
        };

        return res;
      }

      return $el.children(getWrapperSelector());
    }; // Find Wrapper


    var $wrapperEl = getWrapper();

    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
      var wrapper = document.createElement('div');
      $wrapperEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children("." + swiper.params.slideClass).each(function (slideEl) {
        $wrapperEl.append(slideEl);
      });
    }

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  };

  _proto.init = function init(el) {
    var swiper = this;
    if (swiper.initialized) return swiper;
    var mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  };

  _proto.destroy = function destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }

    if (cleanStyles === void 0) {
      cleanStyles = true;
    }

    var swiper = this;
    var params = swiper.params,
        $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(function (eventName) {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.deleteProps)(swiper);
    }

    swiper.destroyed = true;
    return null;
  };

  Swiper.extendDefaults = function extendDefaults(newDefaults) {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)(extendedDefaults, newDefaults);
  };

  Swiper.installModule = function installModule(module) {
    if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
    var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.now)();
    Swiper.prototype.modules[name] = module;
  };

  Swiper.use = function use(module) {
    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Swiper.installModule(m);
      });
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  };

  _createClass(Swiper, null, [{
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return _defaults__WEBPACK_IMPORTED_MODULE_20__["default"];
    }
  }]);

  return Swiper;
}();

Object.keys(prototypes).forEach(function (prototypeGroup) {
  Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([_modules_resize_resize__WEBPACK_IMPORTED_MODULE_21__["default"], _modules_observer_observer__WEBPACK_IMPORTED_MODULE_22__["default"]]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swiper);

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/defaults.js":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/defaults.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: false,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events-emitter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events-emitter.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-underscore-dangle */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  on: function on(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once: function once(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;

    function onceHandler() {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny: function onAny(handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },
  offAny: function offAny(handler) {
    var self = this;
    if (!self.eventsAnyListeners) return self;
    var index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },
  off: function off(events, handler) {
    var self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit: function emit() {
    var self = this;
    if (!self.eventsListeners) return self;
    var events;
    var data;
    var context;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(function (eventHandler) {
          eventHandler.apply(context, [event].concat(data));
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _onTouchStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart */ "./node_modules/swiper/esm/components/core/events/onTouchStart.js");
/* harmony import */ var _onTouchMove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove */ "./node_modules/swiper/esm/components/core/events/onTouchMove.js");
/* harmony import */ var _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd */ "./node_modules/swiper/esm/components/core/events/onTouchEnd.js");
/* harmony import */ var _onResize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onResize */ "./node_modules/swiper/esm/components/core/events/onResize.js");
/* harmony import */ var _onClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick */ "./node_modules/swiper/esm/components/core/events/onClick.js");
/* harmony import */ var _onScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onScroll */ "./node_modules/swiper/esm/components/core/events/onScroll.js");







var dummyEventAttached = false;

function dummyEventListener() {}

function attachEvents() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  swiper.onTouchStart = _onTouchStart__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper);
  swiper.onTouchMove = _onTouchMove__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper);
  swiper.onTouchEnd = _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = _onScroll__WEBPACK_IMPORTED_MODULE_4__["default"].bind(swiper);
  }

  swiper.onClick = _onClick__WEBPACK_IMPORTED_MODULE_5__["default"].bind(swiper);
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
        passive: false,
        capture: capture
      } : capture);
      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }

      if (!dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.addEventListener('mousedown', swiper.onTouchStart, false);
      document.addEventListener('mousemove', swiper.onTouchMove, capture);
      document.addEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.addEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.addEventListener('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_6__["default"], true);
  } else {
    swiper.on('observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_6__["default"], true);
  }
}

function detachEvents() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.removeEventListener('mousedown', swiper.onTouchStart, false);
      document.removeEventListener('mousemove', swiper.onTouchMove, capture);
      document.removeEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.removeEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.removeEventListener('scroll', swiper.onScroll);
  } // Resize handler


  swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_6__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  attachEvents: attachEvents,
  detachEvents: detachEvents
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onClick.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onClick.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onClick)
/* harmony export */ });
function onClick(e) {
  var swiper = this;
  if (!swiper.enabled) return;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onResize.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onResize.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onResize)
/* harmony export */ });
function onResize() {
  var swiper = this;
  var params = swiper.params,
      el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onScroll.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onScroll)
/* harmony export */ });
function onScroll() {
  var swiper = this;
  var wrapperEl = swiper.wrapperEl,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    if (rtlTranslate) {
      swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollLeft;
    }
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onTouchEnd.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchEnd.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchEnd)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function onTouchEnd(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      enabled = swiper.enabled;
  if (!enabled) return;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  var touchEndTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.now)();
  var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.now)();
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  var currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.now)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;

        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeModeSticky) {
          // If freeModeSticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(function () {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      swiper.emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    return;
  } // Find current slide


  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];

  for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + _increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + _increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onTouchMove.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchMove.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchMove)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");



function onTouchMove(event) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data.isTouched) {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    var touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)()
    });
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onTouchStart.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchStart.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchStart)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");


 // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }

  function __closestFrom(el) {
    if (!el || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)() || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    var found = el.closest(selector);
    return found || __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}

function onTouchStart(event) {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      enabled = swiper.enabled;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  var $targetEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(event.path[0]);
  }

  var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass;
  var isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if ($targetEl.is(data.focusableElements)) preventDefault = false;

    if (document.activeElement && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/grab-cursor/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor */ "./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js");
/* harmony import */ var _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor */ "./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setGrabCursor: _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__["default"],
  unsetGrabCursor: _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setGrabCursor)
/* harmony export */ });
function setGrabCursor(moving) {
  var swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unsetGrabCursor)
/* harmony export */ });
function unsetGrabCursor() {
  var swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper.el.style.cursor = '';
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/images/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage */ "./node_modules/swiper/esm/components/core/images/loadImage.js");
/* harmony import */ var _preloadImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloadImages */ "./node_modules/swiper/esm/components/core/images/preloadImages.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loadImage: _loadImage__WEBPACK_IMPORTED_MODULE_0__["default"],
  preloadImages: _preloadImages__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/images/loadImage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/loadImage.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadImage)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");


function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var image;

  function onReady() {
    if (callback) callback();
  }

  var isPicture = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/images/preloadImages.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/preloadImages.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ preloadImages)
/* harmony export */ });
function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/loop/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loopCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate */ "./node_modules/swiper/esm/components/core/loop/loopCreate.js");
/* harmony import */ var _loopFix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix */ "./node_modules/swiper/esm/components/core/loop/loopFix.js");
/* harmony import */ var _loopDestroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy */ "./node_modules/swiper/esm/components/core/loop/loopDestroy.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loopCreate: _loopCreate__WEBPACK_IMPORTED_MODULE_0__["default"],
  loopFix: _loopFix__WEBPACK_IMPORTED_MODULE_1__["default"],
  loopDestroy: _loopDestroy__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/loop/loopCreate.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopCreate.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopCreate)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");


function loopCreate() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
  var slides = $wrapperEl.children("." + params.slideClass);

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
        $wrapperEl.append(blankNode);
      }

      slides = $wrapperEl.children("." + params.slideClass);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (el, index) {
    var slide = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(el);

    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }

    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }

    slide.attr('data-swiper-slide-index', index);
  });

  for (var _i = 0; _i < appendSlides.length; _i += 1) {
    $wrapperEl.append((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
    $wrapperEl.prepend((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/loop/loopDestroy.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopDestroy.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopDestroy)
/* harmony export */ });
function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
  slides.removeAttr('data-swiper-slide-index');
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/loop/loopFix.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopFix.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopFix)
/* harmony export */ });
function loopFix() {
  var swiper = this;
  swiper.emit('beforeLoopFix');
  var activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;

    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/addSlide.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/addSlide.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSlide)
/* harmony export */ });
function addSlide(index, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];

  for (var i = baseLength - 1; i >= index; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var _i = 0; _i < slides.length; _i += 1) {
      if (slides[_i]) $wrapperEl.append(slides[_i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
    $wrapperEl.append(slidesBuffer[_i2]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/appendSlide.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/appendSlide.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendSlide)
/* harmony export */ });
function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appendSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendSlide */ "./node_modules/swiper/esm/components/core/manipulation/appendSlide.js");
/* harmony import */ var _prependSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prependSlide */ "./node_modules/swiper/esm/components/core/manipulation/prependSlide.js");
/* harmony import */ var _addSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addSlide */ "./node_modules/swiper/esm/components/core/manipulation/addSlide.js");
/* harmony import */ var _removeSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeSlide */ "./node_modules/swiper/esm/components/core/manipulation/removeSlide.js");
/* harmony import */ var _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeAllSlides */ "./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  appendSlide: _appendSlide__WEBPACK_IMPORTED_MODULE_0__["default"],
  prependSlide: _prependSlide__WEBPACK_IMPORTED_MODULE_1__["default"],
  addSlide: _addSlide__WEBPACK_IMPORTED_MODULE_2__["default"],
  removeSlide: _removeSlide__WEBPACK_IMPORTED_MODULE_3__["default"],
  removeAllSlides: _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/prependSlide.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/prependSlide.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ prependSlide)
/* harmony export */ });
function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }

  var newActiveIndex = activeIndex + 1;

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeAllSlides)
/* harmony export */ });
function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];

  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/removeSlide.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/removeSlide.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeSlide)
/* harmony export */ });
function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/modular.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/modular.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  useParams: function useParams(instanceParams) {
    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName]; // Extend params

      if (module.params) {
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(instanceParams, module.params);
      }
    });
  },
  useModules: function useModules(modulesParams) {
    if (modulesParams === void 0) {
      modulesParams = {};
    }

    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      } // Module create callback


      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slideTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo */ "./node_modules/swiper/esm/components/core/slide/slideTo.js");
/* harmony import */ var _slideToLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop */ "./node_modules/swiper/esm/components/core/slide/slideToLoop.js");
/* harmony import */ var _slideNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext */ "./node_modules/swiper/esm/components/core/slide/slideNext.js");
/* harmony import */ var _slidePrev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev */ "./node_modules/swiper/esm/components/core/slide/slidePrev.js");
/* harmony import */ var _slideReset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset */ "./node_modules/swiper/esm/components/core/slide/slideReset.js");
/* harmony import */ var _slideToClosest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest */ "./node_modules/swiper/esm/components/core/slide/slideToClosest.js");
/* harmony import */ var _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide */ "./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  slideTo: _slideTo__WEBPACK_IMPORTED_MODULE_0__["default"],
  slideToLoop: _slideToLoop__WEBPACK_IMPORTED_MODULE_1__["default"],
  slideNext: _slideNext__WEBPACK_IMPORTED_MODULE_2__["default"],
  slidePrev: _slidePrev__WEBPACK_IMPORTED_MODULE_3__["default"],
  slideReset: _slideReset__WEBPACK_IMPORTED_MODULE_4__["default"],
  slideToClosest: _slideToClosest__WEBPACK_IMPORTED_MODULE_5__["default"],
  slideToClickedSlide: _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideNext.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideNext.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideNext)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      enabled = swiper.enabled;
  if (!enabled) return swiper;
  var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slidePrev.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slidePrev.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slidePrev)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  var translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    snapGrid.forEach(function (snap) {
      if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
    });
  }

  var prevIndex;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideReset.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideReset.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideReset)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideTo.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideTo.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideTo)
/* harmony export */ });
function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    var indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    var isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  var swiper = this;
  var slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate,
      wrapperEl = swiper.wrapperEl,
      enabled = swiper.enabled;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      var normalizedTranslate = -Math.floor(translate * 100);
      var normalizedGird = Math.floor(slidesGrid[i] * 100);
      var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGird) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    var t = -translate;

    if (rtl) {
      t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
    }

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToClickedSlide)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");


function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.nextTick)(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.nextTick)(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideToClosest.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToClosest.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToClosest)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (threshold === void 0) {
    threshold = 0.5;
  }

  var swiper = this;
  var index = swiper.activeIndex;
  var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    var prevSnap = swiper.snapGrid[snapIndex - 1];
    var _currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideToLoop.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToLoop.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToLoop)
/* harmony export */ });
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/transition/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition */ "./node_modules/swiper/esm/components/core/transition/setTransition.js");
/* harmony import */ var _transitionStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart */ "./node_modules/swiper/esm/components/core/transition/transitionStart.js");
/* harmony import */ var _transitionEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd */ "./node_modules/swiper/esm/components/core/transition/transitionEnd.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setTransition: _setTransition__WEBPACK_IMPORTED_MODULE_0__["default"],
  transitionStart: _transitionStart__WEBPACK_IMPORTED_MODULE_1__["default"],
  transitionEnd: _transitionEnd__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/transition/setTransition.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/setTransition.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setTransition)
/* harmony export */ });
function setTransition(duration, byController) {
  var swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/transition/transitionEnd.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/transitionEnd.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionEnd)
/* harmony export */ });
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex,
      params = swiper.params;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }

    swiper.emit('slideChangeTransitionEnd');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/transition/transitionStart.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/transitionStart.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionStart)
/* harmony export */ });
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }

    swiper.emit('slideChangeTransitionStart');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/getTranslate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/getTranslate.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSwiperTranslate)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }

  var swiper = this;
  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  var currentTranslate = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getTranslate)($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTranslate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate */ "./node_modules/swiper/esm/components/core/translate/getTranslate.js");
/* harmony import */ var _setTranslate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate */ "./node_modules/swiper/esm/components/core/translate/setTranslate.js");
/* harmony import */ var _minTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate */ "./node_modules/swiper/esm/components/core/translate/minTranslate.js");
/* harmony import */ var _maxTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate */ "./node_modules/swiper/esm/components/core/translate/maxTranslate.js");
/* harmony import */ var _translateTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo */ "./node_modules/swiper/esm/components/core/translate/translateTo.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getTranslate: _getTranslate__WEBPACK_IMPORTED_MODULE_0__["default"],
  setTranslate: _setTranslate__WEBPACK_IMPORTED_MODULE_1__["default"],
  minTranslate: _minTranslate__WEBPACK_IMPORTED_MODULE_2__["default"],
  maxTranslate: _maxTranslate__WEBPACK_IMPORTED_MODULE_3__["default"],
  translateTo: _translateTo__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/maxTranslate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/maxTranslate.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ maxTranslate)
/* harmony export */ });
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/minTranslate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/minTranslate.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ minTranslate)
/* harmony export */ });
function minTranslate() {
  return -this.snapGrid[0];
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/setTranslate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/setTranslate.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setTranslate)
/* harmony export */ });
function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      wrapperEl = swiper.wrapperEl,
      progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/translateTo.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/translateTo.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ translateTo)
/* harmony export */ });
function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (translateBounds === void 0) {
    translateBounds = true;
  }

  var swiper = this;
  var params = swiper.params,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var minTranslate = swiper.minTranslate();
  var maxTranslate = swiper.maxTranslate();
  var newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    var isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize */ "./node_modules/swiper/esm/components/core/update/updateSize.js");
/* harmony import */ var _updateSlides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides */ "./node_modules/swiper/esm/components/core/update/updateSlides.js");
/* harmony import */ var _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight */ "./node_modules/swiper/esm/components/core/update/updateAutoHeight.js");
/* harmony import */ var _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset */ "./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js");
/* harmony import */ var _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress */ "./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js");
/* harmony import */ var _updateProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress */ "./node_modules/swiper/esm/components/core/update/updateProgress.js");
/* harmony import */ var _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses */ "./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js");
/* harmony import */ var _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex */ "./node_modules/swiper/esm/components/core/update/updateActiveIndex.js");
/* harmony import */ var _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide */ "./node_modules/swiper/esm/components/core/update/updateClickedSlide.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  updateSize: _updateSize__WEBPACK_IMPORTED_MODULE_0__["default"],
  updateSlides: _updateSlides__WEBPACK_IMPORTED_MODULE_1__["default"],
  updateAutoHeight: _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__["default"],
  updateSlidesOffset: _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__["default"],
  updateSlidesProgress: _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__["default"],
  updateProgress: _updateProgress__WEBPACK_IMPORTED_MODULE_5__["default"],
  updateSlidesClasses: _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__["default"],
  updateActiveIndex: _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__["default"],
  updateClickedSlide: _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateActiveIndex.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateActiveIndex.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateActiveIndex)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateAutoHeight.js":
/*!****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateAutoHeight.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateAutoHeight)
/* harmony export */ });
function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  var newHeight = 0;
  var i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }

  var getSlideByIndex = function getSlideByIndex(index) {
    if (isVirtual) {
      return swiper.slides.filter(function (el) {
        return parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index;
      })[0];
    }

    return swiper.slides.eq(index)[0];
  }; // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(function (slide) {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateClickedSlide.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateClickedSlide.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateClickedSlide)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).closest("." + params.slideClass)[0];
  var slideFound = false;
  var slideIndex;

  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateProgress.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateProgress.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateProgress)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function updateProgress(translate) {
  var swiper = this;

  if (typeof translate === 'undefined') {
    var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSize.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSize)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSlides.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlides.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlides)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function updateSlides() {
  var swiper = this;

  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }

  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }

  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children("." + swiper.params.slideClass);
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];
  var offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.slidesGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  });
  var slidesNumberEvenToRows;

  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }

    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  } // Calc slides


  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var slide = slides.eq(i);

    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;

      if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
        var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
        var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
        var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
        slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;

        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;

          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }

      slide.css(getDirectionLabel('margin-top'), row !== 0 ? params.spaceBetween && params.spaceBetween + "px" : '');
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = getComputedStyle(slide[0]);
      var currentTransform = slide[0].style.transform;
      var currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        var width = getDirectionPropertyValue(slideStyles, 'width');
        var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        var boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          var _slide$ = slide[0],
              clientWidth = _slide$.clientWidth,
              offsetWidth = _slide$.offsetWidth;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = slideSize + "px";
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });
  }

  if (params.setWrapperSize) {
    var _$wrapperEl$css;

    $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
  }

  if (params.slidesPerColumn > 1) {
    var _$wrapperEl$css2;

    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));

    if (params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid = newSlidesGrid;
    }
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    newSlidesGrid = [];

    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    var _slides$filter$css;

    var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter(function (_, slideIndex) {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    var maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(function (snap) {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    var _allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    _allSlidesSize -= params.spaceBetween;

    if (_allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesClasses)
/* harmony export */ });
function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
  var activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesOffset)
/* harmony export */ });
function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;

  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js":
/*!********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesProgress)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }

  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var slide = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

    if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
      var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
  }

  swiper.visibleSlides = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.visibleSlides);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/pagination/pagination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/pagination/pagination.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Pagination = {
  update: function update() {
    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el; // Current/Total

    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex;
      var lastIndex;
      var midIndex;

      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }

        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

      if ($el.length > 1) {
        bullets.each(function (bullet) {
          var $bullet = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(bullet);
          var bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(params.bulletActiveClass + "-main");
            }

            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            }

            if (bulletIndex === lastIndex) {
              $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        var bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);

          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(params.bulletActiveClass + "-main");
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
              for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
            } else {
              $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          } else {
            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
          }
        }
      }

      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
      }
    }

    if (params.type === 'fraction') {
      $el.find((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      var progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', $el[0]);
    } else {
      swiper.emit('paginationUpdate', $el[0]);
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    var paginationHTML = '';

    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.freeMode && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }

      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    swiper.params.pagination = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElementIfNotDefined)(swiper.$el, swiper.params.pagination, swiper.params.createElements, {
      el: 'swiper-pagination'
    });
    var params = swiper.params.pagination;
    if (!params.el) return;
    var $el = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass("" + params.modifierClass + params.type + "-dynamic");
      swiper.pagination.dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.bulletClass), function onClick(e) {
        e.preventDefault();
        var index = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });

    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.bulletClass));
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return number;
      },
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-',
      // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable',
      // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      pagination: _extends({
        dynamicBulletIndex: 0
      }, Pagination)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy(swiper) {
      swiper.pagination.destroy();
    },
    'enable disable': function enableDisable(swiper) {
      var $el = swiper.pagination.$el;

      if ($el) {
        $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
      }
    },
    click: function click(swiper, e) {
      var targetEl = e.target;

      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

        if (isHidden === true) {
          swiper.emit('paginationShow');
        } else {
          swiper.emit('paginationHide');
        }

        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/modules/observer/observer.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/esm/modules/observer/observer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Observer = {
  attach: function attach(target, options) {
    if (options === void 0) {
      options = {};
    }

    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    var swiper = this;
    var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }

      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!swiper.support.observer || !swiper.params.observer) return;

    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();

      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    } // Observe container


    swiper.observer.attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      observer: _extends({}, Observer, {
        observers: []
      })
    });
  },
  on: {
    init: function init(swiper) {
      swiper.observer.init();
    },
    destroy: function destroy(swiper) {
      swiper.observer.destroy();
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/modules/resize/resize.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/esm/modules/resize/resize.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");



var supportsResizeObserver = function supportsResizeObserver() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  return typeof window.ResizeObserver !== 'undefined';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'resize',
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper, {
      resize: {
        observer: null,
        createObserver: function createObserver() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.resize.observer = new ResizeObserver(function (entries) {
            var width = swiper.width,
                height = swiper.height;
            var newWidth = width;
            var newHeight = height;
            entries.forEach(function (_ref) {
              var contentBoxSize = _ref.contentBoxSize,
                  contentRect = _ref.contentRect,
                  target = _ref.target;
              if (target && target !== swiper.el) return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });

            if (newWidth !== width || newHeight !== height) {
              swiper.resize.resizeHandler();
            }
          });
          swiper.resize.observer.observe(swiper.el);
        },
        removeObserver: function removeObserver() {
          if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
            swiper.resize.observer.unobserve(swiper.el);
            swiper.resize.observer = null;
          }
        },
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init: function init(swiper) {
      var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

      if (swiper.params.resizeObserver && supportsResizeObserver()) {
        swiper.resize.createObserver();
        return;
      } // Emit resize


      window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

      window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy(swiper) {
      var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
      swiper.resize.removeObserver();
      window.removeEventListener('resize', swiper.resize.resizeHandler);
      window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/react/get-changed-params.js":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/esm/react/get-changed-params.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChangedParams": () => (/* binding */ getChangedParams)
/* harmony export */ });
/* harmony import */ var _params_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./params-list */ "./node_modules/swiper/esm/react/params-list.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/swiper/esm/react/utils.js");



function getChangedParams(swiperParams, oldParams, children, oldChildren) {
  var keys = [];
  if (!oldParams) return keys;

  var addKey = function addKey(key) {
    if (keys.indexOf(key) < 0) keys.push(key);
  };

  var oldChildrenKeys = oldChildren.map(function (child) {
    return child.key;
  });
  var childrenKeys = children.map(function (child) {
    return child.key;
  });
  if (oldChildrenKeys.join('') !== childrenKeys.join('')) addKey('children');
  if (oldChildren.length !== children.length) addKey('children');
  var watchParams = _params_list__WEBPACK_IMPORTED_MODULE_0__.paramsList.filter(function (key) {
    return key[0] === '_';
  }).map(function (key) {
    return key.replace(/_/, '');
  });
  watchParams.forEach(function (key) {
    if (key in swiperParams && key in oldParams) {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isObject)(swiperParams[key]) && (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isObject)(oldParams[key])) {
        var newKeys = Object.keys(swiperParams[key]);
        var oldKeys = Object.keys(oldParams[key]);

        if (newKeys.length !== oldKeys.length) {
          addKey(key);
        } else {
          newKeys.forEach(function (newKey) {
            if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
              addKey(key);
            }
          });
          oldKeys.forEach(function (oldKey) {
            if (swiperParams[key][oldKey] !== oldParams[key][oldKey]) addKey(key);
          });
        }
      } else if (swiperParams[key] !== oldParams[key]) {
        addKey(key);
      }
    }
  });
  return keys;
}



/***/ }),

/***/ "./node_modules/swiper/esm/react/get-children.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/esm/react/get-children.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChildren": () => (/* binding */ getChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function processChildren(c) {
  var slides = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(c).forEach(function (child) {
    if (child.type && child.type.displayName === 'SwiperSlide') {
      slides.push(child);
    } else if (child.props && child.props.children) {
      processChildren(child.props.children).forEach(function (slide) {
        return slides.push(slide);
      });
    }
  });
  return slides;
}

function getChildren(c) {
  var slides = [];
  var slots = {
    'container-start': [],
    'container-end': [],
    'wrapper-start': [],
    'wrapper-end': []
  };
  react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(c).forEach(function (child) {
    if (child.type && child.type.displayName === 'SwiperSlide') {
      slides.push(child);
    } else if (child.props && child.props.slot && slots[child.props.slot]) {
      slots[child.props.slot].push(child);
    } else if (child.props && child.props.children) {
      var foundSlides = processChildren(child.props.children);

      if (foundSlides.length > 0) {
        foundSlides.forEach(function (slide) {
          return slides.push(slide);
        });
      } else {
        slots['container-end'].push(child);
      }
    } else {
      slots['container-end'].push(child);
    }
  });
  return {
    slides: slides,
    slots: slots
  };
}



/***/ }),

/***/ "./node_modules/swiper/esm/react/get-params.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/esm/react/get-params.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getParams": () => (/* binding */ getParams)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/swiper/esm/react/utils.js");
/* harmony import */ var _params_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./params-list */ "./node_modules/swiper/esm/react/params-list.js");
// eslint-disable-next-line




function getParams(obj) {
  if (obj === void 0) {
    obj = {};
  }

  var params = {
    on: {}
  };
  var events = {};
  var passedParams = {};
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(params, _core__WEBPACK_IMPORTED_MODULE_1__["default"].defaults);
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(params, _core__WEBPACK_IMPORTED_MODULE_1__["default"].extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  var rest = {};
  var allowedParams = _params_list__WEBPACK_IMPORTED_MODULE_2__.paramsList.map(function (key) {
    return key.replace(/_/, '');
  });
  Object.keys(obj).forEach(function (key) {
    if (allowedParams.indexOf(key) >= 0) {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(params[key], obj[key]);
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === 'function') {
      events["" + key[2].toLowerCase() + key.substr(3)] = obj[key];
    } else {
      rest[key] = obj[key];
    }
  });
  ['navigation', 'pagination', 'scrollbar'].forEach(function (key) {
    if (params[key] === true) params[key] = {};
    if (params[key] === false) delete params[key];
  });
  return {
    params: params,
    passedParams: passedParams,
    rest: rest,
    events: events
  };
}



/***/ }),

/***/ "./node_modules/swiper/esm/react/init-swiper.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/react/init-swiper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSwiper": () => (/* binding */ initSwiper),
/* harmony export */   "mountSwiper": () => (/* binding */ mountSwiper)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/swiper/esm/react/utils.js");
// eslint-disable-next-line



function initSwiper(swiperParams) {
  return new _core__WEBPACK_IMPORTED_MODULE_0__["default"](swiperParams);
}

function mountSwiper(_ref, swiperParams) {
  var el = _ref.el,
      nextEl = _ref.nextEl,
      prevEl = _ref.prevEl,
      paginationEl = _ref.paginationEl,
      scrollbarEl = _ref.scrollbarEl,
      swiper = _ref.swiper;

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.needsNavigation)(swiperParams) && nextEl && prevEl) {
    swiper.params.navigation.nextEl = nextEl;
    swiper.originalParams.navigation.nextEl = nextEl;
    swiper.params.navigation.prevEl = prevEl;
    swiper.originalParams.navigation.prevEl = prevEl;
  }

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.needsPagination)(swiperParams) && paginationEl) {
    swiper.params.pagination.el = paginationEl;
    swiper.originalParams.pagination.el = paginationEl;
  }

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.needsScrollbar)(swiperParams) && scrollbarEl) {
    swiper.params.scrollbar.el = scrollbarEl;
    swiper.originalParams.scrollbar.el = scrollbarEl;
  }

  swiper.init(el);
}



/***/ }),

/***/ "./node_modules/swiper/esm/react/loop.js":
/*!***********************************************!*\
  !*** ./node_modules/swiper/esm/react/loop.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcLoopedSlides": () => (/* binding */ calcLoopedSlides),
/* harmony export */   "renderLoop": () => (/* binding */ renderLoop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ "./node_modules/swiper/esm/components/core/core-class.js");
 // eslint-disable-next-line



function calcLoopedSlides(slides, swiperParams) {
  var slidesPerViewParams = swiperParams.slidesPerView;

  if (swiperParams.breakpoints) {
    var breakpoint = _core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.getBreakpoint(swiperParams.breakpoints);
    var breakpointOnlyParams = breakpoint in swiperParams.breakpoints ? swiperParams.breakpoints[breakpoint] : undefined;

    if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
      slidesPerViewParams = breakpointOnlyParams.slidesPerView;
    }
  }

  var loopedSlides = Math.ceil(parseFloat(swiperParams.loopedSlides || slidesPerViewParams, 10));
  loopedSlides += swiperParams.loopAdditionalSlides;

  if (loopedSlides > slides.length) {
    loopedSlides = slides.length;
  }

  return loopedSlides;
}

function renderLoop(swiper, slides, swiperParams) {
  var modifiedSlides = slides.map(function (child, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {
      swiper: swiper,
      'data-swiper-slide-index': index
    });
  });

  function duplicateSlide(child, index, position) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {
      key: child.key + "-duplicate-" + index + "-" + position,
      className: (child.props.className || '') + " " + swiperParams.slideDuplicateClass
    });
  }

  if (swiperParams.loopFillGroupWithBlank) {
    var blankSlidesNum = swiperParams.slidesPerGroup - modifiedSlides.length % swiperParams.slidesPerGroup;

    if (blankSlidesNum !== swiperParams.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankSlide = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: swiperParams.slideClass + " " + swiperParams.slideBlankClass
        });
        modifiedSlides.push(blankSlide);
      }
    }
  }

  if (swiperParams.slidesPerView === 'auto' && !swiperParams.loopedSlides) {
    swiperParams.loopedSlides = modifiedSlides.length;
  }

  var loopedSlides = calcLoopedSlides(modifiedSlides, swiperParams);
  var prependSlides = [];
  var appendSlides = [];
  modifiedSlides.forEach(function (child, index) {
    if (index < loopedSlides) {
      appendSlides.push(duplicateSlide(child, index, 'prepend'));
    }

    if (index < modifiedSlides.length && index >= modifiedSlides.length - loopedSlides) {
      prependSlides.push(duplicateSlide(child, index, 'append'));
    }
  });

  if (swiper) {
    swiper.loopedSlides = loopedSlides;
  }

  return [].concat(prependSlides, modifiedSlides, appendSlides);
}



/***/ }),

/***/ "./node_modules/swiper/esm/react/params-list.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/react/params-list.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paramsList": () => (/* binding */ paramsList)
/* harmony export */ });
/* underscore in name -> watch for changes */
var paramsList = ['init', '_direction', 'touchEventsTarget', 'initialSlide', '_speed', 'cssMode', 'updateOnWindowResize', 'resizeObserver', 'nested', 'focusableElements', '_enabled', '_width', '_height', 'preventInteractionOnTransition', 'userAgent', 'url', '_edgeSwipeDetection', '_edgeSwipeThreshold', '_freeMode', '_freeModeMomentum', '_freeModeMomentumRatio', '_freeModeMomentumBounce', '_freeModeMomentumBounceRatio', '_freeModeMomentumVelocityRatio', '_freeModeSticky', '_freeModeMinimumVelocity', '_autoHeight', 'setWrapperSize', 'virtualTranslate', '_effect', 'breakpoints', '_spaceBetween', '_slidesPerView', '_slidesPerColumn', '_slidesPerColumnFill', '_slidesPerGroup', '_slidesPerGroupSkip', '_centeredSlides', '_centeredSlidesBounds', '_slidesOffsetBefore', '_slidesOffsetAfter', 'normalizeSlideIndex', '_centerInsufficientSlides', '_watchOverflow', 'roundLengths', 'touchRatio', 'touchAngle', 'simulateTouch', '_shortSwipes', '_longSwipes', 'longSwipesRatio', 'longSwipesMs', '_followFinger', 'allowTouchMove', '_threshold', 'touchMoveStopPropagation', 'touchStartPreventDefault', 'touchStartForcePreventDefault', 'touchReleaseOnEdges', 'uniqueNavElements', '_resistance', '_resistanceRatio', '_watchSlidesProgress', '_watchSlidesVisibility', '_grabCursor', 'preventClicks', 'preventClicksPropagation', '_slideToClickedSlide', '_preloadImages', 'updateOnImagesReady', '_loop', '_loopAdditionalSlides', '_loopedSlides', '_loopFillGroupWithBlank', 'loopPreventsSlide', '_allowSlidePrev', '_allowSlideNext', '_swipeHandler', '_noSwiping', 'noSwipingClass', 'noSwipingSelector', 'passiveListeners', 'containerModifierClass', 'slideClass', 'slideBlankClass', 'slideActiveClass', 'slideDuplicateActiveClass', 'slideVisibleClass', 'slideDuplicateClass', 'slideNextClass', 'slideDuplicateNextClass', 'slidePrevClass', 'slideDuplicatePrevClass', 'wrapperClass', 'runCallbacksOnInit', 'observer', 'observeParents', 'observeSlideChildren', // modules
'a11y', 'autoplay', '_controller', 'coverflowEffect', 'cubeEffect', 'fadeEffect', 'flipEffect', 'hashNavigation', 'history', 'keyboard', 'lazy', 'mousewheel', '_navigation', '_pagination', 'parallax', '_scrollbar', '_thumbs', 'virtual', 'zoom'];


/***/ }),

/***/ "./node_modules/swiper/esm/react/swiper-slide.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/esm/react/swiper-slide.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwiperSlide": () => (/* binding */ SwiperSlide)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/swiper/esm/react/utils.js");
/* harmony import */ var _use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-isomorphic-layout-effect */ "./node_modules/swiper/esm/react/use-isomorphic-layout-effect.js");
var _excluded = ["tag", "children", "className", "swiper", "zoom", "virtualIndex"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var SwiperSlide = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_temp, externalRef) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === void 0 ? 'div' : _ref$tag,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      swiper = _ref.swiper,
      zoom = _ref.zoom,
      virtualIndex = _ref.virtualIndex,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var slideElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('swiper-slide'),
      slideClasses = _useState[0],
      setSlideClasses = _useState[1];

  function updateClasses(swiper, el, classNames) {
    if (el === slideElRef.current) {
      setSlideClasses(classNames);
    }
  }

  (0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect)(function () {
    if (externalRef) {
      externalRef.current = slideElRef.current;
    }

    if (!slideElRef.current || !swiper) {
      return;
    }

    if (swiper.destroyed) {
      if (slideClasses !== 'swiper-slide') {
        setSlideClasses('swiper-slide');
      }

      return;
    }

    swiper.on('_slideClass', updateClasses); // eslint-disable-next-line

    return function () {
      if (!swiper) return;
      swiper.off('_slideClass', updateClasses);
    };
  });
  (0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect)(function () {
    if (swiper && slideElRef.current) {
      setSlideClasses(swiper.getSlideClasses(slideElRef.current));
    }
  }, [swiper]);
  var slideData;

  if (typeof children === 'function') {
    slideData = {
      isActive: slideClasses.indexOf('swiper-slide-active') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-active') >= 0,
      isVisible: slideClasses.indexOf('swiper-slide-visible') >= 0,
      isDuplicate: slideClasses.indexOf('swiper-slide-duplicate') >= 0,
      isPrev: slideClasses.indexOf('swiper-slide-prev') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-prev') >= 0,
      isNext: slideClasses.indexOf('swiper-slide-next') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-next') >= 0
    };
  }

  var renderChildren = function renderChildren() {
    return typeof children === 'function' ? children(slideData) : children;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, _extends({
    ref: slideElRef,
    className: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.uniqueClasses)("" + slideClasses + (className ? " " + className : '')),
    "data-swiper-slide-index": virtualIndex
  }, rest), zoom ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof zoom === 'number' ? zoom : undefined
  }, renderChildren()) : renderChildren());
});
SwiperSlide.displayName = 'SwiperSlide';


/***/ }),

/***/ "./node_modules/swiper/esm/react/swiper.js":
/*!*************************************************!*\
  !*** ./node_modules/swiper/esm/react/swiper.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Swiper": () => (/* binding */ Swiper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _get_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-params */ "./node_modules/swiper/esm/react/get-params.js");
/* harmony import */ var _init_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init-swiper */ "./node_modules/swiper/esm/react/init-swiper.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/swiper/esm/react/utils.js");
/* harmony import */ var _loop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loop */ "./node_modules/swiper/esm/react/loop.js");
/* harmony import */ var _get_changed_params__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-changed-params */ "./node_modules/swiper/esm/react/get-changed-params.js");
/* harmony import */ var _get_children__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-children */ "./node_modules/swiper/esm/react/get-children.js");
/* harmony import */ var _update_swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-swiper */ "./node_modules/swiper/esm/react/update-swiper.js");
/* harmony import */ var _virtual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./virtual */ "./node_modules/swiper/esm/react/virtual.js");
/* harmony import */ var _use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-isomorphic-layout-effect */ "./node_modules/swiper/esm/react/use-isomorphic-layout-effect.js");
var _excluded = ["className", "tag", "wrapperTag", "children", "onSwiper"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











var Swiper = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_temp, externalElRef) {
  var _ref = _temp === void 0 ? {} : _temp,
      className = _ref.className,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === void 0 ? 'div' : _ref$tag,
      _ref$wrapperTag = _ref.wrapperTag,
      WrapperTag = _ref$wrapperTag === void 0 ? 'div' : _ref$wrapperTag,
      children = _ref.children,
      onSwiper = _ref.onSwiper,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var eventsAssigned = false;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('swiper-container'),
      containerClasses = _useState[0],
      setContainerClasses = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      virtualData = _useState2[0],
      setVirtualData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      breakpointChanged = _useState3[0],
      setBreakpointChanged = _useState3[1];

  var initializedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var swiperElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var oldPassedParamsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var oldSlides = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var nextElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var prevElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var paginationElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollbarElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _getParams = (0,_get_params__WEBPACK_IMPORTED_MODULE_1__.getParams)(rest),
      swiperParams = _getParams.params,
      passedParams = _getParams.passedParams,
      restProps = _getParams.rest,
      events = _getParams.events;

  var _getChildren = (0,_get_children__WEBPACK_IMPORTED_MODULE_2__.getChildren)(children),
      slides = _getChildren.slides,
      slots = _getChildren.slots;

  var onBeforeBreakpoint = function onBeforeBreakpoint() {
    setBreakpointChanged(!breakpointChanged);
  };

  Object.assign(swiperParams.on, {
    _containerClasses: function _containerClasses(swiper, classes) {
      setContainerClasses(classes);
    }
  });

  if (!swiperElRef.current) {
    // init swiper
    Object.assign(swiperParams.on, events);
    eventsAssigned = true;
    swiperRef.current = (0,_init_swiper__WEBPACK_IMPORTED_MODULE_3__.initSwiper)(swiperParams);

    swiperRef.current.loopCreate = function () {};

    swiperRef.current.loopDestroy = function () {};

    if (swiperParams.loop) {
      swiperRef.current.loopedSlides = (0,_loop__WEBPACK_IMPORTED_MODULE_4__.calcLoopedSlides)(slides, swiperParams);
    }

    if (swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
      swiperRef.current.virtual.slides = slides;
      var extendWith = {
        cache: false,
        renderExternal: setVirtualData,
        renderExternalUpdate: false
      };
      (0,_utils__WEBPACK_IMPORTED_MODULE_5__.extend)(swiperRef.current.params.virtual, extendWith);
      (0,_utils__WEBPACK_IMPORTED_MODULE_5__.extend)(swiperRef.current.originalParams.virtual, extendWith);
    }
  } // Listen for breakpoints change


  if (swiperRef.current) {
    swiperRef.current.on('_beforeBreakpoint', onBeforeBreakpoint);
  }

  var attachEvents = function attachEvents() {
    if (eventsAssigned || !events || !swiperRef.current) return;
    Object.keys(events).forEach(function (eventName) {
      swiperRef.current.on(eventName, events[eventName]);
    });
  };

  var detachEvents = function detachEvents() {
    if (!events || !swiperRef.current) return;
    Object.keys(events).forEach(function (eventName) {
      swiperRef.current.off(eventName, events[eventName]);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      if (swiperRef.current) swiperRef.current.off('_beforeBreakpoint', onBeforeBreakpoint);
    };
  }); // set initialized flag

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!initializedRef.current && swiperRef.current) {
      swiperRef.current.emitSlidesClasses();
      initializedRef.current = true;
    }
  }); // mount swiper

  (0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect)(function () {
    if (externalElRef) {
      externalElRef.current = swiperElRef.current;
    }

    if (!swiperElRef.current) return;
    (0,_init_swiper__WEBPACK_IMPORTED_MODULE_3__.mountSwiper)({
      el: swiperElRef.current,
      nextEl: nextElRef.current,
      prevEl: prevElRef.current,
      paginationEl: paginationElRef.current,
      scrollbarEl: scrollbarElRef.current,
      swiper: swiperRef.current
    }, swiperParams);
    if (onSwiper) onSwiper(swiperRef.current); // eslint-disable-next-line

    return function () {
      if (swiperRef.current && !swiperRef.current.destroyed) {
        swiperRef.current.destroy(true, false);
      }
    };
  }, []); // watch for params change

  (0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect)(function () {
    attachEvents();
    var changedParams = (0,_get_changed_params__WEBPACK_IMPORTED_MODULE_7__.getChangedParams)(passedParams, oldPassedParamsRef.current, slides, oldSlides.current);
    oldPassedParamsRef.current = passedParams;
    oldSlides.current = slides;

    if (changedParams.length && swiperRef.current && !swiperRef.current.destroyed) {
      (0,_update_swiper__WEBPACK_IMPORTED_MODULE_8__.updateSwiper)({
        swiper: swiperRef.current,
        slides: slides,
        passedParams: passedParams,
        changedParams: changedParams,
        nextEl: nextElRef.current,
        prevEl: prevElRef.current,
        scrollbarEl: scrollbarElRef.current,
        paginationEl: paginationElRef.current
      });
    }

    return function () {
      detachEvents();
    };
  }); // update on virtual update

  (0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect)(function () {
    (0,_virtual__WEBPACK_IMPORTED_MODULE_9__.updateOnVirtualData)(swiperRef.current);
  }, [virtualData]); // bypass swiper instance to slides

  function renderSlides() {
    if (swiperParams.virtual) {
      return (0,_virtual__WEBPACK_IMPORTED_MODULE_9__.renderVirtual)(swiperRef.current, slides, virtualData);
    }

    if (!swiperParams.loop || swiperRef.current && swiperRef.current.destroyed) {
      return slides.map(function (child) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {
          swiper: swiperRef.current
        });
      });
    }

    return (0,_loop__WEBPACK_IMPORTED_MODULE_4__.renderLoop)(swiperRef.current, slides, swiperParams);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, _extends({
    ref: swiperElRef,
    className: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.uniqueClasses)("" + containerClasses + (className ? " " + className : ''))
  }, restProps), slots['container-start'], (0,_utils__WEBPACK_IMPORTED_MODULE_5__.needsNavigation)(swiperParams) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: prevElRef,
    className: "swiper-button-prev"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: nextElRef,
    className: "swiper-button-next"
  })), (0,_utils__WEBPACK_IMPORTED_MODULE_5__.needsScrollbar)(swiperParams) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: scrollbarElRef,
    className: "swiper-scrollbar"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_5__.needsPagination)(swiperParams) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: paginationElRef,
    className: "swiper-pagination"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrapperTag, {
    className: "swiper-wrapper"
  }, slots['wrapper-start'], renderSlides(), slots['wrapper-end']), slots['container-end']);
});
Swiper.displayName = 'Swiper';


/***/ }),

/***/ "./node_modules/swiper/esm/react/update-swiper.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/esm/react/update-swiper.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateSwiper": () => (/* binding */ updateSwiper)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/swiper/esm/react/utils.js");


function updateSwiper(_ref) {
  var swiper = _ref.swiper,
      slides = _ref.slides,
      passedParams = _ref.passedParams,
      changedParams = _ref.changedParams,
      nextEl = _ref.nextEl,
      prevEl = _ref.prevEl,
      scrollbarEl = _ref.scrollbarEl,
      paginationEl = _ref.paginationEl;
  var updateParams = changedParams.filter(function (key) {
    return key !== 'children' && key !== 'direction';
  });
  var currentParams = swiper.params,
      pagination = swiper.pagination,
      navigation = swiper.navigation,
      scrollbar = swiper.scrollbar,
      virtual = swiper.virtual,
      thumbs = swiper.thumbs;
  var needThumbsInit;
  var needControllerInit;
  var needPaginationInit;
  var needScrollbarInit;
  var needNavigationInit;

  if (changedParams.includes('thumbs') && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper) {
    needThumbsInit = true;
  }

  if (changedParams.includes('controller') && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
    needControllerInit = true;
  }

  if (changedParams.includes('pagination') && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
    needPaginationInit = true;
  }

  if (changedParams.includes('scrollbar') && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
    needScrollbarInit = true;
  }

  if (changedParams.includes('navigation') && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
    needNavigationInit = true;
  }

  var destroyModule = function destroyModule(mod) {
    if (!swiper[mod]) return;
    swiper[mod].destroy();

    if (mod === 'navigation') {
      currentParams[mod].prevEl = undefined;
      currentParams[mod].nextEl = undefined;
      swiper[mod].prevEl = undefined;
      swiper[mod].nextEl = undefined;
    } else {
      currentParams[mod].el = undefined;
      swiper[mod].el = undefined;
    }
  };

  updateParams.forEach(function (key) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(currentParams[key]) && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(passedParams[key])) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(currentParams[key], passedParams[key]);
    } else {
      var newValue = passedParams[key];

      if ((newValue === true || newValue === false) && (key === 'navigation' || key === 'pagination' || key === 'scrollbar')) {
        if (newValue === false) {
          destroyModule(key);
        }
      } else {
        currentParams[key] = passedParams[key];
      }
    }
  });

  if (changedParams.includes('children') && virtual && currentParams.virtual.enabled) {
    virtual.slides = slides;
    virtual.update(true);
  } else if (changedParams.includes('children') && swiper.lazy && swiper.params.lazy.enabled) {
    swiper.lazy.load();
  }

  if (needThumbsInit) {
    var initialized = thumbs.init();
    if (initialized) thumbs.update(true);
  }

  if (needControllerInit) {
    swiper.controller.control = currentParams.controller.control;
  }

  if (needPaginationInit) {
    if (paginationEl) currentParams.pagination.el = paginationEl;
    pagination.init();
    pagination.render();
    pagination.update();
  }

  if (needScrollbarInit) {
    if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
    scrollbar.init();
    scrollbar.updateSize();
    scrollbar.setTranslate();
  }

  if (needNavigationInit) {
    if (nextEl) currentParams.navigation.nextEl = nextEl;
    if (prevEl) currentParams.navigation.prevEl = prevEl;
    navigation.init();
    navigation.update();
  }

  if (changedParams.includes('allowSlideNext')) {
    swiper.allowSlideNext = passedParams.allowSlideNext;
  }

  if (changedParams.includes('allowSlidePrev')) {
    swiper.allowSlidePrev = passedParams.allowSlidePrev;
  }

  if (changedParams.includes('direction')) {
    swiper.changeDirection(passedParams.direction, false);
  }

  swiper.update();
}



/***/ }),

/***/ "./node_modules/swiper/esm/react/use-isomorphic-layout-effect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/react/use-isomorphic-layout-effect.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsomorphicLayoutEffect": () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function useIsomorphicLayoutEffect(callback, deps) {
  // eslint-disable-next-line
  if (typeof window === 'undefined') return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(callback, deps);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(callback, deps);
}



/***/ }),

/***/ "./node_modules/swiper/esm/react/utils.js":
/*!************************************************!*\
  !*** ./node_modules/swiper/esm/react/utils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "needsNavigation": () => (/* binding */ needsNavigation),
/* harmony export */   "needsPagination": () => (/* binding */ needsPagination),
/* harmony export */   "needsScrollbar": () => (/* binding */ needsScrollbar),
/* harmony export */   "uniqueClasses": () => (/* binding */ uniqueClasses)
/* harmony export */ });
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function extend(target, src) {
  var noExtend = ['__proto__', 'constructor', 'prototype'];
  Object.keys(src).filter(function (key) {
    return noExtend.indexOf(key) < 0;
  }).forEach(function (key) {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__) target[key] = src[key];else extend(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}

function needsNavigation(params) {
  if (params === void 0) {
    params = {};
  }

  return params.navigation && typeof params.navigation.nextEl === 'undefined' && typeof params.navigation.prevEl === 'undefined';
}

function needsPagination(params) {
  if (params === void 0) {
    params = {};
  }

  return params.pagination && typeof params.pagination.el === 'undefined';
}

function needsScrollbar(params) {
  if (params === void 0) {
    params = {};
  }

  return params.scrollbar && typeof params.scrollbar.el === 'undefined';
}

function uniqueClasses(classNames) {
  if (classNames === void 0) {
    classNames = '';
  }

  var classes = classNames.split(' ').map(function (c) {
    return c.trim();
  }).filter(function (c) {
    return !!c;
  });
  var unique = [];
  classes.forEach(function (c) {
    if (unique.indexOf(c) < 0) unique.push(c);
  });
  return unique.join(' ');
}



/***/ }),

/***/ "./node_modules/swiper/esm/react/virtual.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/esm/react/virtual.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderVirtual": () => (/* binding */ renderVirtual),
/* harmony export */   "updateOnVirtualData": () => (/* binding */ updateOnVirtualData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function updateOnVirtualData(swiper) {
  if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled) return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();

  if (swiper.lazy && swiper.params.lazy.enabled) {
    swiper.lazy.load();
  }

  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate();
  }
}

function renderVirtual(swiper, slides, virtualData) {
  var _ref;

  if (!virtualData) return null;
  var style = swiper.isHorizontal() ? (_ref = {}, _ref[swiper.rtlTranslate ? 'right' : 'left'] = virtualData.offset + "px", _ref) : {
    top: virtualData.offset + "px"
  };
  return slides.filter(function (child, index) {
    return index >= virtualData.from && index <= virtualData.to;
  }).map(function (child) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {
      swiper: swiper,
      style: style
    });
  });
}



/***/ }),

/***/ "./node_modules/swiper/esm/utils/dom.js":
/*!**********************************************!*\
  !*** ./node_modules/swiper/esm/utils/dom.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ "./node_modules/dom7/dom7.esm.js");

var Methods = {
  addClass: dom7__WEBPACK_IMPORTED_MODULE_0__.addClass,
  removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__.removeClass,
  hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__.hasClass,
  toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__.toggleClass,
  attr: dom7__WEBPACK_IMPORTED_MODULE_0__.attr,
  removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__.removeAttr,
  transform: dom7__WEBPACK_IMPORTED_MODULE_0__.transform,
  transition: dom7__WEBPACK_IMPORTED_MODULE_0__.transition,
  on: dom7__WEBPACK_IMPORTED_MODULE_0__.on,
  off: dom7__WEBPACK_IMPORTED_MODULE_0__.off,
  trigger: dom7__WEBPACK_IMPORTED_MODULE_0__.trigger,
  transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__.transitionEnd,
  outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__.outerWidth,
  outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__.outerHeight,
  styles: dom7__WEBPACK_IMPORTED_MODULE_0__.styles,
  offset: dom7__WEBPACK_IMPORTED_MODULE_0__.offset,
  css: dom7__WEBPACK_IMPORTED_MODULE_0__.css,
  each: dom7__WEBPACK_IMPORTED_MODULE_0__.each,
  html: dom7__WEBPACK_IMPORTED_MODULE_0__.html,
  text: dom7__WEBPACK_IMPORTED_MODULE_0__.text,
  is: dom7__WEBPACK_IMPORTED_MODULE_0__.is,
  index: dom7__WEBPACK_IMPORTED_MODULE_0__.index,
  eq: dom7__WEBPACK_IMPORTED_MODULE_0__.eq,
  append: dom7__WEBPACK_IMPORTED_MODULE_0__.append,
  prepend: dom7__WEBPACK_IMPORTED_MODULE_0__.prepend,
  next: dom7__WEBPACK_IMPORTED_MODULE_0__.next,
  nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__.nextAll,
  prev: dom7__WEBPACK_IMPORTED_MODULE_0__.prev,
  prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__.prevAll,
  parent: dom7__WEBPACK_IMPORTED_MODULE_0__.parent,
  parents: dom7__WEBPACK_IMPORTED_MODULE_0__.parents,
  closest: dom7__WEBPACK_IMPORTED_MODULE_0__.closest,
  find: dom7__WEBPACK_IMPORTED_MODULE_0__.find,
  children: dom7__WEBPACK_IMPORTED_MODULE_0__.children,
  filter: dom7__WEBPACK_IMPORTED_MODULE_0__.filter,
  remove: dom7__WEBPACK_IMPORTED_MODULE_0__.remove
};
Object.keys(Methods).forEach(function (methodName) {
  Object.defineProperty(dom7__WEBPACK_IMPORTED_MODULE_0__.$.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom7__WEBPACK_IMPORTED_MODULE_0__.$);

/***/ }),

/***/ "./node_modules/swiper/esm/utils/get-browser.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-browser.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBrowser": () => (/* binding */ getBrowser)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

var browser;

function calcBrowser() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isEdge: !!window.navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}



/***/ }),

/***/ "./node_modules/swiper/esm/utils/get-device.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-device.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDevice": () => (/* binding */ getDevice)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _get_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support */ "./node_modules/swiper/esm/utils/get-support.js");


var device;

function calcDevice(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      userAgent = _ref.userAgent;

  var support = (0,_get_support__WEBPACK_IMPORTED_MODULE_1__.getSupport)();
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var platform = window.navigator.platform;
  var ua = userAgent || window.navigator.userAgent;
  var device = {
    ios: false,
    android: false
  };
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  var windows = platform === 'Win32';
  var macos = platform === 'MacIntel'; // iPadOs 13 fix

  var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }

  if (!device) {
    device = calcDevice(overrides);
  }

  return device;
}



/***/ }),

/***/ "./node_modules/swiper/esm/utils/get-support.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-support.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSupport": () => (/* binding */ getSupport)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

var support;

function calcSupport() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  return {
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
    observer: function checkObserver() {
      return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}



/***/ }),

/***/ "./node_modules/swiper/esm/utils/utils.js":
/*!************************************************!*\
  !*** ./node_modules/swiper/esm/utils/utils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProps": () => (/* binding */ deleteProps),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "getTranslate": () => (/* binding */ getTranslate),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "bindModuleMethods": () => (/* binding */ bindModuleMethods),
/* harmony export */   "getComputedStyle": () => (/* binding */ getComputedStyle),
/* harmony export */   "classesToSelector": () => (/* binding */ classesToSelector),
/* harmony export */   "createElementIfNotDefined": () => (/* binding */ createElementIfNotDefined)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");


function deleteProps(obj) {
  var object = obj;
  Object.keys(object).forEach(function (key) {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getComputedStyle(el) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }

  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var matrix;
  var curTransform;
  var transformMatrix;
  var curStyle = getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(function (a) {
        return a.replace(',', '.');
      }).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }

  return node && (node.nodeType === 1 || node.nodeType === 11);
}

function extend() {
  var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  var noExtend = ['__proto__', 'constructor', 'prototype'];

  for (var i = 1; i < arguments.length; i += 1) {
    var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
        return noExtend.indexOf(key) < 0;
      });

      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function bindModuleMethods(instance, obj) {
  Object.keys(obj).forEach(function (key) {
    if (isObject(obj[key])) {
      Object.keys(obj[key]).forEach(function (subKey) {
        if (typeof obj[key][subKey] === 'function') {
          obj[key][subKey] = obj[key][subKey].bind(instance);
        }
      });
    }

    instance[key] = obj[key];
  });
}

function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return "." + classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.');
}

function createElementIfNotDefined($container, params, createElements, checkProps) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  if (createElements) {
    Object.keys(checkProps).forEach(function (key) {
      if (!params[key] && params.auto === true) {
        var element = document.createElement('div');
        element.className = checkProps[key];
        $container.append(element);
        params[key] = element;
      }
    });
  }

  return params;
}



/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/AcademicCapIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/AcademicCapIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function AcademicCapIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AcademicCapIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/AdjustmentsIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/AdjustmentsIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function AdjustmentsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdjustmentsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/AnnotationIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/AnnotationIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function AnnotationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnotationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArchiveIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArchiveIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArchiveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArchiveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowCircleDownIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowCircleDownIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowCircleDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowCircleDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowCircleLeftIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowCircleLeftIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowCircleLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowCircleLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowCircleRightIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowCircleRightIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowCircleRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowCircleRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowCircleUpIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowCircleUpIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowCircleUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowCircleUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowDownIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowDownIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowLeftIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowLeftIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowDownIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowNarrowDownIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowNarrowDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowNarrowDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowLeftIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowNarrowLeftIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowNarrowLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowNarrowLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowRightIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowNarrowRightIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowNarrowRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowNarrowRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowUpIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowNarrowUpIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowNarrowUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowNarrowUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowRightIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowRightIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowSmDownIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowSmDownIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowSmDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowSmDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowSmLeftIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowSmLeftIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowSmLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowSmLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowSmRightIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowSmRightIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowSmRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowSmRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowSmUpIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowSmUpIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowSmUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowSmUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowUpIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowUpIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowsExpandIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowsExpandIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowsExpandIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowsExpandIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/AtSymbolIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/AtSymbolIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function AtSymbolIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AtSymbolIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BackspaceIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BackspaceIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BackspaceIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackspaceIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BadgeCheckIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BadgeCheckIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BadgeCheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeCheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BanIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BanIcon.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BanIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BanIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BeakerIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BeakerIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BeakerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BeakerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BellIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BellIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BellIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BellIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BookOpenIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BookOpenIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BookOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BookmarkAltIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BookmarkAltIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BookmarkAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookmarkAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BookmarkIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BookmarkIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BookmarkIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookmarkIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BriefcaseIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BriefcaseIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BriefcaseIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BriefcaseIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CakeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CakeIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CakeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CakeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CalculatorIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CalculatorIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CalculatorIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatorIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CalendarIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CalendarIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CalendarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CameraIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CameraIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CameraIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CameraIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CashIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CashIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CashIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CashIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChartBarIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChartBarIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChartBarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartBarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChartPieIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChartPieIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChartPieIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartPieIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChartSquareBarIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChartSquareBarIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChartSquareBarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartSquareBarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChatAlt2Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChatAlt2Icon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChatAlt2Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatAlt2Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChatAltIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChatAltIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChatAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChatIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChatIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChatIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CheckCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CheckIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CheckIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleDownIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDoubleDownIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronDoubleDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronDoubleDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleLeftIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDoubleLeftIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronDoubleLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronDoubleLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleRightIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDoubleRightIcon.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronDoubleRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronDoubleRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleUpIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDoubleUpIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronDoubleUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronDoubleUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDownIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDownIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronLeftIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronLeftIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronRightIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronRightIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronUpIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronUpIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChipIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChipIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChipIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13 7H7v6h6V7z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChipIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClipboardCheckIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClipboardCheckIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ClipboardCheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClipboardCheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClipboardCopyIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClipboardCopyIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ClipboardCopyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClipboardCopyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClipboardIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClipboardIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ClipboardIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClipboardIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClipboardListIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClipboardListIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ClipboardListIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClipboardListIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClockIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClockIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ClockIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClockIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CloudDownloadIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CloudDownloadIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CloudDownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloudDownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CloudIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CloudIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CloudIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloudIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CloudUploadIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CloudUploadIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CloudUploadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 13h2v5a1 1 0 11-2 0v-5z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloudUploadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CodeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CodeIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CodeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CogIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CogIcon.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CogIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CogIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CollectionIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CollectionIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CollectionIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ColorSwatchIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ColorSwatchIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ColorSwatchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorSwatchIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CreditCardIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CreditCardIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CreditCardIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreditCardIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CubeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CubeIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CubeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CubeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CubeTransparentIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CubeTransparentIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CubeTransparentIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CubeTransparentIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyBangladeshiIcon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyBangladeshiIcon.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CurrencyBangladeshiIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrencyBangladeshiIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyDollarIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyDollarIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CurrencyDollarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrencyDollarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyEuroIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyEuroIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CurrencyEuroIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrencyEuroIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyPoundIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyPoundIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CurrencyPoundIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrencyPoundIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyRupeeIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyRupeeIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CurrencyRupeeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrencyRupeeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyYenIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyYenIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CurrencyYenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrencyYenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CursorClickIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CursorClickIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CursorClickIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorClickIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DatabaseIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DatabaseIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DatabaseIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatabaseIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DesktopComputerIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DesktopComputerIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DesktopComputerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesktopComputerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DeviceMobileIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DeviceMobileIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DeviceMobileIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeviceMobileIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DeviceTabletIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DeviceTabletIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DeviceTabletIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeviceTabletIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentAddIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentAddIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentDownloadIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentDownloadIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentDownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentDownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentDuplicateIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentDuplicateIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentDuplicateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentDuplicateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentRemoveIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentRemoveIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentRemoveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentRemoveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentReportIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentReportIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentReportIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentReportIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentSearchIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentSearchIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentSearchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentSearchIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentTextIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentTextIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentTextIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentTextIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DotsCircleHorizontalIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DotsCircleHorizontalIcon.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DotsCircleHorizontalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DotsCircleHorizontalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DotsHorizontalIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DotsHorizontalIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DotsHorizontalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DotsHorizontalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DotsVerticalIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DotsVerticalIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DotsVerticalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DotsVerticalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DownloadIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DownloadIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DuplicateIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DuplicateIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DuplicateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DuplicateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/EmojiHappyIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/EmojiHappyIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function EmojiHappyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmojiHappyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/EmojiSadIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/EmojiSadIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function EmojiSadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmojiSadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ExclamationCircleIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ExclamationCircleIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ExclamationCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExclamationCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ExclamationIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ExclamationIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ExclamationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExclamationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ExternalLinkIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ExternalLinkIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ExternalLinkIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExternalLinkIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/EyeIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/EyeIcon.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function EyeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 12a2 2 0 100-4 2 2 0 000 4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EyeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/EyeOffIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/EyeOffIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function EyeOffIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EyeOffIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FastForwardIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FastForwardIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FastForwardIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FastForwardIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FilmIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FilmIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FilmIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilmIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FilterIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FilterIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FilterIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FingerPrintIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FingerPrintIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FingerPrintIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FingerPrintIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FireIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FireIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FireIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FireIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FlagIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FlagIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FlagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderAddIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderAddIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FolderAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 11h4m-2-2v4"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FolderAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderDownloadIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderDownloadIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FolderDownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 9v4m0 0l-2-2m2 2l2-2"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FolderDownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FolderIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FolderIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderOpenIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderOpenIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FolderOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FolderOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderRemoveIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderRemoveIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FolderRemoveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 11h4"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FolderRemoveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/GiftIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/GiftIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function GiftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GiftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/GlobeAltIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/GlobeAltIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function GlobeAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobeAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/GlobeIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/GlobeIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function GlobeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/HandIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/HandIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function HandIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HandIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/HashtagIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/HashtagIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function HashtagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HashtagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/HeartIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/HeartIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function HeartIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeartIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/HomeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/HomeIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function HomeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/IdentificationIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/IdentificationIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function IdentificationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdentificationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/InboxIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/InboxIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function InboxIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InboxIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/InboxInIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/InboxInIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function InboxInIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InboxInIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/InformationCircleIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/InformationCircleIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function InformationCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InformationCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/KeyIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/KeyIcon.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function KeyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LibraryIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LibraryIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LibraryIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LibraryIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LightBulbIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LightBulbIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LightBulbIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightBulbIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LightningBoltIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LightningBoltIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LightningBoltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightningBoltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LinkIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LinkIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LinkIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LocationMarkerIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LocationMarkerIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LocationMarkerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationMarkerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LockClosedIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LockClosedIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LockClosedIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LockClosedIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LockOpenIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LockOpenIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LockOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LockOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LoginIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LoginIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LoginIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LogoutIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LogoutIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LogoutIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoutIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MailIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MailIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MailIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MailIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MailOpenIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MailOpenIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MailOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MailOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MapIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MapIcon.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MapIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuAlt1Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuAlt1Icon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MenuAlt1Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuAlt1Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuAlt2Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuAlt2Icon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MenuAlt2Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuAlt2Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuAlt3Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuAlt3Icon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MenuAlt3Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuAlt3Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuAlt4Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuAlt4Icon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MenuAlt4Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuAlt4Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MenuIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MicrophoneIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MicrophoneIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MicrophoneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MicrophoneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MinusCircleIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MinusCircleIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MinusCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinusCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MinusIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MinusIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MinusIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinusIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MinusSmIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MinusSmIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MinusSmIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinusSmIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MoonIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MoonIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MoonIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoonIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MusicNoteIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MusicNoteIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MusicNoteIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MusicNoteIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/NewspaperIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/NewspaperIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function NewspaperIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewspaperIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/OfficeBuildingIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/OfficeBuildingIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function OfficeBuildingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OfficeBuildingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PaperAirplaneIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PaperAirplaneIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PaperAirplaneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaperAirplaneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PaperClipIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PaperClipIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PaperClipIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaperClipIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PauseIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PauseIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PauseIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PauseIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PencilAltIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PencilAltIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PencilAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PencilAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PencilIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PencilIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PencilIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PencilIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhoneIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhoneIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PhoneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhoneIncomingIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhoneIncomingIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PhoneIncomingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneIncomingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhoneMissedCallIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhoneMissedCallIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PhoneMissedCallIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneMissedCallIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhoneOutgoingIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhoneOutgoingIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PhoneOutgoingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneOutgoingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhotographIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhotographIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PhotographIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhotographIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PlayIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PlayIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PlayIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PlusCircleIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PlusCircleIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PlusCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlusCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PlusIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PlusIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PlusIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlusIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PlusSmIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PlusSmIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PlusSmIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlusSmIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PresentationChartBarIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PresentationChartBarIcon.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PresentationChartBarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PresentationChartBarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PresentationChartLineIcon.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PresentationChartLineIcon.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PresentationChartLineIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PresentationChartLineIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PrinterIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PrinterIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PrinterIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrinterIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PuzzleIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PuzzleIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PuzzleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PuzzleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/QrcodeIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/QrcodeIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function QrcodeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QrcodeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/QuestionMarkCircleIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/QuestionMarkCircleIcon.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function QuestionMarkCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionMarkCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ReceiptRefundIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ReceiptRefundIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ReceiptRefundIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReceiptRefundIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ReceiptTaxIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ReceiptTaxIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ReceiptTaxIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReceiptTaxIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/RefreshIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/RefreshIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function RefreshIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefreshIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ReplyIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ReplyIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ReplyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReplyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/RewindIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/RewindIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function RewindIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RewindIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/RssIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/RssIcon.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function RssIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RssIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SaveAsIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SaveAsIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SaveAsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveAsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SaveIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SaveIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SaveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ScaleIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ScaleIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ScaleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScaleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ScissorsIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ScissorsIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ScissorsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScissorsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SearchCircleIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SearchCircleIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SearchCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SearchIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SearchIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SearchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SelectorIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SelectorIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectorIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ServerIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ServerIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ServerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShareIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShareIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ShareIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShieldCheckIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShieldCheckIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ShieldCheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShieldCheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShieldExclamationIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShieldExclamationIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ShieldExclamationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShieldExclamationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShoppingBagIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShoppingBagIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ShoppingBagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingBagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShoppingCartIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShoppingCartIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ShoppingCartIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingCartIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SortAscendingIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SortAscendingIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SortAscendingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortAscendingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SortDescendingIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SortDescendingIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SortDescendingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortDescendingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SparklesIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SparklesIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SparklesIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SparklesIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SpeakerphoneIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SpeakerphoneIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SpeakerphoneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpeakerphoneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/StarIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/StarIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function StarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/StatusOfflineIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/StatusOfflineIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function StatusOfflineIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatusOfflineIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/StatusOnlineIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/StatusOnlineIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function StatusOnlineIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatusOnlineIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/StopIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/StopIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function StopIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StopIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SunIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SunIcon.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SunIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SunIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SupportIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SupportIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SupportIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupportIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SwitchHorizontalIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SwitchHorizontalIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SwitchHorizontalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchHorizontalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SwitchVerticalIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SwitchVerticalIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SwitchVerticalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchVerticalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TableIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TableIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TableIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TagIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TagIcon.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TemplateIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TemplateIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TemplateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TerminalIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TerminalIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TerminalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TerminalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ThumbDownIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ThumbDownIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ThumbDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThumbDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ThumbUpIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ThumbUpIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ThumbUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThumbUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TicketIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TicketIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TicketIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicketIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TranslateIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TranslateIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TranslateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TranslateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TrashIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TrashIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TrashIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrashIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TrendingDownIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TrendingDownIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TrendingDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrendingDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TrendingUpIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TrendingUpIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TrendingUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrendingUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TruckIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TruckIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TruckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TruckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UploadIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UploadIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UploadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserAddIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserAddIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UserAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserCircleIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserCircleIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UserCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserGroupIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserGroupIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UserGroupIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserGroupIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UserIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserRemoveIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserRemoveIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UserRemoveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserRemoveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UsersIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UsersIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UsersIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/VariableIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/VariableIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function VariableIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VariableIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/VideoCameraIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/VideoCameraIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function VideoCameraIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoCameraIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ViewBoardsIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ViewBoardsIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ViewBoardsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewBoardsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ViewGridAddIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ViewGridAddIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ViewGridAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewGridAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ViewGridIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ViewGridIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ViewGridIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewGridIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ViewListIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ViewListIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ViewListIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewListIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/VolumeOffIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/VolumeOffIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function VolumeOffIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VolumeOffIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/VolumeUpIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/VolumeUpIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function VolumeUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VolumeUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/WifiIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/WifiIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function WifiIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WifiIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/XCircleIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/XCircleIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function XCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (XCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/XIcon.js":
/*!**********************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/XIcon.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function XIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (XIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ZoomInIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ZoomInIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ZoomInIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZoomInIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ZoomOutIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ZoomOutIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ZoomOutIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZoomOutIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcademicCapIcon": () => (/* reexport safe */ _AcademicCapIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "AdjustmentsIcon": () => (/* reexport safe */ _AdjustmentsIcon_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "AnnotationIcon": () => (/* reexport safe */ _AnnotationIcon_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "ArchiveIcon": () => (/* reexport safe */ _ArchiveIcon_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "ArrowCircleDownIcon": () => (/* reexport safe */ _ArrowCircleDownIcon_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "ArrowCircleLeftIcon": () => (/* reexport safe */ _ArrowCircleLeftIcon_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "ArrowCircleRightIcon": () => (/* reexport safe */ _ArrowCircleRightIcon_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "ArrowCircleUpIcon": () => (/* reexport safe */ _ArrowCircleUpIcon_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "ArrowDownIcon": () => (/* reexport safe */ _ArrowDownIcon_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "ArrowLeftIcon": () => (/* reexport safe */ _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "ArrowNarrowDownIcon": () => (/* reexport safe */ _ArrowNarrowDownIcon_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "ArrowNarrowLeftIcon": () => (/* reexport safe */ _ArrowNarrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "ArrowNarrowRightIcon": () => (/* reexport safe */ _ArrowNarrowRightIcon_js__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "ArrowNarrowUpIcon": () => (/* reexport safe */ _ArrowNarrowUpIcon_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "ArrowRightIcon": () => (/* reexport safe */ _ArrowRightIcon_js__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "ArrowSmDownIcon": () => (/* reexport safe */ _ArrowSmDownIcon_js__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   "ArrowSmLeftIcon": () => (/* reexport safe */ _ArrowSmLeftIcon_js__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   "ArrowSmRightIcon": () => (/* reexport safe */ _ArrowSmRightIcon_js__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   "ArrowSmUpIcon": () => (/* reexport safe */ _ArrowSmUpIcon_js__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   "ArrowUpIcon": () => (/* reexport safe */ _ArrowUpIcon_js__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   "ArrowsExpandIcon": () => (/* reexport safe */ _ArrowsExpandIcon_js__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   "AtSymbolIcon": () => (/* reexport safe */ _AtSymbolIcon_js__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   "BackspaceIcon": () => (/* reexport safe */ _BackspaceIcon_js__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   "BadgeCheckIcon": () => (/* reexport safe */ _BadgeCheckIcon_js__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   "BanIcon": () => (/* reexport safe */ _BanIcon_js__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   "BeakerIcon": () => (/* reexport safe */ _BeakerIcon_js__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   "BellIcon": () => (/* reexport safe */ _BellIcon_js__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   "BookOpenIcon": () => (/* reexport safe */ _BookOpenIcon_js__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   "BookmarkAltIcon": () => (/* reexport safe */ _BookmarkAltIcon_js__WEBPACK_IMPORTED_MODULE_28__["default"]),
/* harmony export */   "BookmarkIcon": () => (/* reexport safe */ _BookmarkIcon_js__WEBPACK_IMPORTED_MODULE_29__["default"]),
/* harmony export */   "BriefcaseIcon": () => (/* reexport safe */ _BriefcaseIcon_js__WEBPACK_IMPORTED_MODULE_30__["default"]),
/* harmony export */   "CakeIcon": () => (/* reexport safe */ _CakeIcon_js__WEBPACK_IMPORTED_MODULE_31__["default"]),
/* harmony export */   "CalculatorIcon": () => (/* reexport safe */ _CalculatorIcon_js__WEBPACK_IMPORTED_MODULE_32__["default"]),
/* harmony export */   "CalendarIcon": () => (/* reexport safe */ _CalendarIcon_js__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   "CameraIcon": () => (/* reexport safe */ _CameraIcon_js__WEBPACK_IMPORTED_MODULE_34__["default"]),
/* harmony export */   "CashIcon": () => (/* reexport safe */ _CashIcon_js__WEBPACK_IMPORTED_MODULE_35__["default"]),
/* harmony export */   "ChartBarIcon": () => (/* reexport safe */ _ChartBarIcon_js__WEBPACK_IMPORTED_MODULE_36__["default"]),
/* harmony export */   "ChartPieIcon": () => (/* reexport safe */ _ChartPieIcon_js__WEBPACK_IMPORTED_MODULE_37__["default"]),
/* harmony export */   "ChartSquareBarIcon": () => (/* reexport safe */ _ChartSquareBarIcon_js__WEBPACK_IMPORTED_MODULE_38__["default"]),
/* harmony export */   "ChatAlt2Icon": () => (/* reexport safe */ _ChatAlt2Icon_js__WEBPACK_IMPORTED_MODULE_39__["default"]),
/* harmony export */   "ChatAltIcon": () => (/* reexport safe */ _ChatAltIcon_js__WEBPACK_IMPORTED_MODULE_40__["default"]),
/* harmony export */   "ChatIcon": () => (/* reexport safe */ _ChatIcon_js__WEBPACK_IMPORTED_MODULE_41__["default"]),
/* harmony export */   "CheckCircleIcon": () => (/* reexport safe */ _CheckCircleIcon_js__WEBPACK_IMPORTED_MODULE_42__["default"]),
/* harmony export */   "CheckIcon": () => (/* reexport safe */ _CheckIcon_js__WEBPACK_IMPORTED_MODULE_43__["default"]),
/* harmony export */   "ChevronDoubleDownIcon": () => (/* reexport safe */ _ChevronDoubleDownIcon_js__WEBPACK_IMPORTED_MODULE_44__["default"]),
/* harmony export */   "ChevronDoubleLeftIcon": () => (/* reexport safe */ _ChevronDoubleLeftIcon_js__WEBPACK_IMPORTED_MODULE_45__["default"]),
/* harmony export */   "ChevronDoubleRightIcon": () => (/* reexport safe */ _ChevronDoubleRightIcon_js__WEBPACK_IMPORTED_MODULE_46__["default"]),
/* harmony export */   "ChevronDoubleUpIcon": () => (/* reexport safe */ _ChevronDoubleUpIcon_js__WEBPACK_IMPORTED_MODULE_47__["default"]),
/* harmony export */   "ChevronDownIcon": () => (/* reexport safe */ _ChevronDownIcon_js__WEBPACK_IMPORTED_MODULE_48__["default"]),
/* harmony export */   "ChevronLeftIcon": () => (/* reexport safe */ _ChevronLeftIcon_js__WEBPACK_IMPORTED_MODULE_49__["default"]),
/* harmony export */   "ChevronRightIcon": () => (/* reexport safe */ _ChevronRightIcon_js__WEBPACK_IMPORTED_MODULE_50__["default"]),
/* harmony export */   "ChevronUpIcon": () => (/* reexport safe */ _ChevronUpIcon_js__WEBPACK_IMPORTED_MODULE_51__["default"]),
/* harmony export */   "ChipIcon": () => (/* reexport safe */ _ChipIcon_js__WEBPACK_IMPORTED_MODULE_52__["default"]),
/* harmony export */   "ClipboardCheckIcon": () => (/* reexport safe */ _ClipboardCheckIcon_js__WEBPACK_IMPORTED_MODULE_53__["default"]),
/* harmony export */   "ClipboardCopyIcon": () => (/* reexport safe */ _ClipboardCopyIcon_js__WEBPACK_IMPORTED_MODULE_54__["default"]),
/* harmony export */   "ClipboardListIcon": () => (/* reexport safe */ _ClipboardListIcon_js__WEBPACK_IMPORTED_MODULE_55__["default"]),
/* harmony export */   "ClipboardIcon": () => (/* reexport safe */ _ClipboardIcon_js__WEBPACK_IMPORTED_MODULE_56__["default"]),
/* harmony export */   "ClockIcon": () => (/* reexport safe */ _ClockIcon_js__WEBPACK_IMPORTED_MODULE_57__["default"]),
/* harmony export */   "CloudDownloadIcon": () => (/* reexport safe */ _CloudDownloadIcon_js__WEBPACK_IMPORTED_MODULE_58__["default"]),
/* harmony export */   "CloudUploadIcon": () => (/* reexport safe */ _CloudUploadIcon_js__WEBPACK_IMPORTED_MODULE_59__["default"]),
/* harmony export */   "CloudIcon": () => (/* reexport safe */ _CloudIcon_js__WEBPACK_IMPORTED_MODULE_60__["default"]),
/* harmony export */   "CodeIcon": () => (/* reexport safe */ _CodeIcon_js__WEBPACK_IMPORTED_MODULE_61__["default"]),
/* harmony export */   "CogIcon": () => (/* reexport safe */ _CogIcon_js__WEBPACK_IMPORTED_MODULE_62__["default"]),
/* harmony export */   "CollectionIcon": () => (/* reexport safe */ _CollectionIcon_js__WEBPACK_IMPORTED_MODULE_63__["default"]),
/* harmony export */   "ColorSwatchIcon": () => (/* reexport safe */ _ColorSwatchIcon_js__WEBPACK_IMPORTED_MODULE_64__["default"]),
/* harmony export */   "CreditCardIcon": () => (/* reexport safe */ _CreditCardIcon_js__WEBPACK_IMPORTED_MODULE_65__["default"]),
/* harmony export */   "CubeTransparentIcon": () => (/* reexport safe */ _CubeTransparentIcon_js__WEBPACK_IMPORTED_MODULE_66__["default"]),
/* harmony export */   "CubeIcon": () => (/* reexport safe */ _CubeIcon_js__WEBPACK_IMPORTED_MODULE_67__["default"]),
/* harmony export */   "CurrencyBangladeshiIcon": () => (/* reexport safe */ _CurrencyBangladeshiIcon_js__WEBPACK_IMPORTED_MODULE_68__["default"]),
/* harmony export */   "CurrencyDollarIcon": () => (/* reexport safe */ _CurrencyDollarIcon_js__WEBPACK_IMPORTED_MODULE_69__["default"]),
/* harmony export */   "CurrencyEuroIcon": () => (/* reexport safe */ _CurrencyEuroIcon_js__WEBPACK_IMPORTED_MODULE_70__["default"]),
/* harmony export */   "CurrencyPoundIcon": () => (/* reexport safe */ _CurrencyPoundIcon_js__WEBPACK_IMPORTED_MODULE_71__["default"]),
/* harmony export */   "CurrencyRupeeIcon": () => (/* reexport safe */ _CurrencyRupeeIcon_js__WEBPACK_IMPORTED_MODULE_72__["default"]),
/* harmony export */   "CurrencyYenIcon": () => (/* reexport safe */ _CurrencyYenIcon_js__WEBPACK_IMPORTED_MODULE_73__["default"]),
/* harmony export */   "CursorClickIcon": () => (/* reexport safe */ _CursorClickIcon_js__WEBPACK_IMPORTED_MODULE_74__["default"]),
/* harmony export */   "DatabaseIcon": () => (/* reexport safe */ _DatabaseIcon_js__WEBPACK_IMPORTED_MODULE_75__["default"]),
/* harmony export */   "DesktopComputerIcon": () => (/* reexport safe */ _DesktopComputerIcon_js__WEBPACK_IMPORTED_MODULE_76__["default"]),
/* harmony export */   "DeviceMobileIcon": () => (/* reexport safe */ _DeviceMobileIcon_js__WEBPACK_IMPORTED_MODULE_77__["default"]),
/* harmony export */   "DeviceTabletIcon": () => (/* reexport safe */ _DeviceTabletIcon_js__WEBPACK_IMPORTED_MODULE_78__["default"]),
/* harmony export */   "DocumentAddIcon": () => (/* reexport safe */ _DocumentAddIcon_js__WEBPACK_IMPORTED_MODULE_79__["default"]),
/* harmony export */   "DocumentDownloadIcon": () => (/* reexport safe */ _DocumentDownloadIcon_js__WEBPACK_IMPORTED_MODULE_80__["default"]),
/* harmony export */   "DocumentDuplicateIcon": () => (/* reexport safe */ _DocumentDuplicateIcon_js__WEBPACK_IMPORTED_MODULE_81__["default"]),
/* harmony export */   "DocumentRemoveIcon": () => (/* reexport safe */ _DocumentRemoveIcon_js__WEBPACK_IMPORTED_MODULE_82__["default"]),
/* harmony export */   "DocumentReportIcon": () => (/* reexport safe */ _DocumentReportIcon_js__WEBPACK_IMPORTED_MODULE_83__["default"]),
/* harmony export */   "DocumentSearchIcon": () => (/* reexport safe */ _DocumentSearchIcon_js__WEBPACK_IMPORTED_MODULE_84__["default"]),
/* harmony export */   "DocumentTextIcon": () => (/* reexport safe */ _DocumentTextIcon_js__WEBPACK_IMPORTED_MODULE_85__["default"]),
/* harmony export */   "DocumentIcon": () => (/* reexport safe */ _DocumentIcon_js__WEBPACK_IMPORTED_MODULE_86__["default"]),
/* harmony export */   "DotsCircleHorizontalIcon": () => (/* reexport safe */ _DotsCircleHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_87__["default"]),
/* harmony export */   "DotsHorizontalIcon": () => (/* reexport safe */ _DotsHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_88__["default"]),
/* harmony export */   "DotsVerticalIcon": () => (/* reexport safe */ _DotsVerticalIcon_js__WEBPACK_IMPORTED_MODULE_89__["default"]),
/* harmony export */   "DownloadIcon": () => (/* reexport safe */ _DownloadIcon_js__WEBPACK_IMPORTED_MODULE_90__["default"]),
/* harmony export */   "DuplicateIcon": () => (/* reexport safe */ _DuplicateIcon_js__WEBPACK_IMPORTED_MODULE_91__["default"]),
/* harmony export */   "EmojiHappyIcon": () => (/* reexport safe */ _EmojiHappyIcon_js__WEBPACK_IMPORTED_MODULE_92__["default"]),
/* harmony export */   "EmojiSadIcon": () => (/* reexport safe */ _EmojiSadIcon_js__WEBPACK_IMPORTED_MODULE_93__["default"]),
/* harmony export */   "ExclamationCircleIcon": () => (/* reexport safe */ _ExclamationCircleIcon_js__WEBPACK_IMPORTED_MODULE_94__["default"]),
/* harmony export */   "ExclamationIcon": () => (/* reexport safe */ _ExclamationIcon_js__WEBPACK_IMPORTED_MODULE_95__["default"]),
/* harmony export */   "ExternalLinkIcon": () => (/* reexport safe */ _ExternalLinkIcon_js__WEBPACK_IMPORTED_MODULE_96__["default"]),
/* harmony export */   "EyeOffIcon": () => (/* reexport safe */ _EyeOffIcon_js__WEBPACK_IMPORTED_MODULE_97__["default"]),
/* harmony export */   "EyeIcon": () => (/* reexport safe */ _EyeIcon_js__WEBPACK_IMPORTED_MODULE_98__["default"]),
/* harmony export */   "FastForwardIcon": () => (/* reexport safe */ _FastForwardIcon_js__WEBPACK_IMPORTED_MODULE_99__["default"]),
/* harmony export */   "FilmIcon": () => (/* reexport safe */ _FilmIcon_js__WEBPACK_IMPORTED_MODULE_100__["default"]),
/* harmony export */   "FilterIcon": () => (/* reexport safe */ _FilterIcon_js__WEBPACK_IMPORTED_MODULE_101__["default"]),
/* harmony export */   "FingerPrintIcon": () => (/* reexport safe */ _FingerPrintIcon_js__WEBPACK_IMPORTED_MODULE_102__["default"]),
/* harmony export */   "FireIcon": () => (/* reexport safe */ _FireIcon_js__WEBPACK_IMPORTED_MODULE_103__["default"]),
/* harmony export */   "FlagIcon": () => (/* reexport safe */ _FlagIcon_js__WEBPACK_IMPORTED_MODULE_104__["default"]),
/* harmony export */   "FolderAddIcon": () => (/* reexport safe */ _FolderAddIcon_js__WEBPACK_IMPORTED_MODULE_105__["default"]),
/* harmony export */   "FolderDownloadIcon": () => (/* reexport safe */ _FolderDownloadIcon_js__WEBPACK_IMPORTED_MODULE_106__["default"]),
/* harmony export */   "FolderOpenIcon": () => (/* reexport safe */ _FolderOpenIcon_js__WEBPACK_IMPORTED_MODULE_107__["default"]),
/* harmony export */   "FolderRemoveIcon": () => (/* reexport safe */ _FolderRemoveIcon_js__WEBPACK_IMPORTED_MODULE_108__["default"]),
/* harmony export */   "FolderIcon": () => (/* reexport safe */ _FolderIcon_js__WEBPACK_IMPORTED_MODULE_109__["default"]),
/* harmony export */   "GiftIcon": () => (/* reexport safe */ _GiftIcon_js__WEBPACK_IMPORTED_MODULE_110__["default"]),
/* harmony export */   "GlobeAltIcon": () => (/* reexport safe */ _GlobeAltIcon_js__WEBPACK_IMPORTED_MODULE_111__["default"]),
/* harmony export */   "GlobeIcon": () => (/* reexport safe */ _GlobeIcon_js__WEBPACK_IMPORTED_MODULE_112__["default"]),
/* harmony export */   "HandIcon": () => (/* reexport safe */ _HandIcon_js__WEBPACK_IMPORTED_MODULE_113__["default"]),
/* harmony export */   "HashtagIcon": () => (/* reexport safe */ _HashtagIcon_js__WEBPACK_IMPORTED_MODULE_114__["default"]),
/* harmony export */   "HeartIcon": () => (/* reexport safe */ _HeartIcon_js__WEBPACK_IMPORTED_MODULE_115__["default"]),
/* harmony export */   "HomeIcon": () => (/* reexport safe */ _HomeIcon_js__WEBPACK_IMPORTED_MODULE_116__["default"]),
/* harmony export */   "IdentificationIcon": () => (/* reexport safe */ _IdentificationIcon_js__WEBPACK_IMPORTED_MODULE_117__["default"]),
/* harmony export */   "InboxInIcon": () => (/* reexport safe */ _InboxInIcon_js__WEBPACK_IMPORTED_MODULE_118__["default"]),
/* harmony export */   "InboxIcon": () => (/* reexport safe */ _InboxIcon_js__WEBPACK_IMPORTED_MODULE_119__["default"]),
/* harmony export */   "InformationCircleIcon": () => (/* reexport safe */ _InformationCircleIcon_js__WEBPACK_IMPORTED_MODULE_120__["default"]),
/* harmony export */   "KeyIcon": () => (/* reexport safe */ _KeyIcon_js__WEBPACK_IMPORTED_MODULE_121__["default"]),
/* harmony export */   "LibraryIcon": () => (/* reexport safe */ _LibraryIcon_js__WEBPACK_IMPORTED_MODULE_122__["default"]),
/* harmony export */   "LightBulbIcon": () => (/* reexport safe */ _LightBulbIcon_js__WEBPACK_IMPORTED_MODULE_123__["default"]),
/* harmony export */   "LightningBoltIcon": () => (/* reexport safe */ _LightningBoltIcon_js__WEBPACK_IMPORTED_MODULE_124__["default"]),
/* harmony export */   "LinkIcon": () => (/* reexport safe */ _LinkIcon_js__WEBPACK_IMPORTED_MODULE_125__["default"]),
/* harmony export */   "LocationMarkerIcon": () => (/* reexport safe */ _LocationMarkerIcon_js__WEBPACK_IMPORTED_MODULE_126__["default"]),
/* harmony export */   "LockClosedIcon": () => (/* reexport safe */ _LockClosedIcon_js__WEBPACK_IMPORTED_MODULE_127__["default"]),
/* harmony export */   "LockOpenIcon": () => (/* reexport safe */ _LockOpenIcon_js__WEBPACK_IMPORTED_MODULE_128__["default"]),
/* harmony export */   "LoginIcon": () => (/* reexport safe */ _LoginIcon_js__WEBPACK_IMPORTED_MODULE_129__["default"]),
/* harmony export */   "LogoutIcon": () => (/* reexport safe */ _LogoutIcon_js__WEBPACK_IMPORTED_MODULE_130__["default"]),
/* harmony export */   "MailOpenIcon": () => (/* reexport safe */ _MailOpenIcon_js__WEBPACK_IMPORTED_MODULE_131__["default"]),
/* harmony export */   "MailIcon": () => (/* reexport safe */ _MailIcon_js__WEBPACK_IMPORTED_MODULE_132__["default"]),
/* harmony export */   "MapIcon": () => (/* reexport safe */ _MapIcon_js__WEBPACK_IMPORTED_MODULE_133__["default"]),
/* harmony export */   "MenuAlt1Icon": () => (/* reexport safe */ _MenuAlt1Icon_js__WEBPACK_IMPORTED_MODULE_134__["default"]),
/* harmony export */   "MenuAlt2Icon": () => (/* reexport safe */ _MenuAlt2Icon_js__WEBPACK_IMPORTED_MODULE_135__["default"]),
/* harmony export */   "MenuAlt3Icon": () => (/* reexport safe */ _MenuAlt3Icon_js__WEBPACK_IMPORTED_MODULE_136__["default"]),
/* harmony export */   "MenuAlt4Icon": () => (/* reexport safe */ _MenuAlt4Icon_js__WEBPACK_IMPORTED_MODULE_137__["default"]),
/* harmony export */   "MenuIcon": () => (/* reexport safe */ _MenuIcon_js__WEBPACK_IMPORTED_MODULE_138__["default"]),
/* harmony export */   "MicrophoneIcon": () => (/* reexport safe */ _MicrophoneIcon_js__WEBPACK_IMPORTED_MODULE_139__["default"]),
/* harmony export */   "MinusCircleIcon": () => (/* reexport safe */ _MinusCircleIcon_js__WEBPACK_IMPORTED_MODULE_140__["default"]),
/* harmony export */   "MinusSmIcon": () => (/* reexport safe */ _MinusSmIcon_js__WEBPACK_IMPORTED_MODULE_141__["default"]),
/* harmony export */   "MinusIcon": () => (/* reexport safe */ _MinusIcon_js__WEBPACK_IMPORTED_MODULE_142__["default"]),
/* harmony export */   "MoonIcon": () => (/* reexport safe */ _MoonIcon_js__WEBPACK_IMPORTED_MODULE_143__["default"]),
/* harmony export */   "MusicNoteIcon": () => (/* reexport safe */ _MusicNoteIcon_js__WEBPACK_IMPORTED_MODULE_144__["default"]),
/* harmony export */   "NewspaperIcon": () => (/* reexport safe */ _NewspaperIcon_js__WEBPACK_IMPORTED_MODULE_145__["default"]),
/* harmony export */   "OfficeBuildingIcon": () => (/* reexport safe */ _OfficeBuildingIcon_js__WEBPACK_IMPORTED_MODULE_146__["default"]),
/* harmony export */   "PaperAirplaneIcon": () => (/* reexport safe */ _PaperAirplaneIcon_js__WEBPACK_IMPORTED_MODULE_147__["default"]),
/* harmony export */   "PaperClipIcon": () => (/* reexport safe */ _PaperClipIcon_js__WEBPACK_IMPORTED_MODULE_148__["default"]),
/* harmony export */   "PauseIcon": () => (/* reexport safe */ _PauseIcon_js__WEBPACK_IMPORTED_MODULE_149__["default"]),
/* harmony export */   "PencilAltIcon": () => (/* reexport safe */ _PencilAltIcon_js__WEBPACK_IMPORTED_MODULE_150__["default"]),
/* harmony export */   "PencilIcon": () => (/* reexport safe */ _PencilIcon_js__WEBPACK_IMPORTED_MODULE_151__["default"]),
/* harmony export */   "PhoneIncomingIcon": () => (/* reexport safe */ _PhoneIncomingIcon_js__WEBPACK_IMPORTED_MODULE_152__["default"]),
/* harmony export */   "PhoneMissedCallIcon": () => (/* reexport safe */ _PhoneMissedCallIcon_js__WEBPACK_IMPORTED_MODULE_153__["default"]),
/* harmony export */   "PhoneOutgoingIcon": () => (/* reexport safe */ _PhoneOutgoingIcon_js__WEBPACK_IMPORTED_MODULE_154__["default"]),
/* harmony export */   "PhoneIcon": () => (/* reexport safe */ _PhoneIcon_js__WEBPACK_IMPORTED_MODULE_155__["default"]),
/* harmony export */   "PhotographIcon": () => (/* reexport safe */ _PhotographIcon_js__WEBPACK_IMPORTED_MODULE_156__["default"]),
/* harmony export */   "PlayIcon": () => (/* reexport safe */ _PlayIcon_js__WEBPACK_IMPORTED_MODULE_157__["default"]),
/* harmony export */   "PlusCircleIcon": () => (/* reexport safe */ _PlusCircleIcon_js__WEBPACK_IMPORTED_MODULE_158__["default"]),
/* harmony export */   "PlusSmIcon": () => (/* reexport safe */ _PlusSmIcon_js__WEBPACK_IMPORTED_MODULE_159__["default"]),
/* harmony export */   "PlusIcon": () => (/* reexport safe */ _PlusIcon_js__WEBPACK_IMPORTED_MODULE_160__["default"]),
/* harmony export */   "PresentationChartBarIcon": () => (/* reexport safe */ _PresentationChartBarIcon_js__WEBPACK_IMPORTED_MODULE_161__["default"]),
/* harmony export */   "PresentationChartLineIcon": () => (/* reexport safe */ _PresentationChartLineIcon_js__WEBPACK_IMPORTED_MODULE_162__["default"]),
/* harmony export */   "PrinterIcon": () => (/* reexport safe */ _PrinterIcon_js__WEBPACK_IMPORTED_MODULE_163__["default"]),
/* harmony export */   "PuzzleIcon": () => (/* reexport safe */ _PuzzleIcon_js__WEBPACK_IMPORTED_MODULE_164__["default"]),
/* harmony export */   "QrcodeIcon": () => (/* reexport safe */ _QrcodeIcon_js__WEBPACK_IMPORTED_MODULE_165__["default"]),
/* harmony export */   "QuestionMarkCircleIcon": () => (/* reexport safe */ _QuestionMarkCircleIcon_js__WEBPACK_IMPORTED_MODULE_166__["default"]),
/* harmony export */   "ReceiptRefundIcon": () => (/* reexport safe */ _ReceiptRefundIcon_js__WEBPACK_IMPORTED_MODULE_167__["default"]),
/* harmony export */   "ReceiptTaxIcon": () => (/* reexport safe */ _ReceiptTaxIcon_js__WEBPACK_IMPORTED_MODULE_168__["default"]),
/* harmony export */   "RefreshIcon": () => (/* reexport safe */ _RefreshIcon_js__WEBPACK_IMPORTED_MODULE_169__["default"]),
/* harmony export */   "ReplyIcon": () => (/* reexport safe */ _ReplyIcon_js__WEBPACK_IMPORTED_MODULE_170__["default"]),
/* harmony export */   "RewindIcon": () => (/* reexport safe */ _RewindIcon_js__WEBPACK_IMPORTED_MODULE_171__["default"]),
/* harmony export */   "RssIcon": () => (/* reexport safe */ _RssIcon_js__WEBPACK_IMPORTED_MODULE_172__["default"]),
/* harmony export */   "SaveAsIcon": () => (/* reexport safe */ _SaveAsIcon_js__WEBPACK_IMPORTED_MODULE_173__["default"]),
/* harmony export */   "SaveIcon": () => (/* reexport safe */ _SaveIcon_js__WEBPACK_IMPORTED_MODULE_174__["default"]),
/* harmony export */   "ScaleIcon": () => (/* reexport safe */ _ScaleIcon_js__WEBPACK_IMPORTED_MODULE_175__["default"]),
/* harmony export */   "ScissorsIcon": () => (/* reexport safe */ _ScissorsIcon_js__WEBPACK_IMPORTED_MODULE_176__["default"]),
/* harmony export */   "SearchCircleIcon": () => (/* reexport safe */ _SearchCircleIcon_js__WEBPACK_IMPORTED_MODULE_177__["default"]),
/* harmony export */   "SearchIcon": () => (/* reexport safe */ _SearchIcon_js__WEBPACK_IMPORTED_MODULE_178__["default"]),
/* harmony export */   "SelectorIcon": () => (/* reexport safe */ _SelectorIcon_js__WEBPACK_IMPORTED_MODULE_179__["default"]),
/* harmony export */   "ServerIcon": () => (/* reexport safe */ _ServerIcon_js__WEBPACK_IMPORTED_MODULE_180__["default"]),
/* harmony export */   "ShareIcon": () => (/* reexport safe */ _ShareIcon_js__WEBPACK_IMPORTED_MODULE_181__["default"]),
/* harmony export */   "ShieldCheckIcon": () => (/* reexport safe */ _ShieldCheckIcon_js__WEBPACK_IMPORTED_MODULE_182__["default"]),
/* harmony export */   "ShieldExclamationIcon": () => (/* reexport safe */ _ShieldExclamationIcon_js__WEBPACK_IMPORTED_MODULE_183__["default"]),
/* harmony export */   "ShoppingBagIcon": () => (/* reexport safe */ _ShoppingBagIcon_js__WEBPACK_IMPORTED_MODULE_184__["default"]),
/* harmony export */   "ShoppingCartIcon": () => (/* reexport safe */ _ShoppingCartIcon_js__WEBPACK_IMPORTED_MODULE_185__["default"]),
/* harmony export */   "SortAscendingIcon": () => (/* reexport safe */ _SortAscendingIcon_js__WEBPACK_IMPORTED_MODULE_186__["default"]),
/* harmony export */   "SortDescendingIcon": () => (/* reexport safe */ _SortDescendingIcon_js__WEBPACK_IMPORTED_MODULE_187__["default"]),
/* harmony export */   "SparklesIcon": () => (/* reexport safe */ _SparklesIcon_js__WEBPACK_IMPORTED_MODULE_188__["default"]),
/* harmony export */   "SpeakerphoneIcon": () => (/* reexport safe */ _SpeakerphoneIcon_js__WEBPACK_IMPORTED_MODULE_189__["default"]),
/* harmony export */   "StarIcon": () => (/* reexport safe */ _StarIcon_js__WEBPACK_IMPORTED_MODULE_190__["default"]),
/* harmony export */   "StatusOfflineIcon": () => (/* reexport safe */ _StatusOfflineIcon_js__WEBPACK_IMPORTED_MODULE_191__["default"]),
/* harmony export */   "StatusOnlineIcon": () => (/* reexport safe */ _StatusOnlineIcon_js__WEBPACK_IMPORTED_MODULE_192__["default"]),
/* harmony export */   "StopIcon": () => (/* reexport safe */ _StopIcon_js__WEBPACK_IMPORTED_MODULE_193__["default"]),
/* harmony export */   "SunIcon": () => (/* reexport safe */ _SunIcon_js__WEBPACK_IMPORTED_MODULE_194__["default"]),
/* harmony export */   "SupportIcon": () => (/* reexport safe */ _SupportIcon_js__WEBPACK_IMPORTED_MODULE_195__["default"]),
/* harmony export */   "SwitchHorizontalIcon": () => (/* reexport safe */ _SwitchHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_196__["default"]),
/* harmony export */   "SwitchVerticalIcon": () => (/* reexport safe */ _SwitchVerticalIcon_js__WEBPACK_IMPORTED_MODULE_197__["default"]),
/* harmony export */   "TableIcon": () => (/* reexport safe */ _TableIcon_js__WEBPACK_IMPORTED_MODULE_198__["default"]),
/* harmony export */   "TagIcon": () => (/* reexport safe */ _TagIcon_js__WEBPACK_IMPORTED_MODULE_199__["default"]),
/* harmony export */   "TemplateIcon": () => (/* reexport safe */ _TemplateIcon_js__WEBPACK_IMPORTED_MODULE_200__["default"]),
/* harmony export */   "TerminalIcon": () => (/* reexport safe */ _TerminalIcon_js__WEBPACK_IMPORTED_MODULE_201__["default"]),
/* harmony export */   "ThumbDownIcon": () => (/* reexport safe */ _ThumbDownIcon_js__WEBPACK_IMPORTED_MODULE_202__["default"]),
/* harmony export */   "ThumbUpIcon": () => (/* reexport safe */ _ThumbUpIcon_js__WEBPACK_IMPORTED_MODULE_203__["default"]),
/* harmony export */   "TicketIcon": () => (/* reexport safe */ _TicketIcon_js__WEBPACK_IMPORTED_MODULE_204__["default"]),
/* harmony export */   "TranslateIcon": () => (/* reexport safe */ _TranslateIcon_js__WEBPACK_IMPORTED_MODULE_205__["default"]),
/* harmony export */   "TrashIcon": () => (/* reexport safe */ _TrashIcon_js__WEBPACK_IMPORTED_MODULE_206__["default"]),
/* harmony export */   "TrendingDownIcon": () => (/* reexport safe */ _TrendingDownIcon_js__WEBPACK_IMPORTED_MODULE_207__["default"]),
/* harmony export */   "TrendingUpIcon": () => (/* reexport safe */ _TrendingUpIcon_js__WEBPACK_IMPORTED_MODULE_208__["default"]),
/* harmony export */   "TruckIcon": () => (/* reexport safe */ _TruckIcon_js__WEBPACK_IMPORTED_MODULE_209__["default"]),
/* harmony export */   "UploadIcon": () => (/* reexport safe */ _UploadIcon_js__WEBPACK_IMPORTED_MODULE_210__["default"]),
/* harmony export */   "UserAddIcon": () => (/* reexport safe */ _UserAddIcon_js__WEBPACK_IMPORTED_MODULE_211__["default"]),
/* harmony export */   "UserCircleIcon": () => (/* reexport safe */ _UserCircleIcon_js__WEBPACK_IMPORTED_MODULE_212__["default"]),
/* harmony export */   "UserGroupIcon": () => (/* reexport safe */ _UserGroupIcon_js__WEBPACK_IMPORTED_MODULE_213__["default"]),
/* harmony export */   "UserRemoveIcon": () => (/* reexport safe */ _UserRemoveIcon_js__WEBPACK_IMPORTED_MODULE_214__["default"]),
/* harmony export */   "UserIcon": () => (/* reexport safe */ _UserIcon_js__WEBPACK_IMPORTED_MODULE_215__["default"]),
/* harmony export */   "UsersIcon": () => (/* reexport safe */ _UsersIcon_js__WEBPACK_IMPORTED_MODULE_216__["default"]),
/* harmony export */   "VariableIcon": () => (/* reexport safe */ _VariableIcon_js__WEBPACK_IMPORTED_MODULE_217__["default"]),
/* harmony export */   "VideoCameraIcon": () => (/* reexport safe */ _VideoCameraIcon_js__WEBPACK_IMPORTED_MODULE_218__["default"]),
/* harmony export */   "ViewBoardsIcon": () => (/* reexport safe */ _ViewBoardsIcon_js__WEBPACK_IMPORTED_MODULE_219__["default"]),
/* harmony export */   "ViewGridAddIcon": () => (/* reexport safe */ _ViewGridAddIcon_js__WEBPACK_IMPORTED_MODULE_220__["default"]),
/* harmony export */   "ViewGridIcon": () => (/* reexport safe */ _ViewGridIcon_js__WEBPACK_IMPORTED_MODULE_221__["default"]),
/* harmony export */   "ViewListIcon": () => (/* reexport safe */ _ViewListIcon_js__WEBPACK_IMPORTED_MODULE_222__["default"]),
/* harmony export */   "VolumeOffIcon": () => (/* reexport safe */ _VolumeOffIcon_js__WEBPACK_IMPORTED_MODULE_223__["default"]),
/* harmony export */   "VolumeUpIcon": () => (/* reexport safe */ _VolumeUpIcon_js__WEBPACK_IMPORTED_MODULE_224__["default"]),
/* harmony export */   "WifiIcon": () => (/* reexport safe */ _WifiIcon_js__WEBPACK_IMPORTED_MODULE_225__["default"]),
/* harmony export */   "XCircleIcon": () => (/* reexport safe */ _XCircleIcon_js__WEBPACK_IMPORTED_MODULE_226__["default"]),
/* harmony export */   "XIcon": () => (/* reexport safe */ _XIcon_js__WEBPACK_IMPORTED_MODULE_227__["default"]),
/* harmony export */   "ZoomInIcon": () => (/* reexport safe */ _ZoomInIcon_js__WEBPACK_IMPORTED_MODULE_228__["default"]),
/* harmony export */   "ZoomOutIcon": () => (/* reexport safe */ _ZoomOutIcon_js__WEBPACK_IMPORTED_MODULE_229__["default"])
/* harmony export */ });
/* harmony import */ var _AcademicCapIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AcademicCapIcon.js */ "./node_modules/@heroicons/react/solid/esm/AcademicCapIcon.js");
/* harmony import */ var _AdjustmentsIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdjustmentsIcon.js */ "./node_modules/@heroicons/react/solid/esm/AdjustmentsIcon.js");
/* harmony import */ var _AnnotationIcon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationIcon.js */ "./node_modules/@heroicons/react/solid/esm/AnnotationIcon.js");
/* harmony import */ var _ArchiveIcon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArchiveIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArchiveIcon.js");
/* harmony import */ var _ArrowCircleDownIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArrowCircleDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowCircleDownIcon.js");
/* harmony import */ var _ArrowCircleLeftIcon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ArrowCircleLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowCircleLeftIcon.js");
/* harmony import */ var _ArrowCircleRightIcon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ArrowCircleRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowCircleRightIcon.js");
/* harmony import */ var _ArrowCircleUpIcon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ArrowCircleUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowCircleUpIcon.js");
/* harmony import */ var _ArrowDownIcon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ArrowDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowDownIcon.js");
/* harmony import */ var _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ArrowLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowLeftIcon.js");
/* harmony import */ var _ArrowNarrowDownIcon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ArrowNarrowDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowDownIcon.js");
/* harmony import */ var _ArrowNarrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ArrowNarrowLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowLeftIcon.js");
/* harmony import */ var _ArrowNarrowRightIcon_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ArrowNarrowRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowRightIcon.js");
/* harmony import */ var _ArrowNarrowUpIcon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ArrowNarrowUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowUpIcon.js");
/* harmony import */ var _ArrowRightIcon_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ArrowRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowRightIcon.js");
/* harmony import */ var _ArrowSmDownIcon_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ArrowSmDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowSmDownIcon.js");
/* harmony import */ var _ArrowSmLeftIcon_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ArrowSmLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowSmLeftIcon.js");
/* harmony import */ var _ArrowSmRightIcon_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ArrowSmRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowSmRightIcon.js");
/* harmony import */ var _ArrowSmUpIcon_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ArrowSmUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowSmUpIcon.js");
/* harmony import */ var _ArrowUpIcon_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ArrowUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowUpIcon.js");
/* harmony import */ var _ArrowsExpandIcon_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ArrowsExpandIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowsExpandIcon.js");
/* harmony import */ var _AtSymbolIcon_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AtSymbolIcon.js */ "./node_modules/@heroicons/react/solid/esm/AtSymbolIcon.js");
/* harmony import */ var _BackspaceIcon_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./BackspaceIcon.js */ "./node_modules/@heroicons/react/solid/esm/BackspaceIcon.js");
/* harmony import */ var _BadgeCheckIcon_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./BadgeCheckIcon.js */ "./node_modules/@heroicons/react/solid/esm/BadgeCheckIcon.js");
/* harmony import */ var _BanIcon_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./BanIcon.js */ "./node_modules/@heroicons/react/solid/esm/BanIcon.js");
/* harmony import */ var _BeakerIcon_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./BeakerIcon.js */ "./node_modules/@heroicons/react/solid/esm/BeakerIcon.js");
/* harmony import */ var _BellIcon_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./BellIcon.js */ "./node_modules/@heroicons/react/solid/esm/BellIcon.js");
/* harmony import */ var _BookOpenIcon_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./BookOpenIcon.js */ "./node_modules/@heroicons/react/solid/esm/BookOpenIcon.js");
/* harmony import */ var _BookmarkAltIcon_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./BookmarkAltIcon.js */ "./node_modules/@heroicons/react/solid/esm/BookmarkAltIcon.js");
/* harmony import */ var _BookmarkIcon_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./BookmarkIcon.js */ "./node_modules/@heroicons/react/solid/esm/BookmarkIcon.js");
/* harmony import */ var _BriefcaseIcon_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./BriefcaseIcon.js */ "./node_modules/@heroicons/react/solid/esm/BriefcaseIcon.js");
/* harmony import */ var _CakeIcon_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./CakeIcon.js */ "./node_modules/@heroicons/react/solid/esm/CakeIcon.js");
/* harmony import */ var _CalculatorIcon_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./CalculatorIcon.js */ "./node_modules/@heroicons/react/solid/esm/CalculatorIcon.js");
/* harmony import */ var _CalendarIcon_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./CalendarIcon.js */ "./node_modules/@heroicons/react/solid/esm/CalendarIcon.js");
/* harmony import */ var _CameraIcon_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./CameraIcon.js */ "./node_modules/@heroicons/react/solid/esm/CameraIcon.js");
/* harmony import */ var _CashIcon_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./CashIcon.js */ "./node_modules/@heroicons/react/solid/esm/CashIcon.js");
/* harmony import */ var _ChartBarIcon_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ChartBarIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChartBarIcon.js");
/* harmony import */ var _ChartPieIcon_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ChartPieIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChartPieIcon.js");
/* harmony import */ var _ChartSquareBarIcon_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ChartSquareBarIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChartSquareBarIcon.js");
/* harmony import */ var _ChatAlt2Icon_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ChatAlt2Icon.js */ "./node_modules/@heroicons/react/solid/esm/ChatAlt2Icon.js");
/* harmony import */ var _ChatAltIcon_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ChatAltIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChatAltIcon.js");
/* harmony import */ var _ChatIcon_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ChatIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChatIcon.js");
/* harmony import */ var _CheckCircleIcon_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./CheckCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js");
/* harmony import */ var _CheckIcon_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./CheckIcon.js */ "./node_modules/@heroicons/react/solid/esm/CheckIcon.js");
/* harmony import */ var _ChevronDoubleDownIcon_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ChevronDoubleDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleDownIcon.js");
/* harmony import */ var _ChevronDoubleLeftIcon_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ChevronDoubleLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleLeftIcon.js");
/* harmony import */ var _ChevronDoubleRightIcon_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ChevronDoubleRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleRightIcon.js");
/* harmony import */ var _ChevronDoubleUpIcon_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ChevronDoubleUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleUpIcon.js");
/* harmony import */ var _ChevronDownIcon_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ChevronDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDownIcon.js");
/* harmony import */ var _ChevronLeftIcon_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ChevronLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronLeftIcon.js");
/* harmony import */ var _ChevronRightIcon_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ChevronRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronRightIcon.js");
/* harmony import */ var _ChevronUpIcon_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./ChevronUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronUpIcon.js");
/* harmony import */ var _ChipIcon_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./ChipIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChipIcon.js");
/* harmony import */ var _ClipboardCheckIcon_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./ClipboardCheckIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClipboardCheckIcon.js");
/* harmony import */ var _ClipboardCopyIcon_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./ClipboardCopyIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClipboardCopyIcon.js");
/* harmony import */ var _ClipboardListIcon_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./ClipboardListIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClipboardListIcon.js");
/* harmony import */ var _ClipboardIcon_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./ClipboardIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClipboardIcon.js");
/* harmony import */ var _ClockIcon_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./ClockIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClockIcon.js");
/* harmony import */ var _CloudDownloadIcon_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./CloudDownloadIcon.js */ "./node_modules/@heroicons/react/solid/esm/CloudDownloadIcon.js");
/* harmony import */ var _CloudUploadIcon_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./CloudUploadIcon.js */ "./node_modules/@heroicons/react/solid/esm/CloudUploadIcon.js");
/* harmony import */ var _CloudIcon_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./CloudIcon.js */ "./node_modules/@heroicons/react/solid/esm/CloudIcon.js");
/* harmony import */ var _CodeIcon_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./CodeIcon.js */ "./node_modules/@heroicons/react/solid/esm/CodeIcon.js");
/* harmony import */ var _CogIcon_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./CogIcon.js */ "./node_modules/@heroicons/react/solid/esm/CogIcon.js");
/* harmony import */ var _CollectionIcon_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./CollectionIcon.js */ "./node_modules/@heroicons/react/solid/esm/CollectionIcon.js");
/* harmony import */ var _ColorSwatchIcon_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./ColorSwatchIcon.js */ "./node_modules/@heroicons/react/solid/esm/ColorSwatchIcon.js");
/* harmony import */ var _CreditCardIcon_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./CreditCardIcon.js */ "./node_modules/@heroicons/react/solid/esm/CreditCardIcon.js");
/* harmony import */ var _CubeTransparentIcon_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./CubeTransparentIcon.js */ "./node_modules/@heroicons/react/solid/esm/CubeTransparentIcon.js");
/* harmony import */ var _CubeIcon_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./CubeIcon.js */ "./node_modules/@heroicons/react/solid/esm/CubeIcon.js");
/* harmony import */ var _CurrencyBangladeshiIcon_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./CurrencyBangladeshiIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyBangladeshiIcon.js");
/* harmony import */ var _CurrencyDollarIcon_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./CurrencyDollarIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyDollarIcon.js");
/* harmony import */ var _CurrencyEuroIcon_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./CurrencyEuroIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyEuroIcon.js");
/* harmony import */ var _CurrencyPoundIcon_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./CurrencyPoundIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyPoundIcon.js");
/* harmony import */ var _CurrencyRupeeIcon_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./CurrencyRupeeIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyRupeeIcon.js");
/* harmony import */ var _CurrencyYenIcon_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./CurrencyYenIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyYenIcon.js");
/* harmony import */ var _CursorClickIcon_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./CursorClickIcon.js */ "./node_modules/@heroicons/react/solid/esm/CursorClickIcon.js");
/* harmony import */ var _DatabaseIcon_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./DatabaseIcon.js */ "./node_modules/@heroicons/react/solid/esm/DatabaseIcon.js");
/* harmony import */ var _DesktopComputerIcon_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./DesktopComputerIcon.js */ "./node_modules/@heroicons/react/solid/esm/DesktopComputerIcon.js");
/* harmony import */ var _DeviceMobileIcon_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./DeviceMobileIcon.js */ "./node_modules/@heroicons/react/solid/esm/DeviceMobileIcon.js");
/* harmony import */ var _DeviceTabletIcon_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./DeviceTabletIcon.js */ "./node_modules/@heroicons/react/solid/esm/DeviceTabletIcon.js");
/* harmony import */ var _DocumentAddIcon_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./DocumentAddIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentAddIcon.js");
/* harmony import */ var _DocumentDownloadIcon_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./DocumentDownloadIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentDownloadIcon.js");
/* harmony import */ var _DocumentDuplicateIcon_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./DocumentDuplicateIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentDuplicateIcon.js");
/* harmony import */ var _DocumentRemoveIcon_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./DocumentRemoveIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentRemoveIcon.js");
/* harmony import */ var _DocumentReportIcon_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./DocumentReportIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentReportIcon.js");
/* harmony import */ var _DocumentSearchIcon_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./DocumentSearchIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentSearchIcon.js");
/* harmony import */ var _DocumentTextIcon_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./DocumentTextIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentTextIcon.js");
/* harmony import */ var _DocumentIcon_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./DocumentIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentIcon.js");
/* harmony import */ var _DotsCircleHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./DotsCircleHorizontalIcon.js */ "./node_modules/@heroicons/react/solid/esm/DotsCircleHorizontalIcon.js");
/* harmony import */ var _DotsHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./DotsHorizontalIcon.js */ "./node_modules/@heroicons/react/solid/esm/DotsHorizontalIcon.js");
/* harmony import */ var _DotsVerticalIcon_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./DotsVerticalIcon.js */ "./node_modules/@heroicons/react/solid/esm/DotsVerticalIcon.js");
/* harmony import */ var _DownloadIcon_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./DownloadIcon.js */ "./node_modules/@heroicons/react/solid/esm/DownloadIcon.js");
/* harmony import */ var _DuplicateIcon_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./DuplicateIcon.js */ "./node_modules/@heroicons/react/solid/esm/DuplicateIcon.js");
/* harmony import */ var _EmojiHappyIcon_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./EmojiHappyIcon.js */ "./node_modules/@heroicons/react/solid/esm/EmojiHappyIcon.js");
/* harmony import */ var _EmojiSadIcon_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./EmojiSadIcon.js */ "./node_modules/@heroicons/react/solid/esm/EmojiSadIcon.js");
/* harmony import */ var _ExclamationCircleIcon_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./ExclamationCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/ExclamationCircleIcon.js");
/* harmony import */ var _ExclamationIcon_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./ExclamationIcon.js */ "./node_modules/@heroicons/react/solid/esm/ExclamationIcon.js");
/* harmony import */ var _ExternalLinkIcon_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./ExternalLinkIcon.js */ "./node_modules/@heroicons/react/solid/esm/ExternalLinkIcon.js");
/* harmony import */ var _EyeOffIcon_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./EyeOffIcon.js */ "./node_modules/@heroicons/react/solid/esm/EyeOffIcon.js");
/* harmony import */ var _EyeIcon_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./EyeIcon.js */ "./node_modules/@heroicons/react/solid/esm/EyeIcon.js");
/* harmony import */ var _FastForwardIcon_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./FastForwardIcon.js */ "./node_modules/@heroicons/react/solid/esm/FastForwardIcon.js");
/* harmony import */ var _FilmIcon_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./FilmIcon.js */ "./node_modules/@heroicons/react/solid/esm/FilmIcon.js");
/* harmony import */ var _FilterIcon_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./FilterIcon.js */ "./node_modules/@heroicons/react/solid/esm/FilterIcon.js");
/* harmony import */ var _FingerPrintIcon_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./FingerPrintIcon.js */ "./node_modules/@heroicons/react/solid/esm/FingerPrintIcon.js");
/* harmony import */ var _FireIcon_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./FireIcon.js */ "./node_modules/@heroicons/react/solid/esm/FireIcon.js");
/* harmony import */ var _FlagIcon_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./FlagIcon.js */ "./node_modules/@heroicons/react/solid/esm/FlagIcon.js");
/* harmony import */ var _FolderAddIcon_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./FolderAddIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderAddIcon.js");
/* harmony import */ var _FolderDownloadIcon_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./FolderDownloadIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderDownloadIcon.js");
/* harmony import */ var _FolderOpenIcon_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./FolderOpenIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderOpenIcon.js");
/* harmony import */ var _FolderRemoveIcon_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./FolderRemoveIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderRemoveIcon.js");
/* harmony import */ var _FolderIcon_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./FolderIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderIcon.js");
/* harmony import */ var _GiftIcon_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./GiftIcon.js */ "./node_modules/@heroicons/react/solid/esm/GiftIcon.js");
/* harmony import */ var _GlobeAltIcon_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./GlobeAltIcon.js */ "./node_modules/@heroicons/react/solid/esm/GlobeAltIcon.js");
/* harmony import */ var _GlobeIcon_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./GlobeIcon.js */ "./node_modules/@heroicons/react/solid/esm/GlobeIcon.js");
/* harmony import */ var _HandIcon_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./HandIcon.js */ "./node_modules/@heroicons/react/solid/esm/HandIcon.js");
/* harmony import */ var _HashtagIcon_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./HashtagIcon.js */ "./node_modules/@heroicons/react/solid/esm/HashtagIcon.js");
/* harmony import */ var _HeartIcon_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./HeartIcon.js */ "./node_modules/@heroicons/react/solid/esm/HeartIcon.js");
/* harmony import */ var _HomeIcon_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./HomeIcon.js */ "./node_modules/@heroicons/react/solid/esm/HomeIcon.js");
/* harmony import */ var _IdentificationIcon_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./IdentificationIcon.js */ "./node_modules/@heroicons/react/solid/esm/IdentificationIcon.js");
/* harmony import */ var _InboxInIcon_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./InboxInIcon.js */ "./node_modules/@heroicons/react/solid/esm/InboxInIcon.js");
/* harmony import */ var _InboxIcon_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./InboxIcon.js */ "./node_modules/@heroicons/react/solid/esm/InboxIcon.js");
/* harmony import */ var _InformationCircleIcon_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./InformationCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/InformationCircleIcon.js");
/* harmony import */ var _KeyIcon_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./KeyIcon.js */ "./node_modules/@heroicons/react/solid/esm/KeyIcon.js");
/* harmony import */ var _LibraryIcon_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./LibraryIcon.js */ "./node_modules/@heroicons/react/solid/esm/LibraryIcon.js");
/* harmony import */ var _LightBulbIcon_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./LightBulbIcon.js */ "./node_modules/@heroicons/react/solid/esm/LightBulbIcon.js");
/* harmony import */ var _LightningBoltIcon_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./LightningBoltIcon.js */ "./node_modules/@heroicons/react/solid/esm/LightningBoltIcon.js");
/* harmony import */ var _LinkIcon_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./LinkIcon.js */ "./node_modules/@heroicons/react/solid/esm/LinkIcon.js");
/* harmony import */ var _LocationMarkerIcon_js__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./LocationMarkerIcon.js */ "./node_modules/@heroicons/react/solid/esm/LocationMarkerIcon.js");
/* harmony import */ var _LockClosedIcon_js__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./LockClosedIcon.js */ "./node_modules/@heroicons/react/solid/esm/LockClosedIcon.js");
/* harmony import */ var _LockOpenIcon_js__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./LockOpenIcon.js */ "./node_modules/@heroicons/react/solid/esm/LockOpenIcon.js");
/* harmony import */ var _LoginIcon_js__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./LoginIcon.js */ "./node_modules/@heroicons/react/solid/esm/LoginIcon.js");
/* harmony import */ var _LogoutIcon_js__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./LogoutIcon.js */ "./node_modules/@heroicons/react/solid/esm/LogoutIcon.js");
/* harmony import */ var _MailOpenIcon_js__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./MailOpenIcon.js */ "./node_modules/@heroicons/react/solid/esm/MailOpenIcon.js");
/* harmony import */ var _MailIcon_js__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./MailIcon.js */ "./node_modules/@heroicons/react/solid/esm/MailIcon.js");
/* harmony import */ var _MapIcon_js__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./MapIcon.js */ "./node_modules/@heroicons/react/solid/esm/MapIcon.js");
/* harmony import */ var _MenuAlt1Icon_js__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./MenuAlt1Icon.js */ "./node_modules/@heroicons/react/solid/esm/MenuAlt1Icon.js");
/* harmony import */ var _MenuAlt2Icon_js__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./MenuAlt2Icon.js */ "./node_modules/@heroicons/react/solid/esm/MenuAlt2Icon.js");
/* harmony import */ var _MenuAlt3Icon_js__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./MenuAlt3Icon.js */ "./node_modules/@heroicons/react/solid/esm/MenuAlt3Icon.js");
/* harmony import */ var _MenuAlt4Icon_js__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./MenuAlt4Icon.js */ "./node_modules/@heroicons/react/solid/esm/MenuAlt4Icon.js");
/* harmony import */ var _MenuIcon_js__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./MenuIcon.js */ "./node_modules/@heroicons/react/solid/esm/MenuIcon.js");
/* harmony import */ var _MicrophoneIcon_js__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./MicrophoneIcon.js */ "./node_modules/@heroicons/react/solid/esm/MicrophoneIcon.js");
/* harmony import */ var _MinusCircleIcon_js__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./MinusCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/MinusCircleIcon.js");
/* harmony import */ var _MinusSmIcon_js__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./MinusSmIcon.js */ "./node_modules/@heroicons/react/solid/esm/MinusSmIcon.js");
/* harmony import */ var _MinusIcon_js__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./MinusIcon.js */ "./node_modules/@heroicons/react/solid/esm/MinusIcon.js");
/* harmony import */ var _MoonIcon_js__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./MoonIcon.js */ "./node_modules/@heroicons/react/solid/esm/MoonIcon.js");
/* harmony import */ var _MusicNoteIcon_js__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./MusicNoteIcon.js */ "./node_modules/@heroicons/react/solid/esm/MusicNoteIcon.js");
/* harmony import */ var _NewspaperIcon_js__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./NewspaperIcon.js */ "./node_modules/@heroicons/react/solid/esm/NewspaperIcon.js");
/* harmony import */ var _OfficeBuildingIcon_js__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./OfficeBuildingIcon.js */ "./node_modules/@heroicons/react/solid/esm/OfficeBuildingIcon.js");
/* harmony import */ var _PaperAirplaneIcon_js__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./PaperAirplaneIcon.js */ "./node_modules/@heroicons/react/solid/esm/PaperAirplaneIcon.js");
/* harmony import */ var _PaperClipIcon_js__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./PaperClipIcon.js */ "./node_modules/@heroicons/react/solid/esm/PaperClipIcon.js");
/* harmony import */ var _PauseIcon_js__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./PauseIcon.js */ "./node_modules/@heroicons/react/solid/esm/PauseIcon.js");
/* harmony import */ var _PencilAltIcon_js__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./PencilAltIcon.js */ "./node_modules/@heroicons/react/solid/esm/PencilAltIcon.js");
/* harmony import */ var _PencilIcon_js__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./PencilIcon.js */ "./node_modules/@heroicons/react/solid/esm/PencilIcon.js");
/* harmony import */ var _PhoneIncomingIcon_js__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./PhoneIncomingIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhoneIncomingIcon.js");
/* harmony import */ var _PhoneMissedCallIcon_js__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./PhoneMissedCallIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhoneMissedCallIcon.js");
/* harmony import */ var _PhoneOutgoingIcon_js__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./PhoneOutgoingIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhoneOutgoingIcon.js");
/* harmony import */ var _PhoneIcon_js__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./PhoneIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhoneIcon.js");
/* harmony import */ var _PhotographIcon_js__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./PhotographIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhotographIcon.js");
/* harmony import */ var _PlayIcon_js__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./PlayIcon.js */ "./node_modules/@heroicons/react/solid/esm/PlayIcon.js");
/* harmony import */ var _PlusCircleIcon_js__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./PlusCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/PlusCircleIcon.js");
/* harmony import */ var _PlusSmIcon_js__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./PlusSmIcon.js */ "./node_modules/@heroicons/react/solid/esm/PlusSmIcon.js");
/* harmony import */ var _PlusIcon_js__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./PlusIcon.js */ "./node_modules/@heroicons/react/solid/esm/PlusIcon.js");
/* harmony import */ var _PresentationChartBarIcon_js__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./PresentationChartBarIcon.js */ "./node_modules/@heroicons/react/solid/esm/PresentationChartBarIcon.js");
/* harmony import */ var _PresentationChartLineIcon_js__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./PresentationChartLineIcon.js */ "./node_modules/@heroicons/react/solid/esm/PresentationChartLineIcon.js");
/* harmony import */ var _PrinterIcon_js__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./PrinterIcon.js */ "./node_modules/@heroicons/react/solid/esm/PrinterIcon.js");
/* harmony import */ var _PuzzleIcon_js__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./PuzzleIcon.js */ "./node_modules/@heroicons/react/solid/esm/PuzzleIcon.js");
/* harmony import */ var _QrcodeIcon_js__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./QrcodeIcon.js */ "./node_modules/@heroicons/react/solid/esm/QrcodeIcon.js");
/* harmony import */ var _QuestionMarkCircleIcon_js__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./QuestionMarkCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/QuestionMarkCircleIcon.js");
/* harmony import */ var _ReceiptRefundIcon_js__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./ReceiptRefundIcon.js */ "./node_modules/@heroicons/react/solid/esm/ReceiptRefundIcon.js");
/* harmony import */ var _ReceiptTaxIcon_js__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./ReceiptTaxIcon.js */ "./node_modules/@heroicons/react/solid/esm/ReceiptTaxIcon.js");
/* harmony import */ var _RefreshIcon_js__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./RefreshIcon.js */ "./node_modules/@heroicons/react/solid/esm/RefreshIcon.js");
/* harmony import */ var _ReplyIcon_js__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./ReplyIcon.js */ "./node_modules/@heroicons/react/solid/esm/ReplyIcon.js");
/* harmony import */ var _RewindIcon_js__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./RewindIcon.js */ "./node_modules/@heroicons/react/solid/esm/RewindIcon.js");
/* harmony import */ var _RssIcon_js__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./RssIcon.js */ "./node_modules/@heroicons/react/solid/esm/RssIcon.js");
/* harmony import */ var _SaveAsIcon_js__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./SaveAsIcon.js */ "./node_modules/@heroicons/react/solid/esm/SaveAsIcon.js");
/* harmony import */ var _SaveIcon_js__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./SaveIcon.js */ "./node_modules/@heroicons/react/solid/esm/SaveIcon.js");
/* harmony import */ var _ScaleIcon_js__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./ScaleIcon.js */ "./node_modules/@heroicons/react/solid/esm/ScaleIcon.js");
/* harmony import */ var _ScissorsIcon_js__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./ScissorsIcon.js */ "./node_modules/@heroicons/react/solid/esm/ScissorsIcon.js");
/* harmony import */ var _SearchCircleIcon_js__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./SearchCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/SearchCircleIcon.js");
/* harmony import */ var _SearchIcon_js__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./SearchIcon.js */ "./node_modules/@heroicons/react/solid/esm/SearchIcon.js");
/* harmony import */ var _SelectorIcon_js__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./SelectorIcon.js */ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js");
/* harmony import */ var _ServerIcon_js__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./ServerIcon.js */ "./node_modules/@heroicons/react/solid/esm/ServerIcon.js");
/* harmony import */ var _ShareIcon_js__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./ShareIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShareIcon.js");
/* harmony import */ var _ShieldCheckIcon_js__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./ShieldCheckIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShieldCheckIcon.js");
/* harmony import */ var _ShieldExclamationIcon_js__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./ShieldExclamationIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShieldExclamationIcon.js");
/* harmony import */ var _ShoppingBagIcon_js__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./ShoppingBagIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShoppingBagIcon.js");
/* harmony import */ var _ShoppingCartIcon_js__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./ShoppingCartIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShoppingCartIcon.js");
/* harmony import */ var _SortAscendingIcon_js__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./SortAscendingIcon.js */ "./node_modules/@heroicons/react/solid/esm/SortAscendingIcon.js");
/* harmony import */ var _SortDescendingIcon_js__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./SortDescendingIcon.js */ "./node_modules/@heroicons/react/solid/esm/SortDescendingIcon.js");
/* harmony import */ var _SparklesIcon_js__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./SparklesIcon.js */ "./node_modules/@heroicons/react/solid/esm/SparklesIcon.js");
/* harmony import */ var _SpeakerphoneIcon_js__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./SpeakerphoneIcon.js */ "./node_modules/@heroicons/react/solid/esm/SpeakerphoneIcon.js");
/* harmony import */ var _StarIcon_js__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./StarIcon.js */ "./node_modules/@heroicons/react/solid/esm/StarIcon.js");
/* harmony import */ var _StatusOfflineIcon_js__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./StatusOfflineIcon.js */ "./node_modules/@heroicons/react/solid/esm/StatusOfflineIcon.js");
/* harmony import */ var _StatusOnlineIcon_js__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./StatusOnlineIcon.js */ "./node_modules/@heroicons/react/solid/esm/StatusOnlineIcon.js");
/* harmony import */ var _StopIcon_js__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./StopIcon.js */ "./node_modules/@heroicons/react/solid/esm/StopIcon.js");
/* harmony import */ var _SunIcon_js__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./SunIcon.js */ "./node_modules/@heroicons/react/solid/esm/SunIcon.js");
/* harmony import */ var _SupportIcon_js__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./SupportIcon.js */ "./node_modules/@heroicons/react/solid/esm/SupportIcon.js");
/* harmony import */ var _SwitchHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./SwitchHorizontalIcon.js */ "./node_modules/@heroicons/react/solid/esm/SwitchHorizontalIcon.js");
/* harmony import */ var _SwitchVerticalIcon_js__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./SwitchVerticalIcon.js */ "./node_modules/@heroicons/react/solid/esm/SwitchVerticalIcon.js");
/* harmony import */ var _TableIcon_js__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./TableIcon.js */ "./node_modules/@heroicons/react/solid/esm/TableIcon.js");
/* harmony import */ var _TagIcon_js__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./TagIcon.js */ "./node_modules/@heroicons/react/solid/esm/TagIcon.js");
/* harmony import */ var _TemplateIcon_js__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./TemplateIcon.js */ "./node_modules/@heroicons/react/solid/esm/TemplateIcon.js");
/* harmony import */ var _TerminalIcon_js__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./TerminalIcon.js */ "./node_modules/@heroicons/react/solid/esm/TerminalIcon.js");
/* harmony import */ var _ThumbDownIcon_js__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./ThumbDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ThumbDownIcon.js");
/* harmony import */ var _ThumbUpIcon_js__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./ThumbUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ThumbUpIcon.js");
/* harmony import */ var _TicketIcon_js__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./TicketIcon.js */ "./node_modules/@heroicons/react/solid/esm/TicketIcon.js");
/* harmony import */ var _TranslateIcon_js__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./TranslateIcon.js */ "./node_modules/@heroicons/react/solid/esm/TranslateIcon.js");
/* harmony import */ var _TrashIcon_js__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./TrashIcon.js */ "./node_modules/@heroicons/react/solid/esm/TrashIcon.js");
/* harmony import */ var _TrendingDownIcon_js__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./TrendingDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/TrendingDownIcon.js");
/* harmony import */ var _TrendingUpIcon_js__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./TrendingUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/TrendingUpIcon.js");
/* harmony import */ var _TruckIcon_js__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./TruckIcon.js */ "./node_modules/@heroicons/react/solid/esm/TruckIcon.js");
/* harmony import */ var _UploadIcon_js__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./UploadIcon.js */ "./node_modules/@heroicons/react/solid/esm/UploadIcon.js");
/* harmony import */ var _UserAddIcon_js__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ./UserAddIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserAddIcon.js");
/* harmony import */ var _UserCircleIcon_js__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ./UserCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserCircleIcon.js");
/* harmony import */ var _UserGroupIcon_js__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ./UserGroupIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserGroupIcon.js");
/* harmony import */ var _UserRemoveIcon_js__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! ./UserRemoveIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserRemoveIcon.js");
/* harmony import */ var _UserIcon_js__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! ./UserIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserIcon.js");
/* harmony import */ var _UsersIcon_js__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! ./UsersIcon.js */ "./node_modules/@heroicons/react/solid/esm/UsersIcon.js");
/* harmony import */ var _VariableIcon_js__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! ./VariableIcon.js */ "./node_modules/@heroicons/react/solid/esm/VariableIcon.js");
/* harmony import */ var _VideoCameraIcon_js__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! ./VideoCameraIcon.js */ "./node_modules/@heroicons/react/solid/esm/VideoCameraIcon.js");
/* harmony import */ var _ViewBoardsIcon_js__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! ./ViewBoardsIcon.js */ "./node_modules/@heroicons/react/solid/esm/ViewBoardsIcon.js");
/* harmony import */ var _ViewGridAddIcon_js__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! ./ViewGridAddIcon.js */ "./node_modules/@heroicons/react/solid/esm/ViewGridAddIcon.js");
/* harmony import */ var _ViewGridIcon_js__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! ./ViewGridIcon.js */ "./node_modules/@heroicons/react/solid/esm/ViewGridIcon.js");
/* harmony import */ var _ViewListIcon_js__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! ./ViewListIcon.js */ "./node_modules/@heroicons/react/solid/esm/ViewListIcon.js");
/* harmony import */ var _VolumeOffIcon_js__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! ./VolumeOffIcon.js */ "./node_modules/@heroicons/react/solid/esm/VolumeOffIcon.js");
/* harmony import */ var _VolumeUpIcon_js__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! ./VolumeUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/VolumeUpIcon.js");
/* harmony import */ var _WifiIcon_js__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! ./WifiIcon.js */ "./node_modules/@heroicons/react/solid/esm/WifiIcon.js");
/* harmony import */ var _XCircleIcon_js__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! ./XCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/XCircleIcon.js");
/* harmony import */ var _XIcon_js__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! ./XIcon.js */ "./node_modules/@heroicons/react/solid/esm/XIcon.js");
/* harmony import */ var _ZoomInIcon_js__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! ./ZoomInIcon.js */ "./node_modules/@heroicons/react/solid/esm/ZoomInIcon.js");
/* harmony import */ var _ZoomOutIcon_js__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! ./ZoomOutIcon.js */ "./node_modules/@heroicons/react/solid/esm/ZoomOutIcon.js");







































































































































































































































/***/ })

}]);