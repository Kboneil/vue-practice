<template>
  <div class="featured">
  <h1>
    Featured Pictures
  </h1>
  <div v-for="picture in pictures"
    class="single-picture"
    @click="goToDetail"
    >
    <img :src="picture.url" />
    <p>
      {{picture.description}}
    </p>
  </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'featured',
  methods: {
    goToDetail: function () {
      router.push({name: 'Detail', params: { id: 123 }})
    }
  },
  data () {
    return {
      pictures: [
        {
          description: 'Stupa in the mountains',
          url: 'https://www.nepalhikingteam.com/wp-content/uploads/2016/09/trekking-in-nepal-manaslu.jpg'
        },
        {
          description: 'Just outside of Pokhara',
          url: 'https://i.ytimg.com/vi/tD-snFobH8E/maxresdefault.jpg'
        },
        {
          description: '2 Buddhist monks in Kathmandu',
          url: 'https://c1.staticflickr.com/4/3095/3117120729_39ae037f39_b.jpg'
        },
        {
          description: 'Nepali girls',
          url: 'http://blog.ohheyworld.com/wp-content/uploads/2014/05/kind-people.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
img {
  width: 80vw;
  margin-top: 5vw;
}
.single-picture {
  width: 90vw;
  margin: 50px auto;
  border: 1px solid #350037;;
}
.single-picture:hover {
  border: 1px solid #407213;
  color: #407213;
}
</style>
