import { ICommon } from '../common/ICommon';

export declare namespace ICertificate {
  /**
   * ### Sample Rendering
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/certificate.ts
   */
  export interface Payload extends ICommon.Payload {
    /** ### 자격증 리스트 */
    list: Item[];
  }

  export interface Item {
    /** ### 자격증 명 */
    title: string;

    /** ### 자격증 서브 타이틀 */
    subTitle?: string;

    /**
     *  ### 자격증 취득 시점
     *
     * @format YYYY-MM
     * @example '2022-06'
     */
    startedAt: string;
  }
}
