/**
 * Created by Administrator on 2017/2/13.
 */
//�ж��ǲ�������
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