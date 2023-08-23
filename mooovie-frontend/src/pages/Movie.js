import React, { useState, useEffect } from "react";

const Movie = () => {
  // Store fetched reviews
  const [review, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const getReviewsURL = "localhost:3000/reviews";
        const response = await fetch(getReviewsURL);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("There was an error in getting the reviews: ", error);
      }
    }

    fetchReviews();
  }, []);

  return (
    <>
      <h1>Example of entering a review and seeing all the reviews</h1>
      <ul>
        {review.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Movie;
