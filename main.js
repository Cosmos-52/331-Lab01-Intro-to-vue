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
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green'},
            {id: 2235, color: 'blue'}
        ])
        const sizes = ref([
            'S',
            'M',
            'L'
        ])

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
            description
        };
    }
}).mount('#app')
