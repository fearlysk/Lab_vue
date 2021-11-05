import usersApi from './api/users'
import productsApi from './api/products'

export default {
  ...usersApi,
  ...productsApi
}
