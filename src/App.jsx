import { MainLayout } from "./components/MainLayout"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"

function App() {
  return (
    <MainLayout>
      <Home />
      <About />
      <Projects />
      {/* <Contact /> */}
    </MainLayout>  
  )
}

export default App
