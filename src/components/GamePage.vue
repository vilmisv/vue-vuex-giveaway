<template>
<div>
    <div>
        <div class="con">
            <div class="game-container" v-if="game">
                <div class="title-img">
                    <h1>{{game.title}}</h1>
                    <img :src="game.thumbnail" alt="">                    
                </div>
                <div class="text-container">
                    <span>Description:</span>
                    <p>{{game.description}}</p>
                    <p class="end-date"><span>End Date:</span>{{game.end_date}}</p>
                    <p> <span>Instruction:</span> {{game.instructions}}</p>
                    <p><span>Platform:</span> {{game.platforms}}</p>
                    <p><span>Type:</span> {{game.type}}</p>
                    <p><span>Worth:</span> {{game.worth}} </p>
                    <a :href="game.open_giveaway_url"><button>Link to Game official Website</button></a>
                </div>

            </div>
        </div>

    </div>

</div>

</template>

<script>
export default {
    name: 'GamePage',
    computed: {
        game() {
            return this.$store.state.oneGame
        }
    },
    created() {
    this.$store.dispatch('getGame', this.$route.params.id)
    }
}
</script>

<style scoped>

.game-container {
    margin-top: 80px;
    text-align: start;
    display: flex;
    align-items: center;
}

.game-container h1{
    margin-bottom: 10px;
    font-size: 1.1rem;
}

.game-container img{
    width: 500px;
}

.game-container span {
    font-weight: bold;
}

.game-container p {
    margin-bottom: 10px;
}

.end-date {
    font-size: 1rem;
    font-weight: none;
}

.con {
    border: rgb(255, 255, 255) solid 1px;
    margin: 0px;
    display: flex;
    align-items: center;
    height: 800px;
}

.text-container {
    padding-left: 20px;
}

.game-container button {
    height: 30px;
    width: 200px;
    color: white;
    background-color: rgb(43, 43, 43);
    border: rgb(43, 43, 43) solid 1px;
    border-radius: 2px;
    cursor: pointer;
}

.game-container button:hover {

    background-color: rgb(66, 66, 66);
}

.game-container button:active {

    background-color: rgb(31, 27, 27);
}

.title-img {
    text-align: center;
}

</style>