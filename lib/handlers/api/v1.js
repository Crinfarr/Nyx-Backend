import { readFileSync } from "fs";
import { IncomingMessage, ServerResponse } from "http";

/**
 * 
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 * @param {URLSearchParams} params 
 */
export function apicall(req, res, params) {
    switch (params.get('intent')) {
        case 'Message':
            msgHandler(req, res, params);
            break;
        case 'Media':
            mediaHandler(req, res, params);
            break;
        case 'User':
            userHandler(req, res, params);
            break;
        default:
            res.writeHead(404);
            res.write(readFileSync('./page/errors/404.html'));
            res.end();
            break;
    }
}
/**
 * 
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 * @param {URLSearchParams} params 
 */
function msgHandler(req, res, params) {

}
/**
 * @param {IncomingMessage} req
 * @param {ServerResponse} res 
 * @param {URLSearchParams} params
 */
function mediaHandler(req, res, params) {

}