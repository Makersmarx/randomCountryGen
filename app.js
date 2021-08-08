const app = Vue.createApp({
  data() {
    return {
      countryName: 'Costa Rica',
      currency: 'Colones',
      language: 'Spanish',
      capital: 'San Jose',
      flag: 'https://restcountries.eu/data/cri.svg',
      icon: '04d',
    };
  },
  methods: {
    async getCountry() {
      const res = await fetch('https://restcountries.eu/rest/v2/all');
      const data = await res.json();
      // console.log(data);
      const randomEl = Math.floor(Math.random() * 250);
      //   console.log('------->' + randomEl);
      (this.countryName = data[randomEl].name),
        (this.currency = data[randomEl].currencies[0].name),
        (this.language = data[randomEl].languages[0].name),
        (this.capital = data[randomEl].capital),
        (this.flag = data[randomEl].flag);
    },
  },
});

app.mount('#app');
