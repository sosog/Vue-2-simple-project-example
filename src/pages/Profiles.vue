<template>
  <div class="profiles">
    <ProfileItem
      v-for="profile in profiles"
      :key="profile.id"
      :profile="profile"
    />
  </div>
</template>

<script>
import ProfileItem from "../components/ProfileItem";
import ProfileServices from "../services/ProfileServices";

export default {
  name: "Profiles.vue",
  components: {
    ProfileItem
  },
  data() {
    return {
      profiles: []
    };
  },
  mounted() {
    ProfileServices.fetchProfilesList().then(profiles => {
      this.profiles = profiles;
    });
  }
};
</script>

<style lang="scss">
.profiles {
  display: flex;
}
</style>
