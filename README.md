> <b>🚀 ELITE BOT GLOBAL</b>
 
<p align="center"> 
<a href="https://github.com/GataNina-Li"><img src="http://readme-typing-svg.herokuapp.com?font=mono&size=17&duration=4000&color=F7B11B&center=falso&vCenter=falso&lines=ELITE+BOT+GLOBAL+; ERES+EL+MEJOR+RECUÉRDALO+SIEMPRE.+%F0%9F%92%96" height="90px"></a> 
</p>

<p align="center">
<img src="https://telegra.ph/file/0541d4ac7ecf51a1faca9.jpg" alt="GataBot-MD" width="900"/>
</p>
</div>

### 🌟 (OPCIÓN 1) INSTALACIÓN AUTOMÁTICA 👑
[![blog](https://img.shields.io/badge/Instalacion-Automatica-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/ZA7ZKB8Mo9k?si=u6puIzNEQGvJTBZG)
> **Note** Comandos para instalar de forma automática en Termux  
```bash
termux-setup-storage
```
```bash
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/PROYECTOEBG/ELITE-BOT/master/elite.sh | bash
```
```js
// PERSONALIZAR INSTALACIÓN AUTOMÁTICA (En caso de una Bifurcación)
// Parámetros editables

// REFERENCIA
"wget -O - https://raw.githubusercontent.com/PROYECTOEBG/ELITE-BOT/master/elite.sh | bash"

// PARÁMETROS QUE PUEDE SER MODIFICADOS --> "[...]"
"wget -O - https://raw.githubusercontent.com/[usuario]/[repositorio]/[rama]/elite.sh | bash"
```
#### MODIFICAR ARCHIVO [`elite.sh`](https://github.com/GataNina-Li/GataBot-MD/blob/master/gata.sh)
```js
//LÍNEAS A MODIFICAR
205 --> "git clone https://github.com/[user]/[repositorio].git"
//Ejemplo: git clone https://github.com/PROYECTOEBG/ELITE-BOT.git

209 --> "cd [repositorio]"
//Ejemplo: cd ELITE-BOT

//Una vez hecho estos cambios ejecute los nuevos comandos en Termux
```

### `—◉ ☑️ ACTIVAR EN CASO DE APAGARSE EN TERMUX ☑️`
```bash
ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:
> cd
> cd ELITE-BOT
> npm start
```

### `—◉ 𝐎𝐁𝐓𝐄𝐍𝐄𝐑 𝐎𝐓𝐑𝐎 𝐂𝐎𝐃𝐈𝐆𝐎 𝐐𝐑` <img src="https://github.com/DIEGO-OFC/Shadow-Bot-MD/blob/main/galeria/qrcode_30531084_.png" height="30px">

- DETENER EL BOT DANDO CLICK EN EL SIMBOLO CTROL EN TERMUX MAS LA LETRA Z EN SU TECLADO MOVIL HASTA QUE SALGA ALGO EN VERDE SIMILAR A ELITE-BOT-TERMUX $  
```bash
ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:
> cd ELITE-BOT
> rm -rf GataBotSession
> npm start
```
----
### 🌎 ELITE BOT TERMUX 24/7
> Debe ya estar vinculado con el código QR, despues poner en la consola del termux (CONTROL + Z) enter y despues escribir (cd ELITE-BOT) ⬅️ REPOSITORIO, después enter y poner el siguiente comando ⬇️
```bash
termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
``` 
#### ⬇️ Opciones Disponibles
> **Warning** Esto eliminará todo el historial que hayas establecido con PM2:
```bash 
pm2 delete index
``` 
> Si tienes cerrado Termux y quiere ver de nuevo la ejecución use:
```bash 
pm2 logs 
``` 
> Si desea detener la ejecución de Termux use:
```bash 
pm2 stop index
``` 
> Si desea iniciar de nuevo la ejecución de Termux use:
```bash 
pm2 start index
``` 
----

