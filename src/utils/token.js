class Token {
  constructor() {
    this.username = "";
    this.usertype = "";
    this.password = "";
    this.isAuthenticated = false;
    this.expire = 100000; //设置过期时间
    this.curTime = Date.now();
  }
  getTokenfromLoaclStorage() {
    if (
      localStorage.length &&
      this.curTime - localStorage.getItem("curTime") <= this.expire
    ) {
      console.log(localStorage);
      // console.log(localStorage.getItem('userInfo'))
      this.username = localStorage.getItem("username");
      this.usertype = localStorage.getItem("usertype");
      this.password = localStorage.getItem("password");
      this.isAuthenticated = true;
    } else if (!localStorage.length) {
      console.log("localstorage 无身份信息");
      this.isAuthenticated = false;
    } else {
      console.log("已过期");
      this.isAuthenticated = false;
    }
  }
  setTokentoLocalStorage() {
    if (localStorage.length) {
      localStorage.clear();
    }
    localStorage.setItem("username", this.username);
    localStorage.setItem("usertype", this.usertype);
    localStorage.setItem("password", this.password);
    this.isAuthenticated = true;
    this.curTime = Date.now();
    localStorage.setItem("curTime", this.curTime);
  }
  getTokenfromLogin({ username, usertype, password }) {
    this.username = username;
    this.usertype = usertype;
    this.password = password;
    this.setTokentoLocalStorage();
  }
}

const token = new Token();
export default token;
