// By HaroldMendoza "LevelUp"

const botName = "ChatUnityBot"; // Definizione del nome del bot

let handler = async (m, { conn, text }) => {
    // Controlla se è stata taggata una persona
    if (!m.mentionedJid || m.mentionedJid.length === 0) {
        return m.reply("Tagga qualcuno da rizzare"); // Messaggio se nessuno è stato taggato
    }

    let chiHaUsato = `@${m.sender.split('@')[0]}`;
    let chiTaggare = `@${m.mentionedJid[0].split('@')[0]}`;

    const messageOptions = {
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363259442839354@newsletter',
                serverMessageId: '',
                newsletterName: `ChatUnity` // Utilizzo della variabile botName
            },
        }
    };

    m.reply(
        `
    "https://g.top4top.io/m_2257kulna0.mp4",
"https://k.top4top.io/m_22748dfb90.mp4",
"https://i.top4top.io/m_2274688ut3.mp4",
"https://e.top4top.io/m_2274g8pb05.mp4",
"https://k.top4top.io/m_2274lmhea5.mp4",
"https://e.top4top.io/m_2274h6rw62.mp4",
"https://g.top4top.io/m_2274mouou0.mp4",
"https://l.top4top.io/m_22740lsb50.mp4",
"https://h.top4top.io/m_2274wpa5s4.mp4",
"https://d.top4top.io/m_2274feoh61.mp4",
"https://a.top4top.io/m_2274h40n40.mp4",
"https://b.top4top.io/m_2274twfxf0.mp4",
"https://e.top4top.io/m_2274jjjnz6.mp4",
"https://g.top4top.io/m_2274ibf4k8.mp4",
"https://i.top4top.io/m_22740m5ov0.mp4",
"https://j.top4top.io/m_2274qjlbt1.mp4",
"https://k.top4top.io/m_2274jkgqf4.mp4",
"https://f.top4top.io/m_2274cskme7.mp4",
"https://e.top4top.io/m_2274zh7nx7.mp4",
"https://b.top4top.io/m_2274lwduw0.mp4",
"https://k.top4top.io/m_2274x95hi4.mp4",
"https://j.top4top.io/m_2274smzui0.mp4",
"https://b.top4top.io/m_2257l6p450.mp4",
"https://h.top4top.io/m_2257pvfm60.mp4",
"https://l.top4top.io/m_2257dwqiz4.mp4",
"https://l.top4top.io/m_22570gq4r0.mp4",
"https://e.top4top.io/m_22575tzit0.mp4",
"https://j.top4top.io/m_2257pf8mh0.mp4",
"https://b.top4top.io/m_22573zdwj3.mp4",
"https://h.top4top.io/m_22572j8n84.mp4",
"https://f.top4top.io/m_2257hturm2.mp4",
"https://c.top4top.io/m_2257ler770.mp4",
"https://l.top4top.io/m_2257p6e4y3.mp4",
"https://d.top4top.io/m_2257j8tk80.mp4",
"https://k.top4top.io/m_2257sam501.mp4",
"https://a.top4top.io/m_2258fe4qh0.mp4",
"https://g.top4top.io/m_2258jd95g0.mp4",
"https://b.top4top.io/m_2258o58vk3.mp4",
"https://f.top4top.io/m_2258ovrol3.mp4",
"https://l.top4top.io/m_2258hiid23.mp4",
"https://l.top4top.io/m_2258wcrfr4.mp4",
"https://i.top4top.io/m_2258xvx9e3.mp4",
"https://d.top4top.io/m_2258bhb2y3.mp4",
"https://d.top4top.io/m_2258rmcgc2.mp4", 
"https://l.top4top.io/m_22586l94p5.mp4",
"https://b.top4top.io/m_22581acoi3.mp4",
"https://j.top4top.io/m_2258ktw1f2.mp4",
"https://h.top4top.io/m_2258ltxke2.mp4",
"https://f.top4top.io/m_2258gt7351.mp4",
"https://k.top4top.io/m_2258w87zn5.mp4"`,
        null,
        {
            mentions: m.mentionedJid,
            ...messageOptions
        }
    );
};

