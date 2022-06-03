import {
    ABOUT_ROUTE,
    CONTACTS_ROUTE, ENTRY_ROUTE,
    FAQ_ROUTE, FORGOT_ROUTE, LOGIN_ROUTE,
    MAIN_ROUTE, PRICE_ROUTE, REGISTRATION_ROUTE
} from "./utils/consts";
import About from "./pages/About";
import Entry from "./pages/Entry";
import Contacts from "./pages/Contacts";
import Faq from "./pages/Faq";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Forgot from "./pages/Forgot";
import Price from "./pages/Pricelist";

export const authRoutes = [
    {
        path: ENTRY_ROUTE,
        Component: Entry
    },

]

export const publicRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: PRICE_ROUTE,
        Component: Price
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: FORGOT_ROUTE,
        Component: Forgot
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: FAQ_ROUTE,
        Component: Faq
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    }

]