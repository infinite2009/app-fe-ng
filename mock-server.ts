/**
 * @file
 * @author luodongyang(luodongyang@baidu.com)
 * @date 2017/9/10.
 */
const http = require('http');
const host = '127.0.0.1';
const port = '3000';

const server = http.createServer((req, res) => {
    const {method, url, headers} = req;
    switch (method) {
        case 'POST':
            if (url === '/web/ajax-playground/post') {
                const body = [];
                req.on('data', (chunk) => {
                    body.push(chunk);
                }).on('end', () => {
                    const bodyString = Buffer.concat(body).toString();
                    const param = JSON.parse(bodyString);
                    if (param.method) {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        const resData = require(`./src/app/data/mock/${param.method}.json`);
                        res.end(JSON.stringify(resData));
                    }
                    else {
                        res.statusCode = 413;
                        res.setHeader('Content-Type', 'application/json');
                        res.end({
                            status: 1,
                            msg: '该请求的method参数缺失，请补全后重试',
                            data: {}
                        });
                    }

                }).on('error', (err) => {
                    console.log(err);
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({
                        status: 1,
                        msg: err,
                        data: {}
                    }));
                });
            }
            else {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                    status: 1,
                    msg: '服务器暂不支持此url',
                    data: {}
                }));
            }
            break;
        case 'GET':
            break;
        case 'OPTION':
            break;
        default:
            break;
    }
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});
