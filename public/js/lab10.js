const filesystem = require('fs');
const http = require('http');

const funciones = {}

funciones.render = ()=>{
    const server = http.createServer((req,res)=>{
        console.log(req.url);
        if(req.url === "/lab1"){
            res.setHeader('Content-Type', 'text/html');
            res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Laboratorio 1</title>
                <link rel="stylesheet" href="css/stylesLab3.css">
            </head>
            <body>
                <header>
                    <img src="img/logo.jpeg" class="logo">
                    <h1 id="nombre">Osvaldo Del Valle Mejia</h1>
                    <h2>A01275702 - a01275702@tec.mx</h2>
                </header>
            
                <section>
                    <article>
                        <h3>¿Cuál es la diferencia entre Internet y la World Wide Web?</h3>
                        <p>El internet es un sistema de computadoras que conforma una gran red de comunicación mundial y la web es un sistema que funciona a través de internet, por el cual se pueden transmitir diversos tipos de datos a través de HTTP</p>
                    </article>
                    <article>
                        <h3>¿Cuáles son las partes de un URL?</h3>
                        <ul>
                            <li>Esquema: es el protocolo de inicio empleado para la transmisión de datos</li>
                            <li>Host: se trata de los posibles servicios de soporte de información</li>
                            <li>Dominio: corresponde con el nombre del dominio de cada sitio web</li>
                            <li>Puerto: define el nombre del puerto según el host</li>
                            <li>Directorio: define el camino que se debe seguir en el servidor donde se encuentra el archivo a ejecutar</li>
                            <li>Nombre de archivo: define detalladamente el nombre del archivo a ejecutar</li>
                        </ul>
                    </article>
                    <article>
                        <h3>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</h3>
                        <ul>
                            <li>GET: Solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos. Se pueden en el url de la pagina</li>
                            <li>HEAD: Pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta</li>
                            <li>POST: Se utiliza para enviar una entidad a un recurso en específico, haciendo cambios en el servidor sin que pueda ser visto por el usuario</li>
                            <li>PUT: Reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.</li>
                            <li>DELETE: Borra un recurso en específico</li>
                            <li>PATCH: Es utilizado para aplicar modificaciones parciales a un recurso</li>
                        </ul>
                    </article>
                    <article>
                        <h3>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</h3>
                        <p>Se deberia de utilizar el metodo post ya que por medio de este se hace el envio de la informacion pero no es visible para el usuario ni esta presente en la url, dando mayor seguridad</p>
                    </article>
                    <article>
                        <h3>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</h3>
                        <p>Se utiliza el metodo GET</p>
                    </article>
                    <article>
                        <h3>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</h3>
                        <p>Es un mensaje almacenable de forma automatica en el que se indica que la solicitud ha tenido exito</p>
                    </article>
                    <article>
                        <h3>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</h3>
                        <p>Si lo es ya que ese error corresponde a un error intentando acceder a alguna pagina lo que se puede ver como un link roto o bien una configuracion erronea del servidor</p>
                    </article>
                    <article>
                        <h3>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</h3>
                        <p>Si lo es ya que el mensaje se debe a un error en el servidor el cual se puede deber a un error en el codigo o en la base de datos, aunque tambien se pueden presentar errores por el hardware o por el servidor como tal</p>
                    </article>
                    <article>
                        <h3>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</h3>
                        <p>Significa que el uso de ese elemento es obsoleto por lo que se recomendaria no usarlos (frame, big, center, font, strike, tt, u)</p>
                    </article>
                    <article>
                        <h3>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</h3>
                        <p>La declaracion del tipo de documento, etiquetas semanticas, elementos de formularios, soporte multimedia, aplicaciones web offline y caracteristicas de accesibilidad</p>
                    </article>
                    <article>
                        <h3>¿Qué componentes de estructura y estilo tiene una tabla?</h3>
                        <p>table, tr, th, td, caption, thead, tbody, tfoot, col, span</p>
                    </article>
                    <article>
                        <h3>¿Cuáles son los principales controles de una forma HTML5?</h3>
                        <p>form, label, input: text, date, datetime, email, password, color, file, range, number, textarea, submit</p>
                    </article>
                    <article>
                        <h3>¿Qué tanto soporte HTML5 tiene el navegador que utilizas?</h3>
                        <p>472 elements of out 555 points - Opera Browser</p>
                    </article>
                    <article>
                        <h3>El ciclo de vida y desarrollo de los sistemas de información</h3>
                        <p>Planeacion - Analisis - Diseño - Desarrollo - Implementacion - Mantenimiento </p>
                    </article>
                    <!-- Preguntas laboratorio 2 -->
                    <article>
                        <h3>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS? </h3>
                        <p>Considero que el uso del !important tendria que ser practicamente nulo si llevan buenas practicas ya que implica un manejo poco adecuado de la jerarquia de selectores</p>
                    </article>
                    <article>
                        <h3>Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</h3>
                        <p>Por las dimensiones que tenga la imagen ademas se deberia de buscar que se vea bien en la pagina web, en lo que se incluye que no impida la buena visualizacion de la informacion mas importante</p>
                    </article>
                    <article>
                        <h3>Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</h3>
                        <p>se deberia de preferir el uso de medidas relativas ya que con esto se esta buscando hacer responsiva a la pagina web</p>
                    </article>
                    <article>
                        <h3>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</h3>
                        <p>Porque ya no hay espacios en blanco por lo que la cantidad de caracteres a analizar se reduce</p>
                    </article>
                </section>
                <br>
                <footer>
                    Visual Studio Code - <a href="https://code.visualstudio.com" target="_blank">https://code.visualstudio.com</a>
                </footer>
            </body>
            </html>`);
            res.end();
        }else if(req.url === "/lab6"){
            res.setHeader('Content-Type', 'text/html');
            res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Tienda de tacos</title>
                <script src="https://cdn.tailwindcss.com"></script>
                <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
                <link rel="stylesheet" href="../../primerosLabs/css/stylesLab6.css">
            </head>
            <body>
                
            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-1 rounded-bl-lg rounded-br-lg dark:bg-gray-900">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                  <a href="https://flowbite.com/" class="flex items-center">
                      <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-6" alt="Flowbite Logo" />
                      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Tacoos!!!</span>
                  </a>
                  <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </button>
                </div>
              </nav>
            
              <section class="flex flex-col items-center mt-5">
                <table class="table-fixed divide-y divide-gray-300 w-4/5 text-center">
                  <thead>
                    <tr class="bg-gray-900">
                      <th class="rounded-tl-lg">Producto</th>
                      <th class="w-1/2">Descripcion</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th class="rounded-tr-lg">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!--Tacos vikingos-->
                    <tr>
                      <td class="bg-slate-100"><img src="/img/tacos2.jpeg"><strong>Tacos Vikingos</strong></td>
                      <td class="bg-slate-100">Tortilla de harina, con arrachera y longaniza, queso oaxaca, queso amarillo y queso manchego</td>
                      <td class="bg-slate-100" id="valorVikPrecio">$20</td>
                      <td class="bg-slate-100">
                        <div>
                          <button onclick="quitar('valorVik')" class="bg-gray-900 text-slate-50">-</button>
                          <p id="valorVik">0</p>
                          <button onclick="agregar('valorVik')" class="bg-gray-900 text-slate-50">+</button>
                        </div>
                      </td>
                      <td class="bg-slate-100" id="valorVikSub">$0</td>
                    </tr>
                    <!--Quesabirria-->
                    <tr>
                      <td class="bg-slate-50"><img src="/img/tacos1.jpeg"><strong>Tacos de birria</strong></td>
                      <td class="bg-slate-50">Tortilla de maiz frita en aceite sazonado con salsa de birria, con birria de res y queso</td>
                      <td class="bg-slate-50" id="valorBirPrecio">$25</td>
                      <td class="bg-slate-50">
                        <div>
                          <button onclick="quitar('valorBir')" class="text-slate-50 bg-gray-900">-</button>
                          <p id="valorBir">0</p>
                          <button onclick="agregar('valorBir')" class="text-slate-50 bg-gray-900">+</button>
                        </div>
                      </td>
                      <td class="bg-slate-50" id="valorBirSub">$0</td>
                    </tr>
                    <!--Tacos borrachos-->
                    <tr>
                      <td class="bg-slate-100 rounded-bl-lg"><img src="/img/tacos3.jpeg"><strong>Tacos borrachos</strong></td>
                      <td class="bg-slate-100">Tortilla de maiz con bistec, longaniza, chuleta o campechano, con papas fritas encima</td>
                      <td class="bg-slate-100" id="valorBorPrecio">$18</td>
                      <td class="bg-slate-100">
                        <div>
                          <button onclick="quitar('valorBor')" class="text-slate-50 bg-gray-900">-</button>
                          <p id="valorBor">0</p>
                          <button onclick="agregar('valorBor')" class="text-slate-50 bg-gray-900">+</button>
                        </div>
                      </td>
                      <td class="bg-slate-100" id="valorBorSub">$0</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td onmouseenter="aparecer()" onmouseleave="desaparecer()" class="bg-gray-900 p-2 text-slate-200">IVA:</td>
                      <td class="bg-gray-900 p-2 text-slate-200" id="iva">$0</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td class="rounded-bl-lg bg-gray-900 p-2 text-slate-200">TOTAL:</td>
                      <td class="rounded-br-lg bg-gray-900 p-2 text-slate-200" id="total">$0</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            
              <div id="alerta" class="w-60 flex p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">Calculo de iva!</span> El IVA se calcula sacando el 16% del valor total de la venta.
                </div>
              </div>
            
              <script src="js/lab6.js "></script>
              
            </body>
            </html>`);
            res.end();
        }else if(req.url === "/lab10"){
            if(req.method === "GET"){
                res.setHeader('Content-Type', 'text/html');
                res.write(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Lab 10</title>
                </head>
                <body>
                    <form action="/lab10" method="POST">
                        <fieldset>
                            <legend>¿Cual es tu personaje favorita?</legend>
                            
                            <input type="radio" name="personaje" id="pMai" value="Mai San">
                            <label for="pMai">Mai San</label>
                            <input type="radio" name="personaje" id="pSerena" value="Serena">
                            <label for="pSerena">Serena</label>
                            <input type="radio" name="personaje" id="pAsuna" value="Asuna">
                            <label for="pAsuna">Asuna</label>
                            <input type="radio" name="personaje" id="pViolett" value="Violett">
                            <label for="pViolett">Violett</label>
                            <input type="submit" value="confirm">
                        </fieldset>
                    </form>
                </body>
                </html>`);
                res.end();
            }else{
                res.setHeader('Content-Type', 'text/html');
                res.write(`Me gusta mucho tu personaje favorita!! :3 <br>`);
                const datos = [];

                req.on('data', (dato) => {
                    console.log(dato);
                    datos.push(dato);
                });

                return req.on('end', () => {
                    const datos_completos = Buffer.concat(datos).toString();
                    console.log(datos_completos);
                    const dato = datos_completos.split('&')[0].split('=')[1];
                    console.log(dato);
                    
                    if(dato === "Violett"){                                               
                        res.write('<img src="https://i.blogs.es/6eb146/violet-evergarden/1366_2000.jpeg">');
                        return res.end();
                    } else if(dato === "Mai+San"){                                                
                        res.write('<img src="https://i.pinimg.com/550x/5a/6d/7b/5a6d7b276a81e41ae2619d66941b710b.jpg">');
                        return res.end();
                    } else if(dato === "Asuna"){                                                
                        res.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZNhT-lsFtU8i43gwd9E9LNduim426ccqAw&usqp=CAU">');
                        return res.end();
                    } else{                                                
                        res.write('<img src="https://bestreamer.com/wp-content/uploads/2022/06/image-3-2-1024x536.jpg">');
                        return res.end();
                    }
                });
            }
        } else{
            res.statusCode = 404;
            res.write("La pagina solicitada no existe");            
            res.end();
        }
    })
    server.listen(3000);
};

module.exports = funciones;