import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Shared/Card'

function AboutPage() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>This is a React app to leave feedback for a product or service</p>
      <p>Version: 2.1.2</p>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage