import { useState, useEffect, useMemo } from 'react'
import { db } from '../firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { projects as staticProjects, featuredIds as staticFeaturedIds } from '../data/projects'

export function useProjects() {
  const [dbProjects, setDbProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      if (!db) {
        setLoading(false)
        return
      }
      try {
        const q = query(collection(db, 'projects'), orderBy('title'))
        const querySnapshot = await getDocs(q)
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        if (data.length > 0) {
          setDbProjects(data)
        }
      } catch (error) {
        console.error("Error fetching projects from Firebase:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const projects = useMemo(() => {
    return dbProjects.length > 0 ? dbProjects : staticProjects
  }, [dbProjects])

  const featuredProjects = useMemo(() => {
    // If using DB projects, we might want a different way to feature them.
    // For now, if spotlight is true, or if they are the first few.
    const spotlighted = projects.filter(p => p.spotlight)
    if (spotlighted.length > 0) return spotlighted.slice(0, 3)
    
    // Fallback to IDs if it's the static list
    if (dbProjects.length === 0) {
      return staticProjects.filter(p => staticFeaturedIds.includes(p.id))
    }

    return projects.slice(0, 3)
  }, [projects, dbProjects])

  return { projects, featuredProjects, loading }
}
