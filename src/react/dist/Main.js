"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var Overlay_1 = require("./Components/Overlay");
var App_module_css_1 = require("./App.module.css");
var Modal_1 = require("./Components/Modal");
var CustomInput_1 = require("./Components/CustomInput");
var CustomButton_1 = require("./Components/CustomButton");
var ModalMessage_1 = require("./Components/ModalMessage");
var sqlConfigInitialState = {
    ServerName: '',
    UserName: '',
    Password: '',
    DatabaseName: ''
};
var messageInitialState = {
    title: '',
    description: ''
};
var Main = function () {
    var _a = react_1.useState(false), modalVisible = _a[0], setModalVisible = _a[1];
    var _b = react_1.useState(false), messageVisible = _b[0], setmessageVisible = _b[1];
    var _c = react_1.useState(''), titleMessage = _c[0], settitleMessage = _c[1];
    var _d = react_1.useState(''), descriptionMessage = _d[0], setDescriptionMessage = _d[1];
    var _e = react_1.useState('info'), typeMessage = _e[0], setTypeMessage = _e[1];
    var _f = react_1.useState(false), validConfig = _f[0], setvalidConfig = _f[1];
    var _g = react_1.useState(undefined), selected = _g[0], setSelected = _g[1];
    var options = [
        { label: 'Manzana', value: 1 },
        { label: 'Banana', value: 2 },
        { label: 'Naranja', value: 3 },
        { label: 'Uva', value: 4 }
    ];
    var _h = react_1.useState({
        ServerName: '',
        UserName: '',
        Password: '',
        DatabaseName: 'POS'
    }), sqlConfig = _h[0], setSqlConfig = _h[1];
    react_1.useEffect(function () {
        configFileExists();
    }, []);
    var validateData = function () {
        if (sqlConfig.UserName && sqlConfig.UserName && sqlConfig.Password)
            setvalidConfig(true);
        else {
            setTypeMessage('warning');
            settitleMessage('Warning');
            setDescriptionMessage('All fields must be setted');
            setmessageVisible(true);
        }
    };
    var TestSQLConnection = function () { return __awaiter(void 0, void 0, void 0, function () {
        var sqlConnected, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, window.electron.testConnection(sqlConfig)];
                case 1:
                    sqlConnected = _a.sent();
                    if (sqlConnected) {
                        setTypeMessage('success');
                        settitleMessage('Success');
                        setDescriptionMessage('Connected successfully');
                        setmessageVisible(true);
                        setTimeout(function () {
                            setModalVisible(false);
                            setSqlConfig(sqlConfigInitialState);
                            settitleMessage(messageInitialState.title);
                            setDescriptionMessage(messageInitialState.description);
                        }, 2600);
                        window.electron.createConfigFile(sqlConfig);
                    }
                    else {
                        setTypeMessage('warning');
                        settitleMessage('Warning');
                        setDescriptionMessage("Not connected");
                        setmessageVisible(true);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    setTypeMessage('error');
                    settitleMessage('Error');
                    setDescriptionMessage(String(error_1));
                    setmessageVisible(true);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var configFileExists = function () { return __awaiter(void 0, void 0, void 0, function () {
        var fileExists, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, window.electron.existsConfigFile()];
                case 1:
                    fileExists = _a.sent();
                    if (!!fileExists) return [3 /*break*/, 2];
                    setModalVisible(true);
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, window.electron.connectDatabase()];
                case 3:
                    _a.sent();
                    setTypeMessage('success');
                    settitleMessage('Success');
                    setDescriptionMessage("Connection successfull");
                    setmessageVisible(true);
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    setTypeMessage('error');
                    settitleMessage('System Exception');
                    setDescriptionMessage(String(error_2));
                    setmessageVisible(true);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: App_module_css_1["default"].mainContainer },
        React.createElement(Overlay_1["default"], { visible: modalVisible }),
        React.createElement(Modal_1["default"], { title: 'Database configuration', isVisible: modalVisible, onClose: function () {
                setModalVisible(false);
            } },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '.5rem' } },
                React.createElement(CustomInput_1["default"], { value: sqlConfig.ServerName, direction: 'row', label: 'Server name', type: 'input', onChange: function (e) {
                        setSqlConfig(__assign(__assign({}, sqlConfig), { ServerName: e }));
                    } }),
                React.createElement(CustomInput_1["default"], { value: sqlConfig.UserName, direction: 'row', label: 'User name', type: 'input', onChange: function (e) {
                        setSqlConfig(__assign(__assign({}, sqlConfig), { UserName: e }));
                    } }),
                React.createElement(CustomInput_1["default"], { value: sqlConfig.Password, direction: 'row', label: 'Password', password: true, type: 'input', onChange: function (e) {
                        setSqlConfig(__assign(__assign({}, sqlConfig), { Password: e }));
                    } }),
                React.createElement(CustomButton_1["default"], { title: 'Test connection', onPress: function () {
                        console.log("React sqlConfig", sqlConfig);
                        validateData();
                        if (validConfig)
                            TestSQLConnection();
                    }, fontColor: '#FFFFFF', bgColor: '#2D71F8' }))),
        React.createElement(ModalMessage_1["default"], { type: typeMessage, description: descriptionMessage, visible: messageVisible, title: titleMessage, duration: 2500, onClose: function () { return setmessageVisible(false); } })));
};
exports["default"] = Main;
