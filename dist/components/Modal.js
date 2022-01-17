"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles/Modal.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @param {*} props
 * @returns {HTMLElement}
 */
function Modal(props) {
  // Set the display of the modal 
  const [toggle, setToggle] = (0, _react.useState)(true); // Pass a function as props to close the modal in the main component

  const handleUserClick = () => {
    props.handleResponse();
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: toggle ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal-bg",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "modal",
        children: [props.text, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          type: "button",
          className: "modalButton",
          onClick: () => {
            setToggle(false);
            handleUserClick();
          },
          children: "Close"
        })]
      })
    }) : ''
  });
}

Modal.propTypes = {
  text: _propTypes.default.string,
  handleResponse: _propTypes.default.func
};