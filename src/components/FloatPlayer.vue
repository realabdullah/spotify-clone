<template>
  <div class="now__playing">
    <!-- <div @input="setMusic($event.target.innerText)">
      {{ song }}
    </div> -->
    <audio @canplay="musicReady" @timeupdate="timeUpdate" ref="song" preload="metadata" loop>
      <source :src="songSrc" type="audio/mpeg" />
    </audio>
    <div @click="openNP" v-on:click="$emit('view', {a: nowPlaying, b: song})" class="now__playing__song">
      <img :src="songImg" alt="lauv">
      <div class="now__playing__details">
        <p class="now__playing__title">{{ songTitle }}</p>
        <p class="now__playing__artiste">{{ songArtist }}</p>
      </div>
    </div>
    <div class="now__playing__ctas">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 18H9V19H5V18Z" fill="white"/>
        <path d="M9 5.5H4C3.44772 5.5 3 5.94772 3 6.5V15C3 15.5523 3.44772 16 4 16H9" stroke="white"/>
        <circle cx="15.5" cy="13.5" r="2" stroke="white"/>
        <circle cx="15.5" cy="7.98936" r="0.75" fill="white"/>
        <rect x="11.5" y="5.5" width="8" height="13" rx="0.5" stroke="white"/>
      </svg>
      <svg v-if="playPause" @click="pauseMusic" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3H5V21H9V3Z" fill="white"/>
        <path d="M19 3H15V21H19V3Z" fill="white"/>
      </svg>
      <svg v-else @click="playMusic" width="27" height="27" version="1.1"><defs id="SvgjsDefs1002"/><g id="SvgjsG1008" transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 48 48">
        <path fill="none" d="M-838-2232H562v3600H-838z"/>
        <path d="M16 10v28l22-14z" fill="#FFFFFF"/>
        <path fill="none" d="M0 0h48v48H0z"/></svg></g>
      </svg>
    </div>
    <input v-if="playPause" class="styled-slider" v-model="numb" type="range" min="0" :max="progress" @input="skipValue" :style="{background: '-webkit-linear-gradient(top, #FFFFFF, #FFFFFF) 0% 0% / '+ numb*100/progress +'% 100% no-repeat'}">
  </div>
</template>

<script>
import { ref, computed, onMounted, onUpdated } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const song = ref()
    // const songSrc = ref(store.state.songSrc)
    const nowPlaying = ref(false)
    const progress = ref(store.state.progress)
    const numb = ref(store.state.numb)

    store.state.newSong = song.value

    const songSrc = computed(() => {
      return store.state.songSrc
    })

    const songTitle = computed(() => {
      return store.state.songTitle
    })

    const songArtist = computed(() => {
      return store.state.songArtist
    })

    const songImg = computed(() => {
      return store.state.songImg
    })

    const openNP = () => {
      nowPlaying.value = true
    }

    const playPause = computed(() => {
      return store.state.isPlaying
    })

    // Get the total duration of the music
    const musicReady = () => {
      store.state.newSong = song.value
      store.dispatch('musicReady')
    }

    // const songDuration = computed(() => {
    //   return store.state.songDuration
    // })

    //played time
    const timeUpdate = () => {
      store.dispatch('timeUpdate')
    }

    const playMusic = () => {
      store.dispatch('playMusic')
    }

    const pauseMusic = () => {
      store.dispatch('pauseMusic')
    }

    //skipping music
    const skipValue = () => {
      store.dispatch('skipValue')
    }

    onMounted(() => {
      store.state.newSong = song.value
      console.log(song.value)
    })

    onUpdated(() => {
      store.state.newSong = song.value
      console.log(song.value)
      if(store.state.isPlaying == true) {
        store.dispatch('playMusic')
        console.log('im playing')
      }
    })

    return {
      songSrc,
      songTitle,
      songArtist,
      songImg,
      skipValue,
      musicReady,
      playMusic,
      pauseMusic,
      song,
      playPause,
      openNP,
      nowPlaying,
      timeUpdate,
      progress,
      numb
    }
  }
}
</script>

<style>

</style>