import { useState } from 'react'
import { supabase } from './supabaseClient'
import './Login.css'

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
      const demoSession = {
        user: { email },
        access_token: 'demo-token',
        token_type: 'demo',
      }

      onLogin(demoSession)

      try {
        localStorage.setItem('demo-session', JSON.stringify(demoSession))
      } catch {
        // Ignorar si el navegador no permite guardar datos locales
      }

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
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>{isSignUp ? '✨ Crear cuenta' : '🔐 Iniciar sesión'}</h1>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              placeholder="Mínimo 6 caracteres"
            />
          </div>

          {errorMsg && <div className="error-message">⚠️ {errorMsg}</div>}

          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? '⏳ Procesando...' : isSignUp ? '📝 Registrarme' : '✅ Entrar'}
          </button>
        </form>

        <div className="login-footer">
          <button onClick={() => setIsSignUp(!isSignUp)} className="btn-secondary">
            {isSignUp
              ? '¿Ya tienes cuenta? 👉 Inicia sesión'
              : '¿Sin cuenta? 👉 Regístrate'}
          </button>
        </div>
      </div>
    </div>
  )
}
