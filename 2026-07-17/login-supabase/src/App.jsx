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
      <h2>Bienvenido</h2>
      <p>{session.user.email}</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}

export default App
