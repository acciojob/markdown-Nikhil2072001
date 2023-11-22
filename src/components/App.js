import React,{useState} from 'react'
import ReactMarkdown from 'react-markdown';
import '../styles/App.css'
const App = () => {
    const [text,setText] = useState();
  return (
    <div className='app'>
    
        <textarea name='text' id='text' value={text} onChange={(e)=>setText(e.target.value)} className='textarea'></textarea>
        <div className='preview'>
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    </div>
  )
}

export default App