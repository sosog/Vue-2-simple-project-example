<template>
  <header class="header">
   <nav>
     <ul class="header__menu">
       <li class="header__menu-item" v-for="route in $router.options.routes" :key="route.name">
         <RouterLink router-link-exact-active class="header__menu-item-link" :to="{ name: route.name }">{{ route.meta.title }}</RouterLink>
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
    .header{
        display: flex;
        justify-content: center;
        padding: 30px;

        &__menu{
            display: flex;

        }

        &__menu-item{
            font-size: 16px;
            font-weight: bold;
            margin: 0 10px;
            list-style-type: none;
        }

        &__menu-item-link{
            color: #24201f;

            &.router-link-exact-active,
            &:hover{
                color: darkorange;
            }
        }
    }

</style>
