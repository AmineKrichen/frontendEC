import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Listarticle from "./components/articles/Listarticle"
import Insertarticle from "./components/articles/Insertarticle"
import Editarticle from "./components/articles/Editarticle"
import Viewarticle from "./components/scategories/Viewscategorie"
import Listcategorie from "./components/categories/Listcategorie"
import Insertcategorie from "./components/categories/Insertcategorie"
import Editcategorie from "./components/categories/Editcategorie"
import ViewCategorie from "./components/categories/ViewCategorie"
import Listscategorie from "./components/scategories/Listscategorie"
import Insertscategorie from "./components/scategories/Insertscategorie"
import Editscategorie from "./components/scategories/Editscategorie"
import Viewscategorie from "./components/scategories/Viewscategorie"
import Menu from "./components/Menu"

function App() {


  return (
    <>
    <Router>
      <Menu/>
      <Routes> 
        <Route path="/articles" element={Listarticle}/>
        <Route path="articles/add" element={Insertarticle}/>
        <Route path="/article/edit/:id" element={Editarticle}/>
        <Route path="/article/view/:id" element={Viewarticle}/>

        <Route path="/categories" element={Listcategorie}/>
        <Route path="categories/add" element={Insertcategorie}/>
        <Route path="/categorie/edit/:id" element={Editcategorie}/>
        <Route path="/categorie/view/:id" element={ViewCategorie}/>

        <Route path="/scategories" element={Listscategorie}/>
        <Route path="scategories/add" element={Insertscategorie}/>
        <Route path="/scategorie/edit/:id" element={Editscategorie}/>
        <Route path="/scategorie/view/:id" element={Viewscategorie}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App