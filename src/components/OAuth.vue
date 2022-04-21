<template>
  <a @click="Auth();">
    <span></span> LINEでログイン
  </a>
</template>
<script>
import { OAuth } from "oauthio-web";
export default {
  data() {
    return {
      access_token: ""
    };
  },
  created() {
    OAuth.initialize("4QQKS5Ibbz7qFVj7OjnSPKgIfA0");
  },
  methods: {
    Auth() {
      OAuth.popup('line').then(line => {
        line.me().then(data => {
          alert('LINE からの情報では、あなたの名前は ' + data.displayName + ".\n詳細はブラウザのコンソールを確認して下さい。");
        });
        line.get('/v1/users/self').then(data => {
          })
      });
    }
  }
};
</script>
