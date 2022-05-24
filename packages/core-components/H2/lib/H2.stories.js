"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const H2_1 = require("./H2");
exports.default = {
    title: 'H2',
    component: H2_1.H2,
};
const Primary = () => (react_1.default.createElement(H2_1.H2, null, "This is an H2"));
exports.Primary = Primary;
//# sourceMappingURL=H2.stories.js.map