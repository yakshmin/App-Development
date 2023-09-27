import React, { useState } from 'react';
import StarRatings from 'react-star-ratings'; // Import the star rating component
import './feedback.css'; // Import your CSS file for styling
import Navbar from '../components/navbar/NavBar';

const emojiOptions = [
  { emoji: '😡', label: 'Angry' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😃', label: 'Happy' },
];

function FeedbackForm() {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [starRating, setStarRating] = useState(0); // Initialize star rating state
  const [feedbackText, setFeedbackText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleStarRatingChange = (newRating) => {
    setStarRating(newRating);
  };

  const handleFeedbackChange = (e) => {
    setFeedbackText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., sending feedback to a server

    // Clear form fields
    setSelectedEmoji('');
    setStarRating(0); // Reset star rating
    setFeedbackText('');
    setSubmitted(true);
  };

  return (
	  <div className="background-container">
		<Navbar></Navbar>


    <div className="feedback-container">
      <h2>Foodie Feedback</h2>
      {submitted ? (
        <div>
          <p>Thank you for your feedback!</p>
          <p>We truly value your input and insights.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="emoji-ratings">
            {emojiOptions.map((option, index) => (
              <button
                key={index}
                className={`emoji-button ${selectedEmoji === option.emoji ? 'selected' : ''}`}
                onClick={() => handleEmojiClick(option.emoji)}
                type="button"
              >
                {option.emoji}
              </button>
            ))}
          </div>
          <div className="star-rating">
            <StarRatings
              rating={starRating}
              starRatedColor="#007bff"
              changeRating={handleStarRatingChange}
              numberOfStars={5}
              starDimension="30px"
              starSpacing="5px"
              name="rating"
            />
          </div>
          <textarea
            className="feedback-text"
            placeholder="Tell us more (optional)"
            value={feedbackText}
            onChange={handleFeedbackChange}
          ></textarea>
          <button type="submit" className='feedbut'>Submit</button>
        </form>
      )}
    </div>
    </div>
  );
}

export default FeedbackForm;