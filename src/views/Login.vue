<template>
    <div>
      <el-form
        :rules="rules"
        :model="loginForm"
        class="loginContainer"
        ref="loginForm"
      >
        <h3 class="loginTitle">系统登陆</h3>
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="loginForm.username"
            auto-complete="off"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="password"
          ><!-- prop 表单验证 -->
          <el-input
            type="text"
            v-model="loginForm.password"
            auto-complete="off"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-checkbox class="loginRemember" v-model="checked"
          >记住密码</el-checkbox
        >
        <el-button type="primary" style="width: 100%" @click="onLogin"
          >登录</el-button
        >
        <!--<el-button type="primary" style="width: 49%">注册</el-button>-->
      </el-form>
    </div>
  </template>
  
  <script>
  import Cookie from 'js-cookie';
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: "",
          password: "",
        },
        checked: true,
        rules: {
          username: [
            { required: true, message: "请输入用户名", trigger: "blur" },
          ],
          password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        },
      };
    },
    methods: {
      onLogin() {
        if (this.loginForm.username || this.loginForm.password) {
          const token = '123456'
          Cookie.set('token',token)
          this.$router.push('/home')
        } else {
          this.$message({
            message: "用户名或密码不能为空！",
            type: "error",
          });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .loginContainer {
    /* 将元素的边框圆角化，半径为15像素。 */
    border-radius: 15px;
    /* 指定背景的裁剪范围，padding-box 表示背景仅扩展到内边距区域，不会延伸到边框。 */
    background-clip: padding-box;
    /* 180px表示上下边距，auto表示左右自动居中。一般用于居中定位元素。 */
    margin: 180px auto;
    width: 350px;
    /* 内边距 */
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    /* 给元素添加阴影，阴影的水平和垂直偏移均为0，模糊半径为25像素，颜色为浅灰色（#cac6c6）。这会在元素周围产生柔和的阴影效果。 */
    box-shadow: 0 0 25px #cac6c6;
  }
  .loginTitle {
    margin: 0px auto 40px auto;
    text-align: center;
  }
  .loginRemember {
    text-align: left;
    /* 上右下左 */
    margin: 0px 0px 15px 0px;
  }
  </style>