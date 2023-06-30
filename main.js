const { createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const link = ref('https://www.camt.cmu.ac.th/index.php/en/')
        const image = ref('assets/images/socks_green.jpg')
        const onsale = ref(true)
        const inStock = ref(true)
        const inventory = ref(0)
        const description = ref('Description')
        return {
            product, 
            link,
            image,
            inStock,
            inventory,
            onsale,
            description
        };
    }
}).mount('#app')
