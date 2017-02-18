import React from 'react'
import Card from '../components/Card'

const gameData = [
{id: 1, name: 'Gregor' ,gender: 'Male', hair: 'Blonde'},
{id: 2, name: 'Will' ,gender: 'Male', hair: 'Ginger'},
{id: 3, name: 'Tegan' ,gender: 'Female', hair: 'Blonde'},
{id: 4, name: 'Claire' ,gender: 'Female', hair: 'Brown'},
{id: 5, name: 'Jeff 3' ,gender: 'Male', hair: 'Brown'}
];

console.log (gameData[0].name)
class GuessWhoContainer extends React.Component{


render (){
    return (
      <div className="game-box">
        <h1>Cohort8</h1>
        <Card obj={gameData[0]}/>
        <Card obj={gameData[1]}/>
        <Card obj={gameData[2]}/>
        <Card obj={gameData[3]}/>
      </div>
    )
  }
}         

export default GuessWhoContainer