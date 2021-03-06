import AdminTop from '@/components/pages/admin/AdminTop'
import IndividualInviteData from '@/components/pages/admin/IndividualInviteData'
import IndividualReservationData from '@/components/pages/admin/IndividualReservationData'
import InviteData from '@/components/pages/admin/InviteData'
import ReservationData from '@/components/pages/admin/ReservationData'
import StaffList from '@/components/pages/admin/StaffList'
import ResetPassword from '@/components/pages/auth/ResetPassword'
import Settings from '@/components/pages/auth/Settings'
import Signin from '@/components/pages/auth/Signin'
import SigninFromLP from '@/components/pages/auth/SigninFromLP'
import Signup from '@/components/pages/auth/Signup'
import InviteForm from '@/components/pages/invite/InviteForm'
import InviteList from '@/components/pages/invite/InviteList'
import InvitePage from '@/components/pages/invite/InvitePage'
import InvitePageUpdate from '@/components/pages/invite/InvitePageUpdate'
import FromLP from '@/components/pages/referral/FromLP'
import ReferralForm from '@/components/pages/referral/ReferralForm'
import ReferralPage from '@/components/pages/referral/ReferralPage'
import Tutorial from '@/components/pages/referral/Tutorial'
import ReservationList from '@/components/pages/reservation/ReservationList'
import ReservationPage from '@/components/pages/reservation/ReservationPage'
import UserPage from '@/components/pages/user/UserPage'
import UserTop from '@/components/pages/user/UserTop'
import UserUpdate from '@/components/pages/user/UserUpdate'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
Vue.component('router-link', Vue.options.components.RouterLink);
let router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'UserTop',
      component: UserTop,
      meta: { requiresAuth: true }
    },
    {
      path: '/userupdate',
      name: 'UserUpdate',
      component: UserUpdate,
      meta: { requiresAuth: true }
    },
    {
      path: '/admintop',
      component: AdminTop,
      children: [
        {
          path: 'stafflist',
          component: StaffList,
        },
        {
          path: 'invitedata',
          component: InviteData,
        },
        {
          path: 'ReservationData',
          component: ReservationData,
        },
      ]
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signinfromlp',
      name: 'SigninFromLP',
      component: SigninFromLP
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/resetpassword',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/inviteform',
      name: 'Inviteform',
      component: InviteForm
    },
    {
      path: '/invitelist/:id',
      name: 'InviteList',
      component: InviteList,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/reservationlist/:id',
      name: 'ReservationList',
      component: ReservationList,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/userpage/:id',
      name: 'UserPage',
      component: UserPage,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/invitepage/:id',
      name: 'InvitePage',
      component: InvitePage,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/invitepageupdate/:id',
      name: 'InvitePageUpdate',
      component: InvitePageUpdate,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/reservationpage/:id',
      name: 'ReservationPage',
      component: ReservationPage,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/IndividualInviteData/:id',
      name: 'IndividualInviteData',
      component: IndividualInviteData,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/IndividualReservationData/:id',
      name: 'IndividualReservationData',
      component: IndividualReservationData,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/referralform/:id',
      name: 'ReferralForm',
      component: ReferralForm,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/referralpage/:id',
      name: 'ReferralPage',
      component: ReferralPage,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/fromlp',
      name: 'FromLP',
      component: FromLP
    },
    {
      path: '/tutorial',
      name: 'Tutorial',
      component: Tutorial
    }
  ]
})


export default router