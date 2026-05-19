import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarRating } from './StarRating';
import { getReviews, addReview, deleteReview, getAverageRating } from '../data/reviews';

export function ReviewsSection({ carId }) {
  const [reviews, setReviews] = useState([]);
  const [average, setAverage] = useState({ average: 0, count: 0 });
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setReviews(getReviews(carId));
    setAverage(getAverageRating(carId));
  }, [carId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;
    addReview(carId, {
      name: formData.name.trim(),
      rating: formData.rating,
      comment: formData.comment.trim(),
    });
    setReviews(getReviews(carId));
    setAverage(getAverageRating(carId));
    setFormData({ name: '', rating: 5, comment: '' });
    setShowForm(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleDelete = (reviewId) => {
    deleteReview(carId, reviewId);
    setReviews(getReviews(carId));
    setAverage(getAverageRating(carId));
  };

  return (
    <section className="mt-20">
      <div className="gold-divider mb-12" />

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
        <div>
          <p className="section-label">Reviews</p>
          <h2 className="section-title text-3xl">What Clients Say</h2>
        </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <StarRating rating={Math.round(average.average)} size="lg" />
          <span className="font-display text-2xl text-text-primary">{average.average}</span>
          <span className="text-text-muted text-sm">({average.count} {average.count === 1 ? 'review' : 'reviews'})</span>
        </div>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 border border-gold/20 rounded text-center"
          >
            <p className="text-gold text-sm">Thank you for your review!</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Reviews list */}
        <div className="flex-1 space-y-6">
          {reviews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-secondary font-light mb-4">No reviews yet for this vehicle.</p>
              <button onClick={() => setShowForm(true)} className="btn-outline text-xs">
                Be the First to Review
              </button>
            </div>
          ) : (
            reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="luxury-card rounded-lg p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-medium text-text-primary text-sm">{review.name}</p>
                    <p className="text-text-muted text-xs mt-0.5">
                      {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarRating rating={review.rating} size="sm" />
                    <button
                      onClick={() => handleDelete(review.id)}
                      className="text-text-muted hover:text-red-400 text-xs transition-colors ml-2"
                      aria-label="Delete review"
                    >
                      &times;
                    </button>
                  </div>
                </div>
                <p className="text-text-secondary text-sm font-light leading-relaxed">{review.comment}</p>
              </motion.div>
            ))
          )}
        </div>

        {/* Review form */}
        <div className="w-full md:w-80">
          {!showForm ? (
            <button onClick={() => setShowForm(true)} className="btn-outline w-full text-xs">
              Write a Review
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="luxury-card rounded-lg p-6"
            >
              <h3 className="font-display text-xl text-text-primary mb-6">Your Review</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-luxury rounded"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Rating</label>
                  <StarRating rating={formData.rating} size="lg" interactive onChange={(r) => setFormData({ ...formData, rating: r })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Comment</label>
                  <textarea
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="input-luxury rounded resize-none"
                    placeholder="Share your experience..."
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <button type="submit" className="btn-primary flex-1 rounded text-xs">
                    Submit
                  </button>
                  <button type="button" onClick={() => setShowForm(false)} className="btn-outline flex-1 rounded text-xs">
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
