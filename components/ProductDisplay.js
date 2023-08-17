const productDisplay = {
    template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image" :class="{outOfStockImage: !inStock}">
                <img :src="image">
            </div>
        </div>
    </div>

    <div class="product-info">
        <a :href="link">
            <h1>{{title}}</h1>
        </a>
        <h2 v-if="onsale">{{isOnSale}}</h2>
        <h2 v-else>Not sale</h2>
        <p v-if="inStock > 10">In Stock {{inStock}}</p>
        <p v-else-if="inStock <= 10 && inStock > 0">Almost out of Stock {{inStock}}</p>
        <p v-else>Out of Stock</p>
        <p>Shipping : {{shipping}}</p>
        <ul>
            <li v-for="detail in details">{{details}}</li>
        </ul>

        <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class=" color-circle" :style="{backgroundColor: variant.color}">
            {{variant.color}}
        </div>

        <ul>
            <li v-for="size in sizes" style="display: inline-block;">{{size}}</li>
        </ul>

        <button class="button" :disabled="!inStock" @click="addToCart" :class="{disabledButton: !inStock}">Add To Cart</button>            
        <button class="button" @click="removeCart">Remove Cart</button>
    </div>
    `,

    props: {
        premium: Boolean
    },

    setup(props, {emit}) {
        const product = ref('Boots')
        const brand = ref('SE 331')
        const link = ref('https://www.camt.cmu.ac.th/index.php/en/')
        const onsale = ref(true)
        const cart = ref([])
        const description = ref('Description')
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green', image: 'assets/images/socks_green.jpg', quantity: 50},
            {id: 2235, color: 'blue', image: 'assets/images/socks_blue.jpg', quantity: 20}
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

        const shipping = computed(() => {
            if (props.premium) {
                return 'Free'
            }else{
                return 30
            }
        })
        
        function addToCart() {
            if (variants.value[selectedVariant.value].quantity > 0){
                emit('add-to-cart', variants.value[selectedVariant.value].id)
            }else{
                inStock.value = false
            }
        }

        function removeCart() {
            inStock.value = true
            emit('remove-from-cart', variants.value[selectedVariant.value].id)
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
            description,
            shipping
        };
    }
}