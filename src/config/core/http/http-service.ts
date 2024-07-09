import axios, {AxiosRequestConfig} from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
})


const httpService  = async <T> (url : string , config : AxiosRequestConfig) =>{
   return await axiosInstance<T>(url , config)
}

export const GET  =async <T> (url : string , config : AxiosRequestConfig) =>{
    return await httpService<T>(url  , {
        method : 'GET',
        ...config
    } )
}
export const POST  =async <T> (url : string , config : AxiosRequestConfig) =>{
    return await httpService<T>(url  , {
        method : 'POST',
        ...config
    } )
}
export const PUT  =async <T> (url : string , config : AxiosRequestConfig) =>{
    return await httpService<T>(url  , {
        method : 'put',
        ...config
    } )
}
export const DELETE  =async <T> (url : string , config : AxiosRequestConfig) =>{
    return await httpService<T>(url  , {
        method : 'delete',
        ...config
    } )
}