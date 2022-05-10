import Accordion from "../components/accordion/accordion";
import Cards from "../components/cards/card";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Slider from "../components/slider/slider";

const database = [{
  id: 1,
  name: 'Naruto Uzumaki',
  power: 'Nine tails',
  village: 'Konoha',
  level: '7th Hokage',
  clan: 'Uzumaki',
  elements: 'air',
  image: 'https://pa1.narvii.com/7422/b16cfd8029b2e6a4ec1764b3644e9396fa8d209dr1-480-270_hq.gif'
},
{
  id: 2,
  name: 'Sasuke Uchiha',
  power: 'Rinnegan + MS',
  village: 'Konoha',
  level: 'Shadow Hokage',
  clan: 'Uchiha',
  elements: 'lightning',
  image: 'https://i.pinimg.com/originals/71/48/c8/7148c82838437c6d8ad478848e68d482.gif '
},
{
  id: 3,
  name: 'Kakashi Hatake',
  power: 'Purple Chidori + MS',
  village: 'Konoha',
  level: '6th Hokage',
  clan: 'White Claw',
  elements: 'lightning',
  image: 'https://thumbs.gfycat.com/TotalOptimalAmericantoad-size_restricted.gif'
},
{
  id: 4,
  name: 'Minato Namikaze',
  power: 'Rasengan + Yellow flash Fuuijin',
  village: 'Konoha',
  level: '4th Hokage',
  clan: 'Namikaze',
  elements: 'yellow light',
  image: 'https://thumbs.gfycat.com/SaltyLateBasil-size_restricted.gif'
},
{
  id: 5,
  name: 'Itachi Uchiha',
  power: 'MS + Genjutsu',
  village: 'Konoha',
  level: 'Unlimited',
  clan: 'Akatsuki',
  elements: 'air',
  image: 'https://media0.giphy.com/media/CchzkJJ6UrQmQ/giphy.gif'
},
{
  id: 6,
  name: 'Madara Uchiha',
  power: 'MS + Six Path',
  village: 'Konoha',
  level: 'Destroyer',
  clan: 'Akatsuki',
  elements: 'susano',
  image: 'https://media1.tenor.com/images/fe60d20d14d53b4e0929b0a0b17c0781/tenor.gif?itemid=17049380'
},
]

export default function Layout(){
  return (
    <div>
      {/* header */}
      <Header />
      {/* Banner slider */}
      <Slider />
      {/* Accordion about anime */}
      <Accordion/>
      {/* cards */}
      <div className="container">
        <div className="d-flex flex-wrap justify-content-around">
          {
            database.map(item => (
              <Cards key={item.id} post={{ id: item.id, name: item.name, url: item.image }} />
            ))
          }
        </div>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  )
}