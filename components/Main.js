 import styles from '../styles/Home.module.css'
import { Links } from "./Links"
import { Headline } from './Headline'

export function Main(props) {
  return (
    <div>
      <main className={styles.main}>
        <Headline page={props.page} >
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <Links />
      </main>
    </div>
  )
}
