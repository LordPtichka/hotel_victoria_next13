import { FC, MouseEvent, useState } from 'react'

const FormCreate: FC = () => {
  
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
  
    // const createNews = e => { // было так
    const createNews = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => { // исправление от vs code
      e.preventDefault()
  
      console.log({ title, description, image })
  
      setNews(prev => [{id: prev.length + 1, title, description, image, }, ...prev])
    }

  
    return (
    <form>
        <input type="text" placeholder='title'
        onChange={e => setTitle(e.target.value)} value={title}/>
        
        <input type="text" placeholder='description' 
        onChange={e => setDescription(e.target.value)} value={description}/>
        
        <input type="text" placeholder='image' 
        onChange={e => setImage(e.target.value)} value={image}/>
        
        <button onClick={e => createNews(e)} >создать статью</button>
    </form>
  )
}

export default FormCreate