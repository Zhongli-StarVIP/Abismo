/* ============================================================
   ABISMO — app.js  (animales expandidos + movimiento SVG)
   ============================================================ */

// ═══════════════════════════════════════════════════════════════
//  SVG ANIMALES — Zona Epipelágica (0–200 m)
// ═══════════════════════════════════════════════════════════════
const SVG_EPI = `

<!-- ① Delfín mular -->
<div class="creature c-dolphin" aria-label="Delfín mular">
  <svg viewBox="0 0 160 80" width="160">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -6,-5; 0,0" dur="3s" repeatCount="indefinite"/>
      <!-- cuerpo -->
      <path d="M12,42 Q45,14 90,36 Q112,44 135,32 Q145,26 150,36 Q144,44 134,40 Q110,52 88,42 Q45,58 12,42Z" fill="#3a8faa"/>
      <!-- vientre claro -->
      <path d="M30,43 Q60,52 86,44" stroke="#b8dde8" stroke-width="5" fill="none" opacity="0.4"/>
      <!-- aleta dorsal -->
      <path d="M86,36 Q92,20 100,28" stroke="#2a7090" stroke-width="3" fill="none"/>
      <!-- cola -->
      <path d="M134,40 Q152,28 156,36 Q152,46 134,40Z" fill="#2a7090"/>
      <!-- ojo -->
      <ellipse cx="118" cy="37" rx="4" ry="4" fill="#0a2030"/>
      <ellipse cx="119" cy="36" rx="1.5" ry="1.5" fill="white"/>
      <!-- sonrisa -->
      <path d="M110,40 Q114,44 120,41" stroke="#1a5060" stroke-width="1.5" fill="none"/>
      <!-- aleta pectoral -->
      <path d="M90,42 Q96,56 104,50" stroke="#2a7090" stroke-width="2.5" fill="none"/>
    </g>
  </svg>
  <div class="creature-label">Delfín mular<br><small>Tursiops truncatus · 2–4 m</small></div>
</div>

<!-- ② Tortuga boba -->
<div class="creature c-turtle" aria-label="Tortuga boba">
  <svg viewBox="0 0 110 80" width="110">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -8,4; -2,8; 0,0" dur="5s" repeatCount="indefinite"/>
      <!-- caparazón -->
      <ellipse cx="55" cy="44" rx="28" ry="20" fill="#4a8c5c"/>
      <!-- escamas caparazón -->
      <ellipse cx="55" cy="38" rx="12" ry="9" fill="#3a7a4a" opacity="0.5"/>
      <path d="M43,38 Q55,30 67,38" stroke="#2a6a3a" stroke-width="1.5" fill="none" opacity="0.4"/>
      <!-- cabeza -->
      <ellipse cx="55" cy="32" rx="10" ry="8" fill="#5a9a6a"/>
      <!-- aletas -->
      <path d="M30,40 Q14,30 12,42 Q16,52 28,48Z" fill="#4a8c5c">
        <animateTransform attributeName="transform" type="rotate"
          values="0 30 40; -8 30 40; 0 30 40" dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="M80,40 Q96,30 98,42 Q94,52 82,48Z" fill="#4a8c5c">
        <animateTransform attributeName="transform" type="rotate"
          values="0 80 40; 8 80 40; 0 80 40" dur="2s" repeatCount="indefinite"/>
      </path>
      <!-- ojos -->
      <ellipse cx="50" cy="30" rx="2.5" ry="3" fill="#0a2010"/>
      <ellipse cx="60" cy="30" rx="2.5" ry="3" fill="#0a2010"/>
      <ellipse cx="51" cy="29" rx="1" ry="1" fill="white"/>
      <ellipse cx="61" cy="29" rx="1" ry="1" fill="white"/>
    </g>
  </svg>
  <div class="creature-label">Tortuga boba<br><small>Caretta caretta · 0–200 m</small></div>
</div>

<!-- ③ Atún de aleta azul -->
<div class="creature c-tuna" aria-label="Atún de aleta azul">
  <svg viewBox="0 0 150 70" width="150">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -10,-3; -4,4; 0,0" dur="2.2s" repeatCount="indefinite"/>
      <path d="M8,35 Q38,10 82,32 Q104,40 126,28 Q136,22 142,34 Q136,44 124,38 Q102,50 80,40 Q38,58 8,35Z" fill="#2a6080"/>
      <path d="M124,28 Q138,18 144,34 Q138,48 124,38Z" fill="#1a4a60"/>
      <!-- líneas laterales iridiscentes -->
      <path d="M30,34 Q55,30 78,34" stroke="#5ab0d0" stroke-width="1.5" fill="none" opacity="0.6"/>
      <path d="M50,28 Q65,24 80,27" stroke="#5ab0d0" stroke-width="1" fill="none" opacity="0.4"/>
      <!-- aleta dorsal -->
      <path d="M80,32 Q86,18 94,24" stroke="#1a4a60" stroke-width="2.5" fill="none"/>
      <!-- ojo -->
      <ellipse cx="96" cy="33" rx="4.5" ry="4.5" fill="#0a1a20"/>
      <ellipse cx="97" cy="32" rx="1.6" ry="1.6" fill="white"/>
    </g>
  </svg>
  <div class="creature-label">Atún de aleta azul<br><small>Thunnus thynnus · hasta 680 kg</small></div>
</div>

<!-- ④ Gran tiburón blanco -->
<div class="creature c-shark" aria-label="Gran tiburón blanco">
  <svg viewBox="0 0 180 85" width="180">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -14,0; -8,3; 0,0" dur="4s" repeatCount="indefinite"/>
      <path d="M10,42 Q55,14 106,40 Q126,46 148,34 Q158,28 163,40 Q158,50 146,44 Q124,54 104,46 Q55,64 10,42Z" fill="#6a7a8a"/>
      <path d="M146,34 Q160,22 165,40 Q160,54 146,44Z" fill="#5a6a7a"/>
      <!-- vientre -->
      <path d="M35,43 Q72,53 102,47" stroke="white" stroke-width="7" fill="none" opacity="0.22"/>
      <!-- aleta dorsal -->
      <path d="M102,40 Q110,22 120,30" stroke="#5a6a7a" stroke-width="3" fill="none"/>
      <!-- aleta 2ª -->
      <path d="M72,26 Q76,14 80,22" stroke="#6a7a8a" stroke-width="2.5" fill="none"/>
      <!-- ojo -->
      <ellipse cx="118" cy="40" rx="5" ry="5" fill="#0a0a1a"/>
      <ellipse cx="120" cy="39" rx="1.8" ry="1.8" fill="white" opacity="0.5"/>
      <!-- aleta pectoral -->
      <path d="M82,46 Q90,62 104,56" stroke="#5a6a7a" stroke-width="2.5" fill="none"/>
      <!-- branquias -->
      <path d="M104,38 Q106,44 104,48" stroke="#4a5a6a" stroke-width="1.5" fill="none"/>
      <path d="M100,37 Q102,44 100,49" stroke="#4a5a6a" stroke-width="1.5" fill="none"/>
    </g>
  </svg>
  <div class="creature-label">Gran tiburón blanco<br><small>Carcharodon carcharias · hasta 6 m</small></div>
</div>

<!-- ⑤ Marlín -->
<div class="creature c-marlin" aria-label="Marlín">
  <svg viewBox="0 0 170 60" width="170">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -16,-4; -6,2; 0,0" dur="1.8s" repeatCount="indefinite"/>
      <!-- pico -->
      <line x1="148" y1="28" x2="170" y2="27" stroke="#2a5070" stroke-width="3" stroke-linecap="round"/>
      <!-- cuerpo -->
      <path d="M10,30 Q45,10 90,28 Q115,36 138,26 Q148,22 152,30 Q148,36 136,32 Q112,42 88,34 Q45,50 10,30Z" fill="#1a5a80"/>
      <path d="M136,26 Q150,18 154,30 Q150,40 136,32Z" fill="#0e4060"/>
      <!-- aleta dorsal grande característica -->
      <path d="M68,26 Q80,4 100,14 Q110,10 120,18" stroke="#0e4060" stroke-width="3" fill="rgba(14,64,96,0.4)"/>
      <!-- vientre plateado -->
      <path d="M28,31 Q64,40 86,35" stroke="#a0d0e0" stroke-width="4" fill="none" opacity="0.3"/>
      <ellipse cx="126" cy="28" rx="4" ry="4" fill="#050f18"/>
      <ellipse cx="127" cy="27" rx="1.5" ry="1.5" fill="white"/>
    </g>
  </svg>
  <div class="creature-label">Marlín azul<br><small>Makaira nigricans · hasta 4.5 m</small></div>
</div>

<!-- ⑥ Pez luna -->
<div class="creature c-sunfish" aria-label="Pez luna">
  <svg viewBox="0 0 80 110" width="80">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -4,-6; 0,-10; 0,0" dur="4.5s" repeatCount="indefinite"/>
      <!-- cuerpo ovalado -->
      <ellipse cx="40" cy="55" rx="28" ry="38" fill="#6a8a9a"/>
      <!-- textura -->
      <ellipse cx="40" cy="55" rx="20" ry="28" fill="#7a9aaa" opacity="0.4"/>
      <!-- aleta dorsal -->
      <path d="M40,17 Q50,8 52,20 Q50,28 40,26Z" fill="#5a7a8a"/>
      <!-- aleta ventral -->
      <path d="M40,93 Q50,102 52,90 Q50,82 40,84Z" fill="#5a7a8a"/>
      <!-- "cola" truncada (característica del pez luna) -->
      <path d="M64,38 Q74,55 64,72" stroke="#5a7a8a" stroke-width="8" fill="none" stroke-linecap="round"/>
      <!-- ojo grande -->
      <ellipse cx="52" cy="48" rx="7" ry="7" fill="#0a1520"/>
      <ellipse cx="54" cy="46" rx="2.5" ry="2.5" fill="white" opacity="0.7"/>
      <!-- boca pequeña -->
      <circle cx="60" cy="55" r="3" fill="#0a1520"/>
    </g>
  </svg>
  <div class="creature-label">Pez luna<br><small>Mola mola · hasta 3 m · 2 300 kg</small></div>
</div>
`;

