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
    songDuration: '00:00',
    newDuration: '00:00',
    song: '',
    progress: '',
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
    SONG_DURATION(state, payload) {
      state.songDuration = payload
    },
    UPDATE_TIME(state, payload) {
      state.newDuration = payload
    }
  },
  actions: {
    // Get the total duration of the music
    getDuration({state}, song) {
      const audio = song
      const time = audio.duration
      state.progress = time
      this.dispatch('convertTD', time)
    },

    convertTD({commit}, value) {
      let time = ''
      let m = Math.floor(value / 60)
      m = (m >= 10) ? m : "0" + m
      let s = Math.floor(value % 60)
      s = (s >= 10) ? s : "0" + s
      time = m + ':' + s
      commit('SONG_DURATION', time)
      return time
    },

    //ms to hr, mins & sec
    convertToHMS({commit, state}, value) {
      let time = ''
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
      this.dispatch('convertToHMS', state.numb)
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
