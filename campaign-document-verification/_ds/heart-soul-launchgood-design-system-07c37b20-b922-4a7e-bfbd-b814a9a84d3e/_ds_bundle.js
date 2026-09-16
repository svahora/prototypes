/* @ds-bundle: {"format":3,"namespace":"LaunchGoodDesignSystem_07c37b","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"CampaignCard","sourcePath":"components/campaign/CampaignCard.jsx"},{"name":"CampaignTile","sourcePath":"components/campaign/CampaignTile.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"ProgressBar","sourcePath":"components/data-display/ProgressBar.jsx"},{"name":"InlineBanner","sourcePath":"components/feedback/InlineBanner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/Icon.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"2a017065c31f","components/campaign/CampaignCard.jsx":"7f1125671f93","components/campaign/CampaignTile.jsx":"5c8dbeb39c8e","components/data-display/Avatar.jsx":"93f330401673","components/data-display/Badge.jsx":"dc89f6ac34c4","components/data-display/ProgressBar.jsx":"a249cfe4a624","components/feedback/InlineBanner.jsx":"099646e3b05f","components/feedback/Toast.jsx":"9fe3112c2893","components/forms/Checkbox.jsx":"a39c339dcadf","components/forms/Input.jsx":"574f3d96ef6a","components/forms/Switch.jsx":"10878b54b40c","components/icons/Icon.jsx":"e7842b57c3df","components/navigation/Tabs.jsx":"a976c71164d7","ui_kits/launchgood-com/DiscoverFilters.jsx":"86be0846cee3","ui_kits/launchgood-com/Footer.jsx":"5b6bcf9fe900","ui_kits/launchgood-com/Header.jsx":"19a5be348a0d","ui_kits/launchgood-com/Hero.jsx":"c731b3f45e9a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LaunchGoodDesignSystem_07c37b = window.LaunchGoodDesignSystem_07c37b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LaunchGood Button — the signature pill (fully rounded).
 * Variants: primary (dark ink), brand (green — limited, affirmative use),
 * secondary (outlined), tertiary (text only), danger.
 */
const VARIANTS = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-sm)',
    '--hover-bg': 'var(--action-primary-bg-hover)'
  },
  brand: {
    background: 'var(--action-brand-bg)',
    color: 'var(--action-brand-fg)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-sm)',
    '--hover-bg': 'var(--action-brand-bg-hover)'
  },
  secondary: {
    background: 'var(--neutral-0)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)',
    boxShadow: 'var(--shadow-xs)',
    '--hover-bg': 'var(--neutral-50)'
  },
  tertiary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent',
    boxShadow: 'none',
    '--hover-bg': 'var(--neutral-100)'
  },
  danger: {
    background: 'var(--red-700)',
    color: '#fff',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-sm)',
    '--hover-bg': 'var(--red-800)'
  }
};
const SIZES = {
  xs: {
    fontSize: 12,
    lineHeight: '16px',
    padding: '4px 16px',
    gap: 4
  },
  base: {
    fontSize: 14,
    lineHeight: '20px',
    padding: '8px 20px',
    gap: 6
  },
  lg: {
    fontSize: 16,
    lineHeight: '24px',
    padding: '10px 24px',
    gap: 8
  },
  xl: {
    fontSize: 18,
    lineHeight: '24px',
    padding: '14px 28px',
    gap: 8
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'base',
  leadingIcon = null,
  trailingIcon = null,
  fullWidth = false,
  disabled = false,
  className = '',
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.base;
  const [hover, setHover] = React.useState(false);
  const {
    '--hover-bg': hoverBg,
    ...vStyle
  } = v;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: className,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: s.lineHeight,
      padding: s.padding,
      gap: s.gap,
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      transition: 'background var(--duration-fast) var(--ease-standard), opacity var(--duration-fast)',
      opacity: disabled ? 0.45 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...vStyle,
      background: hover && !disabled && hoverBg ? hoverBg : vStyle.background,
      ...style
    }
  }, rest), leadingIcon, children != null && /*#__PURE__*/React.createElement("span", null, children), trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
/**
 * Avatar — a circular cover image, per the Heart & Soul "Avatar" component
 * (Default & Organization are both round, image-filled). When no image is
 * supplied it falls back to a neutral placeholder with a muted user glyph —
 * not a colored initial.
 */
const SIZES = {
  xs: 20,
  sm: 24,
  base: 32,
  lg: 40,
  xl: 56
};

