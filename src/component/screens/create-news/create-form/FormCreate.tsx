import { FC } from 'react'

const FormCreate: FC = () => {
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