import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Users, Lightbulb, Globe, Zap } from 'lucide-react'
import HeroSection from '../components/sections/HeroSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import StatsSection from '../components/sections/StatsSection'
import CTASection from '../components/sections/CTASection'

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

export default Home
