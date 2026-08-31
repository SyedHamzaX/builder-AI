import React, { useState, useEffect } from 'react'

const LoginLeft = () => {
  const [isUnfolded, setIsUnfolded] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => setIsUnfolded(p => !p), 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hidden lg:flex lg:w-2/5 bg-[url('/bg-img.png')] bg-cover bg-center bg-no-repeat flex-col justify-between p-12 shrink-0 select-none">
      <div className="h-14 flex items-center">
        <style>{`
          @keyframes textFlow { 0%,100%{transform:translateY(0) rotate(0)} 33%{transform:translateY(-4px) rotate(-1.5deg)} 66%{transform:translateY(2px) rotate(1.5deg)} }
          @keyframes emblemBreathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06) rotate(3deg)} }
          .flow-letter { display:inline-block; animation:textFlow 2.8s ease-in-out infinite; }
        `}</style>

        <div className="relative flex items-center min-h-[48px]">
          {/* Folded State: Crystal Logo */}
          <div 
            className="flex items-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-left"
            style={{
              opacity: isUnfolded ? 0 : 1,
              transform: isUnfolded ? 'scale(0.3) rotate(-90deg) translateX(-20px)' : 'scale(1) rotate(0deg)',
              pointerEvents: isUnfolded ? 'none' : 'auto',
              position: isUnfolded ? 'absolute' : 'relative',
            }}
          >
            <div className="size-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-2 flex items-center justify-center shadow-lg shadow-black/20" style={{ animation: 'emblemBreathe 3s ease-in-out infinite' }}>
              <svg viewBox="0 0 36 36" className="size-full" fill="none">
                <path d="M18 3L32 11V25L18 33L4 25V11L18 3Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M18 3V18L32 25M18 18L4 25M18 18V33" stroke="white" strokeWidth="1.4" strokeOpacity="0.8" />
                <circle cx="18" cy="18" r="2.5" fill="white" className="animate-pulse" />
              </svg>
            </div>
          </div>

          {/* Unfolded State: Wobbly Flowing Text */}
          <div 
            className="flex text-3xl sm:text-4xl font-semibold tracking-tight text-white drop-shadow-md transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-left"
            style={{
              opacity: isUnfolded ? 1 : 0,
              transform: isUnfolded ? 'scale(1) translateY(0)' : 'scale(0.6) translateY(10px)',
              pointerEvents: isUnfolded ? 'auto' : 'none',
              position: isUnfolded ? 'relative' : 'absolute',
            }}
          >
            {[...'Goated\u00A0AI'].map((char, i) => (
              <span key={i} className="flow-letter" style={{ animationDelay: `${i * 0.14}s` }}>
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl text-white font-medium leading-snug mb-3 tracking-tight">Build and be lazy</h2>
        <p className="text-zinc-300">Give the prompt and get results while you focus on other things. Our AI will do the work for you.</p>
        <p className="text-zinc-300 text-sm mt-12">Copyright {new Date().getFullYear()} GoatedAI</p>
      </div>
    </div>
  )
}

export default LoginLeft



