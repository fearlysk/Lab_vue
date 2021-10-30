import productsList from './products.json'

export default {
  'GET /api/products/:id': (req, res) => {
    const { id } = req.params;
    const product = productsList[id] || undefined

    return res.send({
      status: product ? 200 : 500,
      body: product
    })
  },
  'GET /api/products/list': (req, res) => res.json({
    list: productsList
  })
}
