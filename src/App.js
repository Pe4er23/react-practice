import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import ProjectCard from './components/ProjectCard.js'

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <ProjectCard />
            </main>
            <Footer />
        </div>
    )
}

export default App;
