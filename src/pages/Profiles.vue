<template>
  <div v-if="profileDataFetched" class="profiles">
    <ProfileItem
      v-for="profile in profileData"
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
      profileData: []
    };
  },
  computed: {
    profileDataFetched() {
      return Array.isArray(this.profileData) && this.profileData.length > 0;
    }
  },
  mounted() {
    this.fetchProfiles();
  },
  methods: {
    fetchProfiles() {
      ProfileServices.fetchProfilesList().then(profiles => {
        this.profileData = profiles;
      });
    }
  }
};
</script>

<style lang="scss">
.profiles {
  display: flex;
}
</style>
