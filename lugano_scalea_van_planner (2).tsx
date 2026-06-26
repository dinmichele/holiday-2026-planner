import React, { useState } from 'react';

const Icons = {
  Van: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.208-3.322a3.375 3.375 0 0 0-3.359-3.159H16.5V6H4.5v7.5m15 5.25v-1.125a3.375 3.375 0 0 0-3.375-3.375H16.5" />
    </svg>
  ),
  Dog: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
    </svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  ),
  Compass: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.004 9.004 0 0 1 8.716 6.747M12 3a9.004 9.004 0 0 0-8.716 6.747" />
    </svg>
  )
};

export default function App() {
  const [selectedTappa, setSelectedTappa] = useState(0);
  const [departureTime, setDepartureTime] = useState("01:00");
  const [cruiseSpeed, setCruiseSpeed] = useState(100); // km/h
  const [petStopInterval, setPetStopInterval] = useState(2.5); // ore consigliate tra fermate cane

  // Array completo di 10 tappe con coordinate percentuali calibrate (asse X e Y scalato da 0 a 100 per layout ottimale)
  const tappe = [
    {
      id: 0,
      titolo: "Lugano (Svizzera)",
      regione: "Ticino",
      tipo: "Partenza Notturna",
      distanzaParziale: 0,
      tempoParziale: 0,
      descrizione: "La base di partenza per la tua nuova avventura in solitaria. Carica il van la sera del 29 giugno e parti all'una di notte. Strada sgombra, fresco ideale per il cane e musica a palla in cabina senza che nessuno si lamenti.",
      consiglioVan: "Fai il pieno in Svizzera e prepara una playlist epica da viaggio. Controlla la pressione degli pneumatici.",
      consiglioCane: "Fagli fare una bella passeggiata prima di salire in van, così dormirà per le prime 4-5 ore di autostrada.",
      spiaggiaCane: "N/A (Inizio viaggio)",
      coords: { x: 30, y: 8 } // Nord-Ovest alto
    },
    {
      id: 1,
      titolo: "Orbetello / Costa d'Argento",
      regione: "Toscana",
      tipo: "Sosta Mare 1 (Sopra Roma)",
      distanzaParziale: 505,
      tempoParziale: 5.2,
      descrizione: "La prima vera sosta sul mare dopo circa 500 km. Arrivo previsto all'alba. Un risveglio magico in totale autonomia sul Monte Argentario con il profumo dei pini marittimi.",
      consiglioVan: "Sosta rilassata lungo il Tombolo della Feniglia, vicino alla fresca pineta monumentale.",
      consiglioCane: "Alla 'Feniglia Dog Beach' il cane può correre libero e tuffarsi in mare subito dopo il viaggio di notte.",
      spiaggiaCane: "Spiaggia della Feniglia (Dog Beach)",
      coords: { x: 42, y: 30 } // Centro Italia Tirrenico
    },
    {
      id: 2,
      titolo: "Pozzuoli / Campi Flegrei",
      regione: "Campania",
      tipo: "Sosta Mare 2 (Zona Napoli)",
      distanzaParziale: 340,
      tempoParziale: 3.5,
      descrizione: "Seconda sosta per spezzare il viaggio. Posizione fantastica sul golfo con vista su Procida e Ischia. Un'ottima pizza d'asporto consumata sul van con la porta aperta sul mare.",
      consiglioVan: "Usa le aree camper a Bacoli o Pozzuoli, sicure e con ottima brezza marina serale.",
      consiglioCane: "Passeggiata serale fresca sul lungomare flegreo. I cani qui sono molto ben accolti.",
      spiaggiaCane: "Tratti liberi a Miliscola",
      coords: { x: 55, y: 48 } // Campania Nord
    },
    {
      id: 3,
      titolo: "Paestum & Agropoli",
      regione: "Campania (Cilento)",
      tipo: "Inizio Cilento (Nord)",
      distanzaParziale: 110,
      tempoParziale: 1.5,
      descrizione: "Benvenuto nel selvaggio Cilento! I maestosi templi greci e le immense spiagge sabbiose segnano l'inizio della parte più libera ed esplorativa del viaggio.",
      consiglioVan: "Sosta comoda all'ombra delle pinete costiere di Paestum. Atmosfera camperisti molto amichevole.",
      consiglioCane: "Portalo a correre sulla spiaggia libera dog-friendly in località Solofrone.",
      spiaggiaCane: "Spiaggia Libera Dog-Friendly (Solofrone)",
      coords: { x: 60, y: 58 } // Cilento Nord
    },
    {
      id: 4,
      titolo: "Castellabate",
      regione: "Campania (Cilento)",
      tipo: "Borgo & Mare",
      distanzaParziale: 15,
      tempoParziale: 0.4,
      descrizione: "Una passeggiata serale senza fretta nel borgo medievale arrampicato sulla roccia. Goditi un tramonto mozzafiato sul Golfo di Salerno senza guardare l'orologio.",
      consiglioVan: "Parcheggio facile nella zona bassa (Santa Maria) e salita a piedi nel borgo storico.",
      consiglioCane: "Tanti sentieri freschi in pietra e accoglienza super nei locali all'aperto del paese.",
      spiaggiaCane: "Litorale sabbioso di Santa Maria",
      coords: { x: 56, y: 65 } // Golfo di Salerno / Castellabate
    },
    {
      id: 5,
      titolo: "Palinuro & Marina di Camerota",
      regione: "Campania (Cilento)",
      tipo: "Paradiso Selvaggio",
      distanzaParziale: 55,
      tempoParziale: 1.1,
      descrizione: "Il cuore roccioso del viaggio. Scogliere imponenti e spiagge segrete. Adesso che non hai vincoli di visite parentali lunghe, puoi goderti questa zona selvaggia per molti più giorni in totale relax.",
      consiglioVan: "Campeggi stupendi e spartani sotto ulivi millenari direttamente affacciati sulla spiaggia.",
      consiglioCane: "Divertimento puro alla famosa 'Bau Bau Beach' di Palinuro, attrezzata e sicura.",
      spiaggiaCane: "Bau Bau Beach (Palinuro) - Libera e attrezzata!",
      coords: { x: 64, y: 73 } // Cilento Sud
    },
    {
      id: 6,
      titolo: "Sapri (Sosta Lampo col Papi)",
      regione: "Campania (Sud)",
      tipo: "Incontro Strategico",
      distanzaParziale: 40,
      tempoParziale: 0.8,
      descrizione: "Una sosta mirata e veloce. Incontri il padre della tua ex, regoli amichevolmente le ultime questioni in sospeso della figlia (la famosa 'dote'!) e riparti al volo senza appesantire il viaggio. Il lungomare è ottimo per un caffè e un arrivederci.",
      consiglioVan: "Parcheggia direttamente sul lungomare. Incontro rapido e pratico, motore pronto per puntare subito verso sud.",
      consiglioCane: "Tienilo con te: un cane al fianco è il miglior alleato per mantenere l'atmosfera dell'incontro rilassata, pacifica e diplomatica.",
      spiaggiaCane: "Spiaggia Libera Dog-friendly sul Lungomare",
      coords: { x: 72, y: 79 } // Golfo di Policastro
    },
    {
      id: 7,
      titolo: "Maratea",
      regione: "Basilicata",
      tipo: "Scogliere & Panorama",
      distanzaParziale: 18,
      tempoParziale: 0.4,
      descrizione: "La Basilicata ti accoglie con le suas scogliere nere a picco sul mare. Sali sul Monte San Biagio: la statua gigante del Cristo e la vista sulla costa ti daranno un senso di libertà indescrivibile.",
      consiglioVan: "La strada sale stretta ma panoramica. Ci sono ampi spiazzi in cima perfetti per una sosta contemplativa.",
      consiglioCane: "Passeggiata freschissima e ventilata in cima al monte, ottima per far correre il cane lontano dalla calura della spiaggia.",
      spiaggiaCane: "Spiaggia di Fiumicello (tratti periferici)",
      coords: { x: 76, y: 84 } // Basilicata costiera
    },
    {
      id: 8,
      titolo: "San Nicola Arcella",
      regione: "Calabria",
      tipo: "Meraviglia Naturale",
      distanzaParziale: 28,
      tempoParziale: 0.5,
      descrizione: "La spettacolare finestra naturale dell'Arcomagno. Uno dei punti panoramici più incredibili di tutto il viaggio, perfetto da fotografare la mattina presto in solitaria col tuo fedele compagno.",
      consiglioVan: "Parcheggia nella parte alta e scendi a piedi lungo il suggestivo sentiero costiero.",
      consiglioCane: "ATTENZIONE: Scalini in roccia caldi! Scendi entro le 8:00 del mattino per proteggere le zampe del cane ed evitare il turismo di massa.",
      spiaggiaCane: "Spiaggia dell'Arcomagno (visita mattutina)",
      coords: { x: 80, y: 89 } // Calabria Nord
    },
    {
      id: 9,
      titolo: "Scalea",
      regione: "Calabria",
      tipo: "Traguardo della Libertà",
      distanzaParziale: 10,
      tempoParziale: 0.2,
      descrizione: "La tua meta finale. Un borgo antico arroccato tutto da esplorare a piedi con il cane e chilometri di coste libere dove parcheggiare il van, guardare le stelle la sera e goderti il sapore di un'impresa compiuta in totale autonomia.",
      consiglioVan: "Ottimi spazi sul lungomare calabrese, ideali per la vita da van libera e indipendente.",
      consiglioCane: "Immense spiagge libere alle estremità della baia dove il tuo cane può correre senza limiti.",
      spiaggiaCane: "Spiagge libere a nord e sud del litorale",
      coords: { x: 84, y: 94 } // Calabria meta finale
    }
  ];

  const totalKm = tappe.reduce((acc, curr) => acc + curr.distanzaParziale, 0);
  const totalHours = tappe.reduce((acc, curr) => acc + curr.tempoParziale, 0);

  const calculateArrival = () => {
    const [h, m] = departureTime.split(":").map(Number);
    const drivingHours = 505 / cruiseSpeed;
    const numStops = Math.floor(drivingHours / petStopInterval);
    const stopMinutes = numStops * 20; 
    const totalDurationMinutes = Math.round((drivingHours * 60) + stopMinutes);

    let arrH = (h + Math.floor(totalDurationMinutes / 60)) % 24;
    let arrM = (m + (totalDurationMinutes % 60)) % 60;
    if (m + (totalDurationMinutes % 60) >= 60) {
      arrH = (arrH + 1) % 24;
    }

    const formatTime = (hours, minutes) => {
      const hh = hours < 10 ? `0${hours}` : hours;
      const mm = minutes < 10 ? `0${minutes}` : minutes;
      return `${hh}:${mm}`;
    };

    return {
      arrivalTime: formatTime(arrH, arrM),
      drivingTime: drivingHours.toFixed(1),
      numStops,
      totalDurationHours: (totalDurationMinutes / 60).toFixed(1)
    };
  };

  const currentArrival = calculateArrival();

  const [checklist, setChecklist] = useState([
    { id: 1, text: "Passaporto Europeo UE del cane (fondamentale per rientro in Svizzera)", done: true, cat: "dog" },
    { id: 2, text: "Trattamento Antiparassitario forte (Leishmaniosi / zanzare del Sud)", done: true, cat: "dog" },
    { id: 3, text: "Preparare playlist 'Solo & Freedom' per la guida notturna", done: true, cat: "van" },
    { id: 4, text: "Tappetino refrigerante per spiaggia/van", done: false, cat: "dog" },
    { id: 5, text: "Tanica acqua supplementare da 20L nel van", done: true, cat: "van" },
    { id: 6, text: "Cunei livellatori per il van", done: false, cat: "van" },
    { id: 7, text: "Ciotola portatile pieghevole per le passeggiate", done: false, cat: "dog" },
    { id: 8, text: "Documentazione / faccende da rendere al Papi a Sapri", done: false, cat: "van" },
  ]);

  const toggleCheck = (id) => {
    setChecklist(checklist.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <header className="relative bg-gradient-to-r from-slate-950 via-slate-800 to-sky-950 py-8 px-6 shadow-2xl border-b border-sky-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-cyan-500 text-slate-950 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                Solo & Dog Adventure
              </span>
              <span className="bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider animate-pulse">
                Partenza 29 Giugno notte (1:00 AM)
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Lugano <span className="text-cyan-400">→</span> Sapri (Lampo) <span className="text-emerald-400">→</span> Scalea
            </h1>
            <p className="text-slate-300 mt-2 text-base md:text-lg font-medium max-w-xl">
              Tutta la flessibilità del viaggio in solitaria con il tuo cane. Una sosta lampo a Sapri per regolare i conti e poi via verso la pura libertà della costa del Sud!
            </p>
          </div>
          <div className="bg-slate-950/60 backdrop-blur-md p-4 rounded-2xl border border-sky-500/30 text-center min-w-[200px]">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Distanza Totale</p>
            <p className="text-3xl font-black text-sky-400 mt-1">{totalKm} <span className="text-lg">KM</span></p>
            <p className="text-xs text-slate-400 mt-2">Circa {totalHours.toFixed(0)} ore di guida totali</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-5 space-y-8">
          
          <section className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none" />
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Icons.Clock /> Simulatore Partenza Notturna
            </h2>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Partendo alle <strong>1:00 di notte del 29 giugno</strong>, eviti tutto il traffico di Milano e dell'Appennino. Calcola l'orario esatto di arrivo alla prima spiaggia in Toscana:
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs text-slate-400 uppercase font-bold mb-1">Ora di Partenza</label>
                <input 
                  type="time" 
                  value={departureTime} 
                  onChange={(e) => setDepartureTime(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white font-mono focus:outline-none focus:border-sky-500"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase font-bold mb-1">Velocità Crociera Van</label>
                <select 
                  value={cruiseSpeed} 
                  onChange={(e) => setCruiseSpeed(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-sky-500"
                >
                  <option value={90}>90 km/h (Relax)</option>
                  <option value={100}>100 km/h (Ideale)</option>
                  <option value={110}>110 km/h (Svelto)</option>
                </select>
              </div>
            </div>

            <div className="p-4 bg-sky-950/50 border border-sky-800/60 rounded-xl space-y-3">
              <div className="flex justify-between items-center text-sm text-slate-300">
                <span>Distanza prima tappa (Orbetello):</span>
                <span className="font-bold text-white">505 km</span>
              </div>
              <div className="flex justify-between items-center text-sm text-slate-300">
                <span>Pause consigliate per il cane (ogni {petStopInterval}h):</span>
                <span className="font-bold text-white">{currentArrival.numStops} soste</span>
              </div>
              <div className="flex justify-between items-center text-sm text-slate-300">
                <span>Tempo stimato (inclusi stop):</span>
                <span className="font-bold text-white">{currentArrival.totalDurationHours} ore</span>
              </div>
              <div className="pt-3 border-t border-sky-800/80 flex justify-between items-center">
                <span className="text-base font-bold text-emerald-400">Arrivo stimato al mare:</span>
                <span className="text-xl font-black text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-800">
                  {currentArrival.arrivalTime} del mattino
                </span>
              </div>
            </div>
          </section>

          <section className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 shadow-xl relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Icons.Compass /> Rotta Geografica Italia
              </h2>
              <span className="text-xs bg-sky-500/20 text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded-full font-semibold">
                Tutte le 10 tappe
              </span>
            </div>
            
            <p className="text-xs text-slate-400 mb-4">
              I nodi sulla mappa mostrano la rotta reale da nord a sud. Clicca su ciascun numero per esplorare i dettagli di quella tappa.
            </p>

            <div className="relative bg-slate-950/90 rounded-2xl border border-slate-800 p-4 h-[550px] overflow-hidden flex flex-col justify-between">
              
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  <path
                    d={tappe.map((t, i) => `${i === 0 ? 'M' : 'L'} ${t.coords.x} ${t.coords.y}`).join(' ')}
                    fill="none"
                    stroke="url(#routeGradient)"
                    strokeWidth="1.2"
                    strokeDasharray="2 1"
                    className="opacity-70"
                  />
                  
                  <path
                    d={tappe.map((t, i) => `${i === 0 ? 'M' : 'L'} ${t.coords.x} ${t.coords.y}`).join(' ')}
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="0.6"
                    filter="url(#glow)"
                    className="opacity-80"
                  />
                </svg>
              </div>

              <div className="relative w-full h-full">
                {tappe.map((t, idx) => {
                  const isActive = idx === selectedTappa;
                  const isSapri = t.titolo.includes("Sapri");
                  const isArcomagno = t.titolo.includes("San Nicola");

                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTappa(t.id)}
                      className="absolute group -translate-x-1/2 -translate-y-1/2 transition-all duration-300 focus:outline-none z-20"
                      style={{ left: `${t.coords.x}%`, top: `${t.coords.y}%` }}
                    >
                      {(isActive || isSapri || isArcomagno) && (
                        <span className={`absolute -inset-3 rounded-full animate-ping opacity-35 ${
                          isActive 
                            ? 'bg-sky-400' 
                            : isSapri 
                              ? 'bg-amber-400' 
                              : 'bg-emerald-400'
                        }`} />
                      )}

                      <span className={`relative flex items-center justify-center w-7 h-7 rounded-full border-2 text-xs font-black transition-all duration-300 shadow-md ${
                        isActive
                          ? 'bg-sky-400 border-white text-slate-950 scale-125 z-40'
                          : isSapri
                            ? 'bg-amber-500 border-slate-900 text-slate-950 scale-115 hover:bg-amber-400'
                            : isArcomagno
                              ? 'bg-emerald-500 border-slate-900 text-slate-950 scale-115 hover:bg-emerald-400'
                              : 'bg-slate-800 border-slate-600 text-slate-300 hover:border-sky-400 hover:text-white hover:scale-110'
                      }`}>
                        {idx}
                      </span>

                      <span className={`absolute left-9 top-1/2 -translate-y-1/2 bg-slate-950 text-white text-[11px] font-bold px-2 py-1 rounded-lg border transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl ${
                        isActive 
                          ? 'opacity-100 translate-x-0 border-sky-400 scale-100' 
                          : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 border-slate-700'
                      }`}>
                        {t.titolo}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="relative z-30 bg-slate-900/90 border border-slate-800 p-3 rounded-xl space-y-1.5 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" />
                  <span className="text-slate-300">Tappa Attualmente Selezionata</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-pulse" />
                  <span className="text-slate-300">Sosta Lampo Diplomatica (Sapri)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  <span className="text-slate-300">San Nicola Arcella (Arcomagno)</span>
                </div>
              </div>
            </div>
          </section>

        </div>

        <div className="lg:col-span-7 space-y-8">
          
          <section className="bg-slate-800/80 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
            
            <div className="flex items-center justify-between bg-slate-950 px-6 py-4 border-b border-slate-800">
              <button 
                onClick={() => setSelectedTappa(prev => Math.max(0, prev - 1))}
                disabled={selectedTappa === 0}
                className="text-sm font-bold text-sky-400 hover:text-sky-300 disabled:text-slate-600 disabled:pointer-events-none flex items-center gap-1 transition"
              >
                ← Indietro
              </button>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Tappa {selectedTappa + 1} di {tappe.length}
              </span>
              <button 
                onClick={() => setSelectedTappa(prev => Math.min(tappe.length - 1, prev + 1))}
                disabled={selectedTappa === tappe.length - 1}
                className="text-sm font-bold text-sky-400 hover:text-sky-300 disabled:text-slate-600 disabled:pointer-events-none flex items-center gap-1 transition"
              >
                Avanti →
              </button>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 relative">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="bg-sky-500/10 text-sky-300 border border-sky-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {tappe[selectedTappa].tipo}
                </span>
                {tappe[selectedTappa].distanzaParziale > 0 && (
                  <span className="text-sm text-slate-400 font-medium flex items-center gap-1">
                    <Icons.Compass /> + {tappe[selectedTappa].distanzaParziale} km dalla tappa precedente
                  </span>
                )}
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                {tappe[selectedTappa].titolo}
              </h3>
              <p className="text-emerald-400 font-bold text-sm mb-4">
                Regione: {tappe[selectedTappa].regione}
              </p>
              
              <p className="text-slate-300 text-base leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                {tappe[selectedTappa].descrizione}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-slate-700">
              
              <div className="p-6 border-b md:border-b-0 md:border-r border-slate-700 bg-slate-900/40">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-sky-400">
                  <Icons.Van /> Consigli Sosta & Van
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {tappe[selectedTappa].consiglioVan}
                </p>
              </div>

              <div className="p-6 bg-slate-900/60">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-emerald-400">
                  <Icons.Dog /> Consigli per il Cane
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {tappe[selectedTappa].consiglioCane}
                </p>
                
                {tappe[selectedTappa].spiaggiaCane !== "N/A (Inizio viaggio)" && (
                  <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-lg">
                    <span className="text-xs text-emerald-400 font-bold block uppercase tracking-wider mb-1">📍 Spiaggia di riferimento:</span>
                    <span className="text-sm font-bold text-white">{tappe[selectedTappa].spiaggiaCane}</span>
                  </div>
                )}
              </div>

            </div>

          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl p-6 border border-sky-800/50 shadow-xl">
              <span className="bg-sky-400 text-slate-950 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                La Nuova Rotta
              </span>
              <h3 className="text-lg font-bold text-white mt-3 mb-2">Sosta Lampo & Massima Libertà</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Niente lunghi pranzi di famiglia o giorni fermi nello stesso posto. Ti fermi a Sapri <strong>giusto il tempo di un caffè con il 'Papi'</strong>, sbrighi le pratiche diplomatiche per la dote e le cose rimaste, e poi sei subito di nuovo in strada. Tutto il tempo risparmiato si trasforma in meravigliosi giorni extra da passare sulle selvagge scogliere di Maratea o sulle spiagge assolate della Calabria!
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-950/40 to-slate-900 rounded-2xl p-6 border border-amber-800/50 shadow-xl">
              <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                Sicurezza Cane
              </span>
              <h3 className="text-lg font-bold text-white mt-3 mb-2">Arcomagno a San Nicola</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                L'Arcomagno è splendido ma il sentiero presenta gradini di roccia esposti al sole. <strong>Consiglio per le zampe:</strong> scendete entro le 8:00 del mattino. Eviterai che il cane si scotti i polpastrelli e avrai l'arco di roccia tutto per te e per lui, in totale silenzio e solitudine.
              </p>
            </div>

          </div>

          <section className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Icons.Check /> Checklist Aggiornata (Solo & Dog)
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Assicurati di spuntare tutte le cose fondamentali prima di partire da Lugano il 29 Giugno:
            </p>

            <div className="space-y-3">
              {checklist.map(item => (
                <button
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className="w-full flex items-start gap-3 p-3 rounded-xl border text-left transition bg-slate-900/50 hover:bg-slate-900 border-slate-800"
                >
                  <span className={`w-5 h-5 rounded flex items-center justify-center border transition mt-0.5 ${
                    item.done 
                      ? 'bg-emerald-500 border-emerald-400 text-slate-950' 
                      : 'border-slate-600 bg-slate-950'
                  }`}>
                    {item.done && <Icons.Check />}
                  </span>
                  
                  <div className="flex-1">
                    <span className={`text-sm ${item.done ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
                      {item.text}
                    </span>
                    <span className={`inline-block ml-2 text-[9px] uppercase font-black px-1.5 py-0.5 rounded ${
                      item.cat === 'dog' ? 'bg-emerald-950/80 text-emerald-400' : 'bg-sky-950/80 text-sky-400'
                    }`}>
                      {item.cat === 'dog' ? 'Cane' : 'Van'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>

        </div>

      </main>

      <footer className="bg-slate-950 py-8 px-6 text-center text-slate-500 border-t border-slate-800 text-sm">
        <div className="max-w-4xl mx-auto space-y-2">
          <p>© 2026 Van-Life Planner - Freedom Edition.</p>
          <p className="text-xs text-slate-600">Disegnato appositamente per viaggi in totale indipendenza. Goditi la strada!</p>
        </div>
      </footer>
    </div>
  );
}