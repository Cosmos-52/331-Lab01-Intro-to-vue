const { createApp, ref, computed, reactive, toRefs} = Vue

const app = createApp({
    setup(){
        const cart = ref([2234, 2235, 0, 0]);
        const premium = ref(false)

        const updateCart = (id) => {
            console.log(cart.value[0]);
            if (id == 2234) {
              cart.value[2] = cart.value[2] + 1;
            } else {
              cart.value[3] = cart.value[3] + 1;
            }
          };
      
          const removeCart = (id) => {
            console.log(cart.value[0]);
            if (id == 2234 && cart.value[2] > 0) {
              cart.value[2] = cart.value[2] - 1;
            } else if (id == 2235 && cart.value[3] > 0){
              cart.value[3] = cart.value[3] - 1;
            }
          };
        return {
            cart,
            premium,
            updateCart,
            removeCart
        }
    }
})

app.component('product-display', productDisplay)
app.component('product-detail', productDetails)
app.component('review-form', reviewForm)
app.component('review-list', reviewList)
app.mount('#app')