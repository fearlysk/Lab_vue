<template>
<div class="api__wrapper">
  <h1>Edit</h1>
    <div class="api__section">
      <form>
        <h2>Add new user</h2>
         <div class="api__section-item"><p>Name: </p><input v-model="name"></div>
         <div class="api__section-item"><p>Email: </p><input v-model="email"></div>
        <div class="api__section-item">
          <button class="api__section-btn" @click="createNewUser">Submit</button>
        </div>
      </form>
    </div>
    <div class="api__section">
      <form>
        <h2>Delete last user</h2>
        <button class="api__section-btn" @click="deleteLastUser">Delete last user</button>
      </form>
    </div>
</div>
  <h3>users preview:</h3>
  <div class="preview">
  <pre>
    {{ transformedUsers }}
  </pre>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Component } from 'vue-property-decorator';

interface IUserData {
  id?: number,
  name: string,
  email: string,
  registeredAt: string
}

export default class ApiUsersPage extends Vue {
  name = '';
  email = '';
  users: IUserData[] = [];

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

  private generateUser(): IUserData {
    return {
      name: this.name,
      email: this.email,
      registeredAt: new Date().getTime().toString()
    }
  }

  mounted() {
    this.updateUsersList();
  }

  get transformedUsers() {
    return this.users.map((user) => {
      const registeredAt = new Date(+user.registeredAt);

      return {
        ...user,
        registeredAt: `${registeredAt.toDateString()} - ${registeredAt.toLocaleTimeString()}`,
      }
    })
  }

  async updateUsersList() {
    this.users = await this.request('users', null, 'GET')
  }

  async createNewUser() {
    await this.request('users', this.generateUser());
    this.updateUsersList();
  }

  async deleteLastUser() {
    if (!this.users.length) return;

    const userId = this.users[this.users.length - 1].id;

    await this.request(`users/${userId}`, null, 'DELETE');
    this.updateUsersList();
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
