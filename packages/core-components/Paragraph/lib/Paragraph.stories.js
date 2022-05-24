"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Paragraph_1 = require("./Paragraph");
exports.default = {
    title: 'Paragraph',
    component: Paragraph_1.Paragraph,
};
const Primary = () => (react_1.default.createElement(Paragraph_1.Paragraph, null, "This is a Paragraph"));
exports.Primary = Primary;
//# sourceMappingURL=Paragraph.stories.js.map