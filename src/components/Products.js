// Detta är komponenten för Produktsidan && path='/home'. 
import Nav from './Nav'
import Uploadproduct from './Uploadproduct'

function Products() {
  return (
    <div>
      <Nav />
      <Uploadproduct />
      <h1>Homepage</h1>
    </div>
  )
}

export default Products