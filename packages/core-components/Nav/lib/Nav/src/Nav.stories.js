"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Nav_1 = require("./Nav");
const List_1 = require("../../List/src/List/List");
const Li_1 = require("../../List/src/Li/Li");
exports.default = {
    title: 'Nav',
    component: Nav_1.Nav,
};
const Primary = () => (react_1.default.createElement(Nav_1.Nav, null,
    react_1.default.createElement(List_1.List, { variant: "ul" },
        react_1.default.createElement(Li_1.Li, null, "Nav Item 1"),
        react_1.default.createElement(Li_1.Li, null, "Nav Item 2"),
        react_1.default.createElement(Li_1.Li, null, "Nav Item 3"))));
exports.Primary = Primary;
//# sourceMappingURL=Nav.stories.js.map