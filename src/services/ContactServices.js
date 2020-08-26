import axios from "./Axios";

class ContactServices {
  constructor(axios) {
    this.$axios = axios;
  }

  /**
   * Post Contact Form
   *
   * @return {Promise<array>}
   */
  fetchContactForm() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve({ data: "success" });
      }, 1000);
    });
  }
}

export default new ContactServices(axios);
