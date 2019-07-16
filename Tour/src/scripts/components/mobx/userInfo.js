
import { observable, action, computed } from "mobx";

class UserInfo {
    @observable userInfo = {};
    @observable isLogin = false;
    @observable isRegi = false;
    @observable mobile = "";
    @observable avatar = "";
    @observable name = ""

    @action getInfo = (userInfo, isLogin, mobile) => {
        this.userInfo = userInfo;
        this.isLogin = isLogin;
        this.mobile = mobile;
    }

    @action gotInfo = (userInfo, isRegi, mobile, name) => {
        this.userinfo = userInfo;
        this.isRegi = isRegi;
        this.mobile = mobile;
        this.name = name
    }
}

export default new UserInfo()