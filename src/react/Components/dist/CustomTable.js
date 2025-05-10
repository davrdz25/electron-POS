"use strict";
exports.__esModule = true;
var CustomTable_module_css_1 = require("../Styles/CustomTable.module.css");
var CustomTable = function (_a) {
    var headers = _a.headers, data = _a.data;
    return (React.createElement("div", { className: CustomTable_module_css_1["default"].container },
        React.createElement("table", { className: CustomTable_module_css_1["default"].table },
            React.createElement("thead", null,
                React.createElement("tr", null, headers.map(function (header) { return (React.createElement("th", { className: CustomTable_module_css_1["default"].headerCell }, header)); }))),
            React.createElement("tbody", null, data.map(function (row) { return (React.createElement("tr", { key: row.entry, className: CustomTable_module_css_1["default"].tableRow },
                React.createElement("td", { className: CustomTable_module_css_1["default"].cell }, "1"),
                React.createElement("td", { className: CustomTable_module_css_1["default"].cell }, "Pantalon"),
                React.createElement("td", { className: CustomTable_module_css_1["default"].cell }, row.material),
                React.createElement("td", { className: CustomTable_module_css_1["default"].cell }, row.color),
                React.createElement("td", { className: CustomTable_module_css_1["default"].cell }, row.tone),
                React.createElement("td", { className: CustomTable_module_css_1["default"].cell }, row.price),
                React.createElement("td", { className: CustomTable_module_css_1["default"].cell }, row.total))); })))));
};
exports["default"] = CustomTable;
