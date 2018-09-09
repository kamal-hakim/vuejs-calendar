import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('Asia/Kuala_Lumpur');

export default new Vuex.Store({
    state: {
        currentYear: 2018,
        currentMonth: 9,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events : [
            { description: "Random event 1", date: moment('2018-9-2', 'YYYY-MM-DD') },
            { description: "Random event 2", date: moment('2018-9-3', 'YYYY-MM-DD') },
            { description: "Random event 3", date: moment('2018-9-6', 'YYYY-MM-DD') },
            { description: "Random event 4", date: moment('2018-8-31', 'YYYY-MM-DD') }
        ],
        eventFormDate: moment()
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;
        },
        addEvent(state, payload) {
            state.events.push(
                {description: payload, date: state.eventFormDate}
            );
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    }
});