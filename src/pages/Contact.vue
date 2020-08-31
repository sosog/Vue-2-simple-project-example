<template>
  <div class="contact">
    <ValidationObserver v-slot="{ handleSubmit, invalid }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          name="Name"
          rules="required|alpha"
          v-slot="{ errors }"
        >
          <BaseInput
            v-model="name"
            title="Name"
            placeholder="name"
            :error="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider
          name="Email"
          rules="required|email"
          v-slot="{ errors }"
        >
          <BaseInput
            v-model="email"
            title="Email"
            placeholder="email"
            :error="errors[0]"
          />
        </ValidationProvider>
        <BaseButton :disabled="invalid || isSending">
          Submit
          <template v-slot:right>
            <Arrow />
          </template>
        </BaseButton>
      </form>
    </ValidationObserver>
    <br />
    <div>Name - {{ name }}</div>
    <div>Email - {{ email }}</div>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput";
import BaseButton from "../components/BaseButton";
import Arrow from "../components/svg/Arrow";
import * as rules from "vee-validate/dist/rules";

import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import ContactServices from "../services/ContactServices";

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

extend("alpha", {
  ...rules["alpha"],
  message: "Please enter only alphabetical letters" //custom message for alpha rule
});

export default {
  name: "Contact",
  components: {
    ValidationProvider,
    ValidationObserver,
    Arrow,
    BaseButton,
    BaseInput
  },
  data() {
    return {
      name: "",
      email: "",
      isSending: false
    };
  },
  methods: {
    onSubmit() {
      this.isSending = true;
      ContactServices.fetchContactForm().then(response => {
        this.isSending = false;
        console.log(response);
        alert("Success message!");
      });
    },
  }
};
</script>
