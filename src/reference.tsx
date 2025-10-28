import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import resumePdf from './assets/Resume_v1.pdf'
import CodeIcon from '@mui/icons-material/Code'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import TerminalIcon from '@mui/icons-material/Terminal'
import ApiIcon from '@mui/icons-material/Api'
import BuildIcon from '@mui/icons-material/Build'
import StorageIcon from '@mui/icons-material/Storage'
import { Typewriter } from 'react-simple-typewriter'
import logoUrl from './assets/philtech..svg'
import lightLogoUrl from './assets/lightmode_philtech.svg'
import iotImg from './assets/images/iot.png'
import personalizedImg from './assets/images/personalizedwebsite.png'
import resortImg from './assets/images/reservationresort.png'

// Add smooth scrolling behavior
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
}

// Define SVG icons as inline components
const ReactIcon = () => (
  <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="128" r="45" fill="#61DAFB"/>
    <path d="M128 45c-45.9 0-83 37.1-83 83s37.1 83 83 83 83-37.1 83-83-37.1-83-83-83zm0 140c-31.5 0-57-25.5-57-57s25.5-57 57-57 57 25.5 57 57-25.5 57-57 57z" fill="#61DAFB"/>
    <ellipse cx="128" cy="128" rx="83" ry="45" stroke="#61DAFB" strokeWidth="2" fill="none"/>
    <ellipse cx="128" cy="128" rx="83" ry="45" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 128 128)"/>
    <ellipse cx="128" cy="128" rx="83" ry="45" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 128 128)"/>
  </svg>
)

const TypeScriptIcon = () => (
  <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" rx="20" fill="#3178C6"/>
    <path d="M150.518 200.475v27.62c4.492 2.322 9.805 4.048 15.938 5.199 6.133 1.151 12.597 1.726 19.393 1.726 7.622 0 13.914-.633 19.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 4.031-9.876 4.031-15.561 0-4.996-.749-9.384-2.247-13.153-1.497-3.769-3.657-7.121-6.478-10.055-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135.979-1.525 2.362-2.834 4.147-3.927 1.785-1.094 3.973-1.942 6.565-2.547 2.591-.605 5.471-.907 8.638-.907 2.304 0 4.737.173 7.299.518 2.562.345 5.139.876 7.731 1.596 2.591.719 5.11 1.625 7.558 2.719 2.447 1.094 4.708 2.36 6.781 3.798l-22.777 22.777c-4.492-1.611-9.085-2.805-14.066-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.114-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-8.048 6.805-10.754 11.436-2.706 4.632-4.031 10.17-4.031 16.615 0 8.228 2.375 15.248 7.127 21.06 4.752 5.811 11.964 10.731 21.639 14.759 3.801 1.554 7.343 3.078 10.625 4.575 3.282 1.496 6.118 3.049 8.508 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.475 0 2.183-.568 3.838-1.704 5.063-1.136 1.225-2.447 2.549-3.933 3.971-1.486 1.422-3.675 2.299-6.565 2.632-2.89.333-6.227.65-10.011.95-3.784.3-7.943.45-12.477.45-6.989 0-13.318-1.05-18.986-3.151-5.668-2.1-11.11-5.25-16.327-9.45v-27.62h27.62z" fill="white"/>
    <path d="M104.482 131.742h35.518v-22.742H41v22.742h35.345v101.258h27.137v-101.258z" fill="white"/>
  </svg>
)

const JavaScriptIcon = () => (
  <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" fill="#F7DF1E"/>
    <path d="M67.312 213.932l19.588-11.823c3.78 6.705 7.218 12.447 15.467 12.447 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.094-21.904m70.46-93.19h-23.56v23.56h23.56v-23.56z" fill="#000000"/>
    <path d="M152.381 211.354l19.588-11.823c5.157 8.433 11.859 14.609 23.715 14.609 9.968 0 16.325-4.984 16.325-11.858 0-8.25-6.529-11.171-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.67-28.871-36.259 0-18.043 13.747-31.792 35.246-31.792 15.294 0 26.118 5.328 33.976 19.248l-18.731 12.01c-4.124-7.388-8.591-10.308-15.245-10.308-6.954 0-11.358 4.468-11.358 10.308 0 7.218 4.404 10.138 14.777 14.609l6.013 2.578c20.449 8.766 31.963 17.699 31.963 37.785 0 21.654-17.012 35.857-39.855 35.857-22.339 0-36.639-9.967-43.829-22.339" fill="#000000"/>
  </svg>
)

const TailwindIcon = () => (
  <svg width="32" height="32" viewBox="0 0 256 154" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="-2.77777778%" y1="32%" x2="100%" y2="67.5555556%" id="linearGradient-1">
        <stop stopColor="#2298BD" offset="0%"/>
        <stop stopColor="#0ED7B5" offset="100%"/>
      </linearGradient>
    </defs>
    <path d="M128-1.0658141e-14c-34.133333-1.0658141e-14-55.466667 17.066667-64 51.2 12.8-17.066667 27.733333-23.466667 44.8-19.2 10.737481 2.4343704 17.497363 9.4985481 25.201067 17.3184 12.549689 12.7383704 27.07437 27.4816 58.8 27.4816 34.133333 0 55.466667-17.066667 64-51.2-12.8 17.066667-27.733333 23.466667-44.8 19.2-9.737481-2.4343704-16.497363-9.4985481-24.201067-17.3184-12.549689-12.7383704-27.07437-27.4816-58.8-27.4816zm-64 76.8c-34.133333 0-55.466667 17.066667-64 51.2 12.8-17.066667 27.733333-23.466667 44.8-19.2 10.737481 2.43437 17.497363 9.498548 25.201067 17.3184 12.549689 12.73837 27.07437 27.4816 58.8 27.4816 34.133333 0 55.466667-17.066667 64-51.2-12.8 17.066667-27.733333 23.466667-44.8 19.2-9.737481-2.43437-16.497363-9.498548-24.201067-17.3184-12.549689-12.73837-27.07437-27.4816-58.8-27.4816z" fill="url(#linearGradient-1)"/>
  </svg>
)

const HTMLIcon = () => (
  <svg width="32" height="32" viewBox="0 0 256 361" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M255.554813 70.7657143L232.31367 331.125451L127.843868 360.087912L23.6617143 331.166242L0.445186813 70.7657143L255.554813 70.7657143z" fill="#E44D26"/>
    <path d="M128 337.950242L212.416703 314.546637L232.277802 92.0573187L128 92.0573187L128 337.950242z" fill="#F16529"/>
    <path d="M82.8202198 155.932132L128 155.932132L128 123.994725L47.917011 123.994725L48.6814945 132.562989L56.530989 220.572835L128 220.572835L128 188.636132L85.7389011 188.636132L82.8202198 155.932132z" fill="#EBEBEB"/>
    <path d="M24.1807473 0L40.4107253 0L40.4107253 16.0351648L55.2573187 16.0351648L55.2573187 0L71.488 0L71.488 48.5584176L55.258022 48.5584176L55.258022 32.2981978L40.4114286 32.2981978L40.4114286 48.5584176L24.1814505 48.5584176L24.1814505 0z" fill="#000000"/>
    <path d="M92.8309451 16.1026813L78.5427692 16.1026813L78.5427692 0L123.356835 0L123.356835 16.1026813L109.06233 16.1026813L109.06233 48.5584176L92.8316484 48.5584176L92.8316484 16.1026813z" fill="#000000"/>
    <path d="M130.469275 0L147.392703 0L157.802901 17.061978L168.202549 0L185.132308 0L185.132308 48.5584176L168.969143 48.5584176L168.969143 24.4901978L157.802901 41.7554286L157.523692 41.7554286L146.349714 24.4901978L146.349714 48.5584176L130.469275 48.5584176L130.469275 0z" fill="#000000"/>
    <path d="M193.20967 0L209.444571 0L209.444571 32.5077802L232.268659 32.5077802L232.268659 48.5584176L193.20967 48.5584176L193.20967 0z" fill="#000000"/>
    <path d="M127.889582 220.572835L167.216527 220.572835L163.509451 261.992791L127.889582 271.606857L127.889582 304.833407L193.362286 286.687648L193.842637 281.291956L201.347516 197.212132L202.126769 188.636132L127.889582 188.636132L127.889582 220.572835z" fill="#FFFFFF"/>
    <path d="M127.889582 155.854066L127.889582 155.932132L205.032791 155.932132L205.673495 148.753582L207.128615 132.562989L207.892396 123.994725L127.889582 123.994725L127.889582 155.854066z" fill="#FFFFFF"/>
  </svg>
)

