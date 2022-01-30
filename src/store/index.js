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
      console.log(state.newDuration)
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

    // time format '00:00'
    formatDuration(dtbf) {
      let time = ''
      let s = dtbf.split(':')
      let i
      for (i = 0; i < s.length - 1; i++) {
        time += s[i].length == 1 ? '0' + s[i] : s[i]
        time += ':'
      }
      time += s[i].length == 1 ? '0' + s[i] : s[i]
      return time
    },

    //ms to hr, mins & sec
    convertToHMS(value) {
      let time = ''
      let h = parseInt(value / 3600)
      value %= 3600
      let m = parseInt(value / 60)
      let s = parseInt(value % 60)
      console.log(m + ':' + s)
      if (h > 0) {
        time = this.dispatch('formatDuration', h + ':' + m + ':' + s)
      } else {
        time = this.dispatch('formatDuration', m + ':' + s)
        console.log(time)
      }
      return time
    },

    //is music ready to play
    musicReady() {
      canplay.value = true
      getDuration()
    },

    //played time
    timeUpdate({ commit, state }, song) {
      const audio = song
      state.numb = audio.currentTime
      let wDuration = this.dispatch('convertToHMS', audio.currentTime)
      commit('UPDATE_TIME',  wDuration)
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
