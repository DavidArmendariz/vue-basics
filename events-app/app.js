const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
    },
    increaseCounter(num) {
      this.counter += num;
    },
    decreaseCounter(num) {
      this.counter -= num;
    },
  },
});

app.mount('#events');
