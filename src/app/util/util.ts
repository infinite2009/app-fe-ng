/**
 * @file
 * @author luodongyang(luodongyang@baidu.com)
 * @date 17/2/23.
 */
export class Util {
    static parseFormDataUrl(url: string): any {
        const body = {};
        const params = url.split('&');
        params.forEach((paramExp) => {
            let param = paramExp.split('=');
            let key = decodeURIComponent(param[0]);
            let value = decodeURIComponent(param[1]);
            body[key] = value;
        });
        return body;
    }

    static extend(src: any, target: any): any {
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                src[key] = target[key];
            }
        }
        return src;
    }

    static clone(src: any): any {
        if (typeof src !== 'object') {
            return src;
        }
        else {
            let obj = {};
            for (let key in src) {
                if (src.hasOwnProperty(key)) {
                    if (typeof src[key] !== 'function') {
                        if (src[key] === null) {
                            obj[key] = null;
                        }
                        else {
                            obj[key] = Util.clone(src[key]);
                        }
                    }
                }
            }
            return obj;
        }
    }
}
