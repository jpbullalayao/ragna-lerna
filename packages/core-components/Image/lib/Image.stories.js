"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Image_1 = require("./Image");
exports.default = {
    title: 'Image',
    component: Image_1.Image,
};
const Primary = () => (react_1.default.createElement(Image_1.Image, { src: "https://via.placeholder.com/500", height: "500px", width: "500px" }));
exports.Primary = Primary;
//# sourceMappingURL=Image.stories.js.map