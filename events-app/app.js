const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    submitForm() {
      alert('Submitted');
    },
    increaseCounter(num) {
      this.counter += num;
    },
    decreaseCounter(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
