import 'styles/global.scss';
import PasswordGenerator from 'components/PasswordGenerator/PasswordGenerator.tsx';

function App() {
  return (
    <>
      <header className={'header'}></header>
      <main className={'page-content'}>
        <p className={'disclaimer'}>
          Our readers help us create quality content. If you purchase via links on our site, we may
          receive affiliate commissions. <a href={'/'}>Learn more</a>
        </p>
        <section className={'password-generator-section'}>
          <h1>Generate strong passwords</h1>
          <p>Upgrade the security of your online accounts.</p>
          <p>Create strong passwords that are completely random and impossible to guess.</p>
          <div className={'password-generator-wrapper'}>
            <PasswordGenerator />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
