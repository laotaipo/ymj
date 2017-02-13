/**
 * Created by Administrator on 2017/2/13.
 */
//��������
define(["b"], function(isArr){
     function arrSort(arr){
         if(isArr(arr)) {
            return arr.sort(function (a, b) {
                 return a - b;
             })
         }else{
             return "不是数组";
         }

     }
    return arrSort;
});
