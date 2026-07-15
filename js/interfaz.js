document.addEventListener("DOMContentLoaded",()=>{


    const boton=document.getElementById("menuToggle");
    const menu=document.getElementById("holoMenu");


    if(!boton || !menu){

        return;

    }



    const enlaces=Array.from(
        menu.querySelectorAll(".holoOpcion")
    );


    let ignorarPrimerMovimiento=true;




    function reproducirMovimientoSeguro(){

        if(typeof reproducirMovimiento==="function"){

            reproducirMovimiento();

        }

    }





    function abrirMenu(){


        menu.classList.add("active");


        boton.setAttribute(
            "aria-expanded",
            "true"
        );



        if(typeof reproducirApertura==="function"){

            reproducirApertura();

        }




        setTimeout(()=>{


            if(enlaces.length){


                ignorarPrimerMovimiento=true;


                enlaces[0].focus();


            }


        },300);


    }





    function cerrarMenu(){


        menu.classList.remove("active");



        boton.setAttribute(
            "aria-expanded",
            "false"
        );



        if(typeof reproducirCierre==="function"){

            reproducirCierre();

        }



        boton.focus();


    }







    boton.addEventListener("click",()=>{


        if(menu.classList.contains("active")){


            cerrarMenu();


        }else{


            abrirMenu();


        }


    });









    enlaces.forEach((enlace)=>{





        enlace.addEventListener("focus",()=>{


            if(ignorarPrimerMovimiento){


                ignorarPrimerMovimiento=false;


                return;


            }



            reproducirMovimientoSeguro();



        });








        enlace.addEventListener("click",()=>{



            if(typeof reproducirSeleccion==="function"){


                reproducirSeleccion();


            }




            const pagina=enlace.dataset.page;



            if(pagina){


                setTimeout(()=>{


                    window.location.href=pagina;


                },200);


            }



        });









        enlace.addEventListener("keydown",(e)=>{



            const indice=enlaces.indexOf(
                document.activeElement
            );





            switch(e.key){



                case "ArrowDown":


                    e.preventDefault();



                    enlaces[
                        (indice+1)%enlaces.length
                    ].focus();



                    reproducirMovimientoSeguro();



                break;







                case "ArrowUp":


                    e.preventDefault();



                    enlaces[
                        (indice-1+enlaces.length)%enlaces.length
                    ].focus();



                    reproducirMovimientoSeguro();



                break;







                case "Home":


                    e.preventDefault();



                    enlaces[0].focus();



                    reproducirMovimientoSeguro();



                break;







                case "End":


                    e.preventDefault();



                    enlaces[
                        enlaces.length-1
                    ].focus();



                    reproducirMovimientoSeguro();



                break;







                case "Enter":



                case " ":



                    e.preventDefault();



                    enlace.click();



                break;







                case "Escape":


                    e.preventDefault();



                    cerrarMenu();



                break;



            }



        });





    });










    document.addEventListener("keydown",(e)=>{



        if(
            e.key==="Escape" &&
            menu.classList.contains("active")
        ){


            e.preventDefault();


            cerrarMenu();


        }



    });





});








function mostrarMensaje(texto){



    const panel=document.querySelector(".panel");



    if(!panel){



        if(typeof reproducirError==="function"){


            reproducirError();


        }



        return;


    }





    panel.innerHTML=`


        <h2>Sistema</h2>


        <p>${texto}</p>



    `;



}