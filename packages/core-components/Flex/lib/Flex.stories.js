"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Flex_1 = require("./Flex");
exports.default = {
    title: 'Flex',
    component: Flex_1.Flex,
};
const Primary = () => (react_1.default.createElement(Flex_1.Flex, null, "This is a Flex with text in it"));
exports.Primary = Primary;
//# sourceMappingURL=Flex.stories.js.map