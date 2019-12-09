/**
 * @fileoverview added by tsickle
 * Generated from: lib/verify-mail-duplicate.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MailModel } from './mailModel';
import * as i0 from "@angular/core";
import * as i1 from "./mailModel";
export class VerifyMailDuplicateService {
    /**
     * @param {?} mailModel
     */
    constructor(mailModel) {
        this.mailModel = mailModel;
    }
    /**
     * 此用來判斷是否有重複的信箱,若回傳物件的result為true,則此信箱為允許申請,
     * 回傳物件為 {result: boolean , color: string}
     * @param {?} mail 輸入信箱的參數
     * @return {?}
     */
    verifyMail(mail) {
        this.judge = true;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.mailModel.mail.forEach((/**
             * @param {?} m
             * @return {?}
             */
            m => {
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
                    this.judge = true;
                }
                else {
                    console.log('此輸入信箱有重複');
                    this.judge = false;
                    resolve({
                        result: false,
                        color: 'red'
                    });
                }
            }));
            if (this.judge) {
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
    }
}
VerifyMailDuplicateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
VerifyMailDuplicateService.ctorParameters = () => [
    { type: MailModel }
];
/** @nocollapse */ VerifyMailDuplicateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VerifyMailDuplicateService_Factory() { return new VerifyMailDuplicateService(i0.ɵɵinject(i1.MailModel)); }, token: VerifyMailDuplicateService, providedIn: "root" });
if (false) {
    /** @type {?} */
    VerifyMailDuplicateService.prototype.judge;
    /**
     * @type {?}
     * @private
     */
    VerifyMailDuplicateService.prototype.mailModel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5LW1haWwtZHVwbGljYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpZnktbWFpbC1kdXBsaWNhdGUvIiwic291cmNlcyI6WyJsaWIvdmVyaWZ5LW1haWwtZHVwbGljYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQUt4QyxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBR3JDLFlBQW9CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBSSxDQUFDOzs7Ozs7O0lBTTdDLFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLENBQUMsRUFBRTtnQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN4QixNQUFNLENBQUM7d0JBQ0wsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsS0FBSyxFQUFFLEtBQUs7cUJBQ2IsQ0FBQyxDQUFDO29CQUNILE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO29CQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsT0FBTyxDQUFDO3dCQUNOLE1BQU0sRUFBRSxLQUFLO3dCQUNiLEtBQUssRUFBRSxLQUFLO3FCQUNiLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLE9BQU8sQ0FBQztvQkFDTixNQUFNLEVBQUUsSUFBSTtvQkFDWixLQUFLLEVBQUUsT0FBTztpQkFDZixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPLENBQUM7b0JBQ04sTUFBTSxFQUFFLEtBQUs7b0JBQ2IsS0FBSyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWpERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxTQUFTOzs7OztJQU1oQiwyQ0FBTTs7Ozs7SUFFTSwrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYWlsTW9kZWwgfSBmcm9tICcuL21haWxNb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFZlcmlmeU1haWxEdXBsaWNhdGVTZXJ2aWNlIHtcbiAganVkZ2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYWlsTW9kZWw6IE1haWxNb2RlbCkgeyB9XG4gIC8qKlxuICAgKiDmraTnlKjkvobliKTmlrfmmK/lkKbmnInph43opIfnmoTkv6HnrrEs6Iul5Zue5YKz54mp5Lu255qEcmVzdWx054K6dHJ1ZSzliYfmraTkv6HnrrHngrrlhYHoqLHnlLPoq4ssXG4gICAqIOWbnuWCs+eJqeS7tueCuiB7cmVzdWx0OiBib29sZWFuICwgY29sb3I6IHN0cmluZ31cbiAgICogQHBhcmFtIG1haWwg6Ly45YWl5L+h566x55qE5Y+D5pW4XG4gICAqL1xuICB2ZXJpZnlNYWlsKG1haWw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5qdWRnZSA9IHRydWU7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMubWFpbE1vZGVsLm1haWwuZm9yRWFjaChtID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobSk7XG4gICAgICAgIGlmIChtYWlsLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn5q2k6Ly45YWl5L+h566x54K656m65YC8Jyk7XG4gICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgIHJlc3VsdDogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG0gIT09IG1haWwpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn5q2k6Ly45YWl5L+h566x54Sh6YeN6KSHJyk7XG4gICAgICAgICAgdGhpcy5qdWRnZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+atpOi8uOWFpeS/oeeuseaciemHjeikhycpO1xuICAgICAgICAgIHRoaXMuanVkZ2UgPSBmYWxzZTtcbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIHJlc3VsdDogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5qdWRnZSkge1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICByZXN1bHQ6IHRydWUsXG4gICAgICAgICAgY29sb3I6ICdncmVlbidcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICByZXN1bHQ6IGZhbHNlLFxuICAgICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19