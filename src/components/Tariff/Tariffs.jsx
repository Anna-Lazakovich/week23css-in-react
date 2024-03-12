import styles from './Tariffs.css';
import tariffInfo from './tariffInfo.json';

function Tariff (item) {
  console.log(styles);
  return (
    <div className="tariff">
      <p className={`title ${item.color}`}>{item.title}</p>
      <div className={`price ${item.color}`}>руб. <span className='price-number'>{item.price}</span> /мес.
      </div>
      <div className="speed">{item.speed}
      </div>
      <div className="description">{item.description}
      </div>
    </div>
  )
}

function Tariffs() {
  return(
    <div className="container">
      {tariffInfo.map(Tariff)}
    </div>
  );
}  
    
export default Tariffs;