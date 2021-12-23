// JavaScript Document
$(document).ready(function(){
    
  // Slider
    $('.galeria').bxSlider({
        pagerType: 'full',
        auto: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 1200,
      });

      // Posts Json con fecha moment
      let posts = [
        {
          title: 'Trabajos basura, empleos que no deberías considerar',
          date:'Post creado el día: ' + moment().date() + ' de '+ moment().format('MMMM') + ' del ' + moment().format('YYYY'),
          content: 'En nuestro viaje como desarrolladores encontraremos empresas que son bien patudas al momento de ofrecer un puesto de trabajo. Esto nos podría hacer pensar que la oferta de desarrolladores está creciendo bastante. Sin embargo esto se aleja bastante de la realidad ya que todos los años se están necesitando muchos más desarrolladores que los institutos o universidades pueden satisfacer y esto se sigue acentuando cada vez más.Sin embargo existen empresas que no entienden el trabajo de los desarrolladores, recursos humanos que siguen plantillas, no entienden cómo buscar ni que ofrecer a los desarrolladores porque sencillamente no entienden la psicología básica del desarrollador. No me mal interpreten, no quiero decir que todos seamos iguales,pero sí existen cosas que nos hicieron amar el mundo del desarrollo.',
          autor: 'Nicolas Schurmann',
          web: 'https://www.nicolas-schurmann.com/',
        },
        {
          title: 'Por qué creo que Microsoft use Chromium es una buena noticia... para todos',
          date:'Post creado el día: ' + moment().date() + ' de '+ moment().format('MMMM') + ' del ' + moment().format('YYYY'),
          content: 'Ya hay confirmación oficial. Microsoft planea adoptar Chromium como motor para su navegador Microsoft Edge y abandonará su motor propietario. Un paso más para extender la contribución de Microsoft al OSS (open source software)y un volantazo muy importante sobre la política de Microsoft respecto a los navegadores web después de años y años de fracasos continuados. Sin embargo, esta noticia que llega tras días de rumores, ha despertado los recelos de no pocas personas en la comunidad. ¿La razón? Mucha gente opina que esto refuerza el papel dominador de Google en Internet pero… ¿es eso exactamente así? En mi opinión, aunque entiendo ese miedo, no lo creo.',
          autor: 'MIDUDEV',
          web: 'https://www.midu.dev/',
        },
        {
          title: 'En diciembre haremos la MoureRetro',
          date:'Post creado el día: ' + moment().date() + ' de '+ moment().format('MMMM') + ' del ' + moment().format('YYYY'),
          content: 'Antes de finalizar el año me gustaría hacer una retrospectiva del mismo con toda la comunidad. Una serie de actividades principalmente en Twitch donde hablemos sobre lo que más os gusta, qué cambiaríais y qué añadiríais al contenido que habitualmente genero. También haremos encuestas y debatiremos todo lo que sea necesario para continuar mejorando y aportando valor. Por cierto, en diciembre también celebraré si todo va bien un sorteo que me hace muchísima ilusión para toda España y LATAM.',
          autor: 'MOUREDEV',
          web: 'https://www.moure.dev/',
        },
        {
          title: 'Empezando desde cero',
          date:'Post creado el día: ' + moment().date() + ' de '+ moment().format('MMMM') + ' del ' + moment().format('YYYY'),
          content: 'Estas listo para crear proyectos maravillosos, si estas aquí es por que lo deseas hacer.',
          autor: 'JUANDIDEV',
          web: 'https://www.allmylinks.com/juandieruiz/',
        },
        // Publica Nuevo Post
        // {
        //   title: 'Esperando a ser publicado',
        //   date:'Post creado el día: ' + moment().date() + ' de '+ moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        //   content: 'Deseas publicar tu post, publicalo tipo JSON.',
        //   autor: 'Autor',
        //   web: '#',
        // }
      ];
      // Función para mostrar los posts
      posts.forEach((item, index) =>{
        let post = `
          <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
            ${item.content}
            </p>
            <a href="${item.web}" class="button-autor" target="_blank">${item.autor}</a>
          </article>
            `;

            // Seleccionamos el contenedor de posts y le añadimos el post
            $('#posts').prepend(post);
      });

      

      // forEach para cada post
      /*
              <h2>Titulo de Publicación</h2>
                    <span class="date">Fecha de Publicación</span>
                    <p> Texto de la Publicación </p>
                    <a href="https://moure.dev/" class="button-autor" target="_blank">MOUREDEV</a>
      */
});