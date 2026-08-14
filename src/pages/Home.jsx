import React from 'react'

const Home = () => {
  const cardClassName="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:scale-105 transition-transform duration-150 flex flex-col justify-between"

  return (
    <div className='w-full'>

<section className="bg-gray-950 py-12 px-6 w-full text-center">
  <h1 className="text-4xl font-bold text-zinc-200 m-0">
    Confluencias Culturales Tucumán
  </h1>

  <p className="text-lg md:text-xl font-medium text-amber-500 mt-2">
    Un espacio digital dedicado al cruce entre el arte, la tradición folklórica y la tecnología en la provincia de Tucumán.
  </p>

  <p className="text-sm md:text-base text-zinc-400 mt-4 max-w-3xl mx-auto leading-relaxed">
    A través de este catálogo interactivo, exploramos cómo la música autóctona, las artes plásticas, el teatro y el cine tucumano se conectan con nuevas herramientas tecnológicas, preservando y redefiniendo el patrimonio cultural de nuestra región.
  </p>
</section>

     

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-12 px-6 justify-center">
        <div className={cardClassName}>
          <div className="text-3xl mb-3">
             🎨
             </div>
          <h3 className="font-bold text-lg mb-1 text-black">
            Arte
          </h3>
          <p className="text-slate-600 text-sm">
            Tucumán cuenta con una rica tradición en artes visuales que entrelaza la memoria histórica de la zafra, el paisajismo del Norte Argentino y el muralismo de vanguardia. Desde las colecciones del Museo Provincial de Bellas Artes Timoteo Navarro hasta las intervenciones callejeras urbanas y la escultura en madera y cerámica diaguita, el arte tucumano destaca por su identidad social, la potencia de sus colores y el rescate del patrimonio cultural.
          </p>
        </div>

        <div className={cardClassName}>
          <div className="text-3xl mb-3">
            🎵
            </div>
          <h3 className="font-bold text-lg mb-1 text-black">
            Música
            </h3>
          <p className="text-slate-600 text-sm">
            Cuna de referentes fundamentales del folclore como Mercedes Sosa y fuente de inspiración para la célebre zamba de Atahualpa Yupanqui, la escena musical de la provincia abarca un abanico diverso de sonidos. Desde el canto ancestral con caja y la vidala en los Valles Calchaquíes, pasando por el histórico Septiembre Musical y la orquesta estable, hasta fusiones contemporáneas de ritmos folclóricos con electrónica y grabaciones de campo.
          </p>
        </div>

        <div className={cardClassName}>
          <div className="text-3xl mb-3">🎭</div>
          <h3 className="font-bold text-lg mb-1 text-black">
            Cine y Teatro
            </h3>
          <p className="text-slate-600 text-sm">
            Reconocida como una potencia teatral independiente en el país y con una industria audiovisual en constante crecimiento gracias a la Escuela de Cine de la UNT, la provincia destaca por su dinamismo escénico. El histórico Teatro San Martín acoge ópera y ballet provincial, mientras que salas independientes y festivales regionales exponen producciones que abordan la identidad norteña, el realismo social y las historias de los pueblos tucumanos.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home