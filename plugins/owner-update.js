import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

let handler = async (m, { conn, text }) => {
    await m.react('🕓')

    if (conn.user.jid == conn.user.jid) {
        try {
            // Esegui il comando git pull per aggiornare il repository da GitHub
            let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
            let output = stdout.toString()

            // Analizza l'output di git per trovare modifiche nella cartella /plugins
            let changes = ''
            if (output.includes('Added')) {
                changes += '[+] Aggiunto ' + output.split('Added')[1].split('\n')[0] + '\n'
            }
            if (output.includes('Removed')) {
                changes += '[-] Rimosso ' + output.split('Removed')[1].split('\n')[0] + '\n'
            }
            if (output.includes('Modified')) {
                changes += '[/] Modificato ' + output.split('Modified')[1].split('\n')[0] + '\n'
            }

            // Copia la cartella /plugins dal repository GitHub
            const source = path.join(__dirname, 'plugins')
            const destination = path.join(__dirname, 'MoonMD-BOT', 'plugins')

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

            // Rispondi al messaggio con i dettagli delle modifiche
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
