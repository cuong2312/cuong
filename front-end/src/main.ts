import './style.css'
import Navigo from 'navigo'
import AdminPage from './pages/Admin'
import Signin from './pages/Auth/Signin'
import Signup from './pages/Auth/Signup'
const router = new Navigo('/', {linksSelector: "a"})

export type ComponentBase = {
  render: () => Promise<string>;
  afterRender?: () => void
}

const print = async (component: ComponentBase, id) => {
  document.getElementById('app').innerHTML = await component.render(id)
  if(component.afterRender) {
    component.afterRender(id)
  }
}

router.on({
  "/": () => {
    print(HomePage)
  }, 
  "/Signin": () => {
    print(Signin)
  },
  "/Signup": () => {
    print(Signup)
  },
  "/admin": () => {
    print(AdminPage)
  },
  "/admin/products/add": () => {
    print(AddProductPage)
  },
  "/admin/products/edit/:id": (data) => {
    const id=data.data.id
    print(EditProductPage,id)
  },
})
router.resolve()