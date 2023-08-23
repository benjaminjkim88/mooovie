import React, { useState, useEffect } from "react";

const Movie = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    async function fetchReviews() {
      try {
        const getReviewsURL = "http://localhost:3000/reviews";
        const response = await fetch(getReviewsURL);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("There was a problem with getting the reviews: ", error);
      }
    }

    fetchReviews();
  }, []);

  // this data is pushed into an temporary array in place for now before we add our firebase
  const handleAddReview = async () => {
    try {
      const addReviewURL = "http://localhost:3000/reviews";
      const response = await fetch(addReviewURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: newReview }),
      });
      const data = await response.json();

      setReviews([...reviews, data]);
      setNewReview("");
    } catch (error) {
      console.error("There was a problem adding a review: ", error);
    }
  };

  return (
    <>
      <h1>Example of entering a review and seeing all the reviews</h1>

      <input
        type="text"
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
        placeholder="Enter your review"
      />
      <button onClick={handleAddReview}>Submit Review</button>

      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review.description}</li>
        ))}
      </ul>
    </>
  );
};

export default Movie;
