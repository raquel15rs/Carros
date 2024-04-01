import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center ">
      <section className="lg:flex max-w-[920px]">
        <div className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
          <img src={iconSedans} alt="imagem do carro com bunda" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
          <p className="font-lexend mb-7 text-offwhitebg lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a  className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-offwhitebg" href="https://www.webmotors.com.br/sedans?idcmp=s08%3Ac13%3A3ea9720bc8b644d8a93f04b278d48332&idcmp=s08%3Ac13%3Ac85ed858091a48ee873891e1a36e29f1&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwk6SwBhDPARIsAJ59GwfySfWdxjsGKMu_SwACpylqrtM81kjTjnxh3NZtR3rQqQUqnb10aDoaAokfEALw_wcB" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green p-12">
          <img src={iconSuvs} alt="img carris suvs" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase  text-4xl font-bold text-offwhitebg" >SUVs</h2>
          <p className="font-lexend mb-7 text-offwhitebg lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green  border-2 border-offwhitebg  hover:bg-green hover:text-offwhitebg " href="https://www.webmotors.com.br/suvs?idcmp=s08%3Ac13%3Acc5557bdc18f4ebb8d2de994389066c7&idcmp=s08%3Ac13%3Ac85ed858091a48ee873891e1a36e29f1&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwk6SwBhDPARIsAJ59GwfefxuuuH-a9oaf1yemMyaawuUpVG2R0jLttm1EAp0gFvmp5kRWznkaAkHxEALw_wcB" target="_blank" >Ver mais</a>
        </div>

        <div className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg ">
          <img src={iconLuxury} alt="img carro luxury" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase  text-4xl font-bold text-offwhitebg">Luxuosos</h2>
          <p className="font-lexend mb-7 text-offwhitebg lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green  border-2 border-offwhitebg  hover:bg-dark-green hover:text-offwhitebg" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>
        </div>

      </section>
    </main>
  )
}