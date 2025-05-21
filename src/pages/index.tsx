import PurityTest from "@/components/PurityTest";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container max-w-3xl px-4 py-6 mx-auto">
        <h1 className="text-3xl text-center mb-2">The <b>how insufferable are you</b> test</h1>
        <div className="text-center mb-6">
          <p className="mb-2">
            This is an rudimentary assessment of how insufferable an individual could be regarding the topic of chronically online individuals.
          </p>
          <p className="mb-2">
            This is an opportunity for individuals to find multiple traits, positive or negative that they share among peers. In no way do any of these traits strictly define an individual.
          </p>

          <p className="font-bold mb-2">Click on every item you have done. <span className="underline">MPS</span> stands for Member of the Preferred Sex.</p>
        </div>
        <PurityTest />
      </div>
    </main>
  );
}
