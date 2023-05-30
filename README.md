- NextJS 13
  - Uses Turbopack (still in beta but seems pretty fast)
- Tailwind implementation
- Brand-based themes (`Forbes` and `Kiplinger`):
  - Check out `app/styles/themes.css` for an example of implementing different styles for each theme using CSS variables
  - Can switch between `Forbes` and `Kiplinger` themes modifying the `host` variable in `app/profile/[userId]/page.tsx`
- Storybook implementation:
  - Check out `ui/Button/index.stories.tsx` and `ui/Chip/index.stories.tsx` for example stories
  - Brand-based themes are implemented in Storybook and can be changed in the top toolbar
- SSR:
  - `/profile/[userId]` is rendered server-side though it does include a single client component (`components/Profile/About.tsx`)
  - Running `npm run build` will give a breakdown of how each route is rendered

Run app:

```bash
npm run dev
```

Run Storybook:

```bash
npm run storybook
```

### Resources

[NextJS + Tailwind Design System](https://www.youtube.com/watch?v=T-Zv73yZ_QI&t=1s)
