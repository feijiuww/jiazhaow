import http from './http.js'
export function getList1(){
     return http.get("list1");
}
export function getList2(){
     return http.get("list2");
}
export function getList3(){
     return http.get("list3");
}
export function getList4(){
     return http.get("list4");
}
export function getList5(){
     return http.get("list5");
}
export function getList6(){
     return http.get("list6");
}
export function getList7(){
     return http.get("list7");
}
export function getList8(){
     return http.get("list8");
}
export function getcomments(list,i){
     var comments = "comments";
     var str = "list"+list+'/'+i+'/';
     return http.get(str);
}
export function getuser(){
     return http.get("user");
}
export function postuser(){
     return http.post("user");
}
export function gettest(){
     return http.get("test1");
}
export function gettest1(i){
     var str = "test1"+'/'+i;
     return http.get(str);
}



