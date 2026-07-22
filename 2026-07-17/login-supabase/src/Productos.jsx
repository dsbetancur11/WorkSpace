import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export default function Productos({ session }) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [editingId, setEditingId] = useState(null)

  const cargarProductos = async () => {
    if (!supabase || !session?.user?.id) {
      setProductos([])
      setLoading(false)
      return
    }

    setLoading(true)
    setErrorMsg('')

    const { data, error } = await supabase
      .from('productos')
      .select('*')
      .eq('user_id', session.user.id)

    if (error) {
      setErrorMsg(error.message)
      setProductos([])
    } else {
      const productosOrdenados = (data ?? []).sort((a, b) => {
        const fechaA = a.created_at ?? a.created_at ?? ''
        const fechaB = b.created_at ?? b.created_at ?? ''
        return new Date(fechaB).getTime() - new Date(fechaA).getTime()
      })
      setProductos(productosOrdenados)
    }

    setLoading(false)
  }

  useEffect(() => {
    cargarProductos()
  }, [session?.user?.id])

  const limpiarFormulario = () => {
    setNombre('')
    setDescripcion('')
    setPrecio('')
    setEditingId(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    if (!supabase || !session?.user?.id) {
      setErrorMsg('Debes iniciar sesión para gestionar productos.')
      return
    }

    const precioNumber = Number(precio)

    if (editingId) {
      const { error } = await supabase
        .from('productos')
        .update({ nombre, descripcion, precio: precioNumber })
        .eq('id', editingId)
        .eq('user_id', session.user.id)

      if (error) {
        setErrorMsg(error.message)
        return
      }
    } else {
      const { error } = await supabase.from('productos').insert({
        nombre,
        descripcion,
        precio: precioNumber,
        user_id: session.user.id,
      })

      if (error) {
        setErrorMsg(error.message)
        return
      }
    }

    limpiarFormulario()
    cargarProductos()
  }

  const handleEditar = (producto) => {
    setEditingId(producto.id)
    setNombre(producto.nombre)
    setDescripcion(producto.descripcion || '')
    setPrecio(producto.precio)
  }

  const handleEliminar = async (id) => {
    const confirmar = window.confirm('¿Seguro que deseas eliminar este producto?')
    if (!confirmar) return

    if (!supabase || !session?.user?.id) {
      setErrorMsg('No se pudo eliminar el producto.')
      return
    }

    const { error } = await supabase
      .from('productos')
      .delete()
      .eq('id', id)
      .eq('user_id', session.user.id)

    if (error) {
      setErrorMsg(error.message)
      return
    }

    cargarProductos()
  }

  if (!supabase) {
    return (
      <div style={{ maxWidth: 600, margin: '20px auto', padding: '16px', border: '1px solid #f5c6cb', borderRadius: 8, background: '#f8d7da' }}>
        <h3>CRUD de productos</h3>
        <p>Configura las variables de Supabase en tu archivo .env para habilitar la gestión de productos.</p>
      </div>
    )
  }

  if (!session?.user?.id) {
    return (
      <div style={{ maxWidth: 600, margin: '20px auto', padding: '16px', border: '1px solid #d0d7de', borderRadius: 8 }}>
        <p>Inicia sesión para ver y administrar tus productos.</p>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 700, margin: '20px auto', padding: '16px' }}>
      <h2>Mis productos</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>Descripción</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>Precio</label>
          <input
            type="number"
            step="0.01"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>

        {errorMsg && <p style={{ color: 'crimson' }}>{errorMsg}</p>}

        <button type="submit" style={{ marginRight: 8 }}>
          {editingId ? 'Guardar cambios' : 'Crear producto'}
        </button>

        {editingId && (
          <button type="button" onClick={limpiarFormulario}>
            Cancelar edición
          </button>
        )}
      </form>

      {loading ? (
        <p>Cargando productos...</p>
      ) : productos.length === 0 ? (
        <p>Aún no tienes productos registrados.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              <th style={{ textAlign: 'left', padding: '8px' }}>Nombre</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Descripción</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Precio</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '8px' }}>{producto.nombre}</td>
                <td style={{ padding: '8px' }}>{producto.descripcion}</td>
                <td style={{ padding: '8px' }}>${Number(producto.precio).toFixed(2)}</td>
                <td style={{ padding: '8px' }}>
                  <button type="button" onClick={() => handleEditar(producto)} style={{ marginRight: 8 }}>
                    Editar
                  </button>
                  <button type="button" onClick={() => handleEliminar(producto.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
