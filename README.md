# @gura_ame/starry-sky ⭐

A beautiful React component that creates an animated starry night sky with twinkling stars, meteors, moon, and forest silhouette.

[![npm version](https://badge.fury.io/js/@gura_ame%2Fstarry-sky.svg)](https://www.npmjs.com/package/@gura_ame/starry-sky)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🌟 Animated twinkling stars with multiple styles and sizes
- ☄️ Random meteor showers
- 🌙 Glowing animated moon with optional texture
- 🌲 Forest silhouette overlay
- 🎨 Fully customizable properties
- 📱 Responsive design
- ⚡ Performance optimized with cleanup
- 🔧 TypeScript support

## Installation

```bash
npm install @gura_ame/starry-sky
```

## Usage

### Basic Usage

```tsx
import React from 'react';
import StarrySky from '@gura_ame/starry-sky';
import '@gura_ame/starry-sky/dist/StarrySky.css';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <StarrySky />
    </div>
  );
}

export default App;
```

### Advanced Usage

```tsx
import React from 'react';
import StarrySky from '@gura_ame/starry-sky';
import '@gura_ame/starry-sky/dist/StarrySky.css';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <StarrySky
        starCount={800}
        meteorInterval={[3000, 8000]}
        showMoon={true}
        showForest={true}
        forestImageSrc="/path/to/your/forest.png"
        moonTextureSrc="/path/to/your/moon-texture.png"
        className="my-custom-sky"
        style={{ zIndex: -1 }}
      />
      
      {/* Your content here */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <h1>Welcome to my website</h1>
      </div>
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `starCount` | `number` | `500` | Number of stars to generate |
| `meteorInterval` | `[number, number]` | `[5000, 10000]` | Random interval range for meteors in milliseconds |
| `showMoon` | `boolean` | `true` | Whether to display the moon |
| `showForest` | `boolean` | `true` | Whether to display forest silhouette |
| `forestImageSrc` | `string` | `"bgTree.png"` | Path to forest silhouette image |
| `moonTextureSrc` | `string` | `"bgMoon.png"` | Path to moon texture image |
| `className` | `string` | `""` | Additional CSS class names |
| `style` | `React.CSSProperties` | `{}` | Inline styles for the container |

## Animation Details

### Stars
- **4 animation styles**: Different twinkling patterns and durations (0.5s to 2s)
- **3 sizes**: Small (1px), medium (2px), large (3px)
- **3 opacity levels**: Full, half, and subtle transparency
- **Special style4**: Color-changing stars that cycle through white, pink, and blue

### Meteors
- **4 trajectory styles**: Different paths across the sky
- **Random intervals**: Customizable timing between meteor appearances
- **Automatic cleanup**: Meteors are removed after animation completes

### Moon
- **Glowing effect**: Animated box-shadow that pulses
- **Optional texture**: Support for custom moon surface images
- **10-second animation cycle**: Smooth brightness variation

### Constellation Rotation
- **24-hour cycle**: The entire star field rotates once every 86400 seconds (24 hours)
- **Smooth animation**: Linear rotation for realistic night sky movement

## Styling

The component includes all necessary CSS animations and can be further customized:

```css
/* Customize the container */
.starry-sky-container {
  /* Your custom styles */
}

/* Customize individual elements */
.my-custom-sky .lua {
  right: 100px; /* Move moon position */
}

.my-custom-sky .estrela.style4 {
  /* Customize special stars */
}
```

## Performance Notes

- Stars are generated once on mount and positioned randomly
- Meteors are created and destroyed dynamically to prevent memory leaks
- Animation cleanup is handled automatically on component unmount
- Responsive design adapts to window size changes

## Browser Support

- Modern browsers with CSS3 animation support
- Chrome, Firefox, Safari, Edge
- Mobile browsers supported

## Credits

This React component is based on the original CSS3 starry sky animation by [interaminense](https://github.com/interaminense/starry-sky). The original project provided the beautiful CSS animations and visual effects that make this component possible.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Repository

- **GitHub**: [Gura-Ame/starry-sky](https://github.com/Gura-Ame/starry-sky)
- **NPM**: [@gura_ame/starry-sky](https://www.npmjs.com/package/@gura_ame/starry-sky)
- **Original project**: [interaminense/starry-sky](https://github.com/interaminense/starry-sky)

---

Made with ⭐ by gura_ame
