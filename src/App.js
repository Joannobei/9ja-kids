import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/cardlist.component';
import SearchBox from './components/search-box/search-box.component';
import Button from './components/filters/button.comonent';
import Banner from './components/Banner/banner';
import Navigation from './components/navigation/nav';
import Newsletter from "./components/Newsletter/newsletter.js";
import Footer from './components/footer/footer';


const monsters = [{ "GameTitle": "Before and After", "GameDescription": "Before and After Yr 2 (prefix and suffix)", "Topic": "Word Works and Spelling", "Group": "Academic", "Level": "Key Stage 1", "Subject": "English", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Before and After" }, { "GameTitle": "Communication", "GameDescription": "Communication Yr 2 (different ways we can communicate)", "Topic": "Social Studies", "Group": "Academic", "Level": "Key Stage 1", "Subject": "Social Studies", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Communication" }, { "GameTitle": "Kiddiepreneur 101", "GameDescription": "Kiddiepreneur 101 (Intro to Earning and Spending)", "Topic": "Financial Literacy", "Group": "Financial Literacy", "Level": "Financial Literacy", "Subject": "Financial Literacy", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Kiddiepreneur 101" }, { "GameTitle": "Money Matters", "GameDescription": "Money Matters (Intro to Key Financial Terms)", "Topic": "Financial Literacy", "Group": "Financial Literacy", "Level": "Financial Literacy", "Subject": "Financial Literacy", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Money Matters" }, { "GameTitle": "Maths Pop", "GameDescription": "Maths Pop (writing numbers in word, sequencing & ordinal numbers)", "Topic": "Number Sense", "Group": "Academic", "Level": "Key Stage 1", "Subject": "Mathematics", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Maths Pop" }, { "GameTitle": "Exploring Life", "GameDescription": "Exploring Life KS", "Topic": "Living Things & Non-Living Things", "Group": "Academic", "Level": "Key Stage 1", "Subject": "Science", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Exploring Life" }, { "GameTitle": "Mathsmania City - Decimals", "GameDescription": "Mathsmania City - Decimal", "Topic": "Decimals, Fractions & Percentage", "Group": "Academic", "Level": "Key Stage 2", "Subject": "Mathematics", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Mathsmania City - Decimals" }];
const allGroups = ['All Levels and Groups', ...new Set(monsters.map(monster => monster.Group))]

const App = () => {
  const [searchField, setsearchField] = useState('');
  const [monsters, setmonsters] = useState([{ "GameTitle": "Before and After", "GameDescription": "Before and After Yr 2 (prefix and suffix)", "Topic": "Word Works and Spelling", "Group": "Academic", "Level": "Key Stage 1", "Subject": "English", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Before and After" }, { "GameTitle": "Communication", "GameDescription": "Communication Yr 2 (different ways we can communicate)", "Topic": "Social Studies", "Group": "Academic", "Level": "Key Stage 1", "Subject": "Social Studies", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Communication" }, { "GameTitle": "Kiddiepreneur 101", "GameDescription": "Kiddiepreneur 101 (Intro to Earning and Spending)", "Topic": "Financial Literacy", "Group": "Financial Literacy", "Level": "Financial Literacy", "Subject": "Financial Literacy", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Kiddiepreneur 101" }, { "GameTitle": "Money Matters", "GameDescription": "Money Matters (Intro to Key Financial Terms)", "Topic": "Financial Literacy", "Group": "Financial Literacy", "Level": "Financial Literacy", "Subject": "Financial Literacy", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Money Matters" }, { "GameTitle": "Maths Pop", "GameDescription": "Maths Pop (writing numbers in word, sequencing & ordinal numbers)", "Topic": "Number Sense", "Group": "Academic", "Level": "Key Stage 1", "Subject": "Mathematics", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Maths Pop" }, { "GameTitle": "Exploring Life", "GameDescription": "Exploring Life KS", "Topic": "Living Things & Non-Living Things", "Group": "Academic", "Level": "Key Stage 1", "Subject": "Science", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Exploring Life" }, { "GameTitle": "Mathsmania City - Decimals", "GameDescription": "Mathsmania City - Decimal", "Topic": "Decimals, Fractions & Percentage", "Group": "Academic", "Level": "Key Stage 2", "Subject": "Mathematics", "GameImage": "https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Mathsmania City - Decimals" }]);
  const [filteredGames, setfilteredGames] = useState(monsters);
  const [buttons, setbuttons] = useState(allGroups);



  useEffect(() => {
    const newfilteredGames = monsters.filter((monster) => {
      return monster.GameTitle.toLocaleLowerCase().includes(searchField);
    });

    setfilteredGames(newfilteredGames)
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldstring = event.target.value.toLocaleLowerCase()
    setsearchField(searchFieldstring)

  }

  const filterFunc = (button) => {

    if (button === 'All Levels and Groups') {
      setfilteredGames(monsters);
      return;
    }

    const filteredgrouping = monsters.filter(monster => monster.Group === button);
    setfilteredGames(filteredgrouping)
  }



  https://jsonplaceholder.typicode.com/users

  return (

    <div>
      <Navigation />
      <Banner />
      <h2 className='app-title text-center'> 9jakids Game Catalog</h2>
      <div className='d-flex justify-content-center '>
        <SearchBox
          onChangehandler={onSearchChange}
          placeholder='search games'
          className=' game search-box' />
        <Button filter={filterFunc} button={buttons} />
      </div>
      <CardList monsters={filteredGames} />
      <Newsletter />
      <Footer />




    </div>
  )

}
// useEffect (() =>  {
//   fetch('http://bit.ly/TeaserTask', {
//     mode: 'no-cors'
//   },
//     {
//       headers:
//       {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//       }
//     })
//     .then((response) => response.json())
//     .then((users) => setMonsters(users);
// }, []) 

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase()

//   this.setState(() => {
//     return { searchField }
//   })

// }

// grouping = (button) => {
//   const filteredgrouping = monsters.filter((monster) => {
//     return monsters.Group === button;

//     this.setState(() => {
//       return { filteredgrouping }

//     })
//   })
// }


// render() {

// const { monsters, searchField } = this.state;
// const { onSearchChange } = this;

// const filteredGames = monsters.filter((monster) => {
//   return monster.GameTitle.toLocaleLowerCase().includes(searchField);
// });

// const filteredSubject = monsters.filter((monster) => {
//   return monster.Subject.toLocaleLowerCase().includes(searchField);
// });

// const filteredLevel = monsters.filter((monster) => {
//   return monster.Level.toLocaleLowerCase().includes(searchField);
// });

// const filteredTopic = monsters.filter((monster) => {
//   return monster.Topic.toLocaleLowerCase().includes(searchField);
// });


// const filtersReducerDefaultState = {
//   sortBy: 'level'};

// return (
// <div className="App">



{/* <h1 className='app-title'> 9jakids Game Catalog</h1> */ }

{/* <button type='button' onClick={() => grouping('Tips')}> Group </button> */ }

{/* {filteredGames.map((monsters) => {
          return (
            <h1 key={monsters.GameTitle}> {monsters.GameTitle}</h1>)
        })} */}
// <SearchBox
//   onChangehandler={onSearchChange}
//   placeholder='search games'
//   className=' game search-box' />
// <CardList monsters={filteredGames} topicList={filteredTopic} levelList={filteredLevel} subjectList={filteredSubject} />


//   </div>
// );
// }

// }

export default App;
