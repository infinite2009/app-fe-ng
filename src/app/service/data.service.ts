/**
 * @file 数据请求服务
 * @author luodongyang(luodongyang@baidu.com)
 * @since 2017-02-12.
 * @last-modified 2017-02-23
 */
import {Injectable} from '@angular/core';
import {REQUEST_URL} from '../data/config/config';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {REQUEST_METHOD} from '../data/const/request-method/request-method';
import {AjaxPostResponse} from '../interface/ajax-post-response';
// import {Headers, Http} from '@angular/http';
import {AjaxMethod} from '../interface/ajax-method';
import {Util} from '../util/util';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {
    }

    static getRequestMethod(method: string): AjaxMethod {
        return Util.clone(REQUEST_METHOD[method]);
    }

    /**
     * 发送 ajax 请求
     *
     * @param method
     * @param postData
     * @param extData
     * @param success
     * @param failure
     * @param url
     */
    ajax(method: AjaxMethod, success: Function, failure: Function, extData?: object, url?: string) {
        const headers = new HttpHeaders({Accept: 'application/json'});
        if (!url) {
            url = REQUEST_URL;
        }

        this.http.post<AjaxPostResponse>(url, method.params, {headers: headers})
            .subscribe(
                res => {
                    if (+res.status === 1) {
                        failure(res['msg']);
                    }
                    else {
                        success(res['data'], extData);
                    }

                },
                (error: HttpErrorResponse) => {
                    if (error.error instanceof Error) {
                        // error occurred in browser
                        console.log('Error occurred in ' + error.status);
                    }
                    else {
                        console.log('Error from server: ' + error.status);
                    }
                    failure('系统错误，请稍候再试');
                }
            );
    }
}
