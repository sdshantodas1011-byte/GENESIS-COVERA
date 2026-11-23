import React from 'react';

interface SustCrestSvgProps {
  size?: number;
  variant?: 'classic' | 'ornamental';
}

export const SustCrestSvg: React.FC<SustCrestSvgProps> = ({
  size = 96,
  variant = 'classic',
}) => {
  const outerStroke = variant === 'ornamental' ? '#9A7B3E' : '#111827';
  const bandFill = variant === 'ornamental' ? '#173A4A' : '#18181B';
  const bandStroke = variant === 'ornamental' ? '#C5A059' : '#EAB308';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{display: 'block'}}
      aria-label="Shahjalal University of Science and Technology Crest"
    >
      {/* Outer Triangular-Shield Crest Silhouette */}
      <path
        d="M90 12 C122 28 148 64 152 108 C153 122 144 134 128 140 C106 147 74 147 52 140 C36 134 27 122 28 108 C32 64 58 28 90 12 Z"
        fill="#FFFFFF"
        stroke={outerStroke}
        strokeWidth="4"
      />

      {/* Inner Yellow/Gold Top Ribbon Arch */}
      <path
        d="M44 92 C48 58 67 33 90 22 C113 33 132 58 136 92"
        stroke={bandStroke}
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M44 92 C48 58 67 33 90 22 C113 33 132 58 136 92"
        stroke={outerStroke}
        strokeWidth="1.5"
        fill="none"
      />

      {/* Lower Dark Curved Ribbon */}
      <path
        d="M35 104 C37 126 56 138 90 138 C124 138 143 126 145 104 L132 100 C129 116 114 124 90 124 C66 124 51 116 48 100 Z"
        fill={bandFill}
      />

      {/* Curved Text Paths inside Crest */}
      <defs>
        <path id="sustCrestTopText" d="M 44,86 C 52,52 70,32 90,26 C 110,32 128,52 136,86" />
        <path id="sustCrestBottomText" d="M 41,108 C 52,132 72,135 90,135 C 108,135 128,132 139,108" />
      </defs>

      <text
        fill="#111827"
        fontSize="8.2"
        fontWeight="700"
        fontFamily="Noto Sans Bengali, sans-serif"
      >
        <textPath href="#sustCrestTopText" startOffset="50%" textAnchor="middle">
          শাহজালাল বিশ্ববিদ্যালয়
        </textPath>
      </text>

      <text
        fill="#FFFFFF"
        fontSize="7.4"
        fontWeight="600"
        fontFamily="Noto Sans Bengali, sans-serif"
      >
        <textPath href="#sustCrestBottomText" startOffset="50%" textAnchor="middle">
          বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
        </textPath>
      </text>

      {/* Inner White Medallion */}
      <circle cx="90" cy="84" r="32" fill="#FFFFFF" stroke={outerStroke} strokeWidth="2.2" />

      {/* Atomic Electron Orbits */}
      <ellipse
        cx="90"
        cy="82"
        rx="24"
        ry="9"
        transform="rotate(-30 90 82)"
        stroke="#1E293B"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="90"
        cy="82"
        rx="24"
        ry="9"
        transform="rotate(30 90 82)"
        stroke="#1E293B"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="90"
        cy="82"
        rx="24"
        ry="9"
        transform="rotate(90 90 82)"
        stroke="#1E293B"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Central Triangle / Nucleus */}
      <polygon
        points="90,69 101,88 79,88"
        fill="none"
        stroke="#B91C1C"
        strokeWidth="1.8"
      />
      <circle cx="90" cy="82" r="3.4" fill="#B91C1C" />

      {/* Open Book at Base of Medallion */}
      <path
        d="M72 95 C79 92 85 93 90 96 C95 93 101 92 108 95 V107 C101 104 95 105 90 108 C85 105 79 104 72 107 Z"
        fill="#FFFFFF"
        stroke="#1E293B"
        strokeWidth="1.6"
      />
      <line x1="90" y1="96" x2="90" y2="108" stroke="#1E293B" strokeWidth="1.4" />

      {/* Three Red Base Blocks (Classic SUST Emblem Base) */}
      <g>
        <rect x="65" y="150" width="14" height="12" rx="1.5" fill="#B91C1C" />
        <rect x="83" y="150" width="14" height="12" rx="1.5" fill="#B91C1C" />
        <rect x="101" y="150" width="14" height="12" rx="1.5" fill="#B91C1C" />
        <text x="72" y="159" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="700" fontFamily="Noto Sans Bengali, sans-serif">
          শা
        </text>
        <text x="90" y="159" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="700" fontFamily="Noto Sans Bengali, sans-serif">
          বি
        </text>
        <text x="108" y="159" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="700" fontFamily="Noto Sans Bengali, sans-serif">
          প্র
        </text>
      </g>
    </svg>
  );
};
