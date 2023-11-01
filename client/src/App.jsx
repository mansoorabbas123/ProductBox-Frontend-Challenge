import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'
import HomePage from './pages/home/HomePage'
import { CreateItemPage } from './pages/create-item/CreateItemPage'
import ItemsPage from './pages/items/ItemsPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/create-item" element={<CreateItemPage />} />
        <Route path="/items" element={<ItemsPage />} >
          {/* <Route index element={<PostLists />} />
        <Route path=":slug" element={<Post />} /> */}
        </Route>
      </Route>
      <Route path="*" element={<h2>not found</h2>} />
    </Routes>
  )
}

export default App

