import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

let handler = async (m, { conn, text }) => {
    await m.react('🕓')

    if (conn.user.jid == conn.user.jid) {
        try {
            // Forza l'aggiornamento del repository, forzando il pull
            execSync('git fetch --all')  // Scarica tutti i dati dal repository remoto
            execSync('git reset --hard origin/main')  // Allinea la tua versione locale a quella su GitHub (main è il branch di default, potrebbe variare)
            
            // Analizza le modifiche dei file
            let stdout = execSync('git status')
            let changes = ''
            
            // Verifica se ci sono file aggiunti, modificati o eliminati
            if (stdout.includes('Changes to be committed:')) {
                changes += '[+] Aggiunto: ' + stdout.split('Changes to be committed:')[1].split('\n')[0].trim() + '\n'
            }
            if (stdout.includes('Changes not staged for commit:')) {
                changes += '[/] Modificato: ' + stdout.split('Changes not staged for commit:')[1].split('\n')[0].trim() + '\n'
            }
            if (stdout.includes('deleted')) {
                changes += '[-] Rimosso: ' + stdout.split('deleted')[1].split('\n')[0].trim() + '\n'
            }

            // Copia la cartella /plugins dal repository GitHub nella cartella corretta
            const source = path.join(__dirname, 'plugins') // Path di origine (plugins nella repo)
            const destination = path.join(__dirname, 'MoonMD-BOT', 'plugins') // Path di destinazione

            // Verifica se la cartella di destinazione esiste, se non esiste la crea
            if (!fs.existsSync(destination)) {
                fs.mkdirSync(destination, { recursive: true })
            }

            // Copia la cartella plugins dal repository (sostituendo i file esistenti)
            fs.readdirSync(source).forEach(file => {
                const srcPath = path.join(source, file)
                const destPath = path.join(destination, file)

                // Copia solo i file modificati o nuovi
                if (fs.existsSync(srcPath)) {
                    fs.copyFileSync(srcPath, destPath)
                }
            })

            // Rispondi con le modifiche effettuate
            await conn.reply(m.chat, changes || 'Nessuna modifica rilevata', m)
            await m.react('✅')
        } catch (error) {
            await conn.reply(m.chat, `Errore durante l'aggiornamento: ${error.message}`, m)
            await m.react('❌')
        }
    }
}

handler.help = ['aggiornabot']
handler.tags = ['owner']
handler.command = ['update', 'aggiornamento', 'aggiornabot']
handler.rowner = true

export default handler
