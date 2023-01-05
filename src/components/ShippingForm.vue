<script lang="ts" setup>
import { useUserStore } from '@/stores/user.store';
import { firestore } from '@/firestore/firestore';
import { ref } from 'vue';
import { type UserModel, type JerseySizeType, JerseySize, type Order, type OrderStatus, type ShippingAddress, } from '@/models/user.model';

const props = defineProps({
  orderId: Number
})

const userStore = useUserStore()
const order = userStore.getOrder(props.orderId || 0)

const disableForm = ref(order?.status !== 'SHIPPING_UNASSIGNED')
const showConfirmation = ref(order?.status !== 'SHIPPING_UNASSIGNED')

const jerseySizes: JerseySizeType[] = [
  'XSmall',
  'Small',
  'Medium',
  'Large',
  'XLarge',
  'XXLarge',
  'XXXLarge',
]

const shippingAddress = ref(order?.shippingAddress ? { ...order.shippingAddress } : {
  name: '',
  address1: '',
  city: '',
  stateProvince: '',
  postalCode: '',
  country: ''
});

const displayStatus = ref(
  order.status === 'SHIPPING_ASSIGNED' ? 'ORDER PLACED' : order.status === 'FULFILLED' ? 'ORDER SHIPPED' : 'PLACED ORDER'
);

const collapsed = ref(true);

const jerseySize = ref(order?.jerseySize ? order?.jerseySize :
  jerseySizes[JerseySize.Large]
);

const validateData = (order: ShippingAddress): boolean => {
  return Object.values(shippingAddress.value || {}).every(_ => !!_);
}

const handleSubmit = () => {
  // const order: Order = {
  //   ...order as Order,
  //   jerseySize,
  //   shippingAddress,
  // }
  console.log('shippingAddress.value in handle submit', shippingAddress.value);

  if (validateData(shippingAddress.value)) {
    userStore.updateOrder(order.id, {
      jerseySize: jerseySize.value,
      shippingAddress: shippingAddress.value,
      status: 'SHIPPING_ASSIGNED',
    })
  }

}
const toggleCollapse = () => {
  collapsed.value = !collapsed.value;
}

</script>

<template>
  <div class="shipping-form-view">
    <h1 @click="toggleCollapse" class="shipping-form-title">Order #{{ order?.id }}</h1>
    <div v-if="showConfirmation" class="order-confirmation" :class="{ collapsed: collapsed }">
      <div class="order-status">{{ displayStatus }}</div>
      <div class="order-addressee">{{ shippingAddress.name }}</div>
      <div class="order-address1">{{ shippingAddress.address1 }}</div>
      <div class="order-city">{{ shippingAddress.city }}</div>
      <div class="order-state">{{ shippingAddress.stateProvince }}</div>
      <div class="order-postalcode">{{ shippingAddress.postalCode }}</div>
      <div class="order-country">{{ shippingAddress.country }}</div>
    </div>
    <form v-else class="shipping-form">
      <div class="form-group">
        <label for="shipping-name">Real/Fake Name</label>
        <input :disabled="disableForm" v-model="shippingAddress.name" type="text" name="shipping-name"
          id="shipping-name" />
      </div>
      <div class="form-group">
        <label for="shipping-street-address1">Address1</label>
        <input :disabled="disableForm" v-model="shippingAddress.address1" type="text" name="shipping-street-address1"
          id="shipping-street-address1" />
      </div>
      <div class="form-group">
        <label for="shipping-city">City</label>
        <input :disabled="disableForm" v-model="shippingAddress.city" type="text" name="shipping-city"
          id="shipping-city" />
      </div>
      <div class="form-group">
        <label for="shipping-state">State/Province</label>
        <input :disabled="disableForm" v-model="shippingAddress.stateProvince" type="text" name="shipping-state"
          id="shipping-state" />
      </div>
      <div class="form-group">
        <label for="shipping-postalcode">Postal Code</label>
        <input :disabled="disableForm" v-model="shippingAddress.postalCode" type="text" name="shipping-postalcode"
          id="shipping-postalcode" />
      </div>
      <div class="form-group">
        <label for="shipping-country">Country</label>
        <input :disabled="disableForm" v-model="shippingAddress.country" type="text" name="shipping-country"
          id="shipping-country" />
      </div>
      <div class="form-group">
        <label for="jersey-size">Size</label>
        <select :disabled="disableForm" v-model="jerseySize" name="jersey-size" id="jersey-size">
          <option v-for="(size, index) in jerseySizes" :value="size">{{ size }}</option>
        </select>
      </div>
      <div class="form-group" id="submit-button-group">
        <input :disabled="disableForm" @click="handleSubmit" type="button" name="shipping-submit" id="shipping-submit"
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
  width: 500px;
  /* height: 100%; */
  color: var(--order-prompt-purple);
  font-size: 24px;
}

.order-confirmation {
  height: 100%;
  overflow: hidden;
}

.order-confirmation.collapsed,
.order-confirmation.collapsed * {
  height: 0%;
  display: none;
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

#submit-button-group {
  justify-content: flex-end;
}

.shipping-form-title {
  width: 100%;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  user-select: none;
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
