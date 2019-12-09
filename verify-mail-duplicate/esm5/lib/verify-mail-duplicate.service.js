/**
 * @fileoverview added by tsickle
 * Generated from: lib/verify-mail-duplicate.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MailModel } from './mailModel';
import * as i0 from "@angular/core";
import * as i1 from "./mailModel";
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
    /** @nocollapse */ VerifyMailDuplicateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VerifyMailDuplicateService_Factory() { return new VerifyMailDuplicateService(i0.ɵɵinject(i1.MailModel)); }, token: VerifyMailDuplicateService, providedIn: "root" });
    return VerifyMailDuplicateService;
}());
export { VerifyMailDuplicateService };
if (false) {
    /** @type {?} */
    VerifyMailDuplicateService.prototype.judge;
    /**
     * @type {?}
     * @private
     */
    VerifyMailDuplicateService.prototype.mailModel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5LW1haWwtZHVwbGljYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpZnktbWFpbC1kdXBsaWNhdGUvIiwic291cmNlcyI6WyJsaWIvdmVyaWZ5LW1haWwtZHVwbGljYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQUV4QztJQU1FLG9DQUFvQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUksQ0FBQztJQUM3Qzs7OztPQUlHOzs7Ozs7O0lBQ0gsK0NBQVU7Ozs7OztJQUFWLFVBQVcsSUFBWTtRQUF2QixpQkFxQ0M7UUFwQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxDQUFDO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQzt3QkFDTCxNQUFNLEVBQUUsS0FBSzt3QkFDYixLQUFLLEVBQUUsS0FBSztxQkFDYixDQUFDLENBQUM7b0JBQ0gsT0FBTztpQkFDUjtnQkFDRCxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7b0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDeEIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ25CO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixPQUFPLENBQUM7d0JBQ04sTUFBTSxFQUFFLEtBQUs7d0JBQ2IsS0FBSyxFQUFFLEtBQUs7cUJBQ2IsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDSCxJQUFJLEtBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDO29CQUNOLE1BQU0sRUFBRSxJQUFJO29CQUNaLEtBQUssRUFBRSxPQUFPO2lCQUNmLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQztvQkFDTixNQUFNLEVBQUUsS0FBSztvQkFDYixLQUFLLEVBQUUsS0FBSztpQkFDYixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBakRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsU0FBUzs7O3FDQURsQjtDQXFEQyxBQWxERCxJQWtEQztTQS9DWSwwQkFBMEI7OztJQUNyQywyQ0FBTTs7Ozs7SUFFTSwrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYWlsTW9kZWwgfSBmcm9tICcuL21haWxNb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFZlcmlmeU1haWxEdXBsaWNhdGVTZXJ2aWNlIHtcbiAganVkZ2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYWlsTW9kZWw6IE1haWxNb2RlbCkgeyB9XG4gIC8qKlxuICAgKiDmraTnlKjkvobliKTmlrfmmK/lkKbmnInph43opIfnmoTkv6HnrrEs6Iul5Zue5YKz54mp5Lu255qEcmVzdWx054K6dHJ1ZSzliYfmraTkv6HnrrHngrrlhYHoqLHnlLPoq4ssXG4gICAqIOWbnuWCs+eJqeS7tueCuiB7cmVzdWx0OiBib29sZWFuICwgY29sb3I6IHN0cmluZ31cbiAgICogQHBhcmFtIG1haWwg6Ly45YWl5L+h566x55qE5Y+D5pW4XG4gICAqL1xuICB2ZXJpZnlNYWlsKG1haWw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5qdWRnZSA9IHRydWU7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMubWFpbE1vZGVsLm1haWwuZm9yRWFjaChtID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobSk7XG4gICAgICAgIGlmIChtYWlsLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn5q2k6Ly45YWl5L+h566x54K656m65YC8Jyk7XG4gICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgIHJlc3VsdDogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG0gIT09IG1haWwpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn5q2k6Ly45YWl5L+h566x54Sh6YeN6KSHJyk7XG4gICAgICAgICAgdGhpcy5qdWRnZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+atpOi8uOWFpeS/oeeuseaciemHjeikhycpO1xuICAgICAgICAgIHRoaXMuanVkZ2UgPSBmYWxzZTtcbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIHJlc3VsdDogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5qdWRnZSkge1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICByZXN1bHQ6IHRydWUsXG4gICAgICAgICAgY29sb3I6ICdncmVlbidcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICByZXN1bHQ6IGZhbHNlLFxuICAgICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19