import React from "react";

export const Company = () => {
  return (
    <div>
      <h2>Company Component</h2>
      {/* 
      <header>
            
        </header>

        <div id="slide">

            <div id="myCarousel" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">

                  <div class="item active">
                    <img src="img/slider1.png" />
                  </div>
            
                  <div class="item">
                    <img src="img/slider2.png" />
                  </div>
                
                  <div class="item">
                    <img src="img/slider3.png" />
                  </div>

                  <div class="item">
                    <img src="img/slider4.png" />
                  </div>
                  
                </div>  
    </div>
</div>

        <div class="raw1">
            <div class="column left">   
                    <img src="img/asstec.png" id="asstec"/>
                <div class="btn-group">
                    <button>
                        <img src="img/icons/webhosting.png"/>
                        Web Hosting
                    </button>
                    <button >
                        <img src="img/icons/servidordedicado.png"/>
                        Servidor Dedicado
                    </button>
                    <button >
                        <img src="img/icons/polizadegarantias.png"/>
                        Póliza De Garantías
                    </button>
                    <button >
                        <img src="img/icons/porquenosotros.png"/>
                        ¿Porque Nosotros?
                    </button>
                    <button >
                        <img src="img/icons/centrodeayuda.png"/>
                        Centro De Ayuda
                    </button>
                    <button >
                        <img src="img/icons/dominios.png"/> 
                        Dominios
                    </button>
                    <button >
                        <img src="img/icons/masservicios.png"/>
                        Más Servicios
                    </button>
                    <button >
                        <img src="img/icons/tecnologia.png"/>
                        Tecnología
                    </button>
                    <button >
                        <img src="img/icons/resellers.png"/>
                        Resellers
                    </button>
                    <button >
                        <img src="img/icons/preguntasfrecunetes.png"/>
                        Preguntas Frecuentes
                    </button>
                </div>
            </div>

            
            <div class="column middle">
                <p class="title">Máximo rendimiento y flexibiliad para tus proyectos Web </p>
                <p class="sub">¡Aprovecha nuestras ofertas de por vida!</p>
                <div class="imgpad">
                <div class="leftpad">
                    <img src="img/starter.png" id="starter"/>
                    <img src="img/nolimite.png" id="nolimite"/>
                </div>
                <div class="rightpad">
                    <img src="img/basico.png" id="basico"/>
                    <img src="img/avanzado.png" id="avanzado"/>
                </div>
                </div>
            </div>

        <div class="column right">
        </div>
    </div>
        <footer>
            <div class="raw2">
                <div class="column izquierda">
                </div>
                <div class="column mid">
                    <br>
                    <div class="paddo">
                        <div class="padizquierdo">
                            <a>Terminos y condiciones</a>
                            <a id="segundolink">Politicas de privacidad</a>                        
                        </div>
                        <div class="padderecho">
                            <a>transferencia de dominios</a>
                            <a id="cuartolink">Precio de dominios</a>
                        </div>
                        <div class="padmid">
                            <div class="columna1">
                                <p>202 Bitters Road</p>
                                <p>San Antonio, TX</p>
                                <p>23844</p>
                            </div>
                            <div class="columna2" >
                                <br>
                                <a>
                                    View Map
                                    <img src="img/maps.png">
                                </a>
                            </div>
                          </div>
                        
                    </div>
                </div>
                <div class="column derecha">
                    
                    <br>
                    <p> conectate con the best host</p>
                    <br>
                    <div class="paddercho">
                    <div class="columnass1">
                        <label>Nombre (requerido)</label>
                        <br>
                        <input type="text" id="name" name="name">
                        <br>
                        <label>Email (requerido)</label>
                        <br>
                        <input type="text" id="mail" name="mail">
                        <br>
                       <p>
                        <div
                        class="g-recaptcha"
                        data-sitekey="6Ldb1IIdAAAAACWPNu39Wz6oqcsxDulM43I7ZqbG"
                      ></div>
                      <br />
                      <div id="status"></div>
                      <button onclick="descargar()" value="descargar">
                        Enviar sugerencia
                    </button>
                    </form>
                
                    <script>
                      function descargar() {
                        var response = grecaptcha.getResponse();
                        if (response.length != 0) window.open("https://www.google.com/");
                        else
                          document.getElementById("status").innerHTML =
                            "Acepta el captcha primero.";
                      }
                    </script>
                    </div>

                    <div class="columnass2">
                        <label>Sugerencia o mensaje (requerido)</label>
                        <br>
                        <input type="text" id="suggestion" name="suggestion">
                        <br>
                    </div>
                </div>
            </div>
        </footer>
      {/* <div className="Container"> */}
      {/* <div className="row"></div> */}
      {/* </div> */}
    </div>
  );
};
