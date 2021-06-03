import MangaList from '../components/mangas/MangaList'

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://tumanga.net/wp-content/uploads/23712_TMOManga58f9b5beb7b63-3294.jpg',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91dhxPo6lPL.jpg',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllMangas(){
    return <section>
        <h1>Todos los Mangas</h1>
        <MangaList mangas={DUMMY_DATA} />
    </section>
}

export default AllMangas;