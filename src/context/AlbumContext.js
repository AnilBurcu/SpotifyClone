import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

export const AlbumContext = createContext();

export const AlbumProvider = ({children}) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: 'hadise',
        type: 'albums',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5',
      },
      headers: {
        'x-rapidapi-key': 'acd257a390mshc36fbf0e17b4a24p198b66jsnf222ca17be11',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const albumItems = Array.isArray(response.data?.albums?.items)
        ? response.data.albums.items.map(item => ({
            uri: item.data.url,
            name: item.data.name,
            year: item.data.date.year,
            artist: item.data.artists?.items?.[0]?.profile?.name,
            coverArt: item.data.coverArt?.sources?.[0]?.url,
          }))
        : [];

      setAlbums(albumItems);
      console.log(albumItems);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    fetchData();
  }, []);

  return (
    <AlbumContext.Provider value={{albums, loading, error}}>
      {children}
    </AlbumContext.Provider>
  );
};
