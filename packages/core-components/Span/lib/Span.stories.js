"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Span_1 = require("./Span");
exports.default = {
    title: 'Span',
    component: Span_1.Span,
};
const Primary = () => (react_1.default.createElement(Span_1.Span, null, "This is a Span"));
exports.Primary = Primary;
//# sourceMappingURL=Span.stories.js.map