import 'bootstrap/dist/css/bootstrap.min.css'
import '/public/assets/css/smart.css'
import '/public/assets/css/style.css'

function MyApp({ Component, pageProps }) {
  return  <rankingPlayers>
            <Component {...pageProps} />
          </rankingPlayers>

}
export default MyApp;
