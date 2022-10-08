import React,{useState ,useEffect} from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import db from "../firebase"
import { setMovies} from "../features/movie/movieSlice"
import { selectUserName } from '../features/userSlice'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import { NewDisney } from './NewDisney'
import { Originals } from './Originals'
import { Recommends } from './Recommends'
import { Trending } from './Trending'
import { Viewers } from './Viewers'
import { collection, query ,onSnapshot  ,doc, arrayRemove} from 'firebase/firestore'


const Home =  ()  => {

const dispatch = useDispatch();
const userName = useSelector(selectUserName)

const [allMovies,SetMovies] = useState([])
let recommends =[];
let newDisneys =[];
let originalss =[];
let trendings =[];

useEffect(() => {

 const q = query(collection(db ,'movies'));
 onSnapshot(q,(QuerySnapshot)=>{
  QuerySnapshot.docs.map(d=> allMovies.push(d.data()))
})
 dispatch(setMovies({
    recommend: recommends,
    newDisney: newDisneys,
    originals: originalss,
    trending: trendings,
 }))
}, [userName])
console.log(allMovies)
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )


}
const Container = styled.main`
background: url("./images/home-background.png");
width: 100%;
overflow: hidden;
background-size: cover;
background-repeat: no-repeat;
min-height: calc(100% - 250px);
position: relative;
top: 80px;
padding-right:calc(2.5vw + 5px) ;
padding-left:calc(2.5vw + 5px) ;
background-position: bottom;
background-attachment: fixed;
`

export default  Home;