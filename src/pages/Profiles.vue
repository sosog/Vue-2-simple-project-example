<template>
  <div v-if="profilesFetched" class="profiles">
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
  name: "Profiles",
  components: {
    ProfileItem
  },
  data() {
    return {
      profiles: []
    };
  },
  computed: {
    profilesFetched() {
      return Array.isArray(this.profiles) && this.profiles.length > 0;
    }
  },
  mounted() {
    this.fetchProfiles();
  },
  methods: {
    fetchProfiles() {
      ProfileServices.fetchProfilesList().then(profiles => {
        this.profiles = profiles;
      });
    }
  }
};
</script>

<style lang="scss">
.profiles {
  display: flex;
  flex-wrap: wrap;
}
</style>
