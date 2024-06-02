import axios from "axios";
// REACT_APP_ROOTAPI = "http://localhost:8000/api/v1"
export const rootAPI = "http://localhost:8000/api/v1"

const getUserId = () => {
    const userJson = sessionStorage.getItem("user");
    const userObj = JSON.parse(userJson);
    return userObj?._id || null
}

export const axiosProcesser = async ({ method, url, ...rest }) => {
    try {
        const resp = await axios({
            method,
            url,
            ...rest
        })
        return resp.data
    } catch (error) {
        console.log(error.message)
    }
}

export const loginUser = (data) => {
    return axiosProcesser({
        method: 'post',
        url: rootAPI + "/login",
        data
    })
}

export const updateExperience = (data) => {
    return axiosProcesser({
        method: 'patch',
        url: rootAPI + "/experence",
        data
    })
}