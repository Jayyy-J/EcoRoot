# CarbonNet

🌱 Descripción General

CarbonNet es una red descentralizada peer-to-peer que permite a ciudadanos, empresas y municipios capturar, registrar y monitorear emisiones de CO₂ de manera colaborativa y transparente. Utiliza blockchain para asegurar la integridad de los datos y mecanismos de IA para validar capturas reales desde dispositivos locales o estaciones comunitarias.

🧱 Arquitectura General del Proyecto

```
📁 carbonnet/
├── frontend/            # App web para visualización y gestión de contribuciones
├── backend/             # Node.js + Express para API
├── smart-contracts/     # Solidity (Ethereum / Polygon)
├── iot-device-proxy/    # Python + MQTT para conexión de sensores CO₂
└── ai-verification/     # IA que valida datos y previene fraude ecológico
```

🔧 Stack Tecnológico

*   **Frontend**: React + Ethers.js
*   **Backend**: Node.js + Express
*   **Blockchain**: Ethereum o Polygon
*   **IA**: Python (validación de datos y predicción de impacto)
*   **IoT**: MQTT + Python para conexión de sensores

🧪 MVP Requisitos

*   Registro de usuario con wallet (MetaMask).
*   Visualizador de emisiones por sector y zona.
*   Registro de capturas por sensores o estaciones.
*   Generación de tokens simbólicos por buenas prácticas.
*   Feed público de acciones ambientales con trazabilidad.

📦 Comandos de Ejemplo

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
npm install
npm run dev

# Smart Contracts
cd smart-contracts
npx hardhat compile
```

💼 Modelo de Negocio

*   Monetización por comisión sobre transacciones de bonos verdes.
*   Suscripción a paneles avanzados de impacto ambiental.
*   Certificación pagada de estaciones comunitarias.

🌍 Potencial de Mercado

*   Gobiernos locales que buscan cumplir metas climáticas.
*   ONGs que requieren trazabilidad real.
*   Empresas interesadas en compensación voluntaria de emisiones.

## Cómo Empezar

A continuación se detallan los pasos para poner en marcha cada componente del proyecto.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:

*   [Node.js](https://nodejs.org/) (v14 o superior)
*   [Python](https://www.python.org/) (v3.8 o superior)
*   [MetaMask](https://metamask.io/) (extensión del navegador)
*   [Hardhat](https://hardhat.org/) (para desarrollo de Smart Contracts)

### Instalación y Ejecución

**1. Frontend (React)**

```bash
cd carbonnet/frontend
npm install
npm run dev
```

**2. Backend (Node.js + Express)**

```bash
cd carbonnet/backend
npm install
npm run dev
```

**3. Smart Contracts (Solidity)**

```bash
cd carbonnet/smart-contracts
npm install
npx hardhat compile
```

**4. IoT Device Proxy (Python)**

No se requiere instalación de dependencias por ahora. Para ejecutar:

```bash
cd carbonnet/iot-device-proxy
python main.py
```

**5. AI Verification (Python)**

No se requiere instalación de dependencias por ahora. Para ejecutar:

```bash
cd carbonnet/ai-verification
python main.py
```
