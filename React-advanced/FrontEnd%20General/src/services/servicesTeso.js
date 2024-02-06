export default {

    Ambient: "Dev",
    tokeIDI: 1,
    API: {
        Auth: {
            login_local: "localhost:4000",
            ApiAutenticacion_Autorizacion: "http://10.161.252.102:1002/ApiAutenticacion_Autorizacion/FN",
            ApiAutenticacion_Validacion: "http://10.161.252.102:1002/ApiAutenticacion_Validacion/FN",
            ApiAutenticacion_Usuario_Listar: "http://10.161.252.102:1002/ApiAutenticacion_Usuario_Listar/FN",
            ApiAutenticacion_Usuario_Obtener: "http://10.161.252.102:1002/ApiAutenticacion_Usuario_Obtener/FN",
            ApiAutenticacion_Usuario_Actualizar: "http://10.161.252.102:1002/ApiAutenticacion_Usuario_Actualizar/FN",
        },
        Campos: {
            Api_Core_Mant_Campos_Listar: "http://10.161.252.104:3000/Api_Core_Mant/Api_Core_Mant/Campos/GetCampos?campId=0",
            Api_Core_Mant_Campos_Obtener: "http://10.161.252.104:3000/Api_Core_Mant/Api_Core_Mant/Campos/GetCampos?campId=",
            Api_Core_Mant_Campos_Actualizar: "http://10.161.252.104:3000/Api_Core_Mant/Api_Core_Mant/Campos/SaveCampo",
            Api_Core_Mant_Campos_Eliminar: "http://10.161.252.104:3000/Api_Core_Mant/Api_Core_Mant/Campos/DeleteCampo",
        },
    }
}