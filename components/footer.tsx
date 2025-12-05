import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Feito com <Heart className="w-4 h-4 text-primary" /> e muito café
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Thalyson Wilker. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
