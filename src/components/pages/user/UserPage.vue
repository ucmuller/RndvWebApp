<template>
<md-card class="md-card-example">
  <md-card-area md-inset>
    <md-card-media md-ratio="16:9">
      <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Coffee House">
    </md-card-media>

    <md-card-header>
      <h2 class="md-title">Shop Name</h2>
      <div class="md-subhead">
        <md-icon>location_on</md-icon>
        <span>2 miles</span>
      </div>
    </md-card-header>

    <md-card-content>
      Shop Detail Shop Detail 
      Shop Detail Shop Detail 
    </md-card-content>
  </md-card-area>

  <md-card-content  v-if="dataStatus">
    <h3 class="md-subheading">Reserve Detail</h3>
    <div class="card-reservation">
      <md-list class="md-double-line"
        v-for="(data, i) in getEachData"
          :key="i"
          >
        <md-list-item>
          <md-icon class="md-primary">access_time</md-icon>
          <div class="md-list-item-text">
            <span>{{data.text}}</span>
            <span>{{data.value}}</span>
          </div>
        </md-list-item>
      </md-list>
    </div>
  </md-card-content>
  <md-button disabled>Disabled</md-button>
  <md-button class="md-raised md-primary">Primary</md-button>

</md-card>
 
</template>

<script>

import Firebase from '@/api/firebase/firebase'
import Firestore from '@/api/firebase/firestore'
import OAuth from "@/components/OAuth";


export default {
  name: 'UserPage',

  components: {
    OAuth
  },

  data(){
    return {
      name: '',
      id: this.$route.params.id,
      photoURL: '',
      date:'',
      email:'',
      userdata: '',
      guestName:'',
      people:'',
      sex:'',
      

    }
  },

  created: function(){
    Firebase.onAuth()
    this.getInviteEachData()
  },

  computed: {
    dataStatus() {
      return this.$store.getters.inviteDataStatus;
    },
    url(){
      return 'https://social-plugins.line.me/lineit/share?url=http://localhost:8080/userpage/' + this.id
    },
    getEachData() {
      let datas = [
        {
          text: 'TEL',
          value: this.$store.getters.inviteData.tel
        },
        {
          text: '日付',
          value: this.$store.getters.inviteData.date
        },
        {
          text: '時間',
          value: this.$store.getters.inviteData.time
        },
        {
          text: 'ゲスト名',
          value: this.$store.getters.inviteData.guestName
        },
        {
          text: '人数',
          value: this.$store.getters.inviteData.people
        },
      ]
      return datas
    },


  },

  methods: {
    login() {
      Firebase.login();
    },
    logout() {
      Firebase.logout();
    },
    getInviteEachData(){
      Firestore.getInviteEachData(this.$route.params.id)
    },
    
  }
}
</script>

<style scoped>
a {
  color: black;
}

.md-card-example{
  padding: 10px;
  padding-bottom: 60px
  
}

.md-button.md-theme-default.md-raised:not([disabled]).md-accent {
    color: white;
}
</style>
