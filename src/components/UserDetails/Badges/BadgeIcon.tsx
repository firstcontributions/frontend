import { SiC } from '@react-icons/all-files/si/SiC'
import { SiGo } from '@react-icons/all-files/si/SiGo'
import { SiPython } from '@react-icons/all-files/si/SiPython'
import { SiCplusplus } from '@react-icons/all-files/si/SiCplusplus'
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript'
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript'
import { SiJava } from '@react-icons/all-files/si/SiJava'
import { SiRuby } from '@react-icons/all-files/si/SiRuby'
import { SiRust } from '@react-icons/all-files/si/SiRust'
import { SiGnubash } from '@react-icons/all-files/si/SiGnubash'
import { SiPhp } from '@react-icons/all-files/si/SiPhp'
import React from 'react'

const iconMap = {
  Go: <SiGo />,
  Python: <SiPython />,
  C: <SiC />,
  'C++': <SiCplusplus />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  Java: <SiJava />,
  Ruby: <SiRuby />,
  Rust: <SiRust />,
  'Unix Sell': <SiGnubash />,
  PHP: <SiPhp />,
}

export type LanguageName = keyof typeof iconMap

type BadgeIconProps = {
  displayName: LanguageName
}

export default function BadgeIcon({ displayName }: BadgeIconProps) {
  return (
    <div className="text-3xl z-10 badge-icon">
      {iconMap[displayName]}
      <style>
        {`
                    .badge-icon {
                        color: #00000077;
                    }
                `}
      </style>
    </div>
  )
}
