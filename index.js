const express = require('express')
const app = express()
const cors = require('cors')
const productRoutes = require('./routes/productRoutes')
const categoryRoutes=require('./routes/categoryRoutes')
const port = 3000


// write app.use cors first, then app.use json
app.use(cors())
app.use(express.json())
app.use('/api/v1/products',productRoutes)
app.use('/api/v1/categories',categoryRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})