// ═══════════════════════════════════════════════════════════════
//  SVG ANIMALES — Zona Mesopelágica (200–1 000 m)
// ═══════════════════════════════════════════════════════════════
const SVG_MESO = `

<!-- ① Pez linterna -->
<div class="creature c-lantern" aria-label="Pez linterna">
  <svg viewBox="0 0 90 52" width="90">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -7,-3; -2,4; 0,0" dur="3.5s" repeatCount="indefinite"/>
      <path d="M6,26 Q24,10 50,24 Q62,30 68,22 Q72,17 74,24 Q71,30 66,28 Q60,34 48,29 Q24,40 6,26Z" fill="#2a3a5a"/>
      <path d="M66,22 Q74,14 76,24 Q74,32 66,28Z" fill="#1a2a4a"/>
      <ellipse cx="34" cy="25" rx="4" ry="4" fill="#0a0e1a"/>
      <ellipse cx="35" cy="24" rx="1.4" ry="1.4" fill="white"/>
      <!-- fotóforos parpadeantes -->
      <circle cx="18" cy="28" r="1.8" fill="#7fe3f0">
        <animate attributeName="opacity" values="1;0.1;1" dur="1.7s" repeatCount="indefinite"/>
        <animate attributeName="r" values="1.8;2.6;1.8" dur="1.7s" repeatCount="indefinite"/>
      </circle>
      <circle cx="26" cy="30" r="1.4" fill="#7fe3f0">
        <animate attributeName="opacity" values="0.9;0.1;0.9" dur="2.1s" begin="0.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="34" cy="30" r="1.8" fill="#7fe3f0">
        <animate attributeName="opacity" values="1;0.1;1" dur="1.5s" begin="0.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="42" cy="29" r="1.2" fill="#7fe3f0">
        <animate attributeName="opacity" values="0.7;0.1;0.7" dur="1.9s" begin="1.1s" repeatCount="indefinite"/>
      </circle>
      <circle cx="50" cy="27" r="1.5" fill="#7fe3f0">
        <animate attributeName="opacity" values="1;0.1;1" dur="2.3s" begin="0.6s" repeatCount="indefinite"/>
      </circle>
    </g>
  </svg>
  <div class="creature-label">Pez linterna<br><small>Myctophidae · 2–15 cm</small></div>
</div>

<!-- ② Pez hacha plateado -->
<div class="creature c-hatchet" aria-label="Pez hacha">
  <svg viewBox="0 0 52 76" width="52">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -3,-8; 0,-12; 0,0" dur="4s" repeatCount="indefinite"/>
      <path d="M26,5 Q40,9 42,28 Q44,44 40,58 Q32,68 26,68 Q20,68 12,58 Q8,44 10,28 Q12,9 26,5Z" fill="#1a2848"/>
      <path d="M26,8 Q37,13 38,28 Q39,42 35,54 Q29,63 26,62 Q23,62 17,54 Q13,42 14,28 Q15,13 26,8Z" fill="#3a4a7a" opacity="0.6"/>
      <!-- fotóforos ventrales -->
      <circle cx="20" cy="36" r="1.8" fill="#7fe3f0">
        <animate attributeName="opacity" values="1;0.1;1" dur="1.6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="22" cy="43" r="1.8" fill="#7fe3f0">
        <animate attributeName="opacity" values="1;0.1;1" dur="1.9s" begin="0.3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="25" cy="49" r="1.8" fill="#7fe3f0">
        <animate attributeName="opacity" values="1;0.1;1" dur="1.7s" begin="0.7s" repeatCount="indefinite"/>
      </circle>
      <circle cx="28" cy="54" r="1.5" fill="#7fe3f0">
        <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2.2s" begin="1s" repeatCount="indefinite"/>
      </circle>
      <ellipse cx="26" cy="17" rx="4" ry="4.5" fill="#0a0e1a"/>
      <ellipse cx="27" cy="16" rx="1.4" ry="1.4" fill="white"/>
      <path d="M18,28 Q26,23 34,28" stroke="#4a6aaa" stroke-width="2" fill="none"/>
    </g>
  </svg>
  <div class="creature-label">Pez hacha<br><small>Argyropelecus · 2–6 cm</small></div>
</div>

<!-- ③ Calamar vampiro -->
<div class="creature c-vampsquid" aria-label="Calamar vampiro">
  <svg viewBox="0 0 80 110" width="80">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -5,-6; 0,-4; 0,0" dur="5s" repeatCount="indefinite"/>
      <!-- manto -->
      <path d="M40,6 Q58,10 60,40 Q62,66 54,78 Q47,86 40,86 Q33,86 26,78 Q18,66 20,40 Q22,10 40,6Z" fill="#2a0a4a"/>
      <!-- aletas -->
      <path d="M22,52 Q8,62 10,72 Q20,68 26,60Z" fill="#3a1060">
        <animateTransform attributeName="transform" type="rotate"
          values="0 22 52; -12 22 52; 0 22 52" dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="M58,52 Q72,62 70,72 Q60,68 54,60Z" fill="#3a1060">
        <animateTransform attributeName="transform" type="rotate"
          values="0 58 52; 12 58 52; 0 58 52" dur="2s" repeatCount="indefinite"/>
      </path>
      <!-- ojos luminosos -->
      <ellipse cx="32" cy="36" rx="8" ry="9" fill="#080210"/>
      <ellipse cx="48" cy="36" rx="8" ry="9" fill="#080210"/>
      <circle cx="33" cy="34" r="3" fill="#7fe3f0" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="49" cy="34" r="3" fill="#7fe3f0" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" begin="0.5s" repeatCount="indefinite"/>
      </circle>
      <!-- bioluminiscencia corporal -->
      <ellipse cx="40" cy="55" rx="14" ry="10" fill="#6010a0" opacity="0.12">
        <animate attributeName="opacity" values="0.12;0.03;0.12" dur="4s" repeatCount="indefinite"/>
      </ellipse>
      <!-- tentáculos -->
      <path d="M30,84 Q24,96 22,108" stroke="#3a1060" stroke-width="3" fill="none" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate"
          values="0 30 84; -5 30 84; 0 30 84" dur="2.5s" repeatCount="indefinite"/>
      </path>
      <path d="M34,86 Q30,100 28,112" stroke="#3a1060" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M40,87 Q40,102 40,114" stroke="#3a1060" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M46,86 Q50,100 52,112" stroke="#3a1060" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M50,84 Q56,96 58,108" stroke="#3a1060" stroke-width="3" fill="none" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate"
          values="0 50 84; 5 50 84; 0 50 84" dur="2.5s" repeatCount="indefinite"/>
      </path>
    </g>
  </svg>
  <div class="creature-label">Calamar vampiro<br><small>Vampyroteuthis infernalis · 30 cm</small></div>
</div>

<!-- ④ Medusa taza -->
<div class="creature c-jellyfish" aria-label="Medusa">
  <svg viewBox="0 0 80 120" width="80">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -4,-5; 0,-3; 0,0" dur="3.8s" repeatCount="indefinite"/>
      <!-- campana que pulsa -->
      <ellipse cx="40" cy="36" rx="30" ry="26" fill="rgba(160,200,255,0.18)" stroke="rgba(160,200,255,0.4)" stroke-width="1.2">
        <animate attributeName="ry" values="26;18;26" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="rx" values="30;34;30" dur="2s" repeatCount="indefinite"/>
      </ellipse>
      <!-- interior brillante -->
      <ellipse cx="40" cy="33" rx="20" ry="16" fill="rgba(127,227,240,0.1)">
        <animate attributeName="opacity" values="0.6;0.15;0.6" dur="2s" repeatCount="indefinite"/>
      </ellipse>
      <!-- tentáculos ondeantes -->
      <path d="M18,58 Q14,74 18,90 Q22,78 18,90" stroke="rgba(160,200,255,0.5)" stroke-width="1.5" fill="none">
        <animate attributeName="d" values="M18,58 Q14,74 18,90; M18,58 Q22,74 16,90; M18,58 Q14,74 18,90" dur="2.5s" repeatCount="indefinite"/>
      </path>
      <path d="M28,62 Q22,78 26,96 Q30,82 26,96" stroke="rgba(160,200,255,0.45)" stroke-width="1.5" fill="none">
        <animate attributeName="d" values="M28,62 Q22,78 26,96; M28,62 Q34,78 28,96; M28,62 Q22,78 26,96" dur="3s" begin="0.5s" repeatCount="indefinite"/>
      </path>
      <path d="M40,64 Q36,82 40,102" stroke="rgba(160,200,255,0.5)" stroke-width="2" fill="none">
        <animate attributeName="d" values="M40,64 Q36,82 40,102; M40,64 Q44,82 40,102; M40,64 Q36,82 40,102" dur="2.2s" begin="0.3s" repeatCount="indefinite"/>
      </path>
      <path d="M52,62 Q58,78 54,96" stroke="rgba(160,200,255,0.45)" stroke-width="1.5" fill="none">
        <animate attributeName="d" values="M52,62 Q58,78 54,96; M52,62 Q46,78 52,96; M52,62 Q58,78 54,96" dur="3.2s" begin="0.7s" repeatCount="indefinite"/>
      </path>
      <path d="M62,58 Q66,74 62,90" stroke="rgba(160,200,255,0.4)" stroke-width="1.5" fill="none">
        <animate attributeName="d" values="M62,58 Q66,74 62,90; M62,58 Q58,74 64,90; M62,58 Q66,74 62,90" dur="2.8s" begin="1s" repeatCount="indefinite"/>
      </path>
    </g>
  </svg>
  <div class="creature-label">Medusa luminosa<br><small>Periphylla periphylla · 200–700 m</small></div>
</div>

<!-- ⑤ Camarón rojo profundo -->
<div class="creature c-shrimp" aria-label="Camarón profundo">
  <svg viewBox="0 0 90 50" width="90">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -6,-4; -2,3; 0,0" dur="2.8s" repeatCount="indefinite"/>
      <!-- cuerpo segmentado -->
      <path d="M16,25 Q30,14 52,24 Q66,30 76,22 Q80,18 82,24 Q79,30 74,28 Q64,35 50,28 Q30,38 16,25Z" fill="#8a2a2a"/>
      <!-- segmentos -->
      <line x1="34" y1="18" x2="33" y2="32" stroke="#6a1a1a" stroke-width="1.5" opacity="0.5"/>
      <line x1="44" y1="19" x2="43" y2="32" stroke="#6a1a1a" stroke-width="1.5" opacity="0.5"/>
      <line x1="54" y1="21" x2="53" y2="31" stroke="#6a1a1a" stroke-width="1.5" opacity="0.5"/>
      <!-- patas -->
      <path d="M30,32 Q26,40 28,46" stroke="#8a2a2a" stroke-width="1.5" fill="none" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate"
          values="0 30 32; -8 30 32; 0 30 32" dur="0.6s" repeatCount="indefinite"/>
      </path>
      <path d="M38,33 Q36,41 38,47" stroke="#8a2a2a" stroke-width="1.5" fill="none" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate"
          values="0 38 33; 8 38 33; 0 38 33" dur="0.7s" begin="0.1s" repeatCount="indefinite"/>
      </path>
      <path d="M46,33 Q46,41 48,47" stroke="#8a2a2a" stroke-width="1.5" fill="none" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate"
          values="0 46 33; -6 46 33; 0 46 33" dur="0.65s" begin="0.2s" repeatCount="indefinite"/>
      </path>
      <!-- antenas -->
      <path d="M74,22 Q82,14 88,8" stroke="#8a2a2a" stroke-width="1.5" fill="none"/>
      <path d="M74,22 Q80,16 84,10" stroke="#8a2a2a" stroke-width="1.5" fill="none"/>
      <!-- ojo -->
      <ellipse cx="72" cy="24" rx="3.5" ry="3.5" fill="#1a0808"/>
    </g>
  </svg>
  <div class="creature-label">Camarón rojo profundo<br><small>Sergestidae · 200–800 m</small></div>
</div>
`;

