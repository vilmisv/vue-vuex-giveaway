<template>
<div class="main">
    <div>
        <div class="con">
            <div class="sort-con">
                <div class="select-container">
                    <label for="type">Select type</label>
                        <select name="" id="type" v-model="selectedType">
                            <option
                            v-for="(type, index) in types"
                            :value="types[index]"
                            :key="index">{{type}}
                            </option>
                        </select>

                    <label for="platform">Select platform</label>
                        <select name="" id="platform" v-model="selectedPlatform">
                            <option
                            v-for="(platform, index) in platforms"
                            :value="platforms[index]"
                            :key="index">{{platform}}
                            </option>
                        </select>

                    <label for="sort">Sort</label>
                        <select name="" id="sort" v-model="selectedSort">
                        <option
                        v-for="(sort, index) in sortBy"
                        :value="sortBy[index]"
                        :key="index">{{sort}}
                        </option>
                        </select>

                    <button @click="sortMethod">Serch</button>
                </div>
                <div>
                    <div class="container">
                        <div class="game-container" v-for="item in sortItem" :key="item.id">
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
            </div>

        </div>
    </div>
</div>

</template>

<script>
export default {
    name: 'sortBy',
    data(){
    return{
      types: ["game", "loot", "beta"],
      platforms: ['pc', 'steam', 'epic-games-store', 'ubisoft', 'gog', 'itchio', 'ps4', 'xbox-one', 'switch', 'android', 'ios', 'vr', 'battlenet', 'origin', 'drm-free'],
      sortBy: ['date', 'value', 'popularity'],
      selectedType: '',
      selectedPlatform: '',
      selectedSort: '',
    }
  },
    methods: {
    sortMethod(){
      const dataSort = {
        platform: this.selectedPlatform,
        type: this.selectedType,
        sort: this.selectedSort
      }
      this.$store.dispatch('getSort', dataSort)
    },
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
    computed: {
        sortItem() {
          return this.$store.state.sortGameList
        }
    }

}
</script>

<style scoped>

.main {
    margin: -20px;
}

.game-container {
    margin-top: 80px;
}

.game-container h1 {
    font-size: 0.9rem;
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

.con {
    border: rgb(255, 255, 255) solid 1px;
    margin: 0px;
}

.btn {
    margin-top: 50px;
}

.sort-con {
    margin-top: 80px;
}

.select-container {
    padding: 15px;
}


.green{
    background-color: rgba(16, 236, 27, 0.5);
}
.yellow{
    background-color: rgba(229, 255, 0, 0.5);
  }
</style>