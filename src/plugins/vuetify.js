import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            dark:{
                primary : colors.pink.darken4,
                secondary : colors.blueGrey.lighten5,
                accent :colors.pink.accent1,
            }
        }
    }
});
