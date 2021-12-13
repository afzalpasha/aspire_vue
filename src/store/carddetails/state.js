export default function () {
  return {
    cards: [
      { id:1, name: 'Aspire User1',
      cardNumber:"1234 5678 3344 5555", lastDigits:"5555",
      expiry:'12/27',showCardFlag:false},
      { id:2, name: 'Aspire User2',
      cardNumber:"3345 5678 3344 4444", lastDigits:"4444",
      expiry:'23/25',showCardFlag:false},
      { id:3, name: 'Aspire User3',
      cardNumber:"6756 2367 2345 3333", lastDigits:"3333",
      expiry:'11/24',showCardFlag:false}
    ],
    recentTransactions:[
      {
        id:1,
        name:'Hamlays',
        color:'primary',
        date:'20 May 2020',
        status: 'Refund on Debit Card',
        amount: '1.25',
        icon:'work'
      },
      {
        id:2,
        name:'Hamlays',
        color:'teal',
        date:'22 May 2020',
        status: 'Refund on Credit Card',
        amount: '4.25',
        icon:'airplanemode_inactive'
      },
      {
        id:3,
        name:'Hamlays',
        color:'grey',
        date:'25 May 2020',
        status: 'Refund on Debit Card',
        amount: '5.25',
        icon:'add_alert'
      },
      {
        id:4,
        name:'Hamlays Author',
        color:'primary',
        date:'20 May 2020',
        status: 'Refund on Debit Card',
        amount: '1.25',
        icon:'work'
      },
      {
        id:5,
        name:'Hamlays Author',
        color:'teal',
        date:'22 May 2020',
        status: 'Refund on Credit Card',
        amount: '4.25',
        icon:'airplanemode_inactive'
      },
      {
        id:6,
        name:'Hamlays Author',
        color:'grey',
        date:'25 May 2020',
        status: 'Refund on Debit Card',
        amount: '5.25',
        icon:'add_alert'
      }
    ]
  }
}
