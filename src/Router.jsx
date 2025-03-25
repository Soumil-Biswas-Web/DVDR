import {
    createHashRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import App from "./App";
import Error from "./Content/Error/Error";

import Home from './Content/Home/Home';

import Videos from "./Content/videos/Videos";
import MainChannel from "./Content/videos/components/MainChannel";
import CentralChannel from "./Content/videos/components/CentralChannel";

import Blogposts from "./Content/blogposts/Blogposts";
import Contact from './Content/contact/Contact';

import Bus from "./utils/Bus";
import Screenshots from "./Content/screenshots/Screenshots";

window.flash = (message, type = "success") =>
    Bus.emit("flash", { message, type });

export const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<Error />}>
            <Route index element={<Home />} />
            <Route path="Videos" element={<Videos/>}>
                <Route index loader={MainChannel.loader} element={<MainChannel/>}/>
                <Route path="Central" loader={CentralChannel.loader} element={<CentralChannel/>}/>
            </Route>
            <Route path="Screenshots" element={<Screenshots/>}/>
            <Route path="Blogposts" element={<Blogposts/>}/>
            <Route path="Contact" element={<Contact/>}/>

            <Route
                path="*"
                loader={() => {
                    throw { status: 404, message: "Page Not Found" };
                }}
            />

        </Route>

    )
)