// Heroicons solid `user` — inlined so the fallback needs no network.
const USER_PATH = 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-3.31 0-9 1.67-9 5v1h18v-1c0-3.33-5.69-5-9-5Z';
function Avatar({
  src,
  alt = '',
  size = 'base',
  ring = false,
  className = '',
  style = {}
}) {
  const px = SIZES[size] || (typeof size === 'number' ? size : 32);
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      width: px,
      height: px,
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--neutral-200)',
      color: 'var(--neutral-400)',
      flex: 'none',
      boxShadow: ring ? '0 0 0 2px var(--neutral-0)' : 'none',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("svg", {
    width: Math.round(px * 0.62),
    height: Math.round(px * 0.62),
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: USER_PATH
  })));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
/** Badge — small pill label for status & metadata. Mirrors rebuild's Badge. */
const COLORS = {
  neutral: {
    bg: 'transparent',
    text: 'var(--neutral-900)',
    dot: 'var(--neutral-900)',
    border: 'rgba(64,64,64,0.1)'
  },
  inverse: {
    bg: 'var(--neutral-900)',
    text: '#fff',
    dot: '#fff',
    border: 'rgba(64,64,64,0.1)'
  },
  green: {
    bg: 'var(--green-50)',
    text: 'var(--green-700)',
    dot: 'var(--green-700)',
    border: 'rgba(21,128,61,0.1)'
  },
  red: {
    bg: 'var(--red-50)',
    text: 'var(--red-700)',
    dot: 'var(--red-700)',
    border: 'rgba(185,28,28,0.1)'
  },
  yellow: {
    bg: 'var(--yellow-50)',
    text: 'var(--yellow-800)',
    dot: 'var(--yellow-700)',
    border: 'rgba(161,98,7,0.1)'
  },
  blue: {
    bg: 'var(--blue-50)',
    text: 'var(--blue-700)',
    dot: 'var(--blue-700)',
    border: 'rgba(29,78,216,0.1)'
  },
  indigo: {
    bg: 'var(--indigo-50)',
    text: 'var(--indigo-700)',
    dot: 'var(--indigo-700)',
    border: 'rgba(67,56,202,0.1)'
  },
  purple: {
    bg: 'var(--purple-50)',
    text: 'var(--purple-700)',
    dot: 'var(--purple-700)',
    border: 'rgba(126,34,206,0.1)'
  },
  pink: {
    bg: 'var(--pink-50)',
    text: 'var(--pink-800)',
    dot: 'var(--pink-800)',
    border: 'rgba(157,23,77,0.1)'
  }
};
function Badge({
  label,
  children,
  color = 'neutral',
  type = 'simple',
  className = '',
  style = {}
}) {
  const c = COLORS[color] || COLORS.neutral;
  const content = label != null ? label : children;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: type === 'with-dot' ? 6 : 0,
      minWidth: 24,
      padding: '4px 8px',
      borderRadius: 'var(--radius-full)',
      border: `1px solid ${c.border}`,
      background: c.bg,
      color: c.text,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      ...style
    }
  }, type === 'with-dot' && /*#__PURE__*/React.createElement("svg", {
    width: "6",
    height: "6",
    viewBox: "0 0 6 6",
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "3",
    fill: c.dot
  })), /*#__PURE__*/React.createElement("span", null, content));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ProgressBar.jsx
try { (() => {
/** ProgressBar — thin green fundraising progress track. */
function ProgressBar({
  value = 0,
  height = 4,
  color = 'var(--brand-500)',
  track = 'var(--neutral-200)',
  className = '',
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: {
      width: '100%',
      height,
      background: track,
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: color,
      borderRadius: 'var(--radius-full)',
      transition: 'width var(--duration-base) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox — square check control. Checked = brand green fill. */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  className = '',
  style = {}
}) {
  const boxId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: boxId,
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: boxId,
    type: "button",
    role: "checkbox",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      border: checked ? '1px solid var(--brand-500)' : '1px solid var(--border-default)',
      background: checked ? 'var(--brand-500)' : 'var(--neutral-0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      transition: 'background var(--duration-fast), border-color var(--duration-fast)',
      cursor: 'inherit',
      padding: 0
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m4.5 12.75 6 6 9-13.5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Input — labelled text field with optional leading icon, hint & error. */
function Input({
  label,
  hint,
  error,
  leadingIcon = null,
  trailingIcon = null,
  id,
  disabled = false,
  className = '',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--red-700)' : focus ? 'var(--brand-500)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 12px',
      height: 40,
      background: disabled ? 'var(--neutral-100)' : 'var(--neutral-0)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: focus && !error ? '0 0 0 3px rgba(74,165,103,0.15)' : 'none',
      transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      display: 'flex'
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)',
      minWidth: 0
    }
  }, rest)), trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      display: 'flex'
    }
  }, trailingIcon)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: error ? 'var(--red-700)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Switch — pill toggle. On = brand green. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  className = '',
  style = {}
}) {
  const switchId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: switchId,
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 44,
      height: 24,
      padding: 2,
      borderRadius: 'var(--radius-full)',
      border: 'none',
      background: checked ? 'var(--brand-500)' : 'var(--neutral-300)',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      display: 'flex',
      justifyContent: checked ? 'flex-end' : 'flex-start',
      alignItems: 'center',
      cursor: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-full)',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform var(--duration-fast) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LaunchGood Icon — Heroicons v2 (the full set), fetched on demand from the
 * Iconify API and inlined as a real <svg> (light DOM, so it renders in every
 * context — live, print, and screenshot thumbnails alike). Outline is the
 * default; append `-solid`, `-20-solid` or `-16-solid` for the filled / mini
 * / micro variants. Color follows `currentColor`; size sets width & height.
 */

