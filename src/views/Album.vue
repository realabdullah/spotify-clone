<template>
  <div class="__album">
    <div class="album__cover">
      <img src="https://tooxclusive.com/wp-content/uploads/2021/02/Hear-Me-Out-artwork.jpeg" alt="her">
    </div>
    <div class="album__details">
      <p class="album__title">Hear Me Out</p>
      <div class="album__meta">
        <img src="https://tooxclusive.com/wp-content/uploads/2021/02/Hear-Me-Out-artwork.jpeg" alt="artist">
        <p class="album__artist">Pheelz</p>
      </div>
      <div class="album__year">
        <p>Album • 2020</p>
      </div>
      <div class="album__cta">
        <div class="cta__svg">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.6328 6.64686C21.3187 5.91944 20.8657 5.26027 20.2992 4.70623C19.7323 4.15055 19.064 3.70895 18.3305 3.40545C17.5699 3.0895 16.7541 2.92778 15.9305 2.92967C14.775 2.92967 13.6477 3.24608 12.668 3.84373C12.4336 3.9867 12.2109 4.14373 12 4.31483C11.7891 4.14373 11.5664 3.9867 11.332 3.84373C10.3523 3.24608 9.225 2.92967 8.06953 2.92967C7.2375 2.92967 6.43125 3.08905 5.66953 3.40545C4.93359 3.71014 4.27031 4.14842 3.70078 4.70623C3.13359 5.25964 2.6805 5.91897 2.36719 6.64686C2.04141 7.40389 1.875 8.20779 1.875 9.03513C1.875 9.8156 2.03438 10.6289 2.35078 11.4562C2.61563 12.1476 2.99531 12.8648 3.48047 13.589C4.24922 14.7351 5.30625 15.9304 6.61875 17.1422C8.79375 19.1507 10.9477 20.5382 11.0391 20.5945L11.5945 20.9507C11.8406 21.1078 12.157 21.1078 12.4031 20.9507L12.9586 20.5945C13.05 20.5359 15.2016 19.1507 17.3789 17.1422C18.6914 15.9304 19.7484 14.7351 20.5172 13.589C21.0023 12.8648 21.3844 12.1476 21.6469 11.4562C21.9633 10.6289 22.1227 9.8156 22.1227 9.03513C22.125 8.20779 21.9586 7.40389 21.6328 6.64686ZM12 19.0968C12 19.0968 3.65625 13.7508 3.65625 9.03513C3.65625 6.64686 5.63203 4.71092 8.06953 4.71092C9.78281 4.71092 11.2688 5.66717 12 7.06404C12.7312 5.66717 14.2172 4.71092 15.9305 4.71092C18.368 4.71092 20.3438 6.64686 20.3438 9.03513C20.3438 13.7508 12 19.0968 12 19.0968Z" fill="#FFFFFF"/>
          </svg>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4.5" cy="12.5" r="1.5" fill="white"/>
            <circle cx="12" cy="12.5" r="1.5" fill="white"/>
            <circle cx="19.5" cy="12.5" r="1.5" fill="white"/>
          </svg>
        </div>
        <div class="album__play">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60ZM21 18C20.4477 18 20 18.4477 20 19V41C20 41.5523 20.4477 42 21 42H25C25.5523 42 26 41.5523 26 41V19C26 18.4477 25.5523 18 25 18H21ZM35 18C34.4477 18 34 18.4477 34 19V41C34 41.5523 34.4477 42 35 42H39C39.5523 42 40 41.5523 40 41V19C40 18.4477 39.5523 18 39 18H35Z" fill="#84B963"/>
          </svg>
        </div>
      </div>
      <div class="album__songs">
        <div v-for="music in musicArray" class="album__song">
          <div class="song__details">
            <p class="song_title">{{ music.name }}</p>
            <p class="song__artist">{{ music.artist }}</p>
          </div>
          <div class="more">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4.5" cy="12.5" r="1.5" fill="white"/>
              <circle cx="12" cy="12.5" r="1.5" fill="white"/>
              <circle cx="19.5" cy="12.5" r="1.5" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__nav_">
      <ul>
        <li>
          <router-link to="/">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 7L12.5 2L21.5 7V22H14.5V15H10.5V22H3.5V7Z" fill="white"/>
            </svg>
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/search">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7703 2.5C7.47954 2.5 4 5.98347 4 10.2821C4 14.5806 7.47954 18.0641 11.7703 18.0641C13.8161 18.0641 15.6765 17.2729 17.0646 15.9782C18.5884 14.5569 19.5405 12.5313 19.5405 10.2821C19.5405 5.98347 16.061 2.5 11.7703 2.5ZM3 10.2821C3 5.43253 6.92591 1.5 11.7703 1.5C16.6146 1.5 20.5405 5.43253 20.5405 10.2821C20.5405 12.6447 19.6082 14.7901 18.0929 16.3683L21.8755 20.6698L21.1245 21.3302L17.3602 17.0494C15.8429 18.3074 13.8944 19.0641 11.7703 19.0641C6.92591 19.0641 3 15.1316 3 10.2821Z" fill="#ABABAB"/>
            </svg>
            <span>Search</span>
          </router-link>
        </li>
        <li>
          <router-link to="/library">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5404 20.697L13.0404 3.19696L13.9596 2.80304L21.4596 20.303L20.5404 20.697ZM3 21V3H4V21H3ZM9 21V3H10V21H9Z" fill="#ABABAB"/>
            </svg>
            <span>Library</span>
          </router-link>
        </li>
      </ul>
    </div>
    <router-link to="/playing" class="now__playing_">
      <div class="now__playing__song">
        <img src="https://www.bellanaija.com/wp-content/uploads/2020/11/Wurld-Afrosoul-Deluxe.jpg" alt="lauv">
        <div class="now__playing__details">
          <p class="now__playing__title">CHOP N PRAY</p>
          <p class="now__playing__artiste">WurlD</p>
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3H5V21H9V3Z" fill="white"/>
          <path d="M19 3H15V21H19V3Z" fill="white"/>
        </svg>
      </div>
    </router-link>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'

export default {
  setup() {
    const musicArray = ref([
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
      }
    ])

    onBeforeMount(() => {
      console.log(musicArray.value)
    })

    return {
      musicArray
    }
  }
}
</script>

<style>

</style>