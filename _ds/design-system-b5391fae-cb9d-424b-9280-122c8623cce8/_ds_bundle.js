/* @ds-bundle: {"format":4,"namespace":"DesignSystem_b5391f","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Chip","sourcePath":"components/actions/Chip.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Reveal","sourcePath":"components/motion/Reveal.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Stat","sourcePath":"components/surfaces/Stat.jsx"},{"name":"Eyebrow","sourcePath":"components/text/Eyebrow.jsx"},{"name":"SectionHeader","sourcePath":"components/text/SectionHeader.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"63f52c4d1589","components/actions/Chip.jsx":"e9f98fcd0edb","components/feedback/Toast.jsx":"29a7e1584e7c","components/motion/Reveal.jsx":"388300e6acfa","components/surfaces/Card.jsx":"ce47b8a5e306","components/surfaces/Stat.jsx":"627884bf550b","components/text/Eyebrow.jsx":"40e7413e9ee1","components/text/SectionHeader.jsx":"d8946e5fac5b","ui_kits/portfolio/About.jsx":"179a18642da1","ui_kits/portfolio/Data.jsx":"3740be09978e","ui_kits/portfolio/Footer.jsx":"c7339ece6e71","ui_kits/portfolio/Fx.jsx":"5cfc8a68d01b","ui_kits/portfolio/Hero.jsx":"f2c77eed939e","ui_kits/portfolio/Manifesto.jsx":"9c624926f5c6","ui_kits/portfolio/Nav.jsx":"b2e04619052a","ui_kits/portfolio/StatsBand.jsx":"6f2256f53491","ui_kits/portfolio/WorkDetail.jsx":"f2126ecb506d","ui_kits/portfolio/WorkGrid.jsx":"f6db33b23deb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_b5391f = window.DesignSystem_b5391f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary (indigo) or ghost (outlined) action.
 * Signature chip radius + spring press. Uses design tokens only.
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  style,
  children,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: {
      padding: '9px 16px',
      fontSize: 13
    },
    md: {
      padding: '13px 24px',
      fontSize: 14
    },
    lg: {
      padding: '16px 30px',
      fontSize: 15
    }
  };
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: 'var(--radius-chip)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    whiteSpace: 'nowrap',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--spring), background var(--dur-base), border-color var(--dur-base), box-shadow var(--dur-base)',
    transform: !disabled && pressed ? 'scale(var(--press))' : 'none',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--accent-press)' : 'var(--accent)',
      color: 'var(--text-on-accent)',
      boxShadow: disabled ? 'none' : hover ? 'var(--shadow-accent-lg)' : 'var(--shadow-accent)'
    },
    ghost: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--accent)' : 'var(--ink)',
      borderColor: hover && !disabled ? 'var(--accent)' : 'var(--line-strong)'
    },
    ink: {
      background: hover && !disabled ? 'var(--ink-2)' : 'var(--ink)',
      color: 'var(--text-on-dark)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — compact tag / filter token. `solid` (ink→accent on hover) or
 * `outline`. Label-style Latin caps read well here. Small chip radius.
 */
