<template>
<div> 
    <div class="container">
        <div class="game-container" v-for="item in games" :key="item.id">
        <h1>{{item.title}}</h1>
        <div class="image-con">
        <img @click="openGame(item)" :src="item.image" alt="">            
        </div>
            <h3>{{item.platforms}}</h3>
                <div v-bind:class="[getNum(item.worth) > 10 ? 'yellow' : 'green']">
                    <p>{{ item.worth }}</p>
                </div>
            </div>  
    </div>

</div>

</template>

<script>
export default {
    name: 'Game',
    props: ['game'],
    computed: {
    games() {
      return this.$store.state.gamesList
    },
  },
    methods: {
    openGame(item) {
      let id = item.id
      this.$router.push('/game/'+id)
    },
    getNum: function (numberString) {
      let untilDot = numberString.match(/[^.]*/, "");
      let num = untilDot[0].replace(/[^0-9]/g, "");
      return Number(num.substring(0, 2));
    },
  },
}

</script>

<style scoped>
.game-container {
    margin-top: 80px;
}

.game-container h1 {
    font-size: 0.8rem;
    margin: 10px 0 10px 0;
}

.game-container h3 {
    font-size: 0.8rem;
    margin-top: 15px;
}

.game-container div {
    font-size: 0.8rem;
    margin-top: 15px;
}

.image-con {
    overflow: hidden;
}

.image-con img {
    cursor: pointer;
    margin: 10px;
    width: 550px;
}

.image-con img:hover {
    transform: scale(1.2);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.green{
    background-color: rgba(16, 236, 27, 0.5);
}
.yellow{
    background-color: rgba(229, 255, 0, 0.5);
  }


</style>