// ═══════════════════════════════════════════════════════════════
//  SVG ANIMALES — Zona Batipelágica (1 000–4 000 m)
// ═══════════════════════════════════════════════════════════════
const SVG_BATI = `

<!-- ① Pez pescador (anglerfish) -->
<div class="creature c-angler" aria-label="Pez pescador">
  <svg viewBox="0 0 130 100" width="130">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -5,-4; -2,5; 0,0" dur="6s" repeatCount="indefinite"/>
      <!-- cuerpo oscuro con textura -->
      <ellipse cx="58" cy="60" rx="40" ry="28" fill="#14082a"/>
      <path d="M26,54 Q40,46 56,50 Q68,46 80,52" stroke="#20104a" stroke-width="2" fill="none" opacity="0.6"/>
      <!-- boca con dientes -->
      <path d="M22,62 Q30,78 58,80 Q86,78 92,62" fill="#0a0418" stroke="#14082a" stroke-width="2"/>
      <line x1="30" y1="66" x2="31" y2="76" stroke="white" stroke-width="1.5" opacity="0.8"/>
      <line x1="38" y1="69" x2="39" y2="78" stroke="white" stroke-width="1.5" opacity="0.8"/>
      <line x1="46" y1="70" x2="47" y2="79" stroke="white" stroke-width="1.5" opacity="0.8"/>
      <line x1="58" y1="71" x2="59" y2="80" stroke="white" stroke-width="1.5" opacity="0.8"/>
      <line x1="70" y1="70" x2="71" y2="78" stroke="white" stroke-width="1.5" opacity="0.8"/>
      <line x1="80" y1="67" x2="82" y2="75" stroke="white" stroke-width="1.5" opacity="0.8"/>
      <!-- ojo grande -->
      <ellipse cx="76" cy="55" rx="8" ry="8" fill="#050210"/>
      <ellipse cx="78" cy="53" rx="3" ry="3" fill="white" opacity="0.5"/>
      <!-- señuelo / illicium -->
      <path d="M58,32 Q54,14 56,4" stroke="#2a1048" stroke-width="2.5" fill="none"/>
      <!-- bulbo luminoso pulsante -->
      <circle cx="56" cy="4" r="6" fill="#7fe3f0" opacity="0.9">
        <animate attributeName="r" values="6;9;6" dur="1.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <!-- halo del señuelo -->
      <circle cx="56" cy="4" r="12" fill="none" stroke="#7fe3f0" stroke-width="1.5" opacity="0.4">
        <animate attributeName="r" values="12;22;12" dur="1.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.4;0;0.4" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <!-- cola -->
      <path d="M96,60 L118,44 L122,60 L118,76 L96,60Z" fill="#10061e"/>
      <!-- aletas -->
      <path d="M32,60 Q16,68 14,78 Q26,74 34,66Z" fill="#14082a"/>
    </g>
  </svg>
  <div class="creature-label">Pez pescador<br><small>Melanocetus johnsonii · hembra 18 cm</small></div>
</div>

<!-- ② Calamar gigante -->
<div class="creature c-squid" aria-label="Calamar gigante">
  <svg viewBox="0 0 76 160" width="76">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -4,-8; 0,-5; 0,0" dur="5.5s" repeatCount="indefinite"/>
      <!-- manto -->
      <path d="M38,6 Q56,10 58,46 Q60,78 52,92 Q44,102 38,102 Q32,102 24,92 Q16,78 18,46 Q20,10 38,6Z" fill="#5a1e4a"/>
      <!-- aletas -->
      <path d="M18,78 Q4,90 6,100 Q18,95 24,86Z" fill="#4a1840">
        <animateTransform attributeName="transform" type="rotate"
          values="0 18 78; -15 18 78; 0 18 78" dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="M58,78 Q72,90 70,100 Q58,95 52,86Z" fill="#4a1840">
        <animateTransform attributeName="transform" type="rotate"
          values="0 58 78; 15 58 78; 0 58 78" dur="2s" repeatCount="indefinite"/>
      </path>
      <!-- ojos enormes -->
      <ellipse cx="28" cy="40" rx="9" ry="10" fill="#060210"/>
      <ellipse cx="48" cy="40" rx="9" ry="10" fill="#060210"/>
      <ellipse cx="30" cy="38" rx="3.5" ry="3.5" fill="white" opacity="0.45"/>
      <ellipse cx="50" cy="38" rx="3.5" ry="3.5" fill="white" opacity="0.45"/>
      <!-- bioluminiscencia -->
      <ellipse cx="38" cy="66" rx="14" ry="10" fill="#901860" opacity="0.12">
        <animate attributeName="opacity" values="0.12;0.04;0.12" dur="3.5s" repeatCount="indefinite"/>
      </ellipse>
      <!-- tentáculos ondeantes -->
      <path d="M24,100 Q18,116 16,140" stroke="#6a2858" stroke-width="3.5" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M24,100 Q18,116 16,140; M24,100 Q28,116 20,140; M24,100 Q18,116 16,140" dur="2.5s" repeatCount="indefinite"/>
      </path>
      <path d="M30,102 Q26,120 24,146" stroke="#6a2858" stroke-width="3" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M30,102 Q26,120 24,146; M30,102 Q34,120 28,146; M30,102 Q26,120 24,146" dur="3s" begin="0.4s" repeatCount="indefinite"/>
      </path>
      <path d="M38,104 Q38,122 38,150" stroke="#6a2858" stroke-width="4" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M38,104 Q34,122 38,150; M38,104 Q42,122 38,150; M38,104 Q34,122 38,150" dur="2.8s" begin="0.2s" repeatCount="indefinite"/>
      </path>
      <path d="M46,102 Q50,120 52,146" stroke="#6a2858" stroke-width="3" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M46,102 Q50,120 52,146; M46,102 Q42,120 48,146; M46,102 Q50,120 52,146" dur="2.6s" begin="0.6s" repeatCount="indefinite"/>
      </path>
      <path d="M52,100 Q58,116 60,140" stroke="#6a2858" stroke-width="3.5" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M52,100 Q58,116 60,140; M52,100 Q48,116 56,140; M52,100 Q58,116 60,140" dur="3.2s" begin="0.8s" repeatCount="indefinite"/>
      </path>
    </g>
  </svg>
  <div class="creature-label">Calamar gigante<br><small>Architeuthis dux · hasta 13 m</small></div>
</div>

<!-- ③ Pez abisal dientes de sable -->
<div class="creature c-sabretooth" aria-label="Pez dientes de sable">
  <svg viewBox="0 0 120 60" width="120">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -8,-2; -3,4; 0,0" dur="4.2s" repeatCount="indefinite"/>
      <!-- cuerpo oscuro delgado -->
      <path d="M8,30 Q28,14 62,28 Q80,34 100,24 Q108,20 112,28 Q108,36 100,32 Q80,40 60,34 Q28,46 8,30Z" fill="#0e1428"/>
      <path d="M100,24 Q110,16 114,28 Q110,38 100,32Z" fill="#080e1e"/>
      <!-- dientes de sable exagerados -->
      <path d="M18,30 Q20,44 20,52 L22,42" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M26,32 Q28,46 28,54 L30,44" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M34,33 Q36,46 36,54 L38,46" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- ojo -->
      <ellipse cx="82" cy="27" rx="5" ry="5.5" fill="#030609"/>
      <ellipse cx="83" cy="26" rx="2" ry="2" fill="white" opacity="0.5"/>
      <!-- aleta dorsal con espinas -->
      <path d="M54,26 Q62,12 72,20" stroke="#080e1e" stroke-width="2.5" fill="none"/>
      <line x1="56" y1="24" x2="58" y2="14" stroke="#0e1428" stroke-width="1.5"/>
      <line x1="62" y1="22" x2="64" y2="13" stroke="#0e1428" stroke-width="1.5"/>
    </g>
  </svg>
  <div class="creature-label">Pez dientes de sable<br><small>Evermannella balbo · 600–2 000 m</small></div>
</div>

<!-- ④ Medusa gigante profunda -->
<div class="creature c-deepjelly" aria-label="Medusa profunda">
  <svg viewBox="0 0 100 130" width="100">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -5,-6; 0,-4; 0,0" dur="4.5s" repeatCount="indefinite"/>
      <!-- campana pulsante, color rojizo profundo -->
      <ellipse cx="50" cy="42" rx="38" ry="32" fill="rgba(140,30,60,0.35)" stroke="rgba(200,60,100,0.5)" stroke-width="1.5">
        <animate attributeName="ry" values="32;22;32" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="rx" values="38;44;38" dur="2.2s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="50" cy="38" rx="24" ry="18" fill="rgba(180,40,80,0.2)">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.2s" repeatCount="indefinite"/>
      </ellipse>
      <!-- tentáculos -->
      <path d="M20,70 Q14,90 18,112" stroke="rgba(200,80,120,0.6)" stroke-width="2" fill="none">
        <animate attributeName="d" values="M20,70 Q14,90 18,112; M20,70 Q26,90 16,112; M20,70 Q14,90 18,112" dur="3s" repeatCount="indefinite"/>
      </path>
      <path d="M32,74 Q26,95 30,118" stroke="rgba(200,80,120,0.55)" stroke-width="2" fill="none">
        <animate attributeName="d" values="M32,74 Q26,95 30,118; M32,74 Q38,95 28,118; M32,74 Q26,95 30,118" dur="3.5s" begin="0.4s" repeatCount="indefinite"/>
      </path>
      <path d="M50,76 Q46,98 50,122" stroke="rgba(200,80,120,0.6)" stroke-width="2.5" fill="none">
        <animate attributeName="d" values="M50,76 Q46,98 50,122; M50,76 Q54,98 50,122; M50,76 Q46,98 50,122" dur="2.8s" begin="0.6s" repeatCount="indefinite"/>
      </path>
      <path d="M68,74 Q74,95 70,118" stroke="rgba(200,80,120,0.55)" stroke-width="2" fill="none">
        <animate attributeName="d" values="M68,74 Q74,95 70,118; M68,74 Q62,95 72,118; M68,74 Q74,95 70,118" dur="3.2s" begin="0.8s" repeatCount="indefinite"/>
      </path>
      <path d="M80,70 Q86,90 82,112" stroke="rgba(200,80,120,0.5)" stroke-width="2" fill="none">
        <animate attributeName="d" values="M80,70 Q86,90 82,112; M80,70 Q74,90 84,112; M80,70 Q86,90 82,112" dur="2.6s" begin="1s" repeatCount="indefinite"/>
      </path>
    </g>
  </svg>
  <div class="creature-label">Medusa profunda<br><small>Stygiomedusa gigantea · hasta 1 m</small></div>
</div>

<!-- ⑤ Serpiente marina de las profundidades (barracudina) -->
<div class="creature c-barracudina" aria-label="Barracudina">
  <svg viewBox="0 0 180 40" width="180">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -12,0; -6,3; 0,0" dur="3s" repeatCount="indefinite"/>
      <!-- cuerpo alargado plateado -->
      <path d="M6,20 Q50,12 100,19 Q130,24 158,17 Q166,14 170,20 Q166,26 158,22 Q130,28 100,22 Q50,28 6,20Z" fill="#3a4a5a" opacity="0.85"/>
      <path d="M10,20 Q60,16 110,20 Q140,23 160,18" stroke="#6a8a9a" stroke-width="1.5" fill="none" opacity="0.4"/>
      <!-- cola bifurcada -->
      <path d="M6,20 Q-4,14 -2,20 Q-4,26 6,20Z" fill="#2a3a4a"/>
      <!-- dientes -->
      <line x1="162" y1="19" x2="162" y2="24" stroke="white" stroke-width="1.5"/>
      <line x1="165" y1="19" x2="165" y2="24" stroke="white" stroke-width="1.5"/>
      <!-- ojo -->
      <ellipse cx="156" cy="19" rx="3.5" ry="3.5" fill="#050a10"/>
      <ellipse cx="157" cy="18" rx="1.3" ry="1.3" fill="white" opacity="0.6"/>
    </g>
  </svg>
  <div class="creature-label">Barracudina<br><small>Paralepididae · 500–3 000 m</small></div>
</div>
`;

