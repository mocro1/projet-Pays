import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Components/Home/Home';
import Country from './Components/Country/Country';
import { useState } from "react";


function App() {
    const [darkmode,setDarkmode] = useState(false)
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home  darkmode={darkmode} setDarkmode={setDarkmode}/>,
        },
        {
            path: "/:Country",
            element: <Country  darkmode={darkmode} setDarkmode={setDarkmode}/>,
        }
        


    ]);
    return(
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}
export default App;