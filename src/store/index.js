import { createStore, Store } from 'vuex'
import { ref } from 'vue'

const audioLoaded = ref(false)
// const song = ref()
const isPlaying = ref(false)
const songDuration = ref('00:00')
const newDuration = ref('00:00')
const progress = ref(0)
const canplay = ref(false)
const numb = ref(0)

export default createStore({
  state: {
    numb: 0,
    newDuration: '00:00',
    song: '',
    playState: 'play',
    isPlaying: false,
    musicArray: [
      {
        cover: 'https://tooxclusive.com/wp-content/uploads/2021/02/Hear-Me-Out-artwork.jpeg',
        name: 'La Vida',
        artist: 'Pheelz',
        song_url: '../assets/music/lavida.mp3'
      },
      {
        cover: 'https://tooxclusive.com/wp-content/uploads/2021/02/Hear-Me-Out-artwork.jpeg',
        name: 'Many Men',
        artist: 'Pheelz',
        song_url: '../assets/music/manymen.mp3'
      },
      {
        cover: 'https://tooxclusive.com/wp-content/uploads/2021/02/Hear-Me-Out-artwork.jpeg',
        name: 'One Life',
        artist: 'Pheelz',
        song_url: '../assets/music/onelife.mp3'
      },
      {
        cover: 'https://tooxclusive.com/wp-content/uploads/2021/02/Hear-Me-Out-artwork.jpeg',
        name: 'Somebody',
        artist: 'Pheelz',
        song_url: '../assets/music/somebody.mp3'
      },
      {
        cover: 'https://www.bellanaija.com/wp-content/uploads/2020/11/Wurld-Afrosoul-Deluxe.jpg',
        name: 'CHOP N PRAY',
        artist: 'WurlD',
        song_url: '../assets/music/chopnpray.mp3'
      }
    ]
  },
  mutations: {
    UPDATE_TIME(state, payload) {
      state.newDuration = payload
    }
  },
  actions: {
    // Get the total duration of the music
    getDuration() {
      const audio = song.value
      const time = audio.duration
      progress.value = time
      // total duration in seconds
      songDuration.value = convertToHMS(time)
    },

    //ms to hr, mins & sec
    convertToHMS({commit, state}, value) {
      console.log(value)
      let time = ''
      // let h = parseInt(value / 3600)
      // value %= 3600
      let m = Math.floor(value / 60)
      m = (m >= 10) ? m : "0" + m
      let s = Math.floor(value % 60)
      s = (s >= 10) ? s : "0" + s
      time = m + ':' + s
      commit('UPDATE_TIME', time)
      return time
    },

    //is music ready to play
    musicReady() {
      canplay.value = true
      getDuration()
    },

    //played time
    timeUpdate({ state }, song) {
      const audio = song
      state.numb = audio.currentTime
      let wDuration = this.dispatch('convertToHMS', state.numb)
    },

    //skipping music
    skipValue() {
      const audio = song.value
      if (audio.paused || audio.currentTime != 0) {
        audio.currentTime = numb.value
        if (numb.value == Math.floor(progress.value)) {
          audio.pause()
          isPlaying.value = false
        }
      }
    },

    //music playback
    playMusic(playAudio) {
      playAudio
      this.state.isPlaying = true
      this.state.playState = 'pause'
      console.log('play')
    },

    pauseMusic(pauseAudio) {
      pauseAudio
      this.state.isPlaying = false
      this.state.playState = 'play'
      console.log('pause')
    },

    isAudioLoaded() {
      audioLoaded.value = true
    }
  },
  modules: {
  }
})
