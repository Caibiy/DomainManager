/**
 * const database&&jwt secret&&listen port
 * @authors JiaDongYang 
 * @date    2017-04-15 16:53:06
 * @version 1.0.0
 */

module.exports={
    database:process.env.db||"mongodb://localhost:27017/test",
    secret:"secret_jiadongyang",
    port:process.env.PORT||"80"
};