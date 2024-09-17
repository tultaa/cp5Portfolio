# CP5 PORTFOLIO - REACT
### Aluno: Arthur Fellipe RM553320

## Para melhor compreensão: A Estrutura do 'App.jsx'

```
const App = () => {
  return (
    <div id='top' className="app bg-dark-dark-background text-dark-dark-text">
      <Header title="Meu Portfólio" homepage="#" />
      <main>
        <Projects />
        <Skills skills={skills} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
```
Contendo Header, Projects, Skills, Contact e Footer. Resumidamente esse é o Portfolio

## Dependencias: 
```
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0"
  },
```
Além dessas dependencias, foi utilizado o Tailwind CSS em quase todo o projeto.
## Instalando e rodando:
Dentro do terminal
```
npm install
npm run dev
```
