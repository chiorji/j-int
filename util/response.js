/**
 * 
 * @param {*} statusCode 
 * @param {*} msg 
 * @param {*} data 
 * @param {*} success 
 */
module.exports = (statusCode, msg, data, success) => {
  return {
    status: typeof (statusCode) === 'number' ? statusCode : 200,
    msg: typeof (msg) === 'string' ? msg.charAt(0).toUpperCase() + msg.slice(1) : msg,
    data: data && data !== null ? data : [],
    success
  }
}