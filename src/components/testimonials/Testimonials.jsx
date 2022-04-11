import './testimonials.scss'

export default function Testimonials() {
  const data = [
    {
      id:"1",
      name:"Christian",
      title:"TI Manager",
      img:"https://comoequetala.com.br/images/com_vagasejobs/usuarios/foto/50626-600x600_4861d8858f4048d80f135e04b31470d7.jpg",
      icon:"assets/instagram_icon.png",
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae magnam sit qui alias cumque laudantium enim esse minus ratione quisquam."
    },
    {
      id:"2",
      name:"Matheus",
      title:"CEO Manave",
      img:"https://storage.alboom.ninja/sites/2851/albuns/427514/2019.04.03_-_Fotos_Perfil_Profissional_Carlo__55_de_68_.jpg?t=1556218040",
      icon:"assets/linkedin.png",
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae magnam sit qui alias cumque laudantium enim esse minus ratione quisquam.",
      featured:true
    },
    {
      id:"3",
      name:"Carlos",
      title:"Dev Pleno",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwr_zZjgvmu4BccwDNIHic8K5dyehw7cSYA&usqp=CAU",
      icon:"assets/youtube.png",
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae magnam sit qui alias cumque laudantium enim esse minus ratione quisquam."
    }
  ]
  return (
    <div className='testimonials' id='testimonials'>
      <div className='title'>Testimonials</div>
        <div className="container">

          {data.map((d)=>(

          <div className={d.featured? "card featured": "card"}>
            <div className="top">
              <img src="https://www.imagensempng.com.br/wp-content/uploads/2020/12/002-5.png" className="left" alt="" />
              <img src={d.img} className="user" alt="" />
              <img src={d.icon} className="rigth" alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
           ))}
        </div>
    </div>
  )
}
