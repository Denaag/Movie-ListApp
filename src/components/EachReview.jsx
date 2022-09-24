

const EachReview = ({review}) => { //this allows us to use review item in reviews on line 13 of EachReview being called
    return (
        <>
            <div>
                <span className="rating">
                    {review.starRating}
                </span>
            </div>
            <div className="comment">
                {review.comment}
            </div>
        </>
    )
}

export default EachReview;