// Friendly aliases → canonical Heroicons names. Any real Heroicons name also
// passes through unchanged.
const ALIASES = {
  close: 'x-mark',
  search: 'magnifying-glass',
  share: 'paper-airplane',
  warning: 'exclamation-triangle',
  info: 'information-circle',
  shield: 'shield-check',
  menu: 'bars-3',
  globe: 'globe-alt',
  settings: 'cog-6-tooth',
  edit: 'pencil-square',
  trash: 'trash',
  external: 'arrow-top-right-on-square'
};
const API = 'https://api.iconify.design';
const cache = new Map(); // resolvedName -> { viewBox, body } | 'error'
const pending = new Map(); // resolvedName -> Promise

function parseSvg(text) {
  const vb = (text.match(/viewBox="([^"]+)"/) || [, '0 0 24 24'])[1];
  const body = text.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
  return {
    viewBox: vb,
    body
  };
}
function loadOne(resolved) {
  if (cache.has(resolved)) return Promise.resolve(cache.get(resolved));
  if (pending.has(resolved)) return pending.get(resolved);
  const p = fetch(`${API}/heroicons/${resolved}.svg`).then(r => r.ok ? r.text() : Promise.reject(new Error('not found'))).then(text => {
    const data = parseSvg(text);
    cache.set(resolved, data);
    return data;
  }).catch(() => {
    cache.set(resolved, 'error');
    return 'error';
  });
  pending.set(resolved, p);
  return p;
}

/**
 * Batch-warm the cache for many icons in a few requests (uses the Iconify
 * JSON endpoint). Resolves when done. Attached as `Icon.preload`.
 */
async function preload(names) {
  const need = Array.from(new Set(names.map(n => ALIASES[n] || n))).filter(n => !cache.has(n));
  const CHUNK = 80;
  for (let i = 0; i < need.length; i += CHUNK) {
    const slice = need.slice(i, i + CHUNK);
    try {
      const data = await fetch(`${API}/heroicons.json?icons=${slice.join(',')}`).then(r => r.json());
      const dw = data.width || 24;
      const dh = data.height || 24;
      for (const [nm, ic] of Object.entries(data.icons || {})) {
        cache.set(nm, {
          viewBox: `0 0 ${ic.width || dw} ${ic.height || dh}`,
          body: ic.body
        });
      }
      for (const nm of slice) if (!cache.has(nm)) cache.set(nm, 'error');
    } catch (e) {
      /* leave uncached; per-icon fetch will retry */
    }
  }
}
function Icon({
  name,
  size = 20,
  className = '',
  style = {},
  ...rest
}) {
  if (!name) return null;
  const resolved = ALIASES[name] || name;
  const [data, setData] = React.useState(() => cache.get(resolved) || null);
  React.useEffect(() => {
    let alive = true;
    const cached = cache.get(resolved);
    if (cached) {
      setData(cached);
      return;
    }
    setData(null);
    loadOne(resolved).then(d => {
      if (alive) setData(d);
    });
    return () => {
      alive = false;
    };
  }, [resolved]);
  const ready = data && data !== 'error';
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: ready ? data.viewBox : '0 0 24 24',
    className: className,
    style: {
      display: 'inline-block',
      flex: 'none',
      verticalAlign: '-0.125em',
      ...style
    },
    "aria-hidden": "true"
  }, rest, {
    dangerouslySetInnerHTML: ready ? {
      __html: data.body
    } : undefined
  }));
}
Icon.preload = preload;

