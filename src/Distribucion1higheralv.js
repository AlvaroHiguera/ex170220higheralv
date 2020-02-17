import React, { Component } from 'react';
const Header = () => {
    return (
        <header className="cabeceradis1">
            <p>Cabecera</p>
        </header>
    )
}
const Main = () => {
    return (
        <div className="cuerpodis1">
            <aside className="aside_1dis1">
                <div>Barra lateral izquierda</div>
            </aside>
            <main className="maindis1">
                Seccion principal
            </main>
            <aside className="aside_2dis1">
                <div>Barra lateral derecha</div>
            </aside>
        </div>

    )
}
const Footer = () => {
    return (
        <footer className="piedis1">
            <p>Pie</p>
        </footer>
    )
}
class Distribucion1higheralv extends Component {

    render() {
        return (
            <div className="distribucion1">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}
export default Distribucion1higheralv