import { useState } from 'react'
import './FormPage.css'

export default function FormPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    visitDate: '',
    subscribe: false
  })

  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.age) {
      newErrors.age = 'Age is required'
    } else if (formData.age < 1 || formData.age > 120) {
      newErrors.age = 'Age must be between 1 and 120'
    }

    if (!formData.visitDate) {
      newErrors.visitDate = 'Visit date is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)
    setResponse(null)

    try {
      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      setResponse(data)
    } catch (error) {
      setResponse({
        error: error.message,
        errorType: 'Network Error'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-page">
      <section className="form-hero">
        <div className="form-hero-content">
          <h2>Contact & Registration Form</h2>
          <p>Fill out this form to get in touch or register for our newsletter</p>
        </div>
      </section>

      <div className="form-container">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? 'error' : ''}
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="age">Age (1-120) *</label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Enter your age"
                min="1"
                max="120"
                value={formData.age}
                onChange={handleChange}
                className={errors.age ? 'error' : ''}
              />
              {errors.age && <span className="error-message">{errors.age}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="visitDate">Preferred Visit Date *</label>
              <input
                type="date"
                id="visitDate"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleChange}
                className={errors.visitDate ? 'error' : ''}
              />
              {errors.visitDate && <span className="error-message">{errors.visitDate}</span>}
            </div>

            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
              />
              <label htmlFor="subscribe">Subscribe to our newsletter</label>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Form'}
            </button>
          </form>
        </div>

        {response && (
          <div className="response-section">
            <h3>Server Response</h3>
            <div className="response-content">
              <div className="response-summary">
                <h4>Submitted Data:</h4>
                <div className="data-display">
                  <div className="data-item">
                    <span className="data-label">Name:</span>
                    <span className="data-value">{response.json?.fullName || 'N/A'}</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">Email:</span>
                    <span className="data-value">{response.json?.email || 'N/A'}</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">Age:</span>
                    <span className="data-value">{response.json?.age || 'N/A'}</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">Visit Date:</span>
                    <span className="data-value">{response.json?.visitDate || 'N/A'}</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">Newsletter:</span>
                    <span className="data-value">{response.json?.subscribe ? 'Yes' : 'No'}</span>
                  </div>
                </div>
              </div>

              <div className="raw-response">
                <h4>Raw Server Response:</h4>
                <pre>{JSON.stringify(response, null, 2)}</pre>
              </div>
            </div>
          </div>
        )}

        {response && response.errorType && (
          <div className="error-section">
            <h3>Error</h3>
            <p>{response.error}</p>
          </div>
        )}
      </div>
    </div>
  )
}
