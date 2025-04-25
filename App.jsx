import {AlbumProvider} from './src/context/AlbumContext';
import Routes from './src/navigation/Routes';

const App = () => {
  return (
    <AlbumProvider>
      <Routes />
    </AlbumProvider>
  );
};

export default App;
