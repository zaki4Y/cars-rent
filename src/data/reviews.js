const REVIEWS_KEY = 'driveease_reviews';

function getAllReviews() {
  try {
    const raw = localStorage.getItem(REVIEWS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveAllReviews(data) {
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(data));
}

export function getReviews(carId) {
  const all = getAllReviews();
  return all[carId] || [];
}

export function addReview(carId, review) {
  const all = getAllReviews();
  if (!all[carId]) all[carId] = [];
  const newReview = {
    id: `review_${Date.now()}`,
    date: new Date().toISOString(),
    ...review,
  };
  all[carId].unshift(newReview);
  saveAllReviews(all);
  return newReview;
}

export function deleteReview(carId, reviewId) {
  const all = getAllReviews();
  if (!all[carId]) return false;
  all[carId] = all[carId].filter(r => r.id !== reviewId);
  saveAllReviews(all);
  return true;
}

export function getAverageRating(carId) {
  const reviews = getReviews(carId);
  if (reviews.length === 0) return { average: 0, count: 0 };
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return {
    average: Math.round((sum / reviews.length) * 10) / 10,
    count: reviews.length,
  };
}