/** A curated set of the most-used glyphs (the full Heroicons set is available by name). */
const ICON_NAMES = ['heart', 'heart-solid', 'bookmark', 'bookmark-solid', 'share', 'search', 'close', 'chevron-left', 'chevron-right', 'chevron-down', 'chevron-up', 'arrow-right', 'arrow-left', 'check', 'check-circle', 'x-circle', 'warning', 'info', 'plus', 'minus', 'bell', 'user', 'users', 'shield', 'sparkles', 'globe', 'calendar', 'menu', 'gift', 'hand-raised', 'flag', 'map-pin', 'clock', 'cog-6-tooth', 'pencil-square', 'trash'];
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/campaign/CampaignCard.jsx
try { (() => {
/**
 * CampaignCard (vertical) — the signature LaunchGood product card.
 * Image → organizer → title → funded/days → progress → raised + Donate →
 * action row (save / bookmark / share) with optional Zakat-verified mark.
 */
function CampaignCard({
  image,
  orgName,
  orgAvatar,
  title,
  raised,
  goal,
  fundedPercentage,
  donors,
  daysLeft,
  zakatVerified = false,
  onDonate,
  className = '',
  style = {}
}) {
  const [saved, setSaved] = React.useState(false);
  const meta = [];
  if (donors != null) meta.push(`${donors} donors`);
  if (daysLeft != null) meta.push(`${daysLeft} days left`);
  return /*#__PURE__*/React.createElement("article", {
    className: className,
    style: {
      width: 320,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '16 / 10',
      background: 'var(--neutral-100)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: orgAvatar,
    alt: orgName,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, orgName)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '22px',
      color: 'var(--text-primary)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      minHeight: 44,
      margin: 0,
      letterSpacing: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, meta.join(' · ')), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: fundedPercentage,
    height: 4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, raised), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "funded of ", goal)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "brand",
    size: "base",
    onClick: onDonate
  }, "Donate")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Save",
    onClick: () => setSaved(s => !s),
    style: iconBtn(saved)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: saved ? 'heart-solid' : 'heart',
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Bookmark",
    style: iconBtn(false)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bookmark",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Share",
    style: iconBtn(false)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "share",
    size: 20
  }))), zakatVerified && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--brand-600)'
    }
  }, "Zakat-verified", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shield",
    size: 18
  }))));
}
function iconBtn(active) {
  return {
    background: 'none',
    border: 'none',
    padding: 0,
    display: 'flex',
    cursor: 'pointer',
    color: active ? 'var(--brand-500)' : 'var(--text-secondary)',
    transition: 'color var(--duration-fast)'
  };
}
Object.assign(__ds_scope, { CampaignCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/campaign/CampaignCard.jsx", error: String((e && e.message) || e) }); }

// components/campaign/CampaignTile.jsx
try { (() => {
/**
 * CampaignTile (horizontal) — the discover/list campaign card used across
 * LaunchGood's discover, category and "trending" lists. Square cover image on
 * the left, stacked content on the right: organizer → title → "% funded · days
 * left" → progress → action row, with a Donate pill anchored bottom-right.
 *
 * Faithful to rebuild `src/components/CampaignCard/CampaignTile.tsx`
 * (`flex gap-4 h-40`, 160px image, `text-xs text-neutral-600` meta leading
 * with funded percentage, `h-1` progress track).
 */
function CampaignTile({
  image,
  orgName,
  orgAvatar,
  title,
  fundedPercentage = 0,
  daysLeft,
  zakatVerified = false,
  onDonate,
  className = '',
  style = {}
}) {
  const [saved, setSaved] = React.useState(false);
  let meta = `${fundedPercentage}% funded`;
  if (daysLeft != null && daysLeft > 0) {
    meta += ` · ${daysLeft} day${daysLeft === 1 ? '' : 's'} left`;
  }
  return /*#__PURE__*/React.createElement("section", {
    className: className,
    style: {
      display: 'flex',
      gap: 16,
      background: 'var(--surface-card)',
      fontFamily: 'var(--font-sans)',
      height: 160,
      maxWidth: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      height: '100%',
      flex: 'none',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--neutral-100)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flexGrow: 1,
      height: '100%',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: orgAvatar,
    alt: orgName,
    size: "sm"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      margin: 0,
      fontWeight: 400,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, orgName)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '22px',
      color: 'var(--text-primary)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      minHeight: 44,
      margin: 0,
      letterSpacing: 0
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-end',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flexGrow: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      margin: '0 0 6px'
    }
  }, meta), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: fundedPercentage,
    height: 4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Save",
    onClick: () => setSaved(s => !s),
    style: tileIconBtn(saved)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: saved ? 'heart-solid' : 'heart',
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Share",
    style: tileIconBtn(false)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "share",
    size: 20
  })), zakatVerified && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--brand-600)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shield",
    size: 16
  }), "Zakat-verified"))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "brand",
    size: "base",
    onClick: onDonate,
    style: {
      flex: 'none'
    }
  }, "Donate"))));
}
function tileIconBtn(active) {
  return {
    background: 'none',
    border: 'none',
    padding: 0,
    display: 'flex',
    cursor: 'pointer',
    color: active ? 'var(--brand-500)' : 'var(--text-secondary)',
    transition: 'color var(--duration-fast)'
  };
}
Object.assign(__ds_scope, { CampaignTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/campaign/CampaignTile.jsx", error: String((e && e.message) || e) }); }

// components/feedback/InlineBanner.jsx
try { (() => {
/** InlineBanner — contextual message block (info / success / warning / error). */
const TONES = {
  neutral: {
    bg: 'var(--neutral-50)',
    border: 'var(--neutral-200)',
    icon: 'info',
    iconColor: 'var(--neutral-600)'
  },
  info: {
    bg: 'var(--blue-50)',
    border: 'rgba(29,78,216,0.15)',
    icon: 'info',
    iconColor: 'var(--blue-700)'
  },
  success: {
    bg: 'var(--green-50)',
    border: 'rgba(21,128,61,0.15)',
    icon: 'check-circle',
    iconColor: 'var(--green-700)'
  },
  warning: {
    bg: 'var(--yellow-50)',
    border: 'rgba(161,98,7,0.15)',
    icon: 'warning',
    iconColor: 'var(--yellow-800)'
  },
  error: {
    bg: 'var(--red-50)',
    border: 'rgba(185,28,28,0.15)',
    icon: 'warning',
    iconColor: 'var(--red-700)'
  }
};
function InlineBanner({
  tone = 'info',
  title,
  children,
  onDismiss,
  action,
  className = '',
  style = {}
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      gap: 12,
      padding: '12px 14px',
      background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-lg)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.iconColor,
      display: 'flex',
      flex: 'none',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: title ? 2 : 0,
      lineHeight: '20px'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-tertiary)',
      display: 'flex',
      flex: 'none',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 18
  })));
}
Object.assign(__ds_scope, { InlineBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/InlineBanner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/** Toast — floating notification card with status icon. */
const TONES = {
  neutral: {
    icon: 'info',
    color: 'var(--neutral-700)'
  },
  success: {
    icon: 'check-circle',
    color: 'var(--green-700)'
  },
  warning: {
    icon: 'warning',
    color: 'var(--yellow-800)'
  },
  error: {
    icon: 'warning',
    color: 'var(--red-700)'
  }
};
function Toast({
  tone = 'success',
  title,
  children,
  onDismiss,
  className = '',
  style = {}
}) {
  const t = TONES[tone] || TONES.success;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 360,
      maxWidth: '100%',
      padding: '14px 16px',
      background: 'var(--neutral-0)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      display: 'flex',
      flex: 'none',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: title ? 2 : 0,
      lineHeight: '18px'
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-tertiary)',
      display: 'flex',
      flex: 'none',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 18
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Tabs — underline-style tab bar. */
function Tabs({
  tabs = [],
  value,
  onChange,
  className = '',
  style = {}
}) {
  const [internal, setInternal] = React.useState(tabs[0]?.id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map(tab => {
    const isActive = tab.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      type: "button",
      onClick: () => select(tab.id),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '10px 12px',
        border: 'none',
        background: 'none',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 600,
        color: isActive ? 'var(--text-primary)' : 'var(--text-tertiary)',
        boxShadow: isActive ? 'inset 0 -2px 0 0 var(--neutral-900)' : 'none',
        transition: 'color var(--duration-fast)'
      }
    }, tab.label, tab.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        padding: '1px 7px',
        borderRadius: 'var(--radius-full)',
        background: isActive ? 'var(--neutral-900)' : 'var(--neutral-100)',
        color: isActive ? '#fff' : 'var(--text-secondary)'
      }
    }, tab.badge));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launchgood-com/DiscoverFilters.jsx
