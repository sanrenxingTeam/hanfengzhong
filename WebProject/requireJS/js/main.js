// require.config({
//     paths: {
//         "maimai": "maimai"
//     }
// });
// require(["maimai"], function (maimai) {
//     maimai.fun1();
// });

require(['config'],function(){
    require(['maimai','logger'],function (maimai,logger) {
         maimai.fun1();
         //logger.logInfo();
    });
});