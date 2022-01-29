<template>
  <div class="__playing">
    <div class="playing__header">
      <router-link to="/">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7L12.5 17L21 7" stroke="white"/>
        </svg>
      </router-link>
      <p>Playling from AFROSOUL</p>
      <div class="__more">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4.5" cy="12.5" r="1.5" fill="white"/>
          <circle cx="12" cy="12.5" r="1.5" fill="white"/>
          <circle cx="19.5" cy="12.5" r="1.5" fill="white"/>
        </svg>
      </div>
    </div>
    <div class="playing__details">
      <div class="track__cover">
        <img src="https://www.bellanaija.com/wp-content/uploads/2020/11/Wurld-Afrosoul-Deluxe.jpg" alt="lauv">
      </div>
      <div class="track__details">
        <div class="track__author">
          <p class="track__title">CHOP N PRAY</p>
          <p class="track__artist">WurlD</p>
        </div>
        <div class="__fav">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.6328 6.64686C21.3187 5.91944 20.8657 5.26027 20.2992 4.70623C19.7323 4.15055 19.064 3.70895 18.3305 3.40545C17.5699 3.0895 16.7541 2.92778 15.9305 2.92967C14.775 2.92967 13.6477 3.24608 12.668 3.84373C12.4336 3.9867 12.2109 4.14373 12 4.31483C11.7891 4.14373 11.5664 3.9867 11.332 3.84373C10.3523 3.24608 9.225 2.92967 8.06953 2.92967C7.2375 2.92967 6.43125 3.08905 5.66953 3.40545C4.93359 3.71014 4.27031 4.14842 3.70078 4.70623C3.13359 5.25964 2.6805 5.91897 2.36719 6.64686C2.04141 7.40389 1.875 8.20779 1.875 9.03513C1.875 9.8156 2.03438 10.6289 2.35078 11.4562C2.61563 12.1476 2.99531 12.8648 3.48047 13.589C4.24922 14.7351 5.30625 15.9304 6.61875 17.1422C8.79375 19.1507 10.9477 20.5382 11.0391 20.5945L11.5945 20.9507C11.8406 21.1078 12.157 21.1078 12.4031 20.9507L12.9586 20.5945C13.05 20.5359 15.2016 19.1507 17.3789 17.1422C18.6914 15.9304 19.7484 14.7351 20.5172 13.589C21.0023 12.8648 21.3844 12.1476 21.6469 11.4562C21.9633 10.6289 22.1227 9.8156 22.1227 9.03513C22.125 8.20779 21.9586 7.40389 21.6328 6.64686ZM12 19.0968C12 19.0968 3.65625 13.7508 3.65625 9.03513C3.65625 6.64686 5.63203 4.71092 8.06953 4.71092C9.78281 4.71092 11.2688 5.66717 12 7.06404C12.7312 5.66717 14.2172 4.71092 15.9305 4.71092C18.368 4.71092 20.3438 6.64686 20.3438 9.03513C20.3438 13.7508 12 19.0968 12 19.0968Z" fill="white"/>
          </svg>
        </div>
      </div>
      <audio @canplay="musicReady" @timeupdate="timeUpdate" ref="song" preload="metadata" loop>
        <source src="../assets/music/chopnpray.mp3" type="audio/mpeg" />
      </audio>
      <!-- <div class="__progress"></div> -->
      <input v-model="numb" type="range" min="0" :max="progress" @input="skipValue">
      <div class="__durations">
        <div class="__duration">
          <span id="current-time">{{ newDuration }}</span>
        </div>
        <div class="time__left">
          <span id="duration">{{ songDuration }}</span>
        </div>
      </div>
    </div>
    <div class="playing__options">
      <div class="shuffle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1367 7.49442C13.5129 6.32173 14.5 5.5 18 5.5V6.5C15 6.5 14.0496 7.17827 12.7852 8.25558C11.5114 9.34097 10.3703 10.798 9.20851 12.3053C9.16178 12.3659 9.11502 12.4266 9.0682 12.4873C7.96595 13.9182 6.83786 15.3826 5.59114 16.4977C4.28305 17.6677 2.79404 18.5 1 18.5V17.5C2.45596 17.5 3.71695 16.8323 4.92448 15.7523C6.1003 14.7007 7.1775 13.3027 8.30122 11.8443C8.33959 11.7945 8.37801 11.7447 8.4165 11.6947C9.56717 10.202 10.7699 8.65903 12.1367 7.49442Z" fill="white"/>
          <path d="M22 6L17.5 8.59808L17.5 3.40192L22 6Z" fill="white"/>
          <path d="M22 18L17.5 20.5981L17.5 15.4019L22 18Z" fill="white"/>
          <path d="M18 18.5C14.5 18.5 13.5129 17.6783 12.1367 16.5056C11.472 15.9392 10.8461 15.2833 10.2461 14.5873L11.0199 13.9533C11.5889 14.6126 12.1717 15.2216 12.7852 15.7444C14.0496 16.8217 14.5 17.5 18 17.5V18.5Z" fill="white"/>
          <path d="M7.22575 9.20269C6.69957 8.58773 6.1576 8.00896 5.59114 7.50232C4.28305 6.33235 2.79404 5.5 1 5.5V6.5C2.45596 6.5 3.71695 7.16765 4.92448 8.24768C5.44903 8.71684 5.95394 9.25492 6.45212 9.83653L7.22575 9.20269Z" fill="white"/>
        </svg>
      </div>
      <div class="prev">
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0C0.447693 0 0 0.447754 0 1V23C0 23.5522 0.447693 24 1 24H3C3.55231 24 4 23.5522 4 23V13.1428L21.5038 23.145C22.1705 23.5261 23 23.0447 23 22.2769V1.72314C23 0.955322 22.1705 0.473877 21.5038 0.85498L4 10.8572V1C4 0.447754 3.55231 0 3 0H1Z" fill="white"/>
        </svg>
      </div>
      <div v-if="isPlaying" @click="playMusic" id="play-icon" class="play__pause">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60ZM21 18C20.4477 18 20 18.4477 20 19V41C20 41.5523 20.4477 42 21 42H25C25.5523 42 26 41.5523 26 41V19C26 18.4477 25.5523 18 25 18H21ZM35 18C34.4477 18 34 18.4477 34 19V41C34 41.5523 34.4477 42 35 42H39C39.5523 42 40 41.5523 40 41V19C40 18.4477 39.5523 18 39 18H35Z" fill="white"/>
        </svg>
      </div>
      <div v-else @click="playMusic" id="play-icon" class="play__pause">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 8 8">
          <path d="M4 0C1.79 0 0 1.79 0 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM3 2l3 2-3 2V2z" fill="white"/>
        </svg>
      </div>
      <div class="next">
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 0C22.5523 0 23 0.447754 23 1V23C23 23.5522 22.5523 24 22 24H20C19.4477 24 19 23.5522 19 23V13.1428L1.49615 23.145C0.829468 23.5261 0 23.0447 0 22.2769V1.72314C0 0.955322 0.829468 0.473877 1.49615 0.85498L19 10.8572V1C19 0.447754 19.4477 0 20 0H22Z" fill="white"/>
        </svg>
      </div>
      <div class="repeat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5.5L15.5 8.09814V6H7.5C4.18628 6 1.5 8.68628 1.5 12C1.5 13.167 1.83264 14.2546 2.40808 15.1753L1.56018 15.7053C0.888184 14.6304 0.5 13.3599 0.5 12C0.5 8.13403 3.63403 5 7.5 5H15.5V2.90186L20 5.5Z" fill="white"/>
          <path d="M22.5 12C22.5 10.9456 22.2284 9.95605 21.7518 9.09619L22.6265 8.61133C23.1832 9.61597 23.5 10.7717 23.5 12C23.5 15.866 20.366 19 16.5 19H7.5V21.0981L3 18.5L7.5 15.9019V18H16.5C19.8137 18 22.5 15.3137 22.5 12Z" fill="white"/>
        </svg>
      </div>
    </div>
    <div class="__others">
      <div class="connect">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 18H9V19H5V18Z" fill="white"/>
          <path d="M9 5.5H4C3.44772 5.5 3 5.94772 3 6.5V15C3 15.5523 3.44772 16 4 16H9" stroke="white"/>
          <circle cx="15.5" cy="13.5" r="2" stroke="white"/>
          <circle cx="15.5" cy="7.98936" r="0.75" fill="white"/>
          <rect x="11.5" y="5.5" width="8" height="13" rx="0.5" stroke="white"/>
        </svg>
      </div>
      <div class="playlist">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5 10.1962L9.5 7.59814L5 5.00006V10.1962ZM11.5 8.09814H18.5V7.09814H11.5V8.09814ZM5 13.5981H18.5V12.5981H5V13.5981ZM5 19.0981H18.5V18.0981H5V19.0981Z" fill="white"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick, onBeforeMount } from 'vue'

