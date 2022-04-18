import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"
import router from './Router'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret, faCheck, faTrash, faPlus, faXmark, faPenToSquare, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret, faCheck, faTrash, faPlus, faXmark, faPenToSquare, faEllipsisVertical, faXmark)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

createApp(App).use(router).mount('#app')