// ═══════════════════════════════════════════════════════════════
//  SVG ANIMALES — Zona Abisopelágica (4 000–6 000 m)
// ═══════════════════════════════════════════════════════════════
const SVG_ABISAL = `

<!-- ① Pulpo Dumbo -->
<div class="creature c-dumbo" aria-label="Pulpo Dumbo">
  <svg viewBox="0 0 120 110" width="120">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -5,-7; 0,-4; 0,0" dur="5s" repeatCount="indefinite"/>
      <!-- cuerpo -->
      <ellipse cx="60" cy="44" rx="30" ry="26" fill="#4a1a5e"/>
      <!-- aletas (orejas) que baten -->
      <path d="M30,34 Q12,22 14,40 Q16,54 34,47Z" fill="#5a2270">
        <animateTransform attributeName="transform" type="rotate"
          values="0 30 34; -18 30 34; 0 30 34" dur="1.6s" repeatCount="indefinite"/>
      </path>
      <path d="M90,34 Q108,22 106,40 Q104,54 86,47Z" fill="#5a2270">
        <animateTransform attributeName="transform" type="rotate"
          values="0 90 34; 18 90 34; 0 90 34" dur="1.6s" repeatCount="indefinite"/>
      </path>
      <!-- ojos -->
      <ellipse cx="48" cy="40" rx="6" ry="6.5" fill="#06020e"/>
      <ellipse cx="72" cy="40" rx="6" ry="6.5" fill="#06020e"/>
      <ellipse cx="49" cy="38.5" rx="2.2" ry="2.2" fill="white" opacity="0.55"/>
      <ellipse cx="73" cy="38.5" rx="2.2" ry="2.2" fill="white" opacity="0.55"/>
      <!-- boca -->
      <path d="M52,54 Q60,60 68,54" stroke="#7a3a90" stroke-width="2" fill="none"/>
      <!-- bioluminiscencia -->
      <ellipse cx="60" cy="44" rx="32" ry="28" fill="#8040b8" opacity="0.07">
        <animate attributeName="opacity" values="0.07;0.02;0.07" dur="4s" repeatCount="indefinite"/>
      </ellipse>
      <!-- tentáculos con movimiento ondulante -->
      <path d="M40,66 Q32,78 36,96" stroke="#4a1a5e" stroke-width="5" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M40,66 Q32,78 36,96; M40,66 Q36,78 32,96; M40,66 Q32,78 36,96" dur="2.5s" repeatCount="indefinite"/>
      </path>
      <path d="M50,70 Q44,84 48,102" stroke="#4a1a5e" stroke-width="5" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M50,70 Q44,84 48,102; M50,70 Q56,84 46,102; M50,70 Q44,84 48,102" dur="3s" begin="0.4s" repeatCount="indefinite"/>
      </path>
      <path d="M60,72 Q58,86 60,104" stroke="#4a1a5e" stroke-width="5" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M60,72 Q56,86 60,104; M60,72 Q64,86 60,104; M60,72 Q56,86 60,104" dur="2.8s" begin="0.2s" repeatCount="indefinite"/>
      </path>
      <path d="M70,70 Q76,84 72,102" stroke="#4a1a5e" stroke-width="5" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M70,70 Q76,84 72,102; M70,70 Q64,84 74,102; M70,70 Q76,84 72,102" dur="2.7s" begin="0.6s" repeatCount="indefinite"/>
      </path>
      <path d="M80,66 Q88,78 84,96" stroke="#4a1a5e" stroke-width="5" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M80,66 Q88,78 84,96; M80,66 Q84,78 88,96; M80,66 Q88,78 84,96" dur="2.4s" begin="0.8s" repeatCount="indefinite"/>
      </path>
    </g>
  </svg>
  <div class="creature-label">Pulpo Dumbo<br><small>Grimpoteuthis · más de 7 000 m</small></div>
</div>

<!-- ② Pepino de mar -->
<div class="creature c-cucumber" aria-label="Pepino de mar">
  <svg viewBox="0 0 140 60" width="140">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -6,2; 0,4; 0,0" dur="8s" repeatCount="indefinite"/>
      <path d="M16,30 Q44,14 76,28 Q100,38 122,28 Q128,24 132,30 Q128,36 122,32 Q100,44 76,34 Q44,46 16,30Z" fill="#b87030"/>
      <!-- papillas que ondean -->
      <line x1="32" y1="20" x2="33" y2="12" stroke="#c88040" stroke-width="2.2" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 32 20; 8 32 20; 0 32 20" dur="3s" repeatCount="indefinite"/>
      </line>
      <line x1="46" y1="17" x2="47" y2="8" stroke="#c88040" stroke-width="2.2" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 46 17; -6 46 17; 0 46 17" dur="3.5s" begin="0.3s" repeatCount="indefinite"/>
      </line>
      <line x1="60" y1="18" x2="61" y2="9" stroke="#c88040" stroke-width="2.2" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 60 18; 7 60 18; 0 60 18" dur="2.8s" begin="0.6s" repeatCount="indefinite"/>
      </line>
      <line x1="74" y1="20" x2="75" y2="11" stroke="#c88040" stroke-width="2.2" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 74 20; -8 74 20; 0 74 20" dur="3.2s" begin="0.9s" repeatCount="indefinite"/>
      </line>
      <line x1="88" y1="22" x2="90" y2="14" stroke="#c88040" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 88 22; 6 88 22; 0 88 22" dur="3.8s" begin="1.2s" repeatCount="indefinite"/>
      </line>
      <!-- papillas ventrales -->
      <line x1="36" y1="40" x2="37" y2="48" stroke="#c88040" stroke-width="2" stroke-linecap="round"/>
      <line x1="52" y1="42" x2="53" y2="50" stroke="#c88040" stroke-width="2" stroke-linecap="round"/>
      <line x1="68" y1="41" x2="69" y2="49" stroke="#c88040" stroke-width="2" stroke-linecap="round"/>
      <line x1="84" y1="40" x2="85" y2="48" stroke="#c88040" stroke-width="2" stroke-linecap="round"/>
      <!-- tentáculos orales -->
      <path d="M16,30 Q6,22 4,30 Q6,38 16,32" fill="#a06020"/>
    </g>
  </svg>
  <div class="creature-label">Pepino de mar<br><small>Holothuroidea · hasta 1 m</small></div>
</div>

<!-- ③ Pez rata (macrúrido) -->
<div class="creature c-rattail" aria-label="Pez rata">
  <svg viewBox="0 0 170 55" width="170">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -10,-2; -4,3; 0,0" dur="5s" repeatCount="indefinite"/>
      <!-- cabeza grande -->
      <ellipse cx="130" cy="28" rx="28" ry="20" fill="#3a4a3a"/>
      <!-- cuerpo que se afila hacia cola -->
      <path d="M104,22 Q70,18 30,26 Q16,28 6,28 Q16,30 30,30 Q70,34 104,34Z" fill="#3a4a3a"/>
      <!-- cola muy larga y fina -->
      <path d="M6,28 Q2,26 0,28 Q2,30 6,28Z" fill="#2a3a2a"/>
      <!-- aleta dorsal larga -->
      <path d="M60,22 Q80,14 100,18 Q116,14 128,20" stroke="#2a3a2a" stroke-width="2" fill="none"/>
      <!-- barbilla (característica) -->
      <path d="M132,38 Q138,44 136,50" stroke="#2a3a2a" stroke-width="2" fill="none" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 132 38; 5 132 38; 0 132 38" dur="2s" repeatCount="indefinite"/>
      </path>
      <!-- ojo -->
      <ellipse cx="120" cy="26" rx="5.5" ry="5.5" fill="#080e08"/>
      <ellipse cx="121" cy="25" rx="2" ry="2" fill="white" opacity="0.4"/>
      <!-- branquias -->
      <path d="M104,22 Q102,28 104,34" stroke="#2a3a2a" stroke-width="2" fill="none"/>
    </g>
  </svg>
  <div class="creature-label">Pez rata (grenadier)<br><small>Coryphaenoides · 4 000–6 000 m</small></div>
</div>

<!-- ④ Gusano poliqueto bioluminiscente -->
<div class="creature c-polychaete" aria-label="Gusano poliqueto">
  <svg viewBox="0 0 60 160" width="60">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -3,-5; 0,-3; 0,0" dur="4s" repeatCount="indefinite"/>
      <!-- cuerpo segmentado ondulante -->
      <path d="M30,6 Q38,16 30,26 Q22,36 30,46 Q38,56 30,66 Q22,76 30,86 Q38,96 30,106 Q22,116 30,126 Q38,136 30,146" stroke="#3a6a2a" stroke-width="10" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="
          M30,6 Q38,16 30,26 Q22,36 30,46 Q38,56 30,66 Q22,76 30,86 Q38,96 30,106 Q22,116 30,126 Q38,136 30,146;
          M30,6 Q22,16 30,26 Q38,36 30,46 Q22,56 30,66 Q38,76 30,86 Q22,96 30,106 Q38,116 30,126 Q22,136 30,146;
          M30,6 Q38,16 30,26 Q22,36 30,46 Q38,56 30,66 Q22,76 30,86 Q38,96 30,106 Q22,116 30,126 Q38,136 30,146"
          dur="1.5s" repeatCount="indefinite"/>
      </path>
      <!-- cilios laterales (parapodios) -->
      <line x1="38" y1="16" x2="48" y2="12" stroke="#2a5a1a" stroke-width="1.5"/>
      <line x1="22" y1="36" x2="12" y2="32" stroke="#2a5a1a" stroke-width="1.5"/>
      <line x1="38" y1="56" x2="48" y2="52" stroke="#2a5a1a" stroke-width="1.5"/>
      <line x1="22" y1="76" x2="12" y2="72" stroke="#2a5a1a" stroke-width="1.5"/>
      <line x1="38" y1="96" x2="48" y2="92" stroke="#2a5a1a" stroke-width="1.5"/>
      <line x1="22" y1="116" x2="12" y2="112" stroke="#2a5a1a" stroke-width="1.5"/>
      <!-- puntos bioluminiscentes -->
      <circle cx="30" cy="30" r="2" fill="#80d060" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="30" cy="60" r="2" fill="#80d060" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2.4s" begin="0.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="30" cy="90" r="2" fill="#80d060" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.1;0.8" dur="1.8s" begin="0.8s" repeatCount="indefinite"/>
      </circle>
    </g>
  </svg>
  <div class="creature-label">Poliqueto bioluminiscente<br><small>Tomopteris · agua libre profunda</small></div>
</div>

<!-- ⑤ Esponja hexactinélida (esponja de cristal) -->
<div class="creature c-sponge" aria-label="Esponja de cristal">
  <svg viewBox="0 0 70 120" width="70">
    <g>
      <!-- base fija, movimiento muy sutil -->
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -1,-2; 0,-1; 0,0" dur="10s" repeatCount="indefinite"/>
      <!-- tallo -->
      <rect x="32" y="90" width="6" height="28" rx="3" fill="#8ab8c8" opacity="0.6"/>
      <!-- cuerpo tubular de cristal -->
      <path d="M20,20 Q14,50 16,88 Q26,94 44,94 Q54,88 54,50 Q52,20 40,14 Q30,10 20,20Z" fill="rgba(160,210,230,0.18)" stroke="rgba(160,210,230,0.5)" stroke-width="1.5"/>
      <!-- estructura de espículas de sílice -->
      <line x1="20" y1="30" x2="50" y2="30" stroke="rgba(180,220,240,0.4)" stroke-width="1"/>
      <line x1="18" y1="44" x2="52" y2="44" stroke="rgba(180,220,240,0.4)" stroke-width="1"/>
      <line x1="17" y1="58" x2="52" y2="58" stroke="rgba(180,220,240,0.4)" stroke-width="1"/>
      <line x1="17" y1="72" x2="52" y2="72" stroke="rgba(180,220,240,0.4)" stroke-width="1"/>
      <!-- ósculum (abertura superior) -->
      <ellipse cx="35" cy="16" rx="14" ry="6" fill="rgba(120,180,210,0.3)" stroke="rgba(160,210,230,0.5)" stroke-width="1"/>
      <!-- bioluminiscencia sutil -->
      <ellipse cx="35" cy="52" rx="18" ry="36" fill="rgba(140,200,230,0.06)">
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="5s" repeatCount="indefinite"/>
      </ellipse>
    </g>
  </svg>
  <div class="creature-label">Esponja de cristal<br><small>Hexactinellida · hasta 1 m alto</small></div>
</div>
`;

