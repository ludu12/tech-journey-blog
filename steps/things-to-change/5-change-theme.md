# In `tailwind.config.js` change the theme string or make your own!


This is the block of code:  
*Notice there are two options in this Array (remember what arrays are??)*

```javascript
    daisyui: {
    themes: [
        "forest",
        {
            "mytheme": {
                "primary": "#a991f7",
                "secondary": "#f6d860",
                "accent": "#37cdbe",
                "neutral": "#3d4451",
                "base-100": "#ffffff",
            },
        },
    ],
},
```

These are the valid options that our site knows about, it takes the first one by default.
- Try changing the `forest` string to one from [daisyui](https://daisyui.com/docs/themes/)
- Or try removing the `forest` string and creating your own.
- ORRRRRRRRRR......

### Create Dark Mode

Add a toggle for Dark mode
- Add `light` and `dark` to your theme list.
- Go to `src/components/NavBarContainer.tsx`

Change:

```jsx
{/* uncomment me! */}
{/*<DarkModeButton/>*/}
```

to

```jsx
<DarkModeButton/>
```

### Bonus Challenge: 
`light` and `dark` are just presets here (like `forest` was) for the name of the default theme.
Could we create our own "dark" and "light" themes?
