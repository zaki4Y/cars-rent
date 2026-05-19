import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { registerUser } from '../data/users';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      addToast('Passwords do not match.', 'error');
      return;
    }
    if (formData.password.length < 8) {
      addToast('Password must be at least 8 characters.', 'error');
      return;
    }
    if (!/[A-Z]/.test(formData.password) || !/[a-z]/.test(formData.password) || !/[0-9]/.test(formData.password)) {
      addToast('Password must contain uppercase, lowercase, and a number.', 'error');
      return;
    }
    setLoading(true);
    const result = await registerUser({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    });
    setLoading(false);
    if (result.success) {
      login(result.user);
      addToast('Account created! Welcome to DriveEase.', 'success');
      navigate('/profile');
    } else {
      addToast(result.message, 'error');
    }
  };

  const handleChange = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  return (
    <div className="pt-28 min-h-screen flex items-center justify-center">
      <div className="section-container max-w-md w-full">
        <div className="text-center mb-10">
          <p className="section-label">Join DriveEase</p>
          <h1 className="font-display text-4xl text-text-primary">Create Account</h1>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="luxury-card rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Full Name</label>
              <input type="text" value={formData.name} onChange={handleChange('name')} className="input-luxury rounded" placeholder="John Doe" required />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Email</label>
              <input type="email" value={formData.email} onChange={handleChange('email')} className="input-luxury rounded" placeholder="your@email.com" required />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Phone <span className="text-text-muted font-normal">(optional)</span></label>
              <input type="tel" value={formData.phone} onChange={handleChange('phone')} className="input-luxury rounded" placeholder="+1 (555) 000-0000" />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Password</label>
                <input type="password" value={formData.password} onChange={handleChange('password')} className="input-luxury rounded" placeholder="Min. 8 characters" required />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Confirm Password</label>
              <input type="password" value={formData.confirmPassword} onChange={handleChange('confirmPassword')} className="input-luxury rounded" placeholder="Repeat password" required />
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full rounded">
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-text-muted text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-gold hover:text-gold-light transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