// ═══════════════════════════════════════════════════════════════
//  SVG ANIMALES — Zona Hadal (6 000–11 000 m)
// ═══════════════════════════════════════════════════════════════
const SVG_HADAL = `

<!-- ① Pez caracol / snailfish -->
<div class="creature c-snailfish" aria-label="Pez caracol">
  <svg viewBox="0 0 140 60" width="140">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -8,-3; -3,4; 0,0" dur="5s" repeatCount="indefinite"/>
      <!-- cuerpo translúcido, se ven órganos -->
      <path d="M12,30 Q32,12 70,27 Q95,38 120,26 Q128,21 132,28 Q128,34 120,30 Q94,42 68,32 Q32,48 12,30Z"
            fill="rgba(200,228,240,0.45)" stroke="rgba(180,214,230,0.6)" stroke-width="1"/>
      <!-- órganos internos visibles (translucidez) -->
      <ellipse cx="58" cy="28" rx="12" ry="7" fill="rgba(220,130,130,0.3)"/>
      <path d="M70,27 Q80,24 90,27" stroke="rgba(180,100,100,0.3)" stroke-width="4" fill="none"/>
      <!-- línea lateral punteada -->
      <path d="M22,30 Q65,28 116,27" stroke="rgba(160,200,218,0.5)" stroke-width="1" fill="none" stroke-dasharray="4,4"/>
      <!-- cola larga fina -->
      <path d="M12,30 Q4,26 2,30 Q4,34 12,30Z" fill="rgba(170,204,220,0.4)"/>
      <!-- aleta dorsal larguísima -->
      <path d="M60,26 Q78,16 96,22 Q112,16 120,26" stroke="rgba(160,200,218,0.45)" stroke-width="1.5" fill="none"/>
      <path d="M60,32 Q78,40 96,36 Q112,40 120,30" stroke="rgba(160,200,218,0.45)" stroke-width="1.5" fill="none"/>
      <!-- ojo translúcido -->
      <ellipse cx="102" cy="28" rx="5" ry="5" fill="rgba(10,14,20,0.7)"/>
      <ellipse cx="103" cy="27" rx="2" ry="2" fill="rgba(255,255,255,0.5)"/>
    </g>
  </svg>
  <div class="creature-label">Pez caracol<br><small>Pseudoliparis swirei · récord: 8 336 m</small></div>
</div>

<!-- ② Anfípodo gigante -->
<div class="creature c-amphipod" aria-label="Anfípodo gigante">
  <svg viewBox="0 0 110 60" width="110">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -7,-2; -2,4; 0,0" dur="3.5s" repeatCount="indefinite"/>
      <!-- cuerpo segmentado comprimido -->
      <path d="M18,30 Q32,18 56,28 Q74,34 92,24 Q98,20 102,26 Q98,32 92,28 Q74,40 56,32 Q32,44 18,30Z" fill="#b8ccd8"/>
      <!-- segmentos -->
      <line x1="36" y1="21" x2="35" y2="38" stroke="#98aab8" stroke-width="1.5" opacity="0.6"/>
      <line x1="50" y1="23" x2="49" y2="37" stroke="#98aab8" stroke-width="1.5" opacity="0.6"/>
      <line x1="64" y1="25" x2="63" y2="36" stroke="#98aab8" stroke-width="1.5" opacity="0.6"/>
      <line x1="76" y1="26" x2="75" y2="34" stroke="#98aab8" stroke-width="1.5" opacity="0.6"/>
      <!-- patas que se mueven alternadamente -->
      <path d="M32" y1="38" stroke="#98aab8"><!-- placeholder --></path>
      <line x1="32" y1="38" x2="28" y2="50" stroke="#98aab8" stroke-width="1.5" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 32 38;-10 32 38;0 32 38" dur="0.5s" repeatCount="indefinite"/>
      </line>
      <line x1="40" y1="39" x2="38" y2="52" stroke="#98aab8" stroke-width="1.5" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 40 39;10 40 39;0 40 39" dur="0.55s" begin="0.1s" repeatCount="indefinite"/>
      </line>
      <line x1="48" y1="39" x2="48" y2="52" stroke="#98aab8" stroke-width="1.5" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 48 39;-8 48 39;0 48 39" dur="0.5s" begin="0.2s" repeatCount="indefinite"/>
      </line>
      <line x1="56" y1="38" x2="58" y2="51" stroke="#98aab8" stroke-width="1.5" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 56 38;9 56 38;0 56 38" dur="0.52s" begin="0.3s" repeatCount="indefinite"/>
      </line>
      <line x1="64" y1="37" x2="68" y2="50" stroke="#98aab8" stroke-width="1.5" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 64 37;-7 64 37;0 64 37" dur="0.5s" begin="0.4s" repeatCount="indefinite"/>
      </line>
      <!-- antenas largas -->
      <path d="M92,24 Q100,14 106,8" stroke="#98aab8" stroke-width="1.8" fill="none"/>
      <path d="M92,24 Q102,18 108,12" stroke="#98aab8" stroke-width="1.8" fill="none"/>
      <!-- ojo -->
      <ellipse cx="88" cy="26" rx="4" ry="4" fill="#202a36"/>
    </g>
  </svg>
  <div class="creature-label">Anfípodo gigante<br><small>Alicella gigantea · 34 cm · &gt;10 000 m</small></div>
</div>

<!-- ③ Foraminífero gigante (xenofyóforo) -->
<div class="creature c-foraminifera" aria-label="Xenofyóforo">
  <svg viewBox="0 0 90 90" width="90">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -2,-3; 0,-2; 0,0" dur="12s" repeatCount="indefinite"/>
      <!-- red de pseudópodos radiantes -->
      <circle cx="45" cy="45" r="18" fill="rgba(180,160,110,0.2)" stroke="rgba(180,160,110,0.4)" stroke-width="1.5"/>
      <circle cx="45" cy="45" r="10" fill="rgba(160,140,90,0.3)"/>
      <!-- pseudópodos que se extienden -->
      <line x1="45" y1="27" x2="45" y2="10" stroke="rgba(180,160,110,0.5)" stroke-width="1.5" stroke-linecap="round">
        <animate attributeName="y2" values="10;6;10" dur="4s" repeatCount="indefinite"/>
      </line>
      <line x1="58" y1="32" x2="72" y2="18" stroke="rgba(180,160,110,0.5)" stroke-width="1.5" stroke-linecap="round">
        <animate attributeName="x2" values="72;78;72" dur="5s" begin="0.5s" repeatCount="indefinite"/>
      </line>
      <line x1="63" y1="45" x2="80" y2="45" stroke="rgba(180,160,110,0.5)" stroke-width="1.5" stroke-linecap="round">
        <animate attributeName="x2" values="80;86;80" dur="4.5s" begin="1s" repeatCount="indefinite"/>
      </line>
      <line x1="58" y1="58" x2="72" y2="72" stroke="rgba(180,160,110,0.5)" stroke-width="1.5" stroke-linecap="round">
        <animate attributeName="y2" values="72;78;72" dur="3.8s" begin="1.5s" repeatCount="indefinite"/>
      </line>
      <line x1="45" y1="63" x2="45" y2="80" stroke="rgba(180,160,110,0.5)" stroke-width="1.5" stroke-linecap="round">
        <animate attributeName="y2" values="80;86;80" dur="4.2s" begin="2s" repeatCount="indefinite"/>
      </line>
      <line x1="32" y1="58" x2="18" y2="72" stroke="rgba(180,160,110,0.5)" stroke-width="1.5" stroke-linecap="round">
        <animate attributeName="x2" values="18;12;18" dur="5s" begin="0.8s" repeatCount="indefinite"/>
      </line>
      <line x1="27" y1="45" x2="10" y2="45" stroke="rgba(180,160,110,0.5)" stroke-width="1.5" stroke-linecap="round">
        <animate attributeName="x2" values="10;4;10" dur="4.8s" begin="1.3s" repeatCount="indefinite"/>
      </line>
      <line x1="32" y1="32" x2="18" y2="18" stroke="rgba(180,160,110,0.5)" stroke-width="1.5" stroke-linecap="round">
        <animate attributeName="x2" values="18;12;18" dur="4.3s" begin="0.3s" repeatCount="indefinite"/>
      </line>
    </g>
  </svg>
  <div class="creature-label">Xenofyóforo<br><small>Syringammina fragilissima · &gt;6 000 m</small></div>
</div>

<!-- ④ Holoturia hadal (pepino del abismo) -->
<div class="creature c-hadal-cuke" aria-label="Holoturia hadal">
  <svg viewBox="0 0 130 55" width="130">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -4,2; 0,5; 0,0" dur="9s" repeatCount="indefinite"/>
      <!-- cuerpo traslúcido blancuzco -->
      <path d="M14,28 Q38,14 70,26 Q96,36 116,26 Q122,23 126,28 Q122,34 116,30 Q96,42 70,32 Q38,46 14,28Z"
            fill="rgba(220,230,240,0.5)" stroke="rgba(200,215,230,0.6)" stroke-width="1.2"/>
      <!-- órganos visibles -->
      <path d="M40,24 Q60,20 80,24" stroke="rgba(160,180,200,0.35)" stroke-width="4" fill="none"/>
      <!-- papillas translúcidas -->
      <line x1="30" y1="18" x2="30" y2="11" stroke="rgba(200,215,230,0.7)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 30 18; 6 30 18; 0 30 18" dur="4s" repeatCount="indefinite"/>
      </line>
      <line x1="46" y1="16" x2="46" y2="8" stroke="rgba(200,215,230,0.7)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 46 16; -5 46 16; 0 46 16" dur="5s" begin="0.5s" repeatCount="indefinite"/>
      </line>
      <line x1="62" y1="16" x2="62" y2="8" stroke="rgba(200,215,230,0.7)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 62 16; 7 62 16; 0 62 16" dur="4.5s" begin="1s" repeatCount="indefinite"/>
      </line>
      <line x1="78" y1="18" x2="78" y2="10" stroke="rgba(200,215,230,0.7)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 78 18; -6 78 18; 0 78 18" dur="3.8s" begin="1.5s" repeatCount="indefinite"/>
      </line>
      <!-- tentáculos orales -->
      <path d="M14,28 Q4,20 2,28 Q4,36 14,30" fill="rgba(190,210,225,0.5)"/>
    </g>
  </svg>
  <div class="creature-label">Holoturia hadal<br><small>Myriotrochus · 7 000–11 000 m</small></div>
</div>

<!-- ⑤ Bacteria gigante (Thiomargarita) estilizada -->
<div class="creature c-bacteria" aria-label="Bacteria gigante">
  <svg viewBox="0 0 80 80" width="80">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; -2,-3; 0,-2; 0,0" dur="14s" repeatCount="indefinite"/>
      <!-- cadena de bacterias esféricas -->
      <circle cx="40" cy="14" r="10" fill="rgba(220,230,180,0.4)" stroke="rgba(200,210,150,0.6)" stroke-width="1.2">
        <animate attributeName="r" values="10;11;10" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="40" cy="34" r="11" fill="rgba(220,230,180,0.4)" stroke="rgba(200,210,150,0.6)" stroke-width="1.2">
        <animate attributeName="r" values="11;12;11" dur="3.5s" begin="0.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="40" cy="56" r="10" fill="rgba(220,230,180,0.4)" stroke="rgba(200,210,150,0.6)" stroke-width="1.2">
        <animate attributeName="r" values="10;11;10" dur="2.8s" begin="1s" repeatCount="indefinite"/>
      </circle>
      <!-- flagelos ondeantes -->
      <path d="M50,14 Q58,10 62,6" stroke="rgba(200,210,150,0.5)" stroke-width="1.2" fill="none">
        <animate attributeName="d" values="M50,14 Q58,10 62,6; M50,14 Q56,12 58,8; M50,14 Q58,10 62,6" dur="1.5s" repeatCount="indefinite"/>
      </path>
      <path d="M50,34 Q60,28 66,22" stroke="rgba(200,210,150,0.5)" stroke-width="1.2" fill="none">
        <animate attributeName="d" values="M50,34 Q60,28 66,22; M50,34 Q58,30 62,24; M50,34 Q60,28 66,22" dur="1.8s" begin="0.3s" repeatCount="indefinite"/>
      </path>
    </g>
  </svg>
  <div class="creature-label">Bacteria barofílica<br><small>Psychromonas hadalis · &gt;10 000 m</small></div>
</div>
`;

