jQuery(function($) {
    'use strict',

    $(function() {

        //funcion para caracteres alfanumericos - sin caracteres especiales
        $.validator.addMethod("alphanumeric", function(value, element) {
            return this.optional(element) || /^[A-Za-z][a-z0-9\s]+$/i.test(value);
        }, "Solo se permiten números y letras");

        //funcion para solo numeros - no comas ni puntos
        $.validator.addMethod("numeric", function(value, element) {
            return this.optional(element) || /^[0-9\s]+$/i.test(value);
        }, "Solo se permiten números");

        //validar formulario de registro estudios 
        $("form[name='formEstudio']").validate({

            rules: {

                fk_animal_id_estudio: {
                    required: true,
                },
                estudio_num_animales: {
                    required: true,
                    minlength: 1,
                    maxlength: 3,
                    numeric: true
                },
                estudio: {
                    required: true
                },
                'fk_grupo_variable_id[]': {
                    required: true
                },
            },

            messages: {

                fk_animal_id_estudio: {
                    required: "El campo animal es obligatorio"
                },
                estudio_num_animales: {
                    required: "El campo número de animales es obligatorio",
                    minlength: "El campo número de animales no puede tener menos de 1 caracteres",
                    maxlength: "El campo número de animales no puede tener más de 3 caracteres",
                    numeric: "El campo número de animales solo permite el ingreso de números"
                },
                estudio: {
                    required: "El campo estudio es obligatorio"
                },
                'fk_grupo_variable_id[]': {
                    required: "El campo grupo variables es obligatorio"
                }
            },

            submitHandler: function(form) {
                if (confirm('¿Esta seguro de continuar?')) {
                    form.submit();
                }
            }
        });        

        //validar formulario de registro de vgrupo animal
        $("form[name='formGrupoAnimal']").validate({

            rules: {

                grupo_nombre: {
                    required: true,
                },
            },

            messages: {

                grupo_nombre: {
                    required: "El campo grupo nombre es obligatorio"
                },
            },

            submitHandler: function(form) {
                if (confirm('¿Esta seguro de continuar?')) {
                    form.submit();
                }
            }
        });

        //validar formulario de registro de animal variables
        $("form[name='formAnimalVariables']").validate({

            rules: {

                variable_macro: {
                    required: true,
                },

                variable_nombre:{
                  required: true,
                },

                variable_descripcion:{
                   required: true,
                },

                variable_min:{
                   required: true,
                   minlength: 1,
                   maxlength: 3,
                   numeric: true,
                },
                 variable_max:{
                   required: true,
                   minlength: 1,
                   maxlength: 5,
                   numeric: true,
                },

               index_g:{
                   required: true,
                   minlength: 1,
                   maxlength: 3,
                   numeric: true,
                },

                ir_operador:{
                   required: true,
                },
                calificacion_operador:{
                     required: true,
                },
                ir_tolerencia:{
                    required: true,
                },
                calificacion_tolerencia:{
                   required: true,
                },
                variable_max_pro:{
                   required: true,
                },
                calificacion_texto_pos:{
                    required: true,
                },
                calificacion_texto_neg:{
                    required: true,
                },
                operacion_resultado:{
                   required: true,
                },
            },

            messages: {

                variable_macro: {
                    required: "El campo variables macro es obligatorio"
                },

                 variable_nombre: {
                    required: "El campo variables Nombre es obligatorio"
                },

                  variable_descripcion:{
                   required: "El campo  descripcion  es obligatorio "
                },

                variable_min:{
                    required: "El campo número de animales es obligatorio",
                    minlength: "El campo número de animales no puede tener menos de 1 caracteres",
                    maxlength: "El campo número de animales no puede tener más de 3 caracteres",
                    numeric: "El campo número de animales solo permite el ingreso de números"
                },

                 variable_max:{
                   required: "El campo número de animales es obligatorio",
                    minlength: "El campo número de animales no puede tener menos de 1 caracteres",
                    maxlength: "El campo número de animales no puede tener más de 3 caracteres",
                    numeric: "El campo número de animales solo permite el ingreso de números"
                },

                index_g:{
                   required: "El campo número de animales es obligatorio",
                    minlength: "El campo número de animales no puede tener menos de 1 caracteres",
                    maxlength: "El campo número de animales no puede tener más de 3 caracteres",
                    numeric: "El campo número de animales solo permite el ingreso de números"
                },

                ir_operador:{
                   required: "El campo es obligatorio",
                },
                calificacion_operador:{
                  required: "El campo es obligatorio",
                }, 
                ir_tolerencia:{
                   required: "El campo es obligatorio",
                },
                calificacion_tolerencia:{
                    required: "El campo es obligatorio",
                },
                variable_max_pro:{
                   required: "El campo es obligatorio",
                },
                calificacion_texto_pos:{
                   required: "El campo es obligatorio",
                },


                calificacion_texto_neg:{
                   required: "El campo es obligatorio",
                },
                operacion_resultado:{
                   required: "El campo es obligatorio",
                },
            },

            submitHandler: function(form) {
                if (confirm('¿Esta seguro de continuar?')) {
                    form.submit();
                }
            }
        });  

        //validar formulario de registro de grupo de variables
        $("form[name='formGrupoVariables']").validate({

            rules: {

                grupo_nombre: {
                    required: true,
                },
            },

            messages: {

                grupo_nombre: {
                    required: "El campo grupo nombre es obligatorio"
                },
            },

            submitHandler: function(form) {
                if (confirm('¿Esta seguro de continuar?')) {
                    form.submit();
                }
            }
        });

        //validar formulario de registro de grupo de variables
        $("form[name='formEditAnimalLinea']").validate({

            rules: {

                grupo_nombre: {
                    required: true,
                },
            },

            messages: {

                grupo_nombre: {
                    required: "El campo grupo nombre es obligatorio"
                },
            },

            submitHandler: function(form) {
                if (confirm('¿Esta seguro de continuar?')) {
                    form.submit();
                }
            }
        });

        //validar formulario de registro de grupo de variables
        $("form[name='formLineaAnimal']").validate({

            rules: {

                linea_nombre: {
                    required: true,
                },
                linea_descripcion: {
                    required: true,
                },
            },

            messages: {

                linea_nombre: {
                    required: "El campo linea nombre es obligatorio"
                },
                linea_descripcion: {
                    required: "El campo linea descripcion es obligatorio"
                },
            },

            submitHandler: function(form) {
                if (confirm('¿Esta seguro de continuar?')) {
                    form.submit();
                }
            }
        });

        //validar formulario de registro de grupo de variables
        $("form[name='FormLineaPeso']").validate({

            rules: {

                peso_genero: {
                    required: true
                },
                peso_semana: {
                    required: true
                },
                peso_min: {
                    required: true
                },
                peso_max: {
                    required: true
                },
                peso_prom: {
                    required: true
                }
            },

            messages: {

                peso_genero: {
                    required: "El campo peso genero es obligatorio"
                },
                peso_semana: {
                    required: "El campo peso semana es obligatorio"
                },
                peso_min: {
                    required: "El campo peso min es obligatorio"
                },
                peso_max: {
                    required: "El campo peso max es obligatorio"
                },
                peso_prom: {
                    required: "El campo peso prom es obligatorio"
                }
            },

            submitHandler: function(form) {
                if (confirm('¿Esta seguro de continuar?')) {
                    form.submit();
                }
            }
        });

        //validar formulario de registro de animal variables
        $("form[name='formAnimalVariablesEdit']").validate({

            rules: {

                variable_macro: {
                    required: true,
                },

                variable_nombre:{
                  required: true,
                },

                variable_descripcion:{
                   required: true,
                },

                variable_min:{
                   required: true,
                   minlength: 1,
                   maxlength: 3,
                   numeric: true,
                },
                 variable_max:{
                   required: true,
                   minlength: 1,
                   maxlength: 5,
                   numeric: true,
                },

               index_g:{
                   required: true,
                   minlength: 1,
                   maxlength: 3,
                   numeric: true,
                },

                ir_operador:{
                   required: true,
                },
                calificacion_operador:{
                     required: true,
                },
                ir_tolerancia:{
                    required: true,
                },
                calificacion_tolerncia:{
                   required: true,
                },
                variable_max_prog:{
                   required: true,
                },
                calificacion_texto_pos:{
                    required: true,
                },
                calificacion_texto_neg:{
                    required: true,
                },
                operacion_resultado:{
                   required: true,
                },
            },

            messages: {

                variable_macro: {
                    required: "El campo variables macro es obligatorio"
                },

                 variable_nombre: {
                    required: "El campo variables Nombre es obligatorio"
                },

                  variable_descripcion:{
                   required: "El campo  descripcion  es obligatorio "
                },

                variable_min:{
                    required: "El campo número de animales es obligatorio",
                    minlength: "El campo número de animales no puede tener menos de 1 caracteres",
                    maxlength: "El campo número de animales no puede tener más de 3 caracteres",
                    numeric: "El campo número de animales solo permite el ingreso de números"
                },

                 variable_max:{
                   required: "El campo número de animales es obligatorio",
                    minlength: "El campo número de animales no puede tener menos de 1 caracteres",
                    maxlength: "El campo número de animales no puede tener más de 3 caracteres",
                    numeric: "El campo número de animales solo permite el ingreso de números"
                },

                index_g:{
                   required: "El campo número de animales es obligatorio",
                    minlength: "El campo número de animales no puede tener menos de 1 caracteres",
                    maxlength: "El campo número de animales no puede tener más de 3 caracteres",
                    numeric: "El campo número de animales solo permite el ingreso de números"
                },

                ir_operador:{
                   required: "El campo es obligatorio",
                },
                calificacion_operador:{
                  required: "El campo es obligatorio",
                }, 
                ir_tolerancia:{
                   required: "El campo es obligatorio",
                },
                calificacion_tolerncia:{
                    required: "El campo es obligatorio",
                },
                variable_max_prog:{
                   required: "El campo es obligatorio",
                },
                calificacion_texto_pos:{
                   required: "El campo es obligatorio",
                },

                calificacion_texto_neg:{
                   required: "El campo es obligatorio",
                },
                operacion_resultado:{
                   required: "El campo es obligatorio",
                },
            },

            submitHandler: function(form) {
                if (confirm('¿Esta seguro de continuar?')) {
                    form.submit();
                }
            }
        }); 
    });
});
