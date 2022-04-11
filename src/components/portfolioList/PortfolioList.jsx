import { featured, webApp, mobileApp, desing, contend } from '../../data'
import { useState } from 'react'
import './portfolioList.scss'
import { useEffect } from 'react'

export default function PortfolioList(title) {
  const [select, setSelect] = useState('feature')
  const [data, setData] = useState(featured)

  const list = [
    { id: 'feature', title: "Feature" },
    { id: 'web', title: "Web App" },
    { id: 'mobile', title: "Mobile App" },
    { id: 'desing', title: "Desing" },
    { id: 'contend', title: "Contend" },
  ]

  useEffect(() => {
    switch (select) {
      case "feature":
        setData(featured);
        break;
      case "web":
        setData(webApp);
        break;
      case "mobile":
        setData(mobileApp);
        break;
      case "desing":
        setData(desing);
        break;
      case "contend":
        setData(contend);
        break;
      default:
        setData(featured)
    }
  }, [select])
  return (
    <div className='portfolioList'>
      <ul>
        {list.map(item => (
          <li
            className={select === item.id ? 'active' : ''}
            onClick={() => setSelect(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}


      </div>
    </div>


  )
}
