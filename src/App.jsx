import { Counter } from "./features/Counter/Counter";

export function App() {
  return (
    <>
      <Counter />
      <Counter initialCount={3} diff={5} />
    </>
  );
}
