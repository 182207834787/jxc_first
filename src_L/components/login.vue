<template>
  <div class="login" id="login">
    <div class="login-con">
        <h1>个人博客</h1>
    <li>
          <input type="text"  v-model="name.value" placeholder="请输入用户名" @blur="change(name)">
      </li>
      <li>
          <input type="password"  placeholder="请输入密码" v-model="pass.value" @blur="change(pass)">
      </li>
      <el-button type="success"@click="submit" id="btn">登陆</el-button>

      </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: {
        value: "",
        reg: /^[a-zA-Z]{4,10}$/,
        msg: "您输入的用户名格式不对",
        state: false,
        required: true
      },
      pass: {
        value: "",
        reg: /^[a-zA-Z0-9]\w{5,17}$/,
        msg: "您输入的密码格式不正确",
        state: false,
        required: false
      }
    };
  },
  methods: {
    change(item) {
      item.state = true;
    },
    submit() {
      const namevalue = this.name.value;
      const passvalue = this.pass.value;
      if (namevalue != "" && passvalue != "") {
        const params = { name: namevalue, password: passvalue };
        this.axios.post("back/user/login", params).then(data => {
          console.log(data);
          if (data.data.code == "0003") {
            this.$message({
              showClose: true,
              message: data.data.msg,
              type: "success"
            });
            document.getElementById("login").style.display = "none";
            this.$router.push("/home");
          } else {
            this.$message({
              showClose: true,
              message: data.data.msg,
              type: "error"
            });
          }
        });
      }
    }
  }
};
</script>

<style>
#login {
  width: 100%;
  height: 800px;
}
#login h1 {
  margin: 15px;
  color: orangered;
}
.login-con {
  border: 1px orange solid;
  width: 600px;
  height: 500px;
  margin: 10px auto;
  border-radius: 10px;
}
.login-con li input {
  width: 400px;
  height: 50px;
  border-radius: 10px;
  border: 0;
  border: 1px #ccc solid;
  margin: 20px 10px;
  margin-left: 90px;
}
#btn {
  margin-left: 90px;
  width: 400px;
}
</style>
