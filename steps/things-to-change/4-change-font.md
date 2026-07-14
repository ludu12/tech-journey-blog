# In `src/app/layout.tsx` change the font import

Go back to this block of code and change the font.
- Go to https://fonts.google.com/ and find one you like

```typescript
import {Inter} from 'next/font/google' // Change this

...
const font = Inter({ weight: 'variable', subsets: ['latin']}); // And this
...
```

## Bonus Challenge:
How might we embed an image into our post? A video maybe?
