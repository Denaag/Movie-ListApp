import ReviewList from "./ReviewList";
import React, { useState } from "react";
import EachReview from "./EachReview";
import RateFilm from "./RateFilm";


const Reviews = () => {

    const [reviews, setReviews] = useState(ReviewList); //passing our reviews to the state

    const addReview = review => {
        setReviews([review ,...reviews]);
    }

    return (
        <>
            <RateFilm handleReviewChange={addReview} />

            {reviews.length > 0 ? reviews.map((item, index) => { //if reviews length is less than zero then it return no reviews and if greater than it will map through reviews
                return <EachReview review={item} key={index} />
            }) : 'No Reviews'}
        </>
    )
}

export default Reviews;