"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const H1_1 = require("./H1");
exports.default = {
    title: 'H1',
    component: H1_1.H1,
};
const Primary = () => (react_1.default.createElement(H1_1.H1, null, "This is an H1"));
exports.Primary = Primary;
//# sourceMappingURL=H1.stories.js.map