



import { axios } from "&";

export const GETBANNER = "GETBANNER";

export async function getbanner({ url, params }) {
    const res = await axios.get(url, { params });
    return {
        type: GETBANNER,
        banner: res.data.result
    }
}

export const GETGOODTYPES = "GETGOODTYPES"
export async function getGoodTypes({ url }) {
    const res = await axios.get(url);
    const data = res.data.result.map((item) => {
        // console.log(333, item);
        // item.title = item;

        return item
    })
    return {
        type: GETGOODTYPES,
        types: data
    }
}

export const GETALLGOODS = "GETALLGOODS"
export async function getAllGoods({ url }) {
    const res = await axios.get(url);
    return {
        type: GETALLGOODS,
        allGoods: res.data.result


    }


}


export async function getSearchGoods({ url, params }) {
    const res = await axios.get(url, { params });
    return {
        type: "getSearchGoods",
        data: res.data.result
    }
}

export function reverseSearchGoods() {

    return {
        type: "reverseSearchGoods"
    }
}

export const reverseGoods = () => {
    return {
        type: "reverseGoods"
    }
}

export const GETFENLEI = "GETFENLEI"
export const getFenlei = data => {
    return {
        type: GETFENLEI,
        data
    }
}
export const GETGENLEIINIT = "GETGENLEIINIT"
export const getFenleiInit = (allGoods, one) => {
    var data = allGoods.filter(item => item.type.value == one.value);
    return {
        type: GETGENLEIINIT,
        data
    }
}

export const SETTAB = "SETTAB"
export const setTab = tab => {
    return {
        type: SETTAB,
        tab
    }
}


export async function getDetailGood({ url, params }) {
    const res = await axios.get(url, { params });
    return {
        type: "getDetailGood",
        good: res.data.result
    }
}

// 设置当前 url 的值  
export const SETNEWURL = "SETNEWURL";
export const setNewUrl = url => {
    return {
        type: SETNEWURL,
        url
    }
}

export const SETOLDURL = "SETOLDURL";
export const setOldUrl = url => {
    return {
        type: SETOLDURL,
        url
    }
}


export async function getCarGoods({ url, params }) {
    const res = await axios.get(url, { params });
    return {
        type: "getCarGoods",
        cargoods: res.data.result
    }
}