<script lang="ts" setup>
import { useUserStore } from '@/stores/user.store';
import { firestore } from '@/firestore/firestore';
import { ref } from 'vue';
import { type UserModel, JerseySize, type Order, type OrderStatus, type ShippingAddress, } from '@/models/user.model';



const jerseySizes: string[] = [
  'XSmall',
  'Small',
  'Medium',
  'Large',
  'XLarge',
  'XXLarge',
  'XXXLarge',
]
const { collection, doc, setDoc, addDoc } = firestore;

const data = ref({
  name: '',
  address1: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  jerseySize: jerseySizes[JerseySize.Large]
});

const userStore = useUserStore()

const handleSubmit = () => {
  console.log('HANDLE SUBMIT');

  addDoc(collection('tester1'), data.value);

  Object.assign(data.value, {
    name: '',
    address1: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    jerseySize: JerseySize.Large
  });
}

</script>

<template>
  <div class="shipping-form-view">
    <h1>Have jersey</h1>
    <div v-for="token in userStore.user.mi777Balance" class="shipping-form-container">
      <form class="shipping-form">
        <div class="form-group">
          <label for="shipping-name">Name</label>
          <input v-model="data.name" type="text" name="shipping-name" id="shipping-name" />
        </div>
        <div class="form-group">
          <label for="shipping-street-address1">Address1</label>
          <input v-model="data.address1" type="text" name="shipping-street-address1" id="shipping-street-address1" />
        </div>
        <div class="form-group">
          <label for="shipping-city">City</label>
          <input v-model="data.city" type="text" name="shipping-city" id="shipping-city" />
        </div>
        <div class="form-group">
          <label for="shipping-state">State</label>
          <input v-model="data.state" type="text" name="shipping-state" id="shipping-state" />
        </div>
        <div class="form-group">
          <label for="shipping-zip">Zip</label>
          <input v-model="data.zip" type="text" name="shipping-zip" id="shipping-zip" />
        </div>
        <div class="form-group">
          <label for="shipping-country">Country</label>
          <input v-model="data.country" type="text" name="shipping-country" id="shipping-country" />
        </div>
        <div class="form-group">
          <label for="jersey-size">Size</label>
          <select v-model="data.jerseySize" name="jersey-size" id="jersey-size">
            <option v-for="(size, index) in jerseySizes" :value="size">{{ size }}</option>
          </select>
        </div>
        <div class="form-group">
          <input @click="handleSubmit" type="button" name="shipping-submit" id="shipping-submit" value="Submit" />
        </div>

      </form>
    </div>
  </div>
</template>

<style>
.shipping-form-view {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  width: 100%;
  /* height: 100%; */
  color: var(--order-prompt-purple);
  font-size: 24px;
}

.shipping-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 16px;
  padding: 16px;
  /* height: 100%; */
}

.form-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  width: 100%;
}

.form-group input,
select {
  font-size: 18px;
  padding: 8px;
  border-radius: 6px;
}

.form-group input[type=button] {
  background-color: var(--order-prompt-purple);
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
}

.form-group label {
  font-size: 24px;
  font-weight: 600;
}

/* @media (min-width: 1024px) {
  .shipping-form {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: #4f24c6;
  }
} */
</style>