handler.tags = ['fun'];
handler.command = handler.help = ['pornogay'];

export default handler;

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}

global.piropo = [
    "Se il tuo corpo fosse una prigione e le tue labbra catene, che bel posto per scontare la mia condanna.",
    "Tante Unitycoins nello spazio e nessuna brilla come te.",
    "Mi piace il caffè, ma preferisco averti-tè.",
    "Non sei Google, ma hai tutto quello che cerco.",
    "Ti regalo questo fiore, anche se nessuno sarà mai bello come te.",
    "Se ogni goccia d'acqua sul tuo corpo è un bacio, allora voglio diventare un temporale.",
    "Nella mia vita manca vita, nella mia vita manca luce, nella mia vita manca qualcuno e quel qualcuno sei tu.",
    "Sei così bella che ti regalerei un milione di baci e se non ti piacessero li riprenderei indietro.",
    "Se fossi pioggia invernale, chiuderei l'ombrello per sentirti sul mio corpo.",
    "Non sono parole d'oro né di rubino, sono parole d'affetto che compongo per te.",
    "Quando cammini non calpesti il suolo, lo accarezzi.",
    "Tante forme di vita e io vivo solo nei tuoi occhi.",
    "Mi piaci tanto che non so da dove iniziare a dirtelo.",
    "Tutti si fermano al tuo fisico, ma io preferisco il tuo cuore.",
    "La tua bellezza mi acceca perché viene dal tuo cuore e si riflette nei tuoi occhi.",
    "Se ti hanno mai detto che sei bella ti hanno mentito, non sei bella sei stupenda.",
    "Celeste è il cielo, gialla la panna e neri sono gli occhi della ragazza che mi uccide.",
    "Se io fossi Colombo navigherei giorno e notte per arrivare nel profondo del tuo cuore.",
    "Se la bellezza fosse tempo, tu saresti 24 ore.",
    "Se amarti fosse peccato, avrei l'inferno assicurato.",
    "Sei l'unica cosa che manca alla mia vita per essere perfetta.",
    "Non ti dico parole belle, ma un verso sincero: il mio amore per te è infinito e il mio cuore è vero.",
    "Quello che sento per te è così immenso che, per contenerlo, mi servirebbe un altro universo.",
    "La matematica dice sempre la verità: tu e io insieme per l'eternità.",
    "Di notte brilla la luna, e di giorno brilla il sole, ma i tuoi occhi illuminano il mio cuore.",
    "Non cercarmi, preferisco restare perso nel tuo sguardo.",
    "Alcuni vogliono il mondo, altri il sole, ma io voglio solo un angolo nel tuo cuore.",
    "Se fossi un astronauta ti porterei su Plutone, ma non essendolo ti porto sempre nel cuore.",
    "Sento sempre dire che Disneyland è il posto più felice del mondo. Ma mi chiedo: hanno mai stato accanto a te?",
    "Scommetto che ti chiami Google. Sai perché? Perché hai tutto quello che cercavo!",
    "Hai una matita e una gomma? Perché voglio cancellare il tuo passato e scrivere il nostro futuro.",
    "Sei come la mia tazza di caffè preferita, calda e da leccarsi i baffi!",
    "Voglio che il nostro amore sia come Pi greco: irrazionale e infinito.",
    "Sto scrivendo un libro sulle cose belle della vita e sei nella prima pagina.",
    "Non sono sempre stato religioso. Ma lo sono ora, perché sei la risposta alle mie preghiere.",
    "Immagina: non pensi che saremmo teneri su una torta nuziale con le nostre facce?",
    "Sei il tipo di ragazza che mia mamma vuole che porti a casa. Vuoi conoscerla?",
    "Il tuo viso è perfetto... Dio ha fatto un gran lavoro con te."
];