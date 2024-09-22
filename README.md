# figma-plugin-vite-react

## File Structure

```markdown
.  
├── README.md  
├── lerna.json  
├── manifest.json  
├── package.json  
├── packages  
│   ├── common  
│   │    |── constants  
│   │    |    └── ui.ts  
│   │    |── package.json  
│   │    └── tsconfig.json  
│   ├── core  
│   │    ├── favicon.svg  
│   │    ├── index.html  
│   │    ├── package.json  
│   │    ├── src  
│   │    │  └── index.ts  
│   │    ├── tsconfig.json  
│   │    └── vite.config.ts  
│   └── ui  
│        ├── index.html  
│        ├── package.json  
│        ├── src  
│        │   ├── App.tsx  
|        |   ├── main.tsx
│        │   └── vite-env.d.ts  
│        ├── tsconfig.json  
│        ├── tsconfig.node.json  
│        └── vite.config.ts  
├── scripts  
│   └── build.js  
├── tsconfig.json  
└── pnpm-lock.yaml  
└── pnpm-workspace.yaml
```

## development and production

### develop

```bash
pnpm run dev
```

### build

```bash
pnpm run build
```

### development for ui

In the root of this project.  

```bash
cd packages/ui
pnpm run dev:ui
```

Then, you can view the interface in your browser.  
