<template>
  <section class="loginContainer">
    <div class="loginInner">


      <div class="login_header">
        <h2 class="login_logo">网易严选</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginMode}" @click="loginMode=true">短信登录</a> <!--class="on" 确定登录方式-->
          <a href="javascript:;" :class="{on:!loginMode}" @click="loginMode=false">密码登录</a>
        </div>
      </div>

      <div class="login_content">
        <form>
          <div :class="{on:loginMode}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!isRightPhone || computeTime>0" class="get_verification"
                      @click.prevent="sendCode"
                      :class="{right_phone_number:isRightPhone}">
                {{computeTime>0 ? `已发送(${computeTime})` :`获取验证码`}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!loginMode}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input :type="isShowPwd ?'text':'password' " maxlength="8" placeholder="密码" v-model="pwd">
                <div class="switch_button" @click="isShowPwd=!isShowPwd" :class="isShowPwd ? 'on':'off'">
                  <div class="switch_circle" :class="{rights:isShowPwd}"></div>
                  <span class="switch_text">{{isShowPwd ? 'abc': ''}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img ref="captcha" class="get_verification" src="http://localhost:5000/captcha" alt="captcha" @click="updateCaptcha">
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>

      <a href="javascript:" class="go_back" @click="$router.replace('/personage')">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script>
  import {reqSendCode, reqPwdLogin, reqSmsLogin} from "../../api/index"
  import {MessageBox, Toast} from 'mint-ui';

  export default {
    name: "login",
    data() {
      return {
        loginMode: true, //true 短信登录 flase密码登录
        phone: "",//手机号
        computeTime: 0, //倒计时获取的时间
        isShowPwd: false,//是否显示密码
        code: "",//短信验证码
        name: "",//用户名
        pwd: "", //密码
        captcha: "",//图形验证码
      }
    },
    computed: {
      //判断是否是一个正确的手机号
      isRightPhone() {
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods: {
      async sendCode(){
        const {phone} = this
        this.computeTime=30
        //开始计时
        const move = setInterval(()=>{
          this.computeTime--
          if(this.computeTime<0){
            this.computeTime=0
            clearInterval(move)
          }
        },1000)
        //发送请求
        const sendcode = await reqSendCode(phone)
        if(sendcode.code===0){
          Toast("发送验证码成功！")
        }else {
          MessageBox.alert("发送验证码失败！")
        }
      },
    async login(){
        const {loginMode,code,name,phone,captcha,pwd,isRightPhone} = this
        let result
        if(loginMode){
          //进行表单验证
          if(!isRightPhone){
             return MessageBox.alert("请输入正确的手机号！")
          }else if(!/^\d{6}$/.test(code)){
            return  MessageBox.alert("验证码必须是6位数字！")
          }
          result = await reqSmsLogin(phone,code)
          if(result.code!==0) {
            // 停止计时
            this.computeTime = 0
          }
        }else {
          if(!name){
            return  MessageBox.alert("用户名必须指定！")
          }else if(!pwd){
            return  MessageBox.alert("密码必须指定！")
          }else if(captcha.length!==4){
            return  MessageBox.alert("验证码必须4位！")
          }
          result = await reqPwdLogin({name,pwd,captcha})
          //根据返回的结果，处理
          console.log("ssss",name,pwd,captcha)
          if(result.code==0){
            console.log("Sssss")
            const user =result.data
            console.log("ssss")
            this.$store.dispatch("saveUser",user)
            //跳转到个人中心
            this.$router.replace("/homePage")
          }
        }
      },
      updateCaptcha(){
        this.$refs.captcha.src="http://localhost:5000/captcha?time=" + Date.now()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #7e8c8d
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          > a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #7e8c8d
              font-weight 700
              border-bottom 2px solid #7e8c8d
      .login_content
        > form
          > div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone_number
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s, border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                > .switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
                  transition transform .3s
                  &.rights
                    transform translateX(27px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              > a
                color #b4282d
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #b4282d
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 0.5rem
        left 0.5rem
        width 1.1rem
        height 1.1rem
        background-repeat no-repeat
        background-position -0.02rem -1.8rem
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png")
        > .iconfont
          font-size 20px
          color #999
</style>
