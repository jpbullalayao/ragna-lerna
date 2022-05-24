"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Box_1 = require("./Box");
exports.default = {
    title: 'Box',
    component: Box_1.Box,
};
const Primary = () => (react_1.default.createElement(Box_1.Box, null, "This is a box with text in it"));
exports.Primary = Primary;
//# sourceMappingURL=Box.stories.js.map