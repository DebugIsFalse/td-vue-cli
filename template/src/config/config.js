const env = process.env.NODE_ENV;
const baseUrl = {};

if( env === 'production' ){
    baseUrl.rootPath = 'http://www.talkingdata.com';
}else{
    baseUrl.rootPath = 'http://www.talkingdata.com';
}
export {
    baseUrl
}