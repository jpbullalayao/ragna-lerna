"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const react_1 = __importDefault(require("react"));
const Ol_1 = require("../Ol/Ol");
const Ul_1 = require("../Ul/Ul");
const List = (_a) => {
    var { variant } = _a, rest = __rest(_a, ["variant"]);
    if (variant === 'ol') {
        return (react_1.default.createElement(Ol_1.Ol, Object.assign({}, rest)));
    }
    if (variant === 'ul') {
        return (react_1.default.createElement(Ul_1.Ul, Object.assign({}, rest)));
    }
};
exports.List = List;
//# sourceMappingURL=List.js.map