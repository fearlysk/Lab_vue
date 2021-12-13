<template>
<AlertMessage 
 v-if="dataLoadingError"
 :headline="'Error'"
 :message="'Failed to load data!'"
 :isError="true"
 >
<button @click="hideErrorModal" class="alert-message__accept">
  <p class="alert-message__accept-text">Accept</p>
</button>
</AlertMessage>
<AlertMessage 
 v-if="dataLoadingSuccess"
 :headline="'Success'"
 :message="'Product created successfully!'"
 :isError="false"
 >
<button @click="hideSuccessModal" class="alert-message__accept">
  <p class="alert-message__accept-text">Accept</p>
</button>
</AlertMessage>
  <div class="product__create">
    <h1>Create new product</h1>
    <div class="product__create-form">
      <form @submit.prevent="createProduct">
       <label for="image">Image url:</label>
       <Input
        v-model="image"
        inputType="text"
        class="data-input"
        name="image"
        required="true"
       />
       <label for="title">Title:</label>
       <Input
        v-model="title"
        inputType="text"
        class="data-input"
        name="title"
        required="true"
       />
       <label for="price">Price:</label>
       <Input
        v-model="price"
        inputType="number"
        class="data-input"
        name="price"
        required="true"
       />
       <label for="genre">Genre:</label>
       <Input
        v-model="genre"
        inputType="text"
        class="data-input"
        name="genre"
        required="true"
       />
       <label for="pc">For PC:</label>
       <input type="checkbox" v-model="pc" class="data-input__checkbox" name="pc">
       <span>{{pc}}</span>
       <br>
       <label for="xbox">For Xbox:</label>
       <input type="checkbox" v-model="xbox" class="data-input__checkbox" name="xbox">
       <span>{{xbox}}</span>
       <br>
       <label for="playstation">For PlayStation:</label>
       <input type="checkbox" v-model="playstation" class="data-input__checkbox" name="playstation">
       <span>{{playstation}}</span>
       <br>
       <label for="description">Description:</label>
       <Input
        v-model="description"
        inputType="text"
        class="data-input"
        name="description"
        required="true"
       />
       <br>
       <Input
       class="data-input"
       inputType="submit"
       modelValue="Submit"
       required="true"
       />
      </form>
      <router-link to="/">Go to home</router-link>
      <br>
      <router-link to="/admin/products">Open products list</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
import Input from '../../elements/Input.vue';
import AlertMessage from '../../elements/AlertMessage.vue'
import ADMIN from '../../constants/admin';

export default {
  name: 'AdminProductsCreate',
  components: {
    Input,
    AlertMessage
  },
  data() {
    return {
      products: [],
      image: '',
      title: '',
      price: '',
      genre: '',
      pc: false,
      xbox: false,
      playstation: false,
      description: '',
      dataLoadingError: false,
      dataLoadingSuccess: false
    }
  },
  computed: {
    ...mapState({
      loggedUser: (state) => state.user.loggedUser
    })
  },
  mounted() {
    this.checkRole();
  },
  methods: {
    checkRole() {
      if (this.loggedUser === null || this.loggedUser.role !== ADMIN) {
        this.$router.push('/');
      }
    },
    hideErrorModal() {
      this.dataLoadingError = false;
    },
    hideSuccessModal() {
      this.dataLoadingSuccess = false;
    },
    async createProduct() {
      const productData = {
        image: this.image,
        title: this.title,
        price: this.price,
        genre: this.genre,
        pc: this.pc,
        xbox: this.xbox,
        playstation: this.playstation,
        description: this.description,
        createdAt: new Date().getTime().toString(),
        updatedAt: new Date().getTime().toString()
      }
      const result = await axios.post('http://localhost:3000/products', productData);
      if (result.status === 201) {
        this.dataLoadingSuccess = true;
      } else {
        this.dataLoadingError = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.data-input {
  max-width: 40%;
}
.data-input__checkbox {
  max-width: 3%;
  margin-left: 10px;
}
</style>
