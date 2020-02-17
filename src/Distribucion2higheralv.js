import React, { Component } from 'react';
const Header = () => {
    return (
        <header className="cabeceradis2">
            <p>Cabecera</p>
        </header>
    )
}
const Main = () => {
    return (
        <div className="cuerpodis2">
            <main className="maindis2">
                <p>Seccion principal</p>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam distinctio pariatur adipisci. Eos doloribus, repellendus sint magnam beatae officia qui veritatis ratione adipisci labore dignissimos recusandae pariatur! Saepe, eaque tempore.
                    Deleniti dolores id a amet non commodi officia corrupti, molestias vero ipsa, accusantium quidem beatae, provident culpa! Id odit sit, autem, ab exercitationem at totam dolores commodi ut, reiciendis dolor!
                    Ea facere nemo expedita ipsum placeat amet quaerat molestiae, consequuntur porro doloribus, delectus ullam, aliquid repellendus nisi enim in accusantium reprehenderit possimus sequi eum! Dolores eum quas autem obcaecati dicta.
                    Hic unde sit ab sint exercitationem nobis aliquid nulla soluta, cumque, quaerat eos repudiandae. Quisquam debitis, rerum similique illum aperiam, molestiae possimus ratione commodi doloremque voluptates, voluptate delectus dolor numquam.
                    Nesciunt nulla repudiandae inventore id harum nostrum, dolore libero rem reprehenderit quis voluptatibus vel non totam facere dolorum, velit sapiente ut cum et. Eius placeat libero ullam exercitationem laudantium architecto.
                    Explicabo, accusamus. Perferendis, impedit corporis sed magni voluptates adipisci excepturi quas. Dolore, praesentium. Culpa omnis molestiae eveniet neque. Tenetur soluta deleniti unde. Dicta corporis dignissimos vero nihil. Ipsam, quam sed.
                    Quo ullam ab, possimus non provident minus quod fuga laboriosam ex itaque voluptatem dolorem ut recusandae veniam sapiente tempora, dolores nam nihil deserunt libero aspernatur. Aliquam eum est nesciunt nihil?
                    Enim, tenetur. Commodi natus vero dolorem consectetur dicta id harum et fugit molestias enim rerum labore distinctio, facilis neque asperiores eveniet, veniam quos mollitia, quasi expedita ex ab? Ab, quos?
                    Vitae, voluptatum. Voluptatum expedita nam corrupti officia sit nemo, debitis pariatur tempore sed deleniti blanditiis repellat beatae quos autem cupiditate est vel amet illo. Nostrum odio necessitatibus eaque minus consectetur.
                    Earum totam, suscipit est vero vel praesentium iusto? Eos totam dolorem quos omnis iusto. At, eveniet praesentium est culpa nobis voluptatibus id quos error aliquid, enim odio atque ex harum!
                </div>
            </main>
            <aside className="aside_2dis2">
                <div>Barra lateral derecha</div>
            </aside>
        </div>

    )
}
const Footer = () => {
    return (
        <footer className="piedis2">
            <p>Pie</p>
        </footer>
    )
}
class Distribucion2higheralv extends Component {

    render() {
        return (
            <div className="distribucion2">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}
export default Distribucion2higheralv