import "./App.css";

function App() {
  return (
    <div className="text-slate-400 flex flex-col items-center justify-center h-screen mx-8">
      <h1 className="text-stone-400 text-[clamp(2rem,5vw,2.5rem)] font-semibold">
        Webentwicklung und UI/UX Design aus Graubünden
      </h1>
      <div className="flex flex-col mt-10">
        <p className="text-[clamp(1.3rem,5vw,1.8rem)]">Meine Website ist gerade im Aufbau.</p>
        <p className="text-[clamp(1rem,5vw,1.5rem)]">Bei Fragen oder Anfragen erreichst du mich hier:</p>
        <p className="mt-8">
            <a href="mailto:noglit@proton.me" className="btn text-stone-300 hover:text-stone-800 bg-slate-600 hover:bg-slate-400 py-2 px-4 rounded-sm">
              Kontakt aufnehmen
            </a>
        </p>
      </div>
    </div>
  );
}

export default App;
