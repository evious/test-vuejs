# Reporte de test 
# Debe consultar el API de frutas para traerse los datos a mostrar en pantalla
para consutar dicha api cree un modulo indenpendiente llamado request/fruits.ts el cual tiene la url base del api
y consulta un metodo creado para los request https().get fecth y es facil de cambiar para usar cualquier otro ejemplo axios.

# Debe construir el componente desde cero (no use librerias de componentes)
como no se podia usar ningun componente prefabricado decidi trabajar el select & search basado en un conjunto de div e input para realizar la busqueda de las frutas el cual contiene algunos eventos @input

# Debe coincidir con el estilo del diseño de Figma
me guie por el diseño de figma en su mayoria agregue style css libre y me apoye de la libreria bulma para importar ciertos style utiles, use sass para importar bulma. 

# Debe ser reusable, abierto para la extensión
el componente principal es src\components\elements\select.vue el cual es un select reutilizable para mostrar y filtrar busquedas sin restrinciones de que solo sea de las frutas. el select recibe props ["options"] el cual nos posibilita pasar los parametros deseados.


# Para la logica principal de la busqueda 
use un filter javascript para buscar en el arreglo ya que solo eran 80 valores y los resultados son rapidos.

# use de librerias externas
para el desarrollo no use muchas librerias externas ya que el caso no lo ameritaba
vue3-click-outside para lograr cerrar el div cuando presionaba fuera del area fue la mejor solucion que encontre para el problema.
bulma para los styles css necesarios.


# para los test
tuve ciertos problemas generados en mi equipo local con respecto a configuracion que me retraso un poco lograrlos
usando:
# vitest
# jest
# vue/test-utils
