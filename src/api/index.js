import axios from "axios";
import URls from "./URLs"
// const appkey = "QAQwangyizhang_1585626591787";
const appkey ='qfjdskjfsffd_1599095975670'
const instance = axios.create({
        baseURL: URls.baseUrl,
        params : {
            appkey
        }
    })
instance.interceptors.response.use(data => {
    if(data.data.data){
    return data.data.data
    }
    return data.data
})

const findByPage = (page,size) => {
    return instance.get(URls.findByPage,{
        params : {
            page,
            size
        }
    })
}
const updateStu = options => {
    return instance.get(URls.updateStu,{
        params : {
            ...options
        }
    })
}
const addStu = user =>{
    return instance.get(URls.addStu,{
        params : {
            ...user
        }
    })
}

const delStu = sNo =>{
    return instance.get(URls.delStu,{
        params: {
            sNo,
        }
    })
}

const searchStu = options =>{
    return instance.get(URls.searchStu,{
        params: {
            sex : -1,
            ...options
        }
    })
}


export default{
    findByPage,
    updateStu,
    addStu,
    delStu,
    searchStu
}