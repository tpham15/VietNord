import { createContext } from 'react'

const ShopContext = createContext({
  products: [],           // default for consumers outside a provider
  currency: '€',
  sampleRequests: [],
  requestSample: () => {}
})

export default ShopContext