function Chip({
  variant = 'outline',
  as = 'span',
  onClick,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  const Tag = as;
  const base = {
    fontFamily: 'var(--font-label)',
    fontWeight: 600,
    fontSize: 11,
    letterSpacing: '0.05em',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    wordBreak: 'keep-all',
    padding: '8px 14px',
    borderRadius: 'var(--radius-chip)',
    border: '1px solid transparent',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    cursor: interactive ? 'pointer' : 'default',
    transition: 'transform var(--dur-base) var(--spring), background var(--dur-base), color var(--dur-base), border-color var(--dur-base)',
    transform: hover && interactive ? 'translateY(var(--lift-sm))' : 'none'
  };
  const variants = {
    solid: {
      background: hover && interactive ? 'var(--accent)' : 'var(--ink)',
      color: 'var(--text-on-dark)'
    },
    outline: {
      background: 'transparent',
      color: hover && interactive ? 'var(--accent)' : 'var(--ink-soft)',
      borderColor: hover && interactive ? 'var(--accent)' : 'var(--line-strong)'
    },
    tint: {
      background: 'var(--accent-tint)',
      color: 'var(--accent-press)'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Chip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toast — brief bottom-center confirmation pill (dark surface, label type).
 * Controlled by `open`; auto-dismiss handled by the caller or `duration`.
 */
function Toast({
  open = false,
  duration = 1400,
  onClose,
  style,
  children,
  ...rest
}) {
  React.useEffect(() => {
    if (open && duration && onClose) {
      const t = setTimeout(onClose, duration);
      return () => clearTimeout(t);
    }
  }, [open, duration, onClose]);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      position: 'fixed',
      bottom: 28,
      left: '50%',
      transform: `translateX(-50%) translateY(${open ? '0' : '20px'})`,
      background: 'var(--ink)',
      color: '#fff',
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.06em',
      padding: '12px 20px',
      borderRadius: '10px 3px 10px 3px',
      opacity: open ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--dur-base), transform var(--dur-base) var(--spring)',
      zIndex: 100,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/motion/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Reveal — scroll-triggered entrance per the motion spec:
 * rises from 20px below with a soft ease; stagger via `delay`.
 * Honors prefers-reduced-motion (renders instantly visible).
 */
function Reveal({
  delay = 0,
  y = 20,
  as = 'div',
  style,
  children,
  ...rest
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, {
      threshold: 0.15
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translateY(${y}px)`,
      transition: `opacity var(--dur-reveal) var(--ease) ${delay}ms, transform var(--dur-reveal) var(--ease) ${delay}ms`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the signature surface. FOUR surface treatments:
 *   light  · white, hairline border (default info card)
 *   ink    · dark, full-bleed emphasis / headlines
 *   accent · indigo — MAX ONE per screen
 *   media  · gradient/image backdrop for thumbnails
 * Always the 2-round / 2-sharp diagonal corners. Hover = spring lift.
 */
function Card({
  surface = 'light',
  interactive = true,
  as = 'div',
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const lifted = interactive && hover;
  const base = {
    position: 'relative',
    borderRadius: 'var(--radius-card)',
    padding: '26px 24px',
    border: '1px solid transparent',
    transition: 'transform var(--dur-lift) var(--spring), box-shadow var(--dur-lift) var(--ease), border-color var(--dur-base)',
    transform: lifted ? 'translateY(var(--lift))' : 'none',
    overflow: 'hidden'
  };
  const surfaces = {
    light: {
      background: 'var(--surface)',
      color: 'var(--ink)',
      borderColor: lifted ? 'var(--line-strong)' : 'var(--line)',
      boxShadow: lifted ? 'var(--shadow-lg)' : 'none'
    },
    ink: {
      background: 'var(--ink)',
      color: '#fff',
      boxShadow: lifted ? 'var(--shadow-ink)' : 'none'
    },
    accent: {
      background: 'var(--accent)',
      color: '#fff',
      boxShadow: lifted ? 'var(--shadow-accent-lg)' : 'none'
    },
    media: {
      background: 'linear-gradient(135deg, #24252C 0%, #3538CD 130%)',
      color: '#fff',
      boxShadow: lifted ? 'var(--shadow-ink)' : 'none'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...surfaces[surface],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — a big numeric value + label. Numbers use the display face;
 * the trailing unit is small + indigo. Show data as VALUES, not adjectives.
 */
function Stat({
  value,
  unit,
  label,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 44,
      letterSpacing: 'var(--tracking-heading)',
      lineHeight: 1,
      color: 'var(--ink)'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.4em',
      color: 'var(--accent)',
      marginLeft: 2
    }
  }, unit)), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 10.5,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
      marginTop: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Stat.jsx", error: String((e && e.message) || e) }); }

// components/text/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — small uppercase label with a leading indigo rule.
 * The recurring section/kicker marker in the label typeface.
 */
function Eyebrow({
  rule = true,
  color = 'accent',
  style,
  children,
  ...rest
}) {
  const c = color === 'accent' ? 'var(--accent)' : color === 'faint' ? 'var(--ink-faint)' : color;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: c,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 1.5,
      background: c,
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/text/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — numbered kicker + display heading + optional note.
 * The standard editorial section opener used across the system.
 */
function SectionHeader({
  index,
  kicker,
  title,
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      marginBottom: 34,
      ...style
    }
  }, rest), (index || kicker) && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, index ? `${index} / ` : '', kicker), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      letterSpacing: 'var(--tracking-heading)',
      lineHeight: 'var(--lh-heading)',
      color: 'var(--ink)',
      margin: '12px 0 8px'
    }
  }, title), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--ink-soft)',
      maxWidth: '60ch',
      margin: 0
    }
  }, note));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
// About — CENTERED interactive process stepper (auto-advances, click to control)
// + skills chip cloud. Apple-style centered showcase section.
function About() {
  const {
    Eyebrow,
    Card,
    Chip
  } = window.DesignSystem_b5391f;
  const process = [['타깃 정의', '독자와 플랫폼을 먼저 읽는다', '누가, 어디서, 몇 초 안에 이탈하는가부터 파악합니다.'], ['포맷 설계', '길이·후킹·자막·결말 구조를 짠다', '첫 3초의 후킹과 마지막 컷의 결말까지 구조를 먼저 그립니다.'], ['빠른 제작', '도구는 목적에 맞게 갈아 끼운다', 'Premiere·Figma·Midjourney — 목적이 도구를 고릅니다.'], ['끝까지 읽힘', '메시지가 결말까지 도달하는지 검증', '조회수가 아니라 완주율로 판단합니다.']];
  const [step, setStep] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const reduced = window.useReducedMotion();
  React.useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(() => setStep(s => (s + 1) % process.length), 3200);
    return () => clearInterval(id);
  }, [paused, reduced]);
  const pick = i => {
    setPaused(true);
    setStep(i);
  };
  const skills = ['총감독', '편집', 'Premiere', 'After Effects', 'Figma', 'Midjourney', 'Blender', 'Photoshop'];
  const cur = process[step];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '96px 40px 56px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(RevealFx, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "02 \xB7 Working Process")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(26px,3.6vw,40px)',
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      margin: '18px 0 0'
    }
  }, "\uC77C\uD558\uB294 \uBC29\uC2DD")), /*#__PURE__*/React.createElement(RevealFx, {
    delay: 60,
    style: {
      width: '100%',
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 10,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, process.map(([t], i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => pick(i),
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.08em',
      padding: '9px 16px',
      cursor: 'pointer',
      borderRadius: 'var(--radius-chip)',
      border: `1px solid ${step === i ? 'var(--accent)' : 'var(--line-strong)'}`,
      background: step === i ? 'var(--accent)' : 'var(--surface)',
      color: step === i ? '#fff' : 'var(--ink-soft)',
      transform: step === i ? 'translateY(-2px)' : 'none',
      transition: 'all var(--dur-base) var(--spring)'
    }
  }, `0${i + 1}`))), /*#__PURE__*/React.createElement(Card, {
    surface: "light",
    interactive: false,
    style: {
      marginTop: 20,
      minHeight: 168,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: step,
    style: {
      animation: 'wordIn .5s var(--spring) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, `STEP 0${step + 1}`), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--ink)',
      marginTop: 10
    }
  }, cur[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      marginTop: 6
    }
  }, cur[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-faint)',
      marginTop: 10,
      lineHeight: 1.6,
      maxWidth: '42ch'
    }
  }, cur[2]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 6,
      marginTop: 14
    }
  }, process.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: step === i ? 22 : 6,
      height: 6,
      borderRadius: 3,
      background: step === i ? 'var(--accent)' : 'var(--line-strong)',
      transition: 'all var(--dur-base) var(--spring)'
    }
  })))), /*#__PURE__*/React.createElement(RevealFx, {
    delay: 120,
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
      marginBottom: 16
    }
  }, "Skills \xB7 Tools"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: 560
    }
  }, skills.map(s => /*#__PURE__*/React.createElement(Chip, {
    key: s,
    variant: "outline"
  }, s)))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Data.jsx
try { (() => {
// Data — shared work inventory with detail-page content.
// 실제 수치·링크는 사용자 제공 시 교체.
window.WORKS = [{
  cat: 'Video',
  title: '인터랙티브 단편',
  meta: '6 분기점 · 15 결말',
  tools: ['총감독', 'Premiere'],
  summary: '시청자가 선택하는 분기형 단편 영상. 6개의 분기점과 15개의 결말을 설계했습니다.',
  stats: [['기획', '100%'], ['제작', '100%'], ['제작기간', '4주']],
  sections: [{
    h: '구조 설계',
    p: '6 분기점 · 15 결말의 트리 구조를 먼저 그리고, 각 분기의 이탈률을 기준으로 후킹 지점을 배치했습니다.'
  }, {
    h: '총감독 · 편집',
    p: '기획부터 촬영 디렉팅, Premiere 편집까지 한 사이클을 직접 운영했습니다.'
  }]
}, {
  cat: 'AI',
  title: '504장 생성 시리즈',
  meta: 'Midjourney · 후보정',
  tools: ['Midjourney', 'Photoshop'],
  summary: '단일 컨셉을 504장으로 변주한 생성형 이미지 시리즈. 프롬프트는 형용사가 아니라 값으로 씁니다.',
  stats: [['생성', '504장'], ['채택', '32장'], ['제작기간', '2주']],
  sections: [{
    h: '프롬프트 체계',
    p: '카메라·조명·재질을 수치로 고정하고 변수 하나만 움직이는 방식으로 시리즈의 일관성을 유지했습니다.'
  }, {
    h: '후보정',
    p: '채택 컷은 Photoshop에서 톤을 통일 — 쿨 메탈릭 하이 콘트라스트.'
  }]
}, {
  cat: 'UI',
  title: '포트폴리오 리디자인',
  meta: '카드 시스템 · 스프링 모션',
  tools: ['Figma'],
  summary: '이 사이트 자체가 결과물. 카드 서페이스 4종과 스프링 모션으로 이루어진 개인 디자인 시스템입니다.',
  stats: [['토큰', '98개'], ['컴포넌트', '8개'], ['제작기간', '1주']],
  sections: [{
    h: '시그니처 셰이프',
    p: '22/3 대각 라운드 — 균일 라운드 금지 규칙으로 화면 전체에 방향성을 부여했습니다.'
  }, {
    h: '모션 규정',
    p: 'hover -6px 스프링, press .95, 스크롤 리빌 20px. prefers-reduced-motion 존중.'
  }]
}, {
  cat: 'Video',
  title: '브랜드 캠페인 컷',
  meta: '3.5hr 편집 · 자막 설계',
  tools: ['편집', 'After Effects'],
  summary: '브랜드 캠페인 영상의 컷 편집과 자막 시스템 설계. 3.5시간 분량의 소스를 최종 컷으로 압축했습니다.',
  stats: [['소스', '3.5hr'], ['최종', '60s'], ['제작기간', '5일']],
  sections: [{
    h: '자막 설계',
    p: '무음 시청을 기본값으로 두고, 자막의 위계(키워드/보조)를 타이포로 구분했습니다.'
  }, {
    h: '모션 그래픽',
    p: 'After Effects로 로고 인트로와 트랜지션을 제작.'
  }]
}, {
  cat: 'AI',
  title: '3D 크롬 타이포',
  meta: '제너레이티브 렌더',
  tools: ['Blender', 'AI'],
  summary: '한글 타이포를 크롬 재질로 렌더한 제너레이티브 시리즈. Blender와 AI 업스케일을 결합했습니다.',
  stats: [['렌더', '48컷'], ['채택', '12컷'], ['제작기간', '10일']],
  sections: [{
    h: '재질 · 조명',
    p: '크롬 반사율과 HDRI 조명을 고정하고 글자 형태만 변주 — 시리즈의 통일감을 유지했습니다.'
  }]
}, {
  cat: 'UI',
  title: 'SNS 콘텐츠 템플릿',
  meta: '2년 운영 · 그리드',
  tools: ['Figma', 'Canva'],
  summary: '2년간 운영한 SNS 채널의 콘텐츠 템플릿 시스템. 누구나 채워 넣으면 되는 그리드를 만들었습니다.',
  stats: [['운영', '2년'], ['템플릿', '14종'], ['업로드', '주 3회']],
  sections: [{
    h: '템플릿 시스템',
    p: '표지·본문·마무리 3단 구조를 고정하고, 색과 사진만 바뀌는 운영 규칙을 세웠습니다.'
  }]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
// Contact + Footer — centered closing CTA (the screen's ONE accent card)
// with clipboard copy + toast, and the site footer.
function Contact() {
  const {
    Eyebrow,
    Card,
    Toast
  } = window.DesignSystem_b5391f;
  const [open, setOpen] = React.useState(false);
  const email = 'taehyun.creator@email.com';
  const copy = () => {
    try {
      navigator.clipboard.writeText(email);
    } catch (e) {}
    setOpen(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '56px 40px 72px'
    }
  }, /*#__PURE__*/React.createElement(RevealFx, null, /*#__PURE__*/React.createElement(Card, {
    surface: "accent",
    interactive: false,
    style: {
      minHeight: 260,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: 20,
      padding: '56px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: '#C9CAFF'
    }
  }, "03 \xB7 Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(26px,4vw,44px)',
      letterSpacing: '-0.02em',
      color: '#fff',
      lineHeight: 1.12,
      textWrap: 'balance'
    }
  }, "\uAC19\uC774 \uB9CC\uB4E4 \uC774\uC57C\uAE30\uAC00", /*#__PURE__*/React.createElement("br", null), "\uC788\uB098\uC694?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      padding: '13px 26px',
      background: '#fff',
      color: 'var(--accent-press)',
      border: 'none',
      borderRadius: 'var(--radius-chip)',
      cursor: 'pointer',
      transition: 'transform var(--dur-base) var(--spring)'
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(.95)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, "\uC774\uBA54\uC77C \uBCF5\uC0AC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.06em',
      color: '#DCDDFF'
    }
  }, email)))), /*#__PURE__*/React.createElement(Toast, {
    open: open,
    onClose: () => setOpen(false)
  }, "\uC774\uBA54\uC77C \uBCF5\uC0AC\uB428"));
}
function Footer() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '40px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uC774\uD0DC\uD604 \xB7 Portfolio \xB7 2026"), /*#__PURE__*/React.createElement("span", null, "Content \xB7 Video \xB7 UI \xB7 AI")));
}
window.Contact = Contact;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Fx.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Fx — kit-local motion utilities (mirror of the DS Reveal + CountUp).
// Defined locally so the kit doesn't depend on bundle recompile timing.

function useReducedMotion() {
  const [reduced] = React.useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  return reduced;
}
function RevealFx({
  delay = 0,
  y = 20,
  style,
  children,
  ...rest
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  const reduced = useReducedMotion();
  React.useEffect(() => {
    if (reduced) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, {
      threshold: 0.15
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translateY(${y}px)`,
      transition: `opacity var(--dur-reveal) var(--ease) ${delay}ms, transform var(--dur-reveal) var(--ease) ${delay}ms`,
      ...style
    }
  }, rest), children);
}

// CountUp — animates 0 → to when scrolled into view (ease-out cubic).
function CountUp({
  to,
  duration = 1300
}) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  const reduced = useReducedMotion();
  React.useEffect(() => {
    if (reduced) {
      setVal(to);
      return;
    }
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = t => {
        const p = Math.min(1, (t - t0) / duration);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, {
      threshold: 0.4
    });
    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, val);
}
Object.assign(window, {
  RevealFx,
  CountUp,
  useReducedMotion
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Fx.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// Hero — Apple-style CENTERED opener: eyebrow, rotating accent word,
// centered lead + CTAs, scroll cue. The first 6-second hook.
function Hero({
  onNav
}) {
  const {
    Eyebrow,
    Button
  } = window.DesignSystem_b5391f;
  const words = ['움직임', '탄성', '리듬'];
  const [wi, setWi] = React.useState(0);
  const reduced = window.useReducedMotion();
  React.useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setWi(i => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [reduced]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '110px 40px 72px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(RevealFx, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Portfolio \xB7 2026"))), /*#__PURE__*/React.createElement(RevealFx, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(40px,7.5vw,84px)',
      lineHeight: 1.04,
      letterSpacing: '-0.03em',
      color: 'var(--ink)',
      margin: '26px 0 0',
      textWrap: 'balance'
    }
  }, "\uCE74\uB4DC\uB85C \uB9D0\uD558\uACE0", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    key: wi,
    style: {
      display: 'inline-block',
      color: 'var(--accent)',
      animation: 'wordIn .55s var(--spring) both'
    }
  }, words[wi]), "\uC73C\uB85C \uC0B4\uC544\uB098\uB294", /*#__PURE__*/React.createElement("br", null), "\uCF58\uD150\uCE20\uB97C \uB9CC\uB4ED\uB2C8\uB2E4")), /*#__PURE__*/React.createElement(RevealFx, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px auto 0',
      fontSize: 'clamp(15px,1.6vw,18px)',
      color: 'var(--ink-soft)',
      maxWidth: '44ch',
      lineHeight: 1.7,
      fontFamily: 'var(--font-body)'
    }
  }, "\uCF58\uD150\uCE20\xB7\uC601\uC0C1\xB7UI\xB7AI\uB97C \uB118\uB098\uB4DC\uB294 \uD06C\uB9AC\uC5D0\uC774\uD130.", /*#__PURE__*/React.createElement("br", null), "\uD0C0\uAE43\uACFC \uD50C\uB7AB\uD3FC\uC744 \uBA3C\uC800 \uC77D\uACE0, \uBA54\uC2DC\uC9C0\uAC00 \uB05D\uAE4C\uC9C0 \uC77D\uD788\uB294 \uD3EC\uB9F7\uC73C\uB85C \uC124\uACC4\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement(RevealFx, {
    delay: 180
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('work')
  }, "\uC791\uC5C5 \uBCF4\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('contact')
  }, "\uC5F0\uB77D\uD558\uAE30"))), /*#__PURE__*/React.createElement(RevealFx, {
    delay: 260
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "Scroll"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      color: 'var(--accent)',
      animation: reduced ? 'none' : 'nudge 1.8s var(--ease) infinite'
    }
  }, "\u2193"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Manifesto.jsx
