<template>
  <q-page>

    <div class="row topheaderCls">
      <div class="col-10">
        <div>Available Balance</div>
        <span class="moneyCls"> $$ </span><span class="moneyClsNumber">3000</span>
      </div>
      <div class="col-2">
         <q-btn  size="sm" color="primary" icon="add" label="Add Card" @click="prompt = true" />
      </div>
    </div>

      <q-card class="card-cls">
        <q-tabs
          v-model="tab"
          dense
          class="tabsCls"
          active-color="black"
          indicator-color="green"
          align="left"
          narrow-indicator
        >
          <q-tab name="myDebitCards" label="My Debit Cards" />
          <q-tab name="allCompanycards" label="All Company" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="myDebitCards">
            <debit-card-layout></debit-card-layout>
          </q-tab-panel>

          <q-tab-panel name="allCompanycards">
            <div class="text-h6"></div>

          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      <q-dialog v-model="prompt" persistent>
              <q-card style="min-width: 350px">
                <q-card-section>
                  <div class="text-h6">Add a Card</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-input dense v-model="name" label="Name" autofocus/>
                  <q-input dense v-model="cardNumber" label="Enter 16 digit card number" autofocus/>
                  <q-input dense v-model="expiry" label="mm/yy" autofocus/>
                  <q-input dense v-model="cvv" label="cvv" autofocus/>
                </q-card-section>

                <q-card-actions align="right" class="text-primary">
                  <q-btn flat label="Cancel" v-close-popup />
                  <q-btn flat label="Add Card" @click="addCard()" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';
import DebitCardLayout from '../layouts/DebitCardLayout.vue';
export default defineComponent({
  components: { DebitCardLayout },
  name: 'PageIndex',
  data() {
    return {
      prompt: false,
      name:'',
      cardNumber:'',
      expiry:'',
      cvv:''
    }
  },
  methods: {
    addCard(){
        this.$store.commit('carddetails/addCard',{
          id:this.$store.state.carddetails.cards.length+1,
          name:this.name,
        cardNumber:this.cardNumber,
        lastDigits:this.cardNumber.substring(12),
        expiry:this.expiry,cvv:this.cvv});
        this.resetPrompt();
    },
    resetPrompt(){
      this.name = '';
      this.cardNumber='';
      this.expiry='';
      this.cvv='';
    }
  },
  setup () {
    return {
      tab: ref('myDebitCards')
    }
  }
})
</script>
<style scoped>
.card-cls {
  width: 100%;
}
.row > div {
  padding : 10px 15px;
  background : white;
}
.topheaderCls {
  height: 75px;
  margin-top: 2rem;
  margin-left: 2rem;
}
tabsCls{
  border: none;
}
.moneyCls{
  background: #01D167;
  color: white;
  margin-top:2px;
  margin-right: 10px;
  border: 1px solid #01D167;
  border-radius: 5px;
}
.moneyClsNumber{
  font-weight: bold;
  font-size: 20px;
}

</style>
