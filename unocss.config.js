export default {
  presets: [], // 不用预设自定义引擎
  rules: [
    [/^m-(-?\d+)(px|%|vw|vh|rem|em)?$/, (match) => ({ margin: `${match[1]}${match[2] || 'px'}` })],
    [
      /^mx-(-?\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({
        'margin-right': `${match[1]}${match[2] || 'px'}`,
        'margin-left': `${match[1]}${match[2] || 'px'}`
      })
    ],
    [
      /^my-(-?\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({
        'margin-top': `${match[1]}${match[2] || 'px'}`,
        'margin-bottom': `${match[1]}${match[2] || 'px'}`
      })
    ],
    [
      /^mt-(-?\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'margin-top': `${match[1]}${match[2] || 'px'}` })
    ],
    [
      /^mr-(-?\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'margin-right': `${match[1]}${match[2] || 'px'}` })
    ],
    [
      /^ml-(-?\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'margin-left': `${match[1]}${match[2] || 'px'}` })
    ],
    [
      /^mb-(-?\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'margin-bottom': `${match[1]}${match[2] || 'px'}` })
    ],

    [/^p-(\d+)(px|%|vw|vh|rem|em)?$/, (match) => ({ padding: `${match[1]}${match[2] || 'px'}` })],
    [
      /^px-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({
        'padding-right': `${match[1]}px`,
        'padding-left': `${match[1]}${match[2] || 'px'}`
      })
    ],
    [
      /^py-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({
        'padding-top': `${match[1]}${match[2] || 'px'}`,
        'padding-bottom': `${match[1]}${match[2] || 'px'}`
      })
    ],
    [
      /^pt-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'padding-top': `${match[1]}${match[2] || 'px'}` })
    ],
    [
      /^pr-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'padding-right': `${match[1]}${match[2] || 'px'}` })
    ],
    [
      /^pl-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'padding-left': `${match[1]}${match[2] || 'px'}` })
    ],
    [
      /^pb-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'padding-bottom': `${match[1]}${match[2] || 'px'}` })
    ],

    [
      /^radius-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'border-radius': `${match[1]}${match[2] || 'px'}` })
    ],
    [
      /^radius1-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'border-top-left-radius': `${match[1]}${match[2] || 'px'}` })
    ],
    [
      /^radius2-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'border-top-right-radius': `${match[1]}${match[2] || 'px'}` })
    ],
    [
      /^radius3-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'border-bottom-right-radius': `${match[1]}${match[2] || 'px'}` })
    ],
    [
      /^radius4-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'border-bottom-left-radius': `${match[1]}${match[2] || 'px'}` })
    ],

    [
      /^translateX\((-?\d+)(px|%|vw|vh|rem|em)?\)$/,
      (match) => ({ transform: `translateX(${match[1]}${match[2] || 'px'})` })
    ],
    [
      /^translateY\((-?\d+)(px|%|vw|vh|rem|em)?\)$/,
      (match) => ({ transform: `translateY(${match[1]}${match[2] || 'px'})` })
    ],

    [/^b-(\d+)-{(.*)}$/, (match) => ({ border: `${match[1]}px solid ${match[2]}` })],
    [/^bt-(\d+)-{(.*)}$/, (match) => ({ 'border-top': `${match[1]}px solid ${match[2]}` })],
    [/^br-(\d+)-{(.*)}$/, (match) => ({ 'border-right': `${match[1]}px solid ${match[2]}` })],
    [/^bl-(\d+)-{(.*)}$/, (match) => ({ 'border-left': `${match[1]}px solid ${match[2]}` })],
    [/^bb-(\d+)-{(.*)}$/, (match) => ({ 'border-bottom': `${match[1]}px solid ${match[2]}` })],

    [/^(static|fixed|absolute|relative|sticky)$/, (match) => ({ position: `${match[1]}` })],

    [
      /^text-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'font-size': `${match[1]}${match[2] || 'px'}` })
    ],
    [/^weight-(\d+)$/, (match) => ({ 'font-weight': `${match[1]}` })],

    [/^w-(\d+)(px|%|vw|vh|rem|em)?$/, (match) => ({ width: `${match[1]}${match[2] || 'px'}` })],
    [/^h-(\d+)(px|%|vw|vh|rem|em)?$/, (match) => ({ height: `${match[1]}${match[2] || 'px'}` })],
    [
      /^max-w-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'max-width': `${match[1]}${match[2] || 'px'}` })
    ],
    [
      /^min-w-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'min-width': `${match[1]}${match[2] || 'px'}` })
    ],
    [
      /^max-h-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'max-height': `${match[1]}${match[2] || 'px'}` })
    ],
    [
      /^min-h-(\d+)(px|%|vw|vh|rem|em)?$/,
      (match) => ({ 'min-height': `${match[1]}${match[2] || 'px'}` })
    ],

    ['w-full', { width: '100%' }],
    ['h-full', { height: '100%' }],
    ['full', { height: '100%', width: '100%' }],

    ['flex', { display: 'flex' }],
    ['flex-1', { flex: 1 }],
    ['jc-center', { 'justify-content': 'center' }],
    ['jc-between', { 'justify-content': 'space-between' }],
    ['ai-center', { 'align-items': 'center' }],
    [/^fg-(\d+)$/, (match) => ({ 'flex-grow': `${match[1]}` })],
    [/^fs-(\d+)$/, (match) => ({ 'flex-shrink': `${match[1]}` })],
    [/^fd-(column|row|revert|row-reverse+)$/, (match) => ({ 'flex-direction': `${match[1]}` })],

    [/^overflow-y-(auto|hidden|scrol+)$/, (match) => ({ 'overflow-y': `${match[1]}` })],
    [/^overflow-x-(auto|hidden|scrol+)$/, (match) => ({ 'overflow-x': `${match[1]}` })],
    [/^overflow-(auto|hidden|scroll+)$/, (match) => ({ overflow: `${match[1]}` })],
    [/^shadow-(\d+)$/, (match) => ({ 'box-shadow': `0 0 ${match[1]}px rgba(0, 0, 0, 0.1)` })],
    // 特别注意.* 容易影响其他匹配
    [/^bgc-{(.*)}$/, (match) => ({ 'background-color': `${match[1]}` })],
    [/^color-{(.*)}$/, (match) => ({ color: `${match[1]}` })]
  ]
}
