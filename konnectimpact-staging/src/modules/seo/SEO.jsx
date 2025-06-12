import React from 'react'
import ProgressCircle from '../../components/ProgressCircle'
import CardContent from '../../components/CardContent'
import image from '../../assets/growth.svg'
import ActionButtons from '../../components/ActionButtons'
import './index.css'

const SEO = () => {
  return (
    <main>
      <div className="card">
        <h1>Turn Loyalty into Impact</h1>
        <CardContent />
        <ActionButtons />
        <div className="icon-container" aria-label="Growth illustration">
          <img src={image} alt="Growth illustration" width={80} height={80} />
        </div>
        <ProgressCircle />
      </div>
    </main>
  )
}

export default SEO