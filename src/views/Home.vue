<template>
 <div class="overall">
    <div class="home" v-if="!albumView && !nowPlaying">
      <div class="__header">
        <div class="__greeting">
          <p>{{ greeting }}</p>
        </div>
        <ul class="__toolbar">
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8.4C18 6.703 17.368 5.075 16.243 3.875C15.117 2.675 13.59 2 12 2C10.409 2 8.883 2.674 7.757 3.875C6.632 5.075 6 6.703 6 8.4C6 11.3835 6 15 6 15L4.70711 16.2929C4.07714 16.9229 4.52331 18 5.41421 18H18.5858C19.4767 18 19.9229 16.9229 19.2929 16.2929L18 15C18 15 18 11.3835 18 8.4Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.73 21C13.5544 21.3033 13.3021 21.5552 12.9985 21.7302C12.6948 21.9053 12.3505 21.9974 12 21.9974C11.6495 21.9974 11.3052 21.9053 11.0015 21.7302C10.6979 21.5552 10.4456 21.3033 10.27 21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V13L15 16" stroke="white"/>
              <path d="M4.15993 14.6483C4.08059 14.3838 3.80185 14.2337 3.53735 14.3131C3.27285 14.3924 3.12275 14.6711 3.20208 14.9356L4.15993 14.6483ZM2.80157 12.2063L7.32323 8.61628L1.95338 6.49541L2.80157 12.2063ZM20.4432 9.76422C21.7919 14.2607 19.2401 18.9992 14.7436 20.3479L15.0309 21.3058C20.0564 19.7984 22.9084 14.5024 21.401 9.47692L20.4432 9.76422ZM14.7436 20.3479C10.2471 21.6966 5.50864 19.1448 4.15993 14.6483L3.20208 14.9356C4.70947 19.9611 10.0054 22.8131 15.0309 21.3058L14.7436 20.3479ZM9.85951 4.06464C14.356 2.71592 19.0945 5.26771 20.4432 9.76422L21.401 9.47692C19.8937 4.45141 14.5977 1.59941 9.57221 3.1068L9.85951 4.06464ZM4.88731 8.27161C6.00492 6.33845 7.61078 4.73914 9.85951 4.06464L9.57221 3.1068C7.01 3.87532 5.22508 5.68938 4.02158 7.7711L4.88731 8.27161Z" fill="white"/>
            </svg>
          </li>
          <li>
            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0667 7.33331C9.46666 7.33331 7.39999 9.39998 7.39999 12C7.39999 14.6 9.46666 16.6666 12.0667 16.6666C14.6667 16.6666 16.7333 14.6 16.7333 12C16.7333 9.39998 14.6667 7.33331 12.0667 7.33331ZM12.0667 15.3333C10.2 15.3333 8.73333 13.8666 8.73333 12C8.73333 10.1333 10.2 8.66665 12.0667 8.66665C13.9333 8.66665 15.4 10.1333 15.4 12C15.4 13.8666 13.9333 15.3333 12.0667 15.3333Z" fill="white"/>
              <path d="M21.8667 9.79998L20 9.19998L19.6 8.19998L20.5333 6.46665C20.7333 6.06665 20.6667 5.53331 20.3333 5.19998L18.7333 3.59998C18.4 3.26665 17.8667 3.19998 17.4667 3.39998L15.7333 4.33331L14.7333 3.93331L14.1333 2.06665C14 1.66665 13.6 1.33331 13.1333 1.33331H10.8667C10.4 1.33331 9.99999 1.66665 9.93333 2.13331L9.33333 3.99998C8.93333 4.06665 8.59999 4.19998 8.26666 4.39998L6.53333 3.46665C6.13333 3.26665 5.59999 3.33331 5.26666 3.66665L3.66666 5.26665C3.33333 5.59998 3.26666 6.13331 3.46666 6.53331L4.33333 8.19998C4.19999 8.53331 4.06666 8.93331 3.93333 9.26665L2.06666 9.86665C1.66666 9.99998 1.33333 10.4 1.33333 10.8666V13.1333C1.33333 13.6 1.66666 14 2.13333 14.1333L3.99999 14.7333L4.39999 15.7333L3.46666 17.4666C3.26666 17.8666 3.33333 18.4 3.66666 18.7333L5.26666 20.3333C5.59999 20.6666 6.13333 20.7333 6.53333 20.5333L8.26666 19.6L9.26666 20L9.86666 21.9333C9.99999 22.3333 10.4 22.6666 10.8667 22.6666H13.1333C13.6 22.6666 14 22.3333 14.1333 21.9333L14.7333 20L15.7333 19.6L17.4667 20.5333C17.8667 20.7333 18.4 20.6666 18.7333 20.3333L20.3333 18.7333C20.6667 18.4 20.7333 17.8666 20.5333 17.4666L19.6 15.7333L20 14.7333L21.9333 14.1333C22.3333 14 22.6667 13.6 22.6667 13.1333V10.8666C22.6667 10.4 22.3333 9.93331 21.8667 9.79998ZM21.3333 12.9333L18.9333 13.6666L18.8667 14L18.2667 15.4L18.0667 15.7333L19.2667 17.9333L17.9333 19.2666L15.7333 18.0666L15.4 18.2666C14.9333 18.5333 14.4667 18.7333 14 18.8666L13.6667 18.9333L12.9333 21.3333H11.0667L10.3333 18.9333L9.99999 18.8666L8.59999 18.2666L8.26666 18.0666L6.06666 19.2666L4.73333 17.9333L5.93333 15.7333L5.73333 15.4C5.46666 14.9333 5.26666 14.4666 5.13333 14L5.06666 13.6666L2.66666 12.9333V11.0666L4.93333 10.4L5.06666 10.0666C5.19999 9.53331 5.39999 9.06665 5.66666 8.59998L5.86666 8.26665L4.73333 6.06665L6.06666 4.73331L8.19999 5.93331L8.53333 5.73331C8.99999 5.46665 9.46666 5.26665 9.99999 5.13331L10.3333 4.99998L11.0667 2.66665H12.9333L13.6667 4.99998L14 5.13331C14.4667 5.26665 14.9333 5.46665 15.4 5.73331L15.7333 5.93331L17.9333 4.73331L19.2667 6.06665L18.0667 8.26665L18.2667 8.59998C18.5333 9.06665 18.7333 9.53331 18.8667 9.99998L18.9333 10.3333L21.3333 11.0666V12.9333Z" fill="white"/>
            </svg>
          </li>
        </ul>
      </div>
      <div class="__mixes">
        <ul class="mix__grid">
          <li>
            <img src="../assets/visuals/discoverweek.png" alt="mix">
            <p>Discover weekly</p>
          </li>
          <li>
            <img src="../assets/visuals/dmix1.png" alt="mix">
            <p>Daily mix 1</p>
          </li>
          <li>
            <img src="../assets/visuals/dmix3.png" alt="mix">
            <p>Daily mix 3</p>
          </li>
          <li>
            <img src="../assets/visuals/chillvibes.png " alt="mix">
            <p>Chill vibes</p>
          </li>
          <li>
            <img src="../assets/visuals/teatime.png" alt="mix">
            <p>Tea time</p>
          </li>
          <li>
            <img src="../assets/visuals/powerhour.png" alt="mix">
            <p>Power hour</p>
          </li>
        </ul>
      </div>
      <div class="new__songs__header">
        <p>New songs added</p>
      </div>
      <div class="new__songs">
        <div class="nw__img">
          <img src="https://i.scdn.co/image/8fb70050bcf7955842d53918bd647407b97a206b" alt="newsongs">
        </div>
        <div class="new__songs__details">
          <p class="__title">Viral hits</p>
          <p class="__info">Playlist • The Kid LAROI, Olivia Rodrigo, Ariana Grande.</p>
          <div class="__ctas">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6328 6.64686C21.3187 5.91944 20.8657 5.26027 20.2992 4.70623C19.7323 4.15055 19.064 3.70895 18.3305 3.40545C17.5699 3.0895 16.7541 2.92778 15.9305 2.92967C14.775 2.92967 13.6477 3.24608 12.668 3.84373C12.4336 3.9867 12.2109 4.14373 12 4.31483C11.7891 4.14373 11.5664 3.9867 11.332 3.84373C10.3523 3.24608 9.225 2.92967 8.06953 2.92967C7.2375 2.92967 6.43125 3.08905 5.66953 3.40545C4.93359 3.71014 4.27031 4.14842 3.70078 4.70623C3.13359 5.25964 2.6805 5.91897 2.36719 6.64686C2.04141 7.40389 1.875 8.20779 1.875 9.03513C1.875 9.8156 2.03438 10.6289 2.35078 11.4562C2.61563 12.1476 2.99531 12.8648 3.48047 13.589C4.24922 14.7351 5.30625 15.9304 6.61875 17.1422C8.79375 19.1507 10.9477 20.5382 11.0391 20.5945L11.5945 20.9507C11.8406 21.1078 12.157 21.1078 12.4031 20.9507L12.9586 20.5945C13.05 20.5359 15.2016 19.1507 17.3789 17.1422C18.6914 15.9304 19.7484 14.7351 20.5172 13.589C21.0023 12.8648 21.3844 12.1476 21.6469 11.4562C21.9633 10.6289 22.1227 9.8156 22.1227 9.03513C22.125 8.20779 21.9586 7.40389 21.6328 6.64686ZM12 19.0968C12 19.0968 3.65625 13.7508 3.65625 9.03513C3.65625 6.64686 5.63203 4.71092 8.06953 4.71092C9.78281 4.71092 11.2688 5.66717 12 7.06404C12.7312 5.66717 14.2172 4.71092 15.9305 4.71092C18.368 4.71092 20.3438 6.64686 20.3438 9.03513C20.3438 13.7508 12 19.0968 12 19.0968Z" fill="#BFBFBF"/>
            </svg>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="white"/>
              <path d="M12 22V10L22 16L12 22Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="new__songs__header">
        <p>New album added</p>
      </div>
      <div class="new__album">
        <div class="nw__img">
          <img @click="viewAlbum" src="https://tooxclusive.com/wp-content/uploads/2021/02/Hear-Me-Out-artwork.jpeg" alt="newsongs">
        </div>
        <div class="new__album__details">
          <p @click="viewAlbum" class="__title">Hear Me Out</p>
          <p class="__info">Pheelz • Somebody, Many Men, La Vida, One Life..</p>
          <div class="__ctas">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6328 6.64686C21.3187 5.91944 20.8657 5.26027 20.2992 4.70623C19.7323 4.15055 19.064 3.70895 18.3305 3.40545C17.5699 3.0895 16.7541 2.92778 15.9305 2.92967C14.775 2.92967 13.6477 3.24608 12.668 3.84373C12.4336 3.9867 12.2109 4.14373 12 4.31483C11.7891 4.14373 11.5664 3.9867 11.332 3.84373C10.3523 3.24608 9.225 2.92967 8.06953 2.92967C7.2375 2.92967 6.43125 3.08905 5.66953 3.40545C4.93359 3.71014 4.27031 4.14842 3.70078 4.70623C3.13359 5.25964 2.6805 5.91897 2.36719 6.64686C2.04141 7.40389 1.875 8.20779 1.875 9.03513C1.875 9.8156 2.03438 10.6289 2.35078 11.4562C2.61563 12.1476 2.99531 12.8648 3.48047 13.589C4.24922 14.7351 5.30625 15.9304 6.61875 17.1422C8.79375 19.1507 10.9477 20.5382 11.0391 20.5945L11.5945 20.9507C11.8406 21.1078 12.157 21.1078 12.4031 20.9507L12.9586 20.5945C13.05 20.5359 15.2016 19.1507 17.3789 17.1422C18.6914 15.9304 19.7484 14.7351 20.5172 13.589C21.0023 12.8648 21.3844 12.1476 21.6469 11.4562C21.9633 10.6289 22.1227 9.8156 22.1227 9.03513C22.125 8.20779 21.9586 7.40389 21.6328 6.64686ZM12 19.0968C12 19.0968 3.65625 13.7508 3.65625 9.03513C3.65625 6.64686 5.63203 4.71092 8.06953 4.71092C9.78281 4.71092 11.2688 5.66717 12 7.06404C12.7312 5.66717 14.2172 4.71092 15.9305 4.71092C18.368 4.71092 20.3438 6.64686 20.3438 9.03513C20.3438 13.7508 12 19.0968 12 19.0968Z" fill="#BFBFBF"/>
            </svg>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="white"/>
              <path d="M12 22V10L22 16L12 22Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="podcast__header">
        <p>Podcasts for you</p>
      </div>
      <div class="podcast__card">
        <ul>
          <li>
            <img src="../assets/visuals/podcast4u.png" alt="podcast">
          </li>
          <li>
            <img src="../assets/visuals/podcastforu.png" alt="podcast">
          </li>
          <li>
            <img src="../assets/visuals/podcast4u.png" alt="podcast">
          </li>
        </ul>
      </div>
      <div class="podcast__header">
        <p>New Albums</p>
      </div>
      <div class="podcast__card">
        <ul>
          <li>
            <img src="../assets/visuals/podcast4u.png" alt="podcast">
          </li>
          <li>
            <img src="../assets/visuals/podcastforu.png" alt="podcast">
          </li>
          <li>
            <img src="../assets/visuals/podcast4u.png" alt="podcast">
          </li>
        </ul>
      </div>
      <div class="footer__nav">
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
      <div class="thats__all">
        <p>That's all for now.</p>
      </div>
    </div>
    <Album @view="closeAlbum" v-if="albumView && !nowPlaying" />
    <NowPlaying :songg="songg" @view="closeNP" v-if="nowPlaying" />
    <FloatPlayer @view="openNP" />
  </div>
