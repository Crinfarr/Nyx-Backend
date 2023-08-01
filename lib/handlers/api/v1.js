/**
 * 
 * @param {Request} req 
 * @param {Response} res 
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
    }
}
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {URLSearchParams} params 
 */
function msgHandler(req, res, params) {

}
/**
 * @param {Request} req
 * @param {Response} res 
 * @param {URLSearchParams} params
 */
function mediaHandler(req, res, params) {

}