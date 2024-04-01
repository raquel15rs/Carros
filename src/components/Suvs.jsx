import iconSuvs from "../assets/icon-suvs.svg"

export default function Suvs() {
    return (
        <section className="bg-green p-12">
            <img src={iconSuvs} alt="img carris suvs" className="mb-7" />
            <h2 className="font-shoulders mb-7 uppercase  text-4xl font-bold text-offwhitebg" >SUVs</h2>
            <p className="font-lexend mb-7 text-offwhitebg lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
            <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green  border-2 border-offwhitebg  hover:bg-green hover:text-offwhitebg " href="https://www.webmotors.com.br/suvs?idcmp=s08%3Ac13%3Acc5557bdc18f4ebb8d2de994389066c7&idcmp=s08%3Ac13%3Ac85ed858091a48ee873891e1a36e29f1&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwk6SwBhDPARIsAJ59GwfefxuuuH-a9oaf1yemMyaawuUpVG2R0jLttm1EAp0gFvmp5kRWznkaAkHxEALw_wcB" target="_blank" >Ver mais</a>
        </section>
    )
  } 