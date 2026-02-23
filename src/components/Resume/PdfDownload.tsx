import { DownloadIcon } from '@/components/icons'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'

const DEFAULT_LABELS: Record<string, string> = {
  fr: 'Télécharger le PDF',
  en: 'Download PDF',
}

export function PdfDownload() {
  const { language, resolve } = useTranslation()

  // Resolve label: explicit config > labels.actions > auto-detect default > fallback
  let downloadLabel: string

  if (resumeConfig.pdf?.label) {
    downloadLabel = resolve(resumeConfig.pdf.label)
  } else if (resumeConfig.labels.actions.downloadPdf) {
    downloadLabel = resolve(resumeConfig.labels.actions.downloadPdf)
  } else {
    downloadLabel = DEFAULT_LABELS[language] ?? DEFAULT_LABELS.en ?? 'Download PDF'
  }

  const handleExport = () => {
    // Collapse expanded experience details before printing
    // Target only the detail panels (siblings of aria-expanded buttons), NOT the photo container
    const expandedDetails = document.querySelectorAll(
      '.print-card button[aria-expanded] ~ .overflow-hidden'
    )
    expandedDetails.forEach((el) => {
      ;(el as HTMLElement).style.display = 'none'
    })

    // Small delay to let the DOM update, then print
    requestAnimationFrame(() => {
      window.print()

      // Restore after print
      expandedDetails.forEach((el) => {
        ;(el as HTMLElement).style.display = ''
      })
    })
  }

  return (
    <button
      type="button"
      onClick={handleExport}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-resume-primary/10 text-resume-primary hover:bg-resume-primary/20 transition-colors text-sm font-medium"
      title="Exporter en PDF via l'impression du navigateur. Cochez « Graphiques d'arrière-plan » pour conserver les couleurs."
    >
      <DownloadIcon className="w-4 h-4" />
      {downloadLabel}
    </button>
  )
}
