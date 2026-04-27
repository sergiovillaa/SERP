import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { useAuth } from '../features/auth/useAuth';

export function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    await register(form);
    navigate('/dashboard', { replace: true });
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-10">
      <Card className="w-full p-8 sm:p-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-on-surface-variant">Register</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.04em]">Create your workspace access</h1>
        <p className="mt-3 text-sm text-on-surface-variant">This stays mock-only for now, but mirrors the future auth contract.</p>

        <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
          <Input placeholder="Full name" value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} />
          <Input placeholder="Work email" type="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} />
          <Input placeholder="Password" type="password" value={form.password} onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))} />
          <Button disabled={submitting} type="submit">
            {submitting ? 'Creating account...' : 'Create account'}
          </Button>
        </form>

        <p className="mt-8 text-sm text-on-surface-variant">
          Already have access?{' '}
          <Link className="font-semibold text-primary" to="/login">
            Sign in
          </Link>
        </p>
      </Card>
    </div>
  );
}
