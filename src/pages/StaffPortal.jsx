import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from 'firebase/firestore'
import Reveal from '../components/Reveal'

export default function StaffPortal() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  
  // Form State
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    category: 'Residential',
    blurb: '',
    spotlight: false,
    image: '',
    video: '',
    videoPoster: ''
  })

  useEffect(() => {
    if (isAuthenticated) {
      fetchProjects()
    }
  }, [isAuthenticated])

  const fetchProjects = async () => {
    setLoading(true)
    try {
      const q = query(collection(db, 'projects'), orderBy('title'))
      const querySnapshot = await getDocs(q)
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setProjects(data)
    } catch (error) {
      console.error("Error fetching projects:", error)
    }
    setLoading(false)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'meridian@321') {
      setIsAuthenticated(true)
    } else {
      alert('Incorrect password')
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (editingId) {
        await updateDoc(doc(db, 'projects', editingId), formData)
      } else {
        await addDoc(collection(db, 'projects'), formData)
      }
      setFormData({
        title: '',
        location: '',
        category: 'Residential',
        blurb: '',
        spotlight: false,
        image: '',
        video: '',
        videoPoster: ''
      })
      setEditingId(null)
      fetchProjects()
      alert(editingId ? 'Project updated!' : 'Project added!')
    } catch (error) {
      console.error("Error saving project:", error)
      alert('Error saving project')
    }
    setLoading(false)
  }

  const handleEdit = (project) => {
    setFormData(project)
    setEditingId(project.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteDoc(doc(db, 'projects', id))
        fetchProjects()
      } catch (error) {
        console.error("Error deleting project:", error)
      }
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="staff-login-page">
        <Reveal>
          <div className="login-card">
            <h1 className="headline headline--small">Staff Portal</h1>
            <p className="lede">Please enter the studio password to access management tools.</p>
            <form onSubmit={handleLogin}>
              <input 
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
              />
              <button type="submit" className="btn btn--primary">Enter Portal</button>
            </form>
          </div>
        </Reveal>
      </div>
    )
  }

  return (
    <div className="staff-portal-page">
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Management</p>
          <h1 className="headline">{editingId ? 'Edit Project' : 'Upload New Project'}</h1>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="admin-grid">
            {/* Form Section */}
            <div className="admin-form-container">
              <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                  <label>Project Title</label>
                  <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
                </div>
                
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" name="location" value={formData.location} onChange={handleInputChange} required />
                </div>

                <div className="form-group">
                  <label>Category</label>
                  <select name="category" value={formData.category} onChange={handleInputChange}>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Hospitality">Hospitality</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Description (Blurb)</label>
                  <textarea name="blurb" value={formData.blurb} onChange={handleInputChange} required />
                </div>

                <div className="form-checkbox">
                  <input type="checkbox" id="spotlight" name="spotlight" checked={formData.spotlight} onChange={handleInputChange} />
                  <label htmlFor="spotlight">Featured (Spotlight)</label>
                </div>

                <div className="form-group">
                  <label>Main Image URL</label>
                  <input type="text" name="image" value={formData.image} onChange={handleInputChange} placeholder="Paste image link here" required />
                  {formData.image && <img src={formData.image} alt="Preview" className="upload-preview" />}
                </div>

                <div className="form-group">
                  <label>Project Video URL (Optional)</label>
                  <input type="text" name="video" value={formData.video} onChange={handleInputChange} placeholder="Paste video link here" />
                </div>

                <div className="form-group">
                  <label>Video Poster/Thumbnail URL (Optional)</label>
                  <input type="text" name="videoPoster" value={formData.videoPoster} onChange={handleInputChange} placeholder="Paste thumbnail link here" />
                  {formData.videoPoster && <img src={formData.videoPoster} alt="Poster Preview" className="upload-preview" />}
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn--primary" disabled={loading}>
                    {loading ? 'Saving...' : editingId ? 'Update Project' : 'Add Project'}
                  </button>
                  {editingId && (
                    <button type="button" className="btn btn--outline" onClick={() => {
                      setEditingId(null)
                      setFormData({
                        title: '', location: '', category: 'Residential', blurb: '', spotlight: false, image: '', video: '', videoPoster: ''
                      })
                    }}>Cancel Edit</button>
                  )}
                </div>
              </form>
            </div>

            {/* List Section */}
            <div className="admin-list-container">
              <h2 className="headline headline--small">Existing Projects</h2>
              <div className="admin-project-list">
                {projects.map(p => (
                  <div key={p.id} className="admin-project-item">
                    <div className="admin-project-info">
                      <img src={p.image} alt="" className="admin-project-thumb" />
                      <div>
                        <h3>{p.title}</h3>
                        <p>{p.category} | {p.location}</p>
                      </div>
                    </div>
                    <div className="admin-project-actions">
                      <button onClick={() => handleEdit(p)} className="action-btn edit">Edit</button>
                      <button onClick={() => handleDelete(p.id)} className="action-btn delete">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
