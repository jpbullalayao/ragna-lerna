"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const H5_1 = require("./H5");
exports.default = {
    title: 'H5',
    component: H5_1.H5,
};
const Primary = () => (react_1.default.createElement(H5_1.H5, null, "This is an H5"));
exports.Primary = Primary;
//# sourceMappingURL=H5.stories.js.map