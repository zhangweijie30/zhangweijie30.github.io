

import { observable, action, computed } from "mobx";

import userInfo from "./userInfo"

import { axios } from "&";
class Car {

    @observable carList = [];

    // async await 
    @action getCarList = (token) => {
        axios.get("/react/getcargoods", {
            params: { username: JSON.parse(sessionStorage.userInfo).token }
        })
            .then(res => {
                // console.log("******")

                console.log(555, this.carList);

                this.carList = res.data.result.map((item, id) => {
                    item.checked = false;
                    return item
                })

                console.log(888, this.carList);






            })
    }

    @action checkOne = (checked, goodId) => {
        this.carList = this.carList.map((item, id) => {
            if (item.goodId == goodId) {
                item.checked = checked;
                if (item.checked) {

                    return item;

                }

            }

        })

        axios.post("/react/checkSelect", {
            goodId,
            token: JSON.parse(sessionStorage.userInfo).token,
            checked
        }).then(res => {
            console.log(res);
        })
    }



    @action changeQuna = checked => {
        this.carList = this.carList.map((item, id) => {
            item.checked = checked;
            return item;
        })
        console.log(userInfo);
        axios.post("/react/checkSelect", {
            token: JSON.parse(sessionStorage.userInfo).token,
            checked
        }).then(res => {
            console.log(res);
        })


    }
    @action changeOneCount = (goodId, flag) => {
        this.carList = this.carList.map((item, id) => {
            if (item.goodId == goodId) {
                item.count += flag ? 1 : -1;


            }
            return item;
        })
        console.log(userInfo);
        axios.post("/react/changeCount", {
            token: JSON.parse(sessionStorage.userInfo).token,
            goodId,
            flag
        }).then(res => {
            console.log(res);
        })


    }
    @action changeCount = (goodId, count) => {
        axios.post("/react/changeDetailCount", {
            token: JSON.parse(sessionStorage.userInfo).token,
            goodId,
            count
        }).then(res => {
            console.log(res);
            this.carList = this.carList.map((item, id) => {
                if (item.goodId == goodId) {
                    item.count = count * 1;
                }
                return item;
            })
        })



    }

    @computed get quan() {
        var flag = true;
        this.carList.forEach((item) => {
            if (!item.checked) {
                flag = false;
            }
        })
        return flag;
    }




    @computed get carNum() {
        var num = 0;
        this.carList.forEach((item) => {
            if (item.checked) {
                num += item.count;
            }



        })
        return num;
    }


    @computed get total() {
        var total = 0;
        this.carList.forEach((item) => {
            if (item.checked) {
                total += item.count * item.good.price;
            }
        })
        return total;
    }
}

export default new Car()