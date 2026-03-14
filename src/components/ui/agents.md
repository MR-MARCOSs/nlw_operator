# Padrões de Criação de Componentes UI

Este documento define os padrões que devem ser seguidos ao criar componentes genéricos na pasta `src/components/ui/`.

## Stack

- **React** com **TypeScript**
- **Tailwind CSS v4** para estilização
- **tailwind-variants** (`tv`) para variantes de componentes
- **tailwind-merge** é dependência interna do tailwind-variants — não importe `twMerge` diretamente

## Regras Gerais

### Exports

- **Sempre** use `named exports`. **Nunca** use `default export`.
- Exporte o componente, a função de variantes e o tipo de props.

```tsx
export { Button, buttonVariants, type ButtonProps }
```

### Props

- Estenda as propriedades nativas do elemento HTML correspondente usando `ComponentProps<"elemento">`.
- Combine com `VariantProps<typeof variantes>` para tipar as variantes.

```tsx
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants>
```

### forwardRef

- Use `forwardRef` para permitir que o consumidor passe `ref` ao elemento nativo.
- Defina `displayName` no componente.

```tsx
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, className })}
        {...props}
      />
    )
  },
)

Button.displayName = "Button"
```

## Variantes com tailwind-variants

### Definição de variantes

Use `tv()` do `tailwind-variants` para definir variantes. Defina `base`, `variants` e `defaultVariants`.

```tsx
const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center gap-2",
    "cursor-pointer transition-opacity hover:opacity-80",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  variants: {
    variant: {
      primary: "bg-emerald-500 text-zinc-950 font-medium",
      secondary: "bg-transparent text-zinc-50 border border-[#2A2A2A]",
    },
    size: {
      sm: "text-xs py-1.5 px-3",
      md: "text-sm py-2 px-4",
      lg: "text-base py-2.5 px-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})
```

### Merge de classes — NÃO use twMerge

O `tailwind-variants` já faz merge de classes internamente. Para permitir que o consumidor faça override de estilos via `className`, passe `className` diretamente na chamada da função de variantes:

```tsx
// CORRETO — className é passado como propriedade da chamada tv()
className={buttonVariants({ variant, size, className })}

// ERRADO — não use twMerge manualmente
className={twMerge(buttonVariants({ variant }), className)}
```

### Compound Variants

Use `compoundVariants` quando uma combinação específica de variantes precisa de estilos diferentes:

```tsx
const buttonVariants = tv({
  // ...base e variants...
  compoundVariants: [
    {
      variant: "primary",
      size: "lg",
      class: "uppercase tracking-wide",
    },
  ],
})
```

## Estrutura de Arquivo

Cada componente deve seguir esta estrutura:

```tsx
// 1. Imports
import { type ComponentProps, forwardRef } from "react"
import { type VariantProps, tv } from "tailwind-variants"

// 2. Definição de variantes com tv()
const componentVariants = tv({
  base: [...],
  variants: { ... },
  defaultVariants: { ... },
})

// 3. Tipos
type ComponentVariants = VariantProps<typeof componentVariants>
type ComponentProps = ComponentProps<"elemento"> & ComponentVariants

// 4. Componente com forwardRef
const Component = forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <elemento
        ref={ref}
        className={componentVariants({ variant, className })}
        {...props}
      />
    )
  },
)

Component.displayName = "Component"

// 5. Named exports
export { Component, componentVariants, type ComponentProps }
```

## Checklist para Novos Componentes

- [ ] Usa `named exports` (nunca `default export`)
- [ ] Estende props nativas do elemento HTML com `ComponentProps<"...">`
- [ ] Usa `forwardRef` e define `displayName`
- [ ] Variantes definidas com `tv()` do `tailwind-variants`
- [ ] `className` é passado dentro da chamada `tv()`, sem `twMerge` manual
- [ ] `defaultVariants` definido
- [ ] Exporta o componente, a função de variantes e o tipo de props
