const { createApp, ref, computed} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const link = ref('https://www.camt.cmu.ac.th/index.php/en/')
        const onsale = ref(true)
        const inventory = ref(3)
        const cart = ref(0)
        const description = ref('Description')
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green', image: 'assets/images/socks_green.jpg', quantity: 50},
            {id: 2235, color: 'blue', image: 'assets/images/socks_blue.jpg', quantity: 0}
        ])
        const selectedVariant = ref(0)
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        const title = computed(() =>{
            return brand.value + ' ' + product.value
        })
        const isOnSale = computed(() => {
            return brand.value + ' ' + product.value + ' ' + 'is on sale'
        })

        function addToCart() {
            if (inventory.value > 0){
                inventory.value -= 1
                cart.value += 1
            }else{
                inStock.value = false
                cart.value = cart.value
                inventory.value = inventory.value
            }
        }

        function removeCart() {
            inStock.value = true
            cart.value -= 1
            inventory.value += 1
        }

        function updateImage(variantImage) {
            image.value = variantImage
        }

        function updateVariant(index) {
            selectedVariant.value = index;
        }


        return {
            title,
            link,
            image,
            inStock,
            inventory,
            details,
            onsale,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            isOnSale,
            removeCart,
            updateVariant,
            description
        };
    }
}).mount('#app')
