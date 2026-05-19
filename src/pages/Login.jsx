import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { loginUser } from '../data/users';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await loginUser(email, password);
    setLoading(false);
    if (result.success) {
      login(result.user);
      addToast('Welcome back! Signed in successfully.', 'success');
      navigate('/profile');
    } else {
      addToast(result.message, 'error');
    }
  };

  return (
    <div className="pt-28 min-h-screen flex items-center justify-center">
      <div className="section-container max-w-md w-full">
        <div className="text-center mb-10">
          <p className="section-label">Welcome Back</p>
          <h1 className="font-display text-4xl text-text-primary">Sign In</h1>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="luxury-card rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-luxury rounded"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-luxury rounded"
                placeholder="Your password"
                required
              />
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full rounded">
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-text-muted text-sm">
              Don&apos;t have an account?{' '}
              <Link to="/register" className="text-gold hover:text-gold-light transition-colors">
                Create one
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
