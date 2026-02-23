import { useId } from 'react'
import { cn } from '@/lib/utils'

interface SidebarSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function SidebarSection({ title, children, className }: SidebarSectionProps) {
  const titleId = useId()

  return (
    <section className={cn('mb-6', className)} aria-labelledby={titleId}>
      <h3
        id={titleId}
        className="text-xs font-bold tracking-widest text-resume-text mb-3 pb-1.5 border-b-2 border-resume-primary/25 flex items-center gap-2"
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-resume-primary"></span>
        {title}
      </h3>
      {children}
    </section>
  )
}
