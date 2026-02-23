import { assetUrl } from '@/lib/utils'

interface EducationItemProps {
  school: string
  degree: string
  specialty?: string
  period?: string
  logo?: string
  highlights?: string[]
}

export function EducationItem({ school, degree, specialty, period, logo, highlights }: EducationItemProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-resume-primary/5 border border-resume-primary/10 hover:border-resume-primary/25 transition-all duration-200">
      {logo ? (
        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
          <img src={assetUrl(logo)} alt={`${school} logo`} className="object-contain w-full h-full" loading="lazy" />
        </div>
      ) : (
        <div className="w-3 h-3 rounded-full bg-resume-primary/30 flex-shrink-0 mt-1.5"></div>
      )}
      <div className="flex-1">
        <p className="text-base font-semibold text-resume-text">{degree}</p>
        <p className="text-sm text-resume-text-secondary mt-0.5">{school}</p>
        {specialty && (
          <p className="text-xs text-resume-primary mt-1 leading-relaxed font-medium">{specialty}</p>
        )}
        {period && (
          <p className="text-xs text-resume-text-secondary mt-1 flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-resume-primary/40"></span>
            {period}
          </p>
        )}
        {highlights && highlights.length > 0 && (
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-0.5">
            {highlights.map((item, i) => (
              <li key={i} className="text-xs text-resume-text-secondary flex items-start gap-1.5">
                <span className="inline-block w-1 h-1 rounded-full bg-resume-primary/30 mt-1.5 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
