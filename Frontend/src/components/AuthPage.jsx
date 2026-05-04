import React, { useState } from 'react'

const AuthPage = ({ mode = 'login' }) => {
  const isSignup = mode === 'signup'
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  return (
    <main className="min-h-[calc(100vh-5rem)] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <section className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-8 shadow-2xl shadow-slate-900/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">{isSignup ? 'Join premium access' : 'Welcome back'}</p>
            <h1 className="mt-3 text-4xl font-display font-extrabold">{isSignup ? 'Create your account' : 'Sign in to continue shopping'}</h1>
            <p className="mt-4 text-slate-300 max-w-md">A premium auth experience with glass UI, refined spacing, and a polished first impression.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Fast checkout</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Saved carts</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Theme sync</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Order tracking</div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-soft-lg p-8">
          <h2 className="text-2xl font-semibold">{isSignup ? 'Create account' : 'Sign in'}</h2>
          <p className="mt-2 text-sm text-gray-600">{isSignup ? 'Enter your details to create a new account.' : 'Use your email and password to continue.'}</p>

          <form className="mt-6 space-y-4">
            {isSignup && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>
            <button type="button" className="w-full rounded-xl bg-primary px-4 py-3 text-white font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform">
              {isSignup ? 'Create account' : 'Sign in'}
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm hover:bg-gray-50">Continue with Google</button>
              <button type="button" className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm hover:bg-gray-50">Continue with Facebook</button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

export default AuthPage
