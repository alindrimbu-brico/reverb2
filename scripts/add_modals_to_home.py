# 1. Update app/page.tsx
with open(r'C:\Users\alind\reverb\reverb-site\app\page.tsx', 'r', encoding='utf-8') as f:
    c_ro = f.read()

# Add import
if 'ProjectPreviewModal' not in c_ro:
    c_ro = c_ro.replace(
        'import TechAuthorityGrid from "@/components/TechAuthorityGrid";',
        'import TechAuthorityGrid from "@/components/TechAuthorityGrid";\nimport ProjectPreviewModal, { PreviewProject } from "@/components/ProjectPreviewModal";'
    )

# Add state
if 'selectedPreview' not in c_ro:
    c_ro = c_ro.replace(
        'const [activeFilter, setActiveFilter] = useState("TOATE");',
        'const [activeFilter, setActiveFilter] = useState("TOATE");\n  const [selectedPreview, setSelectedPreview] = useState<PreviewProject | null>(null);'
    )

# Replace the card render
old_card_code = '''          {filteredProjects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="group rounded-2xl border border-white/10 bg-neutral-900/20 p-8 flex flex-col justify-between hover:border-white/30 hover:bg-neutral-900/40 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 mb-6">
                  <span>{p.category}</span>
                  <span className="border border-white/10 rounded-full px-2 py-0.5 text-neutral-400 group-hover:text-white transition-colors">
                    {p.status}
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-white mb-2 flex items-center justify-between">
                  <span>{p.name}</span>
                  <span className="text-sm text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all">↗</span>
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-neutral-500">
                <span>{p.tech}</span>
                <span className="text-neutral-400">{p.host}</span>
              </div>
            </a>
          ))}'''

new_card_code = '''          {filteredProjects.map((p) => (
            <div
              key={p.name}
              onMouseEnter={() => sounds.playHover()}
              onClick={() => { setSelectedPreview(p); sounds.playClick(); }}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-neutral-900/20 p-8 flex flex-col justify-between hover:border-white/30 hover:bg-neutral-900/40 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 mb-6">
                  <span>{p.category}</span>
                  <span className="border border-white/10 rounded-full px-2 py-0.5 text-neutral-400 group-hover:text-white transition-colors">
                    {p.status}
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-white mb-2 flex items-center justify-between">
                  <span>{p.name}</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                    <span>PREVIZUALIZARE</span>
                    <span className="text-sm">👁️</span>
                  </span>
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-neutral-500">
                <span>{p.tech}</span>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="Deschide direct în tab nou"
                  className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>{p.host}</span>
                  <span className="text-[9px]">↗</span>
                </a>
              </div>
            </div>
          ))}'''

c_ro = c_ro.replace(old_card_code, new_card_code)

# Add Modal component before closing div
if '<ProjectPreviewModal' not in c_ro:
    c_ro = c_ro.replace(
        '    </div>\n  );\n}',
        '      {/* Live System Inspection Pop-up Modal */}\n      <ProjectPreviewModal project={selectedPreview} onClose={() => setSelectedPreview(null)} lang="ro" />\n    </div>\n  );\n}'
    )

with open(r'C:\Users\alind\reverb\reverb-site\app\page.tsx', 'w', encoding='utf-8') as f:
    f.write(c_ro)

print("Updated app/page.tsx with ProjectPreviewModal")

# 2. Update app/en/page.tsx
with open(r'C:\Users\alind\reverb\reverb-site\app\en\page.tsx', 'r', encoding='utf-8') as f:
    c_en = f.read()

if 'ProjectPreviewModal' not in c_en:
    c_en = c_en.replace(
        'import TechAuthorityGrid from "@/components/TechAuthorityGrid";',
        'import TechAuthorityGrid from "@/components/TechAuthorityGrid";\nimport ProjectPreviewModal, { PreviewProject } from "@/components/ProjectPreviewModal";'
    )

if 'selectedPreview' not in c_en:
    c_en = c_en.replace(
        'const [activeFilter, setActiveFilter] = useState("ALL");',
        'const [activeFilter, setActiveFilter] = useState("ALL");\n  const [selectedPreview, setSelectedPreview] = useState<PreviewProject | null>(null);'
    )

old_en_card = '''          {filteredProjects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="group rounded-2xl border border-white/10 bg-neutral-900/20 p-8 flex flex-col justify-between hover:border-white/30 hover:bg-neutral-900/40 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 mb-6">
                  <span>{p.category}</span>
                  <span className="border border-white/10 rounded-full px-2 py-0.5 text-neutral-400 group-hover:text-white transition-colors">
                    {p.status}
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-white mb-2 flex items-center justify-between">
                  <span>{p.name}</span>
                  <span className="text-sm text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all">↗</span>
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-neutral-500">
                <span>{p.tech}</span>
                <span className="text-neutral-400">{p.host}</span>
              </div>
            </a>
          ))}'''

new_en_card = '''          {filteredProjects.map((p) => (
            <div
              key={p.name}
              onMouseEnter={() => sounds.playHover()}
              onClick={() => { setSelectedPreview(p); sounds.playClick(); }}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-neutral-900/20 p-8 flex flex-col justify-between hover:border-white/30 hover:bg-neutral-900/40 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 mb-6">
                  <span>{p.category}</span>
                  <span className="border border-white/10 rounded-full px-2 py-0.5 text-neutral-400 group-hover:text-white transition-colors">
                    {p.status}
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-white mb-2 flex items-center justify-between">
                  <span>{p.name}</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                    <span>LIVE PREVIEW</span>
                    <span className="text-sm">👁️</span>
                  </span>
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-neutral-500">
                <span>{p.tech}</span>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="Open directly in new tab"
                  className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>{p.host}</span>
                  <span className="text-[9px]">↗</span>
                </a>
              </div>
            </div>
          ))}'''

c_en = c_en.replace(old_en_card, new_en_card)

if '<ProjectPreviewModal' not in c_en:
    c_en = c_en.replace(
        '    </div>\n  );\n}',
        '      {/* Live System Inspection Pop-up Modal */}\n      <ProjectPreviewModal project={selectedPreview} onClose={() => setSelectedPreview(null)} lang="en" />\n    </div>\n  );\n}'
    )

with open(r'C:\Users\alind\reverb\reverb-site\app\en\page.tsx', 'w', encoding='utf-8') as f:
    f.write(c_en)

print("Updated app/en/page.tsx with ProjectPreviewModal")
