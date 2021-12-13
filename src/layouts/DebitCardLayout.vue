<template>
  <div class="flex column">
          <div class="row" style="min-height: 600px; width: 100%;">
            <div id="parent" class="fit row wrap justify-start items-start content-start" style="overflow: hidden;">
              <div class="col-7" style="overflow: auto;">
          <q-card class="no-border-radius">
            <q-card-section>
              <div class="q-pa-md">

    <q-carousel
      v-model="card"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="green"
      navigation
      infinite
      padding
      arrows
      height="250px"
      class="rounded-borders carouselCls"
    >
      <q-carousel-slide  class="column no-wrap flex-center"
          v-for="card in cardsObj" :name="card.id" :key="card.id">
        <q-btn  size="xs" flat class="showCardBtnCls" icon="visibility" :label="showCardFlag ? 'Hide Card Number' : 'Show Card Number'" @click="showCard(card)" />
        <q-card class="rounded-borders cardCls">
          <div class="cardDivCls">
              <p>{{card.name}}</p>
              <p>{{showCardFlag ? card.cardNumber : '**** **** **** ' + card.lastDigits}}</p>
              <span>Thru:{{card.expiry}}</span><span>CVV: ***</span>
              <p>Visa</p>
          </div>
        </q-card>
      </q-carousel-slide>
    </q-carousel>
    <div class="q-pa-md q-gutter-sm buttonsDiv">

            <q-btn size="sm" outline icon="zoom_out_map" stack flat color="primary" >Freeze<br> Card</q-btn>
            <q-btn size="sm" icon="av_timer"  stack flat color="primary">Set Spend<br>Limit</q-btn>
            <q-btn size="sm" icon="g_translate"  stack flat color="primary" >Add to<br>Gpay</q-btn>
            <q-btn size="sm" icon="replay"  stack flat color="primary" >Replace<br>Card</q-btn>
            <q-btn size="sm" icon="delete" stack flat
            color="primary"  @click="confirm = true">Cancel<br>Card</q-btn>
            <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-ml-sm">Do you want to delete the card ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Delete" @click="deleteCard()" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
        </div>
  </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-5" style="overflow: auto;">
          <card-transactions></card-transactions>
        </div>
            </div>
          </div>

        </div>
</template>

<script>

import { defineComponent, ref, computed  } from 'vue';
import CardTransactions from '../layouts/CardTransactions.vue'

export default defineComponent({
  name: 'DebitCardLayout',

  components: {
      CardTransactions
  },
  data() {
    return {
      cardsObj:[],
      card:1,
      showCardFlag:false,
      confirm:false
    }
  },
  methods: {
    showCard(card){
      this.showCardFlag = !this.showCardFlag;
    },
    deleteCard(){
      if(this.$store.state.carddetails.cards.length >1){
          this.$store.commit('carddetails/removeCard',this.card);
          console.log('@@@@@@@@@@', this.card);
          this.card = 1;
      }

    }
  },
  mounted() {
    console.log('@@@@@@@@', this.$store.state.carddetails.cards);
    this.cardsObj = this.$store.state.carddetails.cards;
  },
  setup () {
     return {
      navPos: ref('bottom')
    }
  }
})
</script>
<style scoped>
.cardCls {
  border: 1px solid #01D167;
  background: #01D167;
  width: 300px;
  height: 200px;
}
.cardDivCls{
  width: 100%;
  height: 100%;
}
.cardDivCls p:nth-child(1){
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-top:5%;
  margin-left: 8%;
  font-stretch: ultra-expanded;
}
.cardDivCls p:nth-child(2){
  color: white;
  font-weight: bold;
  font-size: 14px;
  width: 150px;
  margin-top:4%;
  margin-left: 8%;
  font-stretch: 100%;
}
.cardDivCls span:nth-child(3){
  color: white;
  font-weight: bold;
  font-size: 14px;
  width: 150px;
  margin-top:4%;
  margin-left: 8%;
  margin-right: 4%;
}
.cardDivCls span:nth-child(4){
  color: white;
  font-weight: bold;
  font-size: 14px;
  width: 150px;
  margin-top:4%;
  margin-left: 12%;
  margin-right: 4%;
}
.cardDivCls p:nth-child(5){
  color: white;
  font-weight: bold;
  font-size: 24px;
  font-style: italic;
  margin-top:6%;
  float: right;
  margin-right: 10px;
}
.carouselCls {
  background: white;
}
.showCardBtnCls {
  margin-left: 30%;
  color:#01D167;

}
.buttonsDiv {
  border: 1px solid #EDF3FF;
  background: #EDF3FF;
  border-radius: 10px;
  margin-top: 1px;
  height: 90px;
  padding-top: 5px;
  padding-left: 16%;
}
</style>
