import { createStore, Store } from 'vuex'
import { ref } from 'vue'

const audioLoaded = ref(false)
// const song = ref()
const isPlaying = ref(false)
const progress = ref(0)
const canplay = ref(false)
const numb = ref(0)

export default createStore({
  state: {
    newSong: '',
    numb: 0,
    songDuration: '00:00',
    newDuration: '00:00',
    song: '',
    progress: '',
    playState: 'play',
    isPlaying: false,
    musicArray: [
      {
        album_details: {
          name: 'Hear Me Out',
          artist: 'Pheelz',
          year: 2020,
          cover: 'https://tooxclusive.com/wp-content/uploads/2021/02/Hear-Me-Out-artwork.jpeg'
        },
        track_list: [
          {
            id: 1,
            cover: 'https://tooxclusive.com/wp-content/uploads/2021/02/Hear-Me-Out-artwork.jpeg',
            name: 'La Vida',
            album_name: 'Hear Me Out',
            artist: 'Pheelz',
            song_url: '../assets/music/lavida.mp3',
            year: 2020
          },
          {
            id: 2,
            cover: 'https://tooxclusive.com/wp-content/uploads/2021/02/Hear-Me-Out-artwork.jpeg',
            name: 'Many Men',
            album_name: 'Hear Me Out',
            artist: 'Pheelz',
            song_url: '../assets/music/manymen.mp3',
            year: 2020
          },
          {
            id: 3,
            cover: 'https://tooxclusive.com/wp-content/uploads/2021/02/Hear-Me-Out-artwork.jpeg',
            name: 'One Life',
            album_name: 'Hear Me Out',
            artist: 'Pheelz',
            song_url: '../assets/music/onelife.mp3',
            year: 2020
          },
          {
            id: 4,
            cover: 'https://tooxclusive.com/wp-content/uploads/2021/02/Hear-Me-Out-artwork.jpeg',
            name: 'Somebody',
            album_name: 'Hear Me Out',
            artist: 'Pheelz',
            song_url: '../assets/music/somebody.mp3',
            year: 2020
          }
        ]
      }
    ]
  },
  mutations: {
    SONG_DURATION(state, payload) {
      state.songDuration = payload
    },
    UPDATE_TIME(state, payload) {
      state.newDuration = payload
    },
    IS_PLAYING(state, payload) {
      state.isPlaying = payload
    },
    PLAY_STATE(state, payload) {
      state.playState = payload
    }
  },
  actions: {
    // Get the total duration of the music
    getDuration({state}) {
      const audio = state.newSong
      const time = audio.duration
      state.progress = time
      this.dispatch('convertTD', time)
    },

    convertTD({commit, state}, value) {
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
      this.dispatch('getDuration')
    },

    //played time
    timeUpdate({ state }) {
      // console.log(state.newSong)
      const audio = state.newSong
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
    playMusic({commit, state}) {
      const audio = state.newSong
      audio.play()
      commit('IS_PLAYING', true)
      commit('PLAY_STATE', 'pause')
      console.log('play')
    },

    pauseMusic({commit, state}) {
      const audio = state.newSong
      audio.pause()
      commit('IS_PLAYING', false)
      commit('PLAY_STATE', 'play')
      console.log('pause')
    },

    isAudioLoaded() {
      audioLoaded.value = true
    }
  },
  modules: {
  }
})
