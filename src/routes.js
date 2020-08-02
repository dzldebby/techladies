import about from './components/about.vue'
import weather from './components/weather.vue'
import contact from './components/contact.vue'

// route components and routing

export default [

{path: '/',component: about},
{path: '/weather',component: weather},
{path: '/contact',component: contact}

]