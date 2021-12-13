<template>
<div class="q-pa-md" style="max-width: 350px">
    <q-list no-border>
      <q-expansion-item
        group="somegroup"
        icon="credit_card"
        label="Card Details"

        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator></q-separator>

      <q-expansion-item group="somegroup" icon="repeat_on"
      label="Recent Transactions" header-class="text-primary" default-opened>
        <q-card>
          <q-card-section>
              <q-list no-border padding class="rounded-borders" style="max-width: 350px">

      <q-item clickable v-ripple v-for="transaction in recentTrans" :key="transaction.id">
        <q-item-section avatar top>
          <q-avatar :icon="transaction.icon" :color="transaction.color" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">{{transaction.name}}</q-item-label>
          <q-item-label caption>{{transaction.date}}</q-item-label>
          <q-item-label caption class="refundCls"><q-icon name="credit_card" />{{transaction.status}}</q-item-label>
          <!-- <q-btn  size="xs" flat
          class="showCardBtnCls" color="primary" icon="credit_card" label="Refund on Debit Card" /> -->
        </q-item-section>

        <q-item-section side>
          <p class="moneyCls">+$${{transaction.amount}}</p>
        </q-item-section>
      </q-item>

    </q-list>


          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>
  </div>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CardTransactions',
  data() {
    return {
      recentTrans: []
    }
  },
  mounted() {
    this.recentTrans = this.$store.state.carddetails.recentTransactions;
  },


  setup () {

  }
})
</script>
<style scoped>
.refundCls{
  color: #1976D2;
}
.moneyCls{
  font-size: 12px;
  color: #01D167;
}
</style>
