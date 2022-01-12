"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

require("./styles/Modal.css");

function Modal(props) {
  const [visible, setVisible] = (0, _react.useState)(true);

  const handleUserClick = data => {
    props.handleResponse(data);
  };

  return /*#__PURE__*/React.createElement("div", null, visible ? /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "modalText"
  }, props.message), /*#__PURE__*/React.createElement("button", {
    className: "modalButton",
    onClick: () => {
      setVisible(false);
      handleUserClick('click');
    }
  }, props.button)) : '');
}

var _default = Modal;
exports.default = _default;