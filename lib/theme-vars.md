# Available CSS Theme Variables

All child components in the dashboard can use these CSS variables without importing anything:

```css
/* Colors */
--bg-primary     /* Main background color */
--bg-secondary   /* Secondary background color */
--text-primary   /* Main text color */
--text-secondary /* Secondary text color */
--border-color   /* Border color */
```

## Example Usage

**In a component's styles:**
```tsx
<div style={{ 
  background: 'var(--bg-primary)',
  color: 'var(--text-primary)',
  border: '1px solid var(--border-color)'
}}>
  Content
</div>
```

**In CSS files:**
```css
.my-component {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}
```

These variables automatically update when the theme changes, no component imports needed!
