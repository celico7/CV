interface SkillCategoryProps {
  title: string
  children: React.ReactNode
}

export function SkillCategory({ title, children }: SkillCategoryProps) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-wide text-resume-text mb-2 flex items-center gap-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-resume-primary/50"></span>
        {title}
      </p>
      {children}
    </div>
  )
}
