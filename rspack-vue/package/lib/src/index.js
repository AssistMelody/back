import Son from './components/Son.vue'

export default {
    install(app, options){
        app.component('son', Son)
    }
}