type MarkdownRendererProps = {
  content: string
}

function renderInlineText(text: string) {
  const parts = text.split(/(`[^`]+`)/g).filter(Boolean)
  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={index} className="rounded-sm bg-secondary px-1 py-0.5 font-mono text-xs text-primary">
          {part.slice(1, -1)}
        </code>
      )
    }
    return <span key={index}>{part}</span>
  })
}

function renderBlock(block: string, index: number) {
  const trimmed = block.trim()

  if (trimmed.startsWith("```") && trimmed.endsWith("```")) {
    const lines = trimmed.split("\n")
    const language = lines[0].replace(/```/, "").trim()
    const code = lines.slice(1, -1).join("\n")
    return (
      <pre key={index} className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm text-muted-foreground">
        <code className="whitespace-pre-wrap">{code}</code>
      </pre>
    )
  }

  const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/)
  if (headingMatch) {
    const level = headingMatch[1].length
    const text = headingMatch[2]
    const Heading = `h${level}` as keyof JSX.IntrinsicElements
    return (
      <Heading key={index} className="mt-8 scroll-mt-16 font-bold text-foreground">
        {renderInlineText(text)}
      </Heading>
    )
  }

  if (/^(?:[-*+] |\d+\. )/m.test(trimmed)) {
    const lines = trimmed.split("\n")
    const ordered = /^\d+\. /.test(lines[0])
    const Tag = ordered ? "ol" : "ul"
    return (
      <Tag key={index} className="ml-4 list-inside space-y-2 text-muted-foreground text-sm">
        {lines.map((line, lineIndex) => {
          const itemText = line.replace(/^\s*(?:[-*+] |\d+\. )/, "")
          return (
            <li key={lineIndex} className="leading-relaxed">
              {renderInlineText(itemText)}
            </li>
          )
        })}
      </Tag>
    )
  }

  return (
    <p key={index} className="text-muted-foreground mb-4 leading-relaxed text-sm">
      {renderInlineText(trimmed)}
    </p>
  )
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const blocks = content.split(/\n{2,}/g)
  return <div className="space-y-4">{blocks.map(renderBlock)}</div>
}
