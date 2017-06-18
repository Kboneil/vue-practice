<template>
  <div class="contact">
  <h1>
    Contact
  </h1>
  <label name="name">
    Name
  </label>
  <input type="text" id="name" v-model="name"/>
  <button @click="send">Send</button>
  <p v-if="name === ''">Please enter a name.</p>
  </div>
</template>

<script>
export default {
  name: 'contact',
  methods: {
    send: function () {
      console.log('Your name is: ', this.name)
    }
  },
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
