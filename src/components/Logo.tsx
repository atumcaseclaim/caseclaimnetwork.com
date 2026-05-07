interface LogoProps {
  size?: number
  className?: string
}

export function LogoIcon({ size = 36 }: LogoProps) {
  return (
    <svg width={size} height={Math.round(size * 1.12)} viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shield-grad" x1="3" y1="1" x2="31" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d4af37" />
          <stop offset="1" stopColor="#b8860b" />
        </linearGradient>
      </defs>
      <path
        d="M17 1L3 6.5V18C3 26.5 9.5 33.8 17 36.5C24.5 33.8 31 26.5 31 18V6.5L17 1Z"
        fill="url(#shield-grad)"
      />
      <path
        d="M17 1L3 6.5V18C3 26.5 9.5 33.8 17 36.5C24.5 33.8 31 26.5 31 18V6.5L17 1Z"
        stroke="#b8860b"
        strokeWidth="0.5"
        fill="none"
      />
      {/* Vertical bar of cross */}
      <rect x="14.5" y="10" width="5" height="16" rx="1.5" fill="#06111f" />
      {/* Horizontal bar of cross */}
      <rect x="9.5" y="15" width="15" height="5" rx="1.5" fill="#06111f" />
    </svg>
  )
}

interface LogoFullProps {
  iconSize?: number
  onClick?: () => void
}

export function LogoFull({ iconSize = 34, onClick }: LogoFullProps) {
  return (
    <div
      className="flex items-center gap-2.5 cursor-pointer select-none"
      onClick={onClick}
    >
      <LogoIcon size={iconSize} />
      <div>
        <div
          className="text-white font-bold leading-tight"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: '15px' }}
        >
          Case<span style={{ color: '#d4af37' }}>Claim</span> Network
        </div>
        <div className="text-white/35 font-light" style={{ fontSize: '9.5px', fontFamily: "'DM Sans', sans-serif" }}>
          Justice Starts Here
        </div>
      </div>
    </div>
  )
}
