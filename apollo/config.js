import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default () => ({
  link: new HttpLink({ uri: process.env.GRAPHCMS_API_ENDPOINT }),
  cache: new InMemoryCache()
})
