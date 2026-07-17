import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import Login from './Login'
import './App.css'

function App() {
  const [session, setSession] = useState(() => {
    if (typeof window === 'undefined') {
      return null
    }

    try {
      const stored = window.localStorage.getItem('demo-session')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (!supabase) {
      return
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    if (!supabase) {
      window.localStorage.removeItem('demo-session')
      setSession(null)
      return
    }

    await supabase.auth.signOut()
    setSession(null)
  }

  if (!session) {
    return <Login onLogin={setSession} />
  }

  return (
    <div className="app-shell">
      <div className="welcome-card">
        <div className="welcome-icon">🎉</div>
        <h1 className="welcome-title">¡Bienvenido!</h1>
        <p className="welcome-subtitle">Sesión iniciada exitosamente</p>
        
        <div className="user-info">
          <div className="user-avatar">{session.user.email.charAt(0).toUpperCase()}</div>
          <div className="user-details">
            <p className="user-email">{session.user.email}</p>
            <p className="user-status">✅ Conectado</p>
          </div>
        </div>

        <button onClick={handleLogout} className="btn-logout">
          🚪 Cerrar sesión
        </button>
      </div>
    </div>
  )
}

export default App
