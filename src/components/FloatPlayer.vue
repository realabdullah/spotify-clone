<script setup>
import ExpandArtIcon from "./Icons/ExpandArtIcon.vue";
import MiniLikeIcon from "./Icons/MiniLikeIcon.vue";
import PipIcon from "./Icons/PipIcon.vue";
import ShuffleIcon from "./Icons/ShuffleIcon.vue";
import PreviousIcon from "./Icons/PreviousIcon.vue";
import PlayIcon from "./Icons/PlayIcon.vue";
import PauseIcon from "./Icons/PauseIcon.vue";
import NextIcon from "./Icons/NextIcon.vue";
import RepeatIcon from "./Icons/RepeatIcon.vue";
import LyricIcon from "./Icons/LyricIcon.vue";
import QueueIcon from "./Icons/QueueIcon.vue";
import DeviceIcon from "./Icons/DeviceIcon.vue";
import MuteIcon from "./Icons/MuteIcon.vue";
import FullScreenIcon from "./Icons/FullScreenIcon.vue";
import ListeningIcon from "./Icons/ListeningIcon.vue";
import { ref, computed } from "vue";

const props = defineProps({
    currentData: {
        type: Object,
        default: () => { },
    },
});

const artExpanded = ref(false);

const currentPlaying = computed(() => {
    return props.currentData;
});

