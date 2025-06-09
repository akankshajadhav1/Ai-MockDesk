import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PublicLayout } from "./layouts/public-layout"
import Homepage from "./routes/home"
import AuthenticationLayout from "./layouts/auth-layout"

import SignInPage from "./routes/signIn"
import SignUpPage from "./routes/signUp"
import ProtectedRoutes from "./layouts/protected-routes"
import { MainLayout } from "./layouts/main-layout"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout/>}>
        <Route index element={<Homepage/>}/>
        </Route>
        {/* Authentication layout */}
        <Route element={<AuthenticationLayout/>}>
        <Route path="/signin/*" element={<SignInPage/>}/>
        <Route path="/signup/*" element={<SignUpPage/>}/>
        </Route>
        
        {/* Protected Route */}
       <Route element={<ProtectedRoutes><MainLayout/></ProtectedRoutes>}>
        {/*  add All protected routes */}
             
       </Route>
      </Routes>
    </Router>
  )
}

export default App