</template>

<script>
import FloatPlayer from '../components/FloatPlayer.vue'
import Album from '../components/Album.vue'
import NowPlaying from '../components/NowPlaying.vue'
import { onBeforeMount, ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  components: {
    FloatPlayer,
    Album,
    NowPlaying
  },
  setup() {
    const store = useStore()
    const albumView = ref(false)
    const nowPlaying = ref()
    const greeting = ref()
    const songg = ref()
    // const songUrl = ref()

    const songUrl = computed(() => {
      console.log(store.state.songSrc)
      return store.state.songSrc
    })

    const viewAlbum = () => {
      albumView.value = true
    }

    const closeAlbum = (closeView) => {
      albumView.value = closeView
    }

    const openNP = (open) => {
      nowPlaying.value = open.a
      songg.value = open.b
      store.state.newSong = songg.value
      // console.log(store.state.newSong)
      // console.log(nowPlaying.value)
    }

    const closeNP = (close) => {
      nowPlaying.value = close
    }

    const getTime = () => {
      const today = new Date()
      const time = today.getHours()
      if(time < 12) {
        greeting.value = 'Good morning'
      }
      else if(time > 12 && time < 16) {
        greeting.value = 'Good afternoon'
      }
      else if(time > 16) {
        greeting.value = 'Good evening'
      }
    }

    onBeforeMount(() => {
      getTime()
    })

    return {
      closeNP,
      openNP,
      albumView,
      viewAlbum,
      closeAlbum,
      greeting,
      nowPlaying,
      songg,
      songUrl
    }
  }
}
</script>
