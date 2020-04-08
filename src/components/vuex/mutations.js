//更改用户信息
export const userStatus =(state,user)=>{
    if(user){
        state.currenUser=user
        state.userLogin =false
    }else {
        sessionStorage.setItem("userName",null)
        sessionStorage.setItem("userToken",'')
        state.currenUser =null
        state.isLogin =false
        state.token=""
    }
    
}