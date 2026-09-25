import type { ReactNode } from 'react'

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="sc-section">
      <h3 className="sc-section-title">{title}</h3>
      <div className="sc-demo">{children}</div>
    </section>
  )
}
