import "./App.css";

function App() {
  return (
    <div className="text-slate-400 flex flex-col items-center justify-center h-screen">
      <h1 className="text-stone-400 text-4xl font-semibold">
        Webentwicklung und UI/UX Design aus Graubünden
      </h1>
      <div className="flex flex-col mt-10">
        <p className="text-2xl">Meine Website ist gerade im Aufbau.</p>
        <p className="text-xl">Bei Fragen oder Anfragen erreichst du mich hier:</p>
        <p className="mt-4">
            <a href="mailto:noglit@proton.me" className="btn text-stone-300 hover:text-stone-800 bg-slate-600 hover:bg-slate-400 py-2 px-4 rounded-sm">
              Kontakt aufnehmen
            </a>
        </p>
      </div>
    </div>
  );
}

export default App;
