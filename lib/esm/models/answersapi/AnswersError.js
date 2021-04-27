var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Represents an error
 *
 * @remarks
 * If the error originates from the Answer API, the code and type property will be present.
 *
 * @public
 */
var AnswersError = /** @class */ (function (_super) {
    __extends(AnswersError, _super);
    /** @internal */
    function AnswersError(message, code, type) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = code;
        _this.type = type;
        return _this;
    }
    return AnswersError;
}(Error));
export { AnswersError };
//# sourceMappingURL=AnswersError.js.map