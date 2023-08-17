const reviewList = {

    template:
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
        <li v-for="(review, index) in reviews" :key="index">            
            <h4 v-if ="review.recommended">Recommended</h4>
            {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            "{{ review.review }}"
            <br/>
        </li>
        </ul>
    </div>
        `
    ,props: {
        reviews: {
            type: Array
        }    
    },
    setup(props){
        const reviews = props.reviews
        return {
            reviews
        }
    }
}