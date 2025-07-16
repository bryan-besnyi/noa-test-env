# SMCCCD Employee Portal - Dark Mode Implementation

This document describes the comprehensive dark mode implementation for the SMCCCD Employee Portal.

## 🌙 Features

- **Development Mode**: Static light/dark toggle for easy testing
- **Production Mode**: Respects user system preferences (`prefers-color-scheme`)
- **Smooth Transitions**: 300ms transitions between themes
- **Complete Coverage**: All components, forms, tables, and interactions
- **Accessibility**: ARIA labels and high contrast support
- **Persistent Settings**: Remembers user preference in localStorage

## 🎯 Implementation Details

### Theme System Architecture

1. **CSS Custom Properties**: All colors defined as CSS variables for easy switching
2. **React Context**: Global theme state management
3. **Theme Hook**: `useTheme()` for component-level theme logic
4. **Theme Provider**: Wraps the entire application

### File Structure

```
app/
├── hooks/
│   └── useTheme.ts              # Theme management hook
├── Components/
│   ├── ThemeProvider.tsx        # Theme context provider
│   └── ThemeToggle.tsx          # Theme toggle component
├── globals.scss                 # CSS custom properties & dark mode styles
└── layout.tsx                   # ThemeProvider wrapper
```

## 🔧 Usage

### Development Mode

In development, the theme toggle shows simple Light/Dark buttons:

```tsx
<ThemeToggle position="fixed" showLabels={true} size="sm" />
```

**Features:**
- ☀️ **Light** button
- 🌙 **Dark** button
- 🏷️ **"Dev Mode"** indicator

### Production Mode

In production, respects system preferences with three options:

```tsx
<ThemeToggle showLabels={true} />
```

**Features:**
- ☀️ **Light** - Force light theme
- 🖥️ **Auto** - Follow system preference
- 🌙 **Dark** - Force dark theme

## 🎨 Color Scheme

### Light Theme Colors
```scss
--background: #ffffff
--foreground: #171717
--smcccd-primary: #012147
--card-bg: #ffffff
--border-color: #dee2e6
```

### Dark Theme Colors  
```scss
--background: #0d1117
--foreground: #e6edf3
--smcccd-primary: #4a8bc2
--card-bg: #161b22
--border-color: #30363d
```

## 🔨 Component Integration

### Using Theme in Components

```tsx
import { useThemeContext } from './ThemeProvider';

function MyComponent() {
  const { isDark, isLight, resolvedTheme } = useThemeContext();
  
  return (
    <div style={{
      backgroundColor: isDark ? '#161b22' : '#ffffff',
      color: isDark ? '#e6edf3' : '#171717'
    }}>
      Current theme: {resolvedTheme}
    </div>
  );
}
```

### CSS Custom Properties

All components use CSS custom properties for automatic theme switching:

```scss
.my-component {
  background-color: var(--card-bg);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  transition: background-color 0.3s ease;
}
```

## 📱 Responsive Design

The theme toggle is responsive and can be positioned:

```tsx
// Fixed position (top-right corner)
<ThemeToggle position="fixed" />

// Static position (inline)
<ThemeToggle position="static" />

// Different sizes
<ThemeToggle size="sm" />  // Small
<ThemeToggle size="md" />  // Medium (default)
<ThemeToggle size="lg" />  // Large
```

## 🚀 Quick Start

1. **Theme toggle is already added** to the main page in development mode
2. **Test the themes** by clicking the Light/Dark buttons in the top-right
3. **Theme persists** across page reloads via localStorage
4. **Production builds** will automatically respect user system preferences

## 🎯 Key Benefits

- ✅ **Zero Configuration**: Works out of the box
- ✅ **Performance**: CSS custom properties for instant switching
- ✅ **Accessibility**: Proper ARIA labels and contrast ratios
- ✅ **Bootstrap Compatible**: Works with existing Bootstrap components
- ✅ **Future Proof**: Easy to extend with new themes
- ✅ **User Friendly**: Remembers preferences

## 🔧 Customization

### Adding New Colors

Add new CSS custom properties in `globals.scss`:

```scss
:root {
  --my-custom-color: #ff0000;
}

[data-theme="dark"] {
  --my-custom-color: #ff6b6b;
}
```

### Creating Theme Variants

Extend the theme system by adding new theme options:

```tsx
export type Theme = 'light' | 'dark' | 'system' | 'high-contrast';
```

This implementation provides a complete, production-ready dark mode system that enhances user experience while maintaining the SMCCCD brand identity. 