try { (() => {
/* global React */
// LaunchGood discover filter bar (from filters/DiscoverFilters.tsx) — a row of
// white pill filter buttons (Categories / Location of impact / Registered charity
// / More), each with a chevron and a brand-green active state, plus a
// Zakat-verified toggle on the right.
const {
  Switch,
  Icon
} = window.LaunchGoodDesignSystem_07c37b;
const FILTERS = ['Categories', 'Location of impact', 'Registered charity', 'More'];
function FilterPill({
  label,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const tinted = active || hover;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 20px',
      borderRadius: 'var(--radius-full)',
      fontSize: 16,
      fontWeight: 600,
      fontFamily: 'var(--font-sans)',
      background: active ? 'var(--brand-50)' : 'var(--neutral-0)',
      color: tinted ? 'var(--brand-600)' : 'var(--text-primary)',
      boxShadow: 'var(--shadow-sm)',
      border: 'none',
      outline: active ? '2px solid var(--brand-600)' : '1px solid var(--neutral-400)',
      cursor: 'pointer',
      transition: 'color var(--duration-fast), background var(--duration-fast)'
    }
  }, label, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      transition: 'transform var(--duration-fast)',
      transform: active ? 'rotate(180deg)' : 'none'
    }
  }));
}
function DiscoverFilters({
  zakatVerified,
  onZakat
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(FilterPill, {
    key: f,
    label: f,
    active: open === f,
    onClick: () => setOpen(o => o === f ? null : f)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 20,
    style: {
      color: 'var(--brand-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--brand-600)',
      fontWeight: 600
    }
  }, "Zakat-verified"), /*#__PURE__*/React.createElement(Switch, {
    checked: zakatVerified,
    onChange: onZakat
  })));
}
window.LGDiscoverFilters = DiscoverFilters;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launchgood-com/DiscoverFilters.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launchgood-com/Footer.jsx
try { (() => {
/* global React */
// LaunchGood sitewide footer (RebuildFooter recreation) — wordmark, link columns,
// all-time stats, Discover/Fundraise actions, currency line, newsletter sign-up,
// social links, and the legal + Hijri-date row. Light neutral-100 surface.
const {
  Button,
  Input,
  Icon
} = window.LaunchGoodDesignSystem_07c37b;
const SECTIONS = [{
  name: 'Fundraise',
  links: ['Start a campaign', 'Fundraising tips', 'Pricing — 0% fees', 'Charities & nonprofits', 'Masjids']
}, {
  name: 'Discover',
  links: ['Emergency relief', 'Orphans', 'Clean water', 'Education', 'Zakat']
}, {
  name: 'Company',
  links: ['About us', 'Careers', 'Blog', 'Press', 'Contact us']
}, {
  name: 'Support',
  links: ['Help center', 'Trust & safety', 'How it works', 'Donor protection']
}];
const STATS = [['2.1M', 'Donors'], ['120K', 'Campaigns'], ['$697M', 'Funded'], ['156', 'Countries']];
function Footer() {
  const [email, setEmail] = React.useState('');
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--neutral-100)',
      color: 'var(--neutral-900)',
      borderTop: '1px solid var(--neutral-0)',
      padding: '48px 32px',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      columnGap: 24,
      rowGap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/launchgood_logo_primary_black.svg",
    alt: "LaunchGood",
    style: {
      height: 30,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 8',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, SECTIONS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, s.name), s.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 15,
      color: 'var(--neutral-500)',
      textDecoration: 'none'
    }
  }, l, l === 'Careers' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic'
    }
  }, " (We\u2019re hiring!)")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 4',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'space-around',
      marginBottom: 8
    }
  }, STATS.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-tight)',
      marginBottom: 4
    }
  }, n), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "base",
    fullWidth: true
  }, "Discover"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "base",
    fullWidth: true
  }, "Fundraise"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--neutral-500)',
      marginTop: 4
    }
  }, "0% platform fee!"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      marginTop: 4,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 500,
      color: 'var(--neutral-900)',
      fontSize: 15
    }
  }, "Experience LaunchGood in the currency of your choice!"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: currencyBtn
  }, "USD ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 16
  })))), /*#__PURE__*/React.createElement("hr", {
    style: {
      gridColumn: '1 / -1',
      border: 'none',
      borderTop: '1px solid var(--neutral-300)',
      margin: '32px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 4'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-tight)',
      marginBottom: 12
    }
  }, "Stay inspired"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "Your email",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "base"
  }, "Subscribe")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center',
      marginTop: 32
    }
  }, SOCIAL.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: "#",
    "aria-label": s.label,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: s.viewBox,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    dangerouslySetInnerHTML: {
      __html: s.body
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 8',
      alignSelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--neutral-500)',
      marginBottom: 4
    }
  }, "Built in this life, for the next."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--neutral-500)',
      marginBottom: 4
    }
  }, "\xA9 2026 LaunchGood"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--neutral-500)',
      display: 'flex',
      gap: 12,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Copyright"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Terms of use"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Privacy policy")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--neutral-500)'
    }
  }, "Today is 6 Dhul Hijjah 1447 AH (Monday, June 22, 2026)")))));
}
const currencyBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  background: 'var(--neutral-0)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-full)',
  padding: '6px 12px',
  fontSize: 14,
  fontWeight: 600,
  color: 'var(--text-primary)',
  cursor: 'pointer'
};

