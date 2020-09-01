<template>
  <div class="profile">
    <img
      v-if="isString(profile.photo)"
      class="profile__photo"
      :src="require(`./../assets/images/${profile.photo}`)"
      alt=""
    />
    <div v-if="isString(profile.name)" class="profile__name">
      {{ profile.name }}
    </div>
    <div v-if="isString(profile.rank)" class="profile__rank">
      {{ profile.rank }}
    </div>
    <div v-if="Number.isInteger(profile.age_of_death)" class="profile__death">
      Age at death: {{ profile.age_of_death }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  props: {
    profile: {
      type: Object,
      required: true,
      validator: config => {
        return ["photo", "name", "rank", "age_of_death"].every(
          key => key in config
        );
      }
    }
  },
  methods: {
    isString(val) {
      return val && typeof val === "string";
    }
  }
};
</script>

<style lang="scss">
.profile {
  width: 200px;
  margin-right: 30px;
  margin-bottom: 30px;
  text-align: center;

  @media screen and (max-width: 960px) {
    margin-right: 0;
  }

  &__photo {
    width: 200px;
    height: 200px;
    border: 4px solid darkgray;
    object-fit: cover;
  }

  &__name {
    margin-top: 20px;
    font-size: 20px;
    color: #24201f;
    white-space: pre;
  }

  &__rank {
    color: #999;
    font-size: 14px;
    margin-top: 5px;
    white-space: pre;
    display: block;
  }

  &__death {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
    white-space: pre;
  }
}
</style>
