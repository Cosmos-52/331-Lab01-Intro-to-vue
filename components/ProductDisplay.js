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
        <p v-if="inventory > 10">In Stock {{inventory}}</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock {{inventory}}</p>
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
        <button v-if="cart > 0"  class="button" @click="removeCart">Remove Cart</button>
    </div>
    `,

    props: {
        premium: Boolean
    },

    setup(props) {
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

        const shipping = computed(() => {
            if (props.premium) {
                return 'Free'
            }else{
                return 30
            }
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
            description,
            shipping
        };
    }
}