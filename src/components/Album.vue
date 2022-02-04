<template>
  <div class="__album" v-for="details in album">
    <div @click="closeAlbum" v-on:click="$emit('view', viewAlbum)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7L12.5 17L21 7" stroke="white"/>
      </svg>
    </div>
    <div class="album__cover">
      <img :src="details.album_details.cover" alt="her">
    </div>
    <div class="album__details">
      <p class="album__title">{{ details.album_details.name }}</p>
      <div class="album__meta">
        <img :src="details.album_details.cover" alt="artist">
        <p class="album__artist">{{ details.album_details.artist }}</p>
      </div>
      <div class="album__year">
        <p>Album • {{ details.album_details.year }}</p>
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
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" id="SvgjsSvg1001" width="60" height="60" version="1.1"><defs id="SvgjsDefs1002"/>
            <g id="SvgjsG1008" transform="matrix(1,0,0,1,0,0)">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48">
                <path fill="none" d="M0 0h48v48H0z"/>
                <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z" fill="#84b963" class="color000 svgShape"/>
              </svg>
            </g>
          </svg>
          <!-- <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60ZM21 18C20.4477 18 20 18.4477 20 19V41C20 41.5523 20.4477 42 21 42H25C25.5523 42 26 41.5523 26 41V19C26 18.4477 25.5523 18 25 18H21ZM35 18C34.4477 18 34 18.4477 34 19V41C34 41.5523 34.4477 42 35 42H39C39.5523 42 40 41.5523 40 41V19C40 18.4477 39.5523 18 39 18H35Z" fill="#84B963"/>
          </svg> -->
        </div>
      </div>
      <div class="album__songs">
        <div v-for="song in details.track_list" class="album__song">
          <div @click="play(song.song_url)" class="song__details">
            <p class="song_title">{{ song.name }}</p>
            <p class="song__artist">{{ song.artist }}</p>
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
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const sonng = ref()

    const album = computed(() => {
      console.log(store.state.musicArray)
      return store.state.musicArray
    })

    const viewAlbum = ref(true)

    const closeAlbum = () => {
      viewAlbum.value = false
    }

    const play = (song) => {
      store.dispatch('playSolo', song)
      console.log(song)
      sonng.value = store.state.songSrc
      console.log(sonng.value)
    }

    // onBeforeMount(() => {
    //   console.log(album.value)
    // })

    return {
      play,
      album,
      viewAlbum,
      closeAlbum
    }
  }
}
</script>

<style>

</style>