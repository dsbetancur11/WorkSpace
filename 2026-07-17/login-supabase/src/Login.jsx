import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)

    if (!supabase) {
      setErrorMsg('Configura las variables VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY.')
      setLoading(false)
      return
    }

    const { data, error } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password })

    setLoading(false)

    if (error) {
      setErrorMsg(error.message)
      return
    }

    if (data.session) {
      onLogin(data.session)
    } else if (isSignUp) {
      setErrorMsg('Revisa tu correo para confirmar la cuenta.')
    }
  }

  return (
    <div style={{ maxWidth: 360, margin: '40px auto', padding: 24, borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
      <h2>{isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>
        {errorMsg && <p style={{ color: 'crimson', margin: 0 }}>{errorMsg}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : isSignUp ? 'Registrarme' : 'Entrar'}
        </button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)} style={{ marginTop: 12 }}>
        {isSignUp ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
      </button>
    </div>
  )
}
