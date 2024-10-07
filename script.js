const Hodinovka = Number(prompt ("Jaká je tvá hodinová mzda?"))
const PocetDni = Number (prompt ("Kolik dní za měsíc odmakáš?"))
const PocetHodin = Number (prompt ("Kolik hodin za den pracuješ?"))


const vyplata = PocetDni*PocetHodin * Hodinovka 
document.body.innerHTML = `<p> Výplata za měsíc je ${vyplata} </p>`

