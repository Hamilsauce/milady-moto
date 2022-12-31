<script lang="ts" setup>
import { useUserStore } from '@/stores/user.store';
import { firestore } from '@/firestore/firestore';
import { ref } from 'vue';
import { type UserModel, type JerseySizeType, JerseySize, type Order, type OrderStatus, type ShippingAddress, } from '@/models/user.model';

const userSubmitted = ref(false)

const jerseySizes: JerseySizeType[] = [
  'XSmall',
  'Small',
  'Medium',
  'Large',
  'XLarge',
  'XXLarge',
  'XXXLarge',
]
const { collection, doc, setDoc, addDoc } = firestore;

const order = ref({
  shippingAddress: {
    name: '',
    address1: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: ''
  },
  jerseySize: jerseySizes[JerseySize.Large]
});

const userStore = useUserStore()

const handleSubmit = () => {
  console.log('HANDLE SUBMIT', order.value);

  // addDoc(collection('tester1'), order.value);


  userStore.addOrder({
    jerseySize: order.value.jerseySize,
    shippingAddress: order.value.shippingAddress,
    status: 'SHIPPING_ASSIGNED',
  })


  Object.assign(order.value, {
    shippingAddress: {
      name: '',
      address1: '',
      city: '',
      stateProvince: '',
      postalCode: '',
      country: ''
    },
    jerseySize: jerseySizes[JerseySize.Large]
  })
  userSubmitted.value = true;
}

</script>

<template>
  <section id="vip-view">
    <div v-if="userSubmitted" id="pixel-editor-container">
      <iframe src="https://hamilsauce.github.io/playground/simple-pixel-editor/" width="430" height="800"
        frameborder="0"></iframe>
    </div>
    <div v-else class="shipping-form-view">
      <h1>Have jersey</h1>
      <div v-for="token in userStore.unassignedTokenCount" class="shipping-form-container">
        <form class="shipping-form">
          <div class="form-group">
            <label for="shipping-name">Real/Fake Name</label>
            <input v-model="order.shippingAddress.name" type="text" name="shipping-name" id="shipping-name" />
          </div>
          <div class="form-group">
            <label for="shipping-street-address1">Address1</label>
            <input v-model="order.shippingAddress.address1" type="text" name="shipping-street-address1"
              id="shipping-street-address1" />
          </div>
          <div class="form-group">
            <label for="shipping-city">City</label>
            <input v-model="order.shippingAddress.city" type="text" name="shipping-city" id="shipping-city" />
          </div>
          <div class="form-group">
            <label for="shipping-state">State/Province</label>
            <input v-model="order.shippingAddress.stateProvince" type="text" name="shipping-state"
              id="shipping-state" />
          </div>
          <div class="form-group">
            <label for="shipping-postalCode">postalCode</label>
            <input v-model="order.shippingAddress.postalCode" type="text" name="shipping-postalCode"
              id="shipping-postalCode" />
          </div>
          <div class="form-group">
            <label for="shipping-country">Country</label>
            <input v-model="order.shippingAddress.country" type="text" name="shipping-country" id="shipping-country" />
          </div>
          <div class="form-group">
            <label for="jersey-size">Size</label>
            <select v-model="order.jerseySize" name="jersey-size" id="jersey-size">
              <option v-for="(size, index) in jerseySizes" :value="size">{{ size }}</option>
            </select>
          </div>
          <div class="form-group">
            <input @click="handleSubmit" type="button" name="shipping-submit" id="shipping-submit" value="Submit" />
          </div>

        </form>
      </div>
    </div>
  </section>

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