const CSSIcon = () => (
  <svg width="32" height="32" viewBox="0 0 256 361" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M255.554813 70.7657143L232.31367 331.125451L127.843868 360.087912L23.6617143 331.166242L0.445186813 70.7657143L255.554813 70.7657143z" fill="#1572B6"/>
    <path d="M128 337.950242L212.416703 314.546637L232.277802 92.0573187L128 92.0573187L128 337.950242z" fill="#33A9DC"/>
    <path d="M82.8202198 155.932132L128 155.932132L128 123.994725L47.917011 123.994725L48.6814945 132.562989L56.530989 220.572835L128 220.572835L128 188.636132L85.7389011 188.636132L82.8202198 155.932132z" fill="#EBEBEB"/>
    <path d="M24.1807473 0L40.4107253 0L40.4107253 16.0351648L55.2573187 16.0351648L55.2573187 0L71.488 0L71.488 48.5584176L55.258022 48.5584176L55.258022 32.2981978L40.4114286 32.2981978L40.4114286 48.5584176L24.1814505 48.5584176L24.1814505 0z" fill="#000000"/>
    <path d="M92.8309451 16.1026813L78.5427692 16.1026813L78.5427692 0L123.356835 0L123.356835 16.1026813L109.06233 16.1026813L109.06233 48.5584176L92.8316484 48.5584176L92.8316484 16.1026813z" fill="#000000"/>
    <path d="M130.469275 0L147.392703 0L157.802901 17.061978L168.202549 0L185.132308 0L185.132308 48.5584176L168.969143 48.5584176L168.969143 24.4901978L157.802901 41.7554286L157.523692 41.7554286L146.349714 24.4901978L146.349714 48.5584176L130.469275 48.5584176L130.469275 0z" fill="#000000"/>
    <path d="M193.20967 0L209.444571 0L209.444571 32.5077802L232.268659 32.5077802L232.268659 48.5584176L193.20967 48.5584176L193.20967 0z" fill="#000000"/>
    <path d="M127.889582 220.572835L167.216527 220.572835L163.509451 261.992791L127.889582 271.606857L127.889582 304.833407L193.362286 286.687648L193.842637 281.291956L201.347516 197.212132L202.126769 188.636132L127.889582 188.636132L127.889582 220.572835z" fill="#FFFFFF"/>
    <path d="M127.889582 155.854066L127.889582 155.932132L205.032791 155.932132L205.673495 148.753582L207.128615 132.562989L207.892396 123.994725L127.889582 123.994725L127.889582 155.854066z" fill="#FFFFFF"/>
  </svg>
)

const PythonIcon = () => (
  <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M126.916.048c-43.589 0-66.348 22.667-66.348 66.348v21.667h132.64v7.067H45.696v7.067h116.912c22.667 0 38.933-16.267 38.933-38.933V66.396c0-22.667-16.267-38.933-38.933-38.933-7.067 0-12.8 5.733-12.8 12.8s5.733 12.8 12.8 12.8c7.467 0 13.333 5.867 13.333 13.333v14.933c0 7.467-5.867 13.333-13.333 13.333H45.696c-22.667 0-38.933 16.267-38.933 38.933v66.348c0 22.667 16.267 38.933 38.933 38.933h21.333V147.73c0-43.589 22.667-66.348 66.348-66.348h66.348c43.589 0 66.348-22.667 66.348-66.348V.048h-21.333c-43.589 0-66.348 22.667-66.348 66.348v21.667H60.568V66.396c0-43.589 22.667-66.348 66.348-66.348zm-21.333 12.8c-7.067 0-12.8 5.733-12.8 12.8s5.733 12.8 12.8 12.8 12.8-5.733 12.8-12.8-5.733-12.8-12.8-12.8z" fill="#3776AB"/>
    <path d="M210.284 243.952c43.589 0 66.348-22.667 66.348-66.348v-21.667H143.992v-7.067h116.912v-7.067H144.192c-22.667 0-38.933 16.267-38.933 38.933v66.348c0 22.667 16.267 38.933 38.933 38.933h21.333v-58.751c0-43.589-22.667-66.348-66.348-66.348H45.696c-43.589 0-66.348 22.667-66.348 66.348v66.348c0 43.589 22.667 66.348 66.348 66.348h21.333V147.73c0 43.589 22.667 66.348 66.348 66.348h66.348c43.589 0 66.348 22.667 66.348 66.348v21.667h-21.333zm21.333 12.8c-7.067 0-12.8-5.733-12.8-12.8s5.733-12.8 12.8-12.8 12.8 5.733 12.8 12.8-5.733 12.8-12.8 12.8z" fill="#FFD43B"/>
  </svg>
)

const CPlusPlusIcon = () => (
  <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M255.554813 70.7657143L232.31367 331.125451L127.843868 360.087912L23.6617143 331.166242L0.445186813 70.7657143L255.554813 70.7657143z" fill="#00599C"/>
    <path d="M128 337.950242L212.416703 314.546637L232.277802 92.0573187L128 92.0573187L128 337.950242z" fill="#004482"/>
    <path d="M82.8202198 155.932132L128 155.932132L128 123.994725L47.917011 123.994725L48.6814945 132.562989L56.530989 220.572835L128 220.572835L128 188.636132L85.7389011 188.636132L82.8202198 155.932132z" fill="#EBEBEB"/>
    <path d="M24.1807473 0L40.4107253 0L40.4107253 16.0351648L55.2573187 16.0351648L55.2573187 0L71.488 0L71.488 48.5584176L55.258022 48.5584176L55.258022 32.2981978L40.4114286 32.2981978L40.4114286 48.5584176L24.1814505 48.5584176L24.1814505 0z" fill="#000000"/>
    <path d="M92.8309451 16.1026813L78.5427692 16.1026813L78.5427692 0L123.356835 0L123.356835 16.1026813L109.06233 16.1026813L109.06233 48.5584176L92.8316484 48.5584176L92.8316484 16.1026813z" fill="#000000"/>
    <path d="M130.469275 0L147.392703 0L157.802901 17.061978L168.202549 0L185.132308 0L185.132308 48.5584176L168.969143 48.5584176L168.969143 24.4901978L157.802901 41.7554286L157.523692 41.7554286L146.349714 24.4901978L146.349714 48.5584176L130.469275 48.5584176L130.469275 0z" fill="#000000"/>
    <path d="M193.20967 0L209.444571 0L209.444571 32.5077802L232.268659 32.5077802L232.268659 48.5584176L193.20967 48.5584176L193.20967 0z" fill="#000000"/>
    <path d="M127.889582 220.572835L167.216527 220.572835L163.509451 261.992791L127.889582 271.606857L127.889582 304.833407L193.362286 286.687648L193.842637 281.291956L201.347516 197.212132L202.126769 188.636132L127.889582 188.636132L127.889582 220.572835z" fill="#FFFFFF"/>
    <path d="M127.889582 155.854066L127.889582 155.932132L205.032791 155.932132L205.673495 148.753582L207.128615 132.562989L207.892396 123.994725L127.889582 123.994725L127.889582 155.854066z" fill="#FFFFFF"/>
  </svg>
)
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './contexts/ThemeContext'

