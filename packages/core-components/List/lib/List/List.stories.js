"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderedList = exports.UnorderedList = void 0;
const react_1 = __importDefault(require("react"));
const List_1 = require("./List");
const Li_1 = require("../Li/Li");
exports.default = {
    title: 'List',
    component: List_1.List,
};
const UnorderedList = () => (react_1.default.createElement(List_1.List, { variant: "ul" },
    react_1.default.createElement(Li_1.Li, null, "List Item 1"),
    react_1.default.createElement(Li_1.Li, null, "List Item 2"),
    react_1.default.createElement(Li_1.Li, null, "List Item 3")));
exports.UnorderedList = UnorderedList;
const OrderedList = () => (react_1.default.createElement(List_1.List, { variant: "ol" },
    react_1.default.createElement(Li_1.Li, null, "List Item 1"),
    react_1.default.createElement(Li_1.Li, null, "List Item 2"),
    react_1.default.createElement(Li_1.Li, null, "List Item 3")));
exports.OrderedList = OrderedList;
//# sourceMappingURL=List.stories.js.map