import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = { //star colors
  orange: '#FFBA5A',
  gray: '#a9a9a9'
}

const RateThisFilm = () => {

    const stars = Array(5).fill(0);
    //to save the current rating value - have to give a default value of zero
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);
    const [reviews, setReviews] = useState({}); // this useState says I want it to be an object
    const [comment, setComment] = useState('');

//sequence of the flow of my review
    const handleClick = value => {
        setCurrentValue(value);
        console.log(currentValue)// shows me the value of each star level
    };

    const handleReviewChange = e => { // handles my review changes
        let textAreaData = e.target.value;// this give my variable a meaningful name - easier to read
        setComment(textAreaData)
        console.log(comment)
    }

    const handleMouseOver = value => {
        setHoverValue(value);
    };

    const handleMouseLeave = value => {
        setHoverValue(undefined);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setReviews({starRating: currentValue, reviewComment: comment});
        console.log(reviews.reviewComment)
        // console.log("test works")
        
    }

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit}>
          <div style={styles.stars}>
            {stars.map((_, index) => {
              return (
                
                <FaStar
                  key={index}
                  size={24}
                //   onChange={handleStarChange}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={(hoverValue || currentValue) > index ? colors.orange : colors.grey} //allows stars to highlight color once hovered over
                  style={{
                    marginRight: 10,
                    cursor: "pointer"
                  }}
                />
                
              )
            })}
            
          </div>


          <textarea onChange={handleReviewChange}
            placeholder="Review Film?"
            style={styles.textarea}
          />
    
          <button style={styles.button} type="submit">Submit</button>
          </form>

        </div>
      );
    };
    
    
    const styles = {
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 230,
      },
      stars: {
        display: "flex",
        flexDirection: "row",
      },
      textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: 280,
        marginTop: 40,
      },
      button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 270,
        padding: 10,
      }
    
    };



export default RateThisFilm;





// const [rating, setRating] = useState(null); //allows us to get rating and then set rating because of useState hook
// const [hover, setHover] = useState(null);

// return (
//     <div>
//         {[...Array(5)].map((star, i) => {
//             const ratingValue = i + 1;

//             return (
//                 <label>
//                     <input type='radio' name='rating' value={ratingValue} onClick={() => setRating(ratingValue)} />
//                     <FaStar className="star" color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} size={30} 
//                     onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}  />
//                 </label>
//             );
//         })}
//     </div>
// );