import Profiles from "./pages/Profiles";
import ContactForm from "./pages/Contact";
import Interaction from "./pages/Interaction";

export const routes = [
  {
    path: "/",
    name: "profiles",
    component: Profiles,
    meta: {
      title: "Home/Profiles"
    }
  },
  {
    path: "/contact-form",
    name: "contact-form",
    component: ContactForm,
    meta: {
      title: "Contact Form"
    }
  },
  {
    path: "/interaction",
    name: "interaction",
    component: Interaction,
    meta: {
      title: "Interaction"
    }
  }
];
