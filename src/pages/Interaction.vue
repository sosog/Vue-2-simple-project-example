<template>
  <div class="interaction">
    <BaseButton v-if="!buttonIsPushed" @click="buttonIsPushed = true">
      Push button
    </BaseButton>
    <transition name="fade">
      <SuccessMessage
        v-if="buttonIsPushed"
        text="You pushed this one button we wanted you to push. Congratulations!"
      />
    </transition>
    <div class="interaction__random-container">
      <BaseInput v-model="maxNumber" title="Max number" type="number" />
      <div>{{ randomNumber }}</div>
      <BaseButton @click="generateRandomNumber">
        Generate random number
      </BaseButton>
    </div>
  </div>
</template>

<script>
import SuccessMessage from "../components/SuccessMessage";
import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";

export default {
  name: "Interaction",
  components: {
    BaseInput,
    SuccessMessage,
    BaseButton
  },
  data() {
    return {
      buttonIsPushed: false,
      randomNumber: 0,
      maxNumber: 100
    };
  },
  mounted(){
    this.generateRandomNumber();
  },
  methods: {
    generateRandomNumber() {
      this.randomNumber = Math.floor(
        Math.random() * Math.floor(this.maxNumber)
      );
    }
  }
};
</script>

<style lang="scss">

  .interaction{

    &__random-container{
        margin-top: 50px;
     }

  }

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
