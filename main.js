const { createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const link = ref('https://www.camt.cmu.ac.th/index.php/en/')
        const image = ref('assets/images/socks_green.jpg')
        const onsale = ref(true)
        const inStock = ref(true)
        const inventory = ref(3)
        const cart = ref(0)
        const description = ref('Description')
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green', image: 'assets/images/socks_green.jpg'},
            {id: 2235, color: 'blue', image: 'assets/images/socks_blue.jpg'}
        ])
        const sizes = ref([
            'S',
            'M',
            'L'
        ])

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


        return {
            product, 
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
            removeCart,
            description
        };
    }
}).mount('#app')
