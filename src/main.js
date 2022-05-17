import Vue from 'vue'
import App from './App.vue'

import VueApollo from 'vue-apollo'
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost'
import {WebSocketLink} from 'apollo-link-ws'
import {getMainDefinition} from 'apollo-utilities'
import {split} from 'apollo-link'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const httpLink = new HttpLink({
  uri:'https://section21.hasura.app/v1/graphql',
})

const wsLink = new WebSocketLink ({
  uri :'wss://section21.hasura.app/v1/graphql',
  options:{
    reconnect : true,
  },
})

const link = split (
  ({query}) => {
    const definition = getMainDefinition(query)
    return(
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient : apolloClient,
})


new Vue({
  el:'#app',

  apolloProvider,
  vuetify,
  render: h => h(App)
})
