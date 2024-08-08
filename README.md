<h1 align="center"> Weather app</h1>

![App Screenshot](https://raw.githubusercontent.com/jhenriquem/weather-app-express/main/screenshots.png)

## Descrição
Website que permite ver clima e informações meteorológicas de uma cidade específica. Interface simples e intuitiva.

## Tecnologias Utilizadas

- Node.js
- Express
- CSS
- Ejs
- JavaScript

## Estrutura do Projeto

<samp>
/weather-app<br>
- src/<br>
-- queryAPI.js<br>
- public/<br>
-- images/<br>
---- favicon.png<br>
-- stylesheets/<br>
---- style.css<br>
- routes/<br>
-- index.js<br>
- views/<br>
-- error.ejs<br>
-- index.ejs<br>
- app.js<br>
- .env -> variáveis de ambiente
</samp>



## Instalação e Uso

### Pré-requisitos

- Git
- Node.js instalado (versão 14 ou superior)
- Conta na [OpenWeatherMap](https://openweathermap.org/) para obter uma API Key.

### Git clone

1 - Clone o repositório 
```bash
git clone https://github.com/jhenriquem/weather-app-express
```

2 - Acesse a pasta do projeto 
```bash 
cd weather-app-express
```

3 - Instale todas as dependências e execute o projeto
```bash
npm i -y 
npm install
npm run start
```
