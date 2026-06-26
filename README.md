# Checkpoint : Conversion d'un projet React JavaScript vers TypeScript

## Objectif

L'objectif de ce checkpoint est de convertir des composants React écrits en JavaScript vers TypeScript afin d'améliorer la sécurité du code grâce au typage statique.

---

# Technologies utilisées

- React
- TypeScript
- Vite

---

# Étapes réalisées

## 1. Création du projet

Création d'un projet React avec le template TypeScript grâce à Vite.

```bash
npm create vite@latest
```

Choix des options :

- Framework : React
- Variant : TypeScript

Installation des dépendances :

```bash
npm install
```

Lancement du projet :

```bash
npm run dev
```

---

## 2. Conversion du composant Greeting

### Création d'une interface

Une interface a été créée afin de décrire les propriétés (Props) du composant.

```tsx
interface GreetingProps {
  name: string;
}
```

### Typage des Props

Les props du composant ont ensuite été typées.

```tsx
const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};
```

### Utilisation du composant

Le composant est appelé depuis `App.tsx` en lui passant une propriété `name`.

```tsx
<Greeting name="Hello" />
```

---

## 3. Conversion du composant Counter

### Création d'une interface pour le State

Le composant utilise un état (`state`), il est donc nécessaire de définir son type.

```tsx
interface CounterState {
  count: number;
}
```

### Typage du composant

Le composant ne reçoit aucune propriété (Props), mais possède un State.

```tsx
class Counter extends Component<{}, CounterState> {
```

- `{}` représente des Props vides.
- `CounterState` représente le type du State.

### Typage de la méthode

La méthode `increment` ne retourne aucune valeur. Son type de retour est donc `void`.

```tsx
increment = (): void => {
  this.setState({
    count: this.state.count + 1,
  });
};
```

---

 
 
# Résultat obtenu

Le projet affiche :

- Un message de bienvenue avec le nom passé en propriété.
- Un compteur dont la valeur augmente à chaque clic sur le bouton **Increment**.

---

 
 