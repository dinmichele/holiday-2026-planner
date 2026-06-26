import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './index.css';

function MapUpdater({ selectedTappa, tappe }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(tappe[selectedTappa].latLng, map.getZoom(), { duration: 0.8 });
  }, [selectedTappa, map, tappe]);
  return null;
}

const Icons = {
  Van: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.208-3.322a3.375 3.375 0 0 0-3.359-3.159H16.5V6H4.5v7.5m15 5.25v-1.125a3.375 3.375 0 0 0-3.375-3.375H16.5" />
    </svg>
  ),
  Dog: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
    </svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="icon">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="icon">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  ),
  Compass: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.004 9.004 0 0 1 8.716 6.747M12 3a9.004 9.004 0 0 0-8.716 6.747" />
    </svg>
  ),
  Restaurant: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52v8.476c0 1.62-.832 3.101-2.195 3.96l-1.042.656a2.25 2.25 0 0 1-2.39 0l-1.041-.656A4.52 4.52 0 0 1 12 13.447v-8.948m-6.75.47c-1.01.143-2.01.317-3 .52m3-.52v8.476c0 1.62.832 3.101 2.195 3.96l1.042.656c.712.449 1.678.449 2.39 0l1.041-.656C12.832 16.547 12 15.067 12 13.447v-8.948" />
    </svg>
  )
};