// Brand social marks lifted from RebuildFooter (fill neutral-400).
const SOCIAL = [{
  label: 'Instagram',
  viewBox: '0 0 32 33',
  body: '<path d="M22.467 0.333008H9.53297C4.27647 0.333008 0 4.60948 0 9.86598V22.8C0 28.0565 4.27647 32.333 9.53297 32.333H22.467C27.7235 32.333 32 28.0565 32 22.8V9.86598C31.9999 4.60948 27.7235 0.333008 22.467 0.333008ZM28.7808 22.8C28.7808 26.287 25.954 29.1138 22.467 29.1138H9.53297C6.046 29.1138 3.2192 26.287 3.2192 22.8V9.86598C3.2192 6.37895 6.046 3.55221 9.53297 3.55221H22.467C25.954 3.55221 28.7808 6.37895 28.7808 9.86598V22.8Z" fill="#A3A3A3"/><path d="M16 8.05664C11.4364 8.05664 7.72363 11.7694 7.72363 16.3329C7.72363 20.8964 11.4364 24.6093 16 24.6093C20.5636 24.6093 24.2763 20.8965 24.2763 16.3329C24.2763 11.7693 20.5636 8.05664 16 8.05664ZM16 21.3901C13.207 21.3901 10.9428 19.126 10.9428 16.333C10.9428 13.54 13.207 11.2758 16 11.2758C18.793 11.2758 21.0571 13.54 21.0571 16.333C21.0571 19.1259 18.7929 21.3901 16 21.3901Z" fill="#A3A3A3"/><path d="M24.2923 10.1021C25.3875 10.1021 26.2754 9.2142 26.2754 8.11892C26.2754 7.02364 25.3875 6.13574 24.2923 6.13574C23.197 6.13574 22.3091 7.02364 22.3091 8.11892C22.3091 9.2142 23.197 10.1021 24.2923 10.1021Z" fill="#A3A3A3"/>'
}, {
  label: 'Facebook',
  viewBox: '0 0 32 33',
  body: '<path d="M32 16.3248C32 7.49719 24.8321 0.333008 16 0.333008C7.16787 0.333008 0 7.49719 0 16.3248C0 24.3124 5.84964 30.9331 13.5118 32.1189V20.9362H9.42533V16.3248H13.5118V12.8003C13.5118 8.79827 15.8847 6.5749 19.5427 6.5749C21.2894 6.5749 23.1019 6.90429 23.1019 6.90429V10.8075H21.0917C19.0978 10.8075 18.4717 12.0592 18.4717 13.3109V16.3083H22.9207L22.2122 20.9197H18.4717V32.1024C26.1504 30.9331 32 24.3124 32 16.3248Z" fill="#A3A3A3"/>'
}, {
  label: 'X',
  viewBox: '0 0 24 23',
  body: '<path d="M0.0585144 0.0634766L9.32465 12.4954L0 22.603H2.0986L10.2623 13.7536L16.8584 22.603H24L14.2125 9.47186L22.8918 0.0634766H20.7932L13.2748 8.2136L7.20014 0.0634766H0.0585144ZM3.14467 1.61458H6.42555L20.9134 21.0517H17.6325L3.14467 1.61458Z" fill="#A3A3A3"/>'
}, {
  label: 'LinkedIn',
  viewBox: '0 0 28 33',
  body: '<path d="M27.9935 28.0006V27.9994H28.0005V17.7304C28.0005 12.7067 26.919 8.83691 21.046 8.83691C18.2226 8.83691 16.328 10.3862 15.5545 11.8551H15.4728V9.30591H9.9043V27.9994H15.7026V18.7431C15.7026 16.3059 16.1646 13.9492 19.1828 13.9492C22.1566 13.9492 22.201 16.7306 22.201 18.8994V28.0006H27.9935Z" fill="#A3A3A3"/><path d="M0.460938 9.30664H6.26627V28.0001H0.460938V9.30664Z" fill="#A3A3A3"/><path d="M3.36233 0C1.50617 0 0 1.50617 0 3.36233C0 5.2185 1.50617 6.75617 3.36233 6.75617C5.2185 6.75617 6.72467 5.2185 6.72467 3.36233C6.7235 1.50617 5.21733 0 3.36233 0V0Z" fill="#A3A3A3"/>'
}];
window.LGFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launchgood-com/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launchgood-com/Header.jsx
try { (() => {
/* global React */
// LaunchGood sitewide header (SitewideHeaderV2 recreation) — black wordmark,
// "Start fundraising" outline pill, Zakat tracker chip, basket, hamburger menu.
// Transparent over the page; minimal — primary nav lives in the slide-out menu.
const {
  Icon
} = window.LaunchGoodDesignSystem_07c37b;
const NAV_LINKS = ['Discover', 'Start a campaign', 'Zakat', 'Ramadan', 'For charities', 'About us', 'Log in'];
function Header({
  onStart
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '28px 5% 16px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LaunchGood home",
    style: {
      display: 'flex',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/launchgood_logo_primary_black.svg",
    alt: "LaunchGood",
    style: {
      height: 30,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flex: 1,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onStart,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: hover ? 'var(--neutral-50)' : 'transparent',
      color: 'var(--neutral-900)',
      border: '1px solid var(--neutral-900)',
      borderRadius: 'var(--radius-full)',
      padding: '7px 20px',
      fontSize: 14,
      fontWeight: 600,
      fontFamily: 'var(--font-sans)',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, "Start fundraising"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Calculate your Zakat",
    style: zakatChip
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 18,
    style: {
      color: 'var(--brand-500)'
    }
  }), /*#__PURE__*/React.createElement("span", null, "Zakat")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Basket",
    style: iconAction
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Menu",
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(o => !o),
    style: iconAction
  }, /*#__PURE__*/React.createElement(Icon, {
    name: menuOpen ? 'close' : 'menu',
    size: 24
  })), menuOpen && /*#__PURE__*/React.createElement("nav", {
    style: menuPanel
  }, NAV_LINKS.map(label => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    style: menuLink
  }, label)))))));
}
const zakatChip = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  background: 'var(--brand-50)',
  color: 'var(--brand-700)',
  border: 'none',
  borderRadius: 'var(--radius-full)',
  padding: '7px 14px',
  fontSize: 14,
  fontWeight: 600,
  fontFamily: 'var(--font-sans)'
};
const iconAction = {
  background: 'none',
  border: 'none',
  padding: 0,
  display: 'flex',
  color: 'var(--neutral-900)',
  cursor: 'pointer'
};
const menuPanel = {
  position: 'absolute',
  top: 'calc(100% + 16px)',
  right: 0,
  minWidth: 220,
  background: 'var(--neutral-0)',
  borderRadius: 'var(--radius-2xl)',
  boxShadow: 'var(--shadow-xl)',
  border: '1px solid var(--border-subtle)',
  padding: 12,
  display: 'flex',
  flexDirection: 'column',
  zIndex: 50
};
const menuLink = {
  padding: '10px 12px',
  borderRadius: 'var(--radius-lg)',
  fontSize: 15,
  fontWeight: 600,
  color: 'var(--text-primary)',
  textDecoration: 'none'
};
window.LGHeader = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launchgood-com/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launchgood-com/Hero.jsx
try { (() => {
/* global React */
// LaunchGood discover hero (from discover-new/page.tsx) — soft radial gradient
// blobs, a centred "What you seek is seeking you." heading, a pill search input,
// and the Fundraisers / Organizations / Community pages tab row.
const {
  Icon
} = window.LaunchGoodDesignSystem_07c37b;
const TABS = ['Fundraisers', 'Organizations', 'Community pages'];
function Hero({
  tab,
  onTab,
  query,
  onQuery
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '40px 16px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: -1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 760,
      height: 760,
      left: '52%',
      top: -460,
      borderRadius: '50%',
      opacity: 0.6,
      background: 'radial-gradient(ellipse 50% 50% at 50% 50%, #FEFCE8 0%, rgba(254,252,232,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 720,
      height: 720,
      left: '8%',
      top: -420,
      borderRadius: '50%',
      opacity: 0.6,
      background: 'radial-gradient(ellipse 50% 50% at 50% 50%, #FCE7F3 0%, rgba(252,231,243,0) 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 768,
      margin: '0 auto',
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 48,
      lineHeight: '56px',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-snug)',
      color: 'var(--text-primary)'
    }
  }, "What you seek is seeking you."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 556,
      margin: '40px auto 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      color: 'var(--neutral-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: query,
    onChange: e => onQuery(e.target.value),
    placeholder: "Search for inspiring fundraisers",
    style: {
      width: '100%',
      padding: '14px 20px 14px 48px',
      fontSize: 16,
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)',
      background: 'var(--neutral-0)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-full)',
      boxShadow: 'var(--shadow-sm)',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 32,
      marginTop: 56
    }
  }, TABS.map(t => {
    const active = t === tab;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      role: "tab",
      "aria-selected": active,
      onClick: () => onTab(t),
      style: {
        background: 'none',
        border: 'none',
        padding: '0 0 10px',
        fontSize: 16,
        fontWeight: active ? 700 : 500,
        fontFamily: 'var(--font-sans)',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        borderBottom: '2px solid ' + (active ? 'var(--neutral-900)' : 'transparent'),
        cursor: 'pointer',
        transition: 'color var(--duration-fast)'
      }
    }, t);
  }))));
}
window.LGHero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launchgood-com/Hero.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CampaignCard = __ds_scope.CampaignCard;

__ds_ns.CampaignTile = __ds_scope.CampaignTile;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.InlineBanner = __ds_scope.InlineBanner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
