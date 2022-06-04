import React from 'react';
import { useParams } from 'react-router-dom';
import { SubChapterData } from './SubChapterData';
import './SubChapter.css';
import Comment from '../Comment';

function SubChapter(props){
  let { subchapter } = useParams();
  var lol = SubChapterData.map((x, y) => {
    console.log(x.checkpoint);
    console.log("ini sub " + subchapter);
    if(x.checkpoint == subchapter){
      console.log("yey")
      var lol2 = x.val.map((item ,index) => {
        console.log(item)
        if(item.type == "h1"){
          return <h1>{item.val}</h1>
        } else if(item.type == "h2"){
          return item.val.map((a, i) => <h2>{a}</h2>)
        } else if(item.type == "p"){
          return item.val.map((a, i) => <p>{a}</p>)
        } else if(item.type == "img"){
          return item.val.map((a, i) => <img src={a.src} alt={a.sub} />)
        } else if(item.type == "ul"){
          return (<ul>{item.val.map((a, i) => <li>{a}</li>)}</ul>)
        } else if(item.type == "vid"){
          return item.val;
        }else if(item.type == "quiz"){
          var temp = item.val.map((a, i) => {
            console.log("ini adalah " + a.question)
            if(a.type == "pg"){
              var text = <p>{a.question}</p>;
              var text2 = <ul>{a.val.map((x, i) => <li>{x}</li>)}</ul>;
              return [text, text2]
            } else if(a.type == "yrn"){
              var text = <p>{a.question}</p>;
              var text1 = <ul>{a.statement.map((x, i) => <li>{x}</li>)}</ul>
              var text2 = <ul>{a.val.map((x, i) => <li>{x}</li>)}</ul>;
              return [text, text1, text2]
            }
          })
          return temp;
        }
      })
      return lol2;
    }
  })
  console.log(lol)
  return(
    <div className="material-rendered" style={{width: "90%", margin:"1rem auto", overflow: "auto"}}>
      {
        lol.map((item) => item)
      }
      <Comment />
    </div>
  )
}

export default SubChapter;
