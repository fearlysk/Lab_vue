<template>
    <div class="header">
      <Login v-if="showLogModal" @close="closeModal" />
      <Registration v-if="showRegModal" @close="closeModal" />
      <Loader v-if="showLoading" />
     <h1 class="header__headline"><router-link
      class="header__headline-link" to="/">Game Store</router-link></h1>
        <div class="header__nav">
            <div class="header__nav-item">
                <router-link to="/" class="header__nav-item--home">Home</router-link>
            </div>
            <div class="header__nav-item header_nav_item_products">
                <div class="products__link">
                    <router-link to="/products" 
                    class="products__link-item header__nav-item--products">
                        Products
                    </router-link>
                </div>
                <div class="products__dropdown-wrapper">
                    <ul class="products__dropdown">
                      <router-link :to="`/products/platforms/pc`">
                        <li class="products__dropdown-item">PC</li>
                      </router-link>
                      <router-link :to="`/products/platforms/xbox`">
                        <li class="products__dropdown-item">Xbox</li>
                      </router-link>
                      <router-link :to="`/products/platforms/playstation`">
                        <li class="products__dropdown-item">PlayStation</li>
                      </router-link>
                    </ul>
                </div>
            </div>
            <div class="header__nav-item">
                <router-link to="/cart" class="header__nav-item__link">
                Cart: {{ cartItemCount }}</router-link>
            </div>
            <div v-if="isAdmin" class="header__nav-item">
              <router-link to="/admin" class="header__nav-item__link">Admin</router-link>
            </div>
            <div v-if="!authInactive" class="header__nav-item">
              <button class="header__nav-item__btn" @click="showLoginModal">Sign In</button>
            </div>
            <div v-if="!authInactive" class="header__nav-item">
              <button class="header__nav-item__btn" @click="showRegistrationModal">Sign Up</button>
            </div>
            <div v-if="authInactive" class="header__nav-item">
              <router-link to="/profile" class="header__nav-item__link">{{ userName }}</router-link>
            </div>
            <div v-if="authInactive" class="header__nav-item">
              <button class="header__nav-item__btn" @click="logout()">Logout</button>
            </div>
          </div>
        </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Login from '../Modals/Login.vue';
import Registration from '../Modals/Registration.vue';
import Loader from '../UI/Loader.vue';

export default {
  name: 'Header',
  components: {
    Login,
    Registration,
    Loader
  },
  data() {
    return {
      products: [],
      showRegModal: false,
      showLogModal: false,
      authInactive: false,
      userName: ''
    }
  },
  computed: {
    ...mapState({
      showLoading: (state) => state.showLoading,
      cartItemCount: (state) => state.cartItemCount,
      loggedUser: (state) => state.user.loggedUser
    }),
    isAdmin() {
      return this.loggedUser.role === 'admin';
    }
  },
  mounted() {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => { this.products = data })
      .catch((err) => console.log(err.message))
    const user = this.loggedUser;
    this.userName = user.firstName;
    if (this.$store.state.userAuth.isUserLoggedIn) {
      this.authInactive = true;
    }
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    }),
    showLoginModal() {
      if (!this.showLogModal) {
        this.showLogModal = true;
        this.showRegModal = false;
      }
    },
    showRegistrationModal() {
      if (!this.showRegModal) {
        this.showRegModal = true;
        this.showLogModal = false;
      }
    },
    closeModal() {
      if (this.showLogModal) {
        this.showLogModal = false;
      }
      if (this.showRegModal) {
        this.showRegModal = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';

.hide {
  display: none !important;
}
.header {
  background-color: $darkgray;
  color: $white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  padding: 20px 0;
  &__headline {
    margin-left: 40px;
  }
  &__headline-link {
    text-decoration: none;
    color: $white;
  }
  &__nav {
  display: flex;
  width: 40%;
  height: 100%;
  justify-content: center;
  }
  &__nav-item {
  display: flex;
  align-items: center;
  padding: 20px 20px;
  transition: 0.3s;
  border-bottom: 5px solid transparent;
  cursor: pointer;
  }
  &__nav-item--home {
    text-decoration: none;
    color: $white;
  }
  &__nav-item__link{
    text-decoration: none;
    color: $white;
    cursor: pointer;
  }
  &__nav-item__btn {
  text-decoration: none;
  color: $white;
  cursor: pointer;
  outline: none;
  background-color: #222222;
  border: none;
  transition: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  }
  &__nav-item:hover {
  border-bottom: 5px solid rgb(75, 221, 75);
  background-color: $graybg;
  transition: 0.3s;
  }
  &__nav-item:hover &__nav-item__btn {
  background-color: $graybg;
  transition: none;
  }
  &__nav-item--products {
   padding: 0;
   &::after {
   content: '';
   width: 0;
   height: 0;
   border: 5px solid transparent;
   border-top-color: $white;
   position: relative;
   top: 16px;
   left: 7px;
   }
}
}
.products__link {
  margin-top: 0px;
}
.products__link-item {
  text-decoration: none;
  color: $white;
}
.products__dropdown-wrapper {
  display: none;
  position: absolute;
  top: 80px;
  margin-left: 0px;
  z-index: 4;
}
 .products__dropdown {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: $graybg;
  padding: 0 20px;
  padding-bottom: 25px;
  text-align: left;
  font-size: 15px;
  z-index: 4;
}
.header_nav_item_products:hover {
  .products__dropdown-wrapper {
    display: block;
  }
}
.products__dropdown-item {
  margin-top: 25px;
  background-color: $lightgreen;
  padding: 10px 20px;
  transition: 0.3s;
  z-index: 4;
}
.products__dropdown-item:hover {
  transition: 0.3s;
  background-color: $golden;
}
.products__dropdown-item:hover .products__dropdown-item__link {
  color: $graybg;
  transition: 0.3s;
}
.products__dropdown-item__link {
  text-decoration: none;
  padding: 5px 20px;
  color: $white;
  transition: 0.3s;
}
</style>