// ═══════════════════════════════════════════════════════════════
//  DATOS DE ZONAS
// ═══════════════════════════════════════════════════════════════
const ZONAS = [
  {
    id: "epi", nombre: "Zona Epipelágica", subtitulo: "La zona iluminada",
    desde: 0, hasta: 200, luz: "Luz solar plena", temp: "20 a 30 °C", presion: "1 a 21 atm",
    intro: `La zona epipelágica, también llamada zona fótica o zona eufótica, es la capa superior del océano y la única que recibe suficiente luz solar para sostener la fotosíntesis. Aunque representa apenas el 2% del volumen total de los océanos, alberga más del 90% de toda la vida marina conocida.`,
    detalles: [
      `<strong>El motor del planeta.</strong> El fitoplancton que vive en esta zona produce entre el 50% y el 80% del oxígeno del planeta — más que todos los bosques terrestres juntos. Cada vez que respiras, probablemente uno de cada dos bocanadas de aire viene del océano superficial.`,
      `<strong>Una cadena alimentaria explosiva.</strong> El fitoplancton alimenta al zooplancton, que alimenta a los peces pequeños, que alimentan a los grandes pelágicos como el atún, el pez espada y el tiburón. La energía fluye desde los productores microscópicos hasta depredadores de cientos de kilos en apenas cinco eslabones.`,
      `<strong>Corrientes y ciclos.</strong> Las corrientes oceánicas superficiales redistribuyen nutrientes, calor y organismos por todo el planeta. El giro subtropical del Pacífico Norte es tan enorme que podría cubrir Europa dos veces. En su centro, la Gran Mancha de Basura del Pacífico acumula plásticos flotantes.`,
      `<strong>La noche cambia todo.</strong> Al caer la oscuridad, millones de organismos suben desde las capas inferiores para aprovechar el fitoplancton de superficie. Este fenómeno, la migración vertical diurna, es el movimiento masivo de biomasa más grande de la Tierra.`
    ],
    seres: ["Atún de aleta azul", "Gran tiburón blanco", "Delfín mular", "Tortuga boba", "Marlín azul", "Pez luna"],
    animales_svg: SVG_EPI
  },
  {
    id: "meso", nombre: "Zona Mesopelágica", subtitulo: "La penumbra perpetua",
    desde: 200, hasta: 1000, luz: "Penumbra azul", temp: "4 a 12 °C", presion: "21 a 100 atm",
    intro: `La zona mesopelágica es el reino de la media oscuridad. Solo el 1% de la luz superficial llega a los 200 metros, y para los 1.000 metros es absolutamente nula. Sin embargo, esta zona esconde una vida sorprendentemente abundante y funciona como el corazón oculto del ciclo del carbono global.`,
    detalles: [
      `<strong>La mayor migración del planeta.</strong> Cada tarde, billones de peces linterna, calamares y crustáceos realizan un viaje de cientos de metros hacia la superficie para alimentarse, y regresan al amanecer. Esta migración vertical diurna podría capturar hasta 1.000 millones de toneladas de CO₂ al año.`,
      `<strong>Bioluminiscencia ubicua.</strong> Se estima que más del 75% de los animales de la zona mesopelágica producen luz propia. La usan para comunicarse, atraer presas, camuflarse contra la débil luz desde arriba (contrailuminación) y disuadir depredadores.`,
      `<strong>La "nieve marina".</strong> Desde la superficie cae constantemente una lluvia de partículas orgánicas: restos de plancton, heces, moco y microorganismos muertos. Esta "nieve marina" transporta carbono fijado en superficie hacia las profundidades.`,
      `<strong>Biomasa subestimada.</strong> Estudios con redes de arrastre y sonares sugieren que la biomasa de peces en la zona mesopelágica podría ser 10 veces mayor de lo estimado — entre 1.000 y 10.000 millones de toneladas. La reserva de pesca más grande del planeta, inexplorada.`
    ],
    seres: ["Pez linterna", "Pez hacha plateado", "Calamar vampiro", "Medusa luminosa", "Camarón rojo profundo"],
    animales_svg: SVG_MESO
  },
  {
    id: "bati", nombre: "Zona Batipelágica", subtitulo: "La oscuridad absoluta",
    desde: 1000, hasta: 4000, luz: "Oscuridad total", temp: "2 a 4 °C", presion: "100 a 400 atm",
    intro: `A partir de los 1.000 metros comienza la zona batipelágica, donde nunca ha llegado un rayo de sol. La presión equivale al peso de cien elefantes sobre cada centímetro cuadrado de tu cuerpo. En esta oscuridad absoluta, la vida ha encontrado soluciones evolutivas que parecen sacadas de la ciencia ficción.`,
    detalles: [
      `<strong>El pez pescador y el engaño luminoso.</strong> La hembra lleva un illicium con bacterias bioluminiscentes. La boca se abre en menos de 6 milisegundos. El macho, 40 veces más pequeño, se fusiona con el cuerpo de la hembra de por vida para reproducirse.`,
      `<strong>El calamar gigante: el kraken real.</strong> Architeuthis dux puede alcanzar 13 metros, con ojos del tamaño de un balón de fútbol y tentáculos con ventosas dentadas. El primer video de uno vivo en su hábitat se obtuvo en 2012.`,
      `<strong>Adaptaciones moleculares.</strong> Los animales batipelágicos usan TMAO (óxido de trimetilamina) para estabilizar sus proteínas bajo presión extrema. Sus cuerpos gelatinosos permiten que la presión sea igual por dentro y por fuera.`,
      `<strong>El cachalote: visitante desde la superficie.</strong> Desciende más de 2.000 metros, aguanta 90 minutos sin respirar, y su corazón baja a apenas 10 latidos por minuto durante el buceo.`
    ],
    seres: ["Pez pescador", "Calamar gigante", "Pez dientes de sable", "Medusa Stygiomedusa", "Barracudina"],
    animales_svg: SVG_BATI
  },
  {
    id: "abisal", nombre: "Zona Abisopelágica", subtitulo: "Las llanuras del olvido",
    desde: 4000, hasta: 6000, luz: "Oscuridad total", temp: "cerca de 2 °C", presion: "400 a 600 atm",
    intro: `Las llanuras abisales cubren el 54% de la superficie de la Tierra y son los ecosistemas más extensos del planeta. Se extienden a profundidades de entre 4.000 y 6.000 metros como vastas planicies de sedimento blando, en una oscuridad y un frío perpetuos. La vida aquí es escasa, lenta y adaptada a una pobreza energética extrema.`,
    detalles: [
      `<strong>La nieve marina como único alimento.</strong> Un organismo muerto en la superficie tarda entre 2 y 6 semanas en llegar al fondo. Para cuando llega, la mayoría de su energía ya ha sido consumida. Los animales abisales han desarrollado metabolismos increíblemente lentos para sobrevivir.`,
      `<strong>El pulpo Dumbo.</strong> Grimpoteuthis vive a más de 7.000 metros y usa sus aletas en forma de orejas para propulsarse. No tiene saco de tinta — a esa profundidad nadie va a verlos de todos modos.`,
      `<strong>Los nódulos polimetálicos.</strong> El fondo abisal está sembrado de nódulos de manganeso, níquel, cobalto y cobre del tamaño de patatas, que se forman a milímetros por millón de años. Son un objetivo de la minería submarina, aunque su extracción destruiría ecosistemas únicos.`,
      `<strong>Las ballenas como ecosistemas.</strong> Un cadáver de ballena azul en el fondo puede sustentar más de 200 especies durante 50–100 años, desde tiburones hasta bacterias sulfuro-reductoras.`
    ],
    seres: ["Pulpo Dumbo", "Pepino de mar", "Pez rata (grenadier)", "Poliqueto bioluminiscente", "Esponja de cristal"],
    animales_svg: SVG_ABISAL
  },
  {
    id: "hadal", nombre: "Zona Hadal", subtitulo: "El fin del mundo",
    desde: 6000, hasta: 11000, luz: "Oscuridad total", temp: "1 a 4 °C", presion: "más de 600 atm",
    intro: `Las fosas hadales son las cicatrices más profundas del planeta. La fosa de las Marianas alcanza los 10.935 metros en el Abismo Challenger. La presión allí es más de 1.000 veces la atmosférica. Solo un puñado de humanos y robots ha llegado al fondo.`,
    detalles: [
      `<strong>El Abismo Challenger.</strong> A 10.935 metros, la presión es de 1.086 atm — como tener 1.086 kg sobre cada cm² de piel. Si el Everest se colocara allí, su cima quedaría a más de 2 km bajo el agua.`,
      `<strong>Los anfípodos: señores del abismo.</strong> Alicella gigantea mide hasta 34 cm y se ha encontrado a más de 10.000 metros. Sus concentraciones de TMAO son tan altas que si los sacas a superficie normal, sus proteínas se destruyen.`,
      `<strong>El pez caracol: el vertebrado más profundo.</strong> Pseudoliparis swirei fue filmado a 8.336 metros en 2022. Es semitransparente, sin vejiga natatoria, y detecta crustáceos en el sedimento con receptores de presión extremadamente sensibles.`,
      `<strong>Solo cinco personas han estado aquí.</strong> Piccard y Walsh (1960), Cameron (2012) y Vescovo (2019), quien pasó 4 horas en el fondo. Las mismas personas que han caminado en la Luna. En 2018 se encontraron microplásticos en los estómagos de los anfípodos hadales.`
    ],
    seres: ["Pez caracol (Pseudoliparis)", "Anfípodo gigante", "Holoturia hadal", "Xenofyóforo", "Bacteria barofílica"],
    animales_svg: SVG_HADAL
  }
];

