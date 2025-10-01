import { useState, useEffect, useRef } from 'react';
import { BrandContextMenu } from "@/components/brand-context-menu";
import { ChanhDaiMark } from "@/components/chanhdai-mark";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [logs, setLogs] = useState([]);
  const [currentLog, setCurrentLog] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const coverRef = useRef(null);

  const logEntries = [
    { type: 'info', text: 'SELECT * FROM developers WHERE status = "available"' },
    { type: 'success', text: '✓ Query executed successfully' },
    { type: 'info', text: '→ 1 row returned in 0.043s' },
    { type: 'data', text: '{ name: "Developer", skills: ["React.js", "Next.js", "TypeScript"] }' }
  ];

  useEffect(() => {
    let logIndex = 0;
    let charIndex = 0;
    
    const typeLog = () => {
      if (logIndex < logEntries.length) {
        const entry = logEntries[logIndex];
        if (charIndex <= entry.text.length) {
          setCurrentLog(entry.text.substring(0, charIndex));
          charIndex++;
          setTimeout(typeLog, 30);
        } else {
          setLogs(prev => [...prev, { ...entry, text: entry.text }]);
          setCurrentLog('');
          logIndex++;
          charIndex = 0;
          if (logIndex < logEntries.length) {
            setTimeout(typeLog, 400);
          }
        }
      }
    };

    const timer = setTimeout(typeLog, 800);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearTimeout(timer);
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!coverRef.current) return;
      const rect = coverRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const cover = coverRef.current;
    if (cover) {
      cover.addEventListener('mousemove', handleMouseMove);
      return () => cover.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const rotateX = isHovered ? mousePos.y * -6 : 0;
  const rotateY = isHovered ? mousePos.x * 6 : 0;

  return (
    <BrandContextMenu>
      <div 
        ref={coverRef}
        className={cn(
          "aspect-2/1 border-x border-edge select-none sm:aspect-3/1 overflow-hidden",
          "relative group cursor-pointer"
        )}
        style={{ perspective: '1500px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Black background with subtle noise */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
        />

        {/* Main container */}
        <div
          className="absolute inset-0 transition-all duration-500 ease-out"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Query terminal window */}
          <div className="absolute inset-4 sm:inset-8 flex flex-col"
            style={{
              transform: 'translateZ(20px)',
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              boxShadow: '0 0 40px rgba(255, 255, 255, 0.05), inset 0 0 40px rgba(255, 255, 255, 0.02)'
            }}
          >
            {/* Window header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <span className="text-xs font-mono text-white/60">query-console.sql</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                <span>PostgreSQL 15.2</span>
              </div>
            </div>

            {/* Query content */}
            <div className="flex-1 p-4 font-mono text-sm overflow-hidden relative">
              {/* Line numbers */}
              <div className="absolute left-0 top-4 w-12 text-right pr-3 space-y-1 text-white/20 text-xs select-none">
                {logs.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
                {currentLog && <div>{logs.length + 1}</div>}
              </div>

              {/* Logs */}
              <div className="pl-12 space-y-1">
                {logs.map((log, i) => (
                  <div key={i} className="font-mono text-white/80">
                    {log.text}
                  </div>
                ))}
                {currentLog && (
                  <div className="text-white/80">
                    {currentLog}
                    {showCursor && <span className="text-white ml-0.5">▊</span>}
                  </div>
                )}
              </div>

              {/* Center logo overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  style={{
                    transform: `translateZ(50px) scale(${1 + (isHovered ? 0.08 : 0)})`,
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <div className="relative">
                    {/* Glow rings */}
                    {/* <div className="absolute -inset-12 rounded-full border border-white/5 group-hover:border-white/15 transition-all duration-1000" />
                    <div className="absolute -inset-8 rounded-full border border-white/10 group-hover:border-white/20 transition-all duration-700" />
                     */}
                    {/* Logo
                    <div className="relative">
                      <div className="absolute inset-0 blur-2xl bg-white/20 group-hover:bg-white/30 transition-all duration-500" />
                      <ChanhDaiMark 
                        id="js-cover-mark" 
                        className="relative h-20 sm:h-24 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.4))'
                        }}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 text-xs font-mono">
              <div className="flex items-center gap-4">
                <span className="text-white/70">● Connected</span>
                <span className="text-white/40">UTF-8</span>
              </div>
              <div className="text-white/40">
                Ln {logs.length + (currentLog ? 1 : 0)}, Col {currentLog.length}
              </div>
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white/20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/10 group-hover:border-white/30 transition-all duration-500" 
            style={{ transform: 'translateZ(30px)' }} />
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/10 group-hover:border-white/30 transition-all duration-500"
            style={{ transform: 'translateZ(30px)' }} />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/10 group-hover:border-white/30 transition-all duration-500"
            style={{ transform: 'translateZ(30px)' }} />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/10 group-hover:border-white/30 transition-all duration-500"
            style={{ transform: 'translateZ(30px)' }} />
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { 
              transform: translate(0, 0); 
              opacity: 0.2;
            }
            50% { 
              transform: translate(20px, -20px);
              opacity: 0.4;
            }
          }
        `}</style>
      </div>
    </BrandContextMenu>
  );
}