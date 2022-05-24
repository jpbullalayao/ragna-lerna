"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Link_1 = require("./Link");
exports.default = {
    title: 'Link',
    component: Link_1.Link,
};
const Primary = () => (react_1.default.createElement(Link_1.Link, { href: "https://twitch.tv/professorragna" }, "This is a link"));
exports.Primary = Primary;
//# sourceMappingURL=Link.stories.js.map