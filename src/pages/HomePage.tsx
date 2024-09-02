import FilmeLIst from "../components/FilmList";

function Home(){
    return(
        <div className='text'>
            <h1>Gerenciamento de Filmes</h1>
            <FilmeLIst/>
        </div>
    );
}

export default Home;