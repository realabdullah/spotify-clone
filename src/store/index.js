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
    songSrc: null,
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
    },
    UPDATE_PROGRESS(state, payload) {
      state.progress = payload
    },
    SET_SRC(state, payload) {
      state.songSrc = payload
    }
  },
  actions: {
    // Get the total duration of the music
    getDuration({state}) {
      const audio = state.newSong
      const time = audio.duration
      const progress = time
      this.commit('UPDATE_PROGRESS', progress)
      this.dispatch('convertTD', time)
    },

    convertTD({commit, state}, value) {
      let time = ''
      let m = Math.floor(value / 60)
      m = (m >= 10) ? m : "0" + m
      let s = Math.floor(value % 60)
      s = (s >= 10) ? s : "0" + s
      time = m + ':' + s
      this.commit('SONG_DURATION', time)
      return time
    },

    //ms to hr, mins & sec
    convertToHMS({state}, value) {
      let time = ''
      let m = Math.floor(value / 60)
      m = (m >= 10) ? m : "0" + m
      let s = Math.floor(value % 60)
      s = (s >= 10) ? s : "0" + s
      time = m + ':' + s
      this.commit('UPDATE_TIME', time)
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
    skipValue({ state }) {
      const audio = state.newSong
      if (audio.paused || audio.currentTime != 0) {
        audio.currentTime = state.numb
        if (state.numb == Math.floor(state.progress)) {
          audio.pause()
          this.commit('IS_PLAYING', false)
        }
      }
    },

    //music playback
    playMusic({state}) {
      const audio = state.newSong
      audio.play()
      this.commit('IS_PLAYING', true)
      this.commit('PLAY_STATE', 'pause')
      console.log('play')
    },

    pauseMusic({state}) {
      const audio = state.newSong
      audio.pause()
      this.commit('IS_PLAYING', false)
      this.commit('PLAY_STATE', 'play')
      console.log('pause')
    },

    //playing single
    playSolo({state}, song) {
      state.songSrc = song
      this.commit('SET_SRC', song)
      this.commit('IS_PLAYING', true)
      this.commit('PLAY_STATE', 'pause')
      // this.dispatch('playMusic')
    },

    isAudioLoaded() {
      audioLoaded.value = true
    }
  },
  modules: {
  }
})
