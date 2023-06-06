import { useTitle } from './hooks/useTitle'
import { Image } from './components/Image'
import { Accordion } from './accordion/Accordion';
import './App.css'

function App() {

  useTitle()

  return (
    <>
      <main>
        <div className='container'>
          <Image />
          <div className='container__faq'>
            <h1 className='title'>FAQ</h1>
            <div>
              <Accordion />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