const formatDuration = computed(() => {
    return (progress) => {
        const minutes = Math.floor(progress / 60000);
        const seconds = ((progress % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };
});

const getProgress = computed(() => {
    return (progress, duration) => {
        return (progress / duration) * 100;
    };
});

const expandedArt = computed(() => {
    return currentPlaying.value.expanded_art;
})

const albumArt = computed(() => {
    return currentPlaying.value.album_art;
});

const toggleArt = (value) => {
    artExpanded.value = value;
}
</script>

<template>
    <div v-if="currentPlaying" class="bottom__items">
        <transition name="expanded">
            <div v-show="artExpanded" class="expanded__art">
                <img :src="expandedArt" alt="album cover" />
                <ExpandArtIcon :expanded="artExpanded" @click="toggleArt(false)" />
            </div>
        </transition>
        <div class="float">
            <div class="float__player">
                <div class="float__player-track">
                    <transition name="close">
                        <div v-show="!artExpanded" class="float__player-track-art">
                            <img :src="albumArt" alt="album cover" />
                            <ExpandArtIcon :expanded="artExpanded" @click="toggleArt(true)" />
                        </div>
                    </transition>
                    <div class="float__player-track-info">
                        <a :href="currentPlaying.track_url"
                            class="float__player-track-info-title">{{ currentPlaying.name }}</a>
                        <a :href="currentPlaying.artist_url"
                            class="float__player-track-info-artist">{{ currentPlaying.artist }}</a>
                    </div>
                    <div class="float__player-track-controls">
                        <button>
                            <MiniLikeIcon />
                        </button>
                        <button>
                            <PipIcon />
                        </button>
                    </div>
                </div>
                <div class="float__player-deck">
                    <div class="float__player-deck-controls">
                        <button :class="{ active: currentPlaying.shuffle }">
                            <ShuffleIcon />
                        </button>
                        <button>
                            <PreviousIcon />
                        </button>
                        <button class="play">
                            <PauseIcon v-if="currentPlaying.is_playing" />
                            <PlayIcon v-else />
                        </button>
                        <button>
                            <NextIcon />
                        </button>
                        <button :class="{
    active: currentPlaying.repeat === 'context',
}">
                            <RepeatIcon />
                        </button>
                    </div>
                    <div class="float__player-deck-progress">
                        <span>{{
        formatDuration(currentPlaying.progress)
}}</span>
                        <div class="progress" :style="{
    width:
        getProgress(
            currentPlaying.progress,
            currentPlaying.duration
        ) + '%',
}"></div>
                        <span>{{
        formatDuration(currentPlaying.duration)
}}</span>
                    </div>
                </div>
                <div class="float__player-controls">
                    <button>
                        <LyricIcon />
                    </button>
                    <button>
                        <QueueIcon />
                    </button>
                    <button>
                        <DeviceIcon />
                    </button>
                    <button>
                        <MuteIcon />
                    </button>
                    <div class="volume">
                        <div class="volume__bar"></div>
                    </div>
                    <button>
                        <FullScreenIcon />
                    </button>
                </div>
            </div>
        </div>
        <div v-if="currentPlaying.device_active" class="active__device">
            <ListeningIcon />
            <span>Listening on {{ currentPlaying.device_name }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bottom__items {
    position: sticky;
    bottom: 0;
    padding: 0 1rem;
    border-radius: 1rem;

    .expanded__art {
        width: 20%;
        position: absolute;
        bottom: 95px;
        left: 0;
        z-index: -1;

        img {
            width: 100%;
            height: 330px;
        }

        svg {
            position: absolute;
            top: 7px;
            right: 7px;
            background-color: #00000082;
            color: #b3b3b3;
            width: 30px;
            height: 30px;
            padding: 5px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: transform 0.3s;

            &:hover {
                transform: scale(1.2);
                color: #ffffff;
                cursor: pointer;
            }
        }

        &:hover svg {
            opacity: 1;
        }
    }

    .float {
        padding: 1rem 0;
        background: #181818;
        border-radius: 1rem;

        &__player {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1rem;
            position: relative;

            &-track {
                display: flex;
                align-items: center;

                &-art {
                    width: 50px;
                    height: 50px;
                    overflow: hidden;
                    margin-right: 1rem;
                    position: relative;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    svg {
                        position: absolute;
                        top: 3px;
                        right: 3px;
                        background-color: #00000082;
                        color: #b3b3b3;
                        width: 20px;
                        height: 20px;
                        padding: 5px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: transform 0.3s;

                        &:hover {
                            transform: scale(1.2);
                            color: #ffffff;
                            cursor: pointer;
                        }
                    }

                    &:hover svg {
                        opacity: 1;
                    }
                }

                &-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                    margin-right: 2rem;

                    &-title {
                        text-decoration: none;
                        font-size: 1rem;
                        font-weight: 600;
                        color: #ffffff;

                        &:hover {
                            text-decoration: underline;
                        }
                    }

                    &-artist {
                        text-decoration: none;
                        font-size: 0.8rem;
                        color: #b3b3b3;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }

                &-controls {
                    display: flex;
                    align-items: center;
                    gap: 0.2rem;

                    button {
                        color: #ffffffb3;
                    }
                }
            }

            &-deck {
                width: 100%;
                max-width: 500px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                align-items: center;
                flex-direction: column;

                &-controls {
                    display: flex;
                    align-items: center;
                    gap: 1rem;

                    button {
                        margin-right: 0;

                        &:hover {
                            color: #ffffff;
                        }
                    }

                    .play {
                        background: #ffffff;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        color: inherit;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &:hover {
                            color: inherit;
                        }
                    }
                }

                &-progress {
                    width: 100%;
                    height: 3px;
                    background: #ffffffb3;
                    border-radius: 5px;
                    margin-top: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    position: relative;

                    span {
                        font-size: 0.8rem;
                        color: #ffffffb3;

                        &:first-child {
                            position: absolute;
                            left: -2rem;
                        }

                        &:last-child {
                            position: absolute;
                            right: -2rem;
                        }
                    }

                    .progress {
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        background: #ffffff;
                        border-radius: 5px;

                        &:hover {
                            &::after {
                                opacity: 1;
                            }
                        }

                        &::after {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            bottom: 0;
                            width: 100%;
                            background: #1db954;
                            border-radius: 5px;
                            opacity: 0;
                            transition: opacity 0.2s ease;
                        }
                    }
                }
            }

            &-controls {
                display: flex;
                align-items: center;
                gap: 0.3rem;

                .volume {
                    width: 100px;
                    height: 3px;
                    background: #ffffffb3;
                    border-radius: 5px;
                    position: relative;

                    .volume__bar {
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        width: 50%;
                        background: #ffffff;
                        border-radius: 5px;

                        &:hover {
                            &::after {
                                opacity: 1;
                            }
                        }

                        &::after {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            bottom: 0;
                            width: 100%;
                            background: #1db954;
                            border-radius: 5px;
                            opacity: 0;
                            transition: opacity 0.2s ease;
                        }
                    }
                }
            }
        }
    }

    .active__device {
        padding: 0.3rem;
        padding-right: 3rem;
        display: flex;
        align-items: center;
        background: #1ed760;
        justify-content: flex-end;
        border-radius: 0.5rem;

        span {
            padding-left: 0.4rem;
            font-size: 0.8rem;
        }
    }
}

button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    color: #ffffffb3;
    font-size: 1.2rem;
    margin-right: 1rem;
}

.active {
    color: #1db954;
}

// keyframes generated by Animista

.expanded-enter-active {
    animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.expanded-leave-active {
    animation: slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

.close-enter-active {
    animation: slide-in-left 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.close-leave-active {
    animation: slide-out-left 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

@keyframes slide-out-left {
    0% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(-1000px);
        opacity: 0;
    }
}

@keyframes slide-in-bottom {
    0% {
        transform: translateY(1000px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-out-bottom {
    0% {
        transform: translateY(0);
        opacity: 1;
    }

    100% {
        transform: translateY(1000px);
        opacity: 0;
    }
}

@keyframes slide-in-left {
    0% {
        transform: translateX(-1000px);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>
