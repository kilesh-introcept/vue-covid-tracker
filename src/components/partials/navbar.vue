<template>
  <div class="flex justify-between bg-white p-4 mb-4 shadow-md">
    <div>Logo</div>
    <div>
      <ul class="flex gap-2">
        <li
          v-for="(menu, index) in menus"
          :key="index"
          class="text-gray-700 hover:text-gray-900"
        >
          <router-link
            active-class="font-bold rounded bg-primary-light text-white p-2 shadow-md"
            :to="menu.path"
          >
            {{ menu.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <ul class="flex gap-2">
        <!-- <li>Login</li>
            <li>Register</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicNavbar",
  data: function () {
    return {
      menus: [
        {
          name: "Todo",
          path: "/",
        },
        {
          name: "Covid",
          path: "/covid",
        },
      ],
    };
  },
};
</script>
