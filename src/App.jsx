import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main>
      <section>
        <div>
          <img src={iconSedans} alt="imagem do carro com bunda" />
          <h2>Sedans</h2>
          <p>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans?idcmp=s08%3Ac13%3A3ea9720bc8b644d8a93f04b278d48332&idcmp=s08%3Ac13%3Ac85ed858091a48ee873891e1a36e29f1&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwk6SwBhDPARIsAJ59GwfySfWdxjsGKMu_SwACpylqrtM81kjTjnxh3NZtR3rQqQUqnb10aDoaAokfEALw_wcB" target="_blank">Ver mais</a>
        </div>

        <div>
          <img src={iconSuvs} alt="img carris suvs" />
          <h2>SUVs</h2>
          <p>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/suvs?idcmp=s08%3Ac13%3Acc5557bdc18f4ebb8d2de994389066c7&idcmp=s08%3Ac13%3Ac85ed858091a48ee873891e1a36e29f1&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwk6SwBhDPARIsAJ59GwfefxuuuH-a9oaf1yemMyaawuUpVG2R0jLttm1EAp0gFvmp5kRWznkaAkHxEALw_wcB" target="_blank" >Ver mais</a>
        </div>
          <img src={iconLuxury} alt="img carro luxury" />
          <h2>Luxuosos</h2>
          <p>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>
        <div>

        </div>
      </section>
    </main>
  )
}