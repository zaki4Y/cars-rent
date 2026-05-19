const BOOKINGS_KEY = 'driveease_bookings';
const AVAILABILITY_KEY = 'driveease_availability';

export function getBookings() {
  try {
    const raw = localStorage.getItem(BOOKINGS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveBooking(booking) {
  const bookings = getBookings();
  const newBooking = {
    id: `booking_${Date.now()}`,
    status: new Date(booking.pickupDate) > new Date() ? 'upcoming' : 'active',
    ...booking,
    createdAt: new Date().toISOString(),
  };
  bookings.push(newBooking);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  return newBooking;
}

export function cancelBooking(bookingId) {
  const bookings = getBookings();
  const idx = bookings.findIndex(b => b.id === bookingId);
  if (idx === -1) return false;
  bookings[idx].status = 'cancelled';
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));

  const carId = bookings[idx].carId;
  if (carId) {
    const avail = getAvailability();
    if (avail[carId]) {
      avail[carId] = { available: true, bookedUntil: null };
      localStorage.setItem(AVAILABILITY_KEY, JSON.stringify(avail));
    }
  }
  return true;
}

export function getBookingsByUserId(userId) {
  if (!userId) return [];
  return getBookings().filter(b => b.userId === userId);
}

export function getBookingById(id) {
  return getBookings().find(b => b.id === id);
}

export function clearBookings() {
  localStorage.removeItem(BOOKINGS_KEY);
}

export function getAvailability() {
  try {
    const raw = localStorage.getItem(AVAILABILITY_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function setCarUnavailable(carId, bookedUntil) {
  const avail = getAvailability();
  avail[carId] = { available: false, bookedUntil };
  localStorage.setItem(AVAILABILITY_KEY, JSON.stringify(avail));
}

export function refreshAvailability() {
  const avail = getAvailability();
  const today = new Date().toISOString();
  let changed = false;
  Object.keys(avail).forEach(id => {
    if (!avail[id].available && avail[id].bookedUntil && today > avail[id].bookedUntil) {
      avail[id] = { available: true, bookedUntil: null };
      changed = true;
    }
  });
  if (changed) {
    localStorage.setItem(AVAILABILITY_KEY, JSON.stringify(avail));
  }
  return avail;
}

export function isCarAvailable(carId) {
  const avail = getAvailability();
  if (!avail[carId]) return true;
  if (!avail[carId].available) {
    if (avail[carId].bookedUntil && new Date().toISOString() > avail[carId].bookedUntil) {
      setCarAvailable(carId);
      return true;
    }
    return false;
  }
  return true;
}

export function setCarAvailable(carId) {
  const avail = getAvailability();
  avail[carId] = { available: true, bookedUntil: null };
  localStorage.setItem(AVAILABILITY_KEY, JSON.stringify(avail));
}

export function hasActiveBooking() {
  const bookings = getBookings();
  const now = new Date();
  return bookings.some(b => (b.status === 'active' || b.status === 'upcoming') && new Date(b.returnDate) > now);
}

export function getActiveBooking() {
  const bookings = getBookings();
  const now = new Date();
  return bookings.find(b => (b.status === 'active' || b.status === 'upcoming') && new Date(b.returnDate) > now) || null;
}

export function getBookingStatus(booking) {
  const now = new Date();
  const returnDate = new Date(booking.returnDate);
  if (booking.status === 'cancelled') return 'cancelled';
  if (returnDate < now) return 'completed';
  if (new Date(booking.pickupDate) > now) return 'upcoming';
  return 'active';
}
