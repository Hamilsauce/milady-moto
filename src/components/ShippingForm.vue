<script lang="ts" setup>
import { useUserStore } from '@/stores/user.store';
import { firestore } from '@/firestore/firestore';
import { ref } from 'vue';
import { type UserModel, type JerseySizeType, JerseySize, type Order, type OrderStatus, type ShippingAddress, } from '@/models/user.model';

const props = defineProps({
  order: Object
})

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

const shippingAddress = ref(props.order?.shippingAddress ? { ...props.order.shippingAddress } : {
  name: '',
  address1: '',
  city: '',
  stateProvince: '',
  postalCode: '',
  country: ''
});

const jerseySize = ref(props.order?.jerseySize ? props.order?.jerseySize :
  jerseySizes[JerseySize.Large]
);

const validateData = (order: Order): boolean => {
  return Object.values(order.shippingAddress || {}).every(_ => !!_);
}
const userStore = useUserStore()

const handleSubmit = () => {
  const order: Order = {
    ...props.order as Order,
    jerseySize,
    shippingAddress,
  }
  if (validateData(shippingAddress.value)) {
    userStore.updateOrder(props.order?.id, {
      jerseySize: jerseySize.value,
      shippingAddress: shippingAddress.value,
      status: 'SHIPPING_ASSIGNED',
    })
  }

  userSubmitted.value = true;
}

</script>

<template>
  <div class="shipping-form-view">
    <h1>Order #{{ props.order?.id }}</h1>
    <form class="shipping-form">
      <div class="form-group">
        <label for="shipping-name">Real/Fake Name</label>
        <input :disabled="userSubmitted" v-model="shippingAddress.name" type="text" name="shipping-name"
          id="shipping-name" />
      </div>
      <div class="form-group">
        <label for="shipping-street-address1">Address1</label>
        <input :disabled="userSubmitted" v-model="shippingAddress.address1" type="text" name="shipping-street-address1"
          id="shipping-street-address1" />
      </div>
      <div class="form-group">
        <label for="shipping-city">City</label>
        <input :disabled="userSubmitted" v-model="shippingAddress.city" type="text" name="shipping-city"
          id="shipping-city" />
      </div>
      <div class="form-group">
        <label for="shipping-state">State/Province</label>
        <input :disabled="userSubmitted" v-model="shippingAddress.stateProvince" type="text" name="shipping-state"
          id="shipping-state" />
      </div>
      <div class="form-group">
        <label for="shipping-postalCode">postalCode</label>
        <input :disabled="userSubmitted" v-model="shippingAddress.postalCode" type="text" name="shipping-postalCode"
          id="shipping-postalCode" />
      </div>
      <div class="form-group">
        <label for="shipping-country">Country</label>
        <input :disabled="userSubmitted" v-model="shippingAddress.country" type="text" name="shipping-country"
          id="shipping-country" />
      </div>
      <div class="form-group">
        <label for="jersey-size">Size</label>
        <select :disabled="userSubmitted" v-model="jerseySize" name="jersey-size" id="jersey-size">
          <option v-for="(size, index) in jerseySizes" :value="size">{{ size }}</option>
        </select>
      </div>
      <div class="form-group">
        <input :disabled="userSubmitted" @click="handleSubmit" type="button" name="shipping-submit" id="shipping-submit"
          value="Submit" />
      </div>

    </form>
  </div>
</template>

<style>
.shipping-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 16px;
  padding: 16px;
  /* height: 100%; */
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
