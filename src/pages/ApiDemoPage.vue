<template>
<div class="api__wrapper">
  <h1>Edit</h1>
    <div class="api__section">
      <form>
        <h2>Create new product</h2>
         <div class="api__section-item"><p>Path to image:</p><input v-model="image"></div>
        <div class="api__section-item"><p>Title:</p><input v-model="title"></div>
        <div class="api__section-item"><p>Price:</p><input v-model="price"></div>
        <div class="api__section-item"><p>Genre:</p><input v-model="genre"></div>
        <div class="api__section-item"><p>Developer:</p><input v-model="developer"></div>
        <div class="api__section-item"><p>Description:</p><input v-model="description"></div>
        <div class="api__section-item">
          <button class="api__section-btn" @click="createNewProduct">Submit</button>
        </div>
      </form>
    </div>
    <div class="api__section">
      <form>
        <h2>Update last product</h2>
         <div class="api__section-item"><p>Path to image:</p><input v-model="imageUpd"></div>
        <div class="api__section-item"><p>Title:</p><input v-model="titleUpd"></div>
        <div class="api__section-item"><p>Price:</p><input v-model="priceUpd"></div>
        <div class="api__section-item"><p>Genre:</p><input v-model="genreUpd"></div>
        <div class="api__section-item"><p>Developer:</p><input v-model="developerUpd"></div>
        <div class="api__section-item"><p>Description:</p><input v-model="descriptionUpd"></div>
        <div class="api__section-item">
        <button class="api__section-btn" @click="patchLastProduct">Submit</button>
        </div>
      </form>
    </div>
    <div class="api__section">
      <form>
        <h2>Delete last product</h2>
        <button class="api__section-btn" @click="deleteLastProduct">Delete last product</button>
      </form>
    </div>
</div>
  <h3>Products preview:</h3>
  <div class="preview">
  <pre>
    {{ transformedProducts }}
  </pre>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Component } from 'vue-property-decorator';

interface IProductData {
  id?: number,
  image: string,
  title: string,
  price: string,
  genre: string,
  developer: string,
  description: string,
  createdAt: string,
  updatedAt: string
}

export default class ApiDemoPage extends Vue {
  image = '';
  title = '';
  description = '';
  price = '';
  genre = '';
  developer = '';
  imageUpd = '';
  titleUpd = '';
  descriptionUpd = '';
  priceUpd = '';
  genreUpd = '';
  developerUpd = '';
  products: IProductData[] = [];

  private async request(path, body, method = 'POST'): Promise<any> {
    const requestInit: any = {
      method,
      headers: { 'Content-Type': 'application/json' }
    }

    if (body) {
      requestInit.body = JSON.stringify(body)
    }

    return fetch(`http://localhost:3000/${path}`, requestInit)
      .then((response) => response.json())
      .catch((error) => {
        console.log('REQUEST FAILED', error.message);
      })
  }

  private generateProduct(): IProductData {
    return {
      image: this.image,
      title: this.title,
      description: this.description,
      price: this.price,
      genre: this.genre,
      developer: this.developer,
      createdAt: new Date().getTime().toString(),
      updatedAt: new Date().getTime().toString()
    }
  }

  mounted() {
    this.updateProductsList();
  }

  get transformedProducts() {
    return this.products.map((product) => {
      const createdAt = new Date(+product.createdAt);
      const updatedAt = new Date(+product.updatedAt);

      return {
        ...product,
        createdAt: `${createdAt.toDateString()} - ${createdAt.toLocaleTimeString()}`,
        updatedAt: `${updatedAt.toDateString()} - ${updatedAt.toLocaleTimeString()}`
      }
    })
  }

  async updateProductsList() {
    this.products = await this.request('products', null, 'GET')
  }

  async createNewProduct() {
    await this.request('products', this.generateProduct());
    this.updateProductsList();
  }

  async patchLastProduct() {
    if (!this.products.length) return;

    const lastProduct = this.products[this.products.length - 1];
    const productData = {
      ...this.generateProduct(),
      createdAt: lastProduct.createdAt,
      image: this.imageUpd,
      title: this.titleUpd,
      description: this.descriptionUpd,
      price: this.priceUpd,
      genre: this.genreUpd,
      developer: this.developerUpd
    }

    await this.request(`products/${lastProduct.id}`, productData, 'PATCH');
    this.updateProductsList();
  }

  async deleteLastProduct() {
    if (!this.products.length) return;

    const productId = this.products[this.products.length - 1].id;

    await this.request(`products/${productId}`, null, 'DELETE');
    this.updateProductsList();
  }
}
</script>

<style lang="scss" scoped>
pre {
  text-align: left;
}
.api__wrapper {
  color: white;
}
.preview {
  border: 1px solid white;
  padding: 12px;
  color: white;
}
.api__wrapper {
  border: 1px solid white;
  padding: 15px;
  display: flex;
  flex-direction: row;
}
.api__section {
  display: block;
  border: 1px solid white;
  padding: 10px;
  margin: 0 10px;
  background-color: black;
  box-shadow: 0px 0px 18px 9px rgba(16, 122, 24, 0.75);
  margin: 0 30px;
}
.api__section-item {
  margin: 10px 15px;
}
.api__section-btn {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>