try { (() => {
// Manifesto — Apple-style scroll-highlight statement: words ink up
// one by one as the section crosses the viewport. Centered, big.
function Manifesto() {
  const text = '타깃을 먼저 읽고, 포맷을 짭니다. 도구는 빠르게 갈아 끼우고, 메시지는 끝까지 읽히게 만듭니다.';
  const words = text.split(' ');
  const ref = React.useRef(null);
  const [prog, setProg] = React.useState(0);
  const reduced = window.useReducedMotion();
  React.useEffect(() => {
    if (reduced) {
      setProg(1);
      return;
    }
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when section top hits 85% of viewport, 1 when it reaches 30%
      const p = (vh * 0.85 - r.top) / (vh * 0.55);
      setProg(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduced]);
  const lit = Math.floor(prog * words.length + 0.001);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      maxWidth: 780,
      margin: '0 auto',
      padding: '120px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(26px,4vw,44px)',
      lineHeight: 1.35,
      letterSpacing: '-0.02em',
      margin: 0,
      textWrap: 'balance'
    }
  }, words.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: i < lit ? 'var(--ink)' : 'var(--line-strong)',
      transition: 'color .35s var(--ease)'
    }
  }, w, ' '))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, "\u2014 \uC774\uD0DC\uD604\uC758 \uC6D0\uCE59"));
}
window.Manifesto = Manifesto;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Manifesto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
// Nav — fixed top bar for the portfolio site. Uses label type + hairline.
function Nav({
  active,
  onNav
}) {
  const items = [['work', 'Work'], ['about', 'About'], ['contact', 'Contact']];
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 60,
      background: 'rgba(253,253,252,.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '0 40px',
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav('work'),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--ink)',
      cursor: 'pointer',
      letterSpacing: '-0.01em'
    }
  }, "\uC774\uD0DC\uD604 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\xB7 PF")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => onNav(id),
    onMouseEnter: () => setHover(id),
    onMouseLeave: () => setHover(null),
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      color: active === id || hover === id ? 'var(--accent)' : 'var(--ink-soft)',
      transition: 'color var(--dur-base)'
    }
  }, label)))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/StatsBand.jsx