// ── Render de zonas ──────────────────────────────────────────────
const main = document.getElementById("zonas");

main.innerHTML = ZONAS.map((z, i) => `
  <section class="zone zone--${z.id}" id="${z.id}" data-from="${z.desde}" data-to="${z.hasta}">
    <div class="zone-bg-glow" aria-hidden="true"></div>
    <div class="zone-waves-top" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,30 C360,55 720,5 1080,30 C1260,42 1380,28 1440,30 L1440,0 L0,0Z" fill="rgba(0,0,0,0.25)"/>
      </svg>
    </div>
    <div class="zone-inner">
      <div class="zone-number" aria-hidden="true">0${i+1}</div>
      <div class="zone-header">
        <div class="zone-meta">
          <span class="zone-tag">${z.subtitulo}</span>
          <div class="zone-depth-range">${z.desde.toLocaleString("es")} — ${z.hasta.toLocaleString("es")} m</div>
        </div>
        <h2>${z.nombre}</h2>
      </div>
      <div class="zone-body">
        <div class="zone-text-col">
          <p class="zone-intro">${z.intro}</p>
          <div class="zone-details">
            ${z.detalles.map(d => `
              <div class="detail-block">
                <div class="detail-dot" aria-hidden="true"></div>
                <p>${d}</p>
              </div>`).join("")}
          </div>
          <ul class="facts">
            <li><svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm-.5 3.5h1V9h-1zm0 4h1v1h-1z"/></svg>${z.luz}</li>
            <li><svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1C6.3 1 5 3.2 5 6c0 1.7.6 3.2 1.5 4.2L8 15l1.5-4.8C10.4 9.2 11 7.7 11 6c0-2.8-1.3-5-3-5z"/></svg>${z.temp}</li>
            <li><svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2"/></svg>${z.presion}</li>
          </ul>
          <div class="zone-creatures-list">
            <div class="creatures-label">Vive aquí</div>
            <div class="creatures-tags">
              ${z.seres.map(s => `<span class="creature-tag">${s}</span>`).join("")}
            </div>
          </div>
        </div>
        <div class="zone-animals" aria-label="Animales de ${z.nombre}">
          ${z.animales_svg}
        </div>
      </div>
    </div>
    <div class="zone-waves-bottom" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,30 C360,5 720,55 1080,30 C1260,18 1380,32 1440,30 L1440,60 L0,60Z" fill="rgba(0,0,0,0.25)"/>
      </svg>
    </div>
  </section>`).join("");

