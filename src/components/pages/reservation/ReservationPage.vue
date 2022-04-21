<template>
<div>
  <md-card class="md-card" v-if="dataStatus">
    <md-card-area md-inset>
      <md-card-media md-ratio="16:9">
        <img v-if="!reservationData.shopImageURL_1" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Coffee House">
        <img v-if="reservationData.shopImageURL_1" :src="reservationData.shopImageURL_1" alt="Coffee House">
      </md-card-media>

      <md-card-header>
        <h2 class="md-title">{{reservationData.shopName}}</h2>
        <div class="md-subhead">
        </div>
      </md-card-header>
    </md-card-area>

    <md-card-content>
      <h1 class="md-title">{{reservationData.staffName}}さんからの招待</h1>
      <div class="card-reservation">
        <md-list class="md-double-line"
          v-for="(data, i) in getEachData"
            :key="i"
            >
          <div class="md-layout md-gutter md-alignment-center-center">
            <div>
              <md-icon class="md-accent">{{data.icon}}</md-icon>
            </div>
            <div class="data-value">
              <h1 class="md-title">{{data.value}}</h1>
            </div>
          </div>
        </md-list>
      </div>
    </md-card-content>
  </md-card>
  <div class="loading-overlay" v-if="loading">
    <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
  </div>
</div>
 
</template>

<script>

import Firebase from '@/api/firebase/firebase'
import Firestore from '@/api/firebase/firestore'
import OAuth from "@/components/OAuth";
import { mapGetters } from 'vuex'


export default {
  name: 'UserPage',

  components: {
    OAuth
  },

  data(){
    return {
      shopName: '',
      staffName: '',
      id: this.$route.params.id,
      photoURL: '',
      date:'',
      email:'',
      people:'',
      datas: null,
      alert: false,
      inviteFlag: true,
      loading: false,
    }
  },

  created: function(){
    Firebase.onAuth()
    this.loadingOverlay()
    this.getReservationEachData()
  },

  computed: {
    url(){
      let domain = document.domain
      if(domain == "localhost"){
        return `https://social-plugins.line.me/lineit/share?url=http://localhost:8080/invitepage/${this.id}`
      } else {
        return `https://social-plugins.line.me/lineit/share?url=https://${domain}/invitepage/${this.id}`
      }
    },
    getEachData() {
      let datas =  [
        {
          text: 'ゲスト名',
          value: this.$store.getters.reservationData.guestName + '様',
          icon: 'account_circle'
        },
        {
          text: '人数',
          value: this.$store.getters.reservationData.people + '名様',
          icon: 'people'
        },
        {
          text: '日付',
          value: this.$store.getters.reservationData.date,
          icon: 'calendar_today'
        },
        {
          text: '時間',
          value: this.$store.getters.reservationData.time + '〜',
          icon: 'access_time'
        },
        {
          text: 'TEL',
          value: this.$store.getters.reservationData.tel,
          icon: 'phone_in_talk'
        },
      ]
      return datas
    },
    ...mapGetters({
      dataStatus: 'reservationDataStatus',
      userStatus: 'isSignedIn',
      user: 'user',
      reservationData: 'reservationData',
    })
  },

  methods: {
    login() {
      Firebase.login();
    },
    logout() {
      Firebase.logout();
    },
    getReservationEachData(){
      Firestore.getReservationEachData(this.$route.params.id)
    },
    loadingOverlay(){
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
}
</script>

<style scoped>

a {
  color: black;
}

.data-value h1{
  font-size: 20px;
}

.md-card{
  width: 90%;
  margin-top: 70px;
  display: inline-block;
  vertical-align: top;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 80px;
}
.md-list-item-text h1{
  font-size: 20px;
}

.md-list-item-text{
  text-align: center;
}

.loading-overlay {
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
}

.data-value{
  width: 80%;
}


</style>
