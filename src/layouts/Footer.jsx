import { Link } from 'react-router-dom';

export default function Footer({ data }) {
   return (
      <>
         <footer>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/stories">Stories</Link>
               </li>
               <li>
                  <Link to="/features">Features</Link>
               </li>
               <li>
                  <Link to="/pricing">Pricing</Link>
               </li>
            </ul>
         </footer>
      </>
   );
}
