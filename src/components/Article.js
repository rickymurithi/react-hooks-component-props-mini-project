import React from 'react'

function Article({title, date = "Feb 28, 1990" preview, minutes}) {

    let takes =""
    let i=0;
    if (minutes > 30) {
        while (i<minutes/10) {takes =takes + "";
    i++;
    }
    } else{
        while(i< minutes/5) {
            takes =takes +"";
            i++;
        }
    }

  return (
    <article>
        <h3>{title}</h3>
        <small>{date} {takes} {minutes} minutes min read</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article;