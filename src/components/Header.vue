<template>
  <header class="header">
    <nav>
      <ul class="header__menu">
        <li
          class="header__menu-item"
          v-for="route in $router.options.routes"
          :key="route.name"
        >
          <RouterLink
            router-link-exact-active
            class="header__menu-item-link"
            :to="{ name: route.name }"
            >{{ route.meta.title }}
          </RouterLink>
        </li>
        <li class="header__menu-item">
          <a
            href="https://github.com/sosog/vue-2-simple-project-example"
            target="_blank"
            class="header__menu-item-link"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  padding: 30px 30px 0;
  width: 100%;
  box-sizing: border-box;

  &__menu {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
  }

  &__menu-item {
    font-size: 16px;
    font-weight: bold;
    margin: 0 10px;
    list-style-type: none;
    @media screen and (max-width: 960px) {
      width: 100%;
      text-align: center;
      margin-bottom: 15px;
    }
  }

  &__menu-item-link {
    color: #24201f;
    text-decoration: none;

    &.router-link-exact-active,
    &:hover {
      color: darkorange;
    }
  }
}
</style>
