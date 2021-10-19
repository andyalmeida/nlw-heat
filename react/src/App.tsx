import style from './App.module.scss';
import { LoginBox } from './components/LoginBox';

export function App() {
  return (
    <main className={style.contentWrapper}>
      <LoginBox />
    </main>
  )
}
