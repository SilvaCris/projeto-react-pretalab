
import axios from 'axios'
import { useState, useEffect } from 'react'
import newsImg from '../../assets/news.svg'
import styles from './noticias.module.css'


const Noticias = ()=> {

const [noticias, setNoticias] = useState([])
const pageSize = 8

useEffect (() => {
    const fetchNews = async () => {

        try{
            const apiKey = import.meta.env.VITE_NEWS_API_KEY;
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=br&pageSize=${pageSize}&apiKey=${apiKey}&category=technology`)
            setNoticias(response.data.articles)
        } catch(error){
            console.error('erro ao carregar noticias:', error)
        }

    }

    fetchNews()
}, [pageSize])

return (
    <div >
        <div className={styles.header}>

<h1 >
    Fique por dentro das últimas noticias sobre tecnologia
</h1>
<img src={newsImg} />
</div>
        
      <ul>
        {noticias.map((article, index) => (
          <li key={index} className={styles.newsItem}>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.newsTitle}>{article.title}</a>
            <p className={styles.newsDescription}>{article.description}</p>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} className={styles.newsImage} />}
          </li>
        ))}
      </ul>
    </div>
  )



}

export default Noticias