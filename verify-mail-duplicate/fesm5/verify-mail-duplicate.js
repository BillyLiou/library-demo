import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/mailModel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MailModel = /** @class */ (function () {
    function MailModel() {
        this.mail = new Array();
        this.mail.push('billy@test');
        this.mail.push('billy2@test');
    }
    return MailModel;
}());
if (false) {
    /** @type {?} */
    MailModel.prototype.mail;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/verify-mail-duplicate.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VerifyMailDuplicateService = /** @class */ (function () {
    function VerifyMailDuplicateService(mailModel) {
        this.mailModel = mailModel;
    }
    /**
     * 此用來判斷是否有重複的信箱,若回傳物件的result為true,則此信箱為允許申請,
     * 回傳物件為 {result: boolean , color: string}
     * @param mail 輸入信箱的參數
     */
    /**
     * 此用來判斷是否有重複的信箱,若回傳物件的result為true,則此信箱為允許申請,
     * 回傳物件為 {result: boolean , color: string}
     * @param {?} mail 輸入信箱的參數
     * @return {?}
     */
    VerifyMailDuplicateService.prototype.verifyMail = /**
     * 此用來判斷是否有重複的信箱,若回傳物件的result為true,則此信箱為允許申請,
     * 回傳物件為 {result: boolean , color: string}
     * @param {?} mail 輸入信箱的參數
     * @return {?}
     */
    function (mail) {
        var _this = this;
        this.judge = true;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.mailModel.mail.forEach((/**
             * @param {?} m
             * @return {?}
             */
            function (m) {
                console.log(m);
                if (mail.trim().length === 0) {
                    console.log('此輸入信箱為空值');
                    reject({
                        result: false,
                        color: 'red'
                    });
                    return;
                }
                if (m !== mail) {
                    console.log('此輸入信箱無重複');
                    _this.judge = true;
                }
                else {
                    console.log('此輸入信箱有重複');
                    _this.judge = false;
                    resolve({
                        result: false,
                        color: 'red'
                    });
                }
            }));
            if (_this.judge) {
                resolve({
                    result: true,
                    color: 'green'
                });
            }
            else {
                resolve({
                    result: false,
                    color: 'red'
                });
            }
        }));
    };
    VerifyMailDuplicateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    VerifyMailDuplicateService.ctorParameters = function () { return [
        { type: MailModel }
    ]; };
    /** @nocollapse */ VerifyMailDuplicateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function VerifyMailDuplicateService_Factory() { return new VerifyMailDuplicateService(ɵɵinject(MailModel)); }, token: VerifyMailDuplicateService, providedIn: "root" });
    return VerifyMailDuplicateService;
}());
if (false) {
    /** @type {?} */
    VerifyMailDuplicateService.prototype.judge;
    /**
     * @type {?}
     * @private
     */
    VerifyMailDuplicateService.prototype.mailModel;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/verify-mail-duplicate.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VerifyMailDuplicateModule = /** @class */ (function () {
    function VerifyMailDuplicateModule() {
    }
    VerifyMailDuplicateModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                    providers: [MailModel]
                },] }
    ];
    return VerifyMailDuplicateModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: verify-mail-duplicate.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VerifyMailDuplicateModule, VerifyMailDuplicateService, MailModel as ɵa };
//# sourceMappingURL=verify-mail-duplicate.js.map
