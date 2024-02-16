import { useState, useEffect } from 'react'
import { FiTrash2, FiPlus } from 'react-icons/fi'
import { nanoid } from 'nanoid'
import comentImg from '../../assets/coments.svg'
import styles from './Comentarios.module.css'

const Comentarios = () => {
  const getLocalList = () => {
    let items = localStorage.getItem('list')
  
    if (items) {
      return JSON.parse(localStorage.getItem('list'))
    } else {
      return []
    }
  }

 
  const [newRate, setNewRate] = useState(1) 
  const [newComment, setNewComment] = useState('')
  const [list, setList] = useState(getLocalList)

  function handleCreateNewComment() {
    const comment = {
      id: nanoid(),
      rate: newRate,
      content: newComment,
      isComplete: false
    }

    if (comment.content === '') {
      return
    }

    setList([...list, comment])
    setNewComment('')
    setNewRate(1)
  }

  function handleRemoveComment(id) {
    const commentsFiltered = list.filter(comment => comment.id !== id)
    setList(commentsFiltered)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <>
      <div className={styles.header}>
        <h1>
         Conte pra gente o que achou desse projeto
        </h1>
        <img src={comentImg} />
      </div>
      
      <div className={styles.rateContainer}>
      <h3>
         Avalie esse projeto com uma nota de 1 a 5
        </h3>
        <input 
          className={styles.rateInput}
          type="range" 
          min="1" 
          max="5" 
          value={newRate} 
          onChange={(event) => setNewRate(parseInt(event.target.value))} 
        />
        <span>{newRate}</span> 
      </div>
      <div className={styles.inputContainer}>
      <h3>
         Deixe abaixo seu comentário
        </h3>
        <input 
          className={styles.input}
          type="text" 
          placeholder="Digite aqui" 
          onChange={(event) => setNewComment(event.target.value)}
          value={newComment}
        />
        <div className={styles.addContainer}>
          <button className={styles.addComment} type="submit" onClick={handleCreateNewComment}>
            <FiPlus className={styles.estiloIcon}/>
          </button>
        </div>
      </div>
    
      <main>
        <ul className={styles.listItems}>
          {list.map(comment => {
            return(
              <li key={comment.id}>
                <div>
                  <p><b>Comentário:</b> {comment.content}</p>
                  <p><b>Nota:</b> {comment.rate}</p> 
                </div>
                <button className={styles.removeComment} type="button" data-testid="remove-task" onClick={() => handleRemoveComment(comment.id)}>
                  <FiTrash2 className={styles.estiloIcon}/>
                </button>
              </li>
            )
          })}
        </ul>
      </main>
    </>
    
  )
}

export default Comentarios
