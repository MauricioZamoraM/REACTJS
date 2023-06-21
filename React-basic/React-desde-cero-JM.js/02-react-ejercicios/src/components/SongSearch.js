import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null); // variable de estado de la busqueda del formulario
  const [lyric, setLyric] = useState(null); // variable de estado para guardar la cancion
  const [bio, setBio] = useState(null); // variable de estado para guardar la biografia del cantante
  const [loading, setLoading] = useState(false); // variable de estado del loader

  useEffect(() => { // Este efecto va a estar esperando la respuesta de las 2 apis
    if (search === null) return; // si search es null, retorna, para estar evitando renderizados innecesarios.

    const fetchData = async () => {
      const { artist, song } = search; // destructuramos las 2 variables del objeto search.
      // Creamos una variable que va a apuntar hacia el endpoint para obtener la info de la api
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`; // Los parametros deben de ser dinamicos por eso se mandan a llamar de esta forma, dependiendo des artista asi es la data que recibimos.

      //console.log(artistUrl, songUrl);

      setLoading(true); // Mostramos el loader mientras hacemos las peticiones fetch.
      // El metodo promise.all recibe un arreglo con todas las peticiones fetch que nosotros queramos hacer
      // en este caso las vamos guardando en variables dinamicamente gracias a la destructuracion de arreglos.
      const [artistRes, songRes] = await Promise.all([ 
        helpHttp().get(artistUrl), // la respuesta de esta promesa se guarda en la primera variable
        helpHttp().get(songUrl), // la respuesta de esta promesa se guarda en la segunda variable. En el orden que se declaren asi se van guardando.
      ]);

      //console.log(artistRes, songRes);

      setBio(artistRes); //Guadarmos la informacion del artista que viene dentro de la respuesta de la promesa
      setLyric(songRes); //Guadarmos la letra de la cancion que viene dentro de la respuesta de la promesa
      setLoading(false); // Ocultamos el loader luego que terminan de hacerce las peticiones.
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => { // Esta funcion es el que va a manejar los datos del formulario de la busqueda.
    //console.log(data);
    setSearch(data); // Actualizamos la variable search con la infor que viene del formulario.
  };

  return (
    <div>
      <h2>Song Search</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
         {loading && <Loader />}  {/* si loading es verdadero se debe mostrar el loader */}
         {/* Mientras que search traiga datos y loading sea falso, renderizas SonDetails, para que al inicio no este*/}
        {search && !loading && ( 
          <SongDetails search={search} lyric={lyric} bio={bio} />
        )}
      </article>
    </div>
  );
};

export default SongSearch;
