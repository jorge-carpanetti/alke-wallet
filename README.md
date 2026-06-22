# Alke Wallet - Proyecto Integrador Módulo 2 ABP - Talento Digital 2026

Bienvenidos a mi proyecto! Alke Wallet es una aplicación web de billetera digital (Front-end) desarrollada como evaluación final del Módulo 2 del bootcamp de Talento Digital. Su objetivo es permitir a los usuarios gestionar sus activos financieros de manera segura y conveniente.

## 🌱 Evolución del Proyecto y Reflexión

Ya logré terminar la primera versión funcional, la cual cumple con todos los requerimientos base de la consigna: gestión de saldo, validaciones matemáticas, persistencia de datos y flujo entre pantallas.

Sin embargo, después de testear la aplicación y conversar con mis compañeros, me di cuenta de que se podían hacer muchas mejoras, tanto en la optimización del código JavaScript como en la Interfaz de Usuario (UI). Al observar cómo funcionan los bancos reales (tomando como gran inspiración las interfaces públicas y privadas del Banco de Chile), decidí ir un poco más allá de lo básico.

Plan de mejoras (Próximos pasos):
1. **Landing Page (`index.html`):** Actualmente el archivo de entrada está vacío. Voy a transformarlo en un sitio público comercial y atractivo, separando los "beneficios" del banco de la zona de acceso privado (`login.html`).
2. **Componentes Bootstrap:** Aplicaré lo visto en las clases teóricas para integrar **Carruseles** de imágenes promocionales, *Cards* de servicios y *Navbars* completamente responsivos.
3. **Experiencia de Usuario (UX) con jQuery:** Integraré animaciones (`.fadeIn()`) para que las alertas no aparezcan de golpe y agregaré una función de autocompletado en los envíos de dinero.

## 🛠️ Tecnologías y Herramientas
* **HTML5 & CSS3:** Estructura semántica y personalización de estilos.
* **Bootstrap:** Sistema de grillas y componentes interactivos para garantizar que la wallet sea 100% responsiva en dispositivos móviles.
* **JavaScript (ES6) & jQuery:** Lógica matemática del saldo, intercepción de formularios (`event.preventDefault()`) y manipulación dinámica del DOM.
* **Local Storage:** Uso de la memoria del navegador para persistir el saldo (formateado en `$CLP`) y guardar el historial de transacciones en texto plano.

## 📂 Estructura de Pantallas Actual
* `login.html`: Pantalla de inicio de sesión con validación de campos.
* `menu.html`: Panel principal donde se inicializa y muestra el saldo disponible.
* `deposit.html`: Formulario para ingresos de dinero (solo acepta valores positivos).
* `sendmoney.html`: Interfaz de transferencias con validación estricta (no permite enviar más del saldo disponible).
* `transactions.html`: Lista dinámica que renderiza el historial de movimientos acumulados.

## 📝 Registro de Cambios Técnicos
* **Refactorización de Estilos:** Se estandarizó el nombre del archivo de estilos a `styles.css` (pluralizado) para seguir mejores convenciones de nomenclatura en el proyecto. Se realizó la actualización masiva de los enlaces `<link>` en todos los archivos HTML (`index.html`, `login.html`, `menu.html`, etc.) para asegurar la integridad de la carga de estilos.

## 🤖 Uso de Herramientas de IA
Como parte de mi flujo de trabajo, integre el uso de modelos de lenguaje para:
* **Debugging:** Consulta y análisis de errores en la consola que requerían una resolución rápida.
* **Resolución de bloqueos:** Cuando me he encontrado "trabado" en la implementación de lógica (como la persistencia de `localStorage` o el manejo de rutas de archivos), asì pude encontrar mejores alternativas y validar mis decisiones técnicas.
* **Optimización:** Refinamiento de código y documentaciòn para seguir buenas prácticas y asegurar la legibilidad y mantenibilidad.

## 📝 Registro de Cambios Técnicos
* **Mejora en UX (Formateo de Moneda):** Se implementó una función de formateo para incluir el divisor de miles (.) en las cifras presentadas en pantalla. Esto mejora significativamente la legibilidad de los montos financieros en la interfaz, evitando errores de interpretación en transacciones de alto valor.

DISCLAIMER
* TODAS LAS FOTOS UTILIZADAS SE OBTUBIERON DESDE https://unsplash.com/.