try { (() => {
// StatsBand — full-bleed ink band; centered stats count up on scroll into view.
function StatsBand() {
  const stats = [{
    to: 12,
    unit: '편',
    label: '참여 영상'
  }, {
    to: 6,
    unit: '+',
    label: '공모전 수상'
  }, {
    to: 504,
    unit: '장',
    label: 'AI 생성 이미지'
  }, {
    to: 2,
    unit: '년',
    label: 'SNS 운영'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      borderRadius: 'var(--radius-card)',
      margin: '0 auto',
      maxWidth: 'var(--maxw)',
      width: 'calc(100% - 80px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '52px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
      gap: 28,
      textAlign: 'center'
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(RevealFx, {
    key: s.label,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(38px,4.5vw,56px)',
      letterSpacing: '-0.02em',
      color: '#fff',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    to: s.to
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.42em',
      color: 'var(--accent-bright)',
      marginLeft: 4,
      fontWeight: 600
    }
  }, s.unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#8A8B95'
    }
  }, s.label)))));
}
window.StatsBand = StatsBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/StatsBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkDetail.jsx
try { (() => {
// WorkDetail — 프로젝트 상세: 왼쪽 고정(sticky) 대표 카드 + 진행 스탯,
// 오른쪽 스크롤 정보 컬럼 (Apple 구매 페이지식 레이아웃).
function WorkDetail({
  work,
  onBack
}) {
  const {
    Chip,
    Card,
    Eyebrow,
    Button
  } = window.DesignSystem_b5391f;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '36px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 0',
      display: 'inline-flex',
      gap: 8
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--accent)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--ink-soft)';
    }
  }, "\u2190 \uC791\uC5C5 \uBAA9\uB85D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 52,
      alignItems: 'start',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 88,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "media",
    interactive: false,
    style: {
      minHeight: 380,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '34px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#C9CAFF'
    }
  }, work.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(28px,3.2vw,40px)',
      letterSpacing: '-0.02em',
      color: '#fff',
      marginTop: 14,
      lineHeight: 1.1
    }
  }, work.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: '#DCDDFF',
      lineHeight: 1.7,
      marginTop: 14,
      maxWidth: '38ch'
    }
  }, work.summary)), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-end',
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 10,
      whiteSpace: 'nowrap',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)',
      border: '1px dashed rgba(255,255,255,.3)',
      borderRadius: 'var(--radius-chip)',
      padding: '10px 16px'
    }
  }, "\uB300\uD45C \uC774\uBBF8\uC9C0 \uC790\uB9AC")), /*#__PURE__*/React.createElement(Card, {
    surface: "accent",
    interactive: false,
    style: {
      padding: '22px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, work.stats.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '11px 0',
      borderBottom: i < work.stats.length - 1 ? '1px solid rgba(255,255,255,.18)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#C9CAFF'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: '#fff',
      letterSpacing: '-0.01em'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RevealFx, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "solid"
  }, work.cat), work.tools.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    variant: "tint"
  }, t)))), /*#__PURE__*/React.createElement(RevealFx, {
    delay: 60
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--ink-2)',
      lineHeight: 1.75,
      marginTop: 24,
      marginBottom: 0
    }
  }, work.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-faint)',
      marginTop: 10
    }
  }, work.meta)), work.sections.map((s, i) => /*#__PURE__*/React.createElement(RevealFx, {
    key: s.h,
    delay: 120 + i * 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      marginTop: 30,
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 21,
      letterSpacing: '-0.015em',
      color: 'var(--ink)',
      margin: 0
    }
  }, s.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--ink-soft)',
      lineHeight: 1.75,
      marginTop: 12,
      marginBottom: 0
    }
  }, s.p)))), /*#__PURE__*/React.createElement(RevealFx, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      marginTop: 30,
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 21,
      letterSpacing: '-0.015em',
      color: 'var(--ink)',
      margin: 0
    }
  }, "Link"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginTop: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "\uD504\uB85C\uC81D\uD2B8 \uB9C1\uD06C"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-faint)'
    }
  }, "\uC2E4\uC81C \uB9C1\uD06C\xB7QR\uC744 \uC8FC\uC2DC\uBA74 \uC5F0\uACB0\uD569\uB2C8\uB2E4.")))))));
}
window.WorkDetail = WorkDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkGrid.jsx
try { (() => {
// WorkGrid — selected-work gallery: filter chips + pointer-tilt media cards,
// staggered scroll reveal. Left-aligned editorial grid (contrast to the centered hero).
function TiltWrap({
  children,
  onOpen
}) {
  const ref = React.useRef(null);
  const down = React.useRef(null);
  const [t, setT] = React.useState({
    rx: 0,
    ry: 0
  });
  const reduced = window.useReducedMotion();
  const onMove = e => {
    if (reduced) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({
      rx: -py * 7,
      ry: px * 7
    });
  };
  // pointerdown/up on the STATIC outer layer — the inner tilt transform
  // can shift mousedown/mouseup targets apart and swallow native clicks.
  const onDown = e => {
    down.current = {
      x: e.clientX,
      y: e.clientY
    };
  };
  const onUp = e => {
    const d = down.current;
    down.current = null;
    if (d && Math.abs(e.clientX - d.x) < 8 && Math.abs(e.clientY - d.y) < 8) onOpen();
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseMove: onMove,
    onMouseLeave: () => {
      setT({
        rx: 0,
        ry: 0
      });
      down.current = null;
    },
    onPointerDown: onDown,
    onPointerUp: onUp,
    role: "button",
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpen();
      }
    },
    style: {
      perspective: 700,
      transformStyle: 'preserve-3d',
      cursor: 'pointer',
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
      transition: 'transform .35s var(--ease)',
      height: '100%'
    }
  }, children));
}
function WorkGrid({
  onOpen
}) {
  const {
    SectionHeader,
    Chip,
    Card
  } = window.DesignSystem_b5391f;
  const filters = ['전체', 'Video', 'UI', 'AI'];
  const [filter, setFilter] = React.useState('전체');
  const works = window.WORKS;
  const shown = works.filter(w => filter === '전체' || w.cat === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '96px 40px 56px'
    }
  }, /*#__PURE__*/React.createElement(RevealFx, null, /*#__PURE__*/React.createElement(SectionHeader, {
    index: "01",
    kicker: "Selected Work",
    title: "\uC791\uC5C5",
    note: "\uC601\uC0C1\xB7UI\xB7AI\uB97C \uC624\uAC00\uBA70 \uB9CC\uB4E0 \uB300\uD45C \uC791\uC5C5\uC785\uB2C8\uB2E4. \uAC15\uC870\uB294 \uC0C9 \uD14D\uC2A4\uD2B8\uAC00 \uC544\uB2C8\uB77C \uCE74\uB4DC \uC11C\uD398\uC774\uC2A4\uB85C."
  })), /*#__PURE__*/React.createElement(RevealFx, {
    delay: 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    variant: filter === f ? 'solid' : 'outline',
    onClick: () => setFilter(f)
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
      gap: 18
    }
  }, shown.map((w, i) => /*#__PURE__*/React.createElement(RevealFx, {
    key: w.title,
    delay: i % 3 * 60
  }, /*#__PURE__*/React.createElement(TiltWrap, {
    onOpen: () => onOpen(w)
  }, /*#__PURE__*/React.createElement(Card, {
    surface: i % 5 === 2 ? 'ink' : 'media',
    style: {
      minHeight: 220,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#C9CAFF'
    }
  }, w.cat), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 21,
      letterSpacing: '-0.01em',
      color: '#fff'
    }
  }, w.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      marginTop: 6,
      color: '#DCDDFF',
      lineHeight: 1.5
    }
  }, w.meta), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.55)',
      marginTop: 10
    }
  }, "\uC790\uC138\uD788 \uBCF4\uAE30 \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 14
    }
  }, w.tools.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.04em',
      padding: '5px 10px',
      borderRadius: 'var(--radius-chip)',
      whiteSpace: 'nowrap',
      border: '1px solid rgba(255,255,255,.25)',
      color: '#fff'
    }
  }, t))))))))));
}
window.WorkGrid = WorkGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

})();
