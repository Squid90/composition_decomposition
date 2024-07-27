/**
 * Главный компонент приложения, объединяющий все другие компоненты для отображения главной страницы.
 */

import './App.css'
import {Header} from './components/Header';
import {Sidebar} from './components/Sidebar';
import {SearchBar} from './components/SearchBar';
import {Main} from './components/Main';


function App() {


  return (
    <>
    <div className='mainContainer'>
      <Sidebar />
        <div className='container'>
          <Header></Header>
          <SearchBar></SearchBar>
          <Main></Main>
        </div>
    </div>
    </>
  )
}

export default App
