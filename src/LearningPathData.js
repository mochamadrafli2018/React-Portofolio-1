// Import image
import img1 from './picture/img-1.jpg';
import img2 from './picture/img-2.jpg';
import img3 from './picture/img-3.jpg';
import AccordionOutput from './Bootstrap-Accordion.js'

let LearningPathData = [
  {
    Id:1,
    title:'Instalasi React Js dan Pengenalan JSX',
    tingkat : 'Basic',
    keterangan:'Pelajari cara instalasi React Js melalui CMD dan mulai buat web apps statik milikmu',
    img:img1,
    link:'./path-1',
    url:'https://react-bootstrap.github.io/getting-started/introduction' 
  },
  {
    Id:2,
    title:'React.Js Data Binding ',
    tingkat:'Intermediate',
    keterangan:'Buat tampilan UI website statis dengan program yang minimalis melalui fitur data binding',
    img:img2,
    link:'/path-2',
    url:'https://github.com/'
  },
  {
    Id:3,
    title:'React.Js CRUD',
    tingkat:'Advanced',
    keterangan:'Integrasi React dengan API, pengenalan web dinamis dan latihan membuat CRUD sederhana',
    img:img3,
    link:'',
    url:AccordionOutput
  }
]
export default LearningPathData