export default function App() {
  const [selectedTappa, setSelectedTappa] = useState(0);
  const [departureTime, setDepartureTime] = useState("01:00");
  const [cruiseSpeed, setCruiseSpeed] = useState(100);
  const [petStopInterval, setPetStopInterval] = useState(2.5);
  const [showRestaurants, setShowRestaurants] = useState(false);

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
      latLng: [46.0037, 8.9511]
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
      latLng: [42.4408, 11.2196]
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
      latLng: [40.8224, 14.1165]
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
      latLng: [40.4253, 15.0069]
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
      latLng: [40.2789, 14.9544]
    },
    {
      id: 5,
      titolo: "Acciaroli e Pioppi",
      regione: "Campania (Cilento)",
      tipo: "Borgo di Mare Autentico",
      distanzaParziale: 20,
      tempoParziale: 0.5,
      descrizione: "Borgo di mare più tranquillo, famoso per il porto, le spiagge e l'atmosfera autentica, tra i più belli del litorale cilentano.",
      consiglioVan: "Sosta vicino ai lidi e al porto. Ottimo per una passeggiata in tranquillità.",
      consiglioCane: "La 'Spiaggia delle Pietre' in via Fiume è dog-friendly! A Pioppi i cani sono benvenuti al Porto del Fico.",
      spiaggiaCane: "Spiaggia delle Pietre (Acciaroli)",
      latLng: [40.1818, 15.0645]
    },
    {
      id: 6,
      titolo: "Palinuro & Marina di Camerota",
      regione: "Campania (Cilento)",
      tipo: "Paradiso Selvaggio",
      distanzaParziale: 40,
      tempoParziale: 0.9,
      descrizione: "Il cuore roccioso del viaggio. Scogliere imponenti, come la Baia del Buon Dormire, e spiagge segrete. Puoi goderti questa zona selvaggia in totale relax.",
      consiglioVan: "Campeggi stupendi e spartani sotto ulivi millenari direttamente affacciati sulla spiaggia (es. Molpa).",
      consiglioCane: "Divertimento puro alla famosa 'Bau Bau Beach' di Palinuro, attrezzata e sicura.",
      spiaggiaCane: "Bau Bau Beach (Palinuro)",
      latLng: [40.0305, 15.2811]
    },
    {
      id: 7,
      titolo: "Sapri (Sosta Lampo col Papi)",
      regione: "Campania (Sud)",
      tipo: "Incontro Strategico",
      distanzaParziale: 40,
      tempoParziale: 0.8,
      descrizione: "Una sosta mirata e veloce. Incontri il padre della tua ex, regoli amichevolmente le questioni in sospeso e riparti al volo senza appesantire il viaggio.",
      consiglioVan: "Parcheggia direttamente sul lungomare. Incontro rapido e pratico, motore pronto per puntare subito verso sud.",
      consiglioCane: "Tienilo con te: un cane al fianco è il miglior alleato per mantenere l'atmosfera rilassata e pacifica.",
      spiaggiaCane: "Spiaggia Dog-friendly in località Pali",
      latLng: [40.0766, 15.6289]
    },
    {
      id: 8,
      titolo: "Maratea",
      regione: "Basilicata",
      tipo: "Scogliere & Panorama",
      distanzaParziale: 18,
      tempoParziale: 0.4,
      descrizione: "La Basilicata ti accoglie con le suas scogliere nere a picco sul mare. Sali sul Monte San Biagio: la statua gigante del Cristo e la vista sulla costa ti daranno un senso di libertà indescrivibile.",
      consiglioVan: "La strada sale stretta ma panoramica. Ci sono ampi spiazzi in cima perfetti per una sosta contemplativa.",
      consiglioCane: "Passeggiata freschissima e ventilata in cima al monte, ottima per far correre il cane lontano dalla calura.",
      spiaggiaCane: "Spiaggia di Fiumicello (tratti periferici)",
      latLng: [39.9936, 15.7214]
    },
    {
      id: 9,
      titolo: "San Nicola Arcella",
      regione: "Calabria",
      tipo: "Meraviglia Naturale",
      distanzaParziale: 28,
      tempoParziale: 0.5,
      descrizione: "La spettacolare finestra naturale dell'Arcomagno. Uno dei punti panoramici più incredibili di tutto il viaggio, perfetto da fotografare la mattina presto in solitaria col tuo fedele compagno.",
      consiglioVan: "Parcheggia nella parte alta e scendi a piedi lungo il suggestivo sentiero costiero.",
      consiglioCane: "ATTENZIONE: Scalini in roccia caldi! Scendi entro le 8:00 del mattino per proteggere le zampe del cane ed evitare il turismo di massa.",
      spiaggiaCane: "Spiaggia dell'Arcomagno (visita mattutina)",
      latLng: [39.8519, 15.7951]
    },
    {
      id: 10,
      titolo: "Scalea",
      regione: "Calabria",
      tipo: "Traguardo della Libertà",
      distanzaParziale: 10,
      tempoParziale: 0.2,
      descrizione: "Una sosta meravigliosa tra borgo antico e chilometri di coste libere dove parcheggiare il van e guardare le stelle la sera.",
      consiglioVan: "Ottimi spazi sul lungomare calabrese, ideali per la vita da van libera e indipendente.",
      consiglioCane: "Immense spiagge libere alle estremità della baia dove il tuo cane può correre senza limiti.",
      spiaggiaCane: "Spiagge libere a nord e sud del litorale",
      latLng: [39.8142, 15.7953]
    },
    {
      id: 11,
      titolo: "Diamante",
      regione: "Calabria",
      tipo: "Borgo d'Arte e Mare",
      distanzaParziale: 25,
      tempoParziale: 0.4,
      descrizione: "La tua meta finale, il celebre 'Borgo dei Murales' con oltre 300 opere d'arte sui muri e la meravigliosa Isola di Cirella di fronte.",
      consiglioVan: "Ampie possibilità di sosta per esplorare il paese a piedi o noleggiare un kayak per l'isola.",
      consiglioCane: "Tante viuzze all'ombra per passeggiare al fresco ammirando i dipinti in paese.",
      spiaggiaCane: "Litorale aperto verso l'Isola di Cirella",
      latLng: [39.6766, 15.8211]
    }
  ];

  const ristoranti = [
    { id: 101, nome: "Rosso Di Sera", luogo: "Pollica", tipo: "Birreria", latLng: [40.1818, 15.0645] },
    { id: 102, nome: "Geco Beach", luogo: "Castellabate", tipo: "Italiana, Pesce", latLng: [40.2790, 14.9540] },
    { id: 103, nome: "Napò Sushi & Pizza", luogo: "Teggiano", tipo: "Sushi, Pizza", latLng: [40.3789, 15.5392] },
    { id: 104, nome: "Il Gelatiere", luogo: "Santa Maria di Castellabate", tipo: "Gelateria", latLng: [40.2882, 14.9451] },
    { id: 105, nome: "Osteria 1861", luogo: "Santa Maria di Castellabate", tipo: "Italiana, Pesce", latLng: [40.2860, 14.9460] },
    { id: 106, nome: "Ristorante Il Cefalo", luogo: "Ogliastro Marina", tipo: "Italiana, Pesce", latLng: [40.2458, 14.9463] },
    { id: 107, nome: "Osteria Del Borgo", luogo: "Pisciotta", tipo: "Italiana, Pesce", latLng: [40.1118, 15.2341] },
    { id: 108, nome: "La Tartaruga", luogo: "Castellabate", tipo: "Napoletana", latLng: [40.2795, 14.9550] },
    { id: 109, nome: "Vanilla Ice", luogo: "Marina di Ascea", tipo: "Gelateria", latLng: [40.1345, 15.1762] },
    { id: 110, nome: "Il Parnaso", luogo: "Castellabate", tipo: "Italiana, Pesce", latLng: [40.2810, 14.9520] },
    { id: 111, nome: "Agriturismo Capalia", luogo: "Pollica", tipo: "Mediterranea", latLng: [40.1825, 15.0630] },
    { id: 112, nome: "Osteria Il Buon Gusto", luogo: "Teggiano", tipo: "Mediterranea", latLng: [40.3795, 15.5380] },
    { id: 113, nome: "Pasta e Pizze da Nello", luogo: "Santa Maria", tipo: "Pizza, Pesce", latLng: [40.2890, 14.9440] },
    { id: 114, nome: "La Torretta", luogo: "Giungano", tipo: "Mediterranea", latLng: [40.3951, 15.0601] },
    { id: 115, nome: "Ristorante Angiolina", luogo: "Pisciotta", tipo: "Pesce", latLng: [40.1105, 15.2355] }
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

  const currentTappa = tappe[selectedTappa];

  // Distanza in coordinate approssimative
  const calcDistance = (p1, p2) => {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
  };

  const localRestaurants = ristoranti.filter(r => calcDistance(r.latLng, currentTappa.latLng) < 0.25);

  return (
    <div className="app-container">
      <header className="hero-header">
        <div className="hero-bg-accent"></div>
        <div className="hero-content">
          <div className="hero-text-section">
            <div className="badge-group">
              <span className="badge badge-cyan">Solo & Dog Adventure</span>
              <span className="badge badge-amber pulse">Partenza 29 Giugno notte (1:00 AM)</span>
            </div>
            <h1 className="hero-title">
              Lugano <span className="arrow-cyan">→</span> Sapri (Lampo) <span className="arrow-emerald">→</span> Diamante
            </h1>
            <p className="hero-subtitle">
              Tutta la flessibilità del viaggio in solitaria con il tuo cane. Una sosta lampo a Sapri per regolare i conti e poi via verso la pura libertà della costa del Sud!
            </p>
          </div>
          <div className="hero-stats-card glass-panel">
            <p className="stats-label">Distanza Totale</p>
            <p className="stats-value">{totalKm} <span>KM</span></p>
            <p className="stats-desc">Circa {totalHours.toFixed(0)} ore di guida totali</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="left-column">
          <section className="card simulator-card glass-panel">
            <div className="card-bg-accent simulator-accent"></div>
            <h2 className="card-title">
              <Icons.Clock /> Simulatore Partenza Notturna
            </h2>
            <p className="card-desc">
              Partendo alle <strong>1:00 di notte del 29 giugno</strong>, eviti tutto il traffico di Milano e dell'Appennino. Calcola l'orario esatto di arrivo alla prima spiaggia in Toscana:
            </p>

            <div className="input-group">
              <div className="input-wrapper">
                <label>Ora di Partenza</label>
                <input 
                  type="time" 
                  value={departureTime} 
                  onChange={(e) => setDepartureTime(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label>Velocità Crociera Van</label>
                <select 
                  value={cruiseSpeed} 
                  onChange={(e) => setCruiseSpeed(Number(e.target.value))}
                >
                  <option value={90}>90 km/h (Relax)</option>
                  <option value={100}>100 km/h (Ideale)</option>
                  <option value={110}>110 km/h (Svelto)</option>
                </select>
              </div>
            </div>

            <div className="results-panel">
              <div className="result-row">
                <span>Distanza prima tappa (Orbetello):</span>
                <strong>505 km</strong>
              </div>
              <div className="result-row">
                <span>Pause consigliate per il cane (ogni {petStopInterval}h):</span>
                <strong>{currentArrival.numStops} soste</strong>
              </div>
              <div className="result-row">
                <span>Tempo stimato (inclusi stop):</span>
                <strong>{currentArrival.totalDurationHours} ore</strong>
              </div>
              <div className="result-highlight">
                <span className="highlight-label">Arrivo stimato al mare:</span>
                <span className="highlight-value">{currentArrival.arrivalTime} del mattino</span>
              </div>
            </div>
          </section>

          <section className="card map-card glass-panel">
            <div className="card-header-flex">
              <h2 className="card-title"><Icons.Compass /> Rotta Geografica Italia</h2>
              <div className="toggle-wrapper" onClick={() => setShowRestaurants(!showRestaurants)}>
                <span className="toggle-label">Ristoranti TripAdvisor</span>
                <div className={`toggle-switch ${showRestaurants ? 'active' : ''}`}>
                  <div className="toggle-knob"></div>
                </div>
              </div>
            </div>
            <p className="card-desc mini">
              Esplora l'itinerario e i consigli locali. Usa lo switch per visualizzare le eccellenze culinarie suggerite in zona!
            </p>

            <div className="map-container">
              <MapContainer 
                bounds={L.latLngBounds(tappe.map(t => t.latLng))}
                zoomControl={false}
                scrollWheelZoom={true}
                className="leaflet-map-root"
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                
                <Polyline 
                  positions={tappe.map(t => t.latLng)}
                  pathOptions={{ color: '#0ea5e9', weight: 3, opacity: 0.7, dashArray: '6, 6' }}
                />

                {tappe.map((t, idx) => {
                  const isActive = idx === selectedTappa;
                  const isSapri = t.titolo.includes("Sapri");
                  const isArcomagno = t.titolo.includes("San Nicola");

                  let nodeClass = "map-node-default";
                  if (isActive) nodeClass = "map-node-active";
                  else if (isSapri) nodeClass = "map-node-sapri";
                  else if (isArcomagno) nodeClass = "map-node-arcomagno";
                  
                  const markerHtml = `
                    <div class="map-node-btn ${isActive ? 'active' : ''}" style="position: relative; transform: none; top: auto; left: auto;">
                      ${(isActive || isSapri || isArcomagno) ? `<span class="node-ping ${nodeClass}-ping"></span>` : ''}
                      <span class="node-circle ${nodeClass}">${idx}</span>
                    </div>
                  `;

                  const customIcon = L.divIcon({
                    html: markerHtml,
                    className: 'leaflet-custom-marker',
                    iconSize: [28, 28],
                    iconAnchor: [14, 14]
                  });

                  return (
                    <Marker 
                      key={t.id}
                      position={t.latLng}
                      icon={customIcon}
                      eventHandlers={{ click: () => setSelectedTappa(t.id) }}
                      zIndexOffset={isActive ? 1000 : 0}
                    >
                      <Tooltip direction="right" offset={[15, 0]} opacity={1} className="custom-leaflet-tooltip" permanent={isActive}>
                        {t.titolo}
                      </Tooltip>
                    </Marker>
                  );
                })}

                {/* Markers per Ristoranti */}
                {showRestaurants && ristoranti.map((r) => {
                  const rIconHtml = `
                    <div class="map-node-btn" style="position: relative; transform: none; top: auto; left: auto;">
                      <span class="node-circle restaurant-node">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 14px; height: 14px;">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52v8.476c0 1.62-.832 3.101-2.195 3.96l-1.042.656a2.25 2.25 0 0 1-2.39 0l-1.041-.656A4.52 4.52 0 0 1 12 13.447v-8.948m-6.75.47c-1.01.143-2.01.317-3 .52m3-.52v8.476c0 1.62.832 3.101 2.195 3.96l1.042.656c.712.449 1.678.449 2.39 0l1.041-.656C12.832 16.547 12 15.067 12 13.447v-8.948" />
                        </svg>
                      </span>
                    </div>
                  `;
                  const rIcon = L.divIcon({
                    html: rIconHtml,
                    className: 'leaflet-custom-marker',
                    iconSize: [28, 28],
                    iconAnchor: [14, 14]
                  });

                  return (
                    <Marker 
                      key={`rest-${r.id}`}
                      position={r.latLng}
                      icon={rIcon}
                      zIndexOffset={100}
                    >
                      <Tooltip direction="top" offset={[0, -10]} opacity={1} className="custom-leaflet-tooltip restaurant-tooltip">
                        <span style={{color: '#f43f5e', marginRight: '4px'}}>★</span>{r.nome}<br/>
                        <span style={{fontSize: '10px', color: '#cbd5e1'}}>{r.tipo}</span>
                      </Tooltip>
                    </Marker>
                  );
                })}

                <MapUpdater selectedTappa={selectedTappa} tappe={tappe} />
              </MapContainer>

              <div className="map-legend glass-panel">
                <div className="legend-item">
                  <span className="dot dot-cyan"></span>
                  <span>Tappa Selezionata</span>
                </div>
                <div className="legend-item">
                  <span className="dot dot-amber pulse"></span>
                  <span>Sosta Lampo Diplomatica (Sapri)</span>
                </div>
                <div className="legend-item">
                  <span className="dot dot-emerald"></span>
                  <span>San Nicola Arcella (Arcomagno)</span>
                </div>
                {showRestaurants && (
                  <div className="legend-item">
                    <span className="dot dot-rose"></span>
                    <span>Ristorante TripAdvisor</span>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>

        <div className="right-column">
          <section className="card details-card glass-panel">
            <div className="details-header">
              <button 
                onClick={() => setSelectedTappa(prev => Math.max(0, prev - 1))}
                disabled={selectedTappa === 0}
                className="nav-btn"
              >
                ← Indietro
              </button>
              <span className="step-counter">
                Tappa {selectedTappa + 1} di {tappe.length}
              </span>
              <button 
                onClick={() => setSelectedTappa(prev => Math.min(tappe.length - 1, prev + 1))}
                disabled={selectedTappa === tappe.length - 1}
                className="nav-btn"
              >
                Avanti →
              </button>
            </div>

            <div className="details-hero">
              <div className="details-tags">
                <span className="tag-tipo">{currentTappa.tipo}</span>
                {currentTappa.distanzaParziale > 0 && (
                  <span className="tag-distanza">
                    <Icons.Compass /> + {currentTappa.distanzaParziale} km
                  </span>
                )}
              </div>
              <h3 className="details-title">{currentTappa.titolo}</h3>
              <p className="details-region">Regione: {currentTappa.regione}</p>
              <div className="details-desc-box">
                <p>{currentTappa.descrizione}</p>
              </div>
            </div>

            <div className="details-split">
              <div className="split-panel van-panel">
                <h4 className="split-title title-cyan"><Icons.Van /> Consigli Sosta & Van</h4>
                <p className="split-text">{currentTappa.consiglioVan}</p>
              </div>
              <div className="split-panel dog-panel">
                <h4 className="split-title title-emerald"><Icons.Dog /> Consigli per il Cane</h4>
                <p className="split-text">{currentTappa.consiglioCane}</p>
                {currentTappa.spiaggiaCane !== "N/A (Inizio viaggio)" && (
                  <div className="beach-box">
                    <span className="beach-label">📍 Spiaggia di riferimento:</span>
                    <span className="beach-name">{currentTappa.spiaggiaCane}</span>
                  </div>
                )}
              </div>
            </div>
            
            {showRestaurants && localRestaurants.length > 0 && (
              <div className="local-restaurants-panel">
                <h4 className="split-title title-rose"><Icons.Restaurant /> Ristoranti Consigliati in Zona</h4>
                <div className="restaurant-list">
                  {localRestaurants.map(r => (
                    <div key={r.id} className="restaurant-list-item">
                      <strong>{r.nome}</strong> ({r.luogo}) - <span className="rest-type">{r.tipo}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          <div className="info-cards">
            <div className="card info-card cyan-info glass-panel">
              <span className="info-badge">La Nuova Rotta</span>
              <h3>Sosta Lampo & Massima Libertà</h3>
              <p>Niente lunghi pranzi di famiglia o giorni fermi nello stesso posto. Ti fermi a Sapri <strong>giusto il tempo di un caffè con il 'Papi'</strong>, sbrighi le pratiche diplomatiche per la dote e le cose rimaste, e poi sei subito di nuovo in strada. Tutto il tempo risparmiato si trasforma in meravigliosi giorni extra da passare sulle selvagge scogliere di Maratea o sulle spiagge assolate della Calabria!</p>
            </div>
            <div className="card info-card amber-info glass-panel">
              <span className="info-badge">Sicurezza Cane</span>
              <h3>Arcomagno a San Nicola</h3>
              <p>L'Arcomagno è splendido ma il sentiero presenta gradini di roccia esposti al sole. <strong>Consiglio per le zampe:</strong> scendete entro le 8:00 del mattino. Eviterai che il cane si scotti i polpastrelli e avrai l'arco di roccia tutto per te e per lui, in totale silenzio e solitudine.</p>
            </div>
          </div>

          <section className="card checklist-card glass-panel">
            <h2 className="card-title"><Icons.Check /> Checklist Aggiornata (Solo & Dog)</h2>
            <p className="card-desc">Assicurati di spuntare tutte le cose fondamentali prima di partire da Lugano il 29 Giugno:</p>
            
            <div className="checklist-items">
              {checklist.map(item => (
                <button
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`checklist-item ${item.done ? 'done' : ''}`}
                >
                  <span className="checkbox">
                    {item.done && <Icons.Check />}
                  </span>
                  <div className="check-content">
                    <span className="check-text">{item.text}</span>
                    <span className={`check-tag ${item.cat === 'dog' ? 'tag-dog' : 'tag-van'}`}>
                      {item.cat === 'dog' ? 'Cane' : 'Van'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2026 Van-Life Planner - Freedom Edition.</p>
        <p className="footer-sub">Disegnato appositamente per viaggi in totale indipendenza. Goditi la strada!</p>
      </footer>
    </div>
  );
}