export default {
  setup() {
    const audioLoaded = ref(false)
    const song = ref()
    const playState = ref('play')
    const isPlaying = ref(false)
    const songDuration = ref('00:00')
    const newDuration = ref('00:00')
    const progress = ref(0)
    const canplay = ref(false)
    const numb = ref(0)

    // Get the total duration of the music
    const getDuration = () => {
      const audio = song.value
      const time = audio.duration
      progress.value = time
      // total duration in seconds
      songDuration.value = convertToHMS(time);
    }

    // time format '00:00'
    const formatDuration = (value) => {
      let time = ''
      let s = value.split(':')
      let i
      for (i = 0; i < s.length - 1; i++) {
        time += s[i].length == 1 ? '0' + s[i] : s[i]
        time += ':'
      }
      time += s[i].length == 1 ? '0' + s[i] : s[i]
      return time
    }

    //ms to hr, mins & sec
    const convertToHMS = (value) => {
      let time = ''
      let h = parseInt(value / 3600)
      value %= 3600
      let m = parseInt(value / 60)
      let s = parseInt(value % 60)
      if (h > 0) {
        time = formatDuration(h + ':' + m + ':' + s)
      } else {
        time = formatDuration(m + ':' + s)
      }
      return time
    }

    //is music ready to play
    const musicReady = () => {
      canplay.value = true
      getDuration()
    }

    //played time
    const timeUpdate = () => {
      const audio = song.value
      numb.value = audio.currentTime;
      newDuration.value = convertToHMS(audio.currentTime);
    }

    //skipping music
    const skipValue = () => {
      const audio = song.value
      if (audio.paused || audio.currentTime != 0) {
        audio.currentTime = numb.value
        if (numb.value == Math.floor(progress.value)) {
          audio.pause()
          isPlaying.value = false
        }
      }
    }

    //music playback
    const playMusic = () => {
      const audio = song.value
      if(playState.value === 'play') {
        audio.play()
        isPlaying.value = true
        console.log('play')
        playState.value = 'pause'
      } 
      else {
        audio.pause()
        isPlaying.value = false
        console.log('pause')
        playState.value = 'play'
      }
    }

    const isAudioLoaded = () => {
      audioLoaded.value = true
    }

    return {
      progress,
      numb,
      musicReady,
      timeUpdate,
      playMusic,
      song,
      isPlaying,
      isAudioLoaded,
      songDuration,
      newDuration,
      skipValue
    }
  }

}
</script>

<style>

</style>