<template>
    <div id="event-form" :class="{active: active}" :style="{ top: top, left: left }">
        <h4>Add an event</h4>
        <p>{{ date.format('dddd MMMM Do') }}</p>
        <div class="text">
            <input type="text" v-focus v-model="description" placeholder="Enter an event description" @keydown.enter="create">
        </div>
        <div class="buttons">
            <button @click="create">Create</button>
        </div>
        <button @click="close" id="close-button">&#10005</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            description: ""
        }
    },
    methods: {
        close() {
            this.$store.commit('eventFormActive', false);
        },
        create() {
            if (this.description.length > 0) {
                this.$store.dispatch('addEvent', this.description).then(_ => {
                    this.description = "";
                    this.close();
                });                
            }            
        }
    },
    computed: {
        date() {
            return this.$store.state.eventFormDate;
        },
        active() {
            return this.$store.state.eventFormActive;
        },
        top() {
            return `${this.$store.state.eventFormPosY}px`;
        },
        left() {
            return `${this.$store.state.eventFormPosX}px`;
        }
    },
    directives: {
        focus: {
            update(el) {
                el.focus();
            }
        }
    }
}
</script>

