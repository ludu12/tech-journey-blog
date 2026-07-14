# Change meta data in `src/app/layout.tsx`

Find this block of code and change things.

```typescript
/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
  - favicon.ico in /public
 */
const font = Inter({subsets: ['latin']})
const title = 'Luke\'s Site';
const description = 'This the Tech Journey template site';
const links = [
  {title: 'Pokemon', href: '/pokemon'},
  {title: 'Rick and Morty', href: '/rick-and-morty'}
];
const SocialLinks = {
  twitter: '#twitter',
  github: '#github',
  instagram: '#insta',
  email: 'mailto:your-email@gmail.com'
}
```

In the `/public` folder you can change the avatar image and favicon.

### Bonus Challenge: 
The links section assumes we want to link a page that already exists on our own site. What if we want to link to a different site?
What if we want to make a new page entirely?
