/**
 * Created by Administrator on 2017/2/13.
 */
//判断是不是数组
define([], function(){
    function isArr(arr){
        if(arr instanceof Array){
            return true;
        }else{
            return false;
        }
    }
    return isArr;
})