import "../styles/App.css";
import sn from '../img/sn.jpg'; // with import

export default function Sticky(props)  {
    // const { text} = props;
  return (
    <article >

      <div class="gfg">
        <img src={sn} className="img"/>
        <h3 class="first-txt">
        {props.text}
        </h3>
       </div>
    </article>
  );
};

