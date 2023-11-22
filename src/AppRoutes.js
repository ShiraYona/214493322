import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Data from './Date';
import Showdetails from "./Showditails";
const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Data/>}></Route>
          <Route path="/Showdetails" element={<Showdetails />}></Route>
        </Routes>
      );

}
export default AppRoutes;
