import React, { useState, useEffect } from 'react'
import GridList from '@material-ui/core/Grid'
import NewsCard from '../card/Card'
import { makeStyles } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,

    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Dashboard() {

    const classes = useStyles();
    const [state, setState] = useState({ news: [] })

    useEffect(() => {

        fetch('http://newsapi.org/v2/top-headlines?country=in&apiKey=fc287ba1af2e4a0290253b521cc34bf4')
            .then(res => res.json())
            .then(data => setState({ news: data.articles }));
    }, []);

    const { news } = state;

    const OnReadLaterClick = (id: any) => {
        // n
        let newsToBeReadLater = news.find((newsCard: any) => newsCard.source.id === id);
        fetch('http://localhost:3001/profile', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(newsToBeReadLater)
        }).then(res => console.log(res.json()));
    }

    const list = news.map((item: any) =>
        <NewsCard id={item.source.id}
            title={item.title} 
            img={item.urlToImage}
            author={item.author}
            description={item.description}
            key={item.id} ReadClick={OnReadLaterClick} news={item}></NewsCard>
    )

    return (
        <div>
            <GridList>
                {list}
            </GridList>
        </div>
    )

}

