"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const H3_1 = require("./H3");
exports.default = {
    title: 'H3',
    component: H3_1.H3,
};
const Primary = () => (react_1.default.createElement(H3_1.H3, null, "This is an H3"));
exports.Primary = Primary;
//# sourceMappingURL=H3.stories.js.map