// ── Medidor de profundidad ───────────────────────────────────────
const depthEl = document.getElementById("depth");
const fill     = document.getElementById("fill");
function updateDepth() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p   = Math.min(1, Math.max(0, scrollY / max));
  depthEl.textContent = Math.round(p * 11000).toLocaleString("es");
  fill.style.height   = (p * 100) + "%";
}
addEventListener("scroll", updateDepth, { passive: true });
updateDepth();

// ── IntersectionObserver ─────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
  });
}, { threshold: 0.06 });
document.querySelectorAll(".zone-inner, .creature, .detail-block, .hero-stats .stat").forEach(el => observer.observe(el));

// ── Bot ──────────────────────────────────────────────────────────
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g," ");
const KB = [
  {k:["marianas","challenger","mas profundo","fondo","11000","profundo"],a:"El punto más profundo es el Abismo Challenger en las Marianas, a 10 935 m. Si pusieras el Everest allí, su cima quedaría a 2 km bajo el agua. La presión supera 1 000 atm."},
  {k:["luz","oscuro","oscuridad","sol","fotosintesis"],a:"La luz solar desaparece a 200 m y es nula a 1 000 m. La zona fótica produce el 50–80% del oxígeno del planeta. Por debajo solo existe la bioluminiscencia."},
  {k:["bioluminiscencia","brilla","brillan","linterna","brillo","luz propia"],a:"Más del 75% de los animales de aguas profundas producen bioluminiscencia. La usan para cazar, atraer pareja, camuflarse (contrailuminación) o asustar depredadores. Es el idioma universal del océano profundo."},
  {k:["presion","aplasta","aplastar","atm","atmosferas"],a:"La presión sube 1 atm cada 10 m. En las Marianas supera 1 000 atm. Los animales abisales usan TMAO para estabilizar proteínas bajo presión y no tienen aire en el cuerpo, por eso no se aplastan."},
  {k:["frio","temperatura","calor","grados"],a:"La mesopelágica va de 4–12 °C. Por debajo de 1 000 m la temperatura es 1–4 °C casi constante. Las chimeneas hidrotermales son la excepción: expulsan agua a más de 350 °C."},
  {k:["chimenea","hidrotermal","hidrotermales","quimiosintesis"],a:"Las chimeneas hidrotermales son grietas del fondo que expulsan agua mineral a más de 350 °C. La vida allí se basa en quimiosíntesis, sin necesidad de luz solar. Descubiertas en 1977, cambiaron nuestra idea de dónde puede existir vida."},
  {k:["pescador","anglerfish","senuelo","rape","illicium"],a:"El pez pescador hembra lleva un illicium con bacterias bioluminiscentes como señuelo. Su boca se abre en menos de 6 ms. El macho se fusiona con la hembra de por vida, reducido a un apéndice reproductor."},
  {k:["calamar","gigante","kraken","architeuthis","ojos"],a:"Architeuthis dux puede medir hasta 13 m y tiene los ojos más grandes del reino animal (del tamaño de un balón). El primer video de uno vivo en su hábitat natural se obtuvo en 2012 a 900 metros."},
  {k:["ballena","cachalote","bucea","buceo"],a:"El cachalote desciende hasta 2 000 m y aguanta 90 min sin respirar. Su corazón baja a 10 latidos/min. Cuando muere y se hunde (whale fall), su cadáver alimenta a más de 200 especies durante 50–100 años."},
  {k:["explor","sumergible","robot","humano","vescovo","cameron","piccard"],a:"Solo 5 personas han estado en el Abismo Challenger: Piccard y Walsh (1960), Cameron (2012) y Vescovo (2019), quien pasó 4 horas en el fondo — tanto como las personas que han caminado en la Luna."},
  {k:["explorado","conocemos","mapa","cartografiado","porcentaje"],a:"Menos del 25% del fondo marino está cartografiado con detalle y menos del 5% ha sido explorado de verdad. Sabemos más de la superficie de Marte que de nuestros propios fondos oceánicos."},
  {k:["zona","capas","capa","zonas","niveles"],a:"El océano tiene 5 zonas: Epipelágica (0–200 m), Mesopelágica (200–1 000 m), Batipelágica (1 000–4 000 m), Abisopelágica (4 000–6 000 m) y Hadal (más de 6 000 m)."},
  {k:["migracion","vertical","sube","suben","noche"],a:"Cada noche, billones de animales suben de la mesopelágica a la superficie para comer y bajan al amanecer. Es la mayor migración animal del planeta y mueve hasta 1 000 millones de toneladas de carbono al año."},
  {k:["plastico","contaminacion","microplastico"],a:"Se hallaron microplásticos en anfípodos a más de 10 890 metros en las Marianas — el lugar más remoto del planeta ya está contaminado. El Gran Parche de Basura del Pacífico tiene extensión mayor que Francia."},
  {k:["tmao","proteinas","adaptacion","molecular"],a:"El TMAO (óxido de trimetilamina) estabiliza las proteínas bajo presión extrema. Cuanto más profundo vive el animal, más TMAO tiene. Si lo sacas a la superficie, el TMAO ya no es necesario y sus proteínas se destruyen."},
  {k:["snailfish","caracol","pez caracol","pseudoliparis","record"],a:"Pseudoliparis swirei fue filmado a 8 336 m en 2022, el vertebrado más profundo conocido. Es semitransparente, sin vejiga natatoria, y detecta presas con receptores de presión en la piel."},
  {k:["anfipodo","alicella","crustaceo"],a:"Alicella gigantea mide hasta 34 cm y vive a más de 10 000 m. Sus concentraciones de TMAO son tan altas que si lo expones a presión normal, sus proteínas se desestructuran irreversiblemente."},
  {k:["nieve marina","carbono","sedimento"],a:"La 'nieve marina' son partículas orgánicas que caen desde la superficie y tardan semanas en llegar al fondo. Transportan carbono atmosférico hacia las profundidades — el 'bombeo biológico' más importante del planeta."},
  {k:["dumbo","pulpo","grimpoteuthis"],a:"Grimpoteuthis vive a más de 7 000 m y bate sus aletas en forma de orejas para moverse. No tiene saco de tinta. Se alimenta de gusanos y crustáceos del sedimento."},
  {k:["hola","buenas","saludos","quien eres"],a:"Soy Sonda, el asistente del abismo. Pregúntame sobre zonas oceánicas, animales, presión, bioluminiscencia o exploración submarina."}
];
const SUGERENCIAS = ["¿Por qué brillan los peces?","¿Quién ha llegado al fondo?","¿Cómo sobreviven a la presión?","¿Qué es la nieve marina?"];

const $ = id => document.getElementById(id);
const bot = $("bot"), msgs = $("msgs"), input = $("input");

function add(text, who) {
  const d = document.createElement("div");
  d.className = "m " + (who === "me" ? "me" : "bot-m");
  d.textContent = text;
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
}
function responder(q) {
  const words = norm(q);
  let best = null, score = 0;
  for (const e of KB) {
    const s = e.k.reduce((n,k) => n + (words.includes(k) ? 1 : 0), 0);
    if (s > score) { score = s; best = e; }
  }
  return best ? best.a : "No tengo respuesta para eso aún. Prueba con profundidad, presión, luz, bioluminiscencia, criaturas o exploración.";
}
function preguntar(q) {
  if (!q.trim()) return;
  add(q, "me");
  setTimeout(() => add(responder(q), "bot"), 350);
}
function abrir() {
  bot.hidden = false; input.focus();
  if (!msgs.children.length) add("Hola, soy Sonda. Pregúntame lo que quieras sobre el océano profundo.", "bot");
}
$("chips").innerHTML = SUGERENCIAS.map(s => `<button type="button">${s}</button>`).join("");
$("chips").addEventListener("click", e => { if (e.target.tagName === "BUTTON") preguntar(e.target.textContent); });
$("form").addEventListener("submit", e => { e.preventDefault(); preguntar(input.value); input.value = ""; });
$("fab").onclick = () => bot.hidden ? abrir() : (bot.hidden = true);
$("open-bot").onclick = abrir;
$("close-bot").onclick = () => bot.hidden = true;
