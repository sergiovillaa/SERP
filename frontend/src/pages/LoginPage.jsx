import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth/useAuth';
import { Icon } from '../lib/icons';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: 'sergio.villa@vrconsultores.mx', password: 'sergio123' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await login(form);
      navigate(location.state?.from ?? '/dashboard', { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10">
      <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="hidden rounded-[2rem] bg-surface-container p-10 lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="mb-12 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary-deep to-primary text-white">
                <Icon name="dashboard" />
              </div>
              <div>
                <p className="font-display text-xl font-extrabold tracking-[-0.03em]">SERP</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-on-surface-variant">CRM</p>
              </div>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-on-surface-variant">Editorial CRM</p>
            <h1 className="mt-4 max-w-lg font-display text-5xl font-extrabold leading-tight tracking-[-0.04em]">
              Curating high-end client experiences with a fast, modern workspace.
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-on-surface-variant">
              Mock auth is enabled for this MVP. Use the demo credentials to review the full CRM flow from customers to pipeline and activities.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Fast navigation', 'Mock-ready services', 'Container-friendly structure'].map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-surface-container-lowest p-5">
                <p className="text-sm font-semibold text-on-surface">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="mx-auto w-full max-w-xl p-8 sm:p-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-on-surface-variant">Welcome Back</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.04em]">Sign in to your workspace</h2>
          <p className="mt-3 text-sm leading-6 text-on-surface-variant">
            Demo credentials: <span className="font-semibold text-on-surface">sergio.villa@vrconsultores.mx / sergio123</span>
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Email</label>
              <Input
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                placeholder="name@architectcrm.app"
                type="email"
                value={form.email}
              />
            </div>
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Password</label>
              <Input
                onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                placeholder="••••••••"
                type="password"
                value={form.password}
              />
            </div>
            {error ? <p className="text-sm font-medium text-error">{error}</p> : null}
            <Button className="w-full" disabled={submitting} icon="arrowRight" type="submit">
              {submitting ? 'Signing in...' : 'Login'}
            </Button>
          </form>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-surface-container-highest" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">or</span>
            <div className="h-px flex-1 bg-surface-container-highest" />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Button variant="secondary">Google</Button>
            <Button variant="secondary">SSO</Button>
          </div>

          <p className="mt-8 text-sm text-on-surface-variant">
            Need an account?{' '}
            <Link className="font-semibold text-primary" to="/register">
              Register
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
