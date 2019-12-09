import { MailModel } from './mailModel';
export declare class VerifyMailDuplicateService {
    private mailModel;
    judge: any;
    constructor(mailModel: MailModel);
    /**
     * 此用來判斷是否有重複的信箱,若回傳物件的result為true,則此信箱為允許申請,
     * 回傳物件為 {result: boolean , color: string}
     * @param mail 輸入信箱的參數
     */
    verifyMail(mail: string): Promise<any>;
}
