import { CounterProvider, useCounter } from "../../contexts/CounterContext";
import MainLayout from "../../layouts/MainLayout";
import AbouSection from "./Components/AbouSection";
import Counter from "./Components/Counter";

export default function Home() {
  const { counter } = useCounter();

  const getCounter = (counter) => {
    console.log(counter);
  };

  return (
    <MainLayout>
      <CounterProvider>
        <main style={{ textAlign: "center" }}>
          <div>
            <h1>Home Page {counter}</h1>
            <AbouSection />
            <Counter getCt={getCounter} />
          </div>
        </main>
      </CounterProvider>
    </MainLayout>
  );
}
