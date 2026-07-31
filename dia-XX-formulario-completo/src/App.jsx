import { useState } from 'react'
import './App.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const languageOptions = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby']
const countryOptions = ['Argentina', 'Chile', 'Colombia', 'México', 'España', 'Perú']

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [experience, setExperience] = useState(5)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [languages, setLanguages] = useState([])
  const [mode, setMode] = useState('presencial')
  const [country, setCountry] = useState('')
  const [comments, setComments] = useState('')
  const [photo, setPhoto] = useState(null)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [color, setColor] = useState('#4d90fe')
  const [submittedData, setSubmittedData] = useState(null)

  const emailIsValid = email === '' ? true : emailRegex.test(email)
  const ageIsValid = age === '' ? true : Number(age) > 0
  const canSubmit = acceptedTerms && emailRegex.test(email) && Number(age) > 0

  const handleLanguageChange = (language) => {
    setLanguages((current) =>
      current.includes(language)
        ? current.filter((item) => item !== language)
        : [...current, language]
    )
  }

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0] ?? null
    setPhoto(file)

    if (file) {
      setPhotoPreview(URL.createObjectURL(file))
    } else {
      setPhotoPreview(null)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setSubmittedData({
      name,
      email,
      password,
      age,
      birthDate,
      experience,
      acceptedTerms,
      languages,
      mode,
      country,
      comments,
      color,
      photoName: photo?.name || 'No seleccionada',
    })
  }

  return (
    <main className="app-shell">
      <h1>Registro de estudiante</h1>
      <form className="student-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {!emailIsValid && <p className="error">Ingresa un correo válido.</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="age">Edad</label>
            <input
              id="age"
              type="number"
              min="1"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            {!ageIsValid && <p className="error">La edad debe ser mayor a 0.</p>}
          </div>

          <div className="form-group">
            <label htmlFor="birthDate">Fecha de nacimiento</label>
            <input
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group range-group">
          <label htmlFor="experience">Nivel de experiencia</label>
          <div className="range-row">
            <input
              id="experience"
              type="range"
              min="1"
              max="10"
              value={experience}
              onChange={(e) => setExperience(Number(e.target.value))}
            />
            <span>{experience}</span>
          </div>
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            Acepto los términos y condiciones
          </label>
        </div>

        <fieldset className="form-group">
          <legend>Lenguajes que conoces</legend>
          <div className="checkbox-list">
            {languageOptions.map((language) => (
              <label key={language}>
                <input
                  type="checkbox"
                  value={language}
                  checked={languages.includes(language)}
                  onChange={() => handleLanguageChange(language)}
                />
                {language}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="form-group">
          <legend>Modalidad</legend>
          <label>
            <input
              type="radio"
              name="mode"
              value="presencial"
              checked={mode === 'presencial'}
              onChange={() => setMode('presencial')}
            />
            Presencial
          </label>
          <label>
            <input
              type="radio"
              name="mode"
              value="virtual"
              checked={mode === 'virtual'}
              onChange={() => setMode('virtual')}
            />
            Virtual
          </label>
        </fieldset>

        <div className="form-group">
          <label htmlFor="country">País</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Selecciona un país</option>
            {countryOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Comentarios</label>
          <textarea
            id="comments"
            rows="4"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Foto de perfil</label>
          <input id="photo" type="file" accept="image/*" onChange={handlePhotoChange} />
          {photoPreview && (
            <div className="photo-preview">
              <img src={photoPreview} alt="Vista previa" />
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="color">Color favorito</label>
          <input
            id="color"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <button type="submit" disabled={!canSubmit} className="submit-button">
          Enviar registro
        </button>
      </form>

      {submittedData && (
        <section className="summary-card">
          <h2>Resumen del registro</h2>
          <div className="summary-grid">
            <p>
              <strong>Nombre:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Correo:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Edad:</strong> {submittedData.age}
            </p>
            <p>
              <strong>Fecha de nacimiento:</strong> {submittedData.birthDate}
            </p>
            <p>
              <strong>Experiencia:</strong> {submittedData.experience}
            </p>
            <p>
              <strong>Modalidad:</strong> {submittedData.mode}
            </p>
            <p>
              <strong>País:</strong> {submittedData.country}
            </p>
            <p>
              <strong>Lenguajes:</strong>{' '}
              {submittedData.languages.length > 0
                ? submittedData.languages.join(', ')
                : 'Ninguno'}
            </p>
            <p>
              <strong>Color favorito:</strong>{' '}
              <span className="color-chip" style={{ background: submittedData.color }} />
            </p>
            <p>
              <strong>Foto:</strong> {submittedData.photoName}
            </p>
            <p className="summary-comments">
              <strong>Comentarios:</strong> {submittedData.comments || 'Sin comentarios'}
            </p>
          </div>
        </section>
      )}
    </main>
  )
}

export default App