function App() {
  const [init, setInit] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = useCallback(async (container: any) => {
    console.log('Particles loaded:', container)
  }, [])

  return (
    <div className={`min-h-screen w-full relative transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-zinc-950 text-zinc-100' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Animated Gradient Background - Framer Motion */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Layer 1 - Flowing diagonal gradient */}
        <motion.div 
          className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-indigo-900/15 via-purple-900/10 to-pink-900/8'
              : 'bg-gradient-to-br from-indigo-200/30 via-purple-200/20 to-pink-200/15'
          }`}
          animate={{
            background: theme === 'dark' ? [
              "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(147, 51, 234, 0.10) 50%, rgba(236, 72, 153, 0.08) 100%)",
              "linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(99, 102, 241, 0.10) 50%, rgba(16, 185, 129, 0.08) 100%)",
              "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(236, 72, 153, 0.10) 50%, rgba(99, 102, 241, 0.08) 100%)",
              "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(147, 51, 234, 0.10) 50%, rgba(236, 72, 153, 0.08) 100%)"
            ] : [
              "linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, rgba(236, 72, 153, 0.15) 100%)",
              "linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(99, 102, 241, 0.2) 50%, rgba(16, 185, 129, 0.15) 100%)",
              "linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, rgba(99, 102, 241, 0.15) 100%)",
              "linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, rgba(236, 72, 153, 0.15) 100%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Layer 2 - Reverse diagonal gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tl from-blue-900/12 via-cyan-900/8 to-emerald-900/6"
          animate={{
            background: [
              "linear-gradient(-135deg, rgba(14, 165, 233, 0.12) 0%, rgba(6, 182, 212, 0.08) 50%, rgba(16, 185, 129, 0.06) 100%)",
              "linear-gradient(-135deg, rgba(168, 85, 247, 0.12) 0%, rgba(14, 165, 233, 0.08) 50%, rgba(236, 72, 153, 0.06) 100%)",
              "linear-gradient(-135deg, rgba(16, 185, 129, 0.12) 0%, rgba(168, 85, 247, 0.08) 50%, rgba(14, 165, 233, 0.06) 100%)",
              "linear-gradient(-135deg, rgba(14, 165, 233, 0.12) 0%, rgba(6, 182, 212, 0.08) 50%, rgba(16, 185, 129, 0.06) 100%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        {/* Layer 3 - Radial gradient with scaling */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 70%)",
              "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.08) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)",
              "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)",
              "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 70%)"
            ],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                },
                onHover: {
                  enable: false,
                },
                resize: {
                  enable: true,
                },
              },
            },
            particles: {
              color: {
                value: ["#6366f1", "#ec4899", "#10b981", "#0ea5e9"],
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 30,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="fixed inset-0 -z-10"
        />
      )}
      {/* Header */}
      <header className={`sticky top-0 z-10 border-b backdrop-blur ${
        theme === 'dark' 
          ? 'border-zinc-800 bg-zinc-950/80' 
          : 'border-gray-200 bg-white/80'
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center cursor-pointer">
            <img 
              src={theme === 'dark' ? logoUrl : lightLogoUrl} 
              alt="PhilTech" 
              className="h-12 w-auto transition-all duration-300" 
            />
          </a>
          <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm sm:flex">
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className={`transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-zinc-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Projects</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className={`transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-zinc-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Services</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className={`transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-zinc-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>About</a>
              <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className={`transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-zinc-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Skills</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className={`transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-zinc-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Experience</a>
              <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }} className={`transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-zinc-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Education</a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className={`transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-zinc-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>FAQ</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={`transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-zinc-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Contact</a>
          </nav>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' 
                  ? 'text-zinc-300 hover:text-white hover:bg-zinc-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20">
        {/* Tech grid background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="animated-gradient" />
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.10),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.10),transparent_45%),radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.10),transparent_42%),radial-gradient(circle_at_90%_90%,rgba(14,165,233,0.10),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-fuchsia-500/10 to-emerald-500/5" />
        </div>
        <div className="grid w-full items-center gap-8 lg:gap-14 sm:grid-cols-2">
          <motion.div 
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p 
              className={`text-sm uppercase tracking-widest ${
                theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Web Developer
            </motion.p>
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className={`bg-gradient-to-r bg-clip-text text-transparent whitespace-nowrap ${
                theme === 'dark' 
                  ? 'from-white via-zinc-300 to-white' 
                  : 'from-gray-900 via-gray-700 to-gray-900'
              }`}>
                <Typewriter
                  words={["Antoine Philipp Ochea","Antoine Philipp"]}
                  loop={0}
                  typeSpeed={85}
                  deleteSpeed={50}
                  delaySpeed={1200}
                  cursor
                  cursorStyle="|"
                />
              </span>
            </motion.h1>
            <motion.p 
              className={`text-base sm:text-lg ${
                theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I turn ideas into production‑ready apps with clarity, performance, and maintainability.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                className="rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:from-indigo-400 hover:to-fuchsia-400 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/40 cursor-pointer"
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className={`rounded-lg border px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/40 cursor-pointer ${
                  theme === 'dark' 
                    ? 'border-white/20 text-white hover:bg-white/10' 
                    : 'border-gray-300 text-gray-900 hover:bg-gray-100'
                }`}
              >
                Contact Me
              </a>
              <a
                href={resumePdf}
                download
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/40 ${
                  theme === 'dark' 
                    ? 'bg-white/10 text-white hover:bg-white/20' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Download Resume
              </a>
            </motion.div>
            <motion.div 
              className="mt-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/antoinephil" target="_blank" rel="noreferrer" className={`transition ${
                theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}>
                <LinkedInIcon sx={{ fontSize: 20 }} />
              </a>
              <a aria-label="Facebook" href="https://www.facebook.com/antoine.philipp.ochea" target="_blank" rel="noreferrer" className={`transition ${
                theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}>
                <FacebookIcon sx={{ fontSize: 20 }} />
              </a>
              <a aria-label="Twitter" href="https://x.com/zyukirax" target="_blank" rel="noreferrer" className={`transition ${
                theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}>
                <TwitterIcon sx={{ fontSize: 20 }} />
              </a>
              <a aria-label="Email" href="mailto:antoineochea0321@gmail.com" className={`transition ${
                theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}>
                <EmailIcon sx={{ fontSize: 20 }} />
              </a>
              <a aria-label="GitHub" href="https://github.com/Anoncasphil" className={`transition ${
                theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}>
                <GitHubIcon sx={{ fontSize: 20 }} />
        </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative hidden justify-end sm:flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className={`w-full max-w-sm rounded-2xl border backdrop-blur p-6 shadow-lg ${
              theme === 'dark' 
                ? 'border-zinc-800/60 bg-zinc-900/50 shadow-zinc-900/20' 
                : 'border-gray-200/60 bg-white/90 shadow-gray-200/20'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${
                  theme === 'dark' ? 'bg-green-400' : 'bg-green-500'
                }`}></div>
                <p className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Student Developer</p>
      </div>
              <div className="grid grid-cols-2 gap-3">
                <div className={`rounded-xl border p-4 transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'border-zinc-700/60 bg-zinc-800/30 hover:bg-zinc-800/50' 
                    : 'border-gray-200/60 bg-gray-50/50 hover:bg-gray-100/50'
                }`}>
                  <p className={`text-xs font-medium mb-1 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                  }`}>Status</p>
                  <p className={`text-sm font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Student</p>
          </div>
                <div className={`rounded-xl border p-4 transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'border-zinc-700/60 bg-zinc-800/30 hover:bg-zinc-800/50' 
                    : 'border-gray-200/60 bg-gray-50/50 hover:bg-gray-100/50'
                }`}>
                  <p className={`text-xs font-medium mb-1 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                  }`}>Location</p>
                  <p className={`text-sm font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>PH</p>
                </div>
                <div className={`rounded-xl border p-4 transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'border-zinc-700/60 bg-zinc-800/30 hover:bg-zinc-800/50' 
                    : 'border-gray-200/60 bg-gray-50/50 hover:bg-gray-100/50'
                }`}>
                  <p className={`text-xs font-medium mb-1 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                  }`}>Focus</p>
                  <p className={`text-sm font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Full‑Stack</p>
                </div>
                <div className={`rounded-xl border p-4 transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'border-zinc-700/60 bg-zinc-800/30 hover:bg-zinc-800/50' 
                    : 'border-gray-200/60 bg-gray-50/50 hover:bg-gray-100/50'
                }`}>
                  <p className={`text-xs font-medium mb-1 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                  }`}>Available</p>
                  <p className={`text-sm font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Internships</p>
                </div>
              </div>
              
            </div>
            <span className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
            <span className="pointer-events-none absolute -right-10 bottom-0 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-2xl" />
            <span className="pointer-events-none absolute left-1/3 -bottom-6 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' ? 'from-white via-zinc-200 to-white' : 'from-gray-900 via-gray-700 to-gray-900'
            }`}>Projects</span>
            </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
          }`}>
            Showcasing my latest work and innovative solutions
          </p>
          </div>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Sustainable IoT-Based Water Monitoring and Management',
              img: iotImg,
              tech: ['PHP', 'MySQL', 'Arduino', 'C++', 'JavaScript', 'Git'],
              href: '#',
              desc:
                'An IoT-driven web platform for real‑time monitoring of turbidity, TDS, pH, and temperature. Includes automated control routines that filter and dispense water based on sensor thresholds to promote sustainable usage.'
            },
            {
              title: 'Resort Reservation System',
              img: resortImg,
              tech: ['PHP', 'MySQL', 'JavaScript', 'Git', 'Docker'],
              href: '#',
              desc:
                'A reservation website for an eco‑resort featuring bookings, availability management, and administrative tools. Designed for reliability and smooth guest workflow.'
            },
            {
              title: 'Personalized Company Website with Inventory Management',
              img: personalizedImg,
              tech: ['PHP', 'MySQL', 'JavaScript', 'Git'],
              href: '#',
              desc:
                'An auto‑supply business website integrated with a basic inventory module for tracking products and stock levels, aimed at improving browsing and day‑to‑day operations.'
            },
          ].map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                theme === 'dark' 
                  ? 'border-white/10 bg-zinc-900/30 shadow-lg shadow-zinc-900/20 hover:bg-zinc-900/50 hover:shadow-zinc-900/40'
                  : 'border-gray-200/60 bg-white/80 shadow-lg shadow-gray-200/20 hover:bg-white/90 hover:shadow-gray-200/40'
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <a
                href={p.href}
                className="outline-none"
                aria-label={`${p.title} project`}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className={`text-base font-semibold tracking-tight ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{p.title}</h3>
                    <OpenInNewIcon sx={{ fontSize: 18 }} className={`transition-colors ${
                      theme === 'dark' ? 'text-zinc-400 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'
                    }`} />
                  </div>
                  <p className={`mt-2 text-sm leading-6 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                  }`}>
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 hover:scale-105 ${
                          theme === 'dark' 
                            ? 'bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400/50'
                            : 'bg-gradient-to-r from-indigo-100 to-fuchsia-100 text-indigo-700 border border-indigo-200 hover:border-indigo-300'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 hover:scale-105 ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400/50'
                          : 'bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 border border-emerald-200 hover:border-emerald-300'
                      }`}>+{p.tech.length - 4}</span>
                    )}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' ? 'from-white via-zinc-200 to-white' : 'from-gray-900 via-gray-700 to-gray-900'
            }`}>About Me</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
          }`}>
            Passionate about creating innovative solutions through technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className={`rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              theme === 'dark' 
                ? 'border-white/10 bg-zinc-900/30 shadow-zinc-900/20 hover:bg-zinc-900/50 hover:border-white/20' 
                : 'border-gray-200/60 bg-white/90 shadow-gray-200/20 hover:bg-white hover:shadow-gray-200/40 hover:border-gray-300/80'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>My Story</h3>
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'
              }`}>
                I'm a passionate BSIT student at National University Fairview, specializing in Mobile & Internet Technology. 
                My journey into development began with curiosity about how websites and applications work, 
                and it has evolved into a deep passion for creating innovative solutions.
              </p>
              <p className={`text-lg leading-relaxed mt-4 ${
                theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'
              }`}>
                I've built several projects including a comprehensive Resort Reservation System, IoT-based water monitoring platform, 
                and inventory management systems. I'm always eager to learn new technologies and take on challenging projects.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`rounded-2xl border p-6 shadow-lg ${
              theme === 'dark' 
                ? 'border-white/10 bg-zinc-900/30 shadow-zinc-900/20' 
                : 'border-gray-200/60 bg-white/80 shadow-gray-200/20'
            }`}>
              <h4 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Current Focus</h4>
              <ul className={`space-y-3 ${
                theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'
              }`}>
                <li className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-500'
                  }`}></div>
                  Full-stack web development
                </li>
                <li className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    theme === 'dark' ? 'bg-fuchsia-400' : 'bg-fuchsia-500'
                  }`}></div>
                  Modern JavaScript frameworks
                </li>
                <li className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    theme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-500'
                  }`}></div>
                  Database design & optimization
                </li>
                <li className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
                  }`}></div>
                  Mobile-first responsive design
                </li>
              </ul>
            </div>

            <div className={`rounded-2xl border p-6 shadow-lg ${
              theme === 'dark' 
                ? 'border-white/10 bg-zinc-900/30 shadow-zinc-900/20' 
                : 'border-gray-200/60 bg-white/80 shadow-gray-200/20'
            }`}>
              <h4 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Goals</h4>
              <p className={`leading-relaxed ${
                theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'
              }`}>
                Seeking internship opportunities to apply my skills in real-world projects, 
                contribute to meaningful solutions, and continue growing as a full-stack developer 
                in a collaborative environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' ? 'from-white via-zinc-200 to-white' : 'from-gray-900 via-gray-700 to-gray-900'
            }`}>Skills & Technologies</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
          }`}>
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="space-y-12">
          {/* Frontend Technologies */}
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Frontend Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'React', logo: <ReactIcon />, level: 'Advanced' },
                { name: 'TypeScript', logo: <TypeScriptIcon />, level: 'Intermediate' },
                { name: 'JavaScript', logo: <JavaScriptIcon />, level: 'Advanced' },
                { name: 'Tailwind CSS', logo: <TailwindIcon />, level: 'Advanced' },
                { name: 'HTML5', logo: <HTMLIcon />, level: 'Advanced' },
                { name: 'CSS3', logo: <CSSIcon />, level: 'Advanced' },
              ].map((skill, i) => (
                <div key={skill.name} className={`group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  theme === 'dark' 
                    ? 'border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 hover:shadow-zinc-900/20 hover:border-white/20'
                    : 'border-gray-200/60 bg-white/90 hover:bg-white hover:shadow-gray-200/40 hover:border-gray-300/80 hover:shadow-lg'
                }`} style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-center">
                    <div className="text-3xl mb-2">
                      {typeof skill.logo === 'string' ? (
                        <img src={skill.logo} alt={skill.name} className="w-8 h-8 mx-auto" />
                      ) : (
                        skill.logo
                      )}
                    </div>
                    <h4 className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{skill.name}</h4>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                    }`}>{skill.level}</p>
                  </div>
            </div>
          ))}
            </div>
          </div>

          {/* Backend Technologies */}
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Backend Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'Python', logo: <PythonIcon />, level: 'Intermediate' },
                { name: 'C++', logo: <CPlusPlusIcon />, level: 'Intermediate' },
                { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', level: 'Intermediate' },
                { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', level: 'Advanced' },
                { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', level: 'Advanced' },
                { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', level: 'Beginner' },
              ].map((skill, i) => (
                <div key={skill.name} className={`group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  theme === 'dark' 
                    ? 'border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 hover:shadow-zinc-900/20 hover:border-white/20'
                    : 'border-gray-200/60 bg-white/90 hover:bg-white hover:shadow-gray-200/40 hover:border-gray-300/80 hover:shadow-lg'
                }`} style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      {typeof skill.logo === 'string' ? (
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        skill.logo
                      )}
                    </div>
                    <h4 className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{skill.name}</h4>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                    }`}>{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Tools & Others</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', level: 'Intermediate' },
                { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', level: 'Beginner' },
                { name: 'Arduino', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg', level: 'Intermediate' },
                { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', level: 'Beginner' },
                { name: 'VSCode', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', level: 'Advanced' },
                { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', level: 'Intermediate' },
              ].map((skill, i) => (
                <div key={skill.name} className={`group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  theme === 'dark' 
                    ? 'border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 hover:shadow-zinc-900/20 hover:border-white/20'
                    : 'border-gray-200/60 bg-white/90 hover:bg-white hover:shadow-gray-200/40 hover:border-gray-300/80 hover:shadow-lg'
                }`} style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      {typeof skill.logo === 'string' ? (
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        skill.logo
                      )}
                    </div>
                    <h4 className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{skill.name}</h4>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                    }`}>{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' ? 'from-white via-zinc-200 to-white' : 'from-gray-900 via-gray-700 to-gray-900'
            }`}>Services</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
          }`}>
            Comprehensive solutions to bring your digital ideas to life
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { 
              title: 'Full-Stack Web Development', 
              desc: 'Complete web applications from frontend to backend, using modern frameworks and best practices.',
              features: ['React/Next.js', 'Node.js/PHP', 'Database Design', 'API Development'],
              Icon: CodeIcon,
              color: 'from-blue-500 to-cyan-500'
            },
            { 
              title: 'Frontend Development', 
              desc: 'Beautiful, responsive user interfaces that provide exceptional user experiences across all devices.',
              features: ['React/TypeScript', 'Tailwind CSS', 'Responsive Design', 'Performance Optimization'],
              Icon: BuildIcon,
              color: 'from-purple-500 to-pink-500'
            },
            { 
              title: 'Backend Development', 
              desc: 'Robust server-side solutions with secure APIs, database optimization, and scalable architecture.',
              features: ['RESTful APIs', 'Database Design', 'Authentication', 'Cloud Deployment'],
              Icon: ApiIcon,
              color: 'from-green-500 to-emerald-500'
            },
            { 
              title: 'IoT & Hardware Integration', 
              desc: 'Connecting physical devices to web platforms for smart monitoring and control systems.',
              features: ['Arduino Programming', 'Sensor Integration', 'Real-time Data', 'Web Dashboards'],
              Icon: StorageIcon,
              color: 'from-orange-500 to-red-500'
            },
            { 
              title: 'Database Design & Management', 
              desc: 'Efficient database architectures and optimization for high-performance applications.',
              features: ['MySQL/MongoDB', 'Query Optimization', 'Data Modeling', 'Backup Solutions'],
              Icon: TerminalIcon,
              color: 'from-indigo-500 to-purple-500'
            },
            { 
              title: 'Technical Consulting', 
              desc: 'Expert guidance on technology choices, architecture decisions, and development best practices.',
              features: ['Architecture Planning', 'Code Reviews', 'Performance Analysis', 'Tech Stack Selection'],
              Icon: IntegrationInstructionsIcon,
              color: 'from-teal-500 to-blue-500'
            },
          ].map((service, i) => (
            <div key={service.title} className={`group rounded-2xl border p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
              theme === 'dark' 
                ? 'border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 shadow-zinc-900/20 hover:shadow-zinc-900/40 hover:border-white/20'
                : 'border-gray-200/60 bg-white/90 hover:bg-white shadow-gray-200/20 hover:shadow-gray-200/50 hover:border-gray-300/80 hover:shadow-xl'
            }`} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="mb-4">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                  <service.Icon sx={{ fontSize: 24, color: 'white' }} />
              </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{service.title}</h3>
                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                }`}>{service.desc}</p>
            </div>
              <div className="space-y-2">
                <h4 className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                }`}>Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                      }`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className={`inline-flex items-center gap-2 rounded-full px-6 py-3 border ${
            theme === 'dark' 
              ? 'border-white/20 bg-white/5 text-white hover:bg-white/10'
              : 'border-gray-300 bg-gray-50 text-gray-900 hover:bg-gray-100'
          } transition-all duration-300`}>
            <span className="text-sm font-medium">Ready to start your project?</span>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={`text-sm font-semibold transition-colors cursor-pointer ${
              theme === 'dark' 
                ? 'text-indigo-400 hover:text-indigo-300'
                : 'text-indigo-600 hover:text-indigo-500'
            }`}>
              Let's discuss →
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' ? 'from-white via-zinc-200 to-white' : 'from-gray-900 via-gray-700 to-gray-900'
            }`}>Experience</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
          }`}>
            My professional journey and key achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px ${
            theme === 'dark' ? 'bg-zinc-400' : 'bg-gray-400'
          }`}></div>

          <div className="space-y-12">
            {[
              { 
                role: 'Reservation System Developer (Capstone)', 
                company: 'National University Fairview', 
                period: 'Mar 2025', 
                duration: '6 months',
                type: 'Academic Project',
                summary: 'Developed a comprehensive resort reservation system with advanced booking management, payment processing, and administrative features.',
                achievements: [
                  'Built full-stack application using Node.js and MySQL',
                  'Implemented secure payment gateway integration',
                  'Created responsive admin dashboard with real-time analytics',
                  'Achieved 95% user satisfaction in testing phase'
                ],
                technologies: ['Node.js', 'MySQL', 'React', 'Payment Gateway', 'Admin Panel'],
                side: 'left'
              },
              { 
                role: 'Social Media Manager', 
                company: 'Codability Tech Student Organization', 
                period: '2023', 
                duration: '1 year',
                type: 'Leadership Role',
                summary: 'Led social media strategy and content creation for tech events, significantly improving organization visibility and event attendance.',
                achievements: [
                  'Increased social media engagement by 150%',
                  'Organized and promoted 8+ tech events successfully',
                  'Created compelling visual content and campaigns',
                  'Managed community interactions and feedback'
                ],
                technologies: ['Social Media', 'Content Creation', 'Event Management', 'Community Building'],
                side: 'right'
              },
              { 
                role: 'School Event Volunteer', 
                company: 'National University Fairview', 
                period: 'Jan 2023', 
                duration: '3 months',
                type: 'Volunteer Work',
                summary: 'Supported various university events including tech conferences, career fairs, and academic competitions.',
                achievements: [
                  'Assisted in logistics for 12+ university events',
                  'Coordinated with 50+ student volunteers',
                  'Managed event setup and technical equipment',
                  'Provided excellent customer service to attendees'
                ],
                technologies: ['Event Coordination', 'Logistics', 'Team Management', 'Customer Service'],
                side: 'left'
              },
              { 
                role: 'IT Intern', 
                company: 'Hytec Power Inc.', 
                period: '2022', 
                duration: '3 months',
                type: 'Internship',
                summary: 'Gained hands-on experience in IT infrastructure, system maintenance, and technical documentation.',
                achievements: [
                  'Assisted in network troubleshooting and maintenance',
                  'Created comprehensive technical documentation',
                  'Participated in system testing and quality assurance',
                  'Learned enterprise-level IT operations'
                ],
                technologies: ['Network Administration', 'System Testing', 'Documentation', 'IT Support'],
                side: 'right'
              },
            ].map((exp, i) => (
              <div key={exp.role} className={`relative flex items-center ${
                exp.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
              }`} style={{ animationDelay: `${i * 150}ms` }}>
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 flex items-center justify-center z-10 ${
                  theme === 'dark' 
                    ? 'bg-zinc-950 border-indigo-500' 
                    : 'bg-white border-indigo-500'
                }`}>
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
              </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  exp.side === 'right' ? 'md:pl-8' : 'md:pr-8'
                }`}>
                  <div className={`rounded-2xl border p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                    theme === 'dark' 
                      ? 'border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 shadow-zinc-900/20'
                      : 'border-gray-200/60 bg-white/80 hover:bg-white/90 shadow-gray-200/20'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                          theme === 'dark' 
                            ? 'bg-indigo-500/20 text-indigo-300'
                            : 'bg-indigo-100 text-indigo-700'
                        }`}>
                          {exp.type}
                        </div>
                        <h3 className={`text-lg font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{exp.role}</h3>
                        <p className={`text-sm font-medium ${
                          theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                        }`}>{exp.company}</p>
                      </div>
                      <div className="text-right mt-2 sm:mt-0">
                        <p className={`text-sm font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{exp.period}</p>
                        <p className={`text-xs ${
                          theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                        }`}>{exp.duration}</p>
                      </div>
                    </div>

                    <p className={`mb-4 ${
                      theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'
                    }`}>{exp.summary}</p>

                    <div className="space-y-3">
                      <h4 className={`text-sm font-semibold ${
                        theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                      }`}>Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                              theme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-500'
                            }`}></div>
                            <span className={`text-sm ${
                              theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                            }`}>{achievement}</span>
            </li>
          ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className={`px-2 py-1 rounded-full text-xs font-medium ${
                            theme === 'dark' 
                              ? 'bg-white/5 text-zinc-300 border border-white/10'
                              : 'bg-gray-100 text-gray-700 border border-gray-200'
                          }`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' ? 'from-white via-zinc-200 to-white' : 'from-gray-900 via-gray-700 to-gray-900'
            }`}>Education & Certifications</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
          }`}>
            Academic background and professional certifications
          </p>
          </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Education</h3>
            <div className="space-y-6">
              {[
                {
                  degree: 'Bachelor of Science in Information Technology',
                  specialization: 'Mobile & Internet Technology',
                  school: 'National University Fairview',
                  period: 'Aug 2022 — Present',
                  status: 'In Progress',
                  gpa: '3.2/4.0',
                  achievements: [
                    'Dean\'s List - Fall 2023',
                    'Active member of Codability Tech Organization',
                    'Participated in 5+ hackathons and coding competitions',
                    'Completed capstone project: Resort Reservation System'
                  ],
                  courses: ['Web Development', 'Mobile App Development', 'Database Systems', 'Software Engineering']
                },
                {
                  degree: 'Senior High School',
                  specialization: 'Science, Technology, Engineering, and Mathematics (STEM)',
                  school: 'St. Francis Technical Institute',
                  period: 'Jun 2020 — Jul 2022',
                  status: 'Completed',
                  gpa: '3.5/4.0',
                  achievements: [
                    'Graduated with honors',
                    'Class representative for STEM strand',
                    'Participated in science fair competitions',
                    'Active in school IT club'
                  ],
                  courses: ['Advanced Mathematics', 'Physics', 'Chemistry', 'Computer Programming']
                }
              ].map((edu, i) => (
                <div key={edu.degree} className={`rounded-2xl border p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  theme === 'dark' 
                    ? 'border-white/20 bg-zinc-900/20 hover:bg-zinc-900/40 shadow-zinc-900/30 hover:border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
                    : 'border-gray-200/40 bg-white/60 hover:bg-white/80 shadow-gray-200/30 hover:shadow-gray-200/50 hover:border-gray-300/60 shadow-[0_8px_32px_0_rgba(255,255,255,0.37)]'
                }`} style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="flex-1">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        edu.status === 'In Progress' 
                          ? (theme === 'dark' ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700')
                          : (theme === 'dark' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-100 text-emerald-700')
                      }`}>
                        {edu.status}
                      </div>
                      <h4 className={`text-lg font-bold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{edu.degree}</h4>
                      <p className={`text-sm font-medium mb-1 ${
                        theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                      }`}>{edu.specialization}</p>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                      }`}>{edu.school}</p>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <p className={`text-sm font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{edu.period}</p>
                      <p className={`text-xs ${
                        theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                      }`}>GPA: {edu.gpa}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className={`text-sm font-semibold ${
                      theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                    }`}>Key Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                            theme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-500'
                          }`}></div>
                          <span className={`text-sm ${
                            theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                          }`}>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <h5 className={`text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                    }`}>Relevant Courses:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span key={idx} className={`px-2 py-1 rounded-full text-xs font-medium ${
                          theme === 'dark' 
                            ? 'bg-white/5 text-zinc-300 border border-white/10'
                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Certifications & Awards</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Web Development Fundamentals',
                  issuer: 'FreeCodeCamp',
                  date: '2023',
                  type: 'Certificate',
                  description: 'Completed comprehensive web development curriculum covering HTML, CSS, JavaScript, and responsive design.'
                },
                {
                  title: 'React Developer Certification',
                  issuer: 'Meta (Facebook)',
                  date: '2023',
                  type: 'Certificate',
                  description: 'Professional certification in React development, covering modern React patterns, hooks, and best practices.'
                },
                {
                  title: 'Database Design & Management',
                  issuer: 'MySQL University',
                  date: '2022',
                  type: 'Certificate',
                  description: 'Specialized training in database architecture, optimization, and management using MySQL.'
                },
                {
                  title: 'Best Capstone Project',
                  issuer: 'National University Fairview',
                  date: '2024',
                  type: 'Award',
                  description: 'Recognized for outstanding work on the Resort Reservation System project.'
                },
                {
                  title: 'IoT Development Workshop',
                  issuer: 'Arduino Philippines',
                  date: '2023',
                  type: 'Certificate',
                  description: 'Hands-on training in IoT development using Arduino and sensor integration.'
                }
              ].map((cert, i) => (
                <div key={cert.title} className={`rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  theme === 'dark' 
                    ? 'border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50'
                    : 'border-gray-200/60 bg-white/80 hover:bg-white/90'
                }`} style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{cert.title}</h4>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          cert.type === 'Award' 
                            ? (theme === 'dark' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700')
                            : (theme === 'dark' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-700')
                        }`}>
                          {cert.type}
                        </span>
                      </div>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                      }`}>{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                  }`}>{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' ? 'from-white via-zinc-200 to-white' : 'from-gray-900 via-gray-700 to-gray-900'
            }`}>What Clients Say</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
          }`}>
            Feedback from clients and collaborators who have worked with me
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote: "Antoine was amazing to work with on our Resort Reservation System capstone project. His React and Node.js skills really brought our ideas to life. He handled the complex booking logic and payment integration flawlessly. Couldn't have done it without him!",
              author: "Ralph Adrian Cadiz",
              role: "Capstone Project Member",
              company: "National University Fairview",
              rating: 5
            },
            {
              quote: "Working with Antoine on the IoT water monitoring project was incredible. His knowledge of Arduino and web integration made our sensor data come alive on the dashboard. He's a great team player and always willing to help debug issues.",
              author: "Paul Altuna",
              role: "IoT Project Collaborator",
              company: "National University Fairview",
              rating: 5
            },
            {
              quote: "Antoine's frontend skills are top-notch! On our group projects, he always delivered clean, responsive interfaces that impressed our professors. His attention to detail with Tailwind CSS and user experience really shows.",
              author: "John Henrei Cabuquin",
              role: "Development Team Member",
              company: "National University Fairview",
              rating: 5
            },
            {
              quote: "Antoine is a problem-solver! During our hackathons and coding competitions, he always came up with creative solutions under pressure. His full-stack development skills and leadership made our team successful every time.",
              author: "Zion Maverick Bamba",
              role: "Hackathon Team Lead",
              company: "National University Fairview",
              rating: 5
            },
            {
              quote: "Antoine's database design for our inventory management system was excellent. He optimized our queries and made sure everything ran smoothly even with large datasets. His backend expertise really shines in complex projects.",
              author: "Ralph Adrian Cadiz",
              role: "Backend Development Partner",
              company: "Academic Projects",
              rating: 5
            },
            {
              quote: "Antoine's communication skills are just as good as his coding! He always explained technical concepts clearly during our group meetings and made sure everyone understood the project architecture. A true team player!",
              author: "Paul Altuna",
              role: "Project Documentation Lead",
              company: "Academic Collaborations",
              rating: 5
            }
          ].map((testimonial, i) => (
            <div key={i} className={`rounded-2xl border p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
              theme === 'dark' 
                ? 'border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-white/20' 
                : 'border-gray-200/60 bg-white/90 hover:bg-white hover:shadow-gray-200/40 hover:border-gray-300/80'
            }`} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <svg key={starIndex} className={`w-4 h-4 ${
                    theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'
                  }`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className={`text-base leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
              }`}>
                "{testimonial.quote}"
            </blockquote>
              <footer className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white' 
                    : 'bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white'
                }`}>
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.author}
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                  }`}>
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' ? 'from-white via-zinc-200 to-white' : 'from-gray-900 via-gray-700 to-gray-900'
            }`}>Frequently Asked Questions</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
          }`}>
            Everything you need to know about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            { 
              q: 'What services do you offer?', 
              a: 'I offer comprehensive web development services including frontend development with React/TypeScript, backend API development with Node.js, full-stack applications, mobile-responsive design, IoT solutions, database design and optimization, and system integrations. I also provide UI/UX design consultation and technical project planning.' 
            },
            { 
              q: 'Are you available for freelance projects?', 
              a: 'Yes! I\'m actively taking on freelance projects and consulting opportunities. I typically work on projects ranging from small business websites to complex web applications. Feel free to reach out with your project details, timeline, and budget, and I\'ll provide a detailed proposal.' 
            },
            { 
              q: 'What is your preferred technology stack?', 
              a: 'My core stack includes React with TypeScript for frontend development, Node.js with Express for backend services, MySQL and MongoDB for databases, and Tailwind CSS for styling. I also work with modern tools like Vite, Next.js, and various deployment platforms. For IoT projects, I use Arduino, Raspberry Pi, and Python.' 
            },
            { 
              q: 'How long does a typical project take?', 
              a: 'Project timelines vary based on complexity. A simple business website typically takes 1-2 weeks, while a full-stack web application can take 4-12 weeks. IoT projects and complex integrations may require 2-6 months. I provide detailed timelines during the initial consultation and keep you updated throughout the development process.' 
            },
            { 
              q: 'Do you provide ongoing support and maintenance?', 
              a: 'Absolutely! I offer post-launch support packages including bug fixes, security updates, performance optimization, and feature additions. I also provide training documentation and can assist with hosting setup and deployment. Maintenance packages are customizable based on your needs.' 
            },
            { 
              q: 'What makes your development approach unique?', 
              a: 'I focus on clean, maintainable code with comprehensive documentation. My approach includes regular client communication, iterative development with feedback loops, modern development practices, and thorough testing. I also prioritize performance, accessibility, and SEO optimization to ensure your project succeeds long-term.' 
            }
          ].map((f, i) => (
            <details key={f.q} className={`group rounded-2xl border p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
              theme === 'dark' 
                ? 'border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50' 
                : 'border-gray-200/60 bg-white/80 hover:bg-white/90'
            }`} style={{ animationDelay: `${i * 100}ms` }}>
              <summary className={`cursor-pointer list-none text-lg font-semibold flex items-center justify-between ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <span>{f.q}</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 group-open:rotate-180 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className={`mt-4 text-base leading-relaxed ${
                theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'
              }`}>
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' ? 'from-white via-zinc-200 to-white' : 'from-gray-900 via-gray-700 to-gray-900'
            }`}>Get In Touch</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
          }`}>
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Let's Connect</h3>
              <p className={`text-lg leading-relaxed mb-8 ${
                theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'
              }`}>
                I'm always excited to work on new projects and collaborate with like-minded individuals. 
                Whether you have a question, want to discuss a project, or just want to say hello, 
                I'd love to hear from you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <div className={`group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 hover:shadow-zinc-900/20'
                  : 'border-gray-200/60 bg-white/80 hover:bg-white/90 hover:shadow-gray-200/20'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-indigo-500/20' : 'bg-indigo-100'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-6 w-6 ${
                        theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                      }`}>
                        <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Zm2.443.75a.75.75 0 0 0-.443.137l7.25 5.438 7.25-5.438a.75.75 0 0 0-.443-.137H4.693Zm15.057 1.878-6.91 5.184a.75.75 0 0 1-.88 0L5.05 9.378V16.5a.75.75 0 0 0 .75.75h12.4a.75.75 0 0 0 .75-.75V9.378Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={`font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Email</h4>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                      }`}>Send me a message</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:antoineochea0321@gmail.com"
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                      theme === 'dark' 
                        ? 'bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 hover:text-indigo-200' 
                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:text-indigo-800'
                    }`}
                  >
                    Send Email
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className={`group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 hover:shadow-zinc-900/20'
                  : 'border-gray-200/60 bg-white/80 hover:bg-white/90 hover:shadow-gray-200/20'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-6 w-6 ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
                    </div>
                    <div>
                      <h4 className={`font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>LinkedIn</h4>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                      }`}>Connect professionally</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/antoinephil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                      theme === 'dark' 
                        ? 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 hover:text-blue-200' 
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-800'
                    }`}
                  >
                    Visit LinkedIn
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className={`group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 hover:shadow-zinc-900/20'
                  : 'border-gray-200/60 bg-white/80 hover:bg-white/90 hover:shadow-gray-200/20'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-500/20' : 'bg-gray-100'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-6 w-6 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className={`font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>GitHub</h4>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                      }`}>View my projects</p>
                    </div>
                  </div>
                  <a 
                    href="https://github.com/Anoncasphil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                      theme === 'dark' 
                        ? 'bg-gray-500/20 text-gray-300 hover:bg-gray-500/30 hover:text-gray-200' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-800'
                    }`}
                  >
                    Visit GitHub
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className={`group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 hover:shadow-zinc-900/20'
                  : 'border-gray-200/60 bg-white/80 hover:bg-white/90 hover:shadow-gray-200/20'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-6 w-6 ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className={`font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Facebook</h4>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                      }`}>Connect on social media</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.facebook.com/antoine.philipp.ochea" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                      theme === 'dark' 
                        ? 'bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 hover:text-blue-200' 
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-800'
                    }`}
                  >
                    Visit Facebook
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className={`rounded-xl border p-6 ${
                theme === 'dark' 
                  ? 'border-emerald-500/30 bg-emerald-500/10'
                  : 'border-emerald-200 bg-emerald-50/50'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    theme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-500'
                  }`}></div>
                  <span className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'
                  }`}>
                    Usually responds within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-2xl border p-8 ${
            theme === 'dark' 
              ? 'border-white/10 bg-zinc-900/30' 
              : 'border-gray-200/60 bg-white/80'
          }`}>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark' 
                        ? 'border-white/20 bg-zinc-800/50 text-white placeholder-zinc-400 focus:border-indigo-400 focus:ring-indigo-400/20' 
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20'
                    } focus:outline-none focus:ring-2`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark' 
                        ? 'border-white/20 bg-zinc-800/50 text-white placeholder-zinc-400 focus:border-indigo-400 focus:ring-indigo-400/20' 
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20'
                    } focus:outline-none focus:ring-2`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    theme === 'dark' 
                      ? 'border-white/20 bg-zinc-800/50 text-white placeholder-zinc-400 focus:border-indigo-400 focus:ring-indigo-400/20' 
                      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20'
                  } focus:outline-none focus:ring-2`}
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                    theme === 'dark' 
                      ? 'border-white/20 bg-zinc-800/50 text-white placeholder-zinc-400 focus:border-indigo-400 focus:ring-indigo-400/20' 
                      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20'
                  } focus:outline-none focus:ring-2`}
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`w-full rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white hover:from-indigo-600 hover:to-fuchsia-600' 
                    : 'bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white hover:from-indigo-700 hover:to-fuchsia-700'
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${
        theme === 'dark' ? 'border-zinc-800 bg-zinc-900/50' : 'border-gray-200 bg-gray-50/50'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={theme === 'dark' ? logoUrl : lightLogoUrl} 
                  alt="Philtech Logo" 
                  className="h-8 w-auto"
                />
                <span className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Philtech</span>
              </div>
              <p className={`text-sm leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
              }`}>
                Creating innovative digital solutions through technology. 
                Let's build something amazing together.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/antoinephil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                    theme === 'dark' 
                      ? 'bg-zinc-800 text-zinc-400 hover:bg-blue-600 hover:text-white' 
                      : 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white'
                  }`}
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/Anoncasphil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                    theme === 'dark' 
                      ? 'bg-zinc-800 text-zinc-400 hover:bg-gray-800 hover:text-white' 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-800 hover:text-white'
                  }`}
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/antoine.philipp.ochea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                    theme === 'dark' 
                      ? 'bg-zinc-800 text-zinc-400 hover:bg-blue-600 hover:text-white' 
                      : 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white'
                  }`}
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:antoineochea0321@gmail.com"
                  className={`p-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                    theme === 'dark' 
                      ? 'bg-zinc-800 text-zinc-400 hover:bg-indigo-600 hover:text-white' 
                      : 'bg-gray-200 text-gray-600 hover:bg-indigo-600 hover:text-white'
                  }`}
                  aria-label="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Zm2.443.75a.75.75 0 0 0-.443.137l7.25 5.438 7.25-5.438a.75.75 0 0 0-.443-.137H4.693Zm15.057 1.878-6.91 5.184a.75.75 0 0 1-.88 0L5.05 9.378V16.5a.75.75 0 0 0 .75.75h12.4a.75.75 0 0 0 .75-.75V9.378Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Education', href: '#education' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className={`text-sm transition-colors hover:underline ${
                        theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Services</h3>
              <ul className="space-y-3">
                {[
                  'Web Development',
                  'Mobile Apps',
                  'UI/UX Design',
                  'IoT Solutions',
                  'Database Design',
                  'System Integration'
                ].map((service) => (
                  <li key={service}>
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                    }`}>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 mt-0.5 ${
                    theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                  }`}>
                    <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Zm2.443.75a.75.75 0 0 0-.443.137l7.25 5.438 7.25-5.438a.75.75 0 0 0-.443-.137H4.693Zm15.057 1.878-6.91 5.184a.75.75 0 0 1-.88 0L5.05 9.378V16.5a.75.75 0 0 0 .75.75h12.4a.75.75 0 0 0 .75-.75V9.378Z" />
                  </svg>
                  <a 
                    href="mailto:antoineochea0321@gmail.com"
                    className={`text-sm transition-colors hover:underline ${
                      theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    antoineochea0321@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 mt-0.5 ${
                    theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                  }`}>
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.25 7.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                  }`}>
                    Available for projects
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 mt-0.5 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.25 7.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                  }`}>
                    Based in Philippines
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`pt-8 border-t ${
            theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'
          }`}>
            <div className="flex flex-col items-center gap-4">
              <p className={`text-sm text-center ${
                theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'
              }`}>
          © {new Date().getFullYear()} Antoine Philipp Ochea. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'
                }`}>
                  Built with  using React & Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default App

